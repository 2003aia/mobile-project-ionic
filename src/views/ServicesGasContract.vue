<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      :method="storageHandler"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Заключения договора поставки газа для обеспечения коммунально - бытовых нужд гражданина собственниками квартир"
      ><!-- btnSrc="/tabs/servicesGasContractCheckbox" -->
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
                v-show="
                  el.field === 'USER_BIRTHPLACE' ||
                  (el.field === 'USER_ADDRESS' && el.value)
                "
              >
                <div
                  v-show="
                    el.field === 'USER_BIRTHPLACE' ||
                    (el.field === 'USER_ADDRESS' && el.value)
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
import { mapActions } from "pinia";
import { useServicesStore } from "../stores/services";
// import { Storage } from "@ionic/storage";
import moment from "moment";
import { mask } from "vue-the-mask";
export default defineComponent({
  name: "servicesGasContract",
  components: {
    IonPage,
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

  computed: {
    addressList() {
      return this.$pinia.state.value?.services?.addressResponse?.suggestions;
    },
    formFields() {
      return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter(
        (el) => {
          return (
            el.SERVICE.VALUE ===
            "Услуга заключения договора поставки газа для собственников квартир "
          );
        }
      );
    },
  },
  mounted() {
    this.getForms();
    console.log(this.formFields, "testst");
  },
  methods: {
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
    storageHandler() {
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

      if (checkUser.length === 0 && checkPass.length === 0) {
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
          NAME: {
            NAME: "Название",
            VALUE: `[${moment().format("DD.MM.YYYY hh:mm:ss")}]`,
          },
        };
        console.log(userObject, "test");
        if (this.$pinia.state.value?.services?.form) {
          this.$pinia.state.value.services.form = userObject;
          this.$router.push("/tabs/servicesGasContractCheckbox");
        }
      }
    },
  
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
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
});
</script>

<style scoped>
.text-white {
  color: #fff;
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
