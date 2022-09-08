<template>
  <ion-page>
    <Back />
    <Layout
      height="false"
      :method="
        () => {
          passRecoveryHandler();
        }
      "
      :filledBtn="'Отправить код'"
      title="Личный кабинет"
      :outlineBtn="'.'"
    >
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Изменить пароль</p>
          <p>Мы отправим Вам проверочный код на номер {{ login }}</p>
        </ion-text>
        <ion-text v-if="error">
          <p class="ion-text-start error">
            {{ error }}
          </p>
        </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, onIonViewWillEnter } from "@ionic/vue";
import Back from "../components/Back.vue";
import { useLoginStore } from "../stores/login";
import { storeToRefs } from "pinia";
import { Storage } from "@ionic/storage";

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
    const error = ref("");
    const login = ref("");
    const { passRecoveryResponse, passRecoveryError } = storeToRefs(
      useLoginStore()
    );
    const { passRecovery } = useLoginStore();

    const passRecoveryHandler = async () => {
      const store = new Storage();
      await store.create();
      const login = await store.get("token");
      const value = JSON.parse(login);
      passRecovery(value?.login).then(() => {
        if (passRecoveryResponse.value.status === true) {
          const code = passRecoveryResponse.value?.data.msg.substr(91);
          router.push({name: 'newPassPage', params: { code: code, edit: true, phone: value?.login }})
        } else {
          error.value = passRecoveryError.value?.response?.data?.error;
        }
      });
    };
    const getLogin = async () => {
      const store = new Storage();
      await store.create();
      const token = await store.get("token");
      const value = JSON.parse(token);
      login.value = value.login;
    };
    onIonViewWillEnter(() => {
      getLogin();
    });
    return { router, passRecoveryHandler, error, login };
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