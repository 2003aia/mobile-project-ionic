<template>
  <ion-page>
    <Back v-if="!tabs" />
    <ion-content :fullscreen="true" class="background">
      <div class="container">
        <div class="btn-wrapper">
          <Button class="btn" name="Оплата" />
          <Button
            class="btn"
            :grey="true"
            name="Показания"
            router-link="/personalAccountIndication"
          />
        </div>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Лицевой счет №123456789</p>
            </ion-text>
            <ion-item>
              <ion-text>Иванов Иван Иванович </ion-text>
            </ion-item>
            <ion-item>
              <ion-text> Автодорожная 11/4 </ion-text>
            </ion-item>
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">
                Сетевой газ (начисление по счету)
              </p>
            </ion-text>
            <ion-item>
              <ion-text>Задолженность:</ion-text>
              <ion-text slot="end" class="text-end"> -680,92 руб. </ion-text>
            </ion-item>
            <ion-item>
              <ion-text> Аванс:</ion-text>

              <ion-text slot="end" class="text-end"> 0 руб. </ion-text>
            </ion-item>
            <ion-text>
              <p class="title ion-text-start">
                Сетевой газ (начисление по норме)
              </p>
            </ion-text>
            <ion-item>
              <ion-text>Задолженность:</ion-text>
              <ion-text slot="end" class="text-end"> 0 руб. </ion-text>
            </ion-item>
            <ion-item>
              <ion-text> Аванс:</ion-text>

              <ion-text slot="end" class="text-end"> 0 руб. </ion-text>
            </ion-item>
            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input name="Введите сумму за сет. газ" :textBlue="true" />
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Техобслуживание</p>
            </ion-text>
            <ion-item>
              <ion-text> Задолженность: </ion-text>
              <ion-text slot="end" class="text-end">0 руб.</ion-text>
            </ion-item>
            <ion-item>
              <ion-text> Аванс:: </ion-text>
              <ion-text slot="end" class="text-end">0 руб.</ion-text>
            </ion-item>
            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input name="Введите сумму за техобслуж." :textBlue="true" />
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Итого к оплате</p>
            </ion-text>

            <Input name="123456" :textBlue="true" />
          </template>
        </layout-box>
        <Button
          name="Оплатить"
          @click="() => router.push('/personalAccountPay')"
        />
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
import { useRouter, useRoute } from "vue-router";
import Back from "../components/Back.vue";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  },
  props: {
    tabs: Boolean,
  },
  names: "personalAccauntPayment",
  components: {
    Input,
    LayoutBox,
    IonContent,
    Back,
    IonPage,
    Button,
    IonText,
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
  position: sticky;
  top: 5px;
  z-index: 1000;
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
