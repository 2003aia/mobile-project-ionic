<template>
  <ion-page>
    <Back />
    <Layout
      :method="storageHandler"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Онлайн-заявка на технологическое подключение"
      ><!--   btnSrc="/tabs/servicesTechAllianceFiles" -->
      <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">
            Определение максимального часового расхода газа
          </p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">
            Выберите планируемый максимальный часовой расхода газа. Расчет
            максимального часового расхода газа (не прилагается, если
            планируемый максимальный часовой расход газа не более 7 куб.
            метров)*
          </p>
          <p>
            <ion-text class="dot">*</ion-text> - обязательное поле для
            заполнения.
          </p>
        </ion-text>
        <ion-accordion-group ref="gasAccordion">
          <ion-accordion :toggle-icon="caretDownSharp" value="first">
            <ButtonSelect
              :required="true"
              slot="header"
              :name="'Менее <7 м3/ч '"
            />
            <div slot="content">
              <ion-text>
                <p class="sub-title">
                  Планируемая величина максимального часового расхода газа
                  <ion-text class="dot">*</ion-text>
                </p>
              </ion-text>
              <Input
                :value="little"
                :changeHandler="changeLittle"
                name="0"
                :type="'number'"
              />
              <ion-text
                v-show="validation.little === true && little.length >= 1"
              >
                <p class="error">Заполните поле</p>
              </ion-text>
              <ion-text>
                <p class="sub-title">По различным точкам подключения:</p>
              </ion-text>
              <Input
                :value="points"
                :changeHandler="changePoints"
                :type="'text'"
                :name="'Введите данные '"
              />
            </div>
          </ion-accordion>
          <ion-accordion :toggle-icon="caretDownSharp" value="second">
            <ButtonSelect
              slot="header"
              :name="'Более >7 м3/ч  '"
              :required="true"
            />

            <div slot="content">
              <ion-text>
                <p>
                  (требуется приложить скан. (*.jpeg, *.pdf, *.zip) планируемого
                  максимального часового расхода газа (МЧРГ)*
                </p>
                <p>
                  Необходимо приложить расчет максимального часового расхода
                  газа со специализированной проектной организации, имеющей
                  свидетельство СРО
                </p>
              </ion-text>
              <ion-item lines="none" v-show="file?.name">
                <ion-text class="blue">
                  {{ file?.name }}
                </ion-text>
                <ion-icon
                  @click="() => (file = null)"
                  class="history-icon"
                  slot="end"
                  :icon="trashOutline"
                />
              </ion-item>
              <ion-text v-show="validation.file === true && file === ''">
                <p class="error">Выберите файл</p>
              </ion-text>
              <InputFile
                name="0"
                :changeHandler="changeFile"
                :accept="'image/jpeg, application/pdf, .zip'"
              />

              <ion-text>
                <p class="sub-title">
                  Планируемая величина максимального часового расхода газа
                  <ion-text class="dot">*</ion-text>
                </p>
              </ion-text>
              <Input
                :value="big"
                :changeHandler="changeBig"
                :type="'number'"
                :name="'0'"
              />
              <ion-text v-show="validation.big === true && big.length >= 1">
                <p class="error">Заполните поле</p>
              </ion-text>
              <ion-text>
                <p class="sub-title">По различным точкам подключения:</p>
              </ion-text>
              <Input
                :value="points"
                :changeHandler="changePoints"
                :type="'text'"
                :name="'Введите данные '"
              />
            </div>
          </ion-accordion>
        </ion-accordion-group>
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
  IonIcon,
  IonItem,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import Back from "../components/Back.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
import { caretDownSharp, trashOutline } from "ionicons/icons";
import InputFile from "../components/InputFile.vue";
import { Storage } from "@ionic/storage";

export default defineComponent({
  name: "servicesTechAllianceChoose",
  components: {
    IonPage,
    Layout,
    IonText,
    InputFile,
    Input,
    IonAccordion,
    IonAccordionGroup,
    Back,
    ButtonSelect,
    IonIcon,
    IonItem,
  },
  computed: {
    formFields() {
      return this.$pinia.state.value?.services?.form;
    },
  },
  data() {
    return {
      little: "0",
      big: "0",
      points: "",
      file: "",
      validation: {
        little: false,
        big: false,
        file: false,
      },
    };
  },
  methods: {
    changeLittle(e) {
      this.$data.little = e.target.value;
    },
    changeBig(e) {
      this.$data.big = e.target.value;
    },
    changePoints(e) {
      this.$data.points = e.target.value;
    },
    changeFile(e) {
      this.$data.file = e.target.files[0];
    },
    async storageHandler() {
      const store = new Storage();
      await store.create();
      const check = () => {
        if (
          this.$refs.gasAccordion.$el.value === "first" &&
          this.$data.little == "0"
        ) {
          this.$data.validation.little = true;
        } else {
          this.$data.validation.little = false;
        }
        if (
          this.$refs.gasAccordion.$el.value === "second" &&
          this.$data.big == "0"
        ) {
          this.$data.validation.big = true;
        } else {
          this.$data.validation.big = false;
        }
        if (
          this.$refs.gasAccordion.$el.value === "second" &&
          this.$data.file == ""
        ) {
          this.$data.validation.file = true;
        } else {
          this.$data.validation.big = false;
        }
      };

      check();
      let check2 =
        this.$refs.gasAccordion.$el.value === "first" &&
        this.$data.validation.little === false
          ? null
          : false;
      let check3 =
        this.$refs.gasAccordion.$el.value === "second" &&
        this.$data.validation.file === false &&
        this.$data.validation.big === false
          ? null
          : false;
      console.log(check2, check3, this.$data.validation);
      if (check2 == null || check3 == null) {
        let userObject = {
          ...this.formFields,
          FORM_TEMPLATE_MAX: {
            NAME: "Планируемая величина максимального  часового расхода газа: ",
            VALUE: this.$data.big,
          },
          FORM_TEMPLATE_POINT: {
            NAME: "По различным точкам подключения: ",
            VALUE: this.$data.points,
          },
          FORM_TEMPLATE_MCHRG: {
            NAME: "Необходимо приложить расчет максимального часового расхода газа со специализированной проектной организации, имеющей свидетельство СРО",
            VALUE: this.$data.file,
          },
        };
        let userObject2 = {
          ...this.formFields,
          FORM_TEMPLATE_MAX: {
            NAME: "Планируемая величина максимального  часового расхода газа: ",
            VALUE: this.$data.little,
          },
          FORM_TEMPLATE_POINT: {
            NAME: "По различным точкам подключения: ",
            VALUE: this.$data.points,
          },
        };

        if (this.$pinia.state.value?.services?.form) {
          this.$pinia.state.value.services.form =
            this.$refs.gasAccordion.$el.value === "first"
              ? userObject2
              : userObject;
        }
        this.$router.push("/tabs/servicesTechAllianceFiles");
        await store.set(
          "servicesTechAlliance",
          JSON.stringify(
            this.$refs.gasAccordion.$el.value === "first"
              ? userObject2
              : userObject
          )
        );
      }
    },
  },
  mounted() {
    /* const fetchStoreHandler = async () => {
      const store = new Storage();
      await store.create();
      // const servicesTechAlliance = await store.get("servicesTechAlliance");

    };
    // console.log(this.form, "choosetest");
    fetchStoreHandler(); */
  },
  setup() {
    const router = useRouter();
    return { router, caretDownSharp, trashOutline };
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
</style>
