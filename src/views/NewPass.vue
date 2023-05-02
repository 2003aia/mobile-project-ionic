<template>
  <ion-page>
    <Back />
    <Layout :method="authUserHandler" filledBtn="Сохранить новый пароль" height="false" outlineBtn="." :loading="loading">
      <template v-slot:header-content>
        <ion-text v-if="route.params.recovery === 'true'" class="main-title ion-text-wrap ion-text-start">
          Восстановление пароля
        </ion-text>
        <ion-text v-else class="main-title ion-text-wrap ion-text-start">
          Создать пароль
        </ion-text>
      </template>
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Новый пароль</p>
        </ion-text>
        <ion-text v-if="route.params.recovery === 'true'">
          На Ваш номер был отправлен код для восстановления пароля, введите его
          в соответствующее поле. Придумайте новый пароль.
        </ion-text>
        <ion-text v-else>
          <!-- На Ваш номер был отправлен код для создания пароля, введите его в
          соответствующее поле. -->
          Придумайте новый пароль.
        </ion-text>
        <br />

        <ion-item class="sub-margin">
          <ion-label class="ion-text-wrap">
            <ion-text class="sub-title">{{ phone }}</ion-text>
            <br />
            Номер телефона
          </ion-label>
        </ion-item>
        <div class="input-container" v-if="route.params?.edit === 'true'">
          <ion-text class="sub-title sub-margin">Введите код</ion-text>
          <Input :code="code" @change="codeChange" name="Введите код" />
        </div>
        <div class="input-container">
          <ion-text class="sub-title sub-margin">Новый пароль</ion-text>
          <Input type="password" :value="password" :changeHandler="passwordChange" name="Новый пароль" />
        </div>
        <div class="input-container">
          <ion-text class="sub-title sub-margin">Повторите новый пароль</ion-text>
          <Input type="password" name="Повторите новый пароль" :value="confirmPassword" @change="confirmPasswordChange" />
        </div>
        <ion-text>

          <p class="ion-text-start blue" v-show="changePassResponse?.error === false">
            Пароль изменен
          </p>
          <p class="ion-text-start error" v-show="changePassResponse?.error === true">
            {{ error }}
          </p>
        </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>

   


<script>
import { defineComponent, ref } from "vue";
import Input from "../components/Input.vue";
import { useRouter, useRoute } from "vue-router";
import Back from "../components/Back.vue";
import Layout from "../components/Layout.vue";
import {
  IonPage,
  IonItem,
  IonLabel,
  IonText,
  onIonViewDidEnter,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login";
import { Storage } from "@ionic/storage";

export default defineComponent({
  name: "newPassPage",
  props: {},
  components: {
    IonText,
    IonItem,
    IonLabel,
    IonPage,
    Back,
    Input,
    Layout,
  },
  data() {
    return {
      recovery: true,
    };
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const phone = ref("");
    const password = ref("");
    const oldPassword = ref("");
    const confirmPassword = ref("");
    const code = ref("");
    const error = ref("");
    const loading = ref(false)
    const { changePassResponse, changePassError } = storeToRefs(
      useLoginStore()
    );
    const { changePass } = useLoginStore();
    const passwordChange = (e) => {
      password.value = e.target.value;
    };
    const oldPasswordChange = (e) => {
      oldPassword.value = e.target.value;
    };
    const confirmPasswordChange = (e) => {
      confirmPassword.value = e.target.value;
    };
    const codeChange = (e) => {
      code.value = e.target.value;
    };
    const authUserHandler = async () => {
      const store = new Storage();
      await store.create();
      if (password.value === "" || confirmPassword.value === "") {
        error.value = "Заполните все поля!";
      } else {
        const token = await store.get("token");
        if (password.value === confirmPassword.value) {
          loading.value = true
          changePass(JSON.parse(token).token, password.value)
            .then(() => {
              loading.value = false
              if (changePassResponse.value?.error === true) {
                error.value = changePassError.value;
              }
            })
            .catch((e) => {
              loading.value = false
              console.log(e, "error2");
            });
        } else {
          error.value = "Пароли не совпадают";

        }
      }
    };

    const storageHandler = async () => {
      const store = new Storage();
      await store.create();
      if (route.params.phone) {
        phone.value = route.params.phone;
      } else {
        const value = await store.get("token");

        phone.value = await JSON.parse(value).phone;
      }
    };

    onIonViewDidEnter(() => {
      storageHandler();
    });
    return {
      router,
      route,
      authUserHandler,
      passwordChange,
      oldPasswordChange,
      password,
      confirmPassword,
      confirmPasswordChange,
      codeChange,
      oldPassword,
      phone,
      error,
      changePassResponse,
      loading,
    };
  },
});
</script>

<style scoped>
.sub-margin {
  margin-bottom: 15px;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.sub-title {
  font-weight: 600;
  font-size: 16px;

  color: rgb(0, 0, 0);
}
</style>