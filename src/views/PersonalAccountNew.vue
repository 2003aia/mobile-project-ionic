<template>
  <ion-page>
    <Back />
    <!-- :btnSrc="'/personalAccountInfo'" -->
    <Layout height="false" outlineBtn="." :loading="loading" filledBtn="Добавить" title="Лицевой счёт"
      :method="addAccountHandler">
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Новый лицевой счёт</p>
        </ion-text>
        <Input :value="lc" @change="lcChange" name="Введите номер лицевого счета" />
        <Input :value="fio" @change="fioChange" name="Три буквы фамилии" />
        <!-- <ion-text
          ><p class="title ion-text-start">
            Введите данные владельца лицевого счета
          </p></ion-text
        >
        <Input name="Введите фамилию" />
        <Input name="Введите имя" />
         -->
        <ion-text v-if="response">
          <p>{{ response }}</p>
        </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Input from "../components/Input.vue";
import { IonPage, IonText } from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import { usePersonalAccountStore } from "../stores/personalAccount";
import { storeToRefs } from "pinia";
import { Storage } from '@ionic/storage'

export default defineComponent({
  name: "personalAccauntNewPage",
  components: {
    Back,
    IonPage,
    Layout,
    IonText,
    Input,
  },
  setup() {
    const router = useRouter();
    const { addAccountResponse, getAccountResponse, personalItemData } = storeToRefs(
      usePersonalAccountStore()
    );
    const { addAccount, getAccount, } = usePersonalAccountStore();
    const lc = ref("");
    const fio = ref("");

    const loading = ref(false);
    const lcChange = (e) => {
      lc.value = e.target.value;
    };
    const fioChange = (e) => {
      fio.value = e.target.value;
    };
    const response = ref('')
    const addAccountHandler = async () => {
      loading.value = true;
      const store = new Storage()
      await store.create()
      const token = await store.get('token')
      const lcArr = [{code: lc.value, fio: fio.value}]
      addAccount(JSON.parse(token).token, lcArr).then(() => {
        loading.value = false;
        if (addAccountResponse.value.error !== true) {
          getAccount().then(() => {

          const itemData = getAccountResponse?.value?.data?.filter((el) => el.code === lc.value)
          router.push("/tabs/personalAccountPayment");
          personalItemData.value = itemData[0]
        })
        }
        
        response.value = addAccountResponse.value.message
      });
    };
    return {
      lc,
      fio,
      loading,
      addAccountHandler,
      response,
      lcChange,
      fioChange,
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
    };
  },
});
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
</style>