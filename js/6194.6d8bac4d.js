"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[6194],{1870:function(e,t,n){n.d(t,{d:function(){return i}});n(7658);var r=n(6086),a=n(9669),s=n.n(a),l=n(5241);const i=(0,r.Q_)({id:"preEntry",state:()=>({entryPhone:"",entryServiceType:"",entryDate:null,entryAvailableTimes:[],entryTime:null}),getters:{getEntryInfo:e=>({entryPhone:e.entryPhone,entryServiceType:e.entryServiceType,entryDate:e.entryDate,entryAvailableTimes:e.entryAvailableTimes,entryTime:e.entryTime})},actions:{async setPhone(e){this.entryPhone=e},async setServiceType(e){this.entryServiceType=e},async setDate(e){this.entryDate=e},async setTime(e){this.entryTime=e},async fetchTime(){if(this.entryDate&&""!=this.entryServiceType)try{let t={headers:{Accept:"*/*","Content-Type":"multipart/form-data"}},n="android";(0,l.a)("iphone")&&(n="iphone");var e=new FormData;e.append("date",this.entryDate),e.append("service",this.entryServiceType),e.append("ionicDevice",n);const r=await s().post("https://aostng.ru/ajax/preregajax.php",e,t);let a=[];const i=/>([^<.]+)<\//g;let o=i.exec(r.data);while(null!=o)a.push(o[1]),o=i.exec(r.data);this.entryTime=null,this.entryAvailableTimes=a}catch(t){console.log(t)}},async sendFullInfo(e,t,n,r){console.log(e,t,n,r);try{let i={headers:{Accept:"*/*","Content-Type":"multipart/form-data"}},o="android";(0,l.a)("iphone")&&(o="iphone");var a=new FormData;return a.append("number",e),a.append("service",t),a.append("date",n),a.append("time",r),a.append("ionicDevice",o),await s().post("https://aostng.ru/prereg2.php",a,i),!0}catch(i){return!1}},async resetPreEntry(){this.entryPhone="",this.entryServiceType="",this.entryDate=null,this.entryAvailableTimes=[],this.entryTime=null}}})},2833:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(6252),a=n(3577);function s(e,t,n,s,l,i){const o=(0,r.up)("ion-text"),c=(0,r.up)("ion-icon");return(0,r.wg)(),(0,r.iD)("div",{class:"choose",onClick:t[0]||(t[0]=(...t)=>e.btnSrc&&e.btnSrc(...t))},[(0,r.Wm)(o,{class:"choose-text"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.name)+" ",1),!0===e.required?((0,r.wg)(),(0,r.j4)(o,{key:0,class:"dot"},{default:(0,r.w5)((()=>[(0,r.Uk)("*")])),_:1})):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(c,{class:"choose-icon",icon:e.caretDownSharp},null,8,["icon"])])}var l=n(2684),i=n(8903),o=n(2201),c=(0,r.aZ)({name:"buttonSelect",props:{name:String,btnSrc:Function,required:Boolean},components:{IonIcon:l.gu,IonText:l.yW},setup(){const e=(0,o.tv)();return{router:e,caretDownSharp:i.D2O}}}),u=n(3744);const d=(0,u.Z)(c,[["render",s],["__scopeId","data-v-793185f2"]]);var y=d},6194:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});n(7658);var r=n(6252),a=n(3577);const s=e=>((0,r.dD)("data-v-7dd26354"),e=e(),(0,r.Cn)(),e),l=s((()=>(0,r._)("p",{class:"main-text"}," С помощью данного сервиса физическим и юридическим лицам можно предварительно записаться на прием в Службу «Единого окна» по адресу г.Якутск, ул. Петра Алексеева, 64. ",-1))),i=s((()=>(0,r._)("p",{class:"main-text"}," На ваш номер телефона будет отправлен СМС с указанием номера брони, а также даты и времени записи. ",-1))),o=s((()=>(0,r._)("p",{class:"main-text"}," Прием документов производится только при полном пакете документов. ",-1))),c={class:"main-text"},u=s((()=>(0,r._)("p",{class:"title ion-text-start"},"Данные заявителя",-1))),d=s((()=>(0,r._)("p",{class:"sub-title"},"Вид услуг",-1))),y=s((()=>(0,r._)("p",null," Режим работы Службы «Единого окна» в будни с 08.00 до 17.00 Выходной: суббота, воскресенье ",-1))),p={class:"error"},m=s((()=>(0,r._)("p",{class:"title ion-text-start"},"Прием документов",-1)));function h(e,t,n,s,h,w){const f=(0,r.up)("Back"),v=(0,r.up)("ion-text"),T=(0,r.up)("Input"),_=(0,r.up)("ButtonSelect"),S=(0,r.up)("ion-icon"),g=(0,r.up)("ion-item"),k=(0,r.up)("Layout"),W=(0,r.up)("ion-page"),D=(0,r.Q2)("mask");return(0,r.wg)(),(0,r.j4)(W,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f,{logo:!0}),e.currentlySuccess?((0,r.wg)(),(0,r.j4)(k,{key:1,outlineBtn:".",filledBtn:"Вернуться",method:()=>e.reset(),title:"Предварительная запись"},{"main-content":(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[m])),_:1}),(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Дата приема: ")])),_:1}),(0,r.Wm)(v,{slot:"end",class:"text-end text-success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.entryDate),1)])),_:1})])),_:1}),(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Время приема: ")])),_:1}),(0,r.Wm)(v,{slot:"end",class:"text-end text-success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.entryTime),1)])),_:1})])),_:1})])),_:1},8,["method"])):((0,r.wg)(),(0,r.j4)(k,{key:0,height:"false",outlineBtn:".",filledBtn:"Оставить заявку",title:"Вид услуг",method:()=>e.sendPreregRequest()},{"header-content":(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[l])),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[i])),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[o])),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r._)("p",c,[(0,r.Wm)(v,{class:"main-subtitle"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Внимание! ")])),_:1}),(0,r.Uk)(" Согласно п. 9 ПП РФ №549, при подаче заявления на заключение договора на поставку газа, необходимо предоставить договор на техническое обслуживание со специализированной организацией. ")])])),_:1})])),"main-content":(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[u])),_:1}),(0,r.wy)((0,r.Wm)(T,{name:"Номер телефона",type:"tel",value:e.entryPhone,changeHandler:t=>e.preEntryStore.setPhone(t.target.value)},null,8,["value","changeHandler"]),[[D,"+7 (###) ###-##-##"]]),(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[d])),_:1}),(0,r.Wm)(_,{required:!0,name:""!==e.entryServiceType.trim()?e.formatServiceCode(e.entryServiceType):"Выберите вариант",btnSrc:()=>{e.router.push("/tabs/recordSelect")}},null,8,["name","btnSrc"]),(0,r._)("div",null,[(0,r.Wm)(g,{"router-link":"/tabs/date"},{default:(0,r.w5)((()=>[(0,r.Wm)(S,{size:"large",slot:"start",class:"icon-start",icon:e.calendarNumberOutline},null,8,["icon"]),(0,r.Wm)(v,{class:"sub-title"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.entryDate?e.entryDate:"Выберите дату записи"),1)])),_:1}),(0,r.Wm)(S,{size:"large",slot:"end",class:"icon-end",icon:e.chevronForwardOutline},null,8,["icon"])])),_:1}),(0,r.Wm)(g,{"router-link":"/tabs/time"},{default:(0,r.w5)((()=>[(0,r.Wm)(S,{size:"large",slot:"start",class:"icon-start",icon:e.alarmOutline},null,8,["icon"]),(0,r.Wm)(v,{class:"sub-title"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.entryTime?e.entryTime:"Выберите время записи"),1)])),_:1}),(0,r.Wm)(S,{class:"icon-end",size:"large",slot:"end",icon:e.chevronForwardOutline},null,8,["icon"])])),_:1})]),(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[y])),_:1}),""!==e.errorText?((0,r.wg)(),(0,r.j4)(v,{key:0},{default:(0,r.w5)((()=>[(0,r._)("p",p,(0,a.zw)(e.errorText),1)])),_:1})):(0,r.kq)("",!0)])),_:1},8,["method"]))])),_:1})}var w=n(2262),f=n(2201),v=n(222),T=n(6086),_=n(1870),S=n(2833),g=n(7244),k=n(2684),W=n(3994),D=n(8903),b=n(2982),x=(0,r.aZ)({name:"recordPage",components:{ButtonSelect:S.Z,IonPage:k._i,Back:g.Z,Layout:v.Z,IonItem:k.Ie,Input:W.Z,IonText:k.yW,IonIcon:k.gu},directives:{mask:b.mask},setup(){const e=(0,f.tv)(),t=(0,_.d)(),{entryPhone:n,entryServiceType:r,entryDate:a,entryTime:s}=(0,T.Jk)(t),{sendFullInfo:l,resetPreEntry:i}=(0,_.d)(),o=(0,w.iH)(""),c=(0,w.iH)(!1);return{router:e,caretDownSharp:D.D2O,chevronForwardOutline:D.Dji,calendarNumberOutline:D.Yap,alarmOutline:D.Iq6,preEntryStore:t,entryPhone:n,entryServiceType:r,entryDate:a,entryTime:s,errorText:o,sendFullInfo:l,currentlySuccess:c,resetPreEntry:i}},methods:{formatServiceCode(e){let t="Неверный код сервиса";switch(e){case"Q01":t="Прием документов";break;case"Q03":t="Заключение договора на поставку газа (квартира)";break;case"Q06":t="Социальная газификация";break}return t},sendPreregRequest(){let e=0;18===this.entryPhone.length&&e++,""!==this.entryServiceType&&"Неверный код сервиса"!==this.entryServiceType&&e++,this.entryDate&&e++,this.entryTime&&e++,4!==e?this.errorText="Все поля должны быть заполнены":(this.errorText="",this.sendFullInfo(this.entryPhone,this.entryServiceType,this.entryDate,this.entryTime).then((e=>{console.log(e),e&&(this.currentlySuccess=!0)})))},reset(){this.resetPreEntry(),this.currentlySuccess=!1}}}),I=n(3744);const P=(0,I.Z)(x,[["render",h],["__scopeId","data-v-7dd26354"]]);var z=P}}]);
//# sourceMappingURL=6194.6d8bac4d.js.map