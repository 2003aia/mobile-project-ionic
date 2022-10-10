"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[232],{6306:function(e,t,s){s.d(t,{X:function(){return o}});s(7658);var a=s(6086),l=s(9669),n=s.n(l),r=s(3978);const i="https://api.aostng.ru/api/v2",o=(0,a.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},servicesOneNext:!1,techAllianceConnection:!1,addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null,camerasResponse:null,camerasError:null}),getters:{setForm:e=>t=>[...e.form,...t]},actions:{async getCameras(){console.log("getting cameras");try{await n().get(`${i}/camera/get`).then((e=>this.camerasResponse=e.data))}catch(e){this.camerasError=e}},async getListServices(){console.log("getting listServices");const e=new r.K;await e.create();const t=await e.get("token"),s=JSON.parse(t).token;try{await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/ListServices",{token:s}).then((e=>this.listServicesResponse=e.data))}catch(a){this.listServicesResponseError=a}},async getForms(){console.log("getting forms");try{await n().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async uploadFiles(e){console.log("uploading files");const t=new r.K;await t.create();const s=await t.get("token"),a=JSON.parse(s).token;try{let t=e.filter((e=>{if(!1!==e.file)return e}));for(let e=0;e<t.length;e++){const s=t[e];await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/get_file",{token:a,title:s.title,file:s.file}).then((e=>this.filesResponse.push({...e.data,field:s.field,text:s.text})))}}catch(l){this.filesResponseError=l}},async services(e){console.log("services");const t=new r.K;await t.create();const s=await t.get("token"),a=JSON.parse(s).token;try{await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:a,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(l){this.servicesResponseError=l}},async callInspector(e,t){try{const s=new r.K;await s.create();const a=await s.get("token"),l=JSON.parse(a).token;await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:l,LC:e,phone:t}).then((e=>this.callInspectorResponse=e.data))}catch(s){this.callInspectorError=s}},async addressQuery(e,t){try{await n()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===t||"GAS_ADDRESS"===t?JSON.stringify({query:e,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:e,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((e=>this.addressResponse=e.data))}catch(s){this.addressError=s}}}})},2833:function(e,t,s){s.d(t,{Z:function(){return m}});var a=s(6252),l=s(3577);function n(e,t,s,n,r,i){const o=(0,a.up)("ion-text"),d=(0,a.up)("ion-icon");return(0,a.wg)(),(0,a.iD)("div",{class:"choose",onClick:t[0]||(t[0]=(...t)=>e.btnSrc&&e.btnSrc(...t))},[(0,a.Wm)(o,{class:"choose-text"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.name)+" ",1),!0===e.required?((0,a.wg)(),(0,a.j4)(o,{key:0,class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1})):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(d,{class:"choose-icon",icon:e.caretDownSharp},null,8,["icon"])])}var r=s(526),i=s(8903),o=s(2201),d=(0,a.aZ)({name:"buttonSelect",props:{name:String,btnSrc:Function,required:Boolean},components:{IonIcon:r.gu,IonText:r.yW},setup(){const e=(0,o.tv)();return{router:e,caretDownSharp:i.D2O}}}),u=s(3744);const c=(0,u.Z)(d,[["render",n],["__scopeId","data-v-793185f2"]]);var m=c},1496:function(e,t,s){s.d(t,{Z:function(){return d}});var a=s(6252),l=s(3577);function n(e,t,s,n,r,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,l.C_)(["main",{padding:e.padding}]),onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[(0,a.WI)(e.$slots,"content",{},void 0,!0)],2)}var r=(0,a.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),i=s(3744);const o=(0,i.Z)(r,[["render",n],["__scopeId","data-v-568da44e"]]);var d=o},232:function(e,t,s){s.r(t),s.d(t,{default:function(){return P}});s(7658);var a=s(6252),l=s(3577),n=s(9963);const r=e=>((0,a.dD)("data-v-87c99502"),e=e(),(0,a.Cn)(),e),i=r((()=>(0,a._)("p",{class:"text-20-600"},"Общие сведения заявления",-1))),o=r((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные заявителя",-1))),d={slot:"content"},u=r((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1))),c=r((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные паспорта",-1))),m={slot:"content"},h=r((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1))),f=r((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные об объекте газификации",-1))),v=r((()=>(0,a._)("p",{class:"sub-title"}," Наименование объекта капитального строительства ",-1))),p=["value"],_=r((()=>(0,a._)("p",{class:"error"},"Выберите вариант",-1))),g={class:"sub-title"},S={slot:"content"},E=r((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1))),A={class:"sub-title"},w={class:"sub-title"},k=r((()=>(0,a._)("p",{class:"error"},"Выберите вариант",-1))),U={class:"sub-title"},y=r((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1)));function R(e,t,s,r,R,L){const W=(0,a.up)("Back"),I=(0,a.up)("ion-text"),D=(0,a.up)("Input"),C=(0,a.up)("ion-item"),H=(0,a.up)("ion-accordion"),$=(0,a.up)("ion-accordion-group"),T=(0,a.up)("LayoutBox"),N=(0,a.up)("ButtonSelect"),V=(0,a.up)("Layout"),G=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(G,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{btnSrc:()=>e.router.push("/tabs/services")},null,8,["btnSrc"]),(0,a.Wm)(V,{method:e.storageHandler,height:"false",filledBtn:"Далее",outlineBtn:".",title:"Онлайн-заявка на технологическое подключение"},{"header-content":(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[i])),_:1})])),"main-content":(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[o,(0,a._)("p",null,[(0,a.Wm)(I,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1}),(0,a.Uk)(" - обязательное поле для заполнения. ")])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formUser,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)($,{ref_for:!0,ref:"addressQuery"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{value:"first"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{mask:t.mask,slot:"header",value:t.value,name:t.name,required:t.required,onInput:s=>{t.value=s.target.value,e.addressQueryHandler(s,t.field)}},null,8,["mask","value","name","required","onInput"]),(0,a.wy)((0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addressList,(r=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:r},[(0,a.Wm)(C,{button:"",onClick:()=>{this.$refs.addressQuery[s].$el.value=void 0,t.value=r.value},lines:e.addressList[e.addressList.length-1]?.value===r.value?"none":"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(r.value),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])),[[n.F8,"USER_BIRTHPLACE"===t.field||t.value]]))),128)),(0,a.wy)((0,a.Wm)(C,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Не найдено")])),_:1})])),_:1},512),[[n.F8,0===e.addressList?.length]])],512),[[n.F8,"USER_BIRTHPLACE"===t.field||"USER_ADDRESS"===t.field&&t.value]])])),_:2},1024)])),_:2},1536),(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[u])),_:2},1536),[[n.F8,0===t.value.length&&t.error]])])))),128))])),content:(0,a.w5)((()=>[(0,a.Wm)(T,null,{content:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[c,(0,a._)("p",null,[(0,a.Wm)(I,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1}),(0,a.Uk)(" - обязательное поле для заполнения. ")])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formPass,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)($,{ref_for:!0,ref:"addressQuery2"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,{mask:t.mask,slot:"header",value:t.value,name:t.name,required:t.required,onInput:s=>{t.value=s.target.value,e.addressQueryHandler(s,t.field)}},null,8,["mask","value","name","required","onInput"]),(0,a.wy)((0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addressList,(r=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:r},[(0,a.Wm)(C,{button:"",onClick:()=>{this.$refs.addressQuery2[s].$el.value=void 0,t.value=r.value},lines:e.addressList[e.addressList.length-1]?.value===r.value?"none":"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(r.value),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])),[[n.F8,"USER_REGION"===t.field&&t.value]]))),128)),(0,a.wy)((0,a.Wm)(C,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Не найдено")])),_:1})])),_:1},512),[[n.F8,0===e.addressList?.length]])],512),[[n.F8,"USER_REGION"===t.field&&t.value]])])),_:2},1024)])),_:2},1536),(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[h])),_:2},1536),[[n.F8,0===t.value.length&&t.error]])])))),128))])),_:1}),(0,a.Wm)(T,null,{content:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[f,(0,a._)("p",null,[(0,a.Wm)(I,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1}),(0,a.Uk)(" - обязательное поле для заполнения. ")]),v])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formGasName,(s=>((0,a.wg)(),(0,a.iD)("div",{key:s},[(0,a.Wm)(C,{class:"check"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{onClick:t[0]||(t[0]=t=>{e.uniqueCheck(t)}),value:s.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.gasHome=t),onChange:t[2]||(t[2]=(...t)=>e.uniqueCheck&&e.uniqueCheck(...t)),class:"check2",type:"checkbox",slot:"start"},null,40,p),[[n.e8,e.gasHome]]),(0,a.Uk)(" "+(0,l.zw)(s.name),1)])),_:2},1024)])))),128)),(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[_])),_:1},512),[[n.F8,!0===e.gasHome?.error]]),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a._)("p",g,[(0,a.Uk)(" Адрес обьекта "),(0,a.Wm)(I,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1})])])),_:1}),(0,a.Wm)($,{ref:"addressQuery3"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{value:"first"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{slot:"header",onInput:t[3]||(t[3]=t=>{e.addressQueryHandler(t,"GAS_ADDRESS"),e.changeAddress(t)}),value:e.address,name:"Введите данные "},null,8,["value"]),(0,a.wy)((0,a._)("div",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addressList,(t=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(C,{button:"",onClick:()=>{this.$refs.addressQuery3.$el.value=void 0,e.address=t.value},lines:e.addressList[e.addressList.length-1]?.value===t.value?"none":"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.value),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])),[[n.F8,e.address]]))),128)),(0,a.wy)((0,a.Wm)(C,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Не найдено")])),_:1})])),_:1},512),[[n.F8,0===e.addressList?.length]])],512),[[n.F8,e.address]])])),_:1})])),_:1},512),(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[E])),_:1},512),[[n.F8,!0===e.validation.address&&0===e.address.length]]),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a._)("p",A,[(0,a.Uk)(" Подключение в случаях (выбрать один из следующих вариантов) "),(0,a.Wm)(I,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1})])])),_:1}),(0,a.Wm)(N,{btnSrc:()=>{this.$pinia.state.value.services.techAllianceConnection=!0,e.router.push({name:"servicesTechAllianceSelect"})},name:this.select?.GAS_SLUCHI?.VALUE?this.select?.GAS_SLUCHI?.VALUE:"Выберите вариант"},null,8,["btnSrc","name"]),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a._)("p",w,[(0,a.Uk)(" Характер потребления газа "),(0,a.Wm)(I,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1})])])),_:1}),(0,a.Wm)(N,{btnSrc:()=>{this.$pinia.state.value.services.techAllianceConnection=!1,e.router.push({name:"servicesTechAllianceSelect"})},name:this.select?.GAS_HARAKTER?.VALUE?this.select?.GAS_HARAKTER?.VALUE:"Выберите вариант"},null,8,["btnSrc","name"]),(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[k])),_:1},512),[[n.F8,!0===e.validation.select&&void 0===this.select?.GAS_HARAKTER?.VALUE&&void 0===this.select?.GAS_SLUCHI?.VALUE]]),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a._)("p",U,[(0,a.Uk)(" Сроки проектирования, строительства и ввода в эксплуатацию объекта капитального строительства (в том числе по этапам и очередям) "),(0,a.Wm)(I,{class:"dot"},{default:(0,a.w5)((()=>[(0,a.Uk)("*")])),_:1})])])),_:1}),(0,a.Wm)(D,{value:e.deadlines,changeHandler:e.changeDeadlines,name:"Введите данные"},null,8,["value","changeHandler"]),(0,a.wy)((0,a.Wm)(I,null,{default:(0,a.w5)((()=>[y])),_:1},512),[[n.F8,!0===e.validation.deadlines&&0===e.deadlines.length]])])),_:1})])),_:1},8,["method"])])),_:1})}var L=s(2201),W=s(594),I=s(526),D=s(1483),C=s(1496),H=s(4043),$=s(2833),T=s(6086),N=s(6306),V=s(3978),G=s(381),q=s.n(G),O=s(2982),b=(0,a.aZ)({name:"servicesTechAlliance",components:{IonPage:I._i,Layout:W.Z,IonText:I.yW,Input:D.Z,Back:H.Z,ButtonSelect:$.Z,LayoutBox:C.Z,IonItem:I.Ie,IonAccordion:I.We,IonAccordionGroup:I.eh},directives:{mask:O.mask},computed:{addressList(){return this.$pinia.state.value?.services?.addressResponse?.suggestions},formFields(){return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter((e=>"Услуга технологического присоединения для физических лиц"===e.SERVICE.VALUE))},select(){return this.$pinia.state.value?.services?.select}},methods:{...(0,T.nv)(N.X,["getForms","addressQuery"]),addressQueryHandler(e,t){"USER_BIRTHPLACE"===t&&this.addressQuery(e.target.value,t),"USER_ADDRESS"===t&&this.addressQuery(e.target.value,t),"USER_REGION"!==t&&"GAS_ADDRESS"!==t||this.addressQuery(e.target.value,t)},async storageHandler(){const e=new V.K;await e.create();let t={},s=this.$data.formUser.filter((e=>{if(!0===e.required)return e.error=!0,""===e.value})),a=this.$data.formPass.filter((e=>{if(!0===e.required)return e.error=!0,""===e.value})),l=0===this.$data.gasHome.length?this.$data.gasHome={error:!0}:null,n=()=>{0===this.$data.address.length?this.$data.validation.address=!0:this.$data.validation.address=!1,0===this.$data.deadlines.length?this.$data.validation.deadlines=!0:this.$data.validation.deadlines=!1,void 0===this.select?.GAS_SLUCHI?.VALUE&&void 0===this.select?.GAS_HARAKTER?.VALUE?this.$data.validation.select=!0:this.$data.validation.select=!1};if(n(),0===s.length&&0===a.length&&null===l&&Object.keys(this.$data.validation).every((e=>!this.$data.validation[e]))){for(let e=0;e<this.$data.formPass.length;e++){const s=this.$data.formPass[e];t[s.field]={NAME:s.name,VALUE:s.value}}let s={...this.formFields[0],...t};for(let e=0;e<this.$data.formUser.length;e++){const t=this.$data.formUser[e];s[t.field]={NAME:t.name,VALUE:t.value}}let a={...s,DATE_CREATE:{NAME:"Дата создания",VALUE:`${q()().format("DD.MM.YYYY hh:mm:ss")} `},TIMESTAMP_X:{NAME:"Время последнего изменения",VALUE:`${q()().format("DD.MM.YYYY hh:mm:ss")} `},USER:{NAME:"USER",VALUE:"",VALUE_ID:0},GAS_ADDRESS:{NAME:"Адрес объекта",VALUE:this.$data.address},GAS__SROK:{NAME:"Сроки проектирования, строительства и ввода в эксплуатацию объекта капитального строительства (в том числе по этапам и очередям)*",VALUE:this.$data.deadlines},GAS_SLUCHI:{NAME:"Подключение в случаях (выбрать один из следующих вариантов)",VALUE:this.select?.GAS_SLUCHI.VALUE},GAS_HARAKTER:{NAME:"Характер потребления газа",VALUE:this.select?.GAS_HARAKTER.VALUE},GAS_HOME:{NAME:"Наименование объекта капитального строительства",VALUE:this.$data.gasHome[0]}};console.log(a,"test"),this.$pinia.state.value?.services?.form&&(this.$pinia.state.value.services.form=a,await e.set("servicesTechAlliance",JSON.stringify(a))),this.$router.push("/tabs/servicesTechAllianceChoose")}},async uniqueCheck(e){console.log(e.currentTarget.value,"test"),this.$data.gasHome=[],!1===e.currentTarget.checked&&this.$data.gasHome.push(e.currentTarget.value)},changeDeadlines(e){this.$data.deadlines=e.target.value},changeAddress(e){this.$data.address=e.target.value}},mounted(){this.getForms();const e=async()=>{const e=new V.K;await e.create();const t=await e.get("servicesTechAlliance");console.log(JSON.parse(t),"servicesTechAlliance")};e(),console.log("test",this.formFields)},data(){return{validation:{address:!1,deadlines:!1,select:!1},formGasName:[{name:"Жилой дом"},{name:"Гараж"},{name:"Баня"},{name:"Другое"}],address:"",deadlines:"",gasHome:[],formPass:[{field:"USER_PASSPORT_SERIAL",name:"Серия паспорта",mask:"####",type:"text",required:!0,value:""},{field:"USER_PASSPORT_NUM",type:"text",name:"Номер паспорта",mask:"######",required:!0,value:""},{field:"USER_PASS_WHO",name:"Кем выдан",type:"text",required:!0,value:""},{field:"USER_PASS_DATE",mask:"##.##.####",name:"Дата выдачи паспорта",type:"text",required:!0,value:""},{field:"USER_REGION",name:"Место регистрации",type:"text",required:!0,value:""}],formUser:[{field:"USER_NAME",name:"Имя",type:"text",required:!0,value:"",mask:null},{field:"USER_LAST_NAME",mask:null,name:"Фамилия",type:"text",required:!0,value:""},{field:"USER_SECOND_NAME",mask:null,name:"Отчество",type:"text",required:!0,value:""},{field:"USER_BIRTHDATE",mask:"##.##.####",name:"Дата рождения",type:"text",required:!0,value:""},{field:"USER_BIRTHPLACE",mask:null,name:"Место рождения",type:"text",required:!0,value:""},{field:"USER_ADDRESS",mask:null,name:"Место жительства",type:"text",required:!0,value:""},{field:"USER_PHONE",mask:"+7 (###) ###-##-##",name:"Контактный телефон",type:"text",required:!0,value:""},{field:"USER_PHONE_2",mask:null,name:"Дополнительный контактный номер",type:"text",required:!1,value:""},{field:"USER_EMAIL",mask:null,name:"E-mail",type:"email",required:!0,value:""}]}},setup(){const e=(0,L.tv)();return{router:e}}}),x=s(3744);const F=(0,x.Z)(b,[["render",R],["__scopeId","data-v-87c99502"]]);var P=F}}]);
//# sourceMappingURL=232.8c3310e0.js.map