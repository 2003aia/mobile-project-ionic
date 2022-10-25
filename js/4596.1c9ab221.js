"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[4596],{3698:function(t,n,e){e.d(n,{G:function(){return s}});var i=e(6086),a=e(9669),o=e.n(a);const s=(0,i.Q_)({id:"notice",state:()=>({notice:[],noticeDetail:null,noticeError:null,idNotice:""}),getters:{getPostsPerAuthor:t=>n=>t.posts.filter((t=>t.userId===n))},actions:{async fetchNotice(t){this.notice=[];try{this.notice=await o().get(`https://aostng.ru/api/v2/notice/all/page/${t}/`).then((t=>t.data))}catch(n){this.noticeError=n}},async fetchNoticeDetail(t){this.noticeDetail=null;try{this.noticeDetail=await o().get(`https://aostng.ru/api/v2/notice/${t}}/`).then((t=>t.data))}catch(n){this.noticeError=n}}}})},1745:function(t,n,e){e.d(n,{Z:function(){return h}});var i=e(6252),a=e(3577);const o={class:"item"},s={class:"img-wrapper"},l={class:"content"},r={class:"title ion-text-start"},c=["innerHTML"];function u(t,n,e,u,d,p){const g=(0,i.up)("ion-img"),m=(0,i.up)("ion-text"),h=(0,i.up)("ion-item");return(0,i.wg)(),(0,i.j4)(h,{lines:"none","router-link":t.name},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",s,[null!==t.imgsrc?((0,i.wg)(),(0,i.j4)(g,{key:0,src:t.imgsrc},null,8,["src"])):(0,i.kq)("",!0)]),(0,i._)("div",l,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,a.zw)(t.date),1)])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("p",r,(0,a.zw)(t.main_title),1)])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("p",{innerHTML:t.sub_title},null,8,c)])),_:1})])])])),_:1},8,["router-link"])}var d=e(2684),p=(0,i.aZ)({name:"newsItemComponent",props:{date:String,imgsrc:String,name:String,main_title:String,sub_title:String,text:String},components:{IonText:d.yW,IonItem:d.Ie,IonImg:d.Xz}}),g=e(3744);const m=(0,g.Z)(p,[["render",u],["__scopeId","data-v-fa4a756c"]]);var h=m},4596:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});e(7658);var i=e(6252);const a=t=>((0,i.dD)("data-v-2a8636c0"),t=t(),(0,i.Cn)(),t),o={class:"header-wrapper"},s={class:"button-wrapper"},l={class:"container"},r=a((()=>(0,i._)("p",{class:"main-title"},"Объявления",-1))),c={key:0};function u(t,n,a,u,d,p){const g=(0,i.up)("Back"),m=(0,i.up)("ion-img"),h=(0,i.up)("Button"),f=(0,i.up)("ion-text"),w=(0,i.up)("NewsItem"),_=(0,i.up)("ion-infinite-scroll-content"),v=(0,i.up)("ion-infinite-scroll"),I=(0,i.up)("ion-spinner"),k=(0,i.up)("ion-content"),b=(0,i.up)("ion-page");return(0,i.wg)(),(0,i.j4)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{logo:!0,noBack:!0}),(0,i.Wm)(k,{class:"background"},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i.Wm)(m,{class:"pattern",src:e(2649)},null,8,["src"]),(0,i._)("div",s,[(0,i.Wm)(h,{class:"btn",name:"Новости",grey:t.newsButton,"router-link":"/tabs/main"},null,8,["grey"]),(0,i.Wm)(h,{lightBlue:!0,class:"btn",name:"Объявления",grey:t.adsButton,onClick:t.adsHandler,"router-link":"/tabs/ads"},null,8,["grey","onClick"])])]),(0,i._)("div",l,[(0,i.Wm)(f,{class:"main-title"},{default:(0,i.w5)((()=>[r])),_:1}),!1===t.loading?((0,i.wg)(),(0,i.iD)("div",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.list,(n=>((0,i.wg)(),(0,i.j4)(w,{key:n?.id,date:n?.date,main_title:n?.name,sub_title:n?.preview,text:n?.preview,onClick:()=>{this.$pinia.state.value.notice.idNotice=n.id,this.$pinia.state.value.news.forNews="notice",t.router.push({name:"newsPage"})},imgsrc:n?.image},null,8,["date","main_title","sub_title","text","onClick","imgsrc"])))),128)),(0,i.Wm)(v,{threshold:"100px",id:"infinite-scroll"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{"loading-spinner":"bubbles"})])),_:1})])):((0,i.wg)(),(0,i.j4)(I,{key:1,name:"bubbles"}))])])),_:1})])),_:1})}var d=e(8903),p=e(2684),g=e(8056),m=e(1745),h=e(2201),f=e(3698),w=e(6086),_=e(6683),v=(0,i.aZ)({name:"tabAdsPage",data(){return{adsButton:!1,newsButton:!0,list:[],loading:!1,page:0}},mounted(){this.fetchMoreNotice()},computed:{notice(){return this.$pinia.state.value?.notice?.notice?.data}},setup(){const t=(0,h.tv)();return{router:t,airplaneOutline:d.TTc}},methods:{...(0,w.nv)(f.G,["fetchNotice"]),fetchMoreNotice(t){this.$data.page=this.$data.page+1,this.$data.loading=!0,this.fetchNotice(this.$data.page).then((()=>{this.$data.loading=!1;for(let t=0;t<this.notice?.length;t++){const n=this.notice[t];this.$data.list.push(n)}t?.target?.complete()}))},adsHandler:function(){this.adsButton=!1,this.newsButton=!0}},components:{IonPage:p._i,IonContent:p.W2,Button:g.Z,NewsItem:m.Z,IonText:p.yW,IonInfiniteScroll:p.ju,Back:_.Z,IonInfiniteScrollContent:p.MB,IonSpinner:p.PQ,IonImg:p.Xz}}),I=e(3744);const k=(0,I.Z)(v,[["render",u],["__scopeId","data-v-2a8636c0"]]);var b=k}}]);
//# sourceMappingURL=4596.1c9ab221.js.map