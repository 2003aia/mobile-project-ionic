"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[5244],{6306:function(e,t,n){n.d(t,{X:function(){return l}});var s=n(6086),r=n(9669),a=n.n(r),o=n(3978);const l=(0,s.Q_)({id:"services",state:()=>({formResponse:null,formResponseError:null,callInspectorResponse:null,callInspectorError:null,servicesResponse:null,servicesResponseError:null,form:[],select:{GAS_SLUCHI:null,GAS_HARAKTER:null}}),getters:{setForm:e=>t=>[...e.form,...t]},actions:{async getForms(){console.log("getting forms");try{await a().get("https://aostng.ru/api/?action=getAll&format=json&page=3&limit=20").then((e=>this.formResponse=e.data))}catch(e){this.formResponseError=e}},async services(e){console.log("services");const t=new o.K;await t.create();const n=await t.get("token"),s=JSON.parse(n).token;try{await a().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Services",{token:s,data:{status:[{CODE:"120",VALUE:"Принят"},{CODE:"23",VALUE:"В обработке"},{CODE:"26",VALUE:"Выполнено"},{CODE:"24",VALUE:"Требуется документ"},{CODE:"25",VALUE:"Требует оплаты"},{CODE:"22",VALUE:"Отклонен"}],forms:e}}).then((e=>this.servicesResponse=e.data))}catch(r){this.servicesResponseError=r}},async callInspector(e,t){try{const n=new o.K;await n.create();const s=await n.get("token"),r=JSON.parse(s).token;await a().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/CallInspector",{token:r,LC:e,phone:t}).then((e=>this.callInspectorResponse=e.data))}catch(n){this.callInspectorError=n}}}})},652:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(6252);function r(e,t,n,r,a,o){return(0,s.wg)(),(0,s.iD)("div",{class:"main",onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[(0,s.WI)(e.$slots,"content",{},void 0,!0)])}var a=(0,s.aZ)({setup(){},name:"layoutBox",components:{},props:{btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),o=n(3744);const l=(0,o.Z)(a,[["render",r],["__scopeId","data-v-3d91200c"]]);var u=l},5244:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var s=n(6252),r=n(3577);const a=e=>((0,s.dD)("data-v-72d82588"),e=e(),(0,s.Cn)(),e),o=a((()=>(0,s._)("p",{class:"text-20-600"},"Общие сведения заявления",-1))),l=a((()=>(0,s._)("p",{class:"title ion-text-start"},"Данные заявителя",-1))),u=(0,s.Uk)("*"),i=(0,s.Uk)(" - обязательное поле для заполнения. "),c=a((()=>(0,s._)("p",{class:"title ion-text-start"},"Данные паспорта",-1))),m=(0,s.Uk)("*"),d=(0,s.Uk)(" - обязательное поле для заполнения. "),p=a((()=>(0,s._)("p",{class:"title ion-text-start"},"Данные об объекте газификации",-1))),f=(0,s.Uk)("*"),_=(0,s.Uk)(" - обязательное поле для заполнения. "),w={class:"sub-title"},h=(0,s.Uk)(" Адрес обьекта "),W=(0,s.Uk)("*"),g={class:"sub-title"},v=(0,s.Uk)(" Кадастровый номер земельного участка "),k=(0,s.Uk)("*");function E(e,t,n,a,E,I){const U=(0,s.up)("Back"),C=(0,s.up)("ion-text"),R=(0,s.up)("ion-list"),L=(0,s.up)("Input"),q=(0,s.up)("LayoutBox"),S=(0,s.up)("Layout"),A=(0,s.up)("ion-page");return(0,s.wg)(),(0,s.j4)(A,null,{default:(0,s.w5)((()=>[(0,s.Wm)(U),(0,s.Wm)(S,{height:"false",btnSrc:"/tabs/servicesRequestCalc",filledBtn:"Далее",outlineBtn:".",title:"Заявка на социальную газификацию"},{"header-content":(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[o])),_:1})])),"main-content":(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[l,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.formsList,(e=>((0,s.wg)(),(0,s.j4)(R,{key:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e),1)])),_:2},1024)))),128)),(0,s._)("p",null,[(0,s.Wm)(C,{class:"dot"},{default:(0,s.w5)((()=>[u])),_:1}),i])])),_:1}),(0,s.Wm)(L,{name:"Укажите имя ",required:!0}),(0,s.Wm)(L,{name:"Укажите фамилию ",required:!0}),(0,s.Wm)(L,{name:"Укажите отчество ",required:!0}),(0,s.Wm)(L,{name:"Дата рождения ",required:!0}),(0,s.Wm)(L,{name:"Место рождения  ",required:!0}),(0,s.Wm)(L,{name:"Место жительства ",required:!0}),(0,s.Wm)(L,{name:"Контактный телефон ",required:!0}),(0,s.Wm)(L,{name:"Доп. контактный телефон  ",required:!0}),(0,s.Wm)(L,{name:"Электронная почта  ",required:!0})])),content:(0,s.w5)((()=>[(0,s.Wm)(q,null,{content:(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[c,(0,s._)("p",null,[(0,s.Wm)(C,{class:"dot"},{default:(0,s.w5)((()=>[m])),_:1}),d])])),_:1}),(0,s.Wm)(L,{name:"Серия ",required:!0}),(0,s.Wm)(L,{name:"Номер ",required:!0}),(0,s.Wm)(L,{name:"Кем выдан ",required:!0}),(0,s.Wm)(L,{name:"Дата выдачи паспорта ",required:!0}),(0,s.Wm)(L,{name:"Место регистрации ",required:!0})])),_:1}),(0,s.Wm)(q,null,{content:(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[p,(0,s._)("p",null,[(0,s.Wm)(C,{class:"dot"},{default:(0,s.w5)((()=>[f])),_:1}),_]),(0,s._)("p",w,[h,(0,s.Wm)(C,{class:"dot"},{default:(0,s.w5)((()=>[W])),_:1})])])),_:1}),(0,s.Wm)(L,{name:"Введите данные  "}),(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s._)("p",g,[v,(0,s.Wm)(C,{class:"dot"},{default:(0,s.w5)((()=>[k])),_:1})])])),_:1}),(0,s.Wm)(L,{name:"Введите данные "})])),_:1})])),_:1})])),_:1})}var I=n(2119),U=n(1839),C=n(5859),R=n(4043),L=n(8903),q=n(4503),S=n(652),A=n(6086),y=n(6306),V=(0,s.aZ)({name:"servicesRequestGas",components:{LayoutBox:S.Z,Input:q.Z,IonPage:C._i,Layout:U.Z,IonText:C.yW,Back:R.Z},data(){return{forms:[]}},methods:{...(0,A.nv)(y.X,["getForms"])},computed:{formsList(){return this.$pinia.state.value?.services?.formResponse?.result?.forms.filter((e=>"52"===e.SERVICE.VALUE_ID))}},mounted(){this.getForms(),console.log(this.$pinia.state.value?.services?.formResponse?.result?.forms.filter((e=>"52"===e.SERVICE.VALUE_ID)),"testtt222222")},setup(){const e=(0,I.tv)();return{router:e,documentTextOutline:L.L82}}}),D=n(3744);const x=(0,D.Z)(V,[["render",E],["__scopeId","data-v-72d82588"]]);var O=x}}]);
//# sourceMappingURL=5244.51b4c85e.js.map