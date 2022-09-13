<template>
  <ion-page>
    <Back :btnSrc="()=>router.push('/tabs/')"/>
    <Layout
      height="false"
      :method="
        () => {
          router.push('/profileEdit');
        }
      "
      :method2="
        () => {
          router.push('/newPassPage');
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
              <p class="sub-title">{{ profileData?.name }}</p>
              <p>Имя</p>
            </ion-text>
          </ion-item>
          <!-- <ion-item>
            <ion-text>
              <p class="sub-title">{{ profileData?.data?.lastName }}</p>
              <p>Фамилия</p>
            </ion-text>
          </ion-item> -->
          <!-- <ion-item>
            <ion-text>
              <p class="sub-title">{{ data.secondname }}</p>
              <p>Отчество</p>
            </ion-text>
          </ion-item> -->
          <code>
            {{ myResolvedValue }}
          </code>
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ profileData?.email }}</p>
              <p>Электронная почта</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ profileData?.phone }}</p>
              <p>Контактный телефон</p>
            </ion-text>
          </ion-item>
        </ion-list>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Back from "../components/Back.vue";
import {
  IonPage,
  IonText,
  IonItem,
  IonList,
  onIonViewDidEnter,
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
    // const { getProfile } = useProfileStore();
    const profileData = ref("");
    const fetchProfileHandler = async () => {
      await store.create();
      const value = await store.get("token");
      profileData.value = JSON.parse(value);

      console.log(profileData.value, "test");
      if (profileResponse.value) {
        await store.create();
        const value = await store.get("token");
        profileData.value = JSON.parse(value);

        console.log(profileData.value, "test22");
      }
      /*  getProfile(JSON.parse(value)?.token).then(async () => {
        await store.set(
          "profileData",
          JSON.stringify(profileResponse.value.data)
        );
      }); */
    };
    onIonViewDidEnter(() => {
      fetchProfileHandler();
    });

    return { router, profileResponse, profileData, profileError };
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