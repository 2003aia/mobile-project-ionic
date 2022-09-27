<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      btnSrc="/tabs/servicesTechAllianceChoose"
      :method="storageHandler"
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
          <div v-for="(el, index) in formUser" :key="el">
            <div class="input-wrapper">
              <input
                ref="text"
                :type="el.type"
                class="input"
                placeholder=" "
                v-model="el.value"
              />
              <ion-text class="input-text" @click="onFocusText(index)"
                >{{ el.name
                }}<ion-text v-if="el.required" class="dot"
                  >*</ion-text
                ></ion-text
              >
            </div>
          </div>
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

            <div v-for="(el, index) in formPass" :key="el">
              <div class="input-wrapper">
                <input
                  ref="text2"
                  :type="el.type"
                  class="input"
                  placeholder=" "
                  v-model="el.value"
                />
                <ion-text class="input-text" @click="onFocusText2(index)"
                  >{{ el.name
                  }}<ion-text v-if="el.required" class="dot"
                    >*</ion-text
                  ></ion-text
                >
              </div>
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

            <InputCheckbox name="Жилой дом" />
            <InputCheckbox name="Гараж" />
            <InputCheckbox name="Баня" />
            <InputCheckbox name="Другое" />

            <ion-text>
              <p class="sub-title">
                Адрес обьекта <ion-text class="dot">*</ion-text>
              </p>
            </ion-text>
            <Input
              :value="address"
              :changeHandler="changeAddress"
              :name="'Введите данные '"
            />
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
            <Input
              :value="deadlines"
              :changeHandler="changeDeadlines"
              :name="'Введите данные'"
            />
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
import { mapActions } from "pinia";
import { useServicesStore } from "../stores/services";
import { Storage } from "@ionic/storage";/* 
<?if ($arItem["LINK"] == 'jur'):?>
			<li class="header__site-section"><a href="https://aostng.ru/"><?=$arItem["TEXT"]?></a></li>
	<?else:?> 
  
  //content

<?endif?>
  */
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
  computed: {
    test() {
      return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter(
        (el) => {
          return (
            el.SERVICE.VALUE ===
            "Услуга технологического присоединения для физических лиц"
            /*  "Услуга технологического присоединения для физических лиц" */
          );
        }
      );
    },
  },
  methods: {
    ...mapActions(useServicesStore, ["getForms"]),
    async storageHandler() {
      const store = new Storage();
      await store.create();
      let formPass = {};
      for (let index = 0; index < this.$data.formPass.length; index++) {
        const element = this.$data.formPass[index];
        formPass[element.field] = { NAME: element.name, VALUE: element.value };
      }

      let formUser = {
        ...this.test[0],
        ...formPass,
        // ...this.$pinia.state.value?.services?.form[0],
      };
      for (let index = 0; index < this.$data.formUser.length; index++) {
        const element = this.$data.formUser[index];
        formUser[element.field] = { NAME: element.name, VALUE: element.value };
      }

      let userObject = {
        ...formUser,

        GAS_ADDRESS: { NAME: "Адрес объекта", VALUE: this.$data.address },
        GAS__SROK: {
          NAME: "Сроки проектирования, строительства и ввода в эксплуатацию объекта капитального строительства (в том числе по этапам и очередям)*",
          VALUE: this.$data.deadlines,
        },
        GAS_SLUCHI: {
          NAME: "Подключение в случаях (выбрать один из следующих вариантов)",
          VALUE: this.$pinia.state.value?.services?.select[0]?.GAS_SLUCHI
            ? this.$pinia.state.value?.services?.select[0]?.GAS_SLUCHI.VALUE
            : this.$pinia.state.value?.services?.select[1]?.GAS_SLUCHI?.VALUE,
        },
        GAS_HARAKTER: {
          NAME: "Характер потребления газа",
          VALUE: this.$pinia.state.value?.services?.select[0]?.GAS_HARAKTER
            ? this.$pinia.state.value?.services?.select[0]?.GAS_HARAKTER?.VALUE
            : this.$pinia.state.value?.services?.select[1]?.GAS_HARAKTER?.VALUE,
        },
      };
      if (this.$pinia.state.value?.services?.form) {
        this.$pinia.state.value?.services?.form?.push(userObject);
      }
      // let test = JSON.parse(this.$pinia.state.value?.services?.form)
      console.log(
        "tessss",
        userObject,
        this.$pinia.state.value?.services?.select
      );
      await store.set("servicesTechAlliance", JSON.stringify(userObject));
    },
    onFocusText(index) {
      this.$refs.text[index].focus();
    },
    onFocusText2(index) {
      this.$refs.text2[index].focus();
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
    const fetchStoreHandler = async () => {
      const store = new Storage();
      await store.create();
      const servicesTechAlliance = await store.get("servicesTechAlliance");
      console.log(JSON.parse(servicesTechAlliance), "servicesTechAlliance");
    };
    console.log(this.form, "choosetest");
    fetchStoreHandler();
    console.log("test", this.test);
  },
  data() {
    return {
      formGasName: [
        {
          name: "Жилой дом",
          value: "Жилой дом",
        },
        {
          name: "Гараж",
          value: "Гараж",
        },
        {
          name: "Баня",
          value: "Баня",
        },
        {
          name: "Другое",
          value: "Другое",
        },
      ],
      address: "",
      deadlines: "",
      formPass: [
        {
          field: "USER_PASSPORT_SERIAL",
          name: "Серия паспорта",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_PASSPORT_NUM",
          type: "text",
          name: "Номер паспорта",

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
        },
        {
          field: "USER_LAST_NAME",

          name: "Фамилия",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_SECOND_NAME",

          name: "Отчество",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_BIRTHDATE",

          name: "Дата рождения",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_BIRTHPLACE",

          name: "Место рождения",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_ADDRESS",

          name: "Место жительства",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_PHONE",

          name: "Контактный телефон",
          type: "text",
          required: true,
          value: "",
        },
        {
          field: "USER_PHONE_2",

          name: "Дополнительный контактный номер",
          type: "text",
          required: false,
          value: "",
        },
        {
          field: "USER_EMAIL",

          name: "E-mail",
          type: "text",
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
.text-white {
  color: #fff;
}
.dot {
  color: #62d0ce;
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
</style>