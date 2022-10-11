import { defineStore } from 'pinia'
import axios from 'axios'


export const useNewsStore = defineStore({
    id: 'news',
    state: () => ({
        news: [],
        newsDetail: null,
        idNews: '',
        forNews: '',
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (authorId) => state.posts.filter((post) => post.userId === authorId)
        }
    },
    actions: {
        async fetchNews(page) {
            this.news = []
            try {
                this.news = await axios.get(`https://aostng.ru/api/v2/news/all/page/${page}/`)
                    .then((response) => response.data)
            } catch (error) {
                this.error = error
            }
        },
        async fetchNewsDetail(id) {
            this.post = null
            try {
                this.newsDetail = await axios.get(`https://aostng.ru/api/v2/news/${id}}/`)
                    .then((response) => response.data)
            } catch (error) {
                this.error = error
            }
        }
    }
})