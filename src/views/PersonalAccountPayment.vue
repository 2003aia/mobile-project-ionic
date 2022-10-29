<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/personalAccounts')" />
    <ion-content :fullscreen="true" class="background">
      <div class="header-wrapper">
        <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img>
        <div class="btn-wrapper">
          <Button class="btn" :lightBlue="true" name="Оплата" />
          <Button class="btn" :grey="true" name="Показания" @click="
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
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">
                Газ (начисление по счету)
              </p>
            </ion-text>
            <ion-item>
              <ion-text>Задолженность:</ion-text>
              <ion-text slot="end" class="text-end">{{ maskMoney(lcList?.debts?.accruals?.toFixed(2)) }}</ion-text>
            </ion-item>


            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input :value="accruals" :type="'number'" :changeHandler="changeAccruals" name="Введите сумму за сет. газ"
              :textBlue="true" :min="0" />
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Техобслуживание</p>
            </ion-text>
            <ion-item>
              <ion-text> Задолженность: </ion-text>
              <ion-text slot="end" class="text-end">{{ maskMoney(lcList.debts?.sumTO) }}
              </ion-text>
            </ion-item>

            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input :value="sumTO" :changeHandler="changeSumTO" name="Введите сумму за техобслуж." :textBlue="true"
              :type="'number'" :min="0" />
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Пени</p>
            </ion-text>
            <ion-item>
              <ion-text> Задолженность: </ion-text>
              <ion-text slot="end" class="text-end">{{ maskMoney(lcList.debts?.penalties) }}
              </ion-text>
            </ion-item>

            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input name="Введите сумму" :value="penalties" :changeHandler="changePenalties" :textBlue="true"
              :type="'number'" :min="0" />
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Аванс</p>
            </ion-text>
            <ion-item>
              <ion-text> Задолженность: </ion-text>
              <ion-text slot="end" class="text-end green">{{ maskMoney(lcList.debts?.advances
                )
              }}</ion-text>
            </ion-item>

          </template>
        </layout-box>


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
    };
  },
  computed: {
    lcList() {
      return this.$pinia.state.value?.personalAccount?.personalItemData;
    },
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
        this.$data.accruals !== "" ||
        this.$data.penalties !== "" ||
        this.$data.sumTO
      ) {
        this.$pinia.state.value.personalAccount.personalItemData = {
          ...this.$pinia.state.value?.personalAccount?.personalItemData,
          sberPay: {
            accruals: this.$data.accruals,
            penalties: this.$data.penalties,
            sumTO: this.$data.sumTO,
            advances: this.lcList.debts?.advances,
          }
        }
        this.$router.push({
          name: "personalAccountPay",
          /* params: {
            ...this.lcList,
            sberPay: JSON.stringify({
              accruals: this.$data.accruals,
              penalties: this.$data.penalties,
              sumTO: this.$data.sumTO,
              advances: this.$data.advances,
            }),
          }, */
        });
      } else {
        this.$data.error = "Заполните поля";
      }
    },
    maskMoney(value) {
      const valueAsNumber = value.toString().replace('.', '');
      if (value?.toString().includes('.')) {
        return new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(valueAsNumber / 100);
      } else {
        return new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(valueAsNumber);
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
