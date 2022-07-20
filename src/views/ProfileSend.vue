<template>
  <ion-page>
    <Back />
    <Layout
      height="false"
      :method="
        () => {
          router.push({ name: 'newPassPage', params: { recovery: false } });
          edit = true;
        }
      "
      :filledBtn="'Отправить код'"
      title="Личный кабинет"
      :outlineBtn="'.'"
    >
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Изменить пароль</p>
          <p>Мы отправим Вам проверочный код на номер {{ data.phone }}</p>
        </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText } from "@ionic/vue";
import Back from "../components/Back.vue";

export default defineComponent({
  name: "profileSendPage",
  data() {
    return {
      codeSent: false,
      edit: false,
      data: {
        name: "Иван",
        surname: "Иванов",
        secondname: "Иванович",

        email: "Pochta@mail.ru",
        phone: "+7(996)-915-88-31",
      },
    };
  },
  components: {
    Back,
    IonPage,
    Layout,
    IonText,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
  --padding-bottom: 0px;
  --inner-padding-bottom: 0px;
}
</style>