<template>
  <ion-page>
    <Back title="Назад" />
    <Layout outlineBtn="." filledBtn="." title="Выбор времени">
      <template v-slot:main-content>
        <ion-text class="title">Выберите время</ion-text>

        <div v-if="availableTimeSlots?.length > 0">
          <ion-item v-for="time in availableTimeSlots" :key="time" router-link="/tabs/record" @click="selectTime(time?.time)">
            <ion-text class="sub-title">{{ time?.time }}</ion-text>
          </ion-item>
        </div>
        <div v-else>
          <ion-item lines="none" router-link="/tabs/record">
            <ion-text class="sub-title">Выберите вид услуг и дату записи</ion-text>
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
import { IonPage, IonText, IonItem } from "@ionic/vue";
import Back from "../components/Back.vue";
// import { storeToRefs } from "pinia";
// import { usePreEntryStore } from "../stores/preEntry";

export default defineComponent({
  name: "recordTime",
  components: {
    IonPage,
    Layout,
    IonItem,
    Back,
    IonText,
  },
  data() {
    return {
      availableTimeSlots: []
    }
  },
  setup() {
    const router = useRouter();
    // const preEntryStore = usePreEntryStore();
    // const { setTime } = usePreEntryStore();
    // const { entryAvailableTimes, entryTime } = storeToRefs(preEntryStore);
    return { router,  };
  },
  computed: {
    availableTimeSlotsData() {
      return this.$pinia.state.value.preEntry.availableTimeSlots
    },
    reserveData() {
      return this.$pinia.state.value.preEntry.reserveData
    }
  },
  ionViewDidEnter() {
    this.$pinia.state.value.preEntry.availableTimeSlots?.data?.forEach(element => {
      if (element?.is_available) {
        this.$data.availableTimeSlots.push(element)
      }
    });
  },
  ionViewDidLeave() {
    this.$data.availableTimeSlots = []
  },
  methods: {
    selectTime(time) {
      console.log(time, 'timetest')
      this.$pinia.state.value.preEntry.reserveData = { ...this.reserveData, slot: time }
    },
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-bottom: 10px;
  --inner-padding-end: 0;
  --inner-padding-top: 20px;
}
</style>
