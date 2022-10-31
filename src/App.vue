<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, isPlatform } from "@ionic/vue";
import { defineComponent } from "vue";
import { Storage } from "@ionic/storage";
import { PushNotifications } from '@capacitor/push-notifications'
import { FCM } from "@capacitor-community/fcm"
import { StatusBar } from '@capacitor/status-bar';

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
    const addListeners = async () => {
      FCM.subscribeTo({ topic: "all" })
        .then((r) => console.log(`subscribed to topic`, JSON.stringify(r)))
        .catch((err) => console.log(err));

      await PushNotifications.addListener('registration', token => {
        console.log('Registration token: ', token.value);
      });

      await PushNotifications.addListener('registrationError', err => {
        console.log('Registration error: ', err.error);
      });

      await PushNotifications.addListener('pushNotificationReceived', notification => {
        console.log('Push notification received: ', JSON.stringify(notification));
      });

      await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
        console.log('Push notification action performed', notification.actionId, notification.inputValue);
      });
    }

    const registerNotifications = async () => {
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== 'granted') {
        console.log('User denied permissions!');
      }

      await PushNotifications.register();
    }

    const getDeliveredNotifications = async () => {
      const notificationList = await PushNotifications.getDeliveredNotifications();
      console.log('delivered notifications', JSON.stringify(notificationList));
    }
    const setStatusBarStyle = async () => {
      await StatusBar.setBackgroundColor({ color: '#1F3766' });
    };
    if (isPlatform('ios') && isPlatform('android')) {
      addListeners()
      registerNotifications()
      getDeliveredNotifications()
      setStatusBarStyle()
    }


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
  setup() {
    return {};
  },
});
</script>
