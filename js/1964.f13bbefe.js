"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[1964],{7698:function(e,t,a){a.d(t,{O:function(){return o}});var n=a(1575),l=a(9669),r=a.n(l);const o=(0,n.Q_)({id:"profile",state:()=>({profileResponse:null,profileError:null,editProfileError:null,editProfileResponse:null}),getters:{getPostsPerAuthor:e=>t=>e.posts.filter((e=>e.userId===t))},actions:{async getProfile(e){try{await r().post("https://api.aostng.ru/api/v2/user/profile/get/",{token:e}).then((e=>this.profileResponse=e.data))}catch(t){this.profileError=t}},async editProfile(e,t,a){try{await r().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Profile",{token:e,name:t,email:a}).then((e=>this.editProfileResponse=e.data))}catch(n){this.editProfileError=n}}}})},1964:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var n=a(6252),l=a(3577);const r=e=>((0,n.dD)("data-v-b1d13b5c"),e=e(),(0,n.Cn)(),e),o=r((()=>(0,n._)("p",{class:"title ion-text-start"},"Мои данные",-1))),i=r((()=>(0,n._)("p",{class:"sub-title"},"Имя",-1))),s={class:"sub-title"},u={class:"sub-title"},d=r((()=>(0,n._)("p",null,"Контактный телефон",-1)));function p(e,t,a,r,p,c){const f=(0,n.up)("Back"),m=(0,n.up)("ion-text"),h=(0,n.up)("Input"),g=(0,n.up)("ion-item"),v=(0,n.up)("ion-list"),w=(0,n.up)("Layout"),_=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{btnSrc:()=>e.router.push("profile")},null,8,["btnSrc"]),(0,n.Wm)(w,{height:"false",method:e.editProfileHandler,method2:()=>{e.router.push("/profileSend")},loading:e.loading,filledBtn:"Сохранить",title:"Личный кабинет",outlineBtn:"Изменить пароль"},{"main-content":(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[o])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(h,{onUpdated:t[0]||(t[0]=t=>e.name=t),changeHandler:e.nameChange,value:e.name,name:"Укажите имя"},null,8,["changeHandler","value"]),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n._)("p",s,(0,l.zw)(e.data.email),1)])),_:1}),(0,n.Wm)(h,{name:"Электронная почта",value:e.email,changeHandler:e.emailChange},null,8,["value","changeHandler"]),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n._)("p",u,(0,l.zw)(e.login),1),d])),_:1})])),_:1})])),_:1}),e.profileError?.response?.data?.error?((0,n.wg)(),(0,n.j4)(m,{key:0,class:"error"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.profileError?.response?.data?.error),1)])),_:1})):(0,n.kq)("",!0)])),_:1},8,["method","method2","loading"])])),_:1})}var c=a(2262),f=a(2119),m=a(3875),h=a(297),g=a(3327),v=a(4043),w=a(1575),_=a(7698),P=a(3978),k=(0,n.aZ)({name:"profleEditPage",data(){return{codeSent:!1,edit:!1,data:{name:"Иван",surname:"Иванов",secondname:"Иванович",email:"Pochta@mail.ru",phone:"+7(996)-915-88-31"}}},components:{Input:g.Z,Back:v.Z,IonPage:h._i,IonList:h.q_,Layout:m.Z,IonItem:h.Ie,IonText:h.yW},setup(){const e=(0,f.tv)(),{profileResponse:t,profileError:a}=(0,w.Jk)((0,_.O)()),{editProfile:n}=(0,_.O)();let l=(0,c.iH)("");const r=(0,c.iH)(""),o=(0,c.iH)(""),i=(0,c.iH)("");let s=null,u=null,d=(0,c.iH)(!1);const p=async()=>{const e=new P.K;await e.create(),s=await e.get("token"),u=JSON.parse(s),l.value=u?.name,o.value=u?.email,i.value=u?.phone},m=async()=>{d.value=!0,n(JSON.parse(s)?.token,l.value,o.value).then((async()=>{d.value=!1;const e=new P.K;await e.create();const t={...u,name:l.value,email:o.value};await e.set("token",JSON.stringify(t))}))},g=e=>{l.value=e.target.value},v=e=>{r.value=e.target.value},k=e=>{o.value=e.target.value};return(0,h.Yr)((()=>{p()})),{loading:d,profileResponse:t,profileError:a,router:e,editProfileHandler:m,nameChange:g,surnameChange:v,emailChange:k,surname:r,name:l,email:o,login:i}}}),y=a(3744);const b=(0,y.Z)(k,[["render",p],["__scopeId","data-v-b1d13b5c"]]);var H=b}}]);
//# sourceMappingURL=1964.f13bbefe.js.map