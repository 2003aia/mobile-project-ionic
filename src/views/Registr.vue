<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/authPage')" />
    <ion-content :fullscreen="true" class="background">
      <div class="container">
        <ion-img
          class="logo"
          :src="require('@/assets/img/logoSTNG.png')"
          alt="logo"
        ></ion-img>

        <ion-text>
          <p class="title">Регистрация</p>
        </ion-text>

        <div v-if="codeSent == false">
          <ion-text>
            <p class="text ion-text-center">
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
          <Input
            type="number"
            name="Телефон"
            :required="true"
            :value="phone"
            :changeHandler="changePhone"
          />
          <Input
            :value="email"
            :changeHandler="changeEmail"
            type="email"
            name="email"
            v-model="email"
          />

          <ion-text v-if="registrError?.response?.data?.error">
            <p class="ion-text-start error">
              {{ registrError.response.data.error }}
            </p>
          </ion-text>

          <ion-item class="check">
            <ion-checkbox slot="start"></ion-checkbox>
            <ion-text>Согласен (-на) на обработку персональных данных</ion-text>
          </ion-item>

          <ion-button
            class="textURL ion-text-wrap"
            fill="clear"
            router-link="/termsPage"
          >
            Пользовательское соглашение
          </ion-button>
          <Button
            name="Зарегистрироваться"
            @click="
              () => {
                registrUserHandler();
              }
            "
          />
        </div>

        <div v-else>
          <p class="text ion-text-center">
            Мы отправили проверочный код на номер {{ phone.value }}
          </p>
          <Input name="Введите код" />
          <Button
            name="Подтвердить"
            @click="
              () => {
                router.push({
                  name: 'newPassPage',
                  params: { recovery: false },
                });
              }
            "
          />
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
  IonCheckbox,
  IonText,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login";
import { Storage } from "@ionic/storage";

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
  setup() {
    const { registrResponse, registrError } = storeToRefs(useLoginStore());
    const { registrUser } = useLoginStore();
    const router = useRouter();
    let email = ref("");
    let phone = ref("");
    let errorText = ref("");
    console.log(
      registrResponse?.value?.data,
      "response",
      registrError.value?.response?.data?.error
    );

    const registrUserHandler = async () => {
      registrUser(phone.value)
        .then(async () => {
          const store = new Storage();
          await store.create();
          await store.set(
            "token",
            JSON.stringify(registrResponse?.value?.data)
          );
          await store.set("login", phone.value);
          if (registrResponse.value?.status === true) {
            router.push({ name: "newPassPage", params: { recovery: false } });
          } else {
            errorText = registrError.value?.response?.data?.error;
          }
        })
        .catch((e) => {
          console.log(e, "error");
          errorText = e;
        });
    };

    const changePhone = (e) => {
      phone.value = e.target.value;
      console.log(e.target.value, "current value", phone.value);
    };
    const changeEmail = (e) => {
      email.value = e.target.value;
      console.log(e.target.value, "current value", email.value);
    };
    return {
      registrUserHandler,
      router,
      email,
      phone,
      changeEmail,
      registrError,
      errorText,
      changePhone,
    };
  },
  data() {
    return {
      codeSent: false,
    };
  },
  methods: function () {},
});
</script>

<style scoped>
.background {
  --background: #fff;
}

.container {
  background: #fff;
}

.text {
  margin-bottom: 20px;
}

.dot {
  color: #62d0ce;
}

.logo {
  height: 80px;
  width: 240px;
  margin: auto;
  margin-bottom: 30px;
}
</style>