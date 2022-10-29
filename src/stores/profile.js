import { defineStore } from 'pinia'
import axios from 'axios'
import { Storage } from "@ionic/storage";


export const useProfileStore = defineStore({
    id: 'profile',
    state: () => ({
        pushResponse: null,
        pushResponseRead: null,
        pushError: null,
        editProfileError: null,
        editProfileResponse: null,
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (authorId) => state.posts.filter((post) => post.userId === authorId)
        }
    },
    actions: {
        async getPush() {
            const store = new Storage();
            await store.create();
            const token = await store.get("token");
            const tokenParsed = JSON.parse(token).token;
            try {
                await axios.get(`https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/getPUSH?token=${tokenParsed}`)
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