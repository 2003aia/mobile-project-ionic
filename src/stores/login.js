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
        async registrUser(login, email) {
            const store = new Storage();
            await store.create();
            try {
                this.registrResponse = await axios.post(`https://api.aostng.ru/api/v2/user/create/`, { login: login, email: email })
                    .then((response) => response.data)

            } catch (error) {
                this.registrError = error
            }
        },
        async passRecovery(login, email) {
            const store = new Storage();
            await store.create();
            try {
                this.passRecoveryResponse = await axios.post(`https://api.aostng.ru/api/v2/user/password/forgot/`, { login: login, email: email })
                    .then((response) => response.data)

            } catch (error) {
                this.passRecoveryError = error
            }
        },
        async authUser(login, password) {
            const store = new Storage();
            await store.create();
            try {
                this.authResponse = await axios.post(`https://api.aostng.ru/api/v2/user/auth/`, {
                    login: login, password: password
                }).then((response) => response.data)
            } catch (error) {
                this.authError = error
            }
        },
        async changePass(login, password) {
            const store = new Storage();
            await store.create();
            try {
                this.changePassResponse = await axios.post(`https://api.aostng.ru/api/v2/user/password/changePassword/`, {
                    login: login, password: password
                }).then((response) => response.data)
            } catch (error) {
                this.changePassError = error
            }
        }
    }
})