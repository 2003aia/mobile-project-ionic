<template>
  <ion-page>
    <Back />
    <Layout
      :btnSrc="'/personalAccountPayment'"
      height="false"
      outlineBtn="."
      filledBtn="."
      title="Мои заявки"
    >
      <template v-slot:main-content>
        <div v-for="el in data" :key="el.date">
          <ion-text class="title">{{ el.title }}</ion-text>

          <ion-item>
            <ion-text>№ Заявки</ion-text>
            <ion-text class="sub-title" slot="end">
              {{ el.number }}
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>Адрес</ion-text>
            <ion-text class="sub-title" slot="end">
              {{ el.address }}
            </ion-text>
          </ion-item>

          <ion-item>
            <ion-text>Статус заявки</ion-text>
            <ion-text class="sub-title" slot="end">
              {{ el.status }}
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>Дата приема</ion-text>
            <ion-text class="sub-title" slot="end">
              {{ el.dateAdmission }}
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>Дата исполнения</ion-text>
            <ion-text class="sub-title" slot="end">
              {{ el.dateDue }}
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>Дата дела</ion-text>
            <ion-text class="sub-title" slot="end">
              {{ el.dateBussiness }}
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>Комментарий</ion-text>
            <ion-text class="sub-title" slot="end">
              {{ el.comment }}
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>Договор</ion-text>
            <ion-text class="sub-title" slot="end">
              {{ el.contract }}
            </ion-text>
          </ion-item>
        </div>
      </template>
      <LayoutBox>
        <template v-slot:content> </template>
      </LayoutBox>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem, } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import LayoutBox from "../components/LayoutBox.vue";

export default defineComponent({
  name: "requestsInfo",
  components: {
    Back,
    IonItem,
    IonPage,
    Layout,
    IonText,
    LayoutBox,
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
.text {
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>