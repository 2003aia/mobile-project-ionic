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
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (authorId) => state.posts.filter((post) => post.userId === authorId)
        }
    },
    actions: {
        async registrUser(login) {
            const store = new Storage();
            await store.create();
            try {
                this.registrResponse = await axios.post(`https://api.aostng.ru/api/v2/user/create/`, { login: login })
                    .then((response) => response.data)

            } catch (error) {
                this.registrError = error
            }
        },
        async authUser(login, password) {
            const store = new Storage();
            await store.create();
            try {
                this.authResponse = await axios.post(`https://api.aostng.ru/api/v2/user/auth/`, {
                    login: login, password: password
                })
                    .then((response) => response.data).catch((e) => {
                        this.authError = e
                    })
            } catch (error) {
                this.authError = error
            }
        }
    }
})