<template>
  <ion-page>
    <Back />
    <Layout height="false" outlineBtn="." filledBtn="." title="Лицевой счёт">
      <template v-slot:main-content>
        <ion-item lines="none">
          <ion-text
            ><p class="title ion-text-start">
              Лицевой счет {{ data.number }}
            </p></ion-text
          >
          <ion-icon slot="end" :icon="ellipsisVertical" />
        </ion-item>

        <ion-list>
          <ion-item>
            <ion-text>{{ data.name }}</ion-text>
          </ion-item>
          <ion-item>
            <ion-text>{{ data.address }}</ion-text>
          </ion-item>
          <ion-item>
            <ion-text> Задолженность: </ion-text>
            <ion-text slot="end" class="text-blue">{{ data.debt }}</ion-text>
          </ion-item>
          <ion-item>
            <ion-text> Пени: </ion-text>
            <ion-text class="text-blue" slot="end">{{
              data.penalties
            }}</ion-text>
          </ion-item>
        </ion-list>
      </template>
      <template v-slot:content>
        <Button
          class="btn"
          name="Оплата"
          router-link="/personalAccountPayment"
        />

        <Button class="btn" :outline="true" name="Внести показания" router-link="/personalAccountIndication" />
        <Button class="btn" :outline="true" name="История платежей" />
        <div class="footer">
          <LayoutBox>
            <template v-slot:content>
              <ion-item router-link="/personalAccountNew">
                <ion-Icon
                  class="icon-start"
                  size="large"
                  slot="start"
                  :icon="pencilOutline"
                ></ion-Icon>
                <ion-text class="sub-title">Добавить лицевой счет</ion-text>
                <ion-icon
                  class="icon-end"
                  size="large"
                  slot="end"
                  :icon="chevronForwardOutline"
                ></ion-icon>
              </ion-item>
              <ion-item router-link="/personalAccountInfoSearch">
                <ion-Icon
                  class="icon-start"
                  size="large"
                  slot="start"
                  :icon="documentTextOutline"
                ></ion-Icon>
                <ion-text class="sub-title">Узнать лицевой счет</ion-text>
                <ion-icon
                  size="large"
                  class="icon-end"
                  slot="end"
                  :icon="chevronForwardOutline"
                ></ion-icon>
              </ion-item>
            </template>
          </LayoutBox>
        </div>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem,  IonIcon } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
  ellipsisVertical,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import Button from "../components/Button.vue";
import LayoutBox from "../components/LayoutBox.vue";

export default defineComponent({
  name: "personalAccauntInfoPage",
  components: {
    Back,
    IonPage,
    IonItem,
    Button,
    Layout,
    IonText,
    LayoutBox,
    IonIcon,
  },
  data() {
    return {
      data: {
        number: "№123456789",
        name: "Иванов Иван Иванович",
        address: "Якутск, ул. Автодорожная 11/4",
        debt: "-680,92 руб.",
        penalties: "0 руб.",
      },
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
      ellipsisVertical,
    };
  },
});
</script>

<style scoped>
.text-blue {
  color: #0378b4;
  font-weight: 700;
  margin-left: 0;
}
ion-icon {
  width: 20px;
  height: 20px;
  color: #0378b4;
  margin-left: 0;
}
.icon-start {
  width: 32px;
  height: 32px;
  margin-right: 20px;
}
.icon-end {
  width: 24px;
  height: 24px;
  margin-left: 0px;
}

.btn {
  margin-bottom: 15px;
}
.footer {
  width: 100%;
  margin-top: 30px;
  height: 100%;
}
</style>