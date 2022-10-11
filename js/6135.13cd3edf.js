"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[6135],{6306:function(e,t,s){s.d(t,{X:function(){return o}});s(7658);var n=s(6086),a=s(9669),l=s.n(a),i=s(3978);const r="https://api.aostng.ru/api/v2",o=(0,n.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},servicesOneNext:!1,techAllianceConnection:!1,addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null,camerasResponse:null,camerasError:null}),getters:{setForm:e=>t=>[...e.form,...t]},actions:{async getCameras(){console.log("getting cameras");try{await l().get(`${r}/camera/get`).then((e=>this.camerasResponse=e.data))}catch(e){this.camerasError=e}},async getListServices(){console.log("getting listServices");const e=new i.K;await e.create();const t=await e.get("token"),s=JSON.parse(t).token;try{await l().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/ListServices",{token:s}).then((e=>this.listServicesResponse=e.data))}catch(n){this.listServicesResponseError=n}},async getForms(){console.log("getting forms");try{await l().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async uploadFiles(e){console.log("uploading files");const t=new i.K;await t.create();const s=await t.get("token"),n=JSON.parse(s).token;try{let t=e.filter((e=>{if(!1!==e.file)return e}));for(let e=0;e<t.length;e++){const s=t[e];await l().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/get_file",{token:n,title:s.title,file:s.file}).then((e=>this.filesResponse.push({...e.data,field:s.field,text:s.text})))}}catch(a){this.filesResponseError=a}},async services(e){console.log("services");const t=new i.K;await t.create();const s=await t.get("token"),n=JSON.parse(s).token;try{await l().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:n,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(a){this.servicesResponseError=a}},async callInspector(e,t){try{const s=new i.K;await s.create();const n=await s.get("token"),a=JSON.parse(n).token;await l().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:a,LC:e,phone:t}).then((e=>this.callInspectorResponse=e.data))}catch(s){this.callInspectorError=s}},async addressQuery(e,t){try{await l()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===t||"GAS_ADDRESS"===t?JSON.stringify({query:e,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:e,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((e=>this.addressResponse=e.data))}catch(s){this.addressError=s}}}})},7269:function(e,t,s){s.d(t,{Z:function(){return p}});var n=s(6252);const a=["for"],l=["name","id","accept"];function i(e,t,i,r,o,u){const c=(0,n.up)("ion-icon"),d=(0,n.up)("ion-text"),p=(0,n.up)("ion-img"),f=(0,n.up)("ion-item");return(0,n.wg)(),(0,n.iD)("label",{for:e.data},[(0,n._)("input",{name:e.data,id:e.data,type:"file",onChange:t[0]||(t[0]=(...t)=>e.changeHandler&&e.changeHandler(...t)),accept:e.accept},null,40,l),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{slot:"start",icon:e.documentTextOutline},null,8,["icon"]),(0,n.Wm)(d,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Загрузить документ ")])),_:1}),(0,n.Wm)(p,{slot:"end",src:s(5148)},null,8,["src"])])),_:1})],8,a)}var r=s(8409),o=s(8903),u=(0,n.aZ)({components:{IonText:r.yW,IonItem:r.Ie,IonIcon:r.gu,IonImg:r.Xz},setup(){return{documentTextOutline:o.L82}},methods:{onFocusText:function(){this.$refs.text.focus()}},data(){return{}},name:"inputFileView",props:{data:String,name:String,accept:String,changeHandler:Function,value:Object}}),c=s(3744);const d=(0,c.Z)(u,[["render",i],["__scopeId","data-v-34140c0e"]]);var p=d},1461:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});s(7658);var n=s(6252),a=s(3577),l=s(9963);const i=e=>((0,n.dD)("data-v-79d8110c"),e=e(),(0,n.Cn)(),e),r=i((()=>(0,n._)("p",{class:"text-20-600"},"Загрузка электронных копий документов",-1))),o=i((()=>(0,n._)("p",{class:"title ion-text-start"},"Спасибо!",-1))),u=i((()=>(0,n._)("p",null," Ваша заявка принята в обработку. После процедуры идентификации на предмет соответствия достоверности введенных данных, с Вами свяжется сотрудник УГРС. По вопросам регистрации заявки обращаться по номеру 319-555 в будни с 08.00 до 17.00 ",-1))),c=i((()=>(0,n._)("p",{class:"sub-title"}," Важно! Если загружаемый документ содержит несколько страниц, то просим загрузить одним файлом в формате *.pdf ",-1))),d={class:"text"},p={class:"text"},f=i((()=>(0,n._)("p",{class:"error"},"Выберите файл",-1))),g=i((()=>(0,n._)("p",{class:"error"},"Что-то пошло не так",-1)));function h(e,t,s,i,h,v){const A=(0,n.up)("Back"),m=(0,n.up)("ion-text"),I=(0,n.up)("ion-item"),_=(0,n.up)("ion-icon"),w=(0,n.up)("InputFile"),E=(0,n.up)("Layout"),F=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(F,null,{default:(0,n.w5)((()=>[(0,n.Wm)(A,{btnSrc:()=>{!0===e.sent?e.sent=!1:e.router.push("/tabs/servicesGasContractCheckbox")}},null,8,["btnSrc"]),(0,n.Wm)(E,{height:"false",filledBtn:!1===e.sent?"Далее":"Готово",method:()=>{!1===e.sent?e.storageHandler():e.router.push("/tabs/services")},loading:e.loading,outlineBtn:".",title:"Заключения договора поставки газа для обеспечения коммунально - бытовых нужд гражданина собственниками квартир"},(0,n.Nv)({"main-content":(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[o,(0,n._)("p",null,(0,a.zw)(this.$pinia.state.value?.services?.servicesResponse?.message),1),u])),_:1})],512),[[l.F8,!0===e.sent]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(I,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Для загрузки возможны следующие типы файлов: *.jpg, *.jpeg, *.zip, *.pdf, *.png Размер одного файла не должен превышать 5 Мб "),c,(0,n._)("p",d,[(0,n.Wm)(m,{class:"dot"},{default:(0,n.w5)((()=>[(0,n.Uk)("*")])),_:1}),(0,n.Uk)(" - обязательное поле для заполнения. ")])])),_:1})])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.data,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.text},[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n._)("p",p,[(0,n.Uk)((0,a.zw)(t.text.slice(0,-1))+" ",1),(0,n.wy)((0,n.Wm)(m,{class:"dot"},{default:(0,n.w5)((()=>[(0,n.Uk)("*")])),_:2},1536),[[l.F8,t.required]])])])),_:2},1024),(0,n.wy)((0,n.Wm)(I,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{class:"file-text blue"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.value?.name),1)])),_:2},1024),(0,n.Wm)(_,{onClick:()=>t.value=null,class:"history-icon",slot:"end",icon:e.trashOutline},null,8,["onClick","icon"])])),_:2},1536),[[l.F8,t?.value]]),(0,n.wy)((0,n.Wm)(m,null,{default:(0,n.w5)((()=>[f])),_:2},1536),[[l.F8,!0===t.error&&null==t.value]]),(0,n.Wm)(w,{data:t.field,accept:"image/jpeg, application/pdf, .zip, image/png,",onChange:e=>t.fn(e)},null,8,["data","accept","onChange"])])))),128)),(0,n.wy)((0,n.Wm)(m,null,{default:(0,n.w5)((()=>[g])),_:1},512),[[l.F8,!0===this.$pinia.state.value?.services?.servicesResponse?.error]])],512),[[l.F8,!1===e.sent]])])),_:2},[!1===e.sent?{name:"header-content",fn:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[r])),_:1})])),key:"0"}:void 0]),1032,["filledBtn","method","loading"])])),_:1})}var v=s(2201),A=s(594),m=s(8409),I=s(4043),_=s(7269),w=s(8903),E=s(6086),F=s(6306),y=(0,n.aZ)({name:"servicesGasContractFiles",components:{IonPage:m._i,Layout:A.Z,IonText:m.yW,InputFile:_.Z,Back:I.Z,IonItem:m.Ie,IonIcon:m.gu},methods:{...(0,E.nv)(F.X,["services","uploadFiles"]),async storageHandler(){let e={},t={},s=this.$data.data.filter((e=>{if(!0===e.required)return e.error=!0,null===e.value}));if(0===s.length){this.$data.loading=!0;let s=[];const n=e=>new Promise(((t,s)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>{t(n.result)},n.onerror=e=>s(e)}));let a=this.$data.data.filter((e=>{if(null===e.value)return e}));for(let e=0;e<a.length;e++){const s=a[e];t[s.field]={NAME:s.text,VALUE:s.value}}for(let e=0;e<this.$data.data.length;e++){const t=this.$data.data[e];s.push({field:t.field,text:t.text,title:t.value?.name,file:null!==t.value&&await n(t.value)})}this.uploadFiles(s).then((()=>{for(let t=0;t<this.$pinia.state.value?.services?.filesResponse.length;t++){const s=this.$pinia.state.value?.services?.filesResponse[t];e[s.field]={NAME:s.text,VALUE:s.fileId}}let s={...this.$pinia.state.value?.services?.form,...e,...t};this.services(s).then((()=>{this.$data.sent=!0,this.$data.loading=!1,!0===this.$pinia.state.value?.services?.servicesResponse?.error&&(this.$data.sent=!1),console.log(s,"test",this.$pinia.state.value?.services?.servicesResponse)}))}))}}},data(){return{sent:!1,loading:!1,data:[{field:"FILE_C_6",text:"Копия основного документа, удостоверяющий личность (паспорт гражданина вторая, третья страницы с персональными данными гражданина, страницы с отметкой о регистрации)",required:!0,fn:function(e){this.value=e.target.files[0]},value:null},{required:!0,field:"FILE_C2_6_DOVERENNOST",text:"Документы, подтверждающие право собственности заявителя в отношении помещений, газоснабжение которых необходимо обеспечить, или иные основания пользования этими помещениями (выписка из ЕГРН, договор социального найма, договор аренды и т.д.; все страницы) ",fn:function(e){this.value=e.target.files[0]},value:null},{field:"FILE_C2_3_1",text:"Документы, подтверждающие размеры общей площади жилых помещений в многоквартирном доме, площади нежилых отапливаемых помещений, относящихся к общему имуществу многоквартирного дома (технический паспорт, технический план) ",fn:function(e){this.value=e.target.files[0]},required:!1,value:null},{field:"FILE_C2_3_2",required:!1,text:"Документы, подтверждающие размеры общей площади жилых и отапливаемых вспомогательных помещений жилого дома, а также размер (объем) отапливаемых помещений надворных построек, - для индивидуальных домовладений  ",fn:function(e){this.value=e.target.files[0]},value:null},{required:!0,field:"FILE_C2_4_1",text:"Документы, подтверждающие количество лиц, проживающих в жилых помещениях многоквартирных домов и жилых домов (справка о составе семьи со сроком давности не более 1 месяца); *",fn:function(e){this.value=e.target.files[0]},value:null},{field:"FILE_C2_5_1",text:"Документы, подтверждающие состав и тип газоиспользующего оборудования, входящего в состав внутридомового газового оборудования, и соответствие этого оборудования установленным для него техническим требованиям  ",fn:function(e){this.value=e.target.files[0]},value:null,required:!1},{field:"FILE_C2_6_1",text:"Документы, подтверждающие тип установленного прибора (узла) учета газа, место его присоединения к газопроводу, дату опломбирования прибора учета газа заводом-изготовителем или организацией, осуществлявшей его последнюю поверку (паспорт на счётчик )  ",fn:function(e){this.value=e.target.files[0]},value:null,required:!1},{field:"FILE_C2_11_1",text:"Копия договора о техническом обслуживании и ремонте внутридомового и (или) внутриквартирного газового оборудования  ",fn:function(e){this.value=e.target.files[0]},value:null,required:!1},{field:"FILE_C2_12_1",text:"Копия акта о технологическом подключении или копия акта о готовности сетей газопотребления и газоиспользующего оборудования объекта капитального строительства к подключению (в случае, если оферта направляется до завершения мероприятий по подключению)   ",fn:function(e){this.value=e.target.files[0]},value:null,required:!1},{field:"FILE_C2_13_1",text:"Согласие от всех участников долевой собственности, в случае, если имущество находится в долевой собственности, согласно ст. 247 ГК РФ   ",fn:function(e){this.value=e.target.files[0]},value:null,required:!1},{field:"FILE_C2_14_1",text:"Доверенность или иные документы, подтверждающие полномочия представителя заявителя (в случае если заявка о подключении (технологическом присоединении) подается представителем заявителя)  ",fn:function(e){this.value=e.target.files[0]},value:null,required:!1},{field:"FILE_C2_15_1",text:"Дополнительное поле для загрузки документов  ",fn:function(e){this.value=e.target.files[0]},value:null,required:!1}]}},setup(){const e=(0,v.tv)();return{router:e,documentTextOutline:w.L82,caretDownSharp:w.D2O,trashOutline:w.gtu}}}),S=s(3744);const C=(0,S.Z)(y,[["render",h],["__scopeId","data-v-79d8110c"]]);var x=C},5148:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=6135.13cd3edf.js.map