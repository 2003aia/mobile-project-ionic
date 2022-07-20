<template>
  <ion-page>
    <Back
      @click="() => (checkStatus = false)"
      :btnSrc="
        () => {
          if (checkStatus === false) router.push('/tabs/main');
        }
      "
    />
    <Layout
      height="false"
      outlineBtn="."
      :method="() => (checkStatus = true)"
      :filledBtn="checkStatus === false ? 'Проверить статус' : '.'"
      :title="'Отслеживание статуса договора о подключении'"
    >
      <template v-slot:main-content>
        <div v-if="checkStatus === true">
          <ion-list v-for="el in data" :key="el.title">
            <div class="item">
              <ion-text>
                <p class="title ion-text-start">
                  {{ el.title }}
                </p></ion-text
              >
              <ion-item>
                <ion-text class="text">{{ el.data[0].name }}</ion-text>
                <ion-text slot="end" class="sub-title text">{{
                  el.data[0].val
                }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text class="text">{{ el.data[1].name }}</ion-text>
                <ion-text slot="end" class="sub-title text">{{
                  el.data[1].val
                }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text class="text">{{ el.data[2].name }}</ion-text>
                <ion-text slot="end" class="text sub-title">{{
                  el.data[2].val
                }}</ion-text>
              </ion-item>
            </div>
          </ion-list>
        </div>

        <div v-if="checkStatus === false">
          <ion-text>
            <p class="title ion-text-start">Номер договора</p></ion-text
          >
          <Input name="Введите номер договора" :required="true" />
        </div>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Back from "../components/Back.vue";
import { IonPage, IonText, IonItem, IonList } from "@ionic/vue";
import Input from "../components/Input.vue";

export default defineComponent({
  name: "appealsPage",
  components: {
    IonPage,
    Layout,
    IonText,
    IonItem,
    IonList,
    Back,
    Input,
  },
  data() {
    return {
      checkStatus: false,
      data: [
        {
          title: "Заявка на подключение",

          data: [
            { name: "Выполнено", val: "Да" },
            { name: "Дата начало", val: "10.06.2022" },
            { name: "Дата окончания", val: "10.06.2022" },
          ],
        },
        {
          title: "Выдача ТУ",
          data: [
            { name: "Выполнено", val: "Да" },
            { name: "Дата начало", val: "10.06.2022" },
            { name: "Дата окончания", val: "10.06.2022" },
          ],
        },
        {
          title: "Договор на подключение",
          data: [
            { name: "Выполнено", val: "Да" },
            { name: "Дата начало", val: "10.06.2022" },
            { name: "Дата окончания", val: "10.06.2022" },
          ],
        },
        {
          title: "Разработка проекта - сметной документации",
          data: [
            { name: "Выполнено", val: "Нет" },
            { name: "Дата начало", val: "-" },
            { name: "Дата окончания", val: "-" },
          ],
        },
        {
          title:
            "Разработка проектно-сметной документации, в т. ч.: - топосьемка",
          data: [
            { name: "Выполнено", val: "Нет" },
            { name: "Дата начало", val: "-" },
            { name: "Дата окончания", val: "-" },
          ],
        },
        {
          title:
            "Разработка проектно-сметной документации, в т. ч.: - проектная документация",
          data: [
            { name: "Выполнено", val: "Нет" },
            { name: "Дата начало", val: "-" },
            { name: "Дата окончания", val: "-" },
          ],
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
.footer-item {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.item {
  width: 100%;
}
ion-item {
  --padding-end: 0;
  --padding-start: 0;
  --inner-padding-end: 0px;
  --inner-padding-bottom: 0px;
}
.text {
  margin-left: 0;
}
</style>