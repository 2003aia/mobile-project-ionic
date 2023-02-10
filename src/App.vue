<template>
  <ion-app>
    <ion-modal :is-open="versionUpdate" mode="ios">
      <div class="modal-header"><ion-icon @click="cancel2" :icon="closeOutline"></ion-icon></div>
      <div class="modal">

        <ion-text>
          <p class="ion-text-center title" style="margin-top: 0px; margin-bottom: 30px; color: black">Уважаемый
            пользователь! Вышла новая версия мобильного приложения. Пожалуйста, обновите приложение.</p>
        </ion-text>
      </div>

    </ion-modal>
    <ion-router-outlet id="main2" v-show="!techWorks" />
    <div v-show="techWorks">
      <Layout :filledBtn="'.'" :outlineBtn="'.'" title="Технические работы">
        <template v-slot:main-content>
          <ion-text class="title">
            <br>
            Ведутся технические работы
            <br>
            <br>
          </ion-text>
        </template>
      </Layout>
    </div>

  </ion-app>
</template>

<script>
import {
  IonApp, IonRouterOutlet, /* isPlatform,  */ IonText, IonModal,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Storage } from "@ionic/storage";
import { PushNotifications } from '@capacitor/push-notifications'
import { FCM } from "@capacitor-community/fcm"
import { StatusBar } from '@capacitor/status-bar';
import { App } from "@capacitor/app"
import axios from 'axios'
// import { useRouter } from "vue-router";
import { useProfileStore } from "./stores/profile";
import { mapActions } from "pinia";
import Layout from './components/Layout.vue'
import {
  closeOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    Layout,
    IonText,
    IonModal,
    IonIcon,
  },
  data() {
    return {
      techWorks: false,
      versionUpdate: false,
    }
  },
  mounted() {
    const storageHandler = async () => {
      const store = new Storage();
      await store.create();
      const token = await store.get("token");



      if (JSON.parse(token)?.token) {
        this.getProfile().then(() => {
          if (this.profileError || this.authError || this.registrError) {
            this.$data.techWorks = true
          } else {
            this.$data.techWorks = false
          }
        })

        this.$router.push("/tabs/personalAccounts")
      } else {
        this.$router.push("/authPage")
      }
    };
    storageHandler().then(() => {
      const registerFcm = async () => {

        const store = new Storage()
        await store.create()

        let tokenStorage = null
        let fcmToken = ''
        const getToken = async () => {
          tokenStorage = await store.get('token')
          fcmToken = await store.get('fcmToken')
        }
        getToken()

        if (JSON.parse(tokenStorage)?.token) {

          if (fcmToken?.length > 0) {
            axios.post('https://fhd.aostng.ru/vesta/hs/API_STNG/V2/Profile', {
              token: JSON.parse(tokenStorage)?.token,
              fcmToken: fcmToken,
            })
          }
          await PushNotifications.addListener('registration', (token) => {
            if (token?.value.length !== 0) {
              console.log('Registration token: ', token.value);
              axios.post('https://fhd.aostng.ru/vesta/hs/API_STNG/V2/Profile', {
                token: JSON.parse(tokenStorage)?.token,
                fcmToken: token.value
              })
            }
          })
        }
      }

      const registerNotifications = async () => {

        let permStatus = await PushNotifications.checkPermissions();
        console.log('permStatus', JSON.stringify(permStatus))

        if (permStatus.receive !== 'granted') {
          await PushNotifications.requestPermissions().then(async () => {
            await PushNotifications.register().then(() => {
              FCM.subscribeTo({ topic: "all" })
                .then((r) => console.log(`subscribed to topic`, JSON.stringify(r)))
                .catch((err) => console.log(err));
            })

          })
        }
        if (permStatus.receive === 'prompt') {
          await PushNotifications.requestPermissions().then(async () => {
            let permStatus = await PushNotifications.checkPermissions();
            if (permStatus.receive === 'granted')
              await PushNotifications.register()
            FCM.subscribeTo({ topic: "all" })
              .then((r) => console.log(`subscribed to topic`, JSON.stringify(r)))
              .catch((err) => console.log(err));

          })
        }
        if (permStatus.receive === "granted") {
          await PushNotifications.addListener('pushNotificationReceived', notification => {

            console.log('Push notification received: ', JSON.stringify(notification));
          });

          await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
            this.$router.push("/tabs/notifications");
            console.log('Push notification action performed', JSON.stringify(notification));
          });
        }
      }

      const getDeliveredNotifications = async () => {

        const notificationList = await PushNotifications.getDeliveredNotifications();
        console.log('delivered notifications', JSON.stringify(notificationList));

      }
      const setStatusBarStyle = async () => {

        await StatusBar.setBackgroundColor({ color: '#1F3766' });

      };
      const checkAppVersion = () => {

        App.getInfo().then((data) => {
          this.getVersion().then(() => {
            if (data.version?.toString()?.slice(-2) < this.versionData?.toString()?.slice(-2)) {
              this.$data.versionUpdate = true
            }
          })
        })
      }
      checkAppVersion()
      registerNotifications()
      registerFcm()
      getDeliveredNotifications()
      setStatusBarStyle()
    })
  },
  computed: {
    profileError() {
      return this.$pinia.state.value?.profile?.profileError;
    },
    authData() {
      return this.$pinia.state.value?.login?.registrError;
    },
    registrData() {
      return this.$pinia.state.value?.login?.authError;
    },
    versionData() {
      return this.$pinia.state.value?.profile?.versionResponse?.data;
    }
  },
  methods: {
    ...mapActions(useProfileStore, ["getProfile", "getVersion"]),
    cancel2() {
      this.$data.versionUpdate = false
    },
  },
  setup() {
    return {
      closeOutline,
    };
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
  --padding-start: 0;
  --padding-bottom: 0px;
  --inner-padding-bottom: 0px;
  --inner-padding-start: 0;
  --inner-padding-end: 0;
}

ion-text {
  margin-left: 0;
}

p {
  margin: 0;
}
</style>
