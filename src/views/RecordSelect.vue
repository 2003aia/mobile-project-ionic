<template>
  <ion-page>
    <Back  title='Назад'/>
    <Layout outlineBtn="." filledBtn="." title="Вид услуг">
      <template v-slot:main-content>
        <ion-text class="title">Выберите варианты</ion-text>
        <ion-list>
          <ion-item router-link="/tabs/record">
            <ion-text class="sub-title">Прием документов </ion-text>
          </ion-item>
          <ion-item>
            <ion-text class="sub-title"
              >Заключение договора на поставку газа (квартира)</ion-text
            >
          </ion-item>
          <ion-item>
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
import Back from '../components/Back.vue'

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
    return { router };
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
