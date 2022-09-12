<template>
  <ion-page>
    <Back />
    <Layout
      :btnSrc="'/personalAccountInfo'"
      :method2="() => router.push('/personalAccountNew')"
      height="false"
      outlineBtn="Добавить лицевой счёт"
      filledBtn="Узнать лицевой счет"
      title="Лицевой счёт"
    >
      <template v-slot:main-content>
        <ion-text
          ><p class="title ion-text-start">Узнать лицевой счет</p></ion-text
        >
        <ion-accordion-group>
          <ion-accordion value="first" :toggle-icon="caretDownSharp">
            <Input
              slot="header"
              name="Введите населенный пункт по улусам"
              :value="country"
              @change="countryChange"
            />

            <div slot="content">
              <ion-list>
                <ion-item>
                  <ion-text>dsd</ion-text>
                </ion-item>
                <ion-item>
                  <ion-text>dsd</ion-text>
                </ion-item>
              </ion-list>
            </div>
          </ion-accordion>
          <ButtonSelect
            :required="true"
            slot="header"
            :name="'Менее <7 м3/ч '"
          />
        </ion-accordion-group>

        <Input name="Введите улицу" :value="street" @change="streetChange" />
        <Input name="Введите дом улицы" :value="house" @change="houseChange" />
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Input from "../components/Input.vue";
import {
  IonPage,
  IonText,
  IonAccordionGroup,
  IonAccordion,
  IonList,
  IonItem,
} from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
import { caretDownSharp } from "ionicons/icons";

export default defineComponent({
  name: "personalAccauntInfoSearchPage",
  components: {
    IonAccordionGroup,
    IonAccordion,
    Back,
    IonPage,
    Layout,
    IonText,
    Input,
    IonList,
    IonItem,
    ButtonSelect,
  },
  setup() {
    const router = useRouter();
    const house = ref("");
    const street = ref("");
    const country = ref("");
    const houseChange = (e) => {
      house.value = e.target.value;
    };
    const streetChange = (e) => {
      street.value = e.target.value;
    };
    const countryChange = (e) => {
      country.value = e.target.value;
    };
    return {
      country,
      street,
      house,
      houseChange,
      streetChange,
      countryChange,
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
      caretDownSharp,
    };
  },
});
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
ion-item {
  --inner-padding-start: 15px
}
ion-list {
  margin-top: -10px;
  /* background: blue; */
}
</style>