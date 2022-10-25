"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[5089],{6306:function(e,t,s){s.d(t,{X:function(){return i}});s(7658);var a=s(6086),r=s(9669),n=s.n(r),l=s(3978);const o="https://api.aostng.ru/api/v2",i=(0,a.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},servicesOneNext:!1,techAllianceConnection:!1,addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null,camerasResponse:null,camerasError:null,requestsInfo:null}),getters:{setForm:e=>t=>[...e.form,...t]},actions:{async getCameras(){console.log("getting cameras");try{await n().get(`${o}/camera/get`).then((e=>this.camerasResponse=e.data))}catch(e){this.camerasError=e}},async getListServices(){console.log("getting listServices");const e=new l.K;await e.create();const t=await e.get("token"),s=JSON.parse(t).token;try{await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/ListServices",{token:s}).then((e=>this.listServicesResponse=e.data))}catch(a){this.listServicesResponseError=a}},async getForms(){console.log("getting forms");try{await n().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async uploadFiles(e){console.log("uploading files");const t=new l.K;await t.create();const s=await t.get("token"),a=JSON.parse(s).token;try{let t=e.filter((e=>{if(!1!==e.file)return e}));for(let e=0;e<t.length;e++){const s=t[e];await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/get_file",{token:a,title:s.title,file:s.file}).then((e=>this.filesResponse.push({...e.data,field:s.field,text:s.text})))}}catch(r){this.filesResponseError=r}},async services(e){console.log("services");const t=new l.K;await t.create();const s=await t.get("token"),a=JSON.parse(s).token;try{await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:a,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(r){this.servicesResponseError=r}},async callInspector(e,t){try{const s=new l.K;await s.create();const a=await s.get("token"),r=JSON.parse(a).token;await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:r,LC:e,phone:t}).then((e=>this.callInspectorResponse=e.data))}catch(s){this.callInspectorError=s}},async addressQuery(e,t){try{await n()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===t||"GAS_ADDRESS"===t?JSON.stringify({query:e,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:e,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((e=>this.addressResponse=e.data))}catch(s){this.addressError=s}}}})},1496:function(e,t,s){s.d(t,{Z:function(){return u}});var a=s(6252),r=s(3577);function n(e,t,s,n,l,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["main",{padding:e.padding}]),onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[(0,a.WI)(e.$slots,"content",{},void 0,!0)],2)}var l=(0,a.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),o=s(3744);const i=(0,o.Z)(l,[["render",n],["__scopeId","data-v-568da44e"]]);var u=i},5089:function(e,t,s){s.r(t),s.d(t,{default:function(){return L}});s(7658);var a=s(6252),r=s(3577),n=s(9963);const l=e=>((0,a.dD)("data-v-98bb5ffa"),e=e(),(0,a.Cn)(),e),o=l((()=>(0,a._)("p",{class:"text-20-600"},"Общие сведения заявления",-1))),i=l((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные заявителя",-1))),u={slot:"content"},d=l((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1))),c=l((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные паспорта",-1))),f={slot:"content"},m=l((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1)));function p(e,t,s,l,p,v){const h=(0,a.up)("Back"),E=(0,a.up)("ion-text"),_=(0,a.up)("Input"),g=(0,a.up)("ion-item"),S=(0,a.up)("ion-accordion"),R=(0,a.up)("ion-accordion-group"),y=(0,a.up)("LayoutBox"),w=(0,a.up)("Layout"),A=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(A,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{btnSrc:()=>e.router.push("/tabs/services")},null,8,["btnSrc"]),(0,a.Wm)(w,{method:e.storageHandler,height:"false",filledBtn:"Далее",outlineBtn:".",title:"Заключения договора поставки газа для обеспечения коммунально - бытовых нужд гражданина собственниками квартир"},{"header-content":(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[o])),_:1})])),"main-content":(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[i,(0,a._)("p",null,[(0,a.Wm)(E,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1}),(0,a.Uk)(" - обязательное поле для заполнения. ")])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formUser,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(R,{ref_for:!0,ref:"addressQuery"},{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,{mask:t.mask,slot:"header",value:t.value,name:t.name,required:t.required,onInput:s=>{t.value=s.target.value,e.addressQueryHandler(s,t.field)}},null,8,["mask","value","name","required","onInput"]),(0,a.wy)((0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addressList,(l=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:l},[(0,a.Wm)(g,{button:"",onClick:()=>{this.$refs.addressQuery[s].$el.value=void 0,t.value=l.value},lines:e.addressList[e.addressList.length-1]?.value===l.value?"none":"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(l.value),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])),[[n.F8,"USER_BIRTHPLACE"===t.field||"USER_ADDRESS"===t.field&&t.value]]))),128)),(0,a.wy)((0,a.Wm)(g,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Не найдено")])),_:1})])),_:1},512),[[n.F8,0===e.addressList?.length]])],512),[[n.F8,"USER_BIRTHPLACE"===t.field||"USER_ADDRESS"===t.field&&t.value]])])),_:2},1024)])),_:2},1536),(0,a.wy)((0,a.Wm)(E,null,{default:(0,a.w5)((()=>[d])),_:2},1536),[[n.F8,0===t.value.length&&t.error]])])))),128))])),content:(0,a.w5)((()=>[(0,a.Wm)(y,null,{content:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[c,(0,a._)("p",null,[(0,a.Wm)(E,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1}),(0,a.Uk)(" - обязательное поле для заполнения. ")])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formPass,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(R,{ref_for:!0,ref:"addressQuery2"},{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,{mask:t.mask,slot:"header",value:t.value,name:t.name,required:t.required,onInput:s=>{t.value=s.target.value,e.addressQueryHandler(s,t.field)}},null,8,["mask","value","name","required","onInput"]),(0,a.wy)((0,a._)("div",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addressList,(l=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:l},[(0,a.Wm)(g,{button:"",onClick:()=>{this.$refs.addressQuery2[s].$el.value=void 0,t.value=l.value},lines:e.addressList[e.addressList.length-1]?.value===l.value?"none":"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(l.value),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])),[[n.F8,"USER_REGION"===t.field&&t.value]]))),128)),(0,a.wy)((0,a.Wm)(g,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Не найдено")])),_:1})])),_:1},512),[[n.F8,0===e.addressList?.length]])],512),[[n.F8,"USER_REGION"===t.field&&t.value]])])),_:2},1024)])),_:2},1536),(0,a.wy)((0,a.Wm)(E,null,{default:(0,a.w5)((()=>[m])),_:2},1536),[[n.F8,0===t.value.length&&t.error]])])))),128))])),_:1})])),_:1},8,["method"])])),_:1})}var v=s(2201),h=s(222),E=s(2684),_=s(3994),g=s(1496),S=s(9177),R=s(6086),y=s(6306),w=s(381),A=s.n(w),k=s(2982),U=(0,a.aZ)({name:"servicesGasContract",components:{IonPage:E._i,Layout:h.Z,IonText:E.yW,Input:_.Z,Back:S.Z,LayoutBox:g.Z,IonAccordion:E.We,IonAccordionGroup:E.eh,IonItem:E.Ie},directives:{mask:k.mask},computed:{addressList(){return this.$pinia.state.value?.services?.addressResponse?.suggestions},formFields(){return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter((e=>"Услуга заключения договора поставки газа для собственников квартир "===e.SERVICE.VALUE))}},mounted(){this.getForms(),console.log(this.formFields,"testst")},methods:{...(0,R.nv)(y.X,["getForms","addressQuery"]),addressQueryHandler(e,t){"USER_BIRTHPLACE"===t&&this.addressQuery(e.target.value,t),"USER_ADDRESS"===t&&this.addressQuery(e.target.value,t),"USER_REGION"!==t&&"GAS_ADDRESS"!==t||this.addressQuery(e.target.value,t)},storageHandler(){let e={},t=this.$data.formUser.filter((e=>{if(!0===e.required)return e.error=!0,""===e.value})),s=this.$data.formPass.filter((e=>{if(!0===e.required)return e.error=!0,""===e.value}));if(0===t.length&&0===s.length){for(let a=0;a<this.$data.formPass.length;a++){const t=this.$data.formPass[a];e[t.field]={NAME:t.name,VALUE:t.value}}let t={...this.formFields[0],...e};for(let e=0;e<this.$data.formUser.length;e++){const s=this.$data.formUser[e];t[s.field]={NAME:s.name,VALUE:s.value}}let s={...t,DATE_CREATE:{NAME:"Дата создания",VALUE:`${A()().format("DD.MM.YYYY hh:mm:ss")} `},TIMESTAMP_X:{NAME:"Время последнего изменения",VALUE:`${A()().format("DD.MM.YYYY hh:mm:ss")} `},USER:{NAME:"USER",VALUE:"",VALUE_ID:0},NAME:{NAME:"Название",VALUE:`[${A()().format("DD.MM.YYYY hh:mm:ss")}]`}};console.log(s,"test"),this.$pinia.state.value?.services?.form&&(this.$pinia.state.value.services.form=s,this.$router.push("/tabs/servicesGasContractCheckbox"))}}},setup(){const e=(0,v.tv)();return{router:e}},data(){return{formPass:[{field:"USER_PASSPORT_SERIAL",name:"Серия паспорта",mask:"####",type:"text",required:!0,value:""},{field:"USER_PASSPORT_NUM",type:"text",name:"Номер паспорта",mask:"######",required:!0,value:""},{field:"USER_PASS_WHO",name:"Кем выдан",type:"text",required:!0,value:""},{field:"USER_PASS_DATE",mask:"##.##.####",name:"Дата выдачи паспорта",type:"text",required:!0,value:""},{field:"USER_REGION",name:"Место регистрации",type:"text",required:!0,value:""}],formUser:[{field:"USER_NAME",name:"Имя",type:"text",required:!0,value:"",mask:null},{field:"USER_LAST_NAME",mask:null,name:"Фамилия",type:"text",required:!0,value:""},{field:"USER_SECOND_NAME",mask:null,name:"Отчество",type:"text",required:!0,value:""},{field:"USER_BIRTHDATE",mask:"##.##.####",name:"Дата рождения",type:"text",required:!0,value:""},{field:"USER_BIRTHPLACE",mask:null,name:"Место рождения",type:"text",required:!0,value:""},{field:"USER_ADDRESS",mask:null,name:"Место жительства",type:"text",required:!0,value:""},{field:"USER_PHONE",mask:"+7 (###) ###-##-##",name:"Контактный телефон",type:"text",required:!0,value:""},{field:"USER_PHONE_2",mask:null,name:"Дополнительный контактный номер",type:"text",required:!1,value:""},{field:"USER_EMAIL",mask:null,name:"E-mail",type:"email",required:!0,value:""}]}}}),I=s(3744);const D=(0,I.Z)(U,[["render",p],["__scopeId","data-v-98bb5ffa"]]);var L=D}}]);
//# sourceMappingURL=5089.633a1291.js.map