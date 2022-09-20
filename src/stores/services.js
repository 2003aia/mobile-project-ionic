import { defineStore } from "pinia";
import axios from "axios";

export const useServicesStore = defineStore({
  id: "services",
  state: () => ({
    formResponse: null,
    formResponseError: null,

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
    
  },
});
