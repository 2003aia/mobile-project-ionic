<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/personalAccounts')" v-if="!tabs" />
    <ion-content :fullscreen="true" class="background">
      <div class="container">
        <div class="btn-wrapper">
          <Button class="btn" name="Оплата" />
          <Button
            class="btn"
            :grey="true"
            name="Показания"
            @click="
              () =>
                router.push({
                  name: 'personalAccountIndication',
                  params: route.params,
                })
            "
          />
        </div>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">
                Лицевой счет №{{ route.params?.code }}
              </p>
            </ion-text>
            <ion-item>
              <ion-text>{{ route.params?.name }} руб.</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>{{ route.params?.address }} руб.</ion-text>
            </ion-item>
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">
                Сетевой газ (начисление по счету)
              </p>
            </ion-text>
            <ion-item>
              <ion-text>Задолженность:</ion-text>
              <ion-text slot="end" class="text-end"
                >{{ JSON.parse(route.params?.debts)?.accruals }} руб.</ion-text
              >
            </ion-item>
            <ion-item>
              <ion-text> Аванс:</ion-text>

              <ion-text slot="end" class="text-end"> 0 руб. </ion-text>
            </ion-item>

            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input
              :value="accruals"
              :changeHandler="changeAccruals"
              name="Введите сумму за сет. газ"
              :textBlue="true"
            />
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Техобслуживание</p>
            </ion-text>
            <ion-item>
              <ion-text> Задолженность: </ion-text>
              <ion-text slot="end" class="text-end"
                >{{ JSON.parse(route.params?.debts)?.sumTO }} руб.</ion-text
              >
            </ion-item>
            <ion-item>
              <ion-text> Аванс: </ion-text>
              <ion-text slot="end" class="text-end">0 руб.</ion-text>
            </ion-item>
            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input
              :value="sumTO"
              :changeHandler="changeSumTO"
              name="Введите сумму за техобслуж."
              :textBlue="true"
            />
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Пени</p>
            </ion-text>
            <ion-item>
              <ion-text> Задолженность: </ion-text>
              <ion-text slot="end" class="text-end"
                >{{ JSON.parse(route.params?.debts)?.penalties }} руб.</ion-text
              >
            </ion-item>
            <ion-item>
              <ion-text> Аванс: </ion-text>
              <ion-text slot="end" class="text-end">0 руб.</ion-text>
            </ion-item>
            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input
              name="Введите сумму"
              :value="penalties"
              :changeHandler="changePenalties"
              :textBlue="true"
            />
          </template>
        </layout-box>
        <!-- <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Итого к оплате</p>
            </ion-text>

            <Input :value="accruals" :changeHandler="changeAccruals" name="123456" :textBlue="true" />
          </template>
        </layout-box> -->
        <ion-text v-if="error"
          ><p class="ion-text-start error">{{ error }}</p></ion-text
        >
        <Button name="Оплатить" @click="paymentHandler" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonText, IonItem } from "@ionic/vue";
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
    };
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
    paymentHandler() {
      if (
        this.$data.accruals !== "" ||
        this.$data.penalties !== "" ||
        this.$data.sumTO
      ) {
        this.$router.push({
          name: "personalAccountPay",
          params: {
            ...this.$route.params,
            sberPay: JSON.stringify({
              accruals: this.$data.accruals,
              penalties: this.$data.penalties,
              sumTO: this.$data.sumTO,
            }),
          },
        });
      } else {
        this.$data.error = "Заполните все поля";
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
  },
});
</script>

<style scoped>
.container {
  padding: 15px;
  background: #f5f5f5;
}
.btn-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #eaeaea;
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
  color: #0378b4;
  font-weight: 700;
  margin-left: 0;
}
.title {
  margin-top: 20px;
}
</style>
