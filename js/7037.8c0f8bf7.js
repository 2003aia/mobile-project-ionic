"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[7037],{1496:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(6252),l=n(3577);function r(t,e,n,r,u,s){return(0,a.wg)(),(0,a.iD)("div",{class:(0,l.C_)(["main",{padding:t.padding}]),onClick:e[0]||(e[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,a.WI)(t.$slots,"content",{},void 0,!0)],2)}var u=(0,a.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),s=n(3744);const o=(0,s.Z)(u,[["render",r],["__scopeId","data-v-568da44e"]]);var c=o},7037:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});n(7658);var a=n(6252),l=n(9963),r=n(3577);const u=t=>((0,a.dD)("data-v-2596e12a"),t=t(),(0,a.Cn)(),t),s={class:"header-wrapper"},o={class:"btn-wrapper"},c={class:"container"},i={class:"title ion-text-start"},d={class:"title ion-text-start"},p=u((()=>(0,a._)("p",{class:"title ion-text-start"},"Оплата",-1))),m={class:"ion-text-start error"};function g(t,e,u,g,v,w){const h=(0,a.up)("Back"),f=(0,a.up)("ion-img"),_=(0,a.up)("Button"),y=(0,a.up)("ion-text"),b=(0,a.up)("ion-item"),W=(0,a.up)("layout-box"),I=(0,a.up)("Input"),k=(0,a.up)("ion-content"),B=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(B,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{btnSrc:()=>t.router.push("/tabs/personalAccounts")},null,8,["btnSrc"]),(0,a.Wm)(k,{fullscreen:!0,class:"background"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a.Wm)(f,{class:"pattern",src:n(2649)},null,8,["src"]),(0,a._)("div",o,[(0,a.Wm)(_,{class:"btn",lightBlue:!0,name:"Оплата"}),(0,a.wy)((0,a.Wm)(_,{class:"btn",grey:!0,name:"Показания",onClick:e[0]||(e[0]=()=>t.router.push({name:"personalAccountIndication"}))},null,512),[[l.F8,t.lcList?.counters.length>0]])])]),(0,a._)("div",c,[(0,a.Wm)(W,null,{content:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a._)("p",i," Лицевой счет №"+(0,r.zw)(t.lcList?.code),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(t.lcList?.name),1)])),_:1})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(t.lcList?.address),1)])),_:1})])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.lcList.debts,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a.Wm)(W,null,{content:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a._)("p",d,(0,r.zw)(e.label),1)])),_:2},1024),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Задолженность:")])),_:1}),(0,a.Wm)(y,{slot:"end",class:"text-end"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(t.maskMoney(e.sum)),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(I,{value:e?.value,type:"number",onInput:t=>e.value=t.target.value,name:"Введите сумму",textBlue:!0,min:0},null,8,["value","onInput"])])),_:2},1024)])))),128)),(0,a.wy)((0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a._)("p",m,(0,r.zw)(t.error),1)])),_:1},512),[[l.F8,t.error]]),(0,a.Wm)(_,{name:"Оплатить",onClick:t.paymentHandler},null,8,["onClick"])])])),_:1})])),_:1})}var v=n(2684),w=n(8056),h=n(1496),f=n(2198),_=n(2201),y=n(291),b=(0,a.aZ)({setup(){const t=(0,_.tv)(),e=(0,_.yj)();return{router:t,route:e}},props:{tabs:Boolean},data(){return{accruals:"",penalties:"",sumTO:"",error:"",advances:"",others:""}},computed:{lcList(){return this.$pinia.state.value?.personalAccount?.personalItemData}},ionViewDidLeave(){this.$data.error=""},methods:{changeAccruals(t){this.$data.accruals=t.target.value},changePenalties(t){this.$data.penalties=t.target.value},changeSumTO(t){this.$data.sumTO=t.target.value},changeAdvances(t){this.$data.advances=t.target.value},paymentHandler(){if(0!==this.lcList?.debts?.filter((t=>t.value)).length){let t=this.lcList.debts.map((({label:t,value:e})=>void 0===e?{label:t,sum:0}:{label:t,sum:+e}));this.$pinia.state.value.personalAccount.personalItemData={...this.$pinia.state.value?.personalAccount?.personalItemData,sberPay:{accruals:t}},this.$router.push({name:"personalAccountPay"})}else this.$data.error="Заполните поля"},maskMoney(t){const e=t?.toString().replace(".",""),n=parseFloat(t?.toFixed(2).toString().replace(".",""));return t?.toString().split(".")[1]?.length<2?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(n/100):t?.toString().includes(".")?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e/100):t?.toString().includes(".")?void 0:new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e)}},names:"personalAccauntPayment",components:{Input:f.Z,LayoutBox:h.Z,IonContent:v.W2,Back:y.Z,IonPage:v._i,Button:w.Z,IonText:v.yW,IonItem:v.Ie,IonImg:v.Xz}}),W=n(3744);const I=(0,W.Z)(b,[["render",g],["__scopeId","data-v-2596e12a"]]);var k=I}}]);
//# sourceMappingURL=7037.8c0f8bf7.js.map