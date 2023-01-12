<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      :method="storageHandler"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Онлайн-заявка на технологическое подключение"
      ><!--       btnSrc="/tabs/servicesTechAllianceChoose" -->
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
                <ion-accordion>
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
                    <div
                      v-show="el.field === 'USER_REGION' && el.value"
                      v-for="address in addressList"
                      :key="address"
                    >
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
            <div v-for="el in formGasName" :key="el">
              <ion-item class="check">
                <input
                  @click="
                    (e) => {
                      uniqueCheck(e);
                    }
                  "
                  :value="el.name"
                  v-model="gasHome"
                  @change="uniqueCheck"
                  class="check2"
                  type="checkbox"
                  slot="start"
                />
                {{ el.name }}
              </ion-item>
            </div>
            <ion-text v-show="gasHome?.error === true">
              <p class="error">Выберите вариант</p>
            </ion-text>

            <ion-text>
              <p class="sub-title">
                Адрес обьекта <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <ion-accordion-group ref="addressQuery3">
              <ion-accordion value="first">
                <Input
                  slot="header"
                  @input="
                    (e) => {
                      addressQueryHandler(e, 'GAS_ADDRESS');

                      changeAddress(e);
                    }
                  "
                  :value="address"
                  :name="'Введите данные '"
                />
                <div slot="content" v-show="address">
                  <div
                    v-show="address"
                    v-for="addressItem in addressList"
                    :key="addressItem"
                  >
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
                  <ion-item lines="none" v-show="addressList?.length === 0">
                    <ion-text>Не найдено</ion-text>
                  </ion-item>
                </div>
              </ion-accordion>
            </ion-accordion-group>

            <ion-text
              v-show="validation.address === true && address.length === 0"
            >
              <p class="error">Заполните поле</p>
            </ion-text>
            <ion-text>
              <p class="sub-title">
                Подключение в случаях (выбрать один из следующих вариантов)
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <ButtonSelect
              :btnSrc="
                () => {
                  this.$pinia.state.value.services.techAllianceConnection = true;
                  router.push({
                    name: 'servicesTechAllianceSelect',
                  });
                }
              "
              :name="
                this.select?.GAS_SLUCHI?.VALUE
                  ? this.select?.GAS_SLUCHI?.VALUE
                  : 'Выберите вариант'
              "
            />
            <ion-text>
              <p class="sub-title">
                Характер потребления газа
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <ButtonSelect
              :btnSrc="
                () => {
                  this.$pinia.state.value.services.techAllianceConnection = false;
                  router.push({
                    name: 'servicesTechAllianceSelect',
                  });
                }
              "
              :name="
                this.select?.GAS_HARAKTER?.VALUE
                  ? this.select?.GAS_HARAKTER?.VALUE
                  : 'Выберите вариант'
              "
            />
            <ion-text
              v-show="
                validation.select === true &&
                this.select?.GAS_HARAKTER?.VALUE === undefined &&
                this.select?.GAS_SLUCHI?.VALUE === undefined
              "
            >
              <p class="error">Выберите вариант</p>
            </ion-text>
            <ion-text>
              <p class="sub-title">
                Сроки проектирования, строительства и ввода в эксплуатацию
                объекта капитального строительства (в том числе по этапам и
                очередям)
                <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <Input
              :value="deadlines"
              :changeHandler="changeDeadlines"
              :name="'Введите данные'"
            />
            <ion-text
              v-show="validation.deadlines === true && deadlines.length === 0"
            >
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
  IonItem,
  IonAccordion,
  IonAccordionGroup,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
import { mapActions } from "pinia";
import { useServicesStore } from "../stores/services";
import { Storage } from "@ionic/storage";
import moment from "moment";
import { mask } from "vue-the-mask";
import { useProfileStore } from "../stores/profile";

export default defineComponent({
  name: "servicesTechAlliance",
  components: {
    IonPage,
    Layout,
    IonText,
    Input,
    Back,
    ButtonSelect,
    LayoutBox,
    IonItem,
    IonAccordion,
    IonAccordionGroup,
  },

  directives: { mask },

  computed: {
    profileDataComputed() {
      return this.$pinia.state.value?.profile?.profileResponse?.data;
    },
    addressList() {
      return this.$pinia.state.value?.services?.addressResponse?.suggestions;
    },
    formFields() {
      return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter(
        (el) => {
          return (
            el.SERVICE.VALUE ===
            "Услуга технологического присоединения для физических лиц"
          );
        }
      );
    },
    select() {
      return this.$pinia.state.value?.services?.select;
    },
  },
  methods: {
    ...mapActions(useProfileStore, ["getProfile"]),

    ...mapActions(useServicesStore, ["getForms", "addressQuery"]),
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
      let checkGasHome =
        this.$data.gasHome.length === 0
          ? (this.$data.gasHome = { error: true })
          : null;

      let checkRest = () => {
        if (this.$data.address.length === 0) {
          this.$data.validation.address = true;
        } else {
          this.$data.validation.address = false;
        }
        if (this.$data.deadlines.length === 0) {
          this.$data.validation.deadlines = true;
        } else {
          this.$data.validation.deadlines = false;
        }
        if (
          this.select?.GAS_SLUCHI?.VALUE === undefined &&
          this.select?.GAS_HARAKTER?.VALUE === undefined
        ) {
          this.$data.validation.select = true;
        } else {
          this.$data.validation.select = false;
        }
      };
      checkRest();

      if (
        checkUser.length === 0 &&
        checkPass.length === 0 &&
        checkGasHome === null &&
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
          USER: { NAME: "USER", VALUE: "", VALUE_ID: 0 },
          GAS_ADDRESS: { NAME: "Адрес объекта", VALUE: this.$data.address },
          GAS__SROK: {
            NAME: "Сроки проектирования, строительства и ввода в эксплуатацию объекта капитального строительства (в том числе по этапам и очередям)*",
            VALUE: this.$data.deadlines,
          },
          GAS_SLUCHI: {
            NAME: "Подключение в случаях (выбрать один из следующих вариантов)",
            VALUE: this.select?.GAS_SLUCHI.VALUE,
          },
          GAS_HARAKTER: {
            NAME: "Характер потребления газа",
            VALUE: this.select?.GAS_HARAKTER.VALUE,
          },
          GAS_HOME: {
            NAME: "Наименование объекта капитального строительства",
            VALUE: this.$data.gasHome[0],
          },
        };
        console.log(userObject, "test");
        if (this.$pinia.state.value?.services?.form) {
          this.$pinia.state.value.services.form = userObject;
          await store.set("servicesTechAlliance", JSON.stringify(userObject));
        }
        this.$router.push("/tabs/servicesTechAllianceChoose");
      }
    },
    async uniqueCheck(e) {
      console.log(e.currentTarget.value, "test");
      this.$data.gasHome = [];
      if (e.currentTarget.checked === false) {
        this.$data.gasHome.push(e.currentTarget.value);
      }
    },

    changeDeadlines(e) {
      this.$data.deadlines = e.target.value;
    },
    changeAddress(e) {
      this.$data.address = e.target.value;
    },
  },
  mounted() {
    this.getForms();
    this.getProfile().then(async () => {
      const store = new Storage()
      await store.create()
      const token = await store.get('token')
      this.$data.formPass[0].value = this.profileDataComputed?.passport?.serial
      this.$data.formPass[1].value = this.profileDataComputed?.passport?.number
      this.$data.formPass[2].value = this.profileDataComputed?.passport?.issuedBy
      this.$data.formPass[3].value = this.profileDataComputed?.passport?.issuedDate
      this.$data.formUser[0].value = this.profileDataComputed?.name
      this.$data.formUser[1].value = this.profileDataComputed?.surname
      this.$data.formUser[2].value = this.profileDataComputed?.lastname
      this.$data.formUser[6].value = JSON.parse(token).phone
      this.$data.formUser[8].value = this.profileDataComputed?.email
    })
    const fetchStoreHandler = async () => {
      const store = new Storage();
      await store.create();
      const servicesTechAlliance = await store.get("servicesTechAlliance");
      console.log(JSON.parse(servicesTechAlliance), "servicesTechAlliance");
    };
    fetchStoreHandler();
    console.log("test", this.formFields);
  },
  data() {
    return {
      validation: {
        address: false,
        deadlines: false,
        select: false,
      },
      formGasName: [
        {
          name: "Жилой дом",
        },
        {
          name: "Гараж",
        },
        {
          name: "Баня",
        },
        {
          name: "Другое",
        },
      ],
      address: "",
      deadlines: "",
      gasHome: [],
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
          type: "email",
          required: true,
          value: "",
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
ion-item {
  --inner-padding-start: 15px;
  --inner-padding-bottom: 0px;
  --padding-bottom: 0px;
}
.text-white {
  color: #fff;
}
</style>
