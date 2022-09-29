<template>
  <ion-page>
    <Layout
      :btnSrc="record ? '/tabs/record' :'/registrPage'"
      height="false"
      outlineBtn="."
      :filledBtn="record ? 'Перейти к пред. записи' : 'Перейти к регистрации'"
      title="Соглашение на обработку персональных данных"
    >
      <template v-slot:main-content>
        <div v-if="loading === false">
          <ion-text v-html="data?.data?.text"> </ion-text>
          <ion-text v-html="data?.data?.label"> </ion-text>
        </div>
        <ion-spinner v-else name="bubbles" />
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, onIonViewDidEnter, IonSpinner } from "@ionic/vue";
import axios from "axios";

export default defineComponent({
  name: "termsPage",
  components: {
    IonPage,
    Layout,
    IonText,
    IonSpinner,
  },
  props: ["record"],
  setup() {
    const router = useRouter();
    let data = ref(null);
    const loading = ref(false);
    const fetchTerms = async () => {
      loading.value = true;
      data.value = await axios
        .get("https://api.aostng.ru/api/v2/user/agreement/")
        .then((response) => {
          loading.value = false;
          return response.data;
        });
    };
    onIonViewDidEnter(() => {
      fetchTerms();
    });
    return { router, data, loading };
  },
});
</script>

<style scoped></style>
