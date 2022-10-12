"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[3242],{6306:function(e,t,s){s.d(t,{X:function(){return i}});s(7658);var n=s(6086),a=s(9669),r=s.n(a),o=s(3978);const l="https://api.aostng.ru/api/v2",i=(0,n.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},servicesOneNext:!1,techAllianceConnection:!1,addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null,camerasResponse:null,camerasError:null}),getters:{setForm:e=>t=>[...e.form,...t]},actions:{async getCameras(){console.log("getting cameras");try{await r().get(`${l}/camera/get`).then((e=>this.camerasResponse=e.data))}catch(e){this.camerasError=e}},async getListServices(){console.log("getting listServices");const e=new o.K;await e.create();const t=await e.get("token"),s=JSON.parse(t).token;try{await r().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/ListServices",{token:s}).then((e=>this.listServicesResponse=e.data))}catch(n){this.listServicesResponseError=n}},async getForms(){console.log("getting forms");try{await r().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async uploadFiles(e){console.log("uploading files");const t=new o.K;await t.create();const s=await t.get("token"),n=JSON.parse(s).token;try{let t=e.filter((e=>{if(!1!==e.file)return e}));for(let e=0;e<t.length;e++){const s=t[e];await r().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/get_file",{token:n,title:s.title,file:s.file}).then((e=>this.filesResponse.push({...e.data,field:s.field,text:s.text})))}}catch(a){this.filesResponseError=a}},async services(e){console.log("services");const t=new o.K;await t.create();const s=await t.get("token"),n=JSON.parse(s).token;try{await r().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:n,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(a){this.servicesResponseError=a}},async callInspector(e,t){try{const s=new o.K;await s.create();const n=await s.get("token"),a=JSON.parse(n).token;await r().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:a,LC:e,phone:t}).then((e=>this.callInspectorResponse=e.data))}catch(s){this.callInspectorError=s}},async addressQuery(e,t){try{await r()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===t||"GAS_ADDRESS"===t?JSON.stringify({query:e,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:e,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((e=>this.addressResponse=e.data))}catch(s){this.addressError=s}}}})},3242:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=s(6252),a=s(3577);const r={class:"wrapper"};function o(e,t,s,o,l,i){const c=(0,n.up)("Back"),u=(0,n.up)("ion-col"),d=(0,n.up)("ion-row"),p=(0,n.up)("ion-text"),f=(0,n.up)("ion-list"),h=(0,n.up)("Layout"),g=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c),(0,n.Wm)(h,{btnSrc:"/tabs/services",height:"false",outlineBtn:".",filledBtn:"Создать заявку",title:"Мои заявки"},{"main-content":(0,n.w5)((()=>[(0,n._)("div",r,[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" № ")])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Дата ")])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Сервис ")])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Статус ")])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Адрес ")])),_:1})])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.listServices,(t=>((0,n.wg)(),(0,n.j4)(f,{key:t},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{class:(0,a.C_)({"ion-row-last":e.listServices[e.listServices?.length-1]?.number===t?.number})},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.number),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.date),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.service),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.status),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.address),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1024)))),128))])])),_:1})])),_:1})}var l=s(2201),i=s(594),c=s(8170),u=s(8903),d=s(4043),p=s(6306),f=s(6086),h=(0,n.aZ)({name:"myRequestsPage",components:{Back:d.Z,IonRow:c.Nd,IonCol:c.wI,IonPage:c._i,Layout:i.Z,IonText:c.yW,IonList:c.q_},computed:{listServices(){return this.$pinia.state.value?.services?.listServicesResponse?.data}},methods:{...(0,f.nv)(p.X,["getListServices"])},mounted(){this.getListServices()},data(){return{}},setup(){const e=(0,l.tv)();return{router:e,pencilOutline:u.Tvs,documentTextOutline:u.L82,chevronForwardOutline:u.Dji}}}),g=s(3744);const w=(0,g.Z)(h,[["render",o],["__scopeId","data-v-03630d4d"]]);var m=w}}]);
//# sourceMappingURL=3242.8b8e3f27.js.map