import"./vue.c1672130.js";import{s as K,w as ue,r as ce,g as X,b as Y,e as _,f as j,u as S,i as L,j as Z,n as k,k as fe,l as de,m as N}from"./@vue.09569551.js";var pe=Object.defineProperty,ve=Object.defineProperties,me=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,I=(e,r,t)=>r in e?pe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_e=(e,r)=>{for(var t in r||(r={}))ge.call(r,t)&&I(e,t,r[t]);if(x)for(var t of x(r))we.call(r,t)&&I(e,t,r[t]);return e},ye=(e,r)=>ve(e,me(r));function lt(e,r){var t;const n=K();return ue(()=>{n.value=e()},ye(_e({},r),{flush:(t=r==null?void 0:r.flush)!=null?t:"sync"})),ce(n)}var z;const ee=typeof window<"u",st=e=>typeof e<"u",it=e=>typeof e=="boolean",ut=e=>typeof e=="function",ct=e=>typeof e=="number",ft=e=>typeof e=="string",dt=()=>{};ee&&((z=window==null?void 0:window.navigator)==null?void 0:z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function F(e){return typeof e=="function"?e():S(e)}function te(e,r){function t(...n){e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})}return t}function he(e,r={}){let t,n;return o=>{const l=F(e),s=F(r.maxWait);if(t&&clearTimeout(t),l<=0||s!==void 0&&s<=0)return n&&(clearTimeout(n),n=null),o();s&&!n&&(n=setTimeout(()=>{t&&clearTimeout(t),n=null,o()},s)),t=setTimeout(()=>{n&&clearTimeout(n),n=null,o()},l)}}function Oe(e,r=!0,t=!0){let n=0,a,o=!0;const l=()=>{a&&(clearTimeout(a),a=void 0)};return u=>{const c=F(e),v=Date.now()-n;if(l(),c<=0)return n=Date.now(),u();v>c&&(t||!o)?(n=Date.now(),u()):r&&(a=setTimeout(()=>{n=Date.now(),o=!0,l(),u()},c)),!t&&!a&&(a=setTimeout(()=>o=!0,c)),o=!1}}function pt(e){return e}function be(e){return X()?(Y(e),!0):!1}function Pe(e,r=200,t={}){return te(he(r,t),e)}function vt(e,r=200,t={}){if(r<=0)return e;const n=_(e.value),a=Pe(()=>{n.value=e.value},r,t);return j(e,()=>a()),n}function mt(e,r=200,t=!1,n=!0){return te(Oe(r,t,n),e)}function gt(e,r=!0){L()?Z(e):r?e():k(e)}function wt(e,r,t={}){const{immediate:n=!0}=t,a=_(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function s(){a.value=!1,l()}function u(...c){l(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...c)},F(r))}return n&&(a.value=!0,ee&&u()),be(s),{isPending:a,start:u,stop:s}}var W;const A=typeof window<"u",Se=e=>typeof e=="string",D=()=>{};A&&((W=window==null?void 0:window.navigator)==null?void 0:W.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ee(e,r){function t(...n){e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})}return t}const re=e=>e();function $e(e=re){const r=_(!0);function t(){r.value=!1}function n(){r.value=!0}return{isActive:r,pause:t,resume:n,eventFilter:(...o)=>{r.value&&e(...o)}}}function R(e){return X()?(Y(e),!0):!1}function Fe(e,r=!0){L()?de(e):r?e():k(e)}function Te(e,r=!0){L()?Z(e):r?e():k(e)}function _t(e=!1,r={}){const{truthyValue:t=!0,falsyValue:n=!1}=r,a=fe(e),o=_(e);function l(s){return arguments.length?(o.value=s,o.value):(o.value=o.value===S(t)?S(n):S(t),o.value)}return a?l:[o,l]}var V=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Ne=(e,r)=>{var t={};for(var n in e)je.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&V)for(var n of V(e))r.indexOf(n)<0&&De.call(e,n)&&(t[n]=e[n]);return t};function Me(e,r,t={}){const n=t,{eventFilter:a=re}=n,o=Ne(n,["eventFilter"]);return j(e,Ee(a,r),o)}var Ce=Object.defineProperty,Le=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,q=(e,r,t)=>r in e?Ce(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ae=(e,r)=>{for(var t in r||(r={}))ne.call(r,t)&&q(e,t,r[t]);if(T)for(var t of T(r))ae.call(r,t)&&q(e,t,r[t]);return e},Re=(e,r)=>Le(e,ke(r)),xe=(e,r)=>{var t={};for(var n in e)ne.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&T)for(var n of T(e))r.indexOf(n)<0&&ae.call(e,n)&&(t[n]=e[n]);return t};function Ie(e,r,t={}){const n=t,{eventFilter:a}=n,o=xe(n,["eventFilter"]),{eventFilter:l,pause:s,resume:u,isActive:c}=$e(a);return{stop:Me(e,r,Re(Ae({},o),{eventFilter:l})),pause:s,resume:u,isActive:c}}function oe(e){var r;const t=S(e);return(r=t==null?void 0:t.$el)!=null?r:t}const E=A?window:void 0,ze=A?window.document:void 0;function le(...e){let r,t,n,a;if(Se(e[0])?([t,n,a]=e,r=E):[r,t,n,a]=e,!r)return D;let o=D;const l=j(()=>oe(r),u=>{o(),u&&(u.addEventListener(t,n,a),o=()=>{u.removeEventListener(t,n,a),o=D})},{immediate:!0,flush:"post"}),s=()=>{l(),o()};return R(s),s}function We(e,r={}){const{window:t=E}=r,n=Boolean(t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const o=_(!1),l=()=>{!n||(a||(a=t.matchMedia(e)),o.value=a.matches)};return Fe(()=>{l(),a&&("addEventListener"in a?a.addEventListener("change",l):a.addListener(l),R(()=>{"removeEventListener"in a?a.removeEventListener("change",l):a.removeListener(l)}))}),o}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C="__vueuse_ssr_handlers__";M[C]=M[C]||{};const Ve=M[C];function se(e,r){return Ve[e]||r}function qe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Je={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Be(e,r,t,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:u=!0,shallow:c,window:v=E,eventFilter:O,onError:f=i=>{console.error(i)}}=n,d=(c?K:_)(r);if(!t)try{t=se("getDefaultStorage",()=>{var i;return(i=E)==null?void 0:i.localStorage})()}catch(i){f(i)}if(!t)return d;const g=S(r),m=qe(g),b=(a=n.serializer)!=null?a:Je[m],{pause:p,resume:y}=Ie(d,()=>h(d.value),{flush:o,deep:l,eventFilter:O});return v&&s&&le(v,"storage",$),$(),d;function h(i){try{i==null?t.removeItem(e):t.setItem(e,b.write(i))}catch(w){f(w)}}function P(i){if(!(i&&i.key!==e)){p();try{const w=i?i.newValue:t.getItem(e);return w==null?(u&&g!==null&&t.setItem(e,b.write(g)),g):typeof w!="string"?w:b.read(w)}catch(w){f(w)}finally{y()}}}function $(i){i&&i.key!==e||(d.value=P(i))}}function ie(e){return We("(prefers-color-scheme: dark)",e)}var He=Object.defineProperty,J=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,B=(e,r,t)=>r in e?He(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ge=(e,r)=>{for(var t in r||(r={}))Ue.call(r,t)&&B(e,t,r[t]);if(J)for(var t of J(r))Qe.call(r,t)&&B(e,t,r[t]);return e};function Ke(e={}){const{selector:r="html",attribute:t="class",window:n=E,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:s,emitAuto:u}=e,c=Ge({auto:"",light:"light",dark:"dark"},e.modes||{}),v=ie({window:n}),O=N(()=>v.value?"dark":"light"),f=s||(o==null?_("auto"):Be(o,"auto",a,{window:n,listenToStorageChanges:l})),d=N({get(){return f.value==="auto"&&!u?O.value:f.value},set(p){f.value=p}}),g=se("updateHTMLAttrs",(p,y,h)=>{const P=n==null?void 0:n.document.querySelector(p);if(!!P)if(y==="class"){const $=h.split(/\s/g);Object.values(c).flatMap(i=>(i||"").split(/\s/g)).filter(Boolean).forEach(i=>{$.includes(i)?P.classList.add(i):P.classList.remove(i)})}else P.setAttribute(y,h)});function m(p){var y;const h=p==="auto"?O.value:p;g(r,t,(y=c[h])!=null?y:h)}function b(p){e.onChanged?e.onChanged(p,m):m(p)}return j(d,b,{flush:"post",immediate:!0}),Te(()=>b(d.value)),d}var Xe=Object.defineProperty,Ye=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,U=(e,r,t)=>r in e?Xe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,rt=(e,r)=>{for(var t in r||(r={}))et.call(r,t)&&U(e,t,r[t]);if(H)for(var t of H(r))tt.call(r,t)&&U(e,t,r[t]);return e},nt=(e,r)=>Ye(e,Ze(r));function yt(e={}){const{valueDark:r="dark",valueLight:t="",window:n=E}=e,a=Ke(nt(rt({},e),{onChanged:(s,u)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,s==="dark"):u(s)},modes:{dark:r,light:t}})),o=ie({window:n});return N({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}const Q=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function ht(e,r={}){const{document:t=ze,autoExit:n=!1}=r,a=e||(t==null?void 0:t.querySelector("html")),o=_(!1);let l=!1,s=Q[0];if(!t)l=!1;else for(const m of Q)if(m[1]in t){s=m,l=!0;break}const[u,c,v,,O]=s;async function f(){!l||(t!=null&&t[v]&&await t[c](),o.value=!1)}async function d(){if(!l)return;await f();const m=oe(a);m&&(await m[u](),o.value=!0)}async function g(){o.value?await f():await d()}return t&&le(t,O,()=>{o.value=!!(t!=null&&t[v])},!1),n&&R(f),{isSupported:l,isFullscreen:o,enter:d,exit:f,toggle:g}}var G;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(G||(G={}));export{ft as a,gt as b,pt as c,ut as d,st as e,ct as f,it as g,wt as h,ee as i,vt as j,lt as k,yt as l,_t as m,dt as n,ht as o,F as r,be as t,mt as u};
