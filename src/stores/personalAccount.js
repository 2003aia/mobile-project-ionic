import { defineStore } from "pinia";
import axios from "axios";
import { Storage } from "@ionic/storage";
// import { useLoginStore } from "./login";

export const usePersonalAccountStore = defineStore({
  id: "personalAccount",
  state: () => ({
    addAccountResponse: null,
    addAccountError: null,
    getSettlementsResponse: null,
    getSettlementsError: null,
    getStreetsResponse: null,
    getStreetsError: null,
    getHousesResponse: null,
    getHousesError: null,
    getAccountResponse: null,
    paymentHistoryResponse: null,
    paymentHistoryError: null,
    sberPayResponse: null,
    sberPayError: null,
    getAccountError: null,
    delAccountResponse: { error: false, data: null },
    delAccountError: null,
    getIndicesResponse: null,
    getIndicesError: null,
    setIndicesResponse: null,
    setIndicesError: null,
    personalItemData: {},
  }),
  getters: {
    getSettlementsList: (state) => {
      return state.getSettlementsResponse.data.flatMap((el) =>
        el?.settlements.flatMap((el) => el)
      );
    },
  },
  actions: {
    async getSettlements() {
      console.log("getting settlements");
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements`,
            { token: tokenParsed }
          )
          .then((response) => (this.getSettlementsResponse = response.data));
      } catch (error) {
        this.getSettlementsError = error;
      }
    },
    async getStreets(s_id) {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets`,
            { token: tokenParsed, s_id: s_id }
          )
          .then((response) => (this.getStreetsResponse = response.data));
      } catch (error) {
        this.getStreetsError = error;
      }
    },
    async getHouses(ids) {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses`,
            { token: tokenParsed, ids: ids }
          )
          .then((response) => (this.getHousesResponse = response.data));
      } catch (error) {
        this.getHousesError = error;
      }
    },
    async getAccount() {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        const lc = JSON.parse(token).lics;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount`,
            { token: tokenParsed, LC: lc }
          )
          .then((response) => (this.getAccountResponse = response.data));
      } catch (error) {
        this.getAccountError = error;
      }
    },
    async addAccount(token, lc) {
      try {
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount`,
            { token: token, LC: lc }
          )
          .then(async (response) => {
            this.addAccountResponse = response.data;

            // const counterStorage = useLoginStore();
            const store = new Storage();
            await store.create();
            const token = await store.get("token");
            const tokenParsed = JSON.parse(token);
            // console.log(response.data, tokenParsed, "test addaccount");
            /* counterStorage
                .authUser(tokenParsed.phone, tokenParsed.password)
                .then(async () => {
                  const store = new Storage();
                  await store.create(); */
            await store.set(
              "token",
              JSON.stringify({
                ...tokenParsed,
                lics: [...tokenParsed.lics, lc],
              })
            );
            /*  }); */
          });
      } catch (error) {
        this.addAccountError = error;
      }
    },
    async delAccount(lc) {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount`,
            { token: tokenParsed, LC: lc }
          )
          .then(async (response) => {
            this.getAccountResponse.data = this.getAccountResponse?.data.filter(
              (el) => {
                return el.code !== lc;
              }
            );
            const userData = JSON.parse(token);
            const lics = this.getAccountResponse?.data.filter((el) => {
              return el?.code !== lc;
            });
            const userObject = {
              name: userData.name,
              phone: userData.phone,
              email: userData.email,
              password: userData.password,
              token: userData.token,
              lics: lics?.map((el) => el?.code),
            };
            await store.set("token", JSON.stringify(userObject));
            this.delAccountResponse = response.data;
          });
      } catch (error) {
        this.delAccountError = error;
      }
    },
    async getPayments(lc /*  beginDate, endDate */) {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments`,
            {
              token: tokenParsed,
              LC: lc /* beginDate: beginDate, endDate: endDate */,
            }
          )
          .then(async (response) => {
            this.paymentHistoryResponse = response.data;
          });
      } catch (error) {
        this.paymentHistoryError = error;
      }
    },
    async getIndices(counterId) {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices`,
            { token: tokenParsed, counterId: counterId }
          )
          .then((response) => {
            this.getIndicesResponse = response.data;
          });
      } catch (error) {
        this.getIndicesError = error;
      }
    },
    async setIndices(counterId, indice) {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices`,
            { token: tokenParsed, counterId: counterId, indice: indice }
          )
          .then((response) => {
            /* const counterStorage = usePersonalAccountStore()
            counterStorage.getIndices(counterId) */
            this.getIndices(counterId);
            this.setIndicesResponse = response.data;
          });
      } catch (error) {
        this.setIndicesError = error;
      }
    },
    async sberPay(lc, phone, email, accruals, sumTO, penalties) {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token);
        await axios
          .post(`https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SberPay`, {
            token: tokenParsed.token,
            phone: phone,
            email: email,
            LC: lc,
            accruals: accruals,
            penalties: penalties,
            sumTO: sumTO,
          })
          .then((response) => {
            /* const counterStorage = usePersonalAccountStore()
            counterStorage.getIndices(counterId) */
            this.sberPayResponse = response.data;
          });
      } catch (error) {
        this.sberPayError = error;
      }
    },
  },
});
