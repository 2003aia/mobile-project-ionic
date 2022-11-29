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
        <Input v-if="email" name="Введите email" :value="email" :changeHandler="changeEmail" />
        <ion-text v-else>
          <p>Электронная почта</p>
        </ion-text>
        <Input name="Введите номер телефона" :value="phone" :changeHandler="changePhone" />
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
        <layout-box :onClick="sberPayHanler">
          <template v-slot:content>
            <!-- <ion-img :src="require('@/assets/img/Sberpay.png')" /> -->
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
import { IonPage, IonText, IonContent, IonImg, } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import { Storage } from "@ionic/storage";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";

const v = document.getElementById("iframe")
console.log(v, 'test')
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
      link: false,
      linkSrc: ''
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
    paymentHandler() {
      this.sberPay(
        this.$pinia.state.value.personalAccount.personalItemData.code,
        this.$data.phone,
        this.$data.email,
        +this.$pinia.state.value.personalAccount.personalItemData.sberPay
          .accruals,
        // +this.$pinia.state.value.personalAccount.personalItemData.sberPay.others,
      ).then(() => {
        this.$data.linkSrc = this.$pinia.state.value?.personalAccount?.sberPayResponse?.link
      })
      this.$data.paySent = true;
    },
    sberPayHanler() {
      this.$data.link = true
      /* window.open(
        this.$pinia.state.value?.personalAccount?.sberPayResponse?.link,
        "_system"
      ); */
    },
  },
  setup() {
    const v = document.getElementById("iframe")
    console.log(v, 'test')
    if (v !== undefined && v?.includes('aostng.ru')) {
      router.push('/tabs/personalAccounts')
    }
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
