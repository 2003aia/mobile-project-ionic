<template>
  <ion-page>
    <Back :logo="true" :noBack="tabs ? true : false" />
    <Layout btnSrc="/registrPage" height="false" outlineBtn="." filledBtn="." title="Лицевой счёт">
      <template v-slot:main-content>
        <div v-show="lcList?.length === 0 && !loading">

          <ion-item router-link="/tabs/personalAccountNew">
            <ion-Icon class="icon-start" size="large" slot="start" :icon="pencilOutline"></ion-Icon>
            <ion-text class="sub-title">Добавить лицевой счет</ion-text>
            <ion-icon class="icon-end" size="large" slot="end" :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
          <ion-item router-link="/tabs/personalAccountInfoSearch">
            <ion-Icon class="icon-start" size="large" slot="start" :icon="documentTextOutline"></ion-Icon>
            <ion-text class="sub-title">Узнать лицевой счет</ion-text>
            <ion-icon size="large" class="icon-end" slot="end" :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
        </div>
        <ion-item lines="none" v-show="loading">
          <ion-spinner name="bubbles" />
        </ion-item>
        <div v-show="lcList?.length !== 0 && !loading">

          <ion-item lines="none">
            <ion-text>
              <p class="title ion-text-start">
                Лицевой счет №{{ lcList[0]?.code }}
              </p>
            </ion-text><!-- id="click-trigger" -->
            <ion-icon slot="end" @click="
              (e) => {
                lcList[0].open = true;
                lcList[0].event = e;
              }
            " :icon="ellipsisVertical" />
            <ion-popover class="history-wrapper" mode="ios" :event="lcList[0]?.event" :is-open="lcList[0]?.open"
              @didDismiss="lcList[0].open = false">
              <!--   trigger="click-trigger"
            trigger-action="click" -->
              <ion-content class="ion-padding">
                <div>
                  <ion-item @click="
                    (e) => {
                      lcList[0].open = false;
                      lcList[0].event = e;
                      personalItemDataHandler(lcList[0]);
                      router.push({
                        name: 'personalAccountPaymentHistory',
                      });
                    }
                  ">
                    <ion-text> История </ion-text>
                    <ion-img slot="end" class="history-icon" :src="require('@/assets/img/history.png')" />
                  </ion-item>
                  <ion-item @click="
                    (e) => {
                      delAccountHandler(lcList[0].code).then(() => {
                        lcList[0].open = false;
                        lcList[0].event = e;
                      });
                    }
                  ">
                    <ion-text> Удалить</ion-text>
                    <ion-icon class="history-icon" :icon="trashOutline" slot="end" v-if="loadingDel === false" />
                    <ion-spinner class="delSpinner" v-else slot="end" name="bubbles" />
                  </ion-item>
                </div>
                <!-- <div v-else>
                <ion-text> {{ delAccountMessage }} </ion-text>
              </div> -->
              </ion-content>
            </ion-popover>
          </ion-item>

          <div>
            <ion-item>
              <ion-text>{{ lcList[0]?.name }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>{{ lcList[0]?.address }}</ion-text>
            </ion-item>
            <ion-item v-show="sumValues(lcList[0]?.debts) !== 0">
              <ion-text> Задолженность: </ion-text>
              <ion-text slot="end" class="text-blue">
                {{
                    maskMoney(sumValues(lcList[0]?.debts))
                }}

              </ion-text>

            </ion-item>

            <!-- <ion-item>
              <ion-text> Пени: </ion-text>
              <ion-text class="text-blue" slot="end">{{
                  maskMoney(lcList[0]?.debts?.penalties)
              }}</ion-text>
            </ion-item> -->
            <ion-item v-show="lcList[0]?.debts?.find((el) => el?.label.includes('Аванс'))?.sum !== 0" lines="none">
              <ion-text> Аванс: </ion-text>
              <ion-text class="text-blue" slot="end">{{
                  maskMoney(lcList[0]?.debts?.find((el) => el?.label.includes('Аванс'))?.sum)
              }}
              </ion-text>
            </ion-item>
          </div>
          <Button class="btn" name="Оплата" @click="
            () => {
              personalItemDataHandler(lcList[0]);
          
              router.push({
                name: 'personalAccountPayment',
              });
            }
          " />

          <Button v-show="lcList[0]?.counters?.length !== 0" class="btn" :outline="true" name="Внести показания" @click="
            () => {
              personalItemDataHandler(lcList[0]);
              router.push({
                name: 'personalAccountIndication',
              });
            }
          " />

          <Button @click="
            () => {
              personalItemDataHandler(lcList[0]);
          
              router.push({
                name: 'personalAccountPaymentHistory',
              });
            }
          " class="btn" :outline="true" name="История платежей" />
        </div>

      </template>


      <template v-slot:content>
        <div v-show="lcList?.length > 1 && !loading">
          <div v-for="el in lcList2" :key="el">
            <LayoutBox>
              <template v-slot:content>
                <ion-item lines="none">
                  <ion-text>
                    <p class="title ion-text-start">
                      Лицевой счет №{{ el.code }}
                    </p>
                  </ion-text>
                  <ion-icon @click="
                    (e) => {
                      el.event = e;
                      el.open = true;
                    }
                  " slot="end" v-model="el.open" :icon="ellipsisVertical" /><!-- :id="el.code" -->
                  <ion-popover class="history-wrapper" mode="ios" :event="el.event" :is-open="el?.open"
                    @didDismiss="el.open = false">
                    <!--  :trigger="el?.code"
                    trigger-action="click" -->
                    <ion-content class="ion-padding">
                      <div>
                        <ion-item @click="
                          (e) => {
                            el.open = false;
                            el.event = e;
                            personalItemDataHandler(el);
                        
                            router.push({
                              name: 'personalAccountPaymentHistory',
                            });
                          }
                        ">
                          <ion-text> История </ion-text>
                          <ion-img slot="end" class="history-icon" :src="require('@/assets/img/history.png')" />
                        </ion-item>
                        <ion-item @click="
                          (e) => {
                            delAccountHandler(el.code).then(() => {
                              el.open = false;
                              el.event = e;
                            });
                          }
                        ">
                          <ion-text> Удалить</ion-text>
                          <ion-icon class="history-icon" :icon="trashOutline" slot="end" v-if="!loadingDel" />
                          <ion-spinner class="delSpinner" v-else slot="end" name="bubbles" />
                        </ion-item>
                      </div>


                    </ion-content>
                  </ion-popover>
                </ion-item>

                <div>
                  <ion-item>
                    <ion-text>{{ el.name }}</ion-text>
                  </ion-item>
                  <ion-item>
                    <ion-text>{{ el.address }}</ion-text>
                  </ion-item>
                  <ion-item v-show="sumValues(el?.debts) !== 0">
                    <ion-text> Задолженность: </ion-text>

                    <ion-text slot="end" class="text-blue">
                      {{
                          maskMoney(sumValues(el?.debts))
                      }}
                    </ion-text>

                  </ion-item>
                  <!-- <ion-item>
                    <ion-text> Пени: </ion-text>
                    <ion-text class="text-blue" slot="end">{{
                        maskMoney(el.debts?.penalties)
                    }}</ion-text>
                  </ion-item> -->
                  <ion-item v-show="el?.debts?.find((el) => el?.label.includes('Аванс'))?.sum !== 0" lines="none">
                    <ion-text> Аванс: </ion-text>
                    <ion-text class="text-blue" slot="end">{{
                        maskMoney(el?.debts?.find((el) => el?.label.includes('Аванс'))?.sum)
                    }}</ion-text>
                  </ion-item>
                </div>
                <Button class="btn" name="Оплата" @click="
                  () => {
                    personalItemDataHandler(el);
                
                    router.push({
                      name: 'personalAccountPayment',
                    });
                  }
                " />

                <Button v-show="el?.counters?.length !== 0" class="btn" :outline="true" name="Внести показания" @click="
                  () => {
                    personalItemDataHandler(el);
                
                    router.push({
                      name: 'personalAccountIndication',
                    });
                  }
                " />
                <Button class="btn" :outline="true" @click="
                  () => {
                    personalItemDataHandler(el);
                
                    router.push({
                      name: 'personalAccountPaymentHistory',
                    });
                  }
                " name="История платежей" />
              </template>
            </LayoutBox>
          </div>
        </div>

        <div class="footer" v-show="lcList?.length !== 0 && !loading">
          <LayoutBox>
            <template v-slot:content>
              <ion-item router-link="/tabs/personalAccountNew">
                <ion-Icon class="icon-start" size="large" slot="start" :icon="pencilOutline"></ion-Icon>
                <ion-text class="sub-title">Добавить лицевой счет</ion-text>
                <ion-icon class="icon-end" size="large" slot="end" :icon="chevronForwardOutline"></ion-icon>
              </ion-item>
              <ion-item router-link="/tabs/personalAccountInfoSearch">
                <ion-Icon class="icon-start" size="large" slot="start" :icon="documentTextOutline"></ion-Icon>
                <ion-text class="sub-title">Узнать лицевой счет</ion-text>
                <ion-icon size="large" class="icon-end" slot="end" :icon="chevronForwardOutline"></ion-icon>
              </ion-item>
            </template>
          </LayoutBox>
        </div>
      </template>
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
  IonItem,
  IonIcon,
  IonPopover,
  IonContent,
  IonImg,
  IonSpinner,
} from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
  ellipsisVertical,
  trashOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Button from "../components/Button.vue";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";
// import { Storage } from "@ionic/storage";

export default defineComponent({
  name: "personalAccountPage",
  components: {
    Back,
    IonPage,
    Layout,
    IonText,
    IonItem,
    IonSpinner,
    IonIcon,
    LayoutBox,
    Button,
    IonImg,
    IonPopover,
    IonContent,
  },
  props: ["tabs"],
  methods: {
    ...mapActions(usePersonalAccountStore, ["getAccount", "delAccount"]),
    async delAccountHandler(lc) {
      this.$data.loadingDel = true;

      const delAccount = new Promise((resolve) => {
        resolve(this.delAccount(lc));
      });

      delAccount.then(() => {
        this.$data.loadingDel = false;
      });
    },
    personalItemDataHandler(data) {
      Object.assign(
        this.$pinia.state.value?.personalAccount?.personalItemData,
        data
      );
    },
    sumValues(data) {
      let v = 0
      Number.prototype.toFixedNoRounding = function (n) {
        const reg = new RegExp("^-?\\d+(?:\\.\\d{0," + n + "})?", "g")
        const a = this.toString().match(reg)[0];
        const dot = a.indexOf(".");
        if (dot === -1) { // integer, insert decimal dot and pad up zeros
          return a + "." + "0".repeat(n);
        }
        const b = n - (a.length - dot) + 1;
        return b > 0 ? (a + "0".repeat(b)) : a;
      }
      let data2 = data?.filter((el) => !el.label.includes('Аванс'))
      data2?.map((el) => v += parseFloat(el.sum.toFixedNoRounding(2)))
      return v
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
        if (value?.toString().split('.')[1]?.length > 2) {
          return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(valueAsNumber2 / 100);
        }
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
  computed: {
    accountResponse() {
      return this.$pinia.state.value?.personalAccount?.getAccountResponse
    },
    lcList() {
      return this.$pinia.state.value?.personalAccount?.getAccountResponse?.data
        ? this.$pinia.state.value?.personalAccount?.getAccountResponse?.data
        : [];
    },
    lcList2() {
      return [...this.lcList.slice(1)];
    },
    delAccountMessage() {
      return this.$pinia.state.value?.personalAccount?.delAccountResponse
        ?.message;
    },
  },
  mounted() {
    this.$data.loading = true
    this.getAccount().then(() => {
      this.$data.loading = false
    })
  },
  updated() {
    if (this.$pinia.state.value?.login?.updateLogin) {
      this.$pinia.state.value.login.updateLogin = false
      this.$data.loading = true
      this.getAccount().then(() => {
        this.$data.loading = false
      })
    }
  },
  data() {
    return {
      open2: false,
      lcList3: [],
      loadingDel: false,
      loading: false,
    };
  },
  setup() {
    const router = useRouter();

    return {
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
      ellipsisVertical,
      trashOutline,
    };
  },
});
</script>

<style scoped>
.delSpinner {
  padding: 0;
  width: 24px;
  margin: 0 8px;
}

.history-icon {
  width: 24px;
  height: 24px;
}

ion-icon {
  width: 32px;
  height: 32px;
  color: #0378b4;
  --ionicon-stroke-width: 35px;
}

.icon-start {
  margin-right: 20px;
}

.icon-end {
  width: 24px;
  height: 24px;
  margin-left: 0px;
}

.text-blue {
  color: #0378b4;
  font-weight: 700;
  margin-left: 0;
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

.icon-end {
  width: 24px;
  height: 24px;
  margin-left: 0px;
}

.btn {
  margin-bottom: 15px;
}

.footer {
  width: 100%;
  margin-top: 30px;
  height: 100%;
}
</style>
