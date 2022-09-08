<template>
  <ion-page>
    <Back />
    <Layout
      height="false"
      :method="
        () => {
          router.push('/profileEdit');
        }
      "
      :method2="
        () => {
          router.push('/profileSend');
        }
      "
      :filledBtn="'Редактировать'"
      title="Личный кабинет"
      :outlineBtn="'Изменить пароль'"
    >
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Мои данные</p>
        </ion-text>
        <ion-list>
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ profileResponse?.data?.firstName }}</p>
              <p>Имя</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ profileResponse?.data?.lastName }}</p>
              <p>Фамилия</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ data.secondname }}</p>
              <p>Отчество</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ profileResponse?.data?.email }}</p>
              <p>Электронная почта</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ profileResponse?.data?.login }}</p>
              <p>Контактный телефон</p>
            </ion-text>
          </ion-item>
        </ion-list>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Back from "../components/Back.vue";
import {
  IonPage,
  IonText,
  IonItem,
  IonList,
  onIonViewWillEnter,
} from "@ionic/vue";
import { Storage } from "@ionic/storage";
import { storeToRefs } from "pinia";
import { useProfileStore } from "../stores/profile";

export default defineComponent({
  name: "profilePage",
  data() {
    return {
      codeSent: false,
      edit: false,
      data: {
        name: "Иван",
        surname: "Иванов",
        secondname: "Иванович",

        email: "Pochta@mail.ru",
        phone: "+7(996)-915-88-31",
      },
    };
  },
  components: {
    IonPage,
    Back,
    Layout,
    IonList,
    IonItem,
    IonText,
  },
  setup() {
    const router = useRouter();
    const store = new Storage();
    const { profileResponse, profileError } = storeToRefs(useProfileStore());
    const { getProfile } = useProfileStore();

    const fetchProfileHandler = async () => {
      await store.create();
      const value = await store.get("token");
      getProfile(JSON.parse(value)?.token).then(async () => {
        await store.set(
          "profileData",
          JSON.stringify(profileResponse.value.data)
        );
      });
    };
    onIonViewWillEnter(() => {
      fetchProfileHandler();
    });

    return { router, profileResponse, profileError };
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
  --padding-bottom: 0px;
  --inner-padding-bottom: 0px;
}
</style>