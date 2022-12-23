<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/personalAccounts')" />
    <Layout v-if="paySent === false" :method="paymentHandler" height="false" outlineBtn="." filledBtn="Оплатить"
      title="Оплатить">
      <template v-slot:main-content>
        <ion-text>
          <p class="ion-text-start">
            Введите адрес электронной почты (email) или номер телефона
          </p>
        </ion-text>
        <ion-item class="check" lines="none">
          <input @click="
            (e) => {
              uniqueCheck(e,);
            }
          " value="email" v-model="formTypeVal" @change="uniqueCheck" class="check2" type="checkbox" slot="start" />
          <Input v-if="email" name="Введите email" :value="email" :changeHandler="changeEmail" />
          <ion-text v-else>
            <p>Электронная почта</p>
          </ion-text>
        </ion-item>

        <ion-text>
          <p class="ion-text-center or">или</p>
        </ion-text>
        <ion-item class="check" lines="none">
          <input @click="
            (e) => {
              uniqueCheck(e);
            }
          " value="number" v-model="formTypeVal" @change="uniqueCheck" class="check2" type="checkbox" slot="start" />
          <Input name="Введите номер телефона" :value="phone" :changeHandler="changePhone" />

        </ion-item>
        <ion-text>
          На электронную почту или на мобильный телефон будет направлен кассовый
          чек
        </ion-text>
      </template>
    </Layout>
    <ion-content v-if="paySent && !link" class="background">
      <div class="container">
        <ion-text>
          <p class="title">Выберите удобный вам способ оплаты</p>
        </ion-text>
        <layout-box :onClick="sberPayHanler2">
          <template v-slot:content>
            <ion-text>
              <p class="ion-text-center title">Оплатить платежной картой</p>
            </ion-text>
          </template>
        </layout-box>
        <layout-box :onClick="sberPayHanler">
          <template v-slot:content>
            <ion-img :src="require('@/assets/img/Sberpay.png')" />
          </template>
        </layout-box>
        <!-- <layout-box>
          <template v-slot:content>
            <ion-img :src="require('@/assets/img/Yandexpay.png')" />
          </template>
        </layout-box>

        <layout-box>
          <template v-slot:content>
            <ion-img :src="require('@/assets/img/Yoomoney.png')" />
          </template>
        </layout-box> -->
      </div>
    </ion-content>

    <ion-content v-if="link" class="background">
      <iframe id="iframe" class="video" height="100%" width="100%" :src="linkSrc" frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Input from "../components/Input.vue";
import { IonPage, IonText, IonContent, IonImg, IonItem } from "@ionic/vue";
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
    IonItem,
    IonImg,
  },
  data() {
    return {
      phone: "",
      email: "",
      paySent: false,
      link: false,
      linkSrc: '',
      consentEMAIL: false,
      formTypeVal: []
    };
  },
  ionViewDidLeave() {
    this.$data.link = false
    this.$data.paySent = false
  },
  watch: {
    linkSrc(newv, old) {
      console.log(newv, 'testwatch', old)

      if (newv?.includes('https://aostng.ru')) {
        this.router.push('/tabs/personalAccounts')
      }
    }
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["sberPay"]),
    changePhone(e) {
      this.$data.phone = e.target.value;
    },
    changeEmail(e) {
      this.$data.email = e.target.value;
    },
    async uniqueCheck(e) {
      this.$data.formTypeVal = [];
      if (e.currentTarget.checked === false) {
        this.$data.formTypeVal.push(e.currentTarget.value);
        console.log(this.$data.formTypeVal)
      }
    },
    paymentHandler() {
      this.sberPay(
        this.$pinia.state.value.personalAccount.personalItemData.code,
        this.$data.phone,
        this.$data.formTypeVal[0] === 'email' ? true : false,
        +this.$pinia.state.value.personalAccount.personalItemData.sberPay
          .accruals,
      ).then(() => {
        this.$data.linkSrc = this.$pinia.state.value?.personalAccount?.sberPayResponse?.data?.formUrl
      })
      this.$data.paySent = true;
    },
    sberPayHanler() {
      window.open(
        this.$pinia.state.value?.personalAccount?.sberPayResponse?.data?.externalParams?.sbolDeepLink,
        "_system"
      );

    },
    sberPayHanler2() {

      this.$data.link = true

      /* window.open(
        this.$pinia.state.value?.personalAccount?.sberPayResponse?.link,
        "_system"
      ); */
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

ion-item {
  --padding-start: 0;
  --padding-bottom: 0px;
  --inner-padding-bottom: 0px;
  --inner-padding-start: 0;
  --inner-padding-end: 0;
}

.container {
  padding-top: 20px;
}

.title {
  padding: 20px;
}

.or {
  margin: 0;
  margin-bottom: 10px;

}
</style>
