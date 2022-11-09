<template>
  <ion-page>
    <Back :noBack="true" :logo="true" />
    <ion-content class="background">
      <div class="header-wrapper">
        <ion-img class="pattern" :src="require('../assets/img/pattern2.png')"></ion-img>
        <div class="btn-wrapper">
          <Button class="btn" :lightBlue="true" name="Новости" :grey="newsButton" router-link="/tabs/main" />
          <Button class="btn" name="Объявления" :grey="adsButton" router-link="/tabs/ads" />
        </div>
      </div>

      <div class="container">


        <ion-text class="main-title">
          <p class="main-title">Новости</p>
        </ion-text>
        <ion-spinner name="bubbles" v-if="loading === true" />
        <div v-if="loading === false">
          <NewsItem v-for="el in list" :key="el?.id" :date="el?.date" :main_title="el?.name" :sub_title="el?.preview"
            :text="el?.preview" @click="
              () => {
                this.$pinia.state.value.news.forNews = 'news'
                this.$pinia.state.value.news.idNews = el.id
                router.push({
                  name: 'newsPage',
                  /*  params: { id: el.id, for: 'news' }, */
                });
              }
            " :imgsrc="el?.image" />

          <ion-infinite-scroll @ionInfinite="fetchMoreNews($event)" threshold="100px" id="infinite-scroll">
            <ion-infinite-scroll-content loading-spinner="bubbles">
            </ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </div>
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
  IonSpinner,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonImg,
} from "@ionic/vue";
import Button from "../components/Button.vue";
import Back from "../components/Back.vue";
import NewsItem from "../components/NewsItem.vue";
import { useRouter } from "vue-router";
import { mapActions } from "pinia";
import { useNewsStore } from "../stores/news";

export default defineComponent({
  name: "tabMainPage",
  data() {
    return {
      adsButton: true,
      newsButton: false,
      detail: null,
      list: [],
      page: 0,
      loading: false,
    };
  },
  methods: {
    ...mapActions(useNewsStore, ["fetchNews"]),
    async fetchMoreNews(e) {
      this.$data.page = this.$data.page + 1;
      this.fetchNews(this.$data.page).then(() => {
        if (this.news?.length < 10) {
          e.target.disabled = true;
        } else {
          for (let index = 0; index < this.news?.length; index++) {
            const element = this.news[index];
            this.$data.list.push(element);
          }
          e?.target?.complete();
        }


      });
    },
  },
  computed: {
    news() {
      return this.$pinia.state.value?.news?.news?.data;
    },
  },
  mounted() {
    this.$data.loading = true;

    this.fetchMoreNews().then(() => {
      this.$data.loading = false
    })
  },
  setup() {
    const router = useRouter();

    return {
      router,
      airplaneOutline,
    };
  },
  components: {
    IonPage,
    IonContent,
    Button,
    NewsItem,
    IonText,
    IonImg,
    Back,
    IonSpinner,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  },
});
</script>

<style scoped>
.background {
  --background: #eaeaea;

}

.header-wrapper {
  position: relative;
  padding: 15px;
  height: 200px;
  background: linear-gradient(156.39deg, #1B80B9 7.75%, #0E3977 100.99%);
}

.btn-wrapper {
  display: flex;
  width: inherit;
  flex-grow: 1;
  justify-content: space-between;
  background: #268FCC;
  border-radius: 25px;
  flex-wrap: wrap;
  padding-right: 2px;
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

.btn {
  flex-grow: 1;
}

.container {
  padding: 0 15px 15px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff00;
  top: -140px;
}

@media screen and (max-width: 280px) {
  .container {
    top: -80px;
  }
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
