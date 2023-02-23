<template>
  <ion-page>
    <Back />
    <Layout height="false" filledBtn="Готово" outlineBtn="." :btnSrc="'/tabs/record'" :method="() => clickFilledBtn()"
      :title="time === true ? 'Выберите время' : 'Выберите дату'">
      <template v-slot:main-content>
        <ion-datetime v-show="availableDatesData?.data?.length > 0" color="date" presentation="date"
          @ionChange="onDateChange" mode="ios" :dayValues="availableDates"></ion-datetime>

        <div v-show="!reserveData?.operation && !availableDatesData">
          <ion-item lines="none" router-link="/tabs/record">
            <ion-text class="sub-title">Выберите вид услуг</ion-text>
          </ion-item>
        </div>
        <div v-show="availableDatesData?.data?.length === 0 && reserveData?.operation">
          <ion-item lines="none" router-link="/tabs/record">
            <ion-text class="sub-title">Свободных дней нет</ion-text>
          </ion-item>
        </div>
        <div v-show="availableDatesData?.error === true">
          <ion-item lines="none" router-link="/tabs/record">
            <ion-text class="sub-title">{{ availableDatesData?.message }}</ion-text>
          </ion-item>
        </div>

      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Back from "../components/Back.vue";
import { IonPage, IonDatetime, IonText, IonItem } from "@ionic/vue";
// import { getDate, getMonth } from "date-fns";
// import { isWeekend } from "date-fns";
import moment from 'moment'
import { usePreEntryStore } from "../stores/preEntry";

export default defineComponent({
  name: "timePage",
  props: {
    time: Boolean,
  },
  data() {
    return {
      availableDates: '1',
    }
  },
  components: {
    IonPage,
    Back,
    IonDatetime,
    Layout,
    IonText, IonItem
  },

  setup() {
    const router = useRouter();
    const { getTimeSlots, } = usePreEntryStore();

    /* let returnTo = router.options.history.state.back;
    let selectedDateTime = null;

    const isDateEnabled = (dateIsoString) => {
      const date = new Date(dateIsoString);

      return !isWeekend(date);
    };
    
    let today = new Date().toISOString();
    let maxDay = new Date();
    maxDay.setDate(maxDay.getDate() + 5);
    maxDay = maxDay.toISOString(); */

    return {
      router,
      getTimeSlots,
      // returnTo,
      // selectedDateTime,
      // isDateEnabled,
      // setDate,
      // fetchTime,
      // today,
      // maxDay,
    };
  },
  computed: {
    reserveData() {
      return this.$pinia.state.value.preEntry.reserveData
    },
    availableDatesData() {
      return this.$pinia.state.value.preEntry.availableDates
    },
  },
  ionViewDidEnter() {
    this.$data.availableDates = ''
    this.$pinia.state.value.preEntry.availableDates?.data?.forEach(element => {
      this.$data.availableDates += `${element.slice(-2)},`
    });
    // console.log(this.$pinia.state.value.preEntry.reserveData, 'testets')
  },
  methods: {
    onDateChange(event) {
      this.$pinia.state.value.preEntry.reserveData = { date: moment(event.detail.value).format('yyyy-MM-DD'), ...this.reserveData }
    },

    clickFilledBtn() {
      if (this.time === false) {
        this.getTimeSlots(this.reserveData?.operation, this.reserveData?.date)
      }
    },
  },
});
</script>

<style scoped>
.background {
  height: 100%;
}

.container {
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
}

.header {
  padding: 15px;
  padding-top: 84px;
  padding-bottom: 56px;
  background: linear-gradient(327.65deg, #0378b4 -6.98%, #7ae6e4 119.27%);
}

.main {
  background: #ffffff;
  padding: 15px;
  border-radius: 15px;
  position: relative;
  top: -50px;
  left: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.button {
  margin-top: -30px;
}
</style>
