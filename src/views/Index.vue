<template>

        <ion-menu side="start" menu-id="menu2" content-id="main2">
            <ion-content class="menu-background">
                <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img>

                <ion-toolbar class="menu-logo-wrapper">
                    <div class="menu-logo-wrapper">

                        <ion-img class="menu-logo" :src="require('../assets/img/logoSTNG.png')">
                        </ion-img>
                        <ion-icon @click="closeMenu" class="closeIcon" :icon="closeOutline" />
                    </div>

                </ion-toolbar>
                <div style="margin-top:20px">

                    <div v-for="el in sideMenu" :key="el">
                        <ion-item @click="
                            () => {
                                router.push(el.path);
                                el?.method()
                            }
                        " lines="none">
                            <ion-icon slot="start" :icon="el.icon"></ion-icon>
                            <ion-text class="sub-title">{{ el.name }}</ion-text>
                            <ion-badge slot="end">{{ el.number }}</ion-badge>
                        </ion-item>
                    </div>
                </div>

            </ion-content>
        </ion-menu>

        <ion-content>
            <ion-router-outlet id="main2"></ion-router-outlet>

        </ion-content>

</template>


<script>
import { defineComponent } from "vue";
import {
    IonRouterOutlet,
    IonContent,
    IonItem,
    IonMenu,
    IonImg,
    IonText,
    IonIcon,
    menuController,
    IonBadge,
    IonToolbar,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { Storage } from "@ionic/storage"
import {
    paperPlaneOutline,
    personOutline,
    notificationsOutline,
    callOutline,
    exitOutline,
    documentTextOutline,
    menuOutline,
    pencilOutline,
    videocamOutline,
    closeOutline,
} from "ionicons/icons";

export default defineComponent({
    name: "tabsPages",
    components: {
        IonRouterOutlet,
        IonIcon,
        IonBadge,

        IonToolbar,
        IonText,
        IonContent,
        IonImg,
        IonItem,
        IonMenu,

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
            videocamOutline,
            closeOutline,

        };
    },
    data() {
        return {
            selected: "",
            sideMenu: [
                {
                    name: "Личный кабинет",
                    path: "/tabs/profile",
                    icon: personOutline,
                    method: async function () {

                    }
                },
                {
                    name: "Мои обращения",
                    path: "/appeals",
                    icon: paperPlaneOutline,
                    method: async function () {

                    }
                },
                {
                    name: "Мои заявки",
                    path: "/requests",
                    icon: pencilOutline,
                    method: async function () {

                    }
                },
                {
                    name: "Мониторинг АГЗС",
                    path: "/cameras",
                    icon: videocamOutline,
                    method: async function () {

                    }
                },
                {
                    name: "Уведомления",
                    path: "/notifications",
                    icon: notificationsOutline,
                    number: this.$pinia.state.value?.profile?.pushResponseRead?.length,
                    method: async function () {

                    }
                },
                {
                    name: "Лицевые счета",
                    path: "/personalAccounts",
                    icon: documentTextOutline,
                    method: async function () {

                    }
                },
                {
                    name: "Контакты",
                    path: "/contacts",
                    icon: callOutline,
                    method: async function () {

                    }
                },
                {
                    name: "Выйти",
                    path: "/authPage",
                    icon: exitOutline,
                    method: async function () {
                        const store = new Storage()
                        await store.create()
                        const token = await store.get('token')
                        await store.set('token', JSON.stringify({ phone: JSON.parse(token).phone, }))
                    }
                },
            ],
        };
    },
    mounted() {

    },
    methods: {

        openMenu() {
            menuController.open("menu");
        },
        closeMenu() {
            menuController.close("menu");
        },
    },
});
</script>

<style>
.menu-logo-wrapper {
    --background: #0D3775;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 20px; */
}

.menu-logo {
    width: 135px;
    height: 45px;
    margin-left: 15px;
}

.menu-background {
    --background: linear-gradient(164.84deg, #1B7DB6 8.63%, #0F3C79 89.24%);

    position: relative;

}

.pattern {
    position: absolute;
    height: fit-content;
    width: 290px;
    bottom: 0;
    padding: 0 15px 0 0px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

.sub-title {
    color: #fff;
}

.closeIcon {
    width: 32px;
    height: 32px;
    color: #fff;
    margin-right: 15px;
    --ionicon-stroke-width: 20px;
}

.tabs {
    border-radius: 10px 10px 0px 0px;
    border-top: 0;
    /* background: #EAEAEA; */
    background: #fff;

    padding-top: 2px;
    padding-bottom: 2px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
}

ion-tab-bar {
    background: #0378b4;
}

ion-item {
    --padding-start: 15px;
    --padding-end: 15px;
    --padding-bottom: 10px;
    --background: rgba(255, 0, 0, 0);
}

ion-icon {
    color: #7AE6E4;
    width: 20px;
    height: 20px;
    font-weight: bold;
    margin-right: 25px;
    --ionicon-stroke-width: 50px;
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

.svg {
    width: 20px;
    height: 22px;
    color: #bdbdbd;
}

.svgActive {
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
    color: #0D3775;
    font-weight: 600;
    --padding-bottom: 2px;
    --padding-top: 2px;

    --padding-start: 5px;
    --padding-end: 5px;
}

ion-label {
    /* font-size: 5px; */
    font-weight: 600;
    margin-top: 3px;
    font-size: 12px;
    line-height: 12px;
    /* word-break: break-all; */
}

.active {
    color: #0378B4;
}

ion-toolbar {
    --background: #fff;
}

ion-tabs {
    background: #f5f5f500;

}

ion-list {
    padding: 0;
}
</style>