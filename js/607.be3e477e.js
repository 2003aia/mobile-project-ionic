"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[607],{7843:function(e,a,s){s.d(a,{s:function(){return l}});var t=s(1575),n=s(9669),o=s.n(n),r=s(3978);const l=(0,t.Q_)({id:"appeals",state:()=>({appealsListResponse:null,appealsListError:null,appealsInfoError:null,appealsInfoResponse:null,createAppealResponse:null,createMessageResponse:null,createAppealError:null,createMessageError:null,appealsCategoriesResponse:null,appealsCategoriesError:null}),getters:{getPostsPerAuthor:e=>a=>e.posts.filter((e=>e.userId===a))},actions:{async getAppealsList(e){try{this.appealsListResponse=await o().post("https://api.aostng.ru/api/v2/support/list/",{token:e}).then((e=>e.data))}catch(a){this.appealsListError=a}},async getAppealsInfo(e,a){const s=new r.K;await s.create();try{this.appealsInfoResponse=await o().post("https://api.aostng.ru/api/v2/support/detail/",{token:e,ticketId:a}).then((e=>e.data)).catch((e=>{this.appealsInfoError=e}))}catch(t){this.appealsInfoError=t}},async getAppealsCategoreis(){try{this.appealsCategoriesResponse=await o().get("https://api.aostng.ru/api/v2/support/categories/").then((e=>e.data)).catch((e=>{this.appealsCategoriesError=e}))}catch(e){this.appealsCategoriesError=e}},async createMessage(e,a,s,t){const n=new r.K;await n.create();try{this.createMessageResponse=await o().post("https://api.aostng.ru/api/v2/support/message/",{token:e,message:a,category:s,ticketId:t}).then((e=>e.data)).catch((e=>{this.createMessageError=e}))}catch(l){this.createMessageError=l}},async createAppeal(e,a,s){const t=new r.K;await t.create();try{this.createAppealResponse=await o().post("https://api.aostng.ru/api/v2/support/create/",{token:e,message:a,category:s}).then((e=>e.data)).catch((e=>{this.createAppealError=e}))}catch(n){this.createAppealError=n}}}})},2833:function(e,a,s){s.d(a,{Z:function(){return A}});var t=s(6252),n=s(3577);const o=(0,t.Uk)("*");function r(e,a,s,r,l,i){const p=(0,t.up)("ion-text"),c=(0,t.up)("ion-icon");return(0,t.wg)(),(0,t.iD)("div",{class:"choose",onClick:a[0]||(a[0]=(...a)=>e.btnSrc&&e.btnSrc(...a))},[(0,t.Wm)(p,{class:"choose-text"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.name)+" ",1),!0===e.required?((0,t.wg)(),(0,t.j4)(p,{key:0,class:"dot"},{default:(0,t.w5)((()=>[o])),_:1})):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(c,{class:"choose-icon",icon:e.caretDownSharp},null,8,["icon"])])}var l=s(297),i=s(8903),p=s(2119),c=(0,t.aZ)({name:"buttonSelect",props:{name:String,btnSrc:Function,required:Boolean},components:{IonIcon:l.gu,IonText:l.yW},setup(){const e=(0,p.tv)();return{router:e,caretDownSharp:i.D2O}}}),u=s(3744);const g=(0,u.Z)(c,[["render",r],["__scopeId","data-v-793185f2"]]);var A=g},607:function(e,a,s){s.r(a),s.d(a,{default:function(){return K}});var t=s(6252),n=s(3577);const o={key:0},r={slot:"content"},l={key:1},i={key:0,class:"message"},p={class:"message-main"},c={class:"message-footer"},u={key:1,class:"message-left"},g={class:"message-main"},A={class:"message-footer"},d={key:2,class:"loading"},w={class:"input-container"},m={for:"file"},h=["value"],I={key:0,class:"chip-container"};function f(e,a,f,y,k,B){const C=(0,t.up)("Back"),v=(0,t.up)("ion-text"),E=(0,t.up)("ButtonSelect"),S=(0,t.up)("ion-item"),D=(0,t.up)("ion-list"),F=(0,t.up)("ion-accordion"),W=(0,t.up)("ion-accordion-group"),U=(0,t.up)("ion-spinner"),x=(0,t.up)("Layout"),H=(0,t.up)("ion-img"),K=(0,t.up)("ion-input"),L=(0,t.up)("ion-icon"),Q=(0,t.up)("ion-chip"),M=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(C,{onClick:a[0]||(a[0]=()=>e.checkStatus=!1),btnSrc:()=>{e.router.push("/appeals")}},null,8,["btnSrc"]),(0,t.Wm)(x,{height:"false",outlineBtn:".",method:()=>e.checkStatus=!1,filledBtn:".",title:"Мои обращения"},{"main-content":(0,t.w5)((()=>[(0,t.Wm)(v,{class:"title"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.route.params.newAppeal?"Новое обращение":`Обращение №${e.route.params?.id?e.route.params.id:""}`),1)])),_:1}),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[!e.route.params.newAppeal&&e.category?((0,t.wg)(),(0,t.iD)("p",o,(0,n.zw)(e.category),1)):(0,t.kq)("",!0)])),_:1}),e.route.params?.newAppeal?((0,t.wg)(),(0,t.j4)(W,{key:0},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{"toggle-icon":e.caretDownSharp,value:"second"},{default:(0,t.w5)((()=>[(0,t.Wm)(E,{class:"btn-select",slot:"header",name:e.selected?.category?e.selected.category:"Выберите категорию обращения"},null,8,["name"]),(0,t._)("div",r,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.appealsCategoriesResponse.data,(a=>((0,t.wg)(),(0,t.j4)(D,{key:a.id},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{onClick:s=>e.selectCategorie(a)},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{class:"sub-title"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(a.category),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])])),_:1},8,["toggle-icon"])])),_:1})):(0,t.kq)("",!0),e.route.params.title&&e.appealsInfoMessages?((0,t.wg)(),(0,t.iD)("div",l,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.appealsInfoMessages,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.id},[0==e.support_message?((0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("div",p,[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.message),1)])),_:2},1024)]),(0,t._)("div",c,[(0,t.Wm)(v,{class:"message-text"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.date_create),1)])),_:2},1024)])])):(0,t.kq)("",!0),1==e.support_message?((0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",g,[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.message),1)])),_:2},1024)]),(0,t._)("div",A,[(0,t.Wm)(v,{class:"message-text"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.date_create),1)])),_:2},1024)])])):(0,t.kq)("",!0)])))),128))])):(0,t.kq)("",!0),e.appealsInfoMessages&&e.category?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(U,{name:"bubbles"})]))])),_:1},8,["method","filledBtn"]),(0,t._)("div",w,[(0,t.Wm)(S,{lines:"none",class:"input-wrapper"},{default:(0,t.w5)((()=>[(0,t._)("label",m,[(0,t._)("input",{value:e.files.value,onChange:a[1]||(a[1]=(...a)=>e.filesChange&&e.filesChange(...a)),class:"input-file",multiple:"",id:"file",type:"file"},null,40,h),(0,t.Wm)(H,{class:"input-icon-left",slot:"start",src:s(5148)},null,8,["src"])]),(0,t.Wm)(K,{value:e.message.value,onChange:e.messageChange,class:"input",placeholder:"Напишите сообщение"},null,8,["value","onChange"]),(0,t.Wm)(H,{onClick:a[2]||(a[2]=()=>{e.route.params?.newAppeal?e.createAppealHandler():e.createMessageHandler()}),class:"input-icon",slot:"end",src:s(3671)},null,8,["src"])])),_:1}),e.files?((0,t.wg)(),(0,t.iD)("div",I,[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.files),1)])),_:1}),(0,t.Wm)(L,{icon:e.close},null,8,["icon"])])),_:1})])):(0,t.kq)("",!0)])])),_:1})}var y=s(2262),k=s(2119),B=s(3875),C=s(4043),v=s(2833),E=s(8903),S=s(297),D=s(1575),F=s(3978),W=s(7843),U=(0,t.aZ)({name:"appealsMessages",components:{IonPage:S._i,Layout:B.Z,IonText:S.yW,Back:C.Z,IonItem:S.Ie,ButtonSelect:v.Z,IonAccordion:S.We,IonImg:S.Xz,IonList:S.q_,IonChip:S.hM,IonIcon:S.gu,IonSpinner:S.PQ,IonAccordionGroup:S.eh},data(){return{checkStatus:!1,newAppeal:!1,categories:[{name:"Вопросы по подключению (технологического подключения)"},{name:"Вопросы по договорам поставки газа для физических лиц"},{name:"Вопросы по подключению (технологического подключения)"}]}},setup(){const e=(0,k.tv)(),a=(0,k.yj)(),s=(0,y.iH)(""),t=new F.K,n=(0,y.iH)(""),o=(0,y.iH)([]),{appealsCategoriesResponse:r,createAppealResponse:l,appealsInfoResponse:i,createMessageResponse:p}=(0,D.Jk)((0,W.s)()),{getAppealsCategoreis:c,createAppeal:u,getAppealsInfo:g,createMessage:A}=(0,W.s)();let d=(0,y.iH)(""),w=(0,y.iH)("");const m=e=>{s.value=e},h=()=>{c().then((()=>{r.value?.data.filter((e=>{e.id===JSON.parse(a.params.category_id)&&(n.value=e.category)}))}))},I=async()=>{await t.create();const e=await t.get("token"),s=JSON.parse(e)?.token;a.params?.id&&g(s,a.params?.id).then((()=>{o.value=i.value?.data.reverse()}))},f=async()=>{await t.create();const e=await t.get("token"),a=JSON.parse(e).token;""!==d.value&&u(a,d.value,s.value?.id).then((()=>{console.log("test",l)}))},B=async()=>{await t.create();const e=await t.get("token"),s=JSON.parse(e).token;console.log("route,params test",a.params,d.value),""!==d.value&&A(s,d.value,a.params.category_id,a.params.id).then((()=>{console.log("test",p.value)}))},C=e=>{d.value=e.currentTarget.value},v=e=>{console.log(e,"files onchange"),w.value=e.currentTarget.value};return(0,S.Yr)((()=>{h(),I()})),{router:e,route:a,messageChange:C,message:d,files:w,filesChange:v,caretDownSharp:E.D2O,close:E.xvD,selectCategorie:m,createAppealHandler:f,createMessageHandler:B,selected:s,category:n,appealsInfoMessages:o,appealsCategoriesResponse:r}}}),x=s(3744);const H=(0,x.Z)(U,[["render",f],["__scopeId","data-v-09f683ee"]]);var K=H},5148:function(e){e.exports="data:image/png;base64,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"},3671:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZ+SURBVHgB7Z1RVttGFIbvSHZCe057yApqdpAd1HnrKeSUrMBmBXafgPQB84R9+hB7BTErABq7fYyzgqQrgB3Ep+QUYqO5uSPbJAZJaEYzlizP90KiMQLr19z/3jsjA2CxWCwWi8VisVgsFovFYrFYFgKDBLh7/SoAVhBYiQFe0Nm63tHWMVhioyyAu9fr0pfK/REhBGsU+fjddevFBVgiURJgeue/jn4VCQFsUMTxoRUiHCUBnP3ee4bwVOJbulaIYBRnQA9BjYH1iXnUZsBe/5xMtwTKTHzCCqEuwAEJ0IDE4AWFsuMC3HRXNTypZUEHJ+vuqHgOCOt3h5DBkAUcj8FK+oQDKhy+GIoMJ2iIIQ49dDeoNuiCHNUxK56Tv7wu7L4pw4qgJgDBOO+EjJQopJR4c3NHCEH/3yExLiA+VWTsrbPbe+/u9yqQcxJWwr239KUcMDTwmlvP5l/br1LqdCBv3hPD/uFqfDZsi5mXLxIJ4Lzs1xjHdtAYxfONwHi+//fPLvIGBAsXQT4LO+UQJODF0TFJGHhXjtij4PBx9Os7MTvkfYKV4BufWNs9KUEOSDQDBKEpKcLQ+zzegIfCxu4/JYfxA/pXWaG2GJDpH960ng9gSUksgJ+Sfi5+DBpCZHXe2uzEOk+dzrP2aDuJTyxjYZdcAJAz43jnI8NmWJPsN4EQwuGs47Lx6bL4hBYBRN4uUsfAH4D4TDlEkGE7iFWaEVWQZykKOy0CCHTPgjmmPqEqBN0Ex1n1CW0CRKWk3vX4CejI4SdCiOyqqmLYWezEahMgsj8ErEGV8SFoJGlhlxUh9AkAGlJSBWbr0qBQ2DFkpwUYd9L0iUSF2F24A2eBAwzW3e+Kv4EBvOZmV7Wwo85tPe3CTusMEBg14zgkKexoRjDgnUUatnYBjKWkspAQLuPlrPuEdgEE1Eb+CMGLMiJc7MCCSWrYJrfYGBEgDTOOhejEAtapR7It9X2i4YhwaqKwMyLAolNSaRIWdo7HOuM/Nz+ABswIAP7eoVfUy6nfGxCzoLX1BLKAEMLxamS+22kVdsYEyIwZxyStws6YAILUU1IFkhV28ltsjAqwbLNgjgV1YrVWwnfxL3DIkiUHZqQy1gYtnc52dogKG0PeRwj+0mlht/fqoRcanQECfbvolhMKS+2b1tbvYeNGZ4CAPx51QO7uyRWi3wR/9H8KGzcuQNQuulXB5VgOGzMvgABXdwY8hHEB1qjYAbVMIjd41EsKGzMuwMjx5PouOQPJhCEiHS2AYWjVqSZi0F3oSJen0BmVZb1+sv7pcaGODr0PyW334uLziAxIYFSAaVVZChrjVKhAhvGLSMepXc46pzEfyvLrBU43FxS60Prl3wd/DhgFw7aXDyCj+3Wm1fsBilYExn8Uzr/wyNr8itJuiXa7MQGE+Y7BKwcOUhcRMoQIM/99/6jCONRRshmHohnnOG3+/+hYZZ3DmADjybrsPcQvzI+eZ2JLyCy+X1J8ZxxlH6saeMxpiJYFJMCIANO7vxo4iE4bUqb4sv8UPaxcOlD1jVXuoVstF36GEQHo7i+HjXEYnUFKzOI7F5Wp6ILJGKuI70hhRrN3mQpBIeGHYn8K5uvu/7VNM6+Gkj1+VWOVQbsAkzcbknoypwsLIkn+DtPlRr6AbSkGZoBbCSy8ED5AU0/cjOJbY007vsdBqwC++WJw64E5YNR8J/HdqVzO+k5S8R1O/dm5wAs/Q6sAaaSec4UTmC+cdKM7BJWDD+tdD/haOOG2tLH6j7s63bQv/AxtAiyi75OFwkk3OmeAsdRTeMsNeLUsFE660SKAH4dBf+o5i++3PSXpjuS4k9Wm3wwtAojsI7jnT/FW4c6bN1aZ3yMbxipDYgGi+j6MsQbE5LZwIjGlO5KixnBZV7UjmSaJBYhMPa9uHuz73Cuc5AL8JL43sxnf46AjBJWDD1PqGXE33hZOjFacJI3VX85MqXDSTSIBVFLPe4WTbEfyenniexwSzoD4S45fP+Y4/8Yqg7IAYlGDh+34mi45znckFQonuvDQ3Ext/WARKAvAOdSCjgvz/ZHM99Pum8aydCTTRGl3tJ96Mu885IxD6f0zkls58oTSDIhacpS5+HmP73FQEmD6YUrKJN3KkSfUPACZbME0Y6XiexzUBGA4tMaqB9UsSKxuRX6eW14LJ91o/xMm9sLLYf+Ij8VisVgsFovFYrFYLBaLxWJZDb4A4KIS3WI1bzYAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=607.be3e477e.js.map