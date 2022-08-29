import { defineStore } from 'pinia'
import axios from 'axios'


export const useNoticeStore = defineStore({
    id: 'notice',
    state: () => ({
        notice: [],
        noticeDetail: null,
        noticeError: null, 
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (authorId) => state.posts.filter((post) => post.userId === authorId)
        }
    },
    actions: {
        async fetchNotice(page) {
            this.notice = []
            try {
                this.notice = await axios.get(`https://aostng.ru/api/v2/notice/all/page/${page}/`)
                    .then((response) => response.data)
            } catch (error) {
                this.noticeError = error
            }
        },
        async fetchNoticeDetail(id) {
            this.noticeDetail = null
            try {
                this.noticeDetail = await axios.get(`https://aostng.ru/api/v2/notice/${id}}/`)
                    .then((response) => response.data)
            } catch (error) {
                this.noticeError = error
            }
        }
    }
})