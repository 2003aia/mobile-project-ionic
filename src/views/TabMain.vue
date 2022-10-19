<template>
  <ion-page>
    <ion-content class="background">
      <div class="container">
        <div class="btn-wrapper">
          <Button class="btn" name="Новости" :grey="newsButton" router-link="/tabs/main" />
          <Button class="btn" name="Объявления" :grey="adsButton" router-link="/tabs/ads" />
        </div>

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

          <ion-infinite-scroll threshold="100px" id="infinite-scroll">
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
} from "@ionic/vue";
import Button from "../components/Button.vue";
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
    fetchMoreNews(e) {
      this.$data.page = this.$data.page + 1;
      this.$data.loading = true;
      this.fetchNews(this.$data.page).then(() => {
        this.$data.loading = false;
        for (let index = 0; index < this.news?.length; index++) {
          const element = this.news[index];
          this.$data.list.push(element);
        }
        e?.target?.complete();
      });
    },
  },
  computed: {
    news() {
      return this.$pinia.state.value?.news?.news?.data;
    },
  },
  mounted() {
    this.fetchMoreNews();
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
    IonSpinner,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  },
});
</script>

<style scoped>
.btn-wrapper {
  display: flex;
  width: inherit;
  flex-grow: 1;
  justify-content: space-between;
  background: #eaeaea;
  border-radius: 25px;
  flex-wrap: wrap;
  padding-right: 2px;
  position: sticky;
  z-index: 1000;
  top: 5px;
}

.btn {
  flex-grow: 1;
}

.container {
  padding: 15px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
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

ion-text p {
  color: black;
}
</style>
