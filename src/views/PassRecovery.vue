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
          <Input name="Телефон или email" :value="login" @change="loginChange"/>

          <Button
            @click="
              () => {
                passRecoveryHandler();
              }
            "
            router-link="/newPassPage"
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
import { IonPage, IonContent, IonImg } from "@ionic/vue";

export default defineComponent({
  name: "passRecoveryPage",
  components: {
    IonContent,
    IonPage,
    Button,
    Back,
    Input,
    IonImg,
  },
  setup() {
    const router = useRouter();
    const { passRecoveryResponse, passRecoveryError } = storeToRefs(useLoginStore());
    const { passRecovery } = useLoginStore();
    const errorText = ref("");
    const login = ref("");
    const passRecoveryHandler = () => {
      passRecovery(login)
        .then(() => {
          console.log(passRecoveryResponse.value, passRecoveryError.value, "response");
          if (passRecoveryResponse?.value?.status === true) {
            router.push({
              name: "newPassPage",
              params: { recovery: true },
            });
          } else {
            console.log(passRecoveryError.value, "error");
          }
        })
        .catch((e) => {
          console.log(e, "error2");
          errorText.value = e;
        });
    };
    const loginChange = (e) => {
      login.value = e.target.value
    }
    return { router, passRecoveryHandler, login, loginChange };
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