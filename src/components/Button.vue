<template>
  <ion-button class="button" fill="clear" :disabled="disabled" :class="{
    backgroundGrey: grey === true,
    outline: outline === true,
    lightBlue: lightBlue === true,
    red: red === true
  }">
    <ion-text class="name ion-text-wrap" v-if="loading === false">
      {{ name }}
    </ion-text>
    <ion-spinner :class="{ dark: outline === true }" v-if="loading === true" name="bubbles" color="light" />
  </ion-button>
</template>

<script>
import { defineComponent } from "vue";
import { IonButton, IonText, IonSpinner } from "@ionic/vue";

export default defineComponent({
  name: "ExploreContainer",
  props: {
    name: String,
    grey: Boolean,
    outline: Boolean,
    loading: Boolean,
    disabled: Boolean,
    lightBlue: Boolean,
    red: Boolean
  },
  components: {
    IonButton,
    IonText,
    IonSpinner,
  },
  setup() { },
});
</script>

<style scoped>
ion-spinner {
  margin-top: 0px;
  color: #fff;
}

.dark {
  color: #9e9e9e;
}

.button {
  --border-radius: 25px;
  height: 45px;
  display: flex;
  flex-direction: column;
  --background: linear-gradient(91.35deg, #1C7AB1 1.84%, #10407D 101.1%);

  --background-activated: linear-gradient(270.1deg,
      #94e4e2 -21.62%,
      #0994da 49.87%,
      #9eebe9 119.88%);
}

.outline {
  --background: #ffffff00;
  --border-width: 1px;
  --border-color: #0378b4;
  --border-style: solid;
}

.outline ion-text {
  color: #0378b4;
}

.backgroundGrey {
  --background: #268FCC;

}

.backgroundGrey ion-text {
  color: #8BD4FF;
}

.lightBlue {
  --background: linear-gradient(89.74deg, #75E2E4 -0.72%, #2AA0DC 49.53%, #75E2E4 99.77%);

}

.red {
  --background: #ffffff00;
  --border-width: 1px;
  --border-color: #dd2c00;
  --border-style: solid;
}
.red ion-text {
  color: #dd2c00;
}

.name {
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
</style>
