<template>
  <ion-page>
    <Back :noBack="true" :logo="true" />
    <Layout :method2="
      () => {
        router.push('/tabs/records');
      }
    " :loading="loading" height="false" :outlineBtn="'Мои заявки'" filledBtn="Оставить заявку"
      title="Предварительная запись" :method="() => sendPreregRequest()">
      <template v-slot:header-content>
        <ion-text>
          <p class="main-text">
            С помощью данного сервиса физическим и юридическим лицам можно
            предварительно записаться на прием в Службу «Единого окна» по адресу
            г.Якутск, ул. Петра Алексеева, 64.
          </p>
        </ion-text>

        <ion-text>
          <p class="main-text">
            На ваш номер телефона будет отправлен СМС с указанием номера брони,
            а также даты и времени записи.
          </p>
        </ion-text>

        <ion-text>
          <p class="main-text">
            Прием документов производится только при полном пакете документов.
          </p>
        </ion-text>

        <ion-text>
          <p class="main-text">
            <ion-text class="main-subtitle"> Внимание! </ion-text>
            Согласно п. 9 ПП РФ №549, при подаче заявления на заключение
            договора на поставку газа, необходимо предоставить договор на
            техническое обслуживание со специализированной организацией.
          </p>
        </ion-text>
      </template>

      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Данные заявителя</p>
        </ion-text>

        <Input :required="true" v-mask="'+7 (###) ###-##-##'" name="Номер телефона" type="tel" :value="phone"
          :changeHandler="(e) => phone = e.target.value" />
        <Input name="Электронная почта" type="email" :value="email" :changeHandler="(e) => email = e.target.value" />
        <Input name="ФИО" type="text" :value="fio" :changeHandler="(e) => fio = e.target.value" />

        <ion-text>
          <p class="sub-title">Предварительная запись</p>
        </ion-text>

        <ButtonSelect :required="true" :name="
          reserveData?.name
          || 'Выберите вариант'
        " :btnSrc="
  () => {
    router.push('/tabs/recordSelect');
  }
" />

        <div>
          <ion-item router-link="/tabs/date">
            <ion-icon size="large" slot="start" class="icon-start" :icon="calendarNumberOutline"></ion-icon>
            <ion-text class="sub-title">{{
              reserveData?.date || "Выберите дату записи"
            }} <span class="blue">*</span></ion-text>
            <ion-icon size="large" slot="end" class="icon-end" :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
          <ion-item router-link="/tabs/time">
            <ion-icon size="large" slot="start" class="icon-start" :icon="alarmOutline"></ion-icon>
            <ion-text class="sub-title">{{
              reserveData?.slot || "Выберите время записи"
            }} <span class="blue">*</span></ion-text>
            <ion-icon class="icon-end" size="large" slot="end" :icon="chevronForwardOutline"></ion-icon>
          </ion-item>
        </div>

        <ion-text>
          <p>
            Режим работы Службы «Единого окна» в будни с 08.00 до 17.00
            Выходной: суббота, воскресенье
          </p>
          <ion-modal ref="recordResponse" :is-open="isOpen" @willDismiss="onWillDismiss" mode="ios">
            <div class="modal-header"><ion-icon @click="cancel" :icon="closeOutline"></ion-icon></div>
            <div class="modal">
              <ion-text>
                <p v-show="postReserveData?.error === false" class="ion-text-center"
                  style="margin-top: -10px; color: black">
                  Ваша заявка принята!
                  <br />
                  Номер вашей брони - {{ postReserveData?.data?.enrollment_pin }}
                </p>
                <p v-show="postReserveData?.error === true" style="margin-top: -10px;" class="ion-text-center error">
                  {{ postReserveData?.message }}
                </p>
              
                <p v-show="deleteReserveData && postReserveData?.error === false" class="ion-text-center" style="color: black">
                  {{ deleteReserveData?.message }}
                </p>
              </ion-text>
              <div class="confirmWrapper" v-show="postReserveData?.error === false">
                <ion-button @click="deleteHandler(postReserveData?.data?.enrollment_id)" v-show="!loadingDel" fill="clear"
                  style="color:red; border: solid red 1px;">ОТМЕНИТЬ ЗАПИСЬ</ion-button>
                <ion-button v-show="loadingDel" fill="clear" style="color:red; border: solid red 1px;">
                  <ion-spinner name="bubbles" />
                </ion-button>
              </div>
            </div>
          </ion-modal>

          <p v-show="errorText?.length > 0" class="error">
            {{ errorText }}
          </p>
        </ion-text>
      </template>

    </Layout>


  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { usePreEntryStore } from "../stores/preEntry";
import { Storage } from '@ionic/storage'

import ButtonSelect from "../components/ButtonSelect.vue";
import Back from "../components/Back.vue";

import {
  IonPage,
  IonText,
  IonItem,
  IonIcon,
  IonModal,
  IonButton,
  IonSpinner,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import {
  caretDownSharp,
  chevronForwardOutline,
  calendarNumberOutline,
  alarmOutline,
  closeOutline,
} from "ionicons/icons";
import { mask } from "vue-the-mask";

export default defineComponent({
  name: "recordPage",
  components: {
    ButtonSelect,
    IonPage,
    Back,
    IonSpinner,
    Layout,
    IonItem,
    Input,
    IonText,
    IonButton,
    IonIcon,
    IonModal,
  },
  directives: { mask },
  computed: {
    reserveData() {
      return this.$pinia.state.value.preEntry.reserveData
    },
    profileData() {
      return this.$pinia.state.value.profile?.profileResponse?.data;
    },
    postReserveData() {
      return this.$pinia.state.value.preEntry.postReserveResponse
    },
    deleteReserveData() {
      return this.$pinia.state.value.preEntry.deleteReserveResponse
    },
  },
  data() {
    return {
      errorText: '',
      phone: '',
      email: '',
      fio: '',
      loading: false,
      loadingDel: false,
      token: null,
      isOpen: false,
    }
  },

  setup() {
    const router = useRouter();
    const { postReserve, deleteReserve } = usePreEntryStore();


    return {
      router,
      caretDownSharp,
      chevronForwardOutline,
      calendarNumberOutline,
      alarmOutline,
      postReserve,
      deleteReserve,
      closeOutline,
    };
  },
  mounted() {
    const storageHandler = async () => {

      const store = new Storage()
      await store.create()
      const token = await store.get('token')
      this.$data.phone = JSON.parse(token).phone
      this.$data.token = JSON.parse(token)
    }
    storageHandler()

    this.email = this.profileData?.email
  },
  methods: {
    onWillDismiss() {
      this.$pinia.state.value.preEntry.deleteReserveResponse = null
      this.$pinia.state.value.preEntry.postReserveResponse = null
    },
    cancel() {
      this.$refs.recordResponse.$el.dismiss(null, 'cancel');
    },
    deleteHandler(id) {
      this.$data.loadingDel = true
      this.deleteReserve(id).then(() => {
        // this.$refs.recordResponse.$el.dismiss(null, 'cancel');

        this.$data.loadingDel = false
      })
    },
    sendPreregRequest() {

      const data = {
        operation: this.reserveData?.operation,
        slot: this.$pinia.state.value.preEntry.reserveData?.slot,
        date: this.reserveData?.date,
        phone: this.$data.phone,
        email: this.$data.email,
        fio: this.$data.fio,
        token: this.$data.token?.token
      }
      if (this.reserveData?.operation && this.reserveData?.date && this.reserveData?.slot) {

        if (this.$data.phone) {
          this.$data.errorText = ''
          this.$data.loading = true

          this.postReserve(data).then(() => {
            this.$data.isOpen = true
            this.$pinia.state.value.preEntry.reserveData = null
            this.$data.loading = false
          })
        } else {
          this.$data.errorText = "Все обязательные поля должны быть заполнены"
        }
      } else {
        this.$data.errorText = "Все обязательные поля должны быть заполнены"

      }
    },
  },
});
</script>

<style scoped>
.modal-header {
  padding: 10px;
}

.modal-header ion-icon {
  font-size: 20px;
  margin-left: auto;
}

ion-modal {
  --height: fit-content;
  --width: 80%;
  --border-radius: 16px;
}

.modal {
  padding: 15px;
}

.confirmWrapper {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.confirmWrapper ion-button {
  --border-radius: 25px;
  height: 45px;
  width: 100%;
  border-radius: 25px;
  border: solid 1px #0378b4;
  color: #0378b4;
}


ion-item {
  --padding-start: 0px;
  --inner-padding-bottom: 10px;
  --inner-padding-end: 0;
  --inner-padding-top: 20px;
}

ion-icon {
  height: 32px;
  width: 32px;
  --ionicon-stroke-width: 40px;
  color: #0378b4;
  margin-right: 20px;
}

.icon-start {
  margin-right: 20px;
}

.icon-end {
  width: 24px;
  height: 24px;
  margin-left: 0px;
}
</style>
