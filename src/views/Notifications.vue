<template>
  <ion-page>
    <Back />
    <Layout
      btnSrc="/registrPage"
      height="false"
      outlineBtn="."
      filledBtn="."
      title="Уведомления"
    >
      <template v-slot:main-content>
        <ion-list v-for="el in data" :key="el.title">
          <ion-item>
            <div>
              <ion-text class="sub-title">
                {{ el.title }}
              </ion-text>

              <p class="text">{{ el.sub_title }}</p>
              <div class="footer-item">
                <ion-text class="text">
                  {{ el.date }}
                </ion-text>
                <ion-text class="time ion-text-start">{{ el.time }}</ion-text>
              </div>
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
import { IonPage, IonText, IonItem, IonList } from "@ionic/vue";
import Back from "../components/Back.vue";

export default defineComponent({
  name: "notificationsPage",
  components: {
    IonPage,
    Layout,
    Back,
    IonItem,
    IonList,
    IonText,
  },
  data() {
    return {
      data: [
        {
          title: "Якутия. Еженедельный дайджест новостей газификации",
          sub_title: "Новости",
          date: "19.04.2022",
          time: "12:05",
        },
        {
          title: "Разовые услуги для абонентов АО «Сахатранснефтегаз»",
          sub_title: "Мои заявки",
          date: "19.04.2022",
          time: "12:05",
        },
        {
          title: "Разовые услуги для абонентов АО «Сахатранснефтегаз»",
          sub_title: "Мои заявки",
          date: "19.04.2022",
          time: "12:05",
        },
        {
          title: "№12345",
          sub_title: "Обращения",
          date: "19.04.2022",
          time: "12:05",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
.time {
  margin-left: 20px;
}
.text {
  margin-bottom: 10px;
}
ion-item {
  --padding-start: 0;
  --inner-padding-end:0;
}
.footer-item {
  display: flex;
  flex-wrap: wrap;
}
</style>