<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/personalAccounts')" />
    <Layout
      v-if="paySent === false"
      :method="paymentHandler"
      height="false"
      outlineBtn="."
      filledBtn="Оплатить"
      title="Оплатить"
    >
      <template v-slot:main-content>
        <ion-text
          ><p class="ion-text-start">
            Введите адрес электронной почты (email) или номер телефона
          </p></ion-text
        >
        <Input
          v-if="email"
          name="Введите email"
          :value="email"
          :changeHandler="changeEmail"
        />
        <ion-text v-else><p>Электронная почта</p></ion-text>
        <Input
          name="Введите номер телефона"
          :value="phone"
          :changeHandler="changePhone"
        />
        <ion-text>
          На электронную почту или на мобильный телефон будет направлен кассовый
          чек
        </ion-text>
      </template>
    </Layout>
    <ion-content v-else class="background">
      <div class="container">
        <ion-text
          ><p class="title">Выберите удобный вам способ оплаты</p></ion-text
        >
        <layout-box :onClick="sberPayHanler">
          <template v-slot:content >
            <ion-img :src="require('@/assets/img/Sberpay.png')" />
          </template>
        </layout-box>

        <layout-box>
          <template v-slot:content>
            <ion-img :src="require('@/assets/img/Yandexpay.png')" />
          </template>
        </layout-box>

        <layout-box>
          <template v-slot:content>
            <ion-img :src="require('@/assets/img/Yoomoney.png')" />
          </template>
        </layout-box>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Input from "../components/Input.vue";
import { IonPage, IonText, IonImg, IonContent } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import { Storage } from "@ionic/storage";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";

export default defineComponent({
  name: "personalAccauntPayPage",
  components: {
    Back,
    IonPage,
    Layout,
    IonText,
    Input,
    LayoutBox,
    IonContent,
    IonImg,
  },
  data() {
    return {
      phone: "",
      email: "",
      paySent: false,
    };
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["sberPay"]),
    changePhone(e) {
      this.$data.phone = e.target.value;
    },
    changeEmail(e) {
      this.$data.email = e.target.value;
    },
    paymentHandler() {
      this.sberPay(
        this.$route.params.code,
        this.$data.phone,
        this.$data.email,
        JSON.parse(this.$route.params.sberPay).accruals,
        JSON.parse(this.$route.params.sberPay).sumTO,
        JSON.parse(this.$route.params.sberPay).penalties
      );
      this.$data.paySent = true;
    },
    sberPayHanler() {
      /* this.sberPay(
        this.$route.params.code,
        this.$data.phone,
        this.$data.email,
        JSON.parse(this.$route.params.sberPay).accruals,
        JSON.parse(this.$route.params.sberPay).sumTO,
        JSON.parse(this.$route.params.sberPay).penalties
      ); */
        window.open(this.$pinia.state.value?.personalAccount?.sberPayResponse?.link, '_system')
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
    };
  },
  mounted() {
    const store = new Storage();
    console.log(this.$route.params, "params pay");
    const storageHandler = async () => {
      await store.create();
      const data = await store.get("token");
      const parsedData = JSON.parse(data);
      this.$data.phone = parsedData.phone;
      this.$data.email = parsedData.email;
    };
    storageHandler();
  },
});
</script>

<style scoped>
.text {
  margin-bottom: 30px;
  margin-top: 10px;
}
ion-img {
  width: 113.6px;
  height: 40px;
  margin: auto;
}
.container {
  padding-top: 20px;
}
.title {
  padding: 20px;
}
</style>