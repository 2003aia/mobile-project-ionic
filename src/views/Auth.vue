<template>
  <ion-page>
    <ion-content :fullscreen="true" class="background">
      <div class="pattern"></div>

      <div class="container">
        <!-- <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img> -->

        <div class="header">
          <ion-img class="logo" :src="require('@/assets/img/logoSTNG.png')" alt="test"></ion-img>

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
          <Input :blue="true" :mask="'+7 (###) ###-##-##'" name="Телефон" :value="phone" type="tel"
            :changeHandler="phoneChange" />
          <Input :blue="true" name="Пароль" :value="password" type="password" :changeHandler="passwordChange" />

          <ion-text v-if="errorText">
            <p class="ion-text-start error">
              {{ errorText }}
            </p>
          </ion-text>

          <Button :lightBlue="true" :loading="loading" @click="authUserHandler" name="Войти" />
        </div>
        <ion-button class="textURL ion-text-wrap" fill="clear" router-link="/passRecoveryPage">Забыли пароль?
        </ion-button>

        <ion-text class="text ion-text-center">Или с помощью</ion-text>
        <div>
          <div @click="authUrl">
            <ion-img class="logoURL" :src="require('@/assets/img/logoGOS.png')" alt="logoGOSUSLUGI"></ion-img>
          </div>

          <a href="https://aostng.ru/login/">
            <ion-img class="logoURL" :src="require('@/assets/img/logoSTNG2.png')" alt="aostng"></ion-img>
          </a>
        </div>

        <ion-text style="color: #71C4F4;" class="ion-text-center">Еще не зарегистрированы? </ion-text>
        <ion-button fill="clear" class="textURL ion-text-wrap" router-link="/registrPage">
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
import {
  IonPage,
  IonButton,
  IonContent,
  IonText,
  isPlatform,
  IonImg,
  onIonViewDidEnter,
} from "@ionic/vue";
import { Storage } from "@ionic/storage";
import { PushNotifications } from '@capacitor/push-notifications'


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
  methods: {
    authUrl() {
    }
  },
  setup() {
    const router = useRouter();
    const { authResponse, authError, updateLogin } = storeToRefs(useLoginStore());
    const { authUser } = useLoginStore();
    let phone = ref("");
    let password = ref("");
    let errorText = ref("");
    let loading = ref(false);
    let fcmToken = ''
    const authUserHandler = async () => {
      let myModel = phone.value.replace(/\D+/g, "");
      if (password.value === "" || phone.value === "") {
        errorText.value = "Заполните поля!";

      } else {
        loading.value = true;
        if (isPlatform('android') || isPlatform('ios')) {

          await PushNotifications.addListener('registration', token => {
            fcmToken = token.value
            console.log(token.value, 'test')
          });
        } 
       
        console.log(isPlatform('android'), 'testisplatform', fcmToken)
        authUser(myModel, password.value, fcmToken)
          .then(async () => {
            loading.value = false;
            if (authResponse?.value?.error === false) {
              const store = new Storage();
              await store.create();
              await store.set(
                "token",
                JSON.stringify({
                  ...authResponse?.value?.data,
                  phone: phone.value,
                  password: password.value,

                })
              )
              updateLogin.value = true
              router.push("/tabs/personalAccounts");
            } else {
              errorText.value = authResponse.value?.message;
            }
          })
          .catch((e) => {
            console.log(e, "error2");
            errorText.value = e;
          });
      }
    };
    const phoneChange = (e) => {
      phone.value = e.target.value;
    };
    const passwordChange = (e) => {
      password.value = e.target.value;
    };

    onIonViewDidEnter(() => {
      const getPhone = async () => {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        if (token !== null) {
          const myModel = JSON.parse(token)?.phone?.replace(/\D+/g, "");
          phone.value = myModel
        }
      };
      getPhone();
    });
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
  --background: linear-gradient(164.84deg, #1B7DB6 8.63%, #0F3C79 89.24%);
  position: relative;

}

.text {
  margin-bottom: 20px;
  color: #71C4F4;
}

.container {
  background: rgba(255, 0, 0, 0);

}


.pattern {
  background: rgba(255, 0, 0, 0);
  width: 100%;
  height: 100%;
  position: fixed;
  background: url('../assets/img/pattern2.png') no-repeat;
  /* background-attachment: fixed; */
  background-position: center bottom;
  background-size: 300px;
  content: ' ';
}


.logoURL {
  height: 44px;
  width: 130px;
  margin: auto;
  margin-bottom: 15px;
  position: relative;
  z-index: 43000;
}

.title {
  color: #fff;
}

.logo {
  height: 80px;
  width: 240px;
  margin: auto;
  margin-bottom: 30px;
}

.textURL {
  padding-bottom: 20px;
}
</style>
