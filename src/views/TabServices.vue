<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <ion-button
          class="btn1"
          fill="clear"
          router-link="/tabs/servicesRequestGas"
        >
          <ion-text>
            <p class="sub-title ion-text-wrap">Социальная газификация</p>
          </ion-text>
        </ion-button>
        <ion-button
          class="btn2"
          fill="clear"
          router-link="/tabs/servicesTechAlliance"
        >
          <ion-text>
            <p class="sub-title ion-text-wrap">
              Услуга технологического присоединения для физических лиц
            </p>
          </ion-text>
        </ion-button>
        <ion-button router-link="/tabs/servicesOne" class="btn3" fill="clear">
          <ion-text>
            <p class="sub-title ion-text-wrap">Разовые услуги</p>
          </ion-text>
        </ion-button>
        <ion-button
          class="btn4"
          fill="clear"
          router-link="/tabs/servicesGasContract"
        >
          <ion-text>
            <p class="sub-title ion-text-wrap">
              Услуга заключения договора поставки газа для собственников квартир
            </p>
          </ion-text>
        </ion-button>
        <ion-button
          router-link="/tabs/servicesTracking"
          class="btn5"
          fill="clear"
        >
          <ion-text>
            <p class="sub-title ion-text-wrap">
              Отслеживание статуса договора о подключении
            </p>
          </ion-text>
        </ion-button>
        <ion-button
          router-link="/tabs/servicesRecovery"
          class="btn6"
          fill="clear"
        >
          <ion-text>
            <p class="sub-title ion-text-wrap">Вызов инспектора</p>
          </ion-text>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { airplaneOutline } from "ionicons/icons";
import { IonPage, IonContent, IonButton, IonText } from "@ionic/vue";

export default defineComponent({
  name: "tabServicesPage",
  setup() {
    return {
      airplaneOutline,
    };
  },
  components: { IonPage, IonContent, IonButton, IonText },
});
</script>

<style scoped>
.container {
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
}

.btn1 {
  background: linear-gradient(93.76deg, #6fcec3 0%, #49a599 98.64%);
}

.btn2 {
  background: linear-gradient(93.63deg, #62bfb1 0%, #3394a8 99.6%);
}

.btn3 {
  background: linear-gradient(93.68deg, #55b19f 0.34%, #1e84b6 100%);
}

.btn4 {
  background: linear-gradient(93.89deg, #44a29c 0%, #146caa 100%);
}

.btn5 {
  background: linear-gradient(93.89deg, #3092aa 0%, #10508e 100%);
}
.btn6 {
  background: linear-gradient(93.89deg, #1a81b9 0%, #0c3371 100%);
}

ion-button {
  width: 100%;
  border-radius: 10px;
  height: 120px;
  margin-bottom: 20px;
}
ion-text p {
  color: #fff;
  text-transform: initial;
  line-height: 22px;
}
</style>