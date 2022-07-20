<template>
  <ion-page>
    <Layout
      btnSrc="/registrPage"
      height="false"
      outlineBtn="."
      filledBtn="Перейти к регистрации"
      title="Соглашение на обработку персональных данных"
    >
      <template v-slot:main-content>
        <ion-text v-html="data?.data?.text"> </ion-text>
        <ion-text v-html="data?.data?.label"> </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, onIonViewDidEnter } from "@ionic/vue";
import axios from "axios";

export default defineComponent({
  name: "termsPage",
  components: {
    IonPage,
    Layout,
    IonText,
  },
  setup() {
    const router = useRouter();
    let data = ref(null);
    const fetchTerms = async () => {
      data.value = await axios
        .get("https://api.aostng.ru/api/v2/user/agreement/")
        .then((response) => {
          return response.data;
        });
    };
    onIonViewDidEnter(() => {
      fetchTerms();
    });
    return { router, data };
  },
});
</script>

<style scoped>
</style>