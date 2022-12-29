import { defineStore } from "pinia";
import axios from "axios";
import { Storage } from "@ionic/storage";
const apiUrl = "https://api.aostng.ru/api/v2";
let apiUrlStng = 'https://1c.aostng.ru/VESTA/hs/API_STNG/V2/'

export const useServicesStore = defineStore({
  id: "services",
  state: () => ({
    formResponse: null,
    formResponseError: null,
    callInspectorResponse: null,
    callInspectorError: null,
    servicesResponse: null,
    servicesResponseError: null,
    form: {},
    select: {
      GAS_SLUCHI: null,
      GAS_HARAKTER: null,
      GAS_VID_USLUG: null,
    },
    servicesOneNext: false,
    techAllianceConnection: false,
    addressResponse: null,
    addressError: null,
    filesResponse: [],
    filesResponseError: null,
    listServicesResponse: null,
    listServicesResponseError: null,
    camerasResponse: null,
    camerasError: null,
    requestsInfo: null,
    
  }),
  getters: {
    setForm: (state) => {
      return (value) => [...state.form, ...value];
    },
  },
  actions: {
    async getCameras() {
      try {
        await axios
          .get(`${apiUrl}/camera/get`)
          .then((response) => (this.camerasResponse = response.data));
      } catch (error) {
        this.camerasError = error;
      }
    },
    async getListServices() {
      const store = new Storage();
      await store.create();
      const token = await store.get("token");
      const tokenParsed = JSON.parse(token).token;
      try {
        await axios
          .post(
            `${apiUrlStng}ListServices`,
            {
              token: tokenParsed,
            }
          )
          .then((response) => (this.listServicesResponse = response.data));
      } catch (error) {
        this.listServicesResponseError = error;
      }
    },
    async getForms() {
      try {
        await axios
          .get(
            `https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20`
          )
          .then((response) => (this.formResponse = response.data));
      } catch (error) {
        this.formResponseError = error;
      }
    },
    async uploadFiles(files) {
      const store = new Storage();
      await store.create();
      const token = await store.get("token");
      const tokenParsed = JSON.parse(token).token;
      try {
        let check = files.filter((el) => {
          if (el.file !== false) {
            return el;
          }
        });
        for (let index = 0; index < check.length; index++) {
          const element = check[index];
          await axios
            .post(
              `${apiUrlStng}get_file`,
              {
                token: tokenParsed,
                title: element.title,
                file: element.file,
              }
            )
            .then((response) =>
              this.filesResponse.push({
                ...response.data,
                field: element.field,
                text: element.text,
              })
            );
        }
      } catch (error) {
        this.filesResponseError = error;
      }
    },
    async services(forms) {
      const store = new Storage();
      await store.create();
      const token = await store.get("token");
      const tokenParsed = JSON.parse(token).token;
      try {
        await axios
          .post(`${apiUrlStng}Services`, {
            token: tokenParsed,
            data: {
              status: [
                {
                  CODE: "120",
                  VALUE: "Принят",
                },
                {
                  CODE: "23",
                  VALUE: "В обработке",
                },
                {
                  CODE: "26",
                  VALUE: "Выполнено",
                },
                {
                  CODE: "24",
                  VALUE: "Требуется документ",
                },
                {
                  CODE: "25",
                  VALUE: "Требует оплаты",
                },
                {
                  CODE: "22",
                  VALUE: "Отклонен",
                },
              ],
              forms: forms,
            },
          })
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
            `${apiUrlStng}CallInspector`,
            { token: tokenParsed, LC: lc, phone: phone }
          )
          .then((response) => (this.callInspectorResponse = response.data));
      } catch (error) {
        this.callInspectorError = error;
      }
    },
    async addressQuery(query, type) {
      try {
        await axios({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Token " + "f135ebe81ca212b9d61fedadba1e0111159f0d6b",
          },
          url: `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`,
          data:
            type === "USER_REGION" || type === "GAS_ADDRESS"
              ? JSON.stringify({
                  query: query,
                  locations_boost: [{ kladr_id: "4100000100000" }],
                  count: 5,
                })
              : JSON.stringify({
                  query: query,
                  count: 5,
                  restrict_value: false,
                  locations: [
                    {
                      city: "Якутск",
                    },
                    {
                      country: "Узбекистан",
                    },
                    {
                      country: "Таджикистан",
                    },
                    {
                      country: "Киргизия",
                    },
                    {
                      country: "Армения",
                    },
                  ],
                }),
        }).then((response) => (this.addressResponse = response.data));
      } catch (error) {
        this.addressError = error;
      }
    },
  },
});
