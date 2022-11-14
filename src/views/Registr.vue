<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/authPage')" />
    <ion-content :fullscreen="true" class="background">
      <div class="pattern"></div>

      <div class="container">
        <!-- <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img> -->
        <div class="content">
          <ion-img class="logo" :src="require('@/assets/img/logoSTNG.png')" alt="logo"></ion-img>

          <ion-text>
            <p class="title ion-text-center">
              Регистрация
            </p>

          </ion-text>

          <div v-if="codeSent == false">
            <ion-text>
              <p style="color: #fff;" class="text ion-text-center">
                Регистрация нового пользователя
                <br />
                Для регистрации используйте номер вашего мобильного телефона.
                Номер телефона вводится без "8"
              </p>
            </ion-text>

            <ion-text>
              <p class="text ion-text-start">
                <ion-text class="dot"> * </ion-text>- обязательное поле для
                заполнения.
              </p>
            </ion-text>
            <Input :blue="true" v-mask="'+7 (###) ###-##-##'" type="tel" name="Телефон" :required="true" :value="phone"
              :changeHandler="changePhone" />
            <!-- <Input
            :value="email"
            :changeHandler="changeEmail"
            type="email"
            name="email"
            v-model="email"
          /> -->

            <ion-text v-if="errorText">
              <p class="ion-text-start error">
                {{ errorText }}
              </p>
            </ion-text>

            <ion-item class="check">
              <ion-checkbox @update:modelValue="check = $event" :modelValue="check" slot="start"></ion-checkbox>
              <ion-text>Согласен (-на) на обработку персональных данных</ion-text>
            </ion-item>

            <ion-button class="textURL ion-text-wrap" fill="clear" router-link="/termsPage">
              Пользовательское соглашение
            </ion-button>
            <Button :lightBlue="true" :disabled="!check && phone === ''" :loading="loading" name="Зарегистрироваться"
              @click="
                () => {
                  registrUserHandler();
                }
              " />
          </div>

          <div v-else>
            <p style="color: #fff;" class="text ion-text-center">
              Мы отправили проверочный код на номер {{ phone.value }}
            </p>
            <Input :blue="true" name="Введите код" :value="code" @change="changeCode" />
            <Input :blue="true" name="Введите новый пароль" :value="password" type="password"
              @change="changePassword" />

            <Input :blue="true" type="password" name="Повторите новый пароль" :value="passwordConfirm"
              @change="changePasswordConfirm" />

            <ion-text v-if="errorText">
              <p class="ion-text-start error">
                {{ errorText }}
              </p>
            </ion-text>
            <Button :lightBlue="true" name="Подтвердить" :loading="loading2" @click="
  () => {
    codeUserHandler();
  }
            " />
          </div>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import { defineComponent, ref } from "vue";
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import Back from "../components/Back.vue";
import { useRouter } from "vue-router";
import {
  IonPage,
  IonContent,
  IonItem,
  IonButton,
  IonImg,
  isPlatform,
  IonCheckbox,
  IonText,
} from "@ionic/vue";
import { mask } from "vue-the-mask";
import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login";
import { Storage } from "@ionic/storage";
import { PushNotifications } from '@capacitor/push-notifications'


export default defineComponent({
  name: "registrPage",
  components: {
    IonContent,
    IonPage,
    Button,
    Input,
    IonImg,
    IonItem,
    IonButton,
    IonCheckbox,
    IonText,
    Back,
  },
  directives: { mask },
  setup() {
    const { registrResponse, registrError, registrResponse2 } = storeToRefs(
      useLoginStore()
    );
    const { registrUser, registrUser2 } = useLoginStore();
    const router = useRouter();
    let email = ref("");
    let phone = ref("");
    let check = ref(false);
    let errorText = ref("");
    let codeSent = ref(false);
    let code = ref("");
    let password = ref("");
    let passwordConfirm = ref("");
    let loading = ref(false);
    let loading2 = ref(false);
    let fcmToken = ref('')
    // let codeResponse = ref("");

    const registrUserHandler = async () => {
      if (phone.value !== "" && check.value) {
        loading.value = true;
        const myModel = phone.value.replace(/\D+/g, "");
        registrUser(myModel, /* email.value !== "" ? email.value : null */)
          .then(async () => {
            loading.value = false;
            if (registrResponse.value?.error === false) {
              const store = new Storage();
              await store.create();
              const oldData = await store.get("token");
              const oldDataParsed = JSON.parse(oldData);
              const data = {
                token: registrResponse?.value?.data?.token,
                ...oldDataParsed,
              };
              await store.set("token", JSON.stringify(data));
              await store.set("login", phone.value);
              codeSent.value = true;
              // codeResponse.value = registrResponse.value?.data.msg.substr(35);
            } else {
              loading.value = false;

              errorText.value = registrResponse?.value?.message;
            }
          })
          .catch((e) => {
            loading.value = false;

            console.log(e, "error");
            errorText.value = e;
          });
      } else {
        errorText.value = "Заполните поля!";
      }
    };
    const codeUserHandler = async () => {

      if (password.value === passwordConfirm.value) {
        loading2.value = true;
        if (isPlatform('android') && isPlatform('ios')) {
          await PushNotifications.addListener('registration', token => {
            fcmToken.value = token.value
          });
        }

        registrUser2(code.value, password.value, fcmToken.value).then(() => {
          loading2.value = false;
          if (registrResponse2.value.error === false) {
            router.push("/tabs");
          } else {
            loading2.value = false;

            errorText.value = registrResponse.value.message;
          }
        });
      } else {

        errorText.value = "Пароли не совпадают";
      }
    };

    const changePhone = (e) => {
      phone.value = e.target.value;
    };
    const changeEmail = (e) => {
      email.value = e.target.value;
    };
    const changeCode = (e) => {
      code.value = e.target.value;
    };
    const changePassword = (e) => {
      password.value = e.target.value;
    };
    const changePasswordConfirm = (e) => {
      passwordConfirm.value = e.target.value;
    };

    return {
      loading,
      loading2,
      changePassword,
      changePasswordConfirm,
      password,
      passwordConfirm,
      registrError,
      registrUserHandler,
      router,
      email,
      phone,
      check,
      changeEmail,
      changeCode,
      errorText,
      codeUserHandler,
      codeSent,
      code,
      changePhone,
    };
  },
  data() {
    return {
      // codeSent: false,
    };
  },
  methods: function () { },
});
</script>

<style scoped>
.background {
  --background: linear-gradient(164.84deg, #1B7DB6 8.63%, #0F3C79 89.24%);
  position: relative;
}

.title {
  color: #fff;
}

.text {
  margin-bottom: 20px;
  color: #71C4F4;
}

.container {
  background-color: #0f3b7900;
}

.content {
  margin-top: 40px;
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

ion-item {
  --background: #1b7db600;
  --border-color: #71C4F4;
}

ion-item ion-text {
  color: #7AE6E4;

}

.logo {
  height: 80px;
  width: 240px;
  margin: auto;
  margin-bottom: 30px;
  position: relative;
  z-index: 23000;
}
</style>