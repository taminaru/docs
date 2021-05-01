var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a("")}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let h;function d(t){h=t}function m(){if(!h)throw new Error("Function called outside component initialization");return h}function g(){const t=m();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function $(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const b=[],v=[],y=[],w=[],x=Promise.resolve();let k=!1;function _(){k||(k=!0,x.then(L))}function E(t){y.push(t)}let q=!1;const j=new Set;function L(){if(!q){q=!0;do{for(let t=0;t<b.length;t+=1){const n=b[t];d(n),O(n.$$)}for(d(null),b.length=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];j.has(n)||(j.add(n),n())}y.length=0}while(b.length);for(;w.length;)w.pop()();k=!1,q=!1,j.clear()}}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const S=new Set;let T;function A(){T={r:0,c:[],p:T}}function N(){T.r||r(T.c),T=T.p}function C(t,n){t&&t.i&&(S.delete(t),t.i(n))}function M(t,n,e,o){if(t&&t.o){if(S.has(t))return;S.add(t),T.c.push((()=>{S.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function z(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function D(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function R(t,n,o,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,o),i||E((()=>{const n=l.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(E)}function I(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function F(n,e,s,i,c,u,a=[-1]){const f=h;d(n);const p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let m=!1;if(p.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&function(t,n){-1===t.$$.dirty[0]&&(b.push(t),_(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();e.intro&&C(n.$$.fragment),R(n,e.target,e.anchor,e.customElement),L()}d(f)}class G{$destroy(){I(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const P=[];function B(t,n){return{subscribe:J(t,n).subscribe}}function J(n,e=t){let o;const r=[];function s(t){if(i(n,t)&&(n=t,o)){const t=!P.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),P.push(e,n)}if(t){for(let t=0;t<P.length;t+=2)P[t][0](P[t+1]);P.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const l=[i,c];return r.push(l),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function U(n,e,o){const i=!Array.isArray(n),c=i?[n]:n,l=e.length<2;return B(o,(n=>{let o=!1;const u=[];let a=0,f=t;const p=()=>{if(a)return;f();const o=e(i?u[0]:u,n);l?n(o):f=s(o)?o:t},h=c.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{u[e]=t,a&=~(1<<e),o&&p()}),(()=>{a|=1<<e}))));return o=!0,p(),function(){r(h),f()}}))}function W(t){let e,o,r;const s=[t[2]];var i=t[0];function u(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(u()),e.$on("routeEvent",t[7])),{c(){e&&H(e.$$.fragment),o=f()},m(t,n){e&&R(e,t,n),c(t,o,n),r=!0},p(t,n){const r=4&n?z(s,[D(t[2])]):{};if(i!==(i=t[0])){if(e){A();const t=e;M(t.$$.fragment,1,0,(()=>{I(t,1)})),N()}i?(e=new i(u()),e.$on("routeEvent",t[7]),H(e.$$.fragment),C(e.$$.fragment,1),R(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&C(e.$$.fragment,t),r=!0)},o(t){e&&M(e.$$.fragment,t),r=!1},d(t){t&&l(o),e&&I(e,t)}}}function Y(t){let e,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function u(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(u()),e.$on("routeEvent",t[6])),{c(){e&&H(e.$$.fragment),o=f()},m(t,n){e&&R(e,t,n),c(t,o,n),r=!0},p(t,n){const r=6&n?z(s,[2&n&&{params:t[1]},4&n&&D(t[2])]):{};if(i!==(i=t[0])){if(e){A();const t=e;M(t.$$.fragment,1,0,(()=>{I(t,1)})),N()}i?(e=new i(u()),e.$on("routeEvent",t[6]),H(e.$$.fragment),C(e.$$.fragment,1),R(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&C(e.$$.fragment,t),r=!0)},o(t){e&&M(e.$$.fragment,t),r=!1},d(t){t&&l(o),e&&I(e,t)}}}function X(t){let n,e,o,r;const s=[Y,W],i=[];function u(t,n){return t[1]?0:1}return n=u(t),e=i[n]=s[n](t),{c(){e.c(),o=f()},m(t,e){i[n].m(t,e),c(t,o,e),r=!0},p(t,[r]){let c=n;n=u(t),n===c?i[n].p(t,r):(A(),M(i[c],1,1,(()=>{i[c]=null})),N(),e=i[n],e?e.p(t,r):(e=i[n]=s[n](t),e.c()),C(e,1),e.m(o.parentNode,o))},i(t){r||(C(e),r=!0)},o(t){M(e),r=!1},d(t){i[n].d(t),t&&l(o)}}}function Z(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const K=B(null,(function(t){t(Z());const n=()=>{t(Z())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));function Q(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],c="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(e=r[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,n)=>{c.push(new i(n,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let l=null,u=null,a={};const f=g();async function p(t,n){await(_(),x),f(t,n)}let h=null;var d;s&&(window.addEventListener("popstate",(t=>{h=t.state&&t.state.scrollY?t.state:null})),d=()=>{h?window.scrollTo(h.scrollX,h.scrollY):window.scrollTo(0,0)},m().$$.after_update.push(d));let b=null,v=null;return K.subscribe((async t=>{b=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const r={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData};if(!await c[n].checkConditions(r))return e(0,l=null),v=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=c[n].component;if(v!=s){s.loading?(e(0,l=s.loading),v=s,e(1,u=s.loadingParams),e(2,a={}),p("routeLoaded",Object.assign({},r,{component:l,name:l.name}))):(e(0,l=null),v=null);const n=await s();if(t!=b)return;e(0,l=n&&n.default||n),v=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,u=o):e(1,u=null),e(2,a=c[n].props),void p("routeLoaded",Object.assign({},r,{component:l,name:l.name}))}e(0,l=null),v=null})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,u,a,o,r,s,function(n){$(t,n)},function(n){$(t,n)}]}U(K,(t=>t.location)),U(K,(t=>t.querystring));class V extends G{constructor(t){super(),F(this,t,Q,X,i,{routes:3,prefix:4,restoreScrollState:5})}}function tt(n){let e;return{c(){e=u("main"),e.innerHTML='<h1 class="svelte-9qnr4w">Website Under Development</h1> \n  <div class="this svelte-9qnr4w"><div class="card svelte-9qnr4w"><div class="container svelte-9qnr4w"><p class="svelte-9qnr4w">The Landing page is still under devlopment. However you can still add\n          Taminaru to your server!</p></div></div></div> \n  <div class="link svelte-9qnr4w"><a target="blank" href="https://discord.com/oauth2/authorize?client_id=769409289043050516&amp;permissions=2956029142&amp;scope=bot%20applications.commands" class="svelte-9qnr4w">Link bot</a></div> \n  <div class="link svelte-9qnr4w"><a target="blank" href="https://discord.com/invite/N79DZsm3m2" class="svelte-9qnr4w">Support Server!</a></div>',p(e,"class","svelte-9qnr4w")},m(t,n){c(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}function nt(n){let e;return{c(){e=u("div"),e.innerHTML='<h1 class="svelte-z1ziiy">404 Not Found</h1> \n  <p>This route doesn&#39;t exist.</p> \n  <p><a href="#/" class="svelte-z1ziiy">back to home</a></p>'},m(t,n){c(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}function et(n){let e;return{c(){e=u("main"),e.innerHTML='<h3 class="svelte-bhow0c">Is seams the svelte router works...</h3> \n    \n    <button><a href="#/" class="svelte-bhow0c">Back</a></button>'},m(t,n){c(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}var ot={"/":class extends G{constructor(t){super(),F(this,t,null,tt,i,{})}},"/test":class extends G{constructor(t){super(),F(this,t,null,et,i,{})}},"*":class extends G{constructor(t){super(),F(this,t,null,nt,i,{})}}};function rt(n){let e;return{c(){e=u("div"),e.innerHTML='<footer class="svelte-1fhym7o"><a href="https://github.com/ThatGuyJamal" target="_blank" rel="noopener noreferrer" alt="Link to my github" class="svelte-1fhym7o">© ThatGuyJamal\n      <img src="/images/GitHub-Mark-Light-32px.png" alt="github logo" class="svelte-1fhym7o"/></a></footer>',p(e,"class","svelte-1fhym7o")},m(t,n){c(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}function st(t){return[]}class it extends G{constructor(t){super(),F(this,t,st,rt,i,{})}}function ct(n){let e,o,r,s,i;return o=new V({props:{routes:ot}}),s=new it({}),{c(){e=u("main"),H(o.$$.fragment),r=a(" "),H(s.$$.fragment),p(e,"class","svelte-1knh9dm")},m(t,n){c(t,e,n),R(o,e,null),function(t,n){t.appendChild(n)}(e,r),R(s,e,null),i=!0},p:t,i(t){i||(C(o.$$.fragment,t),C(s.$$.fragment,t),i=!0)},o(t){M(o.$$.fragment,t),M(s.$$.fragment,t),i=!1},d(t){t&&l(e),I(o),I(s)}}}return new class extends G{constructor(t){super(),F(this,t,null,ct,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
