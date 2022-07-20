<template>
  <label for="file">
    <input id="file" type="file" />
    <ion-item>
      <ion-icon slot="start" :icon="documentTextOutline" />
      <ion-text class="sub-title"> Загрузить документ </ion-text>
      <ion-img slot="end" :src="require('@/assets/img/scrape.png')" />
    </ion-item>
  </label>
</template>


<script>
import { defineComponent } from "vue";
import { IonText, IonItem, IonIcon, IonImg } from "@ionic/vue";
import { documentTextOutline } from "ionicons/icons";

export default defineComponent({
  components: {
    IonText,
    IonItem,
    IonIcon,
    IonImg,
  },
  setup() {
    return { documentTextOutline };
  },
  methods: {
    onFocusText: function () {
      console.log("focus");
      this.$refs.text.focus();
    },
  },
  data() {
    return {};
  },
  name: "inputFileView",
  props: {
    required: Boolean,
    textBlue: Boolean,
    name: String,
  },
});
</script>

<style scoped>
ion-icon {
  width: 24px;
  height: 24px;
  color: #0378b4;
  margin-right: 15px;
  --ionicon-stroke-width: 40px;
}
ion-img {
  width: 24px;
  height: 24px;
  margin-left: 0;
}
label {
  display: block;
  margin-bottom: 0px;
}
input[type="file"] {
  display: none;
}
</style>