"use strict";(self["webpackChunkstng"]=self["webpackChunkstng"]||[]).push([[9238],{7717:function(t,e,n){n.d(e,{Z:function(){return c}});var i=n(6252),a=n(3577);function s(t,e,n,s,o,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)({main:!0,padding:t.padding,bgBlue:t.bgBlue}),onClick:e[0]||(e[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,i.WI)(t.$slots,"content",{},void 0,!0)],2)}var o=(0,i.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function,bgBlue:Boolean}}),l=n(3744);const d=(0,l.Z)(o,[["render",s],["__scopeId","data-v-7ef2f989"]]);var c=d},9238:function(t,e,n){n.r(e),n.d(e,{default:function(){return F}});n(7658);var i=n(6252),a=n(3577),s=n(9963);const o=t=>((0,i.dD)("data-v-cbcd93b6"),t=t(),(0,i.Cn)(),t),l={class:"header-wrapper"},d={class:"btn-wrapper"},c={class:"container"},u={class:"title ion-text-start"},r={class:"title ion-text-start"},p={class:"ion-text-center"},m={class:"ion-text-start blue"},g={style:{display:"flex"}},h=o((()=>(0,i._)("p",{class:"title ion-text-start"},"Новые показания",-1))),w={class:"ion-text-start error"},I={class:"ion-text-center"},_=o((()=>(0,i._)("p",{class:"ion-text-center"}," В случае не правильного ввода показаний счетчика, следует обратиться в абонентский отдел УГРС по тел. 8(4112)-42-00-30, 46-00-41, 46-00-71 ",-1)));function f(t,e,o,f,y,W){const v=(0,i.up)("Back"),b=(0,i.up)("ion-img"),D=(0,i.up)("Button"),x=(0,i.up)("ion-text"),$=(0,i.up)("ion-item"),k=(0,i.up)("layout-box"),C=(0,i.up)("Input"),L=(0,i.up)("ion-datetime-button"),B=(0,i.up)("ion-datetime"),M=(0,i.up)("ion-modal"),A=(0,i.up)("ion-row"),z=(0,i.up)("ion-grid"),F=(0,i.up)("ion-col"),U=(0,i.up)("ion-spinner"),S=(0,i.up)("ion-content"),Z=(0,i.up)("ion-page");return(0,i.wg)(),(0,i.j4)(Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,{btnSrc:()=>t.router.push("/tabs/personalAccounts")},null,8,["btnSrc"]),(0,i.Wm)(S,{fullscreen:!0,class:"background"},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i.Wm)(b,{class:"pattern",src:n(2649)},null,8,["src"]),(0,i._)("div",d,[(0,i.Wm)(D,{class:"btn",grey:!0,name:"Оплата",onClick:e[0]||(e[0]=()=>t.router.push({name:"personalAccountPayment"}))}),(0,i.Wm)(D,{lightBlue:!0,class:"btn",name:"Показания"})])]),(0,i._)("div",c,[(0,i.Wm)(k,null,{content:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i._)("p",u," Лицевой счет №"+(0,a.zw)(t.lcList?.code),1)])),_:1}),(0,i.Wm)($,null,{default:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.lcList?.name),1)])),_:1})])),_:1}),(0,i.Wm)($,null,{default:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.lcList?.address),1)])),_:1})])),_:1})])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.indicationList,(n=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",{key:n},[(0,i.Wm)(k,null,{content:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i._)("p",r,"Номер счетчика "+(0,a.zw)(n?.name),1)])),_:2},1024),(0,i.Wm)(C,{onInput:t=>{n.value=t.target.value},name:"Введите показания счетчика (куб.\r\n                  метр.)",type:"number",textBlue:!0},null,8,["onInput"]),(0,i.wy)((0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("p",{class:"ion-text-start error"},(0,a.zw)(n.response),513),[[s.F8,!n?.response?.toString()?.includes("Вызов инспектора")]]),(0,i.wy)((0,i._)("p",p,[(0,i.Uk)(" Нарушен срок предоставления показаний, в разделе услуги Вам необходимо оформить заявку "),(0,i._)("span",{class:"blue",onClick:e[1]||(e[1]=()=>t.router.push("/tabs/servicesCallInspector")),style:{"text-decoration":"underline"}},"Вызов инспектора")],512),[[s.F8,n?.response?.toString()?.includes("Вызов инспектора")]])])),_:2},1536),[[s.F8,n.errorText]]),(0,i.wy)((0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i._)("p",m,(0,a.zw)(n.response),1)])),_:2},1536),[[s.F8,!n.errorText]]),(0,i.Wm)(D,{loading:t.loading,name:"Подтвердить",onClick:()=>{t.loading=!0,t.setIndices(n.id,n.value).then((()=>{t.loading=!1,t.getIndices(n.id).then((()=>{let e=this.$data.indicationList.find((t=>t.id===n?.id));t.getAccount(),e&&Object.assign(e,this.indicesList[0])})),n.response=this.$pinia.state.value?.personalAccount?.setIndicesResponse?.message,n.errorText=this.$pinia.state.value?.personalAccount?.setIndicesResponse?.error,n.error=""}))}},null,8,["loading","onClick"]),(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(A,{class:"ion-row-last"},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{style:{margin:"0 10px 0 0"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" Выберите период: ")])),_:1}),(0,i._)("div",g,[(0,i.Wm)(L,{mode:"ios",color:"date",datetime:n?.id},null,8,["datetime"]),(0,i.Wm)(x,{style:{margin:"0 5px"}},{default:(0,i.w5)((()=>[(0,i.Uk)("-")])),_:1}),(0,i.Wm)(L,{mode:"ios",color:"date",datetime:`${n?.id}_2`},null,8,["datetime"])]),(0,i.Wm)(M,{mode:"ios","keep-contents-mounted":!0},{default:(0,i.w5)((()=>[(0,i.Wm)(B,{doneText:"Готово",cancelText:"Отменить","show-default-buttons":!0,onIonChange:e=>t.onBeginDateChange(e,n?.id),color:"date",presentation:"date",mode:"ios",id:n?.id},null,8,["onIonChange","id"])])),_:2},1024),(0,i.Wm)(M,{mode:"ios","keep-contents-mounted":!0},{default:(0,i.w5)((()=>[(0,i.Wm)(B,{doneText:"Готово",cancelText:"Отменить","show-default-buttons":!0,onIonChange:e=>t.onEndDateChange(e,n?.id),color:"date",presentation:"date",mode:"ios",id:`${n?.id}_2`},null,8,["onIonChange","id"])])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,null,{default:(0,i.w5)((()=>[(0,i.Wm)(F,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Дата")])),_:1}),(0,i.Wm)(F,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Показания")])),_:1})])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n?.indications,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i.Wm)(A,{class:(0,a.C_)({"ion-row-last":n?.indications[n?.indications?.length-1]?.date===t?.date})},{default:(0,i.w5)((()=>[(0,i.Wm)(F,{class:"text-end"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t?.date.substring(0,10)),1)])),_:2},1024),(0,i.Wm)(F,{class:"text-end"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t?.indication),1)])),_:2},1024)])),_:2},1032,["class"])])))),128))])),_:2},1024)])),[[s.F8,!t.loadingGetIndices&&0!==t.lcList.counters?.length]]))),128)),(0,i.wy)((0,i._)("div",null,[(0,i.Wm)(k,null,{content:(0,i.w5)((()=>[(0,i.Wm)($,{lines:"none"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{name:"bubbles"})])),_:1})])),_:1})],512),[[s.F8,t.loadingGetIndices]]),(0,i.wy)((0,i._)("div",null,[(0,i.Wm)(k,null,{content:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[h])),_:1}),(0,i.Wm)(C,{textBlue:!0,type:"text",value:t.counterId,changeHandler:t.changeCounterId,name:"Введите номер счетчика"},null,8,["value","changeHandler"]),(0,i.Wm)(C,{textBlue:!0,type:"text",value:t.indication,changeHandler:t.changeIndication,name:"Введите показания счетчика"},null,8,["value","changeHandler"]),(0,i.wy)((0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i._)("p",w,(0,a.zw)(t.error),1)])),_:1},512),[[s.F8,t.error]]),(0,i.wy)((0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i._)("p",I,(0,a.zw)(t.response),1)])),_:1},512),[[s.F8,t.response]]),(0,i.Wm)(D,{loading:t.loading,name:"Подтвердить",onClick:e[2]||(e[2]=()=>{0!==t.counterId?.length?t.setIndicesHandler(t.counterId,t.indication,t.loading,t.response):t.error="Заполните все поля"})},null,8,["loading"])])),_:1})],512),[[s.F8,0===t.lcList?.counters?.length]]),(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[_])),_:1})])])),_:1})])),_:1})}var y=n(7821),W=n(8903),v=n(6527),b=n(7717),D=n(23),x=n(2201),$=n(6086),k=n(6651),C=n(9196),L=n(381),B=n.n(L),M=(0,i.aZ)({setup(){const t=(0,x.tv)(),e=(0,x.yj)();return{router:t,route:e,chevronForwardOutline:W.Dji,calendarNumberOutline:W.Yap,moment:B()}},data(){return{indication:"",counterId:"",error:"",loading:!1,loadingGetIndices:!1,response:"",beginDate:"",endDate:"",indicationList:[],value:""}},methods:{...(0,$.nv)(k.U,["getIndices","setIndices","getAccount"]),updateIndices(){},async setIndicesHandler(t,e){e?.length>=0?(this.$data.loading=!0,this.setIndices(t,e).then((()=>{this.$data.response=this.$pinia.state.value?.personalAccount?.setIndicesResponse?.message,this.$data.loading=!1}))):(this.$data.response="Заполните поле",this.$data.error="Заполните поле")},changeIndication(t){this.$data.indication=t.target.value},changeCounterId(t){this.$data.counterId=t.target.value},capitalizeFirstLetter(t){return t?.charAt(0)?.toUpperCase()+t?.slice(1)},onBeginDateChange(t,e){this.getIndices(e,B()(t.detail.value).format("yyyyMMDD"),this.$data.endDate?this.$data.endDate:B()().format("yyyyMMDD")).then((()=>{let t=this.$data.indicationList.find((t=>t.id===e));this.indicesList[0]?Object.assign(t,this.indicesList[0]):t.indications=[]})),this.$data.beginDate=B()(t.detail.value).format("yyyyMMDD")},onEndDateChange(t,e){this.getIndices(e,this.$data.beginDate?this.$data.beginDate:B()().format("yyyyMMDD"),B()(t.detail.value).format("yyyyMMDD")).then((()=>{let t=this.$data.indicationList.find((t=>t.id===e));this.indicesList[0]?Object.assign(t,this.indicesList[0]):t[0].indications=[]})),this.$data.endDate=B()(t.detail.value).format("yyyyMMDD")}},computed:{indicesList(){return this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data?this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data:[]},lcList(){return this.$pinia.state.value?.personalAccount?.personalItemData},setIndicesMessage(){return this.$pinia.state.value?.personalAccount?.setIndicesResponse?.data?.message}},ionViewDidLeave(){this.$data.indicationList=[]},ionViewDidEnter(){if(this.lcList?.counters?.length>0&&void 0!==this.lcList?.counters)for(let t=0;t<this.lcList?.counters?.length;t++){const e=this.lcList?.counters[t];this.$data.loadingGetIndices=!0,this.getIndices(e.counterId).then((()=>{new Promise((t=>{this.indicesList[0]?.id&&t(this.$data.indicationList.push({...this.indicesList[0]}))}));this.$data.loadingGetIndices=!1}))}else this.$router.push("/tabs/personalAccounts")},names:"personalAccauntIndication",components:{Back:D.Z,LayoutBox:b.Z,IonContent:y.W2,IonPage:y._i,Button:v.Z,IonText:y.yW,IonItem:y.Ie,Input:C.Z,IonRow:y.Nd,IonCol:y.wI,IonModal:y.ki,IonImg:y.Xz,IonGrid:y.jY,IonDatetime:y.x4,IonSpinner:y.PQ,IonDatetimeButton:y.Mj}}),A=n(3744);const z=(0,A.Z)(M,[["render",f],["__scopeId","data-v-cbcd93b6"]]);var F=z}}]);
//# sourceMappingURL=9238.a58d52fd.js.map