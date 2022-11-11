"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[1388],{6651:function(t,e,s){s.d(e,{U:function(){return i}});s(7658);var a=s(6086),n=s(9669),o=s.n(n),r=s(3978),c=s(4122);const i=(0,a.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,sberPayResponse:null,sberPayError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null,personalItemData:{}}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){console.log("getting settlements");try{const t=new r.K;await t.create();const e=await t.get("token"),s=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:s}).then((t=>{t.data.error&&c.Z.push("/authPage"),this.getSettlementsResponse=t.data}))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new r.K;await e.create();const s=await e.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:a,s_id:t}).then((t=>{t.data.error&&c.Z.push("/authPage"),this.getStreetsResponse=t.data}))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new r.K;await e.create();const s=await e.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:a,ids:t}).then((t=>{t.data.error&&c.Z.push("/authPage"),this.getHousesResponse=t.data}))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new r.K;await t.create();const e=await t.get("token"),s=JSON.parse(e).token,a=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:s,LC:a}).then((t=>{t.data.error&&c.Z.push("/authPage"),this.getAccountResponse=t.data}))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((async t=>{this.addAccountResponse=t.data,t.data.error&&c.Z.push("/authPage");const s=new r.K;await s.create();const a=await s.get("token"),n=JSON.parse(a);await s.set("token",JSON.stringify({...n,lics:[...n.lics,e]}))}))}catch(s){this.addAccountError=s}},async delAccount(t){try{const e=new r.K;await e.create();const s=await e.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:a,LC:t}).then((async a=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t)),a.data.error&&c.Z.push("/authPage");const n=JSON.parse(s),o=this.getAccountResponse?.data.filter((e=>e?.code!==t)),r={name:n.name,phone:n.phone,email:n.email,password:n.password,token:n.token,lics:o?.map((t=>t?.code))};await e.set("token",JSON.stringify(r)),this.delAccountResponse=a.data}))}catch(e){this.delAccountError=e}},async getPayments(t,e,s){try{const a=new r.K;await a.create();const n=await a.get("token"),i=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments",{token:i,LC:t,beginPeriod:e,endPeriod:s}).then((async t=>{t.data.error&&c.Z.push("/authPage"),this.paymentHistoryResponse=t.data}))}catch(a){this.paymentHistoryError=a}},async getIndices(t,e,s){try{const a=new r.K;await a.create();const n=await a.get("token"),i=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:i,counterId:t,beginPeriod:e,endPeriod:s}).then((t=>{t.data.error&&c.Z.push("/authPage"),this.getIndicesResponse=t.data}))}catch(a){this.getIndicesError=a}},async setIndices(t,e){try{const s=new r.K;await s.create();const a=await s.get("token"),n=JSON.parse(a).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices",{token:n,counterId:t,indice:e}).then((e=>{e.data.error&&c.Z.push("/authPage"),!1===e.data.error&&(this.getIndices(t),this.setIndicesResponse=e.data)}))}catch(s){this.setIndicesError=s}},async sberPay(t,e,s,a,n,i,l){try{const u=new r.K;await u.create();const d=await u.get("token"),h=JSON.parse(d);await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SberPay",{token:h.token,phone:e,email:s,LC:t,accruals:a,penalties:i,advances:l,sumTO:n}).then((t=>{t.data.error&&c.Z.push("/authPage"),this.sberPayResponse=t.data}))}catch(u){this.sberPayError=u}}}})},6306:function(t,e,s){s.d(e,{X:function(){return i}});s(7658);var a=s(6086),n=s(9669),o=s.n(n),r=s(3978);const c="https://api.aostng.ru/api/v2",i=(0,a.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},servicesOneNext:!1,techAllianceConnection:!1,addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null,camerasResponse:null,camerasError:null,requestsInfo:null}),getters:{setForm:t=>e=>[...t.form,...e]},actions:{async getCameras(){console.log("getting cameras");try{await o().get(`${c}/camera/get`).then((t=>this.camerasResponse=t.data))}catch(t){this.camerasError=t}},async getListServices(){console.log("getting listServices");const t=new r.K;await t.create();const e=await t.get("token"),s=JSON.parse(e).token;try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/ListServices",{token:s}).then((t=>this.listServicesResponse=t.data))}catch(a){this.listServicesResponseError=a}},async getForms(){console.log("getting forms");try{await o().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((t=>this.formResponse=t.data))}catch(t){this.formResponseError=t}},async uploadFiles(t){console.log("uploading files");const e=new r.K;await e.create();const s=await e.get("token"),a=JSON.parse(s).token;try{let e=t.filter((t=>{if(!1!==t.file)return t}));for(let t=0;t<e.length;t++){const s=e[t];await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/get_file",{token:a,title:s.title,file:s.file}).then((t=>this.filesResponse.push({...t.data,field:s.field,text:s.text})))}}catch(n){this.filesResponseError=n}},async services(t){console.log("services");const e=new r.K;await e.create();const s=await e.get("token"),a=JSON.parse(s).token;try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:a,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:t}}).then((t=>this.servicesResponse=t.data))}catch(n){this.servicesResponseError=n}},async callInspector(t,e){try{const s=new r.K;await s.create();const a=await s.get("token"),n=JSON.parse(a).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:n,LC:t,phone:e}).then((t=>this.callInspectorResponse=t.data))}catch(s){this.callInspectorError=s}},async addressQuery(t,e){try{await o()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===e||"GAS_ADDRESS"===e?JSON.stringify({query:t,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:t,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((t=>this.addressResponse=t.data))}catch(s){this.addressError=s}}}})},1388:function(t,e,s){s.r(e),s.d(e,{default:function(){return P}});s(7658);var a=s(6252),n=s(3577);const o=t=>((0,a.dD)("data-v-610947b3"),t=t(),(0,a.Cn)(),t),r={key:0},c={key:1},i=o((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные заявителя",-1))),l={slot:"header"},u={slot:"content"},d={class:"ion-text-start"},h={class:"ion-text-start error"},p={class:"ion-text-start blue"};function g(t,e,s,o,g,w){const f=(0,a.up)("Back"),m=(0,a.up)("ion-Icon"),y=(0,a.up)("ion-text"),S=(0,a.up)("ion-icon"),k=(0,a.up)("ion-item"),v=(0,a.up)("Input"),_=(0,a.up)("ion-accordion"),A=(0,a.up)("ion-accordion-group"),I=(0,a.up)("Layout"),R=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{btnSrc:()=>{t.router.push("/tabs/services"),t.response=""}},null,8,["btnSrc"]),(0,a.Wm)(I,{loading:t.loading,method:t.callInspectorHandler,height:"false",filledBtn:0===t.licsList.length?".":"Отправить",outlineBtn:".",title:"Вызов инспектора"},{"main-content":(0,a.w5)((()=>[0===t.licsList.length?((0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(k,{"router-link":"/personalAccountNew"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"icon-start",size:"large",slot:"start",icon:t.pencilOutline},null,8,["icon"]),(0,a.Wm)(y,{class:"sub-title"},{default:(0,a.w5)((()=>[(0,a.Uk)("Добавить лицевой счет")])),_:1}),(0,a.Wm)(S,{class:"icon-end",size:"large",slot:"end",icon:t.chevronForwardOutline},null,8,["icon"])])),_:1}),(0,a.Wm)(k,{"router-link":"/personalAccountInfoSearch"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"icon-start",size:"large",slot:"start",icon:t.documentTextOutline},null,8,["icon"]),(0,a.Wm)(y,{class:"sub-title"},{default:(0,a.w5)((()=>[(0,a.Uk)("Узнать лицевой счет")])),_:1}),(0,a.Wm)(S,{size:"large",class:"icon-end",slot:"end",icon:t.chevronForwardOutline},null,8,["icon"])])),_:1})])):((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[i,(0,a._)("p",null,[(0,a.Wm)(y,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1}),(0,a.Uk)(" - обязательное поле для заполнения. ")])])),_:1}),(0,a.Wm)(A,{ref:"accordionCallInspector"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{value:"first","toggle-icon":t.caretDownSharp},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a.Wm)(v,{value:t.lc,changeHandler:t.changeLc,name:"Укажите лицевой счет ",required:!0},null,8,["value","changeHandler"])]),(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.licsList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(k,{onClick:s=>t.licsHandler(e),lines:t.licsList[t.licsList.length-1]?.code===e?.code?"none":""},{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a._)("p",d,"Лицевой счет: "+(0,n.zw)(e?.code),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])))),128))])])),_:1},8,["toggle-icon"])])),_:1},512),(0,a.Wm)(v,{name:"Введите номер телефона ",value:t.phone,mask:"+7 (###) ###-##-##",changeHandler:t.changePhone},null,8,["value","changeHandler"]),t.error?((0,a.wg)(),(0,a.j4)(y,{key:0},{default:(0,a.w5)((()=>[(0,a._)("p",h,(0,n.zw)(t.error),1)])),_:1})):(0,a.kq)("",!0),t.response?((0,a.wg)(),(0,a.j4)(y,{key:1},{default:(0,a.w5)((()=>[(0,a._)("p",p,(0,n.zw)(t.response),1)])),_:1})):(0,a.kq)("",!0)]))])),default:(0,a.w5)((()=>[(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Uk)("d")])),_:1})])),_:1},8,["loading","method","filledBtn"])])),_:1})}var w=s(2201),f=s(2492),m=s(2684),y=s(3994),S=s(6683),k=s(6086),v=s(6306),_=s(6651),A=s(8903),I=(0,a.aZ)({name:"servicesCallInspector",components:{IonPage:m._i,Layout:f.Z,IonText:m.yW,IonIcon:m.gu,Input:y.Z,Back:S.Z,IonAccordion:m.We,IonItem:m.Ie,IonAccordionGroup:m.eh},mounted(){this.getAccount()},data(){return{phone:"",lc:"",error:"",response:"",loading:!1}},computed:{licsList(){return this.$pinia.state.value?.personalAccount?.getAccountResponse?.data?this.$pinia.state.value?.personalAccount?.getAccountResponse?.data:[]}},methods:{...(0,k.nv)(v.X,["callInspector"]),...(0,k.nv)(_.U,["getAccount"]),callInspectorHandler(){if(""!==this.$data.lc){this.$data.loading=!0,this.$data.error="";const t=new Promise((t=>{t(this.callInspector(this.$data.lc,this.$data.phone))}));t.then((()=>{this.$data.response=this.$pinia.state.value?.services?.callInspectorResponse?.message,this.$data.loading=!1}))}else this.$data.error="Заполните поле лицевой счет"},changePhone(t){this.$data.phone=t.target.value},changeLc(t){this.$data.lc=t.target.value},licsHandler(t){this.$refs.accordionCallInspector.$el.value=void 0,this.$data.lc=t?.code}},setup(){const t=(0,w.tv)();return{router:t,caretDownSharp:A.D2O,pencilOutline:A.Tvs,documentTextOutline:A.L82,chevronForwardOutline:A.Dji}}}),R=s(3744);const E=(0,R.Z)(I,[["render",g],["__scopeId","data-v-610947b3"]]);var P=E}}]);
//# sourceMappingURL=1388.8277954c.js.map