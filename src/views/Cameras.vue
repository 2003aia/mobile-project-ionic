<template>
  <ion-page>
    <Back />

    <Layout
      :padding="true"
      height="false"
      outlineBtn="."
      :filledBtn="'.'"
      title="Мониторинг загруженности АГЗС"
    >
      <template v-slot:main-content>
        <!-- <ion-list v-for="el in cameras" :key="el"> -->
        <ion-card v-show="cameras?.length !== 0">
          <ion-img
            @click="openCam(cameras[0].url)"
            :src="cameras[0]?.preview"
          />
          <ion-card-header>
            <Button
              @click="openMap(cameras[0].map)"
              :name="'Посмотреть на карте'"
            ></Button>
            <ion-card-title>
              <ion-text class="sub-title">{{ cameras[0]?.name }}</ion-text>
            </ion-card-title>
          </ion-card-header>
        </ion-card>
        <!-- </ion-list> -->
      </template>
      <template v-slot:content>
        <div class="list" v-for="el in cameras2" :key="el">
          <LayoutBox :padding="true">
            <template v-slot:content>
              <ion-card v-show="el?.length !== 0">
                <ion-img @click="openCam(el.url)" :src="el?.preview" />
                <ion-card-header>
                  <Button
                    @click="openMap(el?.map)"
                    :name="'Посмотреть на карте'"
                  ></Button>
                  <ion-card-title>
                    <ion-text class="sub-title">{{ el?.name }}</ion-text>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
            </template>
          </LayoutBox>
        </div>
      </template>
      <ion-spinner name="bubbles" />
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import {
  IonPage,
  IonText,
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
} from "@ionic/vue";
import { useServicesStore } from "../stores/services";
import { mapActions } from "pinia";
import Button from "../components/Button.vue";
// import NewsItem from "../components/NewsItem.vue";

export default defineComponent({
  name: "camerasPage",
  components: {
    IonPage,
    Layout,
    IonText,
    Button,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    Back,
    LayoutBox,
    // NewsItem,
    IonSpinner,
  },
  methods: {
    ...mapActions(useServicesStore, ["getCameras"]),
    openMap(el) {
      window.open(el, "_system");
    },
    openCam(el) {
      window.open(el, "_system");
    },
  },
  computed: {
    cameras() {
      return this.$pinia.state.value?.services?.camerasResponse?.data
        ? this.$pinia.state.value?.services?.camerasResponse?.data
        : [];
    },
    cameras2() {
      return [...this.cameras.slice(1)];
    },
  },
  mounted() {
    this.getCameras();
    // console.log(this.cameras, "test");
  },
  setup() {
    const router = useRouter();

    return { router };
  },
});
</script>

<style scoped>
ion-card {
  border-radius: 15px;
  margin: 0;
  /* background: red; */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.list {
  border-radius: 15px;
  padding: 0;
  background: #f5f5f5;
}
</style>
