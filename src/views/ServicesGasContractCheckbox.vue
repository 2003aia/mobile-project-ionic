<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/servicesGasContract')" />
    <Layout
      height="false"
      :method="storageHandler"
      filledBtn="Далее"
      outlineBtn="."
      title="Заключения договора поставки газа для обеспечения коммунально - бытовых нужд гражданина собственниками квартир"
      ><!-- :btnSrc="'/tabs/servicesGasContractFiles'" -->
      <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Заполнение оферты</p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">
            Тип помещения, газоснабжения которого необходимо обеспечить
            <ion-text class="dot">*</ion-text>
          </p>
        </ion-text>
        <div v-for="el in formType" :key="el">
          <ion-item class="check">
            <input
              @click="
                (e) => {
                  uniqueCheck(e, 'type');
                }
              "
              :value="el.name"
              v-model="formTypeVal"
              @change="uniqueCheck"
              class="check2"
              type="checkbox"
              slot="start"
            />
            {{ el.name }}
          </ion-item>
        </div>
        <ion-text v-show="formTypeVal?.error === true">
          <p class="error">Выберите вариант</p>
        </ion-text>
        <ion-text>
          <p class="title ion-text-start margin">
            Виды потребления газа <ion-text class="dot">*</ion-text>
          </p>
        </ion-text>
        <div v-for="el in formGas" :key="el">
          <ion-item class="check">
            <input
              @click="
                (e) => {
                  uniqueCheck2(e, 'type');
                }
              "
              :value="el.name"
              v-model="formGasVal"
              @change="uniqueCheck2"
              class="check2"
              type="checkbox"
              slot="start"
            />
            {{ el.name }}
          </ion-item>
        </div>
        <ion-text v-show="formGasVal?.error === true">
          <p class="error">Выберите вариант</p>
        </ion-text>

        <ion-text>
          <p class="sub-title ion-text-start margin">
            Объект расположен по адресу <ion-text class="dot">*</ion-text>
          </p>
        </ion-text>
        <Input
          :type="'text'"
          :name="'Укажите адрес'"
          :value="address"
          :changeHandler="changeAddress"
        />
        <ion-text v-show="validation.address">
          <p class="error">Заполните поле</p>
        </ion-text>
        <ion-text>
          <p class="title ion-text-start margin">
            Объект находится у меня на праве <ion-text class="dot">*</ion-text>
          </p>
        </ion-text>
        <div v-for="el in formObject" :key="el">
          <ion-item class="check">
            <input
              @click="
                (e) => {
                  uniqueCheck3(e, 'type');
                }
              "
              :value="el.name"
              v-model="formObjectVal"
              @change="uniqueCheck3"
              class="check2"
              type="checkbox"
              slot="start"
            />
            {{ el.name }}
          </ion-item>
        </div>
        <ion-text v-show="formObjectVal?.error === true">
          <p class="error">Выберите вариант</p>
        </ion-text>

        <ion-text>
          <p class="sub-title ion-text-start margin">
            Количество лиц, проживающих в помещении, газоснабжение которого
            необходимо обеспечить <ion-text class="dot">*</ion-text>
          </p>
        </ion-text>
        <Input
          :name="'0'"
          :type="'number'"
          :value="people"
          :changeHandler="changePeople"
        />
        <ion-text v-show="validation.people">
          <p class="error">Заполните поле</p>
        </ion-text>
      </template>
      <template v-slot:content>
        <LayoutBox>
          <template v-slot:content>
            <div v-for="(el, index) in typeHouse" :key="el">
              <ion-item>
                <ion-text> № п/п </ion-text>
                <ion-text slot="end" class="sub-title">{{
                  index + 1
                }}</ion-text>
              </ion-item>
              <ion-text>
                <p class="sub-title">Вид помещения</p>
              </ion-text>
              <ion-accordion-group ref="accordionType">
                <ion-accordion value="first" :toggle-icon="caretDownSharp">
                  <ButtonSelect
                    slot="header"
                    :name="
                      el.typeHouse ? el.typeHouse : 'Выберите вид помещения'
                    "
                  />
                  <div slot="content">
                    <div v-for="el2 in el.select" :key="el2">
                      <ion-item
                        @click="
                          () => {
                            this.$refs.accordionType[index].$el.value = undefined;
                            el.typeHouse = el2.text;
                          }
                        "
                        ><ion-text>{{ el2.text }}</ion-text></ion-item
                      >
                    </div>
                  </div>
                </ion-accordion>
              </ion-accordion-group>

              <ion-text>
                <p class="sub-title">Площадь, кв. м.</p>
              </ion-text>

              <Input
                :value="el.area.value"
                :changeHandler="(e) => el.area.fn(e)"
                name="Площадь, кв. м."
              />
              <ion-text><p class="sub-title">Объем, куб. м.</p> </ion-text>
              <Input
                name="Объем, куб. м."
                :value="el.volume.value"
                :changeHandler="(e) => el.volume.fn(e)"
              />
            </div>
          </template>
        </LayoutBox>
        <Button @click="addType" class="btn" name="Добавить" :outline="true" />
        <Button
          @click="removeType"
          class="btn"
          name="Удалить"
          :outline="true"
        />
        <LayoutBox>
          <template v-slot:content>
            <div v-for="(el, index) in name" :key="el">
              <ion-item>
                <ion-text> № п/п </ion-text>
                <ion-text slot="end" class="sub-title">{{
                  index + 1
                }}</ion-text>
              </ion-item>
              <ion-text>
                <p class="sub-title">Наименование</p>
              </ion-text>
              <ion-accordion-group ref="accordionName">
                <ion-accordion value="first" :toggle-icon="caretDownSharp">
                  <ButtonSelect
                    slot="header"
                    :name="el.name ? el.name : 'Выберите оборудование'"
                  />
                  <div slot="content">
                    <div v-for="el2 in el.select" :key="el2">
                      <ion-item
                        @click="
                          () => {
                            this.$refs.accordionName[index].$el.value = undefined;
                            el.name = el2.text;
                          }
                        "
                        ><ion-text>{{ el2.text }}</ion-text></ion-item
                      >
                    </div>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
              <ion-text>
                <p class="sub-title">Тип марка</p>
              </ion-text>
              <Input
                name="Тип марка"
                :value="el.mark.value"
                :changeHandler="(e) => el.mark.fn(e)"
              />
              <ion-text><p class="sub-title">Количество</p></ion-text>
              <Input
                :value="el.count.value"
                :changeHandler="(e) => el.count.fn(e)"
                name="Количество"
              />
            </div>
          </template>
        </LayoutBox>
        <Button @click="addName" class="btn" name="Добавить" :outline="true" />
        <Button
          @click="removeName"
          class="btn"
          name="Удалить"
          :outline="true"
        />
        <LayoutBox>
          <template v-slot:content>
            <div v-for="(el, index) in place" :key="el">
              <ion-item>
                <ion-text> № п/п </ion-text>
                <ion-text slot="end" class="sub-title">{{
                  index + 1
                }}</ion-text>
              </ion-item>
              <ion-text>
                <p class="sub-title">Место присоединения к газопроводу</p>
              </ion-text>
              <ion-accordion-group ref="accordionPlace">
                <ion-accordion value="first">
                  <ButtonSelect
                    slot="header"
                    :name="
                      el.equipment ? el.equipment : 'Выберите оборудование'
                    "
                  />
                  <div slot="content">
                    <div v-for="el2 in el.select" :key="el2">
                      <ion-item
                        @click="
                          () => {
                            this.$refs.accordionPlace[index].$el.value = undefined;
                            el.equipment = el2.text;
                          }
                        "
                        ><ion-text>{{ el2.text }}</ion-text></ion-item
                      >
                    </div>
                  </div>
                </ion-accordion>
              </ion-accordion-group>

              <ion-text>
                <p class="sub-title">Тип марка</p>
              </ion-text>
              <Input
                :value="el.mark.value"
                :changeHandler="(e) => el.mark.fn(e)"
                name="СГБМ-1,6, G-"
              />
              <ion-text><p class="sub-title">Количество</p> </ion-text>
              <Input
                :value="el.count.value"
                :changeHandler="(e) => el.count.fn(e)"
                name="000000 (указан 1)"
              />
            </div>
          </template>
        </LayoutBox>
        <Button @click="addPlace" class="btn" name="Добавить" :outline="true" />
        <Button
          @click="removePlace"
          class="btn"
          name="Удалить"
          :outline="true"
        />

        <LayoutBox>
          <template v-slot:content>
            <ion-text>
              <p class="sub-title">
                Вы можете оставить комментарий к электронной заявке
              </p>
            </ion-text>
            <Input :value="comment" :changeHandler="changeComment" :name="''" />
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
import {
  IonPage,
  IonText,
  IonItem,
  IonAccordion,
  IonAccordionGroup,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import { caretDownSharp } from "ionicons/icons";
import ButtonSelect from "../components/ButtonSelect.vue";
import Button from "../components/Button.vue";

export default defineComponent({
  name: "servicesGasContractCheckbox",
  components: {
    IonItem,
    IonPage,
    ButtonSelect,
    // InputCheckbox,
    Button,
    Layout,
    IonText,
    Input,
    Back,
    LayoutBox,
    IonAccordion,
    IonAccordionGroup,
  },
  methods: {
    addType() {
      const add = {
        select: [
          {
            text: "Квартира",
          },
          {
            text: "Частный дом",
          },
          {
            text: "Дача",
          },
          {
            text: "Гараж",
          },
          {
            text: "Котельная",
          },
          {
            text: "Склад",
          },
          {
            text: "Баня",
          },
          {
            text: "Теплица",
          },
          {
            text: "Иное",
          },
        ],
        typeHouse: "",
        area: {
          value: "",
          fn: function (e) {
            this.value = e.target.value;
          },
        },
        volume: {
          value: "",
          fn: function (e) {
            this.value = e.target.value;
          },
        },
      };
      this.$data.typeHouse.push(add);

    },
    addName() {
      const add = {
        select: [
          {
            text: "Плита",
          },
          {
            text: "Котел",
          },
          {
            text: "Конвектор",
          },
          {
            text: "Водоногреватель",
          },
          {
            text: "Другое",
          },
        ],
        name: "",
        mark: {
          value: "",
          fn: function (e) {
            this.value = e.target.value;
          },
        },
        count: {
          value: "",
          fn: function (e) {
            this.value = e.target.value;
          },
        },
      };
      this.$data.name.push(add);
    },
    addPlace() {
      const add = {
        select: [
          {
            text: "Квартира",
          },
          {
            text: "Частный дом",
          },
          {
            text: "Дача",
          },
          {
            text: "Гараж",
          },
          {
            text: "Котельная",
          },
          {
            text: "Склад",
          },
          {
            text: "Баня",
          },
          {
            text: "Теплица",
          },
          {
            text: "Иное",
          },
        ],
        equipment: "",
        mark: {
          value: "",
          fn: function (e) {
            this.value = e.target.value;
          },
        },
        count: {
          value: "",
          fn: function (e) {
            this.value = e.target.value;
          },
        },
      };
      this.$data.place.push(add);
    },
    removePlace() {
      if (this.$data.place.length > 1) this.$data.place.pop();
    },
    removeName() {
      if (this.$data.name.length > 1) this.$data.name.pop();
    },
    removeType() {
      if (this.$data.typeHouse.length > 1) this.$data.typeHouse.pop();
    },
    async uniqueCheck(e) {
      this.$data.formTypeVal = [];
      if (e.currentTarget.checked === false) {
        this.$data.formTypeVal.push(e.currentTarget.value);
      }
    },
    async uniqueCheck2(e) {
      this.$data.formGasVal = [];
      if (e.currentTarget.checked === false) {
        this.$data.formGasVal.push(e.currentTarget.value);
      }
    },
    async uniqueCheck3(e) {
      this.$data.formObjectVal = [];
      if (e.currentTarget.checked === false) {
        this.$data.formObjectVal.push(e.currentTarget.value);
      }
    },
    changeAddress(e) {
      this.$data.address = e.target.value;
    },
    changeComment(e) {
      this.$data.comment = e.target.value;
    },
    changePeople(e) {
      this.$data.people = e.target.value;
    },
    async storageHandler() {
      let checkGas =
        this.$data.formGasVal.length === 0
          ? (this.$data.formGasVal = { error: true })
          : null;

      let checkType =
        this.$data.formTypeVal.length === 0
          ? (this.$data.formTypeVal = { error: true })
          : null;

      let checkRest = () => {
        if (this.$data.address.length === 0) {
          this.$data.validation.address = true;
        } else {
          this.$data.validation.address = false;
        }
        if (this.$data.people.length === 0) {
          this.$data.validation.people = true;
        } else {
          this.$data.validation.people = false;
        }
      };
      checkRest();

      if (
        checkGas === null &&
        checkType === null &&
        Object.keys(this.$data.validation).every(
          (k) => !this.$data.validation[k]
        )
      ) {
        let typeHouse = [];
        let place = [];
        let name = [];

        for (let index = 0; index < this.$data.typeHouse.length; index++) {
          const element = this.$data.typeHouse[index];
          typeHouse.push({
            Вид: element.typeHouse,
            Площадь: element.area.value,
            Объем: element.volume.value,
          });
        }
        for (let index = 0; index < this.$data.place.length; index++) {
          const element = this.$data.place[index];
          place.push({
            Место: element.equipment,
            "Тип, марка": element.mark.value,
            "Кол-во": element.count.value,
          });
        }
        for (let index = 0; index < this.$data.name.length; index++) {
          const element = this.$data.name[index];
          name.push({
            Наименование: element.name,
            "Тип, марка": element.mark.value,
            "Кол-во": element.count.value,
          });
        }
        let userObject = {
          ...this.$pinia.state.value.services.form,
          GAS_VID_POMECHENIY: {
            NAME: "Размер (объем, площадь) жилых и нежилых отапливаемых помещений",
            VALUE: JSON.stringify(typeHouse),
          },
          GAS_SOSTAV_TARGET: {
            NAME: "Состав газоиспользующего оборудования (при наличии)",
            VALUE: JSON.stringify(name),
          },
          GAS_PRIBOR_GAS: {
            NAME: "Характеристика прибора учета газа",
            VALUE: JSON.stringify(place),
          },
          GAS__COMMENT: {
            NAME: "Вы можете оставить комментарий к электронной заявке",
            VALUE: this.$data.comment,
          },
          GAS_ADDRESS_TARGET: {
            NAME: "Объект расположен по адресу",
            VALUE: this.$data.address,
          },
          GAS_COUNT_USERS: {
            NAME: "Количество лиц, проживающих в помещении, газоснабжение которого необходимо обеспечить ",
            VALUE: this.$data.people,
          },
        };
        console.log(userObject, "test");
        if (this.$pinia.state.value?.services?.form) {
          this.$router.push("/tabs/servicesGasContractFiles");
          this.$pinia.state.value.services.form = userObject;
        }
      }
    },
  },
  data() {
    return {
      validation: {
        address: false,
        people: false,
      },
      comment: "",
      people: "",
      address: "",
      formTypeVal: [],
      formObjectVal: [],
      formGasVal: [],
      typeHouse: [
        {
          select: [
            {
              text: "Квартира",
            },
            {
              text: "Частный дом",
            },
            {
              text: "Дача",
            },
            {
              text: "Гараж",
            },
            {
              text: "Котельная",
            },
            {
              text: "Склад",
            },
            {
              text: "Баня",
            },
            {
              text: "Теплица",
            },
            {
              text: "Иное",
            },
          ],
          typeHouse: "",
          area: {
            value: "",
            fn: function (e) {
              this.value = e.target.value;
            },
          },
          volume: {
            value: "",
            fn: function (e) {
              this.value = e.target.value;
            },
          },
        },
      ],
      place: [
        {
          select: [
            {
              text: "Квартира",
            },
            {
              text: "Частный дом",
            },
            {
              text: "Дача",
            },
            {
              text: "Гараж",
            },
            {
              text: "Котельная",
            },
            {
              text: "Склад",
            },
            {
              text: "Баня",
            },
            {
              text: "Теплица",
            },
            {
              text: "Иное",
            },
          ],
          equipment: "",
          mark: {
            value: "",
            fn: function (e) {
              this.value = e.target.value;
            },
          },
          count: {
            value: "",
            fn: function (e) {
              this.value = e.target.value;
            },
          },
        },
      ],
      name: [
        {
          select: [
            {
              text: "Плита",
            },
            {
              text: "Котел",
            },
            {
              text: "Конвектор",
            },
            {
              text: "Водоногреватель",
            },
            {
              text: "Другое",
            },
          ],
          name: "",
          mark: {
            value: "",
            fn: function (e) {
              this.value = e.target.value;
            },
          },
          count: {
            value: "",
            fn: function (e) {
              this.value = e.target.value;
            },
          },
        },
      ],
      formObject: [
        {
          name: "Собственности",
        },
        {
          name: "Найма",
        },

        {
          name: "Социального найма",
        },
        {
          name: "Аренды",
        },
        {
          name: "Безвоздмездного пользования",
        },
      ],
      formGas: [
        {
          name: "Приготовление пищи",
        },
        {
          name: "Подогрев воды",
        },

        {
          name: "Отопление жилых помещений",
        },
        {
          name: "Отопление нежилых помещений",
        },
        {
          name: "Приготовление кормов для животных",
        },
      ],
      formType: [
        {
          name: "Квартира в многоквартирном доме",
        },
        {
          name: "Жилой дом",
        },

        {
          name: "Надворные постройки индивидуального домовладения",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router, caretDownSharp };
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

ion-item {
  --inner-padding-start: 15px;
}
</style>
