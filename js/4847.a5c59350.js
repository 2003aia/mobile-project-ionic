"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[4847],{1870:function(e,t,n){n.d(t,{d:function(){return l}});var a=n(1575),i=n(9669),r=n.n(i),s=n(5241);const l=(0,a.Q_)({id:"preEntry",state:()=>({entryPhone:"",entryServiceType:"",entryDate:null,entryAvailableTimes:[],entryTime:null}),getters:{getEntryInfo:e=>({entryPhone:e.entryPhone,entryServiceType:e.entryServiceType,entryDate:e.entryDate,entryAvailableTimes:e.entryAvailableTimes,entryTime:e.entryTime})},actions:{async setPhone(e){this.entryPhone=e},async setServiceType(e){this.entryServiceType=e},async setDate(e){this.entryDate=e},async setTime(e){this.entryTime=e},async fetchTime(){if(this.entryDate&&""!=this.entryServiceType)try{let t={headers:{Accept:"*/*","Content-Type":"multipart/form-data"}},n="android";(0,s.a)("iphone")&&(n="iphone");var e=new FormData;e.append("date",this.entryDate),e.append("service",this.entryServiceType),e.append("ionicDevice",n);const a=await r().post("https://aostng.ru/ajax/preregajax.php",e,t);let i=[];const l=/>([^<.]+)<\//g;let o=l.exec(a.data);while(null!=o)i.push(o[1]),o=l.exec(a.data);this.entryTime=null,this.entryAvailableTimes=i}catch(t){console.log(t)}},async sendFullInfo(e,t,n,a){console.log(e,t,n,a);try{let l={headers:{Accept:"*/*","Content-Type":"multipart/form-data"}},o="android";(0,s.a)("iphone")&&(o="iphone");var i=new FormData;return i.append("number",e),i.append("service",t),i.append("date",n),i.append("time",a),i.append("ionicDevice",o),await r().post("https://aostng.ru/prereg2.php",i,l),!0}catch(l){return!1}},async resetPreEntry(){this.entryPhone="",this.entryServiceType="",this.entryDate=null,this.entryAvailableTimes=[],this.entryTime=null}}})},4847:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(6252),i=n(3577);const r=(0,a.Uk)("Выберите время"),s=(0,a.Uk)("Выберите вид услуг и дату записи");function l(e,t,n,l,o,c){const y=(0,a.up)("Back"),p=(0,a.up)("ion-text"),u=(0,a.up)("ion-item"),m=(0,a.up)("ion-list"),d=(0,a.up)("Layout"),h=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,{title:"Назад"}),(0,a.Wm)(d,{outlineBtn:".",filledBtn:".",title:"Выбор времени"},{"main-content":(0,a.w5)((()=>[(0,a.Wm)(p,{class:"title"},{default:(0,a.w5)((()=>[r])),_:1}),e.entryAvailableTimes.length>0?((0,a.wg)(),(0,a.j4)(m,{key:0},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.entryAvailableTimes,(t=>((0,a.wg)(),(0,a.j4)(u,{key:t,"router-link":"/tabs/record",onClick:n=>e.selectTime(t)},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"sub-title"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):((0,a.wg)(),(0,a.j4)(m,{key:1},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"router-link":"/tabs/record",onClick:t[0]||(t[0]=t=>e.selectTime(null))},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"sub-title"},{default:(0,a.w5)((()=>[s])),_:1})])),_:1})])),_:1}))])),_:1})])),_:1})}var o=n(2119),c=n(3875),y=n(297),p=n(4043),u=n(1575),m=n(1870),d=(0,a.aZ)({name:"recordTime",components:{IonPage:y._i,IonList:y.q_,Layout:c.Z,IonItem:y.Ie,Back:p.Z,IonText:y.yW},setup(){const e=(0,o.tv)(),t=(0,m.d)(),{setTime:n}=(0,m.d)(),{entryAvailableTimes:a,entryTime:i}=(0,u.Jk)(t);return{router:e,entryAvailableTimes:a,entryTime:i,setTime:n}},methods:{selectTime(e){e&&"На данную дату свободного времени нет"!=e&&this.setTime(e)}}}),h=n(3744);const T=(0,h.Z)(d,[["render",l],["__scopeId","data-v-5e527aa4"]]);var v=T}}]);
//# sourceMappingURL=4847.a5c59350.js.map