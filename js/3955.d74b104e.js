"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[3955],{1014:function(t,n,e){e.d(n,{m:function(){return l}});var a=e(6086),i=e(9669),s=e.n(i);const l=(0,a.Q_)({id:"news",state:()=>({news:[],newsDetail:null}),getters:{getPostsPerAuthor:t=>n=>t.posts.filter((t=>t.userId===n))},actions:{async fetchNews(t){this.news=[];try{this.news=await s().get(`https://aostng.ru/api/v2/news/all/page/${t}/`).then((t=>t.data))}catch(n){this.error=n}},async fetchNewsDetail(t){this.post=null;try{this.newsDetail=await s().get(`https://aostng.ru/api/v2/news/${t}}/`).then((t=>t.data))}catch(n){this.error=n}}}})},1745:function(t,n,e){e.d(n,{Z:function(){return m}});var a=e(6252),i=e(3577);const s={class:"item"},l={class:"img-wrapper"},r={class:"content"},o={class:"title ion-text-start"},u=["innerHTML"];function c(t,n,e,c,d,p){const w=(0,a.up)("ion-img"),g=(0,a.up)("ion-text"),m=(0,a.up)("ion-item");return(0,a.wg)(),(0,a.j4)(m,{lines:"none","router-link":t.name},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",l,[null!==t.imgsrc?((0,a.wg)(),(0,a.j4)(w,{key:0,src:t.imgsrc},null,8,["src"])):(0,a.kq)("",!0)]),(0,a._)("div",r,[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a._)("p",null,(0,i.zw)(t.date),1)])),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a._)("p",o,(0,i.zw)(t.main_title),1)])),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a._)("p",{innerHTML:t.sub_title},null,8,u)])),_:1})])])])),_:1},8,["router-link"])}var d=e(5859),p=(0,a.aZ)({name:"newsItemComponent",props:{date:String,imgsrc:String,name:String,main_title:String,sub_title:String,text:String},components:{IonText:d.yW,IonItem:d.Ie,IonImg:d.Xz}}),w=e(3744);const g=(0,w.Z)(p,[["render",c],["__scopeId","data-v-fa4a756c"]]);var m=g},3955:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var a=e(6252);const i=t=>((0,a.dD)("data-v-8cb0a096"),t=t(),(0,a.Cn)(),t),s={class:"container"},l={class:"btn-wrapper"},r=i((()=>(0,a._)("p",{class:"main-title"},"Новости",-1))),o={key:1};function u(t,n,e,i,u,c){const d=(0,a.up)("Button"),p=(0,a.up)("ion-text"),w=(0,a.up)("ion-spinner"),g=(0,a.up)("NewsItem"),m=(0,a.up)("ion-infinite-scroll-content"),h=(0,a.up)("ion-infinite-scroll"),f=(0,a.up)("ion-content"),_=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{class:"background"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",l,[(0,a.Wm)(d,{class:"btn",name:"Новости",grey:t.newsButton,"router-link":"/tabs/main"},null,8,["grey"]),(0,a.Wm)(d,{class:"btn",name:"Объявления",grey:t.adsButton,"router-link":"/tabs/ads"},null,8,["grey"])]),(0,a.Wm)(p,{class:"main-title"},{default:(0,a.w5)((()=>[r])),_:1}),!0===t.loading?((0,a.wg)(),(0,a.j4)(w,{key:0,name:"bubbles"})):(0,a.kq)("",!0),!1===t.loading?((0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.list,(n=>((0,a.wg)(),(0,a.j4)(g,{key:n?.id,date:n?.date,main_title:n?.name,sub_title:n?.preview,text:n?.preview,onClick:()=>{t.router.push({name:"newsPage",params:{id:n.id,for:"news"}})},imgsrc:n?.image},null,8,["date","main_title","sub_title","text","onClick","imgsrc"])))),128)),(0,a.Wm)(h,{threshold:"100px",id:"infinite-scroll"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{"loading-spinner":"bubbles"})])),_:1})])):(0,a.kq)("",!0)])])),_:1})])),_:1})}var c=e(8903),d=e(5859),p=e(5217),w=e(1745),g=e(2119),m=e(6086),h=e(1014),f=(0,a.aZ)({name:"tabMainPage",data(){return{adsButton:!0,newsButton:!1,detail:null,list:[],page:0,loading:!1}},methods:{...(0,m.nv)(h.m,["fetchNews"]),fetchMoreNews(t){this.$data.page=this.$data.page+1,this.$data.loading=!0,this.fetchNews(this.$data.page).then((()=>{this.$data.loading=!1;for(let t=0;t<this.news?.length;t++){const n=this.news[t];this.$data.list.push(n)}t?.target?.complete()}))}},computed:{news(){return this.$pinia.state.value?.news?.news?.data}},mounted(){this.fetchMoreNews()},setup(){const t=(0,g.tv)();return{router:t,airplaneOutline:c.TTc}},components:{IonPage:d._i,IonContent:d.W2,Button:p.Z,NewsItem:w.Z,IonText:d.yW,IonSpinner:d.PQ,IonInfiniteScroll:d.ju,IonInfiniteScrollContent:d.MB}}),_=e(3744);const v=(0,_.Z)(f,[["render",u],["__scopeId","data-v-8cb0a096"]]);var b=v}}]);
//# sourceMappingURL=3955.d74b104e.js.map