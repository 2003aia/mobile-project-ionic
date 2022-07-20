<template>
  <ion-page>
    <Back />
    <Layout
      :btnSrc="'/personalAccountInfo'"
      :method2="() => router.push('/personalAccountNew')"
      height="false"
      outlineBtn="Добавить лицевой счёт"
      filledBtn="Узнать лицевой счет"
      title="Лицевой счёт"
    >
      <template v-slot:main-content>
        <ion-text
          ><p class="title ion-text-start">Узнать лицевой счет</p></ion-text
        >

        <Input name="Введите улицу" />
        <Input name="Введите номер квартиры" />
        <Input name="Введите номер квартиры" />
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Input from "../components/Input.vue";
import { IonPage, IonText } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";

export default defineComponent({
  name: "personalAccauntInfoSearchPage",
  components: {
    Back,
    IonPage,
    Layout,
    IonText,
    Input,
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
p {
  margin-bottom: 20px;
}
</style>