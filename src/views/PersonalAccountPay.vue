<template>
  <ion-page>
    <Back :btnSrc="()=>router.push('/tabs/main')"/>
    <Layout
      :btnSrc="'/personalAccountPayment'"
      height="false"
      outlineBtn="."
      filledBtn="Оплатить"
      title="Оплатить"
    >
      <template v-slot:main-content>
        <ion-text
          ><p class="ion-text-start">
            Введите адрес электронной почты (email) или номер телефона
          </p></ion-text
        >
        <ion-text class="sub-title"> Pochta@mail.ru </ion-text>
        <ion-text><p class="text">Электронная почта</p></ion-text>

        <Input name="Введите номер телефона" />
        <ion-text>
          На электронную почту или на мобильный телефон будет направлен кассовый
          чек
        </ion-text>
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
  name: "personalAccauntPayPage",
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
.text {
  margin-bottom: 30px;
  margin-top: 10px;
}
</style>