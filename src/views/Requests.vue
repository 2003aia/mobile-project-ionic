<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/main')" />
    <Layout
      :btnSrc="'/requestsInfo'"
      height="false"
      outlineBtn="."
      filledBtn="Создать заявку"
      title="Мои заявки"
    >
      <template v-slot:main-content>
        <ion-list v-for="el in data" :key="el.date">
          <ion-item>
            <div>
              <ion-text class="sub-title">{{ el.title }}</ion-text>
              <ion-text>
                <p class="text">{{ el.date }}</p>
              </ion-text>
            </div>
          </ion-item>
        </ion-list>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem, IonList, } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";

export default defineComponent({
  name: "myRequestsPage",
  components: {
    Back,
    IonItem,
    IonPage,
    Layout,
    IonList,
    IonText,
  },
  data() {
    return {
      data: [
        {
          title: "Разовые услуги для абонентов АО «Сахатранснефтегаз»",
          date: "19.04.2022",
        },
        {
          title: "Разовые услуги для абонентов АО «Сахатранснефтегаз»",
          date: "19.04.2022",
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