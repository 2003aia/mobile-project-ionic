
<template>
  <ion-page>
    <!-- <Back name="" title="Е-запись" /> -->
    <Layout
      height="false"
      outlineBtn="."
      filledBtn="Оставить заявку"
      title="Вид услуг"
    >
      <template v-slot:header-content>
        <ion-text>
          <p class="main-text">
            С помощью данного сервиса физическим и юридическим лицам можно
            предварительно записаться на прием в Службу «Единого окна» по адресу
            г.Якутск, ул. Петра Алексеева, 64.
          </p>
        </ion-text>

        <ion-text>
          <p class="main-text">
            На ваш номер телефона будет отправлен СМС с указанием номера брони,
            а также даты и времени записи.
          </p>
        </ion-text>

        <ion-text>
          <p class="main-text">
            Прием документов производится только при полном пакете документов.
          </p>
        </ion-text>

        <ion-text>
          <p class="main-text">
            <ion-text class="main-subtitle"> Внимание! </ion-text>
            Согласно п. 9 ПП РФ №549, при подаче заявления на заключение
            договора на поставку газа, необходимо предоставить договор на
            техническое обслуживание со специализированной организацией.
          </p>
        </ion-text>
      </template>

      <template v-slot:main-content>
        <ion-text
          ><p class="title ion-text-start">Данные заявителя</p>
        </ion-text>

        <Input name="Номер телефона" />

        <ion-text>
          <p class="sub-title">Вид услуг</p>
        </ion-text>

        <ButtonSelect
          name="Выберите вариант"
          :btnSrc="
            () => {
              router.push('/tabs/recordSelect');
            }
          "
        />

        <ion-list>
          <ion-item router-link="/tabs/date">
            <ion-icon
              size="large"
              slot="start"
              class="icon-start"
              :icon="calendarNumberOutline"
            ></ion-icon>
            <ion-text class="sub-title"> Выберите дату записи</ion-text>
            <ion-icon
              size="large"
              slot="end"
              class="icon-end"
              :icon="chevronForwardOutline"
            ></ion-icon>
          </ion-item>
          <ion-item router-link="/tabs/time">
            <ion-icon
              size="large"
              slot="start"
              class="icon-start"
              :icon="alarmOutline"
            ></ion-icon>
            <ion-text class="sub-title">Выберите время записи</ion-text>
            <ion-icon
              class="icon-end"
              size="large"
              slot="end"
              :icon="chevronForwardOutline"
            ></ion-icon>
          </ion-item>
        </ion-list>

        <ion-text>
          <p>
            Режим работы Службы «Единого окна» в будни с 08.00 до 17.00
            Выходной: суббота, воскресенье
          </p>
        </ion-text>
        <ion-item class="check">
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-text>Согласен (-на) на обработку персональных данных</ion-text>
        </ion-item>
      </template>
    </Layout>
  </ion-page>
</template>



<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
// import Back from "../components/Back.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
import {
  IonPage,
  IonText,
  IonList,
  IonItem,
  IonCheckbox,
  IonIcon,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import {
  caretDownSharp,
  chevronForwardOutline,
  calendarNumberOutline,
  alarmOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "recordPage",
  components: {
    ButtonSelect,
    IonPage,
    IonList,
    // Back,
    Layout,
    IonItem,
    Input,
    IonText,
    IonIcon,
    IonCheckbox,
  },
  setup() {
    const router = useRouter();
    return {
      router,
      caretDownSharp,
      chevronForwardOutline,
      calendarNumberOutline,
      alarmOutline,
    };
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0px;
  /*  */
  /*   --inner-padding-start: 20px; */
  --inner-padding-bottom: 10px;
  --inner-padding-end: 0;
  --inner-padding-top: 20px;
}
ion-icon {
  height: 32px;
  width: 32px;
  --ionicon-stroke-width: 40px;
  color: #0378b4;
  margin-right: 20px;
}

.icon-start {
  margin-right: 20px;
}
.icon-end {
  width: 24px;
  height: 24px;
  margin-left: 0px;
}
</style>