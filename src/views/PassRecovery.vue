<template>
  <ion-page>
    <Back :menu="true"/>
    <ion-content :fullscreen="true" class="background">
      <div class="pattern"></div>
      <!-- <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img> -->

      <div class="container">
        <div class="header">
          <ion-img class="logo" :src="require('@/assets/img/logoSTNG.png')" alt="logo"></ion-img>

          <p style="color: #fff;" class="title">Восстановление пароля</p>

          <p style="color: #fff;" class="text ion-text-center">
            Если вы забыли пароль, введите номер телефона.
            Контрольная строка для пароля, а также ваши регистрационные
            данные, будут высланы вам по sms. На номер телефона вам прийдет пароль.
          </p>
        </div>
        <div>
          <Input :blue="true" name="Телефон" v-mask="'+7 (###) ###-##-##'" :value="login" @change="loginChange" />
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
          <Button :lightBlue="true" @click="
            () => {
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
    const { passRecoveryResponse, passRecoveryError } = storeToRefs(
      useLoginStore()
    );
    const { passRecovery } = useLoginStore();
    const errorText = ref("");
    const loading = ref(false);
    const login = ref("");
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
    const loginChange = (e) => {
      login.value = e.target.value;
    };
    return { router, passRecoveryHandler, login, loginChange, errorText, loading, passRecoveryResponse, timer, moment, };
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