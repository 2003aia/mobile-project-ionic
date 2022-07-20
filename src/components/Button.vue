<template>
  <ion-button
    class="button"
    fill="clear"
    :class="{
      backgroundGrey: grey === true,
      outline: outline === true,
    }"
  >
    <ion-text class="name ion-text-wrap">
      {{ name }}
    </ion-text>
  </ion-button>
</template>

<script>
import { defineComponent } from "vue";
import { IonButton, IonText } from "@ionic/vue";

export default defineComponent({
  name: "ExploreContainer",
  props: {
    name: String,
    grey: Boolean,
    outline: Boolean,
  },
  components: {
    IonButton,
    IonText,
  },
});
</script>

<style scoped>
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