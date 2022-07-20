<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      btnSrc="/tabs/servicesTrackingTerms"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Запрос на предоставление информации о ходе выполнения мероприятий по подключению (технологическому присоединению) физического лица
"
    >
      <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Общие сведения заявления</p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Данные заявителя</p>
          <p>
            <ion-text class="dot">*</ion-text> - обязательное поле для
            заполнения.
          </p>

          <Input name="Укажите имя " :required="true" />
          <Input name="Укажите фамилию " :required="true" />
          <Input name="Укажите отчество " :required="true" />
          <Input name="Дата рождения " :required="true" />
          <Input name="Место рождения  " :required="true" />
          <Input name="Место жительства " :required="true" />
          <Input name="Контактный телефон " :required="true" />
          <Input name="Доп. контактный телефон  " :required="true" />
          <Input name="Электронная почта  " :required="true" />
        </ion-text>
      </template>
      <template v-slot:content>
        <LayoutBox>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Данные паспорта</p>
              <p>
                <ion-text class="dot">*</ion-text> - обязательное поле для
                заполнения.
              </p>
            </ion-text>

            <Input name="Серия " :required="true" />
            <Input name="Номер " :required="true" />
            <Input name="Кем выдан " :required="true" />
            <Input name="Дата выдачи паспорта " :required="true" />
            <Input name="Место регистрации " :required="true" />
          </template>
        </LayoutBox>
        <LayoutBox>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Данные об объекте газификации</p>
              <p>
                <ion-text class="dot">*</ion-text> - обязательное поле для
                заполнения.
              </p>
              <p class="sub-title">
                Просим предоставить информацию о ходе выполнения мероприятий по
                подключению (технологическому присоединению) объекта
                капитального строительства к сетям газораспределения
                расположенного по адресу
              </p>
            </ion-text>

            <Input :name="'Введите данные '" />
            <ion-text>
              <p class="sub-title">
                Номер договора о подключении (технологическом присоединении)
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <Input :name="'Введите данные '" />

            <ion-text>
              <p class="sub-title">
                Дата договора
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <Input :name="'Укажите дату'" />
          </template>
        </LayoutBox>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText } from "@ionic/vue";
import Input from "../components/Input.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";

export default defineComponent({
  name: "servicesTracking",
  components: {
    IonPage,
    Layout,
    IonText,
    Input,
    Back,
    LayoutBox,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
.text-white {
  color: #fff;
}
.dot {
  color: #62d0ce;
}
</style>