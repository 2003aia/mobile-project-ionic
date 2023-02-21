<template>
  <ion-page>
    <Back />
    <Layout :btnSrc="'/tabs/services'" height="false" outlineBtn="." filledBtn="Создать заявку" title="Мои заявки">

      <template v-slot:main-content>
        <ion-item v-show="loading" lines="none">
          <ion-spinner name="bubbles">
          </ion-spinner>
        </ion-item>



        <div v-show="!loading" v-for="el in listServices" :key="el" class="wrapper">
          <div @click="infoHandler(el)">

            <ion-item lines="none">
              <ion-text class="sub-title ion-text-start">
                {{ el.service }}
              </ion-text>
            </ion-item>


            <ion-item>
              <ion-text class="text-blue">
                {{ el.date.substring(0, 10) }}
              </ion-text>
            </ion-item>
          </div>
        </div>

        <ion-item style="width: 100%" v-show="listServices?.length === 0" lines="none">
          <ion-text style="width: 100%" class="ion-text-center">Заявок нет</ion-text>
        </ion-item>

      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import {
  IonPage,
  IonText,
  IonItem,
  IonSpinner,
} from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import { useServicesStore } from "../stores/services";
import { mapActions } from "pinia";

export default defineComponent({
  name: "myRequestsPage",
  components: {
    Back,
    IonItem,
    IonPage,
    Layout,
    IonText,
    IonSpinner,
  },
  computed: {
    listServices() {
      return this.$pinia.state.value?.services?.listServicesResponse?.data;
    },
  },
  methods: {
    ...mapActions(useServicesStore, ["getListServices"]),
    infoHandler(el) {
      this.$pinia.state.value.services.requestsInfo = el
      this.$router.push('/tabs/requestsInfo')
    }
  },
  mounted() {
    this.$data.loading = true
    this.getListServices().then(() => {
      this.$data.loading = false
      // console.log(this.listServices, 'test')
    })
  },
  data() {
    return {
      loading: false,
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
    };
  },
});
</script>

<style scoped>
.wrapper {
  width: 100%;
  /*   min-width: 400px;
  overflow: hidden;
  overflow: auto; */
}

.sub-title {
  margin-top: 10px;
}

.text {
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>
