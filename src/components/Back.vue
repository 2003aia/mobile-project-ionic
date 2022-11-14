<template>
  <ion-header>
    <ion-toolbar>
      <ion-item v-on:click="btnSrc" @click="
        () => {
          if (!noBack) {
      
            if (btnSrc) return;
            router.go(-1);
          }
      
        }
      " lines="none">
        <ion-icon v-show="!noBack" class="arrow" :icon="arrowBackOutline" />
        <ion-title v-show="title">
          <p :class="{ textURL: true, 'textURL-margin': true, 'ion-text-start': !title, 'ion-text-center': title }">{{
              title && title
          }}</p>
        </ion-title>
        <ion-img v-show="!title" :src="require('../assets/img/logoSTNG.png')" />
        <ion-icon v-show="!noBack" class="arrow" :icon="arrowBackOutline" style="opacity: 0;" />

      </ion-item>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonToolbar, IonItem, IonTitle, IonHeader, IonIcon, IonImg, } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";

export default defineComponent({
  name: "backComponent",
  props: {
    name: String,
    btnSrc: Function,
    title: String,
    logo: Boolean,
    noBack: Boolean,
  },
  components: {
    IonToolbar,
    IonTitle,
    IonHeader,
    IonImg,
    IonItem,
    IonIcon,
  },
  setup() {
    const router = useRouter();
    return {
      router,
      arrowBackOutline,
    };
  },
});
</script>

<style scoped>
ion-img {
  height: 44px;
  width: 130px;
  margin: auto;
}

ion-toolbar {
  --background: #1F3766;
}


ion-item {
  --background: #1F3766;
  --padding-start: 15px;
  --padding-bottom: 0px;
}

.textURL-margin {
  margin: 0;
  color: #ffffff;
}

.arrow {
  width: 32px;
  height: 32px;
  color: #ffffff;
}
</style>