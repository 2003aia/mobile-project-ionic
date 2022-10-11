<template>
  <ion-page>
    <Back />
    <!-- () => router.push({ name: 'servicesOneSelect', params: { next: true } }) -->
    <Layout
      :method="storageHandler"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Разовая услуга"
    >
      <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Общие сведения для формы заявления</p>

          <p class="text-white">
            <ion-text class="main-subtitle"> Внимание! </ion-text>
            Уважаемые Абоненты, воспользоваться данным сервисом могут только
            Абоненты, заключившие договор на выполнение работ по техническому
            обслуживанию и ремонту внутридомового газового оборудования с
            Управлением газораспрделеиельных сетей АО «Сахатранснефтегаз». Перед
            подачей заявки, убедитесь в наличии договора для ввода номера в поле
            Анкеты.
          </p>
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
                v-show="el.field === 'USER_ADDRESS' && el.value"
              >
                <div
                  v-show="el.field === 'USER_ADDRESS' && el.value"
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
            <div v-for="el in formPass" :key="el">
              <Input
                :mask="el.mask"
                :value="el.value"
                :name="el.name"
                :required="el.required"
                @input="
                  (e) => {
                    el.value = e.target.value;
                  }
                "
              />

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
            </ion-text>
            <div v-for="el in formGas" :key="el">
              <Input
                :mask="el.mask"
                :value="el.value"
                :name="el.name"
                :required="el.required"
                @input="
                  (e) => {
                    el.value = e.target.value;
                  }
                "
              />

              <ion-text v-show="el.value.length === 0 && el.error">
                <p class="error">Заполните поле</p>
              </ion-text>
            </div>

            <ion-text>
              <p class="sub-title">Вид работ</p>
            </ion-text>
            <ButtonSelect
              :name="
                this.select?.GAS_VID_USLUG?.VALUE
                  ? this.select?.GAS_VID_USLUG?.VALUE
                  : 'Выберите вариант'
              "
              :btnSrc="
                () => {
                  router.push('/tabs/servicesOneSelect');
                }
              "
            />
            <ion-text
              v-show="
                validation.select === true && !this.select?.GAS_VID_USLUG?.VALUE
              "
            >
              <p class="error">Выберите вариант</p>
            </ion-text>
            <ion-text>
              <p class="sub-title">
                Лицевой счет (соответствует № договора поставки газа)
              </p>
            </ion-text>
            <Input name="Лицевой счет" :value="lc" :changeHandler="changeLc" />
            <ion-text v-show="validation.lc === true && lc.length === 0">
              <p class="error">Заполните поле</p>
            </ion-text>
            <ion-text>
              <p class="sub-title">
                Номер договора выполнение работ по техническому обслуживанию и
                ремонту внутридомового и внутриквартирного газового оборудования
                с УГРС АО Сахатранснефтегаз
              </p>
            </ion-text>
            <Input
              name="Номер договора"
              :value="number"
              :changeHandler="changeNumber"
            />
            <ion-text
              v-show="validation.number === true && number.length === 0"
            >
              <p class="error">Заполните поле</p>
            </ion-text>
            <ion-text>
              <p class="sub-title">
                Управляющая компания для многоквартирных домов
              </p>
            </ion-text>
            <Input
              name="Управляющая компания"
              :value="company"
              :changeHandler="changeCompany"
            />
            <ion-text
              v-show="validation.company === true && company.length === 0"
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
  IonAccordion,
  IonAccordionGroup,
  IonItem,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
import moment from "moment";
import { mask } from "vue-the-mask";
import { mapActions } from "pinia";
import { useServicesStore } from "../stores/services";
export default defineComponent({
  name: "oneServicePage",
  components: {
    IonPage,
    ButtonSelect,
    Layout,
    IonText,
    Input,
    Back,
    LayoutBox,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
  },
  directives: { mask },

  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
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
    ...mapActions(useServicesStore, ["getForms", "addressQuery"]),
    async storageHandler() {
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
      let checkGas = this.$data.formGas.filter((el) => {
        if (el.required === true) {
          el.error = true;
          return el.value === "";
        }
      });
      let checkRest = () => {
        if (this.$data.lc.length === 0) {
          this.$data.validation.lc = true;
        } else {
          this.$data.validation.lc = false;
        }
        if (this.$data.number.length === 0) {
          this.$data.validation.number = true;
        } else {
          this.$data.validation.number = false;
        }
        if (this.$data.company.length === 0) {
          this.$data.validation.company = true;
        } else {
          this.$data.validation.company = false;
        }
        if (this.select?.GAS_VID_USLUG?.VALUE === undefined) {
          this.$data.validation.select = true;
        } else {
          this.$data.validation.select = false;
        }
      };
      checkRest();

      if (
        checkUser.length === 0 &&
        checkPass.length === 0 &&
        checkGas.length === 0 &&
        Object.keys(this.$data.validation).every(
          (k) => !this.$data.validation[k]
        )
      ) {
        let formPass = {};
        let formGas = {};

        for (let index = 0; index < this.$data.formPass.length; index++) {
          const element = this.$data.formPass[index];
          formPass[element.field] = {
            NAME: element.name,
            VALUE: element.value,
          };
        }
        for (let index = 0; index < this.$data.formGas.length; index++) {
          const element = this.$data.formGas[index];
          formGas[element.field] = {
            NAME: element.name,
            VALUE: element.value,
          };
        }
        let formUser = {
          ...this.formFields[0],
          ...formPass,
          ...formGas,
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
          NAME: {
            NAME: "Название",
            VALUE: `${formUser.USER_NAME.VALUE} ${
              formUser.USER_LAST_NAME.VALUE
            }[${moment().format("DD.MM.YYYY hh:mm")}]`,
          },
          DATE_CREATE: {
            NAME: "Дата создания",
            VALUE: `${moment().format("DD.MM.YYYY hh:mm:ss")} `,
          },
          TIMESTAMP_X: {
            NAME: "Время последнего изменения",
            VALUE: `${moment().format("DD.MM.YYYY hh:mm:ss")} `,
          },
          USER: { NAME: "USER", VALUE: "", VALUE_ID: 0 },
          GAS_UPR_COMP: {
            NAME: "Управляющая компания (для многоквартирных домов)",
            VALUE: this.$data.company,
          },
          GAS_LC: {
            NAME: "Лицевой счет (соответствует № договора поставки газа)",
            VALUE: this.$data.lc,
          },
          GAS_NDOGOVORA_UGRS: {
            NAME: "Номер договора выполнение работ  по техническому о…азового оборудования  с УГРС АО Сахатранснефтегаз",
            VALUE: this.$data.number,
          },
          GAS_VID_USLUG: {
            NAME: "Вид работ",
            VALUE: this.select?.GAS_VID_USLUG?.VALUE,
          },
        };
        console.log(userObject, "test");
        if (this.$pinia.state.value?.services?.form) {
          this.$pinia.state.value.services.servicesOneNext = true 
          this.$router.push({
            name: "servicesOneSelect",
           /*  params: { next: true }, */
          });
          this.$pinia.state.value.services.form = userObject;
        }
      }
    },

    changeCompany(e) {
      this.$data.company = e.target.value;
    },
    changeLc(e) {
      this.$data.lc = e.target.value;
    },
    changeNumber(e) {
      this.$data.number = e.target.value;
    },
  },
  mounted() {
    this.getForms();
  },
  computed: {
    addressList() {
      return this.$pinia.state.value?.services?.addressResponse?.suggestions;
    },
    formFields() {
      return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter(
        (el) => {
          return (
            el.SERVICE.VALUE ===
            "Разовые услуги для абонентов АО «Сахатранснефтегаз»"
          );
        }
      );
    },
    select() {
      return this.$pinia.state.value?.services?.select;
    },
  },
  data() {
    return {
      validation: {
        select: false,
        lc: false,
        number: false,
        company: false,
      },
      lc: "",
      number: "",
      company: "",
      formGas: [
        {
          field: "GAS_NP",
          name: "Населенный пункт",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "GAS_STREET",
          type: "text",
          name: "Улица",
          required: true,
          value: "",
        },
        {
          field: "GAS_N_DOMA",
          name: "№ дома ",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "GAS_N_KORPUSA",
          name: "№ корпуса",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "GAS_N_KV",
          name: "№ квартиры",
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
});
</script>

<style scoped>
.text-white {
  color: #fff;
}
ion-item {
  --inner-padding-start: 15px;
  --inner-padding-bottom: 0px;
  --padding-bottom: 0px;
}
</style>
