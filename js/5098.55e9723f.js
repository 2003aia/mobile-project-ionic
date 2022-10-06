"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[5098],{6306:function(e,t,s){s.d(t,{X:function(){return i}});var a=s(6086),l=s(9669),n=s.n(l),r=s(3978);const i=(0,a.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null}),getters:{setForm:e=>t=>[...e.form,...t]},actions:{async getListServices(){console.log("getting listServices");const e=new r.K;await e.create();const t=await e.get("token"),s=JSON.parse(t).token;try{await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/ListServices",{token:s}).then((e=>this.listServicesResponse=e.data))}catch(a){this.listServicesResponseError=a}},async getForms(){console.log("getting forms");try{await n().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async uploadFiles(e){console.log("uploading files");const t=new r.K;await t.create();const s=await t.get("token"),a=JSON.parse(s).token;try{let t=e.filter((e=>{if(!1!==e.file)return e}));for(let e=0;e<t.length;e++){const s=t[e];await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/get_file",{token:a,title:s.title,file:s.file}).then((e=>this.filesResponse.push({...e.data,field:s.field,text:s.text})))}}catch(l){this.filesResponseError=l}},async services(e){console.log("services");const t=new r.K;await t.create();const s=await t.get("token"),a=JSON.parse(s).token;try{await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:a,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(l){this.servicesResponseError=l}},async callInspector(e,t){try{const s=new r.K;await s.create();const a=await s.get("token"),l=JSON.parse(a).token;await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:l,LC:e,phone:t}).then((e=>this.callInspectorResponse=e.data))}catch(s){this.callInspectorError=s}},async addressQuery(e,t){try{await n()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===t||"GAS_ADDRESS"===t?JSON.stringify({query:e,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:e,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((e=>this.addressResponse=e.data))}catch(s){this.addressError=s}}}})},2833:function(e,t,s){s.d(t,{Z:function(){return f}});var a=s(6252),l=s(3577);const n=(0,a.Uk)("*");function r(e,t,s,r,i,o){const d=(0,a.up)("ion-text"),u=(0,a.up)("ion-icon");return(0,a.wg)(),(0,a.iD)("div",{class:"choose",onClick:t[0]||(t[0]=(...t)=>e.btnSrc&&e.btnSrc(...t))},[(0,a.Wm)(d,{class:"choose-text"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.name)+" ",1),!0===e.required?((0,a.wg)(),(0,a.j4)(d,{key:0,class:"dot"},{default:(0,a.w5)((()=>[n])),_:1})):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(u,{class:"choose-icon",icon:e.caretDownSharp},null,8,["icon"])])}var i=s(1705),o=s(8903),d=s(2119),u=(0,a.aZ)({name:"buttonSelect",props:{name:String,btnSrc:Function,required:Boolean},components:{IonIcon:i.gu,IonText:i.yW},setup(){const e=(0,d.tv)();return{router:e,caretDownSharp:o.D2O}}}),c=s(3744);const m=(0,c.Z)(u,[["render",r],["__scopeId","data-v-793185f2"]]);var f=m},652:function(e,t,s){s.d(t,{Z:function(){return o}});var a=s(6252);function l(e,t,s,l,n,r){return(0,a.wg)(),(0,a.iD)("div",{class:"main",onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[(0,a.WI)(e.$slots,"content",{},void 0,!0)])}var n=(0,a.aZ)({setup(){},name:"layoutBox",components:{},props:{btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),r=s(3744);const i=(0,r.Z)(n,[["render",l],["__scopeId","data-v-3d91200c"]]);var o=i},5098:function(e,t,s){s.r(t),s.d(t,{default:function(){return re}});var a=s(6252),l=s(3577),n=s(9963);const r=e=>((0,a.dD)("data-v-0fd4ac54"),e=e(),(0,a.Cn)(),e),i=r((()=>(0,a._)("p",{class:"text-20-600"},"Общие сведения заявления",-1))),o=r((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные заявителя",-1))),d=(0,a.Uk)("*"),u=(0,a.Uk)(" - обязательное поле для заполнения. "),c={slot:"content"},m=(0,a.Uk)("Не найдено"),f=r((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1))),h=r((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные паспорта",-1))),v=(0,a.Uk)("*"),_=(0,a.Uk)(" - обязательное поле для заполнения. "),p={slot:"content"},S=(0,a.Uk)("Не найдено"),E=r((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1))),g=r((()=>(0,a._)("p",{class:"title ion-text-start"},"Данные об объекте газификации",-1))),A=(0,a.Uk)("*"),w=(0,a.Uk)(" - обязательное поле для заполнения. "),k=r((()=>(0,a._)("p",{class:"sub-title"}," Наименование объекта капитального строительства ",-1))),U=["value"],y=r((()=>(0,a._)("p",{class:"error"},"Выберите вариант",-1))),R={class:"sub-title"},L=(0,a.Uk)(" Адрес обьекта "),W=(0,a.Uk)("*"),I={slot:"content"},D=(0,a.Uk)("Не найдено"),H=r((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1))),C={class:"sub-title"},T=(0,a.Uk)(" Подключение в случаях (выбрать один из следующих вариантов) "),$=(0,a.Uk)("*"),N={class:"sub-title"},V=(0,a.Uk)(" Характер потребления газа "),G=(0,a.Uk)("*"),q=r((()=>(0,a._)("p",{class:"error"},"Выберите вариант",-1))),b={class:"sub-title"},O=(0,a.Uk)(" Сроки проектирования, строительства и ввода в эксплуатацию объекта капитального строительства (в том числе по этапам и очередям) "),x=(0,a.Uk)("*"),F=r((()=>(0,a._)("p",{class:"error"},"Заполните поле",-1)));function P(e,t,s,r,P,M){const K=(0,a.up)("Back"),B=(0,a.up)("ion-text"),Q=(0,a.up)("Input"),Y=(0,a.up)("ion-item"),Z=(0,a.up)("ion-accordion"),J=(0,a.up)("ion-accordion-group"),j=(0,a.up)("LayoutBox"),z=(0,a.up)("ButtonSelect"),X=(0,a.up)("Layout"),ee=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(ee,null,{default:(0,a.w5)((()=>[(0,a.Wm)(K,{btnSrc:()=>e.router.push("/tabs/services")},null,8,["btnSrc"]),(0,a.Wm)(X,{method:e.storageHandler,height:"false",filledBtn:"Далее",outlineBtn:".",title:"Онлайн-заявка на технологическое подключение"},{"header-content":(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[i])),_:1})])),"main-content":(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[o,(0,a._)("p",null,[(0,a.Wm)(B,{class:"dot"},{default:(0,a.w5)((()=>[d])),_:1}),u])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formUser,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(J,{ref_for:!0,ref:"addressQuery"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{value:"first"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{mask:t.mask,slot:"header",value:t.value,name:t.name,required:t.required,onInput:s=>{t.value=s.target.value,e.addressQueryHandler(s,t.field)}},null,8,["mask","value","name","required","onInput"]),(0,a.wy)((0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addressList,(r=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:r},[(0,a.Wm)(Y,{button:"",onClick:()=>{this.$refs.addressQuery[s].$el.value=void 0,t.value=r.value},lines:e.addressList[e.addressList.length-1]?.value===r.value?"none":"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(r.value),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])),[[n.F8,"USER_BIRTHPLACE"===t.field||t.value]]))),128)),(0,a.wy)((0,a.Wm)(Y,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[m])),_:1})])),_:1},512),[[n.F8,0===e.addressList?.length]])],512),[[n.F8,"USER_BIRTHPLACE"===t.field||"USER_ADDRESS"===t.field&&t.value]])])),_:2},1024)])),_:2},1536),(0,a.wy)((0,a.Wm)(B,null,{default:(0,a.w5)((()=>[f])),_:2},1536),[[n.F8,0===t.value.length&&t.error]])])))),128))])),content:(0,a.w5)((()=>[(0,a.Wm)(j,null,{content:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[h,(0,a._)("p",null,[(0,a.Wm)(B,{class:"dot"},{default:(0,a.w5)((()=>[v])),_:1}),_])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formPass,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(J,{ref_for:!0,ref:"addressQuery2"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{mask:t.mask,slot:"header",value:t.value,name:t.name,required:t.required,onInput:s=>{t.value=s.target.value,e.addressQueryHandler(s,t.field)}},null,8,["mask","value","name","required","onInput"]),(0,a.wy)((0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addressList,(r=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:r},[(0,a.Wm)(Y,{button:"",onClick:()=>{this.$refs.addressQuery2[s].$el.value=void 0,t.value=r.value},lines:e.addressList[e.addressList.length-1]?.value===r.value?"none":"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(r.value),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])),[[n.F8,"USER_REGION"===t.field&&t.value]]))),128)),(0,a.wy)((0,a.Wm)(Y,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[S])),_:1})])),_:1},512),[[n.F8,0===e.addressList?.length]])],512),[[n.F8,"USER_REGION"===t.field&&t.value]])])),_:2},1024)])),_:2},1536),(0,a.wy)((0,a.Wm)(B,null,{default:(0,a.w5)((()=>[E])),_:2},1536),[[n.F8,0===t.value.length&&t.error]])])))),128))])),_:1}),(0,a.Wm)(j,null,{content:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[g,(0,a._)("p",null,[(0,a.Wm)(B,{class:"dot"},{default:(0,a.w5)((()=>[A])),_:1}),w]),k])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formGasName,(s=>((0,a.wg)(),(0,a.iD)("div",{key:s},[(0,a.Wm)(Y,{class:"check"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{onClick:t[0]||(t[0]=t=>{e.uniqueCheck(t)}),value:s.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.gasHome=t),onChange:t[2]||(t[2]=(...t)=>e.uniqueCheck&&e.uniqueCheck(...t)),class:"check2",type:"checkbox",slot:"start"},null,40,U),[[n.e8,e.gasHome]]),(0,a.Uk)(" "+(0,l.zw)(s.name),1)])),_:2},1024)])))),128)),(0,a.wy)((0,a.Wm)(B,null,{default:(0,a.w5)((()=>[y])),_:1},512),[[n.F8,!0===e.gasHome?.error]]),(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a._)("p",R,[L,(0,a.Wm)(B,{class:"dot"},{default:(0,a.w5)((()=>[W])),_:1})])])),_:1}),(0,a.Wm)(J,{ref:"addressQuery3"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{value:"first"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{slot:"header",onInput:t[3]||(t[3]=t=>{e.addressQueryHandler(t,"GAS_ADDRESS"),e.changeAddress(t)}),value:e.address,name:"Введите данные "},null,8,["value"]),(0,a.wy)((0,a._)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addressList,(t=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(Y,{button:"",onClick:()=>{this.$refs.addressQuery3.$el.value=void 0,e.address=t.value},lines:e.addressList[e.addressList.length-1]?.value===t.value?"none":"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.value),1)])),_:2},1024)])),_:2},1032,["onClick","lines"])])),[[n.F8,e.address]]))),128)),(0,a.wy)((0,a.Wm)(Y,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[D])),_:1})])),_:1},512),[[n.F8,0===e.addressList?.length]])],512),[[n.F8,e.address]])])),_:1})])),_:1},512),(0,a.wy)((0,a.Wm)(B,null,{default:(0,a.w5)((()=>[H])),_:1},512),[[n.F8,!0===e.validation.address&&0===e.address.length]]),(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a._)("p",C,[T,(0,a.Wm)(B,{class:"dot"},{default:(0,a.w5)((()=>[$])),_:1})])])),_:1}),(0,a.Wm)(z,{btnSrc:()=>e.router.push({name:"servicesTechAllianceSelect",params:{connection:!0}}),name:this.select?.GAS_SLUCHI?.VALUE?this.select?.GAS_SLUCHI?.VALUE:"Выберите вариант"},null,8,["btnSrc","name"]),(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a._)("p",N,[V,(0,a.Wm)(B,{class:"dot"},{default:(0,a.w5)((()=>[G])),_:1})])])),_:1}),(0,a.Wm)(z,{btnSrc:()=>e.router.push({name:"servicesTechAllianceSelect",params:{connection:!1}}),name:this.select?.GAS_HARAKTER?.VALUE?this.select?.GAS_HARAKTER?.VALUE:"Выберите вариант"},null,8,["btnSrc","name"]),(0,a.wy)((0,a.Wm)(B,null,{default:(0,a.w5)((()=>[q])),_:1},512),[[n.F8,!0===e.validation.select&&void 0===this.select?.GAS_HARAKTER?.VALUE&&void 0===this.select?.GAS_SLUCHI?.VALUE]]),(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a._)("p",b,[O,(0,a.Wm)(B,{class:"dot"},{default:(0,a.w5)((()=>[x])),_:1})])])),_:1}),(0,a.Wm)(Q,{value:e.deadlines,changeHandler:e.changeDeadlines,name:"Введите данные"},null,8,["value","changeHandler"]),(0,a.wy)((0,a.Wm)(B,null,{default:(0,a.w5)((()=>[F])),_:1},512),[[n.F8,!0===e.validation.deadlines&&0===e.deadlines.length]])])),_:1})])),_:1},8,["method"])])),_:1})}var M=s(2119),K=s(1839),B=s(1705),Q=s(387),Y=s(652),Z=s(4043),J=s(2833),j=s(6086),z=s(6306),X=s(3978),ee=s(381),te=s.n(ee),se=s(2982),ae=(0,a.aZ)({name:"servicesTechAlliance",components:{IonPage:B._i,Layout:K.Z,IonText:B.yW,Input:Q.Z,Back:Z.Z,ButtonSelect:J.Z,LayoutBox:Y.Z,IonItem:B.Ie,IonAccordion:B.We,IonAccordionGroup:B.eh},directives:{mask:se.mask},computed:{addressList(){return this.$pinia.state.value?.services?.addressResponse?.suggestions},formFields(){return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter((e=>"Услуга технологического присоединения для физических лиц"===e.SERVICE.VALUE))},select(){return this.$pinia.state.value?.services?.select}},methods:{...(0,j.nv)(z.X,["getForms","addressQuery"]),addressQueryHandler(e,t){"USER_BIRTHPLACE"===t&&this.addressQuery(e.target.value,t),"USER_ADDRESS"===t&&this.addressQuery(e.target.value,t),"USER_REGION"!==t&&"GAS_ADDRESS"!==t||this.addressQuery(e.target.value,t)},async storageHandler(){const e=new X.K;await e.create();let t={},s=this.$data.formUser.filter((e=>{if(!0===e.required)return e.error=!0,""===e.value})),a=this.$data.formPass.filter((e=>{if(!0===e.required)return e.error=!0,""===e.value})),l=0===this.$data.gasHome.length?this.$data.gasHome={error:!0}:null,n=()=>{0===this.$data.address.length?this.$data.validation.address=!0:this.$data.validation.address=!1,0===this.$data.deadlines.length?this.$data.validation.deadlines=!0:this.$data.validation.deadlines=!1,void 0===this.select?.GAS_SLUCHI?.VALUE&&void 0===this.select?.GAS_HARAKTER?.VALUE?this.$data.validation.select=!0:this.$data.validation.select=!1};if(n(),0===s.length&&0===a.length&&null===l&&Object.keys(this.$data.validation).every((e=>!this.$data.validation[e]))){for(let e=0;e<this.$data.formPass.length;e++){const s=this.$data.formPass[e];t[s.field]={NAME:s.name,VALUE:s.value}}let s={...this.formFields[0],...t};for(let e=0;e<this.$data.formUser.length;e++){const t=this.$data.formUser[e];s[t.field]={NAME:t.name,VALUE:t.value}}let a={...s,DATE_CREATE:{NAME:"Дата создания",VALUE:`${te()().format("DD.MM.YYYY hh:mm:ss")} `},TIMESTAMP_X:{NAME:"Время последнего изменения",VALUE:`${te()().format("DD.MM.YYYY hh:mm:ss")} `},USER:{NAME:"USER",VALUE:"",VALUE_ID:0},GAS_ADDRESS:{NAME:"Адрес объекта",VALUE:this.$data.address},GAS__SROK:{NAME:"Сроки проектирования, строительства и ввода в эксплуатацию объекта капитального строительства (в том числе по этапам и очередям)*",VALUE:this.$data.deadlines},GAS_SLUCHI:{NAME:"Подключение в случаях (выбрать один из следующих вариантов)",VALUE:this.select?.GAS_SLUCHI.VALUE},GAS_HARAKTER:{NAME:"Характер потребления газа",VALUE:this.select?.GAS_HARAKTER.VALUE},GAS_HOME:{NAME:"Наименование объекта капитального строительства",VALUE:this.$data.gasHome[0]}};console.log(a,"test"),this.$pinia.state.value?.services?.form&&(this.$pinia.state.value.services.form=a,await e.set("servicesTechAlliance",JSON.stringify(a))),this.$router.push("/tabs/servicesTechAllianceChoose")}},async uniqueCheck(e){console.log(e.currentTarget.value,"test"),this.$data.gasHome=[],!1===e.currentTarget.checked&&this.$data.gasHome.push(e.currentTarget.value)},changeDeadlines(e){this.$data.deadlines=e.target.value},changeAddress(e){this.$data.address=e.target.value}},mounted(){this.getForms();const e=async()=>{const e=new X.K;await e.create();const t=await e.get("servicesTechAlliance");console.log(JSON.parse(t),"servicesTechAlliance")};e(),console.log("test",this.formFields)},data(){return{validation:{address:!1,deadlines:!1,select:!1},formGasName:[{name:"Жилой дом"},{name:"Гараж"},{name:"Баня"},{name:"Другое"}],address:"",deadlines:"",gasHome:[],formPass:[{field:"USER_PASSPORT_SERIAL",name:"Серия паспорта",mask:"####",type:"text",required:!0,value:""},{field:"USER_PASSPORT_NUM",type:"text",name:"Номер паспорта",mask:"######",required:!0,value:""},{field:"USER_PASS_WHO",name:"Кем выдан",type:"text",required:!0,value:""},{field:"USER_PASS_DATE",mask:"##.##.####",name:"Дата выдачи паспорта",type:"text",required:!0,value:""},{field:"USER_REGION",name:"Место регистрации",type:"text",required:!0,value:""}],formUser:[{field:"USER_NAME",name:"Имя",type:"text",required:!0,value:"",mask:null},{field:"USER_LAST_NAME",mask:null,name:"Фамилия",type:"text",required:!0,value:""},{field:"USER_SECOND_NAME",mask:null,name:"Отчество",type:"text",required:!0,value:""},{field:"USER_BIRTHDATE",mask:"##.##.####",name:"Дата рождения",type:"text",required:!0,value:""},{field:"USER_BIRTHPLACE",mask:null,name:"Место рождения",type:"text",required:!0,value:""},{field:"USER_ADDRESS",mask:null,name:"Место жительства",type:"text",required:!0,value:""},{field:"USER_PHONE",mask:"+7 (###) ###-##-##",name:"Контактный телефон",type:"text",required:!0,value:""},{field:"USER_PHONE_2",mask:null,name:"Дополнительный контактный номер",type:"text",required:!1,value:""},{field:"USER_EMAIL",mask:null,name:"E-mail",type:"email",required:!0,value:""}]}},setup(){const e=(0,M.tv)();return{router:e}}}),le=s(3744);const ne=(0,le.Z)(ae,[["render",P],["__scopeId","data-v-0fd4ac54"]]);var re=ne}}]);
//# sourceMappingURL=5098.55e9723f.js.map