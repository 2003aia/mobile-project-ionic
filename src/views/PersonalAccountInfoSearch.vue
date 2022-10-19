<template>
  <ion-page>
    <Back />
    <!-- :btnSrc="'/personalAccountInfo'" -->
    <!-- :method2="() => router.push('/personalAccountNew')" -->
    <Layout :method2="addAccountHandler" height="false" outlineBtn="Добавить лицевой счёт" filledBtn="."
      :loading2="loading" title="Лицевой счёт">
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Узнать лицевой счет</p>
        </ion-text>
        <ion-accordion-group ref="accordion">
          <ion-accordion value="first" :toggle-icon="caretDownSharp">
            <div class="input-wrapper" slot="header">
              <input type="text" v-model="country" class="input" placeholder="Введите населенный пункт" />
            </div>

            <div slot="content">
              <ion-item v-show="loading2">
                <ion-spinner name="bubbles" />
              </ion-item>
              <div v-for="el in ulusList" :key="el.ulusId">
                <ion-item :lines="ulusList[ulusList?.length - 1]?.ulus === el?.ulus && 'none'"
                  v-on:click="fetchSettlementsHandler(el.ulusId, el.ulus)">
                  <ion-text>{{ el.ulus }}</ion-text>
                </ion-item>
              </div>
              <ion-item lines="none" v-show="ulusList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>
          <ion-accordion value="second" :toggle-icon="caretDownSharp">
            <div class="input-wrapper" slot="header">
              <input type="text" v-model="settlement" class="input" placeholder="Введите населенный пункт" />
            </div>

            <div slot="content">
              <div v-for="el in settlementsList" :key="el.s_id">
                <ion-item :lines="settlementsList[settlementsList?.length - 1]?.settlement === el?.settlement && 'none'"
                  v-on:click="fetchStreetsHandler(el.s_id, el.settlement)">
                  <ion-text>{{ el.settlement }}</ion-text>
                </ion-item>
              </div>
              <ion-item lines="none" v-show="settlementsList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>
          <ion-accordion value="third" :toggle-icon="caretDownSharp">
            <div class="input-wrapper" slot="header">
              <input type="text" v-model="street" class="input" placeholder="Введите улицу" />
            </div>

            <div slot="content">
              <ion-item v-show="loading3">
                <ion-spinner name="bubbles" />
              </ion-item>
              <div v-for="el in streetsList" :key="el.street">
                <ion-item :lines="streetsList[streetsList.length - 1]?.street === el.street && 'none'"
                  v-on:click="fetchHousesHandler(el.ids, el.street)">
                  <ion-text>{{ el.street }}</ion-text>
                </ion-item>
              </div>
              <ion-item lines="none" v-show="streetsList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>
          <ion-accordion value="fourth" :toggle-icon="caretDownSharp">
            <div class="input-wrapper" slot="header">
              <input type="text" v-model="house" class="input" placeholder="Введите дом улицы" />
            </div>
            <div slot="content">
              <ion-item v-show="loading4">
                <ion-spinner name="bubbles" />
              </ion-item>
              <div v-for="el in housesList" :key="el">
                <ion-item :lines="housesList[housesList.length - 1]?.house === el?.house && 'none'"
                  v-on:click="fetchLicsHandler(el?.house)">
                  <ion-text>{{ el?.house }}</ion-text>
                </ion-item>
              </div>
              <ion-item lines="none" v-show="housesList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>

          <ion-accordion v-show="
            housesList?.length !== 0 &&
            housesList !== undefined &&
            apartmentsList.length > 0
            // housesList[0]?.apartments
          " value="fifth" :toggle-icon="caretDownSharp">
            <div class="input-wrapper" slot="header">
              <input type="text" v-model="apartment" class="input" placeholder="Введите номер квартиры" />
            </div>
            <div slot="content">
              <div v-for="el in apartmentsList" :key="el">
                <ion-item :lines="apartmentsList[apartmentsList.length - 1]?.apartment === el?.apartment && 'none'"
                  v-on:click="fetchLicsHandler2(el?.apartment)">
                  <ion-text>{{ el?.apartment }}</ion-text>
                </ion-item>
              </div>
              <ion-item v-show="apartmentsList?.length === 0">
                <ion-text>не найдено</ion-text>
              </ion-item>
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <div v-show="licsList?.length !== 0">
          <div v-for="el in licsList" :key="el">
            <ion-text v-for="el2 in el?.lics" :key="el2?.code">
              <ion-item lines="none" class="check">
                <ion-text class="lics" slot="start">
                  <p class="ion-text-start">Лицевой счет: {{ el2?.code }}</p>
                </ion-text>
                <ion-checkbox v-model="el2.value" slot="end" />
              </ion-item>
            </ion-text>
          </div>
        </div>

        <div v-show="
          housesList?.length !== 0 &&
          housesList !== undefined &&
          licsApartmentsList?.length !== 0
        ">
          <div v-for="el in licsApartmentsList" :key="el">
            <ion-text v-for="el2 in el?.lics" :key="el2?.code">
              <ion-item class="check" lines="none">
                <ion-text class="lics" slot="start">
                  <p class="ion-text-start">Лицевой счет: {{ el2?.code }}</p>
                </ion-text>
                <ion-checkbox v-model="el2.value" slot="end" />
              </ion-item>
            </ion-text>
          </div>
        </div>
        <ion-text v-show="response?.length !== 0">
          <p class="blue">{{ response }}</p>
        </ion-text>
        <ion-text v-show="error?.length !== 0">
          <p class="ion-text-start error">{{ error }}</p>
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
  IonItem,
  IonSpinner,
  IonCheckbox,
} from "@ionic/vue";
import {
  pencilOutline,
  documentTextOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import Back from "../components/Back.vue";
import { caretDownSharp } from "ionicons/icons";
import { Storage } from "@ionic/storage";
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
    IonItem,
    IonSpinner,
    IonCheckbox,
  },
  data() {
    return {
      error: "",
      house: "",
      street: "",
      settlement: '',
      settlementId: '',
      country: "",
      apartment: "",
      lc: [],
      loading: false,
      response: [],
      arrMapLics: [],
      loading2: true,
      loading3: false,
      loading4: false,
    };
  },
  computed: {
    ulusList() {
      return this.$pinia.state.value?.personalAccount?.getSettlementsResponse?.data.filter((el) => {
        return el.ulus
          .toLowerCase()
          .includes(this.$data.country.toLowerCase());
      });
    },
    settlementsList() {
      return this.ulusList?.filter((el) => {
        return el?.ulusId === this.$data.settlementId
      })[0]?.settlements?.filter((el2) => {
        return el2?.settlement?.toLowerCase().includes(this.$data.settlement.toLowerCase())
      })
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
      return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data?.filter((el) => el.house.toLowerCase() === this.$data.house.toLowerCase())
        .flatMap((el) => el?.apartments?.flatMap((el) => el))
        .filter((el) => {
          return el?.apartment
            ?.toLowerCase()
            .includes(this.$data.apartment.toLowerCase());
        });
    },
    licsApartmentsList() {
      return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data.filter((el) => el.house.toLowerCase() === this.$data.house.toLowerCase())
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
          return el.house.toLowerCase() === this.$data.house.toLowerCase()
        });
    },
  },
  mounted() {
    this.$data.loading2 = true
    this.getSettlements().then(() => (this.$data.loading2 = false));


  },
  methods: {
    ...mapActions(usePersonalAccountStore, [
      "getSettlements",
      "getStreets",
      "getHouses",
      "addAccount",
      "getAccount",
    ]),
    onFocusText: function () {
      this.$refs.text.focus();
    },
    fetchSettlementsHandler(ulus_id, ulus) {
      this.$data.settlementId = ulus_id
      this.$data.country = ulus
      this.$refs.accordion.$el.value = undefined;
    },
    fetchStreetsHandler(s_id, settlement) {
      this.$data.loading3 = true;
      const getStreets = new Promise((resolve) => {
        resolve(this.getStreets(s_id));
      });
      getStreets.then(() => (this.$data.loading3 = false));
      this.$refs.accordion.$el.value = undefined;
      this.$data.settlement = settlement;
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
    async addAccountHandler() {
      const store = new Storage();
      await store.create();
      const token = await store.get("token");
      const lics = this.licsList[0]?.lics?.filter((el) => el?.value === true);
      const licsApartments = this.licsApartmentsList[0]?.lics?.filter(
        (el) => el?.value === true
      );
      if (
        (lics?.length !== 0 && lics !== undefined) ||
        (licsApartments?.length !== 0 && licsApartments !== undefined)
      ) {
        this.$data.loading = true;
        const licsCodes =
          lics !== undefined
            ? lics?.map((v) => v?.code)
            : licsApartments?.map((v) => v?.code);

        const addAccount = new Promise((resolve) => {
          resolve(this.addAccount(JSON.parse(token).token, licsCodes));
        });
        addAccount.then(() => {
          this.$data.error = "";
          this.getAccount().then(() => {
            this.$router.push("/tabs/personalAccounts");
          });
          this.$data.loading = false;
          this.$data.response =
            this.$pinia.state.value.personalAccount?.addAccountResponse[0]?.message;
        });
      } else {
        this.$data.response = "";
        this.$data.error = "Выберите лицевой счет";
      }
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
.lics {
  width: 80%;
  margin: 0;
}

.check {
  --inner-padding-start: 0px;
}

ion-checkbox {
  margin: 0;
}

p {
  margin-bottom: 20px;
  word-break: break-all;
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

input:not(:placeholder-shown)+ion-text {
  display: none;
}

.dot {
  color: #62d0ce;
}
</style>
