"use strict";(self["webpackChunkstng"]=self["webpackChunkstng"]||[]).push([[8462],{7843:function(e,t,a){a.d(t,{s:function(){return i}});var s=a(6086),n=a(9669),o=a.n(n),p=a(3978);const i=(0,s.Q_)({id:"appeals",state:()=>({appealsListResponse:null,appealsListError:null,appealsInfoError:null,appealsInfoResponse:null,createAppealResponse:null,createMessageResponse:null,createAppealError:null,createMessageError:null,appealsCategoriesResponse:null,appealsCategoriesError:null,newAppeal:!1,appealsItem:{}}),getters:{getPostsPerAuthor:e=>t=>e.posts.filter((e=>e.userId===t))},actions:{async getAppealsList(){const e=new p.K;await e.create();const t=await e.get("support");try{this.appealsListResponse=await o().post("https://api.aostng.ru/api/v2/support/list/",{token:t.token}).then((e=>e.data))}catch(a){this.appealsListError=a}},async getAppealsInfo(e,t){const a=new p.K;await a.create();try{this.appealsInfoResponse=await o().post("https://api.aostng.ru/api/v2/support/detail/",{token:e,ticketId:t}).then((e=>e.data)).catch((e=>{this.appealsInfoError=e}))}catch(s){this.appealsInfoError=s}},async getAppealsCategoreis(){try{this.appealsCategoriesResponse=await o().get("https://api.aostng.ru/api/v2/support/categories/").then((e=>e.data)).catch((e=>{this.appealsCategoriesError=e}))}catch(e){this.appealsCategoriesError=e}},async createMessage(e,t,a,s,n){const o=new p.K;await o.create();try{const o=new FormData;for(let e=0;e<n.length;e++){const t=n[e];o.append("files[]",t)}o.append("token",e),o.append("message",t),o.append("category",a),o.append("ticketId",s);const p=await fetch("https://api.aostng.ru/api/v2/support/message/",{method:"POST",mode:"cors",body:o}).then((async()=>{this.createMessageResponse=await p.json()}))}catch(i){this.createMessageError=i}},async createAppeal(e,t,a,s){const n=new p.K;await n.create();const o=new FormData;for(let p=0;p<s.length;p++){const e=s[p];o.append("files[]",e)}o.append("token",e),o.append("message",t),o.append("category",a);try{const e=await fetch("https://api.aostng.ru/api/v2/support/create/",{method:"POST",mode:"cors",body:o}).then((async()=>{this.createAppealResponse=await e.json()}))}catch(i){this.createAppealError=i}}}})},7717:function(e,t,a){a.d(t,{Z:function(){return r}});var s=a(6252),n=a(3577);function o(e,t,a,o,p,i){return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)({main:!0,padding:e.padding,bgBlue:e.bgBlue}),onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[(0,s.WI)(e.$slots,"content",{},void 0,!0)],2)}var p=(0,s.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function,bgBlue:Boolean}}),i=a(3744);const l=(0,i.Z)(p,[["render",o],["__scopeId","data-v-7ef2f989"]]);var r=l},8462:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});a(7658);var s=a(6252),n=a(3577),o=a(9963);const p=["onClick"],i={class:"item-header"};function l(e,t,l,r,c,u){const A=(0,s.up)("Back"),d=(0,s.up)("ion-text"),g=(0,s.up)("ion-badge"),h=(0,s.up)("ion-item"),w=(0,s.up)("ion-img"),m=(0,s.up)("ion-icon"),B=(0,s.up)("ion-spinner"),f=(0,s.up)("LayoutBox"),I=(0,s.up)("Layout"),E=(0,s.up)("ion-page");return(0,s.wg)(),(0,s.j4)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(A,{onClick:t[0]||(t[0]=()=>e.checkStatus=!1),btnSrc:()=>{!1===e.checkStatus&&e.router.push("/tabs/main")},title:"Обращения"},null,8,["btnSrc"]),(0,s.Wm)(I,{height:"false",outlineBtn:".",method:()=>e.checkStatus=!1,filledBtn:".",title:"Обращение"},(0,s.Nv)({"main-content":(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.appealsListResponse?.data,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.title},[(0,s._)("div",{class:"item",onClick:()=>{this.$pinia.state.value.appeals.appealsItem=t,e.router.push({name:"appealsMessages"})}},[(0,s._)("div",i,[(0,s.Wm)(d,{class:"title ion-text-start"},{default:(0,s.w5)((()=>[(0,s.Uk)("№"+(0,n.zw)(t.id),1)])),_:2},1024),(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(t?.messages),1)])),_:2},1024)]),(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{class:"text time"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(t.date_create),1)])),_:2},1024)])),_:2},1024)],8,p)])))),128))],512),[[o.F8,0!==e.appealsListResponse?.data.length||void 0!==e.appealsListResponse?.data]]),(0,s.wy)((0,s._)("div",{onClick:t[1]||(t[1]=()=>{this.$pinia.state.value.appeals.newAppeal=!0,e.router.push({name:"appealsMessages"})})},[(0,s.Wm)(d,{class:"sub-title ion-text-start"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Обращение ")])),_:1}),(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(w,{slot:"start",class:"icon-start",src:a(3671)},null,8,["src"]),(0,s.Wm)(d,{class:"sub-title"},{default:(0,s.w5)((()=>[(0,s.Uk)("Создать новое обращение")])),_:1}),(0,s.Wm)(m,{class:"icon-end",slot:"end",icon:e.chevronForwardOutline},null,8,["icon"])])),_:1})],512),[[o.F8,void 0===e.appealsListResponse?.data||0==e.appealsListResponse?.data.length]])])),default:(0,s.w5)((()=>[(0,s.Wm)(B,{name:"bubbles"})])),_:2},[e.appealsListResponse?.data?.length>0?{name:"content",fn:(0,s.w5)((()=>[(0,s.Wm)(f,null,{content:(0,s.w5)((()=>[(0,s._)("div",{onClick:t[2]||(t[2]=()=>{this.$pinia.state.value.appeals.newAppeal=!0,e.router.push({name:"appealsMessages"})})},[(0,s.Wm)(d,{class:"sub-title ion-text-start"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Обращение ")])),_:1}),(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(w,{slot:"start",class:"icon-start",src:a(3671)},null,8,["src"]),(0,s.Wm)(d,{class:"sub-title"},{default:(0,s.w5)((()=>[(0,s.Uk)("Создать новое обращение")])),_:1}),(0,s.Wm)(m,{class:"icon-end",slot:"end",icon:e.chevronForwardOutline},null,8,["icon"])])),_:1})])])),_:1})])),key:"0"}:void 0]),1032,["method","filledBtn"])])),_:1})}var r=a(2262),c=a(2201),u=a(1993),A=a(7717),d=a(23),g=a(8903),h=a(7821),w=a(9461),m=a(7843),B=a(6086),f=a(3978),I=(0,s.aZ)({name:"appealsPage",components:{IonPage:h._i,Layout:u.Z,IonText:h.yW,IonItem:h.Ie,Back:d.Z,IonBadge:h.yp,IonIcon:h.gu,IonImg:h.Xz,IonSpinner:h.PQ,LayoutBox:A.Z},data(){return{checkStatus:!1}},setup(){const e=(0,c.tv)(),t=new f.K,a=(0,r.iH)(!1),{getAppealsList:s}=(0,m.s)(),{appealsListResponse:n}=(0,B.Jk)((0,m.s)()),o=async()=>{await t.create(),a.value=!0,console.log("testappeals"),await s().then((async()=>{await t.create(),a.value=!1}))};return(0,h.Yr)((()=>{o(),w.m.close("menu")})),{router:e,paperPlaneOutline:g.I88,chevronForwardOutline:g.Dji,appealsListResponse:n,loading:a}}}),E=a(3744);const v=(0,E.Z)(I,[["render",l],["__scopeId","data-v-73fe2739"]]);var C=v},3671:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=8462.d3cf0476.js.map