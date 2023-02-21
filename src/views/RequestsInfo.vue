<template>
  <ion-page>
    <Back />
    <Layout :btnSrc="'/personalAccountPayment'" height="false" outlineBtn="." filledBtn="." title="Мои заявки">
      <template v-slot:main-content>
        <!-- <div v-for="el in data" :key="el.date"> -->
        <ion-item lines="none">
          <ion-text>
            <p class="title ion-text-start">
              {{ el?.service }}
            </p>
          </ion-text>
        </ion-item>

        <div>
          <ion-item>
            <ion-text> №: </ion-text>
            <ion-text class='sub-title' slot="end">
              {{ el?.number }}
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text> Дата: </ion-text>
            <ion-text class='sub-title' slot="end">
              {{ el?.date.substring(0, 10) }}
            </ion-text>
          </ion-item>

          <ion-item>
            <ion-text> Статус: </ion-text>
            <ion-text class='sub-title' slot="end">
              {{ el?.status }}
            </ion-text>
          </ion-item>
          <ion-item lines="none">
            <ion-text> Адрес: </ion-text>
            <ion-text slot="end" class='sub-title'>
              {{ el?.address }}

            </ion-text>
          </ion-item>
        </div>
        <!-- </div> -->
      </template>
      <LayoutBox>
        <template v-slot:content> </template>
      </LayoutBox>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem, } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import LayoutBox from "../components/LayoutBox.vue";

export default defineComponent({
  name: "requestsInfo",
  components: {
    Back,
    IonItem,
    IonPage,
    Layout,
    IonText,
    LayoutBox,
  },
  data() {
    return {

    }
  },
  computed: {
    el() {
      return this.$pinia.state.value.services.requestsInfo
    }
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
.text {
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>