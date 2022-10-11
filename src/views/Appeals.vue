<template>
  <ion-page>
    <Back
      @click="() => (checkStatus = false)"
      :btnSrc="
        () => {
          if (checkStatus === false) router.push('/tabs/main');
        }
      "
    />
    <Layout
      height="false"
      outlineBtn="."
      :method="() => (checkStatus = false)"
      :filledBtn="'.'"
      :title="'Обращение'"
    >
      <template v-slot:main-content>
        <div v-show="appealsListResponse?.data.length !== 0 || appealsListResponse?.data !== undefined">
          <div v-for="el in appealsListResponse?.data" :key="el.title">
            <div
              class="item"
              @click="
                () => {
                  this.$pinia.state.value.appeals.appealsItem = el;

                  router.push({ name: 'appealsMessages' });
                }
              "
            >
              <div class="item-header">
                <ion-text class="title ion-text-start">№{{ el.id }}</ion-text>
                <ion-badge>
                  {{ el.messages }}
                </ion-badge>
              </div>
              <ion-item>
                <ion-text class="text time">{{ el.date_create }}</ion-text>
              </ion-item>
            </div>
          </div>
        </div>
        <!--  <ion-item lines="none" v-show="loading">
          <ion-spinner name="bubbles"></ion-spinner>
        </ion-item> -->
        <div
          @click="
            () => {
              this.$pinia.state.value.appeals.newAppeal = true;
              router.push({
                name: 'appealsMessages',
              });
            }
          "
          v-show="appealsListResponse?.data === undefined || appealsListResponse?.data.length == 0"
        >
          <ion-text class="sub-title ion-text-start"> Обращение </ion-text>
          <ion-item>
            <ion-img
              slot="start"
              class="icon-start"
              :src="require('@/assets/img/send.png')"
            ></ion-img>
            <!-- <ion-icon class="icon-start" slot="start" :icon="paperPlaneOutline"></ion-icon> -->
            <ion-text class="sub-title">Создать новое обращение</ion-text>
            <ion-icon
              class="icon-end"
              slot="end"
              :icon="chevronForwardOutline"
            ></ion-icon>
          </ion-item>
        </div>
      </template>
      <ion-spinner name="bubbles"></ion-spinner>

      <!-- <div v-else class="loading">

		</div> -->
      <template v-slot:content v-if="appealsListResponse?.data !== undefined || ![]">
        <LayoutBox>
          <template v-slot:content>
            <div
              @click="
                () => {
                  this.$pinia.state.value.appeals.newAppeal = true;
                  router.push({
                    name: 'appealsMessages',
                  });
                }
              "
            >
              <ion-text class="sub-title ion-text-start"> Обращение </ion-text>
              <ion-item>
                <ion-img
                  slot="start"
                  class="icon-start"
                  :src="require('@/assets/img/send.png')"
                ></ion-img>
                <!-- <ion-icon class="icon-start" slot="start" :icon="paperPlaneOutline"></ion-icon> -->
                <ion-text class="sub-title">Создать новое обращение</ion-text>
                <ion-icon
                  class="icon-end"
                  slot="end"
                  :icon="chevronForwardOutline"
                ></ion-icon>
              </ion-item>
            </div>
          </template>
        </LayoutBox>
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import { paperPlaneOutline, chevronForwardOutline } from "ionicons/icons";
import {
  IonPage,
  IonText,
  IonItem,
  IonBadge,
  IonSpinner,
  IonIcon,
  IonImg,
  onIonViewDidEnter,
} from "@ionic/vue";
import { useAppealsStore } from "../stores/appeals";
import { storeToRefs } from "pinia";
import { Storage } from "@ionic/storage";

export default defineComponent({
  name: "appealsPage",
  components: {
    IonPage,
    Layout,
    IonText,
    IonItem,
    Back,
    IonBadge,
    IonIcon,
    IonImg,
    IonSpinner,
    LayoutBox,
  },
  data() {
    return {
      checkStatus: false,
      data2: [
        {
          title: "№3432",
          date: "14.04.3434",
          time: "12.23.43",
          notifications: "23",
        },
        {
          title: "№3432",
          date: "14.04.3434",
          time: "12.23.43",
          notifications: "23",
        },
        {
          title: "№3432",
          date: "14.04.3434",
          time: "12.23.43",
          notifications: "23",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    const store = new Storage();
    const loading = ref(false);
    const { getAppealsList } = useAppealsStore();
    const { appealsListResponse } = storeToRefs(useAppealsStore());
    const fetchAppealsHandler = async () => {
      await store.create();
      loading.value = true;
      await getAppealsList().then(async () => {
        await store.create();
        loading.value = false;
      });
    };
    onIonViewDidEnter(() => {
      fetchAppealsHandler();
    });

    return {
      router,
      paperPlaneOutline,
      chevronForwardOutline,
      appealsListResponse,
      loading,
      /* fetchAppealsHandler, */
    };
  },
});
</script>

<style scoped>
ion-item {
  --padding-bottom: 0;
}
.footer-item {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.item {
  width: 100%;
}
.item-header {
  display: flex;
  justify-content: space-between;
}

.icon-start {
  width: 32px;
  height: 32px;
  margin-right: 15px;
}
.icon-end {
  width: 24px;
  height: 24px;
  margin-left: 0px;
  color: #0378b4;
}
.text {
  margin-left: 0;
}
.time {
  margin-right: 20px;
}
.item-header .title {
  margin-bottom: 0;
}
.title{
  margin-top: 10px;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
