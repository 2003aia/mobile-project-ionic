<template>
  <ion-content :fullscreen="true" class="background">
    <div v-bind:class="{ height: height === 'true' }" class="container">
      <div class="header">
        <ion-text>
          <h1 class="main-title ion-text-wrap ion-text-start">
            {{ title }}
          </h1>
        </ion-text>

        <slot name="header-content" />
      </div>

      <div class="main">
        <slot name="main-content" />
      </div>

      <div class="content">
        <slot name="content" />
      </div>

      <Button
        @click="method"
        :router-link="btnSrc"
        v-if="filledBtn !== '.'"
        class="button"
        :name="filledBtn"
      ></Button>
      <div class="outline">
        <Button
          @click="method2"
          v-if="outlineBtn !== '.'"
          :outline="true"
          :name="outlineBtn"
        >
        </Button>
      </div>
    </div>
  </ion-content>
</template>
<script>
import { defineComponent } from "vue";
import { IonContent, IonText } from "@ionic/vue";
import Button from "./Button.vue";
export default defineComponent({
  setup() {},
  name: "layoutView",
  components: {
    IonContent,
    Button,
    IonText,
  },
  props: {
    method: {
      type: Function,
    },
    method2: {
      type: Function,
    },
    outlineBtn: String,
    btnSrc: String,
    filledBtn: String,
    title: String,
    height: String,
  },
});
</script>

<style scoped>

.container {
  padding: 0;
}
.header {
  padding: 15px;
  padding-top: 34px;
  padding-bottom: 56px;
  background: linear-gradient(327.65deg, #0378b4 -6.98%, #7ae6e4 119.27%);
}
.content {
  margin-top: -50px;
  margin-bottom: 50px;
  padding: 15px;
  background-color: #f5f5f5;
}

.main {
  background: rgb(255, 255, 255);
  padding: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 15px;
  position: relative;
  top: -50px;
  left: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.outline {
  margin-top: 45px;
  margin-bottom: 15px;
}

.button {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  /*  margin-bottom: 15px; */
}
</style>