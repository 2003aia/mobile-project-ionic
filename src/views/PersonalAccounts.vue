<template>
  <ion-page>
    <Back />
    <Layout
      btnSrc="/registrPage"
      height="false"
      outlineBtn="."
      filledBtn="."
      title="Лицевой счёт"
    >
      <template v-slot:main-content>
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
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem, IonIcon } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";

export default defineComponent({
  name: "personalAccaountPage",
  components: {
    Back,
    IonPage,
    Layout,
    IonText,
    IonItem,
    IonIcon,
  },
  setup() {
    const router = useRouter();
    return {
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
    };
  },
});
</script>

<style scoped>
ion-icon {
  width: 32px;
  height: 32px;
  color: #0378b4;
  --ionicon-stroke-width: 35px;
}

.icon-start {
  margin-right: 20px;
}
.icon-end {
  width: 24px;
  height: 24px;
  margin-left: 0px;
}
</style>