<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      btnSrc="/tabs/servicesTechAllianceFiles"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Онлайн-заявка на технологическое подключение"
    >
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
        <ion-accordion-group>
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
              <Input name="0" />
              <ion-text>
                <p class="sub-title">По различным точкам подключения:</p>
              </ion-text>
              <Input :name="'Введите данные '" />
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
              <InputFile name="0" />
              <ion-text>
                <p class="sub-title">
                  Планируемая величина максимального часового расхода газа
                  <ion-text class="dot">*</ion-text>
                </p>
              </ion-text>
              <Input :name="'0'" />
              <ion-text>
                <p class="sub-title">По различным точкам подключения:</p>
              </ion-text>
              <Input :name="'Введите данные '" />
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
import { IonPage, IonText, IonAccordion, IonAccordionGroup } from "@ionic/vue";
import Input from "../components/Input.vue";
import Back from "../components/Back.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
import { caretDownSharp } from "ionicons/icons";
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
  },
  computed: {
    form() {
      return this.$pinia.state.value?.services?.form
    },
  },
  mounted() {
    const fetchStoreHandler = async () => {
      const store = new Storage();
      await store.create();
      // const servicesTechAlliance = await store.get("servicesTechAlliance");
      /* console.log(JSON.parse(servicesTechAlliance), "servicesTechAlliance"); */
    };
    console.log(this.form, 'choosetest')
    fetchStoreHandler();
  },
  setup() {
    const router = useRouter();
    return { router, caretDownSharp };
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