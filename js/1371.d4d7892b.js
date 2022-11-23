"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[1371],{6651:function(t,e,a){a.d(e,{U:function(){return c}});a(7658);var n=a(6086),s=a(9669),o=a.n(s),r=a(3978),i=a(5715);const c=(0,n.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,sberPayResponse:null,sberPayError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null,personalItemData:{}}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){console.log("getting settlements");try{const t=new r.K;await t.create();const e=await t.get("token"),a=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:a}).then((t=>{t.data.error&&i.Z.push("/authPage"),this.getSettlementsResponse=t.data}))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new r.K;await e.create();const a=await e.get("token"),n=JSON.parse(a).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:n,s_id:t}).then((t=>{t.data.error&&i.Z.push("/authPage"),this.getStreetsResponse=t.data}))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new r.K;await e.create();const a=await e.get("token"),n=JSON.parse(a).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:n,ids:t}).then((t=>{t.data.error&&i.Z.push("/authPage"),this.getHousesResponse=t.data}))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new r.K;await t.create();const e=await t.get("token"),a=JSON.parse(e).token,n=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:a,LC:n}).then((t=>{t.data.error&&i.Z.push("/authPage"),this.getAccountResponse=t.data}))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((async t=>{this.addAccountResponse=t.data,t.data.error&&i.Z.push("/authPage");const a=new r.K;await a.create();const n=await a.get("token"),s=JSON.parse(n);await a.set("token",JSON.stringify({...s,lics:[...s.lics,e]}))}))}catch(a){this.addAccountError=a}},async delAccount(t){try{const e=new r.K;await e.create();const a=await e.get("token"),n=JSON.parse(a).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:n,LC:t}).then((async n=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t)),n.data.error&&i.Z.push("/authPage");const s=JSON.parse(a),o=this.getAccountResponse?.data.filter((e=>e?.code!==t)),r={name:s.name,phone:s.phone,email:s.email,password:s.password,token:s.token,lics:o?.map((t=>t?.code))};await e.set("token",JSON.stringify(r)),this.delAccountResponse=n.data}))}catch(e){this.delAccountError=e}},async getPayments(t,e,a){try{const n=new r.K;await n.create();const s=await n.get("token"),c=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments",{token:c,LC:t,beginPeriod:e,endPeriod:a}).then((async t=>{t.data.error&&i.Z.push("/authPage"),this.paymentHistoryResponse=t.data}))}catch(n){this.paymentHistoryError=n}},async getIndices(t,e,a){try{const n=new r.K;await n.create();const s=await n.get("token"),c=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:c,counterId:t,beginPeriod:e,endPeriod:a}).then((t=>{t.data.error&&i.Z.push("/authPage"),this.getIndicesResponse=t.data}))}catch(n){this.getIndicesError=n}},async setIndices(t,e){try{const a=new r.K;await a.create();const n=await a.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices",{token:s,counterId:t,indice:e}).then((e=>{this.setIndicesResponse=e.data,!1===e.data.error&&(this.getIndices(t),this.setIndicesResponse=e.data)}))}catch(a){this.setIndicesError=a}},async sberPay(t,e,a,n){try{const s=new r.K;await s.create();const c=await s.get("token"),l=JSON.parse(c);await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SberPay",{token:l.token,phone:e,email:a,LC:t,accruals:n}).then((t=>{t.data.error&&i.Z.push("/authPage"),this.sberPayResponse=t.data}))}catch(s){this.sberPayError=s}}}})},1371:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var n=a(6252),s=a(3577),o=a(9963);const r={style:{display:"flex"}};function i(t,e,a,i,c,l){const u=(0,n.up)("Back"),d=(0,n.up)("ion-text"),p=(0,n.up)("ion-datetime-button"),h=(0,n.up)("ion-datetime"),g=(0,n.up)("ion-modal"),m=(0,n.up)("ion-row"),y=(0,n.up)("ion-grid"),w=(0,n.up)("ion-col"),f=(0,n.up)("ion-item"),k=(0,n.up)("ion-spinner"),I=(0,n.up)("Layout"),_=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u),(0,n.Wm)(I,{btnSrc:"/personalAccountPayment",height:"false",outlineBtn:".",filledBtn:".",title:"Лицевые счета"},{"header-content":(0,n.w5)((()=>[(0,n.Wm)(d,{class:"main-title"},{default:(0,n.w5)((()=>[(0,n.Uk)("История платежей")])),_:1})])),"main-content":(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{class:"ion-row-last"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{style:{margin:"0 10px 0 0"}},{default:(0,n.w5)((()=>[(0,n.Uk)(" Выберите период: ")])),_:1}),(0,n._)("div",r,[(0,n.Wm)(p,{mode:"ios",color:"date",datetime:"date"}),(0,n.Wm)(d,{style:{margin:"0 5px"}},{default:(0,n.w5)((()=>[(0,n.Uk)("-")])),_:1}),(0,n.Wm)(p,{mode:"ios",color:"date",datetime:"date2"})]),(0,n.Wm)(g,{mode:"ios","keep-contents-mounted":!0},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{onIonChange:e[0]||(e[0]=e=>t.onBeginDateChange(e)),color:"date",presentation:"date",mode:"ios",id:"date"})])),_:1}),(0,n.Wm)(g,{mode:"ios","keep-contents-mounted":!0},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{onIonChange:e[1]||(e[1]=e=>t.onEndDateChange(e)),color:"date",presentation:"date",mode:"ios",id:"date2"})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Чеки")])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Дата")])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Сумма")])),_:1})])),_:1}),(0,n.wy)((0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)("У №"+(0,s.zw)(this.$pinia.state.value?.personalAccount?.personalItemData?.code)+" лицевого счета нет платежей",1)])),_:1})])),_:1},512),[[o.F8,0===this.$pinia.state.value?.personalAccount?.paymentHistoryResponse?.data?.length&&!t.loading]]),(0,n.wy)((0,n.Wm)(f,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{name:"bubbles"})])),_:1},512),[[o.F8,t.loading]]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.paymentHistory,(e=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n.Wm)(m,{class:(0,s.C_)({"ion-row-last":t.paymentHistory[t.paymentHistory?.length-1]?.number===e?.number})},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e?.number),1)])),_:2},1024),(0,n.Wm)(w,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e?.date?e?.date:"-"),1)])),_:2},1024),(0,n.Wm)(w,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(t.maskMoney(e?.summ)),1)])),_:2},1024)])),_:2},1032,["class"])])),[[o.F8,this.$pinia.state.value?.personalAccount?.paymentHistoryResponse?.data[0]?.payments?.length>0&&!t.loading]]))),128))])])),_:1})])),_:1})}var c=a(2201),l=a(2492),u=a(2684),d=a(8903),p=a(291),h=a(6086),g=a(6651),m=a(381),y=a.n(m),w=(0,n.aZ)({name:"personalAccountPaymentHistory",components:{Back:p.Z,IonPage:u._i,Layout:l.Z,IonText:u.yW,IonModal:u.ki,IonDatetime:u.x4,IonDatetimeButton:u.Mj,IonSpinner:u.PQ,IonCol:u.wI,IonGrid:u.jY,IonItem:u.Ie,IonRow:u.Nd},methods:{...(0,h.nv)(g.U,["getPayments"]),maskMoney(t){const e=t?.toString().replace(".",""),a=parseFloat(t?.toFixed(2).toString().replace(".",""));return t?.toString().split(".")[1]?.length<2?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(a/100):t?.toString().includes(".")?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e/100):t?.toString().includes(".")?void 0:new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e)},onBeginDateChange(t){this.$data.loading=!0,this.getPayments(this.$pinia.state.value?.personalAccount?.personalItemData?.code,y()(t.detail.value).format("yyyyMMDD"),this.$data.endDate?this.$data.endDate:y()().format("yyyyMMDD")).then((()=>{this.$data.loading=!1})),this.$data.beginDate=y()(t.detail.value).format("yyyyMMDD")},onEndDateChange(t){this.$data.loading=!0,this.getPayments(this.$pinia.state.value?.personalAccount?.personalItemData?.code,this.$data.beginDate?this.$data.beginDate:y()().format("yyyyMMDD"),y()(t.detail.value).format("yyyyMMDD")).then((()=>{this.$data.loading=!1})),this.$data.endDate=y()(t.detail.value).format("yyyyMMDD")}},computed:{paymentHistory(){return this.$pinia.state.value?.personalAccount?.paymentHistoryResponse?.data[0]?.payments?this.$pinia.state.value?.personalAccount?.paymentHistoryResponse?.data[0]?.payments:[]},paymentHistory2(){return[...this.paymentHistory.slice(1)]}},mounted(){this.$data.loading=!0,this.getPayments(this.$pinia.state.value?.personalAccount?.personalItemData?.code).then((()=>{this.$data.loading=!1}))},data(){return{loading:!1,beginDate:"",endDate:""}},setup(){const t=(0,c.tv)(),e=(0,c.yj)();return{route:e,router:t,pencilOutline:d.Tvs,documentTextOutline:d.L82,chevronForwardOutline:d.Dji}}}),f=a(3744);const k=(0,f.Z)(w,[["render",i],["__scopeId","data-v-1c226df9"]]);var I=k}}]);
//# sourceMappingURL=1371.d4d7892b.js.map