"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[1018],{1870:function(e,t,n){n.d(t,{d:function(){return s}});var a=n(1575),r=n(9669),i=n.n(r),o=n(5241);const s=(0,a.Q_)({id:"preEntry",state:()=>({entryPhone:"",entryServiceType:"",entryDate:null,entryAvailableTimes:[],entryTime:null}),getters:{getEntryInfo:e=>({entryPhone:e.entryPhone,entryServiceType:e.entryServiceType,entryDate:e.entryDate,entryAvailableTimes:e.entryAvailableTimes,entryTime:e.entryTime})},actions:{async setPhone(e){this.entryPhone=e},async setServiceType(e){this.entryServiceType=e},async setDate(e){this.entryDate=e},async setTime(e){this.entryTime=e},async fetchTime(){if(this.entryDate&&""!=this.entryServiceType)try{let t={headers:{Accept:"*/*","Content-Type":"multipart/form-data"}},n="android";(0,o.a)("iphone")&&(n="iphone");var e=new FormData;e.append("date",this.entryDate),e.append("service",this.entryServiceType),e.append("ionicDevice",n);const a=await i().post("https://aostng.ru/ajax/preregajax.php",e,t);let r=[];const s=/>([^<.]+)<\//g;let c=s.exec(a.data);while(null!=c)r.push(c[1]),c=s.exec(a.data);this.entryTime=null,this.entryAvailableTimes=r}catch(t){console.log(t)}},async sendFullInfo(e,t,n,a){console.log(e,t,n,a);try{let s={headers:{Accept:"*/*","Content-Type":"multipart/form-data"}},c="android";(0,o.a)("iphone")&&(c="iphone");var r=new FormData;return r.append("number",e),r.append("service",t),r.append("date",n),r.append("time",a),r.append("ionicDevice",c),await i().post("https://aostng.ru/prereg2.php",r,s),!0}catch(s){return!1}},async resetPreEntry(){this.entryPhone="",this.entryServiceType="",this.entryDate=null,this.entryAvailableTimes=[],this.entryTime=null}}})},1018:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(6252);function r(e,t,n,r,i,o){const s=(0,a.up)("Back"),c=(0,a.up)("ion-datetime"),l=(0,a.up)("Layout"),p=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s),(0,a.Wm)(l,{height:"false",filledBtn:"Готово",outlineBtn:".",btnSrc:e.returnTo,method:()=>e.clickFilledBtn(),title:!0===e.time?"Выберите время":"Выберите дату"},{"main-content":(0,a.w5)((()=>[!0===e.time?((0,a.wg)(),(0,a.j4)(c,{key:0,color:"date",mode:"ios",presentation:"time",onIonChange:e.onDateChange},null,8,["onIonChange"])):(0,a.kq)("",!0),!1===e.time?((0,a.wg)(),(0,a.j4)(c,{key:1,color:"date","is-date-enabled":e.isDateEnabled,"first-day-of-week":"1",presentation:"date",onIonChange:e.onDateChange,mode:"ios",min:e.today,max:e.maxDay},null,8,["is-date-enabled","onIonChange","min","max"])):(0,a.kq)("",!0)])),_:1},8,["btnSrc","method","title"])])),_:1})}var i=n(2119),o=n(3875),s=n(4043),c=n(297);function l(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function p(e){l(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function y(e){l(1,arguments);var t=p(e),n=t.getDay();return 0===n||6===n}var h=n(1870),d=(0,a.aZ)({name:"timePage",props:{time:Boolean},components:{IonPage:c._i,Back:s.Z,IonDatetime:c.x4,Layout:o.Z},setup(){const e=(0,i.tv)();let t=e.options.history.state.back,n=null;const a=e=>{const t=new Date(e);return!y(t)},{setDate:r,fetchTime:o}=(0,h.d)();let s=(new Date).toISOString(),c=new Date;return c.setDate(c.getDate()+5),c=c.toISOString(),{router:e,returnTo:t,selectedDateTime:n,isDateEnabled:a,setDate:r,fetchTime:o,today:s,maxDay:c}},methods:{onDateChange(e){this.selectedDateTime=new Date(e.detail.value).toLocaleDateString().replace("/",".")},clickFilledBtn(){!1===this.time&&"/tabs/record"==this.returnTo&&(this.setDate(this.selectedDateTime),this.fetchTime())}}}),u=n(3744);const m=(0,u.Z)(d,[["render",r],["__scopeId","data-v-b99d6400"]]);var g=m}}]);
//# sourceMappingURL=1018.fd605265.js.map