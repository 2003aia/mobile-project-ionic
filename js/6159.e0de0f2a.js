"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[6159],{6306:function(e,t,s){s.d(t,{X:function(){return o}});s(7658);var n=s(6086),a=s(9669),i=s.n(a),l=s(3978);const r="https://api.aostng.ru/api/v2",o=(0,n.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},servicesOneNext:!1,techAllianceConnection:!1,addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null,camerasResponse:null,camerasError:null}),getters:{setForm:e=>t=>[...e.form,...t]},actions:{async getCameras(){console.log("getting cameras");try{await i().get(`${r}/camera/get`).then((e=>this.camerasResponse=e.data))}catch(e){this.camerasError=e}},async getListServices(){console.log("getting listServices");const e=new l.K;await e.create();const t=await e.get("token"),s=JSON.parse(t).token;try{await i().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/ListServices",{token:s}).then((e=>this.listServicesResponse=e.data))}catch(n){this.listServicesResponseError=n}},async getForms(){console.log("getting forms");try{await i().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async uploadFiles(e){console.log("uploading files");const t=new l.K;await t.create();const s=await t.get("token"),n=JSON.parse(s).token;try{let t=e.filter((e=>{if(!1!==e.file)return e}));for(let e=0;e<t.length;e++){const s=t[e];await i().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/get_file",{token:n,title:s.title,file:s.file}).then((e=>this.filesResponse.push({...e.data,field:s.field,text:s.text})))}}catch(a){this.filesResponseError=a}},async services(e){console.log("services");const t=new l.K;await t.create();const s=await t.get("token"),n=JSON.parse(s).token;try{await i().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:n,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(a){this.servicesResponseError=a}},async callInspector(e,t){try{const s=new l.K;await s.create();const n=await s.get("token"),a=JSON.parse(n).token;await i().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:a,LC:e,phone:t}).then((e=>this.callInspectorResponse=e.data))}catch(s){this.callInspectorError=s}},async addressQuery(e,t){try{await i()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===t||"GAS_ADDRESS"===t?JSON.stringify({query:e,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:e,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((e=>this.addressResponse=e.data))}catch(s){this.addressError=s}}}})},7269:function(e,t,s){s.d(t,{Z:function(){return p}});var n=s(6252);const a=["for"],i=["name","id","accept"];function l(e,t,l,r,o,c){const u=(0,n.up)("ion-icon"),d=(0,n.up)("ion-text"),p=(0,n.up)("ion-img"),g=(0,n.up)("ion-item");return(0,n.wg)(),(0,n.iD)("label",{for:e.data},[(0,n._)("input",{name:e.data,id:e.data,type:"file",onChange:t[0]||(t[0]=(...t)=>e.changeHandler&&e.changeHandler(...t)),accept:e.accept},null,40,i),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{slot:"start",icon:e.documentTextOutline},null,8,["icon"]),(0,n.Wm)(d,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Загрузить документ ")])),_:1}),(0,n.Wm)(p,{slot:"end",src:s(5148)},null,8,["src"])])),_:1})],8,a)}var r=s(8409),o=s(8903),c=(0,n.aZ)({components:{IonText:r.yW,IonItem:r.Ie,IonIcon:r.gu,IonImg:r.Xz},setup(){return{documentTextOutline:o.L82}},methods:{onFocusText:function(){this.$refs.text.focus()}},data(){return{}},name:"inputFileView",props:{data:String,name:String,accept:String,changeHandler:Function,value:Object}}),u=s(3744);const d=(0,u.Z)(c,[["render",l],["__scopeId","data-v-34140c0e"]]);var p=d},6159:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});s(7658);var n=s(6252),a=s(3577),i=s(9963);const l=e=>((0,n.dD)("data-v-eb8ccdcc"),e=e(),(0,n.Cn)(),e),r=l((()=>(0,n._)("p",{class:"text-20-600"},"Загрузка электронных копий документов",-1))),o={key:0},c=l((()=>(0,n._)("p",null," Для загрузки возможны следующие типы файлов: *.jpg, *.jpeg, *.zip, *.pdf, *.png Размер одного файла не должен превышать 5 Мб ",-1))),u=l((()=>(0,n._)("p",{class:"sub-title"}," Важно! Если загружаемый документ содержит несколько страниц, то просим загрузить одним файлом в формате *.pdf ",-1))),d={class:"text"},p=l((()=>(0,n._)("p",{class:"error"},"Выберите файл",-1))),g=l((()=>(0,n._)("p",{class:"error"},"Что то пошло не так",-1))),f={key:1},h=l((()=>(0,n._)("p",{class:"title ion-text-start"},"Спасибо!",-1))),v=l((()=>(0,n._)("p",null," Ваша заявка принята в обработку. После процедуры идентификации на предмет соответствия достоверности введенных данных, с Вами свяжется сотрудник УГРС. По вопросам регистрации заявки обращаться по номеру 319-555 в будни с 08.00 до 17.00 ",-1)));function A(e,t,s,l,A,m){const I=(0,n.up)("Back"),w=(0,n.up)("ion-text"),y=(0,n.up)("ion-item"),E=(0,n.up)("ion-icon"),F=(0,n.up)("InputFile"),S=(0,n.up)("Layout"),R=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(I,{btnSrc:()=>{!0===e.sent?e.sent=!1:e.router.push("/tabs/servicesRequestCalc")}},null,8,["btnSrc"]),(0,n.Wm)(S,{method:!1===e.sent?e.storageHandler:()=>e.router.push("/tabs/services"),loading:e.loading,height:"false",filledBtn:!1===e.sent?"Далее":"Готово",outlineBtn:".",title:"Заявка на социальную газификацию"},(0,n.Nv)({"main-content":(0,n.w5)((()=>[!1===e.sent?((0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[c,u])),_:1})])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.data,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.text},[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n._)("p",d,[(0,n.Uk)((0,a.zw)(t.text),1),(0,n.wy)((0,n.Wm)(w,{class:"blue"},{default:(0,n.w5)((()=>[(0,n.Uk)("*")])),_:2},1536),[[i.F8,t.required]])])])),_:2},1024),(0,n.wy)((0,n.Wm)(y,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{class:"file-text blue"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.value?.name),1)])),_:2},1024),(0,n.Wm)(E,{onClick:()=>t.value=null,class:"history-icon",slot:"end",icon:e.trashOutline},null,8,["onClick","icon"])])),_:2},1536),[[i.F8,t?.value]]),(0,n.wy)((0,n.Wm)(w,null,{default:(0,n.w5)((()=>[p])),_:2},1536),[[i.F8,!0===t.error&&null==t.value]]),(0,n.Wm)(F,{accept:"image/jpeg, application/pdf, .zip, image/png,",name:"0",changeHandler:e=>t.fn(e)},null,8,["accept","changeHandler"])])))),128)),(0,n.wy)((0,n.Wm)(w,null,{default:(0,n.w5)((()=>[g])),_:1},512),[[i.F8,!0===this.$pinia.state.value?.services?.servicesResponse?.error]])])):(0,n.kq)("",!0),!1===this.$pinia.state.value?.services?.servicesResponse?.error?((0,n.wg)(),(0,n.iD)("div",f,[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[h,(0,n._)("p",null,(0,a.zw)(this.$pinia.state.value?.services?.servicesResponse?.message),1),v])),_:1})])):(0,n.kq)("",!0)])),_:2},[!1===e.sent?{name:"header-content",fn:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[r])),_:1})])),key:"0"}:void 0]),1032,["method","loading","filledBtn"])])),_:1})}var m=s(2201),I=s(594),w=s(8409),y=s(4043),E=s(8903),F=s(7269),S=s(6086),R=s(6306),k=(0,n.aZ)({name:"servicesRequestFiles",components:{IonPage:w._i,Layout:I.Z,IonText:w.yW,InputFile:F.Z,Back:y.Z,IonIcon:w.gu,IonItem:w.Ie},methods:{...(0,S.nv)(R.X,["services","uploadFiles"]),async storageHandler(){let e=this.$data.data.filter((e=>{if(!0===e.required)return e.error=!0,null===e.value}));if(0===e.length){let e={},t={},s=[];const n=e=>new Promise(((t,s)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>{t(n.result)},n.onerror=e=>s(e)}));let a=this.$data.data.filter((e=>{if(null===e.value)return e}));for(let i=0;i<a.length;i++){const e=a[i];t[e.field]={NAME:e.text,VALUE:e.value}}for(let i=0;i<this.$data.data.length;i++){const e=this.$data.data[i];s.push({field:e.field,text:e.text,title:e.value?.name,file:null!==e.value&&await n(e.value)})}this.$data.loading=!0,this.uploadFiles(s).then((()=>{for(let t=0;t<this.$pinia.state.value?.services?.filesResponse.length;t++){const s=this.$pinia.state.value?.services?.filesResponse[t];e[s.field]={NAME:s.text,VALUE:s.fileId}}let s={...this.$pinia.state.value?.services?.form,...e,...t};this.services(s).then((()=>{this.$data.sent=!0,this.$data.loading=!1,!0===this.$pinia.state.value?.services?.servicesResponse?.error&&(this.$data.sent=!1),console.log(e,s,"test",this.$pinia.state.value?.services?.servicesResponse)}))}))}}},data(){return{loading:!1,sent:!1,data:[{field:"FILE_C_3",value:null,required:!1,text:"Топографическая карта участка в масштабе 1 к 500 (не прилагается, если заказчик - физическое лицо, осуществляющее создание (реконструкцию) объекта индивидуального жилищного строительства)",fn:function(e){this.value=e.target.files[0]}},{required:!0,field:"FILE_C_9",value:null,text:"Копия документа, подтверждающего право собственности или иное предусмотренное законом основание на домовладение",fn:function(e){this.value=e.target.files[0]}},{required:!0,field:"FILE_C_10",value:null,text:"Копия документа, подтверждающего право собственности или иное предусмотренное законом основание на земельный участок, на котором расположено домовладение заявителя",fn:function(e){this.value=e.target.files[0]}},{value:null,field:"FILE_C2_2",required:!0,text:"Ситуационный план расположения земельного участка с привязкой к территории населенного пункта (формат А4)",fn:function(e){this.value=e.target.files[0]}},{field:"FILE_C2_14_1",value:null,required:!1,text:"Доверенность или иные документы, подтверждающие полномочия представителя заявителя (в случае если заявка о подключении (технологическом присоединении) подается представителем заявителя)",fn:function(e){this.value=e.target.files[0]}}]}},setup(){const e=(0,m.tv)();return{router:e,caretDownSharp:E.D2O,trashOutline:E.gtu}}}),_=s(3744);const x=(0,_.Z)(k,[["render",A],["__scopeId","data-v-eb8ccdcc"]]);var C=x},5148:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=6159.e0de0f2a.js.map