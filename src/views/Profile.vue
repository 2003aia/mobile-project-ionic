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
" id3="open-modal2" :filledBtn="'Редактировать'" title="Личный кабинет" :outlineBtn="'Изменить пароль'"
      :filledBtn2="'Удалить аккаунт'">
      <template v-slot:main-content>
        <ion-modal ref="modal2" trigger="open-modal2" @willDismiss="onWillDismiss" mode="ios">
          <div class="modal-header"><ion-icon @click="cancel" :icon="closeOutline"></ion-icon></div>
          <div class="modal">

            <ion-text>
              <p class="title">Удаление аккаунта</p>
              <p class="ion-text-center" style="margin-top: 20px; color: black">Вы точно хотите удалить аккаунт?</p>
            </ion-text>
            <div class="confirmWrapper">
              <ion-button @click="cancel" fill="clear">НЕТ</ion-button>
              <ion-button @click="deleteHandler" v-show="!loading" fill="clear"
                style="color:red; border: solid red 1px;margin-left: 10px;">ДА</ion-button>
              <ion-button v-show="loading" fill="clear"
                style="color:red; border: solid red 1px; margin-left: 10px;"><ion-spinner name="bubbles" /></ion-button>

            </div>
          </div>

        </ion-modal>
        <ion-modal ref="modal3" :is-open="isOpen" mode="ios" @willDismiss="onWillDismiss2">
          <div class="modal-header"><ion-icon @click="cancel2()" :icon="closeOutline"></ion-icon></div>
          <div class="modal">

            <!-- <ion-text>
              <p class="ion-text-center" style="margin-top: 0px; margin-bottom: 30px; color: black">Заполните
                электронную почту</p>
            </ion-text> -->
            <Input name="Электронная почта" :value="email" :changeHandler="(e) => email = e.target.value" />
              <ion-text v-show="this.profileData?.email.length > 0"><p class="blue">Принято.</p></ion-text>
            <div class="confirmWrapper">
              <ion-button style="color:red; border: solid red 1px;margin-right: 10px;" @click="cancel2" fill="clear">ОТМЕНА</ion-button>

              <ion-button :disabled="!email" @click="editHandler" v-show="!loadingEmail"
                fill="clear">ГОТОВО</ion-button>
              <ion-button v-show="loadingEmail" fill="clear"><ion-spinner name="bubbles" /></ion-button>
            </div>


          </div>

        </ion-modal>
        <ion-text>
          <p class="title ion-text-start">Мои данные</p>
        </ion-text>
        <div>
          <ion-item>
            <ion-text>
              <p v-if="profileData?.surname" class="sub-title">{{ profileData?.surname }}</p>
              <p v-else>Фамилия</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p v-if="profileData?.name" class="sub-title">{{ profileData?.name }}</p>
              <p v-else>Имя</p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-text>
              <p v-if="profileData?.lastname" class="sub-title">{{ profileData?.lastname }}</p>
              <p v-else>Отчество</p>
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
                Данные паспорта
              </p>
            </ion-text>
          </ion-item>
          <ion-item v-show="profileData?.passport?.issuedBy">
            <ion-text>
              <p>Паспорт выдан</p>
            </ion-text>

            <ion-text slot="end">
              <p class="sub-title">{{ profileData?.passport?.issuedBy }}</p>
            </ion-text>

          </ion-item>
          <ion-item v-show="profileData?.passport.issuedDate">
            <ion-text>
              <p>
                Дата выдачи паспорта
              </p>
            </ion-text>
            <ion-text slot="end">
              <p class="sub-title">{{ profileData?.passport.issuedDate }}</p>
            </ion-text>
          </ion-item>


          <ion-item v-show="profileData?.passport?.number">
            <ion-text>
              <p>
                Номер паспорта
              </p>
            </ion-text>
            <ion-text slot="end">
              <p class="sub-title">{{ profileData?.passport?.number }}</p>
            </ion-text>
          </ion-item>
          <ion-item v-show="profileData?.passport?.serial">
            <ion-text>
              <p>
                Серия паспорта
              </p>
            </ion-text>
            <ion-text slot="end">
              <p class="sub-title">{{ profileData?.passport?.serial }}</p>
            </ion-text>
          </ion-item>
          <ion-item v-show="profileData?.snils">
            <ion-text>
              СНИЛС
            </ion-text>
            <ion-text slot="end" class="sub-title">
              {{ profileData?.snils }}
            </ion-text>
          </ion-item>
          <ion-item v-show="profileData?.passport?.codePodr">
            <ion-text>
              Код подразделения
            </ion-text>
            <ion-text slot="end" class="sub-title">
              {{ profileData?.passport?.codePodr }}
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
            <ion-checkbox id="open-modal3" slot="start" @update:modelValue="checkHandler(2, $event)"
              :modelValue="consentEMAIL">
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
  IonCheckbox,
  IonModal,
  IonIcon,
  IonButton,
  IonSpinner,
} from "@ionic/vue";
import { useProfileStore } from "../stores/profile";
import { mapActions } from "pinia";
import { Storage } from '@ionic/storage'

import {
  closeOutline,
} from "ionicons/icons";
import Input from '../components/Input.vue'
export default defineComponent({
  name: "profilePage",
  data() {
    return {
      codeSent: false,
      edit: false,
      login: '',
      consentSMS: false,
      consentEMAIL: false,
      loading: false,
      loadingEmail: false,
      isOpen: false,
      email: '',
     
    };
  },
  methods: {
    ...mapActions(useProfileStore, ["getProfile", "editProfile", "deleteAcc"]),
    checkHandler(v, e) {
      if (v === 1) {
        const formData = {
          consenttosms: e,
        }
        this.editProfile(formData)
      }
      if (v === 2) {

        if (this.profileData?.email.length === 0 && e === true) {
          this.$data.isOpen = true
          this.$data.consentEMAIL = false
          // e = false
          this.$data.isEmail = e
        }
        if (e === false) {
          this.$data.isOpen = false
          const formData = {
            consenttoemail: e,
          }
          this.$data.isOpen = false
          this.editProfile(formData)
        }
        if (this.profileData?.email.length > 0 && e === true) {
          const formData = {
            consenttoemail: e,
          }
          this.$data.isOpen = false
          this.editProfile(formData)
        }

      }
    },
    onWillDismiss(ev) {
      if (ev.detail.role === 'confirm') {
        this.message = `Hello, ${ev.detail.data}!`;
      }
    },
    onWillDismiss2() {
      if (this.profileData?.email.length === 0) {
        this.$data.consentEMAIL = null
      } else {
        this.$data.consentEMAIL = true
      }
    },
    setOpen(isOpen) {
      this.$data.isOpen = isOpen;
    },
    cancel() {
      this.$refs.modal2.$el.dismiss(null, 'cancel');
    },
    cancel2() {
      this.$data.isOpen = false
      this.$refs.modal3.$el.dismiss(null, 'cancel');

    },
    editHandler() {

      this.$data.loadingEmail = true
      const formData = {
        email: this.$data.email,
        consenttoemail: true,
      }
      this.editProfile(formData).then(() => {
        this.$data.loadingEmail = false
        // this.$data.isOpen = false
        this.getProfile()
      })
    },
    deleteHandler() {
      this.$data.loading = true

      this.deleteAcc().then(async () => {
        this.$data.loading = false
        this.$refs.modal2.$el.dismiss(null, 'cancel');
        this.$router.push('/authPage')
        const store = new Storage()
        await store.create()
        const token = await store.get('token')
        await store.set('token', JSON.stringify({ phone: JSON.parse(token).phone, }))
      })
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
      this.$data.consentSMS = this.profileData?.consenttosms
      this.$data.consentEMAIL = this.profileData?.consenttoemail
    })
  },
  components: {
    IonPage,
    Back,
    Layout,
    IonItem,
    IonText,
    IonCheckbox,
    IonModal,
    IonIcon,
    Input,
    IonButton,
    IonSpinner,
  },
  setup() {
    const router = useRouter();


    return { router, closeOutline, };
  },
});
</script>

<style scoped>
.modal-header {
  padding: 10px;
}

.modal-header ion-icon {
  font-size: 20px;
  margin-left: auto;
}

ion-modal {
  --height: fit-content;
  --width: 80%;
  --border-radius: 16px;
}

.modal {
  padding: 15px;
}

.confirmWrapper {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.confirmWrapper ion-button {
  --border-radius: 25px;
  height: 45px;
  width: 100%;
  border-radius: 25px;
  border: solid 1px #0378b4;
  color: #0378b4;
}


ion-item {
  --padding-start: 0;
  --padding-bottom: 0px;
  --inner-padding-bottom: 0px;
  --inner-padding-start: 0;
  --inner-padding-end: 0;
}

ion-text {
  margin-left: 0;
}

p {
  margin: 0;
}
</style>