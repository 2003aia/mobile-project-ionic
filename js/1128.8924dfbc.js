"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[1128],{6651:function(t,e,s){s.d(e,{U:function(){return c}});var n=s(6086),a=s(9669),o=s.n(a),r=s(3978);const c=(0,n.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,sberPayResponse:null,sberPayError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null,personalItemData:{}}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){console.log("getting settlements");try{const t=new r.K;await t.create();const e=await t.get("token"),s=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:s}).then((t=>this.getSettlementsResponse=t.data))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new r.K;await e.create();const s=await e.get("token"),n=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:n,s_id:t}).then((t=>this.getStreetsResponse=t.data))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new r.K;await e.create();const s=await e.get("token"),n=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:n,ids:t}).then((t=>this.getHousesResponse=t.data))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new r.K;await t.create();const e=await t.get("token"),s=JSON.parse(e).token,n=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:s,LC:n}).then((t=>this.getAccountResponse=t.data))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((async t=>{this.addAccountResponse=t.data;const s=new r.K;await s.create();const n=await s.get("token"),a=JSON.parse(n);await s.set("token",JSON.stringify({...a,lics:[...a.lics,e]}))}))}catch(s){this.addAccountError=s}},async delAccount(t){try{const e=new r.K;await e.create();const s=await e.get("token"),n=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:n,LC:t}).then((async n=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t));const a=JSON.parse(s),o=this.getAccountResponse?.data.filter((e=>e?.code!==t)),r={name:a.name,phone:a.phone,email:a.email,password:a.password,token:a.token,lics:o?.map((t=>t?.code))};await e.set("token",JSON.stringify(r)),this.delAccountResponse=n.data}))}catch(e){this.delAccountError=e}},async getPayments(t){try{const e=new r.K;await e.create();const s=await e.get("token"),n=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments",{token:n,LC:t}).then((async t=>{this.paymentHistoryResponse=t.data}))}catch(e){this.paymentHistoryError=e}},async getIndices(t){try{const e=new r.K;await e.create();const s=await e.get("token"),n=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:n,counterId:t}).then((t=>{this.getIndicesResponse=t.data}))}catch(e){this.getIndicesError=e}},async setIndices(t,e){try{const s=new r.K;await s.create();const n=await s.get("token"),a=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices",{token:a,counterId:t,indice:e}).then((e=>{!1===e.data.error&&(this.getIndices(t),this.setIndicesResponse=e.data)}))}catch(s){this.setIndicesError=s}},async sberPay(t,e,s,n,a,c){try{const l=new r.K;await l.create();const i=await l.get("token"),u=JSON.parse(i);await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SberPay",{token:u.token,phone:e,email:s,LC:t,accruals:n,penalties:c,sumTO:a}).then((t=>{this.sberPayResponse=t.data}))}catch(l){this.sberPayError=l}}}})},6306:function(t,e,s){s.d(e,{X:function(){return c}});var n=s(6086),a=s(9669),o=s.n(a),r=s(3978);const c=(0,n.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null}}),getters:{setForm:t=>e=>[...t.form,...e]},actions:{async getForms(){console.log("getting forms");try{await o().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((t=>this.formResponse=t.data))}catch(t){this.formResponseError=t}},async services(t){console.log("services");const e=new r.K;await e.create();const s=await e.get("token"),n=JSON.parse(s).token;try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:n,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:t}}).then((t=>this.servicesResponse=t.data))}catch(a){this.servicesResponseError=a}},async callInspector(t,e){try{const s=new r.K;await s.create();const n=await s.get("token"),a=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:a,LC:t,phone:e}).then((t=>this.callInspectorResponse=t.data))}catch(s){this.callInspectorError=s}}}})},1128:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var n=s(6252),a=s(3577);const o=t=>((0,n.dD)("data-v-c7292230"),t=t(),(0,n.Cn)(),t),r={key:0},c=(0,n.Uk)("Добавить лицевой счет"),l=(0,n.Uk)("Узнать лицевой счет"),i={key:1},u=o((()=>(0,n._)("p",{class:"title ion-text-start"},"Данные заявителя",-1))),d=(0,n.Uk)("*"),p=(0,n.Uk)(" - обязательное поле для заполнения. "),h={slot:"header"},g={slot:"content"},w={class:"ion-text-start"},m={class:"ion-text-start"},k={class:"ion-text-start error"},f={class:"ion-text-start blue"};function A(t,e,s,o,A,I){const _=(0,n.up)("Back"),y=(0,n.up)("ion-Icon"),S=(0,n.up)("ion-text"),v=(0,n.up)("ion-icon"),E=(0,n.up)("ion-item"),R=(0,n.up)("Input"),O=(0,n.up)("ion-accordion"),N=(0,n.up)("ion-accordion-group"),L=(0,n.up)("Layout"),P=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(P,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,{btnSrc:()=>{t.router.push("/tabs/services"),t.response=""}},null,8,["btnSrc"]),(0,n.Wm)(L,{loading:t.loading,method:t.callInspectorHandler,height:"false",filledBtn:0===t.licsList.length?".":"Отправить",outlineBtn:".",title:"Вызов инспектора"},{"main-content":(0,n.w5)((()=>[0===t.licsList.length?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(E,{"router-link":"/personalAccountNew"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{class:"icon-start",size:"large",slot:"start",icon:t.pencilOutline},null,8,["icon"]),(0,n.Wm)(S,{class:"sub-title"},{default:(0,n.w5)((()=>[c])),_:1}),(0,n.Wm)(v,{class:"icon-end",size:"large",slot:"end",icon:t.chevronForwardOutline},null,8,["icon"])])),_:1}),(0,n.Wm)(E,{"router-link":"/personalAccountInfoSearch"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{class:"icon-start",size:"large",slot:"start",icon:t.documentTextOutline},null,8,["icon"]),(0,n.Wm)(S,{class:"sub-title"},{default:(0,n.w5)((()=>[l])),_:1}),(0,n.Wm)(v,{size:"large",class:"icon-end",slot:"end",icon:t.chevronForwardOutline},null,8,["icon"])])),_:1})])):((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[u,(0,n._)("p",null,[(0,n.Wm)(S,{class:"dot"},{default:(0,n.w5)((()=>[d])),_:1}),p])])),_:1}),(0,n.Wm)(N,{ref:"accordionCallInspector"},{default:(0,n.w5)((()=>[(0,n.Wm)(O,{value:"first","toggle-icon":t.caretDownSharp},{default:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n.Wm)(R,{value:t.lc,changeHandler:t.changeLc,name:"Укажите лицевой счет ",required:!0},null,8,["value","changeHandler"])]),(0,n._)("div",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.licsList,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n.Wm)(E,{onClick:s=>t.licsHandler(e),lines:t.licsList[t.licsList.length-1]?.code===e?.code?"none":""},{default:(0,n.w5)((()=>[(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n._)("p",w,"Лицевой счет: "+(0,a.zw)(e?.code),1),(0,n._)("p",m," Наименование лицевого счета: "+(0,a.zw)(e?.name),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])))),128))])])),_:1},8,["toggle-icon"])])),_:1},512),(0,n.Wm)(R,{name:"Укажите номер телефона ",value:t.phone,changeHandler:t.changePhone},null,8,["value","changeHandler"]),t.error?((0,n.wg)(),(0,n.j4)(S,{key:0},{default:(0,n.w5)((()=>[(0,n._)("p",k,(0,a.zw)(t.error),1)])),_:1})):(0,n.kq)("",!0),t.response?((0,n.wg)(),(0,n.j4)(S,{key:1},{default:(0,n.w5)((()=>[(0,n._)("p",f,(0,a.zw)(t.response),1)])),_:1})):(0,n.kq)("",!0)]))])),_:1},8,["loading","method","filledBtn"])])),_:1})}var I=s(2119),_=s(1839),y=s(5859),S=s(4503),v=s(4043),E=s(6086),R=s(6306),O=s(6651),N=s(8903),L=(0,n.aZ)({name:"servicesCallInspector",components:{IonPage:y._i,Layout:_.Z,IonText:y.yW,Input:S.Z,Back:v.Z,IonAccordion:y.We,IonItem:y.Ie,IonAccordionGroup:y.eh},mounted(){this.getAccount()},data(){return{phone:"",lc:"",error:"",response:"",loading:!1}},computed:{licsList(){return this.$pinia.state.value?.personalAccount?.getAccountResponse?.data?this.$pinia.state.value?.personalAccount?.getAccountResponse?.data:[]}},methods:{...(0,E.nv)(R.X,["callInspector"]),...(0,E.nv)(O.U,["getAccount"]),callInspectorHandler(){if(""!==this.$data.lc){this.$data.loading=!0,this.$data.error="";const t=new Promise((t=>{t(this.callInspector(this.$data.lc,this.$data.phone))}));t.then((()=>{this.$data.response=this.$pinia.state.value?.services?.callInspectorResponse?.message,this.$data.loading=!1}))}else this.$data.error="Заполните поле лицевой счет"},changePhone(t){this.$data.phone=t.target.value},changeLc(t){this.$data.lc=t.target.value},licsHandler(t){this.$refs.accordionCallInspector.$el.value=void 0,this.$data.lc=t?.code}},setup(){const t=(0,I.tv)();return{router:t,caretDownSharp:N.D2O,pencilOutline:N.Tvs,documentTextOutline:N.L82,chevronForwardOutline:N.Dji}}}),P=s(3744);const G=(0,P.Z)(L,[["render",A],["__scopeId","data-v-c7292230"]]);var C=G}}]);
//# sourceMappingURL=1128.8924dfbc.js.map