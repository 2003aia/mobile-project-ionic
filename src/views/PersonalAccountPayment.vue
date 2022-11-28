<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/personalAccounts')" />
    <ion-content :fullscreen="true" class="background">
      <div class="header-wrapper">
        <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img>
        <div class="btn-wrapper">
          <Button class="btn" :lightBlue="true" name="Оплата" />
          <Button class="btn" v-show="lcList?.counters.length > 0" :grey="true" name="Показания" @click="
            () =>
              router.push({
                name: 'personalAccountIndication',
              })
          " />
        </div>
      </div>
      <div class="container">

        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">
                Лицевой счет №{{ lcList?.code }}
              </p>
            </ion-text>
            <ion-item>
              <ion-text>{{ lcList?.name }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>{{ lcList?.address }}</ion-text>
            </ion-item>
          </template>
        </layout-box>

        <div v-for="(el, index) in lcList?.debts" :key="index">
          <layout-box>
            <template v-slot:content>
              <ion-text>
                <p class="title ion-text-start">
                  {{ el.label }}
                </p>
              </ion-text>
              <ion-item>
                <ion-text>Задолженность:</ion-text>
                <ion-text slot="end" class="text-end">{{ maskMoney(el.sum) }}</ion-text>
              </ion-item>


              <ion-text>
                <p class="title ion-text-start">Оплата</p>
              </ion-text>
              <Input :value="el?.value" :type="'number'" @input="(e) => el.value = e.target.value" name="Введите сумму"
                :textBlue="true" :min="0" />
            </template>
          </layout-box>
        </div>


        <ion-text v-show="error">
          <p class="ion-text-start error">{{ error }}</p>
        </ion-text>
        <Button name="Оплатить" @click="paymentHandler" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonText, IonItem, IonImg, } from "@ionic/vue";
import Button from "../components/Button.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Input from "../components/Input.vue";
import { useRouter, useRoute } from "vue-router";
import Back from "../components/Back.vue";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  },
  props: {
    tabs: Boolean,
  },
  data() {
    return {
      accruals: "",
      penalties: "",
      sumTO: "",
      error: "",
      advances: "",
      others: '',
    };
  },
  computed: {
    lcList() {
      return this.$pinia.state.value?.personalAccount?.personalItemData;
    },
  },
  ionViewDidLeave() {
    this.$data.error = ''
  },
  methods: {
    changeAccruals(e) {
      this.$data.accruals = e.target.value;
    },
    changePenalties(e) {
      this.$data.penalties = e.target.value;
    },
    changeSumTO(e) {
      this.$data.sumTO = e.target.value;
    },
    changeAdvances(e) {
      this.$data.advances = e.target.value;
    },
    paymentHandler() {
      if (
        this.lcList?.debts?.filter((el) => el.value).length !== 0
      ) {
        let res = this.lcList.debts.map(({ label, value }) => {

          if (value === undefined) {
            return { label, sum: 0 }
          } else {
            return { label, sum: +value }
          }
        });
        this.$pinia.state.value.personalAccount.personalItemData = {
          ...this.$pinia.state.value?.personalAccount?.personalItemData,
          sberPay: {
            accruals: res,
          }
        }
        this.$router.push({
          name: "personalAccountPay",
          
        });
      } else {
        this.$data.error = "Заполните поля";
      }
    },
    maskMoney(value) {
      const valueAsNumber = value?.toString().replace('.', '')
      const valueAsNumber2 = parseFloat(value?.toFixed(2).toString().replace('.', ''))
      if (value?.toString().split('.')[1]?.length < 2) {
        return new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(valueAsNumber2 / 100);
      } else {
        if (value?.toString().includes('.')) {
          return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(valueAsNumber / 100);
        }
        if (!value?.toString().includes('.')) {
          return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(valueAsNumber);
        }
      }
    },
  },
  names: "personalAccauntPayment",
  components: {
    Input,
    LayoutBox,
    IonContent,
    Back,
    IonPage,
    Button,
    IonText,
    IonItem,
    IonImg,
  },
});
</script>

<style scoped>
.background {
  position: relative;
}

.container {
  padding: 0 15px 15px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff00;
  top: -70px;
}

.btn-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #268FCC;

  border-radius: 25px;
  padding-right: 2px;
  padding-left: 2px;
  position: sticky;
  top: 5px;
  z-index: 1000;
  margin-bottom: 20px;

  flex-wrap: wrap;
}

.btn {
  flex-grow: 1;
}

.text-end {
  color: #dd2c00;
  font-weight: 700;
  margin-left: 0;
}

.green {
  color: green;
}

.header-wrapper {
  position: relative;
  padding: 15px;
  height: 160px;
  background: linear-gradient(156.39deg, #1B80B9 7.75%, #0E3977 100.99%);
}

.pattern {
  position: absolute;
  height: fit-content;
  width: 350px;
  bottom: 0;
  padding: 0 15px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.title {
  margin-top: 20px;
}
</style>
