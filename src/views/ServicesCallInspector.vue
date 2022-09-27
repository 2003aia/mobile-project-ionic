<template>
  <ion-page>
    <!-- btnSrc="/tabs/servicesGasContractCheckbox" -->

    <Back :btnSrc="() => router.push('/tabs/services')" />
    <Layout
      :loading="loading"
      :method="callInspectorHandler"
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Вызов инспектора"
    >
      <!-- <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Общие сведения заявления</p>
        </ion-text>
      </template> -->
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Данные заявителя</p>
          <p>
            <ion-text class="dot">*</ion-text> - обязательное поле для
            заполнения.
          </p>
        </ion-text>

        <Input
          :value="lc"
          :changeHandler="changeLc"
          name="Укажите лицевой счет "
          :required="true"
        />
        <Input
          name="Укажите номер телефона "
          :value="phone"
          :changeHandler="changePhone"
        />
        <ion-text v-if="error">
          <p class="ion-text-start error">
            {{ error }}
          </p>
        </ion-text>
        <ion-text v-if="response">
          <p class="ion-text-start">
            {{ response }}
          </p>
        </ion-text>
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
import Back from "../components/Back.vue";
import { mapActions } from "pinia";
import { useServicesStore } from "../stores/services";
export default defineComponent({
  name: "servicesCallInspector",
  components: {
    IonPage,
    Layout,
    IonText,
    Input,
    Back,
  },
  data() {
    return {
      phone: "",
      lc: "",
      error: "",
      loading: false,
    };
  },
  computed: {
    response() {
      return this.$pinia.state.value?.services?.callInspectorResponse?.message;
    },
  },
  methods: {
    ...mapActions(useServicesStore, ["callInspector"]),
    callInspectorHandler() {
      if (this.$data.lc !== "") {
        this.$data.loading = true;
        this.$data.error = "";
        const callInspector = new Promise((resolve) => {
          resolve(this.callInspector(this.$data.lc, this.$data.phone));
        });
        callInspector.then(()=>{
          this.$data.loading = false
        })
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
</style>