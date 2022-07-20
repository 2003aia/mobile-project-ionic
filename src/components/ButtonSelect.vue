<template>
  <div class="choose" @click="btnSrc">
    <ion-text class="choose-text">
      {{ name }}
      <ion-text class="dot" v-if="required === true">*</ion-text></ion-text
    >
    <ion-icon class="choose-icon" :icon="caretDownSharp" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonIcon, IonText } from "@ionic/vue";
import { caretDownSharp } from "ionicons/icons";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "buttonSelect",
  props: {
    name: String,
    btnSrc: Function,
    required: Boolean,
  },
  components: {
    IonIcon,
    IonText,
  },
  setup() {
    const router = useRouter();

    return {
      router,
      caretDownSharp,
    };
  },
});
</script>

<style scoped>
.choose {
  border-radius: 8px;
  width: 100%;
  padding: 15px;
  border: solid 1px #e0e0e0;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.choose-text {
  color: #9e9e9e;
  font-weight: 400;
}

.choose-icon {
  display: flex;
  color: #9e9e9e;
  width: 15px;
  height: 15px;
  margin-left: auto;
}

.dot {
  color: #62d0ce;
}
</style>