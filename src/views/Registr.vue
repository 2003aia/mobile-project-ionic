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
            v-mask="'+7 (###) ###-##-##'"
            type="tel"
            name="Телефон"
            :required="true"
            :value="phone"
            :changeHandler="changePhone"
          />
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
            <ion-checkbox
              @update:modelValue="check = $event"
              :modelValue="check"
              slot="start"
            ></ion-checkbox>
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
            :loading="loading"
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
          <Input name="Введите код" :value="code" @change="changeCode" />
          <Input
            name="Введите новый пароль"
            :value="password"
            type="password"
            @change="changePassword"
          />

          <Input
            type="password"
            name="Повторите новый пароль"
            :value="passwordConfirm"
            @change="changePasswordConfirm"
          />

          <ion-text v-if="errorText">
            <p class="ion-text-start error">
              {{ errorText }}
            </p>
          </ion-text>
          <Button
            name="Подтвердить"
            :loading="loading2"
            @click="
              () => {
                codeUserHandler();
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
import { mask } from "vue-the-mask";
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
              errorText.value = registrResponse?.value?.message;
            }
          })
          .catch((e) => {
            console.log(e, "error");
            errorText.value = e;
          });
      } else {
        errorText.value = "Заполните поля!";
      }
    };
    const codeUserHandler = async () => {
      /* if (codeResponse.value === code.value) {
        const myModel = phone.value.replace(/\D+/g, "");
        router.push({ name: "newPassPage", params: { phone: myModel } });
      } else {
        errorText.value = "Введен неправильный код";
      } */
      if (password.value === passwordConfirm.value) {
        loading2.value = true;
        registrUser2(code.value, password.value).then(() => {
          loading.value = false;
          if (registrResponse2.value.error === false) {
            router.push("/tabs");
          } else {
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