<template>
  <ion-page>
    <Back />
    <Layout
      height="false"
      :method="storageHandler"
      :filledBtn="'Далее'"
      outlineBtn="."
      title="Заявка на социальную газификацию"
      ><!--   :btnSrc="'/tabs/servicesRequestCalc'" -->
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

        <div v-for="(el, index) in formUser" :key="el">
          <ion-accordion-group ref="addressQuery">
            <ion-accordion value="first" :toggle-icon="caretDownSharp">
              <Input
                :mask="el.mask"
                slot="header"
                :value="el.value"
                :name="el.name"
                :required="el.required"
                @input="
                  (e) => {
                    el.value = e.target.value;
                    addressQueryHandler(e, el.field);
                  }
                "
              />
              <div
                slot="content"
                v-show="
                  el.field === 'USER_BIRTHPLACE' ||
                  (el.field === 'USER_ADDRESS' && el.value)
                "
              >
                <div
                  v-show="
                    el.field === 'USER_BIRTHPLACE' ||
                    ('USER_ADDRESS' && el.value)
                  "
                  v-for="address in addressList"
                  :key="address"
                >
                  <ion-item
                    button
                    @click="
                      () => {
                        this.$refs.addressQuery[index].$el.value = undefined;
                        el.value = address.value;
                      }
                    "
                    :lines="
                      addressList[addressList.length - 1]?.value ===
                      address.value
                        ? 'none'
                        : 'full'
                    "
                  >
                    <ion-text>{{ address.value }}</ion-text>
                  </ion-item>
                </div>
                <ion-item lines="none" v-show="addressList?.length === 0">
                  <ion-text>Не найдено</ion-text>
                </ion-item>
              </div>
            </ion-accordion>
          </ion-accordion-group>
          <ion-text v-show="el.value.length === 0 && el.error">
            <p class="error">Заполните поле</p>
          </ion-text>
        </div>
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
            <div v-for="(el, index) in formPass" :key="el">
              <ion-accordion-group ref="addressQuery2">
                <ion-accordion value="first">
                  <Input
                    :mask="el.mask"
                    slot="header"
                    :value="el.value"
                    :name="el.name"
                    :required="el.required"
                    @input="
                      (e) => {
                        el.value = e.target.value;
                        addressQueryHandler(e, el.field);
                      }
                    "
                  />

                  <div
                    slot="content"
                    v-show="el.field === 'USER_REGION' && el.value"
                  >
                    <div>
                      <div v-for="address in addressList" :key="address">
                        <ion-item
                          button
                          @click="
                            () => {
                              this.$refs.addressQuery2[index].$el.value =
                                undefined;
                              el.value = address.value;
                            }
                          "
                          :lines="
                            addressList[addressList.length - 1]?.value ===
                            address.value
                              ? 'none'
                              : 'full'
                          "
                        >
                          <ion-text>{{ address.value }}</ion-text>
                        </ion-item>
                      </div>
                      <ion-item v-show="addressList?.length === 0" lines="none">
                        Не найдено
                      </ion-item>
                    </div>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
              <ion-text v-show="el.value.length === 0 && el.error">
                <p class="error">Заполните поле</p>
              </ion-text>
            </div>
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

            <ion-accordion-group ref="addressQuery3">
              <ion-accordion value="first">
                <Input
                  slot="header"
                  :value="address"
                  name="Введите данные  "
                  @input="
                    (e) => {
                      changeAddress(e);
                      addressQueryHandler(e, 'GAS_ADDRESS');
                    }
                  "
                /><!--  :changeHandler="changeAddress" -->
                <div slot="content" v-show="address">
                  <div>
                    <div v-for="addressItem in addressList" :key="addressItem">
                      <ion-item
                        button
                        @click="
                          () => {
                            this.$refs.addressQuery3.$el.value = undefined;
                            address = addressItem.value;
                          }
                        "
                        :lines="
                          addressList[addressList.length - 1]?.value ===
                          addressItem.value
                            ? 'none'
                            : 'full'
                        "
                      >
                        <ion-text>{{ addressItem.value }}</ion-text>
                      </ion-item>
                    </div>
                    <ion-item v-show="addressList?.length === 0" lines="none">
                      Не найдено
                    </ion-item>
                  </div>
                </div>
              </ion-accordion>
            </ion-accordion-group>
            <ion-text v-show="validation.address === true">
              <p class="error">Заполните поле</p>
            </ion-text>
            <ion-text>
              <p class="sub-title">
                Кадастровый номер земельного участка
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <Input
              :value="number"
              :changeHandler="changeNumber"
              name="Введите данные "
            />
            <ion-text v-show="validation.number === true">
              <p class="error">Заполните поле</p>
            </ion-text>
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
  IonAccordion,
  IonAccordionGroup,
  IonItem,
} from "@ionic/vue";
import Back from "../components/Back.vue";
import { documentTextOutline, caretDownSharp } from "ionicons/icons";
import Input from "../components/Input.vue";
import LayoutBox from "../components/LayoutBox.vue";
import { mapActions } from "pinia";
// import axios from "axios";
import moment from "moment";
import { Storage } from "@ionic/storage";
import { useServicesStore } from "../stores/services";

export default defineComponent({
  name: "servicesRequestGas",
  components: {
    LayoutBox,
    Input,
    IonPage,
    Layout,
    IonText,
    Back,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
  },
  methods: {
    ...mapActions(useServicesStore, ["getForms", "addressQuery"]),
    changeNumber(e) {
      this.$data.number = e.target.value;
    },
    changeAddress(e) {
      this.$data.address = e.target.value;
    },
    onFocusText(index) {
      this.$refs.text[index].focus();
    },

    onFocusText2(index) {
      this.$refs.text2[index].focus();
    },
    addressQueryHandler(v, field) {
      if (field === "USER_BIRTHPLACE") {
        this.addressQuery(v.target.value, field);
      }
      if (field === "USER_ADDRESS") {
        this.addressQuery(v.target.value, field);
      }
      if (field === "USER_REGION" || field === "GAS_ADDRESS") {
        this.addressQuery(v.target.value, field);
      }
    },
    async storageHandler() {
      const store = new Storage();
      await store.create();
      let formPass = {};
      let checkUser = this.$data.formUser.filter((el) => {
        if (el.required === true) {
          el.error = true;
          return el.value === "";
        }
      });
      let checkPass = this.$data.formPass.filter((el) => {
        if (el.required === true) {
          el.error = true;
          return el.value === "";
        }
      });

      let checkRest = () => {
        if (this.$data.address.length === 0) {
          this.$data.validation.address = true;
        } else {
          this.$data.validation.address = false;
        }
        if (this.$data.number.length === 0) {
          this.$data.validation.number = true;
        } else {
          this.$data.validation.number = false;
        }
      };
      checkRest();

      if (
        checkUser.length === 0 &&
        checkPass.length === 0 &&
        Object.keys(this.$data.validation).every(
          (k) => !this.$data.validation[k]
        )
      ) {
        for (let index = 0; index < this.$data.formPass.length; index++) {
          const element = this.$data.formPass[index];
          formPass[element.field] = {
            NAME: element.name,
            VALUE: element.value,
          };
        }

        let formUser = {
          ...this.formFields[0],
          ...formPass,
          // ...this.$pinia.state.value?.services?.form[0],
        };
        for (let index = 0; index < this.$data.formUser.length; index++) {
          const element = this.$data.formUser[index];
          formUser[element.field] = {
            NAME: element.name,
            VALUE: element.value,
          };
        }

        let userObject = {
          ...formUser,
          DATE_CREATE: {
            NAME: "Дата создания",
            VALUE: `${moment().format("DD.MM.YYYY hh:mm:ss")} `,
          },
          TIMESTAMP_X: {
            NAME: "Время последнего изменения",
            VALUE: `${moment().format("DD.MM.YYYY hh:mm:ss")} `,
          },
          NAME: {
            NAME: "Название",
            VALUE: `${moment().format("DD.MM.YYYY hh:mm")} `,
          },
          USER: { NAME: "USER", VALUE: "", VALUE_ID: 0 },
          GAS_ADDRESS: { NAME: "Адрес объекта", VALUE: this.$data.address },
          GAS_KADASTR: {
            NAME: "Кадастровый номер земельного участка",
            VALUE: this.$data.number,
          },
        };
        console.log(userObject, "testuserObject");
        if (this.$pinia.state.value?.services?.form) {
          this.$pinia.state.value.services.form = userObject;
          await store.set("servicesTechAlliance", JSON.stringify(userObject));
        }
        this.$router.push("/tabs/servicesRequestCalc");
      }
    },
  },
  computed: {
    formFields() {
      return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter(
        (el) => {
          return el.SERVICE.VALUE === "Социальная газификация";
        }
      );
    },
    addressList() {
      return this.$pinia.state.value?.services?.addressResponse?.suggestions;
    },
  },
  mounted() {
    // this.addressQueryHandler()
    this.getForms();
    console.log(
      this.formFields,

      "testtt222222"
    );
  },

  setup() {
    const router = useRouter();
    return { router, documentTextOutline, caretDownSharp };
  },
  data() {
    return {
      number: "",
      address: "",
      validation: {
        address: false,
        number: false,
      },
      formUser: [
        {
          field: "USER_NAME",
          name: "Имя",
          type: "text",
          required: true,
          value: "",
          mask: null,
        },
        {
          field: "USER_LAST_NAME",
          mask: null,

          name: "Фамилия",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_SECOND_NAME",
          mask: null,

          name: "Отчество",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_BIRTHDATE",
          mask: "##.##.####",
          name: "Дата рождения",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_SNILS",
          mask: "###-###-### ##",
          name: "СНИЛС",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_INN",
          mask: "############",
          name: "ИНН",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_BIRTHPLACE",
          mask: null,
          name: "Место рождения",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_ADDRESS",
          mask: null,

          name: "Место жительства",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_PHONE",
          mask: "+7 (###) ###-##-##",

          name: "Контактный телефон",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_PHONE_2",
          mask: null,

          name: "Дополнительный контактный номер",
          type: "text",
          required: false,
          value: "",
        },
        {
          field: "USER_EMAIL",
          mask: null,

          name: "E-mail",
          type: "text",
          required: true,
          value: "",
        },
      ],
      formPass: [
        {
          field: "USER_PASSPORT_SERIAL",
          name: "Серия паспорта",
          mask: "####",

          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_PASSPORT_NUM",
          type: "text",
          name: "Номер паспорта",
          mask: "######",

          required: true,
          value: "",
        },
        {
          field: "USER_PASS_WHO",

          name: "Кем выдан",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_PASS_DATE",
          mask: "##.##.####",

          name: "Дата выдачи паспорта",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_REGION",

          name: "Место регистрации",
          type: "text",
          required: true,
          value: "",
        },
      ],
      forms: [],
    };
  },
});
</script>

<style scoped>
.sub-title {
  margin-top: 0px;
  margin-bottom: 10px;
}
.text {
  margin-bottom: 10px;
  margin-top: 0px;
}

.input {
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  border: solid 1px #e0e0e0;
  margin-bottom: 15px;
  --padding-start: 15px;
  --padding-bottom: 14px;
  --padding-top: 14px;
  --placeholder-color: #9e9e9e;
  --placeholder-font-weight: 400;
}

.input:focus {
  outline: none !important;
  border: solid 1px #62d0ce;
  caret-color: #000;
}
.input-wrapper {
  position: relative;
  width: 100%;
}
.input-text {
  z-index: 0;
  padding-left: 15px;
  position: absolute;
  left: 1px;
  top: 15px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
.inputTextBlue {
  color: #0378b4;
  font-weight: 700;
}

input:not(:placeholder-shown) + ion-text {
  display: none;
}

.dot {
  color: #62d0ce;
}

ion-item {
  --inner-padding-start: 15px;
  --inner-padding-bottom: 0px;
  --padding-bottom: 0px;
}
</style>
