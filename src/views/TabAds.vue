<template>
  <ion-page>
    <Back :logo="true" :noBack="true" />
    <ion-content class="background">
      <div class="header-wrapper">
        <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img>
        <div class="button-wrapper">
          <Button class="btn" name="Новости" :grey="newsButton" router-link="/tabs/main" />
          <Button :lightBlue="true" class="btn" name="Объявления" :grey="adsButton" v-on:click="adsHandler"
            router-link="/tabs/ads" />
        </div>
      </div>

      <div class="container">


        <ion-text class="main-title">
          <p class="main-title">Объявления</p>
        </ion-text>
        <div v-if="loading === false">
          <NewsItem v-for="el in list" :key="el?.id" :date="el?.date" :main_title="el?.name" :sub_title="el?.preview"
            :text="el?.preview" @click="
              () => {
                this.$pinia.state.value.notice.idNotice = el.id;
                this.$pinia.state.value.news.forNews = 'notice'
                router.push({
                  name: 'newsPage',
                  /*  params: { id: el.id, for: 'notice' }, */
                });
              }
            " :imgsrc="el?.image" />
          <ion-infinite-scroll threshold="100px" id="infinite-scroll">
            <ion-infinite-scroll-content loading-spinner="bubbles">
            </ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </div>
        <ion-spinner name="bubbles" v-else />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { airplaneOutline } from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonText,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSpinner,
  IonImg,
} from "@ionic/vue";
import Button from "../components/Button.vue";
import NewsItem from "../components/NewsItem.vue";
import { useRouter } from "vue-router";
import { useNoticeStore } from "../stores/notice";
import { mapActions } from "pinia";
import Back from "../components/Back.vue";


export default defineComponent({
  name: "tabAdsPage",
  data() {
    return {
      adsButton: false,
      newsButton: true,
      list: [],
      loading: false,
      page: 0,
    };
  },

  mounted() {
    this.fetchMoreNotice();
  },
  computed: {
    notice() {
      return this.$pinia.state.value?.notice?.notice?.data;
    },
  },
  setup() {
    const router = useRouter();

    return {
      router,

      airplaneOutline,
    };
  },
  methods: {
    ...mapActions(useNoticeStore, ["fetchNotice"]),
    fetchMoreNotice(e) {
      this.$data.page = this.$data.page + 1;
      this.$data.loading = true;
      this.fetchNotice(this.$data.page).then(() => {
        this.$data.loading = false;
        for (let index = 0; index < this.notice?.length; index++) {
          const element = this.notice[index];
          this.$data.list.push(element);
        }
        e?.target?.complete();
      });
    },
    adsHandler: function () {
      this.adsButton = false;
      this.newsButton = true;
    },
  },
  components: {
    IonPage,
    IonContent,
    Button,
    NewsItem,
    IonText,
    IonInfiniteScroll,
    Back,
    IonInfiniteScrollContent,
    IonSpinner,
    IonImg,

  },
});
</script>

<style scoped>
.background {
  --background: #eaeaea;
}

.button-wrapper {
  display: flex;
  width: 100%;
  flex-grow: 1;
  background: #268FCC;
  border-radius: 25px;
  flex-wrap: wrap;
  position: sticky;
  z-index: 1000;
  top: 5px;
}

.pattern {
  position: absolute;
  height: fit-content;
  width: 350px;
  bottom: 0;
  padding: 0 15px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.header-wrapper {
  position: relative;
  padding: 15px;
  height: 200px;
  background: linear-gradient(156.39deg, #1B80B9 7.75%, #0E3977 100.99%);
}

.btn {
  flex-grow: 1;
}

.container {
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff00;
  top: -150px;
}
@media screen and (max-width: 280px) {
  .container {
    top: -100px;
  }
}
ion-button {
  --background: l#EAEAEA;

  --border-radius: 25px;
  height: 50px;
  display: flex;
  flex-direction: column;
}

.name {
  text-align: center;
  color: rgb(0, 0, 0);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.main-title {
  margin-bottom: 5px;
}
</style>
