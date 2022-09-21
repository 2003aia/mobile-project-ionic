<template>
  <ion-page>
    <Back />
    <Layout
      btnSrc="/registrPage"
      height="false"
      outlineBtn="."
      filledBtn="."
      title="Лицевой счёт"
      v-if="lcList?.length === 0"
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
      v-else
    >
      <template v-slot:main-content>
        <ion-item lines="none">
          <ion-text
            ><p class="title ion-text-start">
              Лицевой счет №{{ lcList[0]?.code }}
            </p></ion-text
          >
          <ion-icon id="click-trigger" slot="end" :icon="ellipsisVertical" />
          <ion-popover
            class="history-wrapper"
            mode="ios"
            trigger="click-trigger"
            trigger-action="click"
          >
            <ion-content class="ion-padding">
              <div>
                <ion-item
                  @click="
                    () =>
                      router.push({
                        name: 'personalAccountPaymentHistory',
                        params: { lc: lcList[0]?.code },
                      })
                  "
                >
                  <ion-text> История </ion-text>
                  <ion-img
                    slot="end"
                    class="history-icon"
                    :src="require('@/assets/img/history.png')"
                  />
                </ion-item>
                <ion-item @click="delAccountHandler(lcList[0].code)">
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
              lcList[0]?.debts?.accruals
            }}</ion-text>
          </ion-item>
          <ion-item>
            <ion-text> Пени: </ion-text>
            <ion-text class="text-blue" slot="end">{{
              lcList[0]?.debts?.penalties
            }}</ion-text>
          </ion-item>
        </ion-list>
        <Button
          class="btn"
          name="Оплата"
          @click="
            () =>
              router.push({
                name: 'personalAccountPayment',
                params: {
                  ...lcList[0],
                  debts: JSON.stringify(lcList[0].debts),
                  counters: JSON.stringify(lcList[0].counters),
                },
              })
          "
        />

        <Button
          class="btn"
          :outline="true"
          name="Внести показания"
          @click="
            () =>
              router.push({
                name: 'personalAccountIndication',
                params: {
                  ...lcList[0],
                  debts: JSON.stringify(lcList[0].debts),

                  counters: JSON.stringify(lcList[0].counters),
                },
              })
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
        <div v-if="lcList?.length > 1">
          <div v-for="el in lcList2" :key="el">
            <LayoutBox>
              <template v-slot:content>
                <ion-item lines="none">
                  <ion-text
                    ><p class="title ion-text-start">
                      Лицевой счет №{{ el.code }}
                    </p></ion-text
                  >
                  <ion-icon slot="end" :icon="ellipsisVertical" :id="el.code" />
                  <ion-popover
                    class="history-wrapper"
                    mode="ios"
                    :trigger="el.code"
                    trigger-action="click"
                  >
                    <ion-content class="ion-padding">
                      <div>
                        <ion-item
                          @click="
                            () =>
                              router.push({
                                name: 'personalAccountPaymentHistory',
                                params: { lc: el?.code },
                              })
                          "
                        >
                          <ion-text> История </ion-text>
                          <ion-img
                            slot="end"
                            class="history-icon"
                            :src="require('@/assets/img/history.png')"
                          />
                        </ion-item>
                        <ion-item @click="delAccountHandler(el.code)">
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
                    <ion-text slot="end" class="text-blue">{{
                      el.debts?.accruals
                    }}</ion-text>
                  </ion-item>
                  <ion-item>
                    <ion-text> Пени: </ion-text>
                    <ion-text class="text-blue" slot="end">{{
                      el.debts?.penalties
                    }}</ion-text>
                  </ion-item>
                </ion-list>
                <Button
                  class="btn"
                  name="Оплата"
                  router-link="/personalAccountPayment"
                />

                <Button
                  class="btn"
                  :outline="true"
                  name="Внести показания"
                  @click="
                    () =>
                      router.push({
                        name: 'personalAccountIndication',
                        params: {
                          ...el,
                          counters: JSON.stringify(el?.counters[0]),
                        },
                      })
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
// import {Storage} from '@ionic/storage'

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
  methods: {
    ...mapActions(usePersonalAccountStore, ["getAccount", "delAccount"]),
    delAccountHandler(lc) {
      this.$data.loadingDel = true;
      const delAccount = new Promise((resolve) => {
        resolve(this.delAccount(lc));
      });
      delAccount.then(() => {
        this.$data.loadingDel = false;
      });
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
      data: {
        number: "№123456789",
        name: "Иванов Иван Иванович",
        address: "Якутск, ул. Автодорожная 11/4",
        debt: "-680,92 руб.",
        penalties: "0 руб.",
      },
      lcList3: [],
      loadingDel: false,
    };
  },
  setup() {
    const router = useRouter();
    /*  const { getAccount } = usePersonalAccountStore();
    const store = new Storage()

    onIonViewDidEnter(() => {
      getAccount();
    }); */
    /* let getAccountData = null
    const storageHandler= async ()=>{
await store.create()
const token = await store.get("token");
        getAccountData = JSON.parse(token);
getAccount()
      }
    if (getAccountData.lics) {
      

    } */
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