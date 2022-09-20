"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[3705],{6651:function(t,e,n){n.d(e,{U:function(){return r}});var s=n(9876),a=n(9669),o=n.n(a),c=n(3978),i=n(7167);const r=(0,s.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){console.log("getting settlements");try{const t=new c.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:n}).then((t=>this.getSettlementsResponse=t.data))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new c.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:s,s_id:t}).then((t=>this.getStreetsResponse=t.data))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new c.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:s,ids:t}).then((t=>this.getHousesResponse=t.data))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new c.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token,s=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:n,LC:s}).then((t=>this.getAccountResponse=t.data))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((async t=>{if(this.addAccountResponse=t.data,!1===t.data.error){const t=(0,i.r)(),e=new c.K;await e.create();const n=await e.get("token"),s=JSON.parse(n);t.authUser(s.phone,s.password).then((async()=>{const e=new c.K;await e.create(),await e.set("token",JSON.stringify({...s,lics:t?.authResponse?.data?.lics,token:t?.authResponse?.data?.token}))}))}}))}catch(n){this.addAccountError=n}},async delAccount(t){try{const e=new c.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:s,LC:t}).then((async s=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t));const a=JSON.parse(n),o={name:a.name,phone:a.phone,email:a.email,password:a.password,token:a.token,lics:this.getAccountResponse?.data.filter((e=>e.code!==t))};await e.set("token",JSON.stringify(o)),this.delAccountResponse=s.data}))}catch(e){this.delAccountError=e}},async getPayments(t){try{const e=new c.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments",{token:s,LC:t}).then((async t=>{this.paymentHistoryResponse=t.data}))}catch(e){this.paymentHistoryError=e}},async getIndices(t){try{const e=new c.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:s,counterId:t}).then((t=>{this.getIndicesResponse=t.data}))}catch(e){this.getIndicesError=e}},async setIndices(t,e){try{const n=new c.K;await n.create();const s=await n.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices",{token:a,counterId:t,indice:e}).then((e=>{console.log("testsetIndices"),this.getIndices(t),this.setIndicesResponse=e.data}))}catch(n){this.setIndicesError=n}}}})},783:function(t,e,n){n.d(e,{Z:function(){return l}});var s=n(6252);const a={class:"main"};function o(t,e,n,o,c,i){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.WI)(t.$slots,"content",{},void 0,!0)])}var c=(0,s.aZ)({setup(){},name:"layoutBox",components:{},props:{btnSrc:String,filledButton:String,title:String,height:String}}),i=n(3744);const r=(0,i.Z)(c,[["render",o],["__scopeId","data-v-4246b103"]]);var l=r},3705:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var s=n(6252),a=n(3577);const o=t=>((0,s.dD)("data-v-6af95202"),t=t(),(0,s.Cn)(),t),c={class:"container"},i={class:"btn-wrapper"},r={class:"title ion-text-start"},l=o((()=>(0,s._)("p",{class:"title ion-text-start"},"Счетчик",-1))),u=(0,s.Uk)("Датa"),d=(0,s.Uk)("Показания"),p=o((()=>(0,s._)("p",{class:"title ion-text-start"},"Новые показания",-1))),g={class:"ion-text-center"},h=o((()=>(0,s._)("p",{class:"ion-text-center"}," В случае не правильного ввода показаний счетчика, следует обратиться в абоненский отдел УГРС по тел. 8(4112)-42-00-30, 46-00-41, 46-00-71 ",-1)));function w(t,e,n,o,w,m){const _=(0,s.up)("Back"),I=(0,s.up)("Button"),k=(0,s.up)("ion-text"),f=(0,s.up)("ion-item"),S=(0,s.up)("layout-box"),y=(0,s.up)("Input"),A=(0,s.up)("ion-content"),v=(0,s.up)("ion-page");return(0,s.wg)(),(0,s.j4)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_),(0,s.Wm)(A,{fullscreen:!0,class:"background"},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",i,[(0,s.Wm)(I,{class:"btn",grey:!0,name:"Оплата","router-link":"/personalAccountPayment"}),(0,s.Wm)(I,{class:"btn",name:"Показания"})]),(0,s.Wm)(S,null,{content:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s._)("p",r," Лицевой счет №"+(0,a.zw)(t.lcList?.code),1)])),_:1}),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.lcList?.name),1)])),_:1})])),_:1}),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.lcList?.address),1)])),_:1})])),_:1})])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.indicesList,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.Wm)(S,null,{content:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[l])),_:1}),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(JSON.parse(t.lcList.counters)?.name),1)])),_:1})])),_:1}),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(k,{slot:"end",class:"text-end"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.date),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[d])),_:1}),(0,s.Wm)(k,{slot:"end",class:"text-end"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.indication),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128)),(0,s.Wm)(S,null,{content:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(y,{textBlue:!0,type:"text",value:t.indication,changeHandler:t.changeIndication,name:"Введите показания счетчика"},null,8,["value","changeHandler"])])),_:1}),(0,s.Wm)(I,{loading:t.loading,name:"Подтвердить",onClick:t.setIndicesHandler},null,8,["loading","onClick"]),(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s._)("p",g,(0,a.zw)(t.setIndicesMessage),1),h])),_:1})])])),_:1})])),_:1})}var m=n(8676),_=n(1558),I=n(783),k=n(4611),f=n(4043),S=n(2119),y=n(9876),A=n(6651),v=(0,s.aZ)({setup(){const t=(0,S.tv)(),e=(0,S.yj)();return{router:t,route:e}},data(){return{indication:"",loading:!1}},methods:{...(0,y.nv)(A.U,["getIndices","setIndices"]),setIndicesHandler(){this.$data.loading=!0;const t=JSON.parse(this.$route.params?.counters)?.counterId,e=new Promise((e=>{e(this.setIndices(t,this.$data.indication))}));e.then((()=>{this.$data.loading=!1})),console.log(this.$data.indication,t,"indication")},changeIndication(t){this.$data.indication=t.target.value}},computed:{indicesList(){return this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data[0]?.indications?this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data[0]?.indications:[]},lcList(){return this.$route.params},setIndicesMessage(){return this.$pinia.state.value?.personalAccount?.setIndicesResponse?.data?.message}},mounted(){this.getIndices(JSON.parse(this.$route.params.counters).counterId)},names:"personalAccauntIndication",components:{Back:f.Z,LayoutBox:I.Z,IonContent:m.W2,IonPage:m._i,Button:_.Z,IonText:m.yW,Input:k.Z,IonItem:m.Ie}}),W=n(3744);const R=(0,W.Z)(v,[["render",w],["__scopeId","data-v-6af95202"]]);var N=R}}]);
//# sourceMappingURL=3705.185462bd.js.map