<template>
  <ion-page>
    <Back />
    <Layout
      :method="nextHandler"
      height="false"
      :filledBtn="'.'"
      :title="
        route.params.connection === 'true'
          ? 'Подключение в случаях '
          : 'Вид работ'
      "
      outlineBtn="."
    >
      <template v-slot:main-content>
        <ion-text class="title">Выберите варианты</ion-text>
        <div v-if="route.params.connection === 'true'">
          <ion-list v-for="el in connections" v-bind:key="el.id">
            <ion-item
              @click="
                () => {
                  router.push({params: {connect: el.name}, name: '/tabs/servicesTechAlliance'});
                }
              "
            >
              <ion-text class="sub-title">{{ el.name }} </ion-text>
            </ion-item>
          </ion-list>
        </div>
        <div v-if="route.params.connection === 'false'">
          <ion-list v-for="el in gas" v-bind:key="el.id">
            <ion-item
              @click="
                () => {
                  router.push({params: {harakter: el.name},name:'/tabs/servicesTechAlliance'});
                }
              "
            >
              <ion-text class="sub-title">{{ el.name }} </ion-text>
            </ion-item>
          </ion-list>
        </div>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonList, IonItem } from "@ionic/vue";
import Back from "../components/Back.vue";
import { documentTextOutline, arrowDownOutline } from "ionicons/icons";

export default defineComponent({
  name: "servicesTechAllianceSelect",
  components: {
    IonPage,
    IonList,
    Layout,
    IonItem,
    Back,
    IonText,
  },
  data() {
    return {
      connection: false,
      connections: [
        {
          id: 1,
          name: "Необходимоть подключения (технологичекого присоеднинения) к сети газораспределения обьекта капитального строительства  ",
        },
        {
          id: 2,
          name: "Увлечения обьема потребления газа (или) пропускной способности (для сети газораспределения) подключаемого обьекта капитального строительства ",
        },
      ],
      gas: [
        {
          id: 1,
          name: "Отопление ",
        },
        {
          id: 2,
          name: "Пищеприготовления   ",
        },
        {
          id: 3,
          name: "Другое ",
        },
        {
          id: 4,
          name: "Отопление и пищеприготовления  ",
        },
      ],
    };
  },
  methods: {
    nextHandler: function () {
      this.next = true;
      console.log("test");
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    console.log(route.params, "test");
    return { router, documentTextOutline, arrowDownOutline, route };
  },
});
</script>

<style scoped>
ion-icon {
  height: 32px;
  width: 32px;
  --ionicon-stroke-width: 40px;
  color: #0378b4;
  margin-right: 15px;
}

.icon-arrow {
  --ionicon-stroke-width: 10px;
  height: 24px;
  width: 24px;
}
ion-item {
  --padding-bottom: 0;
  --inner-padding-bottom: 10px;
}
</style>
