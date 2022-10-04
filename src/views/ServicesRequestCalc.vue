<template>
  <ion-page>
    <Back
      :btnSrc="
        () => {
          if (open === true) open = false;
          else {
            router.push('/tabs/servicesRequestGas');
          }
        }
      "
    />
    <Layout
      height="false"
      :method="open === true ? countValue : storageHandler"
      :method2="setValue"
      :filledBtn="open === true ? 'Рассчитать ' : 'Далее'"
      :outlineBtn="open === true ? 'Установить значение' : '.'"
      title="Заявка на социальную газификацию"
    >
      <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">
            Определение максимального часового расхода газа
          </p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <div v-if="open === false">
          <ion-text>
            <p>
              <ion-text class="dot">*</ion-text> - обязательное поле для
              заполнения.
            </p>
            <p class="sub-title">
              Планируемая величина максимального часового расхода газа
              <ion-text class="dot">*</ion-text>
            </p>
          </ion-text>

          <Input
            :type="'number'"
            name="0"
            :value="max"
            :changeHandler="changeMax"
          />
          <ion-text v-show="error">
            <p class="error">{{ error }}</p>
          </ion-text>
          <ion-text>
            <p class="sub-title">Калькулятор МЧРГ</p>
          </ion-text>
          <Input
            name="Открыть  "
            @click="
              () => {
                if (open === false) {
                  open = true;
                } else {
                  open = false;
                }
              }
            "
          />
        </div>
        <div v-if="open === true">
          <ion-text>
            <p class="sub-title">Площадь помещения (м2)</p>
          </ion-text>
          <Input
            :type="'number'"
            :name="'0'"
            :value="area"
            :changeHandler="changeArea"
          />
          <ion-text>
            <p class="input-text">
              Уточнять у заявителя, площадь всех помещений суммарно
            </p>
          </ion-text>
          <ion-text>
            <p class="sub-title">Высота наружная (м)</p>
          </ion-text>
          <Input
            :type="'number'"
            :name="'0'"
            :value="height"
            :changeHandler="changeHeight"
          />
          <ion-text>
            <p class="input-text">
              У заявителя высота здания снаружи (без кровли)
            </p>
          </ion-text>
          <ion-text>
            <p class="sub-title">Наличие газовой плиты</p>
          </ion-text>
          <div v-for="el in formPlate" :key="el">
            <ion-item class="check">
              <input
                @click="
                  (e) => {
                    uniqueCheck(e);
                  }
                "
                :ref="el.name"
                :value="el.name"
                v-model="gasPlate"
                @change="uniqueCheck"
                class="check2"
                type="checkbox"
                slot="start"
              />
              {{ el.name }}
            </ion-item>
          </div>

          <ion-text
            ><p class="sub-title footer">
              У вас примерный МЧРГ:
              <ion-text class="blue">{{ counted }}</ion-text>
            </p></ion-text
          >
        </div>
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem } from "@ionic/vue";
import Back from "../components/Back.vue";
import { documentTextOutline } from "ionicons/icons";
import Input from "../components/Input.vue";
import { Storage } from "@ionic/storage";
import { mask } from "vue-the-mask";
// import InputCheckbox from "../components/InputCheckbox.vue";

export default defineComponent({
  name: "servicesRequestCalc",
  components: {
    // InputCheckbox,
    Input,
    IonPage,
    Layout,
    IonText,
    IonItem,
    Back,
  },
  directives: { mask },

  methods: {
    changeMax(e) {
      this.$data.max = e.target.value;
    },
    changeArea(e) {
      this.$data.area = e.target.value;
    },
    changeHeight(e) {
      this.$data.height = e.target.value;
    },
    async uniqueCheck(e) {
      console.log(e.currentTarget.value, "test");
      this.$data.gasPlate = [];
      if (e.currentTarget.checked === false) {
        this.$data.gasPlate.push(e.currentTarget.value);
      }
    },
    countValue() {
      var qkof = {
        100: "0.839",
        200: "0.722",
        300: "0.662",
        400: "0.622",
        500: "0.593",
        600: "0.57",
        700: "0.552",
        800: "0.536",
        900: "0.523",
        1000: "0.511",
        1100: "0.5",
        1200: "0.491",
        1300: "0.483",
        1400: "0.475",
        1500: "0.468",
        1600: "0.462",
        1700: "0.456",
        1800: "0.45",
        1900: "0.445",
        2000: "0.44",
        2100: "0.436",
        2200: "0.431",
        2300: "0.427",
        2400: "0.423",
        2500: "0.42",
        2600: "0.416",
        2700: "0.413",
        2800: "0.41",
        2900: "0.407",
        3000: "0.404",
        3100: "0.4",
        3200: "0.398",
        3300: "0.395",
        3400: "0.393",
        3500: "0.39",
        3600: "0.388",
      };
      let V = this.$data.height * this.$data.area;
      let Vok = Math.ceil(V / 100) * 100;

      let Qtab = parseFloat(qkof[Vok]);
      let traz = 20 - -54;
      let Q = (Qtab * V * traz * 1.3) / 860;
      let Qhd = (Q * 860 * 1.1) / 8500;
      let Qhdp = Qhd + 1.2;
      function set_val(test) {
        if (!isNaN(parseFloat(test))) {
          return test;
        } else {
          return "Значение не известно.";
        }
      }
      this.$data.counted = set_val(Qhdp.toFixed(2));
    },

    setValue() {
      this.$data.max =
        this.$data.counted !== "Значение не известно."
          ? this.$data.counted
          : "";
      this.$data.open = false;
      this.$data.error = ''
    },
    async storageHandler() {
      const store = new Storage();
      await store.create();
      if (this.$data.max.length > 0) {
        console.log("testsetvies");
        const userObject = {
          ...this.$pinia.state.value?.services?.form,
          FORM_TEMPLATE_MAX: {
            NAME: "Планируемая величина максимального  часового расхода газа: ",
            VALUE: this.$data.max,
          },
        };
        if (this.$pinia.state.value?.services?.form) {
          this.$pinia.state.value.services.form = userObject;
          this.$router.push("/tabs/servicesRequestFiles");
        }
      } else {
        console.log("test");
        this.$data.error = "Заполните поле";
      }
    },
  },
  data() {
    return {
      open: false,
      counted: "",
      max: "",
      area: "",
      height: "",
      formPlate: [{ name: "С плитой в кол-ве 1шт" }, { name: "Без плиты" }],
      gasPlate: [],
      error: "",
    };
  },
  setup() {
    const router = useRouter();
    return { router, documentTextOutline };
  },
});
</script>

<style scoped>
.sub-title {
  margin-top: 0px;
  margin-bottom: 10px;
}
.dot {
  color: #62d0ce;
}
.input-text {
  margin-top: -6px;
}
.input-checkbox {
  margin-top: -10px;
}
.footer {
  margin-top: 20px;
}
</style>
