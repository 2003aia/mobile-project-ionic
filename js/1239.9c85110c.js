"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[1239],{6651:function(t,e,s){s.d(e,{U:function(){return i}});s(7658);var a=s(6086),n=s(9669),o=s.n(n),l=s(3978),r=s(1689);const i=(0,a.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,sberPayResponse:null,sberPayError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null,personalItemData:{}}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){console.log("getting settlements");try{const t=new l.K;await t.create();const e=await t.get("token"),s=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:s}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getSettlementsResponse=t.data}))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new l.K;await e.create();const s=await e.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:a,s_id:t}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getStreetsResponse=t.data}))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new l.K;await e.create();const s=await e.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:a,ids:t}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getHousesResponse=t.data}))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new l.K;await t.create();const e=await t.get("token"),s=JSON.parse(e).token,a=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:s,LC:a}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getAccountResponse=t.data}))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((async t=>{this.addAccountResponse=t.data,t.data.error&&r.Z.push("/authPage");const s=new l.K;await s.create();const a=await s.get("token"),n=JSON.parse(a);await s.set("token",JSON.stringify({...n,lics:[...n.lics,e]}))}))}catch(s){this.addAccountError=s}},async delAccount(t){try{const e=new l.K;await e.create();const s=await e.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:a,LC:t}).then((async a=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t)),a.data.error&&r.Z.push("/authPage");const n=JSON.parse(s),o=this.getAccountResponse?.data.filter((e=>e?.code!==t)),l={name:n.name,phone:n.phone,email:n.email,password:n.password,token:n.token,lics:o?.map((t=>t?.code))};await e.set("token",JSON.stringify(l)),this.delAccountResponse=a.data}))}catch(e){this.delAccountError=e}},async getPayments(t,e,s){try{const a=new l.K;await a.create();const n=await a.get("token"),i=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments",{token:i,LC:t,beginPeriod:e,endPeriod:s}).then((async t=>{t.data.error&&r.Z.push("/authPage"),this.paymentHistoryResponse=t.data}))}catch(a){this.paymentHistoryError=a}},async getIndices(t,e,s){try{const a=new l.K;await a.create();const n=await a.get("token"),i=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:i,counterId:t,beginPeriod:e,endPeriod:s}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getIndicesResponse=t.data}))}catch(a){this.getIndicesError=a}},async setIndices(t,e){try{const s=new l.K;await s.create();const a=await s.get("token"),n=JSON.parse(a).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices",{token:n,counterId:t,indice:e}).then((e=>{e.data.error&&r.Z.push("/authPage"),!1===e.data.error&&(this.getIndices(t),this.setIndicesResponse=e.data)}))}catch(s){this.setIndicesError=s}},async sberPay(t,e,s,a,n,i,u){try{const c=new l.K;await c.create();const d=await c.get("token"),h=JSON.parse(d);await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SberPay",{token:h.token,phone:e,email:s,LC:t,accruals:a,penalties:i,advances:u,sumTO:n}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.sberPayResponse=t.data}))}catch(c){this.sberPayError=c}}}})},1239:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var a=s(6252),n=s(9963),o=s(3577);const l=t=>((0,a.dD)("data-v-19555a34"),t=t(),(0,a.Cn)(),t),r=l((()=>(0,a._)("p",{class:"title ion-text-start"},"Узнать лицевой счет",-1))),i={class:"input-wrapper",slot:"header"},u={slot:"content"},c={class:"input-wrapper",slot:"header"},d={slot:"content"},h={class:"input-wrapper",slot:"header"},p={slot:"content"},g={class:"input-wrapper",slot:"header"},w={slot:"content"},m={class:"input-wrapper",slot:"header"},f={slot:"content"},_={class:"ion-text-start"},y={class:"ion-text-start"},k={class:"blue"},v={class:"ion-text-start error"};function L(t,e,s,l,L,S){const A=(0,a.up)("Back"),$=(0,a.up)("ion-text"),W=(0,a.up)("ion-spinner"),I=(0,a.up)("ion-item"),H=(0,a.up)("ion-accordion"),P=(0,a.up)("ion-accordion-group"),C=(0,a.up)("ion-checkbox"),R=(0,a.up)("Layout"),D=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A),(0,a.Wm)(R,{method2:t.addAccountHandler,height:"false",outlineBtn:"Добавить лицевой счёт",filledBtn:".",loading2:t.loading,title:"Лицевой счёт"},{"main-content":(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(P,{ref:"accordion"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{value:"first","toggle-icon":t.caretDownSharp},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>t.country=e),class:"input",placeholder:"Введите населенный пункт"},null,512),[[n.nr,t.country]])]),(0,a._)("div",u,[(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"bubbles"})])),_:1},512),[[n.F8,t.loading2]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.ulusList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.ulusId},[(0,a.Wm)(I,{lines:t.ulusList[t.ulusList?.length-1]?.ulus===e?.ulus&&"none",onClick:s=>t.fetchSettlementsHandler(e.ulusId,e.ulus)},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.ulus),1)])),_:2},1024)])),_:2},1032,["lines","onClick"])])))),128)),(0,a.wy)((0,a.Wm)(I,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)("не найдено")])),_:1})])),_:1},512),[[n.F8,0===t.ulusList?.length]])])])),_:1},8,["toggle-icon"]),(0,a.Wm)(H,{value:"second","toggle-icon":t.caretDownSharp},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>t.settlement=e),class:"input",placeholder:"Введите населенный пункт"},null,512),[[n.nr,t.settlement]])]),(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.settlementsList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.s_id},[(0,a.Wm)(I,{lines:t.settlementsList[t.settlementsList?.length-1]?.settlement===e?.settlement&&"none",onClick:s=>t.fetchStreetsHandler(e.s_id,e.settlement)},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.settlement),1)])),_:2},1024)])),_:2},1032,["lines","onClick"])])))),128)),(0,a.wy)((0,a.Wm)(I,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)("не найдено")])),_:1})])),_:1},512),[[n.F8,0===t.settlementsList?.length]])])])),_:1},8,["toggle-icon"]),(0,a.Wm)(H,{value:"third","toggle-icon":t.caretDownSharp},{default:(0,a.w5)((()=>[(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=e=>t.street=e),class:"input",placeholder:"Введите улицу"},null,512),[[n.nr,t.street]])]),(0,a._)("div",p,[(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"bubbles"})])),_:1},512),[[n.F8,t.loading3]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.streetsList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.street},[(0,a.Wm)(I,{lines:t.streetsList[t.streetsList.length-1]?.street===e.street&&"none",onClick:s=>t.fetchHousesHandler(e.ids,e.street)},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.street),1)])),_:2},1024)])),_:2},1032,["lines","onClick"])])))),128)),(0,a.wy)((0,a.Wm)(I,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)("не найдено")])),_:1})])),_:1},512),[[n.F8,0===t.streetsList?.length]])])])),_:1},8,["toggle-icon"]),(0,a.Wm)(H,{value:"fourth","toggle-icon":t.caretDownSharp},{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=e=>t.house=e),class:"input",placeholder:"Введите дом улицы"},null,512),[[n.nr,t.house]])]),(0,a._)("div",w,[(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"bubbles"})])),_:1},512),[[n.F8,t.loading4]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.housesList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(I,{lines:t.housesList[t.housesList.length-1]?.house===e?.house&&"none",onClick:s=>t.fetchLicsHandler(e?.house)},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e?.house),1)])),_:2},1024)])),_:2},1032,["lines","onClick"])])))),128)),(0,a.wy)((0,a.Wm)(I,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)("не найдено")])),_:1})])),_:1},512),[[n.F8,0===t.housesList?.length]])])])),_:1},8,["toggle-icon"]),(0,a.wy)((0,a.Wm)(H,{value:"fifth","toggle-icon":t.caretDownSharp},{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=e=>t.apartment=e),class:"input",placeholder:"Введите номер квартиры"},null,512),[[n.nr,t.apartment]])]),(0,a._)("div",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.apartmentsList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(I,{lines:t.apartmentsList[t.apartmentsList.length-1]?.apartment===e?.apartment&&"none",onClick:s=>t.fetchLicsHandler2(e?.apartment)},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e?.apartment),1)])),_:2},1024)])),_:2},1032,["lines","onClick"])])))),128)),(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)("не найдено")])),_:1})])),_:1},512),[[n.F8,0===t.apartmentsList?.length]])])])),_:1},8,["toggle-icon"]),[[n.F8,0!==t.housesList?.length&&void 0!==t.housesList&&t.apartmentsList.length>0]])])),_:1},512),(0,a.wy)((0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.licsList,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t?.lics,(t=>((0,a.wg)(),(0,a.j4)($,{key:t?.code},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{lines:"none",class:"check"},{default:(0,a.w5)((()=>[(0,a.Wm)($,{class:"lics",slot:"start"},{default:(0,a.w5)((()=>[(0,a._)("p",_,"Лицевой счет: "+(0,o.zw)(t?.code),1)])),_:2},1024),(0,a.Wm)(C,{modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,slot:"end"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)))),128))])))),128))],512),[[n.F8,0!==t.licsList?.length]]),(0,a.wy)((0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.licsApartmentsList,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t?.lics,(t=>((0,a.wg)(),(0,a.j4)($,{key:t?.code},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{class:"check",lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)($,{class:"lics",slot:"start"},{default:(0,a.w5)((()=>[(0,a._)("p",y,"Лицевой счет: "+(0,o.zw)(t?.code),1)])),_:2},1024),(0,a.Wm)(C,{modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,slot:"end"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)))),128))])))),128))],512),[[n.F8,0!==t.housesList?.length&&void 0!==t.housesList&&0!==t.licsApartmentsList?.length]]),(0,a.wy)((0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a._)("p",k,(0,o.zw)(t.response),1)])),_:1},512),[[n.F8,0!==t.response?.length]]),(0,a.wy)((0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a._)("p",v,(0,o.zw)(t.error),1)])),_:1},512),[[n.F8,0!==t.error?.length]])])),_:1},8,["method2","loading2"])])),_:1})}s(7658);var S=s(2201),A=s(222),$=s(2684),W=s(8903),I=s(9177),H=s(3978),P=s(6086),C=s(6651),R=(0,a.aZ)({name:"personalAccauntInfoSearchPage",components:{IonAccordionGroup:$.eh,IonAccordion:$.We,Back:I.Z,IonPage:$._i,Layout:A.Z,IonText:$.yW,IonItem:$.Ie,IonSpinner:$.PQ,IonCheckbox:$.nz},data(){return{error:"",house:"",street:"",settlement:"",settlementId:"",country:"",apartment:"",lc:[],loading:!1,response:[],arrMapLics:[],loading2:!0,loading3:!1,loading4:!1}},computed:{ulusList(){return this.$pinia.state.value?.personalAccount?.getSettlementsResponse?.data.filter((t=>t.ulus.toLowerCase().includes(this.$data.country.toLowerCase())))},settlementsList(){return this.ulusList?.filter((t=>t?.ulusId===this.$data.settlementId))[0]?.settlements?.filter((t=>t?.settlement?.toLowerCase().includes(this.$data.settlement.toLowerCase())))},streetsList(){return this.$pinia.state.value?.personalAccount?.getStreetsResponse?.data.flatMap((t=>t)).filter((t=>t.street.toLowerCase().includes(this.$data.street.toLowerCase())))},housesList(){return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data.flatMap((t=>t)).filter((t=>t.house.toLowerCase().includes(this.$data.house.toLowerCase())))},apartmentsList(){return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data?.filter((t=>t.house.toLowerCase()===this.$data.house.toLowerCase())).flatMap((t=>t?.apartments?.flatMap((t=>t)))).filter((t=>t?.apartment?.toLowerCase().includes(this.$data.apartment.toLowerCase())))},licsApartmentsList(){return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data.filter((t=>t.house.toLowerCase()===this.$data.house.toLowerCase())).flatMap((t=>t?.apartments?.flatMap((t=>t)))).filter((t=>t?.apartment?.toLowerCase()===this.$data.apartment.toLowerCase()))},licsList(){return this.$pinia.state.value?.personalAccount?.getHousesResponse?.data.flatMap((t=>t)).filter((t=>t.house.toLowerCase()===this.$data.house.toLowerCase()))}},mounted(){this.$data.loading2=!0,this.getSettlements().then((()=>this.$data.loading2=!1))},methods:{...(0,P.nv)(C.U,["getSettlements","getStreets","getHouses","addAccount","getAccount"]),onFocusText:function(){this.$refs.text.focus()},fetchSettlementsHandler(t,e){this.$data.settlementId=t,this.$data.country=e,this.$refs.accordion.$el.value=void 0},fetchStreetsHandler(t,e){this.$data.loading3=!0;const s=new Promise((e=>{e(this.getStreets(t))}));s.then((()=>this.$data.loading3=!1)),this.$refs.accordion.$el.value=void 0,this.$data.settlement=e},fetchHousesHandler(t,e){this.$data.loading4=!0;const s=new Promise((e=>{e(this.getHouses(t))}));s.then((()=>this.$data.loading4=!1)),this.$refs.accordion.$el.value=void 0,this.$data.street=e},fetchLicsHandler(t){this.$refs.accordion.$el.value=void 0,this.$data.house=t},fetchLicsHandler2(t){this.$refs.accordion.$el.value=void 0,this.$data.apartment=t},async addAccountHandler(){const t=new H.K;await t.create();const e=await t.get("token"),s=this.licsList[0]?.lics?.filter((t=>!0===t?.value)),a=this.licsApartmentsList[0]?.lics?.filter((t=>!0===t?.value));if(0!==s?.length&&void 0!==s||0!==a?.length&&void 0!==a){this.$data.loading=!0;const t=void 0!==s?s?.map((t=>t?.code)):a?.map((t=>t?.code)),n=new Promise((s=>{s(this.addAccount(JSON.parse(e).token,t))}));n.then((()=>{this.$data.error="",this.getAccount().then((()=>{this.$router.push("/tabs/personalAccounts")})),this.$data.loading=!1,this.$data.response=this.$pinia.state.value.personalAccount?.addAccountResponse[0]?.message}))}else this.$data.response="",this.$data.error="Выберите лицевой счет"}},setup(){const t=(0,S.tv)();return{router:t,pencilOutline:W.Tvs,documentTextOutline:W.L82,chevronForwardOutline:W.Dji,caretDownSharp:W.D2O}}}),D=s(3744);const N=(0,D.Z)(R,[["render",L],["__scopeId","data-v-19555a34"]]);var b=N}}]);
//# sourceMappingURL=1239.9c85110c.js.map