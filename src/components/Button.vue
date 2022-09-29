<template>
  <ion-button
    class="button"
    fill="clear"
    :class="{
      backgroundGrey: grey === true,
      outline: outline === true,
    }"
  >
    <ion-text class="name ion-text-wrap" v-if="loading===false">
      {{ name }}
    </ion-text>
    <ion-spinner :class="{dark: outline === true}" v-if="loading === true" name="bubbles" color="light"/>
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
  },
  components: {
    IonButton,
    IonText,
    IonSpinner,
  },
  setup() {
  }
});
</script>

<style scoped>
ion-spinner{
  margin-top: 0px;
  color: #fff;
}
.dark {
  color: #9E9E9E;
}
.button {
  --border-radius: 25px;
  height: 50px;
  display: flex;
  flex-direction: column;
  --background: linear-gradient(
    270.1deg,
    #7ae6e4 -21.62%,
    #0378b4 49.87%,
    #7ae6e4 119.88%
  );
  --background-activated: linear-gradient(
    270.1deg,
    #94e4e2 -21.62%,
    #0994da 49.87%,
    #9eebe9 119.88%
  );
}
.outline {
  --background: #f5f5f5;
  --border-width: 1px;
  --border-color: #0378b4;
  --border-style: solid;
}
.outline ion-text {
  color: #0378b4;
}

.backgroundGrey {
  --background: #eaeaea;
}

.backgroundGrey ion-text {
  color: black;
}

.name {
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
</style>