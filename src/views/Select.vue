<template>
  <ion-page>
    <Back title="Назад" />
    <Layout outlineBtn="." filledBtn="." title="Категории">
      <template v-slot:main-content>
        <ion-text class="title">Выберите варианты</ion-text>
        <ion-list v-for="el in variants" :key="el.id">
          <ion-item @click="selectCategorie(el)">
            <ion-text class="sub-title">{{ el.category }}</ion-text>
          </ion-item>
          <!--    <ion-item>
            <ion-text class="sub-title"
              >Заключение договора на поставку газа (квартира)</ion-text
            >
          </ion-item>
          <ion-item>
            <ion-text class="sub-title">Социальная газификация </ion-text>
          </ion-item> -->
        </ion-list>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonList, IonItem } from "@ionic/vue";
import Back from "../components/Back.vue";

export default defineComponent({
  name: "selectPage",
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
    const route = useRoute();
    const selected = ref("");
    const variants = JSON.parse(route.params.variants);
    console.log(JSON.parse(route.params.variants), "test");
    const selectCategorie = (props) => {
      console.log(props, "props");
      router.push({
        name: "appealsMessages",
        params: { selected: JSON.stringify(props), newAppeal: true },
      });
      selected.value = props;
    };
    return { router, route, variants, selectCategorie };
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-bottom: 10px;
}
</style>
