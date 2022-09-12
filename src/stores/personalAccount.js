import { defineStore } from 'pinia'
import axios from 'axios'

export const usePersonalAccountStore = defineStore({
    id: 'personalAccount',
    state: () => ({
        addAccountResponse: null,
        addAccountError: null,
     
    }),
    /* getters: {
        getPostsPerAuthor: (state) => {
            return (authorId) => state.posts.filter((post) => post.userId === authorId)
        }
    }, */
    actions: {
        async addAccount(token, lc) {
            try {
                 await axios.post(`https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount`, { token: token, LC: lc })
                    .then((response) =>this.addAccountResponse = response.data)

            } catch (error) {
                this.addAccountError = error
            }
        },
       
    }
})