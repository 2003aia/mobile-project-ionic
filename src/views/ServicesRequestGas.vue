<template>
  <ion-page>
    <Back />
    <Layout
      height="false"
      :btnSrc="'/tabs/servicesRequestCalc'"
      :filledBtn="'Далее'"
      outlineBtn="."
      title="Заявка на социальную газификацию"
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
        </ion-text>

        <Input name="Укажите имя " :required="true" />
        <Input name="Укажите фамилию " :required="true" />
        <Input name="Укажите отчество " :required="true" />
        <Input name="Дата рождения " :required="true" />
        <Input name="Место рождения  " :required="true" />
        <Input name="Место жительства " :required="true" />
        <Input name="Контактный телефон " :required="true" />
        <Input name="Доп. контактный телефон  " :required="true" />
        <Input name="Электронная почта  " :required="true" />
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
                Адрес обьекта <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>

            <Input name="Введите данные  " />
            <ion-text>
              <p class="sub-title">
                Кадастровый номер земельного участка
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <Input name="Введите данные " />
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
import Back from "../components/Back.vue";
import { documentTextOutline } from "ionicons/icons";
import Input from "../components/Input.vue";
import LayoutBox from "../components/LayoutBox.vue";

export default defineComponent({
  name: "servicesRequestGas",
  components: {
    LayoutBox,
    Input,
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
    return { router, documentTextOutline };
  },
});
</script>

<style scoped>
.sub-title {
  margin-top: 0px;
  margin-bottom: 10px;
}
.dot {
  color: #62d0ce;
}
.text {
  margin-bottom: 10px;
  margin-top: 0px;
}
</style>