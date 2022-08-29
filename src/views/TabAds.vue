<template>
  <ion-page>
    <ion-content class="background">
      <div class="container">
        <div class="button-wrapper">
          <Button
            class="btn"
            name="Новости"
            :grey="newsButton"
            v-on:click="newsHandler"
            router-link="/tabs/main"
          />
          <Button
            class="btn"
            name="Объявления"
            :grey="adsButton"
            v-on:click="adsHandler"
            router-link="/tabs/ads"
          />
        </div>

        <ion-text class="main-title">
          <p class="main-title">Объявления</p>
        </ion-text>
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
                  params: { id: el.id, for: 'notice' },
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
        <ion-spinner name="bubbles" v-else />
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
  onIonViewDidEnter,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSpinner,
} from "@ionic/vue";
import Button from "../components/Button.vue";
import NewsItem from "../components/NewsItem.vue";
import { useRouter } from "vue-router";
import { useNoticeStore } from "../stores/notice";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "tabAdsPage",
  data() {
    return {
      adsButton: false,
      newsButton: true,
      ads: [
        {
          img: "",

          main_title: "Якутия. Еженедельный дайджест новостей газификации",
          sub_title:
            "Главные новости АО «Сахатранснефтегаз» за неделю с 9 по 15 мая – в еженедельном дайджесте газификации. ",
          text: "Lorem1",
          id: 1,
          date: "16.05.2022",
        },
        {
          img: "https://studio.everypixel.com/ru/blog/wp-content/uploads/2015/03/Funny-Stock-Unfinished-Business-6.jpg",

          main_title: "Якутия. Еженедельный дайджест новостей газификации",
          sub_title:
            "Главные новости АО «Сахатранснефтегаз» за неделю с 9 по 15 мая – в еженедельном дайджесте газификации. ",
          text: "Lorem2",
          id: 2,
          date: "16.05.2022",
        },
        {
          main_title: "Якутия. Еженедельный дайджест новостей газификации",
          img: "https://studio.everypixel.com/ru/blog/wp-content/uploads/2015/03/Funny-Stock-Unfinished-Business-6.jpg",

          sub_title:
            "Главные новости АО «Сахатранснефтегаз» за неделю с 9 по 15 мая – в еженедельном дайджесте газификации. ",
          text: "Lorem3",
          id: 3,
          date: "16.05.2022",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    const { fetchNotice } = useNoticeStore();
    const { notice } = storeToRefs(useNoticeStore());
    let page = 0;
    let list = ref([]);
    let loading = ref(false);
    const fetchMoreNotice = (e) => {
      page = page + 1;
      loading.value = true;
      fetchNotice(page).then(() => {
        loading.value = false;
        for (let index = 0; index < notice.value.data.length; index++) {
          const element = notice.value.data[index];
          list.value.push(element);
        }

        e?.target?.complete();
        console.log(notice.value, "//test fetching notice");
      });
    };
    onIonViewDidEnter(() => {
      fetchMoreNotice();
    });
    return {
      router,
      list,
      loading,
      fetchMoreNotice,
      airplaneOutline,
    };
  },
  methods: {
    newsHandler: function () {
      console.log("mews");
    },
    adsHandler: function () {
      this.adsButton = false;
      this.newsButton = true;

      console.log("ads");
    },
  },
  components: {
    IonPage,
    IonContent,
    Button,
    NewsItem,
    IonText,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSpinner,
  },
});
</script>

<style scoped>
.button-wrapper {
  display: flex;
  width: 100%;
  flex-grow: 1;
  background: #eaeaea;
  border-radius: 25px;
  flex-wrap: wrap;
  position: sticky;
  z-index: 1000;
  top: 5px;
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
