import { defineStore } from "pinia";
import axios from "axios";
import { isPlatform } from "@ionic/vue";

export const usePreEntryStore = defineStore({
  id: "preEntry",
  state: () => ({
    entryPhone: "",
    entryServiceType: "",
    entryDate: null,
    entryAvailableTimes: [],
    entryTime: null,
    entryNumber: null,
  }),
  getters: {
    getEntryInfo: (state) => {
      return {
        entryPhone: state.entryPhone,
        entryServiceType: state.entryServiceType,
        entryDate: state.entryDate,
        entryAvailableTimes: state.entryAvailableTimes,
        entryTime: state.entryTime,
      };
    },
  },
  actions: {
    async setPhone(phone) {
      this.entryPhone = phone;
    },
    async setServiceType(type) {
      this.entryServiceType = type;
    },
    async setDate(date) {
      this.entryDate = date;
    },
    async setTime(time) {
      this.entryTime = time;
    },
    async fetchTime() {
      if (this.entryDate && this.entryServiceType != "") {
        try {
          let config = {
            headers: {
              Accept: "*/*",
              "Content-Type": "multipart/form-data",
            },
          };

          let device = "android";
          if (isPlatform("iphone")) {
            device = "iphone";
          }

          var bodyFormData = new FormData();
          bodyFormData.append("date", this.entryDate);
          bodyFormData.append("service", this.entryServiceType);
          bodyFormData.append("ionicDevice", device);

          const response = await axios.post(
            `https://aostng.ru/ajax/preregajax.php`,
            bodyFormData,
            config
          );

          let values = [];
          // Get values between <option value="##:##:##"> and </option>
          const re = />([^<.]+)<\//g;
          let match = re.exec(response.data);
          while (match != null) {
            values.push(match[1]);
            match = re.exec(response.data);
          }

          this.entryTime = null;
          this.entryAvailableTimes = values;
        } catch (error) {
          console.log(error);
        }
      }
    },

    async sendFullInfo(phone, type, date, time) {
      console.log(phone, type, date, time);
      try {
        let config = {
          headers: {
            Accept: "*/*",
            "Content-Type": "multipart/form-data",
          },
        };
        let device = "android";
        if (isPlatform("iphone")) {
          device = "iphone";
        }

        var bodyFormData = new FormData();
        bodyFormData.append("number", phone);
        bodyFormData.append("service", type);
        bodyFormData.append("date", date);
        bodyFormData.append("time", time);
        bodyFormData.append("ionicDevice", device);

        await axios.post(`https://aostng.ru/prereg2.php`, bodyFormData, config).then((response)=>{
          this.entryNumber = response.data.split('Номер вашей брони - </span>')[1]
        })
        return true;
      } catch (error) {
        return false;
      }
    },

    async resetPreEntry() {
      this.entryPhone = "";
      this.entryServiceType = "";
      this.entryDate = null;
      this.entryAvailableTimes = [];
      this.entryTime = null;
    },
  },
});
