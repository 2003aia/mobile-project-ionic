<template>
  <ion-page>
    <Back :menu="true" />
    <ion-content :fullscreen="true" class="background">
      <div class="pattern"></div>
      <!-- <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img> -->

      <div class="container">
        <div class="header">
          <ion-img class="logo" :src="require('@/assets/img/logoSTNG.png')" alt="logo"></ion-img>

          <p style="color: #fff;" class="title">Восстановление пароля</p>

          <p style="color: #fff;" class="text ion-text-center">
            Если Вы забыли пароль введите номер телефона. Контрольная строка для пароля, а также регистрационные данные
            будут высланы по SMS. На Ваш номер телефона придет пароль.
          </p>
        </div>
        <div>
          <Input :blue="true" name="Телефон" v-mask="'+7 (###) ###-##-##'" :value="login" @change="loginChange" />
          <!-- <Input v-show="passRecoveryResponse?.error === false" :blue="true" name="Пароль" :value="password"
            @change="passChange" /> -->
          <div v-show="passRecoveryResponse?.error === false">
            <Input type="password" :blue="true" name="Пароль" :value="password" @change="passChange" />
          </div>

          <ion-text v-if="errorText">
            <p class="ion-text-start error">
              {{ errorText }}
            </p>
          </ion-text>
          <ion-text v-if="passRecoveryResponse?.message">
            <p style="color: #fff" class="ion-text-start">
              {{ passRecoveryResponse?.message }}
            </p>
          </ion-text>
          <Button v-show="passRecoveryResponse?.error === false" style="margin-bottom: 20px" :lightBlue="true" @click="() => {
              authUserHandler()
            }
            " :loading="loading2" :disabled="passRecoveryResponse?.error === true" :name="'Войти'" />
          <Button :lightBlue="true" @click="() => {
              passRecoveryHandler();
            }
            " :loading="loading" :disabled="timer.format('mm:ss') !== '03:00' && timer.format('mm:ss') !== '00:00'"
            :name="timer.format('mm:ss') !== '03:00' && timer.format('mm:ss') !== '00:00' ? timer.format('mm:ss') : 'Восстановить пароль'" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import Back from "../components/Back.vue";
import { useLoginStore } from "../stores/login";
import { storeToRefs } from "pinia";
import { IonPage, IonContent, IonImg, IonText } from "@ionic/vue";
import { mask } from "vue-the-mask";
import moment from 'moment'
import { PushNotifications } from '@capacitor/push-notifications'
import { FCM } from "@capacitor-community/fcm"
import { Storage } from "@ionic/storage";
import axios from 'axios'


export default defineComponent({
  name: "passRecoveryPage",
  directives: { mask },

  components: {
    IonContent,
    IonPage,
    Button,
    Back,
    Input,
    IonImg,
    IonText,
  },
  setup() {
    const router = useRouter();
    const { passRecoveryResponse, passRecoveryError, authResponse, } = storeToRefs(
      useLoginStore()
    );
    const { passRecovery, authUser } = useLoginStore();
    const errorText = ref("");
    const loading = ref(false);
    const loading2 = ref(false);

    const login = ref("");
    const password = ref("");

    const timer = ref(moment(60 * 3 * 1000))

    const passRecoveryHandler = () => {
      if (login.value === "") {
        errorText.value = "Заполните все поля!";
      } else {
        const myModel = login.value.replace(/\D+/g, "");
        loading.value = true;
        const intervalTimer = setInterval(() => {

          timer.value = moment(timer.value.subtract(1, 'seconds'))
          if (timer.value.format('mm:ss') === '00:00') clearInterval(intervalTimer);
        }, 1000);
        passRecovery(myModel)
          .then(() => {
            loading.value = false;
            if (passRecoveryResponse?.value?.error === false) {

              console.log(
                passRecoveryResponse.value,
                passRecoveryError.value,
                "response"
              );
            } else {
              errorText.value = passRecoveryError.value?.response?.data?.error;
            }
          })
          .catch((e) => {
            console.log(e, "error2");
            errorText.value = e;
          });
      }
    };

    const authUserHandler = async () => {
      let myModel = login.value.replace(/\D+/g, "");
      if (password.value === "" || login.value === "") {
        errorText.value = "Заполните поля!";

      } else {
        loading2.value = true;
        // if (isPlatform('android') && isPlatform('ios')) {
        const fcmRegistr = async () => {
          const store = new Storage()
          await store.create()
          const token = await store.get('token')
          const tokenParsed = JSON.parse(token)
          await PushNotifications.addListener('registration', token => {
            console.log('Registration token2: ', token.value, tokenParsed);
            const setFcmToken = async () => {
              await store.set('fcmToken', token.value)
            }
            setFcmToken()
            if (token?.value.length !== 0) {
              console.log('Registration token: ', token.value, tokenParsed.token);
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
            loading2.value = false;
            // fcmRegistr()
            if (authResponse?.value?.error === false) {
              const store = new Storage();
              await store.create();
              await store.set(
                "token",
                JSON.stringify({
                  ...authResponse?.value?.data,
                  phone: login.value,
                })
              )
              await store.set(
                "lics",
                JSON.stringify(
                  authResponse?.value?.data?.lics,
                )
              )
              router.push("/tabs/personalAccounts");
            } else {
              errorText.value = authResponse.value?.message;
            }
          }).then(() => {
            fcmRegistr()
          })
          .catch((e) => {
            console.log(e, "error2");
            errorText.value = e;
          });
      }
    };

    const loginChange = (e) => {
      login.value = e.target.value;
    };
    const passChange = (e) => {
      password.value = e.target.value;
    };
    return { router, passRecoveryHandler, authUserHandler, login, loginChange, password, passChange, errorText, loading, loading2, passRecoveryResponse, timer, moment, };
  },
  data() {
    return {
      recovery: false,
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
}

.pattern {
  background: rgba(255, 0, 0, 0);
  width: 100%;
  height: 100%;
  position: fixed;
  background: url('../assets/img/pattern2.png') no-repeat;
  /* background-attachment: fixed; */
  background-position: center bottom;
  background-size: 350px;
  content: ' ';
}

.container {
  background: rgba(255, 255, 255, 0);

}

.logo {
  height: 80px;
  width: 240px;
  margin: auto;
  margin-bottom: 30px;
}

.title {
  margin-bottom: 20px;
}
</style>