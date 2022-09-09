import { defineStore } from 'pinia'
import axios from 'axios'
import { Storage } from '@ionic/storage'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        registrResponse: null,
        registrError: null,
        authError: null,
        authResponse: null,
        passRecoveryResponse: null,
        passRecoveryError: null,
        changePassResponse: null,
        changePassError: null,
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (authorId) => state.posts.filter((post) => post.userId === authorId)
        }
    },
    actions: {
        async registrUser(phone,) {
            const store = new Storage();
            await store.create();
            try {
                await axios.post(`https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Registration`, { phone: phone })
                    .then((response) => this.registrResponse = response.data)

            } catch (error) {
                this.registrError = error
            }
        },
        async passRecovery(phone) {
            const store = new Storage();
            await store.create();
            try {
                await axios.post(`https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Restore`, { phone: phone })
                    .then((response) => this.passRecoveryResponse = response.data)

            } catch (error) {
                this.passRecoveryError = error
            }
        },
        async authUser(phone, password) {
            const store = new Storage();
            await store.create();
            try {
                await axios.post(`https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Authorization`, {
                    phone: phone, password: password
                }).then((response) => this.authResponse = response.data)
            } catch (error) {
                this.authError = error
            }
        },
        async changePass( token, password,) {
            const store = new Storage();
            await store.create();
            try {
                await axios.post(`https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Profile`, {
                    token: token, password: password, 
                }).then((response) => this.changePassResponse = response.data)
            } catch (error) {
                this.changePassError = error
            }
        }
    }
})