"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[5095],{7846:function(t,e,n){n.d(e,{Z:function(){return i}});var u=n(6252),s=n(3577);function l(t,e,n,l,o,a){const c=(0,u.up)("ion-checkbox"),p=(0,u.up)("ion-text"),i=(0,u.up)("ion-item");return(0,u.wg)(),(0,u.j4)(i,{class:"check"},{default:(0,u.w5)((()=>[(0,u.Wm)(c,{slot:"start"}),(0,u.Wm)(p,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(t.name),1)])),_:1})])),_:1})}var o=n(8676),a=(0,u.aZ)({components:{IonText:o.yW,IonItem:o.Ie,IonCheckbox:o.nz},setup(){},methods:{onFocusText:function(){console.log("focus"),this.$refs.text.focus()}},data(){return{}},name:"inputCheckBoxView",props:{name:String}}),c=n(3744);const p=(0,c.Z)(a,[["render",l],["__scopeId","data-v-83ccefa4"]]);var i=p},5095:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var u=n(6252);const s=t=>((0,u.dD)("data-v-88c808f2"),t=t(),(0,u.Cn)(),t),l=s((()=>(0,u._)("p",{class:"text-20-600"}," Определение максимального часового расхода газа ",-1))),o={key:0},a=(0,u.Uk)("*"),c=(0,u.Uk)(" - обязательное поле для заполнения. "),p={class:"sub-title"},i=(0,u.Uk)(" Планируемая величина максимального часового расхода газа "),r=(0,u.Uk)("*"),m=s((()=>(0,u._)("p",{class:"sub-title"},"Калькулятор МЧРГ",-1))),d={key:1},f=s((()=>(0,u._)("p",{class:"sub-title"},"Площадь помещения (м2)",-1))),_=s((()=>(0,u._)("p",{class:"input-text"}," Уточнять у заявителя, площадь всех помещений суммарно ",-1))),k=s((()=>(0,u._)("p",{class:"sub-title"},"Высота наружная (м)",-1))),w=s((()=>(0,u._)("p",{class:"input-text"}," У заявителя высота здания снаружи (без кровли) ",-1))),W=s((()=>(0,u._)("p",{class:"sub-title"},"Наличие газовой плиты",-1))),h=s((()=>(0,u._)("p",{class:"sub-title footer"}," У вас примерный МЧРГ: 3.32 ",-1)));function b(t,e,n,s,b,x){const v=(0,u.up)("Back"),I=(0,u.up)("ion-text"),C=(0,u.up)("Input"),g=(0,u.up)("InputCheckbox"),Z=(0,u.up)("Layout"),B=(0,u.up)("ion-page");return(0,u.wg)(),(0,u.j4)(B,null,{default:(0,u.w5)((()=>[(0,u.Wm)(v,{btnSrc:()=>{!0===t.sent?t.sent=!1:t.router.push("/tabs/servicesGasContractCheckbox")}},null,8,["btnSrc"]),(0,u.Wm)(Z,{height:"false",method:()=>{0==t.open&&t.router.push("/tabs/servicesRequestFiles")},method2:()=>{t.open=!1},filledBtn:!0===t.open?"Рассчитать ":"Далее",outlineBtn:!0===t.open?"Установить значение":".",title:"Заявка на социальную газификацию"},{"header-content":(0,u.w5)((()=>[(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[l])),_:1})])),"main-content":(0,u.w5)((()=>[!1===t.open?((0,u.wg)(),(0,u.iD)("div",o,[(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[(0,u._)("p",null,[(0,u.Wm)(I,{class:"dot"},{default:(0,u.w5)((()=>[a])),_:1}),c]),(0,u._)("p",p,[i,(0,u.Wm)(I,{class:"dot"},{default:(0,u.w5)((()=>[r])),_:1})])])),_:1}),(0,u.Wm)(C,{name:"0 "}),(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[m])),_:1}),(0,u.Wm)(C,{name:"Открыть  ",onClick:e[0]||(e[0]=()=>{!1===t.open?t.open=!0:t.open=!1})})])):(0,u.kq)("",!0),!0===t.open?((0,u.wg)(),(0,u.iD)("div",d,[(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[f])),_:1}),(0,u.Wm)(C,{name:"150"}),(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[_])),_:1}),(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[k])),_:1}),(0,u.Wm)(C,{name:"2"}),(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[w])),_:1}),(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[W])),_:1}),(0,u.Wm)(g,{class:"input-checkbox",name:"С плитой в кол-ве 1шт"}),(0,u.Wm)(g,{name:"Без плиты"}),(0,u.Wm)(I,null,{default:(0,u.w5)((()=>[h])),_:1})])):(0,u.kq)("",!0)])),_:1},8,["method","method2","filledBtn","outlineBtn"])])),_:1})}var x=n(2119),v=n(3875),I=n(8676),C=n(4043),g=n(8903),Z=n(4611),B=n(7846),y=(0,u.aZ)({name:"servicesRequestCalc",components:{InputCheckbox:B.Z,Input:Z.Z,IonPage:I._i,Layout:v.Z,IonText:I.yW,Back:C.Z},data(){return{open:!1}},setup(){const t=(0,x.tv)();return{router:t,documentTextOutline:g.L82}}}),U=n(3744);const q=(0,U.Z)(y,[["render",b],["__scopeId","data-v-88c808f2"]]);var T=q}}]);
//# sourceMappingURL=5095.d5eb3e21.js.map