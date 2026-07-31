(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Md={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function Rb(){if(lx)return Go;lx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var cx;function Nb(){return cx||(cx=1,Md.exports=Rb()),Md.exports}var h=Nb(),Ed={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function Db(){if(ux)return dt;ux=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function y(U,K,Me){this.props=U,this.context=K,this.refs=M,this.updater=Me||A}y.prototype.isReactComponent={},y.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function G(){}G.prototype=y.prototype;function L(U,K,Me){this.props=U,this.context=K,this.refs=M,this.updater=Me||A}var w=L.prototype=new G;w.constructor=L,N(w,y.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function D(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(U,K,Me){var ae=Me.ref;return{$$typeof:r,type:U,key:K,ref:ae!==void 0?ae:null,props:Me}}function k(U,K){return z(U.type,K,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function W(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Me){return K[Me]})}var he=/\/+/g;function X(U,K){return typeof U=="object"&&U!==null&&U.key!=null?W(""+U.key):K.toString(36)}function P(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(D,D):(U.status="pending",U.then(function(K){U.status==="pending"&&(U.status="fulfilled",U.value=K)},function(K){U.status==="pending"&&(U.status="rejected",U.reason=K)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,K,Me,ae,$){var q=typeof U;(q==="undefined"||q==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(q){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case r:case e:ve=!0;break;case v:return ve=U._init,O(ve(U._payload),K,Me,ae,$)}}if(ve)return $=$(U),ve=ae===""?"."+X(U,0):ae,I($)?(Me="",ve!=null&&(Me=ve.replace(he,"$&/")+"/"),O($,K,Me,"",function(be){return be})):$!=null&&(V($)&&($=k($,Me+($.key==null||U&&U.key===$.key?"":(""+$.key).replace(he,"$&/")+"/")+ve)),K.push($)),1;ve=0;var _e=ae===""?".":ae+":";if(I(U))for(var Ce=0;Ce<U.length;Ce++)ae=U[Ce],q=_e+X(ae,Ce),ve+=O(ae,K,Me,q,$);else if(Ce=b(U),typeof Ce=="function")for(U=Ce.call(U),Ce=0;!(ae=U.next()).done;)ae=ae.value,q=_e+X(ae,Ce++),ve+=O(ae,K,Me,q,$);else if(q==="object"){if(typeof U.then=="function")return O(P(U),K,Me,ae,$);throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ve}function H(U,K,Me){if(U==null)return U;var ae=[],$=0;return O(U,ae,"","",function(q){return K.call(Me,q,$++)}),ae}function te(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(Me){(U._status===0||U._status===-1)&&(U._status=1,U._result=Me)},function(Me){(U._status===0||U._status===-1)&&(U._status=2,U._result=Me)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var oe=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xe={map:H,forEach:function(U,K,Me){H(U,function(){K.apply(this,arguments)},Me)},count:function(U){var K=0;return H(U,function(){K++}),K},toArray:function(U){return H(U,function(K){return K})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return dt.Activity=_,dt.Children=xe,dt.Component=y,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=L,dt.StrictMode=s,dt.Suspense=g,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,dt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},dt.cache=function(U){return function(){return U.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(U,K,Me){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var ae=N({},U.props),$=U.key;if(K!=null)for(q in K.key!==void 0&&($=""+K.key),K)!T.call(K,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&K.ref===void 0||(ae[q]=K[q]);var q=arguments.length-2;if(q===1)ae.children=Me;else if(1<q){for(var ve=Array(q),_e=0;_e<q;_e++)ve[_e]=arguments[_e+2];ae.children=ve}return z(U.type,$,ae)},dt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},dt.createElement=function(U,K,Me){var ae,$={},q=null;if(K!=null)for(ae in K.key!==void 0&&(q=""+K.key),K)T.call(K,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&($[ae]=K[ae]);var ve=arguments.length-2;if(ve===1)$.children=Me;else if(1<ve){for(var _e=Array(ve),Ce=0;Ce<ve;Ce++)_e[Ce]=arguments[Ce+2];$.children=_e}if(U&&U.defaultProps)for(ae in ve=U.defaultProps,ve)$[ae]===void 0&&($[ae]=ve[ae]);return z(U,q,$)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:p,render:U}},dt.isValidElement=V,dt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:te}},dt.memo=function(U,K){return{$$typeof:m,type:U,compare:K===void 0?null:K}},dt.startTransition=function(U){var K=B.T,Me={};B.T=Me;try{var ae=U(),$=B.S;$!==null&&$(Me,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(D,oe)}catch(q){oe(q)}finally{K!==null&&Me.types!==null&&(K.types=Me.types),B.T=K}},dt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},dt.use=function(U){return B.H.use(U)},dt.useActionState=function(U,K,Me){return B.H.useActionState(U,K,Me)},dt.useCallback=function(U,K){return B.H.useCallback(U,K)},dt.useContext=function(U){return B.H.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U,K){return B.H.useDeferredValue(U,K)},dt.useEffect=function(U,K){return B.H.useEffect(U,K)},dt.useEffectEvent=function(U){return B.H.useEffectEvent(U)},dt.useId=function(){return B.H.useId()},dt.useImperativeHandle=function(U,K,Me){return B.H.useImperativeHandle(U,K,Me)},dt.useInsertionEffect=function(U,K){return B.H.useInsertionEffect(U,K)},dt.useLayoutEffect=function(U,K){return B.H.useLayoutEffect(U,K)},dt.useMemo=function(U,K){return B.H.useMemo(U,K)},dt.useOptimistic=function(U,K){return B.H.useOptimistic(U,K)},dt.useReducer=function(U,K,Me){return B.H.useReducer(U,K,Me)},dt.useRef=function(U){return B.H.useRef(U)},dt.useState=function(U){return B.H.useState(U)},dt.useSyncExternalStore=function(U,K,Me){return B.H.useSyncExternalStore(U,K,Me)},dt.useTransition=function(){return B.H.useTransition()},dt.version="19.2.8",dt}var fx;function rp(){return fx||(fx=1,Ed.exports=Db()),Ed.exports}var Be=rp(),Td={exports:{}},ko={},Ad={exports:{}},wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function Ub(){return dx||(dx=1,(function(r){function e(O,H){var te=O.length;O.push(H);e:for(;0<te;){var oe=te-1>>>1,xe=O[oe];if(0<l(xe,H))O[oe]=H,O[te]=xe,te=oe;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],te=O.pop();if(te!==H){O[0]=te;e:for(var oe=0,xe=O.length,U=xe>>>1;oe<U;){var K=2*(oe+1)-1,Me=O[K],ae=K+1,$=O[ae];if(0>l(Me,te))ae<xe&&0>l($,Me)?(O[oe]=$,O[ae]=te,oe=ae):(O[oe]=Me,O[K]=te,oe=K);else if(ae<xe&&0>l($,te))O[oe]=$,O[ae]=te,oe=ae;else break e}}return H}function l(O,H){var te=O.sortIndex-H.sortIndex;return te!==0?te:O.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],m=[],v=1,_=null,x=3,b=!1,A=!1,N=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var H=i(m);H!==null;){if(H.callback===null)s(m);else if(H.startTime<=O)s(m),H.sortIndex=H.expirationTime,e(g,H);else break;H=i(m)}}function I(O){if(N=!1,w(O),!A)if(i(g)!==null)A=!0,D||(D=!0,W());else{var H=i(m);H!==null&&P(I,H.startTime-O)}}var D=!1,B=-1,T=5,z=-1;function k(){return M?!0:!(r.unstable_now()-z<T)}function V(){if(M=!1,D){var O=r.unstable_now();z=O;var H=!0;try{e:{A=!1,N&&(N=!1,G(B),B=-1),b=!0;var te=x;try{t:{for(w(O),_=i(g);_!==null&&!(_.expirationTime>O&&k());){var oe=_.callback;if(typeof oe=="function"){_.callback=null,x=_.priorityLevel;var xe=oe(_.expirationTime<=O);if(O=r.unstable_now(),typeof xe=="function"){_.callback=xe,w(O),H=!0;break t}_===i(g)&&s(g),w(O)}else s(g);_=i(g)}if(_!==null)H=!0;else{var U=i(m);U!==null&&P(I,U.startTime-O),H=!1}}break e}finally{_=null,x=te,b=!1}H=void 0}}finally{H?W():D=!1}}}var W;if(typeof L=="function")W=function(){L(V)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,X=he.port2;he.port1.onmessage=V,W=function(){X.postMessage(null)}}else W=function(){y(V,0)};function P(O,H){B=y(function(){O(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(O){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var te=x;x=H;try{return O()}finally{x=te}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=x;x=O;try{return H()}finally{x=te}},r.unstable_scheduleCallback=function(O,H,te){var oe=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?oe+te:oe):te=oe,O){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=te+xe,O={id:v++,callback:H,priorityLevel:O,startTime:te,expirationTime:xe,sortIndex:-1},te>oe?(O.sortIndex=te,e(m,O),i(g)===null&&O===i(m)&&(N?(G(B),B=-1):N=!0,P(I,te-oe))):(O.sortIndex=xe,e(g,O),A||b||(A=!0,D||(D=!0,W()))),O},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(O){var H=x;return function(){var te=x;x=H;try{return O.apply(this,arguments)}finally{x=te}}}})(wd)),wd}var hx;function Lb(){return hx||(hx=1,Ad.exports=Ub()),Ad.exports}var Cd={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function Ob(){if(px)return Pn;px=1;var r=rp();function e(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,m,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:g,containerInfo:m,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(g,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(g,m,null,v)},Pn.flushSync=function(g){var m=f.T,v=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=m,s.p=v,s.d.f()}},Pn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Pn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Pn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var v=m.as,_=p(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:b}):v==="script"&&s.d.X(g,{crossOrigin:_,integrity:x,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Pn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,_=p(v,m.crossOrigin);s.d.L(g,v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pn.preloadModule=function(g,m){if(typeof g=="string")if(m){var v=p(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Pn.requestFormReset=function(g){s.d.r(g)},Pn.unstable_batchedUpdates=function(g,m){return g(m)},Pn.useFormState=function(g,m,v){return f.H.useFormState(g,m,v)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.8",Pn}var mx;function Pb(){if(mx)return Cd.exports;mx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=Ob(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function zb(){if(gx)return ko;gx=1;var r=Lb(),e=rp(),i=Pb();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return g(u),t;if(d===o)return g(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=d;break}if(R===o){S=!0,o=u,a=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===a){S=!0,a=d,o=u;break}if(R===o){S=!0,o=d,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case D:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case L:return t.displayName||"Context";case G:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:X(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return X(t(n))}catch{}}return null}var P=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},oe=[],xe=-1;function U(t){return{current:t}}function K(t){0>xe||(t.current=oe[xe],oe[xe]=null,xe--)}function Me(t,n){xe++,oe[xe]=t.current,t.current=n}var ae=U(null),$=U(null),q=U(null),ve=U(null);function _e(t,n){switch(Me(q,n),Me($,t),Me(ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Dg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Dg(n),t=Ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(ae),Me(ae,t)}function Ce(){K(ae),K($),K(q)}function be(t){t.memoizedState!==null&&Me(ve,t);var n=ae.current,a=Ug(n,t.type);n!==a&&(Me($,t),Me(ae,a))}function Ue(t){$.current===t&&(K(ae),K($)),ve.current===t&&(K(ve),Io._currentValue=te)}var Ne,Le;function We(t){if(Ne===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ne=n&&n[1]||"",Le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+t+Le}var Ke=!1;function lt(t,n){if(!t||Ke)return"";Ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(ye){var ge=ye}Reflect.construct(t,[],we)}else{try{we.call()}catch(ye){ge=ye}t.call(we.prototype)}}else{try{throw Error()}catch(ye){ge=ye}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(ye){if(ye&&ge&&typeof ye.stack=="string")return[ye.stack,ge.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var j=S.split(`
`),ue=R.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ue.length&&!ue[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===ue.length)for(o=j.length-1,u=ue.length-1;1<=o&&0<=u&&j[o]!==ue[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==ue[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==ue[u]){var Ee=`
`+j[o].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=o&&0<=u);break}}}finally{Ke=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?We(a):""}function Yt(t,n){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return t.child!==n&&n!==null?We("Suspense Fallback"):We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return We("Activity");default:return""}}function Zt(t){try{var n="",a=null;do n+=Yt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Kt=Object.prototype.hasOwnProperty,jt=r.unstable_scheduleCallback,Rt=r.unstable_cancelCallback,tn=r.unstable_shouldYield,ne=r.unstable_requestPaint,Ct=r.unstable_now,bt=r.unstable_getCurrentPriorityLevel,F=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,re=r.unstable_NormalPriority,pe=r.unstable_LowPriority,Se=r.unstable_IdlePriority,Oe=r.log,le=r.unstable_setDisableYieldValue,J=null,ee=null;function De(t){if(typeof Oe=="function"&&le(t),ee&&typeof ee.setStrictMode=="function")try{ee.setStrictMode(J,t)}catch{}}var Pe=Math.clz32?Math.clz32:it,ze=Math.log,He=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(ze(t)/He|0)|0}var at=256,ft=262144,Q=4194304;function Ie(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Te(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Ie(o):(S&=R,S!==0?u=Ie(S):a||(a=R&~t,a!==0&&(u=Ie(a))))):(R=o&~d,R!==0?u=Ie(R):S!==0?u=Ie(S):a||(a=o&~t,a!==0&&(u=Ie(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function je(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=Q;return Q<<=1,(Q&62914560)===0&&(Q=4194304),t}function $e(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,a,o,u,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,j=t.expirationTimes,ue=t.hiddenUpdates;for(a=S&~a;0<a;){var Ee=31-Pe(a),we=1<<Ee;R[Ee]=0,j[Ee]=-1;var ge=ue[Ee];if(ge!==null)for(ue[Ee]=null,Ee=0;Ee<ge.length;Ee++){var ye=ge[Ee];ye!==null&&(ye.lane&=-536870913)}a&=~we}o!==0&&It(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function It(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function $n(t,n){var a=n&-n;return a=(a&42)!==0?1:Kr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Kr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Jr(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:tx(t.type))}function Ws(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Ii=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ii,wn="__reactProps$"+Ii,Vn="__reactContainer$"+Ii,ds="__reactEvents$"+Ii,hl="__reactListeners$"+Ii,pl="__reactHandles$"+Ii,hs="__reactResources$"+Ii,Ra="__reactMarker$"+Ii;function Na(t){delete t[pn],delete t[wn],delete t[ds],delete t[hl],delete t[pl]}function Ji(t){var n=t[pn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Fg(t);t!==null;){if(a=t[pn])return a;t=Fg(t)}return n}t=a,a=t.parentNode}return null}function $i(t){if(t=t[pn]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ps(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Da(t){var n=t[hs];return n||(n=t[hs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(t){t[Ra]=!0}var ml=new Set,C={};function ie(t,n){me(t,n),me(t+"Capture",n)}function me(t,n){for(C[t]=n,t=0;t<n.length;t++)ml.add(n[t])}var fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),de={},ke={};function qe(t){return Kt.call(ke,t)?!0:Kt.call(de,t)?!1:fe.test(t)?ke[t]=!0:(de[t]=!0,!1)}function Ge(t,n,a){if(qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dt(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=nt(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bt=/[\n"\\]/g;function Ft(t){return t.replace(Bt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(t,n,a,o,u,d,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+st(n)):t.value!==""+st(n)&&(t.value=""+st(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yt(t,S,st(n)):a!=null?yt(t,S,st(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+st(R):t.removeAttribute("name")}function On(t,n,a,o,u,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Dt(t);return}a=a!=null?""+st(a):"",n=n!=null?""+st(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Dt(t)}function yt(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+st(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ei(t,n,a){if(n!=null&&(n=""+st(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+st(a):""}function Ei(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(P(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=st(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Dt(t)}function ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ht=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ht.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ti(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&sn(t,d,n[d])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ms(t){return Ua.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var _u=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qs=null,Ys=null;function Np(t){var n=$i(t);if(n&&(t=n.stateNode)){var a=t[wn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[wn]||null;if(!u)throw Error(s(90));Xe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":ei(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&yn(t,!!a.multiple,n,!1)}}}var yu=!1;function Dp(t,n,a){if(yu)return t(n,a);yu=!0;try{var o=t(n);return o}finally{if(yu=!1,(qs!==null||Ys!==null)&&(nc(),qs&&(n=qs,t=Ys,Ys=qs=null,Np(n),t)))for(n=0;n<t.length;n++)Np(t[n])}}function $r(t,n){var a=t.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(ta)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Su=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Su=!1}var La=null,Mu=null,gl=null;function Up(){if(gl)return gl;var t,n=Mu,a=n.length,o,u="value"in La?La.value:La.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Lp(){return!1}function jn(t){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:Lp,this.isPropagationStopped=Lp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=jn(gs),to=_({},gs,{view:0,detail:0}),w_=jn(to),Eu,Tu,no,bl=_({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Eu=t.screenX-no.screenX,Tu=t.screenY-no.screenY):Tu=Eu=0,no=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Op=jn(bl),C_=_({},bl,{dataTransfer:0}),R_=jn(C_),N_=_({},to,{relatedTarget:0}),Au=jn(N_),D_=_({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),U_=jn(D_),L_=_({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O_=jn(L_),P_=_({},gs,{data:0}),Pp=jn(P_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=B_[t])?!!n[t]:!1}function wu(){return F_}var H_=_({},to,{key:function(t){if(t.key){var n=z_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G_=jn(H_),k_=_({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=jn(k_),V_=_({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),j_=jn(V_),X_=_({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),W_=jn(X_),q_=_({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=jn(q_),Z_=_({},gs,{newState:0,oldState:0}),K_=jn(Z_),Q_=[9,13,27,32],Cu=ta&&"CompositionEvent"in window,io=null;ta&&"documentMode"in document&&(io=document.documentMode);var J_=ta&&"TextEvent"in window&&!io,Ip=ta&&(!Cu||io&&8<io&&11>=io),Bp=" ",Fp=!1;function Hp(t,n){switch(t){case"keyup":return Q_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function $_(t,n){switch(t){case"compositionend":return Gp(n);case"keypress":return n.which!==32?null:(Fp=!0,Bp);case"textInput":return t=n.data,t===Bp&&Fp?null:t;default:return null}}function e1(t,n){if(Zs)return t==="compositionend"||!Cu&&Hp(t,n)?(t=Up(),gl=Mu=La=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var t1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!t1[t.type]:n==="textarea"}function Vp(t,n,a,o){qs?Ys?Ys.push(o):Ys=[o]:qs=o,n=cc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,so=null;function n1(t){Tg(t,0)}function yl(t){var n=ps(t);if(an(n))return t}function jp(t,n){if(t==="change")return n}var Xp=!1;if(ta){var Ru;if(ta){var Nu="oninput"in document;if(!Nu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Nu=typeof Wp.oninput=="function"}Ru=Nu}else Ru=!1;Xp=Ru&&(!document.documentMode||9<document.documentMode)}function qp(){ao&&(ao.detachEvent("onpropertychange",Yp),so=ao=null)}function Yp(t){if(t.propertyName==="value"&&yl(so)){var n=[];Vp(n,so,t,bu(t)),Dp(n1,n)}}function i1(t,n,a){t==="focusin"?(qp(),ao=n,so=a,ao.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function a1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(so)}function s1(t,n){if(t==="click")return yl(n)}function r1(t,n){if(t==="input"||t==="change")return yl(n)}function o1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:o1;function ro(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Kt.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,n){var a=Zp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function Du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var l1=ta&&"documentMode"in document&&11>=document.documentMode,Ks=null,Uu=null,oo=null,Lu=!1;function $p(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Ks==null||Ks!==Qt(o)||(o=Ks,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=cc(Uu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ks)))}function xs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Qs={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},Ou={},em={};ta&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function vs(t){if(Ou[t])return Ou[t];if(!Qs[t])return t;var n=Qs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Ou[t]=n[a];return t}var tm=vs("animationend"),nm=vs("animationiteration"),im=vs("animationstart"),c1=vs("transitionrun"),u1=vs("transitionstart"),f1=vs("transitioncancel"),am=vs("transitionend"),sm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ai(t,n){sm.set(t,n),ie(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],Js=0,zu=0;function Ml(){for(var t=Js,n=zu=Js=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var d=hi[n];if(hi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&rm(a,u,d)}}function El(t,n,a,o){hi[Js++]=t,hi[Js++]=n,hi[Js++]=a,hi[Js++]=o,zu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Iu(t,n,a,o){return El(t,n,a,o),Tl(t)}function _s(t,n){return El(t,null,null,n),Tl(t)}function rm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Tl(t){if(50<No)throw No=0,qf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $s={};function d1(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,o){return new d1(t,n,a,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function om(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,d){var S=0;if(o=t,typeof t=="function")Bu(t)&&(S=1);else if(typeof t=="string")S=xb(t,a,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=ii(31,a,n,u),t.elementType=z,t.lanes=d,t;case N:return bs(a.children,u,d,n);case M:S=8,u|=24;break;case y:return t=ii(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case I:return t=ii(13,a,n,u),t.elementType=I,t.lanes=d,t;case D:return t=ii(19,a,n,u),t.elementType=D,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case G:S=9;break e;case w:S=11;break e;case B:S=14;break e;case T:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ii(S,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function bs(t,n,a,o){return t=ii(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function lm(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var cm=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=cm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Zt(n)},cm.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var er=[],tr=0,wl=null,lo=0,mi=[],gi=0,Oa=null,Fi=1,Hi="";function ia(t,n){er[tr++]=lo,er[tr++]=wl,wl=t,lo=n}function um(t,n,a){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Oa,Oa=t;var o=Fi;t=Hi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var d=32-Pe(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Fi=1<<32-Pe(n)+u|a<<u|o,Hi=d+t}else Fi=1<<d|a<<u|o,Hi=t}function Gu(t){t.return!==null&&(ia(t,1),um(t,1,0))}function ku(t){for(;t===wl;)wl=er[--tr],er[tr]=null,lo=er[--tr],er[tr]=null;for(;t===Oa;)Oa=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function fm(t,n){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Oa,Fi=n.id,Hi=n.overflow,Oa=t}var Cn=null,$t=null,At=!1,Pa=null,xi=!1,Vu=Error(s(519));function za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(pi(n,t)),Vu}function dm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[pn]=t,n[wn]=o,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Mt(Uo[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Rg(n.textContent,a)?(o.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),o.onScroll!=null&&Mt("scroll",n),o.onScrollEnd!=null&&Mt("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||za(t,!0)}function hm(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Cn=Cn.return}}function nr(t){if(t!==Cn)return!1;if(!At)return hm(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ld(t.type,t.memoizedProps)),a=!a),a&&$t&&za(t),hm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Bg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Bg(t)}else n===27?(n=$t,Ka(t.type)?(t=hd,hd=null,$t=t):$t=n):$t=Cn?_i(t.stateNode.nextSibling):null;return!0}function ys(){$t=Cn=null,At=!1}function ju(){var t=Pa;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Pa=null),t}function co(t){Pa===null?Pa=[t]:Pa.push(t)}var Xu=U(null),Ss=null,aa=null;function Ia(t,n,a){Me(Xu,n._currentValue),n._currentValue=a}function sa(t){t._currentValue=Xu.current,K(Xu)}function Wu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var j=0;j<n.length;j++)if(R.context===n[j]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Wu(d.return,a,t),o||(S=null);break e}d=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Wu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function ir(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;ni(u.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(u===ve.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}u=u.return}t!==null&&qu(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ms(t){Ss=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return pm(Ss,t)}function Rl(t,n){return Ss===null&&Ms(t),pm(t,n)}function pm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(s(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var h1=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},p1=r.unstable_scheduleCallback,m1=r.unstable_NormalPriority,gn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new h1,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&p1(m1,function(){t.controller.abort()})}var fo=null,Zu=0,ar=0,sr=null;function g1(t,n){if(fo===null){var a=fo=[];Zu=0,ar=$f(),sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(mm,mm),n}function mm(){if(--Zu===0&&fo!==null){sr!==null&&(sr.status="fulfilled");var t=fo;fo=null,ar=0,sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function x1(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var gm=O.S;O.S=function(t,n){$0=Ct(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&g1(t,n),gm!==null&&gm(t,n)};var Es=U(null);function Ku(){var t=Es.current;return t!==null?t:Jt.pooledCache}function Nl(t,n){n===null?Me(Es,Es.current):Me(Es,n.pool)}function xm(){var t=Ku();return t===null?null:{parent:gn._currentValue,pool:t}}var rr=Error(s(460)),Qu=Error(s(474)),Dl=Error(s(542)),Ul={then:function(){}};function vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _m(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t}throw As=n,rr}}function Ts(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,rr):a}}var As=null;function bm(){if(As===null)throw Error(s(459));var t=As;return As=null,t}function ym(t){if(t===rr||t===Dl)throw Error(s(483))}var or=null,ho=0;function Ll(t){var n=ho;return ho+=1,or===null&&(or=[]),_m(or,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sm(t){function n(se,Y){if(t){var ce=se.deletions;ce===null?(se.deletions=[Y],se.flags|=16):ce.push(Y)}}function a(se,Y){if(!t)return null;for(;Y!==null;)n(se,Y),Y=Y.sibling;return null}function o(se){for(var Y=new Map;se!==null;)se.key!==null?Y.set(se.key,se):Y.set(se.index,se),se=se.sibling;return Y}function u(se,Y){return se=na(se,Y),se.index=0,se.sibling=null,se}function d(se,Y,ce){return se.index=ce,t?(ce=se.alternate,ce!==null?(ce=ce.index,ce<Y?(se.flags|=67108866,Y):ce):(se.flags|=67108866,Y)):(se.flags|=1048576,Y)}function S(se){return t&&se.alternate===null&&(se.flags|=67108866),se}function R(se,Y,ce,Ae){return Y===null||Y.tag!==6?(Y=Fu(ce,se.mode,Ae),Y.return=se,Y):(Y=u(Y,ce),Y.return=se,Y)}function j(se,Y,ce,Ae){var rt=ce.type;return rt===N?Ee(se,Y,ce.props.children,Ae,ce.key):Y!==null&&(Y.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===T&&Ts(rt)===Y.type)?(Y=u(Y,ce.props),po(Y,ce),Y.return=se,Y):(Y=Al(ce.type,ce.key,ce.props,null,se.mode,Ae),po(Y,ce),Y.return=se,Y)}function ue(se,Y,ce,Ae){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ce.containerInfo||Y.stateNode.implementation!==ce.implementation?(Y=Hu(ce,se.mode,Ae),Y.return=se,Y):(Y=u(Y,ce.children||[]),Y.return=se,Y)}function Ee(se,Y,ce,Ae,rt){return Y===null||Y.tag!==7?(Y=bs(ce,se.mode,Ae,rt),Y.return=se,Y):(Y=u(Y,ce),Y.return=se,Y)}function we(se,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Fu(""+Y,se.mode,ce),Y.return=se,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case b:return ce=Al(Y.type,Y.key,Y.props,null,se.mode,ce),po(ce,Y),ce.return=se,ce;case A:return Y=Hu(Y,se.mode,ce),Y.return=se,Y;case T:return Y=Ts(Y),we(se,Y,ce)}if(P(Y)||W(Y))return Y=bs(Y,se.mode,ce,null),Y.return=se,Y;if(typeof Y.then=="function")return we(se,Ll(Y),ce);if(Y.$$typeof===L)return we(se,Rl(se,Y),ce);Ol(se,Y)}return null}function ge(se,Y,ce,Ae){var rt=Y!==null?Y.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return rt!==null?null:R(se,Y,""+ce,Ae);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case b:return ce.key===rt?j(se,Y,ce,Ae):null;case A:return ce.key===rt?ue(se,Y,ce,Ae):null;case T:return ce=Ts(ce),ge(se,Y,ce,Ae)}if(P(ce)||W(ce))return rt!==null?null:Ee(se,Y,ce,Ae,null);if(typeof ce.then=="function")return ge(se,Y,Ll(ce),Ae);if(ce.$$typeof===L)return ge(se,Y,Rl(se,ce),Ae);Ol(se,ce)}return null}function ye(se,Y,ce,Ae,rt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return se=se.get(ce)||null,R(Y,se,""+Ae,rt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case b:return se=se.get(Ae.key===null?ce:Ae.key)||null,j(Y,se,Ae,rt);case A:return se=se.get(Ae.key===null?ce:Ae.key)||null,ue(Y,se,Ae,rt);case T:return Ae=Ts(Ae),ye(se,Y,ce,Ae,rt)}if(P(Ae)||W(Ae))return se=se.get(ce)||null,Ee(Y,se,Ae,rt,null);if(typeof Ae.then=="function")return ye(se,Y,ce,Ll(Ae),rt);if(Ae.$$typeof===L)return ye(se,Y,ce,Rl(Y,Ae),rt);Ol(Y,Ae)}return null}function Je(se,Y,ce,Ae){for(var rt=null,Ut=null,et=Y,gt=Y=0,Tt=null;et!==null&&gt<ce.length;gt++){et.index>gt?(Tt=et,et=null):Tt=et.sibling;var Lt=ge(se,et,ce[gt],Ae);if(Lt===null){et===null&&(et=Tt);break}t&&et&&Lt.alternate===null&&n(se,et),Y=d(Lt,Y,gt),Ut===null?rt=Lt:Ut.sibling=Lt,Ut=Lt,et=Tt}if(gt===ce.length)return a(se,et),At&&ia(se,gt),rt;if(et===null){for(;gt<ce.length;gt++)et=we(se,ce[gt],Ae),et!==null&&(Y=d(et,Y,gt),Ut===null?rt=et:Ut.sibling=et,Ut=et);return At&&ia(se,gt),rt}for(et=o(et);gt<ce.length;gt++)Tt=ye(et,se,gt,ce[gt],Ae),Tt!==null&&(t&&Tt.alternate!==null&&et.delete(Tt.key===null?gt:Tt.key),Y=d(Tt,Y,gt),Ut===null?rt=Tt:Ut.sibling=Tt,Ut=Tt);return t&&et.forEach(function(ts){return n(se,ts)}),At&&ia(se,gt),rt}function ct(se,Y,ce,Ae){if(ce==null)throw Error(s(151));for(var rt=null,Ut=null,et=Y,gt=Y=0,Tt=null,Lt=ce.next();et!==null&&!Lt.done;gt++,Lt=ce.next()){et.index>gt?(Tt=et,et=null):Tt=et.sibling;var ts=ge(se,et,Lt.value,Ae);if(ts===null){et===null&&(et=Tt);break}t&&et&&ts.alternate===null&&n(se,et),Y=d(ts,Y,gt),Ut===null?rt=ts:Ut.sibling=ts,Ut=ts,et=Tt}if(Lt.done)return a(se,et),At&&ia(se,gt),rt;if(et===null){for(;!Lt.done;gt++,Lt=ce.next())Lt=we(se,Lt.value,Ae),Lt!==null&&(Y=d(Lt,Y,gt),Ut===null?rt=Lt:Ut.sibling=Lt,Ut=Lt);return At&&ia(se,gt),rt}for(et=o(et);!Lt.done;gt++,Lt=ce.next())Lt=ye(et,se,gt,Lt.value,Ae),Lt!==null&&(t&&Lt.alternate!==null&&et.delete(Lt.key===null?gt:Lt.key),Y=d(Lt,Y,gt),Ut===null?rt=Lt:Ut.sibling=Lt,Ut=Lt);return t&&et.forEach(function(Cb){return n(se,Cb)}),At&&ia(se,gt),rt}function qt(se,Y,ce,Ae){if(typeof ce=="object"&&ce!==null&&ce.type===N&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case b:e:{for(var rt=ce.key;Y!==null;){if(Y.key===rt){if(rt=ce.type,rt===N){if(Y.tag===7){a(se,Y.sibling),Ae=u(Y,ce.props.children),Ae.return=se,se=Ae;break e}}else if(Y.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===T&&Ts(rt)===Y.type){a(se,Y.sibling),Ae=u(Y,ce.props),po(Ae,ce),Ae.return=se,se=Ae;break e}a(se,Y);break}else n(se,Y);Y=Y.sibling}ce.type===N?(Ae=bs(ce.props.children,se.mode,Ae,ce.key),Ae.return=se,se=Ae):(Ae=Al(ce.type,ce.key,ce.props,null,se.mode,Ae),po(Ae,ce),Ae.return=se,se=Ae)}return S(se);case A:e:{for(rt=ce.key;Y!==null;){if(Y.key===rt)if(Y.tag===4&&Y.stateNode.containerInfo===ce.containerInfo&&Y.stateNode.implementation===ce.implementation){a(se,Y.sibling),Ae=u(Y,ce.children||[]),Ae.return=se,se=Ae;break e}else{a(se,Y);break}else n(se,Y);Y=Y.sibling}Ae=Hu(ce,se.mode,Ae),Ae.return=se,se=Ae}return S(se);case T:return ce=Ts(ce),qt(se,Y,ce,Ae)}if(P(ce))return Je(se,Y,ce,Ae);if(W(ce)){if(rt=W(ce),typeof rt!="function")throw Error(s(150));return ce=rt.call(ce),ct(se,Y,ce,Ae)}if(typeof ce.then=="function")return qt(se,Y,Ll(ce),Ae);if(ce.$$typeof===L)return qt(se,Y,Rl(se,ce),Ae);Ol(se,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint"?(ce=""+ce,Y!==null&&Y.tag===6?(a(se,Y.sibling),Ae=u(Y,ce),Ae.return=se,se=Ae):(a(se,Y),Ae=Fu(ce,se.mode,Ae),Ae.return=se,se=Ae),S(se)):a(se,Y)}return function(se,Y,ce,Ae){try{ho=0;var rt=qt(se,Y,ce,Ae);return or=null,rt}catch(et){if(et===rr||et===Dl)throw et;var Ut=ii(29,et,null,se.mode);return Ut.lanes=Ae,Ut.return=se,Ut}finally{}}}var ws=Sm(!0),Mm=Sm(!1),Ba=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),rm(t,null,a),n}return El(t,o,n,a),Tl(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}function ef(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var tf=!1;function go(){if(tf){var t=sr;if(t!==null)throw t}}function xo(t,n,a,o){tf=!1;var u=t.updateQueue;Ba=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var j=R,ue=j.next;j.next=null,S===null?d=ue:S.next=ue,S=j;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,R=Ee.lastBaseUpdate,R!==S&&(R===null?Ee.firstBaseUpdate=ue:R.next=ue,Ee.lastBaseUpdate=j))}if(d!==null){var we=u.baseState;S=0,Ee=ue=j=null,R=d;do{var ge=R.lane&-536870913,ye=ge!==R.lane;if(ye?(Et&ge)===ge:(o&ge)===ge){ge!==0&&ge===ar&&(tf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Je=t,ct=R;ge=n;var qt=a;switch(ct.tag){case 1:if(Je=ct.payload,typeof Je=="function"){we=Je.call(qt,we,ge);break e}we=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=ct.payload,ge=typeof Je=="function"?Je.call(qt,we,ge):Je,ge==null)break e;we=_({},we,ge);break e;case 2:Ba=!0}}ge=R.callback,ge!==null&&(t.flags|=64,ye&&(t.flags|=8192),ye=u.callbacks,ye===null?u.callbacks=[ge]:ye.push(ge))}else ye={lane:ge,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Ee===null?(ue=Ee=ye,j=we):Ee=Ee.next=ye,S|=ge;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ye=R,R=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);Ee===null&&(j=we),u.baseState=j,u.firstBaseUpdate=ue,u.lastBaseUpdate=Ee,d===null&&(u.shared.lanes=0),Xa|=S,t.lanes=S,t.memoizedState=we}}function Em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var lr=U(null),Pl=U(0);function Am(t,n){t=pa,Me(Pl,t),Me(lr,n),pa=t|n.baseLanes}function nf(){Me(Pl,pa),Me(lr,lr.current)}function af(){pa=Pl.current,K(lr),K(Pl)}var ai=U(null),vi=null;function Ga(t){var n=t.alternate;Me(dn,dn.current&1),Me(ai,t),vi===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(vi=t)}function sf(t){Me(dn,dn.current),Me(ai,t),vi===null&&(vi=t)}function wm(t){t.tag===22?(Me(dn,dn.current),Me(ai,t),vi===null&&(vi=t)):ka()}function ka(){Me(dn,dn.current),Me(ai,ai.current)}function si(t){K(ai),vi===t&&(vi=null),K(dn)}var dn=U(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,mt=null,Xt=null,xn=null,Il=!1,cr=!1,Cs=!1,Bl=0,vo=0,ur=null,v1=0;function un(){throw Error(s(321))}function rf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function of(t,n,a,o,u,d){return ra=d,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?u0:Sf,Cs=!1,d=a(o,u),Cs=!1,cr&&(d=Rm(n,a,o,u)),Cm(t),d}function Cm(t){O.H=yo;var n=Xt!==null&&Xt.next!==null;if(ra=0,xn=Xt=mt=null,Il=!1,vo=0,ur=null,n)throw Error(s(300));t===null||vn||(t=t.dependencies,t!==null&&Cl(t)&&(vn=!0))}function Rm(t,n,a,o){mt=t;var u=0;do{if(cr&&(ur=null),vo=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,xn=Xt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=f0,d=n(a,o)}while(cr);return d}function _1(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(mt.flags|=1024),n}function lf(){var t=Bl!==0;return Bl=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uf(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}ra=0,xn=Xt=mt=null,cr=!1,vo=Bl=0,ur=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?mt.memoizedState=xn=t:xn=xn.next=t,xn}function hn(){if(Xt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=xn===null?mt.memoizedState:xn.next;if(n!==null)xn=n,Xt=t;else{if(t===null)throw mt.alternate===null?Error(s(467)):Error(s(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},xn===null?mt.memoizedState=xn=t:xn=xn.next=t}return xn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=vo;return vo+=1,ur===null&&(ur=[]),t=_m(ur,t,n),n=mt,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?u0:Sf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===L)return Rn(t)}throw Error(s(438,String(t)))}function ff(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function oa(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=hn();return df(n,Xt,t)}function df(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=S=null,j=null,ue=n,Ee=!1;do{var we=ue.lane&-536870913;if(we!==ue.lane?(Et&we)===we:(ra&we)===we){var ge=ue.revertLane;if(ge===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),we===ar&&(Ee=!0);else if((ra&ge)===ge){ue=ue.next,ge===ar&&(Ee=!0);continue}else we={lane:0,revertLane:ue.revertLane,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},j===null?(R=j=we,S=d):j=j.next=we,mt.lanes|=ge,Xa|=ge;we=ue.action,Cs&&a(d,we),d=ue.hasEagerState?ue.eagerState:a(d,we)}else ge={lane:we,revertLane:ue.revertLane,gesture:ue.gesture,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},j===null?(R=j=ge,S=d):j=j.next=ge,mt.lanes|=we,Xa|=we;ue=ue.next}while(ue!==null&&ue!==n);if(j===null?S=d:j.next=R,!ni(d,t.memoizedState)&&(vn=!0,Ee&&(a=sr,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=j,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);ni(d,n.memoizedState)||(vn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Nm(t,n,a){var o=mt,u=hn(),d=At;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ni((Xt||u).memoizedState,a);if(S&&(u.memoizedState=a,vn=!0),u=u.queue,gf(Lm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||xn!==null&&xn.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},Um.bind(null,o,u,a,n),null),Jt===null)throw Error(s(349));d||(ra&127)!==0||Dm(o,n,a)}return a}function Dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=Fl(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Um(t,n,a,o){n.value=a,n.getSnapshot=o,Om(n)&&Pm(t)}function Lm(t,n,a){return a(function(){Om(n)&&Pm(t)})}function Om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function Pm(t){var n=_s(t,2);n!==null&&Zn(n,t,2)}function pf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Cs){De(!0);try{a()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function zm(t,n,a,o){return t.baseState=a,df(t,Xt,typeof o=="function"?o:oa)}function b1(t,n,a,o,u){if(jl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Im(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=O.T,S={};O.T=S;try{var R=a(u,o),j=O.S;j!==null&&j(S,R),Bm(t,n,R)}catch(ue){mf(t,n,ue)}finally{d!==null&&S.types!==null&&(d.types=S.types),O.T=d}}else try{d=a(u,o),Bm(t,n,d)}catch(ue){mf(t,n,ue)}}function Bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(t,n,o)},function(o){return mf(t,n,o)}):Fm(t,n,a)}function Fm(t,n,a){n.status="fulfilled",n.value=a,Hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Hm(n),n=n.next;while(n!==o)}t.action=null}function Hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Gm(t,n){return n}function km(t,n){if(At){var a=Jt.formState;if(a!==null){e:{var o=mt;if(At){if($t){t:{for(var u=$t,d=xi;u.nodeType!==8;){if(!d){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=_i(u.nextSibling),o=u.data==="F!";break e}}za(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:n},a.queue=o,a=o0.bind(null,mt,o),o.dispatch=a,o=pf(!1),d=yf.bind(null,mt,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=b1.bind(null,mt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vm(t){var n=hn();return jm(n,Xt,t)}function jm(t,n,a){if(n=df(t,n,Gm)[0],t=Gl(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(S){throw S===rr?Dl:S}else o=n;n=hn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,fr(9,{destroy:void 0},y1.bind(null,u,a),null)),[o,d,t]}function y1(t,n){t.action=n}function Xm(t){var n=hn(),a=Xt;if(a!==null)return jm(n,a,t);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function fr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=Fl(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return hn().memoizedState}function kl(t,n,a,o){var u=Hn();mt.flags|=t,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=hn();o=o===void 0?null:o;var d=u.memoizedState.inst;Xt!==null&&o!==null&&rf(o,Xt.memoizedState.deps)?u.memoizedState=fr(n,d,a,o):(mt.flags|=t,u.memoizedState=fr(1|n,d,a,o))}function qm(t,n){kl(8390656,8,t,n)}function gf(t,n){Vl(2048,8,t,n)}function S1(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=Fl(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=hn().memoizedState;return S1({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zm(t,n){return Vl(4,2,t,n)}function Km(t,n){return Vl(4,4,t,n)}function Qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Jm(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Qm.bind(null,n,t),a)}function xf(){}function $m(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function e0(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=t(),Cs){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[o,n],o}function vf(t,n,a){return a===void 0||(ra&1073741824)!==0&&(Et&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=tg(),mt.lanes|=t,Xa|=t,a)}function t0(t,n,a,o){return ni(a,n)?a:lr.current!==null?(t=vf(t,a,o),ni(t,n)||(vn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(Et&261930)===0?(vn=!0,t.memoizedState=a):(t=tg(),mt.lanes|=t,Xa|=t,n)}function n0(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var S=O.T,R={};O.T=R,yf(t,!1,n,a);try{var j=u(),ue=O.S;if(ue!==null&&ue(R,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Ee=x1(j,o);bo(t,n,Ee,li(t))}else bo(t,n,o,li(t))}catch(we){bo(t,n,{then:function(){},status:"rejected",reason:we},li())}finally{H.p=d,S!==null&&R.types!==null&&(S.types=R.types),O.T=S}}function M1(){}function _f(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=i0(t).queue;n0(t,u,n,te,a===null?M1:function(){return a0(t),a(o)})}function i0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function a0(t){var n=i0(t);n.next===null&&(n=t.alternate.memoizedState),bo(t,n.next.queue,{},li())}function bf(){return Rn(Io)}function s0(){return hn().memoizedState}function r0(){return hn().memoizedState}function E1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Fa(a);var o=Ha(n,t,a);o!==null&&(Zn(o,n,a),mo(o,n,a)),n={cache:Yu()},t.payload=n;return}n=n.return}}function T1(t,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jl(t)?l0(n,a):(a=Iu(t,n,a,o),a!==null&&(Zn(a,t,o),c0(a,n,o)))}function o0(t,n,a){var o=li();bo(t,n,a,o)}function bo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(t))l0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,R=d(S,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,S))return El(t,n,u,0),Jt===null&&Ml(),!1}catch{}finally{}if(a=Iu(t,n,u,o),a!==null)return Zn(a,t,o),c0(a,n,o),!0}return!1}function yf(t,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(n)throw Error(s(479))}else n=Iu(t,a,o,2),n!==null&&Zn(n,t,2)}function jl(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function l0(t,n){cr=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function c0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}var yo={readContext:Rn,use:Hl,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};yo.useEffectEvent=un;var u0={readContext:Rn,use:Hl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,kl(4194308,4,Qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return kl(4194308,4,t,n)},useInsertionEffect:function(t,n){kl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(Cs){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Cs){De(!0);try{a(n)}finally{De(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=T1.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=o0.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(t,n){var a=Hn();return vf(a,t,n)},useTransition:function(){var t=pf(!1);return t=n0.bind(null,mt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=Hn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Jt===null)throw Error(s(349));(Et&127)!==0||Dm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,qm(Lm.bind(null,o,d,t),[t]),o.flags|=2048,fr(9,{destroy:void 0},Um.bind(null,o,d,a,n),null),a},useId:function(){var t=Hn(),n=Jt.identifierPrefix;if(At){var a=Hi,o=Fi;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=v1++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:bf,useFormState:km,useActionState:km,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yf.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Hn().memoizedState=E1.bind(null,mt)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Rn,use:Hl,useCallback:$m,useContext:Rn,useEffect:gf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:e0,useReducer:Gl,useRef:Wm,useState:function(){return Gl(oa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=hn();return t0(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Gl(oa)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Nm,useId:s0,useHostTransitionStatus:bf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=hn();return zm(a,Xt,t,n)},useMemoCache:ff,useCacheRefresh:r0};Sf.useEffectEvent=Ym;var f0={readContext:Rn,use:Hl,useCallback:$m,useContext:Rn,useEffect:gf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:e0,useReducer:hf,useRef:Wm,useState:function(){return hf(oa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=hn();return Xt===null?vf(a,t,n):t0(a,Xt.memoizedState,t,n)},useTransition:function(){var t=hf(oa)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Nm,useId:s0,useHostTransitionStatus:bf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=hn();return Xt!==null?zm(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:r0};f0.useEffectEvent=Ym;function Mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=li(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(Zn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=li(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(Zn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(t,o,a),n!==null&&(Zn(n,t,a),mo(n,t,a))}};function d0(t,n,a,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,d):!0}function h0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ef.enqueueReplaceState(n,n.state,null)}function Rs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function p0(t){Sl(t)}function m0(t){console.error(t)}function g0(t){Sl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function x0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function v0(t){return t=Fa(t),t.tag=3,t}function _0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){x0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){x0(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function A1(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?ic():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(t,o,u)),!1}throw Error(s(435,a.tag))}return Kf(t,o,u),ic(),!1}if(At)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Vu&&(t=Error(s(422),{cause:o}),co(pi(t,a)))):(o!==Vu&&(n=Error(s(423),{cause:o}),co(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=pi(o,a),u=Tf(t.stateNode,o,u),ef(t,u),fn!==4&&(fn=2)),!1;var d=Error(s(520),{cause:o});if(d=pi(d,a),Ro===null?Ro=[d]:Ro.push(d),fn!==4&&(fn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tf(a.stateNode,o,t),ef(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wa===null||!Wa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=v0(u),_0(u,t,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),vn=!1;function Nn(t,n,a,o){n.child=t===null?Mm(n,null,a,o):ws(n,t.child,a,o)}function b0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Ms(n),o=of(t,n,a,S,d,u),R=lf(),t!==null&&!vn?(cf(t,n,u),la(t,n,u)):(At&&R&&Gu(n),n.flags|=1,Nn(t,n,o,u),n.child)}function y0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Bu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,S0(t,n,d,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Of(t,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(S,o)&&t.ref===n.ref)return la(t,n,u)}return n.flags|=1,t=na(d,o),t.ref=n.ref,t.return=n,n.child=t}function S0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ro(d,o)&&t.ref===n.ref)if(vn=!1,n.pendingProps=o=d,Of(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,la(t,n,u)}return wf(t,n,a,o,u)}function M0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return E0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?Am(n,d):nf(),wm(n);else return o=n.lanes=536870912,E0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),Am(n,d),ka(),n.memoizedState=null):(t!==null&&Nl(n,null),nf(),ka());return Nn(t,n,u,a),n.child}function So(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function E0(t,n,a,o,u){var d=Ku();return d=d===null?null:{parent:gn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Nl(n,null),nf(),wm(n),t!==null&&ir(t,n,o,!0),n.childLanes=u,null}function Wl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function T0(t,n,a){return ws(n,t.child,null,a),t=Wl(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function w1(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,So(null,t);if(sf(n),(t=$t)?(t=Ig(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,Cn=n,$t=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return Wl(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=T0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||ir(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(o=Jt,o!==null&&(S=$n(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,_s(t,S),Zn(o,t,S),Af;ic(),n=T0(t,n,a)}else t=d.treeContext,$t=_i(S.nextSibling),Cn=n,At=!0,Pa=null,xi=!1,t!==null&&fm(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=na(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function wf(t,n,a,o,u){return Ms(n),a=of(t,n,a,o,void 0,u),o=lf(),t!==null&&!vn?(cf(t,n,u),la(t,n,u)):(At&&o&&Gu(n),n.flags|=1,Nn(t,n,a,u),n.child)}function A0(t,n,a,o,u,d){return Ms(n),n.updateQueue=null,a=Rm(n,o,a,u),Cm(t),o=lf(),t!==null&&!vn?(cf(t,n,d),la(t,n,d)):(At&&o&&Gu(n),n.flags|=1,Nn(t,n,a,d),n.child)}function w0(t,n,a,o,u){if(Ms(n),n.stateNode===null){var d=$s,S=a.contextType;typeof S=="object"&&S!==null&&(d=Rn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ju(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Rn(S):$s,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Mf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Ef.enqueueReplaceState(d,d.state,null),xo(n,o,d,u),go(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,j=Rs(a,R);d.props=j;var ue=d.context,Ee=a.contextType;S=$s,typeof Ee=="object"&&Ee!==null&&(S=Rn(Ee));var we=a.getDerivedStateFromProps;Ee=typeof we=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Ee||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ue!==S)&&h0(n,d,o,S),Ba=!1;var ge=n.memoizedState;d.state=ge,xo(n,o,d,u),go(),ue=n.memoizedState,R||ge!==ue||Ba?(typeof we=="function"&&(Mf(n,a,we,o),ue=n.memoizedState),(j=Ba||d0(n,a,j,o,ge,ue,S))?(Ee||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ue),d.props=o,d.state=ue,d.context=S,o=j):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,$u(t,n),S=n.memoizedProps,Ee=Rs(a,S),d.props=Ee,we=n.pendingProps,ge=d.context,ue=a.contextType,j=$s,typeof ue=="object"&&ue!==null&&(j=Rn(ue)),R=a.getDerivedStateFromProps,(ue=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==we||ge!==j)&&h0(n,d,o,j),Ba=!1,ge=n.memoizedState,d.state=ge,xo(n,o,d,u),go();var ye=n.memoizedState;S!==we||ge!==ye||Ba||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof R=="function"&&(Mf(n,a,R,o),ye=n.memoizedState),(Ee=Ba||d0(n,a,Ee,o,ge,ye,j)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(ue||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ye,j),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ye,j)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ye),d.props=o,d.state=ye,d.context=j,o=Ee):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ws(n,t.child,null,u),n.child=ws(n,null,a,u)):Nn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=la(t,n,u),t}function C0(t,n,a,o){return ys(),n.flags|=256,Nn(t,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(t){return{baseLanes:t,cachePool:xm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function R0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Ga(n):ka(),(t=$t)?(t=Ig(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,Cn=n,$t=null)):t=null,t===null)throw za(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ka(),u=n.mode,R=Yl({mode:"hidden",children:R},u),o=bs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Rf(a),o.childLanes=Nf(t,S,a),n.memoizedState=Cf,So(null,o)):(Ga(n),Df(n,R))}var j=t.memoizedState;if(j!==null&&(R=j.dehydrated,R!==null)){if(d)n.flags&256?(Ga(n),n.flags&=-257,n=Uf(t,n,a)):n.memoizedState!==null?(ka(),n.child=t.child,n.flags|=128,n=null):(ka(),R=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),R=bs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,ws(n,t.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Nf(t,S,a),n.memoizedState=Cf,n=So(null,o));else if(Ga(n),dd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ue=S.dgst;S=ue,o=Error(s(419)),o.stack="",o.digest=S,co({value:o,source:null,stack:null}),n=Uf(t,n,a)}else if(vn||ir(t,n,a,!1),S=(a&t.childLanes)!==0,vn||S){if(S=Jt,S!==null&&(o=$n(S,a),o!==0&&o!==j.retryLane))throw j.retryLane=o,_s(t,o),Zn(S,t,o),Af;fd(R)||ic(),n=Uf(t,n,a)}else fd(R)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,$t=_i(R.nextSibling),Cn=n,At=!0,Pa=null,xi=!1,t!==null&&fm(n,t),n=Df(n,o.children),n.flags|=4096);return n}return u?(ka(),R=o.fallback,u=n.mode,j=t.child,ue=j.sibling,o=na(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,ue!==null?R=na(ue,R):(R=bs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,So(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Rf(a):(u=R.cachePool,u!==null?(j=gn._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=xm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Nf(t,S,a),n.memoizedState=Cf,So(t.child,o)):(Ga(n),a=t.child,t=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Df(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function Uf(t,n,a){return ws(n,t.child,null,a),t=Df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function N0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Wu(t.return,n,a)}function Lf(t,n,a,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function D0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=dn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,Me(dn,S),Nn(t,n,o,a),o=At?lo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&N0(t,a,n);else if(t.tag===19)N0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Lf(n,!0,a,null,d,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ir(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=na(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=na(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function C1(t,n,a){switch(n.tag){case 3:_e(n,n.stateNode.containerInfo),Ia(n,gn,t.memoizedState.cache),ys();break;case 27:case 5:be(n);break;case 4:_e(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?R0(t,n,a):(Ga(n),t=la(t,n,a),t!==null?t.sibling:null);Ga(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ir(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return D0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(dn,dn.current),o)break;return null;case 22:return n.lanes=0,M0(t,n,a,n.pendingProps);case 24:Ia(n,gn,t.memoizedState.cache)}return la(t,n,a)}function U0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Of(t,a)&&(n.flags&128)===0)return vn=!1,C1(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,At&&(n.flags&1048576)!==0&&um(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ts(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=Rs(t,o),n.tag=1,n=w0(null,n,t,o,a)):(n.tag=0,n=wf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=b0(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=y0(null,n,t,o,a);break e}}throw n=X(t)||t,Error(s(306,n,""))}}return n;case 0:return wf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rs(o,n.pendingProps),w0(t,n,o,u,a);case 3:e:{if(_e(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,$u(t,n),xo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ia(n,gn,o),o!==d.cache&&qu(n,[gn],a,!0),go(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=C0(t,n,o,a);break e}else if(o!==u){u=pi(Error(s(424)),n),co(u),n=C0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=_i(t.firstChild),Cn=n,At=!0,Pa=null,xi=!0,a=Mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ys(),o===u){n=la(t,n,a);break e}Nn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=uc(q.current).createElement(a),o[pn]=n,o[wn]=t,Dn(o,a,t),mn(o),n.stateNode=o):n.memoizedState=Vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return be(n),t===null&&At&&(o=n.stateNode=Hg(n.type,n.pendingProps,q.current),Cn=n,xi=!0,u=$t,Ka(n.type)?(hd=u,$t=_i(o.firstChild)):$t=u),Nn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=$t)&&(o=ab(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Cn=n,$t=_i(o.firstChild),xi=!1,u=!0):u=!1),u||za(n)),be(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,ld(u,d)?o=null:S!==null&&ld(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,_1,null,null,a),Io._currentValue=u),ql(t,n),Nn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=$t)&&(a=sb(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Cn=n,$t=null,t=!0):t=!1),t||za(n)),null;case 13:return R0(t,n,a);case 4:return _e(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ws(n,null,o,a):Nn(t,n,o,a),n.child;case 11:return b0(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ia(n,n.type,o.value),Nn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ms(n),u=Rn(u),o=o(u),n.flags|=1,Nn(t,n,o,a),n.child;case 14:return y0(t,n,n.type,n.pendingProps,a);case 15:return S0(t,n,n.type,n.pendingProps,a);case 19:return D0(t,n,a);case 31:return w1(t,n,a);case 22:return M0(t,n,a,n.pendingProps);case 24:return Ms(n),o=Rn(gn),t===null?(u=Ku(),u===null&&(u=Jt,d=Yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ju(n),Ia(n,gn,u)):((t.lanes&a)!==0&&($u(t,n),xo(n,null,null,a),go()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,gn,o)):(o=d.cache,Ia(n,gn,o),o!==u.cache&&qu(n,[gn],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ca(t){t.flags|=4}function Pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(sg())t.flags|=8192;else throw As=Ul,Qu}else t.flags&=-16777217}function L0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yg(n))if(sg())t.flags|=8192;else throw As=Ul,Qu}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,mr|=n)}function Mo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function R1(t,n,a){var o=n.pendingProps;switch(ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(gn),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(nr(n)?ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),en(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ca(n),d!==null?(en(n),L0(n,d)):(en(n),Pf(n,u,null,o,a))):d?d!==t.memoizedState?(ca(n),en(n),L0(n,d)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ca(n),en(n),Pf(n,u,t,o,a)),null;case 27:if(Ue(n),a=q.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=ae.current,nr(n)?dm(n):(t=Hg(u,o,a),n.stateNode=t,ca(n))}return en(n),null;case 5:if(Ue(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(d=ae.current,nr(n))dm(n);else{var S=uc(q.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[pn]=n,d[wn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Dn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ca(n)}}return en(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=q.current,nr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[pn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Rg(t.nodeValue,a)),t||za(n,!0)}else t=uc(t).createTextNode(o),t[pn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=nr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[pn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=nr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[pn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),en(n),null);case 4:return Ce(),t===null&&id(n.stateNode.containerInfo),en(n),null;case 10:return sa(n.type),en(n),null;case 19:if(K(dn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Mo(o,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=zl(t),d!==null){for(n.flags|=128,Mo(o,!1),t=d.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)om(a,t),a=a.sibling;return Me(dn,dn.current&1|2),At&&ia(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ct()>ec&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=zl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return en(n),null}else 2*Ct()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ct(),t.sibling=null,a=dn.current,Me(dn,u?a&1|2:a&1),At&&ia(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return si(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&K(Es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(gn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function N1(t,n){switch(ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return sa(gn),Ce(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ue(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(dn),null;case 4:return Ce(),null;case 10:return sa(n.type),null;case 22:case 23:return si(n),af(),t!==null&&K(Es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return sa(gn),null;case 25:return null;default:return null}}function O0(t,n){switch(ku(n),n.tag){case 3:sa(gn),Ce();break;case 26:case 27:case 5:Ue(n);break;case 4:Ce();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:K(dn);break;case 10:sa(n.type);break;case 22:case 23:si(n),af(),t!==null&&K(Es);break;case 24:sa(gn)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Va(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var j=a,ue=R;try{ue()}catch(Ee){kt(u,j,Ee)}}}o=o.next}while(o!==d)}}catch(Ee){kt(n,n.return,Ee)}}function P0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Tm(n,a)}catch(o){kt(t,t.return,o)}}}function z0(t,n,a){a.props=Rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Gi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function I0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function zf(t,n,a){try{var o=t.stateNode;J1(o,t.type,a,n),o[wn]=n}catch(u){kt(t,t.return,u)}}function B0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,a),t=t.sibling;t!==null;)Bf(t,n,a),t=t.sibling}function Kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function F0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[pn]=t,n[wn]=a}catch(d){kt(t,t.return,d)}}var ua=!1,_n=!1,Ff=!1,H0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function D1(t,n){if(t=t.containerInfo,rd=xc,t=Jp(t),Du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,R=-1,j=-1,ue=0,Ee=0,we=t,ge=null;t:for(;;){for(var ye;we!==a||u!==0&&we.nodeType!==3||(R=S+u),we!==d||o!==0&&we.nodeType!==3||(j=S+o),we.nodeType===3&&(S+=we.nodeValue.length),(ye=we.firstChild)!==null;)ge=we,we=ye;for(;;){if(we===t)break t;if(ge===a&&++ue===u&&(R=S),ge===d&&++Ee===o&&(j=S),(ye=we.nextSibling)!==null)break;we=ge,ge=we.parentNode}we=ye}a=R===-1||j===-1?null:{start:R,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:t,selectionRange:a},xc=!1,Tn=n;Tn!==null;)if(n=Tn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Tn=t;else for(;Tn!==null;){switch(n=Tn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Je=Rs(a.type,u);t=o.getSnapshotBeforeUpdate(Je,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){kt(a,a.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ud(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Tn=t;break}Tn=n.return}}function G0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),o&4&&Eo(5,a);break;case 1:if(da(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){kt(a,a.return,S)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){kt(a,a.return,S)}}o&64&&P0(a),o&512&&To(a,a.return);break;case 3:if(da(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tm(t,n)}catch(S){kt(a,a.return,S)}}break;case 27:n===null&&o&4&&F0(a);case 26:case 5:da(t,a),n===null&&o&4&&I0(a),o&512&&To(a,a.return);break;case 12:da(t,a);break;case 31:da(t,a),o&4&&j0(t,a);break;case 13:da(t,a),o&4&&X0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=H1.bind(null,a),rb(t,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||_n,u=ua;var d=_n;ua=o,(_n=n)&&!d?ha(t,a,(a.subtreeFlags&8772)!==0):da(t,a),ua=u,_n=d}break;case 30:break;default:da(t,a)}}function k0(t){var n=t.alternate;n!==null&&(t.alternate=null,k0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Na(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Xn=!1;function fa(t,n,a){for(a=a.child;a!==null;)V0(t,n,a),a=a.sibling}function V0(t,n,a){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(J,a)}catch{}switch(a.tag){case 26:_n||Gi(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||Gi(a,n);var o=rn,u=Xn;Ka(a.type)&&(rn=a.stateNode,Xn=!1),fa(t,n,a),Oo(a.stateNode),rn=o,Xn=u;break;case 5:_n||Gi(a,n);case 6:if(o=rn,u=Xn,rn=null,fa(t,n,a),rn=o,Xn=u,rn!==null)if(Xn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{rn.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:rn!==null&&(Xn?(t=rn,Pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Mr(t)):Pg(rn,a.stateNode));break;case 4:o=rn,u=Xn,rn=a.stateNode.containerInfo,Xn=!0,fa(t,n,a),rn=o,Xn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),_n||Va(4,a,n),fa(t,n,a);break;case 1:_n||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&z0(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,fa(t,n,a),_n=o;break;default:fa(t,n,a)}}function j0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Mr(t)}catch(a){kt(n,n.return,a)}}}function X0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mr(t)}catch(a){kt(n,n.return,a)}}function U1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new H0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new H0),n;default:throw Error(s(435,t.tag))}}function Ql(t,n){var a=U1(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=G1.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(Ka(R.type)){rn=R.stateNode,Xn=!1;break e}break;case 5:rn=R.stateNode,Xn=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if(rn===null)throw Error(s(160));V0(d,S,u),rn=null,Xn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)W0(n,t),n=n.sibling}var wi=null;function W0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Va(3,t,t.return),Eo(3,t),Va(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(_n||a===null||Gi(a,a.return)),o&64&&ua&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Wn(n,t),qn(t),o&512&&(_n||a===null||Gi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ra]||d[pn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,a),d[pn]=t,mn(d),o=d;break e;case"link":var S=Wg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=Wg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[pn]=t,mn(d),o=d}t.stateNode=o}else qg(u,t.type,t.stateNode);else t.stateNode=Xg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?qg(u,t.type,t.stateNode):Xg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&zf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(_n||a===null||Gi(a,a.return)),a!==null&&o&4&&zf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(_n||a===null||Gi(a,a.return)),t.flags&32){u=t.stateNode;try{ti(u,"")}catch(Je){kt(t,t.return,Je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,zf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Je){kt(t,t.return,Je)}}break;case 3:if(hc=null,u=wi,wi=fc(n.containerInfo),Wn(n,t),wi=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(Je){kt(t,t.return,Je)}Ff&&(Ff=!1,q0(t));break;case 4:o=wi,wi=fc(t.stateNode.containerInfo),Wn(n,t),qn(t),wi=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=Ct()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,ue=ua,Ee=_n;if(ua=ue||u,_n=Ee||j,Wn(n,t),_n=Ee,ua=ue,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||ua||_n||Ns(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(d=j.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=j.stateNode;var we=j.memoizedProps.style,ge=we!=null&&we.hasOwnProperty("display")?we.display:null;R.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(Je){kt(j,j.return,Je)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(Je){kt(j,j.return,Je)}}}else if(n.tag===18){if(a===null){j=n;try{var ye=j.stateNode;u?zg(ye,!0):zg(j.stateNode,!1)}catch(Je){kt(j,j.return,Je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(B0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=If(t);Kl(t,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(ti(S,""),a.flags&=-33);var R=If(t);Kl(t,R,S);break;case 3:case 4:var j=a.stateNode.containerInfo,ue=If(t);Bf(t,ue,j);break;default:throw Error(s(161))}}catch(Ee){kt(t,t.return,Ee)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)G0(t,n.alternate,n),n=n.sibling}function Ns(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Ns(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&z0(n,n.return,a),Ns(n);break;case 27:Oo(n.stateNode);case 26:case 5:Gi(n,n.return),Ns(n);break;case 22:n.memoizedState===null&&Ns(n);break;case 30:Ns(n);break;default:Ns(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:ha(u,d,a),Eo(4,d);break;case 1:if(ha(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ue){kt(o,o.return,ue)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)Em(j[u],R)}catch(ue){kt(o,o.return,ue)}}a&&S&64&&P0(d),To(d,d.return);break;case 27:F0(d);case 26:case 5:ha(u,d,a),a&&o===null&&S&4&&I0(d),To(d,d.return);break;case 12:ha(u,d,a);break;case 31:ha(u,d,a),a&&S&4&&j0(u,d);break;case 13:ha(u,d,a),a&&S&4&&X0(u,d);break;case 22:d.memoizedState===null&&ha(u,d,a),To(d,d.return);break;case 30:break;default:ha(u,d,a)}n=n.sibling}}function Hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Y0(t,n,a,o),n=n.sibling}function Y0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&Eo(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){kt(n,n.return,j)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ci(t,n,a,o):Ao(t,n):d._visibility&2?Ci(t,n,a,o):(d._visibility|=2,dr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(S,n);break;case 24:Ci(t,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Ci(t,n,a,o)}}function dr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,R=a,j=o,ue=S.flags;switch(S.tag){case 0:case 11:case 15:dr(d,S,R,j,u),Eo(8,S);break;case 23:break;case 22:var Ee=S.stateNode;S.memoizedState!==null?Ee._visibility&2?dr(d,S,R,j,u):Ao(d,S):(Ee._visibility|=2,dr(d,S,R,j,u)),u&&ue&2048&&Hf(S.alternate,S);break;case 24:dr(d,S,R,j,u),u&&ue&2048&&Gf(S.alternate,S);break;default:dr(d,S,R,j,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Gf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var wo=8192;function hr(t,n,a){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)Z0(t,n,a),t=t.sibling}function Z0(t,n,a){switch(t.tag){case 26:hr(t,n,a),t.flags&wo&&t.memoizedState!==null&&vb(a,wi,t.memoizedState,t.memoizedProps);break;case 5:hr(t,n,a);break;case 3:case 4:var o=wi;wi=fc(t.stateNode.containerInfo),hr(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,hr(t,n,a),wo=o):hr(t,n,a));break;default:hr(t,n,a)}}function K0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,J0(o,t)}K0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Q0(t),t=t.sibling}function Q0(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Co(t);break;default:Co(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,J0(o,t)}K0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function J0(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else e:for(a=t;Tn!==null;){o=Tn;var u=o.sibling,d=o.return;if(k0(o),o===a){Tn=null;break e}if(u!==null){u.return=d,Tn=u;break e}Tn=d}}}var L1={getCacheForType:function(t){var n=Rn(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(gn).controller.signal}},O1=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Jt=null,St=null,Et=0,Gt=0,ri=null,ja=!1,pr=!1,kf=!1,pa=0,fn=0,Xa=0,Ds=0,Vf=0,oi=0,mr=0,Ro=null,Yn=null,jf=!1,$l=0,$0=0,ec=1/0,tc=null,Wa=null,Sn=0,qa=null,gr=null,ma=0,Xf=0,Wf=null,eg=null,No=0,qf=null;function li(){return(Ot&2)!==0&&Et!==0?Et&-Et:O.T!==null?$f():Jr()}function tg(){if(oi===0)if((Et&536870912)===0||At){var t=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Zn(t,n,a){(t===Jt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(xr(t,0),Ya(t,Et,oi,!1)),Ye(t,a),((Ot&2)===0||t!==Jt)&&(t===Jt&&((Ot&2)===0&&(Ds|=a),fn===4&&Ya(t,Et,oi,!1)),ki(t))}function ng(t,n,a){if((Ot&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),u=o?I1(t,n):Zf(t,n,!0),d=o;do{if(u===0){pr&&!o&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!P1(a)){u=Zf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;u=Ro;var j=R.current.memoizedState.isDehydrated;if(j&&(xr(R,S).flags|=256),S=Zf(R,S,!1),S!==2){if(kf&&!j){R.errorRecoveryDisabledLanes|=d,Ds|=d,u=4;break e}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){xr(t,0),Ya(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,oi,!ja);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$l+300-Ct(),10<u)){if(Ya(o,n,oi,!ja),Te(o,0,!0)!==0)break e;ma=n,o.timeoutHandle=Lg(ig.bind(null,o,a,Yn,tc,jf,n,oi,Ds,mr,ja,d,"Throttled",-0,0),u);break e}ig(o,a,Yn,tc,jf,n,oi,Ds,mr,ja,d,null,-0,0)}}break}while(!0);ki(t)}function ig(t,n,a,o,u,d,S,R,j,ue,Ee,we,ge,ye){if(t.timeoutHandle=-1,we=n.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Z0(n,d,we);var Je=(d&62914560)===d?$l-Ct():(d&4194048)===d?$0-Ct():0;if(Je=_b(we,Je),Je!==null){ma=d,t.cancelPendingCommit=Je(fg.bind(null,t,n,d,a,o,u,S,R,j,Ee,we,null,ge,ye)),Ya(t,d,S,!ue);return}}fg(t,n,d,a,o,u,S,R,j)}function P1(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ni(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,o){n&=~Vf,n&=~Ds,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Pe(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&It(t,a,n)}function nc(){return(Ot&6)===0?(Do(0),!1):!0}function Yf(){if(St!==null){if(Gt===0)var t=St.return;else t=St,aa=Ss=null,uf(t),or=null,ho=0,t=St;for(;t!==null;)O0(t.alternate,t),t=t.return;St=null}}function xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,tb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ma=0,Yf(),Jt=t,St=a=na(t.current,null),Et=n,Gt=0,ri=null,ja=!1,pr=Fe(t,n),kf=!1,mr=oi=Vf=Ds=Xa=fn=0,Yn=Ro=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),d=1<<u;n|=t[u],o&=~d}return pa=n,Ml(),a}function ag(t,n){mt=null,O.H=yo,n===rr||n===Dl?(n=bm(),Gt=3):n===Qu?(n=bm(),Gt=4):Gt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,St===null&&(fn=1,Xl(t,pi(n,t.current)))}function sg(){var t=ai.current;return t===null?!0:(Et&4194048)===Et?vi===null:(Et&62914560)===Et||(Et&536870912)!==0?t===vi:!1}function rg(){var t=O.H;return O.H=yo,t===null?yo:t}function og(){var t=O.A;return O.A=L1,t}function ic(){fn=4,ja||(Et&4194048)!==Et&&ai.current!==null||(pr=!0),(Xa&134217727)===0&&(Ds&134217727)===0||Jt===null||Ya(Jt,Et,oi,!1)}function Zf(t,n,a){var o=Ot;Ot|=2;var u=rg(),d=og();(Jt!==t||Et!==n)&&(tc=null,xr(t,n)),n=!1;var S=fn;e:do try{if(Gt!==0&&St!==null){var R=St,j=ri;switch(Gt){case 8:Yf(),S=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ue=Gt;if(Gt=0,ri=null,vr(t,R,j,ue),a&&pr){S=0;break e}break;default:ue=Gt,Gt=0,ri=null,vr(t,R,j,ue)}}z1(),S=fn;break}catch(Ee){ag(t,Ee)}while(!0);return n&&t.shellSuspendCounter++,aa=Ss=null,Ot=o,O.H=u,O.A=d,St===null&&(Jt=null,Et=0,Ml()),S}function z1(){for(;St!==null;)lg(St)}function I1(t,n){var a=Ot;Ot|=2;var o=rg(),u=og();Jt!==t||Et!==n?(tc=null,ec=Ct()+500,xr(t,n)):pr=Fe(t,n);e:do try{if(Gt!==0&&St!==null){n=St;var d=ri;t:switch(Gt){case 1:Gt=0,ri=null,vr(t,n,d,1);break;case 2:case 9:if(vm(d)){Gt=0,ri=null,cg(n);break}n=function(){Gt!==2&&Gt!==9||Jt!==t||(Gt=7),ki(t)},d.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:vm(d)?(Gt=0,ri=null,cg(n)):(Gt=0,ri=null,vr(t,n,d,7));break;case 5:var S=null;switch(St.tag){case 26:S=St.memoizedState;case 5:case 27:var R=St;if(S?Yg(S):R.stateNode.complete){Gt=0,ri=null;var j=R.sibling;if(j!==null)St=j;else{var ue=R.return;ue!==null?(St=ue,ac(ue)):St=null}break t}}Gt=0,ri=null,vr(t,n,d,5);break;case 6:Gt=0,ri=null,vr(t,n,d,6);break;case 8:Yf(),fn=6;break e;default:throw Error(s(462))}}B1();break}catch(Ee){ag(t,Ee)}while(!0);return aa=Ss=null,O.H=o,O.A=u,Ot=a,St!==null?0:(Jt=null,Et=0,Ml(),fn)}function B1(){for(;St!==null&&!tn();)lg(St)}function lg(t){var n=U0(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?ac(t):St=n}function cg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=A0(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=A0(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:uf(n);default:O0(a,n),n=St=om(n,pa),n=U0(a,n,pa)}t.memoizedProps=t.pendingProps,n===null?ac(t):St=n}function vr(t,n,a,o){aa=Ss=null,uf(n),or=null,ho=0;var u=n.return;try{if(A1(t,u,n,a,Et)){fn=1,Xl(t,pi(a,t.current)),St=null;return}}catch(d){if(u!==null)throw St=u,d;fn=1,Xl(t,pi(a,t.current)),St=null;return}n.flags&32768?(At||o===1?t=!0:pr||(Et&536870912)!==0?t=!1:(ja=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),ug(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){ug(n,ja);return}t=n.return;var a=R1(n.alternate,n,pa);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);fn===0&&(fn=5)}function ug(t,n){do{var a=N1(t.alternate,t);if(a!==null){a.flags&=32767,St=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=a}while(t!==null);fn=6,St=null}function fg(t,n,a,o,u,d,S,R,j){t.cancelPendingCommit=null;do sc();while(Sn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=zu,nn(t,a,d,S,R,j),t===Jt&&(St=Jt=null,Et=0),gr=n,qa=t,ma=a,Xf=d,Wf=u,eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,k1(re,function(){return gg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=H.p,H.p=2,S=Ot,Ot|=4;try{D1(t,n,a)}finally{Ot=S,H.p=u,O.T=o}}Sn=1,dg(),hg(),pg()}}function dg(){if(Sn===1){Sn=0;var t=qa,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Ot;Ot|=4;try{W0(n,t);var d=od,S=Jp(t.containerInfo),R=d.focusedElem,j=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&Qp(R.ownerDocument.documentElement,R)){if(j!==null&&Du(R)){var ue=j.start,Ee=j.end;if(Ee===void 0&&(Ee=ue),"selectionStart"in R)R.selectionStart=ue,R.selectionEnd=Math.min(Ee,R.value.length);else{var we=R.ownerDocument||document,ge=we&&we.defaultView||window;if(ge.getSelection){var ye=ge.getSelection(),Je=R.textContent.length,ct=Math.min(j.start,Je),qt=j.end===void 0?ct:Math.min(j.end,Je);!ye.extend&&ct>qt&&(S=qt,qt=ct,ct=S);var se=Kp(R,ct),Y=Kp(R,qt);if(se&&Y&&(ye.rangeCount!==1||ye.anchorNode!==se.node||ye.anchorOffset!==se.offset||ye.focusNode!==Y.node||ye.focusOffset!==Y.offset)){var ce=we.createRange();ce.setStart(se.node,se.offset),ye.removeAllRanges(),ct>qt?(ye.addRange(ce),ye.extend(Y.node,Y.offset)):(ce.setEnd(Y.node,Y.offset),ye.addRange(ce))}}}}for(we=[],ye=R;ye=ye.parentNode;)ye.nodeType===1&&we.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<we.length;R++){var Ae=we[R];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}xc=!!rd,od=rd=null}finally{Ot=u,H.p=o,O.T=a}}t.current=n,Sn=2}}function hg(){if(Sn===2){Sn=0;var t=qa,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Ot;Ot|=4;try{G0(t,n.alternate,n)}finally{Ot=u,H.p=o,O.T=a}}Sn=3}}function pg(){if(Sn===4||Sn===3){Sn=0,ne();var t=qa,n=gr,a=ma,o=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,gr=qa=null,mg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Wa=null),Qr(a),n=n.stateNode,ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(J,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=H.p,H.p=2,O.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var R=o[S];d(R.value,{componentStack:R.stack})}}finally{O.T=n,H.p=u}}(ma&3)!==0&&sc(),ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===qf?No++:(No=0,qf=t):No=0,Do(0)}}function mg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function sc(){return dg(),hg(),pg(),gg()}function gg(){if(Sn!==5)return!1;var t=qa,n=Xf;Xf=0;var a=Qr(ma),o=O.T,u=H.p;try{H.p=32>a?32:a,O.T=null,a=Wf,Wf=null;var d=qa,S=ma;if(Sn=0,gr=qa=null,ma=0,(Ot&6)!==0)throw Error(s(331));var R=Ot;if(Ot|=4,Q0(d.current),Y0(d,d.current,S,a),Ot=R,Do(0,!1),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(J,d)}catch{}return!0}finally{H.p=u,O.T=o,mg(t,n)}}function xg(t,n,a){n=pi(a,n),n=Tf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(Ye(t,2),ki(t))}function kt(t,n,a){if(t.tag===3)xg(t,t,a);else for(;n!==null;){if(n.tag===3){xg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){t=pi(a,t),a=v0(2),o=Ha(n,a,2),o!==null&&(_0(a,o,n,t),Ye(o,2),ki(o));break}}n=n.return}}function Kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new O1;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(kf=!0,u.add(a),t=F1.bind(null,t,n,a),n.then(t,t))}function F1(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(Et&a)===a&&(fn===4||fn===3&&(Et&62914560)===Et&&300>Ct()-$l?(Ot&2)===0&&xr(t,0):Vf|=a,mr===Et&&(mr=0)),ki(t)}function vg(t,n){n===0&&(n=Re()),t=_s(t,n),t!==null&&(Ye(t,n),ki(t))}function H1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vg(t,a)}function G1(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),vg(t,a)}function k1(t,n){return jt(t,n)}var rc=null,_r=null,Qf=!1,oc=!1,Jf=!1,Za=0;function ki(t){t!==_r&&t.next===null&&(_r===null?rc=_r=t:_r=_r.next=t),oc=!0,Qf||(Qf=!0,j1())}function Do(t,n){if(!Jf&&oc){Jf=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Pe(42|t)+1)-1,d&=u&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Sg(o,d))}else d=Et,d=Te(o,o===Jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Fe(o,d)||(a=!0,Sg(o,d));o=o.next}while(a);Jf=!1}}function V1(){_g()}function _g(){oc=Qf=!1;var t=0;Za!==0&&eb()&&(t=Za);for(var n=Ct(),a=null,o=rc;o!==null;){var u=o.next,d=bg(o,n);d===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(_r=a)):(a=o,(t!==0||(d&3)!==0)&&(oc=!0)),o=u}Sn!==0&&Sn!==5||Do(t),Za!==0&&(Za=0)}function bg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Pe(d),R=1<<S,j=u[S];j===-1?((R&a)===0||(R&o)!==0)&&(u[S]=je(R,n)):j<=n&&(t.expiredLanes|=R),d&=~R}if(n=Jt,a=Et,a=Te(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Rt(o),Qr(a)){case 2:case 8:a=E;break;case 32:a=re;break;case 268435456:a=Se;break;default:a=re}return o=yg.bind(null,t),a=jt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Rt(o),t.callbackPriority=2,t.callbackNode=null,2}function yg(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(sc()&&t.callbackNode!==a)return null;var o=Et;return o=Te(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ng(t,o,n),bg(t,Ct()),t.callbackNode!=null&&t.callbackNode===a?yg.bind(null,t):null)}function Sg(t,n){if(sc())return null;ng(t,n,!0)}function j1(){nb(function(){(Ot&6)!==0?jt(F,V1):_g()})}function $f(){if(Za===0){var t=ar;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),Za=t}return Za}function Mg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ms(""+t)}function Eg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function X1(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Mg((u[wn]||null).action),S=o.submitter;S&&(n=(n=S[wn]||null)?Mg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var R=new _l("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Za!==0){var j=S?Eg(u,S):new FormData(u);_f(a,{pending:!0,data:j,method:u.method,action:d},null,j)}}else typeof d=="function"&&(R.preventDefault(),j=S?Eg(u,S):new FormData(u),_f(a,{pending:!0,data:j,method:u.method,action:d},d,j))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],W1=td.toLowerCase(),q1=td[0].toUpperCase()+td.slice(1);Ai(W1,"on"+q1)}Ai(tm,"onAnimationEnd"),Ai(nm,"onAnimationIteration"),Ai(im,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(c1,"onTransitionRun"),Ai(u1,"onTransitionStart"),Ai(f1,"onTransitionCancel"),Ai(am,"onTransitionEnd"),me("onMouseEnter",["mouseout","mouseover"]),me("onMouseLeave",["mouseout","mouseover"]),me("onPointerEnter",["pointerout","pointerover"]),me("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function Tg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],j=R.instance,ue=R.currentTarget;if(R=R.listener,j!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ue;try{d(u)}catch(Ee){Sl(Ee)}u.currentTarget=null,d=j}else for(S=0;S<o.length;S++){if(R=o[S],j=R.instance,ue=R.currentTarget,R=R.listener,j!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ue;try{d(u)}catch(Ee){Sl(Ee)}u.currentTarget=null,d=j}}}}function Mt(t,n){var a=n[ds];a===void 0&&(a=n[ds]=new Set);var o=t+"__bubble";a.has(o)||(Ag(n,t,2,!1),a.add(o))}function nd(t,n,a){var o=0;n&&(o|=4),Ag(a,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[lc]){t[lc]=!0,ml.forEach(function(a){a!=="selectionchange"&&(Y1.has(a)||nd(a,!1,t),nd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,nd("selectionchange",!1,n))}}function Ag(t,n,a,o){switch(tx(n)){case 2:var u=Sb;break;case 8:u=Mb;break;default:u=vd}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ad(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var j=S.tag;if((j===3||j===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Ji(R),S===null)return;if(j=S.tag,j===5||j===6||j===26||j===27){o=d=S;continue e}R=R.parentNode}}o=o.return}Dp(function(){var ue=d,Ee=bu(a),we=[];e:{var ge=sm.get(t);if(ge!==void 0){var ye=_l,Je=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":ye=G_;break;case"focusin":Je="focus",ye=Au;break;case"focusout":Je="blur",ye=Au;break;case"beforeblur":case"afterblur":ye=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=j_;break;case tm:case nm:case im:ye=U_;break;case am:ye=W_;break;case"scroll":case"scrollend":ye=w_;break;case"wheel":ye=Y_;break;case"copy":case"cut":case"paste":ye=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=zp;break;case"toggle":case"beforetoggle":ye=K_}var ct=(n&4)!==0,qt=!ct&&(t==="scroll"||t==="scrollend"),se=ct?ge!==null?ge+"Capture":null:ge;ct=[];for(var Y=ue,ce;Y!==null;){var Ae=Y;if(ce=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||ce===null||se===null||(Ae=$r(Y,se),Ae!=null&&ct.push(Lo(Y,Ae,ce))),qt)break;Y=Y.return}0<ct.length&&(ge=new ye(ge,Je,null,a,Ee),we.push({event:ge,listeners:ct}))}}if((n&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ge&&a!==_u&&(Je=a.relatedTarget||a.fromElement)&&(Ji(Je)||Je[Vn]))break e;if((ye||ge)&&(ge=Ee.window===Ee?Ee:(ge=Ee.ownerDocument)?ge.defaultView||ge.parentWindow:window,ye?(Je=a.relatedTarget||a.toElement,ye=ue,Je=Je?Ji(Je):null,Je!==null&&(qt=c(Je),ct=Je.tag,Je!==qt||ct!==5&&ct!==27&&ct!==6)&&(Je=null)):(ye=null,Je=ue),ye!==Je)){if(ct=Op,Ae="onMouseLeave",se="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ct=zp,Ae="onPointerLeave",se="onPointerEnter",Y="pointer"),qt=ye==null?ge:ps(ye),ce=Je==null?ge:ps(Je),ge=new ct(Ae,Y+"leave",ye,a,Ee),ge.target=qt,ge.relatedTarget=ce,Ae=null,Ji(Ee)===ue&&(ct=new ct(se,Y+"enter",Je,a,Ee),ct.target=ce,ct.relatedTarget=qt,Ae=ct),qt=Ae,ye&&Je)t:{for(ct=Z1,se=ye,Y=Je,ce=0,Ae=se;Ae;Ae=ct(Ae))ce++;Ae=0;for(var rt=Y;rt;rt=ct(rt))Ae++;for(;0<ce-Ae;)se=ct(se),ce--;for(;0<Ae-ce;)Y=ct(Y),Ae--;for(;ce--;){if(se===Y||Y!==null&&se===Y.alternate){ct=se;break t}se=ct(se),Y=ct(Y)}ct=null}else ct=null;ye!==null&&wg(we,ge,ye,ct,!1),Je!==null&&qt!==null&&wg(we,qt,Je,ct,!0)}}e:{if(ge=ue?ps(ue):window,ye=ge.nodeName&&ge.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ge.type==="file")var Ut=jp;else if(kp(ge))if(Xp)Ut=r1;else{Ut=a1;var et=i1}else ye=ge.nodeName,!ye||ye.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?ue&&zt(ue.elementType)&&(Ut=jp):Ut=s1;if(Ut&&(Ut=Ut(t,ue))){Vp(we,Ut,a,Ee);break e}et&&et(t,ge,ue),t==="focusout"&&ue&&ge.type==="number"&&ue.memoizedProps.value!=null&&yt(ge,"number",ge.value)}switch(et=ue?ps(ue):window,t){case"focusin":(kp(et)||et.contentEditable==="true")&&(Ks=et,Uu=ue,oo=null);break;case"focusout":oo=Uu=Ks=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,$p(we,a,Ee);break;case"selectionchange":if(l1)break;case"keydown":case"keyup":$p(we,a,Ee)}var gt;if(Cu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Zs?Hp(t,a)&&(Tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(Ip&&a.locale!=="ko"&&(Zs||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Zs&&(gt=Up()):(La=Ee,Mu="value"in La?La.value:La.textContent,Zs=!0)),et=cc(ue,Tt),0<et.length&&(Tt=new Pp(Tt,t,null,a,Ee),we.push({event:Tt,listeners:et}),gt?Tt.data=gt:(gt=Gp(a),gt!==null&&(Tt.data=gt)))),(gt=J_?$_(t,a):e1(t,a))&&(Tt=cc(ue,"onBeforeInput"),0<Tt.length&&(et=new Pp("onBeforeInput","beforeinput",null,a,Ee),we.push({event:et,listeners:Tt}),et.data=gt)),X1(we,t,ue,a,Ee)}Tg(we,n)})}function Lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=$r(t,a),u!=null&&o.unshift(Lo(t,u,d)),u=$r(t,n),u!=null&&o.push(Lo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Z1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wg(t,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var R=a,j=R.alternate,ue=R.stateNode;if(R=R.tag,j!==null&&j===o)break;R!==5&&R!==26&&R!==27||ue===null||(j=ue,u?(ue=$r(a,d),ue!=null&&S.unshift(Lo(a,ue,j))):u||(ue=$r(a,d),ue!=null&&S.push(Lo(a,ue,j)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var K1=/\r\n?/g,Q1=/\u0000|\uFFFD/g;function Cg(t){return(typeof t=="string"?t:""+t).replace(K1,`
`).replace(Q1,"")}function Rg(t,n){return n=Cg(n),Cg(t)===n}function Wt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(t,""+o);break;case"className":Qe(t,"class",o);break;case"tabIndex":Qe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qe(t,a,o);break;case"style":Ti(t,o,d);break;case"data":if(n!=="object"){Qe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ms(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ms(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ea);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ms(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Ge(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Ge(t,a,o))}}function sd(t,n,a,o,u,d){switch(a){case"style":Ti(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ti(t,o):(typeof o=="number"||typeof o=="bigint")&&ti(t,""+o);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[wn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ge(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,d,S,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":Mt("invalid",t);var R=d=S=u=null,j=null,ue=null;for(o in a)if(a.hasOwnProperty(o)){var Ee=a[o];if(Ee!=null)switch(o){case"name":u=Ee;break;case"type":S=Ee;break;case"checked":j=Ee;break;case"defaultChecked":ue=Ee;break;case"value":d=Ee;break;case"defaultValue":R=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(s(137,n));break;default:Wt(t,n,o,Ee,a,null)}}On(t,d,R,j,ue,S,u,!1);return;case"select":Mt("invalid",t),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Wt(t,n,u,R,a,null)}n=d,a=S,t.multiple=!!o,n!=null?yn(t,!!o,n,!1):a!=null&&yn(t,!!o,a,!0);return;case"textarea":Mt("invalid",t),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Wt(t,n,S,R,a,null)}Ei(t,o,u,d);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,j,o,a,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Mt(Uo[o],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ue in a)if(a.hasOwnProperty(ue)&&(o=a[ue],o!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,ue,o,a,null)}return;default:if(zt(n)){for(Ee in a)a.hasOwnProperty(Ee)&&(o=a[Ee],o!==void 0&&sd(t,n,Ee,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Wt(t,n,R,o,a,null))}function J1(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,R=null,j=null,ue=null,Ee=null;for(ye in a){var we=a[ye];if(a.hasOwnProperty(ye)&&we!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":j=we;default:o.hasOwnProperty(ye)||Wt(t,n,ye,null,o,we)}}for(var ge in o){var ye=o[ge];if(we=a[ge],o.hasOwnProperty(ge)&&(ye!=null||we!=null))switch(ge){case"type":d=ye;break;case"name":u=ye;break;case"checked":ue=ye;break;case"defaultChecked":Ee=ye;break;case"value":S=ye;break;case"defaultValue":R=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(s(137,n));break;default:ye!==we&&Wt(t,n,ge,ye,o,we)}}Xe(t,S,R,j,ue,Ee,d,u);return;case"select":ye=S=R=ge=null;for(d in a)if(j=a[d],a.hasOwnProperty(d)&&j!=null)switch(d){case"value":break;case"multiple":ye=j;default:o.hasOwnProperty(d)||Wt(t,n,d,null,o,j)}for(u in o)if(d=o[u],j=a[u],o.hasOwnProperty(u)&&(d!=null||j!=null))switch(u){case"value":ge=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==j&&Wt(t,n,u,d,o,j)}n=R,a=S,o=ye,ge!=null?yn(t,!!a,ge,!1):!!o!=!!a&&(n!=null?yn(t,!!a,n,!0):yn(t,!!a,a?[]:"",!1));return;case"textarea":ye=ge=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(t,n,R,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ge=u;break;case"defaultValue":ye=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Wt(t,n,S,u,o,d)}ei(t,ge,ye);return;case"option":for(var Je in a)if(ge=a[Je],a.hasOwnProperty(Je)&&ge!=null&&!o.hasOwnProperty(Je))switch(Je){case"selected":t.selected=!1;break;default:Wt(t,n,Je,null,o,ge)}for(j in o)if(ge=o[j],ye=a[j],o.hasOwnProperty(j)&&ge!==ye&&(ge!=null||ye!=null))switch(j){case"selected":t.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:Wt(t,n,j,ge,o,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)ge=a[ct],a.hasOwnProperty(ct)&&ge!=null&&!o.hasOwnProperty(ct)&&Wt(t,n,ct,null,o,ge);for(ue in o)if(ge=o[ue],ye=a[ue],o.hasOwnProperty(ue)&&ge!==ye&&(ge!=null||ye!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Wt(t,n,ue,ge,o,ye)}return;default:if(zt(n)){for(var qt in a)ge=a[qt],a.hasOwnProperty(qt)&&ge!==void 0&&!o.hasOwnProperty(qt)&&sd(t,n,qt,void 0,o,ge);for(Ee in o)ge=o[Ee],ye=a[Ee],!o.hasOwnProperty(Ee)||ge===ye||ge===void 0&&ye===void 0||sd(t,n,Ee,ge,o,ye);return}}for(var se in a)ge=a[se],a.hasOwnProperty(se)&&ge!=null&&!o.hasOwnProperty(se)&&Wt(t,n,se,null,o,ge);for(we in o)ge=o[we],ye=a[we],!o.hasOwnProperty(we)||ge===ye||ge==null&&ye==null||Wt(t,n,we,ge,o,ye)}function Ng(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,R=u.duration;if(d&&R&&Ng(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var j=a[o],ue=j.startTime;if(ue>R)break;var Ee=j.transferSize,we=j.initiatorType;Ee&&Ng(we)&&(j=j.responseEnd,S+=Ee*(j<R?1:(R-ue)/(j-ue)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rd=null,od=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function Dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function eb(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var Lg=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,nb=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(ib)}:Lg;function ib(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function Pg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Oo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[Ra]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Oo(t.ownerDocument.body);a=u}while(a);Mr(n)}function zg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),Na(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ab(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function sb(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function Ig(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function rb(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function Bg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Fg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Hg(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Na(t)}var bi=new Map,Gg=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=H.d;H.d={f:ob,r:lb,D:cb,C:ub,L:fb,m:db,X:pb,S:hb,M:mb};function ob(){var t=ga.f(),n=nc();return t||n}function lb(t){var n=$i(t);n!==null&&n.tag===5&&n.type==="form"?a0(n):ga.r(t)}var br=typeof document>"u"?null:document;function kg(t,n,a){var o=br;if(o&&typeof n=="string"&&n){var u=Ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Gg.has(u)||(Gg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),mn(n),o.head.appendChild(n)))}}function cb(t){ga.D(t),kg("dns-prefetch",t,null)}function ub(t,n){ga.C(t,n),kg("preconnect",t,n)}function fb(t,n,a){ga.L(t,n,a);var o=br;if(o&&t&&n){var u='link[rel="preload"][as="'+Ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ft(a.imageSizes)+'"]')):u+='[href="'+Ft(t)+'"]';var d=u;switch(n){case"style":d=yr(t);break;case"script":d=Sr(t)}bi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(d))||n==="script"&&o.querySelector(zo(d))||(n=o.createElement("link"),Dn(n,"link",t),mn(n),o.head.appendChild(n)))}}function db(t,n){ga.m(t,n);var a=br;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ft(o)+'"][href="'+Ft(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Sr(t)}if(!bi.has(d)&&(t=_({rel:"modulepreload",href:t},n),bi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(d)))return}o=a.createElement("link"),Dn(o,"link",t),mn(o),a.head.appendChild(o)}}}function hb(t,n,a){ga.S(t,n,a);var o=br;if(o&&t){var u=Da(o).hoistableStyles,d=yr(t);n=n||"default";var S=u.get(d);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Po(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(d))&&pd(t,a);var j=S=o.createElement("link");mn(j),Dn(j,"link",t),j._p=new Promise(function(ue,Ee){j.onload=ue,j.onerror=Ee}),j.addEventListener("load",function(){R.loading|=1}),j.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(d,S)}}}function pb(t,n){ga.X(t,n);var a=br;if(a&&t){var o=Da(a).hoistableScripts,u=Sr(t),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(t=_({src:t,async:!0},n),(n=bi.get(u))&&md(t,n),d=a.createElement("script"),mn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function mb(t,n){ga.M(t,n);var a=br;if(a&&t){var o=Da(a).hoistableScripts,u=Sr(t),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&md(t,n),d=a.createElement("script"),mn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Vg(t,n,a,o){var u=(u=q.current)?fc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=Da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=yr(a.href);var d=Da(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Po(t)))&&!d._p&&(S.instance=d,S.state.loading=5),bi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,a),d||gb(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function yr(t){return'href="'+Ft(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function jg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function gb(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),mn(n),t.head.appendChild(n))}function Sr(t){return'[src="'+Ft(t)+'"]'}function zo(t){return"script[async]"+t}function Xg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ft(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),mn(o),Dn(o,"style",u),dc(o,a.precedence,t),n.instance=o;case"stylesheet":u=yr(a.href);var d=t.querySelector(Po(u));if(d)return n.state.loading|=4,n.instance=d,mn(d),d;o=jg(a),(u=bi.get(u))&&pd(o,u),d=(t.ownerDocument||t).createElement("link"),mn(d);var S=d;return S._p=new Promise(function(R,j){S.onload=R,S.onerror=j}),Dn(d,"link",o),n.state.loading|=4,dc(d,a.precedence,t),n.instance=d;case"script":return d=Sr(a.src),(u=t.querySelector(zo(d)))?(n.instance=u,mn(u),u):(o=a,(u=bi.get(d))&&(o=_({},a),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),mn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,t));return n.instance}function dc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function Wg(t,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ra]||d[pn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var R=o.get(S);R?R.push(d):o.set(S,[d])}}return o}function qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xb(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vb(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),d=n.querySelector(Po(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,mn(d);return}d=n.ownerDocument||n,o=jg(o),(u=bi.get(u))&&pd(o,u),d=d.createElement("link"),mn(d);var S=d;S._p=new Promise(function(R,j){S.onload=R,S.onerror=j}),Dn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function _b(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*$1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(bb,t),mc=null,pc.call(t))}function bb(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var o=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Io={$$typeof:L,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function yb(t,n,a,o,u,d,S,R,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Zg(t,n,a,o,u,d,S,R,j,ue,Ee,we){return t=new yb(t,n,a,S,j,ue,Ee,we,R),n=1,d===!0&&(n|=24),d=ii(3,null,null,n),t.current=d,d.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ju(d),t}function Kg(t){return t?(t=$s,t):$s}function Qg(t,n,a,o,u,d){u=Kg(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ha(t,o,n),a!==null&&(Zn(a,t,n),mo(a,t,n))}function Jg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xd(t,n){Jg(t,n),(t=t.alternate)&&Jg(t,n)}function $g(t){if(t.tag===13||t.tag===31){var n=_s(t,67108864);n!==null&&Zn(n,t,67108864),xd(t,67108864)}}function ex(t){if(t.tag===13||t.tag===31){var n=li();n=Kr(n);var a=_s(t,n);a!==null&&Zn(a,t,n),xd(t,n)}}var xc=!0;function Sb(t,n,a,o){var u=O.T;O.T=null;var d=H.p;try{H.p=2,vd(t,n,a,o)}finally{H.p=d,O.T=u}}function Mb(t,n,a,o){var u=O.T;O.T=null;var d=H.p;try{H.p=8,vd(t,n,a,o)}finally{H.p=d,O.T=u}}function vd(t,n,a,o){if(xc){var u=_d(o);if(u===null)ad(t,n,o,vc,a),nx(t,o);else if(Tb(u,t,n,a,o))o.stopPropagation();else if(nx(t,o),n&4&&-1<Eb.indexOf(t)){for(;u!==null;){var d=$i(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ie(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var j=1<<31-Pe(S);R.entanglements[1]|=j,S&=~j}ki(d),(Ot&6)===0&&(ec=Ct()+500,Do(0))}}break;case 31:case 13:R=_s(d,2),R!==null&&Zn(R,d,2),nc(),xd(d,2)}if(d=_d(o),d===null&&ad(t,n,o,vc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ad(t,n,o,null,a)}}function _d(t){return t=bu(t),bd(t)}var vc=null;function bd(t){if(vc=null,t=Ji(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function tx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case F:return 2;case E:return 8;case re:case pe:return 32;case Se:return 268435456;default:return 32}default:return 32}}var yd=!1,Qa=null,Ja=null,$a=null,Bo=new Map,Fo=new Map,es=[],Eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nx(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=$i(n),n!==null&&$g(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Tb(t,n,a,o,u){switch(n){case"focusin":return Qa=Ho(Qa,t,n,a,o,u),!0;case"dragenter":return Ja=Ho(Ja,t,n,a,o,u),!0;case"mouseover":return $a=Ho($a,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,Ho(Bo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,Ho(Fo.get(d)||null,t,n,a,o,u)),!0}return!1}function ix(t){var n=Ji(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ws(t.priority,function(){ex(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ws(t.priority,function(){ex(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_d(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=$i(a),n!==null&&$g(n),t.blockedOn=a,!1;n.shift()}return!0}function ax(t,n,a){_c(t)&&a.delete(n)}function Ab(){yd=!1,Qa!==null&&_c(Qa)&&(Qa=null),Ja!==null&&_c(Ja)&&(Ja=null),$a!==null&&_c($a)&&($a=null),Bo.forEach(ax),Fo.forEach(ax)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,yd||(yd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ab)))}var yc=null;function sx(t){yc!==t&&(yc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===t&&(yc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(bd(o||a)===null)continue;break}var d=$i(a);d!==null&&(t.splice(n,3),n-=3,_f(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mr(t){function n(j){return bc(j,t)}Qa!==null&&bc(Qa,t),Ja!==null&&bc(Ja,t),$a!==null&&bc($a,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)ix(a),a.blockedOn===null&&es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[wn]||null;if(typeof d=="function")S||sx(a);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[wn]||null)R=S.formAction;else if(bd(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),sx(a)}}}function rx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sd(t){this._internalRoot=t}Sc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();Qg(a,o,t,n,null,null)},Sc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Qg(t.current,2,null,t,null,null),nc(),n[Vn]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Jr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,t),a===0&&ix(t)}};var ox=e.version;if(ox!=="19.2.8")throw Error(s(527,ox,"19.2.8"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var wb={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{J=Mc.inject(wb),ee=Mc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=p0,d=m0,S=g0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Zg(t,1,!1,null,null,a,o,null,u,d,S,rx),t[Vn]=n.current,id(t),new Sd(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=p0,S=m0,R=g0,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=Zg(t,1,!0,n,a??null,o,u,j,d,S,R,rx),n.context=Kg(null),a=n.current,o=li(),o=Kr(o),u=Fa(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,Ye(n,a),ki(n),t[Vn]=n.current,id(t),new Sc(n)},ko.version="19.2.8",ko}var xx;function Ib(){if(xx)return Td.exports;xx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=zb(),Td.exports}var Bb=Ib();const eu=[{id:"caneca-11oz",name:"Caneca Cerâmica 11oz",category:"Canecas",defaultWidthCm:20,defaultHeightCm:9.5,printAspect:"20 x 9.5 cm (Área Total Wrap)",model3D:"mug",description:"Caneca resinada para sublimação, acabamento alto brilho 325ml.",bgColor:"#ffffff",material:"Cerâmica Resinada Glaze",samplePrints:["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"]},{id:"camiseta-poliester",name:"Camiseta 100% Poliéster",category:"Camisetas",defaultWidthCm:29.7,defaultHeightCm:42,printAspect:"29.7 x 42 cm (A3 Frontal)",model3D:"tshirt",description:"Camiseta para sublimação total ou estampa localizada A3/A4.",bgColor:"#f4f4f6",material:"Poliéster PP Fio 30.1",samplePrints:["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"]},{id:"garrafa-inox",name:"Garrafa Térmica Inox 500ml",category:"Garrafas",defaultWidthCm:22.5,defaultHeightCm:18,printAspect:"22.5 x 18 cm (Envolvente)",model3D:"bottle",description:"Garrafa de aço inoxidável resinada com tampa hermética.",bgColor:"#e2e8f0",material:"Inox Resinado Dual Wall",samplePrints:["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80"]},{id:"copo-skinny-20oz",name:"Copo Skinny Tumbler 20oz",category:"Copos",defaultWidthCm:23,defaultHeightCm:20.5,printAspect:"23 x 20.5 cm (360° Seamless Wrap)",model3D:"tumbler",description:"Copo térmico reto 600ml com canudo e tampa acrílica.",bgColor:"#f8fafc",material:"Aço Inox Resinado 304",samplePrints:["https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800&auto=format&fit=crop&q=80"]},{id:"mousepad-gaming",name:"Mouse Pad Gaming Speed",category:"Mouse Pads",defaultWidthCm:70,defaultHeightCm:30,printAspect:"70 x 30 cm (XL Desk Mat)",model3D:"mousepad",description:"Mousepad gamer com base emborrachada antiderrapante e borda costurada.",bgColor:"#18181b",material:"Tecido Neoprene Sublimável",samplePrints:["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"]},{id:"ecobag-canvas",name:"Ecobag Poliéster Canvas",category:"Ecobags",defaultWidthCm:35,defaultHeightCm:40,printAspect:"35 x 40 cm (Frente e Verso)",model3D:"ecobag",description:"Sacola ecológica em tecido pesado de poliéster resinado.",bgColor:"#fef08a",material:"Lona de Poliéster 280g",samplePrints:["https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80"]},{id:"bone-trucker",name:"Boné Sublimável Trucker",category:"Bonés",defaultWidthCm:12,defaultHeightCm:6.5,printAspect:"12 x 6.5 cm (Testa Frontal)",model3D:"cap",description:"Boné modelo Trucker com tela traseira e frente de espuma branca.",bgColor:"#3b82f6",material:"Poliéster Dublado + Tela",samplePrints:["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80"]},{id:"azulejo-ceramica",name:"Azulejo Cerâmico 15x15cm",category:"Azulejos",defaultWidthCm:15,defaultHeightCm:15,printAspect:"15 x 15 cm (Total Quadrado)",model3D:"tile",description:"Placa cerâmica resinada de alta durabilidade com suporte de mesa.",bgColor:"#ffffff",material:"Cerâmica Resinada Premium",samplePrints:["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80"]},{id:"almofada-quadrada",name:"Almofada 40x40cm com Enchimento",category:"Almofadas",defaultWidthCm:40,defaultHeightCm:40,printAspect:"40 x 40 cm (Capa Zipper)",model3D:"pillow",description:"Capa de almofada em tecido oxford/microfibra macia com zíper invisível.",bgColor:"#f1f5f9",material:"Microfibra 100% Poliéster",samplePrints:["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80"]},{id:"quebracabeca-a4",name:"Quebra-Cabeça A4 (120 peças)",category:"Quebra-cabeças",defaultWidthCm:29.7,defaultHeightCm:21,printAspect:"29.7 x 21 cm (A4 Horizontal)",model3D:"puzzle",description:"Quebra-cabeça resinado cartonado rígido de alto brilho.",bgColor:"#e2e8f0",material:"Papelão Rígido Resinado 2mm",samplePrints:["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80"]},{id:"capinha-3d-wrap",name:"Capinha Celular 3D Full Wrap",category:"Capinhas",defaultWidthCm:16,defaultHeightCm:8,printAspect:"16 x 8 cm (Com bordas laterais)",model3D:"phonecase",description:"Capa protetora rígida em policarbonato com sublimação total 3D nas bordas.",bgColor:"#0f172a",material:"Policarbonato 3D Sublimável",samplePrints:["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"]},{id:"brindes-porta-copos",name:"Kit Porta-Copos Neoprene (4 Unidades)",category:"Brindes personalizados",defaultWidthCm:9,defaultHeightCm:9,printAspect:"9 x 9 cm (Quadrado/Redondo)",model3D:"coaster",description:"Base para copos impermeável com absorção de impacto e fundo emborrachado.",bgColor:"#334155",material:"Neoprene 3mm Sublimável",samplePrints:["https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80"]}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hb=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),vx=r=>{const e=Hb(r);return e.charAt(0).toUpperCase()+e.slice(1)},Cv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),Gb=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=Be.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},g)=>Be.createElement("svg",{ref:g,...kb,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Cv("lucide",l),...!c&&!Gb(p)&&{"aria-hidden":"true"},...p},[...f.map(([m,v])=>Be.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(r,e)=>{const i=Be.forwardRef(({className:s,...l},c)=>Be.createElement(Vb,{ref:c,iconNode:e,className:Cv(`lucide-${Fb(vx(r))}`,`lucide-${r}`,s),...l}));return i.displayName=vx(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],_x=tt("award",jb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Gs=tt("box",Xb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Rv=tt("check",Wb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Nv=tt("chevron-down",qb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Dv=tt("chevron-left",Yb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Kb=tt("chevron-right",Zb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Jb=tt("chevron-up",Qb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ey=tt("circle-alert",$b);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ny=tt("circle-check",ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ay=tt("circle",iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ry=tt("clock",sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],bx=tt("coffee",oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],cy=tt("columns-2",ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],tu=tt("copy",uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]],dy=tt("corner-up-right",fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Uv=tt("download",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Lv=tt("eye-off",py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ov=tt("eye",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xy=tt("file-text",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],Pv=tt("flip-horizontal",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],by=tt("folder-open",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Sy=tt("folder-plus",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ey=tt("heart",My);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],Ay=tt("hexagon",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],zv=tt("history",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Ry=tt("image-plus",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Dy=tt("image",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],op=tt("layers",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],Oy=tt("layout-template",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],Iv=tt("lock-open",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Bv=tt("lock",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],hu=tt("maximize-2",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Fy=tt("menu",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Gy=tt("moon",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],Vy=tt("paintbrush",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Xy=tt("palette",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Fr=tt("plus",Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Yy=tt("printer",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ky=tt("refresh-cw",Zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Jy=tt("rotate-ccw",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],pu=tt("rotate-cw",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],tS=tt("save",eS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],iS=tt("scissors",nS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Fv=tt("search",aS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Hv=tt("settings",sS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],oS=tt("shapes",rS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],cS=tt("share-2",lS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],mh=tt("sliders-vertical",uS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],dS=tt("sliders-horizontal",fS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],zi=tt("sparkles",hS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],lp=tt("square",pS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],yx=tt("star",mS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Gv=tt("sun",gS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],al=tt("trash-2",xS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],sl=tt("type",vS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],bS=tt("upload",_S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],rl=tt("wand-sparkles",yS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],el=tt("x",SS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],kv=tt("zap",MS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],TS=tt("zoom-in",ES);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],wS=tt("zoom-out",AS);function CS({theme:r="dark",onExport:e,onNewProject:i,onSaveLayout:s,onOpenSettings:l}){const[c,f]=Be.useState(!1),p=Be.useRef(null);return Be.useEffect(()=>{const g=m=>{p.current&&!p.current.contains(m.target)&&f(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),h.jsxs("div",{className:"relative",ref:p,children:[h.jsxs("button",{onClick:()=>f(!c),className:`p-2 rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${r==="light"?"hover:bg-slate-200 text-slate-700":"hover:bg-white/10 text-gray-200"}`,title:"Menu Principal",children:[h.jsx(Fy,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium hidden md:block text-sm",children:"Arquivo"})]}),c&&h.jsx("div",{className:`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl border overflow-hidden z-50 transition-all ${r==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#1e1e20] border-[#2d2d30] text-gray-200"}`,children:h.jsxs("div",{className:"flex flex-col py-1",children:[h.jsxs("button",{onClick:()=>{f(!1),i==null||i()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(by,{className:"w-4 h-4"}),"Novo Projeto"]}),h.jsxs("button",{onClick:()=>{f(!1),s==null||s()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(tS,{className:"w-4 h-4"}),"Salvar Layout"]}),h.jsx("hr",{className:`my-1 ${r==="light"?"border-slate-200":"border-[#2d2d30]"}`}),h.jsxs("button",{onClick:()=>{f(!1),e()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(Uv,{className:"w-4 h-4"}),"Exportar Sublimação"]}),h.jsx("hr",{className:`my-1 ${r==="light"?"border-slate-200":"border-[#2d2d30]"}`}),h.jsxs("button",{onClick:()=>{f(!1),l==null||l()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(Hv,{className:"w-4 h-4"}),"Configurações"]})]})})]})}const RS=({currentProduct:r,onOpenProductLibrary:e,onUndo:i,onRedo:s,canUndo:l,canRedo:c,onOpenExportModal:f,onOpenAIPanel:p,mirrorSublimation:g,onToggleMirrorSublimation:m,workspaceViewMode:v,onChangeWorkspaceViewMode:_,theme:x="dark",onToggleTheme:b,onNewProject:A,onSaveLayout:N,onOpenSettings:M,projectName:y="Arte Sublimação - Caneca 325ml",onChangeProjectName:G})=>{const[L,w]=Be.useState(y);Be.useEffect(()=>{w(y)},[y]);const I=D=>{w(D),G&&G(D)};return h.jsxs("header",{className:`h-12 border-b flex items-center justify-between px-3 select-none text-xs z-40 shadow-md transition-colors ${x==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#0e0f14] border-[#23242c] text-gray-200"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 px-2.5 py-1 rounded-xl shadow-md cursor-pointer hover:brightness-110 transition-all",children:[h.jsx(zi,{className:"w-4 h-4 text-white animate-pulse"}),h.jsx("span",{className:"font-extrabold tracking-wide text-white text-xs",children:"CANVA STUDIO"})]}),h.jsx(CS,{theme:x,onExport:f,onNewProject:A,onSaveLayout:N,onOpenSettings:M}),h.jsxs("div",{className:`flex items-center rounded-xl p-0.5 border ${x==="light"?"bg-slate-100 border-slate-300":"bg-[#181920] border-[#2b2c36]"}`,children:[h.jsx("button",{onClick:i,disabled:!l,className:`p-1.5 disabled:opacity-30 rounded-lg transition-colors cursor-pointer ${x==="light"?"text-slate-700 hover:text-black hover:bg-slate-200":"text-gray-300 hover:text-white hover:bg-white/5"}`,title:"Desfazer (Ctrl+Z)",children:h.jsx(Jy,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:s,disabled:!c,className:`p-1.5 disabled:opacity-30 rounded-lg transition-colors cursor-pointer ${x==="light"?"text-slate-700 hover:text-black hover:bg-slate-200":"text-gray-300 hover:text-white hover:bg-white/5"}`,title:"Refazer (Ctrl+Y)",children:h.jsx(pu,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:`hidden sm:flex items-center gap-1.5 text-[11px] font-medium ${x==="light"?"text-slate-500":"text-gray-400"}`,children:[h.jsx(ny,{className:"w-3.5 h-3.5 text-emerald-500"}),h.jsx("span",{children:"Salvo nas nuvens"})]}),h.jsx("div",{className:`hidden md:block w-[1px] h-4 ${x==="light"?"bg-slate-200":"bg-[#23242c]"}`}),h.jsx("input",{type:"text",value:L,onChange:D=>I(D.target.value),className:`bg-transparent px-2 py-1 rounded-lg text-xs font-semibold border border-transparent focus:border-purple-500 focus:outline-none transition-all max-w-[180px] sm:max-w-[240px] truncate ${x==="light"?"text-slate-900 hover:bg-slate-100 hover:border-slate-300 focus:bg-white":"text-white hover:bg-[#1a1b22] hover:border-[#30313c] focus:bg-[#1a1b22]"}`,title:"Clique para renomear este projeto"}),h.jsxs("button",{onClick:e,className:`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-medium transition-all group cursor-pointer ${x==="light"?"bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700":"bg-[#181920] hover:bg-[#20212b] border-[#2b2c36] text-gray-300"}`,title:"Trocar Produto / Redimensionar",children:[h.jsx("span",{className:"text-purple-600 font-bold",children:"Redimensionar:"}),h.jsx("span",{className:`font-semibold ${x==="light"?"text-slate-900":"text-white"}`,children:r.name}),h.jsx(Nv,{className:"w-3 h-3 text-gray-400 group-hover:text-purple-600"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:`flex items-center p-0.5 rounded-xl border ${x==="light"?"bg-slate-100 border-slate-300":"bg-[#181920] border-[#2b2c36]"}`,children:[h.jsxs("button",{onClick:()=>_("canvas"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${v==="canvas"?"bg-purple-600 text-white shadow-md shadow-purple-600/30":x==="light"?"text-slate-600 hover:text-slate-900 hover:bg-slate-200":"text-gray-400 hover:text-white hover:bg-white/5"}`,title:"Modo Foco 2D Canva",children:[h.jsx(lp,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden md:inline",children:"Design 2D"})]}),h.jsxs("button",{onClick:()=>_("split"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${v==="split"?"bg-purple-600 text-white shadow-md shadow-purple-600/30":x==="light"?"text-slate-600 hover:text-slate-900 hover:bg-slate-200":"text-gray-400 hover:text-white hover:bg-white/5"}`,title:"Modo Tela Dividida (2D + 3D)",children:[h.jsx(cy,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden md:inline",children:"Tela Dividida"})]}),h.jsxs("button",{onClick:()=>_("mockup"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${v==="mockup"?"bg-purple-600 text-white shadow-md shadow-purple-600/30":x==="light"?"text-slate-600 hover:text-slate-900 hover:bg-slate-200":"text-gray-400 hover:text-white hover:bg-white/5"}`,title:"Simulador 3D HD em Tela Cheia",children:[h.jsx(Gs,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden md:inline",children:"Simulador 3D"})]})]}),h.jsxs("button",{onClick:m,className:`hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-semibold transition-all cursor-pointer ${g?"bg-amber-500/20 text-amber-600 border-amber-500/40":x==="light"?"bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900":"bg-white/5 border-white/10 text-gray-400 hover:text-gray-200"}`,title:"Espelhamento de estampa para papel sublimático",children:[h.jsx(Pv,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["ESPELHAR: ",g?"SIM":"NÃO"]})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[b&&h.jsx("button",{onClick:b,className:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer font-semibold ${x==="light"?"bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100":"bg-[#181920] text-purple-300 border-[#2b2c36] hover:bg-[#20212b] hover:text-purple-200"}`,title:`Alternar para Tema ${x==="light"?"Escuro":"Claro"}`,children:x==="light"?h.jsxs(h.Fragment,{children:[h.jsx(Gv,{className:"w-4 h-4 text-amber-500"}),h.jsx("span",{className:"hidden lg:inline text-[11px]",children:"Tema Claro"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Gy,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{className:"hidden lg:inline text-[11px]",children:"Tema Escuro"})]})}),h.jsxs("button",{onClick:p,className:`flex items-center gap-1.5 px-3 py-1.5 font-bold rounded-xl transition-all shadow-sm cursor-pointer ${x==="light"?"bg-purple-50 hover:bg-purple-100 border border-purple-300 text-purple-700":"bg-[#181920] hover:bg-[#20212b] border border-purple-500/40 text-purple-300 hover:text-purple-200"}`,children:[h.jsx(rl,{className:"w-3.5 h-3.5 text-purple-500"}),h.jsx("span",{className:"hidden sm:inline",children:"IA Studio"})]}),h.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg shadow-purple-600/25 transition-all cursor-pointer active:scale-95",children:[h.jsx(cS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Baixar / Exportar"})]})]})]})},NS=({activeTool:r,onSelectTool:e,selectedShape:i,onSelectShape:s,activeColor:l,onChangeColor:c,brushSize:f,onChangeBrushSize:p,onAddLayer:g,currentProduct:m,onSelectProduct:v,layers:_,activeLayerId:x,onSelectLayer:b,onUpdateLayer:A,onDeleteLayer:N,onDuplicateLayer:M,onAddAIGeneratedImage:y,onOpenAIPanel:G,theme:L="dark"})=>{const[w,I]=Be.useState("templates"),[D,B]=Be.useState(!0),[T,z]=Be.useState(""),k=[{id:"tropical-vibes",title:"Tropical Sublimação",category:"Floral & Natureza",imageUrl:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80"},{id:"mother-day",title:"Melhor Mãe do Mundo",category:"Datas Especiais",imageUrl:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80"},{id:"cyberpunk-neon",title:"Cyberpunk Neon",category:"Geométrico / Moderno",imageUrl:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80"},{id:"watercolor-gold",title:"Aquarela Ouro Rosa",category:"Elegante",imageUrl:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80"},{id:"vintage-coffee",title:"Café Vintage Premium",category:"Canecas & Bar",imageUrl:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"}],V=[{id:"p1",url:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",tag:"Floral"},{id:"p2",url:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80",tag:"Neon"},{id:"p3",url:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80",tag:"Aquarela"},{id:"p4",url:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",tag:"Marmorizado"},{id:"p5",url:"https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",tag:"Arte Moderna"},{id:"p6",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",tag:"Praia Tropical"}],W=[{id:"rectangle",label:"Retângulo",icon:h.jsx(lp,{className:"w-5 h-5"})},{id:"circle",label:"Círculo",icon:h.jsx(ay,{className:"w-5 h-5"})},{id:"polygon",label:"Hexágono",icon:h.jsx(Ay,{className:"w-5 h-5"})},{id:"star",label:"Estrela",icon:h.jsx(yx,{className:"w-5 h-5"})},{id:"badge",label:"Selo de Qualidade",icon:h.jsx(_x,{className:"w-5 h-5"})},{id:"heart",label:"Coração",icon:h.jsx(Ey,{className:"w-5 h-5"})}],he=P=>{w===P&&D?B(!1):(I(P),B(!0))},X=P=>{var te;const O=(te=P.target.files)==null?void 0:te[0];if(!O)return;const H=new FileReader;H.onload=oe=>{var U;const xe=(U=oe.target)==null?void 0:U.result;xe&&y&&y(xe,O.name.replace(/\.[^/.]+$/,""))},H.readAsDataURL(O)};return h.jsxs("div",{className:"flex h-full select-none z-30 relative",children:[h.jsxs("aside",{className:`w-18 border-r flex flex-col items-center py-3 gap-3 select-none z-40 transition-colors ${L==="light"?"bg-slate-100 border-slate-300 text-slate-600":"bg-[#0d0e12] border-[#23242a] text-gray-400"}`,children:[h.jsxs("button",{onClick:()=>he("templates"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="templates"&&D?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Modelos de Estampa",children:[h.jsx(Oy,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Modelos"})]}),h.jsxs("button",{onClick:()=>he("elements"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="elements"&&D?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Elementos & Formas",children:[h.jsx(oS,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Elementos"})]}),h.jsxs("button",{onClick:()=>he("text"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="text"&&D?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Inserir Texto & Arco",children:[h.jsx(sl,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Texto"})]}),h.jsxs("button",{onClick:()=>he("uploads"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="uploads"&&D?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Minhas Imagens & Galeria",children:[h.jsx(Ry,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Uploads"})]}),h.jsxs("button",{onClick:()=>he("products"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="products"&&D?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Produtos Sublimáveis",children:[h.jsx(bx,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Produtos"})]}),h.jsxs("button",{onClick:()=>he("ai"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer relative ${w==="ai"&&D?"bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 text-purple-600 border border-purple-500/50 shadow-lg":L==="light"?"text-purple-600 hover:bg-purple-100 hover:text-purple-700":"text-purple-400 hover:bg-purple-950/30 hover:text-purple-200"}`,title:"Estúdio IA Generativo",children:[h.jsx(zi,{className:"w-5 h-5 mb-1 text-purple-600"}),h.jsx("span",{className:"text-[10px] font-semibold",children:"Estúdio IA"}),h.jsx("span",{className:"absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-500 animate-pulse"})]}),h.jsxs("button",{onClick:()=>he("layers"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="layers"&&D?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Camadas & Z-Index",children:[h.jsx(op,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Camadas"})]}),h.jsx("div",{className:`mt-auto w-10 h-[1px] ${L==="light"?"bg-slate-300":"bg-[#23242a]"}`}),h.jsx("div",{className:"flex flex-col items-center gap-1 my-1",children:h.jsx("label",{className:"w-7 h-7 rounded-full border-2 border-slate-300 shadow-md cursor-pointer hover:scale-110 transition-transform relative overflow-hidden",style:{backgroundColor:l},title:"Mudar Cor Principal",children:h.jsx("input",{type:"color",value:l,onChange:P=>c(P.target.value),className:"opacity-0 absolute inset-0 w-full h-full cursor-pointer"})})})]}),D&&h.jsxs("div",{className:`w-80 border-r flex flex-col h-full text-xs z-30 shadow-2xl relative animate-in slide-in-from-left duration-200 transition-colors ${L==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#16171d] border-[#26272e] text-gray-200"}`,children:[h.jsxs("div",{className:`p-4 border-b flex items-center justify-between ${L==="light"?"border-slate-200":"border-[#26272e]"}`,children:[h.jsxs("h2",{className:`font-bold text-sm capitalize flex items-center gap-2 ${L==="light"?"text-slate-900":"text-white"}`,children:[w==="templates"&&h.jsx(h.Fragment,{children:"🎨 Modelos de Estampa"}),w==="elements"&&h.jsx(h.Fragment,{children:"📐 Elementos & Formas"}),w==="text"&&h.jsx(h.Fragment,{children:"🔤 Adicionar Texto"}),w==="uploads"&&h.jsx(h.Fragment,{children:"🖼️ Fotos e Uploads"}),w==="products"&&h.jsx(h.Fragment,{children:"☕ Produtos Sublimáveis"}),w==="ai"&&h.jsx(h.Fragment,{children:"✨ Estúdio IA Generativo"}),w==="layers"&&h.jsx(h.Fragment,{children:"🥞 Painel de Camadas"})]}),h.jsx("button",{onClick:()=>B(!1),className:`p-1 rounded-lg transition-colors cursor-pointer ${L==="light"?"hover:bg-slate-100 text-slate-500 hover:text-slate-900":"hover:bg-white/10 text-gray-400 hover:text-white"}`,title:"Recolher Painel",children:h.jsx(Dv,{className:"w-4 h-4"})})]}),w!=="layers"&&h.jsx("div",{className:"px-4 pt-3 pb-2",children:h.jsxs("div",{className:"relative",children:[h.jsx(Fv,{className:`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${L==="light"?"text-slate-400":"text-gray-400"}`}),h.jsx("input",{type:"text",value:T,onChange:P=>z(P.target.value),placeholder:`Buscar em ${w}...`,className:`w-full rounded-xl pl-9 pr-3 py-2 text-xs border focus:outline-none focus:border-purple-500 transition-colors ${L==="light"?"bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white":"bg-[#202127] border-[#30313a] text-white placeholder-gray-500"}`})]})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[w==="templates"&&h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block",children:"Estampas Prontas Recomendadas"}),h.jsx("div",{className:"grid grid-cols-1 gap-3",children:k.filter(P=>P.title.toLowerCase().includes(T.toLowerCase())).map(P=>h.jsxs("div",{onClick:()=>{y&&y(P.imageUrl,P.title)},className:"group relative rounded-2xl overflow-hidden border border-[#2d2e36] hover:border-purple-500/80 cursor-pointer shadow-md transition-all hover:scale-[1.02]",children:[h.jsx("img",{src:P.imageUrl,alt:P.title,className:"w-full h-28 object-cover group-hover:brightness-110 transition-all"}),h.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end",children:[h.jsx("span",{className:"text-white font-bold text-xs group-hover:text-purple-300 transition-colors",children:P.title}),h.jsx("span",{className:"text-[10px] text-gray-300 font-medium",children:P.category})]})]},P.id))})]}),w==="elements"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2",children:"Formas Geométricas"}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:W.map(P=>h.jsxs("button",{onClick:()=>{s(P.id),g("shape",P.id)},className:"flex flex-col items-center justify-center p-3 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] hover:border-purple-500 rounded-xl transition-all cursor-pointer group text-gray-300 hover:text-white",children:[h.jsx("div",{className:"text-purple-400 group-hover:scale-110 transition-transform mb-1",children:P.icon}),h.jsx("span",{className:"text-[10px] font-medium text-center truncate w-full",children:P.label})]},P.id))})]}),h.jsxs("div",{className:"border-t border-[#26272e] pt-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2",children:"Selos e Emblemas Sublimáticos"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{onClick:()=>g("shape","badge"),className:"p-3 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/40 hover:border-purple-400 rounded-xl text-left flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02]",children:[h.jsx(_x,{className:"w-6 h-6 text-amber-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-white block text-[11px]",children:"Selo 100% Sublimado"}),h.jsx("span",{className:"text-[9px] text-purple-300",children:"Vetor Editável"})]})]}),h.jsxs("button",{onClick:()=>g("shape","star"),className:"p-3 bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-500/40 hover:border-amber-400 rounded-xl text-left flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02]",children:[h.jsx(yx,{className:"w-6 h-6 text-amber-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-white block text-[11px]",children:"Estrela Destaque"}),h.jsx("span",{className:"text-[9px] text-amber-300",children:"Forma Especial"})]})]})]})]})]}),w==="text"&&h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block",children:"Clique para Inserir Texto"}),h.jsxs("button",{onClick:()=>g("text"),className:"w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-lg rounded-xl shadow-lg transition-all text-left flex items-center justify-between cursor-pointer active:scale-95",children:[h.jsx("span",{children:"Adicionar um título"}),h.jsx(Fr,{className:"w-5 h-5"})]}),h.jsxs("button",{onClick:()=>g("text"),className:"w-full py-2.5 px-4 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] text-white font-bold text-sm rounded-xl transition-all text-left flex items-center justify-between cursor-pointer",children:[h.jsx("span",{children:"Adicionar um subtítulo"}),h.jsx(Fr,{className:"w-4 h-4 text-purple-400"})]}),h.jsxs("button",{onClick:()=>g("text"),className:"w-full py-2 px-4 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] text-gray-300 hover:text-white font-medium text-xs rounded-xl transition-all text-left flex items-center justify-between cursor-pointer",children:[h.jsx("span",{children:"Adicionar um pouquinho de texto"}),h.jsx(Fr,{className:"w-4 h-4 text-gray-400"})]}),h.jsxs("div",{className:"border-t border-[#26272e] pt-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2",children:"Texto Curvado para Caneca"}),h.jsxs("button",{onClick:()=>g("text"),className:"w-full p-3 bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-sky-900/30 border border-purple-500/30 hover:border-purple-400 rounded-xl text-left flex items-center justify-between cursor-pointer",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-purple-300 block text-xs",children:"Arco de Caneca (Curvado)"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Excelente para nomes e datas"})]}),h.jsx(sl,{className:"w-5 h-5 text-purple-400"})]})]})]}),w==="uploads"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("label",{className:"w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer",children:[h.jsx(bS,{className:"w-4 h-4"}),h.jsx("span",{children:"Fazer Upload de Imagem"}),h.jsx("input",{type:"file",accept:"image/*",onChange:X,className:"hidden"})]}),h.jsxs("div",{className:"border-t border-[#26272e] pt-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2",children:"Galeria de Fundos Sublimáticos HD"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:V.map(P=>h.jsxs("div",{onClick:()=>{y&&y(P.url,P.tag)},className:"group relative h-24 rounded-xl overflow-hidden border border-[#2d2e36] hover:border-purple-500 cursor-pointer shadow-sm transition-all hover:scale-105",children:[h.jsx("img",{src:P.url,alt:P.tag,className:"w-full h-full object-cover"}),h.jsx("div",{className:"absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors p-2 flex items-end",children:h.jsx("span",{className:"text-white text-[10px] font-semibold",children:P.tag})})]},P.id))})]})]}),w==="products"&&h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block",children:"Escolha o Produto para Criar"}),h.jsx("div",{className:"grid grid-cols-1 gap-2",children:eu.map(P=>{const O=m.id===P.id;return h.jsxs("div",{onClick:()=>v(P),className:`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${O?"bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10":"bg-[#202127] border-[#30313a] text-gray-300 hover:bg-[#2a2b33] hover:text-white"}`,children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold shrink-0",children:h.jsx(bx,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-bold text-xs truncate",children:P.name}),O&&h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),h.jsx("span",{className:"text-[10px] text-gray-400 block font-mono",children:P.printAspect})]})]},P.id)})})]}),w==="ai"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"p-3 bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-sky-900/40 border border-purple-500/40 rounded-2xl space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 text-purple-300 font-bold text-xs",children:[h.jsx(zi,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{children:"Estúdio IA Generativo"})]}),h.jsx("p",{className:"text-[11px] text-gray-300",children:"Crie estampas exclusivas em 300 DPI por comando de voz ou texto, remova fundos e vetorize."}),h.jsxs("button",{onClick:()=>{G&&G()},className:"w-full py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5",children:[h.jsx(rl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Abrir Painel IA Completo"})]})]}),h.jsxs("div",{className:"space-y-2 border-t border-[#26272e] pt-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block",children:"Ferramentas de Imagem IA"}),h.jsxs("button",{onClick:()=>e("remove_bg"),className:"w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200",children:[h.jsx(rl,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{children:"Remover Fundo da Imagem"})]}),h.jsxs("button",{onClick:()=>e("vectorize"),className:"w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200",children:[h.jsx(zi,{className:"w-4 h-4 text-sky-400"}),h.jsx("span",{children:"Vetorizar Imagem para Sublimação"})]}),h.jsxs("button",{onClick:()=>e("upscale"),className:"w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200",children:[h.jsx(hu,{className:"w-4 h-4 text-amber-400"}),h.jsx("span",{children:"Upscale IA 300 DPI Impressão"})]})]})]}),w==="layers"&&h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#26272e]",children:[h.jsxs("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider",children:["Camadas na Tela (",_.length,")"]}),h.jsx("button",{onClick:()=>g("text"),className:"p-1 hover:bg-white/10 text-purple-400 rounded transition-colors",title:"Adicionar Nova Camada",children:h.jsx(Fr,{className:"w-4 h-4"})})]}),h.jsx("div",{className:"space-y-1.5",children:_.slice().reverse().map(P=>{const O=x===P.id;return h.jsxs("div",{onClick:()=>b(P.id),className:`p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${O?"bg-purple-600/20 border-purple-500 text-white shadow-md":"bg-[#202127] border-[#30313a] text-gray-300 hover:bg-[#2a2b33]"}`,children:[h.jsx("div",{className:"flex items-center gap-2 min-w-0",children:h.jsx("span",{className:"text-xs font-bold truncate max-w-[140px]",children:P.name})}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("button",{onClick:H=>{H.stopPropagation(),A({...P,visible:!P.visible})},className:"p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white",children:P.visible?h.jsx(Ov,{className:"w-3.5 h-3.5 text-purple-400"}):h.jsx(Lv,{className:"w-3.5 h-3.5 text-gray-600"})}),h.jsx("button",{onClick:H=>{H.stopPropagation(),A({...P,locked:!P.locked})},className:"p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white",children:P.locked?h.jsx(Bv,{className:"w-3.5 h-3.5 text-amber-400"}):h.jsx(Iv,{className:"w-3.5 h-3.5 text-gray-500"})}),N&&h.jsx("button",{onClick:H=>{H.stopPropagation(),N(P.id)},className:"p-1 hover:bg-red-500/20 text-gray-400 hover:text-red-300 rounded",children:h.jsx(al,{className:"w-3.5 h-3.5"})})]})]},P.id)})})]})]})]})]})},DS=({product:r,layers:e,activeLayerId:i,onSelectLayer:s,onUpdateLayer:l,onDeleteLayer:c,onDuplicateLayer:f,onChangeColor:p,activeTool:g,selectedShape:m,activeColor:v,brushSize:_,mirrorSublimation:x,showGrid:b,showRulers:A,onCanvasRendered:N,theme:M="dark"})=>{const y=Be.useRef(null),G=Be.useRef(null),[L,w]=Be.useState(1),[I,D]=Be.useState({x:0,y:0}),B=Be.useRef(!1),T=Be.useRef({x:0,y:0}),z=Be.useRef(!1),k=Be.useRef([]),V=Be.useRef(!1),W=Be.useRef({x:0,y:0}),he=Be.useRef(null),X=Be.useRef(null),P=Math.round(r.defaultWidthCm/2.54*150),O=Math.round(r.defaultHeightCm/2.54*150),H=Be.useRef(new Map),te=()=>{if(!y.current)return;const ae=y.current.clientWidth-80,$=y.current.clientHeight-80;if(ae<=0||$<=0)return;const q=ae/P,ve=$/O,_e=Math.min(q,ve,1.2);w(Math.max(.15,_e)),D({x:0,y:0})};Be.useEffect(()=>{te()},[P,O,r.id]),Be.useEffect(()=>{const ae=G.current;if(!ae)return;ae.width=P,ae.height=O;const $=ae.getContext("2d");if(!$)return;$.clearRect(0,0,ae.width,ae.height),$.fillStyle=r.bgColor||"#ffffff",$.fillRect(0,0,ae.width,ae.height),$.save(),x&&($.translate(ae.width,0),$.scale(-1,1)),e.filter(be=>be.visible).forEach(be=>{$.save(),$.globalAlpha=be.opacity/100,$.globalCompositeOperation=be.blendMode;const Ue=be.x+be.width/2,Ne=be.y+be.height/2;if($.translate(Ue,Ne),$.rotate(be.rotation*Math.PI/180),$.translate(-be.width/2,-be.height/2),be.type==="text")if($.fillStyle=be.color||v,$.font=`${be.fontWeight||"normal"} ${be.fontSize||36}px ${be.fontFamily||"Arial"}`,$.textAlign=be.textAlign||"left",$.textBaseline="top",be.textCurved&&be.curveRadius){const Le=be.content,We=be.curveRadius||120;$.save();for(let Ke=0;Ke<Le.length;Ke++)$.save(),$.rotate((Ke-Le.length/2)*.15),$.fillText(Le[Ke],0,-We),$.restore();$.restore()}else $.fillText(be.content,0,0);else if(be.type==="image"||be.type==="smart"){if(be.content){let Le=H.current.get(be.content);Le||(Le=new Image,Le.crossOrigin="anonymous",Le.src=be.content,H.current.set(be.content,Le),Le.onload=()=>{G.current&&N(G.current)},Le.onerror=()=>{const We=document.createElement("canvas");We.width=400,We.height=400;const Ke=We.getContext("2d");if(Ke){const lt=Ke.createLinearGradient(0,0,400,400);lt.addColorStop(0,"#0284c7"),lt.addColorStop(1,"#7e22ce"),Ke.fillStyle=lt,Ke.fillRect(0,0,400,400),Ke.fillStyle="#ffffff",Ke.font="bold 20px sans-serif",Ke.textAlign="center",Ke.fillText("Estampa Sublimática",200,200)}Le.src=We.toDataURL()}),Le.complete&&Le.naturalWidth>0&&$.drawImage(Le,0,0,be.width,be.height)}}else if(be.type==="shape")$.fillStyle=be.color||v,$.strokeStyle=be.strokeColor||"#000000",$.lineWidth=be.strokeWidth||0,$.beginPath(),be.shapeType==="circle"?$.ellipse(be.width/2,be.height/2,be.width/2,be.height/2,0,0,2*Math.PI):be.shapeType==="star"?K($,be.width/2,be.height/2,5,be.width/2,be.width/4):be.shapeType==="heart"?Me($,0,0,be.width,be.height):$.rect(0,0,be.width,be.height),$.fill(),be.strokeWidth&&be.strokeWidth>0&&$.stroke();else if(be.type==="brush"){$.fillStyle=be.color||v,$.strokeStyle=be.color||v,$.lineWidth=be.strokeWidth||_,$.lineCap="round",$.lineJoin="round";try{const Le=JSON.parse(be.content||"[]");Le.length>0&&($.beginPath(),$.moveTo(Le[0].x,Le[0].y),Le.forEach(We=>$.lineTo(We.x,We.y)),$.stroke())}catch{}}$.restore()}),$.restore();const ve=document.createElement("canvas");ve.width=ae.width,ve.height=ae.height;const _e=ve.getContext("2d");_e&&(_e.drawImage(ae,0,0),N(ve));const Ce=e.find(be=>be.id===i);if(Ce&&Ce.visible){$.save(),$.strokeStyle="#007acc",$.lineWidth=2,$.setLineDash([6,4]);const be=Ce.x+Ce.width/2,Ue=Ce.y+Ce.height/2;$.translate(be,Ue),$.rotate(Ce.rotation*Math.PI/180),$.translate(-Ce.width/2,-Ce.height/2),$.strokeRect(0,0,Ce.width,Ce.height),$.setLineDash([]),$.fillStyle="#ffffff";const Ne=8;[{x:0,y:0},{x:Ce.width,y:0},{x:0,y:Ce.height},{x:Ce.width,y:Ce.height}].forEach(We=>{$.fillRect(We.x-Ne/2,We.y-Ne/2,Ne,Ne),$.strokeRect(We.x-Ne/2,We.y-Ne/2,Ne,Ne)}),$.fillStyle="#007acc",$.beginPath(),$.arc(Ce.width/2,-20,6,0,Math.PI*2),$.fill(),$.restore()}},[e,i,r,x,P,O]);const oe=ae=>{const $=G.current;if(!$)return;const q=$.getBoundingClientRect(),ve=$.width/q.width,_e=$.height/q.height,Ce=(ae.clientX-q.left)*ve,be=(ae.clientY-q.top)*_e;if(g==="move"||ae.spaceKey){B.current=!0,T.current={x:ae.clientX-I.x,y:ae.clientY-I.y};return}if(g==="brush"){z.current=!0,k.current=[{x:Ce,y:be}];return}if(g==="eyedropper"){const Ne=$.getContext("2d");if(Ne){const Le=Ne.getImageData(Math.round(Ce),Math.round(be),1,1).data,We=`#${((1<<24)+(Le[0]<<16)+(Le[1]<<8)+Le[2]).toString(16).slice(1)}`;p&&p(We)}return}if(g==="eraser"){const Ne=[...e].reverse().find(Le=>Ce>=Le.x&&Ce<=Le.x+Le.width&&be>=Le.y&&be<=Le.y+Le.height);Ne&&c&&c(Ne.id);return}if(g==="text"){const Ne="layer-"+Date.now(),Le={id:Ne,name:"Texto "+(e.length+1),type:"text",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:Math.max(20,Ce-150),y:Math.max(20,be-30),width:350,height:70,rotation:0,content:"TEXTO PERSONALIZADO",color:v,fontSize:36,fontFamily:"Impact",fontWeight:"bold"};l(Le),s(Ne);return}if(g==="shapes"){const Ne="layer-"+Date.now(),Le={id:Ne,name:"Forma "+m,type:"shape",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:Math.max(20,Ce-100),y:Math.max(20,be-100),width:200,height:200,rotation:0,content:"",shapeType:m,color:v};l(Le),s(Ne);return}if(i){const Ne=e.find(Le=>Le.id===i);if(Ne&&Ne.visible){const Le=Ne.x+Ne.width/2,We=Ne.y+Ne.height/2,Ke=-Ne.rotation*Math.PI/180,lt=Ce-Le,Yt=be-We,Zt=lt*Math.cos(Ke)-Yt*Math.sin(Ke)+Ne.width/2,Kt=lt*Math.sin(Ke)+Yt*Math.cos(Ke)+Ne.height/2;if(Math.hypot(Zt-Ne.width/2,Kt- -20)<=16){he.current="rotate",X.current={mouseX:Ce,mouseY:be,x:Ne.x,y:Ne.y,w:Ne.width,h:Ne.height,rot:Ne.rotation};return}if(Math.abs(Zt-Ne.width)<=16&&Math.abs(Kt-Ne.height)<=16){he.current="br",X.current={mouseX:Ce,mouseY:be,x:Ne.x,y:Ne.y,w:Ne.width,h:Ne.height,rot:Ne.rotation};return}}}const Ue=[...e].reverse().find(Ne=>Ce>=Ne.x&&Ce<=Ne.x+Ne.width&&be>=Ne.y&&be<=Ne.y+Ne.height);Ue?(s(Ue.id),V.current=!0,W.current={x:Ce-Ue.x,y:be-Ue.y}):s(null)},xe=ae=>{const $=G.current;if(!$)return;if(B.current){D({x:ae.clientX-T.current.x,y:ae.clientY-T.current.y});return}const q=$.getBoundingClientRect(),ve=$.width/q.width,_e=$.height/q.height,Ce=(ae.clientX-q.left)*ve,be=(ae.clientY-q.top)*_e;if(he.current&&i&&X.current){const Ue=e.find(Ne=>Ne.id===i);if(Ue){const Ne=X.current;if(he.current==="rotate"){const Le=Ue.x+Ue.width/2,We=Ue.y+Ue.height/2;let Ke=Math.atan2(be-We,Ce-Le)*(180/Math.PI)+90;Ke<0&&(Ke+=360),l({...Ue,rotation:Math.round(Ke)});return}if(he.current==="br"){const Le=Ce-Ne.mouseX,We=be-Ne.mouseY,Ke=Math.max(20,Math.round(Ne.w+Le)),lt=Math.max(20,Math.round(Ne.h+We));l({...Ue,width:Ke,height:lt});return}}}if(z.current&&g==="brush")k.current.push({x:Ce,y:be});else if(V.current&&i){const Ue=e.find(Ne=>Ne.id===i);Ue&&l({...Ue,x:Ce-W.current.x,y:be-W.current.y})}},U=()=>{if(he.current=null,X.current=null,z.current&&g==="brush"&&(z.current=!1,k.current.length>0)){const ae={id:"layer-"+Date.now(),name:"Traço Pincel "+(e.length+1),type:"brush",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:0,y:0,width:P,height:O,rotation:0,content:JSON.stringify(k.current),color:v,strokeWidth:_};l(ae),k.current=[]}B.current=!1,V.current=!1},K=(ae,$,q,ve,_e,Ce)=>{let be=Math.PI/2*3,Ue=$,Ne=q;const Le=Math.PI/ve;ae.beginPath(),ae.moveTo($,q-_e);for(let We=0;We<ve;We++)Ue=$+Math.cos(be)*_e,Ne=q+Math.sin(be)*_e,ae.lineTo(Ue,Ne),be+=Le,Ue=$+Math.cos(be)*Ce,Ne=q+Math.sin(be)*Ce,ae.lineTo(Ue,Ne),be+=Le;ae.lineTo($,q-_e),ae.closePath()},Me=(ae,$,q,ve,_e)=>{ae.beginPath(),ae.moveTo($+ve/2,q+_e/4),ae.bezierCurveTo($+ve/2,q,$,q,$,q+_e/4),ae.bezierCurveTo($,q+_e/2,$+ve/2,q+_e*3/4,$+ve/2,q+_e),ae.bezierCurveTo($+ve/2,q+_e*3/4,$+ve,q+_e/2,$+ve,q+_e/4),ae.bezierCurveTo($+ve,q,$+ve/2,q,$+ve/2,q+_e/4),ae.closePath()};return h.jsxs("div",{ref:y,className:`relative flex-1 w-full h-full overflow-hidden flex items-center justify-center select-none transition-colors ${M==="light"?"bg-slate-200":"bg-[#121214]"}`,children:[A&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:`absolute top-0 left-0 right-0 h-5 border-b z-20 flex items-center text-[9px] font-mono px-6 ${M==="light"?"bg-slate-100 border-slate-300 text-slate-600":"bg-[#1a1a1c] border-[#2d2d30] text-gray-500"}`,children:[h.jsx("span",{className:"mr-8",children:"0mm"}),h.jsx("span",{className:"mr-8",children:"50mm"}),h.jsx("span",{className:"mr-8",children:"100mm"}),h.jsx("span",{className:"mr-8",children:"150mm"}),h.jsx("span",{className:"mr-8",children:"200mm"}),h.jsx("span",{children:"250mm"})]}),h.jsxs("div",{className:`absolute top-0 left-0 bottom-0 w-5 border-r z-20 flex flex-col items-center text-[9px] font-mono py-6 ${M==="light"?"bg-slate-100 border-slate-300 text-slate-600":"bg-[#1a1a1c] border-[#2d2d30] text-gray-500"}`,children:[h.jsx("span",{className:"mb-8",children:"0"}),h.jsx("span",{className:"mb-8",children:"50"}),h.jsx("span",{className:"mb-8",children:"100"}),h.jsx("span",{className:"mb-8",children:"150"})]})]}),h.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:b?`radial-gradient(circle, ${M==="light"?"#64748b":"#475569"} 1px, transparent 1px)`:"none",backgroundSize:"20px 20px"}}),h.jsxs("div",{style:{transform:`translate(${I.x}px, ${I.y}px) scale(${L})`,transition:B.current?"none":"transform 0.1s ease-out"},className:`relative shadow-2xl rounded-sm border bg-white ${M==="light"?"border-purple-300 shadow-slate-400/50":"border-sky-500/30"}`,children:[h.jsxs("div",{className:`absolute -top-6 left-0 right-0 flex items-center justify-between text-[10px] font-mono font-semibold px-1 pointer-events-none ${M==="light"?"text-purple-700":"text-sky-400"}`,children:[h.jsx("span",{children:"ÁREA IMPRIMÍVEL 300 DPI"}),h.jsx("span",{children:r.printAspect})]}),h.jsx("canvas",{ref:G,onMouseDown:oe,onMouseMove:xe,onMouseUp:U,onMouseLeave:U,className:"cursor-crosshair shadow-2xl block"})]}),i&&h.jsx("div",{className:`absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-2 backdrop-blur-lg border rounded-2xl shadow-2xl z-30 text-xs animate-in fade-in slide-in-from-top-3 duration-200 ${M==="light"?"bg-white/95 border-purple-200 text-slate-800 shadow-slate-300/60":"bg-[#181920]/95 border-purple-500/40 text-gray-200"}`,children:(()=>{const ae=e.find($=>$.id===i);return ae?h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("span",{className:"text-[11px] font-bold text-purple-300 max-w-[110px] truncate bg-purple-950/60 px-2 py-0.5 rounded-lg border border-purple-500/30",children:ae.name}),h.jsx("div",{className:"w-[1px] h-4 bg-white/20"}),ae.type==="text"&&h.jsxs(h.Fragment,{children:[h.jsxs("select",{value:ae.fontFamily||"Impact",onChange:$=>l({...ae,fontFamily:$.target.value}),className:"bg-[#23242e] text-white text-[11px] px-2 py-1 rounded-lg border border-[#383945] focus:outline-none focus:border-purple-500 cursor-pointer",children:[h.jsx("option",{value:"Impact",children:"Impact"}),h.jsx("option",{value:"Arial",children:"Arial Bold"}),h.jsx("option",{value:"Playfair Display",children:"Playfair Display"}),h.jsx("option",{value:"Montserrat",children:"Montserrat"}),h.jsx("option",{value:"Pacifico",children:"Pacifico"}),h.jsx("option",{value:"Lobster",children:"Lobster"}),h.jsx("option",{value:"Great Vibes",children:"Great Vibes"}),h.jsx("option",{value:"Courier New",children:"Courier"})]}),h.jsxs("div",{className:"flex items-center bg-[#23242e] rounded-lg border border-[#383945] p-0.5",children:[h.jsx("button",{onClick:()=>l({...ae,fontSize:Math.max(12,(ae.fontSize||36)-4)}),className:"px-1.5 py-0.5 hover:bg-white/10 rounded font-bold text-xs",children:"-"}),h.jsx("span",{className:"px-1.5 text-[11px] font-mono font-bold text-purple-300",children:ae.fontSize||36}),h.jsx("button",{onClick:()=>l({...ae,fontSize:Math.min(120,(ae.fontSize||36)+4)}),className:"px-1.5 py-0.5 hover:bg-white/10 rounded font-bold text-xs",children:"+"})]}),h.jsx("button",{onClick:()=>l({...ae,isCurved:!ae.isCurved,curveRadius:ae.curveRadius||120}),className:`px-2 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${ae.isCurved?"bg-purple-600 text-white shadow-sm":"bg-[#23242e] text-gray-300 hover:text-white"}`,title:"Alternar Texto Curvado em Arco (Caneca)",children:h.jsxs("span",{children:["Arco: ",ae.isCurved?"ON":"OFF"]})})]}),h.jsx("label",{className:"w-6 h-6 rounded-full border-2 border-white/30 cursor-pointer shadow-inner hover:scale-110 transition-transform relative overflow-hidden",style:{backgroundColor:ae.color||v},title:"Mudar Cor do Elemento",children:h.jsx("input",{type:"color",value:ae.color||v,onChange:$=>l({...ae,color:$.target.value}),className:"opacity-0 absolute inset-0 cursor-pointer"})}),h.jsx("div",{className:"w-[1px] h-4 bg-white/20"}),f&&h.jsxs("button",{onClick:()=>f(ae.id),className:"p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer",title:"Duplicar elemento",children:[h.jsx(tu,{className:"w-3.5 h-3.5 text-purple-400"}),h.jsx("span",{className:"hidden sm:inline",children:"Duplicar"})]}),h.jsxs("button",{onClick:()=>l({...ae,rotation:(ae.rotation+90)%360}),className:"p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer",title:"Girar 90°",children:[h.jsx(pu,{className:"w-3.5 h-3.5 text-sky-400"}),h.jsx("span",{className:"hidden sm:inline",children:"Girar"})]}),h.jsx("div",{className:"w-[1px] h-4 bg-white/20"}),c&&h.jsxs("button",{onClick:()=>c(ae.id),className:"p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 rounded-lg font-bold flex items-center gap-1 text-[11px] transition-colors cursor-pointer",title:"Excluir Elemento Selecionado (Del)",children:[h.jsx(al,{className:"w-3.5 h-3.5 text-red-400"}),h.jsx("span",{children:"Excluir"})]})]}):null})()}),h.jsxs("div",{className:`absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 backdrop-blur-md border rounded-xl shadow-2xl z-30 text-xs ${M==="light"?"bg-white/95 border-slate-300 text-slate-800 shadow-slate-300/60":"bg-[#1e1e20]/90 border-[#38383c] text-gray-300"}`,children:[h.jsx("button",{onClick:()=>w(ae=>Math.max(.2,ae-.1)),className:`p-1.5 rounded-lg transition-colors cursor-pointer ${M==="light"?"hover:bg-slate-100 text-slate-700 hover:text-slate-900":"hover:bg-white/10 text-gray-300 hover:text-white"}`,title:"Diminuir Zoom",children:h.jsx(wS,{className:"w-3.5 h-3.5"})}),h.jsxs("span",{className:`font-mono text-[11px] font-semibold w-12 text-center ${M==="light"?"text-purple-700":"text-sky-400"}`,children:[Math.round(L*100),"%"]}),h.jsx("button",{onClick:()=>w(ae=>Math.min(3,ae+.1)),className:`p-1.5 rounded-lg transition-colors cursor-pointer ${M==="light"?"hover:bg-slate-100 text-slate-700 hover:text-slate-900":"hover:bg-white/10 text-gray-300 hover:text-white"}`,title:"Aumentar Zoom",children:h.jsx(TS,{className:"w-3.5 h-3.5"})}),h.jsx("div",{className:`w-[1px] h-4 my-auto ${M==="light"?"bg-slate-300":"bg-[#38383c]"}`}),h.jsx("button",{onClick:te,className:`px-2 py-1 text-[11px] font-medium rounded-lg transition-colors cursor-pointer ${M==="light"?"hover:bg-slate-100 text-slate-700 hover:text-slate-900":"hover:bg-white/10 text-gray-300 hover:text-white"}`,children:"Ajustar Tela"})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="185",US=0,Sx=1,LS=2,tl=1,OS=2,Qo=3,us=0,Qn=1,Li=2,Ea=0,Hr=1,Mx=2,Ex=3,Tx=4,PS=5,Is=100,zS=101,IS=102,BS=103,FS=104,HS=200,GS=201,kS=202,VS=203,gh=204,xh=205,jS=206,XS=207,WS=208,qS=209,YS=210,ZS=211,KS=212,QS=213,JS=214,vh=0,_h=1,bh=2,Vr=3,yh=4,Sh=5,Mh=6,Eh=7,Vv=0,$S=1,eM=2,Yi=0,jv=1,Xv=2,Wv=3,up=4,qv=5,Yv=6,Zv=7,Kv=300,ks=301,jr=302,Rd=303,Nd=304,mu=306,ol=1e3,Ma=1001,Th=1002,Un=1003,tM=1004,Ec=1005,Bn=1006,Dd=1007,Fs=1008,di=1009,Qv=1010,Jv=1011,ll=1012,fp=1013,Ki=1014,Wi=1015,Aa=1016,dp=1017,hp=1018,cl=1020,$v=35902,e_=35899,t_=1021,n_=1022,Pi=1023,wa=1026,Hs=1027,i_=1028,pp=1029,Vs=1030,mp=1031,gp=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,Ah=35840,wh=35841,Ch=35842,Rh=35843,Nh=36196,Dh=37492,Uh=37496,Lh=37488,Oh=37489,nu=37490,Ph=37491,zh=37808,Ih=37809,Bh=37810,Fh=37811,Hh=37812,Gh=37813,kh=37814,Vh=37815,jh=37816,Xh=37817,Wh=37818,qh=37819,Yh=37820,Zh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,ep=36284,iu=36285,tp=36286,nM=3200,np=0,iM=1,ls="",fi="srgb",au="srgb-linear",su="linear",Vt="srgb",Er=7680,Ax=519,aM=512,sM=513,rM=514,xp=515,oM=516,lM=517,vp=518,cM=519,wx=35044,Cx="300 es",qi=2e3,ul=2001;function uM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fM(){const r=ru("canvas");return r.style.display="block",r}const Rx={};function Nx(...r){const e="THREE."+r.shift();console.log(e,...r)}function a_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ut(...r){r=a_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Nt(...r){r=a_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Gr(...r){const e=r.join(" ");e in Rx||(Rx[e]=!0,ut(...r))}function dM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const hM={[vh]:_h,[bh]:Mh,[yh]:Eh,[Vr]:Sh,[_h]:vh,[Mh]:bh,[Eh]:yh,[Sh]:Vr};class js{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,ip=180/Math.PI;function fl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function _t(r,e,i){return Math.max(e,Math.min(i,r))}function pM(r,e){return(r%e+e)%e}function Ld(r,e,i){return(1-i)*r+i*e}function Vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tp=class Tp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tp.prototype.isVector2=!0;let ot=Tp;class qr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let g=s[l+0],m=s[l+1],v=s[l+2],_=s[l+3],x=c[f+0],b=c[f+1],A=c[f+2],N=c[f+3];if(_!==N||g!==x||m!==b||v!==A){let M=g*x+m*b+v*A+_*N;M<0&&(x=-x,b=-b,A=-A,N=-N,M=-M);let y=1-p;if(M<.9995){const G=Math.acos(M),L=Math.sin(G);y=Math.sin(y*G)/L,p=Math.sin(p*G)/L,g=g*y+x*p,m=m*y+b*p,v=v*y+A*p,_=_*y+N*p}else{g=g*y+x*p,m=m*y+b*p,v=v*y+A*p,_=_*y+N*p;const G=1/Math.sqrt(g*g+m*m+v*v+_*_);g*=G,m*=G,v*=G,_*=G}}e[i]=g,e[i+1]=m,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],g=s[l+1],m=s[l+2],v=s[l+3],_=c[f],x=c[f+1],b=c[f+2],A=c[f+3];return e[i]=p*A+v*_+g*b-m*x,e[i+1]=g*A+v*x+m*_-p*b,e[i+2]=m*A+v*b+p*x-g*_,e[i+3]=v*A-p*_-g*x-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,g=Math.sin,m=p(s/2),v=p(l/2),_=p(c/2),x=g(s/2),b=g(l/2),A=g(c/2);switch(f){case"XYZ":this._x=x*v*_+m*b*A,this._y=m*b*_-x*v*A,this._z=m*v*A+x*b*_,this._w=m*v*_-x*b*A;break;case"YXZ":this._x=x*v*_+m*b*A,this._y=m*b*_-x*v*A,this._z=m*v*A-x*b*_,this._w=m*v*_+x*b*A;break;case"ZXY":this._x=x*v*_-m*b*A,this._y=m*b*_+x*v*A,this._z=m*v*A+x*b*_,this._w=m*v*_-x*b*A;break;case"ZYX":this._x=x*v*_-m*b*A,this._y=m*b*_+x*v*A,this._z=m*v*A-x*b*_,this._w=m*v*_+x*b*A;break;case"YZX":this._x=x*v*_+m*b*A,this._y=m*b*_+x*v*A,this._z=m*v*A-x*b*_,this._w=m*v*_-x*b*A;break;case"XZY":this._x=x*v*_-m*b*A,this._y=m*b*_-x*v*A,this._z=m*v*A+x*b*_,this._w=m*v*_+x*b*A;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],g=i[9],m=i[2],v=i[6],_=i[10],x=s+p+_;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(v-g)*b,this._y=(c-m)*b,this._z=(f-l)*b}else if(s>p&&s>_){const b=2*Math.sqrt(1+s-p-_);this._w=(v-g)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+m)/b}else if(p>_){const b=2*Math.sqrt(1+p-s-_);this._w=(c-m)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(g+v)/b}else{const b=2*Math.sqrt(1+_-s-p);this._w=(f-l)/b,this._x=(c+m)/b,this._y=(g+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,g=i._y,m=i._z,v=i._w;return this._x=s*v+f*p+l*m-c*g,this._y=l*v+f*g+c*p-s*m,this._z=c*v+f*m+s*g-l*p,this._w=f*v-s*p-l*g-c*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let g=1-i;if(p<.9995){const m=Math.acos(p),v=Math.sin(m);g=Math.sin(g*m)/v,i=Math.sin(i*m)/v,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ap=class Ap{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Dx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Dx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,g=e.w,m=2*(f*l-p*s),v=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+g*m+f*_-p*v,this.y=s+g*v+p*m-c*_,this.z=l+g*_+c*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,g=i.z;return this.x=l*g-c*p,this.y=c*f-s*g,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ap.prototype.isVector3=!0;let Z=Ap;const Od=new Z,Dx=new qr,wp=class wp{constructor(e,i,s,l,c,f,p,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,g,m)}set(e,i,s,l,c,f,p,g,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=g,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],g=s[6],m=s[1],v=s[4],_=s[7],x=s[2],b=s[5],A=s[8],N=l[0],M=l[3],y=l[6],G=l[1],L=l[4],w=l[7],I=l[2],D=l[5],B=l[8];return c[0]=f*N+p*G+g*I,c[3]=f*M+p*L+g*D,c[6]=f*y+p*w+g*B,c[1]=m*N+v*G+_*I,c[4]=m*M+v*L+_*D,c[7]=m*y+v*w+_*B,c[2]=x*N+b*G+A*I,c[5]=x*M+b*L+A*D,c[8]=x*y+b*w+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],m=e[7],v=e[8];return i*f*v-i*p*m-s*c*v+s*p*g+l*c*m-l*f*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],m=e[7],v=e[8],_=v*f-p*m,x=p*g-v*c,b=m*c-f*g,A=i*_+s*x+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/A;return e[0]=_*N,e[1]=(l*m-v*s)*N,e[2]=(p*s-l*f)*N,e[3]=x*N,e[4]=(v*i-l*g)*N,e[5]=(l*c-p*i)*N,e[6]=b*N,e[7]=(s*g-m*i)*N,e[8]=(f*i-s*c)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const g=Math.cos(c),m=Math.sin(c);return this.set(s*g,s*m,-s*(g*f+m*p)+f+e,-l*m,l*g,-l*(-m*f+g*p)+p+i,0,0,1),this}scale(e,i){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pd.makeScale(e,i)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pd.makeRotation(-e)),this}translate(e,i){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;let ht=wp;const Pd=new ht,Ux=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const r={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Vt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Vt&&(l.r=kr(l.r),l.g=kr(l.g),l.b=kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[au]:{primaries:e,whitePoint:s,transfer:su,toXYZ:Ux,fromXYZ:Lx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:Ux,fromXYZ:Lx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const wt=mM();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class gM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Tr===void 0&&(Tr=ru("canvas")),Tr.width=e.width,Tr.height=e.height;const l=Tr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ru("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=fl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(zd(l[f].image)):c.push(zd(l[f]))}else c=zd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let vM=0;const Id=new Z;class Fn extends js{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=Ma,l=Ma,c=Bn,f=Fs,p=Pi,g=di,m=Fn.DEFAULT_ANISOTROPY,v=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=fl(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=g,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Kv;Fn.DEFAULT_ANISOTROPY=1;const Cp=class Cp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,m=g[0],v=g[4],_=g[8],x=g[1],b=g[5],A=g[9],N=g[2],M=g[6],y=g[10];if(Math.abs(v-x)<.01&&Math.abs(_-N)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+N)<.1&&Math.abs(A+M)<.1&&Math.abs(m+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,w=(b+1)/2,I=(y+1)/2,D=(v+x)/4,B=(_+N)/4,T=(A+M)/4;return L>w&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=D/s,c=B/s):w>I?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=D/l,c=T/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=B/c,l=T/c),this.set(s,l,c,i),this}let G=Math.sqrt((M-A)*(M-A)+(_-N)*(_-N)+(x-v)*(x-v));return Math.abs(G)<.001&&(G=1),this.x=(M-A)/G,this.y=(_-N)/G,this.z=(x-v)/G,this.w=Math.acos((m+b+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cp.prototype.isVector4=!0;let ln=Cp;class _M extends js{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Fn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new _p(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends _M{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class s_ extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=class du{constructor(e,i,s,l,c,f,p,g,m,v,_,x,b,A,N,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,g,m,v,_,x,b,A,N,M)}set(e,i,s,l,c,f,p,g,m,v,_,x,b,A,N,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=g,y[2]=m,y[6]=v,y[10]=_,y[14]=x,y[3]=b,y[7]=A,y[11]=N,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ar.setFromMatrixColumn(e,0).length(),c=1/Ar.setFromMatrixColumn(e,1).length(),f=1/Ar.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),g=Math.cos(l),m=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*v,b=f*_,A=p*v,N=p*_;i[0]=g*v,i[4]=-g*_,i[8]=m,i[1]=b+A*m,i[5]=x-N*m,i[9]=-p*g,i[2]=N-x*m,i[6]=A+b*m,i[10]=f*g}else if(e.order==="YXZ"){const x=g*v,b=g*_,A=m*v,N=m*_;i[0]=x+N*p,i[4]=A*p-b,i[8]=f*m,i[1]=f*_,i[5]=f*v,i[9]=-p,i[2]=b*p-A,i[6]=N+x*p,i[10]=f*g}else if(e.order==="ZXY"){const x=g*v,b=g*_,A=m*v,N=m*_;i[0]=x-N*p,i[4]=-f*_,i[8]=A+b*p,i[1]=b+A*p,i[5]=f*v,i[9]=N-x*p,i[2]=-f*m,i[6]=p,i[10]=f*g}else if(e.order==="ZYX"){const x=f*v,b=f*_,A=p*v,N=p*_;i[0]=g*v,i[4]=A*m-b,i[8]=x*m+N,i[1]=g*_,i[5]=N*m+x,i[9]=b*m-A,i[2]=-m,i[6]=p*g,i[10]=f*g}else if(e.order==="YZX"){const x=f*g,b=f*m,A=p*g,N=p*m;i[0]=g*v,i[4]=N-x*_,i[8]=A*_+b,i[1]=_,i[5]=f*v,i[9]=-p*v,i[2]=-m*v,i[6]=b*_+A,i[10]=x-N*_}else if(e.order==="XZY"){const x=f*g,b=f*m,A=p*g,N=p*m;i[0]=g*v,i[4]=-_,i[8]=m*v,i[1]=x*_+N,i[5]=f*v,i[9]=b*_-A,i[2]=A*_-b,i[6]=p*v,i[10]=N*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,SM)}lookAt(e,i,s){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ns.crossVectors(s,ci),ns.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ns.crossVectors(s,ci)),ns.normalize(),Tc.crossVectors(ci,ns),l[0]=ns.x,l[4]=Tc.x,l[8]=ci.x,l[1]=ns.y,l[5]=Tc.y,l[9]=ci.y,l[2]=ns.z,l[6]=Tc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],g=s[8],m=s[12],v=s[1],_=s[5],x=s[9],b=s[13],A=s[2],N=s[6],M=s[10],y=s[14],G=s[3],L=s[7],w=s[11],I=s[15],D=l[0],B=l[4],T=l[8],z=l[12],k=l[1],V=l[5],W=l[9],he=l[13],X=l[2],P=l[6],O=l[10],H=l[14],te=l[3],oe=l[7],xe=l[11],U=l[15];return c[0]=f*D+p*k+g*X+m*te,c[4]=f*B+p*V+g*P+m*oe,c[8]=f*T+p*W+g*O+m*xe,c[12]=f*z+p*he+g*H+m*U,c[1]=v*D+_*k+x*X+b*te,c[5]=v*B+_*V+x*P+b*oe,c[9]=v*T+_*W+x*O+b*xe,c[13]=v*z+_*he+x*H+b*U,c[2]=A*D+N*k+M*X+y*te,c[6]=A*B+N*V+M*P+y*oe,c[10]=A*T+N*W+M*O+y*xe,c[14]=A*z+N*he+M*H+y*U,c[3]=G*D+L*k+w*X+I*te,c[7]=G*B+L*V+w*P+I*oe,c[11]=G*T+L*W+w*O+I*xe,c[15]=G*z+L*he+w*H+I*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],g=e[9],m=e[13],v=e[2],_=e[6],x=e[10],b=e[14],A=e[3],N=e[7],M=e[11],y=e[15],G=g*b-m*x,L=p*b-m*_,w=p*x-g*_,I=f*b-m*v,D=f*x-g*v,B=f*_-p*v;return i*(N*G-M*L+y*w)-s*(A*G-M*I+y*D)+l*(A*L-N*I+y*B)-c*(A*w-N*D+M*B)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],p=e[9],g=e[2],m=e[6],v=e[10];return i*(f*v-p*m)-s*(c*v-p*g)+l*(c*m-f*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],m=e[7],v=e[8],_=e[9],x=e[10],b=e[11],A=e[12],N=e[13],M=e[14],y=e[15],G=i*p-s*f,L=i*g-l*f,w=i*m-c*f,I=s*g-l*p,D=s*m-c*p,B=l*m-c*g,T=v*N-_*A,z=v*M-x*A,k=v*y-b*A,V=_*M-x*N,W=_*y-b*N,he=x*y-b*M,X=G*he-L*W+w*V+I*k-D*z+B*T;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/X;return e[0]=(p*he-g*W+m*V)*P,e[1]=(l*W-s*he-c*V)*P,e[2]=(N*B-M*D+y*I)*P,e[3]=(x*D-_*B-b*I)*P,e[4]=(g*k-f*he-m*z)*P,e[5]=(i*he-l*k+c*z)*P,e[6]=(M*w-A*B-y*L)*P,e[7]=(v*B-x*w+b*L)*P,e[8]=(f*W-p*k+m*T)*P,e[9]=(s*k-i*W-c*T)*P,e[10]=(A*D-N*w+y*G)*P,e[11]=(_*w-v*D-b*G)*P,e[12]=(p*z-f*V-g*T)*P,e[13]=(i*V-s*z+l*T)*P,e[14]=(N*L-A*I-M*G)*P,e[15]=(v*I-_*L+x*G)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,g=e.z,m=c*f,v=c*p;return this.set(m*f+s,m*p-l*g,m*g+l*p,0,m*p+l*g,v*p+s,v*g-l*f,0,m*g-l*p,v*g+l*f,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,g=i._w,m=c+c,v=f+f,_=p+p,x=c*m,b=c*v,A=c*_,N=f*v,M=f*_,y=p*_,G=g*m,L=g*v,w=g*_,I=s.x,D=s.y,B=s.z;return l[0]=(1-(N+y))*I,l[1]=(b+w)*I,l[2]=(A-L)*I,l[3]=0,l[4]=(b-w)*D,l[5]=(1-(x+y))*D,l[6]=(M+G)*D,l[7]=0,l[8]=(A+L)*B,l[9]=(M-G)*B,l[10]=(1-(x+N))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ar.set(l[0],l[1],l[2]).length();const p=Ar.set(l[4],l[5],l[6]).length(),g=Ar.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ri.copy(this);const m=1/f,v=1/p,_=1/g;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=f,s.y=p,s.z=g,this}makePerspective(e,i,s,l,c,f,p=qi,g=!1){const m=this.elements,v=2*c/(i-e),_=2*c/(s-l),x=(i+e)/(i-e),b=(s+l)/(s-l);let A,N;if(g)A=c/(f-c),N=f*c/(f-c);else if(p===qi)A=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(p===ul)A=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=qi,g=!1){const m=this.elements,v=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),b=-(s+l)/(s-l);let A,N;if(g)A=1/(f-c),N=f/(f-c);else if(p===qi)A=-2/(f-c),N=-(f+c)/(f-c);else if(p===ul)A=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=A,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};du.prototype.isMatrix4=!0;let on=du;const Ar=new Z,Ri=new on,yM=new Z(0,0,0),SM=new Z(1,1,1),ns=new Z,Tc=new Z,ci=new Z,Ox=new on,Px=new qr;class fs{constructor(e=0,i=0,s=0,l=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],g=l[1],m=l[5],v=l[9],_=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ox.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ox,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Px.setFromEuler(this),this.setFromQuaternion(Px,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class r_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const zx=new Z,wr=new qr,xa=new on,Ac=new Z,jo=new Z,EM=new Z,TM=new qr,Ix=new Z(1,0,0),Bx=new Z(0,1,0),Fx=new Z(0,0,1),Hx={type:"added"},AM={type:"removed"},Cr={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Ln extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new Z,i=new fs,s=new qr,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ht}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Ix,e)}rotateY(e){return this.rotateOnAxis(Bx,e)}rotateZ(e){return this.rotateOnAxis(Fx,e)}translateOnAxis(e,i){return zx.copy(e).applyQuaternion(this.quaternion),this.position.add(zx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ix,e)}translateY(e){return this.translateOnAxis(Bx,e)}translateZ(e){return this.translateOnAxis(Fx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ac.copy(e):Ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(jo,Ac,this.up):xa.lookAt(Ac,jo,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(xa),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hx),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(AM),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hx),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,EM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,TM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let m=0,v=g.length;m<v;m++){const _=g[m];c(e.shapes,_)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,m=this.material.length;g<m;g++)p.push(c(e.materials,this.material[g]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(c(e.animations,g))}}if(i){const p=f(e.geometries),g=f(e.materials),m=f(e.textures),v=f(e.images),_=f(e.shapes),x=f(e.skeletons),b=f(e.animations),A=f(e.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),b.length>0&&(s.animations=b),A.length>0&&(s.nodes=A)}return s.object=l,s;function f(p){const g=[];for(const m in p){const v=p[m];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new Z(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jo extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wM={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,g=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const N of e.hand.values()){const M=i.getJointPose(N,s),y=this._getHandJoint(m,N);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),b=.02,A=.005;m.inputState.pinching&&x>b+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=b-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(wM)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Jo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Hd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class vt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=pM(e,1),i=_t(i,0,1),s=_t(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Hd(f,c,e+1/3),this.g=Hd(f,c,e),this.b=Hd(f,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=o_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return wt.workingToColorSpace(In.copy(this),e),Math.round(_t(In.r*255,0,255))*65536+Math.round(_t(In.g*255,0,255))*256+Math.round(_t(In.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let g,m;const v=(p+f)/2;if(p===f)g=0,m=0;else{const _=f-p;switch(m=v<=.5?_/(f+p):_/(2-f-p),f){case s:g=(l-c)/_+(l<c?6:0);break;case l:g=(c-s)/_+2;break;case c:g=(s-l)/_+4;break}g/=6}return e.h=g,e.s=m,e.l=v,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=fi){wt.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(is),this.setHSL(is.h+e,is.s+i,is.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(is),e.getHSL(wc);const s=Ld(is.h,wc.h,i),l=Ld(is.s,wc.s,i),c=Ld(is.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new vt;vt.NAMES=o_;class CM extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new Z,va=new Z,Gd=new Z,_a=new Z,Rr=new Z,Nr=new Z,Gx=new Z,kd=new Z,Vd=new Z,jd=new Z,Xd=new ln,Wd=new ln,qd=new ln;class Oi{constructor(e=new Z,i=new Z,s=new Z){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ni.subVectors(e,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ni.subVectors(l,i),va.subVectors(s,i),Gd.subVectors(e,i);const f=Ni.dot(Ni),p=Ni.dot(va),g=Ni.dot(Gd),m=va.dot(va),v=va.dot(Gd),_=f*m-p*p;if(_===0)return c.set(0,0,0),null;const x=1/_,b=(m*g-p*v)*x,A=(f*v-p*g)*x;return c.set(1-b-A,A,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,s,l,c,f,p,g){return this.getBarycoord(e,i,s,l,_a)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,_a.x),g.addScaledVector(f,_a.y),g.addScaledVector(p,_a.z),g)}static getInterpolatedAttribute(e,i,s,l,c,f){return Xd.setScalar(0),Wd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Xd,c.x),f.addScaledVector(Wd,c.y),f.addScaledVector(qd,c.z),f}static isFrontFacing(e,i,s,l){return Ni.subVectors(s,i),va.subVectors(e,i),Ni.cross(va).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ni.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Rr.subVectors(l,s),Nr.subVectors(c,s),kd.subVectors(e,s);const g=Rr.dot(kd),m=Nr.dot(kd);if(g<=0&&m<=0)return i.copy(s);Vd.subVectors(e,l);const v=Rr.dot(Vd),_=Nr.dot(Vd);if(v>=0&&_<=v)return i.copy(l);const x=g*_-v*m;if(x<=0&&g>=0&&v<=0)return f=g/(g-v),i.copy(s).addScaledVector(Rr,f);jd.subVectors(e,c);const b=Rr.dot(jd),A=Nr.dot(jd);if(A>=0&&b<=A)return i.copy(c);const N=b*m-g*A;if(N<=0&&m>=0&&A<=0)return p=m/(m-A),i.copy(s).addScaledVector(Nr,p);const M=v*A-b*_;if(M<=0&&_-v>=0&&b-A>=0)return Gx.subVectors(c,l),p=(_-v)/(_-v+(b-A)),i.copy(l).addScaledVector(Gx,p);const y=1/(M+N+x);return f=N*y,p=x*y,i.copy(s).addScaledVector(Rr,f).addScaledVector(Nr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yr{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Di):Di.fromBufferAttribute(c,f),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cc.copy(s.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Rc.subVectors(this.max,Xo),Dr.subVectors(e.a,Xo),Ur.subVectors(e.b,Xo),Lr.subVectors(e.c,Xo),as.subVectors(Ur,Dr),ss.subVectors(Lr,Ur),Us.subVectors(Dr,Lr);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Us.z,Us.y,as.z,0,-as.x,ss.z,0,-ss.x,Us.z,0,-Us.x,-as.y,as.x,0,-ss.y,ss.x,0,-Us.y,Us.x,0];return!Yd(i,Dr,Ur,Lr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Yd(i,Dr,Ur,Lr,Rc))?!1:(Nc.crossVectors(as,ss),i=[Nc.x,Nc.y,Nc.z],Yd(i,Dr,Ur,Lr,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ba=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Di=new Z,Cc=new Yr,Dr=new Z,Ur=new Z,Lr=new Z,as=new Z,ss=new Z,Us=new Z,Xo=new Z,Rc=new Z,Nc=new Z,Ls=new Z;function Yd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ls.fromArray(r,c);const p=l.x*Math.abs(Ls.x)+l.y*Math.abs(Ls.y)+l.z*Math.abs(Ls.z),g=e.dot(Ls),m=i.dot(Ls),v=s.dot(Ls);if(Math.max(-Math.max(g,m,v),Math.min(g,m,v))>p)return!1}return!0}const bn=new Z,Dc=new ot;let RM=0;class Mi extends js{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=wx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class l_ extends Mi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class c_ extends Mi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class cn extends Mi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const NM=new Yr,Wo=new Z,Zd=new Z;class gu{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):NM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Zd)),this.expandByPoint(Wo.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let DM=0;const yi=new on,Kd=new Ln,Or=new Z,ui=new Yr,qo=new Yr,An=new Z;class kn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uM(e)?c_:l_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,i,s){return yi.makeTranslation(e,i,s),this.applyMatrix4(yi),this}scale(e,i,s){return yi.makeScale(e,i,s),this.applyMatrix4(yi),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new cn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];qo.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(ui.min,qo.min),ui.expandByPoint(An),An.addVectors(ui.max,qo.max),ui.expandByPoint(An)):(ui.expandByPoint(qo.min),ui.expandByPoint(qo.max))}ui.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)An.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],g=this.morphTargetsRelative;for(let m=0,v=p.count;m<v;m++)An.fromBufferAttribute(p,m),g&&(Or.fromBufferAttribute(e,m),An.add(Or)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Mi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],g=[];for(let T=0;T<s.count;T++)p[T]=new Z,g[T]=new Z;const m=new Z,v=new Z,_=new Z,x=new ot,b=new ot,A=new ot,N=new Z,M=new Z;function y(T,z,k){m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,z),_.fromBufferAttribute(s,k),x.fromBufferAttribute(c,T),b.fromBufferAttribute(c,z),A.fromBufferAttribute(c,k),v.sub(m),_.sub(m),b.sub(x),A.sub(x);const V=1/(b.x*A.y-A.x*b.y);isFinite(V)&&(N.copy(v).multiplyScalar(A.y).addScaledVector(_,-b.y).multiplyScalar(V),M.copy(_).multiplyScalar(b.x).addScaledVector(v,-A.x).multiplyScalar(V),p[T].add(N),p[z].add(N),p[k].add(N),g[T].add(M),g[z].add(M),g[k].add(M))}let G=this.groups;G.length===0&&(G=[{start:0,count:e.count}]);for(let T=0,z=G.length;T<z;++T){const k=G[T],V=k.start,W=k.count;for(let he=V,X=V+W;he<X;he+=3)y(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const L=new Z,w=new Z,I=new Z,D=new Z;function B(T){I.fromBufferAttribute(l,T),D.copy(I);const z=p[T];L.copy(z),L.sub(I.multiplyScalar(I.dot(z))).normalize(),w.crossVectors(D,z);const V=w.dot(g[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,V)}for(let T=0,z=G.length;T<z;++T){const k=G[T],V=k.start,W=k.count;for(let he=V,X=V+W;he<X;he+=3)B(e.getX(he+0)),B(e.getX(he+1)),B(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,b=s.count;x<b;x++)s.setXYZ(x,0,0,0);const l=new Z,c=new Z,f=new Z,p=new Z,g=new Z,m=new Z,v=new Z,_=new Z;if(e)for(let x=0,b=e.count;x<b;x+=3){const A=e.getX(x+0),N=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,M),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,N),m.fromBufferAttribute(s,M),p.add(v),g.add(v),m.add(v),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(N,g.x,g.y,g.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(p,g){const m=p.array,v=p.itemSize,_=p.normalized,x=new m.constructor(g.length*v);let b=0,A=0;for(let N=0,M=g.length;N<M;N++){p.isInterleavedBufferAttribute?b=g[N]*p.data.stride+p.offset:b=g[N]*v;for(let y=0;y<v;y++)x[A++]=m[b++]}return new Mi(x,v,_)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new kn,s=this.index.array,l=this.attributes;for(const p in l){const g=l[p],m=e(g,s);i.setAttribute(p,m)}const c=this.morphAttributes;for(const p in c){const g=[],m=c[p];for(let v=0,_=m.length;v<_;v++){const x=m[v],b=e(x,s);g.push(b)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,g=f.length;p<g;p++){const m=f[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];e.data.attributes[g]=m.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],v=[];for(let _=0,x=m.length;_<x;_++){const b=m[_];v.push(b.toJSON(e.data))}v.length>0&&(l[g]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let x=0,b=_.length;x<b;x++)v.push(_[x].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let UM=0;class Xs extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=Hr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=xh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==us&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gh&&(s.blendSrc=this.blendSrc),this.blendDst!==xh&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ax&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const g=c[p];delete g.metadata,f.push(g)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ot().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new Z,Qd=new Z,Uc=new Z,rs=new Z,Jd=new Z,Lc=new Z,$d=new Z;class u_{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Qd.copy(e).add(i).multiplyScalar(.5),Uc.copy(i).sub(e).normalize(),rs.copy(this.origin).sub(Qd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Uc),p=rs.dot(this.direction),g=-rs.dot(Uc),m=rs.lengthSq(),v=Math.abs(1-f*f);let _,x,b,A;if(v>0)if(_=f*g-p,x=f*p-g,A=c*v,_>=0)if(x>=-A)if(x<=A){const N=1/v;_*=N,x*=N,b=_*(_+f*x+2*p)+x*(f*_+x+2*g)+m}else x=c,_=Math.max(0,-(f*x+p)),b=-_*_+x*(x+2*g)+m;else x=-c,_=Math.max(0,-(f*x+p)),b=-_*_+x*(x+2*g)+m;else x<=-A?(_=Math.max(0,-(-f*c+p)),x=_>0?-c:Math.min(Math.max(-c,-g),c),b=-_*_+x*(x+2*g)+m):x<=A?(_=0,x=Math.min(Math.max(-c,-g),c),b=x*(x+2*g)+m):(_=Math.max(0,-(f*c+p)),x=_>0?c:Math.min(Math.max(-c,-g),c),b=-_*_+x*(x+2*g)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+p)),b=-_*_+x*(x+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Qd).addScaledVector(Uc,x),b}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,g=s+f;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,g;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(e.min.z-x.z)*_,g=(e.max.z-x.z)*_):(p=(e.max.z-x.z)*_,g=(e.min.z-x.z)*_),s>g||p>l)||((p>s||s!==s)&&(s=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,c){Jd.subVectors(i,e),Lc.subVectors(s,e),$d.crossVectors(Jd,Lc);let f=this.direction.dot($d),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;rs.subVectors(this.origin,e);const g=p*this.direction.dot(Lc.crossVectors(rs,Lc));if(g<0)return null;const m=p*this.direction.dot(Jd.cross(rs));if(m<0||g+m>f)return null;const v=-p*rs.dot($d);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class f_ extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=Vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kx=new on,Os=new u_,Oc=new gu,Vx=new Z,Pc=new Z,zc=new Z,Ic=new Z,eh=new Z,Bc=new Z,jx=new Z,Fc=new Z;class Pt extends Ln{constructor(e=new kn,i=new f_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Bc.set(0,0,0);for(let g=0,m=c.length;g<m;g++){const v=p[g],_=c[g];v!==0&&(eh.fromBufferAttribute(_,e),f?Bc.addScaledVector(eh,v):Bc.addScaledVector(eh.sub(i),v))}i.add(Bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(c),Os.copy(e.ray).recast(e.near),!(Oc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Oc,Vx)===null||Os.origin.distanceToSquared(Vx)>(e.far-e.near)**2))&&(kx.copy(c).invert(),Os.copy(e.ray).applyMatrix4(kx),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Os)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,g=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(f))for(let A=0,N=x.length;A<N;A++){const M=x[A],y=f[M.materialIndex],G=Math.max(M.start,b.start),L=Math.min(p.count,Math.min(M.start+M.count,b.start+b.count));for(let w=G,I=L;w<I;w+=3){const D=p.getX(w),B=p.getX(w+1),T=p.getX(w+2);l=Hc(this,y,e,s,m,v,_,D,B,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),N=Math.min(p.count,b.start+b.count);for(let M=A,y=N;M<y;M+=3){const G=p.getX(M),L=p.getX(M+1),w=p.getX(M+2);l=Hc(this,f,e,s,m,v,_,G,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(f))for(let A=0,N=x.length;A<N;A++){const M=x[A],y=f[M.materialIndex],G=Math.max(M.start,b.start),L=Math.min(g.count,Math.min(M.start+M.count,b.start+b.count));for(let w=G,I=L;w<I;w+=3){const D=w,B=w+1,T=w+2;l=Hc(this,y,e,s,m,v,_,D,B,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),N=Math.min(g.count,b.start+b.count);for(let M=A,y=N;M<y;M+=3){const G=M,L=M+1,w=M+2;l=Hc(this,f,e,s,m,v,_,G,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function LM(r,e,i,s,l,c,f,p){let g;if(e.side===Qn?g=s.intersectTriangle(f,c,l,!0,p):g=s.intersectTriangle(l,c,f,e.side===us,p),g===null)return null;Fc.copy(p),Fc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Fc);return m<i.near||m>i.far?null:{distance:m,point:Fc.clone(),object:r}}function Hc(r,e,i,s,l,c,f,p,g,m){r.getVertexPosition(p,Pc),r.getVertexPosition(g,zc),r.getVertexPosition(m,Ic);const v=LM(r,e,i,s,Pc,zc,Ic,jx);if(v){const _=new Z;Oi.getBarycoord(jx,Pc,zc,Ic,_),l&&(v.uv=Oi.getInterpolatedAttribute(l,p,g,m,_,new ot)),c&&(v.uv1=Oi.getInterpolatedAttribute(c,p,g,m,_,new ot)),f&&(v.normal=Oi.getInterpolatedAttribute(f,p,g,m,_,new Z),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:p,b:g,c:m,normal:new Z,materialIndex:0};Oi.getNormal(Pc,zc,Ic,x.normal),v.face=x,v.barycoord=_}return v}class OM extends Fn{constructor(e=null,i=1,s=1,l,c,f,p,g,m=Un,v=Un,_,x){super(null,f,p,g,m,v,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const th=new Z,PM=new Z,zM=new ht;class zs{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=th.subVectors(s,i).cross(PM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(th),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||zM.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new gu,IM=new ot(.5,.5),Gc=new Z;class bp{constructor(e=new zs,i=new zs,s=new zs,l=new zs,c=new zs,f=new zs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=qi,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],g=c[2],m=c[3],v=c[4],_=c[5],x=c[6],b=c[7],A=c[8],N=c[9],M=c[10],y=c[11],G=c[12],L=c[13],w=c[14],I=c[15];if(l[0].setComponents(m-f,b-v,y-A,I-G).normalize(),l[1].setComponents(m+f,b+v,y+A,I+G).normalize(),l[2].setComponents(m+p,b+_,y+N,I+L).normalize(),l[3].setComponents(m-p,b-_,y-N,I-L).normalize(),s)l[4].setComponents(g,x,M,w).normalize(),l[5].setComponents(m-g,b-x,y-M,I-w).normalize();else if(l[4].setComponents(m-g,b-x,y-M,I-w).normalize(),i===qi)l[5].setComponents(m+g,b+x,y+M,I+w).normalize();else if(i===ul)l[5].setComponents(g,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const i=IM.distanceTo(e.center);return Ps.radius=.7071067811865476+i,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d_ extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new Z,lu=new Z,Xx=new on,Yo=new u_,kc=new gu,nh=new Z,Wx=new Z;class BM extends Ln{constructor(e=new kn,i=new d_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);e.setAttribute("lineDistance",new cn(s,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;Xx.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(Xx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,m=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const b=Math.max(0,f.start),A=Math.min(v.count,f.start+f.count);for(let N=b,M=A-1;N<M;N+=m){const y=v.getX(N),G=v.getX(N+1),L=Vc(this,e,Yo,g,y,G,N);L&&i.push(L)}if(this.isLineLoop){const N=v.getX(A-1),M=v.getX(b),y=Vc(this,e,Yo,g,N,M,A-1);y&&i.push(y)}}else{const b=Math.max(0,f.start),A=Math.min(x.count,f.start+f.count);for(let N=b,M=A-1;N<M;N+=m){const y=Vc(this,e,Yo,g,N,N+1,N);y&&i.push(y)}if(this.isLineLoop){const N=Vc(this,e,Yo,g,A-1,b,A-1);N&&i.push(N)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Vc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),lu.fromBufferAttribute(p,c),i.distanceSqToSegment(ou,lu,nh,Wx)>s)return;nh.applyMatrix4(r.matrixWorld);const m=e.ray.origin.distanceTo(nh);if(!(m<e.near||m>e.far))return{distance:m,point:Wx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const qx=new Z,Yx=new Z;class FM extends BM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)qx.fromBufferAttribute(i,l),Yx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+qx.distanceTo(Yx);e.setAttribute("lineDistance",new cn(s,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h_ extends Fn{constructor(e=[],i=ks,s,l,c,f,p,g,m,v){super(e,i,s,l,c,f,p,g,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HM extends Fn{constructor(e,i,s,l,c,f,p,g,m){super(e,i,s,l,c,f,p,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xr extends Fn{constructor(e,i,s=Ki,l,c,f,p=Un,g=Un,m,v=wa,_=1){if(v!==wa&&v!==Hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,f,p,g,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class GM extends Xr{constructor(e,i=Ki,s=ks,l,c,f=Un,p=Un,g,m=wa){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,p,g,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class p_ extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui extends kn{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const g=[],m=[],v=[],_=[];let x=0,b=0;A("z","y","x",-1,-1,s,i,e,f,c,0),A("z","y","x",1,-1,s,i,-e,f,c,1),A("x","z","y",1,1,e,s,i,l,f,2),A("x","z","y",1,-1,e,s,-i,l,f,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(_,2));function A(N,M,y,G,L,w,I,D,B,T,z){const k=w/B,V=I/T,W=w/2,he=I/2,X=D/2,P=B+1,O=T+1;let H=0,te=0;const oe=new Z;for(let xe=0;xe<O;xe++){const U=xe*V-he;for(let K=0;K<P;K++){const Me=K*k-W;oe[N]=Me*G,oe[M]=U*L,oe[y]=X,m.push(oe.x,oe.y,oe.z),oe[N]=0,oe[M]=0,oe[y]=D>0?1:-1,v.push(oe.x,oe.y,oe.z),_.push(K/B),_.push(1-xe/T),H+=1}}for(let xe=0;xe<T;xe++)for(let U=0;U<B;U++){const K=x+U+P*xe,Me=x+U+P*(xe+1),ae=x+(U+1)+P*(xe+1),$=x+(U+1)+P*xe;g.push(K,Me,$),g.push(Me,ae,$),te+=6}p.addGroup(b,te,z),b+=te,x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yp extends kn{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],p=[],g=[],m=new Z,v=new ot;f.push(0,0,0),p.push(0,0,1),g.push(.5,.5);for(let _=0,x=3;_<=i;_++,x+=3){const b=s+_/i*l;m.x=e*Math.cos(b),m.y=e*Math.sin(b),f.push(m.x,m.y,m.z),p.push(0,0,1),v.x=(f[x]/e+1)/2,v.y=(f[x+1]/e+1)/2,g.push(v.x,v.y)}for(let _=1;_<=i;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new cn(f,3)),this.setAttribute("normal",new cn(p,3)),this.setAttribute("uv",new cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sa extends kn{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,p=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:p,thetaLength:g};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],x=[],b=[];let A=0;const N=[],M=s/2;let y=0;G(),f===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(x,3)),this.setAttribute("uv",new cn(b,2));function G(){const w=new Z,I=new Z;let D=0;const B=(i-e)/s;for(let T=0;T<=c;T++){const z=[],k=T/c,V=k*(i-e)+e;for(let W=0;W<=l;W++){const he=W/l,X=he*g+p,P=Math.sin(X),O=Math.cos(X);I.x=V*P,I.y=-k*s+M,I.z=V*O,_.push(I.x,I.y,I.z),w.set(P,B,O).normalize(),x.push(w.x,w.y,w.z),b.push(he,1-k),z.push(A++)}N.push(z)}for(let T=0;T<l;T++)for(let z=0;z<c;z++){const k=N[z][T],V=N[z+1][T],W=N[z+1][T+1],he=N[z][T+1];(e>0||z!==0)&&(v.push(k,V,he),D+=3),(i>0||z!==c-1)&&(v.push(V,W,he),D+=3)}m.addGroup(y,D,0),y+=D}function L(w){const I=A,D=new ot,B=new Z;let T=0;const z=w===!0?e:i,k=w===!0?1:-1;for(let W=1;W<=l;W++)_.push(0,M*k,0),x.push(0,k,0),b.push(.5,.5),A++;const V=A;for(let W=0;W<=l;W++){const X=W/l*g+p,P=Math.cos(X),O=Math.sin(X);B.x=z*O,B.y=M*k,B.z=z*P,_.push(B.x,B.y,B.z),x.push(0,k,0),D.x=P*.5+.5,D.y=O*.5*k+.5,b.push(D.x,D.y),A++}for(let W=0;W<l;W++){const he=I+W,X=V+W;w===!0?v.push(X,X+1,he):v.push(X+1,X,he),T+=3}m.addGroup(y,T,w===!0?1:2),y+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ca{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=e;f++)s=this.getPoint(f/e),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=e*s[c-1];let p=0,g=c-1,m;for(;p<=g;)if(l=Math.floor(p+(g-p)/2),m=s[l]-f,m<0)p=l+1;else if(m>0)g=l-1;else{g=l;break}if(l=g,s[l]===f)return l/(c-1);const v=s[l],x=s[l+1]-v,b=(f-v)/x;return(l+b)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),p=this.getPoint(c),g=i||(f.isVector2?new ot:new Z);return g.copy(p).sub(f).normalize(),g}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new Z,l=[],c=[],f=[],p=new Z,g=new on;for(let b=0;b<=e;b++){const A=b/e;l[b]=this.getTangentAt(A,new Z)}c[0]=new Z,f[0]=new Z;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),x=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),_<=m&&(m=_,s.set(0,1,0)),x<=m&&s.set(0,0,1),p.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],p),f[0].crossVectors(l[0],c[0]);for(let b=1;b<=e;b++){if(c[b]=c[b-1].clone(),f[b]=f[b-1].clone(),p.crossVectors(l[b-1],l[b]),p.length()>Number.EPSILON){p.normalize();const A=Math.acos(_t(l[b-1].dot(l[b]),-1,1));c[b].applyMatrix4(g.makeRotationAxis(p,A))}f[b].crossVectors(l[b],c[b])}if(i===!0){let b=Math.acos(_t(c[0].dot(c[e]),-1,1));b/=e,l[0].dot(p.crossVectors(c[0],c[e]))>0&&(b=-b);for(let A=1;A<=e;A++)c[A].applyMatrix4(g.makeRotationAxis(l[A],b*A)),f[A].crossVectors(l[A],c[A])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class m_ extends Ca{constructor(e=0,i=0,s=1,l=1,c=0,f=Math.PI*2,p=!1,g=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=p,this.aRotation=g}getPoint(e,i=new ot){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const p=this.aStartAngle+e*c;let g=this.aX+this.xRadius*Math.cos(p),m=this.aY+this.yRadius*Math.sin(p);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=g-this.aX,b=m-this.aY;g=x*v-b*_+this.aX,m=x*_+b*v+this.aY}return s.set(g,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kM extends m_{constructor(e,i,s,l,c,f){super(e,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Sp(){let r=0,e=0,i=0,s=0;function l(c,f,p,g){r=c,e=p,i=-3*c+3*f-2*p-g,s=2*c-2*f+p+g}return{initCatmullRom:function(c,f,p,g,m){l(f,p,m*(p-c),m*(g-f))},initNonuniformCatmullRom:function(c,f,p,g,m,v,_){let x=(f-c)/m-(p-c)/(m+v)+(p-f)/v,b=(p-f)/v-(g-f)/(v+_)+(g-p)/_;x*=v,b*=v,l(f,p,x,b)},calc:function(c){const f=c*c,p=f*c;return r+e*c+i*f+s*p}}}const Zx=new Z,Kx=new Z,ih=new Sp,ah=new Sp,sh=new Sp;class VM extends Ca{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new Z){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*e;let p=Math.floor(f),g=f-p;this.closed?p+=p>0?0:(Math.floor(Math.abs(p)/c)+1)*c:g===0&&p===c-1&&(p=c-2,g=1);let m,v;this.closed||p>0?m=l[(p-1)%c]:(Kx.subVectors(l[0],l[1]).add(l[0]),m=Kx);const _=l[p%c],x=l[(p+1)%c];if(this.closed||p+2<c?v=l[(p+2)%c]:(Zx.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Zx),this.curveType==="centripetal"||this.curveType==="chordal"){const b=this.curveType==="chordal"?.5:.25;let A=Math.pow(m.distanceToSquared(_),b),N=Math.pow(_.distanceToSquared(x),b),M=Math.pow(x.distanceToSquared(v),b);N<1e-4&&(N=1),A<1e-4&&(A=N),M<1e-4&&(M=N),ih.initNonuniformCatmullRom(m.x,_.x,x.x,v.x,A,N,M),ah.initNonuniformCatmullRom(m.y,_.y,x.y,v.y,A,N,M),sh.initNonuniformCatmullRom(m.z,_.z,x.z,v.z,A,N,M)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(m.x,_.x,x.x,v.x,this.tension),ah.initCatmullRom(m.y,_.y,x.y,v.y,this.tension),sh.initCatmullRom(m.z,_.z,x.z,v.z,this.tension));return s.set(ih.calc(g),ah.calc(g),sh.calc(g)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new Z().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qx(r,e,i,s,l){const c=(s-e)*.5,f=(l-i)*.5,p=r*r,g=r*p;return(2*i-2*s+c+f)*g+(-3*i+3*s-2*c-f)*p+c*r+i}function jM(r,e){const i=1-r;return i*i*e}function XM(r,e){return 2*(1-r)*r*e}function WM(r,e){return r*r*e}function nl(r,e,i,s){return jM(r,e)+XM(r,i)+WM(r,s)}function qM(r,e){const i=1-r;return i*i*i*e}function YM(r,e){const i=1-r;return 3*i*i*r*e}function ZM(r,e){return 3*(1-r)*r*r*e}function KM(r,e){return r*r*r*e}function il(r,e,i,s,l){return qM(r,e)+YM(r,i)+ZM(r,s)+KM(r,l)}class QM extends Ca{constructor(e=new ot,i=new ot,s=new ot,l=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new ot){const s=i,l=this.v0,c=this.v1,f=this.v2,p=this.v3;return s.set(il(e,l.x,c.x,f.x,p.x),il(e,l.y,c.y,f.y,p.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g_ extends Ca{constructor(e=new Z,i=new Z,s=new Z,l=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new Z){const s=i,l=this.v0,c=this.v1,f=this.v2,p=this.v3;return s.set(il(e,l.x,c.x,f.x,p.x),il(e,l.y,c.y,f.y,p.y),il(e,l.z,c.z,f.z,p.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class JM extends Ca{constructor(e=new ot,i=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new ot){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new ot){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $M extends Ca{constructor(e=new Z,i=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new Z){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Z){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e2 extends Ca{constructor(e=new ot,i=new ot,s=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new ot){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(nl(e,l.x,c.x,f.x),nl(e,l.y,c.y,f.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mp extends Ca{constructor(e=new Z,i=new Z,s=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new Z){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(nl(e,l.x,c.x,f.x),nl(e,l.y,c.y,f.y),nl(e,l.z,c.z,f.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t2 extends Ca{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new ot){const s=i,l=this.points,c=(l.length-1)*e,f=Math.floor(c),p=c-f,g=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return s.set(Qx(p,g.x,m.x,v.x,_.x),Qx(p,g.y,m.y,v.y,_.y)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new ot().fromArray(l))}return this}}var n2=Object.freeze({__proto__:null,ArcCurve:kM,CatmullRomCurve3:VM,CubicBezierCurve:QM,CubicBezierCurve3:g_,EllipseCurve:m_,LineCurve:JM,LineCurve3:$M,QuadraticBezierCurve:e2,QuadraticBezierCurve3:Mp,SplineCurve:t2});class dl extends kn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),g=Math.floor(l),m=p+1,v=g+1,_=e/p,x=i/g,b=[],A=[],N=[],M=[];for(let y=0;y<v;y++){const G=y*x-f;for(let L=0;L<m;L++){const w=L*_-c;A.push(w,-G,0),N.push(0,0,1),M.push(L/p),M.push(1-y/g)}}for(let y=0;y<g;y++)for(let G=0;G<p;G++){const L=G+m*y,w=G+m*(y+1),I=G+1+m*(y+1),D=G+1+m*y;b.push(L,w,D),b.push(w,I,D)}this.setIndex(b),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(N,3)),this.setAttribute("uv",new cn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends kn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const g=[],m=[],v=[],_=[],x=new Z,b=new Z,A=new Z;for(let N=0;N<=s;N++){const M=f+N/s*p;for(let y=0;y<=l;y++){const G=y/l*c;b.x=(e+i*Math.cos(M))*Math.cos(G),b.y=(e+i*Math.cos(M))*Math.sin(G),b.z=i*Math.sin(M),m.push(b.x,b.y,b.z),x.x=e*Math.cos(G),x.y=e*Math.sin(G),A.subVectors(b,x).normalize(),v.push(A.x,A.y,A.z),_.push(y/l),_.push(N/s)}}for(let N=1;N<=s;N++)for(let M=1;M<=l;M++){const y=(l+1)*N+M-1,G=(l+1)*(N-1)+M-1,L=(l+1)*(N-1)+M,w=(l+1)*N+M;g.push(y,G,w),g.push(G,L,w)}this.setIndex(g),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class uu extends kn{constructor(e=new Mp(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=e.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const p=new Z,g=new Z,m=new ot;let v=new Z;const _=[],x=[],b=[],A=[];N(),this.setIndex(A),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(x,3)),this.setAttribute("uv",new cn(b,2));function N(){for(let L=0;L<i;L++)M(L);M(c===!1?i:0),G(),y()}function M(L){v=e.getPointAt(L/i,v);const w=f.normals[L],I=f.binormals[L];for(let D=0;D<=l;D++){const B=D/l*Math.PI*2,T=Math.sin(B),z=-Math.cos(B);g.x=z*w.x+T*I.x,g.y=z*w.y+T*I.y,g.z=z*w.z+T*I.z,g.normalize(),x.push(g.x,g.y,g.z),p.x=v.x+s*g.x,p.y=v.y+s*g.y,p.z=v.z+s*g.z,_.push(p.x,p.y,p.z)}}function y(){for(let L=1;L<=i;L++)for(let w=1;w<=l;w++){const I=(l+1)*(L-1)+(w-1),D=(l+1)*L+(w-1),B=(l+1)*L+w,T=(l+1)*(L-1)+w;A.push(I,D,T),A.push(D,B,T)}}function G(){for(let L=0;L<=i;L++)for(let w=0;w<=l;w++)m.x=L/i,m.y=w/l,b.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new uu(new n2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class i2 extends Xs{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new vt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Wr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Jx(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Jx(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Gn(r){const e={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)e[l]=s[l]}return e}function Jx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function a2(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function x_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const s2={clone:Wr,merge:Gn};var r2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r2,this.fragmentShader=o2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=a2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new vt().setHex(l.value);break;case"v2":this.uniforms[s].value=new ot().fromArray(l.value);break;case"v3":this.uniforms[s].value=new Z().fromArray(l.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[s].value=new on().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class l2 extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Br extends Xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c2 extends Br{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class u2 extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f2 extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fu extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const rh=new on,$x=new Z,ev=new Z;class d2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bp,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;$x.setFromMatrixPosition(e.matrixWorld),i.position.copy($x),ev.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ev),i.updateMatrixWorld(),rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ul||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jc=new Z,Xc=new qr,Vi=new Z;class v_ extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jc,Xc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Xc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(jc,Xc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Xc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new Z,tv=new ot,nv=new ot;class Si extends v_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,i){return this.getViewBounds(e,tv,nv),i.subVectors(nv,tv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const g=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/g,i-=f.offsetY*s/m,l*=f.width/g,s*=f.height/m}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ep extends v_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,p-=v*this.view.offsetY,g=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class h2 extends d2{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oh extends fu{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new h2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class p2 extends fu{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Pr=-90,zr=1;class m2 extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Pr,zr,e,i);l.layers=this.layers,this.add(l);const c=new Si(Pr,zr,e,i);c.layers=this.layers,this.add(c);const f=new Si(Pr,zr,e,i);f.layers=this.layers,this.add(f);const p=new Si(Pr,zr,e,i);p.layers=this.layers,this.add(p);const g=new Si(Pr,zr,e,i);g.layers=this.layers,this.add(g);const m=new Si(Pr,zr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,g]=i;for(const m of i)this.remove(m);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===ul)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,g,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=N,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(_,x,b),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class g2 extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rp=class Rp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Rp.prototype.isMatrix2=!0;let iv=Rp;const Wc=new Yr;class x2 extends FM{constructor(e,i=16776960){const s=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=new Float32Array(24),c=new kn;c.setIndex(new Mi(s,1)),c.setAttribute("position",new Mi(l,3)),super(c,new d_({color:i,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Wc.setFromObject(this.object),Wc.isEmpty())return;const e=Wc.min,i=Wc.max,s=this.geometry.attributes.position,l=s.array;l[0]=i.x,l[1]=i.y,l[2]=i.z,l[3]=e.x,l[4]=i.y,l[5]=i.z,l[6]=e.x,l[7]=e.y,l[8]=i.z,l[9]=i.x,l[10]=e.y,l[11]=i.z,l[12]=i.x,l[13]=i.y,l[14]=e.z,l[15]=e.x,l[16]=i.y,l[17]=e.z,l[18]=e.x,l[19]=e.y,l[20]=e.z,l[21]=i.x,l[22]=e.y,l[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,i){return super.copy(e,i),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function av(r,e,i,s){const l=v2(s);switch(i){case t_:return r*e;case i_:return r*e/l.components*l.byteLength;case pp:return r*e/l.components*l.byteLength;case Vs:return r*e*2/l.components*l.byteLength;case mp:return r*e*2/l.components*l.byteLength;case n_:return r*e*3/l.components*l.byteLength;case Pi:return r*e*4/l.components*l.byteLength;case gp:return r*e*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:case Rh:return Math.max(r,16)*Math.max(e,8)/4;case Ah:case Ch:return Math.max(r,8)*Math.max(e,8)/2;case Nh:case Dh:case Lh:case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uh:case nu:case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $h:case ep:return Math.ceil(r/4)*Math.ceil(e/4)*8;case iu:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function v2(r){switch(r){case di:case Qv:return{byteLength:1,components:1};case ll:case Jv:case Aa:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case Ki:case fp:case Wi:return{byteLength:4,components:1};case $v:case e_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function __(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function _2(r){const e=new WeakMap;function i(p,g){const m=p.array,v=p.usage,_=m.byteLength,x=r.createBuffer();r.bindBuffer(g,x),r.bufferData(g,m,v),p.onUploadCallback();let b;if(m instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=r.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=r.SHORT;else if(m instanceof Uint32Array)b=r.UNSIGNED_INT;else if(m instanceof Int32Array)b=r.INT;else if(m instanceof Int8Array)b=r.BYTE;else if(m instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,g,m){const v=g.array,_=g.updateRanges;if(r.bindBuffer(m,p),_.length===0)r.bufferSubData(m,0,v);else{_.sort((b,A)=>b.start-A.start);let x=0;for(let b=1;b<_.length;b++){const A=_[x],N=_[b];N.start<=A.start+A.count+1?A.count=Math.max(A.count,N.start+N.count-A.start):(++x,_[x]=N)}_.length=x+1;for(let b=0,A=_.length;b<A;b++){const N=_[b];r.bufferSubData(m,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=e.get(p);g&&(r.deleteBuffer(g.buffer),e.delete(p))}function f(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=e.get(p);if(m===void 0)e.set(p,i(p,g));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,p,g),m.version=p.version}}return{get:l,remove:c,update:f}}var b2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,R2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,V2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,W2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K2="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_E=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ME=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,i3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,N3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:b2,alphahash_pars_fragment:y2,alphamap_fragment:S2,alphamap_pars_fragment:M2,alphatest_fragment:E2,alphatest_pars_fragment:T2,aomap_fragment:A2,aomap_pars_fragment:w2,batching_pars_vertex:C2,batching_vertex:R2,begin_vertex:N2,beginnormal_vertex:D2,bsdfs:U2,iridescence_fragment:L2,bumpmap_pars_fragment:O2,clipping_planes_fragment:P2,clipping_planes_pars_fragment:z2,clipping_planes_pars_vertex:I2,clipping_planes_vertex:B2,color_fragment:F2,color_pars_fragment:H2,color_pars_vertex:G2,color_vertex:k2,common:V2,cube_uv_reflection_fragment:j2,defaultnormal_vertex:X2,displacementmap_pars_vertex:W2,displacementmap_vertex:q2,emissivemap_fragment:Y2,emissivemap_pars_fragment:Z2,colorspace_fragment:K2,colorspace_pars_fragment:Q2,envmap_fragment:J2,envmap_common_pars_fragment:$2,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:aE,fog_fragment:sE,fog_pars_fragment:rE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:hE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:xE,lights_physical_pars_fragment:vE,lights_fragment_begin:_E,lights_fragment_maps:bE,lights_fragment_end:yE,lightprobes_pars_fragment:SE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:wE,map_pars_fragment:CE,map_particle_fragment:RE,map_particle_pars_fragment:NE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:UE,morphinstance_vertex:LE,morphcolor_vertex:OE,morphnormal_vertex:PE,morphtarget_pars_vertex:zE,morphtarget_vertex:IE,normal_fragment_begin:BE,normal_fragment_maps:FE,normal_pars_fragment:HE,normal_pars_vertex:GE,normal_vertex:kE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:qE,opaque_fragment:YE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:$E,roughnessmap_fragment:e3,roughnessmap_pars_fragment:t3,shadowmap_pars_fragment:n3,shadowmap_pars_vertex:i3,shadowmap_vertex:a3,shadowmask_pars_fragment:s3,skinbase_vertex:r3,skinning_pars_vertex:o3,skinning_vertex:l3,skinnormal_vertex:c3,specularmap_fragment:u3,specularmap_pars_fragment:f3,tonemapping_fragment:d3,tonemapping_pars_fragment:h3,transmission_fragment:p3,transmission_pars_fragment:m3,uv_pars_fragment:g3,uv_pars_vertex:x3,uv_vertex:v3,worldpos_vertex:_3,background_vert:b3,background_frag:y3,backgroundCube_vert:S3,backgroundCube_frag:M3,cube_vert:E3,cube_frag:T3,depth_vert:A3,depth_frag:w3,distance_vert:C3,distance_frag:R3,equirect_vert:N3,equirect_frag:D3,linedashed_vert:U3,linedashed_frag:L3,meshbasic_vert:O3,meshbasic_frag:P3,meshlambert_vert:z3,meshlambert_frag:I3,meshmatcap_vert:B3,meshmatcap_frag:F3,meshnormal_vert:H3,meshnormal_frag:G3,meshphong_vert:k3,meshphong_frag:V3,meshphysical_vert:j3,meshphysical_frag:X3,meshtoon_vert:W3,meshtoon_frag:q3,points_vert:Y3,points_frag:Z3,shadow_vert:K3,shadow_frag:Q3,sprite_vert:J3,sprite_frag:$3},Ve={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Xi={basic:{uniforms:Gn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Gn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Gn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Gn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Gn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new vt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Gn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Gn([Ve.points,Ve.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Gn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Gn([Ve.common,Ve.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Gn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Gn([Ve.sprite,Ve.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Gn([Ve.common,Ve.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Gn([Ve.lights,Ve.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Xi.physical={uniforms:Gn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const qc={r:0,b:0,g:0},eT=new on,b_=new ht;b_.set(-1,0,0,0,1,0,0,0,1);function tT(r,e,i,s,l,c){const f=new vt(0);let p=l===!0?0:1,g,m,v=null,_=0,x=null;function b(G){let L=G.isScene===!0?G.background:null;if(L&&L.isTexture){const w=G.backgroundBlurriness>0;L=e.get(L,w)}return L}function A(G){let L=!1;const w=b(G);w===null?M(f,p):w&&w.isColor&&(M(w,1),L=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function N(G,L){const w=b(L);w&&(w.isCubeTexture||w.mapping===mu)?(m===void 0&&(m=new Pt(new Ui(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Wr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(L.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(b_),m.material.toneMapped=wt.getTransfer(w.colorSpace)!==Vt,(v!==w||_!==w.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,v=w,_=w.version,x=r.toneMapping),m.layers.enableAll(),G.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(g===void 0&&(g=new Pt(new dl(2,2),new Qi({name:"BackgroundMaterial",uniforms:Wr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=w,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.toneMapped=wt.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),g.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||_!==w.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,v=w,_=w.version,x=r.toneMapping),g.layers.enableAll(),G.unshift(g,g.geometry,g.material,0,0,null))}function M(G,L){G.getRGB(qc,x_(r)),i.buffers.color.setClear(qc.r,qc.g,qc.b,L,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(G,L=1){f.set(G),p=L,M(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(G){p=G,M(f,p)},render:A,addToRenderList:N,dispose:y}}function nT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function p(V,W,he,X,P){let O=!1;const H=_(V,X,he,W);c!==H&&(c=H,m(c.object)),O=b(V,X,he,P),O&&A(V,X,he,P),P!==null&&e.update(P,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,w(V,W,he,X),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function g(){return r.createVertexArray()}function m(V){return r.bindVertexArray(V)}function v(V){return r.deleteVertexArray(V)}function _(V,W,he,X){const P=X.wireframe===!0;let O=s[W.id];O===void 0&&(O={},s[W.id]=O);const H=V.isInstancedMesh===!0?V.id:0;let te=O[H];te===void 0&&(te={},O[H]=te);let oe=te[he.id];oe===void 0&&(oe={},te[he.id]=oe);let xe=oe[P];return xe===void 0&&(xe=x(g()),oe[P]=xe),xe}function x(V){const W=[],he=[],X=[];for(let P=0;P<i;P++)W[P]=0,he[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:he,attributeDivisors:X,object:V,attributes:{},index:null}}function b(V,W,he,X){const P=c.attributes,O=W.attributes;let H=0;const te=he.getAttributes();for(const oe in te)if(te[oe].location>=0){const U=P[oe];let K=O[oe];if(K===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),U===void 0||U.attribute!==K||K&&U.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==X}function A(V,W,he,X){const P={},O=W.attributes;let H=0;const te=he.getAttributes();for(const oe in te)if(te[oe].location>=0){let U=O[oe];U===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(U=V.instanceColor));const K={};K.attribute=U,U&&U.data&&(K.data=U.data),P[oe]=K,H++}c.attributes=P,c.attributesNum=H,c.index=X}function N(){const V=c.newAttributes;for(let W=0,he=V.length;W<he;W++)V[W]=0}function M(V){y(V,0)}function y(V,W){const he=c.newAttributes,X=c.enabledAttributes,P=c.attributeDivisors;he[V]=1,X[V]===0&&(r.enableVertexAttribArray(V),X[V]=1),P[V]!==W&&(r.vertexAttribDivisor(V,W),P[V]=W)}function G(){const V=c.newAttributes,W=c.enabledAttributes;for(let he=0,X=W.length;he<X;he++)W[he]!==V[he]&&(r.disableVertexAttribArray(he),W[he]=0)}function L(V,W,he,X,P,O,H){H===!0?r.vertexAttribIPointer(V,W,he,P,O):r.vertexAttribPointer(V,W,he,X,P,O)}function w(V,W,he,X){N();const P=X.attributes,O=he.getAttributes(),H=W.defaultAttributeValues;for(const te in O){const oe=O[te];if(oe.location>=0){let xe=P[te];if(xe===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(xe=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(xe=V.instanceColor)),xe!==void 0){const U=xe.normalized,K=xe.itemSize,Me=e.get(xe);if(Me===void 0)continue;const ae=Me.buffer,$=Me.type,q=Me.bytesPerElement,ve=$===r.INT||$===r.UNSIGNED_INT||xe.gpuType===fp;if(xe.isInterleavedBufferAttribute){const _e=xe.data,Ce=_e.stride,be=xe.offset;if(_e.isInstancedInterleavedBuffer){for(let Ue=0;Ue<oe.locationSize;Ue++)y(oe.location+Ue,_e.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ue=0;Ue<oe.locationSize;Ue++)M(oe.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let Ue=0;Ue<oe.locationSize;Ue++)L(oe.location+Ue,K/oe.locationSize,$,U,Ce*q,(be+K/oe.locationSize*Ue)*q,ve)}else{if(xe.isInstancedBufferAttribute){for(let _e=0;_e<oe.locationSize;_e++)y(oe.location+_e,xe.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let _e=0;_e<oe.locationSize;_e++)M(oe.location+_e);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let _e=0;_e<oe.locationSize;_e++)L(oe.location+_e,K/oe.locationSize,$,U,K*q,K/oe.locationSize*_e*q,ve)}}else if(H!==void 0){const U=H[te];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(oe.location,U);break;case 3:r.vertexAttrib3fv(oe.location,U);break;case 4:r.vertexAttrib4fv(oe.location,U);break;default:r.vertexAttrib1fv(oe.location,U)}}}}G()}function I(){z();for(const V in s){const W=s[V];for(const he in W){const X=W[he];for(const P in X){const O=X[P];for(const H in O)v(O[H].object),delete O[H];delete X[P]}}delete s[V]}}function D(V){if(s[V.id]===void 0)return;const W=s[V.id];for(const he in W){const X=W[he];for(const P in X){const O=X[P];for(const H in O)v(O[H].object),delete O[H];delete X[P]}}delete s[V.id]}function B(V){for(const W in s){const he=s[W];for(const X in he){const P=he[X];if(P[V.id]===void 0)continue;const O=P[V.id];for(const H in O)v(O[H].object),delete O[H];delete P[V.id]}}}function T(V){for(const W in s){const he=s[W],X=V.isInstancedMesh===!0?V.id:0,P=he[X];if(P!==void 0){for(const O in P){const H=P[O];for(const te in H)v(H[te].object),delete H[te];delete P[O]}delete he[X],Object.keys(he).length===0&&delete s[W]}}}function z(){k(),f=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:z,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:N,enableAttribute:M,disableUnusedAttributes:G}}function iT(r,e,i){let s;function l(g){s=g}function c(g,m){r.drawArrays(s,g,m),i.update(m,s,1)}function f(g,m,v){v!==0&&(r.drawArraysInstanced(s,g,m,v),i.update(m,s,v))}function p(g,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,m,0,v);let x=0;for(let b=0;b<v;b++)x+=m[b];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function aT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Pi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const T=B===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==di&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Wi&&!T)}function g(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=g(m);v!==m&&(ut("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),G=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:f,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:A,maxTextureSize:N,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:G,maxVaryings:L,maxFragmentUniforms:w,maxSamples:I,samples:D}}function sT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new zs,p=new ht,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const b=_.length!==0||x||s!==0||l;return l=x,s=_.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=v(_,x,0)},this.setState=function(_,x,b){const A=_.clippingPlanes,N=_.clipIntersection,M=_.clipShadows,y=r.get(_);if(!l||A===null||A.length===0||c&&!M)c?v(null):m();else{const G=c?0:s,L=G*4;let w=y.clippingState||null;g.value=w,w=v(A,x,L,b);for(let I=0;I!==L;++I)w[I]=i[I];y.clippingState=w,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=G}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,x,b,A){const N=_!==null?_.length:0;let M=null;if(N!==0){if(M=g.value,A!==!0||M===null){const y=b+N*4,G=x.matrixWorldInverse;p.getNormalMatrix(G),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=b;L!==N;++L,w+=4)f.copy(_[L]).applyMatrix4(G,p),f.normal.toArray(M,w),M[w+3]=f.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,M}}const cs=4,sv=[.125,.215,.35,.446,.526,.582],Bs=20,rT=256,Zo=new Ep,rv=new vt;let lh=null,ch=0,uh=0,fh=!1;const oT=new Z;class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=oT}=c;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,p),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ks||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Aa,format:Pi,colorSpace:au,depthBuffer:!1},l=lv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lT(c)),this._blurMaterial=uT(c,e,i),this._ggxMaterial=cT(c,e,i)}return l}_compileMaterial(e){const i=new Pt(new kn,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,s,l,c){const g=new Si(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,b=_.toneMapping;_.getClearColor(rv),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Ui,new f_({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let y=!1;const G=e.background;G?G.isColor&&(M.color.copy(G),e.background=null,y=!0):(M.color.copy(rv),y=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(g.up.set(0,m[L],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+v[L],c.y,c.z)):w===1?(g.up.set(0,0,m[L]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+v[L],c.z)):(g.up.set(0,m[L],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+v[L]));const I=this._cubeSize;Ir(l,w*I,L>2?I:0,I,I),_.setRenderTarget(l),y&&_.render(N,g),_.render(e,g)}_.toneMapping=b,_.autoClear=x,e.background=G}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ks||e.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const g=this._cubeSize;Ir(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(f,Zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const g=f.uniforms,m=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),x=0+m*1.25,b=_*x,{_lodMax:A}=this,N=this._sizeLods[s],M=3*N*(s>A-cs?s-A+cs:0),y=4*(this._cubeSize-N);g.envMap.value=e.texture,g.roughness.value=b,g.mipInt.value=A-i,Ir(c,M,y,3*N,2*N),l.setRenderTarget(c),l.render(p,Zo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=A-s,Ir(e,M,y,3*N,2*N),l.setRenderTarget(e),l.render(p,Zo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const g=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=m;const x=m.uniforms,b=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Bs-1),N=c/A,M=isFinite(c)?1+Math.floor(v*N):Bs;M>Bs&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Bs}`);const y=[];let G=0;for(let B=0;B<Bs;++B){const T=B/N,z=Math.exp(-T*T/2);y.push(z),B===0?G+=z:B<M&&(G+=2*z)}for(let B=0;B<y.length;B++)y[B]=y[B]/G;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=f==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:L}=this;x.dTheta.value=A,x.mipInt.value=L-s;const w=this._sizeLods[l],I=3*w*(l>L-cs?l-L+cs:0),D=4*(this._cubeSize-w);Ir(i,I,D,3*w,2*w),g.setRenderTarget(i),g.render(_,Zo)}}function lT(r){const e=[],i=[],s=[];let l=r;const c=r-cs+1+sv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let g=1/p;f>r-cs?g=sv[f-r+cs-1]:f===0&&(g=0),i.push(g);const m=1/(p-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],b=6,A=6,N=3,M=2,y=1,G=new Float32Array(N*A*b),L=new Float32Array(M*A*b),w=new Float32Array(y*A*b);for(let D=0;D<b;D++){const B=D%3*2/3-1,T=D>2?0:-1,z=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];G.set(z,N*A*D),L.set(x,M*A*D);const k=[D,D,D,D,D,D];w.set(k,y*A*D)}const I=new kn;I.setAttribute("position",new Mi(G,N)),I.setAttribute("uv",new Mi(L,M)),I.setAttribute("faceIndex",new Mi(w,y)),s.push(new Pt(I,null)),l>cs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function lv(r,e,i){const s=new Zi(r,e,i);return s.texture.mapping=mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ir(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function cT(r,e,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function uT(r,e,i){const s=new Float32Array(Bs),l=new Z(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function cv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function uv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class y_ extends Zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new h_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ui(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new Pt(l,c),p=i.minFilter;return i.minFilter===Fs&&(i.minFilter=Bn),new m2(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function fT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,b=!1){return x==null?null:b?f(x):c(x)}function c(x){if(x&&x.isTexture){const b=x.mapping;if(b===Rd||b===Nd)if(e.has(x)){const A=e.get(x).texture;return p(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const N=new y_(A.height);return N.fromEquirectangularTexture(r,x),e.set(x,N),x.addEventListener("dispose",m),p(N.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const b=x.mapping,A=b===Rd||b===Nd,N=b===ks||b===jr;if(A||N){let M=i.get(x);const y=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new ov(r)),M=A?s.fromEquirectangular(x,M):s.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const G=x.image;return A&&G&&G.height>0||N&&G&&g(G)?(s===null&&(s=new ov(r)),M=A?s.fromEquirectangular(x):s.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",v),M.texture):null}}}return x}function p(x,b){return b===Rd?x.mapping=ks:b===Nd&&(x.mapping=jr),x}function g(x){let b=0;const A=6;for(let N=0;N<A;N++)x[N]!==void 0&&b++;return b===A}function m(x){const b=x.target;b.removeEventListener("dispose",m);const A=e.get(b);A!==void 0&&(e.delete(b),A.dispose())}function v(x){const b=x.target;b.removeEventListener("dispose",v);const A=i.get(b);A!==void 0&&(i.delete(b),A.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function dT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Gr("WebGLRenderer: "+s+" extension not supported."),l}}}function hT(r,e,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",f),delete l[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function g(_){const x=_.attributes;for(const b in x)e.update(x[b],r.ARRAY_BUFFER)}function m(_){const x=[],b=_.index,A=_.attributes.position;let N=0;if(A===void 0)return;if(b!==null){const G=b.array;N=b.version;for(let L=0,w=G.length;L<w;L+=3){const I=G[L+0],D=G[L+1],B=G[L+2];x.push(I,D,D,B,B,I)}}else{const G=A.array;N=A.version;for(let L=0,w=G.length/3-1;L<w;L+=3){const I=L+0,D=L+1,B=L+2;x.push(I,D,D,B,B,I)}}const M=new(A.count>=65535?c_:l_)(x,1);M.version=N;const y=c.get(_);y&&e.remove(y),c.set(_,M)}function v(_){const x=c.get(_);if(x){const b=_.index;b!==null&&x.version<b.version&&m(_)}else m(_);return c.get(_)}return{get:p,update:g,getWireframeAttribute:v}}function pT(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function g(_,x){r.drawElements(s,x,c,_*f),i.update(x,s,1)}function m(_,x,b){b!==0&&(r.drawElementsInstanced(s,x,c,_*f,b),i.update(x,s,b))}function v(_,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,b);let N=0;for(let M=0;M<b;M++)N+=x[M];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=m,this.renderMultiDraw=v}function mT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Nt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function gT(r,e,i){const s=new WeakMap,l=new ln;function c(f,p,g){const m=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=v!==void 0?v.length:0;let x=s.get(p);if(x===void 0||x.count!==_){let k=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",k)};var b=k;x!==void 0&&x.texture.dispose();const A=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],G=p.morphAttributes.normal||[],L=p.morphAttributes.color||[];let w=0;A===!0&&(w=1),N===!0&&(w=2),M===!0&&(w=3);let I=p.attributes.position.count*w,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*D*4*_),T=new s_(B,I,D,_);T.type=Wi,T.needsUpdate=!0;const z=w*4;for(let V=0;V<_;V++){const W=y[V],he=G[V],X=L[V],P=I*D*4*V;for(let O=0;O<W.count;O++){const H=O*z;A===!0&&(l.fromBufferAttribute(W,O),B[P+H+0]=l.x,B[P+H+1]=l.y,B[P+H+2]=l.z,B[P+H+3]=0),N===!0&&(l.fromBufferAttribute(he,O),B[P+H+4]=l.x,B[P+H+5]=l.y,B[P+H+6]=l.z,B[P+H+7]=0),M===!0&&(l.fromBufferAttribute(X,O),B[P+H+8]=l.x,B[P+H+9]=l.y,B[P+H+10]=l.z,B[P+H+11]=X.itemSize===4?l.w:1)}}x={count:_,texture:T,size:new ot(I,D)},s.set(p,x),p.addEventListener("dispose",k)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const N=p.morphTargetsRelative?1:1-A;g.getUniforms().setValue(r,"morphTargetBaseInfluence",N),g.getUniforms().setValue(r,"morphTargetInfluences",m)}g.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function xT(r,e,i,s,l){let c=new WeakMap;function f(m){const v=l.render.frame,_=m.geometry,x=e.get(m,_);if(c.get(x)!==v&&(e.update(x),c.set(x,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),c.get(m)!==v&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),c.set(m,v))),m.isSkinnedMesh){const b=m.skeleton;c.get(b)!==v&&(b.update(),c.set(b,v))}return x}function p(){c=new WeakMap}function g(m){const v=m.target;v.removeEventListener("dispose",g),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}const vT={[jv]:"LINEAR_TONE_MAPPING",[Xv]:"REINHARD_TONE_MAPPING",[Wv]:"CINEON_TONE_MAPPING",[up]:"ACES_FILMIC_TONE_MAPPING",[Yv]:"AGX_TONE_MAPPING",[Zv]:"NEUTRAL_TONE_MAPPING",[qv]:"CUSTOM_TONE_MAPPING"};function _T(r,e,i,s,l,c){const f=new Zi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Xr(e,i):void 0}),p=new Zi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),g=new kn;g.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new cn([0,2,0,0,2,0],2));const m=new l2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Pt(g,m),_=new Ep(-1,1,1,-1,0,1);let x=null,b=null,A=!1,N,M=null,y=[],G=!1;this.setSize=function(L,w){f.setSize(L,w),p.setSize(L,w);for(let I=0;I<y.length;I++){const D=y[I];D.setSize&&D.setSize(L,w)}},this.setEffects=function(L){y=L,G=y.length>0&&y[0].isRenderPass===!0;const w=f.width,I=f.height;for(let D=0;D<y.length;D++){const B=y[D];B.setSize&&B.setSize(w,I)}},this.begin=function(L,w){if(A||L.toneMapping===Yi&&y.length===0)return!1;if(M=w,w!==null){const I=w.width,D=w.height;(f.width!==I||f.height!==D)&&this.setSize(I,D)}return G===!1&&L.setRenderTarget(f),N=L.toneMapping,L.toneMapping=Yi,!0},this.hasRenderPass=function(){return G},this.end=function(L,w){L.toneMapping=N,A=!0;let I=f,D=p;for(let B=0;B<y.length;B++){const T=y[B];if(T.enabled!==!1&&(T.render(L,D,I,w),T.needsSwap!==!1)){const z=I;I=D,D=z}}if(x!==L.outputColorSpace||b!==L.toneMapping){x=L.outputColorSpace,b=L.toneMapping,m.defines={},wt.getTransfer(x)===Vt&&(m.defines.SRGB_TRANSFER="");const B=vT[b];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(M),L.render(v,_),M=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),g.dispose(),m.dispose()}}const S_=new Fn,ap=new Xr(1,1),M_=new s_,E_=new bM,T_=new h_,fv=[],dv=[],hv=new Float32Array(16),pv=new Float32Array(9),mv=new Float32Array(4);function Zr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=fv[l];if(c===void 0&&(c=new Float32Array(l),fv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function En(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function vu(r,e){let i=dv[e];i===void 0&&(i=new Int32Array(e),dv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function bT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2fv(this.addr,e),En(i,e)}}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;r.uniform3fv(this.addr,e),En(i,e)}}function MT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4fv(this.addr,e),En(i,e)}}function ET(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;mv.set(s),r.uniformMatrix2fv(this.addr,!1,mv),En(i,s)}}function TT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;pv.set(s),r.uniformMatrix3fv(this.addr,!1,pv),En(i,s)}}function AT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;hv.set(s),r.uniformMatrix4fv(this.addr,!1,hv),En(i,s)}}function wT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function CT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2iv(this.addr,e),En(i,e)}}function RT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;r.uniform3iv(this.addr,e),En(i,e)}}function NT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4iv(this.addr,e),En(i,e)}}function DT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function UT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2uiv(this.addr,e),En(i,e)}}function LT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;r.uniform3uiv(this.addr,e),En(i,e)}}function OT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4uiv(this.addr,e),En(i,e)}}function PT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?vp:xp,c=ap):c=S_,i.setTexture2D(e||c,l)}function zT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||E_,l)}function IT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||T_,l)}function BT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||M_,l)}function FT(r){switch(r){case 5126:return bT;case 35664:return yT;case 35665:return ST;case 35666:return MT;case 35674:return ET;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return wT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return NT;case 5125:return DT;case 36294:return UT;case 36295:return LT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(r,e){r.uniform1fv(this.addr,e)}function GT(r,e){const i=Zr(e,this.size,2);r.uniform2fv(this.addr,i)}function kT(r,e){const i=Zr(e,this.size,3);r.uniform3fv(this.addr,i)}function VT(r,e){const i=Zr(e,this.size,4);r.uniform4fv(this.addr,i)}function jT(r,e){const i=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function XT(r,e){const i=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function WT(r,e){const i=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function qT(r,e){r.uniform1iv(this.addr,e)}function YT(r,e){r.uniform2iv(this.addr,e)}function ZT(r,e){r.uniform3iv(this.addr,e)}function KT(r,e){r.uniform4iv(this.addr,e)}function QT(r,e){r.uniform1uiv(this.addr,e)}function JT(r,e){r.uniform2uiv(this.addr,e)}function $T(r,e){r.uniform3uiv(this.addr,e)}function eA(r,e){r.uniform4uiv(this.addr,e)}function tA(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ap:f=S_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function nA(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||E_,c[f])}function iA(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||T_,c[f])}function aA(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||M_,c[f])}function sA(r){switch(r){case 5126:return HT;case 35664:return GT;case 35665:return kT;case 35666:return VT;case 35674:return jT;case 35675:return XT;case 35676:return WT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}class rA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=FT(i.type)}}class oA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sA(i.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function gv(r,e){r.seq.push(e),r.map[e.id]=e}function cA(r,e,i){const s=r.name,l=s.length;for(dh.lastIndex=0;;){const c=dh.exec(s),f=dh.lastIndex;let p=c[1];const g=c[2]==="]",m=c[3];if(g&&(p=p|0),m===void 0||m==="["&&f+2===l){gv(i,m===void 0?new rA(p,r,e):new oA(p,r,e));break}else{let _=i.map[p];_===void 0&&(_=new lA(p),gv(i,_)),i=_}}}class $c{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),g=e.getUniformLocation(i,p.name);cA(p,g,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],g=s[p.id];g.needsUpdate!==!1&&p.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function xv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const uA=37297;let fA=0;function dA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const vv=new ht;function hA(r){wt._getMatrix(vv,wt.workingColorSpace,r);const e=`mat3( ${vv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case su:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _v(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+dA(r.getShaderSource(e),p)}else return c}function pA(r,e){const i=hA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const mA={[jv]:"Linear",[Xv]:"Reinhard",[Wv]:"Cineon",[up]:"ACESFilmic",[Yv]:"AgX",[Zv]:"Neutral",[qv]:"Custom"};function gA(r,e){const i=mA[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new Z;function xA(){wt.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),e=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function _A(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function bA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function $o(r){return r!==""}function bv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(yA,MA)}const SA=new Map;function MA(r,e){let i=xt[e];if(i===void 0){const s=SA.get(e);if(s!==void 0)i=xt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sp(i)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(r){return r.replace(EA,TA)}function TA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Mv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const AA={[tl]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function wA(r){return AA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CA={[ks]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[mu]:"ENVMAP_TYPE_CUBE_UV"};function RA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":CA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const NA={[jr]:"ENVMAP_MODE_REFRACTION"};function DA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":NA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UA={[Vv]:"ENVMAP_BLENDING_MULTIPLY",[$S]:"ENVMAP_BLENDING_MIX",[eM]:"ENVMAP_BLENDING_ADD"};function LA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":UA[r.combine]||"ENVMAP_BLENDING_NONE"}function OA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function PA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const g=wA(i),m=RA(i),v=DA(i),_=LA(i),x=OA(i),b=vA(i),A=_A(c),N=l.createProgram();let M,y,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter($o).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter($o).join(`
`),y.length>0&&(y+=`
`)):(M=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),y=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?xt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?gA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,pA("linearToOutputTexel",i.outputColorSpace),xA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=sp(f),f=bv(f,i),f=yv(f,i),p=sp(p),p=bv(p,i),p=yv(p,i),f=Sv(f),p=Sv(p),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=G+M+f,w=G+y+p,I=xv(l,l.VERTEX_SHADER,L),D=xv(l,l.FRAGMENT_SHADER,w);l.attachShader(N,I),l.attachShader(N,D),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function B(V){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(N)||"",he=l.getShaderInfoLog(I)||"",X=l.getShaderInfoLog(D)||"",P=W.trim(),O=he.trim(),H=X.trim();let te=!0,oe=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,N,I,D);else{const xe=_v(l,I,"vertex"),U=_v(l,D,"fragment");Nt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+P+`
`+xe+`
`+U)}else P!==""?ut("WebGLProgram: Program Info Log:",P):(O===""||H==="")&&(oe=!1);oe&&(V.diagnostics={runnable:te,programLog:P,vertexShader:{log:O,prefix:M},fragmentShader:{log:H,prefix:y}})}l.deleteShader(I),l.deleteShader(D),T=new $c(l,N),z=bA(l,N)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(N,uA)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=D,this}let zA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new BA(e),i.set(e,s)),s}}class BA{constructor(e){this.id=zA++,this.code=e,this.usedTimes=0}}function FA(r){return r===Vs||r===nu||r===iu}function HA(r,e,i,s,l,c){const f=new r_,p=new IA,g=new Set,m=[],v=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return g.add(T),T===0?"uv":`uv${T}`}function N(T,z,k,V,W,he){const X=V.fog,P=W.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||O,H),oe=te&&te.mapping===mu?te.image.height:null,xe=b[T.type];T.precision!==null&&(x=s.getMaxPrecision(T.precision),x!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const U=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=U!==void 0?U.length:0;let Me=0;P.morphAttributes.position!==void 0&&(Me=1),P.morphAttributes.normal!==void 0&&(Me=2),P.morphAttributes.color!==void 0&&(Me=3);let ae,$,q,ve;if(xe){const Ye=Xi[xe];ae=Ye.vertexShader,$=Ye.fragmentShader}else{ae=T.vertexShader,$=T.fragmentShader;const Ye=p.getVertexShaderStage(T),nn=p.getFragmentShaderStage(T);p.update(T,Ye,nn),q=Ye.id,ve=nn.id}const _e=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),be=W.isInstancedMesh===!0,Ue=W.isBatchedMesh===!0,Ne=!!T.map,Le=!!T.matcap,We=!!te,Ke=!!T.aoMap,lt=!!T.lightMap,Yt=!!T.bumpMap&&T.wireframe===!1,Zt=!!T.normalMap,Kt=!!T.displacementMap,jt=!!T.emissiveMap,Rt=!!T.metalnessMap,tn=!!T.roughnessMap,ne=T.anisotropy>0,Ct=T.clearcoat>0,bt=T.dispersion>0,F=T.iridescence>0,E=T.sheen>0,re=T.transmission>0,pe=ne&&!!T.anisotropyMap,Se=Ct&&!!T.clearcoatMap,Oe=Ct&&!!T.clearcoatNormalMap,le=Ct&&!!T.clearcoatRoughnessMap,J=F&&!!T.iridescenceMap,ee=F&&!!T.iridescenceThicknessMap,De=E&&!!T.sheenColorMap,Pe=E&&!!T.sheenRoughnessMap,ze=!!T.specularMap,He=!!T.specularColorMap,it=!!T.specularIntensityMap,at=re&&!!T.transmissionMap,ft=re&&!!T.thicknessMap,Q=!!T.gradientMap,Ie=!!T.alphaMap,Te=T.alphaTest>0,Fe=!!T.alphaHash,je=!!T.extensions;let Re=Yi;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Re=r.toneMapping);const $e={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:ae,fragmentShader:$,defines:T.defines,customVertexShaderID:q,customFragmentShaderID:ve,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:Ue,batchingColor:Ue&&W._colorsTexture!==null,instancing:be,instancingColor:be&&W.instanceColor!==null,instancingMorph:be&&W.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ne,matcap:Le,envMap:We,envMapMode:We&&te.mapping,envMapCubeUVHeight:oe,aoMap:Ke,lightMap:lt,bumpMap:Yt,normalMap:Zt,displacementMap:Kt,emissiveMap:jt,normalMapObjectSpace:Zt&&T.normalMapType===iM,normalMapTangentSpace:Zt&&T.normalMapType===np,packedNormalMap:Zt&&T.normalMapType===np&&FA(T.normalMap.format),metalnessMap:Rt,roughnessMap:tn,anisotropy:ne,anisotropyMap:pe,clearcoat:Ct,clearcoatMap:Se,clearcoatNormalMap:Oe,clearcoatRoughnessMap:le,dispersion:bt,iridescence:F,iridescenceMap:J,iridescenceThicknessMap:ee,sheen:E,sheenColorMap:De,sheenRoughnessMap:Pe,specularMap:ze,specularColorMap:He,specularIntensityMap:it,transmission:re,transmissionMap:at,thicknessMap:ft,gradientMap:Q,opaque:T.transparent===!1&&T.blending===Hr&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:Fe,combine:T.combine,mapUv:Ne&&A(T.map.channel),aoMapUv:Ke&&A(T.aoMap.channel),lightMapUv:lt&&A(T.lightMap.channel),bumpMapUv:Yt&&A(T.bumpMap.channel),normalMapUv:Zt&&A(T.normalMap.channel),displacementMapUv:Kt&&A(T.displacementMap.channel),emissiveMapUv:jt&&A(T.emissiveMap.channel),metalnessMapUv:Rt&&A(T.metalnessMap.channel),roughnessMapUv:tn&&A(T.roughnessMap.channel),anisotropyMapUv:pe&&A(T.anisotropyMap.channel),clearcoatMapUv:Se&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&A(T.sheenRoughnessMap.channel),specularMapUv:ze&&A(T.specularMap.channel),specularColorMapUv:He&&A(T.specularColorMap.channel),specularIntensityMapUv:it&&A(T.specularIntensityMap.channel),transmissionMapUv:at&&A(T.transmissionMap.channel),thicknessMapUv:ft&&A(T.thicknessMap.channel),alphaMapUv:Ie&&A(T.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Zt||ne),vertexNormals:!!P.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!P.attributes.uv&&(Ne||Ie),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||P.attributes.normal===void 0&&Zt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ce,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Me,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ne&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:jt&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Li,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $e.vertexUv1s=g.has(1),$e.vertexUv2s=g.has(2),$e.vertexUv3s=g.has(3),g.clear(),$e}function M(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)z.push(k),z.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(y(z,T),G(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function G(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),z.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function L(T){const z=b[T.type];let k;if(z){const V=Xi[z];k=s2.clone(V.uniforms)}else k=T.uniforms;return k}function w(T,z){let k=v.get(z);return k!==void 0?++k.usedTimes:(k=new PA(r,z,T,l),m.push(k),v.set(z,k)),k}function I(T){if(--T.usedTimes===0){const z=m.indexOf(T);m[z]=m[m.length-1],m.pop(),v.delete(T.cacheKey),T.destroy()}}function D(T){p.remove(T)}function B(){p.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:L,acquireProgram:w,releaseProgram:I,releaseShaderCache:D,programs:m,dispose:B}}function GA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,g){r.get(f)[p]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function kA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ev(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(x){let b=0;return x.isInstancedMesh&&(b+=2),x.isSkinnedMesh&&(b+=1),b}function p(x,b,A,N,M,y){let G=r[e];return G===void 0?(G={id:x.id,object:x,geometry:b,material:A,materialVariant:f(x),groupOrder:N,renderOrder:x.renderOrder,z:M,group:y},r[e]=G):(G.id=x.id,G.object=x,G.geometry=b,G.material=A,G.materialVariant=f(x),G.groupOrder=N,G.renderOrder=x.renderOrder,G.z=M,G.group=y),e++,G}function g(x,b,A,N,M,y){const G=p(x,b,A,N,M,y);A.transmission>0?s.push(G):A.transparent===!0?l.push(G):i.push(G)}function m(x,b,A,N,M,y){const G=p(x,b,A,N,M,y);A.transmission>0?s.unshift(G):A.transparent===!0?l.unshift(G):i.unshift(G)}function v(x,b,A){i.length>1&&i.sort(x||kA),s.length>1&&s.sort(b||Ev),l.length>1&&l.sort(b||Ev),A&&(i.reverse(),s.reverse(),l.reverse())}function _(){for(let x=e,b=r.length;x<b;x++){const A=r[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:m,finish:_,sort:v}}function VA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Tv,r.set(s,[f])):l>=c.length?(f=new Tv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function jA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new vt};break;case"SpotLight":i={position:new Z,direction:new Z,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":i={color:new vt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=i,i}}}function XA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let WA=0;function qA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function YA(r){const e=new jA,i=XA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new Z);const l=new Z,c=new on,f=new on;function p(m){let v=0,_=0,x=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let b=0,A=0,N=0,M=0,y=0,G=0,L=0,w=0,I=0,D=0,B=0;m.sort(qA);for(let z=0,k=m.length;z<k;z++){const V=m[z],W=V.color,he=V.intensity,X=V.distance;let P=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Vs?P=V.shadow.map.texture:P=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=W.r*he,_+=W.g*he,x+=W.b*he;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],he);B++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,te=i.get(V);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,s.directionalShadow[b]=te,s.directionalShadowMap[b]=P,s.directionalShadowMatrix[b]=V.shadow.matrix,G++}s.directional[b]=O,b++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(W).multiplyScalar(he),O.distance=X,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[N]=O;const H=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,H.updateMatrices(V),V.castShadow&&D++),s.spotLightMatrix[N]=H.matrix,V.castShadow){const te=i.get(V);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,s.spotShadow[N]=te,s.spotShadowMap[N]=P,w++}N++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(W).multiplyScalar(he),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=O,M++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const H=V.shadow,te=i.get(V);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,s.pointShadow[A]=te,s.pointShadowMap[A]=P,s.pointShadowMatrix[A]=V.shadow.matrix,L++}s.point[A]=O,A++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(he),O.groundColor.copy(V.groundColor).multiplyScalar(he),s.hemi[y]=O,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=x;const T=s.hash;(T.directionalLength!==b||T.pointLength!==A||T.spotLength!==N||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==G||T.numPointShadows!==L||T.numSpotShadows!==w||T.numSpotMaps!==I||T.numLightProbes!==B)&&(s.directional.length=b,s.spot.length=N,s.rectArea.length=M,s.point.length=A,s.hemi.length=y,s.directionalShadow.length=G,s.directionalShadowMap.length=G,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=G,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+I-D,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=B,T.directionalLength=b,T.pointLength=A,T.spotLength=N,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=G,T.numPointShadows=L,T.numSpotShadows=w,T.numSpotMaps=I,T.numLightProbes=B,s.version=WA++)}function g(m,v){let _=0,x=0,b=0,A=0,N=0;const M=v.matrixWorldInverse;for(let y=0,G=m.length;y<G;y++){const L=m[y];if(L.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(L.isSpotLight){const w=s.spot[b];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),b++}else if(L.isRectAreaLight){const w=s.rectArea[A];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),A++}else if(L.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const w=s.hemi[N];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),N++}}}return{setup:p,setupView:g,state:s}}function Av(r){const e=new YA(r),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function f(x){i.push(x)}function p(x){s.push(x)}function g(x){l.push(x)}function m(){e.setup(i)}function v(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:m,setupLightsView:v,pushLight:f,pushShadow:p,pushLightProbeGrid:g}}function ZA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new Av(r),e.set(l,[p])):c>=f.length?(p=new Av(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],$A=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],wv=new on,Ko=new Z,hh=new Z;function ew(r,e,i){let s=new bp;const l=new ot,c=new ot,f=new ln,p=new u2,g=new f2,m={},v=i.maxTextureSize,_={[us]:Qn,[Qn]:us,[Li]:Li},x=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:KA,fragmentShader:QA}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const A=new kn;A.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Pt(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let y=this.type;this.render=function(D,B,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===OS&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tl);const z=r.getRenderTarget(),k=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Ea),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const he=y!==this.type;he&&B.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(P=>P.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,P=D.length;X<P;X++){const O=D[X],H=O.shadow;if(H===void 0){ut("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const te=H.getFrameExtents();l.multiply(te),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/te.x),l.x=c.x*te.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/te.y),l.y=c.y*te.y,H.mapSize.y=c.y));const oe=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=oe,H.map===null||he===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(O.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Zi(l.x,l.y,{format:Vs,type:Aa,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Xr(l.x,l.y,Wi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else O.isPointLight?(H.map=new y_(l.x),H.map.depthTexture=new GM(l.x,Ki)):(H.map=new Zi(l.x,l.y),H.map.depthTexture=new Xr(l.x,l.y,Ki)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=wa,this.type===tl?(H.map.depthTexture.compareFunction=oe?vp:xp,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un);H.camera.updateProjectionMatrix()}const xe=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<xe;U++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,U),r.clear();else{U===0&&(r.setRenderTarget(H.map),r.clear());const K=H.getViewport(U);f.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),W.viewport(f)}if(O.isPointLight){const K=H.camera,Me=H.matrix,ae=O.distance||K.far;ae!==K.far&&(K.far=ae,K.updateProjectionMatrix()),Ko.setFromMatrixPosition(O.matrixWorld),K.position.copy(Ko),hh.copy(K.position),hh.add(JA[U]),K.up.copy($A[U]),K.lookAt(hh),K.updateMatrixWorld(),Me.makeTranslation(-Ko.x,-Ko.y,-Ko.z),wv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(wv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(O);s=H.getFrustum(),w(B,T,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&G(H,T),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(z,k,V)};function G(D,B){const T=e.update(N);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,b.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Zi(l.x,l.y,{format:Vs,type:Aa})),x.uniforms.shadow_pass.value=D.map.depthTexture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(B,null,T,x,N,null),b.uniforms.shadow_pass.value=D.mapPass.texture,b.uniforms.resolution.value=D.mapSize,b.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(B,null,T,b,N,null)}function L(D,B,T,z){let k=null;const V=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)k=V;else if(k=T.isPointLight===!0?g:p,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const W=k.uuid,he=B.uuid;let X=m[W];X===void 0&&(X={},m[W]=X);let P=X[he];P===void 0&&(P=k.clone(),X[he]=P,B.addEventListener("dispose",I)),k=P}if(k.visible=B.visible,k.wireframe=B.wireframe,z===Qo?k.side=B.shadowSide!==null?B.shadowSide:B.side:k.side=B.shadowSide!==null?B.shadowSide:_[B.side],k.alphaMap=B.alphaMap,k.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,k.map=B.map,k.clipShadows=B.clipShadows,k.clippingPlanes=B.clippingPlanes,k.clipIntersection=B.clipIntersection,k.displacementMap=B.displacementMap,k.displacementScale=B.displacementScale,k.displacementBias=B.displacementBias,k.wireframeLinewidth=B.wireframeLinewidth,k.linewidth=B.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const W=r.properties.get(k);W.light=T}return k}function w(D,B,T,z,k){if(D.visible===!1)return;if(D.layers.test(B.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Qo)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const he=e.update(D),X=D.material;if(Array.isArray(X)){const P=he.groups;for(let O=0,H=P.length;O<H;O++){const te=P[O],oe=X[te.materialIndex];if(oe&&oe.visible){const xe=L(D,oe,z,k);D.onBeforeShadow(r,D,B,T,he,xe,te),r.renderBufferDirect(T,null,he,xe,D,te),D.onAfterShadow(r,D,B,T,he,xe,te)}}}else if(X.visible){const P=L(D,X,z,k);D.onBeforeShadow(r,D,B,T,he,P,null),r.renderBufferDirect(T,null,he,P,D,null),D.onAfterShadow(r,D,B,T,he,P,null)}}const W=D.children;for(let he=0,X=W.length;he<X;he++)w(W[he],B,T,z,k)}function I(D){D.target.removeEventListener("dispose",I);for(const T in m){const z=m[T],k=D.target.uuid;k in z&&(z[k].dispose(),delete z[k])}}}function tw(r,e){function i(){let Q=!1;const Ie=new ln;let Te=null;const Fe=new ln(0,0,0,0);return{setMask:function(je){Te!==je&&!Q&&(r.colorMask(je,je,je,je),Te=je)},setLocked:function(je){Q=je},setClear:function(je,Re,$e,Ye,nn){nn===!0&&(je*=Ye,Re*=Ye,$e*=Ye),Ie.set(je,Re,$e,Ye),Fe.equals(Ie)===!1&&(r.clearColor(je,Re,$e,Ye),Fe.copy(Ie))},reset:function(){Q=!1,Te=null,Fe.set(-1,0,0,0)}}}function s(){let Q=!1,Ie=!1,Te=null,Fe=null,je=null;return{setReversed:function(Re){if(Ie!==Re){const $e=e.get("EXT_clip_control");Re?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ie=Re;const Ye=je;je=null,this.setClear(Ye)}},getReversed:function(){return Ie},setTest:function(Re){Re?_e(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(Re){Te!==Re&&!Q&&(r.depthMask(Re),Te=Re)},setFunc:function(Re){if(Ie&&(Re=hM[Re]),Fe!==Re){switch(Re){case vh:r.depthFunc(r.NEVER);break;case _h:r.depthFunc(r.ALWAYS);break;case bh:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Sh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=Re}},setLocked:function(Re){Q=Re},setClear:function(Re){je!==Re&&(je=Re,Ie&&(Re=1-Re),r.clearDepth(Re))},reset:function(){Q=!1,Te=null,Fe=null,je=null,Ie=!1}}}function l(){let Q=!1,Ie=null,Te=null,Fe=null,je=null,Re=null,$e=null,Ye=null,nn=null;return{setTest:function(It){Q||(It?_e(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(It){Ie!==It&&!Q&&(r.stencilMask(It),Ie=It)},setFunc:function(It,Jn,$n){(Te!==It||Fe!==Jn||je!==$n)&&(r.stencilFunc(It,Jn,$n),Te=It,Fe=Jn,je=$n)},setOp:function(It,Jn,$n){(Re!==It||$e!==Jn||Ye!==$n)&&(r.stencilOp(It,Jn,$n),Re=It,$e=Jn,Ye=$n)},setLocked:function(It){Q=It},setClear:function(It){nn!==It&&(r.clearStencil(It),nn=It)},reset:function(){Q=!1,Ie=null,Te=null,Fe=null,je=null,Re=null,$e=null,Ye=null,nn=null}}}const c=new i,f=new s,p=new l,g=new WeakMap,m=new WeakMap;let v={},_={},x={},b=new WeakMap,A=[],N=null,M=!1,y=null,G=null,L=null,w=null,I=null,D=null,B=null,T=new vt(0,0,0),z=0,k=!1,V=null,W=null,he=null,X=null,P=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const oe=r.getParameter(r.VERSION);oe.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(oe)[1]),H=te>=1):oe.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),H=te>=2);let xe=null,U={};const K=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),ae=new ln().fromArray(K),$=new ln().fromArray(Me);function q(Q,Ie,Te,Fe){const je=new Uint8Array(4),Re=r.createTexture();r.bindTexture(Q,Re),r.texParameteri(Q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<Te;$e++)Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?r.texImage3D(Ie,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,je):r.texImage2D(Ie+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,je);return Re}const ve={};ve[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),_e(r.DEPTH_TEST),f.setFunc(Vr),Yt(!1),Zt(Sx),_e(r.CULL_FACE),Ke(Ea);function _e(Q){v[Q]!==!0&&(r.enable(Q),v[Q]=!0)}function Ce(Q){v[Q]!==!1&&(r.disable(Q),v[Q]=!1)}function be(Q,Ie){return x[Q]!==Ie?(r.bindFramebuffer(Q,Ie),x[Q]=Ie,Q===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ie),Q===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ue(Q,Ie){let Te=A,Fe=!1;if(Q){Te=b.get(Ie),Te===void 0&&(Te=[],b.set(Ie,Te));const je=Q.textures;if(Te.length!==je.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,$e=je.length;Re<$e;Re++)Te[Re]=r.COLOR_ATTACHMENT0+Re;Te.length=je.length,Fe=!0}}else Te[0]!==r.BACK&&(Te[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(Te)}function Ne(Q){return N!==Q?(r.useProgram(Q),N=Q,!0):!1}const Le={[Is]:r.FUNC_ADD,[zS]:r.FUNC_SUBTRACT,[IS]:r.FUNC_REVERSE_SUBTRACT};Le[BS]=r.MIN,Le[FS]=r.MAX;const We={[HS]:r.ZERO,[GS]:r.ONE,[kS]:r.SRC_COLOR,[gh]:r.SRC_ALPHA,[YS]:r.SRC_ALPHA_SATURATE,[WS]:r.DST_COLOR,[jS]:r.DST_ALPHA,[VS]:r.ONE_MINUS_SRC_COLOR,[xh]:r.ONE_MINUS_SRC_ALPHA,[qS]:r.ONE_MINUS_DST_COLOR,[XS]:r.ONE_MINUS_DST_ALPHA,[ZS]:r.CONSTANT_COLOR,[KS]:r.ONE_MINUS_CONSTANT_COLOR,[QS]:r.CONSTANT_ALPHA,[JS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ke(Q,Ie,Te,Fe,je,Re,$e,Ye,nn,It){if(Q===Ea){M===!0&&(Ce(r.BLEND),M=!1);return}if(M===!1&&(_e(r.BLEND),M=!0),Q!==PS){if(Q!==y||It!==k){if((G!==Is||I!==Is)&&(r.blendEquation(r.FUNC_ADD),G=Is,I=Is),It)switch(Q){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mx:r.blendFunc(r.ONE,r.ONE);break;case Ex:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Nt("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ex:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tx:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",Q);break}L=null,w=null,D=null,B=null,T.set(0,0,0),z=0,y=Q,k=It}return}je=je||Ie,Re=Re||Te,$e=$e||Fe,(Ie!==G||je!==I)&&(r.blendEquationSeparate(Le[Ie],Le[je]),G=Ie,I=je),(Te!==L||Fe!==w||Re!==D||$e!==B)&&(r.blendFuncSeparate(We[Te],We[Fe],We[Re],We[$e]),L=Te,w=Fe,D=Re,B=$e),(Ye.equals(T)===!1||nn!==z)&&(r.blendColor(Ye.r,Ye.g,Ye.b,nn),T.copy(Ye),z=nn),y=Q,k=!1}function lt(Q,Ie){Q.side===Li?Ce(r.CULL_FACE):_e(r.CULL_FACE);let Te=Q.side===Qn;Ie&&(Te=!Te),Yt(Te),Q.blending===Hr&&Q.transparent===!1?Ke(Ea):Ke(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),f.setFunc(Q.depthFunc),f.setTest(Q.depthTest),f.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const Fe=Q.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(Q.stencilWriteMask),p.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),p.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),jt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(Q){V!==Q&&(Q?r.frontFace(r.CW):r.frontFace(r.CCW),V=Q)}function Zt(Q){Q!==US?(_e(r.CULL_FACE),Q!==W&&(Q===Sx?r.cullFace(r.BACK):Q===LS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),W=Q}function Kt(Q){Q!==he&&(H&&r.lineWidth(Q),he=Q)}function jt(Q,Ie,Te){Q?(_e(r.POLYGON_OFFSET_FILL),(X!==Ie||P!==Te)&&(X=Ie,P=Te,f.getReversed()&&(Ie=-Ie),r.polygonOffset(Ie,Te))):Ce(r.POLYGON_OFFSET_FILL)}function Rt(Q){Q?_e(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function tn(Q){Q===void 0&&(Q=r.TEXTURE0+O-1),xe!==Q&&(r.activeTexture(Q),xe=Q)}function ne(Q,Ie,Te){Te===void 0&&(xe===null?Te=r.TEXTURE0+O-1:Te=xe);let Fe=U[Te];Fe===void 0&&(Fe={type:void 0,texture:void 0},U[Te]=Fe),(Fe.type!==Q||Fe.texture!==Ie)&&(xe!==Te&&(r.activeTexture(Te),xe=Te),r.bindTexture(Q,Ie||ve[Q]),Fe.type=Q,Fe.texture=Ie)}function Ct(){const Q=U[xe];Q!==void 0&&Q.type!==void 0&&(r.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function bt(){try{r.compressedTexImage2D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function E(){try{r.texSubImage2D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function re(){try{r.texSubImage3D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function pe(){try{r.compressedTexSubImage2D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function Oe(){try{r.texStorage2D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function le(){try{r.texStorage3D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function J(){try{r.texImage2D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function ee(){try{r.texImage3D(...arguments)}catch(Q){Nt("WebGLState:",Q)}}function De(Q){return _[Q]!==void 0?_[Q]:r.getParameter(Q)}function Pe(Q,Ie){_[Q]!==Ie&&(r.pixelStorei(Q,Ie),_[Q]=Ie)}function ze(Q){ae.equals(Q)===!1&&(r.scissor(Q.x,Q.y,Q.z,Q.w),ae.copy(Q))}function He(Q){$.equals(Q)===!1&&(r.viewport(Q.x,Q.y,Q.z,Q.w),$.copy(Q))}function it(Q,Ie){let Te=m.get(Ie);Te===void 0&&(Te=new WeakMap,m.set(Ie,Te));let Fe=Te.get(Q);Fe===void 0&&(Fe=r.getUniformBlockIndex(Ie,Q.name),Te.set(Q,Fe))}function at(Q,Ie){const Fe=m.get(Ie).get(Q);g.get(Ie)!==Fe&&(r.uniformBlockBinding(Ie,Fe,Q.__bindingPointIndex),g.set(Ie,Fe))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},xe=null,U={},x={},b=new WeakMap,A=[],N=null,M=!1,y=null,G=null,L=null,w=null,I=null,D=null,B=null,T=new vt(0,0,0),z=0,k=!1,V=null,W=null,he=null,X=null,P=null,ae.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:_e,disable:Ce,bindFramebuffer:be,drawBuffers:Ue,useProgram:Ne,setBlending:Ke,setMaterial:lt,setFlipSided:Yt,setCullFace:Zt,setLineWidth:Kt,setPolygonOffset:jt,setScissorTest:Rt,activeTexture:tn,bindTexture:ne,unbindTexture:Ct,compressedTexImage2D:bt,compressedTexImage3D:F,texImage2D:J,texImage3D:ee,pixelStorei:Pe,getParameter:De,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Oe,texStorage3D:le,texSubImage2D:E,texSubImage3D:re,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:ze,viewport:He,reset:ft}}function nw(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ot,v=new WeakMap,_=new Set;let x;const b=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(F,E){return A?new OffscreenCanvas(F,E):ru("canvas")}function M(F,E,re){let pe=1;const Se=bt(F);if((Se.width>re||Se.height>re)&&(pe=re/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Oe=Math.floor(pe*Se.width),le=Math.floor(pe*Se.height);x===void 0&&(x=N(Oe,le));const J=E?N(Oe,le):x;return J.width=Oe,J.height=le,J.getContext("2d").drawImage(F,0,0,Oe,le),ut("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Oe+"x"+le+")."),J}else return"data"in F&&ut("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),F;return F}function y(F){return F.generateMipmaps}function G(F){r.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(F,E,re,pe,Se,Oe=!1){if(F!==null){if(r[F]!==void 0)return r[F];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let le;pe&&(le=e.get("EXT_texture_norm16"),le||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=E;if(E===r.RED&&(re===r.FLOAT&&(J=r.R32F),re===r.HALF_FLOAT&&(J=r.R16F),re===r.UNSIGNED_BYTE&&(J=r.R8),re===r.UNSIGNED_SHORT&&le&&(J=le.R16_EXT),re===r.SHORT&&le&&(J=le.R16_SNORM_EXT)),E===r.RED_INTEGER&&(re===r.UNSIGNED_BYTE&&(J=r.R8UI),re===r.UNSIGNED_SHORT&&(J=r.R16UI),re===r.UNSIGNED_INT&&(J=r.R32UI),re===r.BYTE&&(J=r.R8I),re===r.SHORT&&(J=r.R16I),re===r.INT&&(J=r.R32I)),E===r.RG&&(re===r.FLOAT&&(J=r.RG32F),re===r.HALF_FLOAT&&(J=r.RG16F),re===r.UNSIGNED_BYTE&&(J=r.RG8),re===r.UNSIGNED_SHORT&&le&&(J=le.RG16_EXT),re===r.SHORT&&le&&(J=le.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(re===r.UNSIGNED_BYTE&&(J=r.RG8UI),re===r.UNSIGNED_SHORT&&(J=r.RG16UI),re===r.UNSIGNED_INT&&(J=r.RG32UI),re===r.BYTE&&(J=r.RG8I),re===r.SHORT&&(J=r.RG16I),re===r.INT&&(J=r.RG32I)),E===r.RGB_INTEGER&&(re===r.UNSIGNED_BYTE&&(J=r.RGB8UI),re===r.UNSIGNED_SHORT&&(J=r.RGB16UI),re===r.UNSIGNED_INT&&(J=r.RGB32UI),re===r.BYTE&&(J=r.RGB8I),re===r.SHORT&&(J=r.RGB16I),re===r.INT&&(J=r.RGB32I)),E===r.RGBA_INTEGER&&(re===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),re===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),re===r.UNSIGNED_INT&&(J=r.RGBA32UI),re===r.BYTE&&(J=r.RGBA8I),re===r.SHORT&&(J=r.RGBA16I),re===r.INT&&(J=r.RGBA32I)),E===r.RGB&&(re===r.UNSIGNED_SHORT&&le&&(J=le.RGB16_EXT),re===r.SHORT&&le&&(J=le.RGB16_SNORM_EXT),re===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),re===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),E===r.RGBA){const ee=Oe?su:wt.getTransfer(Se);re===r.FLOAT&&(J=r.RGBA32F),re===r.HALF_FLOAT&&(J=r.RGBA16F),re===r.UNSIGNED_BYTE&&(J=ee===Vt?r.SRGB8_ALPHA8:r.RGBA8),re===r.UNSIGNED_SHORT&&le&&(J=le.RGBA16_EXT),re===r.SHORT&&le&&(J=le.RGBA16_SNORM_EXT),re===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),re===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function I(F,E){let re;return F?E===null||E===Ki||E===cl?re=r.DEPTH24_STENCIL8:E===Wi?re=r.DEPTH32F_STENCIL8:E===ll&&(re=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===cl?re=r.DEPTH_COMPONENT24:E===Wi?re=r.DEPTH_COMPONENT32F:E===ll&&(re=r.DEPTH_COMPONENT16),re}function D(F,E){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==Un&&F.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function B(F){const E=F.target;E.removeEventListener("dispose",B),z(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function T(F){const E=F.target;E.removeEventListener("dispose",T),V(E)}function z(F){const E=s.get(F);if(E.__webglInit===void 0)return;const re=F.source,pe=b.get(re);if(pe){const Se=pe[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&k(F),Object.keys(pe).length===0&&b.delete(re)}s.remove(F)}function k(F){const E=s.get(F);r.deleteTexture(E.__webglTexture);const re=F.source,pe=b.get(re);delete pe[E.__cacheKey],f.memory.textures--}function V(F){const E=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let Se=0;Se<E.__webglFramebuffer[pe].length;Se++)r.deleteFramebuffer(E.__webglFramebuffer[pe][Se]);else r.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)r.deleteFramebuffer(E.__webglFramebuffer[pe]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const re=F.textures;for(let pe=0,Se=re.length;pe<Se;pe++){const Oe=s.get(re[pe]);Oe.__webglTexture&&(r.deleteTexture(Oe.__webglTexture),f.memory.textures--),s.remove(re[pe])}s.remove(F)}let W=0;function he(){W=0}function X(){return W}function P(F){W=F}function O(){const F=W;return F>=l.maxTextures&&ut("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),W+=1,F}function H(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function te(F,E){const re=s.get(F);if(F.isVideoTexture&&ne(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&re.__version!==F.version){const pe=F.image;if(pe===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(re,F,E);return}}else F.isExternalTexture&&(re.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,re.__webglTexture,r.TEXTURE0+E)}function oe(F,E){const re=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){Ce(re,F,E);return}else F.isExternalTexture&&(re.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,re.__webglTexture,r.TEXTURE0+E)}function xe(F,E){const re=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){Ce(re,F,E);return}i.bindTexture(r.TEXTURE_3D,re.__webglTexture,r.TEXTURE0+E)}function U(F,E){const re=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&re.__version!==F.version){be(re,F,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture,r.TEXTURE0+E)}const K={[ol]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[Th]:r.MIRRORED_REPEAT},Me={[Un]:r.NEAREST,[tM]:r.NEAREST_MIPMAP_NEAREST,[Ec]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Dd]:r.LINEAR_MIPMAP_NEAREST,[Fs]:r.LINEAR_MIPMAP_LINEAR},ae={[aM]:r.NEVER,[cM]:r.ALWAYS,[sM]:r.LESS,[xp]:r.LEQUAL,[rM]:r.EQUAL,[vp]:r.GEQUAL,[oM]:r.GREATER,[lM]:r.NOTEQUAL};function $(F,E){if(E.type===Wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Dd||E.magFilter===Ec||E.magFilter===Fs||E.minFilter===Bn||E.minFilter===Dd||E.minFilter===Ec||E.minFilter===Fs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,K[E.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,K[E.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,K[E.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,Me[E.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Ec&&E.minFilter!==Fs||E.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function q(F,E){let re=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",B));const pe=E.source;let Se=b.get(pe);Se===void 0&&(Se={},b.set(pe,Se));const Oe=H(E);if(Oe!==F.__cacheKey){Se[Oe]===void 0&&(Se[Oe]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,re=!0),Se[Oe].usedTimes++;const le=Se[F.__cacheKey];le!==void 0&&(Se[F.__cacheKey].usedTimes--,le.usedTimes===0&&k(E)),F.__cacheKey=Oe,F.__webglTexture=Se[Oe].texture}return re}function ve(F,E,re){return Math.floor(Math.floor(F/re)/E)}function _e(F,E,re,pe){const Oe=F.updateRanges;if(Oe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,re,pe,E.data);else{Oe.sort((Pe,ze)=>Pe.start-ze.start);let le=0;for(let Pe=1;Pe<Oe.length;Pe++){const ze=Oe[le],He=Oe[Pe],it=ze.start+ze.count,at=ve(He.start,E.width,4),ft=ve(ze.start,E.width,4);He.start<=it+1&&at===ft&&ve(He.start+He.count-1,E.width,4)===at?ze.count=Math.max(ze.count,He.start+He.count-ze.start):(++le,Oe[le]=He)}Oe.length=le+1;const J=i.getParameter(r.UNPACK_ROW_LENGTH),ee=i.getParameter(r.UNPACK_SKIP_PIXELS),De=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,ze=Oe.length;Pe<ze;Pe++){const He=Oe[Pe],it=Math.floor(He.start/4),at=Math.ceil(He.count/4),ft=it%E.width,Q=Math.floor(it/E.width),Ie=at,Te=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(r.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(r.TEXTURE_2D,0,ft,Q,Ie,Te,re,pe,E.data)}F.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,J),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),i.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Ce(F,E,re){let pe=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=r.TEXTURE_3D);const Se=q(F,E),Oe=E.source;i.bindTexture(pe,F.__webglTexture,r.TEXTURE0+re);const le=s.get(Oe);if(Oe.version!==le.__version||Se===!0){if(i.activeTexture(r.TEXTURE0+re),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Te=wt.getPrimaries(wt.workingColorSpace),Fe=E.colorSpace===ls?null:wt.getPrimaries(E.colorSpace),je=E.colorSpace===ls||Te===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=M(E.image,!1,l.maxTextureSize);ee=Ct(E,ee);const De=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type);let ze=w(E.internalFormat,De,Pe,E.normalized,E.colorSpace,E.isVideoTexture);$(pe,E);let He;const it=E.mipmaps,at=E.isVideoTexture!==!0,ft=le.__version===void 0||Se===!0,Q=Oe.dataReady,Ie=D(E,ee);if(E.isDepthTexture)ze=I(E.format===Hs,E.type),ft&&(at?i.texStorage2D(r.TEXTURE_2D,1,ze,ee.width,ee.height):i.texImage2D(r.TEXTURE_2D,0,ze,ee.width,ee.height,0,De,Pe,null));else if(E.isDataTexture)if(it.length>0){at&&ft&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,it[0].width,it[0].height);for(let Te=0,Fe=it.length;Te<Fe;Te++)He=it[Te],at?Q&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,He.width,He.height,De,Pe,He.data):i.texImage2D(r.TEXTURE_2D,Te,ze,He.width,He.height,0,De,Pe,He.data);E.generateMipmaps=!1}else at?(ft&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,ee.width,ee.height),Q&&_e(E,ee,De,Pe)):i.texImage2D(r.TEXTURE_2D,0,ze,ee.width,ee.height,0,De,Pe,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ze,it[0].width,it[0].height,ee.depth);for(let Te=0,Fe=it.length;Te<Fe;Te++)if(He=it[Te],E.format!==Pi)if(De!==null)if(at){if(Q)if(E.layerUpdates.size>0){const je=av(He.width,He.height,E.format,E.type);for(const Re of E.layerUpdates){const $e=He.data.subarray(Re*je/He.data.BYTES_PER_ELEMENT,(Re+1)*je/He.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,Re,He.width,He.height,1,De,$e)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,He.width,He.height,ee.depth,De,He.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,ze,He.width,He.height,ee.depth,0,He.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Q&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,He.width,He.height,ee.depth,De,Pe,He.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,ze,He.width,He.height,ee.depth,0,De,Pe,He.data)}else{at&&ft&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,it[0].width,it[0].height);for(let Te=0,Fe=it.length;Te<Fe;Te++)He=it[Te],E.format!==Pi?De!==null?at?Q&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,He.width,He.height,De,He.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,ze,He.width,He.height,0,He.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Q&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,He.width,He.height,De,Pe,He.data):i.texImage2D(r.TEXTURE_2D,Te,ze,He.width,He.height,0,De,Pe,He.data)}else if(E.isDataArrayTexture)if(at){if(ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ze,ee.width,ee.height,ee.depth),Q)if(E.layerUpdates.size>0){const Te=av(ee.width,ee.height,E.format,E.type);for(const Fe of E.layerUpdates){const je=ee.data.subarray(Fe*Te/ee.data.BYTES_PER_ELEMENT,(Fe+1)*Te/ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Fe,ee.width,ee.height,1,De,Pe,je)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,De,Pe,ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,ee.width,ee.height,ee.depth,0,De,Pe,ee.data);else if(E.isData3DTexture)at?(ft&&i.texStorage3D(r.TEXTURE_3D,Ie,ze,ee.width,ee.height,ee.depth),Q&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,De,Pe,ee.data)):i.texImage3D(r.TEXTURE_3D,0,ze,ee.width,ee.height,ee.depth,0,De,Pe,ee.data);else if(E.isFramebufferTexture){if(ft)if(at)i.texStorage2D(r.TEXTURE_2D,Ie,ze,ee.width,ee.height);else{let Te=ee.width,Fe=ee.height;for(let je=0;je<Ie;je++)i.texImage2D(r.TEXTURE_2D,je,ze,Te,Fe,0,De,Pe,null),Te>>=1,Fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const Te=r.canvas;if(Te.hasAttribute("layoutsubtree")||Te.setAttribute("layoutsubtree","true"),ee.parentNode!==Te){Te.appendChild(ee),_.add(E),Te.onpaint=Fe=>{const je=Fe.changedElements;for(const Re of _)je.includes(Re.image)&&(Re.needsUpdate=!0)},Te.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{const je=r.RGBA,Re=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,je,Re,$e,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&ft){const Te=bt(it[0]);i.texStorage2D(r.TEXTURE_2D,Ie,ze,Te.width,Te.height)}for(let Te=0,Fe=it.length;Te<Fe;Te++)He=it[Te],at?Q&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,De,Pe,He):i.texImage2D(r.TEXTURE_2D,Te,ze,De,Pe,He);E.generateMipmaps=!1}else if(at){if(ft){const Te=bt(ee);i.texStorage2D(r.TEXTURE_2D,Ie,ze,Te.width,Te.height)}Q&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Pe,ee)}else i.texImage2D(r.TEXTURE_2D,0,ze,De,Pe,ee);y(E)&&G(pe),le.__version=Oe.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function be(F,E,re){if(E.image.length!==6)return;const pe=q(F,E),Se=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+re);const Oe=s.get(Se);if(Se.version!==Oe.__version||pe===!0){i.activeTexture(r.TEXTURE0+re);const le=wt.getPrimaries(wt.workingColorSpace),J=E.colorSpace===ls?null:wt.getPrimaries(E.colorSpace),ee=E.colorSpace===ls||le===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let Re=0;Re<6;Re++)!De&&!Pe?ze[Re]=M(E.image[Re],!0,l.maxCubemapSize):ze[Re]=Pe?E.image[Re].image:E.image[Re],ze[Re]=Ct(E,ze[Re]);const He=ze[0],it=c.convert(E.format,E.colorSpace),at=c.convert(E.type),ft=w(E.internalFormat,it,at,E.normalized,E.colorSpace),Q=E.isVideoTexture!==!0,Ie=Oe.__version===void 0||pe===!0,Te=Se.dataReady;let Fe=D(E,He);$(r.TEXTURE_CUBE_MAP,E);let je;if(De){Q&&Ie&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ft,He.width,He.height);for(let Re=0;Re<6;Re++){je=ze[Re].mipmaps;for(let $e=0;$e<je.length;$e++){const Ye=je[$e];E.format!==Pi?it!==null?Q?Te&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,0,0,Ye.width,Ye.height,it,Ye.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,ft,Ye.width,Ye.height,0,Ye.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,0,0,Ye.width,Ye.height,it,at,Ye.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,ft,Ye.width,Ye.height,0,it,at,Ye.data)}}}else{if(je=E.mipmaps,Q&&Ie){je.length>0&&Fe++;const Re=bt(ze[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ft,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Pe){Q?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ze[Re].width,ze[Re].height,it,at,ze[Re].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ft,ze[Re].width,ze[Re].height,0,it,at,ze[Re].data);for(let $e=0;$e<je.length;$e++){const nn=je[$e].image[Re].image;Q?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,0,0,nn.width,nn.height,it,at,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,ft,nn.width,nn.height,0,it,at,nn.data)}}else{Q?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,it,at,ze[Re]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ft,it,at,ze[Re]);for(let $e=0;$e<je.length;$e++){const Ye=je[$e];Q?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,0,0,it,at,Ye.image[Re]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,ft,it,at,Ye.image[Re])}}}y(E)&&G(r.TEXTURE_CUBE_MAP),Oe.__version=Se.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Ue(F,E,re,pe,Se,Oe){const le=c.convert(re.format,re.colorSpace),J=c.convert(re.type),ee=w(re.internalFormat,le,J,re.normalized,re.colorSpace),De=s.get(E),Pe=s.get(re);if(Pe.__renderTarget=E,!De.__hasExternalTextures){const ze=Math.max(1,E.width>>Oe),He=Math.max(1,E.height>>Oe);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?i.texImage3D(Se,Oe,ee,ze,He,E.depth,0,le,J,null):i.texImage2D(Se,Oe,ee,ze,He,0,le,J,null)}i.bindFramebuffer(r.FRAMEBUFFER,F),tn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,Se,Pe.__webglTexture,0,Rt(E)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,Se,Pe.__webglTexture,Oe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(F,E,re){if(r.bindRenderbuffer(r.RENDERBUFFER,F),E.depthBuffer){const pe=E.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,Oe=I(E.stencilBuffer,Se),le=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;tn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(E),Oe,E.width,E.height):re?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(E),Oe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,F)}else{const pe=E.textures;for(let Se=0;Se<pe.length;Se++){const Oe=pe[Se],le=c.convert(Oe.format,Oe.colorSpace),J=c.convert(Oe.type),ee=w(Oe.internalFormat,le,J,Oe.normalized,Oe.colorSpace);tn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(E),ee,E.width,E.height):re?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(E),ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ee,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(F,E,re){const pe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Se=s.get(E.depthTexture);if(Se.__renderTarget=E,(!Se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Se.__webglTexture===void 0){Se.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),$(r.TEXTURE_CUBE_MAP,E.depthTexture);const De=c.convert(E.depthTexture.format),Pe=c.convert(E.depthTexture.type);let ze;E.depthTexture.format===wa?ze=r.DEPTH_COMPONENT24:E.depthTexture.format===Hs&&(ze=r.DEPTH24_STENCIL8);for(let He=0;He<6;He++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,ze,E.width,E.height,0,De,Pe,null)}}else te(E.depthTexture,0);const Oe=Se.__webglTexture,le=Rt(E),J=pe?r.TEXTURE_CUBE_MAP_POSITIVE_X+re:r.TEXTURE_2D,ee=E.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===wa)tn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,J,Oe,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,ee,J,Oe,0);else if(E.depthTexture.format===Hs)tn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,J,Oe,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,ee,J,Oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(F){const E=s.get(F),re=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const pe=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=pe}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(re)for(let pe=0;pe<6;pe++)Le(E.__webglFramebuffer[pe],F,pe);else{const pe=F.texture.mipmaps;pe&&pe.length>0?Le(E.__webglFramebuffer[0],F,0):Le(E.__webglFramebuffer,F,0)}else if(re){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=r.createRenderbuffer(),Ne(E.__webglDepthbuffer[pe],F,!1);else{const Se=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=E.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,Oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,Oe)}}else{const pe=F.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ne(E.__webglDepthbuffer,F,!1);else{const Se=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,Oe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(F,E,re){const pe=s.get(F);E!==void 0&&Ue(pe.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),re!==void 0&&We(F)}function lt(F){const E=F.texture,re=s.get(F),pe=s.get(E);F.addEventListener("dispose",T);const Se=F.textures,Oe=F.isWebGLCubeRenderTarget===!0,le=Se.length>1;if(le||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=E.version,f.memory.textures++),Oe){re.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer[J]=[];for(let ee=0;ee<E.mipmaps.length;ee++)re.__webglFramebuffer[J][ee]=r.createFramebuffer()}else re.__webglFramebuffer[J]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)re.__webglFramebuffer[J]=r.createFramebuffer()}else re.__webglFramebuffer=r.createFramebuffer();if(le)for(let J=0,ee=Se.length;J<ee;J++){const De=s.get(Se[J]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),f.memory.textures++)}if(F.samples>0&&tn(F)===!1){re.__webglMultisampledFramebuffer=r.createFramebuffer(),re.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let J=0;J<Se.length;J++){const ee=Se[J];re.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,re.__webglColorRenderbuffer[J]);const De=c.convert(ee.format,ee.colorSpace),Pe=c.convert(ee.type),ze=w(ee.internalFormat,De,Pe,ee.normalized,ee.colorSpace,F.isXRRenderTarget===!0),He=Rt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,ze,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,re.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(re.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(re.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Oe){i.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),$(r.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ue(re.__webglFramebuffer[J][ee],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Ue(re.__webglFramebuffer[J],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);y(E)&&G(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(le){for(let J=0,ee=Se.length;J<ee;J++){const De=Se[J],Pe=s.get(De);let ze=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ze=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ze,Pe.__webglTexture),$(ze,De),Ue(re.__webglFramebuffer,F,De,r.COLOR_ATTACHMENT0+J,ze,0),y(De)&&G(ze)}i.unbindTexture()}else{let J=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(J=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(J,pe.__webglTexture),$(J,E),E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ue(re.__webglFramebuffer[ee],F,E,r.COLOR_ATTACHMENT0,J,ee);else Ue(re.__webglFramebuffer,F,E,r.COLOR_ATTACHMENT0,J,0);y(E)&&G(J),i.unbindTexture()}F.depthBuffer&&We(F)}function Yt(F){const E=F.textures;for(let re=0,pe=E.length;re<pe;re++){const Se=E[re];if(y(Se)){const Oe=L(F),le=s.get(Se).__webglTexture;i.bindTexture(Oe,le),G(Oe),i.unbindTexture()}}}const Zt=[],Kt=[];function jt(F){if(F.samples>0){if(tn(F)===!1){const E=F.textures,re=F.width,pe=F.height;let Se=r.COLOR_BUFFER_BIT;const Oe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=s.get(F),J=E.length>1;if(J)for(let De=0;De<E.length;De++)i.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ee=F.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let De=0;De<E.length;De++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[De]);const Pe=s.get(E[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,re,pe,0,0,re,pe,Se,r.NEAREST),g===!0&&(Zt.length=0,Kt.length=0,Zt.push(r.COLOR_ATTACHMENT0+De),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Zt.push(Oe),Kt.push(Oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Zt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let De=0;De<E.length;De++){i.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,le.__webglColorRenderbuffer[De]);const Pe=s.get(E[De]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Pe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&g){const E=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Rt(F){return Math.min(l.maxSamples,F.samples)}function tn(F){const E=s.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ne(F){const E=f.render.frame;v.get(F)!==E&&(v.set(F,E),F.update())}function Ct(F,E){const re=F.colorSpace,pe=F.format,Se=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||re!==au&&re!==ls&&(wt.getTransfer(re)===Vt?(pe!==Pi||Se!==di)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",re)),E}function bt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=O,this.resetTextureUnits=he,this.getTextureUnits=X,this.setTextureUnits=P,this.setTexture2D=te,this.setTexture2DArray=oe,this.setTexture3D=xe,this.setTextureCube=U,this.rebindTextures=Ke,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iw(r,e){function i(s,l=ls){let c;const f=wt.getTransfer(l);if(s===di)return r.UNSIGNED_BYTE;if(s===dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$v)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===e_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Qv)return r.BYTE;if(s===Jv)return r.SHORT;if(s===ll)return r.UNSIGNED_SHORT;if(s===fp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===t_)return r.ALPHA;if(s===n_)return r.RGB;if(s===Pi)return r.RGBA;if(s===wa)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===i_)return r.RED;if(s===pp)return r.RED_INTEGER;if(s===Vs)return r.RG;if(s===mp)return r.RG_INTEGER;if(s===gp)return r.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(f===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ah||s===wh||s===Ch||s===Rh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nh||s===Dh||s===Uh||s===Lh||s===Oh||s===nu||s===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nh||s===Dh)return f===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Uh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Lh)return c.COMPRESSED_R11_EAC;if(s===Oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===nu)return c.COMPRESSED_RG11_EAC;if(s===Ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===zh||s===Ih||s===Bh||s===Fh||s===Hh||s===Gh||s===kh||s===Vh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ih)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kh||s===Qh||s===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Kh)return f===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$h||s===ep||s===iu||s===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new p_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Qi({vertexShader:aw,fragmentShader:sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pt(new dl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ow extends js{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",g=1,m=null,v=null,_=null,x=null,b=null,A=null;const N=typeof XRWebGLBinding<"u",M=new rw,y={},G=i.getContextAttributes();let L=null,w=null;const I=[],D=[],B=new ot;let T=null;const z=new Si;z.viewport=new ln;const k=new Si;k.viewport=new ln;const V=[z,k],W=new g2;let he=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ve=I[q];return ve===void 0&&(ve=new Fd,I[q]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(q){let ve=I[q];return ve===void 0&&(ve=new Fd,I[q]=ve),ve.getGripSpace()},this.getHand=function(q){let ve=I[q];return ve===void 0&&(ve=new Fd,I[q]=ve),ve.getHandSpace()};function P(q){const ve=D.indexOf(q.inputSource);if(ve===-1)return;const _e=I[ve];_e!==void 0&&(_e.update(q.inputSource,q.frame,m||f),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){l.removeEventListener("select",P),l.removeEventListener("selectstart",P),l.removeEventListener("selectend",P),l.removeEventListener("squeeze",P),l.removeEventListener("squeezestart",P),l.removeEventListener("squeezeend",P),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let q=0;q<I.length;q++){const ve=D[q];ve!==null&&(D[q]=null,I[q].disconnect(ve))}he=null,X=null,M.reset();for(const q in y)delete y[q];e.setRenderTarget(L),b=null,x=null,_=null,l=null,w=null,$.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){p=q,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return _===null&&N&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",P),l.addEventListener("selectstart",P),l.addEventListener("selectend",P),l.addEventListener("squeeze",P),l.addEventListener("squeezestart",P),l.addEventListener("squeezeend",P),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),G.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ce=null,be=null;G.depth&&(be=G.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=G.stencil?Hs:wa,Ce=G.stencil?cl:Ki);const Ue={colorFormat:i.RGBA8,depthFormat:be,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Ue),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new Zi(x.textureWidth,x.textureHeight,{format:Pi,type:di,depthTexture:new Xr(x.textureWidth,x.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:G.stencil,colorSpace:e.outputColorSpace,samples:G.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:G.antialias,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),w=new Zi(b.framebufferWidth,b.framebufferHeight,{format:Pi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:G.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(g),m=null,f=await l.requestReferenceSpace(p),$.setContext(l),$.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(q){for(let ve=0;ve<q.removed.length;ve++){const _e=q.removed[ve],Ce=D.indexOf(_e);Ce>=0&&(D[Ce]=null,I[Ce].disconnect(_e))}for(let ve=0;ve<q.added.length;ve++){const _e=q.added[ve];let Ce=D.indexOf(_e);if(Ce===-1){for(let Ue=0;Ue<I.length;Ue++)if(Ue>=D.length){D.push(_e),Ce=Ue;break}else if(D[Ue]===null){D[Ue]=_e,Ce=Ue;break}if(Ce===-1)break}const be=I[Ce];be&&be.connect(_e)}}const te=new Z,oe=new Z;function xe(q,ve,_e){te.setFromMatrixPosition(ve.matrixWorld),oe.setFromMatrixPosition(_e.matrixWorld);const Ce=te.distanceTo(oe),be=ve.projectionMatrix.elements,Ue=_e.projectionMatrix.elements,Ne=be[14]/(be[10]-1),Le=be[14]/(be[10]+1),We=(be[9]+1)/be[5],Ke=(be[9]-1)/be[5],lt=(be[8]-1)/be[0],Yt=(Ue[8]+1)/Ue[0],Zt=Ne*lt,Kt=Ne*Yt,jt=Ce/(-lt+Yt),Rt=jt*-lt;if(ve.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Rt),q.translateZ(jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ve.projectionMatrix),q.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const tn=Ne+jt,ne=Le+jt,Ct=Zt-Rt,bt=Kt+(Ce-Rt),F=We*Le/ne*tn,E=Ke*Le/ne*tn;q.projectionMatrix.makePerspective(Ct,bt,F,E,tn,ne),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function U(q,ve){ve===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ve.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ve=q.near,_e=q.far;M.texture!==null&&(M.depthNear>0&&(ve=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),W.near=k.near=z.near=ve,W.far=k.far=z.far=_e,(he!==W.near||X!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),he=W.near,X=W.far),W.layers.mask=q.layers.mask|6,z.layers.mask=W.layers.mask&-5,k.layers.mask=W.layers.mask&-3;const Ce=q.parent,be=W.cameras;U(W,Ce);for(let Ue=0;Ue<be.length;Ue++)U(be[Ue],Ce);be.length===2?xe(W,z,k):W.projectionMatrix.copy(z.projectionMatrix),K(q,W,Ce)};function K(q,ve,_e){_e===null?q.matrix.copy(ve.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ve.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ve.projectionMatrix),q.projectionMatrixInverse.copy(ve.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ip*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(x===null&&b===null))return g},this.setFoveation=function(q){g=q,x!==null&&(x.fixedFoveation=q),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function(q){return y[q]};let Me=null;function ae(q,ve){if(v=ve.getViewerPose(m||f),A=ve,v!==null){const _e=v.views;b!==null&&(e.setRenderTargetFramebuffer(w,b.framebuffer),e.setRenderTarget(w));let Ce=!1;_e.length!==W.cameras.length&&(W.cameras.length=0,Ce=!0);for(let Le=0;Le<_e.length;Le++){const We=_e[Le];let Ke=null;if(b!==null)Ke=b.getViewport(We);else{const Yt=_.getViewSubImage(x,We);Ke=Yt.viewport,Le===0&&(e.setRenderTargetTextures(w,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(w))}let lt=V[Le];lt===void 0&&(lt=new Si,lt.layers.enable(Le),lt.viewport=new ln,V[Le]=lt),lt.matrix.fromArray(We.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(We.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Le===0&&(W.matrix.copy(lt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ce===!0&&W.cameras.push(lt)}const be=l.enabledFeatures;if(be&&be.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){_=s.getBinding();const Le=_.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&M.init(Le,l.renderState)}if(be&&be.includes("camera-access")&&N){e.state.unbindTexture(),_=s.getBinding();for(let Le=0;Le<_e.length;Le++){const We=_e[Le].camera;if(We){let Ke=y[We];Ke||(Ke=new p_,y[We]=Ke);const lt=_.getCameraImage(We);Ke.sourceTexture=lt}}}}for(let _e=0;_e<I.length;_e++){const Ce=D[_e],be=I[_e];Ce!==null&&be!==void 0&&be.update(Ce,ve,m||f)}Me&&Me(q,ve),ve.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ve}),A=null}const $=new __;$.setAnimationLoop(ae),this.setAnimationLoop=function(q){Me=q},this.dispose=function(){}}}const lw=new on,A_=new ht;A_.set(-1,0,0,0,1,0,0,0,1);function cw(r,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,x_(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,G,L,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),x(M,y),y.isMeshPhysicalMaterial&&b(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),A(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),N(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&p(M,y)):y.isPointsMaterial?g(M,y,G,L):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const G=e.get(y),L=G.envMap,w=G.envMapRotation;L&&(M.envMap.value=L,M.envMapRotation.value.setFromMatrix4(lw.makeRotationFromEuler(w)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(A_),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function p(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function g(M,y,G,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*G,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function b(M,y,G){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=G.texture,M.transmissionSamplerSize.value.set(G.width,G.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,y){y.matcap&&(M.matcap.value=y.matcap)}function N(M,y){const G=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(G.matrixWorld),M.nearDistance.value=G.shadow.camera.near,M.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uw(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(w,I){const D=I.program;s.uniformBlockBinding(w,D)}function m(w,I){let D=l[w.id];D===void 0&&(M(w),D=v(w),l[w.id]=D,w.addEventListener("dispose",G));const B=I.program;s.updateUBOMapping(w,B);const T=e.render.frame;c[w.id]!==T&&(x(w),c[w.id]=T)}function v(w){const I=_();w.__bindingPointIndex=I;const D=r.createBuffer(),B=w.__size,T=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,D),D}function _(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const I=l[w.id],D=w.uniforms,B=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let T=0,z=D.length;T<z;T++){const k=D[T];if(Array.isArray(k))for(let V=0,W=k.length;V<W;V++)b(k[V],T,V,B);else b(k,T,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(w,I,D,B){if(N(w,I,D,B)===!0){const T=w.__offset,z=w.value;if(Array.isArray(z)){let k=0;for(let V=0;V<z.length;V++){const W=z[V],he=y(W);A(W,w.__data,k),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(k+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(z,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,w.__data)}}function A(w,I,D){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,D)}function N(w,I,D,B){const T=w.value,z=I+"_"+D;if(B[z]===void 0)return typeof T=="number"||typeof T=="boolean"?B[z]=T:ArrayBuffer.isView(T)?B[z]=T.slice():B[z]=T.clone(),!0;{const k=B[z];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return B[z]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function M(w){const I=w.uniforms;let D=0;const B=16;for(let z=0,k=I.length;z<k;z++){const V=Array.isArray(I[z])?I[z]:[I[z]];for(let W=0,he=V.length;W<he;W++){const X=V[W],P=Array.isArray(X.value)?X.value:[X.value];for(let O=0,H=P.length;O<H;O++){const te=P[O],oe=y(te),xe=D%B,U=xe%oe.boundary,K=xe+U;D+=U,K!==0&&B-K<oe.storage&&(D+=B-K),X.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=D,D+=oe.storage}}}const T=D%B;return T>0&&(D+=B-T),w.__size=D,w.__cache={},this}function y(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",w),I}function G(w){const I=w.target;I.removeEventListener("dispose",G);const D=f.indexOf(I.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function L(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:g,update:m,dispose:L}}const fw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function dw(){return ji===null&&(ji=new OM(fw,16,16,Vs,Aa),ji.name="DFG_LUT",ji.minFilter=Bn,ji.magFilter=Bn,ji.wrapS=Ma,ji.wrapT=Ma,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class hw{constructor(e={}){const{canvas:i=fM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:b=di}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=f;const N=b,M=new Set([gp,mp,pp]),y=new Set([di,Ki,ll,cl,dp,hp]),G=new Uint32Array(4),L=new Int32Array(4),w=new Z;let I=null,D=null;const B=[],T=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,W=null,he=null,X=null,P=null;this._outputColorSpace=fi;let O=0,H=0,te=null,oe=-1,xe=null;const U=new ln,K=new ln;let Me=null;const ae=new vt(0);let $=0,q=i.width,ve=i.height,_e=1,Ce=null,be=null;const Ue=new ln(0,0,q,ve),Ne=new ln(0,0,q,ve);let Le=!1;const We=new bp;let Ke=!1,lt=!1;const Yt=new on,Zt=new Z,Kt=new ln,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function tn(){return te===null?_e:1}let ne=s;function Ct(C,ie){return i.getContext(C,ie)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Jn,!1),ne===null){const ie="webgl2";if(ne=Ct(ie,C),ne===null)throw Ct(ie)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Nt("WebGLRenderer: "+C.message),C}let bt,F,E,re,pe,Se,Oe,le,J,ee,De,Pe,ze,He,it,at,ft,Q,Ie,Te,Fe,je,Re;function $e(){bt=new dT(ne),bt.init(),Fe=new iw(ne,bt),F=new aT(ne,bt,e,Fe),E=new tw(ne,bt),F.reversedDepthBuffer&&x&&E.buffers.depth.setReversed(!0),he=ne.createFramebuffer(),X=ne.createFramebuffer(),P=ne.createFramebuffer(),re=new mT(ne),pe=new GA,Se=new nw(ne,bt,E,pe,F,Fe,re),Oe=new fT(k),le=new _2(ne),je=new nT(ne,le),J=new hT(ne,le,re,je),ee=new xT(ne,J,le,je,re),Q=new gT(ne,F,Se),it=new sT(pe),De=new HA(k,Oe,bt,F,je,it),Pe=new cw(k,pe),ze=new VA,He=new ZA(bt),ft=new tT(k,Oe,E,ee,A,g),at=new ew(k,ee,F),Re=new uw(ne,re,F,E),Ie=new iT(ne,bt,re),Te=new pT(ne,bt,re),re.programs=De.programs,k.capabilities=F,k.extensions=bt,k.properties=pe,k.renderLists=ze,k.shadowMap=at,k.state=E,k.info=re}$e(),N!==di&&(z=new _T(N,i.width,i.height,p,l,c));const Ye=new ow(k,ne);this.xr=Ye,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const C=bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(q,ve,!1))},this.getSize=function(C){return C.set(q,ve)},this.setSize=function(C,ie,me=!0){if(Ye.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,ve=ie,i.width=Math.floor(C*_e),i.height=Math.floor(ie*_e),me===!0&&(i.style.width=C+"px",i.style.height=ie+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,C,ie)},this.getDrawingBufferSize=function(C){return C.set(q*_e,ve*_e).floor()},this.setDrawingBufferSize=function(C,ie,me){q=C,ve=ie,_e=me,i.width=Math.floor(C*me),i.height=Math.floor(ie*me),this.setViewport(0,0,C,ie)},this.setEffects=function(C){if(N===di){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let ie=0;ie<C.length;ie++)if(C[ie].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(Ue)},this.setViewport=function(C,ie,me,fe){C.isVector4?Ue.set(C.x,C.y,C.z,C.w):Ue.set(C,ie,me,fe),E.viewport(U.copy(Ue).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(Ne)},this.setScissor=function(C,ie,me,fe){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,ie,me,fe),E.scissor(K.copy(Ne).multiplyScalar(_e).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(C){E.setScissorTest(Le=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){be=C},this.getClearColor=function(C){return C.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(C=!0,ie=!0,me=!0){let fe=0;if(C){let de=!1;if(te!==null){const ke=te.texture.format;de=M.has(ke)}if(de){const ke=te.texture.type,qe=y.has(ke),Ge=ft.getClearColor(),Qe=ft.getClearAlpha(),Ze=Ge.r,st=Ge.g,pt=Ge.b;qe?(G[0]=Ze,G[1]=st,G[2]=pt,G[3]=Qe,ne.clearBufferuiv(ne.COLOR,0,G)):(L[0]=Ze,L[1]=st,L[2]=pt,L[3]=Qe,ne.clearBufferiv(ne.COLOR,0,L))}else fe|=ne.COLOR_BUFFER_BIT}ie&&(fe|=ne.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(fe|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),fe!==0&&ne.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),W=C},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Jn,!1),ft.dispose(),ze.dispose(),He.dispose(),pe.dispose(),Oe.dispose(),ee.dispose(),je.dispose(),Re.dispose(),De.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",pn),Ye.removeEventListener("sessionend",wn),Vn.stop()};function nn(C){C.preventDefault(),Nx("WebGLRenderer: Context Lost."),V=!0}function It(){Nx("WebGLRenderer: Context Restored."),V=!1;const C=re.autoReset,ie=at.enabled,me=at.autoUpdate,fe=at.needsUpdate,de=at.type;$e(),re.autoReset=C,at.enabled=ie,at.autoUpdate=me,at.needsUpdate=fe,at.type=de}function Jn(C){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $n(C){const ie=C.target;ie.removeEventListener("dispose",$n),Kr(ie)}function Kr(C){Qr(C),pe.remove(C)}function Qr(C){const ie=pe.get(C).programs;ie!==void 0&&(ie.forEach(function(me){De.releaseProgram(me)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,ie,me,fe,de,ke){ie===null&&(ie=jt);const qe=de.isMesh&&de.matrixWorld.determinantAffine()<0,Ge=Da(C,ie,me,fe,de);E.setMaterial(fe,qe);let Qe=me.index,Ze=1;if(fe.wireframe===!0){if(Qe=J.getWireframeAttribute(me),Qe===void 0)return;Ze=2}const st=me.drawRange,pt=me.attributes.position;let nt=st.start*Ze,Dt=(st.start+st.count)*Ze;ke!==null&&(nt=Math.max(nt,ke.start*Ze),Dt=Math.min(Dt,(ke.start+ke.count)*Ze)),Qe!==null?(nt=Math.max(nt,0),Dt=Math.min(Dt,Qe.count)):pt!=null&&(nt=Math.max(nt,0),Dt=Math.min(Dt,pt.count));const an=Dt-nt;if(an<0||an===1/0)return;je.setup(de,fe,Ge,me,Qe);let Qt,Bt=Ie;if(Qe!==null&&(Qt=le.get(Qe),Bt=Te,Bt.setIndex(Qt)),de.isMesh)fe.wireframe===!0?(E.setLineWidth(fe.wireframeLinewidth*tn()),Bt.setMode(ne.LINES)):Bt.setMode(ne.TRIANGLES);else if(de.isLine){let Ft=fe.linewidth;Ft===void 0&&(Ft=1),E.setLineWidth(Ft*tn()),de.isLineSegments?Bt.setMode(ne.LINES):de.isLineLoop?Bt.setMode(ne.LINE_LOOP):Bt.setMode(ne.LINE_STRIP)}else de.isPoints?Bt.setMode(ne.POINTS):de.isSprite&&Bt.setMode(ne.TRIANGLES);if(de.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const Ft=de._multiDrawStarts,Xe=de._multiDrawCounts,On=de._multiDrawCount,yt=Qe?le.get(Qe).bytesPerElement:1,yn=pe.get(fe).currentProgram.getUniforms();for(let ei=0;ei<On;ei++)yn.setValue(ne,"_gl_DrawID",ei),Bt.render(Ft[ei]/yt,Xe[ei])}else if(de.isInstancedMesh)Bt.renderInstances(nt,an,de.count);else if(me.isInstancedBufferGeometry){const Ft=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Xe=Math.min(me.instanceCount,Ft);Bt.renderInstances(nt,an,Xe)}else Bt.render(nt,an)};function Jr(C,ie,me){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Na(C,ie,me),C.side=us,C.needsUpdate=!0,Na(C,ie,me),C.side=Li):Na(C,ie,me)}this.compile=function(C,ie,me=null){me===null&&(me=C),D=He.get(me),D.init(ie),T.push(D),me.traverseVisible(function(de){de.isLight&&de.layers.test(ie.layers)&&(D.pushLight(de),de.castShadow&&D.pushShadow(de))}),C!==me&&C.traverseVisible(function(de){de.isLight&&de.layers.test(ie.layers)&&(D.pushLight(de),de.castShadow&&D.pushShadow(de))}),D.setupLights();const fe=new Set;return C.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const ke=de.material;if(ke)if(Array.isArray(ke))for(let qe=0;qe<ke.length;qe++){const Ge=ke[qe];Jr(Ge,me,de),fe.add(Ge)}else Jr(ke,me,de),fe.add(ke)}),D=T.pop(),fe},this.compileAsync=function(C,ie,me=null){const fe=this.compile(C,ie,me);return new Promise(de=>{function ke(){if(fe.forEach(function(qe){pe.get(qe).currentProgram.isReady()&&fe.delete(qe)}),fe.size===0){de(C);return}setTimeout(ke,10)}bt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Ws=null;function Ii(C){Ws&&Ws(C)}function pn(){Vn.stop()}function wn(){Vn.start()}const Vn=new __;Vn.setAnimationLoop(Ii),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(C){Ws=C,Ye.setAnimationLoop(C),C===null?Vn.stop():Vn.start()},Ye.addEventListener("sessionstart",pn),Ye.addEventListener("sessionend",wn),this.render=function(C,ie){if(ie!==void 0&&ie.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;W!==null&&W.renderStart(C,ie);const me=Ye.enabled===!0&&Ye.isPresenting===!0,fe=z!==null&&(te===null||me)&&z.begin(k,te);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(ie),ie=Ye.getCamera()),C.isScene===!0&&C.onBeforeRender(k,C,ie,te),D=He.get(C,T.length),D.init(ie),D.state.textureUnits=Se.getTextureUnits(),T.push(D),Yt.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),We.setFromProjectionMatrix(Yt,qi,ie.reversedDepth),lt=this.localClippingEnabled,Ke=it.init(this.clippingPlanes,lt),I=ze.get(C,B.length),I.init(),B.push(I),Ye.enabled===!0&&Ye.isPresenting===!0){const qe=k.xr.getDepthSensingMesh();qe!==null&&ds(qe,ie,-1/0,k.sortObjects)}ds(C,ie,0,k.sortObjects),I.finish(),k.sortObjects===!0&&I.sort(Ce,be,ie.reversedDepth),Rt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Rt&&ft.addToRenderList(I,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&it.beginShadows();const de=D.state.shadowsArray;if(at.render(de,C,ie),Ke===!0&&it.endShadows(),(fe&&z.hasRenderPass())===!1){const qe=I.opaque,Ge=I.transmissive;if(D.setupLights(),ie.isArrayCamera){const Qe=ie.cameras;if(Ge.length>0)for(let Ze=0,st=Qe.length;Ze<st;Ze++){const pt=Qe[Ze];pl(qe,Ge,C,pt)}Rt&&ft.render(C);for(let Ze=0,st=Qe.length;Ze<st;Ze++){const pt=Qe[Ze];hl(I,C,pt,pt.viewport)}}else Ge.length>0&&pl(qe,Ge,C,ie),Rt&&ft.render(C),hl(I,C,ie)}te!==null&&H===0&&(Se.updateMultisampleRenderTarget(te),Se.updateRenderTargetMipmap(te)),fe&&z.end(k),C.isScene===!0&&C.onAfterRender(k,C,ie),je.resetDefaultState(),oe=-1,xe=null,T.pop(),T.length>0?(D=T[T.length-1],Se.setTextureUnits(D.state.textureUnits),Ke===!0&&it.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,W!==null&&W.renderEnd()};function ds(C,ie,me,fe){if(C.visible===!1)return;if(C.layers.test(ie.layers)){if(C.isGroup)me=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ie);else if(C.isLightProbeGrid)D.pushLightProbeGrid(C);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||We.intersectsSprite(C)){fe&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Yt);const qe=ee.update(C),Ge=C.material;Ge.visible&&I.push(C,qe,Ge,me,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||We.intersectsObject(C))){const qe=ee.update(C),Ge=C.material;if(fe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Kt.copy(qe.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(Yt)),Array.isArray(Ge)){const Qe=qe.groups;for(let Ze=0,st=Qe.length;Ze<st;Ze++){const pt=Qe[Ze],nt=Ge[pt.materialIndex];nt&&nt.visible&&I.push(C,qe,nt,me,Kt.z,pt)}}else Ge.visible&&I.push(C,qe,Ge,me,Kt.z,null)}}const ke=C.children;for(let qe=0,Ge=ke.length;qe<Ge;qe++)ds(ke[qe],ie,me,fe)}function hl(C,ie,me,fe){const{opaque:de,transmissive:ke,transparent:qe}=C;D.setupLightsView(me),Ke===!0&&it.setGlobalState(k.clippingPlanes,me),fe&&E.viewport(U.copy(fe)),de.length>0&&hs(de,ie,me),ke.length>0&&hs(ke,ie,me),qe.length>0&&hs(qe,ie,me),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function pl(C,ie,me,fe){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[fe.id]===void 0){const nt=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[fe.id]=new Zi(1,1,{generateMipmaps:!0,type:nt?Aa:di,minFilter:Fs,samples:Math.max(4,F.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const ke=D.state.transmissionRenderTarget[fe.id],qe=fe.viewport||U;ke.setSize(qe.z*k.transmissionResolutionScale,qe.w*k.transmissionResolutionScale);const Ge=k.getRenderTarget(),Qe=k.getActiveCubeFace(),Ze=k.getActiveMipmapLevel();k.setRenderTarget(ke),k.getClearColor(ae),$=k.getClearAlpha(),$<1&&k.setClearColor(16777215,.5),k.clear(),Rt&&ft.render(me);const st=k.toneMapping;k.toneMapping=Yi;const pt=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),D.setupLightsView(fe),Ke===!0&&it.setGlobalState(k.clippingPlanes,fe),hs(C,me,fe),Se.updateMultisampleRenderTarget(ke),Se.updateRenderTargetMipmap(ke),bt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Dt=0,an=ie.length;Dt<an;Dt++){const Qt=ie[Dt],{object:Bt,geometry:Ft,material:Xe,group:On}=Qt;if(Xe.side===Li&&Bt.layers.test(fe.layers)){const yt=Xe.side;Xe.side=Qn,Xe.needsUpdate=!0,Ra(Bt,me,fe,Ft,Xe,On),Xe.side=yt,Xe.needsUpdate=!0,nt=!0}}nt===!0&&(Se.updateMultisampleRenderTarget(ke),Se.updateRenderTargetMipmap(ke))}k.setRenderTarget(Ge,Qe,Ze),k.setClearColor(ae,$),pt!==void 0&&(fe.viewport=pt),k.toneMapping=st}function hs(C,ie,me){const fe=ie.isScene===!0?ie.overrideMaterial:null;for(let de=0,ke=C.length;de<ke;de++){const qe=C[de],{object:Ge,geometry:Qe,group:Ze}=qe;let st=qe.material;st.allowOverride===!0&&fe!==null&&(st=fe),Ge.layers.test(me.layers)&&Ra(Ge,ie,me,Qe,st,Ze)}}function Ra(C,ie,me,fe,de,ke){C.onBeforeRender(k,ie,me,fe,de,ke),C.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),de.onBeforeRender(k,ie,me,fe,C,ke),de.transparent===!0&&de.side===Li&&de.forceSinglePass===!1?(de.side=Qn,de.needsUpdate=!0,k.renderBufferDirect(me,ie,fe,de,C,ke),de.side=us,de.needsUpdate=!0,k.renderBufferDirect(me,ie,fe,de,C,ke),de.side=Li):k.renderBufferDirect(me,ie,fe,de,C,ke),C.onAfterRender(k,ie,me,fe,de,ke)}function Na(C,ie,me){ie.isScene!==!0&&(ie=jt);const fe=pe.get(C),de=D.state.lights,ke=D.state.shadowsArray,qe=de.state.version,Ge=De.getParameters(C,de.state,ke,ie,me,D.state.lightProbeGridArray),Qe=De.getProgramCacheKey(Ge);let Ze=fe.programs;fe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?ie.environment:null,fe.fog=ie.fog;const st=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;fe.envMap=Oe.get(C.envMap||fe.environment,st),fe.envMapRotation=fe.environment!==null&&C.envMap===null?ie.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",$n),Ze=new Map,fe.programs=Ze);let pt=Ze.get(Qe);if(pt!==void 0){if(fe.currentProgram===pt&&fe.lightsStateVersion===qe)return $i(C,Ge),pt}else Ge.uniforms=De.getUniforms(C),W!==null&&C.isNodeMaterial&&W.build(C,me,Ge),C.onBeforeCompile(Ge,k),pt=De.acquireProgram(Ge,Qe),Ze.set(Qe,pt),fe.uniforms=Ge.uniforms;const nt=fe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=it.uniform),$i(C,Ge),fe.needsLights=ml(C),fe.lightsStateVersion=qe,fe.needsLights&&(nt.ambientLightColor.value=de.state.ambient,nt.lightProbe.value=de.state.probe,nt.directionalLights.value=de.state.directional,nt.directionalLightShadows.value=de.state.directionalShadow,nt.spotLights.value=de.state.spot,nt.spotLightShadows.value=de.state.spotShadow,nt.rectAreaLights.value=de.state.rectArea,nt.ltc_1.value=de.state.rectAreaLTC1,nt.ltc_2.value=de.state.rectAreaLTC2,nt.pointLights.value=de.state.point,nt.pointLightShadows.value=de.state.pointShadow,nt.hemisphereLights.value=de.state.hemi,nt.directionalShadowMatrix.value=de.state.directionalShadowMatrix,nt.spotLightMatrix.value=de.state.spotLightMatrix,nt.spotLightMap.value=de.state.spotLightMap,nt.pointShadowMatrix.value=de.state.pointShadowMatrix),fe.lightProbeGrid=D.state.lightProbeGridArray.length>0,fe.currentProgram=pt,fe.uniformsList=null,pt}function Ji(C){if(C.uniformsList===null){const ie=C.currentProgram.getUniforms();C.uniformsList=$c.seqWithValue(ie.seq,C.uniforms)}return C.uniformsList}function $i(C,ie){const me=pe.get(C);me.outputColorSpace=ie.outputColorSpace,me.batching=ie.batching,me.batchingColor=ie.batchingColor,me.instancing=ie.instancing,me.instancingColor=ie.instancingColor,me.instancingMorph=ie.instancingMorph,me.skinning=ie.skinning,me.morphTargets=ie.morphTargets,me.morphNormals=ie.morphNormals,me.morphColors=ie.morphColors,me.morphTargetsCount=ie.morphTargetsCount,me.numClippingPlanes=ie.numClippingPlanes,me.numIntersection=ie.numClipIntersection,me.vertexAlphas=ie.vertexAlphas,me.vertexTangents=ie.vertexTangents,me.toneMapping=ie.toneMapping}function ps(C,ie){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;w.setFromMatrixPosition(ie.matrixWorld);for(let me=0,fe=C.length;me<fe;me++){const de=C[me];if(de.texture!==null&&de.boundingBox.containsPoint(w))return de}return null}function Da(C,ie,me,fe,de){ie.isScene!==!0&&(ie=jt),Se.resetTextureUnits();const ke=ie.fog,qe=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial?ie.environment:null,Ge=te===null?k.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:wt.workingColorSpace,Qe=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial&&!fe.envMap||fe.isMeshPhongMaterial&&!fe.envMap,Ze=Oe.get(fe.envMap||qe,Qe),st=fe.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pt=!!me.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),nt=!!me.morphAttributes.position,Dt=!!me.morphAttributes.normal,an=!!me.morphAttributes.color;let Qt=Yi;fe.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Qt=k.toneMapping);const Bt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Ft=Bt!==void 0?Bt.length:0,Xe=pe.get(fe),On=D.state.lights;if(Ke===!0&&(lt===!0||C!==xe)){const zt=C===xe&&fe.id===oe;it.setState(fe,C,zt)}let yt=!1;fe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==On.state.version||Xe.outputColorSpace!==Ge||de.isBatchedMesh&&Xe.batching===!1||!de.isBatchedMesh&&Xe.batching===!0||de.isBatchedMesh&&Xe.batchingColor===!0&&de.colorTexture===null||de.isBatchedMesh&&Xe.batchingColor===!1&&de.colorTexture!==null||de.isInstancedMesh&&Xe.instancing===!1||!de.isInstancedMesh&&Xe.instancing===!0||de.isSkinnedMesh&&Xe.skinning===!1||!de.isSkinnedMesh&&Xe.skinning===!0||de.isInstancedMesh&&Xe.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&Xe.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&Xe.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&Xe.instancingMorph===!1&&de.morphTexture!==null||Xe.envMap!==Ze||fe.fog===!0&&Xe.fog!==ke||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==it.numPlanes||Xe.numIntersection!==it.numIntersection)||Xe.vertexAlphas!==st||Xe.vertexTangents!==pt||Xe.morphTargets!==nt||Xe.morphNormals!==Dt||Xe.morphColors!==an||Xe.toneMapping!==Qt||Xe.morphTargetsCount!==Ft||!!Xe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Xe.__version=fe.version);let yn=Xe.currentProgram;yt===!0&&(yn=Na(fe,ie,de),W&&fe.isNodeMaterial&&W.onUpdateProgram(fe,yn,Xe));let ei=!1,Ei=!1,ti=!1;const Ht=yn.getUniforms(),sn=Xe.uniforms;if(E.useProgram(yn.program)&&(ei=!0,Ei=!0,ti=!0),fe.id!==oe&&(oe=fe.id,Ei=!0),Xe.needsLights){const zt=ps(D.state.lightProbeGridArray,de);Xe.lightProbeGrid!==zt&&(Xe.lightProbeGrid=zt,Ei=!0)}if(ei||xe!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(ne,"projectionMatrix",C.projectionMatrix),Ht.setValue(ne,"viewMatrix",C.matrixWorldInverse);const Bi=Ht.map.cameraPosition;Bi!==void 0&&Bi.setValue(ne,Zt.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&Ht.setValue(ne,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Ht.setValue(ne,"isOrthographic",C.isOrthographicCamera===!0),xe!==C&&(xe=C,Ei=!0,ti=!0)}if(Xe.needsLights&&(On.state.directionalShadowMap.length>0&&Ht.setValue(ne,"directionalShadowMap",On.state.directionalShadowMap,Se),On.state.spotShadowMap.length>0&&Ht.setValue(ne,"spotShadowMap",On.state.spotShadowMap,Se),On.state.pointShadowMap.length>0&&Ht.setValue(ne,"pointShadowMap",On.state.pointShadowMap,Se)),de.isSkinnedMesh){Ht.setOptional(ne,de,"bindMatrix"),Ht.setOptional(ne,de,"bindMatrixInverse");const zt=de.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Ht.setValue(ne,"boneTexture",zt.boneTexture,Se))}de.isBatchedMesh&&(Ht.setOptional(ne,de,"batchingTexture"),Ht.setValue(ne,"batchingTexture",de._matricesTexture,Se),Ht.setOptional(ne,de,"batchingIdTexture"),Ht.setValue(ne,"batchingIdTexture",de._indirectTexture,Se),Ht.setOptional(ne,de,"batchingColorTexture"),de._colorsTexture!==null&&Ht.setValue(ne,"batchingColorTexture",de._colorsTexture,Se));const Ti=me.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Q.update(de,me,yn),(Ei||Xe.receiveShadow!==de.receiveShadow)&&(Xe.receiveShadow=de.receiveShadow,Ht.setValue(ne,"receiveShadow",de.receiveShadow)),(fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial)&&fe.envMap===null&&ie.environment!==null&&(sn.envMapIntensity.value=ie.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=dw()),Ei){if(Ht.setValue(ne,"toneMappingExposure",k.toneMappingExposure),Xe.needsLights&&mn(sn,ti),ke&&fe.fog===!0&&Pe.refreshFogUniforms(sn,ke),Pe.refreshMaterialUniforms(sn,fe,_e,ve,D.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.lightProbeGrid){const zt=Xe.lightProbeGrid;sn.probesSH.value=zt.texture,sn.probesMin.value.copy(zt.boundingBox.min),sn.probesMax.value.copy(zt.boundingBox.max),sn.probesResolution.value.copy(zt.resolution)}$c.upload(ne,Ji(Xe),sn,Se)}if(fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&($c.upload(ne,Ji(Xe),sn,Se),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Ht.setValue(ne,"center",de.center),Ht.setValue(ne,"modelViewMatrix",de.modelViewMatrix),Ht.setValue(ne,"normalMatrix",de.normalMatrix),Ht.setValue(ne,"modelMatrix",de.matrixWorld),fe.uniformsGroups!==void 0){const zt=fe.uniformsGroups;for(let Bi=0,Ua=zt.length;Bi<Ua;Bi++){const ms=zt[Bi];Re.update(ms,yn),Re.bind(ms,yn)}}return yn}function mn(C,ie){C.ambientLightColor.needsUpdate=ie,C.lightProbe.needsUpdate=ie,C.directionalLights.needsUpdate=ie,C.directionalLightShadows.needsUpdate=ie,C.pointLights.needsUpdate=ie,C.pointLightShadows.needsUpdate=ie,C.spotLights.needsUpdate=ie,C.spotLightShadows.needsUpdate=ie,C.rectAreaLights.needsUpdate=ie,C.hemisphereLights.needsUpdate=ie}function ml(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(C,ie,me){const fe=pe.get(C);fe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),pe.get(C.texture).__webglTexture=ie,pe.get(C.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:me,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ie){const me=pe.get(C);me.__webglFramebuffer=ie,me.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(C,ie=0,me=0){te=C,O=ie,H=me;let fe=null,de=!1,ke=!1;if(C){const Ge=pe.get(C);if(Ge.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(ne.FRAMEBUFFER,Ge.__webglFramebuffer),U.copy(C.viewport),K.copy(C.scissor),Me=C.scissorTest,E.viewport(U),E.scissor(K),E.setScissorTest(Me),oe=-1;return}else if(Ge.__webglFramebuffer===void 0)Se.setupRenderTarget(C);else if(Ge.__hasExternalTextures)Se.rebindTextures(C,pe.get(C.texture).__webglTexture,pe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const st=C.depthTexture;if(Ge.__boundDepthTexture!==st){if(st!==null&&pe.has(st)&&(C.width!==st.image.width||C.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(C)}}const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);const Ze=pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[ie])?fe=Ze[ie][me]:fe=Ze[ie],de=!0):C.samples>0&&Se.useMultisampledRTT(C)===!1?fe=pe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?fe=Ze[me]:fe=Ze,U.copy(C.viewport),K.copy(C.scissor),Me=C.scissorTest}else U.copy(Ue).multiplyScalar(_e).floor(),K.copy(Ne).multiplyScalar(_e).floor(),Me=Le;if(me!==0&&(fe=he),E.bindFramebuffer(ne.FRAMEBUFFER,fe)&&E.drawBuffers(C,fe),E.viewport(U),E.scissor(K),E.setScissorTest(Me),de){const Ge=pe.get(C.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ge.__webglTexture,me)}else if(ke){const Ge=ie;for(let Qe=0;Qe<C.textures.length;Qe++){const Ze=pe.get(C.textures[Qe]);ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0+Qe,Ze.__webglTexture,me,Ge)}}else if(C!==null&&me!==0){const Ge=pe.get(C.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,Ge.__webglTexture,me)}oe=-1},this.readRenderTargetPixels=function(C,ie,me,fe,de,ke,qe,Ge=0){if(!(C&&C.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe){E.bindFramebuffer(ne.FRAMEBUFFER,Qe);try{const Ze=C.textures[Ge],st=Ze.format,pt=Ze.type;if(C.textures.length>1&&ne.readBuffer(ne.COLOR_ATTACHMENT0+Ge),!F.textureFormatReadable(st)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(pt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=C.width-fe&&me>=0&&me<=C.height-de&&ne.readPixels(ie,me,fe,de,Fe.convert(st),Fe.convert(pt),ke)}finally{const Ze=te!==null?pe.get(te).__webglFramebuffer:null;E.bindFramebuffer(ne.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,ie,me,fe,de,ke,qe,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe)if(ie>=0&&ie<=C.width-fe&&me>=0&&me<=C.height-de){E.bindFramebuffer(ne.FRAMEBUFFER,Qe);const Ze=C.textures[Ge],st=Ze.format,pt=Ze.type;if(C.textures.length>1&&ne.readBuffer(ne.COLOR_ATTACHMENT0+Ge),!F.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=ne.createBuffer();ne.bindBuffer(ne.PIXEL_PACK_BUFFER,nt),ne.bufferData(ne.PIXEL_PACK_BUFFER,ke.byteLength,ne.STREAM_READ),ne.readPixels(ie,me,fe,de,Fe.convert(st),Fe.convert(pt),0);const Dt=te!==null?pe.get(te).__webglFramebuffer:null;E.bindFramebuffer(ne.FRAMEBUFFER,Dt);const an=ne.fenceSync(ne.SYNC_GPU_COMMANDS_COMPLETE,0);return ne.flush(),await dM(ne,an,4),ne.bindBuffer(ne.PIXEL_PACK_BUFFER,nt),ne.getBufferSubData(ne.PIXEL_PACK_BUFFER,0,ke),ne.deleteBuffer(nt),ne.deleteSync(an),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ie=null,me=0){const fe=Math.pow(2,-me),de=Math.floor(C.image.width*fe),ke=Math.floor(C.image.height*fe),qe=ie!==null?ie.x:0,Ge=ie!==null?ie.y:0;Se.setTexture2D(C,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,me,0,0,qe,Ge,de,ke),E.unbindTexture()},this.copyTextureToTexture=function(C,ie,me=null,fe=null,de=0,ke=0){let qe,Ge,Qe,Ze,st,pt,nt,Dt,an;const Qt=C.isCompressedTexture?C.mipmaps[ke]:C.image;if(me!==null)qe=me.max.x-me.min.x,Ge=me.max.y-me.min.y,Qe=me.isBox3?me.max.z-me.min.z:1,Ze=me.min.x,st=me.min.y,pt=me.isBox3?me.min.z:0;else{const sn=Math.pow(2,-de);qe=Math.floor(Qt.width*sn),Ge=Math.floor(Qt.height*sn),C.isDataArrayTexture?Qe=Qt.depth:C.isData3DTexture?Qe=Math.floor(Qt.depth*sn):Qe=1,Ze=0,st=0,pt=0}fe!==null?(nt=fe.x,Dt=fe.y,an=fe.z):(nt=0,Dt=0,an=0);const Bt=Fe.convert(ie.format),Ft=Fe.convert(ie.type);let Xe;ie.isData3DTexture?(Se.setTexture3D(ie,0),Xe=ne.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(Se.setTexture2DArray(ie,0),Xe=ne.TEXTURE_2D_ARRAY):(Se.setTexture2D(ie,0),Xe=ne.TEXTURE_2D),E.activeTexture(ne.TEXTURE0),E.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,ie.flipY),E.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),E.pixelStorei(ne.UNPACK_ALIGNMENT,ie.unpackAlignment);const On=E.getParameter(ne.UNPACK_ROW_LENGTH),yt=E.getParameter(ne.UNPACK_IMAGE_HEIGHT),yn=E.getParameter(ne.UNPACK_SKIP_PIXELS),ei=E.getParameter(ne.UNPACK_SKIP_ROWS),Ei=E.getParameter(ne.UNPACK_SKIP_IMAGES);E.pixelStorei(ne.UNPACK_ROW_LENGTH,Qt.width),E.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,Qt.height),E.pixelStorei(ne.UNPACK_SKIP_PIXELS,Ze),E.pixelStorei(ne.UNPACK_SKIP_ROWS,st),E.pixelStorei(ne.UNPACK_SKIP_IMAGES,pt);const ti=C.isDataArrayTexture||C.isData3DTexture,Ht=ie.isDataArrayTexture||ie.isData3DTexture;if(C.isDepthTexture){const sn=pe.get(C),Ti=pe.get(ie),zt=pe.get(sn.__renderTarget),Bi=pe.get(Ti.__renderTarget);E.bindFramebuffer(ne.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(ne.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Ua=0;Ua<Qe;Ua++)ti&&(ne.framebufferTextureLayer(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,pe.get(C).__webglTexture,de,pt+Ua),ne.framebufferTextureLayer(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,pe.get(ie).__webglTexture,ke,an+Ua)),ne.blitFramebuffer(Ze,st,qe,Ge,nt,Dt,qe,Ge,ne.DEPTH_BUFFER_BIT,ne.NEAREST);E.bindFramebuffer(ne.READ_FRAMEBUFFER,null),E.bindFramebuffer(ne.DRAW_FRAMEBUFFER,null)}else if(de!==0||C.isRenderTargetTexture||pe.has(C)){const sn=pe.get(C),Ti=pe.get(ie);E.bindFramebuffer(ne.READ_FRAMEBUFFER,X),E.bindFramebuffer(ne.DRAW_FRAMEBUFFER,P);for(let zt=0;zt<Qe;zt++)ti?ne.framebufferTextureLayer(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,sn.__webglTexture,de,pt+zt):ne.framebufferTexture2D(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,sn.__webglTexture,de),Ht?ne.framebufferTextureLayer(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Ti.__webglTexture,ke,an+zt):ne.framebufferTexture2D(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,Ti.__webglTexture,ke),de!==0?ne.blitFramebuffer(Ze,st,qe,Ge,nt,Dt,qe,Ge,ne.COLOR_BUFFER_BIT,ne.NEAREST):Ht?ne.copyTexSubImage3D(Xe,ke,nt,Dt,an+zt,Ze,st,qe,Ge):ne.copyTexSubImage2D(Xe,ke,nt,Dt,Ze,st,qe,Ge);E.bindFramebuffer(ne.READ_FRAMEBUFFER,null),E.bindFramebuffer(ne.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?ne.texSubImage3D(Xe,ke,nt,Dt,an,qe,Ge,Qe,Bt,Ft,Qt.data):ie.isCompressedArrayTexture?ne.compressedTexSubImage3D(Xe,ke,nt,Dt,an,qe,Ge,Qe,Bt,Qt.data):ne.texSubImage3D(Xe,ke,nt,Dt,an,qe,Ge,Qe,Bt,Ft,Qt):C.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,ke,nt,Dt,qe,Ge,Bt,Ft,Qt.data):C.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,ke,nt,Dt,Qt.width,Qt.height,Bt,Qt.data):ne.texSubImage2D(ne.TEXTURE_2D,ke,nt,Dt,qe,Ge,Bt,Ft,Qt);E.pixelStorei(ne.UNPACK_ROW_LENGTH,On),E.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,yt),E.pixelStorei(ne.UNPACK_SKIP_PIXELS,yn),E.pixelStorei(ne.UNPACK_SKIP_ROWS,ei),E.pixelStorei(ne.UNPACK_SKIP_IMAGES,Ei),ke===0&&ie.generateMipmaps&&ne.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(C){pe.get(C).__webglFramebuffer===void 0&&Se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Se.setTextureCube(C,0):C.isData3DTexture?Se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Se.setTexture2DArray(C,0):Se.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){O=0,H=0,te=null,E.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const ph=({product:r,canvasElement:e,canvasVersion:i})=>{const s=Be.useRef(null),l=Be.useRef(null),c=Be.useRef(null),f=Be.useRef(null),p=Be.useRef(null),g=Be.useRef(null),m=Be.useRef(null),v=Be.useRef(null),_=Be.useRef(!1),x=Be.useRef({x:0,y:0}),[b,A]=Be.useState("#ffffff"),[N,M]=Be.useState(!1),[y,G]=Be.useState({hdri:"studio",showShadows:!0,showReflections:!0,ambientOcclusion:!0,depthOfField:0,autoRotate:!0,showBleedLine:!1,roughness:.1,metalness:.05}),[L,w]=Be.useState("front"),I=Be.useRef(null);Be.useEffect(()=>{if(!s.current)return;const X=s.current.clientWidth,P=s.current.clientHeight,O=new CM;O.background=new vt("#141415"),c.current=O;const H=new Si(45,X/P,.1,100);H.position.set(0,.5,4.2),H.lookAt(0,0,0),f.current=H;const te=new hw({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});for(te.setSize(X,P),te.setPixelRatio(Math.min(window.devicePixelRatio,2)),te.shadowMap.enabled=!0,te.shadowMap.type=tl,te.toneMapping=up,te.toneMappingExposure=1.1;s.current.firstChild;)s.current.removeChild(s.current.firstChild);s.current.appendChild(te.domElement),l.current=te,B(O,y.hdri);const oe=new dl(10,10),xe=new i2({opacity:.25}),U=new Pt(oe,xe);U.rotation.x=-Math.PI/2,U.position.y=-1.15,U.receiveShadow=!0,g.current=U,O.add(U),T();const K=()=>{v.current=requestAnimationFrame(K),p.current&&y.autoRotate&&!_.current&&(p.current.rotation.y+=.006),te.render(O,H)};K();let Me=null;const ae=()=>{Me!==null&&cancelAnimationFrame(Me),Me=requestAnimationFrame(()=>{if(Me=null,!s.current||!l.current||!f.current)return;const q=s.current.clientWidth,ve=s.current.clientHeight;if(q<=0||ve<=0)return;const _e=q/ve;f.current.aspect=_e,_e<1?f.current.fov=Math.min(60,42/_e):f.current.fov=42,f.current.updateProjectionMatrix(),l.current.setSize(q,ve,!1)})};ae();const $=new ResizeObserver(ae);return s.current&&$.observe(s.current),()=>{var q;if($.disconnect(),Me!==null&&cancelAnimationFrame(Me),v.current&&cancelAnimationFrame(v.current),l.current&&(l.current.domElement&&((q=s.current)!=null&&q.contains(l.current.domElement))&&s.current.removeChild(l.current.domElement),l.current.forceContextLoss(),l.current.dispose(),l.current=null),s.current)for(;s.current.firstChild;)s.current.removeChild(s.current.firstChild);m.current&&(m.current.dispose(),m.current=null)}},[]),Be.useEffect(()=>{T()},[r,y.roughness,y.metalness,y.showBleedLine,b]),Be.useEffect(()=>{c.current&&B(c.current,y.hdri)},[y.hdri]),Be.useEffect(()=>{var O;if(!e||!p.current)return;I.current||(I.current=document.createElement("canvas"));const X=I.current;(X.width!==e.width||X.height!==e.height)&&(X.width=e.width,X.height=e.height);const P=X.getContext("2d");if(P&&(P.clearRect(0,0,X.width,X.height),P.drawImage(e,0,0)),m.current)m.current.needsUpdate=!0,D(m.current);else{const H=new HM(X);H.wrapS=ol,H.wrapT=ol,H.colorSpace=fi,H.anisotropy=((O=l.current)==null?void 0:O.capabilities.getMaxAnisotropy())||8,H.needsUpdate=!0,m.current=H,D(H)}},[i,e,r]);const D=X=>{p.current&&p.current.traverse(P=>{P instanceof Pt&&P.userData.isPrintArea&&(P.material.map=X,P.material.needsUpdate=!0)})},B=(X,P)=>{const O=[];X.traverse(ae=>{ae instanceof fu&&O.push(ae)}),O.forEach(ae=>X.remove(ae));let H=16777215,te=14739455,oe="#141415";P==="outdoor"?(H=16775917,te=14412542,oe="#181d28"):P==="neon"?(H=16007006,te=440020,oe="#0b0c10"):P==="warm"&&(H=16638023,te=16347926,oe="#1c1917"),X.background=new vt(oe);const xe=new p2(16777215,.7);X.add(xe);const U=new oh(H,1.8);U.position.set(3,4,3),U.castShadow=!0,U.shadow.mapSize.width=1024,U.shadow.mapSize.height=1024,X.add(U);const K=new oh(te,.9);K.position.set(-3,2,-2),X.add(K);const Me=new oh(16777215,.8);Me.position.set(0,3,-4),X.add(Me)},T=()=>{if(!c.current)return;const X=[];c.current.children.forEach(oe=>{!(oe instanceof fu)&&oe!==g.current&&X.push(oe)}),X.forEach(oe=>{var xe;(xe=c.current)==null||xe.remove(oe),oe.traverse(U=>{U instanceof Pt&&(U.geometry&&U.geometry.dispose(),U.material&&(Array.isArray(U.material)?U.material.forEach(K=>K.dispose()):U.material.dispose()))})}),p.current=null;const P=new Jo;P.userData.isProductGroup=!0;const O={roughness:y.roughness,metalness:y.metalness,side:Li},H=new Br({color:r.bgColor||16777215,...O}),te=new Br({color:16777215,map:m.current||null,roughness:y.roughness*.8,metalness:y.metalness,side:Li});switch(r.model3D){case"mug":{const oe=r.bgColor||"#ffffff",xe=b||"#ffffff",U=new Br({color:oe,roughness:.1,metalness:.05}),K=new Br({color:xe,roughness:.12,metalness:.04}),Me=new Sa(.84,.84,1.95,64,1,!0),ae=new Pt(Me,te);ae.userData.isPrintArea=!0,ae.castShadow=!0,ae.receiveShadow=!0,ae.rotation.y=Math.PI/2,P.add(ae);const $=new Sa(.76,.76,1.88,64,1,!1),q=new Pt($,K);q.position.y=.035,P.add(q);const ve=new cu(.8,.04,16,64),_e=new Pt(ve,K);_e.rotation.x=Math.PI/2,_e.position.y=.975,P.add(_e);const Ce=new yp(.84,64),be=new Pt(Ce,U);be.rotation.x=Math.PI/2,be.position.y=-.975,P.add(be);const Ue=new g_(new Z(-.8,.58,0),new Z(-1.52,.7,0),new Z(-1.52,-.7,0),new Z(-.8,-.58,0)),Ne=new uu(Ue,36,.095,16,!1),Le=new Pt(Ne,K);Le.castShadow=!0,Le.receiveShadow=!0,P.add(Le);break}case"tshirt":{const oe=new Ui(1.6,2.1,.25,16,16,4),xe=new Pt(oe,te);xe.userData.isPrintArea=!0,xe.castShadow=!0,P.add(xe);const U=new Sa(.22,.26,.6,16),K=new Pt(U,H);K.position.set(-.98,.75,0),K.rotation.z=Math.PI/4,P.add(K);const Me=new Sa(.22,.26,.6,16),ae=new Pt(Me,H);ae.position.set(.98,.75,0),ae.rotation.z=-Math.PI/4,P.add(ae);const $=new cu(.32,.05,12,24),q=new Pt($,H);q.position.set(0,1,0),q.rotation.x=Math.PI/2,P.add(q);break}case"bottle":case"tumbler":{const oe=r.model3D==="tumbler"?2.2:2,xe=new Sa(.6,.6,oe,48),U=new Pt(xe,te);U.userData.isPrintArea=!0,U.castShadow=!0,P.add(U);const K=new Sa(.5,.58,.3,32),Me=new Br({color:13751771,metalness:.9,roughness:.1}),ae=new Pt(K,Me);if(ae.position.y=oe/2+.15,P.add(ae),r.model3D==="tumbler"){const $=new Sa(.04,.04,.8,12),q=new c2({color:16777215,transmission:.9,opacity:1,transparent:!0,roughness:0}),ve=new Pt($,q);ve.position.set(.15,oe/2+.5,0),P.add(ve)}break}case"mousepad":{const oe=new Ui(2.8,1.4,.04),xe=new Pt(oe,te);xe.userData.isPrintArea=!0,xe.rotation.x=.3,xe.castShadow=!0,P.add(xe);break}case"ecobag":{const oe=new Ui(1.6,2,.15),xe=new Pt(oe,te);xe.userData.isPrintArea=!0,xe.castShadow=!0,P.add(xe);const U=new Mp(new Z(-.4,1,0),new Z(0,1.8,0),new Z(.4,1,0)),K=new uu(U,20,.04,8,!1),Me=new Pt(K,H);Me.position.z=.08,P.add(Me);const ae=new Pt(K,H);ae.position.z=-.08,P.add(ae);break}case"tile":case"puzzle":case"coaster":{const oe=new Ui(1.8,1.8,.08),xe=new Pt(oe,te);xe.userData.isPrintArea=!0,xe.rotation.x=.2,xe.castShadow=!0,P.add(xe);break}case"pillow":{const oe=new Ui(1.8,1.8,.5,12,12,6),xe=new Pt(oe,te);xe.userData.isPrintArea=!0,xe.castShadow=!0,P.add(xe);break}default:{const oe=new Ui(1.6,1.6,1.6),xe=new Pt(oe,te);xe.userData.isPrintArea=!0,xe.castShadow=!0,P.add(xe)}}if(y.showBleedLine){const oe=new x2(P,15680580);P.add(oe)}P.position.y=-.1,p.current=P,c.current.add(P),m.current&&D(m.current)},z=X=>{_.current=!0,x.current={x:X.clientX,y:X.clientY}},k=X=>{if(!_.current||!p.current)return;const P=X.clientX-x.current.x,O=X.clientY-x.current.y;p.current.rotation.y+=P*.01,p.current.rotation.x+=O*.01,p.current.rotation.x=Math.max(-Math.PI/6,Math.min(Math.PI/6,p.current.rotation.x)),x.current={x:X.clientX,y:X.clientY}},V=()=>{_.current=!1},W=X=>{if(w(X),!(!p.current||!f.current)){switch(p.current.rotation.set(0,0,0),X){case"front":f.current.position.set(0,.2,3.8);break;case"back":p.current.rotation.y=Math.PI,f.current.position.set(0,.2,3.8);break;case"side":p.current.rotation.y=Math.PI/2,f.current.position.set(0,.2,3.8);break;case"top":f.current.position.set(0,3.8,.1);break;case"iso":p.current.rotation.y=Math.PI/4,p.current.rotation.x=Math.PI/12,f.current.position.set(0,.2,3.8);break}f.current.lookAt(0,0,0)}},he=X=>{if(!f.current)return;const P=X.deltaY*.0025;f.current.position.z=Math.max(2.2,Math.min(7,f.current.position.z+P))};return h.jsxs("div",{className:`relative flex flex-col bg-[#141415] border border-[#2d2d30] rounded-xl overflow-hidden select-none transition-all duration-300 ${N?"fixed inset-4 z-50 shadow-2xl":"w-full h-full min-h-[360px]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-[#1e1e20] border-b border-[#2d2d30] text-xs text-gray-300",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Gs,{className:"w-4 h-4 text-sky-400"}),h.jsx("span",{className:"font-semibold tracking-wide text-white",children:"PRO 3D MOCKUP STAGER"}),h.jsx("span",{className:"px-2 py-0.5 text-[10px] bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded-full font-mono",children:r.name})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"flex items-center bg-[#121214] p-0.5 rounded-lg border border-[#2d2d30]",children:["front","side","back","top","iso"].map(X=>h.jsx("button",{onClick:()=>W(X),className:`px-2 py-1 text-[10px] font-medium rounded capitalize transition-all ${L===X?"bg-sky-600 text-white shadow":"text-gray-400 hover:text-white hover:bg-white/5"}`,children:X},X))}),h.jsx("button",{onClick:()=>G(X=>({...X,autoRotate:!X.autoRotate})),className:`p-1.5 rounded-md border transition-all ${y.autoRotate?"bg-sky-500/20 border-sky-500/40 text-sky-300":"border-[#38383c] text-gray-400 hover:text-white"}`,title:"Auto-Rotate 360°",children:h.jsx(pu,{className:`w-3.5 h-3.5 ${y.autoRotate?"animate-spin":""}`})}),h.jsx("button",{onClick:()=>M(!N),className:"p-1.5 rounded-md border border-[#38383c] text-gray-400 hover:text-white hover:bg-white/5",title:"Toggle Fullscreen Viewport",children:h.jsx(hu,{className:"w-3.5 h-3.5"})})]})]}),h.jsx("div",{ref:s,onMouseDown:z,onMouseMove:k,onMouseUp:V,onMouseLeave:V,onWheel:he,className:"relative flex-1 w-full h-full cursor-grab active:cursor-grabbing",children:h.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2 bg-[#18181c]/80 backdrop-blur-md rounded-lg border border-white/10 text-xs text-gray-300",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(Gv,{className:"w-3.5 h-3.5 text-amber-400"}),h.jsxs("select",{value:y.hdri,onChange:X=>G(P=>({...P,hdri:X.target.value})),className:"bg-[#121214] text-white text-[11px] px-2 py-1 rounded border border-[#2d2d30] focus:outline-none",children:[h.jsx("option",{value:"studio",children:"Estúdio Neutro"}),h.jsx("option",{value:"outdoor",children:"Luz Natural / Sol"}),h.jsx("option",{value:"neon",children:"Estúdio Cyber Neon"}),h.jsx("option",{value:"warm",children:"Ambiente Quente Workshop"})]})]}),r.model3D==="mug"&&h.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-white/10",children:[h.jsx("span",{className:"text-[10px] text-gray-400 hidden md:inline",children:"Interior/Alça:"}),h.jsx("div",{className:"flex items-center gap-1",children:[{color:"#ffffff",label:"Branca Total"},{color:"#1e293b",label:"Preta"},{color:"#ef4444",label:"Vermelha"},{color:"#2563eb",label:"Azul"},{color:"#ec4899",label:"Rosa"},{color:"#eab308",label:"Amarela"},{color:"#10b981",label:"Verde"}].map(X=>h.jsx("button",{onClick:()=>A(X.color),className:`w-4 h-4 rounded-full border transition-all ${b===X.color?"ring-2 ring-sky-400 scale-110 border-white":"border-black/30"}`,style:{backgroundColor:X.color},title:`Caneca com interior e alça: ${X.label}`},X.color))})]}),h.jsxs("div",{className:"hidden lg:flex items-center gap-2 text-[11px]",children:[h.jsx("span",{className:"text-gray-400",children:"Resinado Gloss:"}),h.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:1-y.roughness,onChange:X=>G(P=>({...P,roughness:1-parseFloat(X.target.value)})),className:"w-16 accent-sky-500 cursor-pointer"})]})]}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("button",{onClick:()=>G(X=>({...X,showBleedLine:!X.showBleedLine})),className:`px-2 py-1 text-[10px] rounded border transition-all ${y.showBleedLine?"bg-rose-500/20 text-rose-300 border-rose-500/40":"bg-white/5 border-white/10 text-gray-400 hover:text-white"}`,children:"Área Sangria Imprimível"})})]})})]})},pw=({layers:r,activeLayerId:e,onSelectLayer:i,onAddLayer:s,onDeleteLayer:l,onDuplicateLayer:c,onToggleVisibility:f,onToggleLock:p,onUpdateLayer:g,onReorderLayers:m,theme:v="dark"})=>{var G,L,w,I,D,B,T,z;const[_,x]=Be.useState("layers"),b=r.find(k=>k.id===e),A=[{value:"normal",label:"Normal"},{value:"multiply",label:"Multiplicação"},{value:"screen",label:"Divisão / Screen"},{value:"overlay",label:"Sobrepor / Overlay"},{value:"soft-light",label:"Luz Suave"},{value:"hard-light",label:"Luz Direta"},{value:"color-burn",label:"Superexposição de Cor"},{value:"color-dodge",label:"Subexposição de Cor"},{value:"darken",label:"Escurecer"},{value:"lighten",label:"Clarear"},{value:"difference",label:"Diferença"}],N=k=>{if(k>=r.length-1)return;const V=[...r],W=V[k];V[k]=V[k+1],V[k+1]=W,m(V)},M=k=>{if(k<=0)return;const V=[...r],W=V[k];V[k]=V[k-1],V[k-1]=W,m(V)},y=(k,V)=>{if(!b)return;const W=b.filters||{brightness:0,contrast:0,saturation:0,hue:0,blur:0,vibrance:0};g({...b,filters:{...W,[k]:V}})};return h.jsxs("div",{className:`flex flex-col h-full text-xs select-none border-l transition-colors ${v==="light"?"bg-white text-slate-800 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center border-b ${v==="light"?"border-slate-200 bg-slate-50":"border-[#2d2d30] bg-[#18181a]"}`,children:[h.jsxs("button",{onClick:()=>x("layers"),className:`flex-1 py-2 text-center font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${_==="layers"?v==="light"?"text-purple-700 border-b-2 border-purple-600 bg-white":"text-sky-400 border-b-2 border-sky-500 bg-[#1e1e20]":v==="light"?"text-slate-500 hover:text-slate-900":"text-gray-400 hover:text-gray-200"}`,children:[h.jsx(op,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["Camadas (",r.length,")"]})]}),h.jsxs("button",{onClick:()=>x("adjustments"),className:`flex-1 py-2 text-center font-semibold transition-colors flex items-center justify-center gap-1.5 ${_==="adjustments"?"text-sky-400 border-b-2 border-sky-500 bg-[#1e1e20]":"text-gray-400 hover:text-gray-200"}`,children:[h.jsx(dS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Ajustes"})]})]}),_==="layers"?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"p-2.5 border-b border-[#2d2d30] flex flex-col gap-2 bg-[#18181a]/50",children:[h.jsxs("div",{className:"flex items-center justify-between gap-2",children:[h.jsx("span",{className:"text-[11px] font-medium text-gray-400",children:"Modo Mesclagem:"}),h.jsx("select",{disabled:!b,value:(b==null?void 0:b.blendMode)||"normal",onChange:k=>b&&g({...b,blendMode:k.target.value}),className:"bg-[#121214] text-white text-[11px] px-2 py-1 rounded-md border border-[#38383c] focus:outline-none flex-1 font-medium disabled:opacity-40",children:A.map(k=>h.jsx("option",{value:k.value,children:k.label},k.value))})]}),h.jsxs("div",{className:"flex items-center justify-between gap-2",children:[h.jsx("span",{className:"text-[11px] font-medium text-gray-400",children:"Opacidade:"}),h.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[h.jsx("input",{type:"range",min:"0",max:"100",disabled:!b,value:(b==null?void 0:b.opacity)??100,onChange:k=>b&&g({...b,opacity:parseInt(k.target.value)}),className:"w-full accent-sky-500 cursor-pointer disabled:opacity-40"}),h.jsxs("span",{className:"font-mono text-[10px] w-8 text-right text-sky-400",children:[(b==null?void 0:b.opacity)??100,"%"]})]})]})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-2 flex flex-col gap-1",children:r.length===0?h.jsx("div",{className:"p-4 text-center text-gray-500 font-mono text-[11px]",children:"Nenhuma camada criada. Adicione imagens, textos ou formas."}):[...r].reverse().map((k,V)=>{const W=r.length-1-V,he=e===k.id;return h.jsxs("div",{onClick:()=>i(k.id),className:`flex items-center gap-2 px-2.5 py-2 rounded-lg border cursor-pointer transition-all ${he?"bg-sky-600/20 border-sky-500 text-white font-semibold shadow-sm":"bg-[#18181a] border-[#2d2d30] hover:bg-[#252528] text-gray-300"}`,children:[h.jsx("button",{onClick:X=>{X.stopPropagation(),f(k.id)},className:"text-gray-400 hover:text-white",children:k.visible?h.jsx(Ov,{className:"w-3.5 h-3.5 text-sky-400"}):h.jsx(Lv,{className:"w-3.5 h-3.5 text-rose-400 opacity-60"})}),h.jsxs("div",{className:"w-6 h-6 rounded bg-[#121214] border border-[#38383c] flex items-center justify-center text-gray-300 shrink-0",children:[k.type==="text"&&h.jsx(sl,{className:"w-3.5 h-3.5 text-emerald-400"}),k.type==="shape"&&h.jsx(lp,{className:"w-3.5 h-3.5 text-amber-400"}),k.type==="brush"&&h.jsx(Vy,{className:"w-3.5 h-3.5 text-indigo-400"}),k.type==="image"&&h.jsx(Dy,{className:"w-3.5 h-3.5 text-purple-400"}),k.type==="smart"&&h.jsx(Gs,{className:"w-3.5 h-3.5 text-sky-400"})]}),h.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"truncate text-[12px]",children:k.name}),k.isSmartObject&&h.jsx("span",{className:"px-1 py-0.2 bg-sky-500/20 text-sky-300 text-[8px] rounded font-mono",children:"SMART"})]}),h.jsxs("span",{className:"text-[9px] text-gray-500 font-mono capitalize",children:[k.type," • ",k.blendMode]})]}),h.jsx("button",{onClick:X=>{X.stopPropagation(),p(k.id)},className:"text-gray-400 hover:text-white",children:k.locked?h.jsx(Bv,{className:"w-3.5 h-3.5 text-amber-400"}):h.jsx(Iv,{className:"w-3.5 h-3.5 text-gray-500 hover:text-gray-300"})}),h.jsxs("div",{className:"flex flex-col gap-0.5 opacity-60 hover:opacity-100",children:[h.jsx("button",{onClick:X=>{X.stopPropagation(),N(W)},className:"text-gray-400 hover:text-white",children:h.jsx(Jb,{className:"w-3 h-3"})}),h.jsx("button",{onClick:X=>{X.stopPropagation(),M(W)},className:"text-gray-400 hover:text-white",children:h.jsx(Nv,{className:"w-3 h-3"})})]})]},k.id)})}),h.jsxs("div",{className:"p-2 border-t border-[#2d2d30] bg-[#18181a] flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsxs("button",{onClick:()=>s("text"),className:"px-2 py-1 bg-[#252528] hover:bg-[#323236] border border-[#38383c] rounded text-gray-200 flex items-center gap-1",title:"Adicionar Texto",children:[h.jsx(Fr,{className:"w-3 h-3 text-sky-400"}),h.jsx("span",{children:"Texto"})]}),h.jsxs("button",{onClick:()=>s("shape"),className:"px-2 py-1 bg-[#252528] hover:bg-[#323236] border border-[#38383c] rounded text-gray-200 flex items-center gap-1",title:"Adicionar Forma",children:[h.jsx(Fr,{className:"w-3 h-3 text-amber-400"}),h.jsx("span",{children:"Forma"})]})]}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("button",{disabled:!e,onClick:()=>e&&c(e),className:"p-1.5 bg-[#252528] hover:bg-[#323236] border border-[#38383c] rounded text-gray-300 hover:text-white disabled:opacity-30",title:"Duplicar Camada",children:h.jsx(tu,{className:"w-3.5 h-3.5"})}),h.jsx("button",{disabled:!e,onClick:()=>e&&l(e),className:"p-1.5 bg-[#252528] hover:bg-rose-900/40 border border-[#38383c] rounded text-rose-400 hover:text-rose-200 disabled:opacity-30",title:"Excluir Camada",children:h.jsx(al,{className:"w-3.5 h-3.5"})})]})]})]}):h.jsx("div",{className:"p-3 flex flex-col gap-4 overflow-y-auto flex-1",children:b?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"text-[11px] font-semibold text-sky-400 uppercase tracking-wider",children:["Ajustes da Camada: ",b.name]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex justify-between text-[11px]",children:[h.jsx("span",{children:"Brilho"}),h.jsx("span",{className:"font-mono text-sky-400",children:((G=b.filters)==null?void 0:G.brightness)||0})]}),h.jsx("input",{type:"range",min:"-100",max:"100",value:((L=b.filters)==null?void 0:L.brightness)||0,onChange:k=>y("brightness",parseInt(k.target.value)),className:"accent-sky-500 cursor-pointer"})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex justify-between text-[11px]",children:[h.jsx("span",{children:"Contraste"}),h.jsx("span",{className:"font-mono text-sky-400",children:((w=b.filters)==null?void 0:w.contrast)||0})]}),h.jsx("input",{type:"range",min:"-100",max:"100",value:((I=b.filters)==null?void 0:I.contrast)||0,onChange:k=>y("contrast",parseInt(k.target.value)),className:"accent-sky-500 cursor-pointer"})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex justify-between text-[11px]",children:[h.jsx("span",{children:"Saturação de Cores Sublimáticas"}),h.jsx("span",{className:"font-mono text-sky-400",children:((D=b.filters)==null?void 0:D.saturation)||0})]}),h.jsx("input",{type:"range",min:"-100",max:"100",value:((B=b.filters)==null?void 0:B.saturation)||0,onChange:k=>y("saturation",parseInt(k.target.value)),className:"accent-sky-500 cursor-pointer"})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex justify-between text-[11px]",children:[h.jsx("span",{children:"Matiz / Tonalidade (Hue)"}),h.jsxs("span",{className:"font-mono text-sky-400",children:[((T=b.filters)==null?void 0:T.hue)||0,"°"]})]}),h.jsx("input",{type:"range",min:"-180",max:"180",value:((z=b.filters)==null?void 0:z.hue)||0,onChange:k=>y("hue",parseInt(k.target.value)),className:"accent-sky-500 cursor-pointer"})]}),h.jsxs("button",{onClick:()=>g({...b,isSmartObject:!b.isSmartObject}),className:"mt-2 py-2 px-3 bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 rounded-lg text-sky-300 font-semibold flex items-center justify-center gap-2",children:[h.jsx(Gs,{className:"w-4 h-4"}),h.jsx("span",{children:b.isSmartObject?"Rasterizar Objeto Inteligente":"Converter em Objeto Inteligente"})]})]}):h.jsx("div",{className:"p-4 text-center text-gray-500 font-mono text-[11px]",children:"Selecione uma camada para aplicar ajustes de imagem."})})]})},mw=({historySteps:r,currentHistoryIndex:e,onJumpToHistoryStep:i,theme:s="dark"})=>h.jsxs("div",{className:`flex flex-col h-full text-xs select-none border-l transition-colors ${s==="light"?"bg-white text-slate-800 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`px-3 py-2 border-b flex items-center gap-2 font-semibold ${s==="light"?"border-slate-200 bg-slate-50 text-purple-700":"border-[#2d2d30] bg-[#18181a] text-sky-400"}`,children:[h.jsx(zv,{className:"w-4 h-4"}),h.jsxs("span",{children:["Histórico de Edições (",r.length,")"]})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-2 flex flex-col gap-1",children:r.length===0?h.jsx("div",{className:"p-4 text-center text-gray-500 font-mono text-[11px]",children:"Nenhuma ação registrada no histórico."}):r.map((l,c)=>{const f=c===e,p=c>e;return h.jsxs("button",{onClick:()=>i(c),className:`flex items-center gap-2.5 px-3 py-2 rounded-lg border text-left transition-all ${f?"bg-sky-600/30 border-sky-500 text-white font-semibold shadow-sm":p?"bg-[#18181a]/40 border-[#2b2b2e] text-gray-500 hover:text-gray-300":"bg-[#18181a] border-[#2d2d30] text-gray-300 hover:bg-[#252528]"}`,children:[h.jsx("div",{className:"w-5 h-5 rounded bg-[#121214] border border-[#38383c] flex items-center justify-center shrink-0",children:l.toolName.includes("IA")?h.jsx(zi,{className:"w-3 h-3 text-purple-400"}):l.toolName.includes("Texto")?h.jsx(sl,{className:"w-3 h-3 text-emerald-400"}):h.jsx(ry,{className:"w-3 h-3 text-sky-400"})}),h.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[h.jsx("span",{className:"truncate text-[11px]",children:l.description}),h.jsx("span",{className:"text-[9px] text-gray-500 font-mono",children:new Date(l.timestamp).toLocaleTimeString()})]}),f&&h.jsx("span",{className:"w-2 h-2 rounded-full bg-sky-400 animate-pulse"})]},l.id)})})]}),gw=({activeLayer:r,onUpdateLayer:e,product:i,onApplyPresetTemplate:s,onDeleteLayer:l,onDuplicateLayer:c,theme:f="dark"})=>r?h.jsxs("div",{className:`flex flex-col h-full text-xs p-3 overflow-y-auto select-none gap-4 border-l transition-colors ${f==="light"?"bg-white text-slate-800 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-2 border-b ${f==="light"?"border-slate-200":"border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center gap-2 font-semibold ${f==="light"?"text-purple-700":"text-sky-400"}`,children:[h.jsx(mh,{className:"w-4 h-4"}),h.jsxs("span",{className:"truncate max-w-[120px]",children:["Propriedades: ",r.name]})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[c&&h.jsx("button",{onClick:()=>c(r.id),className:"p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors",title:"Duplicar Camada",children:h.jsx(tu,{className:"w-3.5 h-3.5"})}),l&&h.jsx("button",{onClick:()=>l(r.id),className:"p-1 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded transition-colors",title:"Excluir Elemento (Tecla Del)",children:h.jsx(al,{className:"w-3.5 h-3.5"})}),h.jsx("span",{className:"px-1.5 py-0.5 bg-sky-500/20 text-sky-300 font-mono text-[9px] rounded uppercase",children:r.type})]})]}),h.jsxs("div",{className:"flex flex-col gap-2 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]",children:[h.jsxs("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1",children:[h.jsx(hu,{className:"w-3 h-3 text-sky-400"}),"Transformação"]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px]",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-gray-500 font-mono",children:"X:"}),h.jsx("input",{type:"number",value:Math.round(r.x),onChange:p=>e({...r,x:parseFloat(p.target.value)||0}),className:"w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-gray-500 font-mono",children:"Y:"}),h.jsx("input",{type:"number",value:Math.round(r.y),onChange:p=>e({...r,y:parseFloat(p.target.value)||0}),className:"w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-gray-500 font-mono",children:"L:"}),h.jsx("input",{type:"number",value:Math.round(r.width),onChange:p=>e({...r,width:Math.max(10,parseFloat(p.target.value)||10)}),className:"w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-gray-500 font-mono",children:"A:"}),h.jsx("input",{type:"number",value:Math.round(r.height),onChange:p=>e({...r,height:Math.max(10,parseFloat(p.target.value)||10)}),className:"w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"})]})]}),h.jsxs("div",{className:"flex items-center justify-between gap-2 mt-1",children:[h.jsxs("span",{className:"text-[11px] text-gray-400 flex items-center gap-1",children:[h.jsx(pu,{className:"w-3 h-3"})," Rotação:"]}),h.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[h.jsx("input",{type:"range",min:"0",max:"360",value:r.rotation,onChange:p=>e({...r,rotation:parseInt(p.target.value)}),className:"w-full accent-sky-500 cursor-pointer"}),h.jsxs("span",{className:"font-mono text-[10px] text-sky-400 w-8 text-right",children:[r.rotation,"°"]})]})]})]}),r.type==="text"&&h.jsxs("div",{className:"flex flex-col gap-2.5 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]",children:[h.jsxs("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1",children:[h.jsx(sl,{className:"w-3 h-3 text-emerald-400"}),"Tipografia & Arco Sublimático"]}),h.jsx("textarea",{value:r.content,onChange:p=>e({...r,content:p.target.value}),rows:2,className:"w-full bg-[#121214] border border-[#38383c] rounded p-2 text-white text-xs font-medium focus:outline-none focus:border-emerald-500",placeholder:"Digite o texto personalizado da estampa..."}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("span",{className:"text-[11px] text-gray-400",children:"Fonte:"}),h.jsxs("select",{value:r.fontFamily||"Arial",onChange:p=>e({...r,fontFamily:p.target.value}),className:"bg-[#121214] text-white text-xs p-1.5 rounded border border-[#38383c] focus:outline-none",children:[h.jsx("option",{value:"Arial",children:"Arial (Padrão Clean)"}),h.jsx("option",{value:"Impact",children:"Impact (Sublimação Bold)"}),h.jsx("option",{value:"'Courier New'",children:"Courier New (Retro Typewriter)"}),h.jsx("option",{value:"Georgia",children:"Georgia (Serif Elegante)"}),h.jsx("option",{value:"Comic Sans MS",children:"Comic Sans (Infantil / Festas)"}),h.jsx("option",{value:"Trebuchet MS",children:"Trebuchet MS (Moderna)"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"flex-1 flex flex-col gap-1",children:[h.jsx("span",{className:"text-[11px] text-gray-400",children:"Tamanho:"}),h.jsx("input",{type:"number",value:r.fontSize||36,onChange:p=>e({...r,fontSize:parseInt(p.target.value)||12}),className:"bg-[#121214] text-white text-xs p-1 rounded border border-[#38383c] font-mono"})]}),h.jsxs("div",{className:"flex-1 flex flex-col gap-1",children:[h.jsx("span",{className:"text-[11px] text-gray-400",children:"Peso:"}),h.jsxs("select",{value:r.fontWeight||"normal",onChange:p=>e({...r,fontWeight:p.target.value}),className:"bg-[#121214] text-white text-xs p-1 rounded border border-[#38383c]",children:[h.jsx("option",{value:"normal",children:"Normal"}),h.jsx("option",{value:"bold",children:"Negrito (Bold)"})]})]})]}),h.jsxs("div",{className:"flex flex-col gap-2 pt-2 border-t border-[#2d2d30]",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("span",{className:"text-[11px] font-semibold text-emerald-400 flex items-center gap-1",children:[h.jsx(dy,{className:"w-3.5 h-3.5"}),"Arco de Caneca / Curvar Texto"]}),h.jsx("input",{type:"checkbox",checked:r.textCurved||!1,onChange:p=>e({...r,textCurved:p.target.checked}),className:"accent-emerald-500 cursor-pointer"})]}),r.textCurved&&h.jsxs("div",{className:"flex items-center justify-between gap-2",children:[h.jsx("span",{className:"text-[10px] text-gray-400",children:"Raio da Curva:"}),h.jsx("input",{type:"range",min:"40",max:"300",value:r.curveRadius||120,onChange:p=>e({...r,curveRadius:parseInt(p.target.value)}),className:"w-full accent-emerald-500 cursor-pointer"})]})]})]}),h.jsxs("div",{className:"flex flex-col gap-2 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]",children:[h.jsxs("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1",children:[h.jsx(Xy,{className:"w-3 h-3 text-purple-400"}),"Cores da Estampa"]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-[11px] text-gray-300",children:"Cor Principal:"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"color",value:r.color||"#000000",onChange:p=>e({...r,color:p.target.value}),className:"w-6 h-6 rounded cursor-pointer border border-[#38383c]"}),h.jsx("span",{className:"font-mono text-[10px] text-gray-400",children:r.color||"#000000"})]})]})]}),h.jsxs("div",{className:"mt-auto pt-2 border-t border-[#2d2d30] flex items-center gap-2",children:[c&&h.jsxs("button",{onClick:()=>c(r.id),className:"flex-1 py-1.5 px-3 bg-[#252528] hover:bg-[#323236] border border-[#38383c] text-gray-200 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors",children:[h.jsx(tu,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Duplicar"})]}),l&&h.jsxs("button",{onClick:()=>l(r.id),className:"flex-1 py-1.5 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors",title:"Excluir elemento selecionado (Tecla Del)",children:[h.jsx(al,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Excluir Elemento"})]})]})]}):h.jsxs("div",{className:`flex flex-col h-full text-xs p-4 select-none border-l transition-colors ${f==="light"?"bg-white text-slate-700 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center gap-2 font-semibold mb-4 pb-2 border-b ${f==="light"?"text-purple-700 border-slate-200":"text-sky-400 border-[#2d2d30]"}`,children:[h.jsx(mh,{className:"w-4 h-4"}),h.jsx("span",{children:"Propriedades do Objeto"})]}),h.jsx("div",{className:`font-mono text-[11px] text-center my-auto ${f==="light"?"text-slate-400":"text-gray-500"}`,children:"Nenhum elemento selecionado na tela. Clique em um texto, forma ou imagem para editar suas propriedades."}),h.jsxs("div",{className:`mt-auto border-t pt-3 flex flex-col gap-2 ${f==="light"?"border-slate-200":"border-[#2d2d30]"}`,children:[h.jsx("span",{className:`text-[10px] font-bold uppercase tracking-wider ${f==="light"?"text-slate-400":"text-gray-400"}`,children:"Atalhos Rápidos de Layout"}),h.jsxs("button",{onClick:()=>s("centered_logo"),className:`w-full py-1.5 px-2 border rounded text-left flex items-center gap-2 text-[11px] cursor-pointer transition-colors ${f==="light"?"bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-800":"bg-[#252528] hover:bg-[#323236] border-[#38383c] text-gray-200"}`,children:[h.jsx(kv,{className:"w-3.5 h-3.5 text-amber-500"}),h.jsxs("span",{children:["Centralizar Logo em ",i.name]})]}),h.jsxs("button",{onClick:()=>s("full_wrap"),className:`w-full py-1.5 px-2 border rounded text-left flex items-center gap-2 text-[11px] cursor-pointer transition-colors ${f==="light"?"bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-800":"bg-[#252528] hover:bg-[#323236] border-[#38383c] text-gray-200"}`,children:[h.jsx(zi,{className:"w-3.5 h-3.5 text-purple-500"}),h.jsx("span",{children:"Estampa Sublimática Full Wrap 300 DPI"})]})]})]}),xw=({product:r,onAddAIGeneratedImageToCanvas:e,onApplyAIToolToActiveLayer:i,activeLayer:s,theme:l="dark"})=>{const[c,f]=Be.useState({prompt:"",negativePrompt:"blurry, low resolution, watermark, pixelated, distorted colors, bad quality",model:"gemini-3.1-flash-image",guidanceScale:7.5,seed:42,upscaleFactor:2,creativity:.7,seamlessPattern:!1}),[p,g]=Be.useState(!1),[m,v]=Be.useState(null),[_,x]=Be.useState(null),[b,A]=Be.useState([]),N=L=>{const w=document.createElement("canvas");w.width=1200,w.height=1200;const I=w.getContext("2d");if(!I)return"";const D=I.createRadialGradient(600,600,50,600,600,800);D.addColorStop(0,"#0284c7"),D.addColorStop(.5,"#7e22ce"),D.addColorStop(1,"#0f172a"),I.fillStyle=D,I.fillRect(0,0,1200,1200),I.lineWidth=12;for(let B=0;B<15;B++)I.strokeStyle=`hsla(${B*24}, 85%, 65%, 0.4)`,I.beginPath(),I.arc(600,600,100+B*35,0,Math.PI*2),I.stroke();return I.fillStyle="#ffffff",I.font="bold 54px Impact, sans-serif",I.textAlign="center",I.shadowColor="rgba(0,0,0,0.8)",I.shadowBlur=15,I.fillText(L.toUpperCase()||"DESIGN SUBLIMÁTICO HD",600,600),w.toDataURL("image/png")},M=async L=>{const w=await L.text();try{return JSON.parse(w)}catch{throw new Error(`Resposta inválida do servidor: ${w.substring(0,300)}`)}},y=async()=>{if(!c.prompt.trim()){x("Por favor, digite um prompt para a geração da estampa.");return}g(!0),v("Criando estampa sublimática em alta definição via Gemini AI..."),x(null);try{const L=await fetch("/api/gemini/generate-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:`${c.prompt} ${c.seamlessPattern?"(seamless repeating pattern)":""}`,negativePrompt:c.negativePrompt,model:c.model,aspectRatio:"1:1",guidanceScale:c.guidanceScale})}),w=await M(L);if(!L.ok||w.error)throw new Error(w.error||"Erro na geração de imagem por IA");e(w.imageUrl,c.prompt.slice(0,20)),v("Estampa gerada com sucesso e adicionada ao canvas!")}catch(L){console.error("Error generating AI image:",L);const w=(L==null?void 0:L.message)||"Falha ao conectar com o servidor Gemini IA.",I=w.includes("429")||w.includes("quota")||w.includes("Quota"),D=w.includes("Invalid server response")||w.includes("Failed to fetch")||w.includes("404")||w.includes("NetworkError");if(I||D){x("Serviço Gemini IA indisponível ou indisponível localmente. Geramos um padrão sublimático local para você continuar.");const B=N(c.prompt);e(B,c.prompt.slice(0,20)||"Arte Sublimação")}else x(w)}finally{g(!1)}},G=async()=>{g(!0),v("Gerando sugestões de estampas com a IA para "+r.name+"...");try{const L=await fetch("/api/gemini/assist-prompt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idea:c.prompt||"Design sublimático moderno e vibrante",productType:r.name})}),w=await M(L);if(w.result){const I=JSON.parse(w.result);Array.isArray(I)&&A(I)}v(null)}catch{A([{title:"Ilustração Retro Vaporwave",prompt:"Vaporwave sunset with neon grid and tropical palm trees, vivid cyan and magenta dyes for mug sublimation"},{title:"Floral Botânico Elegante",prompt:"Watercolor botanical floral frame with golden geometric lines, seamless print for pillow or t-shirt"},{title:"Mesa Gaming Cyberpunk",prompt:"Cyberpunk futuristic neon Japanese dragon artwork, high contrast vector art for mousepad deskmat"}])}finally{g(!1)}};return h.jsxs("div",{className:`flex flex-col h-full text-xs p-3.5 overflow-y-auto select-none gap-4 transition-colors ${l==="light"?"bg-white text-slate-800 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center gap-2 pb-2.5 border-b font-bold text-sm ${l==="light"?"text-purple-700 border-slate-200":"text-purple-400 border-[#2d2d30]"}`,children:[h.jsx(zi,{className:"w-5 h-5 text-purple-400 animate-pulse"}),h.jsx("span",{children:"PAINEL IA GENERATIVO SUBLIMAÇÃO"})]}),h.jsxs("div",{className:"flex flex-col gap-1.5 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("label",{className:"text-[11px] font-semibold text-gray-200 flex items-center gap-1.5",children:[h.jsx(rl,{className:"w-3.5 h-3.5 text-purple-400"}),"Prompt da Estampa (Descreva sua ideia)"]}),h.jsxs("button",{onClick:G,className:"text-[10px] text-purple-400 hover:text-purple-300 flex items-center gap-1 underline",children:[h.jsx(kv,{className:"w-3 h-3"})," Ideias da IA"]})]}),h.jsx("textarea",{value:c.prompt,onChange:L=>f({...c,prompt:L.target.value}),rows:3,placeholder:"Ex: Leão majestoso em estilo aquarela vibrante com respingos de tinta colorida, 300 DPI alta definição para caneca...",className:"w-full bg-[#121214] border border-[#38383c] focus:border-purple-500 rounded-lg p-2.5 text-white text-xs font-medium focus:outline-none transition-colors"}),b.length>0&&h.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 pt-2 border-t border-[#2d2d30]",children:[h.jsx("span",{className:"text-[10px] text-purple-300 font-semibold",children:"Sugestões de Prompts:"}),b.map((L,w)=>h.jsxs("button",{onClick:()=>f({...c,prompt:L.prompt}),className:"text-left p-1.5 bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/30 rounded text-[10px] text-purple-200 transition-colors",children:[h.jsx("span",{className:"font-bold block text-white",children:L.title}),h.jsx("span",{className:"line-clamp-1 opacity-80",children:L.prompt})]},w))]})]}),h.jsxs("div",{className:"flex flex-col gap-1.5 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]",children:[h.jsx("label",{className:"text-[11px] font-semibold text-gray-300",children:"Prompt Negativo (O que evitar)"}),h.jsx("input",{type:"text",value:c.negativePrompt,onChange:L=>f({...c,negativePrompt:L.target.value}),className:"w-full bg-[#121214] border border-[#38383c] rounded-lg p-2 text-white text-xs focus:outline-none"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]",children:[h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("label",{className:"text-[10px] text-gray-400 font-medium",children:"Modelo de IA"}),h.jsxs("select",{value:c.model,onChange:L=>f({...c,model:L.target.value}),className:"bg-[#121214] text-white text-[11px] p-2 rounded-lg border border-[#38383c] focus:outline-none font-medium",children:[h.jsx("option",{value:"gemini-3.1-flash-image",children:"Gemini 3.1 Flash Image (Recomendado)"}),h.jsx("option",{value:"gemini-3.1-flash-lite-image",children:"Gemini Flash Lite (Rápido)"}),h.jsx("option",{value:"gemini-3.6-flash",children:"Gemini 3.6 Flash"})]})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("label",{className:"text-[10px] text-gray-400 font-medium",children:"Guidance Scale"}),h.jsx("input",{type:"number",value:c.guidanceScale,step:"0.5",min:"1",max:"20",onChange:L=>f({...c,guidanceScale:parseFloat(L.target.value)||7.5}),className:"bg-[#121214] text-white text-[11px] p-2 rounded-lg border border-[#38383c] font-mono"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 bg-[#18181a] rounded-xl border border-[#2d2d30]",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-xs font-semibold text-white",children:"Estampa Padrão Repetível (Seamless)"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Ideal para tecidos, camisetas e copos 360°"})]}),h.jsx("input",{type:"checkbox",checked:c.seamlessPattern,onChange:L=>f({...c,seamlessPattern:L.target.checked}),className:"w-4 h-4 accent-purple-500 cursor-pointer"})]}),h.jsxs("button",{disabled:p,onClick:y,className:"py-3 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:to-sky-500 text-white font-bold rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50",children:[h.jsx(zi,{className:`w-4 h-4 ${p?"animate-spin":""}`}),h.jsx("span",{children:p?"Gerando com Gemini IA...":"GERAR ESTAMPA POR IA"})]}),m&&h.jsxs("div",{className:"p-2.5 bg-sky-950/40 border border-sky-500/30 rounded-lg text-sky-300 text-[11px] flex items-center gap-2",children:[h.jsx(Rv,{className:"w-4 h-4 text-sky-400 shrink-0"}),h.jsx("span",{children:m})]}),_&&h.jsxs("div",{className:"p-2.5 bg-rose-950/40 border border-rose-500/30 rounded-lg text-rose-300 text-[11px] flex items-center gap-2",children:[h.jsx(ey,{className:"w-4 h-4 text-rose-400 shrink-0"}),h.jsx("span",{children:_})]}),h.jsxs("div",{className:"flex flex-col gap-2 pt-3 border-t border-[#2d2d30]",children:[h.jsxs("span",{className:"text-[10px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1",children:[h.jsx(rl,{className:"w-3.5 h-3.5"}),"Ferramentas Rápidas de IA na Camada"]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{disabled:!s||p,onClick:()=>i("remove_bg"),className:"p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors",children:[h.jsx(iS,{className:"w-4 h-4 text-emerald-400 shrink-0"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-[11px] text-white",children:"Remover Fundo"}),h.jsx("span",{className:"text-[9px] text-gray-400",children:"Recorte transparente"})]})]}),h.jsxs("button",{disabled:!s||p,onClick:()=>i("vectorize"),className:"p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors",children:[h.jsx(zi,{className:"w-4 h-4 text-amber-400 shrink-0"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-[11px] text-white",children:"Vetorizar IA"}),h.jsx("span",{className:"text-[9px] text-gray-400",children:"Converter em SVG"})]})]}),h.jsxs("button",{disabled:!s||p,onClick:()=>i("upscale"),className:"p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors",children:[h.jsx(hu,{className:"w-4 h-4 text-sky-400 shrink-0"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-[11px] text-white",children:"Upscale 300 DPI"}),h.jsx("span",{className:"text-[9px] text-gray-400",children:"Nitidez para impressão"})]})]}),h.jsxs("button",{disabled:!s||p,onClick:()=>i("color_replace"),className:"p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors",children:[h.jsx(Ky,{className:"w-4 h-4 text-purple-400 shrink-0"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-[11px] text-white",children:"Substituir Cores"}),h.jsx("span",{className:"text-[9px] text-gray-400",children:"Trocar tons na estampa"})]})]})]})]})]})},vw=({isOpen:r,onClose:e,selectedProduct:i,onSelectProduct:s})=>{const[l,c]=Be.useState(""),[f,p]=Be.useState("Todos");if(!r)return null;const g=["Todos","Canecas","Camisetas","Garrafas","Copos","Mouse Pads","Ecobags","Bonés","Azulejos","Almofadas","Quebra-cabeças","Capinhas","Brindes personalizados"],m=eu.filter(v=>{const _=v.name.toLowerCase().includes(l.toLowerCase())||v.category.toLowerCase().includes(l.toLowerCase()),x=f==="Todos"||v.category===f;return _&&x});return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none",children:h.jsxs("div",{className:"bg-[#1e1e20] border border-[#38383c] rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-gray-200",children:[h.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-[#2d2d30] bg-[#18181a]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Gs,{className:"w-5 h-5 text-sky-400"}),h.jsx("span",{className:"font-bold text-lg text-white",children:"BIBLIOTECA DE PRODUTOS SUBLIMÁTICO"})]}),h.jsx("button",{onClick:e,className:"p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors",children:h.jsx(el,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"p-4 border-b border-[#2d2d30] flex flex-col sm:flex-row items-center gap-3 bg-[#141415]",children:[h.jsxs("div",{className:"relative flex-1 w-full",children:[h.jsx(Fv,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),h.jsx("input",{type:"text",value:l,onChange:v=>c(v.target.value),placeholder:"Buscar produtos (caneca, camiseta, garrafa, mousepad...)...",className:"w-full bg-[#1e1e20] border border-[#38383c] focus:border-sky-500 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0",children:g.slice(0,6).map(v=>h.jsx("button",{onClick:()=>p(v),className:`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${f===v?"bg-sky-600 text-white shadow":"bg-[#1e1e20] text-gray-400 hover:text-white hover:bg-white/5"}`,children:v},v))})]}),h.jsx("div",{className:"p-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1",children:m.map(v=>{const _=i.id===v.id;return h.jsxs("div",{onClick:()=>{s(v),e()},className:`flex flex-col p-3 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${_?"bg-sky-600/20 border-sky-500 ring-2 ring-sky-500/50 text-white":"bg-[#18181a] border-[#2d2d30] hover:border-sky-500/40 text-gray-300"}`,children:[h.jsxs("div",{className:"relative w-full h-36 bg-[#121214] rounded-lg overflow-hidden mb-3 border border-white/5 flex items-center justify-center",children:[h.jsx("img",{src:v.samplePrints[0],alt:v.name,className:"w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"}),h.jsx("span",{className:"absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-md text-[10px] text-sky-300 font-mono rounded",children:v.printAspect})]}),h.jsxs("div",{className:"flex items-center justify-between font-bold text-sm text-white mb-1",children:[h.jsx("span",{children:v.name}),_&&h.jsx(Rv,{className:"w-4 h-4 text-sky-400"})]}),h.jsx("span",{className:"text-[11px] text-gray-400 mb-2",children:v.description}),h.jsxs("div",{className:"mt-auto flex items-center justify-between text-[10px] text-gray-500 font-mono pt-2 border-t border-[#2d2d30]",children:[h.jsx("span",{children:v.material}),h.jsx("span",{className:"text-sky-400 font-semibold",children:v.category})]})]},v.id)})})]})})},_w=({isOpen:r,onClose:e,product:i,canvasElement:s,mirrorSublimation:l})=>{const[c,f]=Be.useState({format:"png",colorSpace:"CMYK",dpi:300,transparentBg:!0,mirrorHorizontal:l,physicalWidthCm:i.defaultWidthCm,physicalHeightCm:i.defaultHeightCm}),[p,g]=Be.useState(!1);if(!r)return null;const m=Math.round(c.physicalWidthCm/2.54*c.dpi),v=Math.round(c.physicalHeightCm/2.54*c.dpi),_=()=>{s&&(g(!0),setTimeout(()=>{const x=document.createElement("canvas");x.width=m,x.height=v;const b=x.getContext("2d");b&&(!c.transparentBg&&c.format!=="png"&&(b.fillStyle="#ffffff",b.fillRect(0,0,x.width,x.height)),b.save(),c.mirrorHorizontal&&(b.translate(x.width,0),b.scale(-1,1)),b.drawImage(s,0,0,x.width,x.height),b.restore());const A=document.createElement("a");A.download=`Estampa_${i.name.replace(/\s+/g,"_")}_300DPI.${c.format}`,A.href=x.toDataURL(`image/${c.format==="jpg"?"jpeg":"png"}`),A.click(),g(!1),e()},500))};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none",children:h.jsxs("div",{className:"bg-[#1e1e20] border border-[#38383c] rounded-2xl w-full max-w-lg flex flex-col shadow-2xl overflow-hidden text-gray-200",children:[h.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-[#2d2d30] bg-[#18181a]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Yy,{className:"w-5 h-5 text-sky-400"}),h.jsx("span",{className:"font-bold text-base text-white",children:"EXPORTAR PARA SUBLIMAÇÃO (300 DPI)"})]}),h.jsx("button",{onClick:e,className:"p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white",children:h.jsx(el,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"p-4 flex flex-col gap-4 text-xs",children:[h.jsxs("div",{className:"flex flex-col gap-1.5",children:[h.jsx("label",{className:"font-semibold text-gray-300",children:"Formato do Arquivo de Impressão"}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:["png","jpg","pdf","svg","psd","tiff"].map(x=>h.jsxs("button",{onClick:()=>f({...c,format:x}),className:`py-2 px-3 rounded-lg border font-mono font-bold uppercase transition-all ${c.format===x?"bg-sky-600 border-sky-400 text-white shadow":"bg-[#18181a] border-[#38383c] text-gray-400 hover:text-white"}`,children:[".",x]},x))})]}),h.jsxs("div",{className:"flex flex-col gap-1.5",children:[h.jsx("label",{className:"font-semibold text-gray-300",children:"Perfil de Cor da Impressora Sublimática"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{onClick:()=>f({...c,colorSpace:"CMYK"}),className:`p-2.5 rounded-xl border text-left flex flex-col transition-all ${c.colorSpace==="CMYK"?"bg-sky-600/20 border-sky-500 text-white":"bg-[#18181a] border-[#38383c] text-gray-400"}`,children:[h.jsx("span",{className:"font-bold text-sky-400",children:"Perfil CMYK (Sublimático)"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Coated Fogra39 / Tintas Epson & InkTec"})]}),h.jsxs("button",{onClick:()=>f({...c,colorSpace:"RGB"}),className:`p-2.5 rounded-xl border text-left flex flex-col transition-all ${c.colorSpace==="RGB"?"bg-sky-600/20 border-sky-500 text-white":"bg-[#18181a] border-[#38383c] text-gray-400"}`,children:[h.jsx("span",{className:"font-bold text-white",children:"sRGB Standard"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Monitores e Web Display"})]})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 bg-[#18181a] rounded-xl border border-[#2d2d30]",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-white",children:"Resolução de Impressão"}),h.jsxs("span",{className:"text-[10px] text-sky-400 font-mono",children:[m," x ",v," Pixels (",c.physicalWidthCm," x ",c.physicalHeightCm," cm)"]})]}),h.jsxs("select",{value:c.dpi,onChange:x=>f({...c,dpi:parseInt(x.target.value)}),className:"bg-[#121214] text-white font-mono p-2 rounded-lg border border-[#38383c]",children:[h.jsx("option",{value:"300",children:"300 DPI (Qualidade Profissional)"}),h.jsx("option",{value:"150",children:"150 DPI (Médio)"}),h.jsx("option",{value:"72",children:"72 DPI (Rascunho)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Pv,{className:"w-5 h-5 text-amber-400"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-amber-300",children:"Espelhar Estampa Horizontalmente"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Obrigatório para transferência em papel sublimático na Prensa Térmica!"})]})]}),h.jsx("input",{type:"checkbox",checked:c.mirrorHorizontal,onChange:x=>f({...c,mirrorHorizontal:x.target.checked}),className:"w-4 h-4 accent-amber-500 cursor-pointer"})]}),h.jsxs("button",{disabled:p,onClick:_,className:"py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50",children:[h.jsx(Uv,{className:`w-4 h-4 ${p?"animate-bounce":""}`}),h.jsx("span",{children:p?"Processando Imagem 300 DPI...":"BAIXAR ARQUIVO DE IMPRESSÃO"})]})]})]})})};function bw(){const[r,e]=Be.useState(eu[0]),[i,s]=Be.useState("Arte Sublimação - Caneca 325ml"),[l,c]=Be.useState("split"),[f,p]=Be.useState(!1),[g,m]=Be.useState("dark"),[v,_]=Be.useState([{id:"layer-bg-sample",name:"Fundo Sublimático Tropical",type:"image",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:0,y:0,width:1180,height:560,rotation:0,content:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80"},{id:"layer-text-title",name:"Texto Personalizado",type:"text",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:290,y:180,width:600,height:120,rotation:0,content:"MELHOR MÃE DO MUNDO",color:"#0f172a",fontSize:48,fontFamily:"Impact",fontWeight:"bold",textAlign:"center",textCurved:!0,curveRadius:140},{id:"layer-badge-shape",name:"Selo de Qualidade",type:"shape",shapeType:"star",visible:!0,locked:!1,opacity:90,blendMode:"normal",x:920,y:120,width:160,height:160,rotation:12,content:"",color:"#f59e0b"}]),[x,b]=Be.useState("layer-text-title"),[A,N]=Be.useState("select"),[M,y]=Be.useState("rectangle"),[G,L]=Be.useState("#38bdf8"),[w,I]=Be.useState(12),[D,B]=Be.useState(!1),[T,z]=Be.useState(!0),[k,V]=Be.useState(!0),[W,he]=Be.useState(1),[X,P]=Be.useState("3d"),[O,H]=Be.useState(!1),[te,oe]=Be.useState(!1),[xe,U]=Be.useState(!1),[K,Me]=Be.useState(!1),[ae,$]=Be.useState(!1),q=le=>{let J=[];le==="sample"&&(J=[{id:"layer-bg-"+Date.now(),name:"Fundo Neutro",type:"shape",shapeType:"rectangle",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:0,y:0,width:r.printWidthMm?r.printWidthMm*5:1e3,height:r.printHeightMm?r.printHeightMm*5:500,rotation:0,content:"",color:"#f8fafc"},{id:"layer-text-"+Date.now(),name:"Texto do Projeto",type:"text",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:200,y:150,width:500,height:100,rotation:0,content:"MEU NOVO PROJETO",color:G||"#38bdf8",fontSize:44,fontFamily:"Impact",fontWeight:"bold",textAlign:"center"}]),_(J),b(J.length>0?J[J.length-1].id:null);const ee="Novo Projeto - "+r.name;s(ee);const De={id:"hist-new-"+Date.now(),description:"Criado "+(le==="blank"?"Projeto Limpo":"Projeto com Modelo"),toolName:"Novo Projeto",timestamp:new Date,layers:J};Le([De]),Ke(0),Ue(Pe=>Pe+1),Me(!1)},ve=()=>{const le={version:"1.0",projectName:i,product:r,layers:v,mirrorSublimation:D,createdAt:new Date().toISOString()},J="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(le,null,2)),ee=document.createElement("a");ee.setAttribute("href",J),ee.setAttribute("download",`${i.toLowerCase().replace(/\s+/g,"_")}_layout.sublimation`),document.body.appendChild(ee),ee.click(),ee.remove()},[_e,Ce]=Be.useState(null),[be,Ue]=Be.useState(0),[Ne,Le]=Be.useState([{id:"hist-init",description:"Criado Projeto "+eu[0].name,toolName:"Novo Projeto",timestamp:new Date,layers:[...v]}]),[We,Ke]=Be.useState(0),lt=(le,J,ee)=>{const De={id:"hist-"+Date.now(),description:le,toolName:J,timestamp:new Date,layers:[...ee]},Pe=[...Ne.slice(0,We+1),De];Le(Pe),Ke(Pe.length-1)},Yt=()=>{if(We>0){const le=We-1;Ke(le),_([...Ne[le].layers]),Ue(J=>J+1)}},Zt=()=>{if(We<Ne.length-1){const le=We+1;Ke(le),_([...Ne[le].layers]),Ue(J=>J+1)}},Kt=le=>{Ke(le),_([...Ne[le].layers]),Ue(J=>J+1)},jt=le=>{const J=v.map(ee=>ee.id===le.id?le:ee);_(J),Ue(ee=>ee+1)},Rt=(le,J)=>{const ee=J||M,De="layer-"+Date.now(),Pe={id:De,name:le==="text"?"Novo Texto":le==="shape"?`Forma ${ee}`:"Nova Imagem",type:le,visible:!0,locked:!1,opacity:100,blendMode:"normal",x:320,y:180,width:le==="text"?380:200,height:le==="text"?80:200,rotation:0,content:le==="text"?"SEU TEXTO AQUI":"",color:G,shapeType:ee,fontSize:36,fontFamily:"Impact",fontWeight:"bold"},ze=[...v,Pe];_(ze),b(De),lt(`Adicionou ${Pe.name}`,le,ze),Ue(He=>He+1)},tn=le=>{if(N(le),["vectorize","remove_bg","upscale","generative_fill","object_replace"].includes(le)){P("ai"),H(!1),x&&["remove_bg","vectorize","upscale"].includes(le)&&pe(le);return}if(le==="text"){Rt("text");return}if(le==="shapes"){Rt("shape",M);return}if(le==="stamp"){x&&bt(x);return}if(le==="crop"){z(J=>!J),V(J=>!J);return}if(le==="masks"){if(x){const J=v.find(ee=>ee.id===x);J&&J.type==="text"&&jt({...J,isCurved:!J.isCurved,curveRadius:J.curveRadius||120})}return}if(le==="smart_object"){Rt("shape","badge");return}},ne=le=>{y(le),Rt("shape",le)},Ct=le=>{const J=v.filter(ee=>ee.id!==le);_(J),x===le&&b(null),lt("Excluiu camada","Excluir",J),Ue(ee=>ee+1)};Be.useEffect(()=>{const le=J=>{const ee=document.activeElement;ee&&(ee.tagName==="INPUT"||ee.tagName==="TEXTAREA"||ee.tagName==="SELECT"||ee.isContentEditable)||(J.key==="Delete"||J.key==="Backspace")&&x&&(J.preventDefault(),Ct(x))};return window.addEventListener("keydown",le),()=>window.removeEventListener("keydown",le)},[x,v]);const bt=le=>{const J=v.find(Pe=>Pe.id===le);if(!J)return;const ee={...J,id:"layer-"+Date.now(),name:J.name+" (Cópia)",x:J.x+20,y:J.y+20},De=[...v,ee];_(De),b(ee.id),lt("Duplicou camada "+J.name,"Duplicar",De),Ue(Pe=>Pe+1)},F=le=>{const J=v.map(ee=>ee.id===le?{...ee,visible:!ee.visible}:ee);_(J),Ue(ee=>ee+1)},E=le=>{const J=v.map(ee=>ee.id===le?{...ee,locked:!ee.locked}:ee);_(J)},re=(le,J)=>{const ee="layer-ai-"+Date.now(),De={id:ee,name:"Estampa IA: "+J,type:"image",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:100,y:50,width:600,height:400,rotation:0,content:le},Pe=[...v,De];_(Pe),b(ee),lt("Gerou estampa por IA: "+J,"IA Studio",Pe),Ue(ze=>ze+1)},pe=async le=>{const J=v.find(ee=>ee.id===x);if(!(!J||!J.content))try{const De=await(await fetch("/api/gemini/edit-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageBase64:J.content,action:le})})).json();if(De.imageUrl){const Pe=v.map(ze=>ze.id===J.id?{...ze,content:De.imageUrl}:ze);_(Pe),lt(`Aplica IA (${le}) na camada`,"IA Tool",Pe),Ue(ze=>ze+1)}}catch(ee){console.error("Error applying AI tool:",ee)}},Se=le=>{if(le==="centered_logo"){const J=v.map(ee=>ee.id===x?{...ee,x:400,y:150,width:300,height:300}:ee);_(J),Ue(ee=>ee+1)}},Oe=v.find(le=>le.id===x)||null;return h.jsxs("div",{className:`flex flex-col w-screen h-screen overflow-hidden select-none font-sans transition-colors ${g==="light"?"bg-slate-100 text-slate-900 light":"bg-[#141415] text-white dark"}`,children:[h.jsx(RS,{currentProduct:r,onOpenProductLibrary:()=>oe(!0),onUndo:Yt,onRedo:Zt,canUndo:We>0,canRedo:We<Ne.length-1,onOpenExportModal:()=>U(!0),onOpenAIPanel:()=>{P("ai"),H(!1)},mirrorSublimation:D,onToggleMirrorSublimation:()=>B(!D),showGrid:T,onToggleGrid:()=>z(!T),showRulers:k,onToggleRulers:()=>V(!k),zoomLevel:W,onZoomChange:he,workspaceViewMode:l,onChangeWorkspaceViewMode:c,theme:g,onToggleTheme:()=>m(le=>le==="dark"?"light":"dark"),onNewProject:()=>Me(!0),onSaveLayout:ve,onOpenSettings:()=>$(!0),projectName:i,onChangeProjectName:s}),h.jsxs("div",{className:"flex flex-1 w-full h-[calc(100vh-2.75rem)] overflow-hidden relative",children:[h.jsx(NS,{activeTool:A,onSelectTool:tn,selectedShape:M,onSelectShape:ne,activeColor:G,onChangeColor:L,brushSize:w,onChangeBrushSize:I,onAddLayer:Rt,currentProduct:r,onSelectProduct:e,layers:v,activeLayerId:x,onSelectLayer:b,onUpdateLayer:jt,onDeleteLayer:Ct,onDuplicateLayer:bt,onAddAIGeneratedImage:re,onOpenAIPanel:()=>{P("ai"),H(!1)},theme:g}),h.jsx("div",{className:"flex-1 h-full flex relative overflow-hidden",children:l==="mockup"?h.jsx("div",{className:`w-full h-full p-3 transition-colors ${g==="light"?"bg-slate-200":"bg-[#121214]"}`,children:h.jsx(ph,{product:r,canvasElement:_e,canvasVersion:be})}):h.jsxs("div",{className:"relative w-full h-full flex-1 flex",children:[h.jsx(DS,{product:r,layers:v,activeLayerId:x,onSelectLayer:b,onUpdateLayer:jt,onDeleteLayer:Ct,onDuplicateLayer:bt,onChangeColor:L,activeTool:A,selectedShape:M,activeColor:G,brushSize:w,mirrorSublimation:D,showGrid:T,showRulers:k,onCanvasRendered:le=>Ce(le),theme:g}),l==="canvas"&&f&&h.jsxs("div",{className:`absolute bottom-16 right-6 w-72 h-56 border rounded-2xl shadow-2xl overflow-hidden z-30 flex flex-col backdrop-blur-md transition-all hover:scale-105 group ${g==="light"?"bg-white/95 border-slate-300 text-slate-800":"bg-[#18181c]/95 border-[#38383c] text-gray-300"}`,children:[h.jsxs("div",{className:`flex items-center justify-between px-3 py-1.5 border-b text-[11px] ${g==="light"?"bg-slate-100 border-slate-300 text-slate-700":"bg-[#222225] border-[#38383c] text-gray-300"}`,children:[h.jsxs("span",{className:"font-semibold text-purple-600 flex items-center gap-1.5",children:[h.jsx(Gs,{className:"w-3.5 h-3.5"}),"Preview 3D"]}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("button",{onClick:()=>c("split"),className:"px-2 py-0.5 text-[10px] bg-purple-600 hover:bg-purple-500 text-white rounded font-medium cursor-pointer",title:"Expandir para Visualização Dividida",children:"Expandir"}),h.jsx("button",{onClick:()=>p(!1),className:`p-1 rounded cursor-pointer ${g==="light"?"hover:bg-slate-200 text-slate-500 hover:text-slate-900":"hover:bg-white/10 text-gray-400 hover:text-white"}`,title:"Fechar / Remover Canvas 3D",children:h.jsx(el,{className:"w-3.5 h-3.5"})})]})]}),h.jsx("div",{className:"flex-1 w-full h-full",children:h.jsx(ph,{product:r,canvasElement:_e,canvasVersion:be})})]})]})}),l!=="canvas"&&h.jsxs("aside",{className:`flex border-l transition-all duration-300 z-30 ${g==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#1e1e20] border-[#2d2d30] text-gray-200"} ${O?"w-10":"w-80 md:w-96"}`,children:[h.jsxs("div",{className:`w-10 border-r flex flex-col items-center py-2 gap-2 shrink-0 ${g==="light"?"bg-slate-100 border-slate-200 text-slate-600":"bg-[#18181a] border-[#2d2d30] text-gray-400"}`,children:[h.jsx("button",{onClick:()=>H(!O),className:`p-2 rounded-lg mb-2 cursor-pointer ${g==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:text-white hover:bg-white/5"}`,title:O?"Expandir Painel":"Recolher Painel",children:O?h.jsx(Dv,{className:"w-4 h-4 text-purple-600"}):h.jsx(Kb,{className:"w-4 h-4 text-purple-600"})}),h.jsx("button",{onClick:()=>{P("3d"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${X==="3d"&&!O?"bg-purple-600 text-white shadow":g==="light"?"hover:text-slate-900 hover:bg-slate-200":"hover:text-white hover:bg-white/5"}`,title:"Miniatura 3D Interativa",children:h.jsx(Gs,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>{P("properties"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${X==="properties"&&!O?"bg-purple-600 text-white shadow":g==="light"?"hover:text-slate-900 hover:bg-slate-200":"hover:text-white hover:bg-white/5"}`,title:"Propriedades do Elemento",children:h.jsx(mh,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>{P("layers"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${X==="layers"&&!O?"bg-purple-600 text-white shadow":g==="light"?"hover:text-slate-900 hover:bg-slate-200":"hover:text-white hover:bg-white/5"}`,title:"Gerenciador de Camadas",children:h.jsx(op,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>{P("history"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${X==="history"&&!O?"bg-purple-600 text-white shadow":g==="light"?"hover:text-slate-900 hover:bg-slate-200":"hover:text-white hover:bg-white/5"}`,title:"Histórico de Ações",children:h.jsx(zv,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>{P("ai"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${X==="ai"&&!O?"bg-purple-600 text-white shadow":"text-purple-600 hover:text-purple-800 hover:bg-purple-100"}`,title:"Estúdio Generativo por IA",children:h.jsx(zi,{className:"w-4 h-4 animate-pulse"})})]}),!O&&h.jsxs("div",{className:"flex-1 h-full overflow-hidden flex flex-col",children:[X==="3d"&&h.jsx("div",{className:"w-full h-full p-2 flex flex-col",children:h.jsx(ph,{product:r,canvasElement:_e,canvasVersion:be})}),X==="properties"&&h.jsx(gw,{activeLayer:Oe,onUpdateLayer:jt,product:r,onApplyPresetTemplate:Se,onDeleteLayer:Ct,onDuplicateLayer:bt,theme:g}),X==="layers"&&h.jsx(pw,{layers:v,activeLayerId:x,onSelectLayer:b,onAddLayer:Rt,onDeleteLayer:Ct,onDuplicateLayer:bt,onToggleVisibility:F,onToggleLock:E,onUpdateLayer:jt,onReorderLayers:le=>{_(le),Ue(J=>J+1)},theme:g}),X==="history"&&h.jsx(mw,{historySteps:Ne,currentHistoryIndex:We,onJumpToHistoryStep:Kt,theme:g}),X==="ai"&&h.jsx(xw,{product:r,onAddAIGeneratedImageToCanvas:re,onApplyAIToolToActiveLayer:pe,activeLayer:Oe,theme:g})]})]})]}),h.jsx(vw,{isOpen:te,onClose:()=>oe(!1),selectedProduct:r,onSelectProduct:le=>{e(le),lt("Alterou produto para "+le.name,"Produto",v),Ue(J=>J+1)}}),h.jsx(_w,{isOpen:xe,onClose:()=>U(!1),product:r,canvasElement:_e,mirrorSublimation:D}),K&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn",children:h.jsxs("div",{className:`w-full max-w-lg rounded-2xl border p-6 shadow-2xl relative transition-all ${g==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#18181b] border-[#2e2e33] text-gray-100"}`,children:[h.jsx("button",{onClick:()=>Me(!1),className:`absolute top-4 right-4 p-1.5 rounded-lg cursor-pointer ${g==="light"?"hover:bg-slate-100 text-slate-500":"hover:bg-white/10 text-gray-400"}`,children:h.jsx(el,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx("div",{className:"p-3 bg-purple-600/20 text-purple-600 rounded-xl",children:h.jsx(Sy,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold",children:"Criar Novo Projeto"}),h.jsx("p",{className:`text-xs ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Escolha como deseja iniciar sua nova estampa sublimática."})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 my-6",children:[h.jsxs("button",{onClick:()=>q("blank"),className:`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer hover:border-purple-500 group ${g==="light"?"bg-slate-50 border-slate-200 hover:bg-purple-50":"bg-[#222226] border-[#303036] hover:bg-[#282338]"}`,children:[h.jsx("div",{className:"p-2 rounded-lg bg-purple-600 text-white w-fit group-hover:scale-110 transition-transform",children:h.jsx(xy,{className:"w-5 h-5"})}),h.jsx("span",{className:"font-semibold text-sm",children:"Projeto em Branco"}),h.jsx("span",{className:`text-xs ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Canvas completamente limpo para você criar do zero."})]}),h.jsxs("button",{onClick:()=>q("sample"),className:`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer hover:border-purple-500 group ${g==="light"?"bg-slate-50 border-slate-200 hover:bg-purple-50":"bg-[#222226] border-[#303036] hover:bg-[#282338]"}`,children:[h.jsx("div",{className:"p-2 rounded-lg bg-indigo-600 text-white w-fit group-hover:scale-110 transition-transform",children:h.jsx(zi,{className:"w-5 h-5"})}),h.jsx("span",{className:"font-semibold text-sm",children:"Com Modelo Base"}),h.jsx("span",{className:`text-xs ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Inclui fundo guia e camada de texto inicial para personalizar."})]})]}),h.jsx("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-slate-200 dark:border-[#2e2e33]",children:h.jsx("button",{onClick:()=>Me(!1),className:`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer ${g==="light"?"bg-slate-200 hover:bg-slate-300 text-slate-700":"bg-[#28282d] hover:bg-[#34343a] text-gray-300"}`,children:"Cancelar"})})]})}),ae&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn",children:h.jsxs("div",{className:`w-full max-w-md rounded-2xl border p-6 shadow-2xl relative transition-all ${g==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#18181b] border-[#2e2e33] text-gray-100"}`,children:[h.jsx("button",{onClick:()=>$(!1),className:`absolute top-4 right-4 p-1.5 rounded-lg cursor-pointer ${g==="light"?"hover:bg-slate-100 text-slate-500":"hover:bg-white/10 text-gray-400"}`,children:h.jsx(el,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[h.jsx("div",{className:"p-3 bg-purple-600/20 text-purple-600 rounded-xl",children:h.jsx(Hv,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold",children:"Configurações do Estúdio"}),h.jsx("p",{className:`text-xs ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Ajuste as preferências de trabalho e visualização."})]})]}),h.jsxs("div",{className:"space-y-4 my-4",children:[h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold text-xs",children:"Espelhamento Sublimático"}),h.jsx("div",{className:`text-[11px] ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Inverter horizontalmente para transferência em papel"})]}),h.jsx("input",{type:"checkbox",checked:D,onChange:le=>B(le.target.checked),className:"w-4 h-4 accent-purple-600 cursor-pointer"})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold text-xs",children:"Exibir Grade de Alinhamento"}),h.jsx("div",{className:`text-[11px] ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Linhas de auxílio no canvas 2D"})]}),h.jsx("input",{type:"checkbox",checked:T,onChange:le=>z(le.target.checked),className:"w-4 h-4 accent-purple-600 cursor-pointer"})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold text-xs",children:"Exibir Réguas em Milímetros"}),h.jsx("div",{className:`text-[11px] ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Réguas graduadas nas bordas do editor"})]}),h.jsx("input",{type:"checkbox",checked:k,onChange:le=>V(le.target.checked),className:"w-4 h-4 accent-purple-600 cursor-pointer"})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold text-xs",children:"Tema da Interface"}),h.jsx("div",{className:`text-[11px] ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Alternar entre modo escuro e claro"})]}),h.jsx("button",{onClick:()=>m(le=>le==="dark"?"light":"dark"),className:"px-3 py-1 rounded-lg text-xs font-semibold bg-purple-600 text-white cursor-pointer hover:bg-purple-500",children:g==="dark"?"Modo Escuro":"Modo Claro"})]})]}),h.jsx("div",{className:"flex items-center justify-end pt-3 border-t border-slate-200 dark:border-[#2e2e33]",children:h.jsx("button",{onClick:()=>$(!1),className:"px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white cursor-pointer hover:bg-purple-500",children:"Concluído"})})]})})]})}window.addEventListener("error",r=>{r.message&&(r.message.includes("ResizeObserver")||r.message.includes("undelivered notifications"))&&(r.stopImmediatePropagation(),r.preventDefault())});Bb.createRoot(document.getElementById("root")).render(h.jsx(Be.StrictMode,{children:h.jsx(bw,{})}));
