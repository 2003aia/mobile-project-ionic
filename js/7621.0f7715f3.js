"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[7621],{7698:function(e,t,a){a.d(t,{O:function(){return l}});var o=a(6086),n=a(9669),r=a.n(n);const l=(0,o.Q_)({id:"profile",state:()=>({profileResponse:null,profileError:null,editProfileError:null,editProfileResponse:null}),getters:{getPostsPerAuthor:e=>t=>e.posts.filter((e=>e.userId===t))},actions:{async getProfile(e){try{await r().post("https://api.aostng.ru/api/v2/user/profile/get/",{token:e}).then((e=>this.profileResponse=e.data))}catch(t){this.profileError=t}},async editProfile(e,t,a){try{await r().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Profile",{token:e,name:t,email:a}).then((e=>this.editProfileResponse=e.data))}catch(o){this.editProfileError=o}}}})},7621:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var o=a(6252),n=a(3577);const r=e=>((0,o.dD)("data-v-462a6ce6"),e=e(),(0,o.Cn)(),e),l=r((()=>(0,o._)("p",{class:"title ion-text-start"},"Мои данные",-1))),i={key:0,class:"sub-title"},s={key:1},u={key:0,class:"sub-title"},p={key:1},f={key:0,class:"sub-title"},c={key:1};function d(e,t,a,r,d,m){const h=(0,o.up)("Back"),w=(0,o.up)("ion-text"),g=(0,o.up)("ion-item"),_=(0,o.up)("ion-list"),k=(0,o.up)("Layout"),P=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{btnSrc:()=>e.router.push("/tabs/")},null,8,["btnSrc"]),(0,o.Wm)(k,{height:"false",method:()=>{e.router.push("/profileEdit")},method2:()=>{e.router.push("/newPassPage")},filledBtn:"Редактировать",title:"Личный кабинет",outlineBtn:"Изменить пароль"},{"main-content":(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[e.profileData?.name?((0,o.wg)(),(0,o.iD)("p",i,(0,n.zw)(e.profileData?.name),1)):((0,o.wg)(),(0,o.iD)("p",s,"Имя"))])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[e.profileData?.email?((0,o.wg)(),(0,o.iD)("p",u,(0,n.zw)(e.profileData?.email),1)):((0,o.wg)(),(0,o.iD)("p",p,"Электронная почта"))])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[e.profileData?.phone?((0,o.wg)(),(0,o.iD)("p",f,(0,n.zw)(e.profileData?.phone),1)):((0,o.wg)(),(0,o.iD)("p",c,"Контактный телефон"))])),_:1})])),_:1})])),_:1})])),_:1},8,["method","method2"])])),_:1})}var m=a(2262),h=a(2119),w=a(1839),g=a(4043),_=a(5859),k=a(3978),P=a(6086),y=a(7698),D=(0,o.aZ)({name:"profilePage",data(){return{codeSent:!1,edit:!1,data:{name:"Иван",surname:"Иванов",secondname:"Иванович",email:"Pochta@mail.ru",phone:"+7(996)-915-88-31"}}},components:{IonPage:_._i,Back:g.Z,Layout:w.Z,IonList:_.q_,IonItem:_.Ie,IonText:_.yW},setup(){const e=(0,h.tv)(),t=new k.K,{profileResponse:a,profileError:o}=(0,P.Jk)((0,y.O)()),n=(0,m.iH)(""),r=async()=>{await t.create();const e=await t.get("token");n.value=JSON.parse(e)};return(0,_.Yr)((()=>{r()})),{router:e,profileResponse:a,profileData:n,profileError:o}}}),W=a(3744);const v=(0,W.Z)(D,[["render",d],["__scopeId","data-v-462a6ce6"]]);var I=v}}]);
//# sourceMappingURL=7621.0f7715f3.js.map