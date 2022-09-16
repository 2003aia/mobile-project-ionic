"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[2903],{6651:function(t,e,n){n.d(e,{U:function(){return c}});var s=n(1575),a=n(9669),o=n.n(a),l=n(3978);const c=(0,s.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,getAccountError:null,delAccountResponse:null,delAccountError:null,getIndicesResponse:null,getIndicesError:null}),actions:{async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((t=>this.addAccountResponse=t.data))}catch(n){this.addAccountError=n}},async getSettlements(){console.log("getting settlements");try{const t=new l.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:n}).then((t=>this.getSettlementsResponse=t.data))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:s,s_id:t}).then((t=>this.getStreetsResponse=t.data))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:s,ids:t}).then((t=>this.getHousesResponse=t.data))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new l.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token,s=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:n,LC:s}).then((t=>this.getAccountResponse=t.data))}catch(t){this.getAccountError=t}},async delAccount(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:s,LC:t}).then((t=>this.delAccountResponse=t.data))}catch(e){this.delAccountError=e}},async getIndices(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:s,counterId:t}).then((t=>this.getIndicesResponse=t.data))}catch(e){this.getIndicesError=e}}}})},783:function(t,e,n){n.d(e,{Z:function(){return r}});var s=n(6252);const a={class:"main"};function o(t,e,n,o,l,c){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.WI)(t.$slots,"content",{},void 0,!0)])}var l=(0,s.aZ)({setup(){},name:"layoutBox",components:{},props:{btnSrc:String,filledButton:String,title:String,height:String}}),c=n(3744);const u=(0,c.Z)(l,[["render",o],["__scopeId","data-v-4246b103"]]);var r=u},2903:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var s=n(6252);const a=t=>((0,s.dD)("data-v-1e5b553a"),t=t(),(0,s.Cn)(),t),o={class:"container"},l={class:"btn-wrapper"},c=a((()=>(0,s._)("p",{class:"title ion-text-start"},"Лицевой счет №123456789",-1))),u=(0,s.Uk)(" Иванов Иван Иванович "),r=(0,s.Uk)(" Автодорожная 11/4 "),d=a((()=>(0,s._)("p",{class:"title ion-text-start"},"Счетчик",-1))),i=(0,s.Uk)("G-4 №123456789 пл. 1234"),p=(0,s.Uk)("От 01.02.2022"),g=(0,s.Uk)("Показания"),h=(0,s.Uk)(" 12345"),w=(0,s.Uk)("Дата следующей проверки"),_=(0,s.Uk)(" 01.05.2022 "),m=(0,s.Uk)("Дата последнего показания"),f=(0,s.Uk)(" 01.05.2022 "),k=a((()=>(0,s._)("p",{class:"title ion-text-start"},"Счетчик",-1))),W=a((()=>(0,s._)("p",{class:"ion-text-center"}," В случае не правильного ввода показаний счетчика, следует обратиться в абоненский отдел УГРС по тел. 8(4112)-42-00-30, 46-00-41, 46-00-71 ",-1)));function S(t,e,n,a,S,A){const I=(0,s.up)("Back"),v=(0,s.up)("Button"),y=(0,s.up)("ion-text"),E=(0,s.up)("ion-item"),N=(0,s.up)("layout-box"),R=(0,s.up)("Input"),x=(0,s.up)("ion-content"),G=(0,s.up)("ion-page");return(0,s.wg)(),(0,s.j4)(G,null,{default:(0,s.w5)((()=>[(0,s.Wm)(I),(0,s.Wm)(x,{fullscreen:!0,class:"background"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",l,[(0,s.Wm)(v,{class:"btn",grey:!0,name:"Оплата","router-link":"/personalAccountPayment"}),(0,s.Wm)(v,{class:"btn",name:"Показания"})]),(0,s.Wm)(N,null,{content:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[c])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[u])),_:1})])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[r])),_:1})])),_:1})])),_:1}),(0,s.Wm)(N,null,{content:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[d])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[i])),_:1})])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[p])),_:1})])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[g])),_:1}),(0,s.Wm)(y,{slot:"end",class:"text-end"},{default:(0,s.w5)((()=>[h])),_:1})])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[w])),_:1}),(0,s.Wm)(y,{slot:"end",class:"text-end"},{default:(0,s.w5)((()=>[_])),_:1})])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(y,{slot:"end",class:"text-end"},{default:(0,s.w5)((()=>[f])),_:1})])),_:1}),(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[k])),_:1}),(0,s.Wm)(R,{textBlue:!0,name:"Введите показания счетчика"})])),_:1}),(0,s.Wm)(v,{name:"Подтвердить"}),(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[W])),_:1})])])),_:1})])),_:1})}var A=n(297),I=n(1558),v=n(783),y=n(3327),E=n(4043),N=n(2119),R=n(1575),x=n(6651),G=(0,s.aZ)({setup(){const t=(0,N.tv)();return{router:t}},props:{},methods:{...(0,R.nv)(x.U,["getIndices"])},mounted(){console.log(this.$route,"testtt")},names:"personalAccauntIndication",components:{Back:E.Z,LayoutBox:v.Z,IonContent:A.W2,IonPage:A._i,Button:I.Z,IonText:A.yW,Input:y.Z,IonItem:A.Ie}}),U=n(3744);const b=(0,U.Z)(G,[["render",S],["__scopeId","data-v-1e5b553a"]]);var P=b}}]);
//# sourceMappingURL=2903.f9f9eb9d.js.map