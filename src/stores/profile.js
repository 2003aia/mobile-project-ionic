import { defineStore } from 'pinia'
import axios from 'axios'
import { Storage } from "@ionic/storage";
import { useRouter } from "vue-router";
// let apiUrlStng = '${apiUrlStng2}'
let apiUrlStng2 = 'https://fhd.aostng.ru/vesta/hs/API_STNG/V2/'

const router = useRouter()

export const useProfileStore = defineStore({
    id: 'profile',
    state: () => ({
        pushResponse: null,
        pushResponseRead: null,
        pushError: null,
        editProfileError: null,
        editProfileResponse: null,
        profileResponse: null,
        profileError: null,
        deleteResponse: null,
        deleteError: null,
        versionResponse: null,
        versionError: null,
    }),
    getters: {
        urlPush: (state) => {
            return router.push(state)
        }
    },
    actions: {
        async getPush() {
            const store = new Storage();
            await store.create();
            const token = await store.get("token");
            const tokenParsed = JSON.parse(token).token;
            try {
                await axios.get(`${apiUrlStng2}getPUSH?token=${tokenParsed}`)
                    .then(async (response) => {
                        this.pushResponse = response.data

                        /* const notif = await store.get('notifications')
                        let yFilter = response.data?.data?.map(itemY => { return itemY.date });
                        console.log('testestestrererrrrrrrrrr', yFilter, JSON.parse(notif))

                        let filtered = JSON.parse(notif).filter((e) => {
                            e?.date?.includes(yFilter)
                        })
                        console.log(filtered, 'test')
                         */
                    })
            } catch (error) {
                this.pushError = error
            }
        },
        async getProfile() {
            const store = new Storage()
            await store.create()
            const token = await store.get('token')

            try {
                await axios.post(`${apiUrlStng2}Profile`, {
                    token: JSON.parse(token).token
                }).then((response) => {

                    this.profileResponse = response.data

                })
            } catch (error) {
                this.profileError = error
            }
        },
        async getVersion() {
            
            try {
                await axios.get(`${apiUrlStng2}getVersion`).then((response) => {

                    this.versionResponse = response.data

                })
            } catch (error) {
                this.versionError = error
            }
        },
        async deleteAcc() {
            const store = new Storage()
            await store.create()
            const token = await store.get('token')

            try {
                await axios.post(`${apiUrlStng2}delLC`, {
                    token: JSON.parse(token).token
                }).then((response) => {

                    this.deleteResponse = response.data

                })
            } catch (error) {
                this.deleteError = error
            }
        },
        async editProfile(data) {
            const store = new Storage()
            store.create()
            const token = await store.get('token')
            try {
                await axios.post(`${apiUrlStng2}Profile`, {
                    token: JSON.parse(token).token,
                    ...data
                }).then((response) => {

                    this.editProfileResponse = response.data

                })
            } catch (error) {
                this.editProfileError = error
            }
        }
    }
})