<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/personalAccounts')" />
    <ion-content :fullscreen="true" class="background">
      <div class="header-wrapper">
        <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img>
        <div class="btn-wrapper">
          <Button class="btn" :grey="true" name="Оплата" @click="
            () =>
              router.push({
                name: 'personalAccountPayment',
              })
          " />
          <Button :lightBlue="true" class="btn" name="Показания" />
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
              <ion-text> {{ lcList?.name }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>{{ lcList?.address }}</ion-text>
            </ion-item>
          </template>
        </layout-box>
        <div v-show="!loadingGetIndices && lcList.counters?.length !== 0" v-for="(el) in indicationList" :key="el">
          <layout-box>
            <template v-slot:content>
              <ion-text>
                <p class="title ion-text-start">Номер счетчика {{ el?.name }}</p>
              </ion-text>
              <!-- <ion-text>
                <p class="title ion-text-start">Новые показания</p>
              </ion-text> -->

              <Input @input="(e) => {
                el.value = e.target.value
              
              
              }" name="Введите показания счетчика (куб.
                  метр.)" type="number" :textBlue="true" />

              <ion-text v-show="el.errorText">
                <p class="ion-text-start error" v-show="!el?.response?.toString()?.includes('Вызов инспектора')">
                  {{ el.response }}
                </p>
                <p class="ion-text-center" v-show="el?.response?.toString()?.includes('Вызов инспектора')">
                  Нарушен срок предоставления показаний, в разделе услуги Вам необходимо оформить заявку
                  <span class="blue" @click="() => router.push('/tabs/servicesCallInspector')"
                    style="text-decoration:underline">Вызов инспектора</span>
                </p>
              </ion-text>
              
              <ion-text v-show="!el.errorText">
                <p class="ion-text-start blue">
                  {{ el.response }}
                </p>
              </ion-text>

              <Button :loading="loading" :name="'Подтвердить'" @click="
                () => {
                  /* if (el?.indications[0].date.substring(0, 10) !== moment().format('DD.MM.yyyy')) {
                    if ((el.value > el?.indications[0]?.indication)) { */
                  loading = true
                  setIndices(el.id, el.value).then(() => {
                    loading = false
                    getIndices(el.id).then(() => {
                      let data = this.$data.indicationList.find((setInd) => {
                        return setInd.id === el?.id
                      })
                      getAccount()
                      if (data) {
                        Object.assign(data, this.indicesList[0])
                      }
                    })
                    el.response = this.$pinia.state.value?.personalAccount?.setIndicesResponse?.message
                    el.errorText = this.$pinia.state.value?.personalAccount?.setIndicesResponse?.error
                    el.error = ''
                  })
                  /* } else {
                    el.response = ''
                    el.error = 'Текущие показания меньше предыдущих'
                  }
               
                } else {
                  el.response = ''
                  el.error = 'За этот день уже имеется начисление по счетчику'
                } */
                }
              " />
              <ion-grid>
                <ion-row class="ion-row-last">

                  <ion-text style="margin: 0 10px 0 0">
                    Выберите период:
                  </ion-text>
                  <div style="display: flex;">
                    <ion-datetime-button mode="ios" color="date" :datetime="el?.id"></ion-datetime-button>
                    <ion-text style="margin: 0 5px;">-</ion-text>

                    <ion-datetime-button mode="ios" color="date" :datetime="`${el?.id}_2`"></ion-datetime-button>
                  </div>

                  <ion-modal mode="ios" :keep-contents-mounted="true">
                    <ion-datetime doneText="Готово" cancelText="Отменить" :show-default-buttons="true"
                      @ionChange="(e) => onBeginDateChange(e, el?.id)" color="date" presentation="date" mode="ios"
                      :id="el?.id">
                    </ion-datetime>

                  </ion-modal>
                  <ion-modal mode="ios" :keep-contents-mounted="true">

                    <ion-datetime doneText="Готово" cancelText="Отменить" :show-default-buttons="true"
                      @ionChange="(e) => onEndDateChange(e, el?.id)" color="date" presentation="date" mode="ios"
                      :id="`${el?.id}_2`">
                    </ion-datetime>
                  </ion-modal>
                </ion-row>
              </ion-grid>

              <ion-row>
                <ion-col>Дата</ion-col>
                <ion-col>Показания</ion-col>
              </ion-row>

              <div v-for="(indice) in el?.indications" :key="indice">

                <ion-row :class="{
                  'ion-row-last':
                    el?.indications[el?.indications?.length - 1]?.date ===
                    indice?.date,
                }">

                  <ion-col class="text-end">{{
                    indice?.date.substring(0, 10)
                  }}</ion-col>
                  <ion-col class="text-end">{{ indice?.indication }}</ion-col>
                </ion-row>

              </div>

            </template>
          </layout-box>
        </div>
        <div v-show="loadingGetIndices">
          <layout-box>
            <template v-slot:content>
              <ion-item lines="none">
                <ion-spinner name="bubbles" />
              </ion-item>
            </template>
          </layout-box>
        </div>
        <div v-show="lcList?.counters?.length === 0">
          <layout-box>
            <template v-slot:content>
              <ion-text>
                <p class="title ion-text-start">Новые показания</p>
              </ion-text>
              <Input :textBlue="true" type="text" :value="counterId" :changeHandler="changeCounterId"
                :name="'Введите номер счетчика'" />
              <Input :textBlue="true" type="text" :value="indication" :changeHandler="changeIndication"
                :name="'Введите показания счетчика'" />
              <ion-text v-show="error">
                <p class="ion-text-start error">
                  {{ error }}
                </p>
              </ion-text>
              <ion-text v-show="response">
                <p class="ion-text-center">
                  {{ response }}
                </p>
              </ion-text>
              <Button :loading="loading" :name="'Подтвердить'" @click="
  () => {
    if (counterId?.length !== 0) {
      setIndicesHandler(
        counterId,
        indication,
        loading,
        response
      );
    } else {
      error = 'Заполните все поля';
    }
  }
              " />
            </template>
          </layout-box>
        </div>

        <ion-text>
          <p class="ion-text-center">
            В случае не правильного ввода показаний счетчика, следует обратиться
            в абонентский отдел УГРС по тел. 8(4112)-42-00-30, 46-00-41, 46-00-71
          </p>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonPage,
  IonText,
  IonItem,
  IonRow,
  IonDatetimeButton,
  IonCol,
  IonModal,
  IonDatetime,
  IonSpinner,
  IonImg,
  IonGrid,
} from "@ionic/vue";
import {
  chevronForwardOutline,
  calendarNumberOutline,
} from "ionicons/icons";
import Button from "../components/Button.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import { useRouter, useRoute } from "vue-router";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";
import Input from "../components/Input.vue";
import moment from 'moment'

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    return {
      router,
      route,
      chevronForwardOutline,
      calendarNumberOutline,
      moment,
    };
  },
  data() {
    return {
      indication: "",
      counterId: "",
      error: "",
      loading: false,
      loadingGetIndices: false,
      response: "",
      beginDate: '',
      endDate: '',
      indicationList: [],
      value: '',
    };
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["getIndices", "setIndices", "getAccount"]),
  
    async setIndicesHandler(counterId, indice,) {

      if (
        indice?.length >= 0
      ) {
        this.$data.loading = true;

        this.setIndices(counterId, indice).then(() => {

          this.$data.response =
            this.$pinia.state.value?.personalAccount?.setIndicesResponse
              ?.message;
          this.$data.loading = false;


        });
      } else {
        this.$data.response = "Заполните поле";
        this.$data.error = "Заполните поле";
      }
    },
    changeIndication(e) {
      this.$data.indication = e.target.value;
    },
    changeCounterId(e) {
      this.$data.counterId = e.target.value;
    },
    capitalizeFirstLetter(string) {
      return string?.charAt(0)?.toUpperCase() + string?.slice(1);
    },
    onBeginDateChange(event, id) {

      this.getIndices(id, moment(event.detail.value).format('yyyyMMDD'), this.$data.endDate ? this.$data.endDate : moment().format('yyyyMMDD')).then(() => {
        let data = this.$data.indicationList.find((el) => {
          return el.id === id
        })
        if (this.indicesList[0]) {
          Object.assign(data, this.indicesList[0])
        } else {
          data.indications = []
        }
      })

      this.$data.beginDate = moment(event.detail.value).format('yyyyMMDD')
    },
    onEndDateChange(event, id) {

      this.getIndices(id, this.$data.beginDate ? this.$data.beginDate : moment().format('yyyyMMDD'), moment(event.detail.value).format('yyyyMMDD')).then(() => {
        let data = this.$data.indicationList.find((el) => {
          return el.id === id
        })
        if (this.indicesList[0]) {

          Object.assign(data, this.indicesList[0])
        } else {
          data[0].indications = []
        }
      })

      this.$data.endDate = moment(event.detail.value).format('yyyyMMDD')
    },
  },

  computed: {
    indicesList() {
      return this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data
        ? this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data
        : [];
    },
    lcList() {
      return this.$pinia.state.value?.personalAccount?.personalItemData;
    },
    setIndicesMessage() {
      return this.$pinia.state.value?.personalAccount?.setIndicesResponse?.data
        ?.message;
    },
  },
  ionViewDidLeave() {
    this.$data.indicationList = []
  },
  ionViewDidEnter() {
    if (this.lcList?.counters?.length > 0 && this.lcList?.counters !== undefined) {
      this.getAccount()

      for (let index = 0; index < this.lcList?.counters?.length; index++) {
        const element = this.lcList?.counters[index];
        this.$data.loadingGetIndices = true
        this.getIndices(element.counterId).then(() => {
          let setIndicationList = new Promise((resolve) => {
            if (this.indicesList[0]?.id) resolve(this.$data.indicationList.push({ ...this.indicesList[0] }))

          })
          setIndicationList

          this.$data.loadingGetIndices = false
        })
      }
    } else {
      this.$router.push('/tabs/personalAccounts')
    }

  },
  names: "personalAccauntIndication",
  components: {
    Back,
    LayoutBox,
    IonContent,
    IonPage,
    Button,
    IonText,
    IonItem,
    Input,
    IonRow,
    IonCol,
    IonModal,
    IonImg,
    IonGrid,
    IonDatetime,
    IonSpinner,
    IonDatetimeButton,
  },
});
</script>

<style scoped>
ion-row {
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: solid 1px #e0e0e0;
}

.ion-row-last {
  border-bottom: none;
}

ion-col {
  word-break: break-all;
}


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

.btn-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #268FCC;
  border-radius: 25px;
  padding-right: 2px;
  padding-left: 2px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 23400;
}

.btn {
  flex-grow: 1;
}

.text-end {
  color: #0378b4;
  font-weight: 700;
  margin-left: 0;
  word-break: break-all;
}

.input {
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  border: solid 1px #e0e0e0;
  margin-bottom: 15px;
  --padding-start: 15px;
  --padding-bottom: 14px;
  --padding-top: 14px;
  --placeholder-color: #9e9e9e;
  --placeholder-font-weight: 400;
}

.input:focus {
  outline: none !important;
  border: solid 1px #62d0ce;
  caret-color: #000;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input-text {
  z-index: 0;
  padding-left: 15px;
  position: absolute;
  left: 1px;
  top: 15px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.inputTextBlue {
  color: #0378b4;
  font-weight: 700;
}

input:not(:placeholder-shown)+ion-text {
  display: none;
}

.dot {
  color: #62d0ce;
}
</style>
