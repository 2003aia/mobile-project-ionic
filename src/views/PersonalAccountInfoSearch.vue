<template>
  <ion-page>
    <Back />
    <!-- :btnSrc="'/personalAccountInfo'" -->
    <!-- :method2="() => router.push('/personalAccountNew')" -->
    <Layout
      :method2="addAccount"
      height="false"
      outlineBtn="Добавить лицевой счёт"
      filledBtn="."
      :loading2="loading"
      title="Лицевой счёт"
    >
      <template v-slot:main-content>
        <ion-text
          ><p class="title ion-text-start">Узнать лицевой счет</p></ion-text
        >
        <ion-accordion-group ref="accordion">
          <ion-accordion value="first" :toggle-icon="caretDownSharp">
            <div class="input-wrapper" slot="header">
              <input
                type="text"
                v-model="country"
                class="input"
                placeholder="Введите населенный пункт по улусам"
              />
            </div>

            <div slot="content">
              <ion-item v-show="loading2">
                <ion-spinner name="bubbles" />
              </ion-item>
              <ion-list v-for="el in settlementsList" :key="el.s_id">
                <ion-item
                  v-on:click="fetchStreetsHandler(el.s_id, el.settlement)"
                >
                  <ion-text>{{ el.settlement }}</ion-text>
                </ion-item>
              </ion-list>
              <ion-item v-show="settlementsList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>

          <ion-accordion value="second" :toggle-icon="caretDownSharp">
            <div class="input-wrapper" slot="header">
              <input
                type="text"
                v-model="street"
                class="input"
                placeholder="Введите улицу"
              />
            </div>

            <div slot="content">
              <ion-item v-show="loading3">
                <ion-spinner name="bubbles" />
              </ion-item>
              <ion-list v-for="el in streetsList" :key="el.street">
                <ion-item v-on:click="fetchHousesHandler(el.ids, el.street)">
                  <ion-text>{{ el.street }}</ion-text>
                </ion-item>
              </ion-list>
              <ion-item v-show="streetsList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>
          <ion-accordion value="third" :toggle-icon="caretDownSharp">
            <div class="input-wrapper" slot="header">
              <input
                type="text"
                v-model="house"
                class="input"
                placeholder="Введите дом улицы"
              />
            </div>
            <div slot="content">
              <ion-item v-show="loading4">
                <ion-spinner name="bubbles" />
              </ion-item>
              <ion-list v-for="el in housesList" :key="el">
                <ion-item v-on:click="fetchLicsHandler(el?.house)">
                  <ion-text>{{ el?.house }}</ion-text>
                </ion-item>
              </ion-list>
              <ion-item v-show="housesList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>

          <ion-accordion
            v-show="apartmentsList?.length >= 0"
            value="fourth"
            :toggle-icon="caretDownSharp"
          >
            <div class="input-wrapper" slot="header">
              <input
                type="text"
                v-model="apartment"
                class="input"
                placeholder="Введите номер квартиры"
              />
            </div>
            <div slot="content">
              <ion-list v-for="el in apartmentsList" :key="el">
                <ion-item v-on:click="fetchLicsHandler2(el?.apartment)">
                  <ion-text>{{ el?.apartment }}</ion-text>
                </ion-item>
              </ion-list>
              <ion-item v-show="apartmentsList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <!-- {{ apartmentsList }} -->
        <div v-if="licsList?.length === 1">
          <ion-text v-for="el in licsList" :key="el">
            <ion-text v-for="el2 in el?.lics" :key="el2?.code">
              <p class="ion-text-start">Лицевой счет: {{ el2?.code }}</p>
              <p class="ion-text-start">
                Наименование лицевого счета: {{ el2?.name }}
              </p>
            </ion-text>
          </ion-text>
        </div>
        <div v-if="licsApartmentsList?.length === 1">
          <ion-text v-for="el in licsApartmentsList" :key="el">
            <ion-text v-for="el2 in el?.lics" :key="el2?.code">
              <p class="ion-text-start">Лицевой счет: {{ el2?.code }}</p>
              <p class="ion-text-start">
                Наименование лицевого счета: {{ el2?.name }}
              </p>
            </ion-text>
          </ion-text>
        </div>
        <ion-text v-show="response">
          <p>{{ response }}</p>
        </ion-text>
        <ion-text v-show="error">
          <p class="ion-text-start error">
            {{ error }}
          </p>
        </ion-text>
      </template>
    </Layout>
  </ion-page>
</template>

<script>
import { defineComponent /*  ref  */ } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import {
  IonPage,
  IonText,
  IonAccordionGroup,
  IonAccordion,
  IonList,
  IonItem,
  IonSpinner,
  // onIonViewDidEnter,
} from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import { caretDownSharp } from "ionicons/icons";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";

export default defineComponent({
  name: "personalAccauntInfoSearchPage",
  components: {
    IonAccordionGroup,
    IonAccordion,
    Back,
    IonPage,
    Layout,
    IonText,
    IonList,
    IonItem,
    IonSpinner,
  },
  data() {
    return {
      error: "",
      house: "",
      street: "",
      country: "",
      apartment: "",
      lc: "",
      loading: false,
      response: "",
      arrMapLics: [],
      loading2: true,
      loading3: false,
      loading4: false,
    };
  },
  computed: {
    settlementsList() {
      return this.$pinia.state.value?.personalAccount?.getSettlementsResponse?.data
        .flatMap((el) => el.settlements.flatMap((el) => el))
        .filter((el) => {
          return el.settlement
            .toLowerCase()
            .includes(this.$data.country.toLowerCase());
        });
    },
    streetsList() {
      return this.$pinia.state.value?.personalAccount?.getStreetsResponse?.data
        .flatMap((el) => el)
        .filter((el) => {
          return el.street
            .toLowerCase()
            .includes(this.$data.street.toLowerCase());
        });
    },
    housesList() {
      return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data
        .flatMap((el) => el)
        .filter((el) => {
          return el.house
            .toLowerCase()
            .includes(this.$data.house.toLowerCase());
        });
    },
    apartmentsList() {
      return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data
        .flatMap((el) => el?.apartments?.flatMap((el) => el))
        .filter((el) => {
          return el?.apartment
            ?.toLowerCase()
            .includes(this.$data.apartment.toLowerCase());
        });
    },
    licsApartmentsList() {
      return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data
        .flatMap((el) => el?.apartments?.flatMap((el) => el))
        .filter((el) => {
          return (
            el?.apartment?.toLowerCase() === this.$data.apartment.toLowerCase()
          );
        });
    },
    licsList() {
      return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data
        .flatMap((el) => el)
        .filter((el) => {
          return el.house.toLowerCase() === this.$data.house.toLowerCase();
        });
    },
  },
  mounted() {
    const getSettlements = new Promise((resolve) => {
      resolve(this.getSettlements());
    });

    getSettlements.then(() => (this.$data.loading2 = false));
  },
  methods: {
    ...mapActions(usePersonalAccountStore, [
      "getSettlements",
      "getStreets",
      "getHouses",
      "addAccount",
    ]),
    onFocusText: function () {
      console.log("focus");
      this.$refs.text.focus();
    },
    fetchStreetsHandler(s_id, settlement) {
      this.$data.loading3 = true;
      const getStreets = new Promise((resolve) => {
        resolve(this.getStreets(s_id));
      });
      getStreets.then(() => (this.$data.loading3 = false));
      this.$refs.accordion.$el.value = undefined;
      this.$data.country = settlement;
    },
    fetchHousesHandler(ids, street) {
      this.$data.loading4 = true;
      const getHouses = new Promise((resolve) => {
        resolve(this.getHouses(ids));
      });
      getHouses.then(() => (this.$data.loading4 = false));
      this.$refs.accordion.$el.value = undefined;

      this.$data.street = street;
    },
    fetchLicsHandler(street) {
      this.$refs.accordion.$el.value = undefined;

      this.$data.house = street;
    },
    fetchLicsHandler2(street) {
      this.$refs.accordion.$el.value = undefined;

      this.$data.apartment = street;
    },
    async addAccount() {
      this.$data.loading = true;
      const store = new Storage();
      await store.create();
      const token = await store.get("token");
      this.addAccount(JSON.parse(token).token, this.$data.lc).then(() => {
        this.$data.loading = false;
        this.$data.response =
          this.$pinia.state.value.personalAccount?.addAccountResponse?.message;
      });
      // this.$router.push("/personalAccountNew");
    },
  },

  setup() {
    const router = useRouter();

    return {
      router,
      pencilOutline,
      documentTextOutline,
      chevronForwardOutline,
      caretDownSharp,
    };
  },
});
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
ion-item {
  --inner-padding-start: 15px;
}
ion-list {
  margin-top: -10px;
  /* background: blue; */
}

.input {
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  border: solid 1px #e0e0e0;
  margin-bottom: 15px;
  --padding-start: 15px;
  --padding-bottom: 14px;
  --padding-top: 14px;
  --placeholder-color: #9e9e9e;
  --placeholder-font-weight: 400;
}

.input:focus {
  outline: none !important;
  border: solid 1px #62d0ce;
  caret-color: #000;
}
.input-wrapper {
  position: relative;
  width: 100%;
}
.input-text {
  z-index: 0;
  padding-left: 15px;
  position: absolute;
  left: 1px;
  top: 15px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
.inputTextBlue {
  color: #0378b4;
  font-weight: 700;
}

input:not(:placeholder-shown) + ion-text {
  display: none;
}

.dot {
  color: #62d0ce;
}
</style>
