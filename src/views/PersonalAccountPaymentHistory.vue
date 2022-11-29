<template>
  <ion-page>
    <Back />
    <Layout :btnSrc="'/personalAccountPayment'" height="false" outlineBtn="." filledBtn="." title="Лицевые счета">
      <template v-slot:header-content>
        <ion-text class="main-title">История платежей</ion-text>
      </template>
      <template v-slot:main-content>


        <div>
          <ion-grid>
            <ion-row class="ion-row-last">

              <ion-text style="margin: 0 10px 0 0">
                Выберите период:
              </ion-text>
              <div style="display: flex;">
                <ion-datetime-button mode="ios" color="date" datetime="date"></ion-datetime-button>
                <ion-text style="margin: 0 5px;">-</ion-text>

                <ion-datetime-button mode="ios" color="date" datetime="date2"></ion-datetime-button>
              </div>

              <ion-modal mode="ios"  :keep-contents-mounted="true">

                <ion-datetime :show-default-buttons="true" @ionChange="(e) => onBeginDateChange(e)" color="date" presentation="date" mode="ios"
                  id="date">
                </ion-datetime>


              </ion-modal>
              <ion-modal mode="ios" :keep-contents-mounted="true">

                <ion-datetime  :show-default-buttons="true" @ionChange="(e) => onEndDateChange(e)" color="date" presentation="date" mode="ios"
                  id="date2">
                </ion-datetime>
              </ion-modal>
            </ion-row>

          </ion-grid>
          <ion-row>
            <ion-col>Чеки</ion-col>
            <ion-col>Дата</ion-col>
            <ion-col>Сумма</ion-col>

          </ion-row>
          <ion-item v-show="this.$pinia.state.value?.personalAccount?.paymentHistoryResponse
          ?.data?.length === 0 && !loading">
            <ion-text>У №{{ this.$pinia.state.value?.personalAccount?.personalItemData?.code }} лицевого счета нет
              платежей</ion-text>
          </ion-item>
          <ion-item v-show="loading" lines="none">
            <ion-spinner name="bubbles" />
          </ion-item>
          <div v-show="this.$pinia.state.value?.personalAccount?.paymentHistoryResponse
          ?.data[0]?.payments?.length > 0 && !loading" v-for="el in paymentHistory" :key="el">
            <ion-row :class="{
              'ion-row-last':
                paymentHistory[paymentHistory?.length - 1]?.number ===
                el?.number,
            }">
              <ion-col class="sub-title"> {{ el?.number }} </ion-col>
              <ion-col class="sub-title">
                {{ el?.date ? el?.date : "-" }}
              </ion-col>

              <ion-col class="sub-title">{{ maskMoney(el?.summ) }}</ion-col>
              <!--  <ion-col class="sub-title">{{ el?.author }}</ion-col> -->
            </ion-row>
          </div>


        </div>
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import Layout from "../components/Layout.vue";
import {
  IonPage,
  IonText,
  IonSpinner,
  IonCol,
  IonRow,
  IonModal,
  IonDatetime,
  IonDatetimeButton,
  IonGrid,
  IonItem,
} from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
// import LayoutBox from "../components/LayoutBox.vue";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";
import moment from "moment";

export default defineComponent({
  name: "personalAccountPaymentHistory",
  components: {
    Back,
    IonPage,
    Layout,
    IonText,
    // LayoutBox,
    IonModal,
    IonDatetime,
    IonDatetimeButton,
    IonSpinner,
    IonCol,
    IonGrid,
    IonItem,
    IonRow,
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["getPayments"]),
    
    maskMoney(value) {
      const valueAsNumber = value?.toString().replace('.', '')
      const valueAsNumber2 = parseFloat(value?.toFixed(2).toString().replace('.', ''))
      if (value?.toString().split('.')[1]?.length < 2) {
        return new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(valueAsNumber2 / 100);
      } else {
        if (value?.toString().includes('.')) {
          return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(valueAsNumber / 100);
        }
        if (!value?.toString().includes('.')) {
          return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(valueAsNumber);
        }
      }

    },
    onBeginDateChange(event) {
      this.$data.loading = true
      this.getPayments(this.$pinia.state.value?.personalAccount?.personalItemData?.code, moment(event.detail.value).format('yyyyMMDD'), this.$data.endDate ? this.$data.endDate : moment().format('yyyyMMDD')).then(() => {
        this.$data.loading = false
      })
      this.$data.beginDate = moment(event.detail.value).format('yyyyMMDD')
    },
    onEndDateChange(event) {
      this.$data.loading = true
      this.getPayments(this.$pinia.state.value?.personalAccount?.personalItemData?.code, this.$data.beginDate ? this.$data.beginDate : moment().format('yyyyMMDD'), moment(event.detail.value).format('yyyyMMDD')).then(() => {
        this.$data.loading = false
      })
      this.$data.endDate = moment(event.detail.value).format('yyyyMMDD')
    },
  },
  computed: {
    paymentHistory() {
      return this.$pinia.state.value?.personalAccount?.paymentHistoryResponse
        ?.data[0]?.payments
        ? this.$pinia.state.value?.personalAccount?.paymentHistoryResponse
          ?.data[0]?.payments
        : [];
    },
    paymentHistory2() {
      return [...this.paymentHistory.slice(1)];
    },
  },
  mounted() {
    this.$data.loading = true
    this.getPayments(
      this.$pinia.state.value?.personalAccount?.personalItemData?.code
    ).then(() => {
      this.$data.loading = false
    })
  },
  data() {
    return {
      loading: false,
      beginDate: '',
      endDate: '',
      beginOpen: false,
    };
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    return {
      route,
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
    };
  },
});
</script>

<style scoped>
ion-row {
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: solid 1px #e0e0e0;
}

.ion-row-last {
  border-bottom: none;
}

ion-col {
  word-break: break-all;
}

ion-list {
  /* background: #f5f5f5; */
  background-color: rgba(0, 0, 0, 0);
}

.text {
  margin-top: 15px;
  margin-bottom: 10px;
}

.period {
  @media screen and (max-width:300px) {
    display: none;
  }
}

.sub-title {
  margin: 0;
  /* background: red; */
}

ion-spinner {
  margin: 0;
}
</style>
