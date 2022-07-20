<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      btnSrc="/tabs/servicesRecoveryFiles"
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
            От фамилия Имя Отчество/
            <br />
            <br />
            Сокращение наименование организации
            <br />

            <br />

            <br />
            <br />

            ЗАЯВЛЕНИЕ
            <br />
            <br />

            <br />

            Прошу восстановить (переоформить) документы о подключении объекта
            капитального строительства к сетям газораспределения
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
  name: "servicesRecovery",
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