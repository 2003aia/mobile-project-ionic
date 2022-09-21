"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[883],{6651:function(t,e,n){n.d(e,{U:function(){return i}});var s=n(9876),a=n(9669),o=n.n(a),l=n(3978),c=n(7167);const i=(0,s.Q_)({id:"personalAccount",state:()=>({addAccountResponse:null,addAccountError:null,getSettlementsResponse:null,getSettlementsError:null,getStreetsResponse:null,getStreetsError:null,getHousesResponse:null,getHousesError:null,getAccountResponse:null,paymentHistoryResponse:null,paymentHistoryError:null,sberPayResponse:null,sberPayError:null,getAccountError:null,delAccountResponse:{error:!1,data:null},delAccountError:null,getIndicesResponse:null,getIndicesError:null,setIndicesResponse:null,setIndicesError:null}),getters:{getSettlementsList:t=>t.getSettlementsResponse.data.flatMap((t=>t?.settlements.flatMap((t=>t))))},actions:{async getSettlements(){console.log("getting settlements");try{const t=new l.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetSettlements",{token:n}).then((t=>this.getSettlementsResponse=t.data))}catch(t){this.getSettlementsError=t}},async getStreets(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetStreets",{token:s,s_id:t}).then((t=>this.getStreetsResponse=t.data))}catch(e){this.getStreetsError=e}},async getHouses(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetHouses",{token:s,ids:t}).then((t=>this.getHousesResponse=t.data))}catch(e){this.getHousesError=e}},async getAccount(){try{const t=new l.K;await t.create();const e=await t.get("token"),n=JSON.parse(e).token,s=JSON.parse(e).lics;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetAccount",{token:n,LC:s}).then((t=>this.getAccountResponse=t.data))}catch(t){this.getAccountError=t}},async addAccount(t,e){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/AddAccount",{token:t,LC:e}).then((async t=>{if(this.addAccountResponse=t.data,!1===t.data.error){const t=(0,c.r)(),e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n);t.authUser(s.phone,s.password).then((async()=>{const e=new l.K;await e.create(),await e.set("token",JSON.stringify({...s,lics:t?.authResponse?.data?.lics,token:t?.authResponse?.data?.token}))}))}}))}catch(n){this.addAccountError=n}},async delAccount(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/DelAccount",{token:s,LC:t}).then((async s=>{this.getAccountResponse.data=this.getAccountResponse?.data.filter((e=>e.code!==t));const a=JSON.parse(n),o={name:a.name,phone:a.phone,email:a.email,password:a.password,token:a.token,lics:this.getAccountResponse?.data.filter((e=>e.code!==t))};await e.set("token",JSON.stringify(o)),this.delAccountResponse=s.data}))}catch(e){this.delAccountError=e}},async getPayments(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetPayments",{token:s,LC:t}).then((async t=>{this.paymentHistoryResponse=t.data}))}catch(e){this.paymentHistoryError=e}},async getIndices(t){try{const e=new l.K;await e.create();const n=await e.get("token"),s=JSON.parse(n).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/GetIndices",{token:s,counterId:t}).then((t=>{this.getIndicesResponse=t.data}))}catch(e){this.getIndicesError=e}},async setIndices(t,e){try{const n=new l.K;await n.create();const s=await n.get("token"),a=JSON.parse(s).token;await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SetIndices",{token:a,counterId:t,indice:e}).then((e=>{this.getIndices(t),this.setIndicesResponse=e.data}))}catch(n){this.setIndicesError=n}},async sberPay(t,e,n,s,a,c){try{const i=new l.K;await i.create();const r=await i.get("token"),u=JSON.parse(r);await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/SberPay",{token:u.token,phone:e,email:n,LC:t,accruals:s,penalties:c,sumTO:a}).then((t=>{this.sberPayResponse=t.data}))}catch(i){this.sberPayError=i}}}})},652:function(t,e,n){n.d(e,{Z:function(){return i}});var s=n(6252);function a(t,e,n,a,o,l){return(0,s.wg)(),(0,s.iD)("div",{class:"main",onClick:e[0]||(e[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,s.WI)(t.$slots,"content",{},void 0,!0)])}var o=(0,s.aZ)({setup(){},name:"layoutBox",components:{},props:{btnSrc:String,filledButton:String,title:String,height:String,onClick:Function}}),l=n(3744);const c=(0,l.Z)(o,[["render",a],["__scopeId","data-v-3d91200c"]]);var i=c},883:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var s=n(6252),a=n(3577);const o=(0,s.Uk)("Добавить лицевой счет"),l=(0,s.Uk)("Узнать лицевой счет"),c={class:"title ion-text-start"},i=(0,s.Uk)(" История "),r=(0,s.Uk)(" Удалить"),u=(0,s.Uk)(" Задолженность: "),d=(0,s.Uk)(" Пени: "),p={key:0},g={class:"title ion-text-start"},m=(0,s.Uk)(" История "),w=(0,s.Uk)(" Удалить"),h=(0,s.Uk)(" Задолженность: "),A=(0,s.Uk)(" Пени: "),k={class:"footer"},y=(0,s.Uk)("Добавить лицевой счет"),f=(0,s.Uk)("Узнать лицевой счет");function W(t,e,W,I,S,_){const L=(0,s.up)("Back"),b=(0,s.up)("ion-Icon"),N=(0,s.up)("ion-text"),O=(0,s.up)("ion-icon"),E=(0,s.up)("ion-item"),P=(0,s.up)("Layout"),v=(0,s.up)("ion-img"),C=(0,s.up)("ion-spinner"),R=(0,s.up)("ion-content"),U=(0,s.up)("ion-popover"),B=(0,s.up)("ion-list"),H=(0,s.up)("Button"),J=(0,s.up)("LayoutBox"),Z=(0,s.up)("ion-page");return(0,s.wg)(),(0,s.j4)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(L),0===t.lcList?.length?((0,s.wg)(),(0,s.j4)(P,{key:0,btnSrc:"/registrPage",height:"false",outlineBtn:".",filledBtn:".",title:"Лицевой счёт"},{"main-content":(0,s.w5)((()=>[(0,s.Wm)(E,{"router-link":"/personalAccountNew"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{class:"icon-start",size:"large",slot:"start",icon:t.pencilOutline},null,8,["icon"]),(0,s.Wm)(N,{class:"sub-title"},{default:(0,s.w5)((()=>[o])),_:1}),(0,s.Wm)(O,{class:"icon-end",size:"large",slot:"end",icon:t.chevronForwardOutline},null,8,["icon"])])),_:1}),(0,s.Wm)(E,{"router-link":"/personalAccountInfoSearch"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{class:"icon-start",size:"large",slot:"start",icon:t.documentTextOutline},null,8,["icon"]),(0,s.Wm)(N,{class:"sub-title"},{default:(0,s.w5)((()=>[l])),_:1}),(0,s.Wm)(O,{size:"large",class:"icon-end",slot:"end",icon:t.chevronForwardOutline},null,8,["icon"])])),_:1})])),_:1})):((0,s.wg)(),(0,s.j4)(P,{key:1,btnSrc:"/registrPage",height:"false",outlineBtn:".",filledBtn:".",title:"Лицевой счёт"},{"main-content":(0,s.w5)((()=>[(0,s.Wm)(E,{lines:"none"},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s._)("p",c," Лицевой счет №"+(0,a.zw)(t.lcList[0]?.code),1)])),_:1}),(0,s.Wm)(O,{id:"click-trigger",slot:"end",icon:t.ellipsisVertical},null,8,["icon"]),(0,s.Wm)(U,{class:"history-wrapper",mode:"ios",trigger:"click-trigger","trigger-action":"click"},{default:(0,s.w5)((()=>[(0,s.Wm)(R,{class:"ion-padding"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(E,{onClick:e[0]||(e[0]=()=>t.router.push({name:"personalAccountPaymentHistory",params:{lc:t.lcList[0]?.code}}))},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[i])),_:1}),(0,s.Wm)(v,{slot:"end",class:"history-icon",src:n(1916)},null,8,["src"])])),_:1}),(0,s.Wm)(E,{onClick:e[1]||(e[1]=e=>t.delAccountHandler(t.lcList[0].code))},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[r])),_:1}),!1===t.loadingDel?((0,s.wg)(),(0,s.j4)(O,{key:0,class:"history-icon",icon:t.trashOutline,slot:"end"},null,8,["icon"])):((0,s.wg)(),(0,s.j4)(C,{key:1,slot:"end",name:"bubbles"}))])),_:1})])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(B,null,{default:(0,s.w5)((()=>[(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.lcList[0]?.name),1)])),_:1})])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.lcList[0]?.address),1)])),_:1})])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(N,{slot:"end",class:"text-blue"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.lcList[0]?.debts?.accruals),1)])),_:1})])),_:1}),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[d])),_:1}),(0,s.Wm)(N,{class:"text-blue",slot:"end"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.lcList[0]?.debts?.penalties),1)])),_:1})])),_:1})])),_:1}),(0,s.Wm)(H,{class:"btn",name:"Оплата",onClick:e[2]||(e[2]=()=>t.router.push({name:"personalAccountPayment",params:{...t.lcList[0],debts:JSON.stringify(t.lcList[0].debts),counters:JSON.stringify(t.lcList[0].counters)}}))}),(0,s.Wm)(H,{class:"btn",outline:!0,name:"Внести показания",onClick:e[3]||(e[3]=()=>t.router.push({name:"personalAccountIndication",params:{...t.lcList[0],debts:JSON.stringify(t.lcList[0].debts),counters:JSON.stringify(t.lcList[0].counters)}}))}),(0,s.Wm)(H,{onClick:e[4]||(e[4]=()=>t.router.push({name:"personalAccountPaymentHistory",params:{lc:t.lcList[0]?.code}})),class:"btn",outline:!0,name:"История платежей"})])),content:(0,s.w5)((()=>[t.lcList?.length>1?((0,s.wg)(),(0,s.iD)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.lcList2,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.Wm)(J,null,{content:(0,s.w5)((()=>[(0,s.Wm)(E,{lines:"none"},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s._)("p",g," Лицевой счет №"+(0,a.zw)(e.code),1)])),_:2},1024),(0,s.Wm)(O,{slot:"end",icon:t.ellipsisVertical,id:e.code},null,8,["icon","id"]),(0,s.Wm)(U,{class:"history-wrapper",mode:"ios",trigger:e.code,"trigger-action":"click"},{default:(0,s.w5)((()=>[(0,s.Wm)(R,{class:"ion-padding"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(E,{onClick:()=>t.router.push({name:"personalAccountPaymentHistory",params:{lc:e?.code}})},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(v,{slot:"end",class:"history-icon",src:n(1916)},null,8,["src"])])),_:2},1032,["onClick"]),(0,s.Wm)(E,{onClick:n=>t.delAccountHandler(e.code)},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[w])),_:1}),t.loadingDel?((0,s.wg)(),(0,s.j4)(C,{key:1,slot:"end",name:"bubbles"})):((0,s.wg)(),(0,s.j4)(O,{key:0,class:"history-icon",icon:t.trashOutline,slot:"end"},null,8,["icon"]))])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1032,["trigger"])])),_:2},1024),(0,s.Wm)(B,null,{default:(0,s.w5)((()=>[(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.name),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.address),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[h])),_:1}),(0,s.Wm)(N,{slot:"end",class:"text-blue"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.debts?.accruals),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(E,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[A])),_:1}),(0,s.Wm)(N,{class:"text-blue",slot:"end"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.debts?.penalties),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,s.Wm)(H,{class:"btn",name:"Оплата","router-link":"/personalAccountPayment"}),(0,s.Wm)(H,{class:"btn",outline:!0,name:"Внести показания",onClick:()=>t.router.push({name:"personalAccountIndication",params:{...e,counters:JSON.stringify(e?.counters[0])}})},null,8,["onClick"]),(0,s.Wm)(H,{class:"btn",outline:!0,onClick:()=>t.router.push({name:"personalAccountPaymentHistory",params:{lc:e?.code}}),name:"История платежей"},null,8,["onClick"])])),_:2},1024)])))),128))])):(0,s.kq)("",!0),(0,s._)("div",k,[(0,s.Wm)(J,null,{content:(0,s.w5)((()=>[(0,s.Wm)(E,{"router-link":"/personalAccountNew"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{class:"icon-start",size:"large",slot:"start",icon:t.pencilOutline},null,8,["icon"]),(0,s.Wm)(N,{class:"sub-title"},{default:(0,s.w5)((()=>[y])),_:1}),(0,s.Wm)(O,{class:"icon-end",size:"large",slot:"end",icon:t.chevronForwardOutline},null,8,["icon"])])),_:1}),(0,s.Wm)(E,{"router-link":"/personalAccountInfoSearch"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{class:"icon-start",size:"large",slot:"start",icon:t.documentTextOutline},null,8,["icon"]),(0,s.Wm)(N,{class:"sub-title"},{default:(0,s.w5)((()=>[f])),_:1}),(0,s.Wm)(O,{size:"large",class:"icon-end",slot:"end",icon:t.chevronForwardOutline},null,8,["icon"])])),_:1})])),_:1})])])),_:1}))])),_:1})}var I=n(2119),S=n(3875),_=n(8676),L=n(8903),b=n(4043),N=n(652),O=n(1558),E=n(9876),P=n(6651),v=(0,s.aZ)({name:"personalAccountPage",components:{Back:b.Z,IonPage:_._i,Layout:S.Z,IonText:_.yW,IonItem:_.Ie,IonSpinner:_.PQ,IonIcon:_.gu,LayoutBox:N.Z,Button:O.Z,IonList:_.q_,IonImg:_.Xz,IonPopover:_.d8,IonContent:_.W2},methods:{...(0,E.nv)(P.U,["getAccount","delAccount"]),delAccountHandler(t){this.$data.loadingDel=!0;const e=new Promise((e=>{e(this.delAccount(t))}));e.then((()=>{this.$data.loadingDel=!1}))}},computed:{lcList(){return this.$pinia.state.value?.personalAccount?.getAccountResponse?.data?this.$pinia.state.value?.personalAccount?.getAccountResponse?.data:[]},lcList2(){return[...this.lcList.slice(1)]},delAccountMessage(){return this.$pinia.state.value?.personalAccount?.delAccountResponse?.message}},mounted(){this.getAccount()},data(){return{data:{number:"№123456789",name:"Иванов Иван Иванович",address:"Якутск, ул. Автодорожная 11/4",debt:"-680,92 руб.",penalties:"0 руб."},lcList3:[],loadingDel:!1}},setup(){const t=(0,I.tv)();return{router:t,pencilOutline:L.Tvs,documentTextOutline:L.L82,chevronForwardOutline:L.Dji,ellipsisVertical:L.LHl,trashOutline:L.gtu}}}),C=n(3744);const R=(0,C.Z)(v,[["render",W],["__scopeId","data-v-0de9eb49"]]);var U=R},1916:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASkSURBVHgB7ZtLehpHEMerGpD0ZaWcIHME5QRGuzzIZ/kEJicI2RiULEAriWyMTxB0AskxipZCJ4h9gkxu4CT+/AK6XN0IGaHp6ZlhXrL7twCJaXp6/nRXd3VVAzgcjgxByIDt1sn2q83qThWm/tv+A/8ul0ldoNr+qCUJHi99NKzR5GBx0632uTdB2QWgpqnMVWNbJPAnINhOWk/SMkh0MO3/0NN/Q4rUfjnbkZL+Mlwezm93o7GlLcMi7bJI4yqkyEzC/RDFm9wYsJCoDCG8xI89LXE9y0gU9/htLOATYEWcVPkkBMoSJ5CFwgTi0T+coagT4DDLMso+EcHAVo+JVI20CW6Yz4ZibickDCVMnsDVNCsBLqF9fiDUVIu0l2oZwoF88/4JDB68DKnHR4QdU9tTneZF56yLQL3Vz1mgnjz6/gBKiK3NzgZZcAJZcAJZcAJZyGUWW2XujNa6FDJ7ZIS/7KhGIXeBlDj/b22wQ0seFMAEq3VonXy9mPpt5D7EWJy9osSZg57Y3HgYtXTuAvHK9ysoGozu3OYukCB5CQUjqXIatWzuAqlNKLVKhYIgwhb0v3kRtXwhs5h2O9rnx9yd8h1ub969iGqcFxQikKb/rc+vPpQct1C04ASy4ASy4ASy4ASy4ASy4ASy4ASyUNxCMYRq+1lvJXFhPVRomqMg037jZ4hJ6XpQpfNsQIhdSDOczHXx5lxLRTAgJuUbYoiR92piV03Ugpg4G2ShdALxdsQAMoJ0TlA8SieQ2gphezFQMXVICR2fV5HSBEa6lLOYPNQPEvthssDZIAtOIAtOIAtOIAu3jDQv8+u8pLqfLCwsvaCUIwTZrHRGdUgThOHssHEMGXNDIL3MB/aBEmPKx0KPXzxIE4K6eDT6Uv7WyGzdpLgeYspBhLXEyR9EiO1bxUULpNLxtYN418Ds8qMXaIEmKOvgCEQLVIqEgpIS6mqovGKJ8XOLs6BCcgwFYPPFfDj8rvBsDE1nBEUQvlAkytwIlh0tEK9e/gm6iDnMEmXH0oPQCaRekKQfdJEKzSVcwbSB9uvZWjOw8ZwGze+nBZpC1Q/8ctruwRqQIZdITGEP1oGCBZICn+v69X8qmSnoF2IbNHdeS8E46ENcnNpJwPzZDKNEZaPBsg0ieB5U7ursZuEISU8Nl+qVR38kEolQ/G64NF6k6l0LxJHMwMxPHUtqnRRurFXyp9EO8YNutU88iMHcOTf0HvwY/bgWSM7EU0PhbbFZuyiDSMaQELdxgtWLKOZAZfpfR2+D7gHkL+8z3djA4U2tC36rB1dNbKewV5OTyzhnHdKGw8d/Y/jsOuRef6x73BJKmP++2HjIMfpWaKY/QtMokPoFWNkLsKG6usFmZY96OPSsxZbayD6lhxGWLCqwKI8aP96sZgWxP3qMBLFj2HcdNbTk2+mtQy63VtJXQbvM93rLBHFPkzTdDUoyD3Q1ZkeNpgr/wmeAOjIu3012wWBXQ089VzpnTR6XXSyTy5Ee4xmKnm07J9qx8P0/7wmiJi+KdpByPyWYGvr8PtGpFOI06j5XsnPzykGU6MFdAelfeP3ej3uQxeFwZM4H5HcdpunyONEAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=883.735f140f.js.map