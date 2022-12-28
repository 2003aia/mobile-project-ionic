"use strict";(self["webpackChunkstng"]=self["webpackChunkstng"]||[]).push([[8990],{8990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return i}});var r=n(6587),s=n(545),c=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(t,e,n,i,o)=>{const a=t.ownerDocument.defaultView,u=(0,s.i)(t),h=t=>{const e=50,{startX:n}=t;return u?n>=a.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,f=t=>h(t)&&e(),k=t=>{const e=l(t),n=e/a.innerWidth;i(n)},w=t=>{const e=l(t),n=a.innerWidth,s=e/n,c=d(t),i=n/2,u=c>=0&&(c>.2||e>i),h=u?1-s:s,f=h*n;let k=0;if(f>5){const t=f/Math.abs(c);k=Math.min(t,540)}o(u,s<=0?.01:(0,r.h)(0,s,.9999),k)};return(0,c.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:f,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=8990.2b7cb14b.js.map