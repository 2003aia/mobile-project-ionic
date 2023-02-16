<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/tabs/profile')" />
    <Layout height="false" :method="editProfileHandler" :method2="
      () => {
        router.push('/tabs/newPassPage');
      }
    " :loading="loading" :filledBtn="'Сохранить'" title="Личный кабинет" :outlineBtn="'Изменить пароль'">
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Мои данные</p>
        </ion-text>
        <br>
        <div>
          <Input @updated="(item) => (surname = item)" :changeHandler="(e) => surname = e.target.value" :value="surname"
            name="Укажите фамилию" />
          <Input @updated="(item) => (name = item)" :changeHandler="(e) => name = e.target.value" :value="name"
            name="Укажите имя" />
          <Input @updated="(item) => (lastname = item)" :changeHandler="(e) => lastname = e.target.value"
            :value="lastname" name="Укажите отчество" />

          <Input type="email" @updated="(item) => (email = item)" name="Электронная почта" :value="email"
            :changeHandler="(e) => email = e.target.value" />

          <Input :mask="'###-###-###-##'" @updated="(item) => (snils = item)" name="СНИЛС" :value="snils"
            :changeHandler="(e) => snils = e.target.value" />


          <Input @updated="(item) => (issuedBy = item)" :changeHandler="(e) => issuedBy = e.target.value"
            :value="issuedBy" name="Паспорт выдан" />

          <Input :mask="'##.##.####'" @updated="(item) => (issuedDate = item)"
            :changeHandler="(e) => issuedDate = e.target.value" :value="issuedDate" name="Дата выдачи паспорта" />

          <Input :mask="'## ##'" @updated="(item) => (serial = item)" :changeHandler="(e) => serial = e.target.value"
            :value="serial" name="Серия паспорта" />

          <Input :mask="'######'" @updated="(item) => (number = item)" :changeHandler="(e) => number = e.target.value"
            :value="number" name="Номер паспорта" />
          <Input :mask="'###-###'" @updated="(item) => (codePodr = item)"
            :changeHandler="(e) => codePodr = e.target.value" :value="codePodr" name="Код подразделения" />
          <ion-item>
            <ion-text>
              <p class="sub-title">{{ login }}</p>
              <p>Контактный телефон</p>
            </ion-text>
          </ion-item>
        </div>
        <ion-text v-show="response">
          <p class="blue">Сохранено</p>
        </ion-text>
        <ion-text v-if="profileError?.response?.data?.error" class="error">
          {{ profileError?.response?.data?.error }}
        </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import {
  IonPage,
  IonText,
  IonItem,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import Back from "../components/Back.vue";
import { mapActions } from "pinia";
import { useProfileStore } from "../stores/profile";
import { Storage } from "@ionic/storage";

export default defineComponent({
  name: "profleEditPage",
  data() {
    return {
      codeSent: false,
      edit: false,
      name: '',
      lastname: '',
      surname: '',
      email: '',
      login: '',
      issuedBy: '',
      issuedDate: '',
      serial: '',
      number: '',
      snils: '',
      loading: false,
      codePodr: '',
      response: false
    };
  },
  components: {
    Input,
    Back,
    IonPage,
    Layout,
    IonItem,
    IonText,
  },

  methods: {
    ...mapActions(useProfileStore, ["editProfile"]),
    async editProfileHandler() {
      this.$data.loading = true

      const formData = {
        passport: {
          serial: this.$data.serial.replace(/\s/g, ''),
          number: this.$data.number,
          issuedBy: this.$data.issuedBy,
          issuedDate: this.$data.issuedDate,
          codePodr: this.$data.codePodr,
        },

        snils: this.$data.snils,
        name: this.$data.name,
        surname: this.$data.surname,
        lastname: this.$data.lastname,
        email: this.$data.email,
        consenttoemail: this.$data.email.length === 0 && this.profileData?.consenttoemail === true > 0 ? false : true,

      }
      this.editProfile(formData,).then(
        async () => {
          this.$data.loading = false
          const store = new Storage();
          await store.create();
          const profileData = await store.get('token')
          const data = {
            ...JSON.parse(profileData),
            name: this.$data.name,
            email: this.$data.email,

          };
          await store.set("token", JSON.stringify(data))
          this.$data.response = true
        }
      );
    }
  },
  ionViewDidLeave() {
    this.$data.response = false
  },
  ionViewDidEnter() {

    const storageHandler = async () => {
      const store = new Storage()
      await store.create()
      const token = await store.get('token')
      this.$data.login = JSON.parse(token).phone
      this.$data.email = this.profileData?.email
      this.$data.name = this.profileData?.name
      this.$data.surname = this.profileData?.surname
      this.$data.lastname = this.profileData?.lastname
      this.$data.snils = this.profileData?.snils
      this.$data.serial = this.profileData?.passport?.serial
      this.$data.number = this.profileData?.passport?.number
      this.$data.issuedBy = this.profileData?.passport?.issuedBy
      this.$data.issuedDate = this.profileData?.passport?.issuedDate
      this.$data.codePodr = this.profileData?.passport?.codePodr

    }
    storageHandler()

  },
  computed: {
    profileData() {
      return this.$pinia.state.value?.profile?.profileResponse?.data;
    },
    profileError() {
      return this.$pinia.state.value?.profile?.profileError;
    }
  },
  setup() {
    const router = useRouter();

    return {
      router,
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