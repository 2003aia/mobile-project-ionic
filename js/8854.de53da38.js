"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[8854],{8326:function(t,e,n){n.d(e,{m:function(){return l}});var a=n(1575),i=n(9669),s=n.n(i);const l=(0,a.Q_)({id:"news",state:()=>({news:[],newsDetail:null}),getters:{getPostsPerAuthor:t=>e=>t.posts.filter((t=>t.userId===e))},actions:{async fetchNews(t){this.news=[];try{this.news=await s().get(`https://aostng.ru/api/v2/news/all/page/${t}/`).then((t=>t.data))}catch(e){this.error=e}},async fetchNewsDetail(t){this.post=null;try{this.newsDetail=await s().get(`https://aostng.ru/api/v2/news/${t}}/`).then((t=>t.data))}catch(e){this.error=e}}}})},8854:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=n(6252),i=n(3577);const s={key:1},l={class:"img-wrapper"},r={class:"main-title"},u={class:"container"},o=["innerHTML"],c=["innerHTML"];function d(t,e,n,d,p,g){const m=(0,a.up)("Back"),w=(0,a.up)("ion-spinner"),h=(0,a.up)("ion-text"),f=(0,a.up)("ion-img"),_=(0,a.up)("ion-content"),v=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,{class:"background"},{default:(0,a.w5)((()=>[(0,a.Wm)(m),!0===t.loading?((0,a.wg)(),(0,a.j4)(w,{key:0,name:"bubbles"})):(0,a.kq)("",!0),!1===t.loading?((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",{class:(0,i.C_)(["img",{imgHeight:""===t.detail?.image}])},[(0,a._)("div",l,[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a._)("p",r,(0,i.zw)(t.detail?.name),1)])),_:1})]),""!==t.detail?.image?((0,a.wg)(),(0,a.j4)(f,{key:0,src:t.detail?.image},null,8,["src"])):(0,a.kq)("",!0)],2),(0,a._)("div",u,[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a._)("p",{class:"sub-title",innerHTML:t.detail?.preview},null,8,o)])),_:1}),(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a._)("p",{class:"main-text",innerHTML:t.detail?.detail},null,8,c)])),_:1})])])):(0,a.kq)("",!0)])),_:1})])),_:1})}var p=n(2262),g=n(8903),m=n(297),w=n(4043),h=n(2119),f=n(1575),_=n(8326),v=(0,a.aZ)({name:"infoMainPage",props:{backBtn:String,main_title:String,sub_title:String,text:String,test:String},data(){return{params:String}},setup(){const t=(0,h.yj)(),e=(0,h.tv)();let n=(0,p.iH)(null),a=(0,p.iH)(!0);function i(){const{newsDetail:e}=(0,f.Jk)((0,_.m)()),{fetchNewsDetail:i}=(0,_.m)();a.value=!0,i(t.params.id).then((()=>{n.value=e.value.data})).then((()=>a.value=!1))}return i(),console.log(t.params,"params"),{detail:n,router:e,route:t,loading:a,airplaneOutline:g.TTc}},methods:{},components:{IonPage:m._i,IonContent:m.W2,IonText:m.yW,Back:w.Z,IonImg:m.Xz,IonSpinner:m.PQ}}),k=n(3744);const b=(0,k.Z)(v,[["render",d],["__scopeId","data-v-0c33d0c8"]]);var y=b}}]);
//# sourceMappingURL=8854.de53da38.js.map