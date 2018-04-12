/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(resourcesUrl){Context.activeRouter=function(){let t={},e={},n=0;const i=[];return{set:function(e){t=Object.assign({},t,e),function(){const t=i;for(let e=0;e<t.length;e++){(0,t[e])()}}()},get:function(e){return 0===Object.keys(t).length?{location:{pathname:Context.window.location.pathname,search:Context.window.location.search}}:e?t[e]:t},subscribe:function(t,o,r){if("function"!=typeof t)throw new Error("Expected listener to be a function.");o?function(t,i,o){e[i].listenerList[o]=t,e[i].listenerList.length===e[n].startLength&&e[i].groupedListener()}(t,o,r):i.push(t);let s=!0;return function(){if(s){if(o)!function(t,n){if(e[t].listenerList.splice(n,1),0===e[t].listenerList.length){const n=i.indexOf(e[t].groupedListener);i.splice(n,1),delete e[t]}}(o,r);else{const e=i.indexOf(t);i.splice(e,1)}s=!1}}},createGroup:function(t){return e[n+=1]={},e[n].startLength=t,e[n].listenerList=[],e[n].groupedListener=(()=>{let t=!1;e[n].listenerList.forEach(e=>{t?e(!0):t=null!==e(!1)})}),i.push(e[n].groupedListener),n}}}();
})(resourcesUrl);
(function(t,n,e,o){"use strict";function i(t,n,e,o,i,c,r){let f=e.t+(o||C),s=e[f];if(s||(s=e[f=e.t+C]),s){let o=n.n;if(n.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=n.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=t.i.get(o)||{};if(!c[f]){r=s.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");n.c(o,r,e.length&&e[e.length-1].nextSibling||o.r),c[f]=!0,t.i.set(o,c)}}}function c(t){return{f:t[0],s:t[1],l:!!t[2],u:!!t[3],a:!!t[4]}}function r(t,n){if(E(n)){if(t===Boolean||3===t)return"false"!==n&&(""===n||!!n);if(t===Number||4===t)return parseFloat(n)}return n}function f(t,n,e,o){const i=t.p.get(n);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(n))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.p.delete(n))}function s(t,n,e){let o,i=null,c=!1,r=!1;for(var f=arguments.length;f-- >2;)A.push(arguments[f]);for(;A.length>0;)if((e=A.pop())&&void 0!==e.pop)for(f=e.length;f--;)A.push(e[f]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].d+=e:null===i?i=[r?{d:e}:e]:i.push(r?{d:e}:e),c=r;if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(f in n.class)n.class[f]&&A.push(f);n.class=A.join(" "),A.length=0}null!=n.v&&(o=n.v)}return"function"==typeof t?t(Object.assign({},n,{m:i})):{y:t,b:i,d:void 0,w:n,M:o,g:void 0,k:!1}}function l(t,n){t.C.has(n)||(t.C.set(n,!0),t.W.add(()=>(function t(n,e,o,i,c,r){if(n.C.delete(e),!n.j.has(e)){if(i=n.x.get(e),o=!i){if((c=n.p.get(e))&&c.$rendered&&(c["s-rn"]=!0),c&&!c["s-rn"])return(c["s-rc"]=c["s-rc"]||[]).push(()=>{t(n,e)}),void(c.$onRender=c["s-rc"]);i=function f(t,n,e,o,i,c,r){try{(function f(t,n,e,o,i,c,r){for(r in t.O.set(o,e),t.N.has(e)||t.N.set(e,{}),(c=Object.assign({color:{type:String}},n.properties)).mode={type:String},c)a(t,c[r],e,o,r,i)})(t,i=t.S(n).A,n,o=new i,e)}catch(e){o={},t.T(e,7,n,!0)}return t.x.set(n,o),o}(n,e,n.L.get(e));try{i.componentWillLoad&&(r=i.componentWillLoad())}catch(t){n.T(t,3,e)}}r&&r.then?r.then(()=>u(n,e,i,o)):u(n,e,i,o)}})(t,n),t.q?1:3))}function u(t,n,e,o){(function i(t,n,e,o,c){try{const i=n.A.host;let r;if(o.render||o.hostData||i||r){t.R=!0;const i=o.render&&o.render();let r;t.R=!1;const f=t.B.get(e)||{};f.g=e;const l=s(null,r,i);t.B.set(e,t.render(f,l,c,n.A.encapsulation))}t.D(t,t.P,n,o.mode,e),e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(t=>t()),e["s-rc"]=null)}catch(n){t.R=!1,t.T(n,8,e,!0)}})(t,t.S(n),n,e,!o);try{o?n["s-init"]():b(t.B.get(n))}catch(e){t.T(e,6,n,!0)}}function a(t,n,e,o,i,c,f,s){if(n.type||n.state){const l=t.N.get(e);n.state||(!n.attr||void 0!==l[i]&&""!==l[i]||(f=c&&c.F)&&E(s=f[n.attr])&&(l[i]=r(n.type,s)),e.hasOwnProperty(i)&&(void 0===l[i]&&(l[i]=e[i]),delete e[i])),o.hasOwnProperty(i)&&void 0===l[i]&&(l[i]=o[i]),n.watchCallbacks&&(l[S+i]=n.watchCallbacks.slice()),v(o,i,function l(n){return(n=t.N.get(t.O.get(this)))&&n[i]},function u(e,o){(o=t.O.get(this))&&(n.state||n.mutable)&&p(t,o,i,e)})}else if(n.context){const c=t.H(n.context);void 0!==c&&d(o,i,c.I&&c.I(e)||c)}}function p(t,n,e,o,i,c,r){(i=t.N.get(n))||t.N.set(n,i={});const f=i[e];if(o!==f&&(i[e]=o,c=t.x.get(n))){if(r=i[S+e])for(let t=0;t<r.length;t++)try{c[r[t]].call(c,o,f,e)}catch(t){}!t.R&&n["s-rn"]&&l(t,n)}}function d(t,n,e){Object.defineProperty(t,n,{configurable:!0,value:e})}function v(t,n,e,o){Object.defineProperty(t,n,{configurable:!0,get:e,set:o})}function m(t,n,e,o,i,c,r,f,s){if("class"!==e||c)if("style"===e){for(f in o=o||W,i=i||W,o)i[f]||(n.style[f]="");for(f in i)i[f]!==o[f]&&(n.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in n)if("list"!==e&&"type"!==e&&!c&&(e in n||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.S(n);o&&o.U&&o.U[e]?h(n,e,i):"ref"!==e&&(h(n,e,null==i?"":i),null!=i&&!1!==i||n.removeAttribute(e))}else null!=i&&function l(t,n,e){const o=n!==(n=n.replace(/^xlink\:?/,"")),i=T[n];!i||e&&"false"!==e?"function"!=typeof e&&(i&&(e=""),o?t.setAttributeNS(L,O(n),e):t.setAttribute(n,e)):o?t.removeAttributeNS(L,O(n)):t.removeAttribute(n)}(n,e,i);else e=O(e)in n?O(e.substring(2)):O(e[2])+e.substring(3),i?i!==o&&t.P.z(n,e,i):t.P.Q(n,e);else if(o!==i){const t=null==o||""===o?j:o.trim().split(/\s+/),e=null==i||""===i?j:i.trim().split(/\s+/);let c=null==n.className||""===n.className?j:n.className.trim().split(/\s+/);for(f=0,s=t.length;f<s;f++)-1===e.indexOf(t[f])&&(c=c.filter(n=>n!==t[f]));for(f=0,s=e.length;f<s;f++)-1===t.indexOf(e[f])&&(c=[...c,e[f]]);n.className=c.join(" ")}}function h(t,n,e){try{t[n]=e}catch(t){}}function y(t,n,e,o,i){const c=11===e.g.nodeType&&e.g.host?e.g.host:e.g,r=n&&n.w||W,f=e.w||W;for(i in r)f&&null!=f[i]||null==r[i]||m(t,c,i,r[i],void 0,o,e.k);for(i in f)i in r&&f[i]===("value"===i||"checked"===i?c[i]:r[i])||m(t,c,i,r[i],f[i],o,e.k)}function b(t,n){t&&(t.w&&t.w.ref&&t.w.ref(n?null:t.g),t.b&&t.b.forEach(t=>{b(t,n)}))}function w(t,n,e,o,i){const c=t.Z(n);let r,f,s,l;if(i&&1===c){(f=t.G(n,k))&&(s=f.split("."))[0]===o&&((l={}).y=t.J(l.g=n),e.b||(e.b=[]),e.b[s[1]]=l,e=l,i=""!==s[2]);for(let c=0;c<n.childNodes.length;c++)w(t,n.childNodes[c],e,o,i)}else 3===c&&(r=n.previousSibling)&&8===t.Z(r)&&"s"===(s=t.K(r).split("."))[0]&&s[1]===o&&((l={d:t.K(n)}).g=n,e.b||(e.b=[]),e.b[s[2]]=l)}function $(t,n,e){e["s-cr"]||t.G(e,g)||function o(t,n){return t&&1===n.encapsulation}(t.e,n)||t.c(e,e["s-cr"]=t.V(""),t.X(e)[0]),t.e||1!==n.encapsulation||(e.shadowRoot=e);const i={Y:e["s-id"],F:{}};return n.U&&Object.keys(n.U).forEach(o=>{n.U[o]._&&(i.F[o]=t.G(e,n.U[o]._))}),i}function M(t,n,e,o){return function(){const i=arguments;return function c(t,n,e){return new Promise(o=>{let i=n[e];i||(i=t.tt.querySelector(e)),i||(i=n[e]=t.nt(e),t.et(t.tt,i)),i.componentOnReady(o)})}(t,n,e).then(t=>t[o].apply(t,i))}}const g="data-ssrv",k="data-ssrc",C="$",W={},j=[],x={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},E=t=>null!=t,O=t=>t.toLowerCase(),N=()=>{},A=[],S="wc-",T={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},L="http://www.w3.org/1999/xlink";let q=!1;(function R(n,e,o,u,a,m){const h={html:{}},k={},W=o[n]=o[n]||{},j=function A(t,n,e){t.ot||(t.ot=((t,n,e,o)=>t.addEventListener(n,e,o)),t.it=((t,n,e,o)=>t.removeEventListener(n,e,o)));const o=new WeakMap,i={ct:e.documentElement,n:e.head,tt:e.body,rt:!1,Z:t=>t.nodeType,nt:t=>e.createElement(t),ft:(t,n)=>e.createElementNS(t,n),st:t=>e.createTextNode(t),V:t=>e.createComment(t),c:(t,n,e)=>t.insertBefore(n,e),lt:t=>t.remove(),et:(t,n)=>t.appendChild(n),X:t=>t.childNodes,o:t=>t.parentNode,ut:t=>t.nextSibling,J:t=>O(t.tagName),K:t=>t.textContent,at:(t,n)=>t.textContent=n,G:(t,n)=>t.getAttribute(n),pt:(t,n,e)=>t.setAttribute(n,e),dt:(t,n,e,o)=>t.setAttributeNS(n,e,o),vt:(t,n)=>t.removeAttribute(n),mt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.ht(t):"body"===o?i.tt:"document"===o?e:"window"===o?n:t,z:(n,e,c,r,f,s,l,u)=>{const a=e;let p=n,d=o.get(n);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.mt(n,s):"object"==typeof s?p=s:(u=e.split(":")).length>1&&(p=i.mt(n,u[0]),e=u[1]),!p)return;let v=c;(u=e.split(".")).length>1&&(e=u[0],v=(t=>{t.keyCode===x[u[1]]&&c(t)})),l=i.rt?{capture:!!r,passive:!!f}:!!r,t.ot(p,e,v,l),d||o.set(n,d={}),d[a]=(()=>{p&&t.it(p,e,v,l),d[a]=null})},Q:(t,n)=>{const e=o.get(t);e&&(n?e[n]&&e[n]():Object.keys(e).forEach(t=>{e[t]&&e[t]()}))},yt:(t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o)),ht:(t,n)=>(n=i.o(t))&&11===i.Z(n)?n.host:n};return i}(W,o,u);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=u,e.resourcesUrl=e.publicPath=a,W.h=s,W.Context=e;const S=o.$definedCmps=o.$definedCmps||{};let T=0;const L={P:j,bt:function R(t,n){if(!S[t.t]){S[t.t]=!0,function e(t,n,o,i){o.connectedCallback=function(){(function e(t,n,o){t.j.delete(o),t.wt.has(o)||(t.wt.set(o,!0),o["s-id"]||(o["s-id"]=t.$t()),function i(t,n,e){for(e=n;e=t.P.ht(e);)if(t.Mt(e)){t.gt.has(n)||(t.p.set(n,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(n));break}}(t,o),t.W.add(()=>t.kt(n,o,$(t.P,n,o)),3))})(t,n,this)},o.attributeChangedCallback=function(t,e,o){(function i(t,n,e,o,c,f,s){if(t&&o!==c)for(f in t)if((s=t[f])._&&O(s._)===O(e)){n[f]=r(s.Ct,c);break}})(n.U,this,t,e,o)},o.disconnectedCallback=function(){(function n(t,e,o){!t.Wt&&function i(t,n){for(;n;){if(!t.o(n))return 9!==t.Z(n);n=t.o(n)}}(t.P,e)&&(t.j.set(e,!0),f(t,e),b(t.B.get(e),!0),t.P.Q(e),t.jt.delete(e),(o=t.x.get(e))&&o.componentDidUnload&&o.componentDidUnload(),[t.p,t.xt,t.L].forEach(t=>t.delete(e)))})(t,this)},o["s-init"]=function(){(function n(t,e,o,i,c){if(!t.gt.has(e)&&t.x.get(e)&&!t.j.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],t.gt.set(e,!0);try{b(t.B.get(e)),(c=t.xt.get(e))&&(c.forEach(t=>t(e)),t.xt.delete(e))}catch(n){t.T(n,4,e)}e.classList.add(o),f(t,e)}})(t,this,i)},o.forceUpdate=function(){l(t,this)},function c(t,n,e){n&&Object.keys(n).forEach(o=>{const i=n[o].Et;1===i||2===i?v(e,o,function n(){return(t.N.get(this)||{})[o]},function n(e){p(t,this,o,e)}):6===i&&d(e,o,N)})}(t,n.U,o)}(L,t,n.prototype,m);{const e=[];for(const n in t.U)t.U[n]._&&e.push(t.U[n]._);n.observedAttributes=e}o.customElements.define(t.t,n)}},Ot:e.emit,S:t=>h[j.J(t)],H:t=>e[t],isClient:!0,Mt:t=>!(!S[j.J(t)]&&!L.S(t)),$t:()=>n+T++,T:(t,n,e)=>void 0,Nt:t=>(function n(t,e,o){return{create:M(t,e,o,"create"),componentOnReady:M(t,e,o,"componentOnReady")}})(j,k,t),W:function B(n,e,o,i){function c(){for(;u.length>0;)u.shift()();o=!1}function r(t){for(t=s(),c();a.length>0&&s()-t<40;)a.shift()();(i=a.length>0)&&n.raf(f)}function f(t){for(c(),t=4+s();a.length>0&&s()<t;)a.shift()();(i=a.length>0)&&n.raf(r)}const s=()=>e.performance.now(),l=Promise.resolve(),u=[],a=[];return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{add:(t,e)=>{3===e?(u.push(t),o||(o=!0,l.then(c))):(a.push(t),i||(i=!0,n.raf(r)))}}}(W,o),kt:function D(t,n){if(n.mode||(n.mode=j.G(n,"mode")||e.mode),$(L.P,t,n),t.A)l(L,n);else{const e="string"==typeof t.At?t.At:t.At[n.mode],o=a+e+(function o(t,n){return 2===n.encapsulation||1===n.encapsulation&&!t}(j.e,t)?".sc":"")+".js";import(o).then(e=>{try{t.A=e[(t=>O(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,n,e){const o=e.style;if(o){const i=e.is+(e.styleMode||C);if(!n[i]){const e=t.nt("template");n[i]=e,e.innerHTML=`<style>${o}</style>`,t.et(t.n,e)}}}(j,t,t.A)}catch(n){t.A=class{}}l(L,n)}).catch(t=>void 0)}},p:new WeakMap,i:new WeakMap,wt:new WeakMap,jt:new WeakMap,gt:new WeakMap,O:new WeakMap,L:new WeakMap,x:new WeakMap,j:new WeakMap,C:new WeakMap,xt:new WeakMap,St:new WeakMap,B:new WeakMap,N:new WeakMap};L.render=function P(t,n){function e(o,i,r,f,s,p,d,v,m){if(!u&&"slot"===o.y){if(Object.keys(l).length&&(a&&n.pt(i,a+"-slot",""),v=E(d=o.w&&o.w.name)?l[d]:l.Tt,E(v))){for(t.Wt=!0,f=0;f<v.length;f++)p=v[f],n.lt(p),n.et(i,p),8!==p.nodeType&&(m=!0);!m&&o.b&&c(i,[],o.b),t.Wt=!1}return null}if(E(o.d))o.g=n.st(o.d);else{s=o.g=q||"svg"===o.y?n.ft("http://www.w3.org/2000/svg",o.y):n.nt(o.y),q="svg"===o.y||"foreignObject"!==o.y&&q,y(t,null,o,q),E(a)&&s.Lt!==a&&n.pt(s,s.Lt=a,"");const i=o.b;if(i)for(f=0;f<i.length;++f)(p=e(i[f],s))&&n.et(s,p);"svg"===o.y&&(q=!1)}return o.g}function o(t,o,i,c,r,f,s,l){const u=t["s-cr"]||t.$defaultHolder;for(f=u&&n.o(u)||t;c<=r;++c)(l=i[c])&&(s=E(l.d)?n.st(l.d):e(l,t))&&(l.g=s,n.c(f,s,o))}function i(t,e,o){for(;e<=o;++e)E(t[e])&&n.lt(t[e].g)}function c(t,c,l){let u,a,p,d,v=0,m=0,h=c.length-1,y=c[0],b=c[h],w=l.length-1,$=l[0],M=l[w];for(;v<=h&&m<=w;)null==y?y=c[++v]:null==b?b=c[--h]:null==$?$=l[++m]:null==M?M=l[--w]:r(y,$)?(s(y,$),y=c[++v],$=l[++m]):r(b,M)?(s(b,M),b=c[--h],M=l[--w]):r(y,M)?(s(y,M),n.c(t,y.g,n.ut(b.g)),y=c[++v],M=l[--w]):r(b,$)?(s(b,$),n.c(t,b.g,y.g),b=c[--h],$=l[++m]):(E(u)||(u=f(c,v,h)),a=u[$.M],E(a)?((p=c[a]).y!==$.y?d=e($,t):(s(p,$),c[a]=void 0,d=p.g),$=l[++m]):(d=e($,t),$=l[++m]),d&&n.c(y.g&&y.g.parentNode||t,d,y.g));v>h?o(t,null==l[w+1]?null:l[w+1].g,l,m,w):m>w&&i(c,v,h)}function r(t,n){return t.y===n.y&&t.M===n.M}function f(t,n,e){const o={};let i,c,r;for(i=n;i<=e;++i)null!=(r=t[i])&&void 0!==(c=r.M)&&(o.qt=i);return o}function s(e,r,f){const s=r.g=e.g,l=e.b,u=r.b;q=r.g&&E(n.ht(r.g))&&void 0!==r.g.ownerSVGElement,q="svg"===r.y||"foreignObject"!==r.y&&q,E(r.d)?(f=s["s-cr"]||s.$defaultHolder)?n.at(n.o(f),r.d):e.d!==r.d&&n.at(s,r.d):("slot"!==r.y&&y(t,e,r,q),E(l)&&E(u)?c(s,l,u):E(u)?(E(e.d)&&n.at(s,""),o(s,null,u,0,u.length-1)):E(l)&&i(l,0,l.length-1)),q&&"svg"===r.y&&(q=!1)}let l,u,a;return function t(e,o,i,c,r){return function f(t,n,e,o,i,c,r){if(o=n&&t.o(n))for(i=t.X(o),c=0;c<i.length;c++)o=i[c],1===t.Z(o)&&E(r=t.G(o,"slot"))?e[r]?e[r].push(o):e[r]=[o]:e.Tt?e.Tt.push(o):e.Tt=[o]}(n,e.g["s-cr"],l={}),a="scoped"===c||"shadow"===c&&!n.e?"data-"+n.J(e.g):null,i||a&&n.pt(e.g,a+"-host",""),s(e,o),o}}(L,j);const F=j.ct;F["s-ld"]=[],F["s-rn"]=!0,F["s-init"]=(()=>{L.gt.set(F,W.loaded=L.q=!0),j.yt(o,"appload",{detail:{namespace:n}})}),function H(t,n,e){const o=e.querySelectorAll(`[${g}]`),i=o.length;let c,r,f,s,l,u;if(i>0)for(t.gt.set(e,!0),s=0;s<i;s++)for(c=o[s],r=n.G(c,g),(f={}).y=n.J(f.g=c),t.B.set(c,f),l=0,u=c.childNodes.length;l<u;l++)w(n,c.childNodes[l],f,r,!0)}(L,j,F),L.D=i,(W.components||[]).map(t=>(function n(t,e,o,i){const r={t:t[0],U:{color:{_:"color"}}};r.At=t[1];const f=t[3];if(f)for(o=0;o<f.length;o++)i=f[o],r.U[i[0]]={Et:i[1],Rt:!!i[2],_:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,Ct:i[4]};return r.encapsulation=t[4],t[5]&&(r.Bt=t[5].map(c)),e[r.t]=r})(t,h)).forEach(t=>L.bt(t,class extends HTMLElement{})),function I(t,n){n.componentOnReady=((n,e)=>{if(t.S(n)&&!t.gt.has(n)){const o=t.xt.get(n)||[];o.push(e),t.xt.set(n,o)}else e(n)}),n.$r&&n.$r.forEach(t=>n.componentOnReady(t[0],t[1])),n.$r=null}(L,W),W.initialized=!0})(o,e,t,n,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"App","hydrated");