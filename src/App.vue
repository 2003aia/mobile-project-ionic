<template>
  <ion-app>

    <ion-router-outlet id="main2" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, /* isPlatform, */ } from "@ionic/vue";
import { defineComponent } from "vue";
import { Storage } from "@ionic/storage";
import { PushNotifications } from '@capacitor/push-notifications'
import { FCM } from "@capacitor-community/fcm"
import { StatusBar } from '@capacitor/status-bar';
import axios from 'axios'

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  data() {
    return {
    }
  },
  mounted() {
    const registerFcm = async () => {

      const store = new Storage()
      await store.create()

      let tokenStorage = ''
      const getToken = async () => {
        tokenStorage = await store.get('token')
      }
      getToken()

      if (JSON.parse(tokenStorage)?.token) {
        await PushNotifications.addListener('registration', (token) => {
          if (token?.value.length !== 0) {
            console.log('Registration token: ', token.value);
            axios.post('https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Profile', {
              token: JSON.parse(token)?.token,
              fcmToken: token.value
            })
          }
        })
      }
    }

    const registerNotifications = async () => {

      let permStatus = await PushNotifications.checkPermissions();
      console.log('permStatus', JSON.stringify(permStatus))
      if (permStatus.receive === "granted") {
        console.log('addListenersblock code started')

        await PushNotifications.addListener('pushNotificationReceived', notification => {

          console.log('Push notification received: ', JSON.stringify(notification));
        });

        await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
          this.$router.push("/tabs/notifications");
          console.log('Push notification action performed', JSON.stringify(notification));
        });
      }
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
    }

    const getDeliveredNotifications = async () => {

      const notificationList = await PushNotifications.getDeliveredNotifications();
      console.log('delivered notifications', JSON.stringify(notificationList));

    }
    const setStatusBarStyle = async () => {

      await StatusBar.setBackgroundColor({ color: '#1F3766' });

    };
    // if (isPlatform('ios') || isPlatform('android')) {
    registerNotifications()
    registerFcm()
    getDeliveredNotifications()
    setStatusBarStyle()

    // }

    const storageHandler = async () => {
      const store = new Storage();
      await store.create();
      const token = await store.get("token");
      if (JSON.parse(token)?.token) {
        this.$router.push("/tabs/personalAccounts");
      } else {
        this.$router.push("/authPage")
      }
    };
    storageHandler();
  },
  methods: {

  },
  setup() {
    return {

    };
  },
});
</script>
