"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[993],{7698:function(e,t,a){a.d(t,{O:function(){return l}});var o=a(6086),r=a(9669),n=a.n(r);const l=(0,o.Q_)({id:"profile",state:()=>({profileResponse:null,profileError:null,editProfileError:null,editProfileResponse:null}),getters:{getPostsPerAuthor:e=>t=>e.posts.filter((e=>e.userId===t))},actions:{async getProfile(e){try{await n().post("https://api.aostng.ru/api/v2/user/profile/get/",{token:e}).then((e=>this.profileResponse=e.data))}catch(t){this.profileError=t}},async editProfile(e,t,a){try{await n().post("https://fhd.aostng.ru/vesta_storage/hs/API_STNG/V2/Profile",{token:e,name:t,email:a}).then((e=>this.editProfileResponse=e.data))}catch(o){this.editProfileError=o}}}})},993:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});a(7658);var o=a(6252),r=a(3577);const n=e=>((0,o.dD)("data-v-a024cf72"),e=e(),(0,o.Cn)(),e),l=n((()=>(0,o._)("p",{class:"title ion-text-start"},"Мои данные",-1))),i={key:0,class:"sub-title"},s={key:1},u={key:0,class:"sub-title"},p={key:1},f={key:0,class:"sub-title"},c={key:1};function d(e,t,a,n,d,h){const m=(0,o.up)("Back"),w=(0,o.up)("ion-text"),g=(0,o.up)("ion-item"),_=(0,o.up)("Layout"),k=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{btnSrc:()=>e.router.push("/tabs/")},null,8,["btnSrc"]),(0,o.Wm)(_,{height:"false",method:()=>{e.router.push("/profileEdit")},method2:()=>{e.router.push("/newPassPage")},filledBtn:"Редактировать",title:"Личный кабинет",outlineBtn:"Изменить пароль"},{"main-content":(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[l])),_:1}),(0,o._)("div",null,[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[e.profileData?.name?((0,o.wg)(),(0,o.iD)("p",i,(0,r.zw)(e.profileData?.name),1)):((0,o.wg)(),(0,o.iD)("p",s,"Имя"))])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[e.profileData?.email?((0,o.wg)(),(0,o.iD)("p",u,(0,r.zw)(e.profileData?.email),1)):((0,o.wg)(),(0,o.iD)("p",p,"Электронная почта"))])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[e.profileData?.phone?((0,o.wg)(),(0,o.iD)("p",f,(0,r.zw)(e.profileData?.phone),1)):((0,o.wg)(),(0,o.iD)("p",c,"Контактный телефон"))])),_:1})])),_:1})])])),_:1},8,["method","method2"])])),_:1})}var h=a(2262),m=a(2201),w=a(594),g=a(4043),_=a(526),k=a(3978),P=a(6086),y=a(7698),D=(0,o.aZ)({name:"profilePage",data(){return{codeSent:!1,edit:!1,data:{name:"Иван",surname:"Иванов",secondname:"Иванович",email:"Pochta@mail.ru",phone:"+7(996)-915-88-31"}}},components:{IonPage:_._i,Back:g.Z,Layout:w.Z,IonItem:_.Ie,IonText:_.yW},setup(){const e=(0,m.tv)(),t=new k.K,{profileResponse:a,profileError:o}=(0,P.Jk)((0,y.O)()),r=(0,h.iH)(""),n=async()=>{await t.create();const e=await t.get("token");r.value=JSON.parse(e)};return(0,_.Yr)((()=>{n()})),{router:e,profileResponse:a,profileData:r,profileError:o}}}),v=a(3744);const W=(0,v.Z)(D,[["render",d],["__scopeId","data-v-a024cf72"]]);var b=W}}]);
//# sourceMappingURL=993.099f5d06.js.map