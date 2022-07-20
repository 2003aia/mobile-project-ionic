<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      btnSrc="/tabs/servicesTrackingFiles"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Согласие на условие договора"
    >
      <template v-slot:main-content>
        <ion-text>
          <p>
            Начальнику УГРС
            <br />
            <br />
            АО «Сахатранснфетегаз»
            <br />
            <br />

            Томскому А.М.
            <br />
            <br />

            От Фамилия Имя Отчество/
            <br />
            <br />

            Сокращение наименование организации
            <br />
            <br />

            ЗАЯВЛЕНИЕ
            <br />
            <br />

            Просим предоставить информацию о ходе выполнения мероприятий по
            подключению (технологическому присоединению) объекта капитального
            строительства к сетям газораспределения расположенного по адресу:
            <br />
            <br />

            Электронную заявку подтверждаю Фамилия Имя Отчество/Сокращенное
            наименование организации
            <br />
            <br />

            Дата подачи заявления-----------
            <br />
            <br />

            Входящий номер заявления-----------
            <br />
            <br />

            Срок рассмотрения:
            <br />
            <br />

            в течении 10 рабочих дней
            <br />
            <br />

            * - обязательное поле для заполнения.
          </p>
        </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText } from "@ionic/vue";
import Back from "../components/Back.vue";
export default defineComponent({
  name: "servicesTrackingTerms",
  components: {
    IonPage,
    Layout,
    IonText,
    Back,
  },
  data() {
    return {};
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
</style>