<template>
  <ion-page>
    <Back />
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
                })
            "
          />
        </div>
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
                Сетевой газ (начисление по счету)
              </p>
            </ion-text>
            <ion-item>
              <ion-text>Задолженность:</ion-text>
              <ion-text slot="end" class="text-end"
                >{{ lcList?.debts?.accruals }} руб.</ion-text
              >
            </ion-item>
            <!--   <ion-item>
              <ion-text> Аванс:</ion-text>

              <ion-text slot="end" class="text-end">
                {{ lcList?.debts?.advances }} руб.
              </ion-text>
            </ion-item> -->

            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input
              :value="accruals"
              :type="'number'"
              :changeHandler="changeAccruals"
              name="Введите сумму за сет. газ"
              :textBlue="true"
              :min="0"
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
                >{{ lcList.debts?.sumTO }} руб.</ion-text
              >
            </ion-item>
            <!-- <ion-item>
              <ion-text> Аванс: </ion-text>
              <ion-text slot="end" class="text-end"
                >{{ lcList.debts?.advances }} руб.</ion-text
              >
            </ion-item> -->
            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input
              :value="sumTO"
              :changeHandler="changeSumTO"
              name="Введите сумму за техобслуж."
              :textBlue="true"
              :type="'number'"
              :min="0"
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
                >{{ lcList.debts?.penalties }} руб.</ion-text
              >
            </ion-item>
            <!--  <ion-item>
              <ion-text> Аванс: </ion-text>
              <ion-text slot="end" class="text-end"
                >{{ lcList.debts?.advances }} руб.</ion-text
              >
            </ion-item> -->
            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input
              name="Введите сумму"
              :value="penalties"
              :changeHandler="changePenalties"
              :textBlue="true"
              :type="'number'"
              :min="0"
            />
          </template>
        </layout-box>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Аванс</p>
            </ion-text>
            <ion-item>
              <ion-text> Задолженность: </ion-text>
              <ion-text slot="end" class="text-end"
                >{{ lcList.debts?.advances }} руб.</ion-text
              >
            </ion-item>
            <ion-text>
              <p class="title ion-text-start">Оплата</p>
            </ion-text>
            <Input
              name="Введите сумму"
              :value="advances"
              :changeHandler="changeAdvances"
              :textBlue="true"
              :min="0"
              :type="'number'"
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

        <ion-text v-show="error"
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
        this.$router.push({
          name: "personalAccountPay",
          params: {
            ...this.lcList,
            sberPay: JSON.stringify({
              accruals: this.$data.accruals,
              penalties: this.$data.penalties,
              sumTO: this.$data.sumTO,
              advances: this.$data.advances,
            }),
          },
        });
      } else {
        this.$data.error = "Заполните поля";
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
