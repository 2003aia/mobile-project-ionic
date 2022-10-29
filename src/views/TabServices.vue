<template>
  <ion-page>
    <Back :noBack="true" :logo="true" />
    <ion-content class="background">
      <div class="container">
        <ion-button class="btn1" fill="clear" router-link="/tabs/servicesRequestGas">
          <ion-text>
            <p class="sub-title ion-text-wrap">Социальная газификация</p>
          </ion-text>
        </ion-button>
        <ion-button class="btn2" fill="clear" router-link="/tabs/servicesTechAlliance">
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
        <ion-button class="btn4" fill="clear" router-link="/tabs/servicesGasContract">
          <ion-text>
            <p class="sub-title ion-text-wrap">
              Услуга заключения договора поставки газа для собственников квартир
            </p>
          </ion-text>
        </ion-button>
        <ion-button router-link="/tabs/servicesTracking" class="btn5" fill="clear">
          <ion-text>
            <p class="sub-title ion-text-wrap">
              Отслеживание статуса договора о подключении
            </p>
          </ion-text>
        </ion-button>
        <ion-button router-link="/tabs/servicesCallInspector" class="btn6" fill="clear">
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
import Back from '../components/Back.vue'
import { IonPage, IonContent, IonButton, IonText } from "@ionic/vue";

export default defineComponent({
  name: "tabServicesPage",
  setup() {
    return {
      airplaneOutline,
    };
  },
  components: { IonPage, IonContent, IonButton, IonText, Back, },
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
  background: linear-gradient(93.76deg, #1A80B9 0%, #176CA6 98.64%);
}

.btn2 {
  background: linear-gradient(93.63deg, #1875AF 0%, #15619C 99.6%);
}

.btn3 {
  background: linear-gradient(93.68deg, #176BA5 0.34%, #135792 100%);
}

.btn4 {
  background: linear-gradient(93.89deg, #15609B 0%, #114C89 100%);
}

.btn5 {
  background: linear-gradient(93.89deg, #135692 0%, #0F427F 100%);
}

.btn6 {
  background: linear-gradient(93.89deg, #114B88 0%, #0D3775 100%);
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