<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/main')" />
    <Layout
      :btnSrc="'/tabs/services'"
      height="false"
      outlineBtn="."
      filledBtn="Создать заявку"
      title="Мои заявки"
    >
      <template v-slot:main-content>
        <ion-row>
          <ion-col> № </ion-col>
          <ion-col> Дата </ion-col>
          <ion-col> Сервис </ion-col>
          <ion-col> Статус </ion-col>
          <ion-col> Адрес </ion-col>
        </ion-row>
        <ion-list v-for="el in listServices" :key="el">
          <ion-row
            :class="{
              'ion-row-last':
                listServices[listServices?.length - 1]?.number === el?.number,
            }"
          >
            <ion-col>
              <ion-text class="sub-title">{{ el.number }}</ion-text>
            </ion-col>
            <ion-col>
              <ion-text class="sub-title">
                {{ el.date }}
              </ion-text>
            </ion-col>
            <ion-col>
              <ion-text class="sub-title">
                {{ el.service }}
              </ion-text>
            </ion-col>
            <ion-col>
              <ion-text class="sub-title">
                {{ el.status }}
              </ion-text>
            </ion-col>
            <ion-col>
              <ion-text class="sub-title">
                {{ el.address }}
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-list>
        
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import {
  IonPage,
  IonText,
  /*  IonItem, */ IonList,
  IonRow,
  IonCol,
} from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import { useServicesStore } from "../stores/services";
import { mapActions } from "pinia";

export default defineComponent({
  name: "myRequestsPage",
  components: {
    Back,
    /* IonItem, */
    IonRow,
    IonCol,
    IonPage,
    Layout,
    IonList,
    IonText,
  },
  computed: {
    listServices() {
      return this.$pinia.state.value?.services?.listServicesResponse?.data;
    },
  },
  methods: {
    ...mapActions(useServicesStore, ["getListServices"]),
  },
  mounted() {
    this.getListServices();
  },
  data() {
    return {};
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
ion-row {
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: solid 1px #e0e0e0;
}
.ion-row-last {
  border-bottom: none;
}
.sub-title {
  word-break: break-all;
}
</style>
