<template>
  <ion-page>
    <!-- btnSrc="/tabs/servicesGasContractCheckbox" -->

    <Back
      :btnSrc="
        () => {
          router.push('/tabs/services');
          response = '';
        }
      "
    />
    <Layout
      :loading="loading"
      :method="callInspectorHandler"
      height="false"
      :filledBtn="licsList.length === 0 ? '.' : 'Отправить'"
      outlineBtn="."
      title="Вызов инспектора"
    >
      <template v-slot:main-content>
        <div v-if="licsList.length === 0">
          <ion-item router-link="/personalAccountNew">
            <ion-Icon
              class="icon-start"
              size="large"
              slot="start"
              :icon="pencilOutline"
            ></ion-Icon>
            <ion-text class="sub-title">Добавить лицевой счет</ion-text>
            <ion-icon
              class="icon-end"
              size="large"
              slot="end"
              :icon="chevronForwardOutline"
            ></ion-icon>
          </ion-item>
          <ion-item router-link="/personalAccountInfoSearch">
            <ion-Icon
              class="icon-start"
              size="large"
              slot="start"
              :icon="documentTextOutline"
            ></ion-Icon>
            <ion-text class="sub-title">Узнать лицевой счет</ion-text>
            <ion-icon
              size="large"
              class="icon-end"
              slot="end"
              :icon="chevronForwardOutline"
            ></ion-icon>
          </ion-item>
        </div>

        <!-- <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Общие сведения заявления</p>
        </ion-text>
      </template> -->
        <div v-else>
          <ion-text>
            <p class="title ion-text-start">Данные заявителя</p>
            <p>
              <ion-text class="dot">*</ion-text> - обязательное поле для
              заполнения.
            </p>
          </ion-text>

          <ion-accordion-group ref="accordionCallInspector">
            <ion-accordion value="first" :toggle-icon="caretDownSharp">
              <div slot="header">
                <Input
                  :value="lc"
                  :changeHandler="changeLc"
                  name="Укажите лицевой счет "
                  :required="true"
                />
              </div>
              <div slot="content">
                <!-- <ion-row>
                  <ion-col size="3"> Лицевой счет </ion-col>
                  <ion-col> Наименование лицевого счета </ion-col>
                </ion-row> -->
                <div v-for="el in licsList" :key="el">
                  <!-- <ion-row
                    @click="licsHandler(el)"
                    :class="{
                      'ion-row-last':
                        licsList[licsList?.length - 1]?.code === el?.code,
                    }"
                  >
                    <ion-col size="3" class="sub-title">
                      {{ el?.code }}
                    </ion-col>
                    <ion-col class="sub-title">
                      {{ el?.name }}
                    </ion-col>
                  </ion-row> -->
                  <ion-item
                    @click="licsHandler(el)"
                    :lines="
                      licsList[licsList.length - 1]?.code === el?.code
                        ? 'none'
                        : ''
                    "
                  >
                   
                     <ion-text>
                      <p class="ion-text-start">Лицевой счет: {{ el?.code }}</p>
                      <p class="ion-text-start">
                        Наименование лицевого счета: {{ el?.name }}
                      </p>
                    </ion-text>
                  </ion-item>
                </div>
              </div>
            </ion-accordion>
          </ion-accordion-group>

          <Input
            name="Укажите номер телефона "
            :value="phone"
            mask="+7 (###) ###-##-##"
            :changeHandler="changePhone"
          />
          <ion-text v-if="error">
            <p class="ion-text-start error">
              {{ error }}
            </p>
          </ion-text>
          <ion-text v-if="response">
            <p class="ion-text-start blue">
              {{ response }}
            </p>
          </ion-text>
        </div>
      </template>
      <ion-item>d</ion-item>
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
  IonIcon,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import Back from "../components/Back.vue";
import { mapActions } from "pinia";
import { useServicesStore } from "../stores/services";
import { usePersonalAccountStore } from "../stores/personalAccount";
import {
  caretDownSharp,
  pencilOutline,
  chevronForwardOutline,
  documentTextOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "servicesCallInspector",
  components: {
    IonPage,
    Layout,
    IonText,
    IonIcon,
    Input,
    Back,
    IonAccordion,
    IonItem,
    IonAccordionGroup,
  },
  mounted() {
    this.getAccount();
  },
  data() {
    return {
      phone: "",
      lc: "",
      error: "",
      response: "",
      loading: false,
    };
  },
  computed: {
    licsList() {
      return this.$pinia.state.value?.personalAccount?.getAccountResponse?.data
        ? this.$pinia.state.value?.personalAccount?.getAccountResponse?.data
        : [];
    },
  },
  methods: {
    ...mapActions(useServicesStore, ["callInspector"]),
    ...mapActions(usePersonalAccountStore, ["getAccount"]),

    callInspectorHandler() {
      if (this.$data.lc !== "") {
        this.$data.loading = true;
        this.$data.error = "";
        const callInspector = new Promise((resolve) => {
          resolve(this.callInspector(this.$data.lc, this.$data.phone));
        });
        callInspector.then(() => {
          this.$data.response =
            this.$pinia.state.value?.services?.callInspectorResponse?.message;
          this.$data.loading = false;
        });
      } else {
        this.$data.error = "Заполните поле лицевой счет";
      }
    },
    changePhone(e) {
      this.$data.phone = e.target.value;
    },
    changeLc(e) {
      this.$data.lc = e.target.value;
    },
    licsHandler(el) {
      this.$refs.accordionCallInspector.$el.value = undefined;
      this.$data.lc = el?.code;
    },
  },
  setup() {
    const router = useRouter();

    return {
      router,
      caretDownSharp,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
    };
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-start: 15px;
}
ion-row {
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: solid 1px #e0e0e0;
}
.ion-row-last {
  border-bottom: none;
}
ion-col {
  word-break: break-all;
}

ion-icon {
  width: 32px;
  height: 32px;
  color: #0378b4;
  --ionicon-stroke-width: 35px;
}

.icon-end {
  width: 24px;
  height: 24px;
  margin-left: 0px;
}

ion-icon {
  width: 20px;
  height: 20px;
  color: #0378b4;
  margin-left: 0;
}
.icon-start {
  width: 32px;
  height: 32px;
  margin-right: 20px;
}

</style>
