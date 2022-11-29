<template>
  <ion-header>
    <ion-toolbar>
      <ion-item lines="none">
        <ion-button v-on:click="btnSrc" @click="
          () => {
            if (!noBack) {
        
              if (btnSrc) return;
              router.go(-1);
            }
        
          }
        " v-show="!noBack" fill="clear">
          <ion-icon class="arrow" :icon="arrowBackOutline" />
        </ion-button>
        <ion-button style="opacity: 0" v-show="noBack" fill="clear">
          <ion-icon class="arrow" :icon="arrowBackOutline" />
        </ion-button>
        <ion-title v-show="title">
          <p :class="{ textURL: true, 'textURL-margin': true, 'ion-text-start': !title, 'ion-text-center': title }">{{
              title && title
          }}</p>
        </ion-title>
        <ion-img v-show="!title" :src="require('../assets/img/logoSTNG.png')" />
        <!-- <ion-icon v-show="!noBack" class="arrow" :icon="arrowBackOutline" style="opacity: 0;" /> -->
        <ion-button v-show="!menu" @click="closeMenu" fill="clear">
          <ion-icon class="menu" :icon="menuOutline"></ion-icon>

        </ion-button>
        <ion-button style="opacity: 0" v-show="menu" @click="closeMenu" fill="clear">
          <ion-icon class="menu" :icon="menuOutline"></ion-icon>

        </ion-button>

      </ion-item>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {
  IonToolbar, IonItem,
  menuController,
  IonButton,
  IonTitle, IonHeader, IonIcon, IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline, menuOutline } from "ionicons/icons";

export default defineComponent({
  name: "backComponent",
  props: {
    name: String,
    btnSrc: Function,
    title: String,
    logo: Boolean,
    noBack: Boolean,
    menu: Boolean,
  },
  components: {
    IonToolbar,
    IonButton,
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
      menuOutline,
    };
  },
  methods: {
    closeMenu() {
      menuController.open("menu");
    },
  }
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
  --padding-start: 10px;
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

.menu {
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  color: #ffffff;
}

ion-button {
  margin: 0;
  margin-right: 10px;
  padding: 0;
  --padding-end: 0;
  --padding-start: 0;

}
</style>