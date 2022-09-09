<template>
  <ion-page>
    <Back />
    <Layout
      :method="authUserHandler"
      filledBtn="Сохранить новый пароль"
      height="false"
      outlineBtn="."
    >
      <template v-slot:header-content>
        <ion-text
          v-if="route.params.recovery === 'true'"
          class="main-title ion-text-wrap ion-text-start"
        >
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
          На Ваш номер был отправлен код для создания пароля, введите его в
          соответствующее поле. Придумайте новый пароль.
        </ion-text>
        <br />

        <ion-item class="sub-margin">
          <ion-label class="ion-text-wrap">
            <ion-text class="sub-title">{{ phone }}</ion-text>
            <br />
            Номер телефона</ion-label
          ></ion-item
        >
        <div class="input" v-if="route.params?.edit === 'true'">
          <ion-text class="sub-title sub-margin">Введите код</ion-text>
          <Input :code="code" @change="codeChange" name="Введите код" />
        </div>
        <div class="input">
          <ion-text class="sub-title sub-margin">Новый пароль</ion-text>
          <Input
            :value="password"
            :changeHandler="passwordChange"
            name="Новый пароль"
          />
        </div>
        <div class="input">
          <ion-text class="sub-title sub-margin"
            >Повторите новый пароль</ion-text
          >
          <Input
            name="Повторите новый пароль"
            :value="confirmPassword"
            @change="confirmPasswordChange"
          />
        </div>
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
      if (route.params.edit) {
        if (code.value === route.params.code) {
          if (
            phone.value === "" ||
            password.value === "" ||
            confirmPassword.value === ""
          ) {
            error.value = "Заполните все поля!";
          } else {
            changePass(phone.value, password.value, confirmPassword.value)
              .then(() => {
                if (changePassResponse.value?.status === true) {
                  router.push("/tabs");
                } else {
                  error.value = changePassError.value;
                }
              })
              .catch((e) => {
                console.log(e, "error2");
              });
          }
        } else {
          error.value = "Введен неправильный код из СМС!";
        }
      } else {
        if (
          phone.value === "" ||
          password.value === "" ||
          confirmPassword.value === ""
        ) {
          error.value = "Заполните все поля!";
        } else {
          changePass(phone.value, password.value, confirmPassword.value)
            .then(() => {
              if (changePassResponse.value?.status === true) {
                router.push("/tabs");
              } else {
                error.value = changePassError.value;
              }
            })
            .catch((e) => {
              console.log(e, "error2");
            });
        }
      }
    };

    const storageHandler = async () => {
      const store = new Storage();
      await store.create();
      if (route.params.phone) {
        phone.value = route.params.phone;
      } else {
        phone.value = await store.get("login");
      }
    };

    onIonViewDidEnter(() => {
      storageHandler();
    });
    console.log(route.params, "params");
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
    };
  },
});
</script>

<style scoped>
/* 
.background {
  height: 100%;
}

.container {
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
} */
.header {
  padding: 15px;
  padding-top: 84px;
  padding-bottom: 56px;
  background: linear-gradient(327.65deg, #0378b4 -6.98%, #7ae6e4 119.27%);
}
.main {
  background: #ffffff;
  padding: 15px;
  border-radius: 15px;
  position: relative;
  top: -50px;
  left: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

ion-item {
  --padding-start: 0px;
}

.button {
  margin-top: -30px;
}

.sub-margin {
  margin-bottom: 15px;
}
.input {
  display: flex;
  flex-direction: column;
}

.sub-title {
  font-weight: 600;
  font-size: 16px;

  color: rgb(0, 0, 0);
}
</style>