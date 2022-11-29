<template>
  <ion-page>
    <Back :title="'Личный кабинет'" :btnSrc="() => router.push('/tabs/personalAccounts')" />
    <Layout height="false" :method="
      () => {
        router.push('/tabs/profileEdit');
      }
    " :method2="
  () => {
    router.push('/tabs/newPassPage');
  }
" :filledBtn="'Редактировать'" title="Личный кабинет" :outlineBtn="'Изменить пароль'">
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Мои данные</p>
        </ion-text>
        <div>
          <ion-item>
            <ion-text>
              <p v-if="profileData?.name" class="sub-title">{{ profileData?.name }}</p>
              <p v-else>Имя</p>
            </ion-text>
          </ion-item>


          <ion-item>
            <ion-text>
              <p class="sub-title" v-if="profileData?.email">{{ profileData?.email }}</p>
              <p v-else>Электронная почта</p>
            </ion-text>
          </ion-item>

          <ion-item>
            <ion-text>
              <p>
                Пасспорт
              </p>
            </ion-text>
          </ion-item>
          <ion-item v-show="profileData?.passport?.issuedBy">
            <ion-text>
              <p>Пасспорт выдан</p>
            </ion-text>

            <ion-text slot="end">
              <p class="sub-title">{{ profileData?.passport?.issuedBy }}</p>
            </ion-text>

          </ion-item>
          <ion-item v-show="profileData?.passport.issuedDate">
            <ion-text>
              <p>
                Дата выдачи пасспорта
              </p>
            </ion-text>
            <ion-text slot="end">
              <p class="sub-title">{{ profileData?.passport.issuedDate }}</p>
            </ion-text>
          </ion-item>


          <ion-item v-show="profileData?.passport?.number">
            <ion-text>
              <p>
                Номер пасспорта
              </p>
            </ion-text>
            <ion-text slot="end">
              <p class="sub-title">{{ profileData?.passport?.number }}</p>
            </ion-text>
          </ion-item>
          <ion-item v-show="profileData?.passport?.serial">
            <ion-text>
              <p>
                Серия пасспорта
              </p>
            </ion-text>
            <ion-text slot="end">
              <p class="sub-title">{{ profileData?.passport?.serial }}</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p class="sub-title" v-if="profileData?.snils">{{ profileData?.snils }}</p>
              <p v-else>СНИЛС</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p class="sub-title" v-if="login">{{ login }}</p>
              <p v-else>Контактный телефон</p>
            </ion-text>
          </ion-item>
          
          <ion-item class="check">
            <ion-checkbox slot="start" @update:modelValue="checkHandler(1, $event)" :modelValue="consentSMS">
            </ion-checkbox>
            <ion-text>

              <p>Согласие на получения смс</p>
            </ion-text>
          </ion-item>
          <ion-item class="check">
            <ion-checkbox :disabled="profileData?.email == '' ? true : false" slot="start" @update:modelValue="checkHandler(2, $event)" :modelValue="consentEMAIL">
            </ion-checkbox>
            <ion-text>

              <p>Согласие на получения квитанций на эл. почту</p>
            </ion-text>
          </ion-item>
        </div>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent, } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Back from "../components/Back.vue";
import {
  IonPage,
  IonText,
  IonItem,
  IonCheckbox
} from "@ionic/vue";
import { useProfileStore } from "../stores/profile";
import { mapActions } from "pinia";
import { Storage } from '@ionic/storage'

export default defineComponent({
  name: "profilePage",
  data() {
    return {
      codeSent: false,
      edit: false,
      login: '',
      consentSMS: false,
      consentEMAIL: false,

      // profileData: null,
    };
  },
  methods: {
    ...mapActions(useProfileStore, ["getProfile", "editProfile"]),
    checkHandler(v, e) {
      if (v === 1) {
        const formData = {
          ...this.profileData,
          consenttosms: e,
        }
        this.editProfile(formData)
      }
      if (v === 2) {
        const formData = {
          ...this.profileData,
          consenttoemail: e,
        }
        this.editProfile(formData)
      }

    }
  },
  computed: {
    profileData() {
      return this.$pinia.state.value?.profile?.profileResponse?.data;
    }
  },
  ionViewDidEnter() {
    const storageHandler = async () => {
      const store = new Storage()
      await store.create()
      const token = await store.get('token')
      this.$data.login = JSON.parse(token).phone

    }
    storageHandler()

    this.getProfile().then(() => {
      this.$data.consentSMS = this.profileData.consenttosms
      this.$data.consentEMAIL = this.profileData.consenttoemail
    })
  },
  components: {
    IonPage,
    Back,
    Layout,
    IonItem,
    IonText,
    IonCheckbox,
  },
  setup() {
    const router = useRouter();


    return { router, };
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