<template>
  <ion-page>
    <Back />
    <ion-content :fullscreen="true" class="background">
      <div class="container">
        <div class="header">
          <ion-img
            class="logo"
            :src="require('@/assets/img/logoSTNG.png')"
            alt="logo"
          ></ion-img>

          <p class="title">Восстановление пароля</p>

          <p class="text ion-text-center">
            Если вы забыли пароль, введите номер телефона или E-Mail.
            Контрольная строка для смены пароля, а также ваши регистрационные
            данные, будут высланы вам по E-Mail. На номер телефона вам прийдет
            новый временный пароль.
          </p>
        </div>
        <div>
          <Input
            name="Телефон"
            v-mask="'+7 (###) ###-##-##'"
            :value="login"
            @change="loginChange"
          />
          <ion-text v-if="errorText">
            <p class="ion-text-start error">
              {{ errorText }}
            </p>
          </ion-text>
          <ion-text v-if="passRecoveryResponse?.message">
            <p class="ion-text-start">
              {{passRecoveryResponse?.message}}
            </p>
          </ion-text>
          <Button
            @click="
              () => {
                passRecoveryHandler();
              }
            "
            :loading="loading"
            name="Восстановить пароль"
          />
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
    const passRecoveryHandler = () => {
      if (login.value === "") {
        errorText.value = "Заполните все поля!";
      } else {
        const myModel = login.value.replace(/\D+/g, "");
        loading.value = true;
        passRecovery(myModel)
          .then(() => {
            loading.value = false;
            if (passRecoveryResponse?.value?.error === false) {
              /* const code = passRecoveryResponse.value?.data.msg.substr(91);

              router.push({
                name: "newPassPage",
                params: {
                  recovery: true,
                  code: code,
                  phone: login.value,
                  edit: true,
                },
              }); */
              // router.push("/authPage");
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
    return { router, passRecoveryHandler, login, loginChange, errorText, loading, passRecoveryResponse };
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
  --background: #fff;
}

.text {
  margin-bottom: 20px;
}

.container {
  background: #fff;
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