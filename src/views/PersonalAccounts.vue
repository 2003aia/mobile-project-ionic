<template>
  <ion-page>
    <Back v-show="!tabs" />
    <Layout
      btnSrc="/registrPage"
      height="false"
      outlineBtn="."
      filledBtn="."
      title="Лицевой счёт"
      v-show="lcList?.length === 0"
    >
      <template v-slot:main-content>
        <ion-item router-link="/personalAccountNew">
          <ion-Icon
            class="icon-start"
            size="large"
            slot="start"
            :icon="pencilOutline"
          ></ion-Icon>
          <ion-text class="sub-title">Добавить лицевой счет</ion-text>
          <ion-icon
            class="icon-end"
            size="large"
            slot="end"
            :icon="chevronForwardOutline"
          ></ion-icon>
        </ion-item>
        <ion-item router-link="/personalAccountInfoSearch">
          <ion-Icon
            class="icon-start"
            size="large"
            slot="start"
            :icon="documentTextOutline"
          ></ion-Icon>
          <ion-text class="sub-title">Узнать лицевой счет</ion-text>
          <ion-icon
            size="large"
            class="icon-end"
            slot="end"
            :icon="chevronForwardOutline"
          ></ion-icon>
        </ion-item>
      </template>
    </Layout>
    <Layout
      btnSrc="/registrPage"
      height="false"
      outlineBtn="."
      filledBtn="."
      title="Лицевой счёт"
      v-show="lcList?.length !== 0"
    >
      <template v-slot:main-content>
        <ion-item lines="none">
          <ion-text
            ><p class="title ion-text-start">
              Лицевой счет №{{ lcList[0]?.code }}
            </p></ion-text
          ><!-- id="click-trigger" -->
          <ion-icon
            slot="end"
            @click="
              (e) => {
                lcList[0].open = true;
                lcList[0].event = e;
              }
            "
            :icon="ellipsisVertical"
          />
          <ion-popover
            class="history-wrapper"
            mode="ios"
            :event="lcList[0]?.event"
            :is-open="lcList[0]?.open"
            @didDismiss="lcList[0].open = false"
            ><!--   trigger="click-trigger"
            trigger-action="click" -->
            <ion-content class="ion-padding">
              <div>
                <ion-item
                  @click="
                    (e) => {
                      lcList[0].open = false;
                      lcList[0].event = e;
                      router.push({
                        name: 'personalAccountPaymentHistory',
                        params: { lc: lcList[0]?.code },
                      });
                    }
                  "
                >
                  <ion-text> История </ion-text>
                  <ion-img
                    slot="end"
                    class="history-icon"
                    :src="require('@/assets/img/history.png')"
                  />
                </ion-item>
                <ion-item
                  @click="
                    (e) => {
                      delAccountHandler(lcList[0].code).then(() => {
                        lcList[0].open = false;
                        lcList[0].event = e;
                      });
                    }
                  "
                >
                  <ion-text> Удалить</ion-text>
                  <ion-icon
                    class="history-icon"
                    :icon="trashOutline"
                    slot="end"
                    v-if="loadingDel === false"
                  />
                  <ion-spinner v-else slot="end" name="bubbles" />
                </ion-item>
              </div>
              <!-- <div v-else>
                <ion-text> {{ delAccountMessage }} </ion-text>
              </div> -->
            </ion-content>
          </ion-popover>
        </ion-item>

        <ion-list>
          <ion-item>
            <ion-text>{{ lcList[0]?.name }}</ion-text>
          </ion-item>
          <ion-item>
            <ion-text>{{ lcList[0]?.address }}</ion-text>
          </ion-item>
          <ion-item>
            <ion-text> Задолженность: </ion-text>
            <ion-text slot="end" class="text-blue">{{
              maskMoney(
                lcList[0]?.debts?.accruals +
                  lcList[0]?.debts?.penalties +
                  lcList[0]?.debts?.sumTO +
                  lcList[0]?.debts?.advances
              )
            }}</ion-text>
          </ion-item>

          <ion-item>
            <ion-text> Пени: </ion-text>
            <ion-text class="text-blue" slot="end">{{
              maskMoney(lcList[0]?.debts?.penalties)
            }}</ion-text>
          </ion-item>
        </ion-list>
        <Button
          class="btn"
          name="Оплата"
          @click="
            () => {
              personalItemDataHandler(lcList[0]);

              router.push({
                name: 'personalAccountPayment',
              });
            }
          "
        />

        <Button
          class="btn"
          :outline="true"
          name="Внести показания"
          @click="
            () => {
              personalItemDataHandler(lcList[0]);
              router.push({
                name: 'personalAccountIndication',
              });
            }
          "
        />

        <Button
          @click="
            () =>
              router.push({
                name: 'personalAccountPaymentHistory',
                params: { lc: lcList[0]?.code },
              })
          "
          class="btn"
          :outline="true"
          name="История платежей"
        />
      </template>
      <template v-slot:content>
        <div v-show="lcList?.length > 1">
          <div v-for="el in lcList2" :key="el">
            <LayoutBox>
              <template v-slot:content>
                <ion-item lines="none">
                  <ion-text
                    ><p class="title ion-text-start">
                      Лицевой счет №{{ el.code }}
                    </p></ion-text
                  >
                  <ion-icon
                    @click="
                      (e) => {
                        el.event = e;
                        el.open = true;
                      }
                    "
                    slot="end"
                    v-model="el.open"
                    :icon="ellipsisVertical"
                  /><!-- :id="el.code" -->
                  <ion-popover
                    class="history-wrapper"
                    mode="ios"
                    :event="el.event"
                    :is-open="el?.open"
                    @didDismiss="el.open = false"
                    ><!--  :trigger="el?.code"
                    trigger-action="click" -->
                    <ion-content class="ion-padding">
                      <div>
                        <ion-item
                          @click="
                            (e) => {
                              el.open = false;
                              el.event = e;
                              router.push({
                                name: 'personalAccountPaymentHistory',
                                params: { lc: el?.code },
                              });
                            }
                          "
                        >
                          <ion-text> История </ion-text>
                          <ion-img
                            slot="end"
                            class="history-icon"
                            :src="require('@/assets/img/history.png')"
                          />
                        </ion-item>
                        <ion-item
                          @click="
                            (e) => {
                              delAccountHandler(el.code).then(() => {
                                el.open = false;
                                el.event = e;
                              });
                            }
                          "
                        >
                          <ion-text> Удалить</ion-text>
                          <ion-icon
                            class="history-icon"
                            :icon="trashOutline"
                            slot="end"
                            v-if="!loadingDel"
                          />
                          <ion-spinner v-else slot="end" name="bubbles" />
                        </ion-item>
                      </div>

                      <!-- <div v-else>
                        <ion-text> {{ delAccountMessage }} </ion-text>
                      </div> -->
                    </ion-content>
                  </ion-popover>
                </ion-item>

                <ion-list>
                  <ion-item>
                    <ion-text>{{ el.name }}</ion-text>
                  </ion-item>
                  <ion-item>
                    <ion-text>{{ el.address }}</ion-text>
                  </ion-item>
                  <ion-item>
                    <ion-text> Задолженность: </ion-text>
                    <ion-text slot="end" class="text-blue"
                      >{{
                        maskMoney(
                          el?.debts?.accruals +
                            el?.debts?.penalties +
                            el?.debts?.sumTO +
                            el?.debts?.advances
                        )
                      }}
                    </ion-text>
                  </ion-item>
                  <ion-item>
                    <ion-text> Пени: </ion-text>
                    <ion-text class="text-blue" slot="end">{{
                      maskMoney(el.debts?.penalties)
                    }}</ion-text>
                  </ion-item>
                </ion-list>
                <Button
                  class="btn"
                  name="Оплата"
                  @click="
                    () => {
                      personalItemDataHandler(el);

                      router.push({
                        name: 'personalAccountPayment',
                      });
                    }
                  "
                />

                <Button
                  class="btn"
                  :outline="true"
                  name="Внести показания"
                  @click="
                    () => {
                      personalItemDataHandler(el);

                      router.push({
                        name: 'personalAccountIndication',
                      });
                    }
                  "
                />
                <Button
                  class="btn"
                  :outline="true"
                  @click="
                    () =>
                      router.push({
                        name: 'personalAccountPaymentHistory',
                        params: { lc: el?.code },
                      })
                  "
                  name="История платежей"
                />
              </template>
            </LayoutBox>
          </div>
        </div>

        <div class="footer">
          <LayoutBox>
            <template v-slot:content>
              <ion-item router-link="/personalAccountNew">
                <ion-Icon
                  class="icon-start"
                  size="large"
                  slot="start"
                  :icon="pencilOutline"
                ></ion-Icon>
                <ion-text class="sub-title">Добавить лицевой счет</ion-text>
                <ion-icon
                  class="icon-end"
                  size="large"
                  slot="end"
                  :icon="chevronForwardOutline"
                ></ion-icon>
              </ion-item>
              <ion-item router-link="/personalAccountInfoSearch">
                <ion-Icon
                  class="icon-start"
                  size="large"
                  slot="start"
                  :icon="documentTextOutline"
                ></ion-Icon>
                <ion-text class="sub-title">Узнать лицевой счет</ion-text>
                <ion-icon
                  size="large"
                  class="icon-end"
                  slot="end"
                  :icon="chevronForwardOutline"
                ></ion-icon>
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
  IonList,
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
    IonList,
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
    maskMoney(value) {
      const valueAsNumber = value;
      return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(valueAsNumber / 100);
    },
  },
  computed: {
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
    this.getAccount();
  },
  data() {
    return {
      open2: false,
      lcList3: [],
      loadingDel: false,
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
ion-spinner {
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
