"use strict";(self["webpackChunkstng"]=self["webpackChunkstng"]||[]).push([[4753],{4753:function(n,e,t){t.r(e),t.d(e,{mdTransitionAnimation:function(){return a}});var i=t(5980),o=t(5026);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(n,e)=>{var t,a,r;const s="40px",l="0px",c="back"===e.direction,d=e.enteringEl,u=e.leavingEl,m=(0,o.g)(d),f=m.querySelector("ion-toolbar"),b=(0,i.c)();if(b.addElement(m).fill("both").beforeRemoveClass("ion-page-invisible"),c?b.duration((null!==(t=e.duration)&&void 0!==t?t:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):b.duration((null!==(a=e.duration)&&void 0!==a?a:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${s})`,`translateY(${l})`).fromTo("opacity",.01,1),f){const n=(0,i.c)();n.addElement(f),b.addAnimation(n)}if(u&&c){b.duration((null!==(r=e.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=(0,i.c)();n.addElement((0,o.g)(u)).onFinish((e=>{1===e&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")})).fromTo("transform",`translateY(${l})`,`translateY(${s})`).fromTo("opacity",1,0),b.addAnimation(n)}return b}}}]);
//# sourceMappingURL=4753.74cf8dc4.js.map