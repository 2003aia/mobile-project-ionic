"use strict";(self["webpackChunkstng"]=self["webpackChunkstng"]||[]).push([[3625],{6306:function(e,t,s){s.d(t,{X:function(){return c}});s(7658);var a=s(6086),n=s(9669),r=s.n(n),o=s(3978);const l="https://api.aostng.ru/api/v2";let i="https://fhd.aostng.ru/vesta/hs/API_STNG/V2/";const c=(0,a.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},servicesOneNext:!1,techAllianceConnection:!1,addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null,camerasResponse:null,camerasError:null,requestsInfo:null}),getters:{setForm:e=>t=>[...e.form,...t]},actions:{async getCameras(){try{await r().get(`${l}/camera/get`).then((e=>this.camerasResponse=e.data))}catch(e){this.camerasError=e}},async getListServices(){const e=new o.K;await e.create();const t=await e.get("token"),s=JSON.parse(t).token;try{await r().post(`${i}ListServices`,{token:s}).then((e=>this.listServicesResponse=e.data))}catch(a){this.listServicesResponseError=a}},async getForms(){try{await r().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async uploadFiles(e){const t=new o.K;await t.create();const s=await t.get("token"),a=JSON.parse(s).token;try{let t=e.filter((e=>{if(!1!==e.file)return e}));for(let e=0;e<t.length;e++){const s=t[e];await r().post(`${i}get_file`,{token:a,title:s.title,file:s.file}).then((e=>this.filesResponse.push({...e.data,field:s.field,text:s.text})))}}catch(n){this.filesResponseError=n}},async services(e){const t=new o.K;await t.create();const s=await t.get("token"),a=JSON.parse(s).token;try{await r().post(`${i}Services`,{token:a,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(n){this.servicesResponseError=n}},async callInspector(e,t){try{const s=new o.K;await s.create();const a=await s.get("token"),n=JSON.parse(a).token;await r().post(`${i}CallInspector`,{token:n,LC:e,phone:t}).then((e=>this.callInspectorResponse=e.data))}catch(s){this.callInspectorError=s}},async addressQuery(e,t){try{await r()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===t||"GAS_ADDRESS"===t?JSON.stringify({query:e,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:e,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((e=>this.addressResponse=e.data))}catch(s){this.addressError=s}}}})},7717:function(e,t,s){s.d(t,{Z:function(){return c}});var a=s(6252),n=s(3577);function r(e,t,s,r,o,l){return(0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)({main:!0,padding:e.padding,bgBlue:e.bgBlue}),onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[(0,a.WI)(e.$slots,"content",{},void 0,!0)],2)}var o=(0,a.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function,bgBlue:Boolean}}),l=s(3744);const i=(0,l.Z)(o,[["render",r],["__scopeId","data-v-7ef2f989"]]);var c=i},3625:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var a=s(6252),n=s(9963),r=s(3577);const o={class:"videoWrapper"},l=["src"],i={class:"videoWrapper"},c=["src"];function u(e,t,s,u,p,d){const m=(0,a.up)("Back"),f=(0,a.up)("ion-img"),h=(0,a.up)("Button"),w=(0,a.up)("ion-text"),g=(0,a.up)("ion-card-title"),v=(0,a.up)("ion-card-header"),y=(0,a.up)("ion-card"),_=(0,a.up)("LayoutBox"),k=(0,a.up)("ion-spinner"),E=(0,a.up)("Layout"),S=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m),(0,a.Wm)(E,{padding:!0,height:"false",outlineBtn:".",filledBtn:".",title:"Мониторинг загруженности АГЗС"},{"main-content":(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",o,[(0,a._)("iframe",{class:"video",src:e.cameras[0]?.url,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture","allowfullscreenшщ":""},null,8,l)],512),[[n.F8,e.cameras[0]?.status]]),(0,a.wy)((0,a.Wm)(f,{src:e.cameras[0]?.preview},null,8,["src"]),[[n.F8,!e.cameras[0]?.status]]),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{onClick:t[0]||(t[0]=t=>e.openMap(e.cameras[0]?.map)),name:"Посмотреть на карте"}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"sub-title"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.cameras[0]?.name),1)])),_:1})])),_:1})])),_:1})])),_:1},512),[[n.F8,0!==e.cameras?.length]])])),content:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cameras2,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"list",key:t},[(0,a.Wm)(_,{padding:!0},{content:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",i,[(0,a._)("iframe",{class:"video",height:"100%",width:"100%",src:t.url,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""},null,8,c)],512),[[n.F8,t.status]]),(0,a.wy)((0,a.Wm)(f,{src:t?.preview},null,8,["src"]),[[n.F8,!t.status]]),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{onClick:s=>e.openMap(t?.map),name:"Посмотреть на карте"},null,8,["onClick"]),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"sub-title"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(t?.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1536),[[n.F8,0!==t?.length]])])),_:2},1024)])))),128))])),default:(0,a.w5)((()=>[(0,a.Wm)(k,{name:"bubbles"})])),_:1},8,["filledBtn"])])),_:1})}var p=s(2201),d=s(1993),m=s(7717),f=s(23),h=s(7821),w=s(6306),g=s(6086),v=s(6527),y=(0,a.aZ)({name:"camerasPage",components:{IonPage:h._i,Layout:d.Z,IonText:h.yW,Button:v.Z,IonCard:h.PM,IonCardHeader:h.Zi,IonCardTitle:h.Dq,IonImg:h.Xz,Back:f.Z,LayoutBox:m.Z,IonSpinner:h.PQ},methods:{...(0,g.nv)(w.X,["getCameras"]),openMap(e){window.open(e,"_system")},openCam(e){window.open(e,"_system")}},computed:{cameras(){return this.$pinia.state.value?.services?.camerasResponse?.data?this.$pinia.state.value?.services?.camerasResponse?.data:[]},cameras2(){return[...this.cameras.slice(1)]}},mounted(){this.getCameras()},setup(){const e=(0,p.tv)();return{router:e}}}),_=s(3744);const k=(0,_.Z)(y,[["render",u],["__scopeId","data-v-4933f7f0"]]);var E=k}}]);
//# sourceMappingURL=3625.5ee5c4ae.js.map