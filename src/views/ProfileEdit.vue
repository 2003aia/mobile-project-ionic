<template>
  <ion-page>
    <Back />
    <Layout
      height="false"
      :method="editProfileHandler"
      :method2="
        () => {
          router.push('/profileSend');
        }
      "
      :filledBtn="'Сохранить'"
      title="Личный кабинет"
      :outlineBtn="'Изменить пароль'"
    >
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Мои данные</p>
        </ion-text>
        <ion-list>
          <ion-text><p class="sub-title">Имя</p> </ion-text>
          <Input
            @updated="(item) => (name = item)"
            :changeHandler="nameChange"
            :value="name"
            name="Укажите имя"
          />
          <!-- <ion-text><p class="sub-title">Фамилия</p> </ion-text>
          <Input
            name="Укажите фамилию"
            :value="surname"
            :changeHandler="surnameChange"
          /> -->
          <!--  <ion-text><p class="sub-title">Отчество</p> </ion-text>
          <Input name="Укажите отчество" /> -->

          <!-- <ion-item> -->
          <ion-text>
            <p class="sub-title">{{ data.email }}</p>
            <!--  <p>Электронная почта</p> -->
          </ion-text>
          <Input
            name="Электронная почта"
            :value="email"
            :changeHandler="emailChange"
          />
          <!--  </ion-item> -->
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ login }}</p>
              <p>Контактный телефон</p>
            </ion-text>
          </ion-item>
        </ion-list>
        <ion-text v-if="profileError?.response?.data?.error" class="error">
          {{ profileError?.response?.data?.error }}
        </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import {
  onIonViewDidEnter,
  IonPage,
  IonText,
  IonItem,
  IonList,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import Back from "../components/Back.vue";
import { storeToRefs } from "pinia";
import { useProfileStore } from "../stores/profile";
import { Storage } from "@ionic/storage";

export default defineComponent({
  name: "profleEditPage",
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
    Input,
    Back,
    IonPage,
    IonList,
    Layout,
    IonItem,
    IonText,
  },
  setup() {
    const router = useRouter();
    const { profileResponse, profileError } = storeToRefs(useProfileStore());
    const { editProfile } = useProfileStore();
    let name = ref("");
    const surname = ref("");
    const email = ref("");
    const login = ref("");
    let profileData = null;

    const storageHandler = async () => {
      const store = new Storage();
      await store.create();
      profileData = await store.get("token");
      let profileDataParsed = JSON.parse(profileData);
      name.value = profileDataParsed?.name;
      /* surname.value = profileDataParsed?.lastName; */
      email.value = profileDataParsed?.email;
      login.value = profileDataParsed?.phone;
    };

    const editProfileHandler = async () => {
      editProfile(JSON.parse(profileData)?.token, name.value, email.value).then(
        async () => {
          const store = new Storage();
          await store.create();
          await store
            .set("token", {
              /* ...profileData, */
              name: name.value,
              email: email.value,
            })
            .then(async () => {
              const store = new Storage();
              await store.create();
              profileData = await store.get("token");
              /* let profileDataParsed = JSON.parse(profileData);
              name.value = profileDataParsed?.name;
              email.value = profileDataParsed?.email;
              login.value = profileDataParsed?.phone; */
              console.log(profileData, "test");
            });
        }
      );
    };

    const nameChange = (e) => {
      name.value = e.target.value;
    };
    const surnameChange = (e) => {
      surname.value = e.target.value;
    };
    const emailChange = (e) => {
      email.value = e.target.value;
    };

    onIonViewDidEnter(() => {
      storageHandler();
    });
    return {
      profileResponse,
      profileError,
      router,
      editProfileHandler,
      nameChange,
      surnameChange,
      emailChange,
      surname,
      name,
      email,
      login,
    };
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