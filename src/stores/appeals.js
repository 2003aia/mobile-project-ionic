import { defineStore } from 'pinia'
import axios from 'axios'
import { Storage } from '@ionic/storage'


export const useAppealsStore = defineStore({
    id: 'appeals',
    state: () => ({
        appealsListResponse: null,
        appealsListError: null,
        appealsInfoError: null,
        appealsInfoResponse: null,
        createAppealResponse: null,
        createMessageResponse: null,
        createAppealError: null,
        createMessageError: null,
        appealsCategoriesResponse: null,
        appealsCategoriesError: null,
        newAppeal: false,
        appealsItem: {}
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (authorId) => state.posts.filter((post) => post.userId === authorId)
        }
    },
    actions: {
        async getAppealsList() {
            const store = new Storage();
            await store.create();
            const token = await store.get('support')
            try {
                this.appealsListResponse = await axios.post(`https://api.aostng.ru/api/v2/support/list/`, { token: token.token })
                    .then((response) => response.data)

            } catch (error) {
                this.appealsListError = error
            }
        },
        async getAppealsInfo(token, ticketId) {
            const store = new Storage();
            await store.create();
            try {
                this.appealsInfoResponse = await axios.post(`https://api.aostng.ru/api/v2/support/detail/`, {
                    token: token, ticketId: ticketId
                })
                    .then((response) => response.data).catch((e) => {
                        this.appealsInfoError = e
                    })
            } catch (error) {
                this.appealsInfoError = error
            }
        },
        async getAppealsCategoreis() {
            try {
                this.appealsCategoriesResponse = await axios.get(`https://api.aostng.ru/api/v2/support/categories/`,)
                    .then((response) => response.data).catch((e) => {
                        this.appealsCategoriesError = e
                    })
            } catch (error) {
                this.appealsCategoriesError = error
            }
        },
        async createMessage(token, message, category, ticketId, files) {
            const store = new Storage();
            await store.create();
            try {
                const formData = new FormData
                for (let index = 0; index < files.length; index++) {
                    const element = files[index];
                    formData.append('files[]', element)
                }
                formData.append('token', token)
                formData.append('message', message)
                formData.append('category', category)
                formData.append('ticketId', ticketId)

                const res = await fetch(`https://api.aostng.ru/api/v2/support/message/`, {
                    method: 'POST',
                    mode: 'cors',
                    body: formData,
                }).then(async () => {
                    this.createMessageResponse = await res.json()

                })

                /* this.createMessageResponse = await axios.post(`https://api.aostng.ru/api/v2/support/message/`, {
                    token: token, message: message, category: category, ticketId: ticketId
                })
                    .then((response) => response.data).catch((e) => {
                        this.createMessageError = e
                    }) */
            } catch (error) {
                this.createMessageError = error
            }
        },
        async createAppeal(token, message, category, files) {
            const store = new Storage();
            await store.create();
            const formData = new FormData
            for (let index = 0; index < files.length; index++) {
                const element = files[index];
                formData.append('files[]', element)
            }
            formData.append('token', token)
            formData.append('message', message)
            formData.append('category', category)
            try {
                const res = await fetch(`https://api.aostng.ru/api/v2/support/create/`, {
                    method: 'POST',
                    mode: 'cors',
                    body: formData,
                }).then(async () => {
                    this.createAppealResponse = await res.json()

                })
                /* this.createAppealResponse = await axios.post(`https://api.aostng.ru/api/v2/support/create/`, {
                    token: token, message: message, category: category, files: files[0]
                })
                    .then((response) => response.data).catch((e) => {
                        this.createAppealError = e
                    }) */
            } catch (error) {
                this.createAppealError = error
            }
        }
    }
})