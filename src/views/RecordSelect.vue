<template>
  <ion-page>
    <Back title="Назад" />
    <Layout outlineBtn="." filledBtn="." title="Вид услуг">
      <template v-slot:main-content>
        <ion-text class="title">Выберите варианты</ion-text>
        <ion-list>
          <ion-item
            router-link="/tabs/record"
            @click="selectServiceType('Q01')"
          >
            <ion-text class="sub-title">Прием документов </ion-text>
          </ion-item>
          <ion-item
            router-link="/tabs/record"
            @click="selectServiceType('Q03')"
          >
            <ion-text class="sub-title"
              >Заключение договора на поставку газа (квартира)</ion-text
            >
          </ion-item>
          <ion-item
            router-link="/tabs/record"
            @click="selectServiceType('Q06')"
          >
            <ion-text class="sub-title">Социальная газификация </ion-text>
          </ion-item>
        </ion-list>
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonList, IonItem } from "@ionic/vue";
import Back from "../components/Back.vue";
import { usePreEntryStore } from "../stores/preEntry";

export default defineComponent({
  name: "recordSelectPage",
  components: {
    IonPage,
    IonList,
    Layout,
    IonItem,
    Back,
    IonText,
  },
  setup() {
    const router = useRouter();
    const { setServiceType, fetchTime } = usePreEntryStore();
    return { router, setServiceType, fetchTime };
  },
  methods: {
    selectServiceType(type) {
      this.setServiceType(type);
      this.fetchTime();
    },
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-bottom: 10px;
  --inner-padding-end: 0;
  --inner-padding-top: 20px;
}
</style>
