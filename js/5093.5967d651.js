"use strict";(self["webpackChunkstng"]=self["webpackChunkstng"]||[]).push([[5093],{6651:function(t,e,n){n.d(e,{U:function(){return l}});n(7658);var a=n(6086),s=n(9669),i=n.n(s),o=n(3978),r=n(3304);let c="https://fhd.aostng.ru/vesta/hs/API_STNG/V2/";const l=(0,a.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,sberPayResponse:null,sberPayError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null,personalItemData:{}}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){try{const t=new o.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token;await i().post(`${c}GetSettlements`,{token:n}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getSettlementsResponse=t.data}))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new o.K;await e.create();const n=await e.get("token"),a=JSON.parse(n).token;await i().post(`${c}GetStreets`,{token:a,s_id:t}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getStreetsResponse=t.data}))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new o.K;await e.create();const n=await e.get("token"),a=JSON.parse(n).token;await i().post(`${c}GetHouses`,{token:a,ids:t}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getHousesResponse=t.data}))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new o.K;await t.create();const e=await t.get("token"),n=await t.get("lics"),a=JSON.parse(e).token,s=JSON.parse(n);await i().post(`${c}GetAccount`,{token:a,LC:s}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getAccountResponse=t.data}))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await i().post(`${c}AddAccount`,{token:t,LC:e}).then((async t=>{this.addAccountResponse=t.data;const n=new o.K;await n.create();const a=await n.get("lics"),s=JSON.parse(a);let i=[].concat(s,e);await n.set("lics",JSON.stringify(i))}))}catch(n){this.addAccountError=n}},async delAccount(t){try{const e=new o.K;await e.create();const n=await e.get("token"),a=JSON.parse(n).token;await i().post(`${c}DelAccount`,{token:a,LC:t}).then((async n=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t));const a=this.getAccountResponse?.data.filter((e=>e?.code!==t)),s={lics:a?.map((t=>t?.code))};await e.set("lics",JSON.stringify(s)),this.delAccountResponse=n.data}))}catch(e){this.delAccountError=e}},async getPayments(t,e,n){try{const a=new o.K;await a.create();const s=await a.get("token"),l=JSON.parse(s).token;await i().post(`${c}GetPayments`,{token:l,LC:t,beginPeriod:e,endPeriod:n}).then((async t=>{t.data.error&&r.Z.push("/authPage"),this.paymentHistoryResponse=t.data}))}catch(a){this.paymentHistoryError=a}},async getIndices(t,e,n){try{const a=new o.K;await a.create();const s=await a.get("token"),l=JSON.parse(s).token;await i().post(`${c}GetIndices`,{token:l,counterId:t,beginPeriod:e,endPeriod:n}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getIndicesResponse=t.data}))}catch(a){this.getIndicesError=a}},async setIndices(t,e){try{const n=new o.K;await n.create();const a=await n.get("token"),s=JSON.parse(a).token;await i().post(`${c}SetIndices`,{token:s,counterId:t,indice:e}).then((e=>{this.setIndicesResponse=e.data,!1===e.data.error&&(this.getIndices(t),this.setIndicesResponse=e.data)}))}catch(n){this.setIndicesError=n}},async sberPay(t,e,n,a,s,r){try{const l=new o.K;await l.create();const d=await l.get("token"),u=JSON.parse(d);console.log(e,a),await i().post(`${c}SBOL`,{token:u.token,sum:s,LC:t,email:a?n:"",phone:!1===a?e:"",ios:r}).then((t=>{this.sberPayResponse=t.data}))}catch(l){this.sberPayError=l}}}})},1496:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(6252),s=n(3577);function i(t,e,n,i,o,r){return(0,a.wg)(),(0,a.iD)("div",{class:(0,s.C_)(["main",{padding:t.padding}]),onClick:e[0]||(e[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,a.WI)(t.$slots,"content",{},void 0,!0)],2)}var o=(0,a.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),r=n(3744);const c=(0,r.Z)(o,[["render",i],["__scopeId","data-v-568da44e"]]);var l=c},5093:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});n(7658);var a=n(6252),s=n(3577),i=n(9963);const o=t=>((0,a.dD)("data-v-34e6f93f"),t=t(),(0,a.Cn)(),t),r={class:"header-wrapper"},c={class:"btn-wrapper"},l={class:"container"},d={class:"title ion-text-start"},u={class:"title ion-text-start"},p={class:"ion-text-start error"},g={class:"ion-text-center"},h={style:{display:"flex"}},m=o((()=>(0,a._)("p",{class:"title ion-text-start"},"Новые показания",-1))),w={class:"ion-text-start error"},y={class:"ion-text-center"},I=o((()=>(0,a._)("p",{class:"ion-text-center"}," В случае не правильного ввода показаний счетчика, следует обратиться в абоненский отдел УГРС по тел. 8(4112)-42-00-30, 46-00-41, 46-00-71 ",-1)));function f(t,e,o,f,_,k){const v=(0,a.up)("Back"),W=(0,a.up)("ion-img"),D=(0,a.up)("Button"),$=(0,a.up)("ion-text"),S=(0,a.up)("ion-item"),b=(0,a.up)("layout-box"),A=(0,a.up)("Input"),L=(0,a.up)("ion-datetime-button"),C=(0,a.up)("ion-datetime"),R=(0,a.up)("ion-modal"),x=(0,a.up)("ion-row"),E=(0,a.up)("ion-grid"),P=(0,a.up)("ion-col"),M=(0,a.up)("ion-spinner"),H=(0,a.up)("ion-content"),O=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,{btnSrc:()=>t.router.push("/tabs/personalAccounts")},null,8,["btnSrc"]),(0,a.Wm)(H,{fullscreen:!0,class:"background"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(W,{class:"pattern",src:n(2649)},null,8,["src"]),(0,a._)("div",c,[(0,a.Wm)(D,{class:"btn",grey:!0,name:"Оплата",onClick:e[0]||(e[0]=()=>t.router.push({name:"personalAccountPayment"}))}),(0,a.Wm)(D,{lightBlue:!0,class:"btn",name:"Показания"})])]),(0,a._)("div",l,[(0,a.Wm)(b,null,{content:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a._)("p",d," Лицевой счет №"+(0,s.zw)(t.lcList?.code),1)])),_:1}),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.lcList?.name),1)])),_:1})])),_:1}),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.lcList?.address),1)])),_:1})])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.indicationList,(e=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(b,null,{content:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a._)("p",u,"Номер счетчика "+(0,s.zw)(e?.name),1)])),_:2},1024),(0,a.Wm)(A,{onInput:t=>{e.value=t.target.value},name:"Введите показания счетчика (куб.\r\n                  метр.)",type:"number",textBlue:!0},null,8,["onInput"]),(0,a.wy)((0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a._)("p",p,(0,s.zw)(e.error),1)])),_:2},1536),[[i.F8,e.error]]),(0,a.wy)((0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a._)("p",g,(0,s.zw)(e.response),1)])),_:2},1536),[[i.F8,e.response]]),(0,a.Wm)(D,{loading:t.loading,name:"Подтвердить",onClick:()=>{e?.indications[0].date.substring(0,10)!==t.moment().format("DD.MM.yyyy")?e.value>e?.indications[0]?.indication?(t.loading=!0,t.setIndices(e.id,e.value).then((()=>{t.loading=!1,e.response=this.$pinia.state.value?.personalAccount?.setIndicesResponse?.message,e.error=""}))):(e.response="",e.error="Текущие показания меньше предыдущих"):(e.response="",e.error="За этот день уже имеется начисление по счетчику")}},null,8,["loading","onClick"]),(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"ion-row-last"},{default:(0,a.w5)((()=>[(0,a.Wm)($,{style:{margin:"0 10px 0 0"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Выберите период: ")])),_:1}),(0,a._)("div",h,[(0,a.Wm)(L,{mode:"ios",color:"date",datetime:e?.id},null,8,["datetime"]),(0,a.Wm)($,{style:{margin:"0 5px"}},{default:(0,a.w5)((()=>[(0,a.Uk)("-")])),_:1}),(0,a.Wm)(L,{mode:"ios",color:"date",datetime:`${e?.id}_2`},null,8,["datetime"])]),(0,a.Wm)(R,{mode:"ios","keep-contents-mounted":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{doneText:"Готово",cancelText:"Отменить","show-default-buttons":!0,onIonChange:n=>t.onBeginDateChange(n,e?.id),color:"date",presentation:"date",mode:"ios",id:e?.id},null,8,["onIonChange","id"])])),_:2},1024),(0,a.Wm)(R,{mode:"ios","keep-contents-mounted":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{doneText:"Готово",cancelText:"Отменить","show-default-buttons":!0,onIonChange:n=>t.onEndDateChange(n,e?.id),color:"date",presentation:"date",mode:"ios",id:`${e?.id}_2`},null,8,["onIonChange","id"])])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Дата")])),_:1}),(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Показания")])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e?.indications,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(x,{class:(0,s.C_)({"ion-row-last":e?.indications[e?.indications?.length-1]?.date===t?.date})},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{class:"text-end"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t?.date.substring(0,10)),1)])),_:2},1024),(0,a.Wm)(P,{class:"text-end"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t?.indication),1)])),_:2},1024)])),_:2},1032,["class"])])))),128))])),_:2},1024)])),[[i.F8,!t.loadingGetIndices&&0!==t.lcList.counters?.length]]))),128)),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(b,null,{content:(0,a.w5)((()=>[(0,a.Wm)(S,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(M,{name:"bubbles"})])),_:1})])),_:1})],512),[[i.F8,t.loadingGetIndices]]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(b,null,{content:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(A,{textBlue:!0,type:"text",value:t.counterId,changeHandler:t.changeCounterId,name:"Введите номер счетчика"},null,8,["value","changeHandler"]),(0,a.Wm)(A,{textBlue:!0,type:"text",value:t.indication,changeHandler:t.changeIndication,name:"Введите показания счетчика"},null,8,["value","changeHandler"]),(0,a.wy)((0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a._)("p",w,(0,s.zw)(t.error),1)])),_:1},512),[[i.F8,t.error]]),(0,a.wy)((0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a._)("p",y,(0,s.zw)(t.response),1)])),_:1},512),[[i.F8,t.response]]),(0,a.Wm)(D,{loading:t.loading,name:"Подтвердить",onClick:e[1]||(e[1]=()=>{0!==t.counterId?.length?t.setIndicesHandler(t.counterId,t.indication,t.loading,t.response):t.error="Заполните все поля"})},null,8,["loading"])])),_:1})],512),[[i.F8,0===t.lcList?.counters?.length]]),(0,a.Wm)($,null,{default:(0,a.w5)((()=>[I])),_:1})])])),_:1})])),_:1})}var _=n(7821),k=n(8903),v=n(8056),W=n(1496),D=n(23),$=n(2201),S=n(6086),b=n(6651),A=n(9196),L=n(381),C=n.n(L),R=(0,a.aZ)({setup(){const t=(0,$.tv)(),e=(0,$.yj)();return{router:t,route:e,chevronForwardOutline:k.Dji,calendarNumberOutline:k.Yap,moment:C()}},data(){return{indication:"",counterId:"",error:"",loading:!1,loadingGetIndices:!1,response:"",beginDate:"",endDate:"",indicationList:[],value:""}},methods:{...(0,S.nv)(b.U,["getIndices","setIndices"]),async setIndicesHandler(t,e){if(e?.length>=0){this.$data.loading=!0;const n=new Promise((n=>{n(this.setIndices(t,e))}));n.then((()=>{this.$data.response=this.$pinia.state.value?.personalAccount?.setIndicesResponse?.message,this.$data.loading=!1}))}else this.$data.response="Заполните поле",this.$data.error="Заполните поле"},changeIndication(t){this.$data.indication=t.target.value},changeCounterId(t){this.$data.counterId=t.target.value},capitalizeFirstLetter(t){return t?.charAt(0)?.toUpperCase()+t?.slice(1)},onBeginDateChange(t,e){this.getIndices(e,C()(t.detail.value).format("yyyyMMDD"),this.$data.endDate?this.$data.endDate:C()().format("yyyyMMDD")).then((()=>{let t=this.$data.indicationList.find((t=>t.id===e));this.indicesList[0]?Object.assign(t,this.indicesList[0]):t.indications=[]})),this.$data.beginDate=C()(t.detail.value).format("yyyyMMDD")},onEndDateChange(t,e){this.getIndices(e,this.$data.beginDate?this.$data.beginDate:C()().format("yyyyMMDD"),C()(t.detail.value).format("yyyyMMDD")).then((()=>{let t=this.$data.indicationList.find((t=>t.id===e));this.indicesList[0]?Object.assign(t,this.indicesList[0]):t[0].indications=[]})),this.$data.endDate=C()(t.detail.value).format("yyyyMMDD")}},computed:{indicesList(){return this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data?this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data:[]},lcList(){return this.$pinia.state.value?.personalAccount?.personalItemData},setIndicesMessage(){return this.$pinia.state.value?.personalAccount?.setIndicesResponse?.data?.message}},ionViewDidLeave(){this.$data.indicationList=[]},ionViewDidEnter(){if(this.lcList?.counters?.length>0&&void 0!==this.lcList?.counters)for(let t=0;t<this.lcList?.counters?.length;t++){const e=this.lcList?.counters[t];this.$data.loadingGetIndices=!0,this.getIndices(e.counterId).then((()=>{new Promise((t=>{this.indicesList[0]?.id&&t(this.$data.indicationList.push({...this.indicesList[0]}))}));this.$data.loadingGetIndices=!1}))}else this.$router.push("/tabs/personalAccounts")},names:"personalAccauntIndication",components:{Back:D.Z,LayoutBox:W.Z,IonContent:_.W2,IonPage:_._i,Button:v.Z,IonText:_.yW,IonItem:_.Ie,Input:A.Z,IonRow:_.Nd,IonCol:_.wI,IonModal:_.ki,IonImg:_.Xz,IonGrid:_.jY,IonDatetime:_.x4,IonSpinner:_.PQ,IonDatetimeButton:_.Mj}}),x=n(3744);const E=(0,x.Z)(R,[["render",f],["__scopeId","data-v-34e6f93f"]]);var P=E}}]);
//# sourceMappingURL=5093.5967d651.js.map