import { defineStore } from 'pinia'
import axios from 'axios'


export const useProfileStore = defineStore({
    id: 'profile',
    state: () => ({
        profileResponse: null,
        profileError: null,
        editProfileError: null,
        editProfileResponse: null,
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (authorId) => state.posts.filter((post) => post.userId === authorId)
        }
    },
    actions: {
        async getProfile(token) {
            try {
                await axios.post(`https://api.aostng.ru/api/v2/user/profile/get/`, { token: token })
                    .then((response) => this.profileResponse = response.data)
            } catch (error) {
                this.profileError = error
            }
        },
        async editProfile(token, name, email) {
            try {
                await axios.post(`https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Profile`, {
                    token: token,
                    name: name,
                    email: email,
                }).then((response) => this.editProfileResponse = response.data)
            } catch (error) {
                this.editProfileError = error
            }
        }
    }
})