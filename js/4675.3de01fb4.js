"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[4675],{6651:function(t,e,n){n.d(e,{U:function(){return c}});var s=n(6086),a=n(9669),o=n.n(a),l=n(3978);const c=(0,s.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,sberPayResponse:null,sberPayError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null,personalItemData:{}}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){console.log("getting settlements");try{const t=new l.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:n}).then((t=>this.getSettlementsResponse=t.data))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:s,s_id:t}).then((t=>this.getStreetsResponse=t.data))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:s,ids:t}).then((t=>this.getHousesResponse=t.data))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new l.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token,s=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:n,LC:s}).then((t=>this.getAccountResponse=t.data))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((async t=>{this.addAccountResponse=t.data;const n=new l.K;await n.create();const s=await n.get("token"),a=JSON.parse(s);await n.set("token",JSON.stringify({...a,lics:[...a.lics,e]}))}))}catch(n){this.addAccountError=n}},async delAccount(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:s,LC:t}).then((async s=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t));const a=JSON.parse(n),o=this.getAccountResponse?.data.filter((e=>e?.code!==t)),l={name:a.name,phone:a.phone,email:a.email,password:a.password,token:a.token,lics:o?.map((t=>t?.code))};await e.set("token",JSON.stringify(l)),this.delAccountResponse=s.data}))}catch(e){this.delAccountError=e}},async getPayments(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments",{token:s,LC:t}).then((async t=>{this.paymentHistoryResponse=t.data}))}catch(e){this.paymentHistoryError=e}},async getIndices(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:s,counterId:t}).then((t=>{this.getIndicesResponse=t.data}))}catch(e){this.getIndicesError=e}},async setIndices(t,e){try{const n=new l.K;await n.create();const s=await n.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices",{token:a,counterId:t,indice:e}).then((e=>{!1===e.data.error&&(this.getIndices(t),this.setIndicesResponse=e.data)}))}catch(n){this.setIndicesError=n}},async sberPay(t,e,n,s,a,c,r){try{const i=new l.K;await i.create();const u=await i.get("token"),d=JSON.parse(u);await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SberPay",{token:d.token,phone:e,email:n,LC:t,accruals:s,penalties:c,advances:r,sumTO:a}).then((t=>{this.sberPayResponse=t.data}))}catch(i){this.sberPayError=i}}}})},1496:function(t,e,n){n.d(e,{Z:function(){return i}});var s=n(6252),a=n(3577);function o(t,e,n,o,l,c){return(0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["main",{padding:t.padding}]),onClick:e[0]||(e[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,s.WI)(t.$slots,"content",{},void 0,!0)],2)}var l=(0,s.aZ)({setup(){},name:"layoutBox",components:{},props:{padding:Boolean,btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),c=n(3744);const r=(0,c.Z)(l,[["render",o],["__scopeId","data-v-568da44e"]]);var i=r},4675:function(t,e,n){n.r(e),n.d(e,{default:function(){return G}});var s=n(6252),a=n(3577),o=n(9963);const l=t=>((0,s.dD)("data-v-f09a6180"),t=t(),(0,s.Cn)(),t),c={class:"container"},r={class:"btn-wrapper"},i={class:"title ion-text-start"},u={class:"title ion-text-start"},d=(0,s.Uk)("№"),p=(0,s.Uk)("Дата"),g=(0,s.Uk)("Показания"),h=l((()=>(0,s._)("p",{class:"title ion-text-start"},"Новые показания",-1))),w={class:"input-wrapper"},m=["onUpdate:modelValue"],_=(0,s.Uk)("Введите показания счетчика"),I={class:"ion-text-start error"},f={class:"ion-text-center"},k=l((()=>(0,s._)("p",{class:"title ion-text-start"},"Новые показания",-1))),y={class:"ion-text-start error"},v={class:"ion-text-center"},S=l((()=>(0,s._)("p",{class:"ion-text-center"}," В случае не правильного ввода показаний счетчика, следует обратиться в абоненский отдел УГРС по тел. 8(4112)-42-00-30, 46-00-41, 46-00-71 ",-1)));function A(t,e,n,l,A,W){const R=(0,s.up)("Back"),x=(0,s.up)("Button"),N=(0,s.up)("ion-text"),C=(0,s.up)("ion-item"),P=(0,s.up)("layout-box"),E=(0,s.up)("ion-col"),H=(0,s.up)("ion-row"),L=(0,s.up)("ion-list"),b=(0,s.up)("Input"),z=(0,s.up)("ion-content"),G=(0,s.up)("ion-page");return(0,s.wg)(),(0,s.j4)(G,null,{default:(0,s.w5)((()=>[(0,s.Wm)(R),(0,s.Wm)(z,{fullscreen:!0,class:"background"},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",r,[(0,s.Wm)(x,{class:"btn",grey:!0,name:"Оплата",onClick:e[0]||(e[0]=()=>t.router.push({name:"personalAccountPayment"}))}),(0,s.Wm)(x,{class:"btn",name:"Показания"})]),(0,s.Wm)(P,null,{content:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s._)("p",i," Лицевой счет №"+(0,a.zw)(t.lcList?.code),1)])),_:1}),(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.lcList?.name),1)])),_:1})])),_:1}),(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.lcList?.address),1)])),_:1})])),_:1})])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.indicesList,((e,n)=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.Wm)(P,null,{content:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s._)("p",u,"Счетчик "+(0,a.zw)(e?.name),1)])),_:2},1024),(0,s.Wm)(H,null,{default:(0,s.w5)((()=>[(0,s.Wm)(E,{size:"2","size-sm":""},{default:(0,s.w5)((()=>[d])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[g])),_:1})])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e?.indications,((t,n)=>((0,s.wg)(),(0,s.j4)(L,{key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{class:(0,a.C_)({"ion-row-last":e?.indications[e?.indications?.length-1]?.date===t?.date})},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{class:"sub-title",size:"2","size-sm":""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(n+1)+".",1)])),_:2},1024),(0,s.Wm)(E,{class:"text-end"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t?.date.substring(0,10)),1)])),_:2},1024),(0,s.Wm)(E,{class:"text-end"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t?.indication),1)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1024)))),128)),(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[h])),_:1}),(0,s._)("div",w,[(0,s.wy)((0,s._)("input",{ref_for:!0,ref:"text2",type:"text",class:"input","onUpdate:modelValue":t=>e.value=t,placeholder:" "},null,8,m),[[o.nr,e.value]]),(0,s.Wm)(N,{class:"input-text inputTextBlue",onClick:e=>t.onFocusText(n)},{default:(0,s.w5)((()=>[_])),_:2},1032,["onClick"])]),(0,s.Uk)(" "+(0,a.zw)(e.response)+" ",1),(0,s.wy)((0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s._)("p",I,(0,a.zw)(e.response),1)])),_:2},1536),[[o.F8,"Заполните поле"===e.response]]),(0,s.wy)((0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s._)("p",f,(0,a.zw)(e.response),1)])),_:2},1536),[[o.F8,e.response]]),(0,s.Wm)(x,{modelValue:e.loading,"onUpdate:modelValue":t=>e.loading=t,loading:!0===e.loading&&e.loading,name:"Подтвердить",onClick:()=>{t.setIndicesHandler(e.id,e.value,e.loading,e.response)}},null,8,["modelValue","onUpdate:modelValue","loading","onClick"])])),_:2},1024)])))),128)),(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(P,null,{content:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[k])),_:1}),(0,s.Wm)(b,{textBlue:!0,type:"text",value:t.counterId,changeHandler:t.changeCounterId,name:"Введите номер счетчика"},null,8,["value","changeHandler"]),(0,s.Wm)(b,{textBlue:!0,type:"text",value:t.indication,changeHandler:t.changeIndication,name:"Введите показания счетчика"},null,8,["value","changeHandler"]),(0,s.wy)((0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s._)("p",y,(0,a.zw)(t.error),1)])),_:1},512),[[o.F8,t.error]]),(0,s.wy)((0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s._)("p",v,(0,a.zw)(t.response),1)])),_:1},512),[[o.F8,t.response]]),(0,s.Wm)(x,{loading:t.loading,name:"Подтвердить",onClick:e[1]||(e[1]=()=>{0!==t.counterId?.length?t.setIndicesHandler(t.counterId,t.indication,t.loading,t.response):t.error="Заполните все поля"})},null,8,["loading"])])),_:1})],512),[[o.F8,0===t.indicesList?.length]]),(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[S])),_:1})])])),_:1})])),_:1})}var W=n(9314),R=n(5217),x=n(1496),N=n(4043),C=n(2119),P=n(6086),E=n(6651),H=n(387),L=(0,s.aZ)({setup(){const t=(0,C.tv)(),e=(0,C.yj)();return{router:t,route:e}},data(){return{indication:"",counterId:"",error:"",loading:!1,response:""}},methods:{...(0,P.nv)(E.U,["getIndices","setIndices"]),async setIndicesHandler(t,e,n,s){if((void 0!==e||e?.length>=0)&&void 0===n&&void 0===s){this.$data.loading=!0;const a=new Promise((n=>{n(this.setIndices(t,e))}));a.then((()=>{s=this.$pinia.state.value?.personalAccount?.setIndicesResponse?.message,n=!1}))}else s="Заполните поле",this.$data.error="Заполните поле"},changeIndication(t){this.$data.indication=t.target.value},changeCounterId(t){this.$data.counterId=t.target.value},onFocusText(t){this.$refs.text2[t].focus()}},computed:{indicesList(){return this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data?this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data:[]},lcList(){return this.$pinia.state.value?.personalAccount?.personalItemData},setIndicesMessage(){return this.$pinia.state.value?.personalAccount?.setIndicesResponse?.data?.message}},mounted(){for(let t=0;t<this.lcList?.counters?.length;t++){const e=this.lcList?.counters[t];this.getIndices(e.counterId)}},names:"personalAccauntIndication",components:{Back:N.Z,LayoutBox:x.Z,IonContent:W.W2,IonPage:W._i,Button:R.Z,IonText:W.yW,IonItem:W.Ie,IonList:W.q_,Input:H.Z,IonRow:W.Nd,IonCol:W.wI}}),b=n(3744);const z=(0,b.Z)(L,[["render",A],["__scopeId","data-v-f09a6180"]]);var G=z}}]);
//# sourceMappingURL=4675.3de01fb4.js.map