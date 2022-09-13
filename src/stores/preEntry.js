import { defineStore } from 'pinia'
import axios from 'axios'
import { isPlatform } from '@ionic/vue';


// function teeestit(text){ console.log(text) }

export const usePreEntryStore = defineStore({
    id: 'preEntry',
    state: () => ({
        entryPhone: '',
        entryServiceType: '',
        entryDate: null,
        entryTime: null,
    }),
    getters: {
        getEntryInfo: (state) => {
            return {
                entryPhone: state.entryPhone,
                entryServiceType: state.entryServiceType,
                entryDate: state.entryDate,
                entryTime: state.entryTime,
            };
        }
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
        async fetchTime() {
            if (this.entryDate && this.entryServiceType != '') {
                try {
                    let config = {
                        headers: {
                            "Accept": "*/*",
                            "Content-Type": "multipart/form-data"
                        }
                    };

                    let device = 'android'
                    if (isPlatform('iphone')) {
                        device = 'iphone';
                    }

                    var bodyFormData = new FormData();
                    bodyFormData.append('date', this.entryDate);
                    bodyFormData.append('service', this.entryServiceType);
                    bodyFormData.append('ionicDevice', device);

                    await axios.post(`https://aostng.ru/ajax/preregajax.php`, bodyFormData, config)
                        .then((response) => {
                            // console.log(response.data);

                            let values = [];
                            const re = />([^<.]+)<\//g
                            let match = re.exec(response.data);
                            while (match != null) {
                                values.push(match[1]); 
                                match = re.exec(response.data);
                            }

                            console.log(values);
                            // var startingIndices = [];

                            // var indexOccurence = response.data.indexOf('value', 0);

                            // while (indexOccurence >= 0) {
                            //     startingIndices.push(response.data);

                            //     indexOccurence = response.data.indexOf('value', indexOccurence + 1);
                            // }
                        })

                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
})