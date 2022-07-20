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
          <Input name="Телефон или email" />

          <Button
            @click="
              () => {
                router.push({
                  name: 'newPassPage',
                  params: { recovery: true },
                });
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
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import Back from "../components/Back.vue";

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
    return { router };
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
  height: 100%;
}

.text {
  margin-bottom: 20px;
}

.container {
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
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