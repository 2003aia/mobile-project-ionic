<template>
  <ion-page>
    <!--    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon :icon="menuOutline" />
          </ion-button>
        </ion-buttons>
        <ion-title class="">Back Button</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content>
      <ion-tabs @ionTabsDidChange="afterTabChange">
        <ion-router-outlet id="main"></ion-router-outlet>
        <ion-menu side="start" menu-id="first" content-id="main">
          <ion-content>
            <ion-toolbar> </ion-toolbar>
            <ion-list>
              <ion-item
                @click="
                  () => {
                    router.push('/tabs/profile');
                  }
                "
              >
                <ion-icon slot="start" :icon="personOutline"></ion-icon>
                <ion-text class="sub-title">Личный кабинет</ion-text>
              </ion-item>
              <ion-item @click="() => router.push('/appeals')">
                <ion-icon slot="start" :icon="paperPlaneOutline"></ion-icon>
                <ion-text class="sub-title">Мои обращения</ion-text>
              </ion-item>
              <ion-item router-link="/requests">
                <ion-icon slot="start" :icon="personOutline"></ion-icon>
                <ion-text class="sub-title">Мои заявки</ion-text>
              </ion-item>
              <ion-item @click="() => router.push('/notifications')">
                <ion-icon slot="start" :icon="notificationsOutline"></ion-icon>
                <ion-text class="sub-title">Уведомления</ion-text>
                <ion-badge slot="end">13</ion-badge>
              </ion-item>
              <ion-item router-link="/personalAccounts">
                <ion-icon slot="start" :icon="documentTextOutline"></ion-icon>
                <ion-text class="sub-title">Лицевые счета</ion-text>
              </ion-item>
              <ion-item @click="() => router.push('/contacts')">
                <ion-icon slot="start" :icon="callOutline"></ion-icon>
                <ion-text class="sub-title">Контакты</ion-text>
              </ion-item>
              <ion-item @click="() => router.push('/authPage')">
                <ion-icon slot="start" :icon="exitOutline"></ion-icon>
                <ion-text class="sub-title">Выйти</ion-text>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>

        <ion-tab-bar class="tabs" slot="bottom">
          <ion-tab-button tab="menu" @click="openMenu">
            <ion-img
              class="tabslogo"
              :src="
                selected !== 'menu'
                  ? require('@/assets/img/home.png')
                  : require('@/assets/img/active-home.png')
              "
            />

            <ion-label :class="{ active: selected === 'menu' }"
              >Быстрое меню</ion-label
            >
          </ion-tab-button>
          <!-- <ion-tab-button class="badge-wrapper" tab="main" href="/tabs/main">
            <ion-img
              class="tabslogo"
              :src="
                selected !== 'main'
                  ? require('@/assets/img/home.png')
                  : require('@/assets/img/active-home.png')
              "
            />
            <div class="badge"></div>

            <ion-label :class="{ active: selected === 'main' }"
              >Прочие</ion-label
            >
          </ion-tab-button> -->

          <ion-tab-button tab="services" href="/tabs/services">
            <ion-img
              class="tabslogo"
              :src="
                selected !== 'services'
                  ? require('@/assets/img/services.png')
                  : require('@/assets/img/active-services.png')
              "
            />

            <ion-label :class="{ active: selected === 'services' }"
              >Услуги</ion-label
            >
          </ion-tab-button>
          <ion-tab-button
            tab="personalAccounts"
            href="/tabs/personalAccounts"
          >
            <ion-img
              class="tabslogo"
              :src="
                selected !== 'personalAccounts'
                  ? require('@/assets/img/bills.png')
                  : require('@/assets/img/active-bills.png')
              "
            />
            <!-- <ion-icon :class="{svg: selected !== 'personalAccounts', svgActive: selected === 'personalAccounts'}" :icon="documentTextOutline"></ion-icon> -->

            <ion-label
              :class="{ active: selected === 'personalAccounts' }"
              >Лицевые счета</ion-label
            >
          </ion-tab-button>
          <ion-tab-button tab="record" href="/tabs/record">
            <ion-img
              class="tabslogo"
              :src="
                selected !== 'record'
                  ? require('@/assets/img/list.png')
                  : require('@/assets/img/active-list.png')
              "
            />

            <ion-label :class="{ active: selected === 'record' }"
              >Е-запись</ion-label
            >
          </ion-tab-button>

          <ion-tab-button class="badge-wrapper" tab="main" href="/tabs/main">
            <ion-img
              class="tabslogo"
              :src="
                selected !== 'main'
                  ? require('@/assets/img/dots.png')
                  : require('@/assets/img/active-dots.png')
              "
            />
            <!-- <div class="badge"></div> -->

            <ion-label :class="{ active: selected === 'main' }"
              >Прочие</ion-label
            >
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
  IonContent,
  IonList,
  IonItem,
  IonMenu,
  IonImg,
  IonText,
  IonIcon,
  menuController,
  IonBadge,
  IonToolbar,
  /*  IonToolbar,
  IonHeader,
  IonButtons,
  IonTitle, */
} from "@ionic/vue";
import { useRouter } from "vue-router";

import {
  paperPlaneOutline,
  personOutline,
  notificationsOutline,
  callOutline,
  exitOutline,
  documentTextOutline,
  menuOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "tabsPages",
  components: {
    IonRouterOutlet,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonBadge,
    IonToolbar,
    IonText,
    IonTabs,
    IonContent,
    IonImg,
    IonList,
    IonItem,
    IonMenu,
    IonPage,
    /*  IonHeader,
    IonTitle, */
  },
  setup() {
    const router = useRouter();
    return {
      router,
      paperPlaneOutline,
      personOutline,
      notificationsOutline,
      callOutline,
      exitOutline,
      documentTextOutline,
      menuOutline,
    };
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    afterTabChange: function (v) {
      this.selected = v.tab;
    },
    openMenu: function () {
      menuController.enable(true, "first");
      menuController.open("first");
    },
  },
});
</script>

<style scoped>
.menu-logo {
  width: 135px;
  height: 45px;
}
.tabs {
  border-radius: 10px 10px 0px 0px;
  border-top: 0;
  /* background: #EAEAEA; */
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
}
ion-tab-bar {
  background: #0378b4;
}
ion-item {
  --padding-start: 15px;
  --padding-end: 15px;
}
ion-label {
  line-height: 10px;
}
ion-icon {
  color: #0378b4;
  width: 20px;
  height: 20px;
  font-weight: bold;
  margin-right: 25px;
  --ionicon-stroke-width: 50px;
  /* color: #62d0ce; */
}

ion-tab-button {
  background: #ffffff;
  --padding-end: 0;
  --padding-start: 0;
}
.tabslogo {
  width: 20px;
  height: 22px;
}

.svg{
  width: 20px;
  height: 22px;
  color: #BDBDBD;
}

.svgActive{
  width: 20px;
  height: 22px;
  color: #62d0ce;
}

.badge-wrapper {
  position: relative;
}
.badge {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #f44336;
  top: 5px;
  right: 10px;

  position: absolute;
}

ion-badge {
  border-radius: 50%;
  color: #fff;
  background: #62d0ce;
  --padding-bottom: 2px;
  --padding-top: 2px;

  --padding-start: 5px;
  --padding-end: 5px;
}
ion-label {
  font-size: 12px;
  font-weight: 600;
  margin-top: 3px;
  /* word-break: break-all; */
}

.active {
  color: #62d0ce;
}

ion-tabs {
  background: #f5f5f5;
}
</style>
