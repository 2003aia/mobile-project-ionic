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
          <Input name="Введите email" :value="email" :changeHandler="changeEmail" />
          <!-- <ion-text v-show="!email">
            <p class="ion-text-center" style="">Электронная почта</p>
          </ion-text> -->
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
        <layout-box :onClick="sbolHandler">
          <template v-slot:content>
            <ion-text>
              <p v-show="!sbolLoading" class="ion-text-center title">Оплатить платежной картой</p>
              <ion-spinner v-show="sbolLoading" name="bubbles" />
            </ion-text>
          </template>
        </layout-box>
        <layout-box :onClick="sberPayHandler">
          <template v-slot:content>
            <ion-img v-show="!sberPayLoading" :src="require('@/assets/img/Sberpay.png')" />
            <ion-spinner v-show="sberPayLoading" name="bubbles" />

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
      <iframe ref="iframeRef" :onload="onloadHandler" id="iframe" class="video" height="100%" width="100%" :src="linkSrc"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Input from "../components/Input.vue";
import { IonPage, IonText, IonContent, IonImg, IonItem, isPlatform, IonSpinner, } from "@ionic/vue";
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
    IonSpinner,
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
      formTypeVal: ['number'],
      sberPayLoading: false,
      sbolLoading: false,
    };
  },
  ionViewDidLeave() {
    this.$data.link = false
    this.$data.paySent = false
  },
  watch: {
    linkSrc(newv, old) {
      console.log(newv, 'testwatch', old)

      if (newv == 'https://aostng.ru/tabs/personalAccounts') {
        this.router.push('/tabs/personalAccounts')
      }
    }
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["sberPay", "getAccount", "returnPay"]),
    changePhone(e) {
      this.$data.phone = e.target.value;
    },
    changeEmail(e) {
      this.$data.email = e.target.value;
    },
    onloadHandler() {
      if (this.linkSrc !== undefined) {
        let arr = this.linkSrc.split("=")
        this.returnPay(arr[1]).then(() => {
          /*  if (this.$pinia.state.value?.personalAccount?.payed) {
             this.$router.push('/tabs/personalAccounts')
           } */
        })
        /*  this.$router.push('/tabs/personalAccounts')
         this.getAccount().then(()=>{
           console.log('getAccount')
         }) */
      }
    },
    async uniqueCheck(e) {
      this.$data.formTypeVal = [];
      if (e.currentTarget.checked === false) {
        this.$data.formTypeVal.push(e.currentTarget.value);
      }

    },
    paymentHandler() {

      this.$data.paySent = true;
    },
    sbolHandler() {
      this.$data.sbolLoading = true
      this.sberPay(
        this.$pinia.state.value.personalAccount.personalItemData.code,
        this.$data.phone,
        this.$data.email,
        this.$data.formTypeVal[0] === 'email' ? true : false,
        +this.$pinia.state.value.personalAccount.personalItemData.sberPay
          .accruals,
        isPlatform('ios') ? true : false,
        'SberPAY'
      ).then(() => {
        this.$data.sbolLoading = false
        this.$data.link = true
        this.$data.linkSrc = this.$pinia.state.value?.personalAccount?.sberPayResponse?.data?.formUrl

      })
      /* window.open(
        this.$pinia.state.value?.personalAccount?.sberPayResponse?.data?.externalParams?.sbolDeepLink,
        "_system"
      ); */

    },
    sberPayHandler() {
      console.log('handler 2')
      this.$data.sberPayLoading = true

      this.sberPay(
        this.$pinia.state.value.personalAccount.personalItemData.code,
        this.$data.phone,
        this.$data.email,
        this.$data.formTypeVal[0] === 'email' ? true : false,
        +this.$pinia.state.value.personalAccount.personalItemData.sberPay
          .accruals,
        isPlatform('ios') ? true : false,
        'SBOL'
      ).then(() => {
        this.$data.sberPayLoading = false


        window.open(
          this.$pinia.state.value?.personalAccount?.sberPayResponse?.data?.externalParams?.sbolDeepLink,
          "_system"
        );
        this.$router.push('/tabs/personalAccounts')
        
      })
      
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
