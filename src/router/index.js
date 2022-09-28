import { createRouter, /* createWebHistory, */ createWebHashHistory } from "@ionic/vue-router";
import AuthPage from "../views/Auth.vue";
import RegistrPage from "../views/Registr.vue";
import TermsPage from "../views/Terms.vue";
import PassRecoveryPage from "../views/PassRecovery.vue";
import NewPassPage from "../views/NewPass.vue";
import Tabs from "../views/Tabs.vue";

const routes = [
  {
    path: "/",
    redirect: "/authPage",
  },
  {
    path: "/authPage",
    component: AuthPage,
    name: "authPage",
  },
  {
    path: "/registrPage",
    component: RegistrPage,
    name: "registrPage",
  },
  {
    path: "/passRecoveryPage",
    component: PassRecoveryPage,
    name: "passRecoveryPage",
  },
  {
    path: "/termsPage",
    component: TermsPage,
    name: "termsPage",
  },
  {
    path: "/newPassPage",
    component: NewPassPage,
    name: "newPassPage",
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/main",
      },
      {
        path: "main",

        component: () => import("@/views/TabMain.vue"),
      },
      {
        path: "main/newsInfo",
        name: "newsPage",

        component: () => import("@/views/InfoMain.vue"),
      },
      {
        path: "ads",
        component: () => import("@/views/TabAds.vue"),
      },
      {
        path: "ads/adInfo",
        name: "adPage",
        component: () => import("@/views/InfoMain.vue"),
      },
      {
        path: "services",
        component: () => import("@/views/TabServices.vue"),
      },
      {
        path: "servicesOne",
        component: () => import("@/views/ServicesOne.vue"),
      },
      {
        path: "servicesCallInspector",
        name: "servicesCallInspector",

        component: () => import("@/views/ServicesCallInspector.vue"),
      },
      {
        path: "servicesOneSelect",
        name: "servicesOneSelect",
        component: () => import("@/views/ServicesOneSelect.vue"),
      },
      {
        path: "servicesGasContract",
        component: () => import("@/views/ServicesGasContract.vue"),
      },
      {
        path: "servicesGasContractCheckBox",
        component: () => import("@/views/ServicesGasContractCheckbox.vue"),
      },
      {
        path: "servicesGasContractFiles",
        component: () => import("@/views/ServicesGasContractFiles.vue"),
      },
      {
        path: "servicesTechAlliance",
        component: () => import("@/views/ServicesTechAlliance.vue"),
      },
      {
        path: "servicesTechAllianceChoose",
        component: () => import("@/views/ServicesTechAllianceChoose.vue"),
      },
      {
        path: "servicesTechAllianceFiles",
        component: () => import("@/views/ServicesTechAllianceFiles.vue"),
      },
      {
        path: "servicesTechAllianceSelect",
        name: "servicesTechAllianceSelect",
        component: () => import("@/views/ServicesTechAllianceSelect.vue"),
      },
      {
        path: "servicesRequestGas",
        component: () => import("@/views/ServicesRequestGas.vue"),
      },
      {
        path: "servicesRequestCalc",
        component: () => import("@/views/ServicesRequestCalc.vue"),
      },
      {
        path: "servicesRequestFiles",
        component: () => import("@/views/ServicesRequestFiles.vue"),
      },
      {
        path: "servicesRecovery",
        component: () => import("@/views/ServicesRecovery.vue"),
      },
      {
        path: "servicesRecoveryTerms",
        component: () => import("@/views/ServicesRecoveryTerms.vue"),
      },
      {
        path: "servicesRecoveryFiles",
        component: () => import("@/views/ServicesRecoveryFiles.vue"),
      },
      {
        path: "servicesTracking",
        component: () => import("@/views/ServicesTracking.vue"),
      },
      {
        path: "servicesTrackingTerms",
        component: () => import("@/views/ServicesTrackingTerms.vue"),
      },
      {
        path: "servicesTrackingFiles",
        component: () => import("@/views/ServicesTrackingFiles.vue"),
      },
      {
        path: "personalAccounts",
        props: {
          tabs: true
        },
        component: () => import("@/views/PersonalAccounts.vue"),
      },
      {
        path: "record",
        component: () => import("@/views/TabRecord.vue"),
      },
      {
        path: "recordSelect",
        component: () => import("@/views/RecordSelect.vue"),
      },
      {
        path: "date",
        props: {
          time: false,
        },
        component: () => import("@/views/Date.vue"),
      },
      {
        path: "time",
        component: () => import("@/views/RecordTime.vue"),
        props: {
          time: true,
        },
      },
      {
        path: "profile",
        component: () => import("@/views/Profile.vue"),
      },
    ],
  },
  {
    path: "/profile",
    name: "profile",

    component: () => import("@/views/Profile.vue"),
  },
  {
    name: "profileEdit",

    path: "/profileEdit",
    component: () => import("@/views/ProfileEdit.vue"),
  },
  {
    name: "profileSend",
    path: "/profileSend",
    component: () => import("@/views/ProfileSend.vue"),
  },
  {
    name: "contacts",
    path: "/contacts",
    component: () => import("@/views/Contacts.vue"),
  },
  {
    name: "notificatons",
    path: "/notifications",
    component: () => import("@/views/Notifications.vue"),
  },
  {
    name: "appeals",
    path: "/appeals",
    component: () => import("@/views/Appeals.vue"),
  },
  {
    name: "appealsMessages",
    path: "/appealsMessages",
    component: () => import("@/views/AppealsMessages.vue"),
  },
  {
    name: "personalAccounts",
    path: "/personalAccounts",
    component: () => import("@/views/PersonalAccounts.vue"),
  },
  {
    name: "personalAccountNew",
    path: "/personalAccountNew",
    component: () => import("@/views/PersonalAccountNew.vue"),
  },
  {
    name: "personalAccountInfoSearch",
    path: "/personalAccountInfoSearch",
    component: () => import("@/views/PersonalAccountInfoSearch.vue"),
  },
  {
    name: "personalAccountInfo",
    path: "/personalAccountInfo",
    component: () => import("@/views/PersonalAccountInfo.vue"),
  },
  {
    name: "personalAccountPayment",
    path: "/personalAccountPayment",
    component: () => import("@/views/PersonalAccountPayment.vue"),
  },
  {
    name: "personalAccountPaymentHistory",
    path: "/personalAccountPaymentHistory",
    component: () => import("@/views/PersonalAccountPaymentHistory.vue"),
  },
  {
    name: "personalAccountIndication",
    path: "/personalAccountIndication",
    component: () => import("@/views/PersonalAccountIndication.vue"),
  },
  {
    name: "personalAccountPay",
    path: "/personalAccountPay",
    component: () => import("@/views/PersonalAccountPay.vue"),
  },
  {
    name: "requests",
    path: "/requests",
    component: () => import("@/views/Requests.vue"),
  },
  {
    name: "requestsInfo",
    path: "/requestsInfo",
    component: () => import("@/views/RequestsInfo.vue"),
  },
  {
    name: "selectPage",
    path: "/selectPage",
    component: () => import("@/views/Select.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
