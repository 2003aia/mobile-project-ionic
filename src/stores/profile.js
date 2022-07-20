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
                this.profileResponse = await axios.post(`https://api.aostng.ru/api/v2/user/profile/get/`, { token: token })
                    .then((response) => response.data)
            } catch (error) {
                this.profileError = error
            }
        },
        async editProfile(token, firstName, lastName, email) {
            try {
                this.editProfileResponse = await axios.post(`https://api.aostng.ru/api/v2/user/profile/set/`, {
                    token: token,
                    firstName: firstName,
                    lastName: lastName,
                    email: email

                })
                    .then((response) => response.data).catch((e) => {
                        this.editProfileError = e
                    })
            } catch (error) {
                this.editProfileError = error
            }
        }
    }
})