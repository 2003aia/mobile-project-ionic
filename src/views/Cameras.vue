<template>
  <ion-page>
    <Back />

    <Layout :padding="true" height="false" outlineBtn="." :filledBtn="'.'" title="Мониторинг загруженности АГЗС">
      <template v-slot:main-content>
        <ion-card v-show="cameras?.length !== 0">
          <div class="videoWrapper" v-show="cameras[0]?.status">
            <iframe class="video" :src="cameras[0]?.url" frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture" allowfullscreenшщ></iframe>
          </div>
          <ion-img v-show="!cameras[0]?.status" :src="cameras[0]?.preview" />

          <ion-card-header>
            <Button @click="openMap(cameras[0]?.map)" :name="'Посмотреть на карте'"></Button>
            <ion-card-title>
              <ion-text class="sub-title">{{ cameras[0]?.name }}</ion-text>
            </ion-card-title>
          </ion-card-header>
        </ion-card>
      </template>
      <template v-slot:content>
        <div class="list" v-for="el in cameras2" :key="el">
          <LayoutBox :padding="true">
            <template v-slot:content>
              <ion-card v-show="el?.length !== 0">
                <div v-show="el.status" class="videoWrapper">
                  <iframe class="video" height="100%" width="100%" :src="el.url" frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>

                <ion-img v-show="!el.status" :src="el?.preview" />
                <ion-card-header>
                  <Button @click="openMap(el?.map)" :name="'Посмотреть на карте'"></Button>
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

.videoWrapper {
  position: relative;
  /* overflow: hidden;
  width: 100%;
  padding-top: 56.25%; */


}

iframe {
  /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%; */
  transform: scale(.425);
  transform-origin: left;
  width: calc(100% / .425);
  height: 435px;
  margin-top: -130px;
  margin-bottom: -130px;
}

.list {
  border-radius: 15px;
  padding: 0;
  background: #f5f5f5;
}
</style>
