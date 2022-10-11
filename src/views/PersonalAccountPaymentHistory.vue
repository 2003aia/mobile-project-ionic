<template>
  <ion-page>
    <Back />
    <Layout :btnSrc="'/personalAccountPayment'" height="false" outlineBtn="." filledBtn="." title="Лицевые счета">
      <template v-slot:header-content>
        <ion-text class="main-title">История платежей</ion-text>
      </template>
      <template v-slot:main-content>
        <div v-if="paymentHistory?.length === 0">
          <ion-text>У №{{ this.$pinia.state.value?.personalAccount?.personalItemData?.code }} лицевого счета нет
            платежей</ion-text>
        </div>
        <div v-else>
          <ion-row>
            <ion-col>№</ion-col>
            <ion-col>Дата</ion-col>

            <ion-col>Сумма</ion-col>

            <!-- <ion-col>Автор</ion-col> -->
          </ion-row>

          <div v-for="el in paymentHistory" :key="el">
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
      <ion-spinner name="bubbles" />
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
// import moment from "moment";

export default defineComponent({
  name: "personalAccountPaymentHistory",
  components: {
    Back,
    IonPage,
    Layout,
    IonText,
    // LayoutBox,
    IonSpinner,
    IonCol,
    IonRow,
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["getPayments"]),
    maskMoney(value) {
      const valueAsNumber = value;
      return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(valueAsNumber / 100);
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
    this.getPayments(
      this.$pinia.state.value?.personalAccount?.personalItemData?.code
    );
  },
  data() {
    return {};
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

.sub-title {
  margin: 0;
  /* background: red; */
}

ion-spinner {
  margin: 0;
}
</style>
