"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[6338],{6338:function(e,t,o){o.r(t),o.d(t,{iosTransitionAnimation:function(){return p},shadow:function(){return s}});var n=o(5980),r=o(5026);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=540,l=e=>document.querySelector(`${e}.ion-cloned-element`),s=e=>e.shadowRoot||e,i=e=>{const t="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=t){const e=t.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=e?e.querySelector(o):null}return e.querySelector(o)},c=(e,t)=>{const o="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs");let n=[];if(null!=o){const e=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=e&&(n=e.querySelectorAll("ion-buttons"))}else n=e.querySelectorAll("ion-buttons");for(const r of n){const e=r.closest("ion-header"),o=e&&!e.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&t||!a))return n}return null},d=(e,t,o,n,r)=>{const a=c(n,o),l=i(r),s=i(n),d=c(r,o),p=null!==a&&null!==l&&!o,y=null!==s&&null!==d&&o;if(p){const n=l.getBoundingClientRect(),r=a.getBoundingClientRect();m(e,t,o,l,n,r),f(e,t,o,a,n,r)}else if(y){const n=s.getBoundingClientRect(),r=d.getBoundingClientRect();m(e,t,o,s,n,r),f(e,t,o,d,n,r)}return{forward:p,backward:y}},f=(e,t,o,r,a,i)=>{const c=t?`calc(100% - ${i.right+4}px)`:i.left-4+"px",d=t?"7px":"-7px",f=t?"-4px":"4px",m=t?"-4px":"4px",p=t?"right":"left",y=t?"left":"right",u=[{offset:0,opacity:0,transform:`translate3d(${d}, ${a.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`}],b=[{offset:0,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${d}, ${a.top-40}px, 0) scale(2.1)`}],S=o?b:u,$=[{offset:0,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`}],g=[{offset:0,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`}],T=o?g:$,h=(0,n.c)(),x=(0,n.c)(),q=l("ion-back-button"),X=s(q).querySelector(".button-text"),A=s(q).querySelector("ion-icon");q.text=r.text,q.mode=r.mode,q.icon=r.icon,q.color=r.color,q.disabled=r.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),x.addElement(A),h.addElement(X),h.beforeStyles({"transform-origin":`${p} center`}).beforeAddWrite((()=>{r.style.setProperty("display","none"),q.style.setProperty(p,c)})).afterAddWrite((()=>{r.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(p)})).keyframes(S),x.beforeStyles({"transform-origin":`${y} center`}).keyframes(T),e.addAnimation([h,x])},m=(e,t,o,r,a,s)=>{const i=t?`calc(100% - ${a.right}px)`:`${a.left}px`,c=t?"-18px":"18px",d=t?"right":"left",f=[{offset:0,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${a.top-2}px, 0) scale(1)`}],m=[{offset:0,opacity:.99,transform:`translate3d(0, ${a.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.5)`}],p=o?f:m,y=l("ion-title"),u=(0,n.c)();y.innerText=r.innerText,y.size=r.size,y.color=r.color,u.addElement(y),u.beforeStyles({"transform-origin":`${d} center`,height:"46px",display:"",position:"relative",[d]:i}).beforeAddWrite((()=>{r.style.setProperty("display","none")})).afterAddWrite((()=>{r.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(p),e.addAnimation(u)},p=(e,t)=>{try{const o="cubic-bezier(0.32,0.72,0,1)",l="opacity",i="transform",c="0%",f=.8,m="rtl"===e.ownerDocument.dir,p=m?"-99.5%":"99.5%",y=m?"33%":"-33%",u=t.enteringEl,b=t.leavingEl,S="back"===t.direction,$=u.querySelector(":scope > ion-content"),g=u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=u.querySelectorAll(":scope > ion-header > ion-toolbar"),h=(0,n.c)(),x=(0,n.c)();if(h.addElement(u).duration(t.duration||a).easing(t.easing||o).fill("both").beforeRemoveClass("ion-page-invisible"),b&&e){const t=(0,n.c)();t.addElement(e),h.addAnimation(t)}if($||0!==T.length||0!==g.length?(x.addElement($),x.addElement(g)):x.addElement(u.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),h.addAnimation(x),S?x.beforeClearStyles([l]).fromTo("transform",`translateX(${y})`,`translateX(${c})`).fromTo(l,f,1):x.beforeClearStyles([l]).fromTo("transform",`translateX(${p})`,`translateX(${c})`),$){const e=s($).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),o=e.querySelector(".transition-shadow"),r=(0,n.c)(),a=(0,n.c)(),s=(0,n.c)();r.addElement(e).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(t).beforeClearStyles([l]).fromTo(l,0,.1),s.addElement(o).beforeClearStyles([l]).fromTo(l,.03,.7),r.addAnimation([a,s]),x.addAnimation([r])}}const q=u.querySelector("ion-header.header-collapse-condense"),{forward:X,backward:A}=d(h,m,S,u,b);if(T.forEach((e=>{const t=(0,n.c)();t.addElement(e),h.addAnimation(t);const o=(0,n.c)();o.addElement(e.querySelector("ion-title"));const r=(0,n.c)(),a=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),i=e.closest("ion-header"),d=null===i||void 0===i?void 0:i.classList.contains("header-collapse-condense-inactive");let f;f=S?a.filter((e=>{const t=e.classList.contains("buttons-collapse");return t&&!d||!t})):a.filter((e=>!e.classList.contains("buttons-collapse"))),r.addElement(f);const u=(0,n.c)();u.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const b=(0,n.c)();b.addElement(s(e).querySelector(".toolbar-background"));const $=(0,n.c)(),g=e.querySelector("ion-back-button");if(g&&$.addElement(g),t.addAnimation([o,r,u,b,$]),r.fromTo(l,.01,1),u.fromTo(l,.01,1),S)d||o.fromTo("transform",`translateX(${y})`,`translateX(${c})`).fromTo(l,.01,1),u.fromTo("transform",`translateX(${y})`,`translateX(${c})`),$.fromTo(l,.01,1);else{q||o.fromTo("transform",`translateX(${p})`,`translateX(${c})`).fromTo(l,.01,1),u.fromTo("transform",`translateX(${p})`,`translateX(${c})`),b.beforeClearStyles([l,"transform"]);const e=null===i||void 0===i?void 0:i.translucent;if(e?b.fromTo("transform",m?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(l,.01,"var(--opacity)"),X||$.fromTo(l,.01,1),g&&!X){const e=(0,n.c)();e.addElement(s(g).querySelector(".button-text")).fromTo("transform",m?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}}})),b){const e=(0,n.c)(),t=b.querySelector(":scope > ion-content"),o=b.querySelectorAll(":scope > ion-header > ion-toolbar"),a=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(t||0!==o.length||0!==a.length?(e.addElement(t),e.addElement(a)):e.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),h.addAnimation(e),S){e.beforeClearStyles([l]).fromTo("transform",`translateX(${c})`,m?"translateX(-100%)":"translateX(100%)");const t=(0,r.g)(b);h.afterAddWrite((()=>{"normal"===h.getDirection()&&t.style.setProperty("display","none")}))}else e.fromTo("transform",`translateX(${c})`,`translateX(${y})`).fromTo(l,1,f);if(t){const o=s(t).querySelector(".transition-effect");if(o){const t=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),a=(0,n.c)(),s=(0,n.c)(),i=(0,n.c)();a.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),s.addElement(t).beforeClearStyles([l]).fromTo(l,.1,0),i.addElement(r).beforeClearStyles([l]).fromTo(l,.7,.03),a.addAnimation([s,i]),e.addAnimation([a])}}o.forEach((e=>{const t=(0,n.c)();t.addElement(e);const o=(0,n.c)();o.addElement(e.querySelector("ion-title"));const r=(0,n.c)(),a=e.querySelectorAll("ion-buttons,[menuToggle]"),d=e.closest("ion-header"),f=null===d||void 0===d?void 0:d.classList.contains("header-collapse-condense-inactive"),p=Array.from(a).filter((e=>{const t=e.classList.contains("buttons-collapse");return t&&!f||!t}));r.addElement(p);const u=(0,n.c)(),b=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&u.addElement(b);const $=(0,n.c)();$.addElement(s(e).querySelector(".toolbar-background"));const g=(0,n.c)(),T=e.querySelector("ion-back-button");if(T&&g.addElement(T),t.addAnimation([o,r,u,g,$]),h.addAnimation(t),g.fromTo(l,.99,0),r.fromTo(l,.99,0),u.fromTo(l,.99,0),S){f||o.fromTo("transform",`translateX(${c})`,m?"translateX(-100%)":"translateX(100%)").fromTo(l,.99,0),u.fromTo("transform",`translateX(${c})`,m?"translateX(-100%)":"translateX(100%)"),$.beforeClearStyles([l,"transform"]);const e=null===d||void 0===d?void 0:d.translucent;if(e?$.fromTo("transform","translateX(0px)",m?"translateX(-100%)":"translateX(100%)"):$.fromTo(l,"var(--opacity)",0),T&&!A){const e=(0,n.c)();e.addElement(s(T).querySelector(".button-text")).fromTo("transform",`translateX(${c})`,`translateX(${(m?-124:124)+"px"})`),t.addAnimation(e)}}else f||o.fromTo("transform",`translateX(${c})`,`translateX(${y})`).fromTo(l,.99,0).afterClearStyles([i,l]),u.fromTo("transform",`translateX(${c})`,`translateX(${y})`).afterClearStyles([i,l]),g.afterClearStyles([l]),o.afterClearStyles([l]),r.afterClearStyles([l])}))}return h}catch(o){throw o}}}}]);
//# sourceMappingURL=6338.a17c2344.js.map