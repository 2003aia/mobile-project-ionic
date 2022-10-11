<template>
  <ion-page>
    <ion-content class="background">
      <Back
        :btnSrc="
          () => {
            this.$pinia.state.value.news.for = '';
            this.$router.go(-1)
          }
        "
      />
      <ion-spinner class="loading" v-show="loading === true" name="bubbles" />

      <div v-show="loading === false">
        <div class="img" :class="{ imgHeight: !detail?.image }">
          <div class="img-wrapper">
            <ion-text>
              <p class="main-title">
                {{ detail?.name }}
              </p>
            </ion-text>
          </div>
          <ion-img v-show="detail?.image !== null" :src="detail?.image" />
        </div>

        <div class="container">
          <ion-text>
            <p class="sub-title" v-html="detail?.preview"></p>
          </ion-text>

          <ion-text>
            <p class="main-text" v-html="detail?.detail"></p>
          </ion-text>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { airplaneOutline } from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonText,
  IonImg,
  IonSpinner,
  onIonViewDidEnter,
} from "@ionic/vue";
import Back from "../components/Back.vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useNewsStore } from "../stores/news";
import { useNoticeStore } from "../stores/notice";

export default defineComponent({
  name: "infoMainPage",
  props: {
    backBtn: String,
    main_title: String,
    sub_title: String,
    text: String,
    test: String,
  },
  data() {
    return {
      params: String,
    };
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    let detail = ref(null);
    let loading = ref(true);
    const { newsDetail, idNews, forNews } = storeToRefs(useNewsStore());
    const { fetchNewsDetail } = useNewsStore();
    function fetchNewsDetails() {
      loading.value = true;
      fetchNewsDetail(idNews.value)
        .then(() => {
          detail.value = newsDetail.value.data;
        })
        .then(() => (loading.value = false));
    }
    function fetchNoticeDetails() {
      const { noticeDetail, idNotice } = storeToRefs(useNoticeStore());
      const { fetchNoticeDetail } = useNoticeStore();
      loading.value = true;
      fetchNoticeDetail(idNotice.value)
        .then(() => {
          detail.value = noticeDetail.value.data;
        })
        .then(() => (loading.value = false));
    }
    onIonViewDidEnter(() => {
      if (forNews.value === "news") {
        fetchNewsDetails();
      } else {
        fetchNoticeDetails();
      }
    });

    return {
      detail,
      router,
      route,
      loading,
      airplaneOutline,
    };
  },
  methods: {},
  components: {
    IonPage,
    IonContent,
    IonText,
    Back,
    IonImg,
    IonSpinner,
  },
});
</script>

<style scoped>
ion-img {
  width: 100%;
}

.mainTitleColor {
  color: rgb(0, 0, 0);
}

.img {
  position: relative;
}

.imgHeight {
  height: 300px;
  width: 100%;
}
.img-wrapper {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: #0000004d;
  padding: 15px;
}
.container {
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
}

.loading {
  background: #f5f5f5;
  margin-top: 20px;
}

.main-text {
  color: black;
}
</style>
