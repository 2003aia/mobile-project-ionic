<template>
  <ion-page>
    <Back />
    <Layout btnSrc="/registrPage" height="false" outlineBtn="." filledBtn="." title="Уведомления">
      <template v-slot:main-content>
        <ion-item v-show="loading">
          <ion-spinner name="bubbles"></ion-spinner>
        </ion-item>
        <ion-item v-show="pushList.length === 0" lines="none">
          <ion-text style="width: 100%" class="ion-text-center">
            <p style="width: 100%">Уведомлений нет</p>
          </ion-text>
        </ion-item>
        <div v-show="!loading" v-for="el in pushList" :key="el">
          <ion-item @click="openLink(el?.link)">
            <div>
              <ion-text>
                <p class="sub-title">
                  {{ el.title }}
                </p>
                <p class="text">{{ el.body }}</p>
              </ion-text>
              <div class="footer-item">
                <ion-text class="text">
                  {{ moment(el.date).format('yyyy.MM.DD HH:MM:SS') }}
                </ion-text>
              </div>
            </div>
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
import { IonPage, IonText, IonItem, IonSpinner, } from "@ionic/vue";
import Back from "../components/Back.vue";
import { mapActions } from "pinia";
import { useProfileStore } from '../stores/profile'
import moment from 'moment'
import { Storage } from "@ionic/storage";


export default defineComponent({
  name: "notificationsPage",
  components: {
    IonPage,
    Layout,
    Back,
    IonItem,
    IonText,
    IonSpinner,
  },
  methods: {
    ...mapActions(useProfileStore, ["getPush"]),
    openLink(link) {
      if (link?.length !== 0) {
        document.location.href = link
      }
    }
  },
  computed: {
    pushList() {
      return this.$pinia.state.value?.profile?.pushResponse?.data ? this.$pinia.state.value?.profile?.pushResponse?.data : []
    }
  },
  ionViewDidEnter() {
    this.$data.loading = true
    this.getPush().then(async () => {
      this.$data.loading = false
      const store = new Storage()
      await store.create()
      // await store.set('notifications', JSON.stringify(this.pushList))
    })
  },
  data() {
    return {
      loading: false,
    };
  },
  setup() {
    const router = useRouter();
    return { router, moment };
  },
});
</script>

<style scoped>
.time {
  margin-left: 20px;
}

.text {
  margin-bottom: 5px;
  margin-top: 0px;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.sub-title {
  margin-top: 10px;
  margin-bottom: 10px;
}

.footer-item {
  display: flex;
  flex-wrap: wrap;
}
</style>