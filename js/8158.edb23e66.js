"use strict";(self["webpackChunkstng"]=self["webpackChunkstng"]||[]).push([[8158],{1870:function(e,t,a){a.d(t,{d:function(){return p}});a(7658);var n=a(6086),r=a(9669),s=a.n(r),i=a(5241),l=a(3978);let o="https://fhd.aostng.ru/vesta/hs/API_STNG/V2/";const p=(0,n.Q_)({id:"preEntry",state:()=>({entryPhone:"",entryServiceType:"",entryDate:null,entryAvailableTimes:[],entryTime:null,entryNumber:null,availableDates:null,availableDatesError:null,availableTimeSlots:null,availableTimeSlotsError:null,postReserveResponse:null,postReserveError:null,deleteReserveError:null,deleteReserveResponse:null,reserveData:null,getReserveResponse:null,getReserveError:null}),getters:{getEntryInfo:e=>({entryPhone:e.entryPhone,entryServiceType:e.entryServiceType,entryDate:e.entryDate,entryAvailableTimes:e.entryAvailableTimes,entryTime:e.entryTime})},actions:{async getDates(e){try{await s().get(`${o}/elGetDatas?operation=${e}`).then((e=>this.availableDates=e.data))}catch(t){this.availableDatesError=t}},async getTimeSlots(e,t){try{await s().get(`${o}/elGetTimes?operation=${e}&date=${t}`).then((e=>this.availableTimeSlots=e.data))}catch(a){this.availableTimeSlotsError=a}},async postReserve(e){try{await s().post(`${o}/elReserve`,e).then((e=>this.postReserveResponse=e.data))}catch(t){this.postReserveError=t}},async deleteReserve(e){try{await s().get(`${o}/elDelete?id=${e}`).then((e=>this.deleteReserveResponse=e.data))}catch(t){this.deleteReserveError=t}},async getReserve(){const e=new l.K;await e.create();const t=await e.get("token"),a=JSON.parse(t);try{await s().get(`${o}/elQueye?token=${a?.token}`).then((e=>this.getReserveResponse=e.data))}catch(n){this.getReserveError=n}},async setPhone(e){this.entryPhone=e},async setServiceType(e){this.entryServiceType=e},async setDate(e){this.entryDate=e},async setTime(e){this.entryTime=e},async fetchTime(){if(this.entryDate&&""!=this.entryServiceType)try{let t={headers:{Accept:"*/*","Content-Type":"multipart/form-data"}},a="android";(0,i.a)("iphone")&&(a="iphone");var e=new FormData;e.append("date",this.entryDate),e.append("service",this.entryServiceType),e.append("ionicDevice",a);const n=await s().post("https://aostng.ru/ajax/preregajax.php",e,t);let r=[];const l=/>([^<.]+)<\//g;let o=l.exec(n.data);while(null!=o)r.push(o[1]),o=l.exec(n.data);this.entryTime=null,this.entryAvailableTimes=r}catch(t){console.log(t)}},async sendFullInfo(e,t,a,n){console.log(e,t,a,n);try{let l={headers:{Accept:"*/*","Content-Type":"multipart/form-data"}},o="android";(0,i.a)("iphone")&&(o="iphone");var r=new FormData;return r.append("number",e),r.append("service",t),r.append("date",a),r.append("time",n),r.append("ionicDevice",o),await s().post("https://aostng.ru/prereg2.php",r,l).then((e=>{this.entryNumber=e.data.split("Номер вашей брони - </span>")[1]})),!0}catch(l){return!1}},async resetPreEntry(){this.entryPhone="",this.entryServiceType="",this.entryDate=null,this.entryAvailableTimes=[],this.entryTime=null}}})},8158:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var n=a(6252),r=a(9963),s=a(3577);function i(e,t,a,i,l,o){const p=(0,n.up)("Back"),c=(0,n.up)("ion-datetime"),h=(0,n.up)("ion-text"),u=(0,n.up)("ion-item"),d=(0,n.up)("Layout"),y=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p),(0,n.Wm)(d,{height:"false",filledBtn:"Готово",outlineBtn:".",btnSrc:"/tabs/record",method:()=>e.clickFilledBtn(),title:!0===e.time?"Выберите время":"Выберите дату"},{"main-content":(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(c,{color:"date",presentation:"date",onIonChange:e.onDateChange,mode:"ios",dayValues:e.availableDates},null,8,["onIonChange","dayValues"]),[[r.F8,e.availableDatesData?.data?.length>0]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(u,{lines:"none","router-link":"/tabs/record"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)("Выберите вид услуг")])),_:1})])),_:1})],512),[[r.F8,!e.reserveData?.operation&&!e.availableDatesData]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(u,{lines:"none","router-link":"/tabs/record"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)("Свободных дней нет")])),_:1})])),_:1})],512),[[r.F8,0===e.availableDatesData?.data?.length&&e.reserveData?.operation]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(u,{lines:"none","router-link":"/tabs/record"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{class:"sub-title"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.availableDatesData?.message),1)])),_:1})])),_:1})],512),[[r.F8,!0===e.availableDatesData?.error]])])),_:1},8,["method","title"])])),_:1})}var l=a(2201),o=a(1993),p=a(23),c=a(7821),h=a(381),u=a.n(h),d=a(1870),y=(0,n.aZ)({name:"timePage",props:{time:Boolean},data(){return{availableDates:"1"}},components:{IonPage:c._i,Back:p.Z,IonDatetime:c.x4,Layout:o.Z,IonText:c.yW,IonItem:c.Ie},setup(){const e=(0,l.tv)(),{getTimeSlots:t}=(0,d.d)();return{router:e,getTimeSlots:t}},computed:{reserveData(){return this.$pinia.state.value.preEntry.reserveData},availableDatesData(){return this.$pinia.state.value.preEntry.availableDates}},ionViewDidEnter(){this.$data.availableDates="",this.$pinia.state.value.preEntry.availableDates?.data?.forEach((e=>{this.$data.availableDates+=`${e.slice(-2)},`}))},methods:{onDateChange(e){this.$pinia.state.value.preEntry.reserveData={date:u()(e.detail.value).format("yyyy-MM-DD"),...this.reserveData}},clickFilledBtn(){!1===this.time&&this.getTimeSlots(this.reserveData?.operation,this.reserveData?.date)}}}),v=a(3744);const m=(0,v.Z)(y,[["render",i],["__scopeId","data-v-446d8350"]]);var D=m}}]);
//# sourceMappingURL=8158.edb23e66.js.map