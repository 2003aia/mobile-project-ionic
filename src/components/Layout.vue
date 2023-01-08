<template>
  <ion-content :fullscreen="true" class="background">

    <div v-bind:class="{ height: height === 'true' }" class="container">
      <div class="fone">
        <ion-img class="pattern" :src="require('../assets/img/pattern2.png')" />

        <div class="header">

          <ion-text>
            <h1 class="main-title ion-text-wrap ion-text-start">
              {{ title }}
            </h1>
          </ion-text>

          <slot name="header-content" />
        </div>
      </div>


      <div class="main" v-bind:class="{ padding: padding }">
        <slot name="main-content" />
      </div>

      <div class="content">
        <slot name="content" />
      </div>

      <Button :disabled="disabled" @click="method" :loading="loading" :router-link="btnSrc" v-if="filledBtn !== '.'" class="button"
        :name="filledBtn"></Button>
      <div class="outline">
        <Button @click="method2" :loading="loading2" v-if="outlineBtn !== '.'" :outline="true" :name="outlineBtn">
        </Button>
      </div>
    </div>
  </ion-content>
</template>
<script>
import { defineComponent } from "vue";
import { IonContent, IonText, IonImg, } from "@ionic/vue";
import Button from "./Button.vue";
export default defineComponent({
  setup() { },
  name: "layoutView",
  components: {
    IonContent,
    Button,
    IonText,
    IonImg,
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
    padding: Boolean,
    title: String,
    height: String,
    loading: Boolean,
    loading2: Boolean,
    disabled: Boolean
  },
});
</script>

<style scoped>
.container {
  padding: 0;
}

.pattern {
  position: absolute;
  height: fit-content;
  width: 350px;
  bottom: 0;
  /* padding:0 15px; */
  left: 0;
  right: 0;
  /* margin-left: auto; */
  margin-right: auto;
}

.fone {
  background: linear-gradient(156.39deg, #1B80B9 7.75%, #0E3977 100.99%);
  position: relative;
}

.header {
  padding: 15px;
  padding-top: 34px;
  padding-bottom: 56px;
  background: #ffffff00;
  position: relative;
}


.main-title {
  position: relative;
  z-index: 10000000;
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

.padding {
  padding: 0px;

}

ion-text {
  z-index: 10000000;
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
