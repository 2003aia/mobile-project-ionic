<template>
  <ion-page>
    <Back title="Назад" />
    <Layout outlineBtn="." filledBtn="." title="Вид услуг">
      <template v-slot:main-content>
        <ion-text class="title">Выберите варианты</ion-text>
        <div>
          <ion-item router-link="/tabs/record" @click="selectServiceType({operation: '12', name: 'Прием документов'})">
            <ion-text class="sub-title">Прием документов</ion-text>
          </ion-item>
          <ion-item router-link="/tabs/record" @click="selectServiceType({operation: '14', name: 'Заключение договора на поставку газа (квартира)'})">
            <ion-text class="sub-title">Заключение договора на поставку газа (квартира)</ion-text>
          </ion-item>
          <ion-item router-link="/tabs/record" @click="selectServiceType({operation: '16', name: 'Социальная газификация'})">
            <ion-text class="sub-title">Социальная газификация </ion-text>
          </ion-item>
        </div>
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem } from "@ionic/vue";
import Back from "../components/Back.vue";
import { usePreEntryStore } from "../stores/preEntry";

export default defineComponent({
  name: "recordSelectPage",
  components: {
    IonPage,
    Layout,
    IonItem,
    Back,
    IonText,
  },
  setup() {
    const router = useRouter();
    const { /* setServiceType, fetchTime, */ getDates } = usePreEntryStore();
    return { router, getDates };
  },
  methods: {
    selectServiceType(type) {
      // this.setServiceType(type);
      // this.fetchTime();
      this.getDates(type.operation)
      
      this.$pinia.state.value.preEntry.reserveData = type
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
