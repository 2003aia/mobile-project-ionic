import { defineStore } from "pinia";
import axios from "axios";
import { Storage } from "@ionic/storage";


export const useServicesStore = defineStore({
  id: "services",
  state: () => ({
    formResponse: null,
    formResponseError: null,
    callInspectorResponse: null,
    callInspectorError: null,
    servicesResponse: null,
    servicesResponseError: null,
  }),

  actions: {
    async getForms() {
      console.log("getting forms");
      try {

        await axios
          .get(
            `https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20`,
          )
          .then((response) => (this.formResponse = response.data));
      } catch (error) {
        this.formResponseError = error;
      }
    },
    async services(forms) {
      console.log("services");
      try {

        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services`,
            {
              status: [{
                CODE: "24",
                VALUE: "Требуется документ"
              }],
              forms: forms
            }
          )
          .then((response) => (this.servicesResponse = response.data));
      } catch (error) {
        this.servicesResponseError = error;
      }
    },
    async callInspector(lc, phone) {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("token");
        const tokenParsed = JSON.parse(token).token;
        await axios
          .post(
            `https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector`,
            { token: tokenParsed, LC: lc, phone: phone }
          )
          .then((response) => (this.callInspectorResponse = response.data));
      } catch (error) {
        this.callInspectorError = error;
      }
    }
  },
});
