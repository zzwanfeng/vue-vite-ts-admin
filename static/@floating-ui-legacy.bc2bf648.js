!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=f;var h={};function d(){}function p(){}function y(){}var v={};l(v,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==e&&o.call(m,a)&&(v=m);var w=y.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,a,c,u){var l=s(t[i],t,a);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=y,l(w,"constructor",y),l(y,"constructor",p),p.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}System.register([],(function(e,o){"use strict";return{execute:function(){function o(t){return t.split("-")[0]}function c(t){return t.split("-")[1]}function l(t){return["top","bottom"].includes(o(t))?"x":"y"}function f(t){return"y"===t?"height":"width"}function s(t,e,r){var n,i=t.reference,a=t.floating,u=i.x+i.width/2-a.width/2,s=i.y+i.height/2-a.height/2,h=l(e),d=f(h),p=i[d]/2-a[d]/2,y="x"===h;switch(o(e)){case"top":n={x:u,y:i.y-a.height};break;case"bottom":n={x:u,y:i.y+i.height};break;case"right":n={x:i.x+i.width,y:s};break;case"left":n={x:i.x-a.width,y:s};break;default:n={x:i.x,y:i.y}}switch(c(e)){case"start":n[h]-=p*(r&&y?-1:1);break;case"end":n[h]+=p*(r&&y?-1:1)}return n}var h=function(){var t=u(r().mark((function t(e,o,c){var u,l,f,h,d,p,y,v,g,m,w,b,x,L,O,E,j,k,T,P,S,A,R,N,D;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.placement,l=void 0===u?"bottom":u,f=c.strategy,h=void 0===f?"absolute":f,d=c.middleware,p=void 0===d?[]:d,y=c.platform,t.next=3,null==y.isRTL?void 0:y.isRTL(o);case 3:if(v=t.sent,null==y&&console.error(["Floating UI: `platform` property was not passed to config. If you","want to use Floating UI on the web, install @floating-ui/dom","instead of the /core package. Otherwise, you can create your own","`platform`: https://floating-ui.com/docs/platform"].join(" ")),!(p.filter((function(t){var e=t.name;return"autoPlacement"===e||"flip"===e})).length>1)){t.next=7;break}throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`","middleware detected. This will lead to an infinite loop. Ensure only","one of either has been passed to the `middleware` array."].join(" "));case 7:return t.next=9,y.getElementRects({reference:e,floating:o,strategy:h});case 9:g=t.sent,m=s(g,l,v),w=m.x,b=m.y,x=l,L={},O=0,E=0;case 15:if(!(E<p.length)){t.next=49;break}return j=p[E],k=j.name,T=j.fn,t.next=19,T({x:w,y:b,initialPlacement:l,placement:x,strategy:h,middlewareData:L,rects:g,platform:y,elements:{reference:e,floating:o}});case 19:if(P=t.sent,S=P.x,A=P.y,R=P.data,N=P.reset,w=null!=S?S:w,b=null!=A?A:b,L=i(i({},L),{},a({},k,i(i({},L[k]),R))),O>50&&console.warn(["Floating UI: The middleware lifecycle appears to be running in an","infinite loop. This is usually caused by a `reset` continually","being returned without a break condition."].join(" ")),!(N&&O<=50)){t.next=46;break}if(O++,"object"!==n(N)){t.next=44;break}if(N.placement&&(x=N.placement),!N.rects){t.next=41;break}if(!0!==N.rects){t.next=39;break}return t.next=36,y.getElementRects({reference:e,floating:o,strategy:h});case 36:t.t0=t.sent,t.next=40;break;case 39:t.t0=N.rects;case 40:g=t.t0;case 41:D=s(g,x,v),w=D.x,b=D.y;case 44:return E=-1,t.abrupt("continue",46);case 46:E++,t.next=15;break;case 49:return t.abrupt("return",{x:w,y:b,placement:x,strategy:h,middlewareData:L});case 50:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();function d(t){return"number"!=typeof t?function(t){return i({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function p(t){return i(i({},t),{},{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}var y=Math.min,v=Math.max;e("a",(function(t){return{name:"arrow",options:t,fn:function(e){return u(r().mark((function n(){var o,i,u,s,h,p,g,m,w,b,x,L,O,E,j,k,T,P,S,A,R,N,D,_,W,H,I,F,C,G,M;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=(u=null!=t?t:{}).element,h=u.padding,p=void 0===h?0:h,g=e.x,m=e.y,w=e.placement,b=e.rects,x=e.platform,null!=s){r.next=5;break}return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."),r.abrupt("return",{});case 5:return L=d(p),O={x:g,y:m},E=l(w),j=c(w),k=f(E),r.next=12,x.getDimensions(s);case 12:return T=r.sent,P="y"===E?"top":"left",S="y"===E?"bottom":"right",A=b.reference[k]+b.reference[E]-O[E]-b.floating[k],R=O[E]-b.reference[E],r.next=19,null==x.getOffsetParent?void 0:x.getOffsetParent(s);case 19:return N=r.sent,0===(D=N?"y"===E?N.clientHeight||0:N.clientWidth||0:0)&&(D=b.floating[k]),_=A/2-R/2,W=L[P],H=D-T[k]-L[S],I=D/2-T[k]/2+_,F=v(W,y(I,H)),C="start"===j?L[P]:L[S],G=C>0&&I!==F&&b.reference[k]<=b.floating[k],M=G?I<W?W-I:H-I:0,r.abrupt("return",(a(i={},E,O[E]-M),a(i,"data",(a(o={},E,F),a(o,"centerOffset",I-F),o)),i));case 31:case"end":return r.stop()}}),n)})))()}}}));function g(t,e){return m.apply(this,arguments)}function m(){return m=u(r().mark((function t(e,n){var a,u,f,s,h,d,p,y,v,g,m,w,b,x;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.placement,u=e.platform,f=e.elements,t.next=3,null==u.isRTL?void 0:u.isRTL(f.floating);case 3:return s=t.sent,h=o(a),d=c(a),p="x"===l(a),y=["left","top"].includes(h)?-1:1,v=s&&p?-1:1,g="function"==typeof n?n(e):n,m="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:i({mainAxis:0,crossAxis:0,alignmentAxis:null},g),w=m.mainAxis,b=m.crossAxis,x=m.alignmentAxis,d&&"number"==typeof x&&(b="end"===d?-1*x:x),t.abrupt("return",p?{x:b*v,y:w*y}:{x:w*y,y:b*v});case 13:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}e("o",(function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn:function(e){return u(r().mark((function n(){var o,i,a;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.x,i=e.y,r.next=3,g(e,t);case 3:return a=r.sent,r.abrupt("return",{x:o+a.x,y:i+a.y,data:a});case 5:case"end":return r.stop()}}),n)})))()}}}));function w(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function b(t){if(null==t)return window;if(!w(t)){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function x(t){return b(t).getComputedStyle(t)}function L(t){return w(t)?"":t?(t.nodeName||"").toLowerCase():""}function O(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function E(t){return t instanceof b(t).HTMLElement}function j(t){return t instanceof b(t).Element}function k(t){return"undefined"!=typeof ShadowRoot&&(t instanceof b(t).ShadowRoot||t instanceof ShadowRoot)}function T(t){var e=x(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function P(t){return["table","td","th"].includes(L(t))}function S(t){var e=/firefox/i.test(O()),r=x(t);return"none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||["transform","perspective"].includes(r.willChange)||e&&"filter"===r.willChange||e&&!!r.filter&&"none"!==r.filter}function A(){return!/^((?!chrome|android).)*safari/i.test(O())}var R=Math.min,N=Math.max,D=Math.round;function _(t,e,r){var n,o,i,a;void 0===e&&(e=!1),void 0===r&&(r=!1);var c=t.getBoundingClientRect(),u=1,l=1;e&&E(t)&&(u=t.offsetWidth>0&&D(c.width)/t.offsetWidth||1,l=t.offsetHeight>0&&D(c.height)/t.offsetHeight||1);var f=j(t)?b(t):window,s=!A()&&r,h=(c.left+(s&&null!=(n=null==(o=f.visualViewport)?void 0:o.offsetLeft)?n:0))/u,d=(c.top+(s&&null!=(i=null==(a=f.visualViewport)?void 0:a.offsetTop)?i:0))/l,p=c.width/u,y=c.height/l;return{width:p,height:y,top:d,right:h+p,bottom:d+y,left:h,x:h,y:d}}function W(t){return(e=t,(e instanceof b(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function H(t){return j(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){return _(W(t)).left+H(t).scrollLeft}function F(t,e,r){var n=E(e),o=W(e),i=_(t,n&&function(t){var e=_(t);return D(e.width)!==t.offsetWidth||D(e.height)!==t.offsetHeight}(e),"fixed"===r),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};if(n||!n&&"fixed"!==r)if(("body"!==L(e)||T(o))&&(a=H(e)),E(e)){var u=_(e,!0);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else o&&(c.x=I(o));return{x:i.left+a.scrollLeft-c.x,y:i.top+a.scrollTop-c.y,width:i.width,height:i.height}}function C(t){return"html"===L(t)?t:t.assignedSlot||t.parentNode||(k(t)?t.host:null)||W(t)}function G(t){return E(t)&&"fixed"!==x(t).position?function(t){var e=t.offsetParent,r=t,n=!1;for(;r&&r!==e;){var o=r.assignedSlot;if(o){var i=o.offsetParent;if("contents"===x(o).display){var a=o.hasAttribute("style"),c=o.style.display;o.style.display=x(r).display,i=o.offsetParent,o.style.display=c,a||o.removeAttribute("style")}r=o,e!==i&&(e=i,n=!0)}else if(k(r)&&r.host&&n)break;r=k(r)&&r.host||r.parentNode}return e}(t):null}function M(t){for(var e=b(t),r=G(t);r&&P(r)&&"static"===x(r).position;)r=G(r);return r&&("html"===L(r)||"body"===L(r)&&"static"===x(r).position&&!S(r))?e:r||function(t){var e=C(t);for(k(e)&&(e=e.host);E(e)&&!["html","body"].includes(L(e));){if(S(e))return e;var r=e.parentNode;e=k(r)?r.host:r}return null}(t)||e}function U(t){if(E(t))return{width:t.offsetWidth,height:t.offsetHeight};var e=_(t);return{width:e.width,height:e.height}}function V(t){var e=C(t);return["html","body","#document"].includes(L(e))?t.ownerDocument.body:E(e)&&T(e)?e:V(e)}function Y(t,e){var r;void 0===e&&(e=[]);var n=V(t),o=n===(null==(r=t.ownerDocument)?void 0:r.body),i=b(n),a=o?[i].concat(i.visualViewport||[],T(n)?n:[]):n,c=e.concat(a);return o?c:c.concat(Y(a))}function B(t,e,r){return"viewport"===e?p(function(t,e){var r=b(t),n=W(t),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,c=0,u=0;if(o){i=o.width,a=o.height;var l=A();(l||!l&&"fixed"===e)&&(c=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:c,y:u}}(t,r)):j(e)?function(t,e){var r=_(t,!1,"fixed"===e),n=r.top+t.clientTop,o=r.left+t.clientLeft;return{top:n,left:o,x:o,y:n,right:o+t.clientWidth,bottom:n+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,r):p(function(t){var e,r=W(t),n=H(t),o=null==(e=t.ownerDocument)?void 0:e.body,i=N(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=N(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+I(t),u=-n.scrollTop;return"rtl"===x(o||r).direction&&(c+=N(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:c,y:u}}(W(t)))}function X(t){var e=Y(t),r=["absolute","fixed"].includes(x(t).position)&&E(t)?M(t):t;return j(r)?e.filter((function(t){return j(t)&&function(t,e){var r=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(r&&k(r)){var n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,r)&&"body"!==L(t)})):[]}var $={getClippingRect:function(e){var r=e.element,n=e.boundary,o=e.rootBoundary,i=e.strategy,a="clippingAncestors"===n?X(r):[].concat(n),c=[].concat(t(a),[o]),u=c[0],l=c.reduce((function(t,e){var n=B(r,e,i);return t.top=N(n.top,t.top),t.right=R(n.right,t.right),t.bottom=R(n.bottom,t.bottom),t.left=N(n.left,t.left),t}),B(r,u,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.rect,r=t.offsetParent,n=t.strategy,o=E(r),a=W(r);if(r===a)return e;var c={scrollLeft:0,scrollTop:0},u={x:0,y:0};if((o||!o&&"fixed"!==n)&&(("body"!==L(r)||T(a))&&(c=H(r)),E(r))){var l=_(r,!0);u.x=l.x+r.clientLeft,u.y=l.y+r.clientTop}return i(i({},e),{},{x:e.x-c.scrollLeft+u.x,y:e.y-c.scrollTop+u.y})},isElement:j,getDimensions:U,getOffsetParent:M,getDocumentElement:W,getElementRects:function(t){var e=t.reference,r=t.floating,n=t.strategy;return{reference:F(e,M(r),n),floating:i(i({},U(r)),{},{x:0,y:0})}},getClientRects:function(t){return Array.from(t.getClientRects())},isRTL:function(t){return"rtl"===x(t).direction}};e("c",(function(t,e,r){return h(t,e,i({platform:$},r))}))}}}))}();