<template>
  <ion-page>
    <Back />
    <Layout :btnSrc="'/tabs/record'" height="false" outlineBtn="." filledBtn="." title="Мои заявки">
      <template v-slot:main-content>

        <div v-show="!loading && el?.length > 0">

          <ion-item lines="none">
            <ion-text>
              <p class="title ion-text-start">
                {{ operationConverter(el[0]?.operation) }}
              </p>
            </ion-text>
            <ion-icon slot="end" @click="
              (e) => {
                el[0].open = true;
                el[0].event = e;
              }
            " :icon="ellipsisVertical" />
            <ion-popover class="history-wrapper" mode="ios" :event="el[0]?.event" :is-open="el[0]?.open">
              <!--  @didDismiss="lcList[0].open = false" -->
              <ion-content class="ion-padding">
                <div>

                  <ion-item lines="nonse" @click="(e) => {
                    loadingDel = true
                    deleteReserve(el[0]?.ID).then(() => {
                      el[0].open = false;
                      el[0].event = e;
                      loadingDel = false
                      loading = true
                      getReserve().then(() => {
                        loading = false
                      })
                    });
                  }">
                    <ion-text> Удалить</ion-text>
                    <ion-icon class="history-icon" :icon="trashOutline" slot="end" v-if="loadingDel === false" />
                    <ion-spinner class="delSpinner" v-else slot="end" name="bubbles" />
                  </ion-item>
                </div>
              </ion-content>
            </ion-popover>
          </ion-item>
          <ion-item>
            <ion-text>Время: </ion-text>
            <ion-text slot="end" class="text-blue">
              {{
                el[0]?.slot
              }}
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>ПИН-код: </ion-text>
            <ion-text slot="end" class="text-blue">
              {{
                el[0]?.PINCode
              }}
            </ion-text>
          </ion-item>
        </div>
        <div v-show="loading">
          <ion-item lines="none">
            <ion-spinner name="bubbles" />
          </ion-item>
        </div>
        <div v-show="el?.length === 0 && !loading">
          <ion-item lines="none">
            Заявок нет
          </ion-item>
        </div>

      </template>
      <template v-slot:content>
        <div v-show="!loading" v-for="el in el2" :key="el">
          <LayoutBox>
            <template v-slot:content>
              <ion-item lines="none">
                <ion-text>
                  <p class="title ion-text-start">
                    {{ operationConverter(el?.operation) }}
                  </p>
                </ion-text>
                <ion-icon slot="end" @click="
                  (e) => {
                    el.open = true;
                    el.event = e;
                  }
                " :icon="ellipsisVertical" />
                <ion-popover class="history-wrapper" mode="ios" :event="el?.event" :is-open="el?.open">
                  <!--  @didDismiss="lcList[0].open = false" -->
                  <ion-content class="ion-padding">
                    <div>

                      <ion-item lines="nonse" @click="(e) => {
                        loadingDel = true
                        deleteReserve(el?.ID).then(() => {
                          el.open = false;
                          el.event = e;
                          loadingDel = false
                          loading = true
                          getReserve().then(() => {
                            loading = false
                          })
                        });
                      }">
                        <ion-text> Удалить</ion-text>
                        <ion-icon class="history-icon" :icon="trashOutline" slot="end" v-if="loadingDel === false" />
                        <ion-spinner class="delSpinner" v-else slot="end" name="bubbles" />
                      </ion-item>
                    </div>
                  </ion-content>
                </ion-popover>
              </ion-item>
              <ion-item>
                <ion-text>Время: </ion-text>
                <ion-text slot="end" class="text-blue">
                  {{
                    el?.slot
                  }}
                </ion-text>
              </ion-item>
              <ion-item>
                <ion-text>ПИН-код: </ion-text>
                <ion-text slot="end" class="text-blue">
                  {{
                    el?.PINCode
                  }}
                </ion-text>
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
import { IonPage, IonText, IonItem, IonPopover, IonIcon, IonContent, IonSpinner } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
  trashOutline,
  ellipsisVertical,
} from "ionicons/icons";
import Back from "../components/Back.vue";
// import Button from "../components/Button.vue";

import LayoutBox from "../components/LayoutBox.vue";
import { usePreEntryStore } from "../stores/preEntry";


export default defineComponent({
  name: "recordsPage",
  components: {
    Back,
    IonItem,
    IonPage,
    Layout,
    IonText,
    LayoutBox,
    // Button,
    IonPopover, IonIcon, IonContent, IonSpinner
  },
  data() {
    return {
      loadingDel: false,
      loading: false,
    }
  },
  computed: {

    el() {
      return this.$pinia.state.value.preEntry.getReserveResponse?.data || []
    },
    el2() {
      return [...this.el.slice(1)];
    },
  },
  ionViewDidEnter() {
    this.$data.loading = true
    this.getReserve().then(() => this.$data.loading = false)
  },
  methods: {
    async deleteHandler(el) {
      console.log(el, 'testdelete')
      // this.deleteReserve()
    },
    operationConverter(value) {
      switch (value) {
        case '12':
          return 'Прием документов';
        case '14':
          return 'Договор на поставку газа';
        case '16':
          return 'Соц. газификация'

        default:
          break;
      }
    }
  },
  setup() {
    const router = useRouter();
    const { getReserve, deleteReserve } = usePreEntryStore();

    return {
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
      trashOutline,
      ellipsisVertical,
      getReserve,
      deleteReserve,
    };
  },
});
</script>
  
<style scoped>
.text {
  margin-top: 15px;
  margin-bottom: 10px;
}

.text-blue {
  color: #0378b4;
  font-weight: 700;
  margin-left: 0;
}

/* .btn{
  border: solid #dd2c00 1px;
} */
</style>