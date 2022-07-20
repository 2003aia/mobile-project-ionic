<template>
  <ion-item class="check">
    <ion-checkbox slot="start"></ion-checkbox>
    <ion-text>{{ name }}</ion-text>
  </ion-item>
</template>
<script>
import { defineComponent } from "vue";
import { IonText, IonItem, IonCheckbox } from "@ionic/vue";

export default defineComponent({
  components: {
    IonText,
    IonItem,
    IonCheckbox,
  },
  setup() {},
  methods: {
    onFocusText: function () {
      console.log("focus");
      this.$refs.text.focus();
    },
  },
  data() {
    return {};
  },
  name: "inputCheckBoxView",
  props: {
    name: String,
  },
});
</script>

<style scoped>
ion-checkbox{
 
}
</style>