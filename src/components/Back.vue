<template>
  <ion-header>
    <ion-toolbar>
      <ion-item
        v-on:click="btnSrc"
        @click="
          () => {
            if (btnSrc) return;
            router.go(-1);
          }
        "
        lines="none"
      >
        <ion-icon class="arrow" :icon="arrowBackOutline" />
        <ion-title
          ><p class="textURL textURL-margin ion-text-start">Назад</p>
        </ion-title></ion-item
      >
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonToolbar, IonItem, IonTitle, IonHeader, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";

export default defineComponent({
  name: "backComponent",
  props: {
    name: String,
    btnSrc: Function,
    title: String,
  },
  components: {
    IonToolbar,
    IonTitle,
    IonHeader,
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
ion-toolbar {
  --background: #ffffff;
}

ion-item {
  --background: #ffffff;
  --padding-start: 15px;
  --padding-bottom: 0px;
}

.textURL-margin {
  margin: 0;
  color: #0378b4;
}

.arrow {
  width: 32px;
  height: 32px;
  color: #0378b4;
}
</style>