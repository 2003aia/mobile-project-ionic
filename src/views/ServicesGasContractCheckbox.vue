<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/servicesGasContract')" />
    <Layout
      height="false"
      :btnSrc="'/tabs/servicesGasContractFiles'"
      filledBtn="Далее"
      outlineBtn="."
      title="Заключения договора поставки газа для обеспечения коммунально - бытовых нужд гражданина собственниками квартир"
    >
      <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Заполнение оферты</p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">
            Тип помещения, газоснабжения которого необходимо обеспечить
          </p>
        </ion-text>
        <InputCheckbox name="Квартира в многоквартирном доме" />
        <InputCheckbox name="Жилой дом" />

        <InputCheckbox
          name="Надворные постройки индивидуального домовладения"
        />
        <ion-text>
          <p class="title ion-text-start margin">Виды потребления газа</p>
        </ion-text>
        <InputCheckbox name="Приготовление пищи" />
        <InputCheckbox name="Подогрев воды" />

        <InputCheckbox name="Отопление жилых помещений" />
        <InputCheckbox name="Отопление нежилых помещений" />
        <InputCheckbox name="Приготовление кормов для животных" />
        <ion-text>
          <p class="sub-title ion-text-start margin">
            Объект расположен по адресу
          </p>
        </ion-text>
        <Input :name="'Укажите адрес'" />
        <ion-text>
          <p class="title ion-text-start margin">
            Объект находится у меня на праве
          </p>
        </ion-text>
        <InputCheckbox name="Собственности" />
        <InputCheckbox name="Найма" />

        <InputCheckbox name="Социального найма" />
        <InputCheckbox name="Аренды" />
        <InputCheckbox name="Безвозмездного пользования" />
        <ion-text>
          <p class="sub-title ion-text-start margin">
            Количество лиц, проживающих в помещении, газоснабжение которого
            необходимо обеспечить
          </p>
        </ion-text>
        <Input :name="'Укажите адрес'" />
      </template>
      <template v-slot:content>
        <LayoutBox>
          <template v-slot:content>
            <ion-item>
              <ion-text> № п/п </ion-text>
              <ion-text slot="end" class="sub-title">1</ion-text>
            </ion-item>
            <ion-text>
              <p class="sub-title">Вид помещения</p>
            </ion-text>
            <ButtonSelect name="Виберите вид помещения" />
            <ion-text>
              <p class="sub-title">Площадь, кв. м.</p>
            </ion-text>
            <Input name="Площадь, кв. м." />
            <ion-text><p class="sub-title">Объем, куб. м.</p> </ion-text>
            <Input name="Объем, куб. м." />
          </template>
        </LayoutBox>
        <Button class="btn" name="Добавить" :outline="true" />
        <LayoutBox>
          <template v-slot:content>
            <ion-item>
              <ion-text> № п/п </ion-text>
              <ion-text slot="end" class="sub-title">1</ion-text>
            </ion-item>
            <ion-text>
              <p class="sub-title">Наименование</p>
            </ion-text>
            <ButtonSelect name="Виберите оборудование" />
            <ion-text>
              <p class="sub-title">Тип марка</p>
            </ion-text>
            <Input name="Тип марка" />
            <ion-text><p class="sub-title">Количество</p></ion-text>
            <Input name="Количество" />
          </template>
        </LayoutBox>
        <Button class="btn" name="Добавить" :outline="true" />

        <LayoutBox>
          <template v-slot:content>
            <ion-item>
              <ion-text> № п/п </ion-text>
              <ion-text slot="end" class="sub-title">1</ion-text>
            </ion-item>
            <ion-text>
              <p class="sub-title">Место присоединения к газопровода</p>
            </ion-text>
            <ButtonSelect name="Виберите оборудование" />
            <ion-text>
              <p class="sub-title">Тип марка</p>
            </ion-text>
            <Input name="СГБМ-1,6, G-" />
            <ion-text><p class="sub-title">Количество</p> </ion-text>
            <Input name="000000 (указан 1)" />
          </template>
        </LayoutBox>
        <Button class="btn" name="Добавить" :outline="true" />

        <LayoutBox>
          <template v-slot:content>
            <ion-text>
              <p class="sub-title">
                Вы можете оставить комментарий к электронной заявке
              </p>
            </ion-text>
            <Input :name="''" />
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
import { IonPage, IonText, IonItem } from "@ionic/vue";
import Input from "../components/Input.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import InputCheckbox from "../components/InputCheckbox.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
import Button from "../components/Button.vue";

export default defineComponent({
  name: "servicesGasContractCheckbox",
  components: {
    IonItem,
    IonPage,
    ButtonSelect,
    InputCheckbox,
    Button,
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
.btn {
  margin-top: 30px;
  margin-bottom: 30px;
}
.margin {
  margin-top: 20px;
}
.sub-title {
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>