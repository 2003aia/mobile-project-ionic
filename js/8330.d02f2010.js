"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[8330],{7698:function(t,e,n){n.d(e,{O:function(){return r}});var a=n(1575),l=n(9669),o=n.n(l);const r=(0,a.Q_)({id:"profile",state:()=>({profileResponse:null,profileError:null,editProfileError:null,editProfileResponse:null}),getters:{getPostsPerAuthor:t=>e=>t.posts.filter((t=>t.userId===e))},actions:{async getProfile(t){try{await o().post("https://api.aostng.ru/api/v2/user/profile/get/",{token:t}).then((t=>this.profileResponse=t.data))}catch(e){this.profileError=e}},async editProfile(t,e,n){try{await o().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Profile",{token:t,name:e,email:n}).then((t=>this.editProfileResponse=t.data))}catch(a){this.editProfileError=a}}}})},8330:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=n(6252),l=n(3577);const o=t=>((0,a.dD)("data-v-890f7d82"),t=t(),(0,a.Cn)(),t),r=o((()=>(0,a._)("p",{class:"title ion-text-start"},"Мои данные",-1))),s={class:"sub-title"},i=o((()=>(0,a._)("p",null,"Имя",-1))),u={class:"sub-title"},p=o((()=>(0,a._)("p",null,"Электронная почта",-1))),f={class:"sub-title"},d=o((()=>(0,a._)("p",null,"Контактный телефон",-1)));function c(t,e,n,o,c,h){const m=(0,a.up)("Back"),_=(0,a.up)("ion-text"),w=(0,a.up)("ion-item"),P=(0,a.up)("ion-list"),g=(0,a.up)("Layout"),W=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(W,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{btnSrc:()=>t.router.push("/tabs/")},null,8,["btnSrc"]),(0,a.Wm)(g,{height:"false",method:()=>{t.router.push("/profileEdit")},method2:()=>{t.router.push("/newPassPage")},filledBtn:"Редактировать",title:"Личный кабинет",outlineBtn:"Изменить пароль"},{"main-content":(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a._)("p",s,(0,l.zw)(t.profileData?.name),1),i])),_:1})])),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a._)("p",u,(0,l.zw)(t.profileData?.email),1),p])),_:1})])),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a._)("p",f,(0,l.zw)(t.profileData?.phone),1),d])),_:1})])),_:1})])),_:1})])),_:1},8,["method","method2"])])),_:1})}var h=n(2262),m=n(2119),_=n(3875),w=n(4043),P=n(297),g=n(3978),W=n(1575),k=n(7698),v=(0,a.aZ)({name:"profilePage",data(){return{codeSent:!1,edit:!1,data:{name:"Иван",surname:"Иванов",secondname:"Иванович",email:"Pochta@mail.ru",phone:"+7(996)-915-88-31"}}},components:{IonPage:P._i,Back:w.Z,Layout:_.Z,IonList:P.q_,IonItem:P.Ie,IonText:P.yW},setup(){const t=(0,m.tv)(),e=new g.K,{profileResponse:n,profileError:a}=(0,W.Jk)((0,k.O)()),l=(0,h.iH)(""),o=async()=>{await e.create();const t=await e.get("token");l.value=JSON.parse(t)};return(0,P.Yr)((()=>{o()})),{router:t,profileResponse:n,profileData:l,profileError:a}}}),I=n(3744);const b=(0,I.Z)(v,[["render",c],["__scopeId","data-v-890f7d82"]]);var y=b}}]);
//# sourceMappingURL=8330.d02f2010.js.map