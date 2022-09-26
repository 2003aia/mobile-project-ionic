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
          <div v-for="el in formUser" :key="el">
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
          <!-- 
          <Input name="Укажите имя " :required="true" />
          <Input name="Укажите фамилию " :required="true" />
          <Input name="Укажите отчество " :required="true" />
          <Input name="Дата рождения " :required="true" />
          <Input name="Место рождения  " :required="true" />
          <Input name="Место жительства " :required="true" />
          <Input name="Контактный телефон " :required="true" />
          <Input name="Доп. контактный телефон  " :required="true" />
          <Input name="Электронная почта  " :required="true" /> -->
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

            <div v-for="el in formPass" :key="el">
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
            <!--  <Input name="Серия " :required="true" />
            <Input name="Номер " :required="true" />
            <Input name="Кем выдан " :required="true" />
            <Input name="Дата выдачи паспорта " :required="true" />
            <Input name="Место регистрации " :required="true" /> -->
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
            <!--  <div v-for="el in formGasName" :key="el">
              <InputCheckbox
                :name="el.name"
                :value="el.value"
                :changeHandler="selectOnlyThis(el.name)"
              />

            </div> -->
            <InputCheckbox name="Жилой дом" />
            <InputCheckbox name="Гараж" />
            <InputCheckbox name="Баня" />
            <InputCheckbox name="Другое" />
            <!-- <ion-radio-group
              mode="ios"
              v-for="el in formGasName"
              :key="el"
              value="Жилой дом"
            >
              <ion-item>
                <ion-label>{{ el.name }}</ion-label>
                <ion-radio slot="start" :value="el.value"></ion-radio>
              </ion-item>
            </ion-radio-group> -->
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
import { Storage } from "@ionic/storage";

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
      const userObject = {
        ...this.$data.formPass,
        ...this.$data.formUser,
        GAS_ADDRESS: this.$data.address,
        GAS__SROK: this.$data.deadlines,
        GAS_SLUCHI: this.$route.params?.connect,
        GAS_HARAKTER: this.$route.params?.harakter,
      };
      await store.set("servicesTechAlliance", JSON.stringify(userObject));
    },
    onFocusText: function (index) {
      console.log("focus");
      this.$refs.text[index].focus();
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
          name: "Серия",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Номер",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Кем выдан",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Дата выдачи паспорта",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Место регистрации",
          type: "text",
          required: true,
          value: "",
        },
      ],
      formUser: [
        {
          name: "Укажите имя",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Укажите фамилию",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Укажите отчество",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Дата рождения",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Место рождения",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Место жительства",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Контактный телефон",
          type: "text",
          required: true,
          value: "",
        },
        {
          name: "Доп. контактный телефон",
          type: "text",
          required: false,
          value: "",
        },
        {
          name: "Электронная почта",
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