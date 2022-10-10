"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[669],{3698:function(t,n,e){e.d(n,{G:function(){return s}});var i=e(6086),a=e(9669),o=e.n(a);const s=(0,i.Q_)({id:"notice",state:()=>({notice:[],noticeDetail:null,noticeError:null,idNotice:""}),getters:{getPostsPerAuthor:t=>n=>t.posts.filter((t=>t.userId===n))},actions:{async fetchNotice(t){this.notice=[];try{this.notice=await o().get(`https://aostng.ru/api/v2/notice/all/page/${t}/`).then((t=>t.data))}catch(n){this.noticeError=n}},async fetchNoticeDetail(t){this.noticeDetail=null;try{this.noticeDetail=await o().get(`https://aostng.ru/api/v2/notice/${t}}/`).then((t=>t.data))}catch(n){this.noticeError=n}}}})},1745:function(t,n,e){e.d(n,{Z:function(){return h}});var i=e(6252),a=e(3577);const o={class:"item"},s={class:"img-wrapper"},l={class:"content"},r={class:"title ion-text-start"},c=["innerHTML"];function u(t,n,e,u,d,p){const g=(0,i.up)("ion-img"),m=(0,i.up)("ion-text"),h=(0,i.up)("ion-item");return(0,i.wg)(),(0,i.j4)(h,{lines:"none","router-link":t.name},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",s,[null!==t.imgsrc?((0,i.wg)(),(0,i.j4)(g,{key:0,src:t.imgsrc},null,8,["src"])):(0,i.kq)("",!0)]),(0,i._)("div",l,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,a.zw)(t.date),1)])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("p",r,(0,a.zw)(t.main_title),1)])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("p",{innerHTML:t.sub_title},null,8,c)])),_:1})])])])),_:1},8,["router-link"])}var d=e(526),p=(0,i.aZ)({name:"newsItemComponent",props:{date:String,imgsrc:String,name:String,main_title:String,sub_title:String,text:String},components:{IonText:d.yW,IonItem:d.Ie,IonImg:d.Xz}}),g=e(3744);const m=(0,g.Z)(p,[["render",u],["__scopeId","data-v-fa4a756c"]]);var h=m},669:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});e(7658);var i=e(6252);const a=t=>((0,i.dD)("data-v-6a89bb32"),t=t(),(0,i.Cn)(),t),o={class:"container"},s={class:"button-wrapper"},l=a((()=>(0,i._)("p",{class:"main-title"},"Объявления",-1))),r={key:0};function c(t,n,e,a,c,u){const d=(0,i.up)("Button"),p=(0,i.up)("ion-text"),g=(0,i.up)("NewsItem"),m=(0,i.up)("ion-infinite-scroll-content"),h=(0,i.up)("ion-infinite-scroll"),f=(0,i.up)("ion-spinner"),w=(0,i.up)("ion-content"),_=(0,i.up)("ion-page");return(0,i.wg)(),(0,i.j4)(_,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,{class:"background"},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",s,[(0,i.Wm)(d,{class:"btn",name:"Новости",grey:t.newsButton,"router-link":"/tabs/main"},null,8,["grey"]),(0,i.Wm)(d,{class:"btn",name:"Объявления",grey:t.adsButton,onClick:t.adsHandler,"router-link":"/tabs/ads"},null,8,["grey","onClick"])]),(0,i.Wm)(p,{class:"main-title"},{default:(0,i.w5)((()=>[l])),_:1}),!1===t.loading?((0,i.wg)(),(0,i.iD)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.list,(n=>((0,i.wg)(),(0,i.j4)(g,{key:n?.id,date:n?.date,main_title:n?.name,sub_title:n?.preview,text:n?.preview,onClick:()=>{this.$pinia.state.value.notice.idNotice=n.id,this.$pinia.state.value.news.forNews="notice",t.router.push({name:"newsPage"})},imgsrc:n?.image},null,8,["date","main_title","sub_title","text","onClick","imgsrc"])))),128)),(0,i.Wm)(h,{threshold:"100px",id:"infinite-scroll"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{"loading-spinner":"bubbles"})])),_:1})])):((0,i.wg)(),(0,i.j4)(f,{key:1,name:"bubbles"}))])])),_:1})])),_:1})}var u=e(8903),d=e(526),p=e(5217),g=e(1745),m=e(2201),h=e(3698),f=e(6086),w=(0,i.aZ)({name:"tabAdsPage",data(){return{adsButton:!1,newsButton:!0,list:[],loading:!1,page:0}},mounted(){this.fetchMoreNotice()},computed:{notice(){return this.$pinia.state.value?.notice?.notice?.data}},setup(){const t=(0,m.tv)();return{router:t,airplaneOutline:u.TTc}},methods:{...(0,f.nv)(h.G,["fetchNotice"]),fetchMoreNotice(t){this.$data.page=this.$data.page+1,this.$data.loading=!0,this.fetchNotice(this.$data.page).then((()=>{this.$data.loading=!1;for(let t=0;t<this.notice?.length;t++){const n=this.notice[t];this.$data.list.push(n)}t?.target?.complete()}))},adsHandler:function(){this.adsButton=!1,this.newsButton=!0}},components:{IonPage:d._i,IonContent:d.W2,Button:p.Z,NewsItem:g.Z,IonText:d.yW,IonInfiniteScroll:d.ju,IonInfiniteScrollContent:d.MB,IonSpinner:d.PQ}}),_=e(3744);const v=(0,_.Z)(w,[["render",c],["__scopeId","data-v-6a89bb32"]]);var b=v}}]);
//# sourceMappingURL=669.88928ab3.js.map