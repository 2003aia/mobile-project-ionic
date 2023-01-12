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
          <div id="open-modal">
            <ion-img class="logoURL" :src="require('@/assets/img/logoGOS.png')" alt="logoGOSUSLUGI"></ion-img>
          </div>

          <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss" mode="ios">
            <div class="modal-header"><ion-icon @click="cancel" :icon="closeOutline"></ion-icon></div>
            <div class="modal">
              <ion-text>
                <p class="ion-text-center">Сейчас в разработке</p>
              </ion-text>
            </div>

          </ion-modal>

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
  // isPlatform,
  IonImg,
  IonIcon,
  onIonViewDidEnter,
} from "@ionic/vue";
import { Storage } from "@ionic/storage";
import { PushNotifications } from '@capacitor/push-notifications'
import { FCM } from "@capacitor-community/fcm"
import { IonModal } from '@ionic/vue'
import {
  closeOutline,
} from "ionicons/icons";
import axios from 'axios'



export default defineComponent({
  name: "authPage",
  components: {
    IonContent,
    IonPage,
    IonText,
    Button,
    IonButton,
    IonModal,
    Input,
    IonImg,
    IonIcon
  },
  computed: {

  },
  methods: {
    async authUrlEsia() {
      const backUrl = `https://esia.gosuslugi.ru/login/`;
      window.open(backUrl, '_system')

    },
    onWillDismiss(ev) {
      if (ev.detail.role === 'confirm') {
        this.message = `Hello, ${ev.detail.data}!`;
      }
    },
    cancel() {
      this.$refs.modal.$el.dismiss(null, 'cancel');
    },

  },

  setup() {
    const router = useRouter();
    const { authResponse, authError, updateLogin } = storeToRefs(useLoginStore());
    const { authUser } = useLoginStore();
    let phone = ref("");
    let password = ref("");
    let errorText = ref("");
    let loading = ref(false);
    const authUserHandler = async () => {
      let myModel = phone.value.replace(/\D+/g, "");
      if (password.value === "" || phone.value === "") {
        errorText.value = "Заполните поля!";

      } else {
        loading.value = true;
        // if (isPlatform('android') && isPlatform('ios')) {
        const fcmRegistr = async () => {
          const store = new Storage()
          await store.create()
          const token = await store.get('token')
          const tokenParsed = JSON.parse(token)
          await PushNotifications.addListener('registration', token => {
            console.log('Registration token2: ', token.value,tokenParsed);

            if (token?.value.length !== 0) {
              console.log('Registration token: ', token.value,tokenParsed.token);
              axios.post('https://fhd.aostng.ru/vesta/hs/API_STNG/V2/Profile', {
                token: tokenParsed.token,
                fcmToken: token.value
              })
            }
            console.log('test', JSON.stringify(token))
            FCM.subscribeTo({ topic: "all" })
              .then((r) => console.log(`subscribed to topic`, JSON.stringify(r)))
              .catch((err) => console.log(err));

          });
        }


        // } 

        authUser(myModel, password.value)
          .then(async () => {
            loading.value = false;
            // fcmRegistr()
            if (authResponse?.value?.error === false) {
              const store = new Storage();
              await store.create();
              await store.set(
                "token",
                JSON.stringify({
                  ...authResponse?.value?.data,
                  phone: phone.value,
                })
              )
              await store.set(
                "lics",
                JSON.stringify(
                  authResponse?.value?.data?.lics,
                )
              )
              updateLogin.value = true
              router.push("/tabs/personalAccounts");
            } else {
              errorText.value = authResponse.value?.message;
            }
          }).then(()=>{
            fcmRegistr()
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
      closeOutline
    };
  },
});
</script>

<style scoped>
.modal-header {

  padding: 10px;
}

.modal-header ion-icon {
  font-size: 20px;
  margin-left: auto;
}

ion-modal {
  --height: 30%;
  --width: 80%;
  --border-radius: 16px;
}

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
