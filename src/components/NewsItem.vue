<template>
  <ion-item lines="none" :router-link="name">
    <div class="item">
      <div class="img-wrapper">
        <ion-img v-if="imgsrc !== null" :src="imgsrc"></ion-img>
      </div>

      <div class="content">
        <ion-text
          ><p>{{ date }}</p></ion-text
        >
        <ion-text>
          <p class="title ion-text-start">
            {{ main_title }}
          </p>
        </ion-text>
        <ion-text>
          <p v-html="sub_title"></p>
        </ion-text>
      </div>
    </div>
  </ion-item>
</template>

<script>
import { IonItem, IonText, IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "newsItemComponent",
  props: {
    date: String,
    imgsrc: String,
    name: String,
    main_title: String,
    sub_title: String,
    text: String,
  },
  components: {
    IonText,
    IonItem,
    IonImg,
  },

});
</script>

<style scoped>
.content {
  padding-left: 15px;
  padding-right: 15px;
}

ion-item {
  --background: #ffffff;
  --border-radius: 9px;
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding-end: 0;
  margin-bottom: 20px;
}
 /* 
.img-wrapper {
  height: 200px;
  width: 100%;
  max-width: none;
  background: #0000004d;
}
 */
ion-img {
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  width: 100%;
  height: 100%;
}
</style>