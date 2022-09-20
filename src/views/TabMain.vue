<template>
  <ion-page>
    <ion-content class="background">
      <div class="container">
        <div class="btn-wrapper">
          <Button
            class="btn"
            name="Новости"
            :grey="newsButton"
            router-link="/tabs/main"
          />
          <Button
            class="btn"
            name="Объявления"
            :grey="adsButton"
            router-link="/tabs/ads"
          />
        </div>

        <ion-text class="main-title">
          <p class="main-title">Новости</p>
        </ion-text>
        <ion-spinner name="bubbles" v-if="loading === true" />
        <div v-if="loading === false">
          <NewsItem
            v-for="el in list"
            :key="el?.id"
            :date="el?.date"
            :main_title="el?.name"
            :sub_title="el?.preview"
            :text="el?.preview"
            @click="
              () => {
                router.push({
                  name: 'newsPage',
                  params: { id: el.id, for: 'news' },
                });
              }
            "
            :imgsrc="el?.image"
          />

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
import { defineComponent, ref } from "vue";
import { airplaneOutline } from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonText,
  onIonViewWillEnter,
  IonSpinner,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";
import Button from "../components/Button.vue";
import NewsItem from "../components/NewsItem.vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useNewsStore } from "../stores/news";

export default defineComponent({
  name: "tabMainPage",
  data() {
    return {
      adsButton: true,
      newsButton: false,
      detail: null,
      list23: [
        {
          image: "",

          name: "Якутия. Еженедельный дайджест новостей газификации",
          preview:
            "Главные новости АО «Сахатранснефтегаз» за неделю с 9 по 15 мая – в еженедельном дайджесте газификации. ",
          detail: "Lorem1",
          id: 1,
          date: "16.05.2022",
        },
        {
          image:
            "https://studio.everypixel.com/ru/blog/wp-content/uploads/2015/03/Funny-Stock-Unfinished-Business-6.jpg",

          name: "Якутия. Еженедельный дайджест новостей газификации",
          preview:
            "Главные новости АО «Сахатранснефтегаз» за неделю с 9 по 15 мая – в еженедельном дайджесте газификации. ",
          detail: "Lorem2",
          id: 2,
          date: "16.05.2022",
        },
        {
          name: "Якутия. Еженедельный дайджест новостей газификации",
          image:
            "https://studio.everypixel.com/ru/blog/wp-content/uploads/2015/03/Funny-Stock-Unfinished-Business-6.jpg",

          preview:
            "Главные новости АО «Сахатранснефтегаз» за неделю с 9 по 15 мая – в еженедельном дайджесте газификации. ",
          detail: "Lorem3",
          id: 3,
          date: "16.05.2022",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    const { news } = storeToRefs(useNewsStore());
    const { fetchNews } = useNewsStore();
    let list = ref([]);
    let loading = ref(false);
    let page = 0;

    function fetchMoreNews(e) {
      page = page + 1;
      loading.value = true;
      fetchNews(page).then(() => {
        loading.value = false;
        for (let index = 0; index < news.value.data.length; index++) {
          const element = news.value.data[index];
          list.value.push(element);
        }
        e?.target?.complete();
      });
    }

    onIonViewWillEnter(() => {
      fetchMoreNews();
    });
    

    return {
      loading,
      list,
      router,
      fetchMoreNews,
      airplaneOutline,
    };
  },

  methods: {},
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
