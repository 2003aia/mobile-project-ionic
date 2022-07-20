<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      btnSrc="/tabs/servicesTechAllianceChoose"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Онлайн-заявка на технологическое подключение"
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
                Наименование объекта капитального строительства
              </p>
            </ion-text>

            <InputCheckbox name="Жилой дом" />
            <InputCheckbox name="Гараж" />
            <InputCheckbox name="Баня" />
            <InputCheckbox name="Другое" />
            <ion-text>
              <p class="sub-title">
                Адрес обьекта <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <Input :name="'Введите данные '" />
            <ion-text>
              <p class="sub-title">
                Подключение в случаях (выбрать один из следующих вариантов)
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <ButtonSelect
              :btnSrc="
                () =>
                  router.push({
                    name: 'servicesTechAllianceSelect',
                    params: { connection: true },
                  })
              "
              :name="'Выберите вариант'"
            />
            <ion-text>
              <p class="sub-title">
                Характер потребления газа
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <ButtonSelect
              :btnSrc="
                () =>
                  router.push({
                    name: 'servicesTechAllianceSelect',
                    params: { connection: false },
                  })
              "
              :name="'Выберите вариант'"
            />
            <ion-text>
              <p class="sub-title">
                Сроки проектирования, строительства и ввода в эксплуатацию
                объекта капитального строительства (в том числе по этапам и
                очередям)
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <Input :name="'Введите данные'" />
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
import InputCheckbox from "../components/InputCheckbox.vue";
import ButtonSelect from "../components/ButtonSelect.vue";

export default defineComponent({
  name: "servicesTechAlliance",
  components: {
    IonPage,
    Layout,
    InputCheckbox,
    IonText,
    Input,
    Back,
    ButtonSelect,
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