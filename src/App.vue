<template>
  <ion-app> <ion-router-outlet /> </ion-app
  ><!--  -->
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import { Storage } from "@ionic/storage";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const store = new Storage();
    const createStorage = async () => {
      await store.create();
    };
    createStorage();
    return {};
  },
});
</script>