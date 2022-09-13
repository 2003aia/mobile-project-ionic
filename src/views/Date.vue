<template>
  <ion-page>
    <Back />
    <Layout
      height="false"
      filledBtn="Готово"
      outlineBtn="."
      :btnSrc="returnTo"
      :method="() => clickFilledBtn()"
      :title="time === true ? 'Выберите время' : 'Выберите дату'"
    >
      <template v-slot:main-content>
        <ion-datetime
          v-if="time === true"
          color="date"
          mode="ios"
          presentation="time"
          @ionChange="onDateChange"
        ></ion-datetime>

        <ion-datetime
          v-if="time === false"
          color="date"
          :is-date-enabled="isDateEnabled"
          presentation="date"
          @ionChange="onDateChange"
          mode="ios"
        ></ion-datetime>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Back from "../components/Back.vue";
import { IonPage, IonDatetime } from "@ionic/vue";
import { getDate, getMonth } from "date-fns";
import { usePreEntryStore } from "../stores/preEntry";

export default defineComponent({
  name: "timePage",
  props: {
    time: Boolean,
  },
  components: {
    IonPage,
    Back,
    IonDatetime,
    Layout,
  },
  setup() {
    const router = useRouter();

    let returnTo = router.options.history.state.back;
    let selectedDateTime = null;

    const isDateEnabled = (dateIsoString) => {
      const date = new Date(dateIsoString);

      if (getDate(date) === 24 && getMonth(date) === 7) {
        return false;
      } else {
        return true;
      }

    };
    const { setDate, fetchTime } = usePreEntryStore()
    return { router, returnTo, selectedDateTime, isDateEnabled, setDate, fetchTime };
  },
  methods:{
    onDateChange(event){
      this.selectedDateTime = new Date(event.detail.value).toLocaleDateString().replace('/', '.');
    },
    clickFilledBtn(){
      if(this.time === false && this.returnTo == '/tabs/record'){
        this.setDate(this.selectedDateTime);
        this.fetchTime();
      }
    },
  }
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