<template>
  <ion-page>
    <Back :noBack="true" :logo="true" />
    <Layout :method2="
  () => {
    router.push('/tabs/records');
  }
" :loading="loading" v-if="!currentlySuccess" height="false" :outlineBtn="'Мои заявки'" filledBtn="Оставить заявку"
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
          <p class="blue" v-show="postReserveData?.error === false">
            Ваша заявка принята!
            {{ postReserveData?.enrollment_pin }}
          </p>
          <p class="error" v-show="postReserveData?.error === true">
            {{ postReserveData?.message }}
          </p>
          <p v-show="errorText?.length > 0" class="error">
            {{ errorText }}
          </p>
        </ion-text>
      </template>
    </Layout>

    <Layout v-else outlineBtn="." filledBtn="Вернуться" :method="() => reset()" title="Предварительная запись">
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Прием документов</p>
        </ion-text>
        <ion-item>
          <ion-text> Дата приема: </ion-text>
          <ion-text slot="end" class="text-end text-success">{{
            entryDate
          }}</ion-text>
        </ion-item>
        <ion-item>
          <ion-text> Время приема: </ion-text>
          <ion-text slot="end" class="text-end text-success">{{
            entryTime
          }}</ion-text>
        </ion-item>
        <ion-item>
          <ion-text> Номер брони: </ion-text>
          <ion-text slot="end" class="text-end text-success">{{
            entryNumber?.substr(0, 5)
          }}</ion-text>
        </ion-item>
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
} from "@ionic/vue";
import Input from "../components/Input.vue";
import {
  caretDownSharp,
  chevronForwardOutline,
  calendarNumberOutline,
  alarmOutline,
} from "ionicons/icons";
import { mask } from "vue-the-mask";

export default defineComponent({
  name: "recordPage",
  components: {
    ButtonSelect,
    IonPage,
    Back,
    Layout,
    IonItem,
    Input,
    IonText,
    IonIcon,
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
  },
  data() {
    return {
      currentlySuccess: false,
      errorText: '',
      phone: '',
      email: '',
      fio: '',
      loading: false,
      token: null,
    }
  },

  setup() {
    const router = useRouter();
    // const preEntryStore = usePreEntryStore();
    /* const { entryPhone, entryServiceType, entryDate, entryTime, entryNumber } =
      storeToRefs(preEntryStore); */

    const {/*  sendFullInfo, resetPreEntry, */ postReserve } = usePreEntryStore();
    // const {/*  sendFullInfo, resetPreEntry, */ postReserve } = useProfileStore();

    // const errorText = ref("");
    // const currentlySuccess = ref(false);

    return {
      router,
      caretDownSharp,
      chevronForwardOutline,
      calendarNumberOutline,
      alarmOutline,
      postReserve,
      /* preEntryStore,
      entryPhone,
      entryServiceType,
      entryDate,
      entryTime,
      errorText,
      sendFullInfo,
      currentlySuccess,
      resetPreEntry,
      entryNumber, */
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
            this.$data.loading = false
          })
        } else {
          this.$data.errorText = "Все обязательные поля должны быть заполнены"
        }
      } else {
        this.$data.errorText = "Все обязательные поля должны быть заполнены"

      }

      /* let status = 0;
      if (this.entryPhone.length === 18) {
        status++;
      }
      if (
        this.entryServiceType !== "" &&
        this.entryServiceType !== "Неверный код сервиса"
      ) {
        status++;
      }
      if (this.entryDate) {
        status++;
      }
      if (this.entryTime) {
        status++;
      }
    
      if (status !== 4) {
        this.errorText = "Все поля должны быть заполнены";
      } else {
        this.errorText = "";
        this.sendFullInfo(
          this.entryPhone,
          this.entryServiceType,
          this.entryDate,
          this.entryTime
        ).then((success) => {
          console.log(success);
          if (success) {
            this.currentlySuccess = true;
          }
        });
      } */
    },
    reset() {
      this.resetPreEntry();
      this.currentlySuccess = false;
    },
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0px;
  /*  */
  /*   --inner-padding-start: 20px; */
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

.text-success {
  color: #000000;
  font-weight: 700;
  margin-left: 0;
}
</style>
