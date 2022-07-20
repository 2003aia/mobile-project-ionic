<template>
  <ion-page>
    <ion-content>
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
        <NewsItem
          v-for="ad in ads"
          :key="ad.id"
          :main_title="ad.main_title"
          :sub_title="ad.sub_title"
          :text="ad.text"
          :date="ad.date"
          @click="
            () =>
              router.push({
                name: 'adPage',
                params: ad,
              })
          "
          :imgsrc="ad.img"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { airplaneOutline } from "ionicons/icons";
import { IonPage, IonContent, IonText } from "@ionic/vue";
import Button from "../components/Button.vue";
import NewsItem from "../components/NewsItem.vue";
import { useRouter } from "vue-router";

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
    return {
      router,
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
  components: { IonPage, IonContent, Button, NewsItem, IonText },
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
