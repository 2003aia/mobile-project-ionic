"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[1417],{6306:function(e,s,t){t.d(s,{X:function(){return l}});t(7658);var n=t(6086),a=t(9669),i=t.n(a),r=t(3978);const o="https://api.aostng.ru/api/v2",l=(0,n.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:{},select:{GAS_SLUCHI:null,GAS_HARAKTER:null,GAS_VID_USLUG:null},servicesOneNext:!1,techAllianceConnection:!1,addressResponse:null,addressError:null,filesResponse:[],filesResponseError:null,listServicesResponse:null,listServicesResponseError:null,camerasResponse:null,camerasError:null}),getters:{setForm:e=>s=>[...e.form,...s]},actions:{async getCameras(){console.log("getting cameras");try{await i().get(`${o}/camera/get`).then((e=>this.camerasResponse=e.data))}catch(e){this.camerasError=e}},async getListServices(){console.log("getting listServices");const e=new r.K;await e.create();const s=await e.get("token"),t=JSON.parse(s).token;try{await i().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/ListServices",{token:t}).then((e=>this.listServicesResponse=e.data))}catch(n){this.listServicesResponseError=n}},async getForms(){console.log("getting forms");try{await i().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async uploadFiles(e){console.log("uploading files");const s=new r.K;await s.create();const t=await s.get("token"),n=JSON.parse(t).token;try{let s=e.filter((e=>{if(!1!==e.file)return e}));for(let e=0;e<s.length;e++){const t=s[e];await i().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/get_file",{token:n,title:t.title,file:t.file}).then((e=>this.filesResponse.push({...e.data,field:t.field,text:t.text})))}}catch(a){this.filesResponseError=a}},async services(e){console.log("services");const s=new r.K;await s.create();const t=await s.get("token"),n=JSON.parse(t).token;try{await i().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:n,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(a){this.servicesResponseError=a}},async callInspector(e,s){try{const t=new r.K;await t.create();const n=await t.get("token"),a=JSON.parse(n).token;await i().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:a,LC:e,phone:s}).then((e=>this.callInspectorResponse=e.data))}catch(t){this.callInspectorError=t}},async addressQuery(e,s){try{await i()({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token f135ebe81ca212b9d61fedadba1e0111159f0d6b"},url:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",data:"USER_REGION"===s||"GAS_ADDRESS"===s?JSON.stringify({query:e,locations_boost:[{kladr_id:"4100000100000"}],count:5}):JSON.stringify({query:e,count:5,restrict_value:!1,locations:[{city:"Якутск"},{country:"Узбекистан"},{country:"Таджикистан"},{country:"Киргизия"},{country:"Армения"}]})}).then((e=>this.addressResponse=e.data))}catch(t){this.addressError=t}}}})},1417:function(e,s,t){t.r(s),t.d(s,{default:function(){return O}});t(7658);var n=t(6252),a=t(3577),i=t(9963);const r=e=>((0,n.dD)("data-v-6a4d510c"),e=e(),(0,n.Cn)(),e),o={key:0},l=r((()=>(0,n._)("p",{class:"title ion-text-start"},"Спасибо!",-1))),c=r((()=>(0,n._)("p",null," Ваша заявка принята в обработку. После процедуры идентификации на предмет соответствия достоверности введенных данных, с Вами свяжется сотрудник УГРС. По вопросам регистрации заявки обращаться по номеру 319-555 в будни с 08.00 до 17.00 ",-1))),u={key:1},d=r((()=>(0,n._)("p",{class:"title ion-text-start"},"Согласие на условие договора",-1))),p=r((()=>(0,n._)("p",{class:"error"},"Что-то пошло не так",-1))),h={key:2};function v(e,s,t,r,v,g){const f=(0,n.up)("Back"),m=(0,n.up)("ion-text"),w=(0,n.up)("ion-icon"),_=(0,n.up)("ion-item"),k=(0,n.up)("ion-checkbox"),y=(0,n.up)("Layout"),E=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(E,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{btnSrc:()=>{!0===this.$pinia.state.value?.services.servicesOneNext&&!1===e.finished?(e.router.push("/tabs/servicesOne"),this.$pinia.state.value.services.servicesOneNext=!1):!0===e.finished?e.finished=!1:(e.router.push("/tabs/servicesOne"),this.$pinia.state.value.services.servicesOneNext=!1)}},null,8,["btnSrc"]),(0,n.Wm)(y,{loading:e.loading,method:()=>{1==this.$pinia.state.value?.services.servicesOneNext&&0==e.finished?e.storageHandler():this.$router.push("/tabs/services")},height:"false",filledBtn:!0===this.$pinia.state.value?.services?.servicesOneNext&&0==e.finished?"Далее":e.finished?"Готово":".",title:!0===this.$pinia.state.value?.services?.servicesOneNext?"Разовая услуга":"Вид работ",outlineBtn:"."},{"main-content":(0,n.w5)((()=>[e.finished?((0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[l,(0,n._)("p",null,(0,a.zw)(this.$pinia.state.value?.services?.servicesResponse?.message),1),c])),_:1})])):(0,n.kq)("",!0),this.$pinia.state.value?.services?.servicesOneNext&&0==e.finished?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[d])),_:1}),(0,n._)("div",null,[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{slot:"start",size:"large",icon:e.documentTextOutline},null,8,["icon"]),(0,n.Wm)(m,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)("Скачать документ ")])),_:1}),(0,n.Wm)(w,{slot:"end",size:"small",class:"icon-arrow",icon:e.arrowDownOutline},null,8,["icon"])])),_:1}),(0,n.Wm)(_,{class:"check"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{slot:"start"}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Согласен (-на) на обработку персональных данных")])),_:1})])),_:1})]),(0,n.wy)((0,n.Wm)(m,null,{default:(0,n.w5)((()=>[p])),_:1},512),[[i.F8,!0===this.$pinia.state.value?.services?.servicesResponse?.error]])])):(0,n.kq)("",!0),!0!==this.$pinia.state.value?.services.servicesOneNext?((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(m,{class:"title"},{default:(0,n.w5)((()=>[(0,n.Uk)("Выберите варианты")])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.variants,(s=>((0,n.wg)(),(0,n.iD)("div",{key:s.id},[(0,n.Wm)(_,{onClick:t=>e.selectHandler(s.name)},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(s.name),1)])),_:2},1024)])),_:2},1032,["onClick"])])))),128))])):(0,n.kq)("",!0)])),_:1},8,["loading","method","filledBtn","title"])])),_:1})}var g=t(2201),f=t(594),m=t(8170),w=t(4043),_=t(8903),k=t(6086),y=t(6306),E=(0,n.aZ)({name:"chooseWorkPage",components:{IonPage:m._i,Layout:f.Z,IonItem:m.Ie,Back:w.Z,IonText:m.yW,IonCheckbox:m.nz,IonIcon:m.gu},data(){return{loading:!1,selected:!1,finished:!1,variants:[{id:1,name:"Замена газовой плиты"},{id:2,name:"Замена газовой подводки (шланга)"},{id:3,name:"Замена клапана термозапорного"},{id:4,name:"Замена крана"},{id:5,name:"Подключение газовой плиты с устранением заглушки"},{id:6,name:"Отключение газовой плиты с устранением заглушки (временное отключение)"},{id:7,name:"Установка счетчика с поворотом"},{id:8,name:"Монтаж бытового счетчика газа"},{id:9,name:"Замена бытового счетчика газа"}]}},methods:{...(0,k.nv)(y.X,["services"]),selectHandler(e){this.$pinia.state.value.services.select.GAS_VID_USLUG={NAME:"Вид работ",VALUE:e},this.$router.go(-1)},storageHandler:function(){console.log("test"),this.$data.loading=!0,this.services(this.$pinia.state.value?.services?.form).then((()=>{this.$data.finished=!0,this.$data.loading=!1,!0===this.$pinia.state.value?.services?.servicesResponse?.error&&(this.$data.finished=!1),console.log("test",this.$pinia.state.value?.services?.servicesResponse)}))}},setup(){const e=(0,g.yj)();console.log(e.params,"test");const s=(0,g.tv)();return{router:s,route:e,documentTextOutline:_.L82,arrowDownOutline:_.o9Y}}}),S=t(3744);const R=(0,S.Z)(E,[["render",v],["__scopeId","data-v-6a4d510c"]]);var O=R}}]);
//# sourceMappingURL=1417.fe4945f9.js.map