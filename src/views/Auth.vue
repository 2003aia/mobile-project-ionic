<template>
  <ion-page>
    <ion-content :fullscreen="true" class="background">
      <div class="container">
        <div class="header">
          <ion-img
            class="logo"
            :src="require('@/assets/img/logoSTNG.png')"
            alt="test"
          ></ion-img>

          <ion-text>
            <p class="title">Авторизация</p>
          </ion-text>
          <ion-text>
            <p class="text ion-text-center">
              Если у Вас уже есть личный кабинет, пожалуйста авторизуйтесь.
              Номер телефона вводится без "8"
            </p>
          </ion-text>
        </div>
        <div>
          <Input
            v-mask="'+7 (###) ###-##-##'"
            name="Телефон"
            :value="phone"
            type="tel"
            :changeHandler="phoneChange"
          />
          <Input
            name="Пароль"
            :value="password"
            type="password"
            :changeHandler="passwordChange"
          />

          <ion-text v-if="errorText">
            <p class="ion-text-start error">
              {{ errorText }}
            </p>
          </ion-text>

          <Button :loading="loading" @click="authUserHandler" name="Войти" />
        </div>
        <ion-button
          class="textURL ion-text-wrap"
          fill="clear"
          router-link="/passRecoveryPage"
          >Забыли пароль?</ion-button
        >

        <ion-text class="text ion-text-center">Или с помощью</ion-text>
        <div>
          <a href="https://esia.gosuslugi.ru/login/">
            <ion-img
              class="logoURL"
              :src="require('@/assets/img/logoGOS.png')"
              alt="logoGOSUSLUGI"
            ></ion-img>
          </a>

          <a href="https://aostng.ru/login/">
            <ion-img
              class="logoURL"
              :src="require('@/assets/img/logoSTNG.png')"
              alt="test"
            ></ion-img>
          </a>
        </div>

        <ion-text class="ion-text-center">Еще не зарегистрированы? </ion-text>

        <ion-button
          fill="clear"
          class="textURL ion-text-wrap"
          router-link="/registrPage"
        >
          Пройдите регистрацию
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login";
import { IonPage, IonButton, IonContent, IonText, IonImg } from "@ionic/vue";
import { mask } from "vue-the-mask";
import { Storage } from "@ionic/storage";

export default defineComponent({
  name: "authPage",
  components: {
    IonContent,
    IonPage,
    IonText,
    Button,
    IonButton,

    Input,
    IonImg,
  },
  directives: { mask },

  setup() {
    const router = useRouter();
    const { authResponse, authError } = storeToRefs(useLoginStore());
    const { authUser } = useLoginStore();
    let phone = "";
    let password = "";
    let errorText = ref("");
    let loading = ref(false)
    const authUserHandler = () => {
      const myModel = phone.replace(/\D+/g, "");
      if (password === "" || phone === "") {
        errorText.value = "Заполните поля!";
      } else {
        loading.value = true
        authUser(myModel, password)
          .then(async () => {
            loading.value = false
            if (authResponse?.value?.error === false) {
              const store = new Storage();
              await store.create();
              await store.set(
                "token",
                JSON.stringify({...authResponse?.value?.data, phone: phone, password: password}),
              );
              router.push("/tabs");
            } else {
              errorText.value = authResponse.value?.message
            }
          })
          .catch((e) => {
            console.log(e, "error2");
            errorText.value = e;
          });
      }
    };
    const phoneChange = (e) => {
      phone = e.target.value;
    };
    const passwordChange = (e) => {
      password = e.target.value;
    };
    return {
      loading,
      router,
      password,
      phone,
      authError,
      errorText,
      authUserHandler,
      phoneChange,
      passwordChange,
    };
  },
});
</script>

<style scoped>
.background {
  --background: #fff;
}

.text {
  margin-bottom: 20px;
}
.container {
  background-color: rgb(255, 255, 255);
}
.logoURL {
  height: 26px;
  width: 120px;
  margin: auto;
  margin-bottom: 15px;
}
.logo {
  height: 80px;
  width: 240px;
  margin: auto;
  margin-bottom: 30px;
}
</style>