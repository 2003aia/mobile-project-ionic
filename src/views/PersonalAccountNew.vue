<template>
  <ion-page>
    <Back />
    <Layout
      :btnSrc="'/personalAccountInfo'"
      height="false"
      outlineBtn="."
      filledBtn="Добавить"
      title="Лицевой счёт"
    >
      <template v-slot:main-content>
        <ion-text
          ><p class="title ion-text-start">Новый лицевой счёт</p></ion-text
        >
        <Input name="Введите номер лицевого счета" />
        <ion-text
          ><p class="title ion-text-start">
            Введите данные владельца лицевого счета
          </p></ion-text
        >
        <Input name="Введите фамилию" />
        <Input name="Введите имя" />
        <Input name="Введите отчество" />
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
  name: "personalAccauntNewPage",
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