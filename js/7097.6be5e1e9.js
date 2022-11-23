"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[7097],{6651:function(t,e,n){n.d(e,{U:function(){return l}});n(7658);var a=n(6086),s=n(9669),o=n.n(s),i=n(3978),r=n(5715);const l=(0,a.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,sberPayResponse:null,sberPayError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null,personalItemData:{}}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){console.log("getting settlements");try{const t=new i.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:n}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getSettlementsResponse=t.data}))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new i.K;await e.create();const n=await e.get("token"),a=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:a,s_id:t}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getStreetsResponse=t.data}))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new i.K;await e.create();const n=await e.get("token"),a=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:a,ids:t}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getHousesResponse=t.data}))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new i.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token,a=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:n,LC:a}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getAccountResponse=t.data}))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((async t=>{this.addAccountResponse=t.data,t.data.error&&r.Z.push("/authPage");const n=new i.K;await n.create();const a=await n.get("token"),s=JSON.parse(a);await n.set("token",JSON.stringify({...s,lics:[...s.lics,e]}))}))}catch(n){this.addAccountError=n}},async delAccount(t){try{const e=new i.K;await e.create();const n=await e.get("token"),a=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:a,LC:t}).then((async a=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t)),a.data.error&&r.Z.push("/authPage");const s=JSON.parse(n),o=this.getAccountResponse?.data.filter((e=>e?.code!==t)),i={name:s.name,phone:s.phone,email:s.email,password:s.password,token:s.token,lics:o?.map((t=>t?.code))};await e.set("token",JSON.stringify(i)),this.delAccountResponse=a.data}))}catch(e){this.delAccountError=e}},async getPayments(t,e,n){try{const a=new i.K;await a.create();const s=await a.get("token"),l=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments",{token:l,LC:t,beginPeriod:e,endPeriod:n}).then((async t=>{t.data.error&&r.Z.push("/authPage"),this.paymentHistoryResponse=t.data}))}catch(a){this.paymentHistoryError=a}},async getIndices(t,e,n){try{const a=new i.K;await a.create();const s=await a.get("token"),l=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:l,counterId:t,beginPeriod:e,endPeriod:n}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.getIndicesResponse=t.data}))}catch(a){this.getIndicesError=a}},async setIndices(t,e){try{const n=new i.K;await n.create();const a=await n.get("token"),s=JSON.parse(a).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices",{token:s,counterId:t,indice:e}).then((e=>{this.setIndicesResponse=e.data,!1===e.data.error&&(this.getIndices(t),this.setIndicesResponse=e.data)}))}catch(n){this.setIndicesError=n}},async sberPay(t,e,n,a){try{const s=new i.K;await s.create();const l=await s.get("token"),c=JSON.parse(l);await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SberPay",{token:c.token,phone:e,email:n,LC:t,accruals:a}).then((t=>{t.data.error&&r.Z.push("/authPage"),this.sberPayResponse=t.data}))}catch(s){this.sberPayError=s}}}})},1496:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(6252),s=n(3577);function o(t,e,n,o,i,r){return(0,a.wg)(),(0,a.iD)("div",{class:(0,s.C_)(["main",{padding:t.padding}]),onClick:e[0]||(e[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,a.WI)(t.$slots,"content",{},void 0,!0)],2)}var i=(0,a.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),r=n(3744);const l=(0,r.Z)(i,[["render",o],["__scopeId","data-v-568da44e"]]);var c=l},7097:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});n(7658);var a=n(6252),s=n(3577),o=n(9963);const i=t=>((0,a.dD)("data-v-39a90be6"),t=t(),(0,a.Cn)(),t),r={class:"header-wrapper"},l={class:"btn-wrapper"},c={class:"container"},d={class:"title ion-text-start"},u={class:"title ion-text-start"},p={class:"ion-text-start error"},h={class:"ion-text-center"},g={style:{display:"flex"}},m=i((()=>(0,a._)("p",{class:"title ion-text-start"},"Новые показания",-1))),w={class:"ion-text-start error"},y={class:"ion-text-center"},I=i((()=>(0,a._)("p",{class:"ion-text-center"}," В случае не правильного ввода показаний счетчика, следует обратиться в абоненский отдел УГРС по тел. 8(4112)-42-00-30, 46-00-41, 46-00-71 ",-1)));function _(t,e,i,_,f,k){const v=(0,a.up)("Back"),S=(0,a.up)("ion-img"),W=(0,a.up)("Button"),A=(0,a.up)("ion-text"),D=(0,a.up)("ion-item"),b=(0,a.up)("layout-box"),P=(0,a.up)("Input"),C=(0,a.up)("ion-datetime-button"),R=(0,a.up)("ion-datetime"),L=(0,a.up)("ion-modal"),$=(0,a.up)("ion-row"),N=(0,a.up)("ion-grid"),x=(0,a.up)("ion-col"),E=(0,a.up)("ion-spinner"),G=(0,a.up)("ion-content"),M=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(M,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,{btnSrc:()=>t.router.push("/tabs/personalAccounts")},null,8,["btnSrc"]),(0,a.Wm)(G,{fullscreen:!0,class:"background"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(S,{class:"pattern",src:n(2649)},null,8,["src"]),(0,a._)("div",l,[(0,a.Wm)(W,{class:"btn",grey:!0,name:"Оплата",onClick:e[0]||(e[0]=()=>t.router.push({name:"personalAccountPayment"}))}),(0,a.Wm)(W,{lightBlue:!0,class:"btn",name:"Показания"})])]),(0,a._)("div",c,[(0,a.Wm)(b,null,{content:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("p",d," Лицевой счет №"+(0,s.zw)(t.lcList?.code),1)])),_:1}),(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.lcList?.name),1)])),_:1})])),_:1}),(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.lcList?.address),1)])),_:1})])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.indicationList,(e=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(b,null,{content:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("p",u,"Номер счетчика "+(0,s.zw)(e?.name),1)])),_:2},1024),(0,a.Wm)(P,{onInput:t=>{e.value=t.target.value},name:"Введите показания счетчика (куб.\r\n                  метр.)",type:"number",textBlue:!0},null,8,["onInput"]),(0,a.wy)((0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("p",p,(0,s.zw)(e.error),1)])),_:2},1536),[[o.F8,e.error]]),(0,a.wy)((0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("p",h,(0,s.zw)(e.response),1)])),_:2},1536),[[o.F8,e.response]]),(0,a.Wm)(W,{loading:t.loading,name:"Подтвердить",onClick:()=>{e?.indications[0].date.substring(0,10)!==t.moment().format("DD.MM.yyyy")?e.value>e?.indications[0]?.indication?(t.loading=!0,t.setIndices(e.id,e.value).then((()=>{t.loading=!1,e.response=this.$pinia.state.value?.personalAccount?.setIndicesResponse?.message,e.error=""}))):(e.response="",e.error="Текущие показания меньше предыдущих"):(e.response="",e.error="За этот день уже имеется начисление по счетчику")}},null,8,["loading","onClick"]),(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,{class:"ion-row-last"},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{style:{margin:"0 10px 0 0"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Выберите период: ")])),_:1}),(0,a._)("div",g,[(0,a.Wm)(C,{mode:"ios",color:"date",datetime:e?.id},null,8,["datetime"]),(0,a.Wm)(A,{style:{margin:"0 5px"}},{default:(0,a.w5)((()=>[(0,a.Uk)("-")])),_:1}),(0,a.Wm)(C,{mode:"ios",color:"date",datetime:`${e?.id}_2`},null,8,["datetime"])]),(0,a.Wm)(L,{mode:"ios","keep-contents-mounted":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{onIonChange:n=>t.onBeginDateChange(n,e?.id),color:"date",presentation:"date",mode:"ios",id:e?.id},null,8,["onIonChange","id"])])),_:2},1024),(0,a.Wm)(L,{mode:"ios","keep-contents-mounted":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{onIonChange:n=>t.onEndDateChange(n,e?.id),color:"date",presentation:"date",mode:"ios",id:`${e?.id}_2`},null,8,["onIonChange","id"])])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Дата")])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Показания")])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e?.indications,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)($,{class:(0,s.C_)({"ion-row-last":e?.indications[e?.indications?.length-1]?.date===t?.date})},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"text-end"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t?.date.substring(0,10)),1)])),_:2},1024),(0,a.Wm)(x,{class:"text-end"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t?.indication),1)])),_:2},1024)])),_:2},1032,["class"])])))),128))])),_:2},1024)])),[[o.F8,!t.loadingGetIndices&&0!==t.lcList.counters?.length]]))),128)),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(b,null,{content:(0,a.w5)((()=>[(0,a.Wm)(D,{lines:"none"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{name:"bubbles"})])),_:1})])),_:1})],512),[[o.F8,t.loadingGetIndices]]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(b,null,{content:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(P,{textBlue:!0,type:"text",value:t.counterId,changeHandler:t.changeCounterId,name:"Введите номер счетчика"},null,8,["value","changeHandler"]),(0,a.Wm)(P,{textBlue:!0,type:"text",value:t.indication,changeHandler:t.changeIndication,name:"Введите показания счетчика"},null,8,["value","changeHandler"]),(0,a.wy)((0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("p",w,(0,s.zw)(t.error),1)])),_:1},512),[[o.F8,t.error]]),(0,a.wy)((0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("p",y,(0,s.zw)(t.response),1)])),_:1},512),[[o.F8,t.response]]),(0,a.Wm)(W,{loading:t.loading,name:"Подтвердить",onClick:e[1]||(e[1]=()=>{0!==t.counterId?.length?t.setIndicesHandler(t.counterId,t.indication,t.loading,t.response):t.error="Заполните все поля"})},null,8,["loading"])])),_:1})],512),[[o.F8,0===t.lcList?.counters?.length]]),(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[I])),_:1})])])),_:1})])),_:1})}var f=n(2684),k=n(8903),v=n(8056),S=n(1496),W=n(291),A=n(2201),D=n(6086),b=n(6651),P=n(2198),C=n(381),R=n.n(C),L=(0,a.aZ)({setup(){const t=(0,A.tv)(),e=(0,A.yj)();return{router:t,route:e,chevronForwardOutline:k.Dji,calendarNumberOutline:k.Yap,moment:R()}},data(){return{indication:"",counterId:"",error:"",loading:!1,loadingGetIndices:!1,response:"",beginDate:"",endDate:"",indicationList:[],value:""}},methods:{...(0,D.nv)(b.U,["getIndices","setIndices"]),async setIndicesHandler(t,e){if(e?.length>=0){this.$data.loading=!0;const n=new Promise((n=>{n(this.setIndices(t,e))}));n.then((()=>{this.$data.response=this.$pinia.state.value?.personalAccount?.setIndicesResponse?.message,this.$data.loading=!1}))}else this.$data.response="Заполните поле",this.$data.error="Заполните поле"},changeIndication(t){this.$data.indication=t.target.value},changeCounterId(t){this.$data.counterId=t.target.value},capitalizeFirstLetter(t){return t?.charAt(0)?.toUpperCase()+t?.slice(1)},onBeginDateChange(t,e){this.getIndices(e,R()(t.detail.value).format("yyyyMMDD"),this.$data.endDate?this.$data.endDate:R()().format("yyyyMMDD")).then((()=>{let t=this.$data.indicationList.filter((t=>t.id===e));Object.assign(t[0],this.indicesList[0])})),this.$data.beginDate=R()(t.detail.value).format("yyyyMMDD")},onEndDateChange(t,e){this.getIndices(e,this.$data.beginDate?this.$data.beginDate:R()().format("yyyyMMDD"),R()(t.detail.value).format("yyyyMMDD")).then((()=>{let t=this.$data.indicationList.filter((t=>t.id===e));Object.assign(t[0],this.indicesList[0])})),this.$data.endDate=R()(t.detail.value).format("yyyyMMDD")}},computed:{indicesList(){return this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data?this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data:[]},lcList(){return this.$pinia.state.value?.personalAccount?.personalItemData},setIndicesMessage(){return this.$pinia.state.value?.personalAccount?.setIndicesResponse?.data?.message}},ionViewDidLeave(){this.$data.indicationList=[]},ionViewDidEnter(){if(this.lcList?.counters?.length>0&&void 0!==this.lcList?.counters)for(let t=0;t<this.lcList?.counters?.length;t++){const e=this.lcList?.counters[t];this.$data.loadingGetIndices=!0,this.getIndices(e.counterId).then((()=>{new Promise((t=>{this.indicesList[0]?.id&&t(this.$data.indicationList.push({...this.indicesList[0]}))}));this.$data.loadingGetIndices=!1}))}else this.$router.push("/tabs/personalAccounts")},names:"personalAccauntIndication",components:{Back:W.Z,LayoutBox:S.Z,IonContent:f.W2,IonPage:f._i,Button:v.Z,IonText:f.yW,IonItem:f.Ie,Input:P.Z,IonRow:f.Nd,IonCol:f.wI,IonModal:f.ki,IonImg:f.Xz,IonGrid:f.jY,IonDatetime:f.x4,IonSpinner:f.PQ,IonDatetimeButton:f.Mj}}),$=n(3744);const N=(0,$.Z)(L,[["render",_],["__scopeId","data-v-39a90be6"]]);var x=N}}]);
//# sourceMappingURL=7097.6be5e1e9.js.map