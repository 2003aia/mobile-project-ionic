<template>
  <ion-page>
    <Back :btnSrc="()=>router.push('/tabs/services')"/>
    <Layout
      btnSrc="/tabs/servicesGasContractCheckbox"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Заключения договора поставки газа для обеспечения коммунально - бытовых нужд гражданина собственниками квартир"
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
  name: "servicesGasContract",
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