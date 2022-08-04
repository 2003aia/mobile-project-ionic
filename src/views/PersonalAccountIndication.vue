<template>
  <ion-page>
    <Back :btnSrc="()=>router.push('/tabs/main')"/>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="btn-wrapper">
          <Button
            class="btn"
            :grey="true"
            name="Оплата"
            router-link="/personalAccountPayment"
          />
          <Button class="btn" name="Показания" />
        </div>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Лицевой счет №123456789</p>
            </ion-text>
            <ion-item>
              <ion-text> Иванов Иван Иванович </ion-text>
            </ion-item>
            <ion-item>
              <ion-text> Автодорожная 11/4 </ion-text>
            </ion-item>
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Счетчик</p>
            </ion-text>
            <ion-item>
              <ion-text>G-4 №123456789 пл. 1234</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>От 01.02.2022</ion-text>
            </ion-item>

            <ion-item>
              <ion-text>Показания</ion-text>
              <ion-text slot="end" class="text-end"> 12345</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>Дата следующей проверки</ion-text>

              <ion-text slot="end" class="text-end"> 01.05.2022 </ion-text>
            </ion-item>
            <ion-item>
              <ion-text>Дата последнего показания</ion-text>

              <ion-text slot="end" class="text-end"> 01.05.2022 </ion-text>
            </ion-item>
            <ion-text>
              <p class="title ion-text-start">Счетчик</p>
            </ion-text>
            <Input :textBlue="true" :name="'Введите показания счетчика'" />
          </template>
        </layout-box>
        <Button :name="'Подтвердить'" />
        <ion-text>
          <p class="ion-text-center">
            В случае не правильного ввода показаний счетчика, следует
            обратиться в абоненский отдел УГРС по тел. 8(4112)-42-00-30,
            46-00-41, 46-00-71
          </p>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonText, IonItem } from "@ionic/vue";
import Button from "../components/Button.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Input from "../components/Input.vue";
import Back from '../components/Back.vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  setup() {
    const router= useRouter()
    return {
      router
    }
  },
  names: "personalAccauntIndication",
  components: {
    Back,
    LayoutBox,
    IonContent,
    IonPage,
    Button,
    IonText,
    Input,
    IonItem,
  },
});
</script>

<style scoped>
.container {
  padding: 15px;
  background: #f5f5f5;
}
.btn-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #eaeaea;
  border-radius: 25px;
  padding-right: 2px;
  padding-left: 2px;
margin-bottom: 20px;
  flex-wrap: wrap;
}
.btn {
  flex-grow: 1;
}

.text-end {
  color: #0378b4;
  font-weight: 700;
  margin-left: 0;
}
.title {
  margin-top: 20px;
}
</style>
