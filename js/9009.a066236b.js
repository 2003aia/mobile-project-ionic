"use strict";(self["webpackChunkstng"]=self["webpackChunkstng"]||[]).push([[9009],{9009:function(e,a,t){t.r(a),t.d(a,{default:function(){return H}});t(7658);var n=t(6252),s=t(3577);const l=e=>((0,n.dD)("data-v-71d960cf"),e=e(),(0,n.Cn)(),e),i=l((()=>(0,n._)("p",{class:"title ion-text-start"},"Мои данные",-1))),r=l((()=>(0,n._)("br",null,null,-1))),d={class:"sub-title"},o=l((()=>(0,n._)("p",null,"Контактный телефон",-1)));function u(e,a,t,l,u,p){const m=(0,n.up)("Back"),h=(0,n.up)("ion-text"),c=(0,n.up)("Input"),g=(0,n.up)("ion-item"),f=(0,n.up)("Layout"),v=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{btnSrc:()=>e.router.push("/tabs/profile")},null,8,["btnSrc"]),(0,n.Wm)(f,{height:"false",method:e.editProfileHandler,method2:()=>{e.router.push("/tabs/newPassPage")},loading:e.loading,filledBtn:"Сохранить",title:"Личный кабинет",outlineBtn:"Изменить пароль"},{"main-content":(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[i])),_:1}),r,(0,n._)("div",null,[(0,n.Wm)(c,{onUpdated:a[0]||(a[0]=a=>e.name=a),changeHandler:a=>e.name=a.target.value,value:e.name,name:"Укажите имя"},null,8,["changeHandler","value"]),(0,n.Wm)(c,{type:"email",onUpdated:a[1]||(a[1]=a=>e.email=a),name:"Электронная почта",value:e.email,changeHandler:a=>e.email=a.target.value},null,8,["value","changeHandler"]),(0,n.Wm)(c,{mask:"###-###-###-##",onUpdated:a[2]||(a[2]=a=>e.snils=a),name:"СНИЛС",value:e.snils,changeHandler:a=>e.snils=a.target.value},null,8,["value","changeHandler"]),(0,n.Wm)(c,{onUpdated:a[3]||(a[3]=a=>e.issuedBy=a),changeHandler:a=>e.issuedBy=a.target.value,value:e.issuedBy,name:"Паспорт выдан"},null,8,["changeHandler","value"]),(0,n.Wm)(c,{mask:"##.##.####",onUpdated:a[4]||(a[4]=a=>e.issuedDate=a),changeHandler:a=>e.issuedDate=a.target.value,value:e.issuedDate,name:"Дата выдачи паспорта"},null,8,["mask","changeHandler","value"]),(0,n.Wm)(c,{mask:"## ##",onUpdated:a[5]||(a[5]=a=>e.serial=a),changeHandler:a=>e.serial=a.target.value,value:e.serial,name:"Серия паспорта"},null,8,["changeHandler","value"]),(0,n.Wm)(c,{mask:"######",onUpdated:a[6]||(a[6]=a=>e.number=a),changeHandler:a=>e.number=a.target.value,value:e.number,name:"Номер паспорта"},null,8,["changeHandler","value"]),(0,n.Wm)(c,{mask:"###-###",onUpdated:a[7]||(a[7]=a=>e.codePodr=a),changeHandler:a=>e.codePodr=a.target.value,value:e.codePodr,name:"Код подразделения"},null,8,["changeHandler","value"]),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n._)("p",d,(0,s.zw)(e.login),1),o])),_:1})])),_:1})]),e.profileError?.response?.data?.error?((0,n.wg)(),(0,n.j4)(h,{key:0,class:"error"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.profileError?.response?.data?.error),1)])),_:1})):(0,n.kq)("",!0)])),_:1},8,["method","method2","loading"])])),_:1})}var p=t(2201),m=t(605),h=t(7821),c=t(9196),g=t(23),f=t(6086),v=t(7698),$=t(3978),w=(0,n.aZ)({name:"profleEditPage",data(){return{codeSent:!1,edit:!1,name:"",email:"",login:"",issuedBy:"",issuedDate:"",serial:"",number:"",snils:"",loading:!1,codePodr:""}},components:{Input:c.Z,Back:g.Z,IonPage:h._i,Layout:m.Z,IonItem:h.Ie,IonText:h.yW},methods:{...(0,f.nv)(v.O,["editProfile"]),async editProfileHandler(){this.$data.loading=!0;const e={passport:{serial:this.$data.serial,number:this.$data.number,issuedBy:this.$data.issuedBy,issuedDate:this.$data.issuedDate,codePodr:this.$data.codePodr},snils:this.$data.snils,name:this.$data.name,email:this.$data.email};this.editProfile(e).then((async()=>{this.$data.loading=!1;const e=new $.K;await e.create();const a=await e.get("token"),t={...JSON.parse(a),name:this.$data.name,email:this.$data.email};await e.set("token",JSON.stringify(t))}))}},ionViewDidEnter(){const e=async()=>{const e=new $.K;await e.create();const a=await e.get("token");this.$data.login=JSON.parse(a).phone,this.$data.email=this.profileData?.email,this.$data.name=this.profileData?.name,this.$data.snils=this.profileData?.snils,this.$data.serial=this.profileData?.passport?.serial,this.$data.number=this.profileData?.passport?.number,this.$data.issuedBy=this.profileData?.passport?.issuedBy,this.$data.issuedDate=this.profileData?.passport?.issuedDate,this.$data.codePodr=this.profileData?.passport?.codePodr};e()},computed:{profileData(){return this.$pinia.state.value?.profile?.profileResponse?.data},profileError(){return this.$pinia.state.value?.profile?.profileError}},setup(){const e=(0,p.tv)();return{router:e}}}),D=t(3744);const k=(0,D.Z)(w,[["render",u],["__scopeId","data-v-71d960cf"]]);var H=k}}]);
//# sourceMappingURL=9009.a066236b.js.map