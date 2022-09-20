<template>
  <ion-page>
    <Back />
    <Layout
      :btnSrc="'/personalAccountPayment'"
      height="false"
      outlineBtn="."
      filledBtn="."
      v-if="paymentHistory?.length === 0"
      title="Лицевые счета"
    >
      <template v-slot:main-content>
        <ion-spinner name="bubbles" />
      </template>
    </Layout>
    <Layout
      :btnSrc="'/personalAccountPayment'"
      height="false"
      outlineBtn="."
      filledBtn="."
      v-else
      title="Лицевые счета"
    >
      <template v-slot:main-content>
        <!-- <ion-list v-for="el in paymentHistory" :key="el.date"> -->
        <ion-text class="title">История платежей</ion-text>
        <ion-item>
          <ion-text>Дата</ion-text>
          <ion-text class="sub-title" slot="end">
            {{ paymentHistory[0]?.date ? paymentHistory[0]?.date : "-" }}
          </ion-text>
        </ion-item>
        <ion-item>
          <ion-text>№</ion-text>
          <ion-text class="sub-title" slot="end">
            {{ paymentHistory[0]?.number }}
          </ion-text>
        </ion-item>

        <ion-item>
          <ion-text>Сумма</ion-text>
          <ion-text class="sub-title" slot="end">
            {{ paymentHistory[0]?.summ }}
          </ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Автор</ion-text>
          <ion-text class="sub-title" slot="end">
            {{ paymentHistory[0]?.author }}
          </ion-text>
        </ion-item>

        <!-- </ion-list> -->
      </template>

      <template v-slot:content>
        <div v-if="paymentHistory?.length > 1">
          <ion-list v-for="el in paymentHistory2" :key="el">
            <LayoutBox>
              <template v-slot:content>
                <ion-text class="title">История платежей</ion-text>
                <ion-item>
                  <ion-text>Дата</ion-text>
                  <ion-text class="sub-title" slot="end">
                    {{ el?.date ? el?.date : "-" }}
                  </ion-text>
                </ion-item>
                <ion-item>
                  <ion-text>№</ion-text>
                  <ion-text class="sub-title" slot="end">
                    {{ el?.number }}
                  </ion-text>
                </ion-item>

                <ion-item>
                  <ion-text>Сумма</ion-text>
                  <ion-text class="sub-title" slot="end">
                    {{ el?.summ }}
                  </ion-text>
                </ion-item>
                <ion-item>
                  <ion-text>Автор</ion-text>
                  <ion-text class="sub-title" slot="end">
                    {{ el?.author }}
                  </ion-text>
                </ion-item>
              </template>
            </LayoutBox>
          </ion-list>
        </div>
      </template>
    </Layout>
  </ion-page>
</template>
  
  
  <script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem, IonList, IonSpinner, } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import LayoutBox from "../components/LayoutBox.vue";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";
// import moment from "moment";

export default defineComponent({
  name: "personalAccountPaymentHistory",
  components: {
    Back,
    IonList,
    IonItem,
    IonPage,
    Layout,
    IonText,
    LayoutBox,
    IonSpinner,
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["getPayments"]),
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
      this.$route.params.lc
      /*  "20010101",
      moment().format("YYYYMMDD") */
    );
    console.log(this.$route.params, "params");
  },
  data() {
    return {
      data: [
        {
          title: "Разовые услуги для абонентов АО «Сахатранснефтегаз»",
          address: "-",
          status: "В обработке",
          number: "19.04.2022",
          dateAdmission: "19.04.2022",
          dateDue: "19.04.2022",
          comment: "-",
          contract: "-",
          dateBussiness: "-",
        },
        /*      {
            title: "Разовые услуги для абонентов АО «Сахатранснефтегаз»",
            address: "-",
            status: "В обработке",
            number: "19.04.2022",
            dateAdmission: "19.04.2022",
            dateDue: "19.04.2022",
            comment: "-",
            contract: "-",
            dateBussiness: "-",
          }, */
      ],
    };
  },
  setup() {
    const router = useRouter();

    return {
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
    };
  },
});
</script>
  
  <style scoped>
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