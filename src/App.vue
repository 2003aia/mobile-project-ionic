<template>
  <ion-app> <ion-router-outlet /> </ion-app>
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
  mounted() {
    const storageHandler = async () => {
      const store = new Storage();
      await store.create();
      const token = await store.get("token");
      // const tokenParsed = JSON.parsed(token);
      if (token) {
        this.$router.push("/tabs/personalAccounts");
      }
    };
    storageHandler();
  },
  setup() {
    return {};
  },
});
</script>
