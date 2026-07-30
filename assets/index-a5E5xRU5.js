(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Md={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function Db(){if(lx)return ko;lx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return ko.Fragment=e,ko.jsx=i,ko.jsxs=i,ko}var cx;function Ub(){return cx||(cx=1,Md.exports=Db()),Md.exports}var h=Ub(),Ed={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function Lb(){if(ux)return dt;ux=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function y(D,Q,Ee){this.props=D,this.context=Q,this.refs=M,this.updater=Ee||A}y.prototype.isReactComponent={},y.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function k(){}k.prototype=y.prototype;function L(D,Q,Ee){this.props=D,this.context=Q,this.refs=M,this.updater=Ee||A}var w=L.prototype=new k;w.constructor=L,N(w,y.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function U(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(D,Q,Ee){var ne=Ee.ref;return{$$typeof:r,type:D,key:Q,ref:ne!==void 0?ne:null,props:Ee}}function G(D,Q){return z(D.type,Q,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function q(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Ee){return Q[Ee]})}var fe=/\/+/g;function W(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?q(""+D.key):Q.toString(36)}function P(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(U,U):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function O(D,Q,Ee,ne,J){var Y=typeof D;(Y==="undefined"||Y==="boolean")&&(D=null);var ge=!1;if(D===null)ge=!0;else switch(Y){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(D.$$typeof){case r:case e:ge=!0;break;case v:return ge=D._init,O(ge(D._payload),Q,Ee,ne,J)}}if(ge)return J=J(D),ge=ne===""?"."+W(D,0):ne,I(J)?(Ee="",ge!=null&&(Ee=ge.replace(fe,"$&/")+"/"),O(J,Q,Ee,"",function(ve){return ve})):J!=null&&(V(J)&&(J=G(J,Ee+(J.key==null||D&&D.key===J.key?"":(""+J.key).replace(fe,"$&/")+"/")+ge)),Q.push(J)),1;ge=0;var xe=ne===""?".":ne+":";if(I(D))for(var De=0;De<D.length;De++)ne=D[De],Y=xe+W(ne,De),ge+=O(ne,Q,Ee,Y,J);else if(De=b(D),typeof De=="function")for(D=De.call(D),De=0;!(ne=D.next()).done;)ne=ne.value,Y=xe+W(ne,De++),ge+=O(ne,Q,Ee,Y,J);else if(Y==="object"){if(typeof D.then=="function")return O(P(D),Q,Ee,ne,J);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ge}function H(D,Q,Ee){if(D==null)return D;var ne=[],J=0;return O(D,ne,"","",function(Y){return Q.call(Ee,Y,J++)}),ne}function $(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(Ee){(D._status===0||D._status===-1)&&(D._status=1,D._result=Ee)},function(Ee){(D._status===0||D._status===-1)&&(D._status=2,D._result=Ee)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var re=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},me={map:H,forEach:function(D,Q,Ee){H(D,function(){Q.apply(this,arguments)},Ee)},count:function(D){var Q=0;return H(D,function(){Q++}),Q},toArray:function(D){return H(D,function(Q){return Q})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return dt.Activity=_,dt.Children=me,dt.Component=y,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=L,dt.StrictMode=s,dt.Suspense=g,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,dt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},dt.cache=function(D){return function(){return D.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(D,Q,Ee){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ne=N({},D.props),J=D.key;if(Q!=null)for(Y in Q.key!==void 0&&(J=""+Q.key),Q)!T.call(Q,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&Q.ref===void 0||(ne[Y]=Q[Y]);var Y=arguments.length-2;if(Y===1)ne.children=Ee;else if(1<Y){for(var ge=Array(Y),xe=0;xe<Y;xe++)ge[xe]=arguments[xe+2];ne.children=ge}return z(D.type,J,ne)},dt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},dt.createElement=function(D,Q,Ee){var ne,J={},Y=null;if(Q!=null)for(ne in Q.key!==void 0&&(Y=""+Q.key),Q)T.call(Q,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(J[ne]=Q[ne]);var ge=arguments.length-2;if(ge===1)J.children=Ee;else if(1<ge){for(var xe=Array(ge),De=0;De<ge;De++)xe[De]=arguments[De+2];J.children=xe}if(D&&D.defaultProps)for(ne in ge=D.defaultProps,ge)J[ne]===void 0&&(J[ne]=ge[ne]);return z(D,Y,J)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(D){return{$$typeof:p,render:D}},dt.isValidElement=V,dt.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:$}},dt.memo=function(D,Q){return{$$typeof:m,type:D,compare:Q===void 0?null:Q}},dt.startTransition=function(D){var Q=B.T,Ee={};B.T=Ee;try{var ne=D(),J=B.S;J!==null&&J(Ee,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(U,re)}catch(Y){re(Y)}finally{Q!==null&&Ee.types!==null&&(Q.types=Ee.types),B.T=Q}},dt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},dt.use=function(D){return B.H.use(D)},dt.useActionState=function(D,Q,Ee){return B.H.useActionState(D,Q,Ee)},dt.useCallback=function(D,Q){return B.H.useCallback(D,Q)},dt.useContext=function(D){return B.H.useContext(D)},dt.useDebugValue=function(){},dt.useDeferredValue=function(D,Q){return B.H.useDeferredValue(D,Q)},dt.useEffect=function(D,Q){return B.H.useEffect(D,Q)},dt.useEffectEvent=function(D){return B.H.useEffectEvent(D)},dt.useId=function(){return B.H.useId()},dt.useImperativeHandle=function(D,Q,Ee){return B.H.useImperativeHandle(D,Q,Ee)},dt.useInsertionEffect=function(D,Q){return B.H.useInsertionEffect(D,Q)},dt.useLayoutEffect=function(D,Q){return B.H.useLayoutEffect(D,Q)},dt.useMemo=function(D,Q){return B.H.useMemo(D,Q)},dt.useOptimistic=function(D,Q){return B.H.useOptimistic(D,Q)},dt.useReducer=function(D,Q,Ee){return B.H.useReducer(D,Q,Ee)},dt.useRef=function(D){return B.H.useRef(D)},dt.useState=function(D){return B.H.useState(D)},dt.useSyncExternalStore=function(D,Q,Ee){return B.H.useSyncExternalStore(D,Q,Ee)},dt.useTransition=function(){return B.H.useTransition()},dt.version="19.2.8",dt}var fx;function rp(){return fx||(fx=1,Ed.exports=Lb()),Ed.exports}var Be=rp(),Td={exports:{}},Go={},Ad={exports:{}},wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function Ob(){return dx||(dx=1,(function(r){function e(O,H){var $=O.length;O.push(H);e:for(;0<$;){var re=$-1>>>1,me=O[re];if(0<l(me,H))O[re]=H,O[$]=me,$=re;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],$=O.pop();if($!==H){O[0]=$;e:for(var re=0,me=O.length,D=me>>>1;re<D;){var Q=2*(re+1)-1,Ee=O[Q],ne=Q+1,J=O[ne];if(0>l(Ee,$))ne<me&&0>l(J,Ee)?(O[re]=J,O[ne]=$,re=ne):(O[re]=Ee,O[Q]=$,re=Q);else if(ne<me&&0>l(J,$))O[re]=J,O[ne]=$,re=ne;else break e}}return H}function l(O,H){var $=O.sortIndex-H.sortIndex;return $!==0?$:O.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],m=[],v=1,_=null,x=3,b=!1,A=!1,N=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var H=i(m);H!==null;){if(H.callback===null)s(m);else if(H.startTime<=O)s(m),H.sortIndex=H.expirationTime,e(g,H);else break;H=i(m)}}function I(O){if(N=!1,w(O),!A)if(i(g)!==null)A=!0,U||(U=!0,q());else{var H=i(m);H!==null&&P(I,H.startTime-O)}}var U=!1,B=-1,T=5,z=-1;function G(){return M?!0:!(r.unstable_now()-z<T)}function V(){if(M=!1,U){var O=r.unstable_now();z=O;var H=!0;try{e:{A=!1,N&&(N=!1,k(B),B=-1),b=!0;var $=x;try{t:{for(w(O),_=i(g);_!==null&&!(_.expirationTime>O&&G());){var re=_.callback;if(typeof re=="function"){_.callback=null,x=_.priorityLevel;var me=re(_.expirationTime<=O);if(O=r.unstable_now(),typeof me=="function"){_.callback=me,w(O),H=!0;break t}_===i(g)&&s(g),w(O)}else s(g);_=i(g)}if(_!==null)H=!0;else{var D=i(m);D!==null&&P(I,D.startTime-O),H=!1}}break e}finally{_=null,x=$,b=!1}H=void 0}}finally{H?q():U=!1}}}var q;if(typeof L=="function")q=function(){L(V)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,W=fe.port2;fe.port1.onmessage=V,q=function(){W.postMessage(null)}}else q=function(){y(V,0)};function P(O,H){B=y(function(){O(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(O){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var $=x;x=H;try{return O()}finally{x=$}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=x;x=O;try{return H()}finally{x=$}},r.unstable_scheduleCallback=function(O,H,$){var re=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?re+$:re):$=re,O){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=$+me,O={id:v++,callback:H,priorityLevel:O,startTime:$,expirationTime:me,sortIndex:-1},$>re?(O.sortIndex=$,e(m,O),i(g)===null&&O===i(m)&&(N?(k(B),B=-1):N=!0,P(I,$-re))):(O.sortIndex=me,e(g,O),A||b||(A=!0,U||(U=!0,q()))),O},r.unstable_shouldYield=G,r.unstable_wrapCallback=function(O){var H=x;return function(){var $=x;x=H;try{return O.apply(this,arguments)}finally{x=$}}}})(wd)),wd}var hx;function Pb(){return hx||(hx=1,Ad.exports=Ob()),Ad.exports}var Cd={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function zb(){if(px)return Pn;px=1;var r=rp();function e(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,m,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:g,containerInfo:m,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(g,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(g,m,null,v)},Pn.flushSync=function(g){var m=f.T,v=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=m,s.p=v,s.d.f()}},Pn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Pn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Pn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var v=m.as,_=p(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:b}):v==="script"&&s.d.X(g,{crossOrigin:_,integrity:x,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Pn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,_=p(v,m.crossOrigin);s.d.L(g,v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pn.preloadModule=function(g,m){if(typeof g=="string")if(m){var v=p(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Pn.requestFormReset=function(g){s.d.r(g)},Pn.unstable_batchedUpdates=function(g,m){return g(m)},Pn.useFormState=function(g,m,v){return f.H.useFormState(g,m,v)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.8",Pn}var mx;function Ib(){if(mx)return Cd.exports;mx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=zb(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function Bb(){if(gx)return Go;gx=1;var r=Pb(),e=rp(),i=Ib();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return g(u),t;if(d===o)return g(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=d;break}if(R===o){S=!0,o=u,a=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===a){S=!0,a=d,o=u;break}if(R===o){S=!0,o=d,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function W(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case L:return t.displayName||"Context";case k:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:W(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return W(t(n))}catch{}}return null}var P=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},re=[],me=-1;function D(t){return{current:t}}function Q(t){0>me||(t.current=re[me],re[me]=null,me--)}function Ee(t,n){me++,re[me]=t.current,t.current=n}var ne=D(null),J=D(null),Y=D(null),ge=D(null);function xe(t,n){switch(Ee(Y,n),Ee(J,t),Ee(ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Dg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Dg(n),t=Ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(ne),Ee(ne,t)}function De(){Q(ne),Q(J),Q(Y)}function ve(t){t.memoizedState!==null&&Ee(ge,t);var n=ne.current,a=Ug(n,t.type);n!==a&&(Ee(J,t),Ee(ne,a))}function Fe(t){J.current===t&&(Q(ne),Q(J)),ge.current===t&&(Q(ge),Io._currentValue=$)}var Oe,Pe;function Je(t){if(Oe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Oe=n&&n[1]||"",Pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oe+t+Pe}var nt=!1;function ut(t,n){if(!t||nt)return"";nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(_e){var pe=_e}Reflect.construct(t,[],Re)}else{try{Re.call()}catch(_e){pe=_e}t.call(Re.prototype)}}else{try{throw Error()}catch(_e){pe=_e}(Re=t())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(_e){if(_e&&pe&&typeof _e.stack=="string")return[_e.stack,pe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var j=S.split(`
`),le=R.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===le.length)for(o=j.length-1,u=le.length-1;1<=o&&0<=u&&j[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==le[u]){var Ae=`
`+j[o].replace(" at new "," at ");return t.displayName&&Ae.includes("<anonymous>")&&(Ae=Ae.replace("<anonymous>",t.displayName)),Ae}while(1<=o&&0<=u);break}}}finally{nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Je(a):""}function pt(t,n){switch(t.tag){case 26:case 27:case 5:return Je(t.type);case 16:return Je("Lazy");case 13:return t.child!==n&&n!==null?Je("Suspense Fallback"):Je("Suspense");case 19:return Je("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return Je("Activity");default:return""}}function Ct(t){try{var n="",a=null;do n+=pt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Yt=Object.prototype.hasOwnProperty,Pt=r.unstable_scheduleCallback,Dt=r.unstable_cancelCallback,zt=r.unstable_shouldYield,ee=r.unstable_requestPaint,Ft=r.unstable_now,Rt=r.unstable_getCurrentPriorityLevel,F=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,de=r.unstable_LowPriority,be=r.unstable_IdlePriority,ze=r.log,He=r.unstable_setDisableYieldValue,ye=null,Se=null;function Ie(t){if(typeof ze=="function"&&He(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(ye,t)}catch{}}var We=Math.clz32?Math.clz32:Te,Ge=Math.log,se=Math.LN2;function Te(t){return t>>>=0,t===0?32:31-(Ge(t)/se|0)|0}var we=256,Ze=262144,X=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Ue(o):(S&=R,S!==0?u=Ue(S):a||(a=R&~t,a!==0&&(u=Ue(a))))):(R=o&~d,R!==0?u=Ue(R):S!==0?u=Ue(S):a||(a=o&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ke(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function $e(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,a,o,u,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,j=t.expirationTimes,le=t.hiddenUpdates;for(a=S&~a;0<a;){var Ae=31-We(a),Re=1<<Ae;R[Ae]=0,j[Ae]=-1;var pe=le[Ae];if(pe!==null)for(le[Ae]=null,Ae=0;Ae<pe.length;Ae++){var _e=pe[Ae];_e!==null&&(_e.lane&=-536870913)}a&=~Re}o!==0&&kt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function kt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-We(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-We(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function $n(t,n){var a=n&-n;return a=(a&42)!==0?1:Kr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Kr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Jr(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:tx(t.type))}function Ws(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Ii=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ii,wn="__reactProps$"+Ii,Vn="__reactContainer$"+Ii,ds="__reactEvents$"+Ii,pl="__reactListeners$"+Ii,ml="__reactHandles$"+Ii,hs="__reactResources$"+Ii,Ra="__reactMarker$"+Ii;function Na(t){delete t[pn],delete t[wn],delete t[ds],delete t[pl],delete t[ml]}function Ji(t){var n=t[pn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Fg(t);t!==null;){if(a=t[pn])return a;t=Fg(t)}return n}t=a,a=t.parentNode}return null}function $i(t){if(t=t[pn]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ps(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Da(t){var n=t[hs];return n||(n=t[hs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(t){t[Ra]=!0}var gl=new Set,C={};function te(t,n){he(t,n),he(t+"Capture",n)}function he(t,n){for(C[t]=n,t=0;t<n.length;t++)gl.add(n[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},je={};function Ke(t){return Yt.call(je,t)?!0:Yt.call(ue,t)?!1:ce.test(t)?je[t]=!0:(ue[t]=!0,!1)}function Ve(t,n,a){if(Ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function et(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function st(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=mt(t)?"checked":"value";t._valueTracker=st(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=mt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gt=/[\n"\\]/g;function Vt(t){return t.replace(Gt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function qe(t,n,a,o,u,d,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rt(n)):t.value!==""+rt(n)&&(t.value=""+rt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yt(t,S,rt(n)):a!=null?yt(t,S,rt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+rt(R):t.removeAttribute("name")}function On(t,n,a,o,u,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ut(t);return}a=a!=null?""+rt(a):"",n=n!=null?""+rt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ut(t)}function yt(t,n,a){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+rt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ei(t,n,a){if(n!=null&&(n=""+rt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+rt(a):""}function Ei(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(P(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=rt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ut(t)}function ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||jt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ti(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&sn(t,d,n[d])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ms(t){return Ua.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var _u=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qs=null,Ys=null;function Np(t){var n=$i(t);if(n&&(t=n.stateNode)){var a=t[wn]||null;e:switch(t=n.stateNode,n.type){case"input":if(qe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[wn]||null;if(!u)throw Error(s(90));qe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":ei(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&yn(t,!!a.multiple,n,!1)}}}var yu=!1;function Dp(t,n,a){if(yu)return t(n,a);yu=!0;try{var o=t(n);return o}finally{if(yu=!1,(qs!==null||Ys!==null)&&(ic(),qs&&(n=qs,t=Ys,Ys=qs=null,Np(n),t)))for(n=0;n<t.length;n++)Np(t[n])}}function $r(t,n){var a=t.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(ta)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Su=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Su=!1}var La=null,Mu=null,xl=null;function Up(){if(xl)return xl;var t,n=Mu,a=n.length,o,u="value"in La?La.value:La.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return xl=u.slice(t,1<o?1-o:void 0)}function vl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Lp(){return!1}function jn(t){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_l:Lp,this.isPropagationStopped=Lp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=jn(gs),to=_({},gs,{view:0,detail:0}),R_=jn(to),Eu,Tu,no,yl=_({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Eu=t.screenX-no.screenX,Tu=t.screenY-no.screenY):Tu=Eu=0,no=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Op=jn(yl),N_=_({},yl,{dataTransfer:0}),D_=jn(N_),U_=_({},to,{relatedTarget:0}),Au=jn(U_),L_=_({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),O_=jn(L_),P_=_({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z_=jn(P_),I_=_({},gs,{data:0}),Pp=jn(I_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H_[t])?!!n[t]:!1}function wu(){return k_}var G_=_({},to,{key:function(t){if(t.key){var n=B_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V_=jn(G_),j_=_({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=jn(j_),X_=_({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),W_=jn(X_),q_=_({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y_=jn(q_),Z_=_({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K_=jn(Z_),Q_=_({},gs,{newState:0,oldState:0}),J_=jn(Q_),$_=[9,13,27,32],Cu=ta&&"CompositionEvent"in window,io=null;ta&&"documentMode"in document&&(io=document.documentMode);var e1=ta&&"TextEvent"in window&&!io,Ip=ta&&(!Cu||io&&8<io&&11>=io),Bp=" ",Fp=!1;function Hp(t,n){switch(t){case"keyup":return $_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function t1(t,n){switch(t){case"compositionend":return kp(n);case"keypress":return n.which!==32?null:(Fp=!0,Bp);case"textInput":return t=n.data,t===Bp&&Fp?null:t;default:return null}}function n1(t,n){if(Zs)return t==="compositionend"||!Cu&&Hp(t,n)?(t=Up(),xl=Mu=La=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var i1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!i1[t.type]:n==="textarea"}function Vp(t,n,a,o){qs?Ys?Ys.push(o):Ys=[o]:qs=o,n=uc(n,"onChange"),0<n.length&&(a=new bl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,so=null;function a1(t){Tg(t,0)}function Sl(t){var n=ps(t);if(an(n))return t}function jp(t,n){if(t==="change")return n}var Xp=!1;if(ta){var Ru;if(ta){var Nu="oninput"in document;if(!Nu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Nu=typeof Wp.oninput=="function"}Ru=Nu}else Ru=!1;Xp=Ru&&(!document.documentMode||9<document.documentMode)}function qp(){ao&&(ao.detachEvent("onpropertychange",Yp),so=ao=null)}function Yp(t){if(t.propertyName==="value"&&Sl(so)){var n=[];Vp(n,so,t,bu(t)),Dp(a1,n)}}function s1(t,n,a){t==="focusin"?(qp(),ao=n,so=a,ao.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function r1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(so)}function o1(t,n){if(t==="click")return Sl(n)}function l1(t,n){if(t==="input"||t==="change")return Sl(n)}function c1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:c1;function ro(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Yt.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,n){var a=Zp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jt(t.document)}return n}function Du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var u1=ta&&"documentMode"in document&&11>=document.documentMode,Ks=null,Uu=null,oo=null,Lu=!1;function $p(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Ks==null||Ks!==Jt(o)||(o=Ks,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=uc(Uu,"onSelect"),0<o.length&&(n=new bl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ks)))}function xs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Qs={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},Ou={},em={};ta&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function vs(t){if(Ou[t])return Ou[t];if(!Qs[t])return t;var n=Qs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Ou[t]=n[a];return t}var tm=vs("animationend"),nm=vs("animationiteration"),im=vs("animationstart"),f1=vs("transitionrun"),d1=vs("transitionstart"),h1=vs("transitioncancel"),am=vs("transitionend"),sm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ai(t,n){sm.set(t,n),te(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],Js=0,zu=0;function El(){for(var t=Js,n=zu=Js=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var d=hi[n];if(hi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&rm(a,u,d)}}function Tl(t,n,a,o){hi[Js++]=t,hi[Js++]=n,hi[Js++]=a,hi[Js++]=o,zu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Iu(t,n,a,o){return Tl(t,n,a,o),Al(t)}function _s(t,n){return Tl(t,null,null,n),Al(t)}function rm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-We(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Al(t){if(50<No)throw No=0,qf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $s={};function p1(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,o){return new p1(t,n,a,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function om(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function wl(t,n,a,o,u,d){var S=0;if(o=t,typeof t=="function")Bu(t)&&(S=1);else if(typeof t=="string")S=_b(t,a,ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=ii(31,a,n,u),t.elementType=z,t.lanes=d,t;case N:return bs(a.children,u,d,n);case M:S=8,u|=24;break;case y:return t=ii(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case I:return t=ii(13,a,n,u),t.elementType=I,t.lanes=d,t;case U:return t=ii(19,a,n,u),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case k:S=9;break e;case w:S=11;break e;case B:S=14;break e;case T:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ii(S,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function bs(t,n,a,o){return t=ii(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function lm(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var cm=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=cm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ct(n)},cm.set(t,n),n)}return{value:t,source:n,stack:Ct(n)}}var er=[],tr=0,Cl=null,lo=0,mi=[],gi=0,Oa=null,Fi=1,Hi="";function ia(t,n){er[tr++]=lo,er[tr++]=Cl,Cl=t,lo=n}function um(t,n,a){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Oa,Oa=t;var o=Fi;t=Hi;var u=32-We(o)-1;o&=~(1<<u),a+=1;var d=32-We(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Fi=1<<32-We(n)+u|a<<u|o,Hi=d+t}else Fi=1<<d|a<<u|o,Hi=t}function ku(t){t.return!==null&&(ia(t,1),um(t,1,0))}function Gu(t){for(;t===Cl;)Cl=er[--tr],er[tr]=null,lo=er[--tr],er[tr]=null;for(;t===Oa;)Oa=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function fm(t,n){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Oa,Fi=n.id,Hi=n.overflow,Oa=t}var Cn=null,en=null,At=!1,Pa=null,xi=!1,Vu=Error(s(519));function za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(pi(n,t)),Vu}function dm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[pn]=t,n[wn]=o,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Mt(Uo[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Rg(n.textContent,a)?(o.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),o.onScroll!=null&&Mt("scroll",n),o.onScrollEnd!=null&&Mt("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||za(t,!0)}function hm(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Cn=Cn.return}}function nr(t){if(t!==Cn)return!1;if(!At)return hm(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ld(t.type,t.memoizedProps)),a=!a),a&&en&&za(t),hm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=Bg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=Bg(t)}else n===27?(n=en,Ka(t.type)?(t=hd,hd=null,en=t):en=n):en=Cn?_i(t.stateNode.nextSibling):null;return!0}function ys(){en=Cn=null,At=!1}function ju(){var t=Pa;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Pa=null),t}function co(t){Pa===null?Pa=[t]:Pa.push(t)}var Xu=D(null),Ss=null,aa=null;function Ia(t,n,a){Ee(Xu,n._currentValue),n._currentValue=a}function sa(t){t._currentValue=Xu.current,Q(Xu)}function Wu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var j=0;j<n.length;j++)if(R.context===n[j]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Wu(d.return,a,t),o||(S=null);break e}d=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Wu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function ir(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;ni(u.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(u===ge.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}u=u.return}t!==null&&qu(n,t,a,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ms(t){Ss=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return pm(Ss,t)}function Nl(t,n){return Ss===null&&Ms(t),pm(t,n)}function pm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(s(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var m1=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},g1=r.unstable_scheduleCallback,x1=r.unstable_NormalPriority,gn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new m1,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&g1(x1,function(){t.controller.abort()})}var fo=null,Zu=0,ar=0,sr=null;function v1(t,n){if(fo===null){var a=fo=[];Zu=0,ar=$f(),sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(mm,mm),n}function mm(){if(--Zu===0&&fo!==null){sr!==null&&(sr.status="fulfilled");var t=fo;fo=null,ar=0,sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function _1(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var gm=O.S;O.S=function(t,n){$0=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&v1(t,n),gm!==null&&gm(t,n)};var Es=D(null);function Ku(){var t=Es.current;return t!==null?t:$t.pooledCache}function Dl(t,n){n===null?Ee(Es,Es.current):Ee(Es,n.pool)}function xm(){var t=Ku();return t===null?null:{parent:gn._currentValue,pool:t}}var rr=Error(s(460)),Qu=Error(s(474)),Ul=Error(s(542)),Ll={then:function(){}};function vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _m(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t}throw As=n,rr}}function Ts(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,rr):a}}var As=null;function bm(){if(As===null)throw Error(s(459));var t=As;return As=null,t}function ym(t){if(t===rr||t===Ul)throw Error(s(483))}var or=null,ho=0;function Ol(t){var n=ho;return ho+=1,or===null&&(or=[]),_m(or,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sm(t){function n(ie,Z){if(t){var oe=ie.deletions;oe===null?(ie.deletions=[Z],ie.flags|=16):oe.push(Z)}}function a(ie,Z){if(!t)return null;for(;Z!==null;)n(ie,Z),Z=Z.sibling;return null}function o(ie){for(var Z=new Map;ie!==null;)ie.key!==null?Z.set(ie.key,ie):Z.set(ie.index,ie),ie=ie.sibling;return Z}function u(ie,Z){return ie=na(ie,Z),ie.index=0,ie.sibling=null,ie}function d(ie,Z,oe){return ie.index=oe,t?(oe=ie.alternate,oe!==null?(oe=oe.index,oe<Z?(ie.flags|=67108866,Z):oe):(ie.flags|=67108866,Z)):(ie.flags|=1048576,Z)}function S(ie){return t&&ie.alternate===null&&(ie.flags|=67108866),ie}function R(ie,Z,oe,Ce){return Z===null||Z.tag!==6?(Z=Fu(oe,ie.mode,Ce),Z.return=ie,Z):(Z=u(Z,oe),Z.return=ie,Z)}function j(ie,Z,oe,Ce){var ot=oe.type;return ot===N?Ae(ie,Z,oe.props.children,Ce,oe.key):Z!==null&&(Z.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===T&&Ts(ot)===Z.type)?(Z=u(Z,oe.props),po(Z,oe),Z.return=ie,Z):(Z=wl(oe.type,oe.key,oe.props,null,ie.mode,Ce),po(Z,oe),Z.return=ie,Z)}function le(ie,Z,oe,Ce){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==oe.containerInfo||Z.stateNode.implementation!==oe.implementation?(Z=Hu(oe,ie.mode,Ce),Z.return=ie,Z):(Z=u(Z,oe.children||[]),Z.return=ie,Z)}function Ae(ie,Z,oe,Ce,ot){return Z===null||Z.tag!==7?(Z=bs(oe,ie.mode,Ce,ot),Z.return=ie,Z):(Z=u(Z,oe),Z.return=ie,Z)}function Re(ie,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Fu(""+Z,ie.mode,oe),Z.return=ie,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return oe=wl(Z.type,Z.key,Z.props,null,ie.mode,oe),po(oe,Z),oe.return=ie,oe;case A:return Z=Hu(Z,ie.mode,oe),Z.return=ie,Z;case T:return Z=Ts(Z),Re(ie,Z,oe)}if(P(Z)||q(Z))return Z=bs(Z,ie.mode,oe,null),Z.return=ie,Z;if(typeof Z.then=="function")return Re(ie,Ol(Z),oe);if(Z.$$typeof===L)return Re(ie,Nl(ie,Z),oe);Pl(ie,Z)}return null}function pe(ie,Z,oe,Ce){var ot=Z!==null?Z.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return ot!==null?null:R(ie,Z,""+oe,Ce);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case b:return oe.key===ot?j(ie,Z,oe,Ce):null;case A:return oe.key===ot?le(ie,Z,oe,Ce):null;case T:return oe=Ts(oe),pe(ie,Z,oe,Ce)}if(P(oe)||q(oe))return ot!==null?null:Ae(ie,Z,oe,Ce,null);if(typeof oe.then=="function")return pe(ie,Z,Ol(oe),Ce);if(oe.$$typeof===L)return pe(ie,Z,Nl(ie,oe),Ce);Pl(ie,oe)}return null}function _e(ie,Z,oe,Ce,ot){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number"||typeof Ce=="bigint")return ie=ie.get(oe)||null,R(Z,ie,""+Ce,ot);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case b:return ie=ie.get(Ce.key===null?oe:Ce.key)||null,j(Z,ie,Ce,ot);case A:return ie=ie.get(Ce.key===null?oe:Ce.key)||null,le(Z,ie,Ce,ot);case T:return Ce=Ts(Ce),_e(ie,Z,oe,Ce,ot)}if(P(Ce)||q(Ce))return ie=ie.get(oe)||null,Ae(Z,ie,Ce,ot,null);if(typeof Ce.then=="function")return _e(ie,Z,oe,Ol(Ce),ot);if(Ce.$$typeof===L)return _e(ie,Z,oe,Nl(Z,Ce),ot);Pl(Z,Ce)}return null}function tt(ie,Z,oe,Ce){for(var ot=null,Lt=null,it=Z,xt=Z=0,Tt=null;it!==null&&xt<oe.length;xt++){it.index>xt?(Tt=it,it=null):Tt=it.sibling;var Ot=pe(ie,it,oe[xt],Ce);if(Ot===null){it===null&&(it=Tt);break}t&&it&&Ot.alternate===null&&n(ie,it),Z=d(Ot,Z,xt),Lt===null?ot=Ot:Lt.sibling=Ot,Lt=Ot,it=Tt}if(xt===oe.length)return a(ie,it),At&&ia(ie,xt),ot;if(it===null){for(;xt<oe.length;xt++)it=Re(ie,oe[xt],Ce),it!==null&&(Z=d(it,Z,xt),Lt===null?ot=it:Lt.sibling=it,Lt=it);return At&&ia(ie,xt),ot}for(it=o(it);xt<oe.length;xt++)Tt=_e(it,ie,xt,oe[xt],Ce),Tt!==null&&(t&&Tt.alternate!==null&&it.delete(Tt.key===null?xt:Tt.key),Z=d(Tt,Z,xt),Lt===null?ot=Tt:Lt.sibling=Tt,Lt=Tt);return t&&it.forEach(function(ts){return n(ie,ts)}),At&&ia(ie,xt),ot}function ct(ie,Z,oe,Ce){if(oe==null)throw Error(s(151));for(var ot=null,Lt=null,it=Z,xt=Z=0,Tt=null,Ot=oe.next();it!==null&&!Ot.done;xt++,Ot=oe.next()){it.index>xt?(Tt=it,it=null):Tt=it.sibling;var ts=pe(ie,it,Ot.value,Ce);if(ts===null){it===null&&(it=Tt);break}t&&it&&ts.alternate===null&&n(ie,it),Z=d(ts,Z,xt),Lt===null?ot=ts:Lt.sibling=ts,Lt=ts,it=Tt}if(Ot.done)return a(ie,it),At&&ia(ie,xt),ot;if(it===null){for(;!Ot.done;xt++,Ot=oe.next())Ot=Re(ie,Ot.value,Ce),Ot!==null&&(Z=d(Ot,Z,xt),Lt===null?ot=Ot:Lt.sibling=Ot,Lt=Ot);return At&&ia(ie,xt),ot}for(it=o(it);!Ot.done;xt++,Ot=oe.next())Ot=_e(it,ie,xt,Ot.value,Ce),Ot!==null&&(t&&Ot.alternate!==null&&it.delete(Ot.key===null?xt:Ot.key),Z=d(Ot,Z,xt),Lt===null?ot=Ot:Lt.sibling=Ot,Lt=Ot);return t&&it.forEach(function(Nb){return n(ie,Nb)}),At&&ia(ie,xt),ot}function Qt(ie,Z,oe,Ce){if(typeof oe=="object"&&oe!==null&&oe.type===N&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case b:e:{for(var ot=oe.key;Z!==null;){if(Z.key===ot){if(ot=oe.type,ot===N){if(Z.tag===7){a(ie,Z.sibling),Ce=u(Z,oe.props.children),Ce.return=ie,ie=Ce;break e}}else if(Z.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===T&&Ts(ot)===Z.type){a(ie,Z.sibling),Ce=u(Z,oe.props),po(Ce,oe),Ce.return=ie,ie=Ce;break e}a(ie,Z);break}else n(ie,Z);Z=Z.sibling}oe.type===N?(Ce=bs(oe.props.children,ie.mode,Ce,oe.key),Ce.return=ie,ie=Ce):(Ce=wl(oe.type,oe.key,oe.props,null,ie.mode,Ce),po(Ce,oe),Ce.return=ie,ie=Ce)}return S(ie);case A:e:{for(ot=oe.key;Z!==null;){if(Z.key===ot)if(Z.tag===4&&Z.stateNode.containerInfo===oe.containerInfo&&Z.stateNode.implementation===oe.implementation){a(ie,Z.sibling),Ce=u(Z,oe.children||[]),Ce.return=ie,ie=Ce;break e}else{a(ie,Z);break}else n(ie,Z);Z=Z.sibling}Ce=Hu(oe,ie.mode,Ce),Ce.return=ie,ie=Ce}return S(ie);case T:return oe=Ts(oe),Qt(ie,Z,oe,Ce)}if(P(oe))return tt(ie,Z,oe,Ce);if(q(oe)){if(ot=q(oe),typeof ot!="function")throw Error(s(150));return oe=ot.call(oe),ct(ie,Z,oe,Ce)}if(typeof oe.then=="function")return Qt(ie,Z,Ol(oe),Ce);if(oe.$$typeof===L)return Qt(ie,Z,Nl(ie,oe),Ce);Pl(ie,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Z!==null&&Z.tag===6?(a(ie,Z.sibling),Ce=u(Z,oe),Ce.return=ie,ie=Ce):(a(ie,Z),Ce=Fu(oe,ie.mode,Ce),Ce.return=ie,ie=Ce),S(ie)):a(ie,Z)}return function(ie,Z,oe,Ce){try{ho=0;var ot=Qt(ie,Z,oe,Ce);return or=null,ot}catch(it){if(it===rr||it===Ul)throw it;var Lt=ii(29,it,null,ie.mode);return Lt.lanes=Ce,Lt.return=ie,Lt}finally{}}}var ws=Sm(!0),Mm=Sm(!1),Ba=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Al(t),rm(t,null,a),n}return Tl(t,o,n,a),Al(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}function ef(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var tf=!1;function go(){if(tf){var t=sr;if(t!==null)throw t}}function xo(t,n,a,o){tf=!1;var u=t.updateQueue;Ba=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var j=R,le=j.next;j.next=null,S===null?d=le:S.next=le,S=j;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,R=Ae.lastBaseUpdate,R!==S&&(R===null?Ae.firstBaseUpdate=le:R.next=le,Ae.lastBaseUpdate=j))}if(d!==null){var Re=u.baseState;S=0,Ae=le=j=null,R=d;do{var pe=R.lane&-536870913,_e=pe!==R.lane;if(_e?(Et&pe)===pe:(o&pe)===pe){pe!==0&&pe===ar&&(tf=!0),Ae!==null&&(Ae=Ae.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var tt=t,ct=R;pe=n;var Qt=a;switch(ct.tag){case 1:if(tt=ct.payload,typeof tt=="function"){Re=tt.call(Qt,Re,pe);break e}Re=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=ct.payload,pe=typeof tt=="function"?tt.call(Qt,Re,pe):tt,pe==null)break e;Re=_({},Re,pe);break e;case 2:Ba=!0}}pe=R.callback,pe!==null&&(t.flags|=64,_e&&(t.flags|=8192),_e=u.callbacks,_e===null?u.callbacks=[pe]:_e.push(pe))}else _e={lane:pe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Ae===null?(le=Ae=_e,j=Re):Ae=Ae.next=_e,S|=pe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;_e=R,R=_e.next,_e.next=null,u.lastBaseUpdate=_e,u.shared.pending=null}}while(!0);Ae===null&&(j=Re),u.baseState=j,u.firstBaseUpdate=le,u.lastBaseUpdate=Ae,d===null&&(u.shared.lanes=0),Xa|=S,t.lanes=S,t.memoizedState=Re}}function Em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var lr=D(null),zl=D(0);function Am(t,n){t=pa,Ee(zl,t),Ee(lr,n),pa=t|n.baseLanes}function nf(){Ee(zl,pa),Ee(lr,lr.current)}function af(){pa=zl.current,Q(lr),Q(zl)}var ai=D(null),vi=null;function ka(t){var n=t.alternate;Ee(dn,dn.current&1),Ee(ai,t),vi===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(vi=t)}function sf(t){Ee(dn,dn.current),Ee(ai,t),vi===null&&(vi=t)}function wm(t){t.tag===22?(Ee(dn,dn.current),Ee(ai,t),vi===null&&(vi=t)):Ga()}function Ga(){Ee(dn,dn.current),Ee(ai,ai.current)}function si(t){Q(ai),vi===t&&(vi=null),Q(dn)}var dn=D(0);function Il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,gt=null,Zt=null,xn=null,Bl=!1,cr=!1,Cs=!1,Fl=0,vo=0,ur=null,b1=0;function un(){throw Error(s(321))}function rf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function of(t,n,a,o,u,d){return ra=d,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?u0:Sf,Cs=!1,d=a(o,u),Cs=!1,cr&&(d=Rm(n,a,o,u)),Cm(t),d}function Cm(t){O.H=yo;var n=Zt!==null&&Zt.next!==null;if(ra=0,xn=Zt=gt=null,Bl=!1,vo=0,ur=null,n)throw Error(s(300));t===null||vn||(t=t.dependencies,t!==null&&Rl(t)&&(vn=!0))}function Rm(t,n,a,o){gt=t;var u=0;do{if(cr&&(ur=null),vo=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,xn=Zt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=f0,d=n(a,o)}while(cr);return d}function y1(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(gt.flags|=1024),n}function lf(){var t=Fl!==0;return Fl=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uf(t){if(Bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Bl=!1}ra=0,xn=Zt=gt=null,cr=!1,vo=Fl=0,ur=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?gt.memoizedState=xn=t:xn=xn.next=t,xn}function hn(){if(Zt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=xn===null?gt.memoizedState:xn.next;if(n!==null)xn=n,Zt=t;else{if(t===null)throw gt.alternate===null?Error(s(467)):Error(s(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},xn===null?gt.memoizedState=xn=t:xn=xn.next=t}return xn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=vo;return vo+=1,ur===null&&(ur=[]),t=_m(ur,t,n),n=gt,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?u0:Sf),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===L)return Rn(t)}throw Error(s(438,String(t)))}function ff(t){var n=null,a=gt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),gt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=G;return n.index++,a}function oa(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=hn();return df(n,Zt,t)}function df(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=S=null,j=null,le=n,Ae=!1;do{var Re=le.lane&-536870913;if(Re!==le.lane?(Et&Re)===Re:(ra&Re)===Re){var pe=le.revertLane;if(pe===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Re===ar&&(Ae=!0);else if((ra&pe)===pe){le=le.next,pe===ar&&(Ae=!0);continue}else Re={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},j===null?(R=j=Re,S=d):j=j.next=Re,gt.lanes|=pe,Xa|=pe;Re=le.action,Cs&&a(d,Re),d=le.hasEagerState?le.eagerState:a(d,Re)}else pe={lane:Re,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},j===null?(R=j=pe,S=d):j=j.next=pe,gt.lanes|=Re,Xa|=Re;le=le.next}while(le!==null&&le!==n);if(j===null?S=d:j.next=R,!ni(d,t.memoizedState)&&(vn=!0,Ae&&(a=sr,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=j,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);ni(d,n.memoizedState)||(vn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Nm(t,n,a){var o=gt,u=hn(),d=At;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ni((Zt||u).memoizedState,a);if(S&&(u.memoizedState=a,vn=!0),u=u.queue,gf(Lm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||xn!==null&&xn.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},Um.bind(null,o,u,a,n),null),$t===null)throw Error(s(349));d||(ra&127)!==0||Dm(o,n,a)}return a}function Dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=gt.updateQueue,n===null?(n=Hl(),gt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Um(t,n,a,o){n.value=a,n.getSnapshot=o,Om(n)&&Pm(t)}function Lm(t,n,a){return a(function(){Om(n)&&Pm(t)})}function Om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function Pm(t){var n=_s(t,2);n!==null&&Zn(n,t,2)}function pf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Cs){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function zm(t,n,a,o){return t.baseState=a,df(t,Zt,typeof o=="function"?o:oa)}function S1(t,n,a,o,u){if(Xl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Im(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=O.T,S={};O.T=S;try{var R=a(u,o),j=O.S;j!==null&&j(S,R),Bm(t,n,R)}catch(le){mf(t,n,le)}finally{d!==null&&S.types!==null&&(d.types=S.types),O.T=d}}else try{d=a(u,o),Bm(t,n,d)}catch(le){mf(t,n,le)}}function Bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(t,n,o)},function(o){return mf(t,n,o)}):Fm(t,n,a)}function Fm(t,n,a){n.status="fulfilled",n.value=a,Hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Hm(n),n=n.next;while(n!==o)}t.action=null}function Hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function km(t,n){return n}function Gm(t,n){if(At){var a=$t.formState;if(a!==null){e:{var o=gt;if(At){if(en){t:{for(var u=en,d=xi;u.nodeType!==8;){if(!d){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){en=_i(u.nextSibling),o=u.data==="F!";break e}}za(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:km,lastRenderedState:n},a.queue=o,a=o0.bind(null,gt,o),o.dispatch=a,o=pf(!1),d=yf.bind(null,gt,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=S1.bind(null,gt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vm(t){var n=hn();return jm(n,Zt,t)}function jm(t,n,a){if(n=df(t,n,km)[0],t=Gl(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(S){throw S===rr?Ul:S}else o=n;n=hn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(gt.flags|=2048,fr(9,{destroy:void 0},M1.bind(null,u,a),null)),[o,d,t]}function M1(t,n){t.action=n}function Xm(t){var n=hn(),a=Zt;if(a!==null)return jm(n,a,t);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function fr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=Hl(),gt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return hn().memoizedState}function Vl(t,n,a,o){var u=Hn();gt.flags|=t,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(t,n,a,o){var u=hn();o=o===void 0?null:o;var d=u.memoizedState.inst;Zt!==null&&o!==null&&rf(o,Zt.memoizedState.deps)?u.memoizedState=fr(n,d,a,o):(gt.flags|=t,u.memoizedState=fr(1|n,d,a,o))}function qm(t,n){Vl(8390656,8,t,n)}function gf(t,n){jl(2048,8,t,n)}function E1(t){gt.flags|=4;var n=gt.updateQueue;if(n===null)n=Hl(),gt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=hn().memoizedState;return E1({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zm(t,n){return jl(4,2,t,n)}function Km(t,n){return jl(4,4,t,n)}function Qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Jm(t,n,a){a=a!=null?a.concat([t]):null,jl(4,4,Qm.bind(null,n,t),a)}function xf(){}function $m(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function e0(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=t(),Cs){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o}function vf(t,n,a){return a===void 0||(ra&1073741824)!==0&&(Et&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=tg(),gt.lanes|=t,Xa|=t,a)}function t0(t,n,a,o){return ni(a,n)?a:lr.current!==null?(t=vf(t,a,o),ni(t,n)||(vn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(Et&261930)===0?(vn=!0,t.memoizedState=a):(t=tg(),gt.lanes|=t,Xa|=t,n)}function n0(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var S=O.T,R={};O.T=R,yf(t,!1,n,a);try{var j=u(),le=O.S;if(le!==null&&le(R,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Ae=_1(j,o);bo(t,n,Ae,li(t))}else bo(t,n,o,li(t))}catch(Re){bo(t,n,{then:function(){},status:"rejected",reason:Re},li())}finally{H.p=d,S!==null&&R.types!==null&&(S.types=R.types),O.T=S}}function T1(){}function _f(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=i0(t).queue;n0(t,u,n,$,a===null?T1:function(){return a0(t),a(o)})}function i0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function a0(t){var n=i0(t);n.next===null&&(n=t.alternate.memoizedState),bo(t,n.next.queue,{},li())}function bf(){return Rn(Io)}function s0(){return hn().memoizedState}function r0(){return hn().memoizedState}function A1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Fa(a);var o=Ha(n,t,a);o!==null&&(Zn(o,n,a),mo(o,n,a)),n={cache:Yu()},t.payload=n;return}n=n.return}}function w1(t,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?l0(n,a):(a=Iu(t,n,a,o),a!==null&&(Zn(a,t,o),c0(a,n,o)))}function o0(t,n,a){var o=li();bo(t,n,a,o)}function bo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))l0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,R=d(S,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,S))return Tl(t,n,u,0),$t===null&&El(),!1}catch{}finally{}if(a=Iu(t,n,u,o),a!==null)return Zn(a,t,o),c0(a,n,o),!0}return!1}function yf(t,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(s(479))}else n=Iu(t,a,o,2),n!==null&&Zn(n,t,2)}function Xl(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function l0(t,n){cr=Bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function c0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}var yo={readContext:Rn,use:kl,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};yo.useEffectEvent=un;var u0={readContext:Rn,use:kl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,Qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(Cs){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Cs){Ie(!0);try{a(n)}finally{Ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=w1.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=o0.bind(null,gt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(t,n){var a=Hn();return vf(a,t,n)},useTransition:function(){var t=pf(!1);return t=n0.bind(null,gt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=gt,u=Hn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),$t===null)throw Error(s(349));(Et&127)!==0||Dm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,qm(Lm.bind(null,o,d,t),[t]),o.flags|=2048,fr(9,{destroy:void 0},Um.bind(null,o,d,a,n),null),a},useId:function(){var t=Hn(),n=$t.identifierPrefix;if(At){var a=Hi,o=Fi;a=(o&~(1<<32-We(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=b1++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:bf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yf.bind(null,gt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Hn().memoizedState=A1.bind(null,gt)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Rn,use:kl,useCallback:$m,useContext:Rn,useEffect:gf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:e0,useReducer:Gl,useRef:Wm,useState:function(){return Gl(oa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=hn();return t0(a,Zt.memoizedState,t,n)},useTransition:function(){var t=Gl(oa)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Nm,useId:s0,useHostTransitionStatus:bf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=hn();return zm(a,Zt,t,n)},useMemoCache:ff,useCacheRefresh:r0};Sf.useEffectEvent=Ym;var f0={readContext:Rn,use:kl,useCallback:$m,useContext:Rn,useEffect:gf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:e0,useReducer:hf,useRef:Wm,useState:function(){return hf(oa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=hn();return Zt===null?vf(a,t,n):t0(a,Zt.memoizedState,t,n)},useTransition:function(){var t=hf(oa)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Nm,useId:s0,useHostTransitionStatus:bf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=hn();return Zt!==null?zm(a,Zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:r0};f0.useEffectEvent=Ym;function Mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=li(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(Zn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=li(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(Zn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(t,o,a),n!==null&&(Zn(n,t,a),mo(n,t,a))}};function d0(t,n,a,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,d):!0}function h0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ef.enqueueReplaceState(n,n.state,null)}function Rs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function p0(t){Ml(t)}function m0(t){console.error(t)}function g0(t){Ml(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function x0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function v0(t){return t=Fa(t),t.tag=3,t}function _0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){x0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){x0(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function C1(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?ac():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(t,o,u)),!1}throw Error(s(435,a.tag))}return Kf(t,o,u),ac(),!1}if(At)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Vu&&(t=Error(s(422),{cause:o}),co(pi(t,a)))):(o!==Vu&&(n=Error(s(423),{cause:o}),co(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=pi(o,a),u=Tf(t.stateNode,o,u),ef(t,u),fn!==4&&(fn=2)),!1;var d=Error(s(520),{cause:o});if(d=pi(d,a),Ro===null?Ro=[d]:Ro.push(d),fn!==4&&(fn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tf(a.stateNode,o,t),ef(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wa===null||!Wa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=v0(u),_0(u,t,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),vn=!1;function Nn(t,n,a,o){n.child=t===null?Mm(n,null,a,o):ws(n,t.child,a,o)}function b0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Ms(n),o=of(t,n,a,S,d,u),R=lf(),t!==null&&!vn?(cf(t,n,u),la(t,n,u)):(At&&R&&ku(n),n.flags|=1,Nn(t,n,o,u),n.child)}function y0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Bu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,S0(t,n,d,o,u)):(t=wl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Of(t,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(S,o)&&t.ref===n.ref)return la(t,n,u)}return n.flags|=1,t=na(d,o),t.ref=n.ref,t.return=n,n.child=t}function S0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ro(d,o)&&t.ref===n.ref)if(vn=!1,n.pendingProps=o=d,Of(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,la(t,n,u)}return wf(t,n,a,o,u)}function M0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return E0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,d!==null?d.cachePool:null),d!==null?Am(n,d):nf(),wm(n);else return o=n.lanes=536870912,E0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Dl(n,d.cachePool),Am(n,d),Ga(),n.memoizedState=null):(t!==null&&Dl(n,null),nf(),Ga());return Nn(t,n,u,a),n.child}function So(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function E0(t,n,a,o,u){var d=Ku();return d=d===null?null:{parent:gn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Dl(n,null),nf(),wm(n),t!==null&&ir(t,n,o,!0),n.childLanes=u,null}function ql(t,n){return n=Zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function T0(t,n,a){return ws(n,t.child,null,a),t=ql(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function R1(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=ql(n,o),n.lanes=536870912,So(null,t);if(sf(n),(t=en)?(t=Ig(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,Cn=n,en=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return ql(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=T0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||ir(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(o=$t,o!==null&&(S=$n(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,_s(t,S),Zn(o,t,S),Af;ac(),n=T0(t,n,a)}else t=d.treeContext,en=_i(S.nextSibling),Cn=n,At=!0,Pa=null,xi=!1,t!==null&&fm(n,t),n=ql(n,o),n.flags|=4096;return n}return t=na(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function wf(t,n,a,o,u){return Ms(n),a=of(t,n,a,o,void 0,u),o=lf(),t!==null&&!vn?(cf(t,n,u),la(t,n,u)):(At&&o&&ku(n),n.flags|=1,Nn(t,n,a,u),n.child)}function A0(t,n,a,o,u,d){return Ms(n),n.updateQueue=null,a=Rm(n,o,a,u),Cm(t),o=lf(),t!==null&&!vn?(cf(t,n,d),la(t,n,d)):(At&&o&&ku(n),n.flags|=1,Nn(t,n,a,d),n.child)}function w0(t,n,a,o,u){if(Ms(n),n.stateNode===null){var d=$s,S=a.contextType;typeof S=="object"&&S!==null&&(d=Rn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ju(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Rn(S):$s,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Mf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Ef.enqueueReplaceState(d,d.state,null),xo(n,o,d,u),go(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,j=Rs(a,R);d.props=j;var le=d.context,Ae=a.contextType;S=$s,typeof Ae=="object"&&Ae!==null&&(S=Rn(Ae));var Re=a.getDerivedStateFromProps;Ae=typeof Re=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Ae||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||le!==S)&&h0(n,d,o,S),Ba=!1;var pe=n.memoizedState;d.state=pe,xo(n,o,d,u),go(),le=n.memoizedState,R||pe!==le||Ba?(typeof Re=="function"&&(Mf(n,a,Re,o),le=n.memoizedState),(j=Ba||d0(n,a,j,o,pe,le,S))?(Ae||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=S,o=j):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,$u(t,n),S=n.memoizedProps,Ae=Rs(a,S),d.props=Ae,Re=n.pendingProps,pe=d.context,le=a.contextType,j=$s,typeof le=="object"&&le!==null&&(j=Rn(le)),R=a.getDerivedStateFromProps,(le=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Re||pe!==j)&&h0(n,d,o,j),Ba=!1,pe=n.memoizedState,d.state=pe,xo(n,o,d,u),go();var _e=n.memoizedState;S!==Re||pe!==_e||Ba||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof R=="function"&&(Mf(n,a,R,o),_e=n.memoizedState),(Ae=Ba||d0(n,a,Ae,o,pe,_e,j)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,_e,j),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,_e,j)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_e),d.props=o,d.state=_e,d.context=j,o=Ae):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Yl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ws(n,t.child,null,u),n.child=ws(n,null,a,u)):Nn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=la(t,n,u),t}function C0(t,n,a,o){return ys(),n.flags|=256,Nn(t,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(t){return{baseLanes:t,cachePool:xm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function R0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?ka(n):Ga(),(t=en)?(t=Ig(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,Cn=n,en=null)):t=null,t===null)throw za(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ga(),u=n.mode,R=Zl({mode:"hidden",children:R},u),o=bs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Rf(a),o.childLanes=Nf(t,S,a),n.memoizedState=Cf,So(null,o)):(ka(n),Df(n,R))}var j=t.memoizedState;if(j!==null&&(R=j.dehydrated,R!==null)){if(d)n.flags&256?(ka(n),n.flags&=-257,n=Uf(t,n,a)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,n=null):(Ga(),R=o.fallback,u=n.mode,o=Zl({mode:"visible",children:o.children},u),R=bs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,ws(n,t.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Nf(t,S,a),n.memoizedState=Cf,n=So(null,o));else if(ka(n),dd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var le=S.dgst;S=le,o=Error(s(419)),o.stack="",o.digest=S,co({value:o,source:null,stack:null}),n=Uf(t,n,a)}else if(vn||ir(t,n,a,!1),S=(a&t.childLanes)!==0,vn||S){if(S=$t,S!==null&&(o=$n(S,a),o!==0&&o!==j.retryLane))throw j.retryLane=o,_s(t,o),Zn(S,t,o),Af;fd(R)||ac(),n=Uf(t,n,a)}else fd(R)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,en=_i(R.nextSibling),Cn=n,At=!0,Pa=null,xi=!1,t!==null&&fm(n,t),n=Df(n,o.children),n.flags|=4096);return n}return u?(Ga(),R=o.fallback,u=n.mode,j=t.child,le=j.sibling,o=na(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,le!==null?R=na(le,R):(R=bs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,So(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Rf(a):(u=R.cachePool,u!==null?(j=gn._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=xm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Nf(t,S,a),n.memoizedState=Cf,So(t.child,o)):(ka(n),a=t.child,t=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Df(t,n){return n=Zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Zl(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function Uf(t,n,a){return ws(n,t.child,null,a),t=Df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function N0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Wu(t.return,n,a)}function Lf(t,n,a,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function D0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=dn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,Ee(dn,S),Nn(t,n,o,a),o=At?lo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&N0(t,a,n);else if(t.tag===19)N0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Il(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Il(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Lf(n,!0,a,null,d,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ir(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=na(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=na(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function N1(t,n,a){switch(n.tag){case 3:xe(n,n.stateNode.containerInfo),Ia(n,gn,t.memoizedState.cache),ys();break;case 27:case 5:ve(n);break;case 4:xe(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?R0(t,n,a):(ka(n),t=la(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ir(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return D0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(dn,dn.current),o)break;return null;case 22:return n.lanes=0,M0(t,n,a,n.pendingProps);case 24:Ia(n,gn,t.memoizedState.cache)}return la(t,n,a)}function U0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Of(t,a)&&(n.flags&128)===0)return vn=!1,N1(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,At&&(n.flags&1048576)!==0&&um(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ts(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=Rs(t,o),n.tag=1,n=w0(null,n,t,o,a)):(n.tag=0,n=wf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=b0(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=y0(null,n,t,o,a);break e}}throw n=W(t)||t,Error(s(306,n,""))}}return n;case 0:return wf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rs(o,n.pendingProps),w0(t,n,o,u,a);case 3:e:{if(xe(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,$u(t,n),xo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ia(n,gn,o),o!==d.cache&&qu(n,[gn],a,!0),go(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=C0(t,n,o,a);break e}else if(o!==u){u=pi(Error(s(424)),n),co(u),n=C0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=_i(t.firstChild),Cn=n,At=!0,Pa=null,xi=!0,a=Mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ys(),o===u){n=la(t,n,a);break e}Nn(t,n,o,a)}n=n.child}return n;case 26:return Yl(t,n),t===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=fc(Y.current).createElement(a),o[pn]=n,o[wn]=t,Dn(o,a,t),mn(o),n.stateNode=o):n.memoizedState=Vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ve(n),t===null&&At&&(o=n.stateNode=Hg(n.type,n.pendingProps,Y.current),Cn=n,xi=!0,u=en,Ka(n.type)?(hd=u,en=_i(o.firstChild)):en=u),Nn(t,n,n.pendingProps.children,a),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=en)&&(o=rb(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Cn=n,en=_i(o.firstChild),xi=!1,u=!0):u=!1),u||za(n)),ve(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,ld(u,d)?o=null:S!==null&&ld(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,y1,null,null,a),Io._currentValue=u),Yl(t,n),Nn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=en)&&(a=ob(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Cn=n,en=null,t=!0):t=!1),t||za(n)),null;case 13:return R0(t,n,a);case 4:return xe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ws(n,null,o,a):Nn(t,n,o,a),n.child;case 11:return b0(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ia(n,n.type,o.value),Nn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ms(n),u=Rn(u),o=o(u),n.flags|=1,Nn(t,n,o,a),n.child;case 14:return y0(t,n,n.type,n.pendingProps,a);case 15:return S0(t,n,n.type,n.pendingProps,a);case 19:return D0(t,n,a);case 31:return R1(t,n,a);case 22:return M0(t,n,a,n.pendingProps);case 24:return Ms(n),o=Rn(gn),t===null?(u=Ku(),u===null&&(u=$t,d=Yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ju(n),Ia(n,gn,u)):((t.lanes&a)!==0&&($u(t,n),xo(n,null,null,a),go()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,gn,o)):(o=d.cache,Ia(n,gn,o),o!==u.cache&&qu(n,[gn],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ca(t){t.flags|=4}function Pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(sg())t.flags|=8192;else throw As=Ll,Qu}else t.flags&=-16777217}function L0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yg(n))if(sg())t.flags|=8192;else throw As=Ll,Qu}function Kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,mr|=n)}function Mo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function D1(t,n,a){var o=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(gn),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(nr(n)?ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),tn(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ca(n),d!==null?(tn(n),L0(n,d)):(tn(n),Pf(n,u,null,o,a))):d?d!==t.memoizedState?(ca(n),tn(n),L0(n,d)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ca(n),tn(n),Pf(n,u,t,o,a)),null;case 27:if(Fe(n),a=Y.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}t=ne.current,nr(n)?dm(n):(t=Hg(u,o,a),n.stateNode=t,ca(n))}return tn(n),null;case 5:if(Fe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(d=ne.current,nr(n))dm(n);else{var S=fc(Y.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[pn]=n,d[wn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Dn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ca(n)}}return tn(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Y.current,nr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[pn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Rg(t.nodeValue,a)),t||za(n,!0)}else t=fc(t).createTextNode(o),t[pn]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=nr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[pn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=nr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[pn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),tn(n),null);case 4:return De(),t===null&&id(n.stateNode.containerInfo),tn(n),null;case 10:return sa(n.type),tn(n),null;case 19:if(Q(dn),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Mo(o,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Il(t),d!==null){for(n.flags|=128,Mo(o,!1),t=d.updateQueue,n.updateQueue=t,Kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)om(a,t),a=a.sibling;return Ee(dn,dn.current&1|2),At&&ia(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ft()>tc&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Il(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Kl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return tn(n),null}else 2*Ft()-o.renderingStartTime>tc&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ft(),t.sibling=null,a=dn.current,Ee(dn,u?a&1|2:a&1),At&&ia(n,o.treeForkCount),t):(tn(n),null);case 22:case 23:return si(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(Es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(gn),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function U1(t,n){switch(Gu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return sa(gn),De(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(dn),null;case 4:return De(),null;case 10:return sa(n.type),null;case 22:case 23:return si(n),af(),t!==null&&Q(Es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return sa(gn),null;case 25:return null;default:return null}}function O0(t,n){switch(Gu(n),n.tag){case 3:sa(gn),De();break;case 26:case 27:case 5:Fe(n);break;case 4:De();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Q(dn);break;case 10:sa(n.type);break;case 22:case 23:si(n),af(),t!==null&&Q(Es);break;case 24:sa(gn)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Wt(n,n.return,R)}}function Va(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var j=a,le=R;try{le()}catch(Ae){Wt(u,j,Ae)}}}o=o.next}while(o!==d)}}catch(Ae){Wt(n,n.return,Ae)}}function P0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Tm(n,a)}catch(o){Wt(t,t.return,o)}}}function z0(t,n,a){a.props=Rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Wt(t,n,u)}}function ki(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function I0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function zf(t,n,a){try{var o=t.stateNode;eb(o,t.type,a,n),o[wn]=n}catch(u){Wt(t,t.return,u)}}function B0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,a),t=t.sibling;t!==null;)Bf(t,n,a),t=t.sibling}function Ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ql(t,n,a),t=t.sibling;t!==null;)Ql(t,n,a),t=t.sibling}function F0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[pn]=t,n[wn]=a}catch(d){Wt(t,t.return,d)}}var ua=!1,_n=!1,Ff=!1,H0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function L1(t,n){if(t=t.containerInfo,rd=vc,t=Jp(t),Du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,R=-1,j=-1,le=0,Ae=0,Re=t,pe=null;t:for(;;){for(var _e;Re!==a||u!==0&&Re.nodeType!==3||(R=S+u),Re!==d||o!==0&&Re.nodeType!==3||(j=S+o),Re.nodeType===3&&(S+=Re.nodeValue.length),(_e=Re.firstChild)!==null;)pe=Re,Re=_e;for(;;){if(Re===t)break t;if(pe===a&&++le===u&&(R=S),pe===d&&++Ae===o&&(j=S),(_e=Re.nextSibling)!==null)break;Re=pe,pe=Re.parentNode}Re=_e}a=R===-1||j===-1?null:{start:R,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:t,selectionRange:a},vc=!1,Tn=n;Tn!==null;)if(n=Tn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Tn=t;else for(;Tn!==null;){switch(n=Tn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var tt=Rs(a.type,u);t=o.getSnapshotBeforeUpdate(tt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Wt(a,a.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ud(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Tn=t;break}Tn=n.return}}function k0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),o&4&&Eo(5,a);break;case 1:if(da(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Wt(a,a.return,S)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Wt(a,a.return,S)}}o&64&&P0(a),o&512&&To(a,a.return);break;case 3:if(da(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tm(t,n)}catch(S){Wt(a,a.return,S)}}break;case 27:n===null&&o&4&&F0(a);case 26:case 5:da(t,a),n===null&&o&4&&I0(a),o&512&&To(a,a.return);break;case 12:da(t,a);break;case 31:da(t,a),o&4&&j0(t,a);break;case 13:da(t,a),o&4&&X0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=G1.bind(null,a),lb(t,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||_n,u=ua;var d=_n;ua=o,(_n=n)&&!d?ha(t,a,(a.subtreeFlags&8772)!==0):da(t,a),ua=u,_n=d}break;case 30:break;default:da(t,a)}}function G0(t){var n=t.alternate;n!==null&&(t.alternate=null,G0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Na(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Xn=!1;function fa(t,n,a){for(a=a.child;a!==null;)V0(t,n,a),a=a.sibling}function V0(t,n,a){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:_n||ki(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||ki(a,n);var o=rn,u=Xn;Ka(a.type)&&(rn=a.stateNode,Xn=!1),fa(t,n,a),Oo(a.stateNode),rn=o,Xn=u;break;case 5:_n||ki(a,n);case 6:if(o=rn,u=Xn,rn=null,fa(t,n,a),rn=o,Xn=u,rn!==null)if(Xn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(d){Wt(a,n,d)}else try{rn.removeChild(a.stateNode)}catch(d){Wt(a,n,d)}break;case 18:rn!==null&&(Xn?(t=rn,Pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Mr(t)):Pg(rn,a.stateNode));break;case 4:o=rn,u=Xn,rn=a.stateNode.containerInfo,Xn=!0,fa(t,n,a),rn=o,Xn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),_n||Va(4,a,n),fa(t,n,a);break;case 1:_n||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&z0(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,fa(t,n,a),_n=o;break;default:fa(t,n,a)}}function j0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Mr(t)}catch(a){Wt(n,n.return,a)}}}function X0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mr(t)}catch(a){Wt(n,n.return,a)}}function O1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new H0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new H0),n;default:throw Error(s(435,t.tag))}}function Jl(t,n){var a=O1(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=V1.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(Ka(R.type)){rn=R.stateNode,Xn=!1;break e}break;case 5:rn=R.stateNode,Xn=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if(rn===null)throw Error(s(160));V0(d,S,u),rn=null,Xn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)W0(n,t),n=n.sibling}var wi=null;function W0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Va(3,t,t.return),Eo(3,t),Va(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(_n||a===null||ki(a,a.return)),o&64&&ua&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Wn(n,t),qn(t),o&512&&(_n||a===null||ki(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ra]||d[pn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,a),d[pn]=t,mn(d),o=d;break e;case"link":var S=Wg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=Wg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[pn]=t,mn(d),o=d}t.stateNode=o}else qg(u,t.type,t.stateNode);else t.stateNode=Xg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?qg(u,t.type,t.stateNode):Xg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&zf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(_n||a===null||ki(a,a.return)),a!==null&&o&4&&zf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(_n||a===null||ki(a,a.return)),t.flags&32){u=t.stateNode;try{ti(u,"")}catch(tt){Wt(t,t.return,tt)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,zf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(tt){Wt(t,t.return,tt)}}break;case 3:if(pc=null,u=wi,wi=dc(n.containerInfo),Wn(n,t),wi=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(tt){Wt(t,t.return,tt)}Ff&&(Ff=!1,q0(t));break;case 4:o=wi,wi=dc(t.stateNode.containerInfo),Wn(n,t),qn(t),wi=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ec=Ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 22:u=t.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,le=ua,Ae=_n;if(ua=le||u,_n=Ae||j,Wn(n,t),_n=Ae,ua=le,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||ua||_n||Ns(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(d=j.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=j.stateNode;var Re=j.memoizedProps.style,pe=Re!=null&&Re.hasOwnProperty("display")?Re.display:null;R.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(tt){Wt(j,j.return,tt)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(tt){Wt(j,j.return,tt)}}}else if(n.tag===18){if(a===null){j=n;try{var _e=j.stateNode;u?zg(_e,!0):zg(j.stateNode,!1)}catch(tt){Wt(j,j.return,tt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(B0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=If(t);Ql(t,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(ti(S,""),a.flags&=-33);var R=If(t);Ql(t,R,S);break;case 3:case 4:var j=a.stateNode.containerInfo,le=If(t);Bf(t,le,j);break;default:throw Error(s(161))}}catch(Ae){Wt(t,t.return,Ae)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)k0(t,n.alternate,n),n=n.sibling}function Ns(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Ns(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&z0(n,n.return,a),Ns(n);break;case 27:Oo(n.stateNode);case 26:case 5:ki(n,n.return),Ns(n);break;case 22:n.memoizedState===null&&Ns(n);break;case 30:Ns(n);break;default:Ns(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:ha(u,d,a),Eo(4,d);break;case 1:if(ha(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Wt(o,o.return,le)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)Em(j[u],R)}catch(le){Wt(o,o.return,le)}}a&&S&64&&P0(d),To(d,d.return);break;case 27:F0(d);case 26:case 5:ha(u,d,a),a&&o===null&&S&4&&I0(d),To(d,d.return);break;case 12:ha(u,d,a);break;case 31:ha(u,d,a),a&&S&4&&j0(u,d);break;case 13:ha(u,d,a),a&&S&4&&X0(u,d);break;case 22:d.memoizedState===null&&ha(u,d,a),To(d,d.return);break;case 30:break;default:ha(u,d,a)}n=n.sibling}}function Hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function kf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Y0(t,n,a,o),n=n.sibling}function Y0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&Eo(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Wt(n,n.return,j)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ci(t,n,a,o):Ao(t,n):d._visibility&2?Ci(t,n,a,o):(d._visibility|=2,dr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(S,n);break;case 24:Ci(t,n,a,o),u&2048&&kf(n.alternate,n);break;default:Ci(t,n,a,o)}}function dr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,R=a,j=o,le=S.flags;switch(S.tag){case 0:case 11:case 15:dr(d,S,R,j,u),Eo(8,S);break;case 23:break;case 22:var Ae=S.stateNode;S.memoizedState!==null?Ae._visibility&2?dr(d,S,R,j,u):Ao(d,S):(Ae._visibility|=2,dr(d,S,R,j,u)),u&&le&2048&&Hf(S.alternate,S);break;case 24:dr(d,S,R,j,u),u&&le&2048&&kf(S.alternate,S);break;default:dr(d,S,R,j,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&kf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var wo=8192;function hr(t,n,a){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)Z0(t,n,a),t=t.sibling}function Z0(t,n,a){switch(t.tag){case 26:hr(t,n,a),t.flags&wo&&t.memoizedState!==null&&bb(a,wi,t.memoizedState,t.memoizedProps);break;case 5:hr(t,n,a);break;case 3:case 4:var o=wi;wi=dc(t.stateNode.containerInfo),hr(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,hr(t,n,a),wo=o):hr(t,n,a));break;default:hr(t,n,a)}}function K0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,J0(o,t)}K0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Q0(t),t=t.sibling}function Q0(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,$l(t)):Co(t);break;default:Co(t)}}function $l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,J0(o,t)}K0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}t=t.sibling}}function J0(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else e:for(a=t;Tn!==null;){o=Tn;var u=o.sibling,d=o.return;if(G0(o),o===a){Tn=null;break e}if(u!==null){u.return=d,Tn=u;break e}Tn=d}}}var P1={getCacheForType:function(t){var n=Rn(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(gn).controller.signal}},z1=typeof WeakMap=="function"?WeakMap:Map,It=0,$t=null,St=null,Et=0,Xt=0,ri=null,ja=!1,pr=!1,Gf=!1,pa=0,fn=0,Xa=0,Ds=0,Vf=0,oi=0,mr=0,Ro=null,Yn=null,jf=!1,ec=0,$0=0,tc=1/0,nc=null,Wa=null,Sn=0,qa=null,gr=null,ma=0,Xf=0,Wf=null,eg=null,No=0,qf=null;function li(){return(It&2)!==0&&Et!==0?Et&-Et:O.T!==null?$f():Jr()}function tg(){if(oi===0)if((Et&536870912)===0||At){var t=Ze;Ze<<=1,(Ze&3932160)===0&&(Ze=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Zn(t,n,a){(t===$t&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(xr(t,0),Ya(t,Et,oi,!1)),Ye(t,a),((It&2)===0||t!==$t)&&(t===$t&&((It&2)===0&&(Ds|=a),fn===4&&Ya(t,Et,oi,!1)),Gi(t))}function ng(t,n,a){if((It&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?F1(t,n):Zf(t,n,!0),d=o;do{if(u===0){pr&&!o&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!I1(a)){u=Zf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;u=Ro;var j=R.current.memoizedState.isDehydrated;if(j&&(xr(R,S).flags|=256),S=Zf(R,S,!1),S!==2){if(Gf&&!j){R.errorRecoveryDisabledLanes|=d,Ds|=d,u=4;break e}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){xr(t,0),Ya(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,oi,!ja);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ec+300-Ft(),10<u)){if(Ya(o,n,oi,!ja),Me(o,0,!0)!==0)break e;ma=n,o.timeoutHandle=Lg(ig.bind(null,o,a,Yn,nc,jf,n,oi,Ds,mr,ja,d,"Throttled",-0,0),u);break e}ig(o,a,Yn,nc,jf,n,oi,Ds,mr,ja,d,null,-0,0)}}break}while(!0);Gi(t)}function ig(t,n,a,o,u,d,S,R,j,le,Ae,Re,pe,_e){if(t.timeoutHandle=-1,Re=n.subtreeFlags,Re&8192||(Re&16785408)===16785408){Re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Z0(n,d,Re);var tt=(d&62914560)===d?ec-Ft():(d&4194048)===d?$0-Ft():0;if(tt=yb(Re,tt),tt!==null){ma=d,t.cancelPendingCommit=tt(fg.bind(null,t,n,d,a,o,u,S,R,j,Ae,Re,null,pe,_e)),Ya(t,d,S,!le);return}}fg(t,n,d,a,o,u,S,R,j)}function I1(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ni(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,o){n&=~Vf,n&=~Ds,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-We(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&kt(t,a,n)}function ic(){return(It&6)===0?(Do(0),!1):!0}function Yf(){if(St!==null){if(Xt===0)var t=St.return;else t=St,aa=Ss=null,uf(t),or=null,ho=0,t=St;for(;t!==null;)O0(t.alternate,t),t=t.return;St=null}}function xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ib(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ma=0,Yf(),$t=t,St=a=na(t.current,null),Et=n,Xt=0,ri=null,ja=!1,pr=Le(t,n),Gf=!1,mr=oi=Vf=Ds=Xa=fn=0,Yn=Ro=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-We(o),d=1<<u;n|=t[u],o&=~d}return pa=n,El(),a}function ag(t,n){gt=null,O.H=yo,n===rr||n===Ul?(n=bm(),Xt=3):n===Qu?(n=bm(),Xt=4):Xt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,St===null&&(fn=1,Wl(t,pi(n,t.current)))}function sg(){var t=ai.current;return t===null?!0:(Et&4194048)===Et?vi===null:(Et&62914560)===Et||(Et&536870912)!==0?t===vi:!1}function rg(){var t=O.H;return O.H=yo,t===null?yo:t}function og(){var t=O.A;return O.A=P1,t}function ac(){fn=4,ja||(Et&4194048)!==Et&&ai.current!==null||(pr=!0),(Xa&134217727)===0&&(Ds&134217727)===0||$t===null||Ya($t,Et,oi,!1)}function Zf(t,n,a){var o=It;It|=2;var u=rg(),d=og();($t!==t||Et!==n)&&(nc=null,xr(t,n)),n=!1;var S=fn;e:do try{if(Xt!==0&&St!==null){var R=St,j=ri;switch(Xt){case 8:Yf(),S=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var le=Xt;if(Xt=0,ri=null,vr(t,R,j,le),a&&pr){S=0;break e}break;default:le=Xt,Xt=0,ri=null,vr(t,R,j,le)}}B1(),S=fn;break}catch(Ae){ag(t,Ae)}while(!0);return n&&t.shellSuspendCounter++,aa=Ss=null,It=o,O.H=u,O.A=d,St===null&&($t=null,Et=0,El()),S}function B1(){for(;St!==null;)lg(St)}function F1(t,n){var a=It;It|=2;var o=rg(),u=og();$t!==t||Et!==n?(nc=null,tc=Ft()+500,xr(t,n)):pr=Le(t,n);e:do try{if(Xt!==0&&St!==null){n=St;var d=ri;t:switch(Xt){case 1:Xt=0,ri=null,vr(t,n,d,1);break;case 2:case 9:if(vm(d)){Xt=0,ri=null,cg(n);break}n=function(){Xt!==2&&Xt!==9||$t!==t||(Xt=7),Gi(t)},d.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:vm(d)?(Xt=0,ri=null,cg(n)):(Xt=0,ri=null,vr(t,n,d,7));break;case 5:var S=null;switch(St.tag){case 26:S=St.memoizedState;case 5:case 27:var R=St;if(S?Yg(S):R.stateNode.complete){Xt=0,ri=null;var j=R.sibling;if(j!==null)St=j;else{var le=R.return;le!==null?(St=le,sc(le)):St=null}break t}}Xt=0,ri=null,vr(t,n,d,5);break;case 6:Xt=0,ri=null,vr(t,n,d,6);break;case 8:Yf(),fn=6;break e;default:throw Error(s(462))}}H1();break}catch(Ae){ag(t,Ae)}while(!0);return aa=Ss=null,O.H=o,O.A=u,It=a,St!==null?0:($t=null,Et=0,El(),fn)}function H1(){for(;St!==null&&!zt();)lg(St)}function lg(t){var n=U0(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?sc(t):St=n}function cg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=A0(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=A0(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:uf(n);default:O0(a,n),n=St=om(n,pa),n=U0(a,n,pa)}t.memoizedProps=t.pendingProps,n===null?sc(t):St=n}function vr(t,n,a,o){aa=Ss=null,uf(n),or=null,ho=0;var u=n.return;try{if(C1(t,u,n,a,Et)){fn=1,Wl(t,pi(a,t.current)),St=null;return}}catch(d){if(u!==null)throw St=u,d;fn=1,Wl(t,pi(a,t.current)),St=null;return}n.flags&32768?(At||o===1?t=!0:pr||(Et&536870912)!==0?t=!1:(ja=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),ug(n,t)):sc(n)}function sc(t){var n=t;do{if((n.flags&32768)!==0){ug(n,ja);return}t=n.return;var a=D1(n.alternate,n,pa);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);fn===0&&(fn=5)}function ug(t,n){do{var a=U1(t.alternate,t);if(a!==null){a.flags&=32767,St=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=a}while(t!==null);fn=6,St=null}function fg(t,n,a,o,u,d,S,R,j){t.cancelPendingCommit=null;do rc();while(Sn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=zu,nn(t,a,d,S,R,j),t===$t&&(St=$t=null,Et=0),gr=n,qa=t,ma=a,Xf=d,Wf=u,eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,j1(ae,function(){return gg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=H.p,H.p=2,S=It,It|=4;try{L1(t,n,a)}finally{It=S,H.p=u,O.T=o}}Sn=1,dg(),hg(),pg()}}function dg(){if(Sn===1){Sn=0;var t=qa,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=It;It|=4;try{W0(n,t);var d=od,S=Jp(t.containerInfo),R=d.focusedElem,j=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&Qp(R.ownerDocument.documentElement,R)){if(j!==null&&Du(R)){var le=j.start,Ae=j.end;if(Ae===void 0&&(Ae=le),"selectionStart"in R)R.selectionStart=le,R.selectionEnd=Math.min(Ae,R.value.length);else{var Re=R.ownerDocument||document,pe=Re&&Re.defaultView||window;if(pe.getSelection){var _e=pe.getSelection(),tt=R.textContent.length,ct=Math.min(j.start,tt),Qt=j.end===void 0?ct:Math.min(j.end,tt);!_e.extend&&ct>Qt&&(S=Qt,Qt=ct,ct=S);var ie=Kp(R,ct),Z=Kp(R,Qt);if(ie&&Z&&(_e.rangeCount!==1||_e.anchorNode!==ie.node||_e.anchorOffset!==ie.offset||_e.focusNode!==Z.node||_e.focusOffset!==Z.offset)){var oe=Re.createRange();oe.setStart(ie.node,ie.offset),_e.removeAllRanges(),ct>Qt?(_e.addRange(oe),_e.extend(Z.node,Z.offset)):(oe.setEnd(Z.node,Z.offset),_e.addRange(oe))}}}}for(Re=[],_e=R;_e=_e.parentNode;)_e.nodeType===1&&Re.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Re.length;R++){var Ce=Re[R];Ce.element.scrollLeft=Ce.left,Ce.element.scrollTop=Ce.top}}vc=!!rd,od=rd=null}finally{It=u,H.p=o,O.T=a}}t.current=n,Sn=2}}function hg(){if(Sn===2){Sn=0;var t=qa,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=It;It|=4;try{k0(t,n.alternate,n)}finally{It=u,H.p=o,O.T=a}}Sn=3}}function pg(){if(Sn===4||Sn===3){Sn=0,ee();var t=qa,n=gr,a=ma,o=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,gr=qa=null,mg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Wa=null),Qr(a),n=n.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(ye,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=H.p,H.p=2,O.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var R=o[S];d(R.value,{componentStack:R.stack})}}finally{O.T=n,H.p=u}}(ma&3)!==0&&rc(),Gi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===qf?No++:(No=0,qf=t):No=0,Do(0)}}function mg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function rc(){return dg(),hg(),pg(),gg()}function gg(){if(Sn!==5)return!1;var t=qa,n=Xf;Xf=0;var a=Qr(ma),o=O.T,u=H.p;try{H.p=32>a?32:a,O.T=null,a=Wf,Wf=null;var d=qa,S=ma;if(Sn=0,gr=qa=null,ma=0,(It&6)!==0)throw Error(s(331));var R=It;if(It|=4,Q0(d.current),Y0(d,d.current,S,a),It=R,Do(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(ye,d)}catch{}return!0}finally{H.p=u,O.T=o,mg(t,n)}}function xg(t,n,a){n=pi(a,n),n=Tf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(Ye(t,2),Gi(t))}function Wt(t,n,a){if(t.tag===3)xg(t,t,a);else for(;n!==null;){if(n.tag===3){xg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){t=pi(a,t),a=v0(2),o=Ha(n,a,2),o!==null&&(_0(a,o,n,t),Ye(o,2),Gi(o));break}}n=n.return}}function Kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new z1;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Gf=!0,u.add(a),t=k1.bind(null,t,n,a),n.then(t,t))}function k1(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,$t===t&&(Et&a)===a&&(fn===4||fn===3&&(Et&62914560)===Et&&300>Ft()-ec?(It&2)===0&&xr(t,0):Vf|=a,mr===Et&&(mr=0)),Gi(t)}function vg(t,n){n===0&&(n=Ne()),t=_s(t,n),t!==null&&(Ye(t,n),Gi(t))}function G1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vg(t,a)}function V1(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),vg(t,a)}function j1(t,n){return Pt(t,n)}var oc=null,_r=null,Qf=!1,lc=!1,Jf=!1,Za=0;function Gi(t){t!==_r&&t.next===null&&(_r===null?oc=_r=t:_r=_r.next=t),lc=!0,Qf||(Qf=!0,W1())}function Do(t,n){if(!Jf&&lc){Jf=!0;do for(var a=!1,o=oc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-We(42|t)+1)-1,d&=u&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Sg(o,d))}else d=Et,d=Me(o,o===$t?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Le(o,d)||(a=!0,Sg(o,d));o=o.next}while(a);Jf=!1}}function X1(){_g()}function _g(){lc=Qf=!1;var t=0;Za!==0&&nb()&&(t=Za);for(var n=Ft(),a=null,o=oc;o!==null;){var u=o.next,d=bg(o,n);d===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(_r=a)):(a=o,(t!==0||(d&3)!==0)&&(lc=!0)),o=u}Sn!==0&&Sn!==5||Do(t),Za!==0&&(Za=0)}function bg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-We(d),R=1<<S,j=u[S];j===-1?((R&a)===0||(R&o)!==0)&&(u[S]=ke(R,n)):j<=n&&(t.expiredLanes|=R),d&=~R}if(n=$t,a=Et,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Dt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Dt(o),Qr(a)){case 2:case 8:a=E;break;case 32:a=ae;break;case 268435456:a=be;break;default:a=ae}return o=yg.bind(null,t),a=Pt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Dt(o),t.callbackPriority=2,t.callbackNode=null,2}function yg(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(rc()&&t.callbackNode!==a)return null;var o=Et;return o=Me(t,t===$t?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ng(t,o,n),bg(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?yg.bind(null,t):null)}function Sg(t,n){if(rc())return null;ng(t,n,!0)}function W1(){ab(function(){(It&6)!==0?Pt(F,X1):_g()})}function $f(){if(Za===0){var t=ar;t===0&&(t=we,we<<=1,(we&261888)===0&&(we=256)),Za=t}return Za}function Mg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ms(""+t)}function Eg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function q1(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Mg((u[wn]||null).action),S=o.submitter;S&&(n=(n=S[wn]||null)?Mg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var R=new bl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Za!==0){var j=S?Eg(u,S):new FormData(u);_f(a,{pending:!0,data:j,method:u.method,action:d},null,j)}}else typeof d=="function"&&(R.preventDefault(),j=S?Eg(u,S):new FormData(u),_f(a,{pending:!0,data:j,method:u.method,action:d},d,j))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],Y1=td.toLowerCase(),Z1=td[0].toUpperCase()+td.slice(1);Ai(Y1,"on"+Z1)}Ai(tm,"onAnimationEnd"),Ai(nm,"onAnimationIteration"),Ai(im,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(f1,"onTransitionRun"),Ai(d1,"onTransitionStart"),Ai(h1,"onTransitionCancel"),Ai(am,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),te("onBeforeInput",["compositionend","keypress","textInput","paste"]),te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function Tg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],j=R.instance,le=R.currentTarget;if(R=R.listener,j!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=le;try{d(u)}catch(Ae){Ml(Ae)}u.currentTarget=null,d=j}else for(S=0;S<o.length;S++){if(R=o[S],j=R.instance,le=R.currentTarget,R=R.listener,j!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=le;try{d(u)}catch(Ae){Ml(Ae)}u.currentTarget=null,d=j}}}}function Mt(t,n){var a=n[ds];a===void 0&&(a=n[ds]=new Set);var o=t+"__bubble";a.has(o)||(Ag(n,t,2,!1),a.add(o))}function nd(t,n,a){var o=0;n&&(o|=4),Ag(a,t,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[cc]){t[cc]=!0,gl.forEach(function(a){a!=="selectionchange"&&(K1.has(a)||nd(a,!1,t),nd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[cc]||(n[cc]=!0,nd("selectionchange",!1,n))}}function Ag(t,n,a,o){switch(tx(n)){case 2:var u=Eb;break;case 8:u=Tb;break;default:u=vd}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ad(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var j=S.tag;if((j===3||j===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Ji(R),S===null)return;if(j=S.tag,j===5||j===6||j===26||j===27){o=d=S;continue e}R=R.parentNode}}o=o.return}Dp(function(){var le=d,Ae=bu(a),Re=[];e:{var pe=sm.get(t);if(pe!==void 0){var _e=bl,tt=t;switch(t){case"keypress":if(vl(a)===0)break e;case"keydown":case"keyup":_e=V_;break;case"focusin":tt="focus",_e=Au;break;case"focusout":tt="blur",_e=Au;break;case"beforeblur":case"afterblur":_e=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=W_;break;case tm:case nm:case im:_e=O_;break;case am:_e=Y_;break;case"scroll":case"scrollend":_e=R_;break;case"wheel":_e=K_;break;case"copy":case"cut":case"paste":_e=z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=zp;break;case"toggle":case"beforetoggle":_e=J_}var ct=(n&4)!==0,Qt=!ct&&(t==="scroll"||t==="scrollend"),ie=ct?pe!==null?pe+"Capture":null:pe;ct=[];for(var Z=le,oe;Z!==null;){var Ce=Z;if(oe=Ce.stateNode,Ce=Ce.tag,Ce!==5&&Ce!==26&&Ce!==27||oe===null||ie===null||(Ce=$r(Z,ie),Ce!=null&&ct.push(Lo(Z,Ce,oe))),Qt)break;Z=Z.return}0<ct.length&&(pe=new _e(pe,tt,null,a,Ae),Re.push({event:pe,listeners:ct}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",_e=t==="mouseout"||t==="pointerout",pe&&a!==_u&&(tt=a.relatedTarget||a.fromElement)&&(Ji(tt)||tt[Vn]))break e;if((_e||pe)&&(pe=Ae.window===Ae?Ae:(pe=Ae.ownerDocument)?pe.defaultView||pe.parentWindow:window,_e?(tt=a.relatedTarget||a.toElement,_e=le,tt=tt?Ji(tt):null,tt!==null&&(Qt=c(tt),ct=tt.tag,tt!==Qt||ct!==5&&ct!==27&&ct!==6)&&(tt=null)):(_e=null,tt=le),_e!==tt)){if(ct=Op,Ce="onMouseLeave",ie="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ct=zp,Ce="onPointerLeave",ie="onPointerEnter",Z="pointer"),Qt=_e==null?pe:ps(_e),oe=tt==null?pe:ps(tt),pe=new ct(Ce,Z+"leave",_e,a,Ae),pe.target=Qt,pe.relatedTarget=oe,Ce=null,Ji(Ae)===le&&(ct=new ct(ie,Z+"enter",tt,a,Ae),ct.target=oe,ct.relatedTarget=Qt,Ce=ct),Qt=Ce,_e&&tt)t:{for(ct=Q1,ie=_e,Z=tt,oe=0,Ce=ie;Ce;Ce=ct(Ce))oe++;Ce=0;for(var ot=Z;ot;ot=ct(ot))Ce++;for(;0<oe-Ce;)ie=ct(ie),oe--;for(;0<Ce-oe;)Z=ct(Z),Ce--;for(;oe--;){if(ie===Z||Z!==null&&ie===Z.alternate){ct=ie;break t}ie=ct(ie),Z=ct(Z)}ct=null}else ct=null;_e!==null&&wg(Re,pe,_e,ct,!1),tt!==null&&Qt!==null&&wg(Re,Qt,tt,ct,!0)}}e:{if(pe=le?ps(le):window,_e=pe.nodeName&&pe.nodeName.toLowerCase(),_e==="select"||_e==="input"&&pe.type==="file")var Lt=jp;else if(Gp(pe))if(Xp)Lt=l1;else{Lt=r1;var it=s1}else _e=pe.nodeName,!_e||_e.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?le&&Ht(le.elementType)&&(Lt=jp):Lt=o1;if(Lt&&(Lt=Lt(t,le))){Vp(Re,Lt,a,Ae);break e}it&&it(t,pe,le),t==="focusout"&&le&&pe.type==="number"&&le.memoizedProps.value!=null&&yt(pe,"number",pe.value)}switch(it=le?ps(le):window,t){case"focusin":(Gp(it)||it.contentEditable==="true")&&(Ks=it,Uu=le,oo=null);break;case"focusout":oo=Uu=Ks=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,$p(Re,a,Ae);break;case"selectionchange":if(u1)break;case"keydown":case"keyup":$p(Re,a,Ae)}var xt;if(Cu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Zs?Hp(t,a)&&(Tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(Ip&&a.locale!=="ko"&&(Zs||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Zs&&(xt=Up()):(La=Ae,Mu="value"in La?La.value:La.textContent,Zs=!0)),it=uc(le,Tt),0<it.length&&(Tt=new Pp(Tt,t,null,a,Ae),Re.push({event:Tt,listeners:it}),xt?Tt.data=xt:(xt=kp(a),xt!==null&&(Tt.data=xt)))),(xt=e1?t1(t,a):n1(t,a))&&(Tt=uc(le,"onBeforeInput"),0<Tt.length&&(it=new Pp("onBeforeInput","beforeinput",null,a,Ae),Re.push({event:it,listeners:Tt}),it.data=xt)),q1(Re,t,le,a,Ae)}Tg(Re,n)})}function Lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function uc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=$r(t,a),u!=null&&o.unshift(Lo(t,u,d)),u=$r(t,n),u!=null&&o.push(Lo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Q1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wg(t,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var R=a,j=R.alternate,le=R.stateNode;if(R=R.tag,j!==null&&j===o)break;R!==5&&R!==26&&R!==27||le===null||(j=le,u?(le=$r(a,d),le!=null&&S.unshift(Lo(a,le,j))):u||(le=$r(a,d),le!=null&&S.push(Lo(a,le,j)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var J1=/\r\n?/g,$1=/\u0000|\uFFFD/g;function Cg(t){return(typeof t=="string"?t:""+t).replace(J1,`
`).replace($1,"")}function Rg(t,n){return n=Cg(n),Cg(t)===n}function Kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(t,""+o);break;case"className":et(t,"class",o);break;case"tabIndex":et(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,a,o);break;case"style":Ti(t,o,d);break;case"data":if(n!=="object"){et(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ms(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Kt(t,n,"name",u.name,u,null),Kt(t,n,"formEncType",u.formEncType,u,null),Kt(t,n,"formMethod",u.formMethod,u,null),Kt(t,n,"formTarget",u.formTarget,u,null)):(Kt(t,n,"encType",u.encType,u,null),Kt(t,n,"method",u.method,u,null),Kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ms(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ea);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ms(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Ve(t,"popover",o);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ve(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Ve(t,a,o))}}function sd(t,n,a,o,u,d){switch(a){case"style":Ti(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ti(t,o):(typeof o=="number"||typeof o=="bigint")&&ti(t,""+o);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[wn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ve(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(t,n,d,S,a,null)}}u&&Kt(t,n,"srcSet",a.srcSet,a,null),o&&Kt(t,n,"src",a.src,a,null);return;case"input":Mt("invalid",t);var R=d=S=u=null,j=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var Ae=a[o];if(Ae!=null)switch(o){case"name":u=Ae;break;case"type":S=Ae;break;case"checked":j=Ae;break;case"defaultChecked":le=Ae;break;case"value":d=Ae;break;case"defaultValue":R=Ae;break;case"children":case"dangerouslySetInnerHTML":if(Ae!=null)throw Error(s(137,n));break;default:Kt(t,n,o,Ae,a,null)}}On(t,d,R,j,le,S,u,!1);return;case"select":Mt("invalid",t),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Kt(t,n,u,R,a,null)}n=d,a=S,t.multiple=!!o,n!=null?yn(t,!!o,n,!1):a!=null&&yn(t,!!o,a,!0);return;case"textarea":Mt("invalid",t),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Kt(t,n,S,R,a,null)}Ei(t,o,u,d);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Kt(t,n,j,o,a,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Mt(Uo[o],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(t,n,le,o,a,null)}return;default:if(Ht(n)){for(Ae in a)a.hasOwnProperty(Ae)&&(o=a[Ae],o!==void 0&&sd(t,n,Ae,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Kt(t,n,R,o,a,null))}function eb(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,R=null,j=null,le=null,Ae=null;for(_e in a){var Re=a[_e];if(a.hasOwnProperty(_e)&&Re!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":j=Re;default:o.hasOwnProperty(_e)||Kt(t,n,_e,null,o,Re)}}for(var pe in o){var _e=o[pe];if(Re=a[pe],o.hasOwnProperty(pe)&&(_e!=null||Re!=null))switch(pe){case"type":d=_e;break;case"name":u=_e;break;case"checked":le=_e;break;case"defaultChecked":Ae=_e;break;case"value":S=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:_e!==Re&&Kt(t,n,pe,_e,o,Re)}}qe(t,S,R,j,le,Ae,d,u);return;case"select":_e=S=R=pe=null;for(d in a)if(j=a[d],a.hasOwnProperty(d)&&j!=null)switch(d){case"value":break;case"multiple":_e=j;default:o.hasOwnProperty(d)||Kt(t,n,d,null,o,j)}for(u in o)if(d=o[u],j=a[u],o.hasOwnProperty(u)&&(d!=null||j!=null))switch(u){case"value":pe=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==j&&Kt(t,n,u,d,o,j)}n=R,a=S,o=_e,pe!=null?yn(t,!!a,pe,!1):!!o!=!!a&&(n!=null?yn(t,!!a,n,!0):yn(t,!!a,a?[]:"",!1));return;case"textarea":_e=pe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":pe=u;break;case"defaultValue":_e=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Kt(t,n,S,u,o,d)}ei(t,pe,_e);return;case"option":for(var tt in a)if(pe=a[tt],a.hasOwnProperty(tt)&&pe!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Kt(t,n,tt,null,o,pe)}for(j in o)if(pe=o[j],_e=a[j],o.hasOwnProperty(j)&&pe!==_e&&(pe!=null||_e!=null))switch(j){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:Kt(t,n,j,pe,o,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)pe=a[ct],a.hasOwnProperty(ct)&&pe!=null&&!o.hasOwnProperty(ct)&&Kt(t,n,ct,null,o,pe);for(le in o)if(pe=o[le],_e=a[le],o.hasOwnProperty(le)&&pe!==_e&&(pe!=null||_e!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Kt(t,n,le,pe,o,_e)}return;default:if(Ht(n)){for(var Qt in a)pe=a[Qt],a.hasOwnProperty(Qt)&&pe!==void 0&&!o.hasOwnProperty(Qt)&&sd(t,n,Qt,void 0,o,pe);for(Ae in o)pe=o[Ae],_e=a[Ae],!o.hasOwnProperty(Ae)||pe===_e||pe===void 0&&_e===void 0||sd(t,n,Ae,pe,o,_e);return}}for(var ie in a)pe=a[ie],a.hasOwnProperty(ie)&&pe!=null&&!o.hasOwnProperty(ie)&&Kt(t,n,ie,null,o,pe);for(Re in o)pe=o[Re],_e=a[Re],!o.hasOwnProperty(Re)||pe===_e||pe==null&&_e==null||Kt(t,n,Re,pe,o,_e)}function Ng(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,R=u.duration;if(d&&R&&Ng(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var j=a[o],le=j.startTime;if(le>R)break;var Ae=j.transferSize,Re=j.initiatorType;Ae&&Ng(Re)&&(j=j.responseEnd,S+=Ae*(j<R?1:(R-le)/(j-le)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rd=null,od=null;function fc(t){return t.nodeType===9?t:t.ownerDocument}function Dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function nb(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var Lg=typeof setTimeout=="function"?setTimeout:void 0,ib=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,ab=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(sb)}:Lg;function sb(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function Pg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Oo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[Ra]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Oo(t.ownerDocument.body);a=u}while(a);Mr(n)}function zg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),Na(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rb(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function ob(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function Ig(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lb(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function Bg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Fg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Hg(t,n,a){switch(n=fc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Na(t)}var bi=new Map,kg=new Set;function dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=H.d;H.d={f:cb,r:ub,D:fb,C:db,L:hb,m:pb,X:gb,S:mb,M:xb};function cb(){var t=ga.f(),n=ic();return t||n}function ub(t){var n=$i(t);n!==null&&n.tag===5&&n.type==="form"?a0(n):ga.r(t)}var br=typeof document>"u"?null:document;function Gg(t,n,a){var o=br;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),kg.has(u)||(kg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),mn(n),o.head.appendChild(n)))}}function fb(t){ga.D(t),Gg("dns-prefetch",t,null)}function db(t,n){ga.C(t,n),Gg("preconnect",t,n)}function hb(t,n,a){ga.L(t,n,a);var o=br;if(o&&t&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var d=u;switch(n){case"style":d=yr(t);break;case"script":d=Sr(t)}bi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(d))||n==="script"&&o.querySelector(zo(d))||(n=o.createElement("link"),Dn(n,"link",t),mn(n),o.head.appendChild(n)))}}function pb(t,n){ga.m(t,n);var a=br;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Sr(t)}if(!bi.has(d)&&(t=_({rel:"modulepreload",href:t},n),bi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(d)))return}o=a.createElement("link"),Dn(o,"link",t),mn(o),a.head.appendChild(o)}}}function mb(t,n,a){ga.S(t,n,a);var o=br;if(o&&t){var u=Da(o).hoistableStyles,d=yr(t);n=n||"default";var S=u.get(d);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Po(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(d))&&pd(t,a);var j=S=o.createElement("link");mn(j),Dn(j,"link",t),j._p=new Promise(function(le,Ae){j.onload=le,j.onerror=Ae}),j.addEventListener("load",function(){R.loading|=1}),j.addEventListener("error",function(){R.loading|=2}),R.loading|=4,hc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(d,S)}}}function gb(t,n){ga.X(t,n);var a=br;if(a&&t){var o=Da(a).hoistableScripts,u=Sr(t),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(t=_({src:t,async:!0},n),(n=bi.get(u))&&md(t,n),d=a.createElement("script"),mn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function xb(t,n){ga.M(t,n);var a=br;if(a&&t){var o=Da(a).hoistableScripts,u=Sr(t),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&md(t,n),d=a.createElement("script"),mn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Vg(t,n,a,o){var u=(u=Y.current)?dc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=Da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=yr(a.href);var d=Da(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Po(t)))&&!d._p&&(S.instance=d,S.state.loading=5),bi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,a),d||vb(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function yr(t){return'href="'+Vt(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function jg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function vb(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),mn(n),t.head.appendChild(n))}function Sr(t){return'[src="'+Vt(t)+'"]'}function zo(t){return"script[async]"+t}function Xg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),mn(o),Dn(o,"style",u),hc(o,a.precedence,t),n.instance=o;case"stylesheet":u=yr(a.href);var d=t.querySelector(Po(u));if(d)return n.state.loading|=4,n.instance=d,mn(d),d;o=jg(a),(u=bi.get(u))&&pd(o,u),d=(t.ownerDocument||t).createElement("link"),mn(d);var S=d;return S._p=new Promise(function(R,j){S.onload=R,S.onerror=j}),Dn(d,"link",o),n.state.loading|=4,hc(d,a.precedence,t),n.instance=d;case"script":return d=Sr(a.src),(u=t.querySelector(zo(d)))?(n.instance=u,mn(u),u):(o=a,(u=bi.get(d))&&(o=_({},a),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),mn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,a.precedence,t));return n.instance}function hc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var pc=null;function Wg(t,n,a){if(pc===null){var o=new Map,u=pc=new Map;u.set(a,o)}else u=pc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ra]||d[pn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var R=o.get(S);R?R.push(d):o.set(S,[d])}}return o}function qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function _b(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function bb(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),d=n.querySelector(Po(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=mc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,mn(d);return}d=n.ownerDocument||n,o=jg(o),(u=bi.get(u))&&pd(o,u),d=d.createElement("link"),mn(d);var S=d;S._p=new Promise(function(R,j){S.onload=R,S.onerror=j}),Dn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=mc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function yb(t,n){return t.stylesheets&&t.count===0&&xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*tb());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gc=null;function xc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gc=new Map,n.forEach(Sb,t),gc=null,mc.call(t))}function Sb(t,n){if(!(n.state.loading&4)){var a=gc.get(t);if(a)var o=a.get(null);else{a=new Map,gc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Io={$$typeof:L,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Mb(t,n,a,o,u,d,S,R,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Zg(t,n,a,o,u,d,S,R,j,le,Ae,Re){return t=new Mb(t,n,a,S,j,le,Ae,Re,R),n=1,d===!0&&(n|=24),d=ii(3,null,null,n),t.current=d,d.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ju(d),t}function Kg(t){return t?(t=$s,t):$s}function Qg(t,n,a,o,u,d){u=Kg(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ha(t,o,n),a!==null&&(Zn(a,t,n),mo(a,t,n))}function Jg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xd(t,n){Jg(t,n),(t=t.alternate)&&Jg(t,n)}function $g(t){if(t.tag===13||t.tag===31){var n=_s(t,67108864);n!==null&&Zn(n,t,67108864),xd(t,67108864)}}function ex(t){if(t.tag===13||t.tag===31){var n=li();n=Kr(n);var a=_s(t,n);a!==null&&Zn(a,t,n),xd(t,n)}}var vc=!0;function Eb(t,n,a,o){var u=O.T;O.T=null;var d=H.p;try{H.p=2,vd(t,n,a,o)}finally{H.p=d,O.T=u}}function Tb(t,n,a,o){var u=O.T;O.T=null;var d=H.p;try{H.p=8,vd(t,n,a,o)}finally{H.p=d,O.T=u}}function vd(t,n,a,o){if(vc){var u=_d(o);if(u===null)ad(t,n,o,_c,a),nx(t,o);else if(wb(u,t,n,a,o))o.stopPropagation();else if(nx(t,o),n&4&&-1<Ab.indexOf(t)){for(;u!==null;){var d=$i(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ue(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var j=1<<31-We(S);R.entanglements[1]|=j,S&=~j}Gi(d),(It&6)===0&&(tc=Ft()+500,Do(0))}}break;case 31:case 13:R=_s(d,2),R!==null&&Zn(R,d,2),ic(),xd(d,2)}if(d=_d(o),d===null&&ad(t,n,o,_c,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ad(t,n,o,null,a)}}function _d(t){return t=bu(t),bd(t)}var _c=null;function bd(t){if(_c=null,t=Ji(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _c=t,null}function tx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case F:return 2;case E:return 8;case ae:case de:return 32;case be:return 268435456;default:return 32}default:return 32}}var yd=!1,Qa=null,Ja=null,$a=null,Bo=new Map,Fo=new Map,es=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nx(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=$i(n),n!==null&&$g(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function wb(t,n,a,o,u){switch(n){case"focusin":return Qa=Ho(Qa,t,n,a,o,u),!0;case"dragenter":return Ja=Ho(Ja,t,n,a,o,u),!0;case"mouseover":return $a=Ho($a,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,Ho(Bo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,Ho(Fo.get(d)||null,t,n,a,o,u)),!0}return!1}function ix(t){var n=Ji(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ws(t.priority,function(){ex(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ws(t.priority,function(){ex(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_d(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=$i(a),n!==null&&$g(n),t.blockedOn=a,!1;n.shift()}return!0}function ax(t,n,a){bc(t)&&a.delete(n)}function Cb(){yd=!1,Qa!==null&&bc(Qa)&&(Qa=null),Ja!==null&&bc(Ja)&&(Ja=null),$a!==null&&bc($a)&&($a=null),Bo.forEach(ax),Fo.forEach(ax)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,yd||(yd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cb)))}var Sc=null;function sx(t){Sc!==t&&(Sc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(bd(o||a)===null)continue;break}var d=$i(a);d!==null&&(t.splice(n,3),n-=3,_f(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mr(t){function n(j){return yc(j,t)}Qa!==null&&yc(Qa,t),Ja!==null&&yc(Ja,t),$a!==null&&yc($a,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)ix(a),a.blockedOn===null&&es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[wn]||null;if(typeof d=="function")S||sx(a);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[wn]||null)R=S.formAction;else if(bd(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),sx(a)}}}function rx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sd(t){this._internalRoot=t}Mc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();Qg(a,o,t,n,null,null)},Mc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Qg(t.current,2,null,t,null,null),ic(),n[Vn]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Jr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,t),a===0&&ix(t)}};var ox=e.version;if(ox!=="19.2.8")throw Error(s(527,ox,"19.2.8"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Rb={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{ye=Ec.inject(Rb),Se=Ec}catch{}}return Go.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=p0,d=m0,S=g0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Zg(t,1,!1,null,null,a,o,null,u,d,S,rx),t[Vn]=n.current,id(t),new Sd(n)},Go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=p0,S=m0,R=g0,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=Zg(t,1,!0,n,a??null,o,u,j,d,S,R,rx),n.context=Kg(null),a=n.current,o=li(),o=Kr(o),u=Fa(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,Ye(n,a),Gi(n),t[Vn]=n.current,id(t),new Mc(n)},Go.version="19.2.8",Go}var xx;function Fb(){if(xx)return Td.exports;xx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=Bb(),Td.exports}var Hb=Fb();const el=[{id:"caneca-11oz",name:"Caneca Cerâmica 11oz",category:"Canecas",defaultWidthCm:20,defaultHeightCm:9.5,printAspect:"20 x 9.5 cm (Área Total Wrap)",model3D:"mug",description:"Caneca resinada para sublimação, acabamento alto brilho 325ml.",bgColor:"#ffffff",material:"Cerâmica Resinada Glaze",samplePrints:["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"]},{id:"camiseta-poliester",name:"Camiseta 100% Poliéster",category:"Camisetas",defaultWidthCm:29.7,defaultHeightCm:42,printAspect:"29.7 x 42 cm (A3 Frontal)",model3D:"tshirt",description:"Camiseta para sublimação total ou estampa localizada A3/A4.",bgColor:"#f4f4f6",material:"Poliéster PP Fio 30.1",samplePrints:["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"]},{id:"garrafa-inox",name:"Garrafa Térmica Inox 500ml",category:"Garrafas",defaultWidthCm:22.5,defaultHeightCm:18,printAspect:"22.5 x 18 cm (Envolvente)",model3D:"bottle",description:"Garrafa de aço inoxidável resinada com tampa hermética.",bgColor:"#e2e8f0",material:"Inox Resinado Dual Wall",samplePrints:["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80"]},{id:"copo-skinny-20oz",name:"Copo Skinny Tumbler 20oz",category:"Copos",defaultWidthCm:23,defaultHeightCm:20.5,printAspect:"23 x 20.5 cm (360° Seamless Wrap)",model3D:"tumbler",description:"Copo térmico reto 600ml com canudo e tampa acrílica.",bgColor:"#f8fafc",material:"Aço Inox Resinado 304",samplePrints:["https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800&auto=format&fit=crop&q=80"]},{id:"mousepad-gaming",name:"Mouse Pad Gaming Speed",category:"Mouse Pads",defaultWidthCm:70,defaultHeightCm:30,printAspect:"70 x 30 cm (XL Desk Mat)",model3D:"mousepad",description:"Mousepad gamer com base emborrachada antiderrapante e borda costurada.",bgColor:"#18181b",material:"Tecido Neoprene Sublimável",samplePrints:["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"]},{id:"ecobag-canvas",name:"Ecobag Poliéster Canvas",category:"Ecobags",defaultWidthCm:35,defaultHeightCm:40,printAspect:"35 x 40 cm (Frente e Verso)",model3D:"ecobag",description:"Sacola ecológica em tecido pesado de poliéster resinado.",bgColor:"#fef08a",material:"Lona de Poliéster 280g",samplePrints:["https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80"]},{id:"bone-trucker",name:"Boné Sublimável Trucker",category:"Bonés",defaultWidthCm:12,defaultHeightCm:6.5,printAspect:"12 x 6.5 cm (Testa Frontal)",model3D:"cap",description:"Boné modelo Trucker com tela traseira e frente de espuma branca.",bgColor:"#3b82f6",material:"Poliéster Dublado + Tela",samplePrints:["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80"]},{id:"azulejo-ceramica",name:"Azulejo Cerâmico 15x15cm",category:"Azulejos",defaultWidthCm:15,defaultHeightCm:15,printAspect:"15 x 15 cm (Total Quadrado)",model3D:"tile",description:"Placa cerâmica resinada de alta durabilidade com suporte de mesa.",bgColor:"#ffffff",material:"Cerâmica Resinada Premium",samplePrints:["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80"]},{id:"almofada-quadrada",name:"Almofada 40x40cm com Enchimento",category:"Almofadas",defaultWidthCm:40,defaultHeightCm:40,printAspect:"40 x 40 cm (Capa Zipper)",model3D:"pillow",description:"Capa de almofada em tecido oxford/microfibra macia com zíper invisível.",bgColor:"#f1f5f9",material:"Microfibra 100% Poliéster",samplePrints:["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80"]},{id:"quebracabeca-a4",name:"Quebra-Cabeça A4 (120 peças)",category:"Quebra-cabeças",defaultWidthCm:29.7,defaultHeightCm:21,printAspect:"29.7 x 21 cm (A4 Horizontal)",model3D:"puzzle",description:"Quebra-cabeça resinado cartonado rígido de alto brilho.",bgColor:"#e2e8f0",material:"Papelão Rígido Resinado 2mm",samplePrints:["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80"]},{id:"capinha-3d-wrap",name:"Capinha Celular 3D Full Wrap",category:"Capinhas",defaultWidthCm:16,defaultHeightCm:8,printAspect:"16 x 8 cm (Com bordas laterais)",model3D:"phonecase",description:"Capa protetora rígida em policarbonato com sublimação total 3D nas bordas.",bgColor:"#0f172a",material:"Policarbonato 3D Sublimável",samplePrints:["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"]},{id:"brindes-porta-copos",name:"Kit Porta-Copos Neoprene (4 Unidades)",category:"Brindes personalizados",defaultWidthCm:9,defaultHeightCm:9,printAspect:"9 x 9 cm (Quadrado/Redondo)",model3D:"coaster",description:"Base para copos impermeável com absorção de impacto e fundo emborrachado.",bgColor:"#334155",material:"Neoprene 3mm Sublimável",samplePrints:["https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80"]}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gb=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),vx=r=>{const e=Gb(r);return e.charAt(0).toUpperCase()+e.slice(1)},Cv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),Vb=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=Be.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},g)=>Be.createElement("svg",{ref:g,...jb,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Cv("lucide",l),...!c&&!Vb(p)&&{"aria-hidden":"true"},...p},[...f.map(([m,v])=>Be.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(r,e)=>{const i=Be.forwardRef(({className:s,...l},c)=>Be.createElement(Xb,{ref:c,iconNode:e,className:Cv(`lucide-${kb(vx(r))}`,`lucide-${r}`,s),...l}));return i.displayName=vx(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],_x=at("award",Wb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ks=at("box",qb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Rv=at("check",Yb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Nv=at("chevron-down",Zb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Dv=at("chevron-left",Kb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Jb=at("chevron-right",Qb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ey=at("chevron-up",$b);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ny=at("circle-alert",ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ay=at("circle-check",iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ry=at("circle",sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ly=at("clock",oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],bx=at("coffee",cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],fy=at("columns-2",uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],tu=at("copy",dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]],py=at("corner-up-right",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Uv=at("download",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Lv=at("eye-off",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ov=at("eye",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],_y=at("file-text",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],Pv=at("flip-horizontal",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Sy=at("folder-open",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],zv=at("folder-plus",My);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ty=at("heart",Ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],wy=at("hexagon",Ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Iv=at("history",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Bv=at("image-plus",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Dy=at("image",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],op=at("layers",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],Oy=at("layout-template",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],Fv=at("lock-open",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Hv=at("lock",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],hu=at("maximize-2",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Fy=at("menu",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ky=at("moon",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],Vy=at("paintbrush",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Xy=at("palette",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Fr=at("plus",Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Yy=at("printer",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ky=at("refresh-cw",Zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Jy=at("rotate-ccw",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],pu=at("rotate-cw",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],tS=at("save",eS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],iS=at("scissors",nS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],kv=at("search",aS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Gv=at("settings",sS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],oS=at("shapes",rS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],cS=at("share-2",lS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],mh=at("sliders-vertical",uS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],dS=at("sliders-horizontal",fS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],zi=at("sparkles",hS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],lp=at("square",pS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],yx=at("star",mS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Vv=at("sun",gS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],sl=at("trash-2",xS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],rl=at("type",vS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],bS=at("upload",_S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],ol=at("wand-sparkles",yS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tl=at("x",SS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],jv=at("zap",MS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],TS=at("zoom-in",ES);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],wS=at("zoom-out",AS);function CS({theme:r="dark",onExport:e,onNewProject:i,onOpenProject:s,onIncludeStamp:l,onSaveLayout:c,onOpenSettings:f}){const[p,g]=Be.useState(!1),m=Be.useRef(null);return Be.useEffect(()=>{const v=_=>{m.current&&!m.current.contains(_.target)&&g(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]),h.jsxs("div",{className:"relative",ref:m,children:[h.jsxs("button",{onClick:()=>g(!p),className:`p-2 rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${r==="light"?"hover:bg-slate-200 text-slate-700":"hover:bg-white/10 text-gray-200"}`,title:"Menu Principal",children:[h.jsx(Fy,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium hidden md:block text-sm",children:"Arquivo"})]}),p&&h.jsx("div",{className:`absolute top-full left-0 mt-2 w-60 rounded-xl shadow-xl border overflow-hidden z-50 transition-all ${r==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#1e1e20] border-[#2d2d30] text-gray-200"}`,children:h.jsxs("div",{className:"flex flex-col py-1",children:[h.jsxs("button",{onClick:()=>{g(!1),i==null||i()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(zv,{className:"w-4 h-4 text-purple-400 group-hover:text-white"}),"Novo Projeto"]}),h.jsxs("button",{onClick:()=>{g(!1),s==null||s()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(Sy,{className:"w-4 h-4 text-sky-400 group-hover:text-white"}),"Abrir Projeto..."]}),h.jsxs("button",{onClick:()=>{g(!1),l==null||l()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(Bv,{className:"w-4 h-4 text-emerald-400 group-hover:text-white"}),"Incluir Estampa (Imagem)"]}),h.jsx("hr",{className:`my-1 ${r==="light"?"border-slate-200":"border-[#2d2d30]"}`}),h.jsxs("button",{onClick:()=>{g(!1),c==null||c()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(tS,{className:"w-4 h-4 text-amber-400 group-hover:text-white"}),"Salvar Layout"]}),h.jsxs("button",{onClick:()=>{g(!1),e()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(Uv,{className:"w-4 h-4 text-indigo-400 group-hover:text-white"}),"Exportar Sublimação"]}),h.jsx("hr",{className:`my-1 ${r==="light"?"border-slate-200":"border-[#2d2d30]"}`}),h.jsxs("button",{onClick:()=>{g(!1),f==null||f()},className:"flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer",children:[h.jsx(Gv,{className:"w-4 h-4 text-slate-400 group-hover:text-white"}),"Configurações"]})]})})]})}const RS=({currentProduct:r,onOpenProductLibrary:e,onUndo:i,onRedo:s,canUndo:l,canRedo:c,onOpenExportModal:f,onOpenAIPanel:p,mirrorSublimation:g,onToggleMirrorSublimation:m,workspaceViewMode:v,onChangeWorkspaceViewMode:_,theme:x="dark",onToggleTheme:b,onNewProject:A,onOpenProject:N,onIncludeStamp:M,onSaveLayout:y,onOpenSettings:k,projectName:L="Arte Sublimação - Caneca 325ml",onChangeProjectName:w})=>{const[I,U]=Be.useState(L);Be.useEffect(()=>{U(L)},[L]);const B=T=>{U(T),w&&w(T)};return h.jsxs("header",{className:`h-12 border-b flex items-center justify-between px-3 select-none text-xs z-40 shadow-md transition-colors ${x==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#0e0f14] border-[#23242c] text-gray-200"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 px-2.5 py-1 rounded-xl shadow-md cursor-pointer hover:brightness-110 transition-all",children:[h.jsx(zi,{className:"w-4 h-4 text-white animate-pulse"}),h.jsx("span",{className:"font-extrabold tracking-wide text-white text-xs",children:"CANVA STUDIO"})]}),h.jsx(CS,{theme:x,onExport:f,onNewProject:A,onOpenProject:N,onIncludeStamp:M,onSaveLayout:y,onOpenSettings:k}),h.jsxs("div",{className:`flex items-center rounded-xl p-0.5 border ${x==="light"?"bg-slate-100 border-slate-300":"bg-[#181920] border-[#2b2c36]"}`,children:[h.jsx("button",{onClick:i,disabled:!l,className:`p-1.5 disabled:opacity-30 rounded-lg transition-colors cursor-pointer ${x==="light"?"text-slate-700 hover:text-black hover:bg-slate-200":"text-gray-300 hover:text-white hover:bg-white/5"}`,title:"Desfazer (Ctrl+Z)",children:h.jsx(Jy,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:s,disabled:!c,className:`p-1.5 disabled:opacity-30 rounded-lg transition-colors cursor-pointer ${x==="light"?"text-slate-700 hover:text-black hover:bg-slate-200":"text-gray-300 hover:text-white hover:bg-white/5"}`,title:"Refazer (Ctrl+Y)",children:h.jsx(pu,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:`hidden sm:flex items-center gap-1.5 text-[11px] font-medium ${x==="light"?"text-slate-500":"text-gray-400"}`,children:[h.jsx(ay,{className:"w-3.5 h-3.5 text-emerald-500"}),h.jsx("span",{children:"Salvo nas nuvens"})]}),h.jsx("div",{className:`hidden md:block w-[1px] h-4 ${x==="light"?"bg-slate-200":"bg-[#23242c]"}`}),h.jsx("input",{type:"text",value:I,onChange:T=>B(T.target.value),className:`bg-transparent px-2 py-1 rounded-lg text-xs font-semibold border border-transparent focus:border-purple-500 focus:outline-none transition-all max-w-[180px] sm:max-w-[240px] truncate ${x==="light"?"text-slate-900 hover:bg-slate-100 hover:border-slate-300 focus:bg-white":"text-white hover:bg-[#1a1b22] hover:border-[#30313c] focus:bg-[#1a1b22]"}`,title:"Clique para renomear este projeto"}),h.jsxs("button",{onClick:e,className:`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-medium transition-all group cursor-pointer ${x==="light"?"bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700":"bg-[#181920] hover:bg-[#20212b] border-[#2b2c36] text-gray-300"}`,title:"Trocar Produto / Redimensionar",children:[h.jsx("span",{className:"text-purple-600 font-bold",children:"Redimensionar:"}),h.jsx("span",{className:`font-semibold ${x==="light"?"text-slate-900":"text-white"}`,children:r.name}),h.jsx(Nv,{className:"w-3 h-3 text-gray-400 group-hover:text-purple-600"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:`flex items-center p-0.5 rounded-xl border ${x==="light"?"bg-slate-100 border-slate-300":"bg-[#181920] border-[#2b2c36]"}`,children:[h.jsxs("button",{onClick:()=>_("canvas"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${v==="canvas"?"bg-purple-600 text-white shadow-md shadow-purple-600/30":x==="light"?"text-slate-600 hover:text-slate-900 hover:bg-slate-200":"text-gray-400 hover:text-white hover:bg-white/5"}`,title:"Modo Foco 2D Canva",children:[h.jsx(lp,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden md:inline",children:"Design 2D"})]}),h.jsxs("button",{onClick:()=>_("split"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${v==="split"?"bg-purple-600 text-white shadow-md shadow-purple-600/30":x==="light"?"text-slate-600 hover:text-slate-900 hover:bg-slate-200":"text-gray-400 hover:text-white hover:bg-white/5"}`,title:"Modo Tela Dividida (2D + 3D)",children:[h.jsx(fy,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden md:inline",children:"Tela Dividida"})]}),h.jsxs("button",{onClick:()=>_("mockup"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${v==="mockup"?"bg-purple-600 text-white shadow-md shadow-purple-600/30":x==="light"?"text-slate-600 hover:text-slate-900 hover:bg-slate-200":"text-gray-400 hover:text-white hover:bg-white/5"}`,title:"Simulador 3D HD em Tela Cheia",children:[h.jsx(ks,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden md:inline",children:"Simulador 3D"})]})]}),h.jsxs("button",{onClick:m,className:`hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-semibold transition-all cursor-pointer ${g?"bg-amber-500/20 text-amber-600 border-amber-500/40":x==="light"?"bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900":"bg-white/5 border-white/10 text-gray-400 hover:text-gray-200"}`,title:"Espelhamento de estampa para papel sublimático",children:[h.jsx(Pv,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["ESPELHAR: ",g?"SIM":"NÃO"]})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[b&&h.jsx("button",{onClick:b,className:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer font-semibold ${x==="light"?"bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100":"bg-[#181920] text-purple-300 border-[#2b2c36] hover:bg-[#20212b] hover:text-purple-200"}`,title:`Alternar para Tema ${x==="light"?"Escuro":"Claro"}`,children:x==="light"?h.jsxs(h.Fragment,{children:[h.jsx(Vv,{className:"w-4 h-4 text-amber-500"}),h.jsx("span",{className:"hidden lg:inline text-[11px]",children:"Tema Claro"})]}):h.jsxs(h.Fragment,{children:[h.jsx(ky,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{className:"hidden lg:inline text-[11px]",children:"Tema Escuro"})]})}),h.jsxs("button",{onClick:p,className:`flex items-center gap-1.5 px-3 py-1.5 font-bold rounded-xl transition-all shadow-sm cursor-pointer ${x==="light"?"bg-purple-50 hover:bg-purple-100 border border-purple-300 text-purple-700":"bg-[#181920] hover:bg-[#20212b] border border-purple-500/40 text-purple-300 hover:text-purple-200"}`,children:[h.jsx(ol,{className:"w-3.5 h-3.5 text-purple-500"}),h.jsx("span",{className:"hidden sm:inline",children:"IA Studio"})]}),h.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg shadow-purple-600/25 transition-all cursor-pointer active:scale-95",children:[h.jsx(cS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Baixar / Exportar"})]})]})]})},NS=({activeTool:r,onSelectTool:e,selectedShape:i,onSelectShape:s,activeColor:l,onChangeColor:c,brushSize:f,onChangeBrushSize:p,onAddLayer:g,currentProduct:m,onSelectProduct:v,layers:_,activeLayerId:x,onSelectLayer:b,onUpdateLayer:A,onDeleteLayer:N,onDuplicateLayer:M,onAddAIGeneratedImage:y,onOpenAIPanel:k,theme:L="dark"})=>{const[w,I]=Be.useState("templates"),[U,B]=Be.useState(!0),[T,z]=Be.useState(""),G=[{id:"tropical-vibes",title:"Tropical Sublimação",category:"Floral & Natureza",imageUrl:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80"},{id:"mother-day",title:"Melhor Mãe do Mundo",category:"Datas Especiais",imageUrl:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80"},{id:"cyberpunk-neon",title:"Cyberpunk Neon",category:"Geométrico / Moderno",imageUrl:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80"},{id:"watercolor-gold",title:"Aquarela Ouro Rosa",category:"Elegante",imageUrl:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80"},{id:"vintage-coffee",title:"Café Vintage Premium",category:"Canecas & Bar",imageUrl:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"}],V=[{id:"p1",url:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",tag:"Floral"},{id:"p2",url:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80",tag:"Neon"},{id:"p3",url:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80",tag:"Aquarela"},{id:"p4",url:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",tag:"Marmorizado"},{id:"p5",url:"https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",tag:"Arte Moderna"},{id:"p6",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",tag:"Praia Tropical"}],q=[{id:"rectangle",label:"Retângulo",icon:h.jsx(lp,{className:"w-5 h-5"})},{id:"circle",label:"Círculo",icon:h.jsx(ry,{className:"w-5 h-5"})},{id:"polygon",label:"Hexágono",icon:h.jsx(wy,{className:"w-5 h-5"})},{id:"star",label:"Estrela",icon:h.jsx(yx,{className:"w-5 h-5"})},{id:"badge",label:"Selo de Qualidade",icon:h.jsx(_x,{className:"w-5 h-5"})},{id:"heart",label:"Coração",icon:h.jsx(Ty,{className:"w-5 h-5"})}],fe=P=>{w===P&&U?B(!1):(I(P),B(!0))},W=P=>{var $;const O=($=P.target.files)==null?void 0:$[0];if(!O)return;const H=new FileReader;H.onload=re=>{var D;const me=(D=re.target)==null?void 0:D.result;me&&y&&y(me,O.name.replace(/\.[^/.]+$/,""))},H.readAsDataURL(O)};return h.jsxs("div",{className:"flex h-full select-none z-30 relative",children:[h.jsxs("aside",{className:`w-18 border-r flex flex-col items-center py-3 gap-3 select-none z-40 transition-colors ${L==="light"?"bg-slate-100 border-slate-300 text-slate-600":"bg-[#0d0e12] border-[#23242a] text-gray-400"}`,children:[h.jsxs("button",{onClick:()=>fe("templates"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="templates"&&U?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Modelos de Estampa",children:[h.jsx(Oy,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Modelos"})]}),h.jsxs("button",{onClick:()=>fe("elements"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="elements"&&U?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Elementos & Formas",children:[h.jsx(oS,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Elementos"})]}),h.jsxs("button",{onClick:()=>fe("text"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="text"&&U?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Inserir Texto & Arco",children:[h.jsx(rl,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Texto"})]}),h.jsxs("button",{onClick:()=>fe("uploads"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="uploads"&&U?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Minhas Imagens & Galeria",children:[h.jsx(Bv,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Uploads"})]}),h.jsxs("button",{onClick:()=>fe("products"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="products"&&U?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Produtos Sublimáveis",children:[h.jsx(bx,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Produtos"})]}),h.jsxs("button",{onClick:()=>fe("ai"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer relative ${w==="ai"&&U?"bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 text-purple-600 border border-purple-500/50 shadow-lg":L==="light"?"text-purple-600 hover:bg-purple-100 hover:text-purple-700":"text-purple-400 hover:bg-purple-950/30 hover:text-purple-200"}`,title:"Estúdio IA Generativo",children:[h.jsx(zi,{className:"w-5 h-5 mb-1 text-purple-600"}),h.jsx("span",{className:"text-[10px] font-semibold",children:"Estúdio IA"}),h.jsx("span",{className:"absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-500 animate-pulse"})]}),h.jsxs("button",{onClick:()=>fe("layers"),className:`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${w==="layers"&&U?"bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg":L==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:bg-white/5 hover:text-white"}`,title:"Camadas & Z-Index",children:[h.jsx(op,{className:"w-5 h-5 mb-1"}),h.jsx("span",{className:"text-[10px] font-medium",children:"Camadas"})]}),h.jsx("div",{className:`mt-auto w-10 h-[1px] ${L==="light"?"bg-slate-300":"bg-[#23242a]"}`}),h.jsx("div",{className:"flex flex-col items-center gap-1 my-1",children:h.jsx("label",{className:"w-7 h-7 rounded-full border-2 border-slate-300 shadow-md cursor-pointer hover:scale-110 transition-transform relative overflow-hidden",style:{backgroundColor:l},title:"Mudar Cor Principal",children:h.jsx("input",{type:"color",value:l,onChange:P=>c(P.target.value),className:"opacity-0 absolute inset-0 w-full h-full cursor-pointer"})})})]}),U&&h.jsxs("div",{className:`w-80 border-r flex flex-col h-full text-xs z-30 shadow-2xl relative animate-in slide-in-from-left duration-200 transition-colors ${L==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#16171d] border-[#26272e] text-gray-200"}`,children:[h.jsxs("div",{className:`p-4 border-b flex items-center justify-between ${L==="light"?"border-slate-200":"border-[#26272e]"}`,children:[h.jsxs("h2",{className:`font-bold text-sm capitalize flex items-center gap-2 ${L==="light"?"text-slate-900":"text-white"}`,children:[w==="templates"&&h.jsx(h.Fragment,{children:"🎨 Modelos de Estampa"}),w==="elements"&&h.jsx(h.Fragment,{children:"📐 Elementos & Formas"}),w==="text"&&h.jsx(h.Fragment,{children:"🔤 Adicionar Texto"}),w==="uploads"&&h.jsx(h.Fragment,{children:"🖼️ Fotos e Uploads"}),w==="products"&&h.jsx(h.Fragment,{children:"☕ Produtos Sublimáveis"}),w==="ai"&&h.jsx(h.Fragment,{children:"✨ Estúdio IA Generativo"}),w==="layers"&&h.jsx(h.Fragment,{children:"🥞 Painel de Camadas"})]}),h.jsx("button",{onClick:()=>B(!1),className:`p-1 rounded-lg transition-colors cursor-pointer ${L==="light"?"hover:bg-slate-100 text-slate-500 hover:text-slate-900":"hover:bg-white/10 text-gray-400 hover:text-white"}`,title:"Recolher Painel",children:h.jsx(Dv,{className:"w-4 h-4"})})]}),w!=="layers"&&h.jsx("div",{className:"px-4 pt-3 pb-2",children:h.jsxs("div",{className:"relative",children:[h.jsx(kv,{className:`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${L==="light"?"text-slate-400":"text-gray-400"}`}),h.jsx("input",{type:"text",value:T,onChange:P=>z(P.target.value),placeholder:`Buscar em ${w}...`,className:`w-full rounded-xl pl-9 pr-3 py-2 text-xs border focus:outline-none focus:border-purple-500 transition-colors ${L==="light"?"bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white":"bg-[#202127] border-[#30313a] text-white placeholder-gray-500"}`})]})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[w==="templates"&&h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block",children:"Estampas Prontas Recomendadas"}),h.jsx("div",{className:"grid grid-cols-1 gap-3",children:G.filter(P=>P.title.toLowerCase().includes(T.toLowerCase())).map(P=>h.jsxs("div",{onClick:()=>{y&&y(P.imageUrl,P.title)},className:"group relative rounded-2xl overflow-hidden border border-[#2d2e36] hover:border-purple-500/80 cursor-pointer shadow-md transition-all hover:scale-[1.02]",children:[h.jsx("img",{src:P.imageUrl,alt:P.title,className:"w-full h-28 object-cover group-hover:brightness-110 transition-all"}),h.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end",children:[h.jsx("span",{className:"text-white font-bold text-xs group-hover:text-purple-300 transition-colors",children:P.title}),h.jsx("span",{className:"text-[10px] text-gray-300 font-medium",children:P.category})]})]},P.id))})]}),w==="elements"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2",children:"Formas Geométricas"}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:q.map(P=>h.jsxs("button",{onClick:()=>{s(P.id),g("shape",P.id)},className:"flex flex-col items-center justify-center p-3 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] hover:border-purple-500 rounded-xl transition-all cursor-pointer group text-gray-300 hover:text-white",children:[h.jsx("div",{className:"text-purple-400 group-hover:scale-110 transition-transform mb-1",children:P.icon}),h.jsx("span",{className:"text-[10px] font-medium text-center truncate w-full",children:P.label})]},P.id))})]}),h.jsxs("div",{className:"border-t border-[#26272e] pt-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2",children:"Selos e Emblemas Sublimáticos"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{onClick:()=>g("shape","badge"),className:"p-3 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/40 hover:border-purple-400 rounded-xl text-left flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02]",children:[h.jsx(_x,{className:"w-6 h-6 text-amber-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-white block text-[11px]",children:"Selo 100% Sublimado"}),h.jsx("span",{className:"text-[9px] text-purple-300",children:"Vetor Editável"})]})]}),h.jsxs("button",{onClick:()=>g("shape","star"),className:"p-3 bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-500/40 hover:border-amber-400 rounded-xl text-left flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02]",children:[h.jsx(yx,{className:"w-6 h-6 text-amber-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-white block text-[11px]",children:"Estrela Destaque"}),h.jsx("span",{className:"text-[9px] text-amber-300",children:"Forma Especial"})]})]})]})]})]}),w==="text"&&h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block",children:"Clique para Inserir Texto"}),h.jsxs("button",{onClick:()=>g("text"),className:"w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-lg rounded-xl shadow-lg transition-all text-left flex items-center justify-between cursor-pointer active:scale-95",children:[h.jsx("span",{children:"Adicionar um título"}),h.jsx(Fr,{className:"w-5 h-5"})]}),h.jsxs("button",{onClick:()=>g("text"),className:"w-full py-2.5 px-4 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] text-white font-bold text-sm rounded-xl transition-all text-left flex items-center justify-between cursor-pointer",children:[h.jsx("span",{children:"Adicionar um subtítulo"}),h.jsx(Fr,{className:"w-4 h-4 text-purple-400"})]}),h.jsxs("button",{onClick:()=>g("text"),className:"w-full py-2 px-4 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] text-gray-300 hover:text-white font-medium text-xs rounded-xl transition-all text-left flex items-center justify-between cursor-pointer",children:[h.jsx("span",{children:"Adicionar um pouquinho de texto"}),h.jsx(Fr,{className:"w-4 h-4 text-gray-400"})]}),h.jsxs("div",{className:"border-t border-[#26272e] pt-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2",children:"Texto Curvado para Caneca"}),h.jsxs("button",{onClick:()=>g("text"),className:"w-full p-3 bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-sky-900/30 border border-purple-500/30 hover:border-purple-400 rounded-xl text-left flex items-center justify-between cursor-pointer",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-purple-300 block text-xs",children:"Arco de Caneca (Curvado)"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Excelente para nomes e datas"})]}),h.jsx(rl,{className:"w-5 h-5 text-purple-400"})]})]})]}),w==="uploads"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("label",{className:"w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer",children:[h.jsx(bS,{className:"w-4 h-4"}),h.jsx("span",{children:"Fazer Upload de Imagem"}),h.jsx("input",{type:"file",accept:"image/*",onChange:W,className:"hidden"})]}),h.jsxs("div",{className:"border-t border-[#26272e] pt-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2",children:"Galeria de Fundos Sublimáticos HD"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:V.map(P=>h.jsxs("div",{onClick:()=>{y&&y(P.url,P.tag)},className:"group relative h-24 rounded-xl overflow-hidden border border-[#2d2e36] hover:border-purple-500 cursor-pointer shadow-sm transition-all hover:scale-105",children:[h.jsx("img",{src:P.url,alt:P.tag,className:"w-full h-full object-cover"}),h.jsx("div",{className:"absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors p-2 flex items-end",children:h.jsx("span",{className:"text-white text-[10px] font-semibold",children:P.tag})})]},P.id))})]})]}),w==="products"&&h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block",children:"Escolha o Produto para Criar"}),h.jsx("div",{className:"grid grid-cols-1 gap-2",children:el.map(P=>{const O=m.id===P.id;return h.jsxs("div",{onClick:()=>v(P),className:`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${O?"bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10":"bg-[#202127] border-[#30313a] text-gray-300 hover:bg-[#2a2b33] hover:text-white"}`,children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold shrink-0",children:h.jsx(bx,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-bold text-xs truncate",children:P.name}),O&&h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),h.jsx("span",{className:"text-[10px] text-gray-400 block font-mono",children:P.printAspect})]})]},P.id)})})]}),w==="ai"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"p-3 bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-sky-900/40 border border-purple-500/40 rounded-2xl space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 text-purple-300 font-bold text-xs",children:[h.jsx(zi,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{children:"Estúdio IA Generativo"})]}),h.jsx("p",{className:"text-[11px] text-gray-300",children:"Crie estampas exclusivas em 300 DPI por comando de voz ou texto, remova fundos e vetorize."}),h.jsxs("button",{onClick:()=>{k&&k()},className:"w-full py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5",children:[h.jsx(ol,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Abrir Painel IA Completo"})]})]}),h.jsxs("div",{className:"space-y-2 border-t border-[#26272e] pt-3",children:[h.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider block",children:"Ferramentas de Imagem IA"}),h.jsxs("button",{onClick:()=>e("remove_bg"),className:"w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200",children:[h.jsx(ol,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{children:"Remover Fundo da Imagem"})]}),h.jsxs("button",{onClick:()=>e("vectorize"),className:"w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200",children:[h.jsx(zi,{className:"w-4 h-4 text-sky-400"}),h.jsx("span",{children:"Vetorizar Imagem para Sublimação"})]}),h.jsxs("button",{onClick:()=>e("upscale"),className:"w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200",children:[h.jsx(hu,{className:"w-4 h-4 text-amber-400"}),h.jsx("span",{children:"Upscale IA 300 DPI Impressão"})]})]})]}),w==="layers"&&h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#26272e]",children:[h.jsxs("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider",children:["Camadas na Tela (",_.length,")"]}),h.jsx("button",{onClick:()=>g("text"),className:"p-1 hover:bg-white/10 text-purple-400 rounded transition-colors",title:"Adicionar Nova Camada",children:h.jsx(Fr,{className:"w-4 h-4"})})]}),h.jsx("div",{className:"space-y-1.5",children:_.slice().reverse().map(P=>{const O=x===P.id;return h.jsxs("div",{onClick:()=>b(P.id),className:`p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${O?"bg-purple-600/20 border-purple-500 text-white shadow-md":"bg-[#202127] border-[#30313a] text-gray-300 hover:bg-[#2a2b33]"}`,children:[h.jsx("div",{className:"flex items-center gap-2 min-w-0",children:h.jsx("span",{className:"text-xs font-bold truncate max-w-[140px]",children:P.name})}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("button",{onClick:H=>{H.stopPropagation(),A({...P,visible:!P.visible})},className:"p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white",children:P.visible?h.jsx(Ov,{className:"w-3.5 h-3.5 text-purple-400"}):h.jsx(Lv,{className:"w-3.5 h-3.5 text-gray-600"})}),h.jsx("button",{onClick:H=>{H.stopPropagation(),A({...P,locked:!P.locked})},className:"p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white",children:P.locked?h.jsx(Hv,{className:"w-3.5 h-3.5 text-amber-400"}):h.jsx(Fv,{className:"w-3.5 h-3.5 text-gray-500"})}),N&&h.jsx("button",{onClick:H=>{H.stopPropagation(),N(P.id)},className:"p-1 hover:bg-red-500/20 text-gray-400 hover:text-red-300 rounded",children:h.jsx(sl,{className:"w-3.5 h-3.5"})})]})]},P.id)})})]})]})]})]})},DS=({product:r,layers:e,activeLayerId:i,onSelectLayer:s,onUpdateLayer:l,onDeleteLayer:c,onDuplicateLayer:f,onChangeColor:p,activeTool:g,selectedShape:m,activeColor:v,brushSize:_,mirrorSublimation:x,showGrid:b,showRulers:A,onCanvasRendered:N,theme:M="dark"})=>{const y=Be.useRef(null),k=Be.useRef(null),[L,w]=Be.useState(1),[I,U]=Be.useState({x:0,y:0}),B=Be.useRef(!1),T=Be.useRef({x:0,y:0}),z=Be.useRef(!1),G=Be.useRef([]),V=Be.useRef(!1),q=Be.useRef({x:0,y:0}),fe=Be.useRef(null),W=Be.useRef(null),P=Math.round(r.defaultWidthCm/2.54*150),O=Math.round(r.defaultHeightCm/2.54*150),H=Be.useRef(new Map),$=()=>{if(!y.current)return;const ne=y.current.clientWidth-80,J=y.current.clientHeight-80;if(ne<=0||J<=0)return;const Y=ne/P,ge=J/O,xe=Math.min(Y,ge,1.2);w(Math.max(.15,xe)),U({x:0,y:0})};Be.useEffect(()=>{$()},[P,O,r.id]),Be.useEffect(()=>{const ne=k.current;if(!ne)return;ne.width=P,ne.height=O;const J=ne.getContext("2d");if(!J)return;J.clearRect(0,0,ne.width,ne.height),J.fillStyle=r.bgColor||"#ffffff",J.fillRect(0,0,ne.width,ne.height),J.save(),x&&(J.translate(ne.width,0),J.scale(-1,1)),e.filter(ve=>ve.visible).forEach(ve=>{J.save(),J.globalAlpha=ve.opacity/100,J.globalCompositeOperation=ve.blendMode;const Fe=ve.x+ve.width/2,Oe=ve.y+ve.height/2;if(J.translate(Fe,Oe),J.rotate(ve.rotation*Math.PI/180),J.translate(-ve.width/2,-ve.height/2),ve.type==="text")if(J.fillStyle=ve.color||v,J.font=`${ve.fontWeight||"normal"} ${ve.fontSize||36}px ${ve.fontFamily||"Arial"}`,J.textAlign=ve.textAlign||"left",J.textBaseline="top",ve.textCurved&&ve.curveRadius){const Pe=ve.content,Je=ve.curveRadius||120;J.save();for(let nt=0;nt<Pe.length;nt++)J.save(),J.rotate((nt-Pe.length/2)*.15),J.fillText(Pe[nt],0,-Je),J.restore();J.restore()}else J.fillText(ve.content,0,0);else if(ve.type==="image"||ve.type==="smart"){if(ve.content){let Pe=H.current.get(ve.content);Pe||(Pe=new Image,Pe.crossOrigin="anonymous",Pe.src=ve.content,H.current.set(ve.content,Pe),Pe.onload=()=>{k.current&&N(k.current)},Pe.onerror=()=>{const Je=document.createElement("canvas");Je.width=400,Je.height=400;const nt=Je.getContext("2d");if(nt){const ut=nt.createLinearGradient(0,0,400,400);ut.addColorStop(0,"#0284c7"),ut.addColorStop(1,"#7e22ce"),nt.fillStyle=ut,nt.fillRect(0,0,400,400),nt.fillStyle="#ffffff",nt.font="bold 20px sans-serif",nt.textAlign="center",nt.fillText("Estampa Sublimática",200,200)}Pe.src=Je.toDataURL()}),Pe.complete&&Pe.naturalWidth>0&&J.drawImage(Pe,0,0,ve.width,ve.height)}}else if(ve.type==="shape")J.fillStyle=ve.color||v,J.strokeStyle=ve.strokeColor||"#000000",J.lineWidth=ve.strokeWidth||0,J.beginPath(),ve.shapeType==="circle"?J.ellipse(ve.width/2,ve.height/2,ve.width/2,ve.height/2,0,0,2*Math.PI):ve.shapeType==="star"?Q(J,ve.width/2,ve.height/2,5,ve.width/2,ve.width/4):ve.shapeType==="heart"?Ee(J,0,0,ve.width,ve.height):J.rect(0,0,ve.width,ve.height),J.fill(),ve.strokeWidth&&ve.strokeWidth>0&&J.stroke();else if(ve.type==="brush"){J.fillStyle=ve.color||v,J.strokeStyle=ve.color||v,J.lineWidth=ve.strokeWidth||_,J.lineCap="round",J.lineJoin="round";try{const Pe=JSON.parse(ve.content||"[]");Pe.length>0&&(J.beginPath(),J.moveTo(Pe[0].x,Pe[0].y),Pe.forEach(Je=>J.lineTo(Je.x,Je.y)),J.stroke())}catch{}}J.restore()}),J.restore();const ge=document.createElement("canvas");ge.width=ne.width,ge.height=ne.height;const xe=ge.getContext("2d");xe&&(xe.drawImage(ne,0,0),N(ge));const De=e.find(ve=>ve.id===i);if(De&&De.visible){J.save(),J.strokeStyle="#007acc",J.lineWidth=2,J.setLineDash([6,4]);const ve=De.x+De.width/2,Fe=De.y+De.height/2;J.translate(ve,Fe),J.rotate(De.rotation*Math.PI/180),J.translate(-De.width/2,-De.height/2),J.strokeRect(0,0,De.width,De.height),J.setLineDash([]),J.fillStyle="#ffffff";const Oe=8;[{x:0,y:0},{x:De.width,y:0},{x:0,y:De.height},{x:De.width,y:De.height}].forEach(Je=>{J.fillRect(Je.x-Oe/2,Je.y-Oe/2,Oe,Oe),J.strokeRect(Je.x-Oe/2,Je.y-Oe/2,Oe,Oe)}),J.fillStyle="#007acc",J.beginPath(),J.arc(De.width/2,-20,6,0,Math.PI*2),J.fill(),J.restore()}},[e,i,r,x,P,O]);const re=ne=>{const J=k.current;if(!J)return;const Y=J.getBoundingClientRect(),ge=J.width/Y.width,xe=J.height/Y.height,De=(ne.clientX-Y.left)*ge,ve=(ne.clientY-Y.top)*xe;if(g==="move"||ne.spaceKey){B.current=!0,T.current={x:ne.clientX-I.x,y:ne.clientY-I.y};return}if(g==="brush"){z.current=!0,G.current=[{x:De,y:ve}];return}if(g==="eyedropper"){const Oe=J.getContext("2d");if(Oe){const Pe=Oe.getImageData(Math.round(De),Math.round(ve),1,1).data,Je=`#${((1<<24)+(Pe[0]<<16)+(Pe[1]<<8)+Pe[2]).toString(16).slice(1)}`;p&&p(Je)}return}if(g==="eraser"){const Oe=[...e].reverse().find(Pe=>De>=Pe.x&&De<=Pe.x+Pe.width&&ve>=Pe.y&&ve<=Pe.y+Pe.height);Oe&&c&&c(Oe.id);return}if(g==="text"){const Oe="layer-"+Date.now(),Pe={id:Oe,name:"Texto "+(e.length+1),type:"text",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:Math.max(20,De-150),y:Math.max(20,ve-30),width:350,height:70,rotation:0,content:"TEXTO PERSONALIZADO",color:v,fontSize:36,fontFamily:"Impact",fontWeight:"bold"};l(Pe),s(Oe);return}if(g==="shapes"){const Oe="layer-"+Date.now(),Pe={id:Oe,name:"Forma "+m,type:"shape",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:Math.max(20,De-100),y:Math.max(20,ve-100),width:200,height:200,rotation:0,content:"",shapeType:m,color:v};l(Pe),s(Oe);return}if(i){const Oe=e.find(Pe=>Pe.id===i);if(Oe&&Oe.visible){const Pe=Oe.x+Oe.width/2,Je=Oe.y+Oe.height/2,nt=-Oe.rotation*Math.PI/180,ut=De-Pe,pt=ve-Je,Ct=ut*Math.cos(nt)-pt*Math.sin(nt)+Oe.width/2,Yt=ut*Math.sin(nt)+pt*Math.cos(nt)+Oe.height/2;if(Math.hypot(Ct-Oe.width/2,Yt- -20)<=16){fe.current="rotate",W.current={mouseX:De,mouseY:ve,x:Oe.x,y:Oe.y,w:Oe.width,h:Oe.height,rot:Oe.rotation};return}if(Math.abs(Ct-Oe.width)<=16&&Math.abs(Yt-Oe.height)<=16){fe.current="br",W.current={mouseX:De,mouseY:ve,x:Oe.x,y:Oe.y,w:Oe.width,h:Oe.height,rot:Oe.rotation};return}}}const Fe=[...e].reverse().find(Oe=>De>=Oe.x&&De<=Oe.x+Oe.width&&ve>=Oe.y&&ve<=Oe.y+Oe.height);Fe?(s(Fe.id),V.current=!0,q.current={x:De-Fe.x,y:ve-Fe.y}):s(null)},me=ne=>{const J=k.current;if(!J)return;if(B.current){U({x:ne.clientX-T.current.x,y:ne.clientY-T.current.y});return}const Y=J.getBoundingClientRect(),ge=J.width/Y.width,xe=J.height/Y.height,De=(ne.clientX-Y.left)*ge,ve=(ne.clientY-Y.top)*xe;if(fe.current&&i&&W.current){const Fe=e.find(Oe=>Oe.id===i);if(Fe){const Oe=W.current;if(fe.current==="rotate"){const Pe=Fe.x+Fe.width/2,Je=Fe.y+Fe.height/2;let nt=Math.atan2(ve-Je,De-Pe)*(180/Math.PI)+90;nt<0&&(nt+=360),l({...Fe,rotation:Math.round(nt)});return}if(fe.current==="br"){const Pe=De-Oe.mouseX,Je=ve-Oe.mouseY,nt=Math.max(20,Math.round(Oe.w+Pe)),ut=Math.max(20,Math.round(Oe.h+Je));l({...Fe,width:nt,height:ut});return}}}if(z.current&&g==="brush")G.current.push({x:De,y:ve});else if(V.current&&i){const Fe=e.find(Oe=>Oe.id===i);Fe&&l({...Fe,x:De-q.current.x,y:ve-q.current.y})}},D=()=>{if(fe.current=null,W.current=null,z.current&&g==="brush"&&(z.current=!1,G.current.length>0)){const ne={id:"layer-"+Date.now(),name:"Traço Pincel "+(e.length+1),type:"brush",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:0,y:0,width:P,height:O,rotation:0,content:JSON.stringify(G.current),color:v,strokeWidth:_};l(ne),G.current=[]}B.current=!1,V.current=!1},Q=(ne,J,Y,ge,xe,De)=>{let ve=Math.PI/2*3,Fe=J,Oe=Y;const Pe=Math.PI/ge;ne.beginPath(),ne.moveTo(J,Y-xe);for(let Je=0;Je<ge;Je++)Fe=J+Math.cos(ve)*xe,Oe=Y+Math.sin(ve)*xe,ne.lineTo(Fe,Oe),ve+=Pe,Fe=J+Math.cos(ve)*De,Oe=Y+Math.sin(ve)*De,ne.lineTo(Fe,Oe),ve+=Pe;ne.lineTo(J,Y-xe),ne.closePath()},Ee=(ne,J,Y,ge,xe)=>{ne.beginPath(),ne.moveTo(J+ge/2,Y+xe/4),ne.bezierCurveTo(J+ge/2,Y,J,Y,J,Y+xe/4),ne.bezierCurveTo(J,Y+xe/2,J+ge/2,Y+xe*3/4,J+ge/2,Y+xe),ne.bezierCurveTo(J+ge/2,Y+xe*3/4,J+ge,Y+xe/2,J+ge,Y+xe/4),ne.bezierCurveTo(J+ge,Y,J+ge/2,Y,J+ge/2,Y+xe/4),ne.closePath()};return h.jsxs("div",{ref:y,className:`relative flex-1 w-full h-full overflow-hidden flex items-center justify-center select-none transition-colors ${M==="light"?"bg-slate-200":"bg-[#121214]"}`,children:[A&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:`absolute top-0 left-0 right-0 h-5 border-b z-20 flex items-center text-[9px] font-mono px-6 ${M==="light"?"bg-slate-100 border-slate-300 text-slate-600":"bg-[#1a1a1c] border-[#2d2d30] text-gray-500"}`,children:[h.jsx("span",{className:"mr-8",children:"0mm"}),h.jsx("span",{className:"mr-8",children:"50mm"}),h.jsx("span",{className:"mr-8",children:"100mm"}),h.jsx("span",{className:"mr-8",children:"150mm"}),h.jsx("span",{className:"mr-8",children:"200mm"}),h.jsx("span",{children:"250mm"})]}),h.jsxs("div",{className:`absolute top-0 left-0 bottom-0 w-5 border-r z-20 flex flex-col items-center text-[9px] font-mono py-6 ${M==="light"?"bg-slate-100 border-slate-300 text-slate-600":"bg-[#1a1a1c] border-[#2d2d30] text-gray-500"}`,children:[h.jsx("span",{className:"mb-8",children:"0"}),h.jsx("span",{className:"mb-8",children:"50"}),h.jsx("span",{className:"mb-8",children:"100"}),h.jsx("span",{className:"mb-8",children:"150"})]})]}),h.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:b?`radial-gradient(circle, ${M==="light"?"#64748b":"#475569"} 1px, transparent 1px)`:"none",backgroundSize:"20px 20px"}}),h.jsxs("div",{style:{transform:`translate(${I.x}px, ${I.y}px) scale(${L})`,transition:B.current?"none":"transform 0.1s ease-out"},className:`relative shadow-2xl rounded-sm border bg-white ${M==="light"?"border-purple-300 shadow-slate-400/50":"border-sky-500/30"}`,children:[h.jsxs("div",{className:`absolute -top-6 left-0 right-0 flex items-center justify-between text-[10px] font-mono font-semibold px-1 pointer-events-none ${M==="light"?"text-purple-700":"text-sky-400"}`,children:[h.jsx("span",{children:"ÁREA IMPRIMÍVEL 300 DPI"}),h.jsx("span",{children:r.printAspect})]}),h.jsx("canvas",{ref:k,onMouseDown:re,onMouseMove:me,onMouseUp:D,onMouseLeave:D,className:"cursor-crosshair shadow-2xl block"})]}),i&&h.jsx("div",{className:`absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-2 backdrop-blur-lg border rounded-2xl shadow-2xl z-30 text-xs animate-in fade-in slide-in-from-top-3 duration-200 ${M==="light"?"bg-white/95 border-purple-200 text-slate-800 shadow-slate-300/60":"bg-[#181920]/95 border-purple-500/40 text-gray-200"}`,children:(()=>{const ne=e.find(J=>J.id===i);return ne?h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("span",{className:"text-[11px] font-bold text-purple-300 max-w-[110px] truncate bg-purple-950/60 px-2 py-0.5 rounded-lg border border-purple-500/30",children:ne.name}),h.jsx("div",{className:"w-[1px] h-4 bg-white/20"}),ne.type==="text"&&h.jsxs(h.Fragment,{children:[h.jsxs("select",{value:ne.fontFamily||"Impact",onChange:J=>l({...ne,fontFamily:J.target.value}),className:"bg-[#23242e] text-white text-[11px] px-2 py-1 rounded-lg border border-[#383945] focus:outline-none focus:border-purple-500 cursor-pointer",children:[h.jsx("option",{value:"Impact",children:"Impact"}),h.jsx("option",{value:"Arial",children:"Arial Bold"}),h.jsx("option",{value:"Playfair Display",children:"Playfair Display"}),h.jsx("option",{value:"Montserrat",children:"Montserrat"}),h.jsx("option",{value:"Pacifico",children:"Pacifico"}),h.jsx("option",{value:"Lobster",children:"Lobster"}),h.jsx("option",{value:"Great Vibes",children:"Great Vibes"}),h.jsx("option",{value:"Courier New",children:"Courier"})]}),h.jsxs("div",{className:"flex items-center bg-[#23242e] rounded-lg border border-[#383945] p-0.5",children:[h.jsx("button",{onClick:()=>l({...ne,fontSize:Math.max(12,(ne.fontSize||36)-4)}),className:"px-1.5 py-0.5 hover:bg-white/10 rounded font-bold text-xs",children:"-"}),h.jsx("span",{className:"px-1.5 text-[11px] font-mono font-bold text-purple-300",children:ne.fontSize||36}),h.jsx("button",{onClick:()=>l({...ne,fontSize:Math.min(120,(ne.fontSize||36)+4)}),className:"px-1.5 py-0.5 hover:bg-white/10 rounded font-bold text-xs",children:"+"})]}),h.jsx("button",{onClick:()=>l({...ne,isCurved:!ne.isCurved,curveRadius:ne.curveRadius||120}),className:`px-2 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${ne.isCurved?"bg-purple-600 text-white shadow-sm":"bg-[#23242e] text-gray-300 hover:text-white"}`,title:"Alternar Texto Curvado em Arco (Caneca)",children:h.jsxs("span",{children:["Arco: ",ne.isCurved?"ON":"OFF"]})})]}),h.jsx("label",{className:"w-6 h-6 rounded-full border-2 border-white/30 cursor-pointer shadow-inner hover:scale-110 transition-transform relative overflow-hidden",style:{backgroundColor:ne.color||v},title:"Mudar Cor do Elemento",children:h.jsx("input",{type:"color",value:ne.color||v,onChange:J=>l({...ne,color:J.target.value}),className:"opacity-0 absolute inset-0 cursor-pointer"})}),h.jsx("div",{className:"w-[1px] h-4 bg-white/20"}),f&&h.jsxs("button",{onClick:()=>f(ne.id),className:"p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer",title:"Duplicar elemento",children:[h.jsx(tu,{className:"w-3.5 h-3.5 text-purple-400"}),h.jsx("span",{className:"hidden sm:inline",children:"Duplicar"})]}),h.jsxs("button",{onClick:()=>l({...ne,rotation:(ne.rotation+90)%360}),className:"p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer",title:"Girar 90°",children:[h.jsx(pu,{className:"w-3.5 h-3.5 text-sky-400"}),h.jsx("span",{className:"hidden sm:inline",children:"Girar"})]}),h.jsx("div",{className:"w-[1px] h-4 bg-white/20"}),c&&h.jsxs("button",{onClick:()=>c(ne.id),className:"p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 rounded-lg font-bold flex items-center gap-1 text-[11px] transition-colors cursor-pointer",title:"Excluir Elemento Selecionado (Del)",children:[h.jsx(sl,{className:"w-3.5 h-3.5 text-red-400"}),h.jsx("span",{children:"Excluir"})]})]}):null})()}),h.jsxs("div",{className:`absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 backdrop-blur-md border rounded-xl shadow-2xl z-30 text-xs ${M==="light"?"bg-white/95 border-slate-300 text-slate-800 shadow-slate-300/60":"bg-[#1e1e20]/90 border-[#38383c] text-gray-300"}`,children:[h.jsx("button",{onClick:()=>w(ne=>Math.max(.2,ne-.1)),className:`p-1.5 rounded-lg transition-colors cursor-pointer ${M==="light"?"hover:bg-slate-100 text-slate-700 hover:text-slate-900":"hover:bg-white/10 text-gray-300 hover:text-white"}`,title:"Diminuir Zoom",children:h.jsx(wS,{className:"w-3.5 h-3.5"})}),h.jsxs("span",{className:`font-mono text-[11px] font-semibold w-12 text-center ${M==="light"?"text-purple-700":"text-sky-400"}`,children:[Math.round(L*100),"%"]}),h.jsx("button",{onClick:()=>w(ne=>Math.min(3,ne+.1)),className:`p-1.5 rounded-lg transition-colors cursor-pointer ${M==="light"?"hover:bg-slate-100 text-slate-700 hover:text-slate-900":"hover:bg-white/10 text-gray-300 hover:text-white"}`,title:"Aumentar Zoom",children:h.jsx(TS,{className:"w-3.5 h-3.5"})}),h.jsx("div",{className:`w-[1px] h-4 my-auto ${M==="light"?"bg-slate-300":"bg-[#38383c]"}`}),h.jsx("button",{onClick:$,className:`px-2 py-1 text-[11px] font-medium rounded-lg transition-colors cursor-pointer ${M==="light"?"hover:bg-slate-100 text-slate-700 hover:text-slate-900":"hover:bg-white/10 text-gray-300 hover:text-white"}`,children:"Ajustar Tela"})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="185",US=0,Sx=1,LS=2,nl=1,OS=2,Qo=3,us=0,Qn=1,Li=2,Ea=0,Hr=1,Mx=2,Ex=3,Tx=4,PS=5,Is=100,zS=101,IS=102,BS=103,FS=104,HS=200,kS=201,GS=202,VS=203,gh=204,xh=205,jS=206,XS=207,WS=208,qS=209,YS=210,ZS=211,KS=212,QS=213,JS=214,vh=0,_h=1,bh=2,Vr=3,yh=4,Sh=5,Mh=6,Eh=7,Xv=0,$S=1,eM=2,Yi=0,Wv=1,qv=2,Yv=3,up=4,Zv=5,Kv=6,Qv=7,Jv=300,Gs=301,jr=302,Rd=303,Nd=304,mu=306,ll=1e3,Ma=1001,Th=1002,Un=1003,tM=1004,Tc=1005,Bn=1006,Dd=1007,Fs=1008,di=1009,$v=1010,e_=1011,cl=1012,fp=1013,Ki=1014,Wi=1015,Aa=1016,dp=1017,hp=1018,ul=1020,t_=35902,n_=35899,i_=1021,a_=1022,Pi=1023,wa=1026,Hs=1027,s_=1028,pp=1029,Vs=1030,mp=1031,gp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,Ah=35840,wh=35841,Ch=35842,Rh=35843,Nh=36196,Dh=37492,Uh=37496,Lh=37488,Oh=37489,nu=37490,Ph=37491,zh=37808,Ih=37809,Bh=37810,Fh=37811,Hh=37812,kh=37813,Gh=37814,Vh=37815,jh=37816,Xh=37817,Wh=37818,qh=37819,Yh=37820,Zh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,ep=36284,iu=36285,tp=36286,nM=3200,np=0,iM=1,ls="",fi="srgb",au="srgb-linear",su="linear",qt="srgb",Er=7680,Ax=519,aM=512,sM=513,rM=514,xp=515,oM=516,lM=517,vp=518,cM=519,wx=35044,Cx="300 es",qi=2e3,fl=2001;function uM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fM(){const r=ru("canvas");return r.style.display="block",r}const Rx={};function Nx(...r){const e="THREE."+r.shift();console.log(e,...r)}function r_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ft(...r){r=r_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Nt(...r){r=r_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function kr(...r){const e=r.join(" ");e in Rx||(Rx[e]=!0,ft(...r))}function dM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const hM={[vh]:_h,[bh]:Mh,[yh]:Eh,[Vr]:Sh,[_h]:vh,[Mh]:bh,[Eh]:yh,[Sh]:Vr};class js{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,ip=180/Math.PI;function dl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function bt(r,e,i){return Math.max(e,Math.min(i,r))}function pM(r,e){return(r%e+e)%e}function Ld(r,e,i){return(1-i)*r+i*e}function Vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tp=class Tp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tp.prototype.isVector2=!0;let lt=Tp;class qr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let g=s[l+0],m=s[l+1],v=s[l+2],_=s[l+3],x=c[f+0],b=c[f+1],A=c[f+2],N=c[f+3];if(_!==N||g!==x||m!==b||v!==A){let M=g*x+m*b+v*A+_*N;M<0&&(x=-x,b=-b,A=-A,N=-N,M=-M);let y=1-p;if(M<.9995){const k=Math.acos(M),L=Math.sin(k);y=Math.sin(y*k)/L,p=Math.sin(p*k)/L,g=g*y+x*p,m=m*y+b*p,v=v*y+A*p,_=_*y+N*p}else{g=g*y+x*p,m=m*y+b*p,v=v*y+A*p,_=_*y+N*p;const k=1/Math.sqrt(g*g+m*m+v*v+_*_);g*=k,m*=k,v*=k,_*=k}}e[i]=g,e[i+1]=m,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],g=s[l+1],m=s[l+2],v=s[l+3],_=c[f],x=c[f+1],b=c[f+2],A=c[f+3];return e[i]=p*A+v*_+g*b-m*x,e[i+1]=g*A+v*x+m*_-p*b,e[i+2]=m*A+v*b+p*x-g*_,e[i+3]=v*A-p*_-g*x-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,g=Math.sin,m=p(s/2),v=p(l/2),_=p(c/2),x=g(s/2),b=g(l/2),A=g(c/2);switch(f){case"XYZ":this._x=x*v*_+m*b*A,this._y=m*b*_-x*v*A,this._z=m*v*A+x*b*_,this._w=m*v*_-x*b*A;break;case"YXZ":this._x=x*v*_+m*b*A,this._y=m*b*_-x*v*A,this._z=m*v*A-x*b*_,this._w=m*v*_+x*b*A;break;case"ZXY":this._x=x*v*_-m*b*A,this._y=m*b*_+x*v*A,this._z=m*v*A+x*b*_,this._w=m*v*_-x*b*A;break;case"ZYX":this._x=x*v*_-m*b*A,this._y=m*b*_+x*v*A,this._z=m*v*A-x*b*_,this._w=m*v*_+x*b*A;break;case"YZX":this._x=x*v*_+m*b*A,this._y=m*b*_+x*v*A,this._z=m*v*A-x*b*_,this._w=m*v*_-x*b*A;break;case"XZY":this._x=x*v*_-m*b*A,this._y=m*b*_-x*v*A,this._z=m*v*A+x*b*_,this._w=m*v*_+x*b*A;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],g=i[9],m=i[2],v=i[6],_=i[10],x=s+p+_;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(v-g)*b,this._y=(c-m)*b,this._z=(f-l)*b}else if(s>p&&s>_){const b=2*Math.sqrt(1+s-p-_);this._w=(v-g)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+m)/b}else if(p>_){const b=2*Math.sqrt(1+p-s-_);this._w=(c-m)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(g+v)/b}else{const b=2*Math.sqrt(1+_-s-p);this._w=(f-l)/b,this._x=(c+m)/b,this._y=(g+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,g=i._y,m=i._z,v=i._w;return this._x=s*v+f*p+l*m-c*g,this._y=l*v+f*g+c*p-s*m,this._z=c*v+f*m+s*g-l*p,this._w=f*v-s*p-l*g-c*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let g=1-i;if(p<.9995){const m=Math.acos(p),v=Math.sin(m);g=Math.sin(g*m)/v,i=Math.sin(i*m)/v,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ap=class Ap{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Dx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Dx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,g=e.w,m=2*(f*l-p*s),v=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+g*m+f*_-p*v,this.y=s+g*v+p*m-c*_,this.z=l+g*_+c*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,g=i.z;return this.x=l*g-c*p,this.y=c*f-s*g,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ap.prototype.isVector3=!0;let K=Ap;const Od=new K,Dx=new qr,wp=class wp{constructor(e,i,s,l,c,f,p,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,g,m)}set(e,i,s,l,c,f,p,g,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=g,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],g=s[6],m=s[1],v=s[4],_=s[7],x=s[2],b=s[5],A=s[8],N=l[0],M=l[3],y=l[6],k=l[1],L=l[4],w=l[7],I=l[2],U=l[5],B=l[8];return c[0]=f*N+p*k+g*I,c[3]=f*M+p*L+g*U,c[6]=f*y+p*w+g*B,c[1]=m*N+v*k+_*I,c[4]=m*M+v*L+_*U,c[7]=m*y+v*w+_*B,c[2]=x*N+b*k+A*I,c[5]=x*M+b*L+A*U,c[8]=x*y+b*w+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],m=e[7],v=e[8];return i*f*v-i*p*m-s*c*v+s*p*g+l*c*m-l*f*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],m=e[7],v=e[8],_=v*f-p*m,x=p*g-v*c,b=m*c-f*g,A=i*_+s*x+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/A;return e[0]=_*N,e[1]=(l*m-v*s)*N,e[2]=(p*s-l*f)*N,e[3]=x*N,e[4]=(v*i-l*g)*N,e[5]=(l*c-p*i)*N,e[6]=b*N,e[7]=(s*g-m*i)*N,e[8]=(f*i-s*c)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const g=Math.cos(c),m=Math.sin(c);return this.set(s*g,s*m,-s*(g*f+m*p)+f+e,-l*m,l*g,-l*(-m*f+g*p)+p+i,0,0,1),this}scale(e,i){return kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pd.makeScale(e,i)),this}rotate(e){return kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pd.makeRotation(-e)),this}translate(e,i){return kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;let ht=wp;const Pd=new ht,Ux=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const r={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===qt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qt&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[au]:{primaries:e,whitePoint:s,transfer:su,toXYZ:Ux,fromXYZ:Lx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:s,transfer:qt,toXYZ:Ux,fromXYZ:Lx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const wt=mM();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class gM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Tr===void 0&&(Tr=ru("canvas")),Tr.width=e.width,Tr.height=e.height;const l=Tr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ru("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(zd(l[f].image)):c.push(zd(l[f]))}else c=zd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let vM=0;const Id=new K;class Fn extends js{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=Ma,l=Ma,c=Bn,f=Fs,p=Pi,g=di,m=Fn.DEFAULT_ANISOTROPY,v=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=dl(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=g,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ll:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ll:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Jv;Fn.DEFAULT_ANISOTROPY=1;const Cp=class Cp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,m=g[0],v=g[4],_=g[8],x=g[1],b=g[5],A=g[9],N=g[2],M=g[6],y=g[10];if(Math.abs(v-x)<.01&&Math.abs(_-N)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+N)<.1&&Math.abs(A+M)<.1&&Math.abs(m+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,w=(b+1)/2,I=(y+1)/2,U=(v+x)/4,B=(_+N)/4,T=(A+M)/4;return L>w&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=U/s,c=B/s):w>I?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=U/l,c=T/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=B/c,l=T/c),this.set(s,l,c,i),this}let k=Math.sqrt((M-A)*(M-A)+(_-N)*(_-N)+(x-v)*(x-v));return Math.abs(k)<.001&&(k=1),this.x=(M-A)/k,this.y=(_-N)/k,this.z=(x-v)/k,this.w=Math.acos((m+b+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cp.prototype.isVector4=!0;let ln=Cp;class _M extends js{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Fn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new _p(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends _M{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class o_ extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=class du{constructor(e,i,s,l,c,f,p,g,m,v,_,x,b,A,N,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,g,m,v,_,x,b,A,N,M)}set(e,i,s,l,c,f,p,g,m,v,_,x,b,A,N,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=g,y[2]=m,y[6]=v,y[10]=_,y[14]=x,y[3]=b,y[7]=A,y[11]=N,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ar.setFromMatrixColumn(e,0).length(),c=1/Ar.setFromMatrixColumn(e,1).length(),f=1/Ar.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),g=Math.cos(l),m=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*v,b=f*_,A=p*v,N=p*_;i[0]=g*v,i[4]=-g*_,i[8]=m,i[1]=b+A*m,i[5]=x-N*m,i[9]=-p*g,i[2]=N-x*m,i[6]=A+b*m,i[10]=f*g}else if(e.order==="YXZ"){const x=g*v,b=g*_,A=m*v,N=m*_;i[0]=x+N*p,i[4]=A*p-b,i[8]=f*m,i[1]=f*_,i[5]=f*v,i[9]=-p,i[2]=b*p-A,i[6]=N+x*p,i[10]=f*g}else if(e.order==="ZXY"){const x=g*v,b=g*_,A=m*v,N=m*_;i[0]=x-N*p,i[4]=-f*_,i[8]=A+b*p,i[1]=b+A*p,i[5]=f*v,i[9]=N-x*p,i[2]=-f*m,i[6]=p,i[10]=f*g}else if(e.order==="ZYX"){const x=f*v,b=f*_,A=p*v,N=p*_;i[0]=g*v,i[4]=A*m-b,i[8]=x*m+N,i[1]=g*_,i[5]=N*m+x,i[9]=b*m-A,i[2]=-m,i[6]=p*g,i[10]=f*g}else if(e.order==="YZX"){const x=f*g,b=f*m,A=p*g,N=p*m;i[0]=g*v,i[4]=N-x*_,i[8]=A*_+b,i[1]=_,i[5]=f*v,i[9]=-p*v,i[2]=-m*v,i[6]=b*_+A,i[10]=x-N*_}else if(e.order==="XZY"){const x=f*g,b=f*m,A=p*g,N=p*m;i[0]=g*v,i[4]=-_,i[8]=m*v,i[1]=x*_+N,i[5]=f*v,i[9]=b*_-A,i[2]=A*_-b,i[6]=p*v,i[10]=N*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,SM)}lookAt(e,i,s){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ns.crossVectors(s,ci),ns.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ns.crossVectors(s,ci)),ns.normalize(),Ac.crossVectors(ci,ns),l[0]=ns.x,l[4]=Ac.x,l[8]=ci.x,l[1]=ns.y,l[5]=Ac.y,l[9]=ci.y,l[2]=ns.z,l[6]=Ac.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],g=s[8],m=s[12],v=s[1],_=s[5],x=s[9],b=s[13],A=s[2],N=s[6],M=s[10],y=s[14],k=s[3],L=s[7],w=s[11],I=s[15],U=l[0],B=l[4],T=l[8],z=l[12],G=l[1],V=l[5],q=l[9],fe=l[13],W=l[2],P=l[6],O=l[10],H=l[14],$=l[3],re=l[7],me=l[11],D=l[15];return c[0]=f*U+p*G+g*W+m*$,c[4]=f*B+p*V+g*P+m*re,c[8]=f*T+p*q+g*O+m*me,c[12]=f*z+p*fe+g*H+m*D,c[1]=v*U+_*G+x*W+b*$,c[5]=v*B+_*V+x*P+b*re,c[9]=v*T+_*q+x*O+b*me,c[13]=v*z+_*fe+x*H+b*D,c[2]=A*U+N*G+M*W+y*$,c[6]=A*B+N*V+M*P+y*re,c[10]=A*T+N*q+M*O+y*me,c[14]=A*z+N*fe+M*H+y*D,c[3]=k*U+L*G+w*W+I*$,c[7]=k*B+L*V+w*P+I*re,c[11]=k*T+L*q+w*O+I*me,c[15]=k*z+L*fe+w*H+I*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],g=e[9],m=e[13],v=e[2],_=e[6],x=e[10],b=e[14],A=e[3],N=e[7],M=e[11],y=e[15],k=g*b-m*x,L=p*b-m*_,w=p*x-g*_,I=f*b-m*v,U=f*x-g*v,B=f*_-p*v;return i*(N*k-M*L+y*w)-s*(A*k-M*I+y*U)+l*(A*L-N*I+y*B)-c*(A*w-N*U+M*B)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],p=e[9],g=e[2],m=e[6],v=e[10];return i*(f*v-p*m)-s*(c*v-p*g)+l*(c*m-f*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],m=e[7],v=e[8],_=e[9],x=e[10],b=e[11],A=e[12],N=e[13],M=e[14],y=e[15],k=i*p-s*f,L=i*g-l*f,w=i*m-c*f,I=s*g-l*p,U=s*m-c*p,B=l*m-c*g,T=v*N-_*A,z=v*M-x*A,G=v*y-b*A,V=_*M-x*N,q=_*y-b*N,fe=x*y-b*M,W=k*fe-L*q+w*V+I*G-U*z+B*T;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/W;return e[0]=(p*fe-g*q+m*V)*P,e[1]=(l*q-s*fe-c*V)*P,e[2]=(N*B-M*U+y*I)*P,e[3]=(x*U-_*B-b*I)*P,e[4]=(g*G-f*fe-m*z)*P,e[5]=(i*fe-l*G+c*z)*P,e[6]=(M*w-A*B-y*L)*P,e[7]=(v*B-x*w+b*L)*P,e[8]=(f*q-p*G+m*T)*P,e[9]=(s*G-i*q-c*T)*P,e[10]=(A*U-N*w+y*k)*P,e[11]=(_*w-v*U-b*k)*P,e[12]=(p*z-f*V-g*T)*P,e[13]=(i*V-s*z+l*T)*P,e[14]=(N*L-A*I-M*k)*P,e[15]=(v*I-_*L+x*k)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,g=e.z,m=c*f,v=c*p;return this.set(m*f+s,m*p-l*g,m*g+l*p,0,m*p+l*g,v*p+s,v*g-l*f,0,m*g-l*p,v*g+l*f,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,g=i._w,m=c+c,v=f+f,_=p+p,x=c*m,b=c*v,A=c*_,N=f*v,M=f*_,y=p*_,k=g*m,L=g*v,w=g*_,I=s.x,U=s.y,B=s.z;return l[0]=(1-(N+y))*I,l[1]=(b+w)*I,l[2]=(A-L)*I,l[3]=0,l[4]=(b-w)*U,l[5]=(1-(x+y))*U,l[6]=(M+k)*U,l[7]=0,l[8]=(A+L)*B,l[9]=(M-k)*B,l[10]=(1-(x+N))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ar.set(l[0],l[1],l[2]).length();const p=Ar.set(l[4],l[5],l[6]).length(),g=Ar.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ri.copy(this);const m=1/f,v=1/p,_=1/g;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=f,s.y=p,s.z=g,this}makePerspective(e,i,s,l,c,f,p=qi,g=!1){const m=this.elements,v=2*c/(i-e),_=2*c/(s-l),x=(i+e)/(i-e),b=(s+l)/(s-l);let A,N;if(g)A=c/(f-c),N=f*c/(f-c);else if(p===qi)A=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(p===fl)A=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=qi,g=!1){const m=this.elements,v=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),b=-(s+l)/(s-l);let A,N;if(g)A=1/(f-c),N=f/(f-c);else if(p===qi)A=-2/(f-c),N=-(f+c)/(f-c);else if(p===fl)A=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=A,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};du.prototype.isMatrix4=!0;let on=du;const Ar=new K,Ri=new on,yM=new K(0,0,0),SM=new K(1,1,1),ns=new K,Ac=new K,ci=new K,Ox=new on,Px=new qr;class fs{constructor(e=0,i=0,s=0,l=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],g=l[1],m=l[5],v=l[9],_=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ox.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ox,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Px.setFromEuler(this),this.setFromQuaternion(Px,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class l_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const zx=new K,wr=new qr,xa=new on,wc=new K,jo=new K,EM=new K,TM=new qr,Ix=new K(1,0,0),Bx=new K(0,1,0),Fx=new K(0,0,1),Hx={type:"added"},AM={type:"removed"},Cr={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Ln extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new K,i=new fs,s=new qr,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ht}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Ix,e)}rotateY(e){return this.rotateOnAxis(Bx,e)}rotateZ(e){return this.rotateOnAxis(Fx,e)}translateOnAxis(e,i){return zx.copy(e).applyQuaternion(this.quaternion),this.position.add(zx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ix,e)}translateY(e){return this.translateOnAxis(Bx,e)}translateZ(e){return this.translateOnAxis(Fx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?wc.copy(e):wc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(jo,wc,this.up):xa.lookAt(wc,jo,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(xa),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hx),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(AM),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hx),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,EM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,TM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let m=0,v=g.length;m<v;m++){const _=g[m];c(e.shapes,_)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,m=this.material.length;g<m;g++)p.push(c(e.materials,this.material[g]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(c(e.animations,g))}}if(i){const p=f(e.geometries),g=f(e.materials),m=f(e.textures),v=f(e.images),_=f(e.shapes),x=f(e.skeletons),b=f(e.animations),A=f(e.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),b.length>0&&(s.animations=b),A.length>0&&(s.nodes=A)}return s.object=l,s;function f(p){const g=[];for(const m in p){const v=p[m];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new K(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jo extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wM={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,g=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const N of e.hand.values()){const M=i.getJointPose(N,s),y=this._getHandJoint(m,N);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),b=.02,A=.005;m.inputState.pinching&&x>b+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=b-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(wM)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Jo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Hd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class _t{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=pM(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Hd(f,c,e+1/3),this.g=Hd(f,c,e),this.b=Hd(f,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function s(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ft("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=c_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return wt.workingToColorSpace(In.copy(this),e),Math.round(bt(In.r*255,0,255))*65536+Math.round(bt(In.g*255,0,255))*256+Math.round(bt(In.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let g,m;const v=(p+f)/2;if(p===f)g=0,m=0;else{const _=f-p;switch(m=v<=.5?_/(f+p):_/(2-f-p),f){case s:g=(l-c)/_+(l<c?6:0);break;case l:g=(c-s)/_+2;break;case c:g=(s-l)/_+4;break}g/=6}return e.h=g,e.s=m,e.l=v,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=fi){wt.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(is),this.setHSL(is.h+e,is.s+i,is.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(is),e.getHSL(Cc);const s=Ld(is.h,Cc.h,i),l=Ld(is.s,Cc.s,i),c=Ld(is.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new _t;_t.NAMES=c_;class CM extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new K,va=new K,kd=new K,_a=new K,Rr=new K,Nr=new K,kx=new K,Gd=new K,Vd=new K,jd=new K,Xd=new ln,Wd=new ln,qd=new ln;class Oi{constructor(e=new K,i=new K,s=new K){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ni.subVectors(e,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ni.subVectors(l,i),va.subVectors(s,i),kd.subVectors(e,i);const f=Ni.dot(Ni),p=Ni.dot(va),g=Ni.dot(kd),m=va.dot(va),v=va.dot(kd),_=f*m-p*p;if(_===0)return c.set(0,0,0),null;const x=1/_,b=(m*g-p*v)*x,A=(f*v-p*g)*x;return c.set(1-b-A,A,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,s,l,c,f,p,g){return this.getBarycoord(e,i,s,l,_a)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,_a.x),g.addScaledVector(f,_a.y),g.addScaledVector(p,_a.z),g)}static getInterpolatedAttribute(e,i,s,l,c,f){return Xd.setScalar(0),Wd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Xd,c.x),f.addScaledVector(Wd,c.y),f.addScaledVector(qd,c.z),f}static isFrontFacing(e,i,s,l){return Ni.subVectors(s,i),va.subVectors(e,i),Ni.cross(va).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ni.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Rr.subVectors(l,s),Nr.subVectors(c,s),Gd.subVectors(e,s);const g=Rr.dot(Gd),m=Nr.dot(Gd);if(g<=0&&m<=0)return i.copy(s);Vd.subVectors(e,l);const v=Rr.dot(Vd),_=Nr.dot(Vd);if(v>=0&&_<=v)return i.copy(l);const x=g*_-v*m;if(x<=0&&g>=0&&v<=0)return f=g/(g-v),i.copy(s).addScaledVector(Rr,f);jd.subVectors(e,c);const b=Rr.dot(jd),A=Nr.dot(jd);if(A>=0&&b<=A)return i.copy(c);const N=b*m-g*A;if(N<=0&&m>=0&&A<=0)return p=m/(m-A),i.copy(s).addScaledVector(Nr,p);const M=v*A-b*_;if(M<=0&&_-v>=0&&b-A>=0)return kx.subVectors(c,l),p=(_-v)/(_-v+(b-A)),i.copy(l).addScaledVector(kx,p);const y=1/(M+N+x);return f=N*y,p=x*y,i.copy(s).addScaledVector(Rr,f).addScaledVector(Nr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yr{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Di):Di.fromBufferAttribute(c,f),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Nc.subVectors(this.max,Xo),Dr.subVectors(e.a,Xo),Ur.subVectors(e.b,Xo),Lr.subVectors(e.c,Xo),as.subVectors(Ur,Dr),ss.subVectors(Lr,Ur),Us.subVectors(Dr,Lr);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Us.z,Us.y,as.z,0,-as.x,ss.z,0,-ss.x,Us.z,0,-Us.x,-as.y,as.x,0,-ss.y,ss.x,0,-Us.y,Us.x,0];return!Yd(i,Dr,Ur,Lr,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Yd(i,Dr,Ur,Lr,Nc))?!1:(Dc.crossVectors(as,ss),i=[Dc.x,Dc.y,Dc.z],Yd(i,Dr,Ur,Lr,Nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ba=[new K,new K,new K,new K,new K,new K,new K,new K],Di=new K,Rc=new Yr,Dr=new K,Ur=new K,Lr=new K,as=new K,ss=new K,Us=new K,Xo=new K,Nc=new K,Dc=new K,Ls=new K;function Yd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ls.fromArray(r,c);const p=l.x*Math.abs(Ls.x)+l.y*Math.abs(Ls.y)+l.z*Math.abs(Ls.z),g=e.dot(Ls),m=i.dot(Ls),v=s.dot(Ls);if(Math.max(-Math.max(g,m,v),Math.min(g,m,v))>p)return!1}return!0}const bn=new K,Uc=new lt;let RM=0;class Mi extends js{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=wx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class u_ extends Mi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class f_ extends Mi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class cn extends Mi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const NM=new Yr,Wo=new K,Zd=new K;class gu{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):NM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Zd)),this.expandByPoint(Wo.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let DM=0;const yi=new on,Kd=new Ln,Or=new K,ui=new Yr,qo=new Yr,An=new K;class Gn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uM(e)?f_:u_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,i,s){return yi.makeTranslation(e,i,s),this.applyMatrix4(yi),this}scale(e,i,s){return yi.makeScale(e,i,s),this.applyMatrix4(yi),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new cn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];qo.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(ui.min,qo.min),ui.expandByPoint(An),An.addVectors(ui.max,qo.max),ui.expandByPoint(An)):(ui.expandByPoint(qo.min),ui.expandByPoint(qo.max))}ui.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)An.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],g=this.morphTargetsRelative;for(let m=0,v=p.count;m<v;m++)An.fromBufferAttribute(p,m),g&&(Or.fromBufferAttribute(e,m),An.add(Or)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Mi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],g=[];for(let T=0;T<s.count;T++)p[T]=new K,g[T]=new K;const m=new K,v=new K,_=new K,x=new lt,b=new lt,A=new lt,N=new K,M=new K;function y(T,z,G){m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,z),_.fromBufferAttribute(s,G),x.fromBufferAttribute(c,T),b.fromBufferAttribute(c,z),A.fromBufferAttribute(c,G),v.sub(m),_.sub(m),b.sub(x),A.sub(x);const V=1/(b.x*A.y-A.x*b.y);isFinite(V)&&(N.copy(v).multiplyScalar(A.y).addScaledVector(_,-b.y).multiplyScalar(V),M.copy(_).multiplyScalar(b.x).addScaledVector(v,-A.x).multiplyScalar(V),p[T].add(N),p[z].add(N),p[G].add(N),g[T].add(M),g[z].add(M),g[G].add(M))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let T=0,z=k.length;T<z;++T){const G=k[T],V=G.start,q=G.count;for(let fe=V,W=V+q;fe<W;fe+=3)y(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const L=new K,w=new K,I=new K,U=new K;function B(T){I.fromBufferAttribute(l,T),U.copy(I);const z=p[T];L.copy(z),L.sub(I.multiplyScalar(I.dot(z))).normalize(),w.crossVectors(U,z);const V=w.dot(g[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,V)}for(let T=0,z=k.length;T<z;++T){const G=k[T],V=G.start,q=G.count;for(let fe=V,W=V+q;fe<W;fe+=3)B(e.getX(fe+0)),B(e.getX(fe+1)),B(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,b=s.count;x<b;x++)s.setXYZ(x,0,0,0);const l=new K,c=new K,f=new K,p=new K,g=new K,m=new K,v=new K,_=new K;if(e)for(let x=0,b=e.count;x<b;x+=3){const A=e.getX(x+0),N=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,M),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,N),m.fromBufferAttribute(s,M),p.add(v),g.add(v),m.add(v),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(N,g.x,g.y,g.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(p,g){const m=p.array,v=p.itemSize,_=p.normalized,x=new m.constructor(g.length*v);let b=0,A=0;for(let N=0,M=g.length;N<M;N++){p.isInterleavedBufferAttribute?b=g[N]*p.data.stride+p.offset:b=g[N]*v;for(let y=0;y<v;y++)x[A++]=m[b++]}return new Mi(x,v,_)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gn,s=this.index.array,l=this.attributes;for(const p in l){const g=l[p],m=e(g,s);i.setAttribute(p,m)}const c=this.morphAttributes;for(const p in c){const g=[],m=c[p];for(let v=0,_=m.length;v<_;v++){const x=m[v],b=e(x,s);g.push(b)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,g=f.length;p<g;p++){const m=f[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];e.data.attributes[g]=m.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],v=[];for(let _=0,x=m.length;_<x;_++){const b=m[_];v.push(b.toJSON(e.data))}v.length>0&&(l[g]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let x=0,b=_.length;x<b;x++)v.push(_[x].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let UM=0;class Xs extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Hr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=xh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==us&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gh&&(s.blendSrc=this.blendSrc),this.blendDst!==xh&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ax&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const g=c[p];delete g.metadata,f.push(g)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new lt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new K,Qd=new K,Lc=new K,rs=new K,Jd=new K,Oc=new K,$d=new K;class d_{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Qd.copy(e).add(i).multiplyScalar(.5),Lc.copy(i).sub(e).normalize(),rs.copy(this.origin).sub(Qd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Lc),p=rs.dot(this.direction),g=-rs.dot(Lc),m=rs.lengthSq(),v=Math.abs(1-f*f);let _,x,b,A;if(v>0)if(_=f*g-p,x=f*p-g,A=c*v,_>=0)if(x>=-A)if(x<=A){const N=1/v;_*=N,x*=N,b=_*(_+f*x+2*p)+x*(f*_+x+2*g)+m}else x=c,_=Math.max(0,-(f*x+p)),b=-_*_+x*(x+2*g)+m;else x=-c,_=Math.max(0,-(f*x+p)),b=-_*_+x*(x+2*g)+m;else x<=-A?(_=Math.max(0,-(-f*c+p)),x=_>0?-c:Math.min(Math.max(-c,-g),c),b=-_*_+x*(x+2*g)+m):x<=A?(_=0,x=Math.min(Math.max(-c,-g),c),b=x*(x+2*g)+m):(_=Math.max(0,-(f*c+p)),x=_>0?c:Math.min(Math.max(-c,-g),c),b=-_*_+x*(x+2*g)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+p)),b=-_*_+x*(x+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Qd).addScaledVector(Lc,x),b}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,g=s+f;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,g;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(e.min.z-x.z)*_,g=(e.max.z-x.z)*_):(p=(e.max.z-x.z)*_,g=(e.min.z-x.z)*_),s>g||p>l)||((p>s||s!==s)&&(s=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,c){Jd.subVectors(i,e),Oc.subVectors(s,e),$d.crossVectors(Jd,Oc);let f=this.direction.dot($d),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;rs.subVectors(this.origin,e);const g=p*this.direction.dot(Oc.crossVectors(rs,Oc));if(g<0)return null;const m=p*this.direction.dot(Jd.cross(rs));if(m<0||g+m>f)return null;const v=-p*rs.dot($d);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class h_ extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gx=new on,Os=new d_,Pc=new gu,Vx=new K,zc=new K,Ic=new K,Bc=new K,eh=new K,Fc=new K,jx=new K,Hc=new K;class Bt extends Ln{constructor(e=new Gn,i=new h_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Fc.set(0,0,0);for(let g=0,m=c.length;g<m;g++){const v=p[g],_=c[g];v!==0&&(eh.fromBufferAttribute(_,e),f?Fc.addScaledVector(eh,v):Fc.addScaledVector(eh.sub(i),v))}i.add(Fc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Os.copy(e.ray).recast(e.near),!(Pc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Pc,Vx)===null||Os.origin.distanceToSquared(Vx)>(e.far-e.near)**2))&&(Gx.copy(c).invert(),Os.copy(e.ray).applyMatrix4(Gx),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Os)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,g=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(f))for(let A=0,N=x.length;A<N;A++){const M=x[A],y=f[M.materialIndex],k=Math.max(M.start,b.start),L=Math.min(p.count,Math.min(M.start+M.count,b.start+b.count));for(let w=k,I=L;w<I;w+=3){const U=p.getX(w),B=p.getX(w+1),T=p.getX(w+2);l=kc(this,y,e,s,m,v,_,U,B,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),N=Math.min(p.count,b.start+b.count);for(let M=A,y=N;M<y;M+=3){const k=p.getX(M),L=p.getX(M+1),w=p.getX(M+2);l=kc(this,f,e,s,m,v,_,k,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(f))for(let A=0,N=x.length;A<N;A++){const M=x[A],y=f[M.materialIndex],k=Math.max(M.start,b.start),L=Math.min(g.count,Math.min(M.start+M.count,b.start+b.count));for(let w=k,I=L;w<I;w+=3){const U=w,B=w+1,T=w+2;l=kc(this,y,e,s,m,v,_,U,B,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),N=Math.min(g.count,b.start+b.count);for(let M=A,y=N;M<y;M+=3){const k=M,L=M+1,w=M+2;l=kc(this,f,e,s,m,v,_,k,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function LM(r,e,i,s,l,c,f,p){let g;if(e.side===Qn?g=s.intersectTriangle(f,c,l,!0,p):g=s.intersectTriangle(l,c,f,e.side===us,p),g===null)return null;Hc.copy(p),Hc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Hc);return m<i.near||m>i.far?null:{distance:m,point:Hc.clone(),object:r}}function kc(r,e,i,s,l,c,f,p,g,m){r.getVertexPosition(p,zc),r.getVertexPosition(g,Ic),r.getVertexPosition(m,Bc);const v=LM(r,e,i,s,zc,Ic,Bc,jx);if(v){const _=new K;Oi.getBarycoord(jx,zc,Ic,Bc,_),l&&(v.uv=Oi.getInterpolatedAttribute(l,p,g,m,_,new lt)),c&&(v.uv1=Oi.getInterpolatedAttribute(c,p,g,m,_,new lt)),f&&(v.normal=Oi.getInterpolatedAttribute(f,p,g,m,_,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:p,b:g,c:m,normal:new K,materialIndex:0};Oi.getNormal(zc,Ic,Bc,x.normal),v.face=x,v.barycoord=_}return v}class OM extends Fn{constructor(e=null,i=1,s=1,l,c,f,p,g,m=Un,v=Un,_,x){super(null,f,p,g,m,v,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const th=new K,PM=new K,zM=new ht;class zs{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=th.subVectors(s,i).cross(PM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(th),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||zM.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new gu,IM=new lt(.5,.5),Gc=new K;class bp{constructor(e=new zs,i=new zs,s=new zs,l=new zs,c=new zs,f=new zs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=qi,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],g=c[2],m=c[3],v=c[4],_=c[5],x=c[6],b=c[7],A=c[8],N=c[9],M=c[10],y=c[11],k=c[12],L=c[13],w=c[14],I=c[15];if(l[0].setComponents(m-f,b-v,y-A,I-k).normalize(),l[1].setComponents(m+f,b+v,y+A,I+k).normalize(),l[2].setComponents(m+p,b+_,y+N,I+L).normalize(),l[3].setComponents(m-p,b-_,y-N,I-L).normalize(),s)l[4].setComponents(g,x,M,w).normalize(),l[5].setComponents(m-g,b-x,y-M,I-w).normalize();else if(l[4].setComponents(m-g,b-x,y-M,I-w).normalize(),i===qi)l[5].setComponents(m+g,b+x,y+M,I+w).normalize();else if(i===fl)l[5].setComponents(g,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const i=IM.distanceTo(e.center);return Ps.radius=.7071067811865476+i,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p_ extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new K,lu=new K,Xx=new on,Yo=new d_,Vc=new gu,nh=new K,Wx=new K;class BM extends Ln{constructor(e=new Gn,i=new p_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);e.setAttribute("lineDistance",new cn(s,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,e.ray.intersectsSphere(Vc)===!1)return;Xx.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(Xx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,m=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const b=Math.max(0,f.start),A=Math.min(v.count,f.start+f.count);for(let N=b,M=A-1;N<M;N+=m){const y=v.getX(N),k=v.getX(N+1),L=jc(this,e,Yo,g,y,k,N);L&&i.push(L)}if(this.isLineLoop){const N=v.getX(A-1),M=v.getX(b),y=jc(this,e,Yo,g,N,M,A-1);y&&i.push(y)}}else{const b=Math.max(0,f.start),A=Math.min(x.count,f.start+f.count);for(let N=b,M=A-1;N<M;N+=m){const y=jc(this,e,Yo,g,N,N+1,N);y&&i.push(y)}if(this.isLineLoop){const N=jc(this,e,Yo,g,A-1,b,A-1);N&&i.push(N)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function jc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),lu.fromBufferAttribute(p,c),i.distanceSqToSegment(ou,lu,nh,Wx)>s)return;nh.applyMatrix4(r.matrixWorld);const m=e.ray.origin.distanceTo(nh);if(!(m<e.near||m>e.far))return{distance:m,point:Wx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const qx=new K,Yx=new K;class FM extends BM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)qx.fromBufferAttribute(i,l),Yx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+qx.distanceTo(Yx);e.setAttribute("lineDistance",new cn(s,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class m_ extends Fn{constructor(e=[],i=Gs,s,l,c,f,p,g,m,v){super(e,i,s,l,c,f,p,g,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HM extends Fn{constructor(e,i,s,l,c,f,p,g,m){super(e,i,s,l,c,f,p,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xr extends Fn{constructor(e,i,s=Ki,l,c,f,p=Un,g=Un,m,v=wa,_=1){if(v!==wa&&v!==Hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,f,p,g,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kM extends Xr{constructor(e,i=Ki,s=Gs,l,c,f=Un,p=Un,g,m=wa){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,p,g,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class g_ extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui extends Gn{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const g=[],m=[],v=[],_=[];let x=0,b=0;A("z","y","x",-1,-1,s,i,e,f,c,0),A("z","y","x",1,-1,s,i,-e,f,c,1),A("x","z","y",1,1,e,s,i,l,f,2),A("x","z","y",1,-1,e,s,-i,l,f,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(_,2));function A(N,M,y,k,L,w,I,U,B,T,z){const G=w/B,V=I/T,q=w/2,fe=I/2,W=U/2,P=B+1,O=T+1;let H=0,$=0;const re=new K;for(let me=0;me<O;me++){const D=me*V-fe;for(let Q=0;Q<P;Q++){const Ee=Q*G-q;re[N]=Ee*k,re[M]=D*L,re[y]=W,m.push(re.x,re.y,re.z),re[N]=0,re[M]=0,re[y]=U>0?1:-1,v.push(re.x,re.y,re.z),_.push(Q/B),_.push(1-me/T),H+=1}}for(let me=0;me<T;me++)for(let D=0;D<B;D++){const Q=x+D+P*me,Ee=x+D+P*(me+1),ne=x+(D+1)+P*(me+1),J=x+(D+1)+P*me;g.push(Q,Ee,J),g.push(Ee,ne,J),$+=6}p.addGroup(b,$,z),b+=$,x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yp extends Gn{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],p=[],g=[],m=new K,v=new lt;f.push(0,0,0),p.push(0,0,1),g.push(.5,.5);for(let _=0,x=3;_<=i;_++,x+=3){const b=s+_/i*l;m.x=e*Math.cos(b),m.y=e*Math.sin(b),f.push(m.x,m.y,m.z),p.push(0,0,1),v.x=(f[x]/e+1)/2,v.y=(f[x+1]/e+1)/2,g.push(v.x,v.y)}for(let _=1;_<=i;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new cn(f,3)),this.setAttribute("normal",new cn(p,3)),this.setAttribute("uv",new cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sa extends Gn{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,p=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:p,thetaLength:g};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],x=[],b=[];let A=0;const N=[],M=s/2;let y=0;k(),f===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(x,3)),this.setAttribute("uv",new cn(b,2));function k(){const w=new K,I=new K;let U=0;const B=(i-e)/s;for(let T=0;T<=c;T++){const z=[],G=T/c,V=G*(i-e)+e;for(let q=0;q<=l;q++){const fe=q/l,W=fe*g+p,P=Math.sin(W),O=Math.cos(W);I.x=V*P,I.y=-G*s+M,I.z=V*O,_.push(I.x,I.y,I.z),w.set(P,B,O).normalize(),x.push(w.x,w.y,w.z),b.push(fe,1-G),z.push(A++)}N.push(z)}for(let T=0;T<l;T++)for(let z=0;z<c;z++){const G=N[z][T],V=N[z+1][T],q=N[z+1][T+1],fe=N[z][T+1];(e>0||z!==0)&&(v.push(G,V,fe),U+=3),(i>0||z!==c-1)&&(v.push(V,q,fe),U+=3)}m.addGroup(y,U,0),y+=U}function L(w){const I=A,U=new lt,B=new K;let T=0;const z=w===!0?e:i,G=w===!0?1:-1;for(let q=1;q<=l;q++)_.push(0,M*G,0),x.push(0,G,0),b.push(.5,.5),A++;const V=A;for(let q=0;q<=l;q++){const W=q/l*g+p,P=Math.cos(W),O=Math.sin(W);B.x=z*O,B.y=M*G,B.z=z*P,_.push(B.x,B.y,B.z),x.push(0,G,0),U.x=P*.5+.5,U.y=O*.5*G+.5,b.push(U.x,U.y),A++}for(let q=0;q<l;q++){const fe=I+q,W=V+q;w===!0?v.push(W,W+1,fe):v.push(W+1,W,fe),T+=3}m.addGroup(y,T,w===!0?1:2),y+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ca{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=e;f++)s=this.getPoint(f/e),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=e*s[c-1];let p=0,g=c-1,m;for(;p<=g;)if(l=Math.floor(p+(g-p)/2),m=s[l]-f,m<0)p=l+1;else if(m>0)g=l-1;else{g=l;break}if(l=g,s[l]===f)return l/(c-1);const v=s[l],x=s[l+1]-v,b=(f-v)/x;return(l+b)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),p=this.getPoint(c),g=i||(f.isVector2?new lt:new K);return g.copy(p).sub(f).normalize(),g}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new K,l=[],c=[],f=[],p=new K,g=new on;for(let b=0;b<=e;b++){const A=b/e;l[b]=this.getTangentAt(A,new K)}c[0]=new K,f[0]=new K;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),x=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),_<=m&&(m=_,s.set(0,1,0)),x<=m&&s.set(0,0,1),p.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],p),f[0].crossVectors(l[0],c[0]);for(let b=1;b<=e;b++){if(c[b]=c[b-1].clone(),f[b]=f[b-1].clone(),p.crossVectors(l[b-1],l[b]),p.length()>Number.EPSILON){p.normalize();const A=Math.acos(bt(l[b-1].dot(l[b]),-1,1));c[b].applyMatrix4(g.makeRotationAxis(p,A))}f[b].crossVectors(l[b],c[b])}if(i===!0){let b=Math.acos(bt(c[0].dot(c[e]),-1,1));b/=e,l[0].dot(p.crossVectors(c[0],c[e]))>0&&(b=-b);for(let A=1;A<=e;A++)c[A].applyMatrix4(g.makeRotationAxis(l[A],b*A)),f[A].crossVectors(l[A],c[A])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class x_ extends Ca{constructor(e=0,i=0,s=1,l=1,c=0,f=Math.PI*2,p=!1,g=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=p,this.aRotation=g}getPoint(e,i=new lt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const p=this.aStartAngle+e*c;let g=this.aX+this.xRadius*Math.cos(p),m=this.aY+this.yRadius*Math.sin(p);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=g-this.aX,b=m-this.aY;g=x*v-b*_+this.aX,m=x*_+b*v+this.aY}return s.set(g,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class GM extends x_{constructor(e,i,s,l,c,f){super(e,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Sp(){let r=0,e=0,i=0,s=0;function l(c,f,p,g){r=c,e=p,i=-3*c+3*f-2*p-g,s=2*c-2*f+p+g}return{initCatmullRom:function(c,f,p,g,m){l(f,p,m*(p-c),m*(g-f))},initNonuniformCatmullRom:function(c,f,p,g,m,v,_){let x=(f-c)/m-(p-c)/(m+v)+(p-f)/v,b=(p-f)/v-(g-f)/(v+_)+(g-p)/_;x*=v,b*=v,l(f,p,x,b)},calc:function(c){const f=c*c,p=f*c;return r+e*c+i*f+s*p}}}const Zx=new K,Kx=new K,ih=new Sp,ah=new Sp,sh=new Sp;class VM extends Ca{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new K){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*e;let p=Math.floor(f),g=f-p;this.closed?p+=p>0?0:(Math.floor(Math.abs(p)/c)+1)*c:g===0&&p===c-1&&(p=c-2,g=1);let m,v;this.closed||p>0?m=l[(p-1)%c]:(Kx.subVectors(l[0],l[1]).add(l[0]),m=Kx);const _=l[p%c],x=l[(p+1)%c];if(this.closed||p+2<c?v=l[(p+2)%c]:(Zx.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Zx),this.curveType==="centripetal"||this.curveType==="chordal"){const b=this.curveType==="chordal"?.5:.25;let A=Math.pow(m.distanceToSquared(_),b),N=Math.pow(_.distanceToSquared(x),b),M=Math.pow(x.distanceToSquared(v),b);N<1e-4&&(N=1),A<1e-4&&(A=N),M<1e-4&&(M=N),ih.initNonuniformCatmullRom(m.x,_.x,x.x,v.x,A,N,M),ah.initNonuniformCatmullRom(m.y,_.y,x.y,v.y,A,N,M),sh.initNonuniformCatmullRom(m.z,_.z,x.z,v.z,A,N,M)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(m.x,_.x,x.x,v.x,this.tension),ah.initCatmullRom(m.y,_.y,x.y,v.y,this.tension),sh.initCatmullRom(m.z,_.z,x.z,v.z,this.tension));return s.set(ih.calc(g),ah.calc(g),sh.calc(g)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new K().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qx(r,e,i,s,l){const c=(s-e)*.5,f=(l-i)*.5,p=r*r,g=r*p;return(2*i-2*s+c+f)*g+(-3*i+3*s-2*c-f)*p+c*r+i}function jM(r,e){const i=1-r;return i*i*e}function XM(r,e){return 2*(1-r)*r*e}function WM(r,e){return r*r*e}function il(r,e,i,s){return jM(r,e)+XM(r,i)+WM(r,s)}function qM(r,e){const i=1-r;return i*i*i*e}function YM(r,e){const i=1-r;return 3*i*i*r*e}function ZM(r,e){return 3*(1-r)*r*r*e}function KM(r,e){return r*r*r*e}function al(r,e,i,s,l){return qM(r,e)+YM(r,i)+ZM(r,s)+KM(r,l)}class QM extends Ca{constructor(e=new lt,i=new lt,s=new lt,l=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new lt){const s=i,l=this.v0,c=this.v1,f=this.v2,p=this.v3;return s.set(al(e,l.x,c.x,f.x,p.x),al(e,l.y,c.y,f.y,p.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v_ extends Ca{constructor(e=new K,i=new K,s=new K,l=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new K){const s=i,l=this.v0,c=this.v1,f=this.v2,p=this.v3;return s.set(al(e,l.x,c.x,f.x,p.x),al(e,l.y,c.y,f.y,p.y),al(e,l.z,c.z,f.z,p.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class JM extends Ca{constructor(e=new lt,i=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new lt){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new lt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $M extends Ca{constructor(e=new K,i=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new K){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new K){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e2 extends Ca{constructor(e=new lt,i=new lt,s=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new lt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(il(e,l.x,c.x,f.x),il(e,l.y,c.y,f.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mp extends Ca{constructor(e=new K,i=new K,s=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new K){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(il(e,l.x,c.x,f.x),il(e,l.y,c.y,f.y),il(e,l.z,c.z,f.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t2 extends Ca{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new lt){const s=i,l=this.points,c=(l.length-1)*e,f=Math.floor(c),p=c-f,g=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return s.set(Qx(p,g.x,m.x,v.x,_.x),Qx(p,g.y,m.y,v.y,_.y)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new lt().fromArray(l))}return this}}var n2=Object.freeze({__proto__:null,ArcCurve:GM,CatmullRomCurve3:VM,CubicBezierCurve:QM,CubicBezierCurve3:v_,EllipseCurve:x_,LineCurve:JM,LineCurve3:$M,QuadraticBezierCurve:e2,QuadraticBezierCurve3:Mp,SplineCurve:t2});class hl extends Gn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),g=Math.floor(l),m=p+1,v=g+1,_=e/p,x=i/g,b=[],A=[],N=[],M=[];for(let y=0;y<v;y++){const k=y*x-f;for(let L=0;L<m;L++){const w=L*_-c;A.push(w,-k,0),N.push(0,0,1),M.push(L/p),M.push(1-y/g)}}for(let y=0;y<g;y++)for(let k=0;k<p;k++){const L=k+m*y,w=k+m*(y+1),I=k+1+m*(y+1),U=k+1+m*y;b.push(L,w,U),b.push(w,I,U)}this.setIndex(b),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(N,3)),this.setAttribute("uv",new cn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends Gn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const g=[],m=[],v=[],_=[],x=new K,b=new K,A=new K;for(let N=0;N<=s;N++){const M=f+N/s*p;for(let y=0;y<=l;y++){const k=y/l*c;b.x=(e+i*Math.cos(M))*Math.cos(k),b.y=(e+i*Math.cos(M))*Math.sin(k),b.z=i*Math.sin(M),m.push(b.x,b.y,b.z),x.x=e*Math.cos(k),x.y=e*Math.sin(k),A.subVectors(b,x).normalize(),v.push(A.x,A.y,A.z),_.push(y/l),_.push(N/s)}}for(let N=1;N<=s;N++)for(let M=1;M<=l;M++){const y=(l+1)*N+M-1,k=(l+1)*(N-1)+M-1,L=(l+1)*(N-1)+M,w=(l+1)*N+M;g.push(y,k,w),g.push(k,L,w)}this.setIndex(g),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class uu extends Gn{constructor(e=new Mp(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=e.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const p=new K,g=new K,m=new lt;let v=new K;const _=[],x=[],b=[],A=[];N(),this.setIndex(A),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(x,3)),this.setAttribute("uv",new cn(b,2));function N(){for(let L=0;L<i;L++)M(L);M(c===!1?i:0),k(),y()}function M(L){v=e.getPointAt(L/i,v);const w=f.normals[L],I=f.binormals[L];for(let U=0;U<=l;U++){const B=U/l*Math.PI*2,T=Math.sin(B),z=-Math.cos(B);g.x=z*w.x+T*I.x,g.y=z*w.y+T*I.y,g.z=z*w.z+T*I.z,g.normalize(),x.push(g.x,g.y,g.z),p.x=v.x+s*g.x,p.y=v.y+s*g.y,p.z=v.z+s*g.z,_.push(p.x,p.y,p.z)}}function y(){for(let L=1;L<=i;L++)for(let w=1;w<=l;w++){const I=(l+1)*(L-1)+(w-1),U=(l+1)*L+(w-1),B=(l+1)*L+w,T=(l+1)*(L-1)+w;A.push(I,U,T),A.push(U,B,T)}}function k(){for(let L=0;L<=i;L++)for(let w=0;w<=l;w++)m.x=L/i,m.y=w/l,b.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new uu(new n2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class i2 extends Xs{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _t(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Wr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Jx(l))l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Jx(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function kn(r){const e={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)e[l]=s[l]}return e}function Jx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function a2(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function __(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const s2={clone:Wr,merge:kn};var r2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r2,this.fragmentShader=o2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=a2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new _t().setHex(l.value);break;case"v2":this.uniforms[s].value=new lt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new K().fromArray(l.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[s].value=new on().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class l2 extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Br extends Xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c2 extends Br{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class u2 extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f2 extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fu extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const rh=new on,$x=new K,ev=new K;class d2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bp,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;$x.setFromMatrixPosition(e.matrixWorld),i.position.copy($x),ev.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ev),i.updateMatrixWorld(),rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===fl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xc=new K,Wc=new qr,Vi=new K;class b_ extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,Wc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Xc,Wc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new K,tv=new lt,nv=new lt;class Si extends b_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,i){return this.getViewBounds(e,tv,nv),i.subVectors(nv,tv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const g=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/g,i-=f.offsetY*s/m,l*=f.width/g,s*=f.height/m}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ep extends b_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,p-=v*this.view.offsetY,g=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class h2 extends d2{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oh extends fu{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new h2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class p2 extends fu{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Pr=-90,zr=1;class m2 extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Pr,zr,e,i);l.layers=this.layers,this.add(l);const c=new Si(Pr,zr,e,i);c.layers=this.layers,this.add(c);const f=new Si(Pr,zr,e,i);f.layers=this.layers,this.add(f);const p=new Si(Pr,zr,e,i);p.layers=this.layers,this.add(p);const g=new Si(Pr,zr,e,i);g.layers=this.layers,this.add(g);const m=new Si(Pr,zr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,g]=i;for(const m of i)this.remove(m);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===fl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,g,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=N,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(_,x,b),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class g2 extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rp=class Rp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Rp.prototype.isMatrix2=!0;let iv=Rp;const qc=new Yr;class x2 extends FM{constructor(e,i=16776960){const s=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=new Float32Array(24),c=new Gn;c.setIndex(new Mi(s,1)),c.setAttribute("position",new Mi(l,3)),super(c,new p_({color:i,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&qc.setFromObject(this.object),qc.isEmpty())return;const e=qc.min,i=qc.max,s=this.geometry.attributes.position,l=s.array;l[0]=i.x,l[1]=i.y,l[2]=i.z,l[3]=e.x,l[4]=i.y,l[5]=i.z,l[6]=e.x,l[7]=e.y,l[8]=i.z,l[9]=i.x,l[10]=e.y,l[11]=i.z,l[12]=i.x,l[13]=i.y,l[14]=e.z,l[15]=e.x,l[16]=i.y,l[17]=e.z,l[18]=e.x,l[19]=e.y,l[20]=e.z,l[21]=i.x,l[22]=e.y,l[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,i){return super.copy(e,i),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function av(r,e,i,s){const l=v2(s);switch(i){case i_:return r*e;case s_:return r*e/l.components*l.byteLength;case pp:return r*e/l.components*l.byteLength;case Vs:return r*e*2/l.components*l.byteLength;case mp:return r*e*2/l.components*l.byteLength;case a_:return r*e*3/l.components*l.byteLength;case Pi:return r*e*4/l.components*l.byteLength;case gp:return r*e*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:case Rh:return Math.max(r,16)*Math.max(e,8)/4;case Ah:case Ch:return Math.max(r,8)*Math.max(e,8)/2;case Nh:case Dh:case Lh:case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uh:case nu:case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $h:case ep:return Math.ceil(r/4)*Math.ceil(e/4)*8;case iu:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function v2(r){switch(r){case di:case $v:return{byteLength:1,components:1};case cl:case e_:case Aa:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case Ki:case fp:case Wi:return{byteLength:4,components:1};case t_:case n_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function _2(r){const e=new WeakMap;function i(p,g){const m=p.array,v=p.usage,_=m.byteLength,x=r.createBuffer();r.bindBuffer(g,x),r.bufferData(g,m,v),p.onUploadCallback();let b;if(m instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=r.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=r.SHORT;else if(m instanceof Uint32Array)b=r.UNSIGNED_INT;else if(m instanceof Int32Array)b=r.INT;else if(m instanceof Int8Array)b=r.BYTE;else if(m instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,g,m){const v=g.array,_=g.updateRanges;if(r.bindBuffer(m,p),_.length===0)r.bufferSubData(m,0,v);else{_.sort((b,A)=>b.start-A.start);let x=0;for(let b=1;b<_.length;b++){const A=_[x],N=_[b];N.start<=A.start+A.count+1?A.count=Math.max(A.count,N.start+N.count-A.start):(++x,_[x]=N)}_.length=x+1;for(let b=0,A=_.length;b<A;b++){const N=_[b];r.bufferSubData(m,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=e.get(p);g&&(r.deleteBuffer(g.buffer),e.delete(p))}function f(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=e.get(p);if(m===void 0)e.set(p,i(p,g));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,p,g),m.version=p.version}}return{get:l,remove:c,update:f}}var b2=`#ifdef USE_ALPHAHASH
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
#endif`,k2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
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
}`,k3=`#define NORMAL
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
}`,G3=`#define PHONG
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
}`,vt={alphahash_fragment:b2,alphahash_pars_fragment:y2,alphamap_fragment:S2,alphamap_pars_fragment:M2,alphatest_fragment:E2,alphatest_pars_fragment:T2,aomap_fragment:A2,aomap_pars_fragment:w2,batching_pars_vertex:C2,batching_vertex:R2,begin_vertex:N2,beginnormal_vertex:D2,bsdfs:U2,iridescence_fragment:L2,bumpmap_pars_fragment:O2,clipping_planes_fragment:P2,clipping_planes_pars_fragment:z2,clipping_planes_pars_vertex:I2,clipping_planes_vertex:B2,color_fragment:F2,color_pars_fragment:H2,color_pars_vertex:k2,color_vertex:G2,common:V2,cube_uv_reflection_fragment:j2,defaultnormal_vertex:X2,displacementmap_pars_vertex:W2,displacementmap_vertex:q2,emissivemap_fragment:Y2,emissivemap_pars_fragment:Z2,colorspace_fragment:K2,colorspace_pars_fragment:Q2,envmap_fragment:J2,envmap_common_pars_fragment:$2,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:aE,fog_fragment:sE,fog_pars_fragment:rE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:hE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:xE,lights_physical_pars_fragment:vE,lights_fragment_begin:_E,lights_fragment_maps:bE,lights_fragment_end:yE,lightprobes_pars_fragment:SE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:wE,map_pars_fragment:CE,map_particle_fragment:RE,map_particle_pars_fragment:NE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:UE,morphinstance_vertex:LE,morphcolor_vertex:OE,morphnormal_vertex:PE,morphtarget_pars_vertex:zE,morphtarget_vertex:IE,normal_fragment_begin:BE,normal_fragment_maps:FE,normal_pars_fragment:HE,normal_pars_vertex:kE,normal_vertex:GE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:qE,opaque_fragment:YE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:$E,roughnessmap_fragment:e3,roughnessmap_pars_fragment:t3,shadowmap_pars_fragment:n3,shadowmap_pars_vertex:i3,shadowmap_vertex:a3,shadowmask_pars_fragment:s3,skinbase_vertex:r3,skinning_pars_vertex:o3,skinning_vertex:l3,skinnormal_vertex:c3,specularmap_fragment:u3,specularmap_pars_fragment:f3,tonemapping_fragment:d3,tonemapping_pars_fragment:h3,transmission_fragment:p3,transmission_pars_fragment:m3,uv_pars_fragment:g3,uv_pars_vertex:x3,uv_vertex:v3,worldpos_vertex:_3,background_vert:b3,background_frag:y3,backgroundCube_vert:S3,backgroundCube_frag:M3,cube_vert:E3,cube_frag:T3,depth_vert:A3,depth_frag:w3,distance_vert:C3,distance_frag:R3,equirect_vert:N3,equirect_frag:D3,linedashed_vert:U3,linedashed_frag:L3,meshbasic_vert:O3,meshbasic_frag:P3,meshlambert_vert:z3,meshlambert_frag:I3,meshmatcap_vert:B3,meshmatcap_frag:F3,meshnormal_vert:H3,meshnormal_frag:k3,meshphong_vert:G3,meshphong_frag:V3,meshphysical_vert:j3,meshphysical_frag:X3,meshtoon_vert:W3,meshtoon_frag:q3,points_vert:Y3,points_frag:Z3,shadow_vert:K3,shadow_frag:Q3,sprite_vert:J3,sprite_frag:$3},Xe={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Xi={basic:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:kn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:kn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new _t(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:kn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:kn([Xe.points,Xe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:kn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:kn([Xe.common,Xe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:kn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:kn([Xe.sprite,Xe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:kn([Xe.common,Xe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:kn([Xe.lights,Xe.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Xi.physical={uniforms:kn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Yc={r:0,b:0,g:0},eT=new on,S_=new ht;S_.set(-1,0,0,0,1,0,0,0,1);function tT(r,e,i,s,l,c){const f=new _t(0);let p=l===!0?0:1,g,m,v=null,_=0,x=null;function b(k){let L=k.isScene===!0?k.background:null;if(L&&L.isTexture){const w=k.backgroundBlurriness>0;L=e.get(L,w)}return L}function A(k){let L=!1;const w=b(k);w===null?M(f,p):w&&w.isColor&&(M(w,1),L=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function N(k,L){const w=b(L);w&&(w.isCubeTexture||w.mapping===mu)?(m===void 0&&(m=new Bt(new Ui(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Wr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(L.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(S_),m.material.toneMapped=wt.getTransfer(w.colorSpace)!==qt,(v!==w||_!==w.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,v=w,_=w.version,x=r.toneMapping),m.layers.enableAll(),k.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(g===void 0&&(g=new Bt(new hl(2,2),new Qi({name:"BackgroundMaterial",uniforms:Wr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=w,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.toneMapped=wt.getTransfer(w.colorSpace)!==qt,w.matrixAutoUpdate===!0&&w.updateMatrix(),g.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||_!==w.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,v=w,_=w.version,x=r.toneMapping),g.layers.enableAll(),k.unshift(g,g.geometry,g.material,0,0,null))}function M(k,L){k.getRGB(Yc,__(r)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,L,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(k,L=1){f.set(k),p=L,M(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(k){p=k,M(f,p)},render:A,addToRenderList:N,dispose:y}}function nT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function p(V,q,fe,W,P){let O=!1;const H=_(V,W,fe,q);c!==H&&(c=H,m(c.object)),O=b(V,W,fe,P),O&&A(V,W,fe,P),P!==null&&e.update(P,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,w(V,q,fe,W),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function g(){return r.createVertexArray()}function m(V){return r.bindVertexArray(V)}function v(V){return r.deleteVertexArray(V)}function _(V,q,fe,W){const P=W.wireframe===!0;let O=s[q.id];O===void 0&&(O={},s[q.id]=O);const H=V.isInstancedMesh===!0?V.id:0;let $=O[H];$===void 0&&($={},O[H]=$);let re=$[fe.id];re===void 0&&(re={},$[fe.id]=re);let me=re[P];return me===void 0&&(me=x(g()),re[P]=me),me}function x(V){const q=[],fe=[],W=[];for(let P=0;P<i;P++)q[P]=0,fe[P]=0,W[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:fe,attributeDivisors:W,object:V,attributes:{},index:null}}function b(V,q,fe,W){const P=c.attributes,O=q.attributes;let H=0;const $=fe.getAttributes();for(const re in $)if($[re].location>=0){const D=P[re];let Q=O[re];if(Q===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),D===void 0||D.attribute!==Q||Q&&D.data!==Q.data)return!0;H++}return c.attributesNum!==H||c.index!==W}function A(V,q,fe,W){const P={},O=q.attributes;let H=0;const $=fe.getAttributes();for(const re in $)if($[re].location>=0){let D=O[re];D===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(D=V.instanceColor));const Q={};Q.attribute=D,D&&D.data&&(Q.data=D.data),P[re]=Q,H++}c.attributes=P,c.attributesNum=H,c.index=W}function N(){const V=c.newAttributes;for(let q=0,fe=V.length;q<fe;q++)V[q]=0}function M(V){y(V,0)}function y(V,q){const fe=c.newAttributes,W=c.enabledAttributes,P=c.attributeDivisors;fe[V]=1,W[V]===0&&(r.enableVertexAttribArray(V),W[V]=1),P[V]!==q&&(r.vertexAttribDivisor(V,q),P[V]=q)}function k(){const V=c.newAttributes,q=c.enabledAttributes;for(let fe=0,W=q.length;fe<W;fe++)q[fe]!==V[fe]&&(r.disableVertexAttribArray(fe),q[fe]=0)}function L(V,q,fe,W,P,O,H){H===!0?r.vertexAttribIPointer(V,q,fe,P,O):r.vertexAttribPointer(V,q,fe,W,P,O)}function w(V,q,fe,W){N();const P=W.attributes,O=fe.getAttributes(),H=q.defaultAttributeValues;for(const $ in O){const re=O[$];if(re.location>=0){let me=P[$];if(me===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(me=V.instanceColor)),me!==void 0){const D=me.normalized,Q=me.itemSize,Ee=e.get(me);if(Ee===void 0)continue;const ne=Ee.buffer,J=Ee.type,Y=Ee.bytesPerElement,ge=J===r.INT||J===r.UNSIGNED_INT||me.gpuType===fp;if(me.isInterleavedBufferAttribute){const xe=me.data,De=xe.stride,ve=me.offset;if(xe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<re.locationSize;Fe++)y(re.location+Fe,xe.meshPerAttribute);V.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Fe=0;Fe<re.locationSize;Fe++)M(re.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let Fe=0;Fe<re.locationSize;Fe++)L(re.location+Fe,Q/re.locationSize,J,D,De*Y,(ve+Q/re.locationSize*Fe)*Y,ge)}else{if(me.isInstancedBufferAttribute){for(let xe=0;xe<re.locationSize;xe++)y(re.location+xe,me.meshPerAttribute);V.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let xe=0;xe<re.locationSize;xe++)M(re.location+xe);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let xe=0;xe<re.locationSize;xe++)L(re.location+xe,Q/re.locationSize,J,D,Q*Y,Q/re.locationSize*xe*Y,ge)}}else if(H!==void 0){const D=H[$];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(re.location,D);break;case 3:r.vertexAttrib3fv(re.location,D);break;case 4:r.vertexAttrib4fv(re.location,D);break;default:r.vertexAttrib1fv(re.location,D)}}}}k()}function I(){z();for(const V in s){const q=s[V];for(const fe in q){const W=q[fe];for(const P in W){const O=W[P];for(const H in O)v(O[H].object),delete O[H];delete W[P]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const q=s[V.id];for(const fe in q){const W=q[fe];for(const P in W){const O=W[P];for(const H in O)v(O[H].object),delete O[H];delete W[P]}}delete s[V.id]}function B(V){for(const q in s){const fe=s[q];for(const W in fe){const P=fe[W];if(P[V.id]===void 0)continue;const O=P[V.id];for(const H in O)v(O[H].object),delete O[H];delete P[V.id]}}}function T(V){for(const q in s){const fe=s[q],W=V.isInstancedMesh===!0?V.id:0,P=fe[W];if(P!==void 0){for(const O in P){const H=P[O];for(const $ in H)v(H[$].object),delete H[$];delete P[O]}delete fe[W],Object.keys(fe).length===0&&delete s[q]}}}function z(){G(),f=!0,c!==l&&(c=l,m(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:z,resetDefaultState:G,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:N,enableAttribute:M,disableUnusedAttributes:k}}function iT(r,e,i){let s;function l(g){s=g}function c(g,m){r.drawArrays(s,g,m),i.update(m,s,1)}function f(g,m,v){v!==0&&(r.drawArraysInstanced(s,g,m,v),i.update(m,s,v))}function p(g,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,m,0,v);let x=0;for(let b=0;b<v;b++)x+=m[b];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function aT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Pi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const T=B===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==di&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Wi&&!T)}function g(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=g(m);v!==m&&(ft("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),k=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:f,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:A,maxTextureSize:N,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:k,maxVaryings:L,maxFragmentUniforms:w,maxSamples:I,samples:U}}function sT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new zs,p=new ht,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const b=_.length!==0||x||s!==0||l;return l=x,s=_.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=v(_,x,0)},this.setState=function(_,x,b){const A=_.clippingPlanes,N=_.clipIntersection,M=_.clipShadows,y=r.get(_);if(!l||A===null||A.length===0||c&&!M)c?v(null):m();else{const k=c?0:s,L=k*4;let w=y.clippingState||null;g.value=w,w=v(A,x,L,b);for(let I=0;I!==L;++I)w[I]=i[I];y.clippingState=w,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=k}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,x,b,A){const N=_!==null?_.length:0;let M=null;if(N!==0){if(M=g.value,A!==!0||M===null){const y=b+N*4,k=x.matrixWorldInverse;p.getNormalMatrix(k),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=b;L!==N;++L,w+=4)f.copy(_[L]).applyMatrix4(k,p),f.normal.toArray(M,w),M[w+3]=f.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,M}}const cs=4,sv=[.125,.215,.35,.446,.526,.582],Bs=20,rT=256,Zo=new Ep,rv=new _t;let lh=null,ch=0,uh=0,fh=!1;const oT=new K;class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=oT}=c;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,p),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gs||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Aa,format:Pi,colorSpace:au,depthBuffer:!1},l=lv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lT(c)),this._blurMaterial=uT(c,e,i),this._ggxMaterial=cT(c,e,i)}return l}_compileMaterial(e){const i=new Bt(new Gn,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,s,l,c){const g=new Si(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,b=_.toneMapping;_.getClearColor(rv),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Ui,new h_({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let y=!1;const k=e.background;k?k.isColor&&(M.color.copy(k),e.background=null,y=!0):(M.color.copy(rv),y=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(g.up.set(0,m[L],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+v[L],c.y,c.z)):w===1?(g.up.set(0,0,m[L]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+v[L],c.z)):(g.up.set(0,m[L],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+v[L]));const I=this._cubeSize;Ir(l,w*I,L>2?I:0,I,I),_.setRenderTarget(l),y&&_.render(N,g),_.render(e,g)}_.toneMapping=b,_.autoClear=x,e.background=k}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Gs||e.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const g=this._cubeSize;Ir(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(f,Zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const g=f.uniforms,m=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),x=0+m*1.25,b=_*x,{_lodMax:A}=this,N=this._sizeLods[s],M=3*N*(s>A-cs?s-A+cs:0),y=4*(this._cubeSize-N);g.envMap.value=e.texture,g.roughness.value=b,g.mipInt.value=A-i,Ir(c,M,y,3*N,2*N),l.setRenderTarget(c),l.render(p,Zo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=A-s,Ir(e,M,y,3*N,2*N),l.setRenderTarget(e),l.render(p,Zo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const g=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=m;const x=m.uniforms,b=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Bs-1),N=c/A,M=isFinite(c)?1+Math.floor(v*N):Bs;M>Bs&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Bs}`);const y=[];let k=0;for(let B=0;B<Bs;++B){const T=B/N,z=Math.exp(-T*T/2);y.push(z),B===0?k+=z:B<M&&(k+=2*z)}for(let B=0;B<y.length;B++)y[B]=y[B]/k;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=f==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:L}=this;x.dTheta.value=A,x.mipInt.value=L-s;const w=this._sizeLods[l],I=3*w*(l>L-cs?l-L+cs:0),U=4*(this._cubeSize-w);Ir(i,I,U,3*w,2*w),g.setRenderTarget(i),g.render(_,Zo)}}function lT(r){const e=[],i=[],s=[];let l=r;const c=r-cs+1+sv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let g=1/p;f>r-cs?g=sv[f-r+cs-1]:f===0&&(g=0),i.push(g);const m=1/(p-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],b=6,A=6,N=3,M=2,y=1,k=new Float32Array(N*A*b),L=new Float32Array(M*A*b),w=new Float32Array(y*A*b);for(let U=0;U<b;U++){const B=U%3*2/3-1,T=U>2?0:-1,z=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];k.set(z,N*A*U),L.set(x,M*A*U);const G=[U,U,U,U,U,U];w.set(G,y*A*U)}const I=new Gn;I.setAttribute("position",new Mi(k,N)),I.setAttribute("uv",new Mi(L,M)),I.setAttribute("faceIndex",new Mi(w,y)),s.push(new Bt(I,null)),l>cs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function lv(r,e,i){const s=new Zi(r,e,i);return s.texture.mapping=mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ir(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function cT(r,e,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function uT(r,e,i){const s=new Float32Array(Bs),l=new K(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xu(),fragmentShader:`

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
	`}class M_ extends Zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new m_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ui(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new Bt(l,c),p=i.minFilter;return i.minFilter===Fs&&(i.minFilter=Bn),new m2(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function fT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,b=!1){return x==null?null:b?f(x):c(x)}function c(x){if(x&&x.isTexture){const b=x.mapping;if(b===Rd||b===Nd)if(e.has(x)){const A=e.get(x).texture;return p(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const N=new M_(A.height);return N.fromEquirectangularTexture(r,x),e.set(x,N),x.addEventListener("dispose",m),p(N.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const b=x.mapping,A=b===Rd||b===Nd,N=b===Gs||b===jr;if(A||N){let M=i.get(x);const y=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new ov(r)),M=A?s.fromEquirectangular(x,M):s.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const k=x.image;return A&&k&&k.height>0||N&&k&&g(k)?(s===null&&(s=new ov(r)),M=A?s.fromEquirectangular(x):s.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",v),M.texture):null}}}return x}function p(x,b){return b===Rd?x.mapping=Gs:b===Nd&&(x.mapping=jr),x}function g(x){let b=0;const A=6;for(let N=0;N<A;N++)x[N]!==void 0&&b++;return b===A}function m(x){const b=x.target;b.removeEventListener("dispose",m);const A=e.get(b);A!==void 0&&(e.delete(b),A.dispose())}function v(x){const b=x.target;b.removeEventListener("dispose",v);const A=i.get(b);A!==void 0&&(i.delete(b),A.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function dT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&kr("WebGLRenderer: "+s+" extension not supported."),l}}}function hT(r,e,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",f),delete l[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function g(_){const x=_.attributes;for(const b in x)e.update(x[b],r.ARRAY_BUFFER)}function m(_){const x=[],b=_.index,A=_.attributes.position;let N=0;if(A===void 0)return;if(b!==null){const k=b.array;N=b.version;for(let L=0,w=k.length;L<w;L+=3){const I=k[L+0],U=k[L+1],B=k[L+2];x.push(I,U,U,B,B,I)}}else{const k=A.array;N=A.version;for(let L=0,w=k.length/3-1;L<w;L+=3){const I=L+0,U=L+1,B=L+2;x.push(I,U,U,B,B,I)}}const M=new(A.count>=65535?f_:u_)(x,1);M.version=N;const y=c.get(_);y&&e.remove(y),c.set(_,M)}function v(_){const x=c.get(_);if(x){const b=_.index;b!==null&&x.version<b.version&&m(_)}else m(_);return c.get(_)}return{get:p,update:g,getWireframeAttribute:v}}function pT(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function g(_,x){r.drawElements(s,x,c,_*f),i.update(x,s,1)}function m(_,x,b){b!==0&&(r.drawElementsInstanced(s,x,c,_*f,b),i.update(x,s,b))}function v(_,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,b);let N=0;for(let M=0;M<b;M++)N+=x[M];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=m,this.renderMultiDraw=v}function mT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Nt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function gT(r,e,i){const s=new WeakMap,l=new ln;function c(f,p,g){const m=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=v!==void 0?v.length:0;let x=s.get(p);if(x===void 0||x.count!==_){let G=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",G)};var b=G;x!==void 0&&x.texture.dispose();const A=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],k=p.morphAttributes.normal||[],L=p.morphAttributes.color||[];let w=0;A===!0&&(w=1),N===!0&&(w=2),M===!0&&(w=3);let I=p.attributes.position.count*w,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*U*4*_),T=new o_(B,I,U,_);T.type=Wi,T.needsUpdate=!0;const z=w*4;for(let V=0;V<_;V++){const q=y[V],fe=k[V],W=L[V],P=I*U*4*V;for(let O=0;O<q.count;O++){const H=O*z;A===!0&&(l.fromBufferAttribute(q,O),B[P+H+0]=l.x,B[P+H+1]=l.y,B[P+H+2]=l.z,B[P+H+3]=0),N===!0&&(l.fromBufferAttribute(fe,O),B[P+H+4]=l.x,B[P+H+5]=l.y,B[P+H+6]=l.z,B[P+H+7]=0),M===!0&&(l.fromBufferAttribute(W,O),B[P+H+8]=l.x,B[P+H+9]=l.y,B[P+H+10]=l.z,B[P+H+11]=W.itemSize===4?l.w:1)}}x={count:_,texture:T,size:new lt(I,U)},s.set(p,x),p.addEventListener("dispose",G)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const N=p.morphTargetsRelative?1:1-A;g.getUniforms().setValue(r,"morphTargetBaseInfluence",N),g.getUniforms().setValue(r,"morphTargetInfluences",m)}g.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function xT(r,e,i,s,l){let c=new WeakMap;function f(m){const v=l.render.frame,_=m.geometry,x=e.get(m,_);if(c.get(x)!==v&&(e.update(x),c.set(x,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),c.get(m)!==v&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),c.set(m,v))),m.isSkinnedMesh){const b=m.skeleton;c.get(b)!==v&&(b.update(),c.set(b,v))}return x}function p(){c=new WeakMap}function g(m){const v=m.target;v.removeEventListener("dispose",g),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}const vT={[Wv]:"LINEAR_TONE_MAPPING",[qv]:"REINHARD_TONE_MAPPING",[Yv]:"CINEON_TONE_MAPPING",[up]:"ACES_FILMIC_TONE_MAPPING",[Kv]:"AGX_TONE_MAPPING",[Qv]:"NEUTRAL_TONE_MAPPING",[Zv]:"CUSTOM_TONE_MAPPING"};function _T(r,e,i,s,l,c){const f=new Zi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Xr(e,i):void 0}),p=new Zi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),g=new Gn;g.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new cn([0,2,0,0,2,0],2));const m=new l2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Bt(g,m),_=new Ep(-1,1,1,-1,0,1);let x=null,b=null,A=!1,N,M=null,y=[],k=!1;this.setSize=function(L,w){f.setSize(L,w),p.setSize(L,w);for(let I=0;I<y.length;I++){const U=y[I];U.setSize&&U.setSize(L,w)}},this.setEffects=function(L){y=L,k=y.length>0&&y[0].isRenderPass===!0;const w=f.width,I=f.height;for(let U=0;U<y.length;U++){const B=y[U];B.setSize&&B.setSize(w,I)}},this.begin=function(L,w){if(A||L.toneMapping===Yi&&y.length===0)return!1;if(M=w,w!==null){const I=w.width,U=w.height;(f.width!==I||f.height!==U)&&this.setSize(I,U)}return k===!1&&L.setRenderTarget(f),N=L.toneMapping,L.toneMapping=Yi,!0},this.hasRenderPass=function(){return k},this.end=function(L,w){L.toneMapping=N,A=!0;let I=f,U=p;for(let B=0;B<y.length;B++){const T=y[B];if(T.enabled!==!1&&(T.render(L,U,I,w),T.needsSwap!==!1)){const z=I;I=U,U=z}}if(x!==L.outputColorSpace||b!==L.toneMapping){x=L.outputColorSpace,b=L.toneMapping,m.defines={},wt.getTransfer(x)===qt&&(m.defines.SRGB_TRANSFER="");const B=vT[b];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(M),L.render(v,_),M=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),g.dispose(),m.dispose()}}const E_=new Fn,ap=new Xr(1,1),T_=new o_,A_=new bM,w_=new m_,fv=[],dv=[],hv=new Float32Array(16),pv=new Float32Array(9),mv=new Float32Array(4);function Zr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=fv[l];if(c===void 0&&(c=new Float32Array(l),fv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function En(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function vu(r,e){let i=dv[e];i===void 0&&(i=new Int32Array(e),dv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function bT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2fv(this.addr,e),En(i,e)}}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;r.uniform3fv(this.addr,e),En(i,e)}}function MT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4fv(this.addr,e),En(i,e)}}function ET(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;mv.set(s),r.uniformMatrix2fv(this.addr,!1,mv),En(i,s)}}function TT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;pv.set(s),r.uniformMatrix3fv(this.addr,!1,pv),En(i,s)}}function AT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;hv.set(s),r.uniformMatrix4fv(this.addr,!1,hv),En(i,s)}}function wT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function CT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2iv(this.addr,e),En(i,e)}}function RT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;r.uniform3iv(this.addr,e),En(i,e)}}function NT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4iv(this.addr,e),En(i,e)}}function DT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function UT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2uiv(this.addr,e),En(i,e)}}function LT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;r.uniform3uiv(this.addr,e),En(i,e)}}function OT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4uiv(this.addr,e),En(i,e)}}function PT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?vp:xp,c=ap):c=E_,i.setTexture2D(e||c,l)}function zT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||A_,l)}function IT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||w_,l)}function BT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||T_,l)}function FT(r){switch(r){case 5126:return bT;case 35664:return yT;case 35665:return ST;case 35666:return MT;case 35674:return ET;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return wT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return NT;case 5125:return DT;case 36294:return UT;case 36295:return LT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(r,e){r.uniform1fv(this.addr,e)}function kT(r,e){const i=Zr(e,this.size,2);r.uniform2fv(this.addr,i)}function GT(r,e){const i=Zr(e,this.size,3);r.uniform3fv(this.addr,i)}function VT(r,e){const i=Zr(e,this.size,4);r.uniform4fv(this.addr,i)}function jT(r,e){const i=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function XT(r,e){const i=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function WT(r,e){const i=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function qT(r,e){r.uniform1iv(this.addr,e)}function YT(r,e){r.uniform2iv(this.addr,e)}function ZT(r,e){r.uniform3iv(this.addr,e)}function KT(r,e){r.uniform4iv(this.addr,e)}function QT(r,e){r.uniform1uiv(this.addr,e)}function JT(r,e){r.uniform2uiv(this.addr,e)}function $T(r,e){r.uniform3uiv(this.addr,e)}function eA(r,e){r.uniform4uiv(this.addr,e)}function tA(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ap:f=E_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function nA(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||A_,c[f])}function iA(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||w_,c[f])}function aA(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||T_,c[f])}function sA(r){switch(r){case 5126:return HT;case 35664:return kT;case 35665:return GT;case 35666:return VT;case 35674:return jT;case 35675:return XT;case 35676:return WT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}class rA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=FT(i.type)}}class oA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sA(i.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function gv(r,e){r.seq.push(e),r.map[e.id]=e}function cA(r,e,i){const s=r.name,l=s.length;for(dh.lastIndex=0;;){const c=dh.exec(s),f=dh.lastIndex;let p=c[1];const g=c[2]==="]",m=c[3];if(g&&(p=p|0),m===void 0||m==="["&&f+2===l){gv(i,m===void 0?new rA(p,r,e):new oA(p,r,e));break}else{let _=i.map[p];_===void 0&&(_=new lA(p),gv(i,_)),i=_}}}class eu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),g=e.getUniformLocation(i,p.name);cA(p,g,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],g=s[p.id];g.needsUpdate!==!1&&p.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function xv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const uA=37297;let fA=0;function dA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const vv=new ht;function hA(r){wt._getMatrix(vv,wt.workingColorSpace,r);const e=`mat3( ${vv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case su:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _v(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+dA(r.getShaderSource(e),p)}else return c}function pA(r,e){const i=hA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const mA={[Wv]:"Linear",[qv]:"Reinhard",[Yv]:"Cineon",[up]:"ACESFilmic",[Kv]:"AgX",[Qv]:"Neutral",[Zv]:"Custom"};function gA(r,e){const i=mA[e];return i===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new K;function xA(){wt.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),e=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function _A(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function bA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function $o(r){return r!==""}function bv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(yA,MA)}const SA=new Map;function MA(r,e){let i=vt[e];if(i===void 0){const s=SA.get(e);if(s!==void 0)i=vt[s],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sp(i)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(r){return r.replace(EA,TA)}function TA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Mv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const AA={[nl]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function wA(r){return AA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CA={[Gs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[mu]:"ENVMAP_TYPE_CUBE_UV"};function RA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":CA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const NA={[jr]:"ENVMAP_MODE_REFRACTION"};function DA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":NA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UA={[Xv]:"ENVMAP_BLENDING_MULTIPLY",[$S]:"ENVMAP_BLENDING_MIX",[eM]:"ENVMAP_BLENDING_ADD"};function LA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":UA[r.combine]||"ENVMAP_BLENDING_NONE"}function OA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function PA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const g=wA(i),m=RA(i),v=DA(i),_=LA(i),x=OA(i),b=vA(i),A=_A(c),N=l.createProgram();let M,y,k=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter($o).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter($o).join(`
`),y.length>0&&(y+=`
`)):(M=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),y=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?vt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?gA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,pA("linearToOutputTexel",i.outputColorSpace),xA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=sp(f),f=bv(f,i),f=yv(f,i),p=sp(p),p=bv(p,i),p=yv(p,i),f=Sv(f),p=Sv(p),i.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=k+M+f,w=k+y+p,I=xv(l,l.VERTEX_SHADER,L),U=xv(l,l.FRAGMENT_SHADER,w);l.attachShader(N,I),l.attachShader(N,U),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function B(V){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(N)||"",fe=l.getShaderInfoLog(I)||"",W=l.getShaderInfoLog(U)||"",P=q.trim(),O=fe.trim(),H=W.trim();let $=!0,re=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,N,I,U);else{const me=_v(l,I,"vertex"),D=_v(l,U,"fragment");Nt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+P+`
`+me+`
`+D)}else P!==""?ft("WebGLProgram: Program Info Log:",P):(O===""||H==="")&&(re=!1);re&&(V.diagnostics={runnable:$,programLog:P,vertexShader:{log:O,prefix:M},fragmentShader:{log:H,prefix:y}})}l.deleteShader(I),l.deleteShader(U),T=new eu(l,N),z=bA(l,N)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let G=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=l.getProgramParameter(N,uA)),G},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=U,this}let zA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new BA(e),i.set(e,s)),s}}class BA{constructor(e){this.id=zA++,this.code=e,this.usedTimes=0}}function FA(r){return r===Vs||r===nu||r===iu}function HA(r,e,i,s,l,c){const f=new l_,p=new IA,g=new Set,m=[],v=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return g.add(T),T===0?"uv":`uv${T}`}function N(T,z,G,V,q,fe){const W=V.fog,P=q.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||O,H),re=$&&$.mapping===mu?$.image.height:null,me=b[T.type];T.precision!==null&&(x=s.getMaxPrecision(T.precision),x!==T.precision&&ft("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const D=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=D!==void 0?D.length:0;let Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let ne,J,Y,ge;if(me){const Ye=Xi[me];ne=Ye.vertexShader,J=Ye.fragmentShader}else{ne=T.vertexShader,J=T.fragmentShader;const Ye=p.getVertexShaderStage(T),nn=p.getFragmentShaderStage(T);p.update(T,Ye,nn),Y=Ye.id,ge=nn.id}const xe=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),ve=q.isInstancedMesh===!0,Fe=q.isBatchedMesh===!0,Oe=!!T.map,Pe=!!T.matcap,Je=!!$,nt=!!T.aoMap,ut=!!T.lightMap,pt=!!T.bumpMap&&T.wireframe===!1,Ct=!!T.normalMap,Yt=!!T.displacementMap,Pt=!!T.emissiveMap,Dt=!!T.metalnessMap,zt=!!T.roughnessMap,ee=T.anisotropy>0,Ft=T.clearcoat>0,Rt=T.dispersion>0,F=T.iridescence>0,E=T.sheen>0,ae=T.transmission>0,de=ee&&!!T.anisotropyMap,be=Ft&&!!T.clearcoatMap,ze=Ft&&!!T.clearcoatNormalMap,He=Ft&&!!T.clearcoatRoughnessMap,ye=F&&!!T.iridescenceMap,Se=F&&!!T.iridescenceThicknessMap,Ie=E&&!!T.sheenColorMap,We=E&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,se=!!T.specularColorMap,Te=!!T.specularIntensityMap,we=ae&&!!T.transmissionMap,Ze=ae&&!!T.thicknessMap,X=!!T.gradientMap,Ue=!!T.alphaMap,Me=T.alphaTest>0,Le=!!T.alphaHash,ke=!!T.extensions;let Ne=Yi;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const $e={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:J,defines:T.defines,customVertexShaderID:Y,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:Fe,batchingColor:Fe&&q._colorsTexture!==null,instancing:ve,instancingColor:ve&&q.instanceColor!==null,instancingMorph:ve&&q.morphTexture!==null,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:Pe,envMap:Je,envMapMode:Je&&$.mapping,envMapCubeUVHeight:re,aoMap:nt,lightMap:ut,bumpMap:pt,normalMap:Ct,displacementMap:Yt,emissiveMap:Pt,normalMapObjectSpace:Ct&&T.normalMapType===iM,normalMapTangentSpace:Ct&&T.normalMapType===np,packedNormalMap:Ct&&T.normalMapType===np&&FA(T.normalMap.format),metalnessMap:Dt,roughnessMap:zt,anisotropy:ee,anisotropyMap:de,clearcoat:Ft,clearcoatMap:be,clearcoatNormalMap:ze,clearcoatRoughnessMap:He,dispersion:Rt,iridescence:F,iridescenceMap:ye,iridescenceThicknessMap:Se,sheen:E,sheenColorMap:Ie,sheenRoughnessMap:We,specularMap:Ge,specularColorMap:se,specularIntensityMap:Te,transmission:ae,transmissionMap:we,thicknessMap:Ze,gradientMap:X,opaque:T.transparent===!1&&T.blending===Hr&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Me,alphaHash:Le,combine:T.combine,mapUv:Oe&&A(T.map.channel),aoMapUv:nt&&A(T.aoMap.channel),lightMapUv:ut&&A(T.lightMap.channel),bumpMapUv:pt&&A(T.bumpMap.channel),normalMapUv:Ct&&A(T.normalMap.channel),displacementMapUv:Yt&&A(T.displacementMap.channel),emissiveMapUv:Pt&&A(T.emissiveMap.channel),metalnessMapUv:Dt&&A(T.metalnessMap.channel),roughnessMapUv:zt&&A(T.roughnessMap.channel),anisotropyMapUv:de&&A(T.anisotropyMap.channel),clearcoatMapUv:be&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:ze&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&A(T.sheenRoughnessMap.channel),specularMapUv:Ge&&A(T.specularMap.channel),specularColorMapUv:se&&A(T.specularColorMap.channel),specularIntensityMapUv:Te&&A(T.specularIntensityMap.channel),transmissionMapUv:we&&A(T.transmissionMap.channel),thicknessMapUv:Ze&&A(T.thicknessMap.channel),alphaMapUv:Ue&&A(T.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ct||ee),vertexNormals:!!P.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!P.attributes.uv&&(Oe||Ue),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||P.attributes.normal===void 0&&Ct===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:De,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ee,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:Pt&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Li,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&T.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $e.vertexUv1s=g.has(1),$e.vertexUv2s=g.has(2),$e.vertexUv3s=g.has(3),g.clear(),$e}function M(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)z.push(G),z.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(y(z,T),k(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function k(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),z.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function L(T){const z=b[T.type];let G;if(z){const V=Xi[z];G=s2.clone(V.uniforms)}else G=T.uniforms;return G}function w(T,z){let G=v.get(z);return G!==void 0?++G.usedTimes:(G=new PA(r,z,T,l),m.push(G),v.set(z,G)),G}function I(T){if(--T.usedTimes===0){const z=m.indexOf(T);m[z]=m[m.length-1],m.pop(),v.delete(T.cacheKey),T.destroy()}}function U(T){p.remove(T)}function B(){p.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:L,acquireProgram:w,releaseProgram:I,releaseShaderCache:U,programs:m,dispose:B}}function kA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,g){r.get(f)[p]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function GA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ev(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(x){let b=0;return x.isInstancedMesh&&(b+=2),x.isSkinnedMesh&&(b+=1),b}function p(x,b,A,N,M,y){let k=r[e];return k===void 0?(k={id:x.id,object:x,geometry:b,material:A,materialVariant:f(x),groupOrder:N,renderOrder:x.renderOrder,z:M,group:y},r[e]=k):(k.id=x.id,k.object=x,k.geometry=b,k.material=A,k.materialVariant=f(x),k.groupOrder=N,k.renderOrder=x.renderOrder,k.z=M,k.group=y),e++,k}function g(x,b,A,N,M,y){const k=p(x,b,A,N,M,y);A.transmission>0?s.push(k):A.transparent===!0?l.push(k):i.push(k)}function m(x,b,A,N,M,y){const k=p(x,b,A,N,M,y);A.transmission>0?s.unshift(k):A.transparent===!0?l.unshift(k):i.unshift(k)}function v(x,b,A){i.length>1&&i.sort(x||GA),s.length>1&&s.sort(b||Ev),l.length>1&&l.sort(b||Ev),A&&(i.reverse(),s.reverse(),l.reverse())}function _(){for(let x=e,b=r.length;x<b;x++){const A=r[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:m,finish:_,sort:v}}function VA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Tv,r.set(s,[f])):l>=c.length?(f=new Tv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function jA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new _t};break;case"SpotLight":i={position:new K,direction:new K,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new _t,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":i={color:new _t,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=i,i}}}function XA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let WA=0;function qA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function YA(r){const e=new jA,i=XA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new K);const l=new K,c=new on,f=new on;function p(m){let v=0,_=0,x=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let b=0,A=0,N=0,M=0,y=0,k=0,L=0,w=0,I=0,U=0,B=0;m.sort(qA);for(let z=0,G=m.length;z<G;z++){const V=m[z],q=V.color,fe=V.intensity,W=V.distance;let P=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Vs?P=V.shadow.map.texture:P=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=q.r*fe,_+=q.g*fe,x+=q.b*fe;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],fe);B++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.directionalShadow[b]=$,s.directionalShadowMap[b]=P,s.directionalShadowMatrix[b]=V.shadow.matrix,k++}s.directional[b]=O,b++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(q).multiplyScalar(fe),O.distance=W,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[N]=O;const H=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,H.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[N]=H.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.spotShadow[N]=$,s.spotShadowMap[N]=P,w++}N++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(q).multiplyScalar(fe),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=O,M++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,s.pointShadow[A]=$,s.pointShadowMap[A]=P,s.pointShadowMatrix[A]=V.shadow.matrix,L++}s.point[A]=O,A++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(fe),O.groundColor.copy(V.groundColor).multiplyScalar(fe),s.hemi[y]=O,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xe.LTC_FLOAT_1,s.rectAreaLTC2=Xe.LTC_FLOAT_2):(s.rectAreaLTC1=Xe.LTC_HALF_1,s.rectAreaLTC2=Xe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=x;const T=s.hash;(T.directionalLength!==b||T.pointLength!==A||T.spotLength!==N||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==k||T.numPointShadows!==L||T.numSpotShadows!==w||T.numSpotMaps!==I||T.numLightProbes!==B)&&(s.directional.length=b,s.spot.length=N,s.rectArea.length=M,s.point.length=A,s.hemi.length=y,s.directionalShadow.length=k,s.directionalShadowMap.length=k,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=k,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+I-U,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=B,T.directionalLength=b,T.pointLength=A,T.spotLength=N,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=k,T.numPointShadows=L,T.numSpotShadows=w,T.numSpotMaps=I,T.numLightProbes=B,s.version=WA++)}function g(m,v){let _=0,x=0,b=0,A=0,N=0;const M=v.matrixWorldInverse;for(let y=0,k=m.length;y<k;y++){const L=m[y];if(L.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(L.isSpotLight){const w=s.spot[b];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),b++}else if(L.isRectAreaLight){const w=s.rectArea[A];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),A++}else if(L.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const w=s.hemi[N];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),N++}}}return{setup:p,setupView:g,state:s}}function Av(r){const e=new YA(r),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function f(x){i.push(x)}function p(x){s.push(x)}function g(x){l.push(x)}function m(){e.setup(i)}function v(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:m,setupLightsView:v,pushLight:f,pushShadow:p,pushLightProbeGrid:g}}function ZA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new Av(r),e.set(l,[p])):c>=f.length?(p=new Av(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const KA=`void main() {
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
}`,JA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],$A=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],wv=new on,Ko=new K,hh=new K;function ew(r,e,i){let s=new bp;const l=new lt,c=new lt,f=new ln,p=new u2,g=new f2,m={},v=i.maxTextureSize,_={[us]:Qn,[Qn]:us,[Li]:Li},x=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:KA,fragmentShader:QA}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const A=new Gn;A.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Bt(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let y=this.type;this.render=function(U,B,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===OS&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nl);const z=r.getRenderTarget(),G=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ea),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const fe=y!==this.type;fe&&B.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(P=>P.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,P=U.length;W<P;W++){const O=U[W],H=O.shadow;if(H===void 0){ft("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();l.multiply($),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,H.mapSize.y=c.y));const re=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=re,H.map===null||fe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(O.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Zi(l.x,l.y,{format:Vs,type:Aa,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Xr(l.x,l.y,Wi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else O.isPointLight?(H.map=new M_(l.x),H.map.depthTexture=new kM(l.x,Ki)):(H.map=new Zi(l.x,l.y),H.map.depthTexture=new Xr(l.x,l.y,Ki)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=wa,this.type===nl?(H.map.depthTexture.compareFunction=re?vp:xp,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un);H.camera.updateProjectionMatrix()}const me=H.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<me;D++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,D),r.clear();else{D===0&&(r.setRenderTarget(H.map),r.clear());const Q=H.getViewport(D);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),q.viewport(f)}if(O.isPointLight){const Q=H.camera,Ee=H.matrix,ne=O.distance||Q.far;ne!==Q.far&&(Q.far=ne,Q.updateProjectionMatrix()),Ko.setFromMatrixPosition(O.matrixWorld),Q.position.copy(Ko),hh.copy(Q.position),hh.add(JA[D]),Q.up.copy($A[D]),Q.lookAt(hh),Q.updateMatrixWorld(),Ee.makeTranslation(-Ko.x,-Ko.y,-Ko.z),wv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(wv,Q.coordinateSystem,Q.reversedDepth)}else H.updateMatrices(O);s=H.getFrustum(),w(B,T,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&k(H,T),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(z,G,V)};function k(U,B){const T=e.update(N);x.defines.VSM_SAMPLES!==U.blurSamples&&(x.defines.VSM_SAMPLES=U.blurSamples,b.defines.VSM_SAMPLES=U.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Zi(l.x,l.y,{format:Vs,type:Aa})),x.uniforms.shadow_pass.value=U.map.depthTexture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(B,null,T,x,N,null),b.uniforms.shadow_pass.value=U.mapPass.texture,b.uniforms.resolution.value=U.mapSize,b.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(B,null,T,b,N,null)}function L(U,B,T,z){let G=null;const V=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)G=V;else if(G=T.isPointLight===!0?g:p,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const q=G.uuid,fe=B.uuid;let W=m[q];W===void 0&&(W={},m[q]=W);let P=W[fe];P===void 0&&(P=G.clone(),W[fe]=P,B.addEventListener("dispose",I)),G=P}if(G.visible=B.visible,G.wireframe=B.wireframe,z===Qo?G.side=B.shadowSide!==null?B.shadowSide:B.side:G.side=B.shadowSide!==null?B.shadowSide:_[B.side],G.alphaMap=B.alphaMap,G.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,G.map=B.map,G.clipShadows=B.clipShadows,G.clippingPlanes=B.clippingPlanes,G.clipIntersection=B.clipIntersection,G.displacementMap=B.displacementMap,G.displacementScale=B.displacementScale,G.displacementBias=B.displacementBias,G.wireframeLinewidth=B.wireframeLinewidth,G.linewidth=B.linewidth,T.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const q=r.properties.get(G);q.light=T}return G}function w(U,B,T,z,G){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&G===Qo)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const fe=e.update(U),W=U.material;if(Array.isArray(W)){const P=fe.groups;for(let O=0,H=P.length;O<H;O++){const $=P[O],re=W[$.materialIndex];if(re&&re.visible){const me=L(U,re,z,G);U.onBeforeShadow(r,U,B,T,fe,me,$),r.renderBufferDirect(T,null,fe,me,U,$),U.onAfterShadow(r,U,B,T,fe,me,$)}}}else if(W.visible){const P=L(U,W,z,G);U.onBeforeShadow(r,U,B,T,fe,P,null),r.renderBufferDirect(T,null,fe,P,U,null),U.onAfterShadow(r,U,B,T,fe,P,null)}}const q=U.children;for(let fe=0,W=q.length;fe<W;fe++)w(q[fe],B,T,z,G)}function I(U){U.target.removeEventListener("dispose",I);for(const T in m){const z=m[T],G=U.target.uuid;G in z&&(z[G].dispose(),delete z[G])}}}function tw(r,e){function i(){let X=!1;const Ue=new ln;let Me=null;const Le=new ln(0,0,0,0);return{setMask:function(ke){Me!==ke&&!X&&(r.colorMask(ke,ke,ke,ke),Me=ke)},setLocked:function(ke){X=ke},setClear:function(ke,Ne,$e,Ye,nn){nn===!0&&(ke*=Ye,Ne*=Ye,$e*=Ye),Ue.set(ke,Ne,$e,Ye),Le.equals(Ue)===!1&&(r.clearColor(ke,Ne,$e,Ye),Le.copy(Ue))},reset:function(){X=!1,Me=null,Le.set(-1,0,0,0)}}}function s(){let X=!1,Ue=!1,Me=null,Le=null,ke=null;return{setReversed:function(Ne){if(Ue!==Ne){const $e=e.get("EXT_clip_control");Ne?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ne;const Ye=ke;ke=null,this.setClear(Ye)}},getReversed:function(){return Ue},setTest:function(Ne){Ne?xe(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(Ne){Me!==Ne&&!X&&(r.depthMask(Ne),Me=Ne)},setFunc:function(Ne){if(Ue&&(Ne=hM[Ne]),Le!==Ne){switch(Ne){case vh:r.depthFunc(r.NEVER);break;case _h:r.depthFunc(r.ALWAYS);break;case bh:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Sh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=Ne}},setLocked:function(Ne){X=Ne},setClear:function(Ne){ke!==Ne&&(ke=Ne,Ue&&(Ne=1-Ne),r.clearDepth(Ne))},reset:function(){X=!1,Me=null,Le=null,ke=null,Ue=!1}}}function l(){let X=!1,Ue=null,Me=null,Le=null,ke=null,Ne=null,$e=null,Ye=null,nn=null;return{setTest:function(kt){X||(kt?xe(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(kt){Ue!==kt&&!X&&(r.stencilMask(kt),Ue=kt)},setFunc:function(kt,Jn,$n){(Me!==kt||Le!==Jn||ke!==$n)&&(r.stencilFunc(kt,Jn,$n),Me=kt,Le=Jn,ke=$n)},setOp:function(kt,Jn,$n){(Ne!==kt||$e!==Jn||Ye!==$n)&&(r.stencilOp(kt,Jn,$n),Ne=kt,$e=Jn,Ye=$n)},setLocked:function(kt){X=kt},setClear:function(kt){nn!==kt&&(r.clearStencil(kt),nn=kt)},reset:function(){X=!1,Ue=null,Me=null,Le=null,ke=null,Ne=null,$e=null,Ye=null,nn=null}}}const c=new i,f=new s,p=new l,g=new WeakMap,m=new WeakMap;let v={},_={},x={},b=new WeakMap,A=[],N=null,M=!1,y=null,k=null,L=null,w=null,I=null,U=null,B=null,T=new _t(0,0,0),z=0,G=!1,V=null,q=null,fe=null,W=null,P=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(re)[1]),H=$>=1):re.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),H=$>=2);let me=null,D={};const Q=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),ne=new ln().fromArray(Q),J=new ln().fromArray(Ee);function Y(X,Ue,Me,Le){const ke=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(X,Ne),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<Me;$e++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ue,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,ke):r.texImage2D(Ue+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ke);return Ne}const ge={};ge[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),xe(r.DEPTH_TEST),f.setFunc(Vr),pt(!1),Ct(Sx),xe(r.CULL_FACE),nt(Ea);function xe(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function De(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function ve(X,Ue){return x[X]!==Ue?(r.bindFramebuffer(X,Ue),x[X]=Ue,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ue),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Fe(X,Ue){let Me=A,Le=!1;if(X){Me=b.get(Ue),Me===void 0&&(Me=[],b.set(Ue,Me));const ke=X.textures;if(Me.length!==ke.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,$e=ke.length;Ne<$e;Ne++)Me[Ne]=r.COLOR_ATTACHMENT0+Ne;Me.length=ke.length,Le=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Le=!0);Le&&r.drawBuffers(Me)}function Oe(X){return N!==X?(r.useProgram(X),N=X,!0):!1}const Pe={[Is]:r.FUNC_ADD,[zS]:r.FUNC_SUBTRACT,[IS]:r.FUNC_REVERSE_SUBTRACT};Pe[BS]=r.MIN,Pe[FS]=r.MAX;const Je={[HS]:r.ZERO,[kS]:r.ONE,[GS]:r.SRC_COLOR,[gh]:r.SRC_ALPHA,[YS]:r.SRC_ALPHA_SATURATE,[WS]:r.DST_COLOR,[jS]:r.DST_ALPHA,[VS]:r.ONE_MINUS_SRC_COLOR,[xh]:r.ONE_MINUS_SRC_ALPHA,[qS]:r.ONE_MINUS_DST_COLOR,[XS]:r.ONE_MINUS_DST_ALPHA,[ZS]:r.CONSTANT_COLOR,[KS]:r.ONE_MINUS_CONSTANT_COLOR,[QS]:r.CONSTANT_ALPHA,[JS]:r.ONE_MINUS_CONSTANT_ALPHA};function nt(X,Ue,Me,Le,ke,Ne,$e,Ye,nn,kt){if(X===Ea){M===!0&&(De(r.BLEND),M=!1);return}if(M===!1&&(xe(r.BLEND),M=!0),X!==PS){if(X!==y||kt!==G){if((k!==Is||I!==Is)&&(r.blendEquation(r.FUNC_ADD),k=Is,I=Is),kt)switch(X){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mx:r.blendFunc(r.ONE,r.ONE);break;case Ex:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Nt("WebGLState: Invalid blending: ",X);break}else switch(X){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ex:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tx:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",X);break}L=null,w=null,U=null,B=null,T.set(0,0,0),z=0,y=X,G=kt}return}ke=ke||Ue,Ne=Ne||Me,$e=$e||Le,(Ue!==k||ke!==I)&&(r.blendEquationSeparate(Pe[Ue],Pe[ke]),k=Ue,I=ke),(Me!==L||Le!==w||Ne!==U||$e!==B)&&(r.blendFuncSeparate(Je[Me],Je[Le],Je[Ne],Je[$e]),L=Me,w=Le,U=Ne,B=$e),(Ye.equals(T)===!1||nn!==z)&&(r.blendColor(Ye.r,Ye.g,Ye.b,nn),T.copy(Ye),z=nn),y=X,G=!1}function ut(X,Ue){X.side===Li?De(r.CULL_FACE):xe(r.CULL_FACE);let Me=X.side===Qn;Ue&&(Me=!Me),pt(Me),X.blending===Hr&&X.transparent===!1?nt(Ea):nt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Le=X.stencilWrite;p.setTest(Le),Le&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Pt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){V!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),V=X)}function Ct(X){X!==US?(xe(r.CULL_FACE),X!==q&&(X===Sx?r.cullFace(r.BACK):X===LS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),q=X}function Yt(X){X!==fe&&(H&&r.lineWidth(X),fe=X)}function Pt(X,Ue,Me){X?(xe(r.POLYGON_OFFSET_FILL),(W!==Ue||P!==Me)&&(W=Ue,P=Me,f.getReversed()&&(Ue=-Ue),r.polygonOffset(Ue,Me))):De(r.POLYGON_OFFSET_FILL)}function Dt(X){X?xe(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function zt(X){X===void 0&&(X=r.TEXTURE0+O-1),me!==X&&(r.activeTexture(X),me=X)}function ee(X,Ue,Me){Me===void 0&&(me===null?Me=r.TEXTURE0+O-1:Me=me);let Le=D[Me];Le===void 0&&(Le={type:void 0,texture:void 0},D[Me]=Le),(Le.type!==X||Le.texture!==Ue)&&(me!==Me&&(r.activeTexture(Me),me=Me),r.bindTexture(X,Ue||ge[X]),Le.type=X,Le.texture=Ue)}function Ft(){const X=D[me];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Rt(){try{r.compressedTexImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function ae(){try{r.texSubImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function be(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function ze(){try{r.texStorage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function He(){try{r.texStorage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function ye(){try{r.texImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Se(){try{r.texImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Ie(X){return _[X]!==void 0?_[X]:r.getParameter(X)}function We(X,Ue){_[X]!==Ue&&(r.pixelStorei(X,Ue),_[X]=Ue)}function Ge(X){ne.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),ne.copy(X))}function se(X){J.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function Te(X,Ue){let Me=m.get(Ue);Me===void 0&&(Me=new WeakMap,m.set(Ue,Me));let Le=Me.get(X);Le===void 0&&(Le=r.getUniformBlockIndex(Ue,X.name),Me.set(X,Le))}function we(X,Ue){const Le=m.get(Ue).get(X);g.get(Ue)!==Le&&(r.uniformBlockBinding(Ue,Le,X.__bindingPointIndex),g.set(Ue,Le))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},me=null,D={},x={},b=new WeakMap,A=[],N=null,M=!1,y=null,k=null,L=null,w=null,I=null,U=null,B=null,T=new _t(0,0,0),z=0,G=!1,V=null,q=null,fe=null,W=null,P=null,ne.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:xe,disable:De,bindFramebuffer:ve,drawBuffers:Fe,useProgram:Oe,setBlending:nt,setMaterial:ut,setFlipSided:pt,setCullFace:Ct,setLineWidth:Yt,setPolygonOffset:Pt,setScissorTest:Dt,activeTexture:zt,bindTexture:ee,unbindTexture:Ft,compressedTexImage2D:Rt,compressedTexImage3D:F,texImage2D:ye,texImage3D:Se,pixelStorei:We,getParameter:Ie,updateUBOMapping:Te,uniformBlockBinding:we,texStorage2D:ze,texStorage3D:He,texSubImage2D:E,texSubImage3D:ae,compressedTexSubImage2D:de,compressedTexSubImage3D:be,scissor:Ge,viewport:se,reset:Ze}}function nw(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new lt,v=new WeakMap,_=new Set;let x;const b=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(F,E){return A?new OffscreenCanvas(F,E):ru("canvas")}function M(F,E,ae){let de=1;const be=Rt(F);if((be.width>ae||be.height>ae)&&(de=ae/Math.max(be.width,be.height)),de<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ze=Math.floor(de*be.width),He=Math.floor(de*be.height);x===void 0&&(x=N(ze,He));const ye=E?N(ze,He):x;return ye.width=ze,ye.height=He,ye.getContext("2d").drawImage(F,0,0,ze,He),ft("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ze+"x"+He+")."),ye}else return"data"in F&&ft("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),F;return F}function y(F){return F.generateMipmaps}function k(F){r.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(F,E,ae,de,be,ze=!1){if(F!==null){if(r[F]!==void 0)return r[F];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let He;de&&(He=e.get("EXT_texture_norm16"),He||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=E;if(E===r.RED&&(ae===r.FLOAT&&(ye=r.R32F),ae===r.HALF_FLOAT&&(ye=r.R16F),ae===r.UNSIGNED_BYTE&&(ye=r.R8),ae===r.UNSIGNED_SHORT&&He&&(ye=He.R16_EXT),ae===r.SHORT&&He&&(ye=He.R16_SNORM_EXT)),E===r.RED_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ye=r.R8UI),ae===r.UNSIGNED_SHORT&&(ye=r.R16UI),ae===r.UNSIGNED_INT&&(ye=r.R32UI),ae===r.BYTE&&(ye=r.R8I),ae===r.SHORT&&(ye=r.R16I),ae===r.INT&&(ye=r.R32I)),E===r.RG&&(ae===r.FLOAT&&(ye=r.RG32F),ae===r.HALF_FLOAT&&(ye=r.RG16F),ae===r.UNSIGNED_BYTE&&(ye=r.RG8),ae===r.UNSIGNED_SHORT&&He&&(ye=He.RG16_EXT),ae===r.SHORT&&He&&(ye=He.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ye=r.RG8UI),ae===r.UNSIGNED_SHORT&&(ye=r.RG16UI),ae===r.UNSIGNED_INT&&(ye=r.RG32UI),ae===r.BYTE&&(ye=r.RG8I),ae===r.SHORT&&(ye=r.RG16I),ae===r.INT&&(ye=r.RG32I)),E===r.RGB_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ye=r.RGB8UI),ae===r.UNSIGNED_SHORT&&(ye=r.RGB16UI),ae===r.UNSIGNED_INT&&(ye=r.RGB32UI),ae===r.BYTE&&(ye=r.RGB8I),ae===r.SHORT&&(ye=r.RGB16I),ae===r.INT&&(ye=r.RGB32I)),E===r.RGBA_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ye=r.RGBA8UI),ae===r.UNSIGNED_SHORT&&(ye=r.RGBA16UI),ae===r.UNSIGNED_INT&&(ye=r.RGBA32UI),ae===r.BYTE&&(ye=r.RGBA8I),ae===r.SHORT&&(ye=r.RGBA16I),ae===r.INT&&(ye=r.RGBA32I)),E===r.RGB&&(ae===r.UNSIGNED_SHORT&&He&&(ye=He.RGB16_EXT),ae===r.SHORT&&He&&(ye=He.RGB16_SNORM_EXT),ae===r.UNSIGNED_INT_5_9_9_9_REV&&(ye=r.RGB9_E5),ae===r.UNSIGNED_INT_10F_11F_11F_REV&&(ye=r.R11F_G11F_B10F)),E===r.RGBA){const Se=ze?su:wt.getTransfer(be);ae===r.FLOAT&&(ye=r.RGBA32F),ae===r.HALF_FLOAT&&(ye=r.RGBA16F),ae===r.UNSIGNED_BYTE&&(ye=Se===qt?r.SRGB8_ALPHA8:r.RGBA8),ae===r.UNSIGNED_SHORT&&He&&(ye=He.RGBA16_EXT),ae===r.SHORT&&He&&(ye=He.RGBA16_SNORM_EXT),ae===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),ae===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function I(F,E){let ae;return F?E===null||E===Ki||E===ul?ae=r.DEPTH24_STENCIL8:E===Wi?ae=r.DEPTH32F_STENCIL8:E===cl&&(ae=r.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===ul?ae=r.DEPTH_COMPONENT24:E===Wi?ae=r.DEPTH_COMPONENT32F:E===cl&&(ae=r.DEPTH_COMPONENT16),ae}function U(F,E){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==Un&&F.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function B(F){const E=F.target;E.removeEventListener("dispose",B),z(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function T(F){const E=F.target;E.removeEventListener("dispose",T),V(E)}function z(F){const E=s.get(F);if(E.__webglInit===void 0)return;const ae=F.source,de=b.get(ae);if(de){const be=de[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&G(F),Object.keys(de).length===0&&b.delete(ae)}s.remove(F)}function G(F){const E=s.get(F);r.deleteTexture(E.__webglTexture);const ae=F.source,de=b.get(ae);delete de[E.__cacheKey],f.memory.textures--}function V(F){const E=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let be=0;be<E.__webglFramebuffer[de].length;be++)r.deleteFramebuffer(E.__webglFramebuffer[de][be]);else r.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)r.deleteFramebuffer(E.__webglFramebuffer[de]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ae=F.textures;for(let de=0,be=ae.length;de<be;de++){const ze=s.get(ae[de]);ze.__webglTexture&&(r.deleteTexture(ze.__webglTexture),f.memory.textures--),s.remove(ae[de])}s.remove(F)}let q=0;function fe(){q=0}function W(){return q}function P(F){q=F}function O(){const F=q;return F>=l.maxTextures&&ft("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),q+=1,F}function H(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function $(F,E){const ae=s.get(F);if(F.isVideoTexture&&ee(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ae.__version!==F.version){const de=F.image;if(de===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{De(ae,F,E);return}}else F.isExternalTexture&&(ae.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ae.__webglTexture,r.TEXTURE0+E)}function re(F,E){const ae=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ae.__version!==F.version){De(ae,F,E);return}else F.isExternalTexture&&(ae.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,ae.__webglTexture,r.TEXTURE0+E)}function me(F,E){const ae=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ae.__version!==F.version){De(ae,F,E);return}i.bindTexture(r.TEXTURE_3D,ae.__webglTexture,r.TEXTURE0+E)}function D(F,E){const ae=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&ae.__version!==F.version){ve(ae,F,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture,r.TEXTURE0+E)}const Q={[ll]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[Th]:r.MIRRORED_REPEAT},Ee={[Un]:r.NEAREST,[tM]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Dd]:r.LINEAR_MIPMAP_NEAREST,[Fs]:r.LINEAR_MIPMAP_LINEAR},ne={[aM]:r.NEVER,[cM]:r.ALWAYS,[sM]:r.LESS,[xp]:r.LEQUAL,[rM]:r.EQUAL,[vp]:r.GEQUAL,[oM]:r.GREATER,[lM]:r.NOTEQUAL};function J(F,E){if(E.type===Wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Dd||E.magFilter===Tc||E.magFilter===Fs||E.minFilter===Bn||E.minFilter===Dd||E.minFilter===Tc||E.minFilter===Fs)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,Q[E.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,Ee[E.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Tc&&E.minFilter!==Fs||E.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Y(F,E){let ae=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",B));const de=E.source;let be=b.get(de);be===void 0&&(be={},b.set(de,be));const ze=H(E);if(ze!==F.__cacheKey){be[ze]===void 0&&(be[ze]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ae=!0),be[ze].usedTimes++;const He=be[F.__cacheKey];He!==void 0&&(be[F.__cacheKey].usedTimes--,He.usedTimes===0&&G(E)),F.__cacheKey=ze,F.__webglTexture=be[ze].texture}return ae}function ge(F,E,ae){return Math.floor(Math.floor(F/ae)/E)}function xe(F,E,ae,de){const ze=F.updateRanges;if(ze.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,ae,de,E.data);else{ze.sort((We,Ge)=>We.start-Ge.start);let He=0;for(let We=1;We<ze.length;We++){const Ge=ze[He],se=ze[We],Te=Ge.start+Ge.count,we=ge(se.start,E.width,4),Ze=ge(Ge.start,E.width,4);se.start<=Te+1&&we===Ze&&ge(se.start+se.count-1,E.width,4)===we?Ge.count=Math.max(Ge.count,se.start+se.count-Ge.start):(++He,ze[He]=se)}ze.length=He+1;const ye=i.getParameter(r.UNPACK_ROW_LENGTH),Se=i.getParameter(r.UNPACK_SKIP_PIXELS),Ie=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let We=0,Ge=ze.length;We<Ge;We++){const se=ze[We],Te=Math.floor(se.start/4),we=Math.ceil(se.count/4),Ze=Te%E.width,X=Math.floor(Te/E.width),Ue=we,Me=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,Ze,X,Ue,Me,ae,de,E.data)}F.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ye),i.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function De(F,E,ae){let de=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=r.TEXTURE_3D);const be=Y(F,E),ze=E.source;i.bindTexture(de,F.__webglTexture,r.TEXTURE0+ae);const He=s.get(ze);if(ze.version!==He.__version||be===!0){if(i.activeTexture(r.TEXTURE0+ae),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Me=wt.getPrimaries(wt.workingColorSpace),Le=E.colorSpace===ls?null:wt.getPrimaries(E.colorSpace),ke=E.colorSpace===ls||Me===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let Se=M(E.image,!1,l.maxTextureSize);Se=Ft(E,Se);const Ie=c.convert(E.format,E.colorSpace),We=c.convert(E.type);let Ge=w(E.internalFormat,Ie,We,E.normalized,E.colorSpace,E.isVideoTexture);J(de,E);let se;const Te=E.mipmaps,we=E.isVideoTexture!==!0,Ze=He.__version===void 0||be===!0,X=ze.dataReady,Ue=U(E,Se);if(E.isDepthTexture)Ge=I(E.format===Hs,E.type),Ze&&(we?i.texStorage2D(r.TEXTURE_2D,1,Ge,Se.width,Se.height):i.texImage2D(r.TEXTURE_2D,0,Ge,Se.width,Se.height,0,Ie,We,null));else if(E.isDataTexture)if(Te.length>0){we&&Ze&&i.texStorage2D(r.TEXTURE_2D,Ue,Ge,Te[0].width,Te[0].height);for(let Me=0,Le=Te.length;Me<Le;Me++)se=Te[Me],we?X&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,se.width,se.height,Ie,We,se.data):i.texImage2D(r.TEXTURE_2D,Me,Ge,se.width,se.height,0,Ie,We,se.data);E.generateMipmaps=!1}else we?(Ze&&i.texStorage2D(r.TEXTURE_2D,Ue,Ge,Se.width,Se.height),X&&xe(E,Se,Ie,We)):i.texImage2D(r.TEXTURE_2D,0,Ge,Se.width,Se.height,0,Ie,We,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){we&&Ze&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Ge,Te[0].width,Te[0].height,Se.depth);for(let Me=0,Le=Te.length;Me<Le;Me++)if(se=Te[Me],E.format!==Pi)if(Ie!==null)if(we){if(X)if(E.layerUpdates.size>0){const ke=av(se.width,se.height,E.format,E.type);for(const Ne of E.layerUpdates){const $e=se.data.subarray(Ne*ke/se.data.BYTES_PER_ELEMENT,(Ne+1)*ke/se.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,Ne,se.width,se.height,1,Ie,$e)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,se.width,se.height,Se.depth,Ie,se.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Ge,se.width,se.height,Se.depth,0,se.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,se.width,se.height,Se.depth,Ie,We,se.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,Ge,se.width,se.height,Se.depth,0,Ie,We,se.data)}else{we&&Ze&&i.texStorage2D(r.TEXTURE_2D,Ue,Ge,Te[0].width,Te[0].height);for(let Me=0,Le=Te.length;Me<Le;Me++)se=Te[Me],E.format!==Pi?Ie!==null?we?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,se.width,se.height,Ie,se.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,Ge,se.width,se.height,0,se.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?X&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,se.width,se.height,Ie,We,se.data):i.texImage2D(r.TEXTURE_2D,Me,Ge,se.width,se.height,0,Ie,We,se.data)}else if(E.isDataArrayTexture)if(we){if(Ze&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Ge,Se.width,Se.height,Se.depth),X)if(E.layerUpdates.size>0){const Me=av(Se.width,Se.height,E.format,E.type);for(const Le of E.layerUpdates){const ke=Se.data.subarray(Le*Me/Se.data.BYTES_PER_ELEMENT,(Le+1)*Me/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Le,Se.width,Se.height,1,Ie,We,ke)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ie,We,Se.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,Se.width,Se.height,Se.depth,0,Ie,We,Se.data);else if(E.isData3DTexture)we?(Ze&&i.texStorage3D(r.TEXTURE_3D,Ue,Ge,Se.width,Se.height,Se.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ie,We,Se.data)):i.texImage3D(r.TEXTURE_3D,0,Ge,Se.width,Se.height,Se.depth,0,Ie,We,Se.data);else if(E.isFramebufferTexture){if(Ze)if(we)i.texStorage2D(r.TEXTURE_2D,Ue,Ge,Se.width,Se.height);else{let Me=Se.width,Le=Se.height;for(let ke=0;ke<Ue;ke++)i.texImage2D(r.TEXTURE_2D,ke,Ge,Me,Le,0,Ie,We,null),Me>>=1,Le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),Se.parentNode!==Me){Me.appendChild(Se),_.add(E),Me.onpaint=Le=>{const ke=Le.changedElements;for(const Ne of _)ke.includes(Ne.image)&&(Ne.needsUpdate=!0)},Me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Se);else{const ke=r.RGBA,Ne=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ke,Ne,$e,Se)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Te.length>0){if(we&&Ze){const Me=Rt(Te[0]);i.texStorage2D(r.TEXTURE_2D,Ue,Ge,Me.width,Me.height)}for(let Me=0,Le=Te.length;Me<Le;Me++)se=Te[Me],we?X&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ie,We,se):i.texImage2D(r.TEXTURE_2D,Me,Ge,Ie,We,se);E.generateMipmaps=!1}else if(we){if(Ze){const Me=Rt(Se);i.texStorage2D(r.TEXTURE_2D,Ue,Ge,Me.width,Me.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,We,Se)}else i.texImage2D(r.TEXTURE_2D,0,Ge,Ie,We,Se);y(E)&&k(de),He.__version=ze.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function ve(F,E,ae){if(E.image.length!==6)return;const de=Y(F,E),be=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+ae);const ze=s.get(be);if(be.version!==ze.__version||de===!0){i.activeTexture(r.TEXTURE0+ae);const He=wt.getPrimaries(wt.workingColorSpace),ye=E.colorSpace===ls?null:wt.getPrimaries(E.colorSpace),Se=E.colorSpace===ls||He===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,We=E.image[0]&&E.image[0].isDataTexture,Ge=[];for(let Ne=0;Ne<6;Ne++)!Ie&&!We?Ge[Ne]=M(E.image[Ne],!0,l.maxCubemapSize):Ge[Ne]=We?E.image[Ne].image:E.image[Ne],Ge[Ne]=Ft(E,Ge[Ne]);const se=Ge[0],Te=c.convert(E.format,E.colorSpace),we=c.convert(E.type),Ze=w(E.internalFormat,Te,we,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Ue=ze.__version===void 0||de===!0,Me=be.dataReady;let Le=U(E,se);J(r.TEXTURE_CUBE_MAP,E);let ke;if(Ie){X&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,Ze,se.width,se.height);for(let Ne=0;Ne<6;Ne++){ke=Ge[Ne].mipmaps;for(let $e=0;$e<ke.length;$e++){const Ye=ke[$e];E.format!==Pi?Te!==null?X?Me&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e,0,0,Ye.width,Ye.height,Te,Ye.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e,Ze,Ye.width,Ye.height,0,Ye.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e,0,0,Ye.width,Ye.height,Te,we,Ye.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e,Ze,Ye.width,Ye.height,0,Te,we,Ye.data)}}}else{if(ke=E.mipmaps,X&&Ue){ke.length>0&&Le++;const Ne=Rt(Ge[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,Ze,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(We){X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ge[Ne].width,Ge[Ne].height,Te,we,Ge[Ne].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ze,Ge[Ne].width,Ge[Ne].height,0,Te,we,Ge[Ne].data);for(let $e=0;$e<ke.length;$e++){const nn=ke[$e].image[Ne].image;X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e+1,0,0,nn.width,nn.height,Te,we,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e+1,Ze,nn.width,nn.height,0,Te,we,nn.data)}}else{X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Te,we,Ge[Ne]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ze,Te,we,Ge[Ne]);for(let $e=0;$e<ke.length;$e++){const Ye=ke[$e];X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e+1,0,0,Te,we,Ye.image[Ne]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e+1,Ze,Te,we,Ye.image[Ne])}}}y(E)&&k(r.TEXTURE_CUBE_MAP),ze.__version=be.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Fe(F,E,ae,de,be,ze){const He=c.convert(ae.format,ae.colorSpace),ye=c.convert(ae.type),Se=w(ae.internalFormat,He,ye,ae.normalized,ae.colorSpace),Ie=s.get(E),We=s.get(ae);if(We.__renderTarget=E,!Ie.__hasExternalTextures){const Ge=Math.max(1,E.width>>ze),se=Math.max(1,E.height>>ze);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?i.texImage3D(be,ze,Se,Ge,se,E.depth,0,He,ye,null):i.texImage2D(be,ze,Se,Ge,se,0,He,ye,null)}i.bindFramebuffer(r.FRAMEBUFFER,F),zt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,be,We.__webglTexture,0,Dt(E)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,be,We.__webglTexture,ze),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(F,E,ae){if(r.bindRenderbuffer(r.RENDERBUFFER,F),E.depthBuffer){const de=E.depthTexture,be=de&&de.isDepthTexture?de.type:null,ze=I(E.stencilBuffer,be),He=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;zt(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt(E),ze,E.width,E.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt(E),ze,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ze,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,F)}else{const de=E.textures;for(let be=0;be<de.length;be++){const ze=de[be],He=c.convert(ze.format,ze.colorSpace),ye=c.convert(ze.type),Se=w(ze.internalFormat,He,ye,ze.normalized,ze.colorSpace);zt(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt(E),Se,E.width,E.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt(E),Se,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Se,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(F,E,ae){const de=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const be=s.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),be.__webglTexture===void 0){be.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),J(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=c.convert(E.depthTexture.format),We=c.convert(E.depthTexture.type);let Ge;E.depthTexture.format===wa?Ge=r.DEPTH_COMPONENT24:E.depthTexture.format===Hs&&(Ge=r.DEPTH24_STENCIL8);for(let se=0;se<6;se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,E.width,E.height,0,Ie,We,null)}}else $(E.depthTexture,0);const ze=be.__webglTexture,He=Dt(E),ye=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+ae:r.TEXTURE_2D,Se=E.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===wa)zt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,ye,ze,0,He):r.framebufferTexture2D(r.FRAMEBUFFER,Se,ye,ze,0);else if(E.depthTexture.format===Hs)zt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,ye,ze,0,He):r.framebufferTexture2D(r.FRAMEBUFFER,Se,ye,ze,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(F){const E=s.get(F),ae=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const de=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",be)};de.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=de}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(ae)for(let de=0;de<6;de++)Pe(E.__webglFramebuffer[de],F,de);else{const de=F.texture.mipmaps;de&&de.length>0?Pe(E.__webglFramebuffer[0],F,0):Pe(E.__webglFramebuffer,F,0)}else if(ae){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=r.createRenderbuffer(),Oe(E.__webglDepthbuffer[de],F,!1);else{const be=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=E.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,ze),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,ze)}}else{const de=F.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Oe(E.__webglDepthbuffer,F,!1);else{const be=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ze),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,ze)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(F,E,ae){const de=s.get(F);E!==void 0&&Fe(de.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ae!==void 0&&Je(F)}function ut(F){const E=F.texture,ae=s.get(F),de=s.get(E);F.addEventListener("dispose",T);const be=F.textures,ze=F.isWebGLCubeRenderTarget===!0,He=be.length>1;if(He||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=E.version,f.memory.textures++),ze){ae.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer[ye]=[];for(let Se=0;Se<E.mipmaps.length;Se++)ae.__webglFramebuffer[ye][Se]=r.createFramebuffer()}else ae.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)ae.__webglFramebuffer[ye]=r.createFramebuffer()}else ae.__webglFramebuffer=r.createFramebuffer();if(He)for(let ye=0,Se=be.length;ye<Se;ye++){const Ie=s.get(be[ye]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),f.memory.textures++)}if(F.samples>0&&zt(F)===!1){ae.__webglMultisampledFramebuffer=r.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ye=0;ye<be.length;ye++){const Se=be[ye];ae.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ae.__webglColorRenderbuffer[ye]);const Ie=c.convert(Se.format,Se.colorSpace),We=c.convert(Se.type),Ge=w(Se.internalFormat,Ie,We,Se.normalized,Se.colorSpace,F.isXRRenderTarget===!0),se=Dt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,se,Ge,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ae.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(ae.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(ae.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ze){i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),J(r.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)Fe(ae.__webglFramebuffer[ye][Se],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Se);else Fe(ae.__webglFramebuffer[ye],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);y(E)&&k(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(He){for(let ye=0,Se=be.length;ye<Se;ye++){const Ie=be[ye],We=s.get(Ie);let Ge=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ge=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ge,We.__webglTexture),J(Ge,Ie),Fe(ae.__webglFramebuffer,F,Ie,r.COLOR_ATTACHMENT0+ye,Ge,0),y(Ie)&&k(Ge)}i.unbindTexture()}else{let ye=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ye=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ye,de.__webglTexture),J(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)Fe(ae.__webglFramebuffer[Se],F,E,r.COLOR_ATTACHMENT0,ye,Se);else Fe(ae.__webglFramebuffer,F,E,r.COLOR_ATTACHMENT0,ye,0);y(E)&&k(ye),i.unbindTexture()}F.depthBuffer&&Je(F)}function pt(F){const E=F.textures;for(let ae=0,de=E.length;ae<de;ae++){const be=E[ae];if(y(be)){const ze=L(F),He=s.get(be).__webglTexture;i.bindTexture(ze,He),k(ze),i.unbindTexture()}}}const Ct=[],Yt=[];function Pt(F){if(F.samples>0){if(zt(F)===!1){const E=F.textures,ae=F.width,de=F.height;let be=r.COLOR_BUFFER_BIT;const ze=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=s.get(F),ye=E.length>1;if(ye)for(let Ie=0;Ie<E.length;Ie++)i.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Se=F.texture.mipmaps;Se&&Se.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),ye){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const We=s.get(E[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,We,0)}r.blitFramebuffer(0,0,ae,de,0,0,ae,de,be,r.NEAREST),g===!0&&(Ct.length=0,Yt.length=0,Ct.push(r.COLOR_ATTACHMENT0+Ie),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ct.push(ze),Yt.push(ze),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Yt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Ie=0;Ie<E.length;Ie++){i.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const We=s.get(E[Ie]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,We,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&g){const E=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Dt(F){return Math.min(l.maxSamples,F.samples)}function zt(F){const E=s.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ee(F){const E=f.render.frame;v.get(F)!==E&&(v.set(F,E),F.update())}function Ft(F,E){const ae=F.colorSpace,de=F.format,be=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ae!==au&&ae!==ls&&(wt.getTransfer(ae)===qt?(de!==Pi||be!==di)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",ae)),E}function Rt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=O,this.resetTextureUnits=fe,this.getTextureUnits=W,this.setTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=re,this.setTexture3D=me,this.setTextureCube=D,this.rebindTextures=nt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iw(r,e){function i(s,l=ls){let c;const f=wt.getTransfer(l);if(s===di)return r.UNSIGNED_BYTE;if(s===dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===t_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===n_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===$v)return r.BYTE;if(s===e_)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===fp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===i_)return r.ALPHA;if(s===a_)return r.RGB;if(s===Pi)return r.RGBA;if(s===wa)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===s_)return r.RED;if(s===pp)return r.RED_INTEGER;if(s===Vs)return r.RG;if(s===mp)return r.RG_INTEGER;if(s===gp)return r.RGBA_INTEGER;if(s===Kc||s===Qc||s===Jc||s===$c)if(f===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ah||s===wh||s===Ch||s===Rh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nh||s===Dh||s===Uh||s===Lh||s===Oh||s===nu||s===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nh||s===Dh)return f===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Uh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Lh)return c.COMPRESSED_R11_EAC;if(s===Oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===nu)return c.COMPRESSED_RG11_EAC;if(s===Ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===zh||s===Ih||s===Bh||s===Fh||s===Hh||s===kh||s===Gh||s===Vh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ih)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kh||s===Qh||s===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Kh)return f===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$h||s===ep||s===iu||s===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const aw=`
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

}`;class rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new g_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Qi({vertexShader:aw,fragmentShader:sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bt(new hl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ow extends js{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",g=1,m=null,v=null,_=null,x=null,b=null,A=null;const N=typeof XRWebGLBinding<"u",M=new rw,y={},k=i.getContextAttributes();let L=null,w=null;const I=[],U=[],B=new lt;let T=null;const z=new Si;z.viewport=new ln;const G=new Si;G.viewport=new ln;const V=[z,G],q=new g2;let fe=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ge=I[Y];return ge===void 0&&(ge=new Fd,I[Y]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Y){let ge=I[Y];return ge===void 0&&(ge=new Fd,I[Y]=ge),ge.getGripSpace()},this.getHand=function(Y){let ge=I[Y];return ge===void 0&&(ge=new Fd,I[Y]=ge),ge.getHandSpace()};function P(Y){const ge=U.indexOf(Y.inputSource);if(ge===-1)return;const xe=I[ge];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,m||f),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){l.removeEventListener("select",P),l.removeEventListener("selectstart",P),l.removeEventListener("selectend",P),l.removeEventListener("squeeze",P),l.removeEventListener("squeezestart",P),l.removeEventListener("squeezeend",P),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let Y=0;Y<I.length;Y++){const ge=U[Y];ge!==null&&(U[Y]=null,I[Y].disconnect(ge))}fe=null,W=null,M.reset();for(const Y in y)delete y[Y];e.setRenderTarget(L),b=null,x=null,_=null,l=null,w=null,J.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,s.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){p=Y,s.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return _===null&&N&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",P),l.addEventListener("selectstart",P),l.addEventListener("selectend",P),l.addEventListener("squeeze",P),l.addEventListener("squeezestart",P),l.addEventListener("squeezeend",P),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),k.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,De=null,ve=null;k.depth&&(ve=k.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xe=k.stencil?Hs:wa,De=k.stencil?ul:Ki);const Fe={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Fe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new Zi(x.textureWidth,x.textureHeight,{format:Pi,type:di,depthTexture:new Xr(x.textureWidth,x.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:k.stencil,colorSpace:e.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xe={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,xe),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),w=new Zi(b.framebufferWidth,b.framebufferHeight,{format:Pi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(g),m=null,f=await l.requestReferenceSpace(p),J.setContext(l),J.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(Y){for(let ge=0;ge<Y.removed.length;ge++){const xe=Y.removed[ge],De=U.indexOf(xe);De>=0&&(U[De]=null,I[De].disconnect(xe))}for(let ge=0;ge<Y.added.length;ge++){const xe=Y.added[ge];let De=U.indexOf(xe);if(De===-1){for(let Fe=0;Fe<I.length;Fe++)if(Fe>=U.length){U.push(xe),De=Fe;break}else if(U[Fe]===null){U[Fe]=xe,De=Fe;break}if(De===-1)break}const ve=I[De];ve&&ve.connect(xe)}}const $=new K,re=new K;function me(Y,ge,xe){$.setFromMatrixPosition(ge.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const De=$.distanceTo(re),ve=ge.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,Oe=ve[14]/(ve[10]-1),Pe=ve[14]/(ve[10]+1),Je=(ve[9]+1)/ve[5],nt=(ve[9]-1)/ve[5],ut=(ve[8]-1)/ve[0],pt=(Fe[8]+1)/Fe[0],Ct=Oe*ut,Yt=Oe*pt,Pt=De/(-ut+pt),Dt=Pt*-ut;if(ge.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Dt),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(ge.projectionMatrix),Y.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const zt=Oe+Pt,ee=Pe+Pt,Ft=Ct-Dt,Rt=Yt+(De-Dt),F=Je*Pe/ee*zt,E=nt*Pe/ee*zt;Y.projectionMatrix.makePerspective(Ft,Rt,F,E,zt,ee),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function D(Y,ge){ge===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ge.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ge=Y.near,xe=Y.far;M.texture!==null&&(M.depthNear>0&&(ge=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),q.near=G.near=z.near=ge,q.far=G.far=z.far=xe,(fe!==q.near||W!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),fe=q.near,W=q.far),q.layers.mask=Y.layers.mask|6,z.layers.mask=q.layers.mask&-5,G.layers.mask=q.layers.mask&-3;const De=Y.parent,ve=q.cameras;D(q,De);for(let Fe=0;Fe<ve.length;Fe++)D(ve[Fe],De);ve.length===2?me(q,z,G):q.projectionMatrix.copy(z.projectionMatrix),Q(Y,q,De)};function Q(Y,ge,xe){xe===null?Y.matrix.copy(ge.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ge.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ge.projectionMatrix),Y.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ip*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&b===null))return g},this.setFoveation=function(Y){g=Y,x!==null&&(x.fixedFoveation=Y),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(Y){return y[Y]};let Ee=null;function ne(Y,ge){if(v=ge.getViewerPose(m||f),A=ge,v!==null){const xe=v.views;b!==null&&(e.setRenderTargetFramebuffer(w,b.framebuffer),e.setRenderTarget(w));let De=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,De=!0);for(let Pe=0;Pe<xe.length;Pe++){const Je=xe[Pe];let nt=null;if(b!==null)nt=b.getViewport(Je);else{const pt=_.getViewSubImage(x,Je);nt=pt.viewport,Pe===0&&(e.setRenderTargetTextures(w,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(w))}let ut=V[Pe];ut===void 0&&(ut=new Si,ut.layers.enable(Pe),ut.viewport=new ln,V[Pe]=ut),ut.matrix.fromArray(Je.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Je.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(nt.x,nt.y,nt.width,nt.height),Pe===0&&(q.matrix.copy(ut.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),De===!0&&q.cameras.push(ut)}const ve=l.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){_=s.getBinding();const Pe=_.getDepthInformation(xe[0]);Pe&&Pe.isValid&&Pe.texture&&M.init(Pe,l.renderState)}if(ve&&ve.includes("camera-access")&&N){e.state.unbindTexture(),_=s.getBinding();for(let Pe=0;Pe<xe.length;Pe++){const Je=xe[Pe].camera;if(Je){let nt=y[Je];nt||(nt=new g_,y[Je]=nt);const ut=_.getCameraImage(Je);nt.sourceTexture=ut}}}}for(let xe=0;xe<I.length;xe++){const De=U[xe],ve=I[xe];De!==null&&ve!==void 0&&ve.update(De,ge,m||f)}Ee&&Ee(Y,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),A=null}const J=new y_;J.setAnimationLoop(ne),this.setAnimationLoop=function(Y){Ee=Y},this.dispose=function(){}}}const lw=new on,C_=new ht;C_.set(-1,0,0,0,1,0,0,0,1);function cw(r,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,__(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,k,L,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),x(M,y),y.isMeshPhysicalMaterial&&b(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),A(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),N(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&p(M,y)):y.isPointsMaterial?g(M,y,k,L):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const k=e.get(y),L=k.envMap,w=k.envMapRotation;L&&(M.envMap.value=L,M.envMapRotation.value.setFromMatrix4(lw.makeRotationFromEuler(w)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(C_),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function p(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function g(M,y,k,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*k,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function b(M,y,k){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=k.texture,M.transmissionSamplerSize.value.set(k.width,k.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,y){y.matcap&&(M.matcap.value=y.matcap)}function N(M,y){const k=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(k.matrixWorld),M.nearDistance.value=k.shadow.camera.near,M.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uw(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(w,I){const U=I.program;s.uniformBlockBinding(w,U)}function m(w,I){let U=l[w.id];U===void 0&&(M(w),U=v(w),l[w.id]=U,w.addEventListener("dispose",k));const B=I.program;s.updateUBOMapping(w,B);const T=e.render.frame;c[w.id]!==T&&(x(w),c[w.id]=T)}function v(w){const I=_();w.__bindingPointIndex=I;const U=r.createBuffer(),B=w.__size,T=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,B,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,U),U}function _(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const I=l[w.id],U=w.uniforms,B=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let T=0,z=U.length;T<z;T++){const G=U[T];if(Array.isArray(G))for(let V=0,q=G.length;V<q;V++)b(G[V],T,V,B);else b(G,T,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(w,I,U,B){if(N(w,I,U,B)===!0){const T=w.__offset,z=w.value;if(Array.isArray(z)){let G=0;for(let V=0;V<z.length;V++){const q=z[V],fe=y(q);A(q,w.__data,G),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(G+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(z,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,w.__data)}}function A(w,I,U){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,U)}function N(w,I,U,B){const T=w.value,z=I+"_"+U;if(B[z]===void 0)return typeof T=="number"||typeof T=="boolean"?B[z]=T:ArrayBuffer.isView(T)?B[z]=T.slice():B[z]=T.clone(),!0;{const G=B[z];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return B[z]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(G.equals(T)===!1)return G.copy(T),!0}}return!1}function M(w){const I=w.uniforms;let U=0;const B=16;for(let z=0,G=I.length;z<G;z++){const V=Array.isArray(I[z])?I[z]:[I[z]];for(let q=0,fe=V.length;q<fe;q++){const W=V[q],P=Array.isArray(W.value)?W.value:[W.value];for(let O=0,H=P.length;O<H;O++){const $=P[O],re=y($),me=U%B,D=me%re.boundary,Q=me+D;U+=D,Q!==0&&B-Q<re.storage&&(U+=B-Q),W.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=U,U+=re.storage}}}const T=U%B;return T>0&&(U+=B-T),w.__size=U,w.__cache={},this}function y(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",w),I}function k(w){const I=w.target;I.removeEventListener("dispose",k);const U=f.indexOf(I.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function L(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:g,update:m,dispose:L}}const fw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function dw(){return ji===null&&(ji=new OM(fw,16,16,Vs,Aa),ji.name="DFG_LUT",ji.minFilter=Bn,ji.magFilter=Bn,ji.wrapS=Ma,ji.wrapT=Ma,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class hw{constructor(e={}){const{canvas:i=fM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:b=di}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=f;const N=b,M=new Set([gp,mp,pp]),y=new Set([di,Ki,cl,ul,dp,hp]),k=new Uint32Array(4),L=new Int32Array(4),w=new K;let I=null,U=null;const B=[],T=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let V=!1,q=null,fe=null,W=null,P=null;this._outputColorSpace=fi;let O=0,H=0,$=null,re=-1,me=null;const D=new ln,Q=new ln;let Ee=null;const ne=new _t(0);let J=0,Y=i.width,ge=i.height,xe=1,De=null,ve=null;const Fe=new ln(0,0,Y,ge),Oe=new ln(0,0,Y,ge);let Pe=!1;const Je=new bp;let nt=!1,ut=!1;const pt=new on,Ct=new K,Yt=new ln,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function zt(){return $===null?xe:1}let ee=s;function Ft(C,te){return i.getContext(C,te)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Jn,!1),ee===null){const te="webgl2";if(ee=Ft(te,C),ee===null)throw Ft(te)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Nt("WebGLRenderer: "+C.message),C}let Rt,F,E,ae,de,be,ze,He,ye,Se,Ie,We,Ge,se,Te,we,Ze,X,Ue,Me,Le,ke,Ne;function $e(){Rt=new dT(ee),Rt.init(),Le=new iw(ee,Rt),F=new aT(ee,Rt,e,Le),E=new tw(ee,Rt),F.reversedDepthBuffer&&x&&E.buffers.depth.setReversed(!0),fe=ee.createFramebuffer(),W=ee.createFramebuffer(),P=ee.createFramebuffer(),ae=new mT(ee),de=new kA,be=new nw(ee,Rt,E,de,F,Le,ae),ze=new fT(G),He=new _2(ee),ke=new nT(ee,He),ye=new hT(ee,He,ae,ke),Se=new xT(ee,ye,He,ke,ae),X=new gT(ee,F,be),Te=new sT(de),Ie=new HA(G,ze,Rt,F,ke,Te),We=new cw(G,de),Ge=new VA,se=new ZA(Rt),Ze=new tT(G,ze,E,Se,A,g),we=new ew(G,Se,F),Ne=new uw(ee,ae,F,E),Ue=new iT(ee,Rt,ae),Me=new pT(ee,Rt,ae),ae.programs=Ie.programs,G.capabilities=F,G.extensions=Rt,G.properties=de,G.renderLists=Ge,G.shadowMap=we,G.state=E,G.info=ae}$e(),N!==di&&(z=new _T(N,i.width,i.height,p,l,c));const Ye=new ow(G,ee);this.xr=Ye,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(C){C!==void 0&&(xe=C,this.setSize(Y,ge,!1))},this.getSize=function(C){return C.set(Y,ge)},this.setSize=function(C,te,he=!0){if(Ye.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=C,ge=te,i.width=Math.floor(C*xe),i.height=Math.floor(te*xe),he===!0&&(i.style.width=C+"px",i.style.height=te+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,C,te)},this.getDrawingBufferSize=function(C){return C.set(Y*xe,ge*xe).floor()},this.setDrawingBufferSize=function(C,te,he){Y=C,ge=te,xe=he,i.width=Math.floor(C*he),i.height=Math.floor(te*he),this.setViewport(0,0,C,te)},this.setEffects=function(C){if(N===di){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let te=0;te<C.length;te++)if(C[te].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(Fe)},this.setViewport=function(C,te,he,ce){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,te,he,ce),E.viewport(D.copy(Fe).multiplyScalar(xe).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,te,he,ce){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,te,he,ce),E.scissor(Q.copy(Oe).multiplyScalar(xe).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(C){E.setScissorTest(Pe=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){ve=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(C=!0,te=!0,he=!0){let ce=0;if(C){let ue=!1;if($!==null){const je=$.texture.format;ue=M.has(je)}if(ue){const je=$.texture.type,Ke=y.has(je),Ve=Ze.getClearColor(),et=Ze.getClearAlpha(),Qe=Ve.r,rt=Ve.g,mt=Ve.b;Ke?(k[0]=Qe,k[1]=rt,k[2]=mt,k[3]=et,ee.clearBufferuiv(ee.COLOR,0,k)):(L[0]=Qe,L[1]=rt,L[2]=mt,L[3]=et,ee.clearBufferiv(ee.COLOR,0,L))}else ce|=ee.COLOR_BUFFER_BIT}te&&(ce|=ee.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ce|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&ee.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Jn,!1),Ze.dispose(),Ge.dispose(),se.dispose(),de.dispose(),ze.dispose(),Se.dispose(),ke.dispose(),Ne.dispose(),Ie.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",pn),Ye.removeEventListener("sessionend",wn),Vn.stop()};function nn(C){C.preventDefault(),Nx("WebGLRenderer: Context Lost."),V=!0}function kt(){Nx("WebGLRenderer: Context Restored."),V=!1;const C=ae.autoReset,te=we.enabled,he=we.autoUpdate,ce=we.needsUpdate,ue=we.type;$e(),ae.autoReset=C,we.enabled=te,we.autoUpdate=he,we.needsUpdate=ce,we.type=ue}function Jn(C){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $n(C){const te=C.target;te.removeEventListener("dispose",$n),Kr(te)}function Kr(C){Qr(C),de.remove(C)}function Qr(C){const te=de.get(C).programs;te!==void 0&&(te.forEach(function(he){Ie.releaseProgram(he)}),C.isShaderMaterial&&Ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,te,he,ce,ue,je){te===null&&(te=Pt);const Ke=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Ve=Da(C,te,he,ce,ue);E.setMaterial(ce,Ke);let et=he.index,Qe=1;if(ce.wireframe===!0){if(et=ye.getWireframeAttribute(he),et===void 0)return;Qe=2}const rt=he.drawRange,mt=he.attributes.position;let st=rt.start*Qe,Ut=(rt.start+rt.count)*Qe;je!==null&&(st=Math.max(st,je.start*Qe),Ut=Math.min(Ut,(je.start+je.count)*Qe)),et!==null?(st=Math.max(st,0),Ut=Math.min(Ut,et.count)):mt!=null&&(st=Math.max(st,0),Ut=Math.min(Ut,mt.count));const an=Ut-st;if(an<0||an===1/0)return;ke.setup(ue,ce,Ve,he,et);let Jt,Gt=Ue;if(et!==null&&(Jt=He.get(et),Gt=Me,Gt.setIndex(Jt)),ue.isMesh)ce.wireframe===!0?(E.setLineWidth(ce.wireframeLinewidth*zt()),Gt.setMode(ee.LINES)):Gt.setMode(ee.TRIANGLES);else if(ue.isLine){let Vt=ce.linewidth;Vt===void 0&&(Vt=1),E.setLineWidth(Vt*zt()),ue.isLineSegments?Gt.setMode(ee.LINES):ue.isLineLoop?Gt.setMode(ee.LINE_LOOP):Gt.setMode(ee.LINE_STRIP)}else ue.isPoints?Gt.setMode(ee.POINTS):ue.isSprite&&Gt.setMode(ee.TRIANGLES);if(ue.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const Vt=ue._multiDrawStarts,qe=ue._multiDrawCounts,On=ue._multiDrawCount,yt=et?He.get(et).bytesPerElement:1,yn=de.get(ce).currentProgram.getUniforms();for(let ei=0;ei<On;ei++)yn.setValue(ee,"_gl_DrawID",ei),Gt.render(Vt[ei]/yt,qe[ei])}else if(ue.isInstancedMesh)Gt.renderInstances(st,an,ue.count);else if(he.isInstancedBufferGeometry){const Vt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,qe=Math.min(he.instanceCount,Vt);Gt.renderInstances(st,an,qe)}else Gt.render(st,an)};function Jr(C,te,he){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Na(C,te,he),C.side=us,C.needsUpdate=!0,Na(C,te,he),C.side=Li):Na(C,te,he)}this.compile=function(C,te,he=null){he===null&&(he=C),U=se.get(he),U.init(te),T.push(U),he.traverseVisible(function(ue){ue.isLight&&ue.layers.test(te.layers)&&(U.pushLight(ue),ue.castShadow&&U.pushShadow(ue))}),C!==he&&C.traverseVisible(function(ue){ue.isLight&&ue.layers.test(te.layers)&&(U.pushLight(ue),ue.castShadow&&U.pushShadow(ue))}),U.setupLights();const ce=new Set;return C.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const je=ue.material;if(je)if(Array.isArray(je))for(let Ke=0;Ke<je.length;Ke++){const Ve=je[Ke];Jr(Ve,he,ue),ce.add(Ve)}else Jr(je,he,ue),ce.add(je)}),U=T.pop(),ce},this.compileAsync=function(C,te,he=null){const ce=this.compile(C,te,he);return new Promise(ue=>{function je(){if(ce.forEach(function(Ke){de.get(Ke).currentProgram.isReady()&&ce.delete(Ke)}),ce.size===0){ue(C);return}setTimeout(je,10)}Rt.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let Ws=null;function Ii(C){Ws&&Ws(C)}function pn(){Vn.stop()}function wn(){Vn.start()}const Vn=new y_;Vn.setAnimationLoop(Ii),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(C){Ws=C,Ye.setAnimationLoop(C),C===null?Vn.stop():Vn.start()},Ye.addEventListener("sessionstart",pn),Ye.addEventListener("sessionend",wn),this.render=function(C,te){if(te!==void 0&&te.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(C,te);const he=Ye.enabled===!0&&Ye.isPresenting===!0,ce=z!==null&&($===null||he)&&z.begin(G,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(te),te=Ye.getCamera()),C.isScene===!0&&C.onBeforeRender(G,C,te,$),U=se.get(C,T.length),U.init(te),U.state.textureUnits=be.getTextureUnits(),T.push(U),pt.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),Je.setFromProjectionMatrix(pt,qi,te.reversedDepth),ut=this.localClippingEnabled,nt=Te.init(this.clippingPlanes,ut),I=Ge.get(C,B.length),I.init(),B.push(I),Ye.enabled===!0&&Ye.isPresenting===!0){const Ke=G.xr.getDepthSensingMesh();Ke!==null&&ds(Ke,te,-1/0,G.sortObjects)}ds(C,te,0,G.sortObjects),I.finish(),G.sortObjects===!0&&I.sort(De,ve,te.reversedDepth),Dt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Dt&&Ze.addToRenderList(I,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Te.beginShadows();const ue=U.state.shadowsArray;if(we.render(ue,C,te),nt===!0&&Te.endShadows(),(ce&&z.hasRenderPass())===!1){const Ke=I.opaque,Ve=I.transmissive;if(U.setupLights(),te.isArrayCamera){const et=te.cameras;if(Ve.length>0)for(let Qe=0,rt=et.length;Qe<rt;Qe++){const mt=et[Qe];ml(Ke,Ve,C,mt)}Dt&&Ze.render(C);for(let Qe=0,rt=et.length;Qe<rt;Qe++){const mt=et[Qe];pl(I,C,mt,mt.viewport)}}else Ve.length>0&&ml(Ke,Ve,C,te),Dt&&Ze.render(C),pl(I,C,te)}$!==null&&H===0&&(be.updateMultisampleRenderTarget($),be.updateRenderTargetMipmap($)),ce&&z.end(G),C.isScene===!0&&C.onAfterRender(G,C,te),ke.resetDefaultState(),re=-1,me=null,T.pop(),T.length>0?(U=T[T.length-1],be.setTextureUnits(U.state.textureUnits),nt===!0&&Te.setGlobalState(G.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,q!==null&&q.renderEnd()};function ds(C,te,he,ce){if(C.visible===!1)return;if(C.layers.test(te.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(te);else if(C.isLightProbeGrid)U.pushLightProbeGrid(C);else if(C.isLight)U.pushLight(C),C.castShadow&&U.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Je.intersectsSprite(C)){ce&&Yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pt);const Ke=Se.update(C),Ve=C.material;Ve.visible&&I.push(C,Ke,Ve,he,Yt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Je.intersectsObject(C))){const Ke=Se.update(C),Ve=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Yt.copy(C.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Yt.copy(Ke.boundingSphere.center)),Yt.applyMatrix4(C.matrixWorld).applyMatrix4(pt)),Array.isArray(Ve)){const et=Ke.groups;for(let Qe=0,rt=et.length;Qe<rt;Qe++){const mt=et[Qe],st=Ve[mt.materialIndex];st&&st.visible&&I.push(C,Ke,st,he,Yt.z,mt)}}else Ve.visible&&I.push(C,Ke,Ve,he,Yt.z,null)}}const je=C.children;for(let Ke=0,Ve=je.length;Ke<Ve;Ke++)ds(je[Ke],te,he,ce)}function pl(C,te,he,ce){const{opaque:ue,transmissive:je,transparent:Ke}=C;U.setupLightsView(he),nt===!0&&Te.setGlobalState(G.clippingPlanes,he),ce&&E.viewport(D.copy(ce)),ue.length>0&&hs(ue,te,he),je.length>0&&hs(je,te,he),Ke.length>0&&hs(Ke,te,he),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ml(C,te,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ce.id]===void 0){const st=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ce.id]=new Zi(1,1,{generateMipmaps:!0,type:st?Aa:di,minFilter:Fs,samples:Math.max(4,F.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const je=U.state.transmissionRenderTarget[ce.id],Ke=ce.viewport||D;je.setSize(Ke.z*G.transmissionResolutionScale,Ke.w*G.transmissionResolutionScale);const Ve=G.getRenderTarget(),et=G.getActiveCubeFace(),Qe=G.getActiveMipmapLevel();G.setRenderTarget(je),G.getClearColor(ne),J=G.getClearAlpha(),J<1&&G.setClearColor(16777215,.5),G.clear(),Dt&&Ze.render(he);const rt=G.toneMapping;G.toneMapping=Yi;const mt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),U.setupLightsView(ce),nt===!0&&Te.setGlobalState(G.clippingPlanes,ce),hs(C,he,ce),be.updateMultisampleRenderTarget(je),be.updateRenderTargetMipmap(je),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ut=0,an=te.length;Ut<an;Ut++){const Jt=te[Ut],{object:Gt,geometry:Vt,material:qe,group:On}=Jt;if(qe.side===Li&&Gt.layers.test(ce.layers)){const yt=qe.side;qe.side=Qn,qe.needsUpdate=!0,Ra(Gt,he,ce,Vt,qe,On),qe.side=yt,qe.needsUpdate=!0,st=!0}}st===!0&&(be.updateMultisampleRenderTarget(je),be.updateRenderTargetMipmap(je))}G.setRenderTarget(Ve,et,Qe),G.setClearColor(ne,J),mt!==void 0&&(ce.viewport=mt),G.toneMapping=rt}function hs(C,te,he){const ce=te.isScene===!0?te.overrideMaterial:null;for(let ue=0,je=C.length;ue<je;ue++){const Ke=C[ue],{object:Ve,geometry:et,group:Qe}=Ke;let rt=Ke.material;rt.allowOverride===!0&&ce!==null&&(rt=ce),Ve.layers.test(he.layers)&&Ra(Ve,te,he,et,rt,Qe)}}function Ra(C,te,he,ce,ue,je){C.onBeforeRender(G,te,he,ce,ue,je),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(G,te,he,ce,C,je),ue.transparent===!0&&ue.side===Li&&ue.forceSinglePass===!1?(ue.side=Qn,ue.needsUpdate=!0,G.renderBufferDirect(he,te,ce,ue,C,je),ue.side=us,ue.needsUpdate=!0,G.renderBufferDirect(he,te,ce,ue,C,je),ue.side=Li):G.renderBufferDirect(he,te,ce,ue,C,je),C.onAfterRender(G,te,he,ce,ue,je)}function Na(C,te,he){te.isScene!==!0&&(te=Pt);const ce=de.get(C),ue=U.state.lights,je=U.state.shadowsArray,Ke=ue.state.version,Ve=Ie.getParameters(C,ue.state,je,te,he,U.state.lightProbeGridArray),et=Ie.getProgramCacheKey(Ve);let Qe=ce.programs;ce.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?te.environment:null,ce.fog=te.fog;const rt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ce.envMap=ze.get(C.envMap||ce.environment,rt),ce.envMapRotation=ce.environment!==null&&C.envMap===null?te.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",$n),Qe=new Map,ce.programs=Qe);let mt=Qe.get(et);if(mt!==void 0){if(ce.currentProgram===mt&&ce.lightsStateVersion===Ke)return $i(C,Ve),mt}else Ve.uniforms=Ie.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,he,Ve),C.onBeforeCompile(Ve,G),mt=Ie.acquireProgram(Ve,et),Qe.set(et,mt),ce.uniforms=Ve.uniforms;const st=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(st.clippingPlanes=Te.uniform),$i(C,Ve),ce.needsLights=gl(C),ce.lightsStateVersion=Ke,ce.needsLights&&(st.ambientLightColor.value=ue.state.ambient,st.lightProbe.value=ue.state.probe,st.directionalLights.value=ue.state.directional,st.directionalLightShadows.value=ue.state.directionalShadow,st.spotLights.value=ue.state.spot,st.spotLightShadows.value=ue.state.spotShadow,st.rectAreaLights.value=ue.state.rectArea,st.ltc_1.value=ue.state.rectAreaLTC1,st.ltc_2.value=ue.state.rectAreaLTC2,st.pointLights.value=ue.state.point,st.pointLightShadows.value=ue.state.pointShadow,st.hemisphereLights.value=ue.state.hemi,st.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,st.spotLightMatrix.value=ue.state.spotLightMatrix,st.spotLightMap.value=ue.state.spotLightMap,st.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=U.state.lightProbeGridArray.length>0,ce.currentProgram=mt,ce.uniformsList=null,mt}function Ji(C){if(C.uniformsList===null){const te=C.currentProgram.getUniforms();C.uniformsList=eu.seqWithValue(te.seq,C.uniforms)}return C.uniformsList}function $i(C,te){const he=de.get(C);he.outputColorSpace=te.outputColorSpace,he.batching=te.batching,he.batchingColor=te.batchingColor,he.instancing=te.instancing,he.instancingColor=te.instancingColor,he.instancingMorph=te.instancingMorph,he.skinning=te.skinning,he.morphTargets=te.morphTargets,he.morphNormals=te.morphNormals,he.morphColors=te.morphColors,he.morphTargetsCount=te.morphTargetsCount,he.numClippingPlanes=te.numClippingPlanes,he.numIntersection=te.numClipIntersection,he.vertexAlphas=te.vertexAlphas,he.vertexTangents=te.vertexTangents,he.toneMapping=te.toneMapping}function ps(C,te){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;w.setFromMatrixPosition(te.matrixWorld);for(let he=0,ce=C.length;he<ce;he++){const ue=C[he];if(ue.texture!==null&&ue.boundingBox.containsPoint(w))return ue}return null}function Da(C,te,he,ce,ue){te.isScene!==!0&&(te=Pt),be.resetTextureUnits();const je=te.fog,Ke=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?te.environment:null,Ve=$===null?G.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:wt.workingColorSpace,et=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,Qe=ze.get(ce.envMap||Ke,et),rt=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,mt=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),st=!!he.morphAttributes.position,Ut=!!he.morphAttributes.normal,an=!!he.morphAttributes.color;let Jt=Yi;ce.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Jt=G.toneMapping);const Gt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Vt=Gt!==void 0?Gt.length:0,qe=de.get(ce),On=U.state.lights;if(nt===!0&&(ut===!0||C!==me)){const Ht=C===me&&ce.id===re;Te.setState(ce,C,Ht)}let yt=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==On.state.version||qe.outputColorSpace!==Ve||ue.isBatchedMesh&&qe.batching===!1||!ue.isBatchedMesh&&qe.batching===!0||ue.isBatchedMesh&&qe.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&qe.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&qe.instancing===!1||!ue.isInstancedMesh&&qe.instancing===!0||ue.isSkinnedMesh&&qe.skinning===!1||!ue.isSkinnedMesh&&qe.skinning===!0||ue.isInstancedMesh&&qe.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&qe.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&qe.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&qe.instancingMorph===!1&&ue.morphTexture!==null||qe.envMap!==Qe||ce.fog===!0&&qe.fog!==je||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==rt||qe.vertexTangents!==mt||qe.morphTargets!==st||qe.morphNormals!==Ut||qe.morphColors!==an||qe.toneMapping!==Jt||qe.morphTargetsCount!==Vt||!!qe.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,qe.__version=ce.version);let yn=qe.currentProgram;yt===!0&&(yn=Na(ce,te,ue),q&&ce.isNodeMaterial&&q.onUpdateProgram(ce,yn,qe));let ei=!1,Ei=!1,ti=!1;const jt=yn.getUniforms(),sn=qe.uniforms;if(E.useProgram(yn.program)&&(ei=!0,Ei=!0,ti=!0),ce.id!==re&&(re=ce.id,Ei=!0),qe.needsLights){const Ht=ps(U.state.lightProbeGridArray,ue);qe.lightProbeGrid!==Ht&&(qe.lightProbeGrid=Ht,Ei=!0)}if(ei||me!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),jt.setValue(ee,"projectionMatrix",C.projectionMatrix),jt.setValue(ee,"viewMatrix",C.matrixWorldInverse);const Bi=jt.map.cameraPosition;Bi!==void 0&&Bi.setValue(ee,Ct.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&jt.setValue(ee,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&jt.setValue(ee,"isOrthographic",C.isOrthographicCamera===!0),me!==C&&(me=C,Ei=!0,ti=!0)}if(qe.needsLights&&(On.state.directionalShadowMap.length>0&&jt.setValue(ee,"directionalShadowMap",On.state.directionalShadowMap,be),On.state.spotShadowMap.length>0&&jt.setValue(ee,"spotShadowMap",On.state.spotShadowMap,be),On.state.pointShadowMap.length>0&&jt.setValue(ee,"pointShadowMap",On.state.pointShadowMap,be)),ue.isSkinnedMesh){jt.setOptional(ee,ue,"bindMatrix"),jt.setOptional(ee,ue,"bindMatrixInverse");const Ht=ue.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),jt.setValue(ee,"boneTexture",Ht.boneTexture,be))}ue.isBatchedMesh&&(jt.setOptional(ee,ue,"batchingTexture"),jt.setValue(ee,"batchingTexture",ue._matricesTexture,be),jt.setOptional(ee,ue,"batchingIdTexture"),jt.setValue(ee,"batchingIdTexture",ue._indirectTexture,be),jt.setOptional(ee,ue,"batchingColorTexture"),ue._colorsTexture!==null&&jt.setValue(ee,"batchingColorTexture",ue._colorsTexture,be));const Ti=he.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&X.update(ue,he,yn),(Ei||qe.receiveShadow!==ue.receiveShadow)&&(qe.receiveShadow=ue.receiveShadow,jt.setValue(ee,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&te.environment!==null&&(sn.envMapIntensity.value=te.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=dw()),Ei){if(jt.setValue(ee,"toneMappingExposure",G.toneMappingExposure),qe.needsLights&&mn(sn,ti),je&&ce.fog===!0&&We.refreshFogUniforms(sn,je),We.refreshMaterialUniforms(sn,ce,xe,ge,U.state.transmissionRenderTarget[C.id]),qe.needsLights&&qe.lightProbeGrid){const Ht=qe.lightProbeGrid;sn.probesSH.value=Ht.texture,sn.probesMin.value.copy(Ht.boundingBox.min),sn.probesMax.value.copy(Ht.boundingBox.max),sn.probesResolution.value.copy(Ht.resolution)}eu.upload(ee,Ji(qe),sn,be)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(eu.upload(ee,Ji(qe),sn,be),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&jt.setValue(ee,"center",ue.center),jt.setValue(ee,"modelViewMatrix",ue.modelViewMatrix),jt.setValue(ee,"normalMatrix",ue.normalMatrix),jt.setValue(ee,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Ht=ce.uniformsGroups;for(let Bi=0,Ua=Ht.length;Bi<Ua;Bi++){const ms=Ht[Bi];Ne.update(ms,yn),Ne.bind(ms,yn)}}return yn}function mn(C,te){C.ambientLightColor.needsUpdate=te,C.lightProbe.needsUpdate=te,C.directionalLights.needsUpdate=te,C.directionalLightShadows.needsUpdate=te,C.pointLights.needsUpdate=te,C.pointLightShadows.needsUpdate=te,C.spotLights.needsUpdate=te,C.spotLightShadows.needsUpdate=te,C.rectAreaLights.needsUpdate=te,C.hemisphereLights.needsUpdate=te}function gl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,te,he){const ce=de.get(C);ce.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),de.get(C.texture).__webglTexture=te,de.get(C.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,te){const he=de.get(C);he.__webglFramebuffer=te,he.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(C,te=0,he=0){$=C,O=te,H=he;let ce=null,ue=!1,je=!1;if(C){const Ve=de.get(C);if(Ve.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(ee.FRAMEBUFFER,Ve.__webglFramebuffer),D.copy(C.viewport),Q.copy(C.scissor),Ee=C.scissorTest,E.viewport(D),E.scissor(Q),E.setScissorTest(Ee),re=-1;return}else if(Ve.__webglFramebuffer===void 0)be.setupRenderTarget(C);else if(Ve.__hasExternalTextures)be.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const rt=C.depthTexture;if(Ve.__boundDepthTexture!==rt){if(rt!==null&&de.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(je=!0);const Qe=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[te])?ce=Qe[te][he]:ce=Qe[te],ue=!0):C.samples>0&&be.useMultisampledRTT(C)===!1?ce=de.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?ce=Qe[he]:ce=Qe,D.copy(C.viewport),Q.copy(C.scissor),Ee=C.scissorTest}else D.copy(Fe).multiplyScalar(xe).floor(),Q.copy(Oe).multiplyScalar(xe).floor(),Ee=Pe;if(he!==0&&(ce=fe),E.bindFramebuffer(ee.FRAMEBUFFER,ce)&&E.drawBuffers(C,ce),E.viewport(D),E.scissor(Q),E.setScissorTest(Ee),ue){const Ve=de.get(C.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ve.__webglTexture,he)}else if(je){const Ve=te;for(let et=0;et<C.textures.length;et++){const Qe=de.get(C.textures[et]);ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0+et,Qe.__webglTexture,he,Ve)}}else if(C!==null&&he!==0){const Ve=de.get(C.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ve.__webglTexture,he)}re=-1},this.readRenderTargetPixels=function(C,te,he,ce,ue,je,Ke,Ve=0){if(!(C&&C.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et){E.bindFramebuffer(ee.FRAMEBUFFER,et);try{const Qe=C.textures[Ve],rt=Qe.format,mt=Qe.type;if(C.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ve),!F.textureFormatReadable(rt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(mt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=C.width-ce&&he>=0&&he<=C.height-ue&&ee.readPixels(te,he,ce,ue,Le.convert(rt),Le.convert(mt),je)}finally{const Qe=$!==null?de.get($).__webglFramebuffer:null;E.bindFramebuffer(ee.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,te,he,ce,ue,je,Ke,Ve=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et)if(te>=0&&te<=C.width-ce&&he>=0&&he<=C.height-ue){E.bindFramebuffer(ee.FRAMEBUFFER,et);const Qe=C.textures[Ve],rt=Qe.format,mt=Qe.type;if(C.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ve),!F.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=ee.createBuffer();ee.bindBuffer(ee.PIXEL_PACK_BUFFER,st),ee.bufferData(ee.PIXEL_PACK_BUFFER,je.byteLength,ee.STREAM_READ),ee.readPixels(te,he,ce,ue,Le.convert(rt),Le.convert(mt),0);const Ut=$!==null?de.get($).__webglFramebuffer:null;E.bindFramebuffer(ee.FRAMEBUFFER,Ut);const an=ee.fenceSync(ee.SYNC_GPU_COMMANDS_COMPLETE,0);return ee.flush(),await dM(ee,an,4),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,st),ee.getBufferSubData(ee.PIXEL_PACK_BUFFER,0,je),ee.deleteBuffer(st),ee.deleteSync(an),je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,te=null,he=0){const ce=Math.pow(2,-he),ue=Math.floor(C.image.width*ce),je=Math.floor(C.image.height*ce),Ke=te!==null?te.x:0,Ve=te!==null?te.y:0;be.setTexture2D(C,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,he,0,0,Ke,Ve,ue,je),E.unbindTexture()},this.copyTextureToTexture=function(C,te,he=null,ce=null,ue=0,je=0){let Ke,Ve,et,Qe,rt,mt,st,Ut,an;const Jt=C.isCompressedTexture?C.mipmaps[je]:C.image;if(he!==null)Ke=he.max.x-he.min.x,Ve=he.max.y-he.min.y,et=he.isBox3?he.max.z-he.min.z:1,Qe=he.min.x,rt=he.min.y,mt=he.isBox3?he.min.z:0;else{const sn=Math.pow(2,-ue);Ke=Math.floor(Jt.width*sn),Ve=Math.floor(Jt.height*sn),C.isDataArrayTexture?et=Jt.depth:C.isData3DTexture?et=Math.floor(Jt.depth*sn):et=1,Qe=0,rt=0,mt=0}ce!==null?(st=ce.x,Ut=ce.y,an=ce.z):(st=0,Ut=0,an=0);const Gt=Le.convert(te.format),Vt=Le.convert(te.type);let qe;te.isData3DTexture?(be.setTexture3D(te,0),qe=ee.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(be.setTexture2DArray(te,0),qe=ee.TEXTURE_2D_ARRAY):(be.setTexture2D(te,0),qe=ee.TEXTURE_2D),E.activeTexture(ee.TEXTURE0),E.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,te.flipY),E.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),E.pixelStorei(ee.UNPACK_ALIGNMENT,te.unpackAlignment);const On=E.getParameter(ee.UNPACK_ROW_LENGTH),yt=E.getParameter(ee.UNPACK_IMAGE_HEIGHT),yn=E.getParameter(ee.UNPACK_SKIP_PIXELS),ei=E.getParameter(ee.UNPACK_SKIP_ROWS),Ei=E.getParameter(ee.UNPACK_SKIP_IMAGES);E.pixelStorei(ee.UNPACK_ROW_LENGTH,Jt.width),E.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Jt.height),E.pixelStorei(ee.UNPACK_SKIP_PIXELS,Qe),E.pixelStorei(ee.UNPACK_SKIP_ROWS,rt),E.pixelStorei(ee.UNPACK_SKIP_IMAGES,mt);const ti=C.isDataArrayTexture||C.isData3DTexture,jt=te.isDataArrayTexture||te.isData3DTexture;if(C.isDepthTexture){const sn=de.get(C),Ti=de.get(te),Ht=de.get(sn.__renderTarget),Bi=de.get(Ti.__renderTarget);E.bindFramebuffer(ee.READ_FRAMEBUFFER,Ht.__webglFramebuffer),E.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Ua=0;Ua<et;Ua++)ti&&(ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,de.get(C).__webglTexture,ue,mt+Ua),ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,de.get(te).__webglTexture,je,an+Ua)),ee.blitFramebuffer(Qe,rt,Ke,Ve,st,Ut,Ke,Ve,ee.DEPTH_BUFFER_BIT,ee.NEAREST);E.bindFramebuffer(ee.READ_FRAMEBUFFER,null),E.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else if(ue!==0||C.isRenderTargetTexture||de.has(C)){const sn=de.get(C),Ti=de.get(te);E.bindFramebuffer(ee.READ_FRAMEBUFFER,W),E.bindFramebuffer(ee.DRAW_FRAMEBUFFER,P);for(let Ht=0;Ht<et;Ht++)ti?ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,sn.__webglTexture,ue,mt+Ht):ee.framebufferTexture2D(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,sn.__webglTexture,ue),jt?ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Ti.__webglTexture,je,an+Ht):ee.framebufferTexture2D(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ti.__webglTexture,je),ue!==0?ee.blitFramebuffer(Qe,rt,Ke,Ve,st,Ut,Ke,Ve,ee.COLOR_BUFFER_BIT,ee.NEAREST):jt?ee.copyTexSubImage3D(qe,je,st,Ut,an+Ht,Qe,rt,Ke,Ve):ee.copyTexSubImage2D(qe,je,st,Ut,Qe,rt,Ke,Ve);E.bindFramebuffer(ee.READ_FRAMEBUFFER,null),E.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else jt?C.isDataTexture||C.isData3DTexture?ee.texSubImage3D(qe,je,st,Ut,an,Ke,Ve,et,Gt,Vt,Jt.data):te.isCompressedArrayTexture?ee.compressedTexSubImage3D(qe,je,st,Ut,an,Ke,Ve,et,Gt,Jt.data):ee.texSubImage3D(qe,je,st,Ut,an,Ke,Ve,et,Gt,Vt,Jt):C.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,je,st,Ut,Ke,Ve,Gt,Vt,Jt.data):C.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,je,st,Ut,Jt.width,Jt.height,Gt,Jt.data):ee.texSubImage2D(ee.TEXTURE_2D,je,st,Ut,Ke,Ve,Gt,Vt,Jt);E.pixelStorei(ee.UNPACK_ROW_LENGTH,On),E.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,yt),E.pixelStorei(ee.UNPACK_SKIP_PIXELS,yn),E.pixelStorei(ee.UNPACK_SKIP_ROWS,ei),E.pixelStorei(ee.UNPACK_SKIP_IMAGES,Ei),je===0&&te.generateMipmaps&&ee.generateMipmap(qe),E.unbindTexture()},this.initRenderTarget=function(C){de.get(C).__webglFramebuffer===void 0&&be.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?be.setTextureCube(C,0):C.isData3DTexture?be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?be.setTexture2DArray(C,0):be.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){O=0,H=0,$=null,E.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const ph=({product:r,canvasElement:e,canvasVersion:i})=>{const s=Be.useRef(null),l=Be.useRef(null),c=Be.useRef(null),f=Be.useRef(null),p=Be.useRef(null),g=Be.useRef(null),m=Be.useRef(null),v=Be.useRef(null),_=Be.useRef(!1),x=Be.useRef({x:0,y:0}),[b,A]=Be.useState("#ffffff"),[N,M]=Be.useState(!1),[y,k]=Be.useState({hdri:"studio",showShadows:!0,showReflections:!0,ambientOcclusion:!0,depthOfField:0,autoRotate:!0,showBleedLine:!1,roughness:.1,metalness:.05}),[L,w]=Be.useState("front"),I=Be.useRef(null);Be.useEffect(()=>{if(!s.current)return;const W=s.current.clientWidth,P=s.current.clientHeight,O=new CM;O.background=new _t("#141415"),c.current=O;const H=new Si(45,W/P,.1,100);H.position.set(0,.5,4.2),H.lookAt(0,0,0),f.current=H;const $=new hw({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});for($.setSize(W,P),$.setPixelRatio(Math.min(window.devicePixelRatio,2)),$.shadowMap.enabled=!0,$.shadowMap.type=nl,$.toneMapping=up,$.toneMappingExposure=1.1;s.current.firstChild;)s.current.removeChild(s.current.firstChild);s.current.appendChild($.domElement),l.current=$,B(O,y.hdri);const re=new hl(10,10),me=new i2({opacity:.25}),D=new Bt(re,me);D.rotation.x=-Math.PI/2,D.position.y=-1.15,D.receiveShadow=!0,g.current=D,O.add(D),T();const Q=()=>{v.current=requestAnimationFrame(Q),p.current&&y.autoRotate&&!_.current&&(p.current.rotation.y+=.006),$.render(O,H)};Q();let Ee=null;const ne=()=>{Ee!==null&&cancelAnimationFrame(Ee),Ee=requestAnimationFrame(()=>{if(Ee=null,!s.current||!l.current||!f.current)return;const Y=s.current.clientWidth,ge=s.current.clientHeight;if(Y<=0||ge<=0)return;const xe=Y/ge;f.current.aspect=xe,xe<1?f.current.fov=Math.min(60,42/xe):f.current.fov=42,f.current.updateProjectionMatrix(),l.current.setSize(Y,ge,!1)})};ne();const J=new ResizeObserver(ne);return s.current&&J.observe(s.current),()=>{var Y;if(J.disconnect(),Ee!==null&&cancelAnimationFrame(Ee),v.current&&cancelAnimationFrame(v.current),l.current&&(l.current.domElement&&((Y=s.current)!=null&&Y.contains(l.current.domElement))&&s.current.removeChild(l.current.domElement),l.current.forceContextLoss(),l.current.dispose(),l.current=null),s.current)for(;s.current.firstChild;)s.current.removeChild(s.current.firstChild);m.current&&(m.current.dispose(),m.current=null)}},[]),Be.useEffect(()=>{T()},[r,y.roughness,y.metalness,y.showBleedLine,b]),Be.useEffect(()=>{c.current&&B(c.current,y.hdri)},[y.hdri]),Be.useEffect(()=>{var O;if(!e||!p.current)return;I.current||(I.current=document.createElement("canvas"));const W=I.current;(W.width!==e.width||W.height!==e.height)&&(W.width=e.width,W.height=e.height);const P=W.getContext("2d");if(P&&(P.clearRect(0,0,W.width,W.height),P.drawImage(e,0,0)),m.current)m.current.needsUpdate=!0,U(m.current);else{const H=new HM(W);H.wrapS=ll,H.wrapT=ll,H.colorSpace=fi,H.anisotropy=((O=l.current)==null?void 0:O.capabilities.getMaxAnisotropy())||8,H.needsUpdate=!0,m.current=H,U(H)}},[i,e,r]);const U=W=>{p.current&&p.current.traverse(P=>{P instanceof Bt&&P.userData.isPrintArea&&(P.material.map=W,P.material.needsUpdate=!0)})},B=(W,P)=>{const O=[];W.traverse(ne=>{ne instanceof fu&&O.push(ne)}),O.forEach(ne=>W.remove(ne));let H=16777215,$=14739455,re="#141415";P==="outdoor"?(H=16775917,$=14412542,re="#181d28"):P==="neon"?(H=16007006,$=440020,re="#0b0c10"):P==="warm"&&(H=16638023,$=16347926,re="#1c1917"),W.background=new _t(re);const me=new p2(16777215,.7);W.add(me);const D=new oh(H,1.8);D.position.set(3,4,3),D.castShadow=!0,D.shadow.mapSize.width=1024,D.shadow.mapSize.height=1024,W.add(D);const Q=new oh($,.9);Q.position.set(-3,2,-2),W.add(Q);const Ee=new oh(16777215,.8);Ee.position.set(0,3,-4),W.add(Ee)},T=()=>{if(!c.current)return;const W=[];c.current.children.forEach(re=>{!(re instanceof fu)&&re!==g.current&&W.push(re)}),W.forEach(re=>{var me;(me=c.current)==null||me.remove(re),re.traverse(D=>{D instanceof Bt&&(D.geometry&&D.geometry.dispose(),D.material&&(Array.isArray(D.material)?D.material.forEach(Q=>Q.dispose()):D.material.dispose()))})}),p.current=null;const P=new Jo;P.userData.isProductGroup=!0;const O={roughness:y.roughness,metalness:y.metalness,side:Li},H=new Br({color:r.bgColor||16777215,...O}),$=new Br({color:16777215,map:m.current||null,roughness:y.roughness*.8,metalness:y.metalness,side:Li});switch(r.model3D){case"mug":{const re=r.bgColor||"#ffffff",me=b||"#ffffff",D=new Br({color:re,roughness:.1,metalness:.05}),Q=new Br({color:me,roughness:.12,metalness:.04}),Ee=new Sa(.84,.84,1.95,64,1,!0),ne=new Bt(Ee,$);ne.userData.isPrintArea=!0,ne.castShadow=!0,ne.receiveShadow=!0,ne.rotation.y=Math.PI/2,P.add(ne);const J=new Sa(.76,.76,1.88,64,1,!1),Y=new Bt(J,Q);Y.position.y=.035,P.add(Y);const ge=new cu(.8,.04,16,64),xe=new Bt(ge,Q);xe.rotation.x=Math.PI/2,xe.position.y=.975,P.add(xe);const De=new yp(.84,64),ve=new Bt(De,D);ve.rotation.x=Math.PI/2,ve.position.y=-.975,P.add(ve);const Fe=new v_(new K(-.8,.58,0),new K(-1.52,.7,0),new K(-1.52,-.7,0),new K(-.8,-.58,0)),Oe=new uu(Fe,36,.095,16,!1),Pe=new Bt(Oe,Q);Pe.castShadow=!0,Pe.receiveShadow=!0,P.add(Pe);break}case"tshirt":{const re=new Ui(1.6,2.1,.25,16,16,4),me=new Bt(re,$);me.userData.isPrintArea=!0,me.castShadow=!0,P.add(me);const D=new Sa(.22,.26,.6,16),Q=new Bt(D,H);Q.position.set(-.98,.75,0),Q.rotation.z=Math.PI/4,P.add(Q);const Ee=new Sa(.22,.26,.6,16),ne=new Bt(Ee,H);ne.position.set(.98,.75,0),ne.rotation.z=-Math.PI/4,P.add(ne);const J=new cu(.32,.05,12,24),Y=new Bt(J,H);Y.position.set(0,1,0),Y.rotation.x=Math.PI/2,P.add(Y);break}case"bottle":case"tumbler":{const re=r.model3D==="tumbler"?2.2:2,me=new Sa(.6,.6,re,48),D=new Bt(me,$);D.userData.isPrintArea=!0,D.castShadow=!0,P.add(D);const Q=new Sa(.5,.58,.3,32),Ee=new Br({color:13751771,metalness:.9,roughness:.1}),ne=new Bt(Q,Ee);if(ne.position.y=re/2+.15,P.add(ne),r.model3D==="tumbler"){const J=new Sa(.04,.04,.8,12),Y=new c2({color:16777215,transmission:.9,opacity:1,transparent:!0,roughness:0}),ge=new Bt(J,Y);ge.position.set(.15,re/2+.5,0),P.add(ge)}break}case"mousepad":{const re=new Ui(2.8,1.4,.04),me=new Bt(re,$);me.userData.isPrintArea=!0,me.rotation.x=.3,me.castShadow=!0,P.add(me);break}case"ecobag":{const re=new Ui(1.6,2,.15),me=new Bt(re,$);me.userData.isPrintArea=!0,me.castShadow=!0,P.add(me);const D=new Mp(new K(-.4,1,0),new K(0,1.8,0),new K(.4,1,0)),Q=new uu(D,20,.04,8,!1),Ee=new Bt(Q,H);Ee.position.z=.08,P.add(Ee);const ne=new Bt(Q,H);ne.position.z=-.08,P.add(ne);break}case"tile":case"puzzle":case"coaster":{const re=new Ui(1.8,1.8,.08),me=new Bt(re,$);me.userData.isPrintArea=!0,me.rotation.x=.2,me.castShadow=!0,P.add(me);break}case"pillow":{const re=new Ui(1.8,1.8,.5,12,12,6),me=new Bt(re,$);me.userData.isPrintArea=!0,me.castShadow=!0,P.add(me);break}default:{const re=new Ui(1.6,1.6,1.6),me=new Bt(re,$);me.userData.isPrintArea=!0,me.castShadow=!0,P.add(me)}}if(y.showBleedLine){const re=new x2(P,15680580);P.add(re)}P.position.y=-.1,p.current=P,c.current.add(P),m.current&&U(m.current)},z=W=>{_.current=!0,x.current={x:W.clientX,y:W.clientY}},G=W=>{if(!_.current||!p.current)return;const P=W.clientX-x.current.x,O=W.clientY-x.current.y;p.current.rotation.y+=P*.01,p.current.rotation.x+=O*.01,p.current.rotation.x=Math.max(-Math.PI/6,Math.min(Math.PI/6,p.current.rotation.x)),x.current={x:W.clientX,y:W.clientY}},V=()=>{_.current=!1},q=W=>{if(w(W),!(!p.current||!f.current)){switch(p.current.rotation.set(0,0,0),W){case"front":f.current.position.set(0,.2,3.8);break;case"back":p.current.rotation.y=Math.PI,f.current.position.set(0,.2,3.8);break;case"side":p.current.rotation.y=Math.PI/2,f.current.position.set(0,.2,3.8);break;case"top":f.current.position.set(0,3.8,.1);break;case"iso":p.current.rotation.y=Math.PI/4,p.current.rotation.x=Math.PI/12,f.current.position.set(0,.2,3.8);break}f.current.lookAt(0,0,0)}},fe=W=>{if(!f.current)return;const P=W.deltaY*.0025;f.current.position.z=Math.max(2.2,Math.min(7,f.current.position.z+P))};return h.jsxs("div",{className:`relative flex flex-col bg-[#141415] border border-[#2d2d30] rounded-xl overflow-hidden select-none transition-all duration-300 ${N?"fixed inset-4 z-50 shadow-2xl":"w-full h-full min-h-[360px]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-[#1e1e20] border-b border-[#2d2d30] text-xs text-gray-300",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(ks,{className:"w-4 h-4 text-sky-400"}),h.jsx("span",{className:"font-semibold tracking-wide text-white",children:"PRO 3D MOCKUP STAGER"}),h.jsx("span",{className:"px-2 py-0.5 text-[10px] bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded-full font-mono",children:r.name})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"flex items-center bg-[#121214] p-0.5 rounded-lg border border-[#2d2d30]",children:["front","side","back","top","iso"].map(W=>h.jsx("button",{onClick:()=>q(W),className:`px-2 py-1 text-[10px] font-medium rounded capitalize transition-all ${L===W?"bg-sky-600 text-white shadow":"text-gray-400 hover:text-white hover:bg-white/5"}`,children:W},W))}),h.jsx("button",{onClick:()=>k(W=>({...W,autoRotate:!W.autoRotate})),className:`p-1.5 rounded-md border transition-all ${y.autoRotate?"bg-sky-500/20 border-sky-500/40 text-sky-300":"border-[#38383c] text-gray-400 hover:text-white"}`,title:"Auto-Rotate 360°",children:h.jsx(pu,{className:`w-3.5 h-3.5 ${y.autoRotate?"animate-spin":""}`})}),h.jsx("button",{onClick:()=>M(!N),className:"p-1.5 rounded-md border border-[#38383c] text-gray-400 hover:text-white hover:bg-white/5",title:"Toggle Fullscreen Viewport",children:h.jsx(hu,{className:"w-3.5 h-3.5"})})]})]}),h.jsx("div",{ref:s,onMouseDown:z,onMouseMove:G,onMouseUp:V,onMouseLeave:V,onWheel:fe,className:"relative flex-1 w-full h-full cursor-grab active:cursor-grabbing",children:h.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2 bg-[#18181c]/80 backdrop-blur-md rounded-lg border border-white/10 text-xs text-gray-300",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(Vv,{className:"w-3.5 h-3.5 text-amber-400"}),h.jsxs("select",{value:y.hdri,onChange:W=>k(P=>({...P,hdri:W.target.value})),className:"bg-[#121214] text-white text-[11px] px-2 py-1 rounded border border-[#2d2d30] focus:outline-none",children:[h.jsx("option",{value:"studio",children:"Estúdio Neutro"}),h.jsx("option",{value:"outdoor",children:"Luz Natural / Sol"}),h.jsx("option",{value:"neon",children:"Estúdio Cyber Neon"}),h.jsx("option",{value:"warm",children:"Ambiente Quente Workshop"})]})]}),r.model3D==="mug"&&h.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-white/10",children:[h.jsx("span",{className:"text-[10px] text-gray-400 hidden md:inline",children:"Interior/Alça:"}),h.jsx("div",{className:"flex items-center gap-1",children:[{color:"#ffffff",label:"Branca Total"},{color:"#1e293b",label:"Preta"},{color:"#ef4444",label:"Vermelha"},{color:"#2563eb",label:"Azul"},{color:"#ec4899",label:"Rosa"},{color:"#eab308",label:"Amarela"},{color:"#10b981",label:"Verde"}].map(W=>h.jsx("button",{onClick:()=>A(W.color),className:`w-4 h-4 rounded-full border transition-all ${b===W.color?"ring-2 ring-sky-400 scale-110 border-white":"border-black/30"}`,style:{backgroundColor:W.color},title:`Caneca com interior e alça: ${W.label}`},W.color))})]}),h.jsxs("div",{className:"hidden lg:flex items-center gap-2 text-[11px]",children:[h.jsx("span",{className:"text-gray-400",children:"Resinado Gloss:"}),h.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:1-y.roughness,onChange:W=>k(P=>({...P,roughness:1-parseFloat(W.target.value)})),className:"w-16 accent-sky-500 cursor-pointer"})]})]}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("button",{onClick:()=>k(W=>({...W,showBleedLine:!W.showBleedLine})),className:`px-2 py-1 text-[10px] rounded border transition-all ${y.showBleedLine?"bg-rose-500/20 text-rose-300 border-rose-500/40":"bg-white/5 border-white/10 text-gray-400 hover:text-white"}`,children:"Área Sangria Imprimível"})})]})})]})},pw=({layers:r,activeLayerId:e,onSelectLayer:i,onAddLayer:s,onDeleteLayer:l,onDuplicateLayer:c,onToggleVisibility:f,onToggleLock:p,onUpdateLayer:g,onReorderLayers:m,theme:v="dark"})=>{var k,L,w,I,U,B,T,z;const[_,x]=Be.useState("layers"),b=r.find(G=>G.id===e),A=[{value:"normal",label:"Normal"},{value:"multiply",label:"Multiplicação"},{value:"screen",label:"Divisão / Screen"},{value:"overlay",label:"Sobrepor / Overlay"},{value:"soft-light",label:"Luz Suave"},{value:"hard-light",label:"Luz Direta"},{value:"color-burn",label:"Superexposição de Cor"},{value:"color-dodge",label:"Subexposição de Cor"},{value:"darken",label:"Escurecer"},{value:"lighten",label:"Clarear"},{value:"difference",label:"Diferença"}],N=G=>{if(G>=r.length-1)return;const V=[...r],q=V[G];V[G]=V[G+1],V[G+1]=q,m(V)},M=G=>{if(G<=0)return;const V=[...r],q=V[G];V[G]=V[G-1],V[G-1]=q,m(V)},y=(G,V)=>{if(!b)return;const q=b.filters||{brightness:0,contrast:0,saturation:0,hue:0,blur:0,vibrance:0};g({...b,filters:{...q,[G]:V}})};return h.jsxs("div",{className:`flex flex-col h-full text-xs select-none border-l transition-colors ${v==="light"?"bg-white text-slate-800 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center border-b ${v==="light"?"border-slate-200 bg-slate-50":"border-[#2d2d30] bg-[#18181a]"}`,children:[h.jsxs("button",{onClick:()=>x("layers"),className:`flex-1 py-2 text-center font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${_==="layers"?v==="light"?"text-purple-700 border-b-2 border-purple-600 bg-white":"text-sky-400 border-b-2 border-sky-500 bg-[#1e1e20]":v==="light"?"text-slate-500 hover:text-slate-900":"text-gray-400 hover:text-gray-200"}`,children:[h.jsx(op,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["Camadas (",r.length,")"]})]}),h.jsxs("button",{onClick:()=>x("adjustments"),className:`flex-1 py-2 text-center font-semibold transition-colors flex items-center justify-center gap-1.5 ${_==="adjustments"?"text-sky-400 border-b-2 border-sky-500 bg-[#1e1e20]":"text-gray-400 hover:text-gray-200"}`,children:[h.jsx(dS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Ajustes"})]})]}),_==="layers"?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"p-2.5 border-b border-[#2d2d30] flex flex-col gap-2 bg-[#18181a]/50",children:[h.jsxs("div",{className:"flex items-center justify-between gap-2",children:[h.jsx("span",{className:"text-[11px] font-medium text-gray-400",children:"Modo Mesclagem:"}),h.jsx("select",{disabled:!b,value:(b==null?void 0:b.blendMode)||"normal",onChange:G=>b&&g({...b,blendMode:G.target.value}),className:"bg-[#121214] text-white text-[11px] px-2 py-1 rounded-md border border-[#38383c] focus:outline-none flex-1 font-medium disabled:opacity-40",children:A.map(G=>h.jsx("option",{value:G.value,children:G.label},G.value))})]}),h.jsxs("div",{className:"flex items-center justify-between gap-2",children:[h.jsx("span",{className:"text-[11px] font-medium text-gray-400",children:"Opacidade:"}),h.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[h.jsx("input",{type:"range",min:"0",max:"100",disabled:!b,value:(b==null?void 0:b.opacity)??100,onChange:G=>b&&g({...b,opacity:parseInt(G.target.value)}),className:"w-full accent-sky-500 cursor-pointer disabled:opacity-40"}),h.jsxs("span",{className:"font-mono text-[10px] w-8 text-right text-sky-400",children:[(b==null?void 0:b.opacity)??100,"%"]})]})]})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-2 flex flex-col gap-1",children:r.length===0?h.jsx("div",{className:"p-4 text-center text-gray-500 font-mono text-[11px]",children:"Nenhuma camada criada. Adicione imagens, textos ou formas."}):[...r].reverse().map((G,V)=>{const q=r.length-1-V,fe=e===G.id;return h.jsxs("div",{onClick:()=>i(G.id),className:`flex items-center gap-2 px-2.5 py-2 rounded-lg border cursor-pointer transition-all ${fe?"bg-sky-600/20 border-sky-500 text-white font-semibold shadow-sm":"bg-[#18181a] border-[#2d2d30] hover:bg-[#252528] text-gray-300"}`,children:[h.jsx("button",{onClick:W=>{W.stopPropagation(),f(G.id)},className:"text-gray-400 hover:text-white",children:G.visible?h.jsx(Ov,{className:"w-3.5 h-3.5 text-sky-400"}):h.jsx(Lv,{className:"w-3.5 h-3.5 text-rose-400 opacity-60"})}),h.jsxs("div",{className:"w-6 h-6 rounded bg-[#121214] border border-[#38383c] flex items-center justify-center text-gray-300 shrink-0",children:[G.type==="text"&&h.jsx(rl,{className:"w-3.5 h-3.5 text-emerald-400"}),G.type==="shape"&&h.jsx(lp,{className:"w-3.5 h-3.5 text-amber-400"}),G.type==="brush"&&h.jsx(Vy,{className:"w-3.5 h-3.5 text-indigo-400"}),G.type==="image"&&h.jsx(Dy,{className:"w-3.5 h-3.5 text-purple-400"}),G.type==="smart"&&h.jsx(ks,{className:"w-3.5 h-3.5 text-sky-400"})]}),h.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"truncate text-[12px]",children:G.name}),G.isSmartObject&&h.jsx("span",{className:"px-1 py-0.2 bg-sky-500/20 text-sky-300 text-[8px] rounded font-mono",children:"SMART"})]}),h.jsxs("span",{className:"text-[9px] text-gray-500 font-mono capitalize",children:[G.type," • ",G.blendMode]})]}),h.jsx("button",{onClick:W=>{W.stopPropagation(),p(G.id)},className:"text-gray-400 hover:text-white",children:G.locked?h.jsx(Hv,{className:"w-3.5 h-3.5 text-amber-400"}):h.jsx(Fv,{className:"w-3.5 h-3.5 text-gray-500 hover:text-gray-300"})}),h.jsxs("div",{className:"flex flex-col gap-0.5 opacity-60 hover:opacity-100",children:[h.jsx("button",{onClick:W=>{W.stopPropagation(),N(q)},className:"text-gray-400 hover:text-white",children:h.jsx(ey,{className:"w-3 h-3"})}),h.jsx("button",{onClick:W=>{W.stopPropagation(),M(q)},className:"text-gray-400 hover:text-white",children:h.jsx(Nv,{className:"w-3 h-3"})})]})]},G.id)})}),h.jsxs("div",{className:"p-2 border-t border-[#2d2d30] bg-[#18181a] flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsxs("button",{onClick:()=>s("text"),className:"px-2 py-1 bg-[#252528] hover:bg-[#323236] border border-[#38383c] rounded text-gray-200 flex items-center gap-1",title:"Adicionar Texto",children:[h.jsx(Fr,{className:"w-3 h-3 text-sky-400"}),h.jsx("span",{children:"Texto"})]}),h.jsxs("button",{onClick:()=>s("shape"),className:"px-2 py-1 bg-[#252528] hover:bg-[#323236] border border-[#38383c] rounded text-gray-200 flex items-center gap-1",title:"Adicionar Forma",children:[h.jsx(Fr,{className:"w-3 h-3 text-amber-400"}),h.jsx("span",{children:"Forma"})]})]}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("button",{disabled:!e,onClick:()=>e&&c(e),className:"p-1.5 bg-[#252528] hover:bg-[#323236] border border-[#38383c] rounded text-gray-300 hover:text-white disabled:opacity-30",title:"Duplicar Camada",children:h.jsx(tu,{className:"w-3.5 h-3.5"})}),h.jsx("button",{disabled:!e,onClick:()=>e&&l(e),className:"p-1.5 bg-[#252528] hover:bg-rose-900/40 border border-[#38383c] rounded text-rose-400 hover:text-rose-200 disabled:opacity-30",title:"Excluir Camada",children:h.jsx(sl,{className:"w-3.5 h-3.5"})})]})]})]}):h.jsx("div",{className:"p-3 flex flex-col gap-4 overflow-y-auto flex-1",children:b?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"text-[11px] font-semibold text-sky-400 uppercase tracking-wider",children:["Ajustes da Camada: ",b.name]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex justify-between text-[11px]",children:[h.jsx("span",{children:"Brilho"}),h.jsx("span",{className:"font-mono text-sky-400",children:((k=b.filters)==null?void 0:k.brightness)||0})]}),h.jsx("input",{type:"range",min:"-100",max:"100",value:((L=b.filters)==null?void 0:L.brightness)||0,onChange:G=>y("brightness",parseInt(G.target.value)),className:"accent-sky-500 cursor-pointer"})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex justify-between text-[11px]",children:[h.jsx("span",{children:"Contraste"}),h.jsx("span",{className:"font-mono text-sky-400",children:((w=b.filters)==null?void 0:w.contrast)||0})]}),h.jsx("input",{type:"range",min:"-100",max:"100",value:((I=b.filters)==null?void 0:I.contrast)||0,onChange:G=>y("contrast",parseInt(G.target.value)),className:"accent-sky-500 cursor-pointer"})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex justify-between text-[11px]",children:[h.jsx("span",{children:"Saturação de Cores Sublimáticas"}),h.jsx("span",{className:"font-mono text-sky-400",children:((U=b.filters)==null?void 0:U.saturation)||0})]}),h.jsx("input",{type:"range",min:"-100",max:"100",value:((B=b.filters)==null?void 0:B.saturation)||0,onChange:G=>y("saturation",parseInt(G.target.value)),className:"accent-sky-500 cursor-pointer"})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex justify-between text-[11px]",children:[h.jsx("span",{children:"Matiz / Tonalidade (Hue)"}),h.jsxs("span",{className:"font-mono text-sky-400",children:[((T=b.filters)==null?void 0:T.hue)||0,"°"]})]}),h.jsx("input",{type:"range",min:"-180",max:"180",value:((z=b.filters)==null?void 0:z.hue)||0,onChange:G=>y("hue",parseInt(G.target.value)),className:"accent-sky-500 cursor-pointer"})]}),h.jsxs("button",{onClick:()=>g({...b,isSmartObject:!b.isSmartObject}),className:"mt-2 py-2 px-3 bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 rounded-lg text-sky-300 font-semibold flex items-center justify-center gap-2",children:[h.jsx(ks,{className:"w-4 h-4"}),h.jsx("span",{children:b.isSmartObject?"Rasterizar Objeto Inteligente":"Converter em Objeto Inteligente"})]})]}):h.jsx("div",{className:"p-4 text-center text-gray-500 font-mono text-[11px]",children:"Selecione uma camada para aplicar ajustes de imagem."})})]})},mw=({historySteps:r,currentHistoryIndex:e,onJumpToHistoryStep:i,theme:s="dark"})=>h.jsxs("div",{className:`flex flex-col h-full text-xs select-none border-l transition-colors ${s==="light"?"bg-white text-slate-800 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`px-3 py-2 border-b flex items-center gap-2 font-semibold ${s==="light"?"border-slate-200 bg-slate-50 text-purple-700":"border-[#2d2d30] bg-[#18181a] text-sky-400"}`,children:[h.jsx(Iv,{className:"w-4 h-4"}),h.jsxs("span",{children:["Histórico de Edições (",r.length,")"]})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-2 flex flex-col gap-1",children:r.length===0?h.jsx("div",{className:"p-4 text-center text-gray-500 font-mono text-[11px]",children:"Nenhuma ação registrada no histórico."}):r.map((l,c)=>{const f=c===e,p=c>e;return h.jsxs("button",{onClick:()=>i(c),className:`flex items-center gap-2.5 px-3 py-2 rounded-lg border text-left transition-all ${f?"bg-sky-600/30 border-sky-500 text-white font-semibold shadow-sm":p?"bg-[#18181a]/40 border-[#2b2b2e] text-gray-500 hover:text-gray-300":"bg-[#18181a] border-[#2d2d30] text-gray-300 hover:bg-[#252528]"}`,children:[h.jsx("div",{className:"w-5 h-5 rounded bg-[#121214] border border-[#38383c] flex items-center justify-center shrink-0",children:l.toolName.includes("IA")?h.jsx(zi,{className:"w-3 h-3 text-purple-400"}):l.toolName.includes("Texto")?h.jsx(rl,{className:"w-3 h-3 text-emerald-400"}):h.jsx(ly,{className:"w-3 h-3 text-sky-400"})}),h.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[h.jsx("span",{className:"truncate text-[11px]",children:l.description}),h.jsx("span",{className:"text-[9px] text-gray-500 font-mono",children:new Date(l.timestamp).toLocaleTimeString()})]}),f&&h.jsx("span",{className:"w-2 h-2 rounded-full bg-sky-400 animate-pulse"})]},l.id)})})]}),gw=({activeLayer:r,onUpdateLayer:e,product:i,onApplyPresetTemplate:s,onDeleteLayer:l,onDuplicateLayer:c,theme:f="dark"})=>r?h.jsxs("div",{className:`flex flex-col h-full text-xs p-3 overflow-y-auto select-none gap-4 border-l transition-colors ${f==="light"?"bg-white text-slate-800 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-2 border-b ${f==="light"?"border-slate-200":"border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center gap-2 font-semibold ${f==="light"?"text-purple-700":"text-sky-400"}`,children:[h.jsx(mh,{className:"w-4 h-4"}),h.jsxs("span",{className:"truncate max-w-[120px]",children:["Propriedades: ",r.name]})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[c&&h.jsx("button",{onClick:()=>c(r.id),className:"p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors",title:"Duplicar Camada",children:h.jsx(tu,{className:"w-3.5 h-3.5"})}),l&&h.jsx("button",{onClick:()=>l(r.id),className:"p-1 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded transition-colors",title:"Excluir Elemento (Tecla Del)",children:h.jsx(sl,{className:"w-3.5 h-3.5"})}),h.jsx("span",{className:"px-1.5 py-0.5 bg-sky-500/20 text-sky-300 font-mono text-[9px] rounded uppercase",children:r.type})]})]}),h.jsxs("div",{className:"flex flex-col gap-2 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]",children:[h.jsxs("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1",children:[h.jsx(hu,{className:"w-3 h-3 text-sky-400"}),"Transformação"]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px]",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-gray-500 font-mono",children:"X:"}),h.jsx("input",{type:"number",value:Math.round(r.x),onChange:p=>e({...r,x:parseFloat(p.target.value)||0}),className:"w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-gray-500 font-mono",children:"Y:"}),h.jsx("input",{type:"number",value:Math.round(r.y),onChange:p=>e({...r,y:parseFloat(p.target.value)||0}),className:"w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-gray-500 font-mono",children:"L:"}),h.jsx("input",{type:"number",value:Math.round(r.width),onChange:p=>e({...r,width:Math.max(10,parseFloat(p.target.value)||10)}),className:"w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-gray-500 font-mono",children:"A:"}),h.jsx("input",{type:"number",value:Math.round(r.height),onChange:p=>e({...r,height:Math.max(10,parseFloat(p.target.value)||10)}),className:"w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"})]})]}),h.jsxs("div",{className:"flex items-center justify-between gap-2 mt-1",children:[h.jsxs("span",{className:"text-[11px] text-gray-400 flex items-center gap-1",children:[h.jsx(pu,{className:"w-3 h-3"})," Rotação:"]}),h.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[h.jsx("input",{type:"range",min:"0",max:"360",value:r.rotation,onChange:p=>e({...r,rotation:parseInt(p.target.value)}),className:"w-full accent-sky-500 cursor-pointer"}),h.jsxs("span",{className:"font-mono text-[10px] text-sky-400 w-8 text-right",children:[r.rotation,"°"]})]})]})]}),r.type==="text"&&h.jsxs("div",{className:"flex flex-col gap-2.5 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]",children:[h.jsxs("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1",children:[h.jsx(rl,{className:"w-3 h-3 text-emerald-400"}),"Tipografia & Arco Sublimático"]}),h.jsx("textarea",{value:r.content,onChange:p=>e({...r,content:p.target.value}),rows:2,className:"w-full bg-[#121214] border border-[#38383c] rounded p-2 text-white text-xs font-medium focus:outline-none focus:border-emerald-500",placeholder:"Digite o texto personalizado da estampa..."}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("span",{className:"text-[11px] text-gray-400",children:"Fonte:"}),h.jsxs("select",{value:r.fontFamily||"Arial",onChange:p=>e({...r,fontFamily:p.target.value}),className:"bg-[#121214] text-white text-xs p-1.5 rounded border border-[#38383c] focus:outline-none",children:[h.jsx("option",{value:"Arial",children:"Arial (Padrão Clean)"}),h.jsx("option",{value:"Impact",children:"Impact (Sublimação Bold)"}),h.jsx("option",{value:"'Courier New'",children:"Courier New (Retro Typewriter)"}),h.jsx("option",{value:"Georgia",children:"Georgia (Serif Elegante)"}),h.jsx("option",{value:"Comic Sans MS",children:"Comic Sans (Infantil / Festas)"}),h.jsx("option",{value:"Trebuchet MS",children:"Trebuchet MS (Moderna)"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"flex-1 flex flex-col gap-1",children:[h.jsx("span",{className:"text-[11px] text-gray-400",children:"Tamanho:"}),h.jsx("input",{type:"number",value:r.fontSize||36,onChange:p=>e({...r,fontSize:parseInt(p.target.value)||12}),className:"bg-[#121214] text-white text-xs p-1 rounded border border-[#38383c] font-mono"})]}),h.jsxs("div",{className:"flex-1 flex flex-col gap-1",children:[h.jsx("span",{className:"text-[11px] text-gray-400",children:"Peso:"}),h.jsxs("select",{value:r.fontWeight||"normal",onChange:p=>e({...r,fontWeight:p.target.value}),className:"bg-[#121214] text-white text-xs p-1 rounded border border-[#38383c]",children:[h.jsx("option",{value:"normal",children:"Normal"}),h.jsx("option",{value:"bold",children:"Negrito (Bold)"})]})]})]}),h.jsxs("div",{className:"flex flex-col gap-2 pt-2 border-t border-[#2d2d30]",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("span",{className:"text-[11px] font-semibold text-emerald-400 flex items-center gap-1",children:[h.jsx(py,{className:"w-3.5 h-3.5"}),"Arco de Caneca / Curvar Texto"]}),h.jsx("input",{type:"checkbox",checked:r.textCurved||!1,onChange:p=>e({...r,textCurved:p.target.checked}),className:"accent-emerald-500 cursor-pointer"})]}),r.textCurved&&h.jsxs("div",{className:"flex items-center justify-between gap-2",children:[h.jsx("span",{className:"text-[10px] text-gray-400",children:"Raio da Curva:"}),h.jsx("input",{type:"range",min:"40",max:"300",value:r.curveRadius||120,onChange:p=>e({...r,curveRadius:parseInt(p.target.value)}),className:"w-full accent-emerald-500 cursor-pointer"})]})]})]}),h.jsxs("div",{className:"flex flex-col gap-2 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]",children:[h.jsxs("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1",children:[h.jsx(Xy,{className:"w-3 h-3 text-purple-400"}),"Cores da Estampa"]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-[11px] text-gray-300",children:"Cor Principal:"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"color",value:r.color||"#000000",onChange:p=>e({...r,color:p.target.value}),className:"w-6 h-6 rounded cursor-pointer border border-[#38383c]"}),h.jsx("span",{className:"font-mono text-[10px] text-gray-400",children:r.color||"#000000"})]})]})]}),h.jsxs("div",{className:"mt-auto pt-2 border-t border-[#2d2d30] flex items-center gap-2",children:[c&&h.jsxs("button",{onClick:()=>c(r.id),className:"flex-1 py-1.5 px-3 bg-[#252528] hover:bg-[#323236] border border-[#38383c] text-gray-200 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors",children:[h.jsx(tu,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Duplicar"})]}),l&&h.jsxs("button",{onClick:()=>l(r.id),className:"flex-1 py-1.5 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors",title:"Excluir elemento selecionado (Tecla Del)",children:[h.jsx(sl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Excluir Elemento"})]})]})]}):h.jsxs("div",{className:`flex flex-col h-full text-xs p-4 select-none border-l transition-colors ${f==="light"?"bg-white text-slate-700 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center gap-2 font-semibold mb-4 pb-2 border-b ${f==="light"?"text-purple-700 border-slate-200":"text-sky-400 border-[#2d2d30]"}`,children:[h.jsx(mh,{className:"w-4 h-4"}),h.jsx("span",{children:"Propriedades do Objeto"})]}),h.jsx("div",{className:`font-mono text-[11px] text-center my-auto ${f==="light"?"text-slate-400":"text-gray-500"}`,children:"Nenhum elemento selecionado na tela. Clique em um texto, forma ou imagem para editar suas propriedades."}),h.jsxs("div",{className:`mt-auto border-t pt-3 flex flex-col gap-2 ${f==="light"?"border-slate-200":"border-[#2d2d30]"}`,children:[h.jsx("span",{className:`text-[10px] font-bold uppercase tracking-wider ${f==="light"?"text-slate-400":"text-gray-400"}`,children:"Atalhos Rápidos de Layout"}),h.jsxs("button",{onClick:()=>s("centered_logo"),className:`w-full py-1.5 px-2 border rounded text-left flex items-center gap-2 text-[11px] cursor-pointer transition-colors ${f==="light"?"bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-800":"bg-[#252528] hover:bg-[#323236] border-[#38383c] text-gray-200"}`,children:[h.jsx(jv,{className:"w-3.5 h-3.5 text-amber-500"}),h.jsxs("span",{children:["Centralizar Logo em ",i.name]})]}),h.jsxs("button",{onClick:()=>s("full_wrap"),className:`w-full py-1.5 px-2 border rounded text-left flex items-center gap-2 text-[11px] cursor-pointer transition-colors ${f==="light"?"bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-800":"bg-[#252528] hover:bg-[#323236] border-[#38383c] text-gray-200"}`,children:[h.jsx(zi,{className:"w-3.5 h-3.5 text-purple-500"}),h.jsx("span",{children:"Estampa Sublimática Full Wrap 300 DPI"})]})]})]}),xw=({product:r,onAddAIGeneratedImageToCanvas:e,onApplyAIToolToActiveLayer:i,activeLayer:s,theme:l="dark"})=>{const[c,f]=Be.useState({prompt:"",negativePrompt:"blurry, low resolution, watermark, pixelated, distorted colors, bad quality",model:"gemini-3.1-flash-image",guidanceScale:7.5,seed:42,upscaleFactor:2,creativity:.7,seamlessPattern:!1}),[p,g]=Be.useState(!1),[m,v]=Be.useState(null),[_,x]=Be.useState(null),[b,A]=Be.useState([]),N=L=>{const w=document.createElement("canvas");w.width=1200,w.height=1200;const I=w.getContext("2d");if(!I)return"";const U=I.createRadialGradient(600,600,50,600,600,800);U.addColorStop(0,"#0284c7"),U.addColorStop(.5,"#7e22ce"),U.addColorStop(1,"#0f172a"),I.fillStyle=U,I.fillRect(0,0,1200,1200),I.lineWidth=12;for(let B=0;B<15;B++)I.strokeStyle=`hsla(${B*24}, 85%, 65%, 0.4)`,I.beginPath(),I.arc(600,600,100+B*35,0,Math.PI*2),I.stroke();return I.fillStyle="#ffffff",I.font="bold 54px Impact, sans-serif",I.textAlign="center",I.shadowColor="rgba(0,0,0,0.8)",I.shadowBlur=15,I.fillText(L.toUpperCase()||"DESIGN SUBLIMÁTICO HD",600,600),w.toDataURL("image/png")},M=async L=>{const w=await L.text();try{return JSON.parse(w)}catch{throw new Error(`Resposta inválida do servidor: ${w.substring(0,300)}`)}},y=async()=>{if(!c.prompt.trim()){x("Por favor, digite um prompt para a geração da estampa.");return}g(!0),v("Criando estampa sublimática em alta definição via Gemini AI..."),x(null);try{const L=await fetch("/api/gemini/generate-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:`${c.prompt} ${c.seamlessPattern?"(seamless repeating pattern)":""}`,negativePrompt:c.negativePrompt,model:c.model,aspectRatio:"1:1",guidanceScale:c.guidanceScale})}),w=await M(L);if(!L.ok||w.error)throw new Error(w.error||"Erro na geração de imagem por IA");e(w.imageUrl,c.prompt.slice(0,20)),v("Estampa gerada com sucesso e adicionada ao canvas!")}catch(L){console.error("Error generating AI image:",L);const w=(L==null?void 0:L.message)||"Falha ao conectar com o servidor Gemini IA.",I=w.includes("429")||w.includes("quota")||w.includes("Quota"),U=w.includes("Invalid server response")||w.includes("Failed to fetch")||w.includes("404")||w.includes("NetworkError");if(I||U){x("Serviço Gemini IA indisponível ou indisponível localmente. Geramos um padrão sublimático local para você continuar.");const B=N(c.prompt);e(B,c.prompt.slice(0,20)||"Arte Sublimação")}else x(w)}finally{g(!1)}},k=async()=>{g(!0),v("Gerando sugestões de estampas com a IA para "+r.name+"...");try{const L=await fetch("/api/gemini/assist-prompt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idea:c.prompt||"Design sublimático moderno e vibrante",productType:r.name})}),w=await M(L);if(w.result){const I=JSON.parse(w.result);Array.isArray(I)&&A(I)}v(null)}catch{A([{title:"Ilustração Retro Vaporwave",prompt:"Vaporwave sunset with neon grid and tropical palm trees, vivid cyan and magenta dyes for mug sublimation"},{title:"Floral Botânico Elegante",prompt:"Watercolor botanical floral frame with golden geometric lines, seamless print for pillow or t-shirt"},{title:"Mesa Gaming Cyberpunk",prompt:"Cyberpunk futuristic neon Japanese dragon artwork, high contrast vector art for mousepad deskmat"}])}finally{g(!1)}};return h.jsxs("div",{className:`flex flex-col h-full text-xs p-3.5 overflow-y-auto select-none gap-4 transition-colors ${l==="light"?"bg-white text-slate-800 border-slate-200":"bg-[#1e1e20] text-gray-300 border-[#2d2d30]"}`,children:[h.jsxs("div",{className:`flex items-center gap-2 pb-2.5 border-b font-bold text-sm ${l==="light"?"text-purple-700 border-slate-200":"text-purple-400 border-[#2d2d30]"}`,children:[h.jsx(zi,{className:"w-5 h-5 text-purple-400 animate-pulse"}),h.jsx("span",{children:"PAINEL IA GENERATIVO SUBLIMAÇÃO"})]}),h.jsxs("div",{className:"flex flex-col gap-1.5 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("label",{className:"text-[11px] font-semibold text-gray-200 flex items-center gap-1.5",children:[h.jsx(ol,{className:"w-3.5 h-3.5 text-purple-400"}),"Prompt da Estampa (Descreva sua ideia)"]}),h.jsxs("button",{onClick:k,className:"text-[10px] text-purple-400 hover:text-purple-300 flex items-center gap-1 underline",children:[h.jsx(jv,{className:"w-3 h-3"})," Ideias da IA"]})]}),h.jsx("textarea",{value:c.prompt,onChange:L=>f({...c,prompt:L.target.value}),rows:3,placeholder:"Ex: Leão majestoso em estilo aquarela vibrante com respingos de tinta colorida, 300 DPI alta definição para caneca...",className:"w-full bg-[#121214] border border-[#38383c] focus:border-purple-500 rounded-lg p-2.5 text-white text-xs font-medium focus:outline-none transition-colors"}),b.length>0&&h.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 pt-2 border-t border-[#2d2d30]",children:[h.jsx("span",{className:"text-[10px] text-purple-300 font-semibold",children:"Sugestões de Prompts:"}),b.map((L,w)=>h.jsxs("button",{onClick:()=>f({...c,prompt:L.prompt}),className:"text-left p-1.5 bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/30 rounded text-[10px] text-purple-200 transition-colors",children:[h.jsx("span",{className:"font-bold block text-white",children:L.title}),h.jsx("span",{className:"line-clamp-1 opacity-80",children:L.prompt})]},w))]})]}),h.jsxs("div",{className:"flex flex-col gap-1.5 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]",children:[h.jsx("label",{className:"text-[11px] font-semibold text-gray-300",children:"Prompt Negativo (O que evitar)"}),h.jsx("input",{type:"text",value:c.negativePrompt,onChange:L=>f({...c,negativePrompt:L.target.value}),className:"w-full bg-[#121214] border border-[#38383c] rounded-lg p-2 text-white text-xs focus:outline-none"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]",children:[h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("label",{className:"text-[10px] text-gray-400 font-medium",children:"Modelo de IA"}),h.jsxs("select",{value:c.model,onChange:L=>f({...c,model:L.target.value}),className:"bg-[#121214] text-white text-[11px] p-2 rounded-lg border border-[#38383c] focus:outline-none font-medium",children:[h.jsx("option",{value:"gemini-3.1-flash-image",children:"Gemini 3.1 Flash Image (Recomendado)"}),h.jsx("option",{value:"gemini-3.1-flash-lite-image",children:"Gemini Flash Lite (Rápido)"}),h.jsx("option",{value:"gemini-3.6-flash",children:"Gemini 3.6 Flash"})]})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("label",{className:"text-[10px] text-gray-400 font-medium",children:"Guidance Scale"}),h.jsx("input",{type:"number",value:c.guidanceScale,step:"0.5",min:"1",max:"20",onChange:L=>f({...c,guidanceScale:parseFloat(L.target.value)||7.5}),className:"bg-[#121214] text-white text-[11px] p-2 rounded-lg border border-[#38383c] font-mono"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 bg-[#18181a] rounded-xl border border-[#2d2d30]",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-xs font-semibold text-white",children:"Estampa Padrão Repetível (Seamless)"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Ideal para tecidos, camisetas e copos 360°"})]}),h.jsx("input",{type:"checkbox",checked:c.seamlessPattern,onChange:L=>f({...c,seamlessPattern:L.target.checked}),className:"w-4 h-4 accent-purple-500 cursor-pointer"})]}),h.jsxs("button",{disabled:p,onClick:y,className:"py-3 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:to-sky-500 text-white font-bold rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50",children:[h.jsx(zi,{className:`w-4 h-4 ${p?"animate-spin":""}`}),h.jsx("span",{children:p?"Gerando com Gemini IA...":"GERAR ESTAMPA POR IA"})]}),m&&h.jsxs("div",{className:"p-2.5 bg-sky-950/40 border border-sky-500/30 rounded-lg text-sky-300 text-[11px] flex items-center gap-2",children:[h.jsx(Rv,{className:"w-4 h-4 text-sky-400 shrink-0"}),h.jsx("span",{children:m})]}),_&&h.jsxs("div",{className:"p-2.5 bg-rose-950/40 border border-rose-500/30 rounded-lg text-rose-300 text-[11px] flex items-center gap-2",children:[h.jsx(ny,{className:"w-4 h-4 text-rose-400 shrink-0"}),h.jsx("span",{children:_})]}),h.jsxs("div",{className:"flex flex-col gap-2 pt-3 border-t border-[#2d2d30]",children:[h.jsxs("span",{className:"text-[10px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1",children:[h.jsx(ol,{className:"w-3.5 h-3.5"}),"Ferramentas Rápidas de IA na Camada"]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{disabled:!s||p,onClick:()=>i("remove_bg"),className:"p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors",children:[h.jsx(iS,{className:"w-4 h-4 text-emerald-400 shrink-0"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-[11px] text-white",children:"Remover Fundo"}),h.jsx("span",{className:"text-[9px] text-gray-400",children:"Recorte transparente"})]})]}),h.jsxs("button",{disabled:!s||p,onClick:()=>i("vectorize"),className:"p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors",children:[h.jsx(zi,{className:"w-4 h-4 text-amber-400 shrink-0"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-[11px] text-white",children:"Vetorizar IA"}),h.jsx("span",{className:"text-[9px] text-gray-400",children:"Converter em SVG"})]})]}),h.jsxs("button",{disabled:!s||p,onClick:()=>i("upscale"),className:"p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors",children:[h.jsx(hu,{className:"w-4 h-4 text-sky-400 shrink-0"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-[11px] text-white",children:"Upscale 300 DPI"}),h.jsx("span",{className:"text-[9px] text-gray-400",children:"Nitidez para impressão"})]})]}),h.jsxs("button",{disabled:!s||p,onClick:()=>i("color_replace"),className:"p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors",children:[h.jsx(Ky,{className:"w-4 h-4 text-purple-400 shrink-0"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-[11px] text-white",children:"Substituir Cores"}),h.jsx("span",{className:"text-[9px] text-gray-400",children:"Trocar tons na estampa"})]})]})]})]})]})},vw=({isOpen:r,onClose:e,selectedProduct:i,onSelectProduct:s})=>{const[l,c]=Be.useState(""),[f,p]=Be.useState("Todos");if(!r)return null;const g=["Todos","Canecas","Camisetas","Garrafas","Copos","Mouse Pads","Ecobags","Bonés","Azulejos","Almofadas","Quebra-cabeças","Capinhas","Brindes personalizados"],m=el.filter(v=>{const _=v.name.toLowerCase().includes(l.toLowerCase())||v.category.toLowerCase().includes(l.toLowerCase()),x=f==="Todos"||v.category===f;return _&&x});return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none",children:h.jsxs("div",{className:"bg-[#1e1e20] border border-[#38383c] rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-gray-200",children:[h.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-[#2d2d30] bg-[#18181a]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(ks,{className:"w-5 h-5 text-sky-400"}),h.jsx("span",{className:"font-bold text-lg text-white",children:"BIBLIOTECA DE PRODUTOS SUBLIMÁTICO"})]}),h.jsx("button",{onClick:e,className:"p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors",children:h.jsx(tl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"p-4 border-b border-[#2d2d30] flex flex-col sm:flex-row items-center gap-3 bg-[#141415]",children:[h.jsxs("div",{className:"relative flex-1 w-full",children:[h.jsx(kv,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),h.jsx("input",{type:"text",value:l,onChange:v=>c(v.target.value),placeholder:"Buscar produtos (caneca, camiseta, garrafa, mousepad...)...",className:"w-full bg-[#1e1e20] border border-[#38383c] focus:border-sky-500 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0",children:g.slice(0,6).map(v=>h.jsx("button",{onClick:()=>p(v),className:`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${f===v?"bg-sky-600 text-white shadow":"bg-[#1e1e20] text-gray-400 hover:text-white hover:bg-white/5"}`,children:v},v))})]}),h.jsx("div",{className:"p-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1",children:m.map(v=>{const _=i.id===v.id;return h.jsxs("div",{onClick:()=>{s(v),e()},className:`flex flex-col p-3 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${_?"bg-sky-600/20 border-sky-500 ring-2 ring-sky-500/50 text-white":"bg-[#18181a] border-[#2d2d30] hover:border-sky-500/40 text-gray-300"}`,children:[h.jsxs("div",{className:"relative w-full h-36 bg-[#121214] rounded-lg overflow-hidden mb-3 border border-white/5 flex items-center justify-center",children:[h.jsx("img",{src:v.samplePrints[0],alt:v.name,className:"w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"}),h.jsx("span",{className:"absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-md text-[10px] text-sky-300 font-mono rounded",children:v.printAspect})]}),h.jsxs("div",{className:"flex items-center justify-between font-bold text-sm text-white mb-1",children:[h.jsx("span",{children:v.name}),_&&h.jsx(Rv,{className:"w-4 h-4 text-sky-400"})]}),h.jsx("span",{className:"text-[11px] text-gray-400 mb-2",children:v.description}),h.jsxs("div",{className:"mt-auto flex items-center justify-between text-[10px] text-gray-500 font-mono pt-2 border-t border-[#2d2d30]",children:[h.jsx("span",{children:v.material}),h.jsx("span",{className:"text-sky-400 font-semibold",children:v.category})]})]},v.id)})})]})})},_w=({isOpen:r,onClose:e,product:i,canvasElement:s,mirrorSublimation:l})=>{const[c,f]=Be.useState({format:"png",colorSpace:"CMYK",dpi:300,transparentBg:!0,mirrorHorizontal:l,physicalWidthCm:i.defaultWidthCm,physicalHeightCm:i.defaultHeightCm}),[p,g]=Be.useState(!1);if(!r)return null;const m=Math.round(c.physicalWidthCm/2.54*c.dpi),v=Math.round(c.physicalHeightCm/2.54*c.dpi),_=()=>{s&&(g(!0),setTimeout(()=>{const x=document.createElement("canvas");x.width=m,x.height=v;const b=x.getContext("2d");b&&(!c.transparentBg&&c.format!=="png"&&(b.fillStyle="#ffffff",b.fillRect(0,0,x.width,x.height)),b.save(),c.mirrorHorizontal&&(b.translate(x.width,0),b.scale(-1,1)),b.drawImage(s,0,0,x.width,x.height),b.restore());const A=document.createElement("a");A.download=`Estampa_${i.name.replace(/\s+/g,"_")}_300DPI.${c.format}`,A.href=x.toDataURL(`image/${c.format==="jpg"?"jpeg":"png"}`),A.click(),g(!1),e()},500))};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none",children:h.jsxs("div",{className:"bg-[#1e1e20] border border-[#38383c] rounded-2xl w-full max-w-lg flex flex-col shadow-2xl overflow-hidden text-gray-200",children:[h.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-[#2d2d30] bg-[#18181a]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Yy,{className:"w-5 h-5 text-sky-400"}),h.jsx("span",{className:"font-bold text-base text-white",children:"EXPORTAR PARA SUBLIMAÇÃO (300 DPI)"})]}),h.jsx("button",{onClick:e,className:"p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white",children:h.jsx(tl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"p-4 flex flex-col gap-4 text-xs",children:[h.jsxs("div",{className:"flex flex-col gap-1.5",children:[h.jsx("label",{className:"font-semibold text-gray-300",children:"Formato do Arquivo de Impressão"}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:["png","jpg","pdf","svg","psd","tiff"].map(x=>h.jsxs("button",{onClick:()=>f({...c,format:x}),className:`py-2 px-3 rounded-lg border font-mono font-bold uppercase transition-all ${c.format===x?"bg-sky-600 border-sky-400 text-white shadow":"bg-[#18181a] border-[#38383c] text-gray-400 hover:text-white"}`,children:[".",x]},x))})]}),h.jsxs("div",{className:"flex flex-col gap-1.5",children:[h.jsx("label",{className:"font-semibold text-gray-300",children:"Perfil de Cor da Impressora Sublimática"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{onClick:()=>f({...c,colorSpace:"CMYK"}),className:`p-2.5 rounded-xl border text-left flex flex-col transition-all ${c.colorSpace==="CMYK"?"bg-sky-600/20 border-sky-500 text-white":"bg-[#18181a] border-[#38383c] text-gray-400"}`,children:[h.jsx("span",{className:"font-bold text-sky-400",children:"Perfil CMYK (Sublimático)"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Coated Fogra39 / Tintas Epson & InkTec"})]}),h.jsxs("button",{onClick:()=>f({...c,colorSpace:"RGB"}),className:`p-2.5 rounded-xl border text-left flex flex-col transition-all ${c.colorSpace==="RGB"?"bg-sky-600/20 border-sky-500 text-white":"bg-[#18181a] border-[#38383c] text-gray-400"}`,children:[h.jsx("span",{className:"font-bold text-white",children:"sRGB Standard"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Monitores e Web Display"})]})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 bg-[#18181a] rounded-xl border border-[#2d2d30]",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-white",children:"Resolução de Impressão"}),h.jsxs("span",{className:"text-[10px] text-sky-400 font-mono",children:[m," x ",v," Pixels (",c.physicalWidthCm," x ",c.physicalHeightCm," cm)"]})]}),h.jsxs("select",{value:c.dpi,onChange:x=>f({...c,dpi:parseInt(x.target.value)}),className:"bg-[#121214] text-white font-mono p-2 rounded-lg border border-[#38383c]",children:[h.jsx("option",{value:"300",children:"300 DPI (Qualidade Profissional)"}),h.jsx("option",{value:"150",children:"150 DPI (Médio)"}),h.jsx("option",{value:"72",children:"72 DPI (Rascunho)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Pv,{className:"w-5 h-5 text-amber-400"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-semibold text-amber-300",children:"Espelhar Estampa Horizontalmente"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Obrigatório para transferência em papel sublimático na Prensa Térmica!"})]})]}),h.jsx("input",{type:"checkbox",checked:c.mirrorHorizontal,onChange:x=>f({...c,mirrorHorizontal:x.target.checked}),className:"w-4 h-4 accent-amber-500 cursor-pointer"})]}),h.jsxs("button",{disabled:p,onClick:_,className:"py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50",children:[h.jsx(Uv,{className:`w-4 h-4 ${p?"animate-bounce":""}`}),h.jsx("span",{children:p?"Processando Imagem 300 DPI...":"BAIXAR ARQUIVO DE IMPRESSÃO"})]})]})]})})};function bw(){const[r,e]=Be.useState(el[0]),[i,s]=Be.useState("Arte Sublimação - Caneca 325ml"),[l,c]=Be.useState("split"),[f,p]=Be.useState(!1),[g,m]=Be.useState("dark"),[v,_]=Be.useState([{id:"layer-bg-sample",name:"Fundo Sublimático Tropical",type:"image",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:0,y:0,width:1180,height:560,rotation:0,content:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80"},{id:"layer-text-title",name:"Texto Personalizado",type:"text",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:290,y:180,width:600,height:120,rotation:0,content:"MELHOR MÃE DO MUNDO",color:"#0f172a",fontSize:48,fontFamily:"Impact",fontWeight:"bold",textAlign:"center",textCurved:!0,curveRadius:140},{id:"layer-badge-shape",name:"Selo de Qualidade",type:"shape",shapeType:"star",visible:!0,locked:!1,opacity:90,blendMode:"normal",x:920,y:120,width:160,height:160,rotation:12,content:"",color:"#f59e0b"}]),[x,b]=Be.useState("layer-text-title"),[A,N]=Be.useState("select"),[M,y]=Be.useState("rectangle"),[k,L]=Be.useState("#38bdf8"),[w,I]=Be.useState(12),[U,B]=Be.useState(!1),[T,z]=Be.useState(!0),[G,V]=Be.useState(!0),[q,fe]=Be.useState(1),[W,P]=Be.useState("3d"),[O,H]=Be.useState(!1),[$,re]=Be.useState(!1),[me,D]=Be.useState(!1),[Q,Ee]=Be.useState(!1),[ne,J]=Be.useState(!1),Y=se=>{let Te=[];se==="sample"&&(Te=[{id:"layer-bg-"+Date.now(),name:"Fundo Neutro",type:"shape",shapeType:"rectangle",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:0,y:0,width:r.printWidthMm?r.printWidthMm*5:1e3,height:r.printHeightMm?r.printHeightMm*5:500,rotation:0,content:"",color:"#f8fafc"},{id:"layer-text-"+Date.now(),name:"Texto do Projeto",type:"text",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:200,y:150,width:500,height:100,rotation:0,content:"MEU NOVO PROJETO",color:k||"#38bdf8",fontSize:44,fontFamily:"Impact",fontWeight:"bold",textAlign:"center"}]),_(Te),b(Te.length>0?Te[Te.length-1].id:null);const we="Novo Projeto - "+r.name;s(we);const Ze={id:"hist-new-"+Date.now(),description:"Criado "+(se==="blank"?"Projeto Limpo":"Projeto com Modelo"),toolName:"Novo Projeto",timestamp:new Date,layers:Te};Yt([Ze]),Dt(0),pt(X=>X+1),Ee(!1)},ge=Be.useRef(null),xe=Be.useRef(null),De=()=>{var se;(se=ge.current)==null||se.click()},ve=()=>{var se;(se=xe.current)==null||se.click()},Fe=se=>{var Ze;const Te=(Ze=se.target.files)==null?void 0:Ze[0];if(!Te)return;const we=new FileReader;we.onload=X=>{var Me;const Ue=(Me=X.target)==null?void 0:Me.result;if(Ue){const Le=Te.name.replace(/\.[^/.]+$/,""),ke="layer-stamp-"+Date.now(),Ne={id:ke,name:"Estampa: "+Le,type:"image",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:100,y:60,width:500,height:380,rotation:0,content:Ue},$e=[...v,Ne];_($e),b(ke),zt("Incluiu Estampa: "+Le,"Incluir Estampa",$e),pt(Ye=>Ye+1)}},we.readAsDataURL(Te),se.target.value=""},Oe=se=>{var Ze;const Te=(Ze=se.target.files)==null?void 0:Ze[0];if(!Te)return;if(Te.type.startsWith("image/")){Fe(se);return}const we=new FileReader;we.onload=X=>{var Ue;try{const Me=(Ue=X.target)==null?void 0:Ue.result,Le=JSON.parse(Me);if(Le&&Array.isArray(Le.layers)){if(_(Le.layers),Le.projectName&&s(Le.projectName),Le.product){const ke=el.find(Ne=>Ne.id===Le.product.id)||Le.product;e(ke)}typeof Le.mirrorSublimation=="boolean"&&B(Le.mirrorSublimation),Le.layers.length>0&&b(Le.layers[Le.layers.length-1].id),zt("Abriu Projeto "+(Le.projectName||Te.name),"Abrir",Le.layers),pt(ke=>ke+1)}else alert("Formato de arquivo de projeto inválido. Selecione um arquivo .sublimation ou .json válido.")}catch(Me){console.error("Erro ao abrir projeto:",Me),alert('Não foi possível ler o arquivo. Se for uma imagem de estampa (PNG/JPG), selecione a opção "Incluir Estampa".')}},we.readAsText(Te),se.target.value=""},Pe=()=>{const se={version:"1.0",projectName:i,product:r,layers:v,mirrorSublimation:U,createdAt:new Date().toISOString()},Te="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(se,null,2)),we=document.createElement("a");we.setAttribute("href",Te),we.setAttribute("download",`${i.toLowerCase().replace(/\s+/g,"_")}_layout.sublimation`),document.body.appendChild(we),we.click(),we.remove()},[Je,nt]=Be.useState(null),[ut,pt]=Be.useState(0),[Ct,Yt]=Be.useState([{id:"hist-init",description:"Criado Projeto "+el[0].name,toolName:"Novo Projeto",timestamp:new Date,layers:[...v]}]),[Pt,Dt]=Be.useState(0),zt=(se,Te,we)=>{const Ze={id:"hist-"+Date.now(),description:se,toolName:Te,timestamp:new Date,layers:[...we]},X=[...Ct.slice(0,Pt+1),Ze];Yt(X),Dt(X.length-1)},ee=()=>{if(Pt>0){const se=Pt-1;Dt(se),_([...Ct[se].layers]),pt(Te=>Te+1)}},Ft=()=>{if(Pt<Ct.length-1){const se=Pt+1;Dt(se),_([...Ct[se].layers]),pt(Te=>Te+1)}},Rt=se=>{Dt(se),_([...Ct[se].layers]),pt(Te=>Te+1)},F=se=>{const Te=v.map(we=>we.id===se.id?se:we);_(Te),pt(we=>we+1)},E=(se,Te)=>{const we=Te||M,Ze="layer-"+Date.now(),X={id:Ze,name:se==="text"?"Novo Texto":se==="shape"?`Forma ${we}`:"Nova Imagem",type:se,visible:!0,locked:!1,opacity:100,blendMode:"normal",x:320,y:180,width:se==="text"?380:200,height:se==="text"?80:200,rotation:0,content:se==="text"?"SEU TEXTO AQUI":"",color:k,shapeType:we,fontSize:36,fontFamily:"Impact",fontWeight:"bold"},Ue=[...v,X];_(Ue),b(Ze),zt(`Adicionou ${X.name}`,se,Ue),pt(Me=>Me+1)},ae=se=>{if(N(se),["vectorize","remove_bg","upscale","generative_fill","object_replace"].includes(se)){P("ai"),H(!1),x&&["remove_bg","vectorize","upscale"].includes(se)&&Ie(se);return}if(se==="text"){E("text");return}if(se==="shapes"){E("shape",M);return}if(se==="stamp"){x&&ze(x);return}if(se==="crop"){z(Te=>!Te),V(Te=>!Te);return}if(se==="masks"){if(x){const Te=v.find(we=>we.id===x);Te&&Te.type==="text"&&F({...Te,isCurved:!Te.isCurved,curveRadius:Te.curveRadius||120})}return}if(se==="smart_object"){E("shape","badge");return}},de=se=>{y(se),E("shape",se)},be=se=>{const Te=v.filter(we=>we.id!==se);_(Te),x===se&&b(null),zt("Excluiu camada","Excluir",Te),pt(we=>we+1)};Be.useEffect(()=>{const se=Te=>{const we=document.activeElement;we&&(we.tagName==="INPUT"||we.tagName==="TEXTAREA"||we.tagName==="SELECT"||we.isContentEditable)||(Te.key==="Delete"||Te.key==="Backspace")&&x&&(Te.preventDefault(),be(x))};return window.addEventListener("keydown",se),()=>window.removeEventListener("keydown",se)},[x,v]);const ze=se=>{const Te=v.find(X=>X.id===se);if(!Te)return;const we={...Te,id:"layer-"+Date.now(),name:Te.name+" (Cópia)",x:Te.x+20,y:Te.y+20},Ze=[...v,we];_(Ze),b(we.id),zt("Duplicou camada "+Te.name,"Duplicar",Ze),pt(X=>X+1)},He=se=>{const Te=v.map(we=>we.id===se?{...we,visible:!we.visible}:we);_(Te),pt(we=>we+1)},ye=se=>{const Te=v.map(we=>we.id===se?{...we,locked:!we.locked}:we);_(Te)},Se=(se,Te)=>{const we="layer-ai-"+Date.now(),Ze={id:we,name:"Estampa IA: "+Te,type:"image",visible:!0,locked:!1,opacity:100,blendMode:"normal",x:100,y:50,width:600,height:400,rotation:0,content:se},X=[...v,Ze];_(X),b(we),zt("Gerou estampa por IA: "+Te,"IA Studio",X),pt(Ue=>Ue+1)},Ie=async se=>{const Te=v.find(we=>we.id===x);if(!(!Te||!Te.content))try{const Ze=await(await fetch("/api/gemini/edit-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageBase64:Te.content,action:se})})).json();if(Ze.imageUrl){const X=v.map(Ue=>Ue.id===Te.id?{...Ue,content:Ze.imageUrl}:Ue);_(X),zt(`Aplica IA (${se}) na camada`,"IA Tool",X),pt(Ue=>Ue+1)}}catch(we){console.error("Error applying AI tool:",we)}},We=se=>{if(se==="centered_logo"){const Te=v.map(we=>we.id===x?{...we,x:400,y:150,width:300,height:300}:we);_(Te),pt(we=>we+1)}},Ge=v.find(se=>se.id===x)||null;return h.jsxs("div",{className:`flex flex-col w-screen h-screen overflow-hidden select-none font-sans transition-colors ${g==="light"?"bg-slate-100 text-slate-900 light":"bg-[#141415] text-white dark"}`,children:[h.jsx("input",{ref:ge,type:"file",accept:".sublimation,.json,image/*",onChange:Oe,className:"hidden"}),h.jsx("input",{ref:xe,type:"file",accept:"image/*,.svg",onChange:Fe,className:"hidden"}),h.jsx(RS,{currentProduct:r,onOpenProductLibrary:()=>re(!0),onUndo:ee,onRedo:Ft,canUndo:Pt>0,canRedo:Pt<Ct.length-1,onOpenExportModal:()=>D(!0),onOpenAIPanel:()=>{P("ai"),H(!1)},mirrorSublimation:U,onToggleMirrorSublimation:()=>B(!U),showGrid:T,onToggleGrid:()=>z(!T),showRulers:G,onToggleRulers:()=>V(!G),zoomLevel:q,onZoomChange:fe,workspaceViewMode:l,onChangeWorkspaceViewMode:c,theme:g,onToggleTheme:()=>m(se=>se==="dark"?"light":"dark"),onNewProject:()=>Ee(!0),onOpenProject:De,onIncludeStamp:ve,onSaveLayout:Pe,onOpenSettings:()=>J(!0),projectName:i,onChangeProjectName:s}),h.jsxs("div",{className:"flex flex-1 w-full h-[calc(100vh-2.75rem)] overflow-hidden relative",children:[h.jsx(NS,{activeTool:A,onSelectTool:ae,selectedShape:M,onSelectShape:de,activeColor:k,onChangeColor:L,brushSize:w,onChangeBrushSize:I,onAddLayer:E,currentProduct:r,onSelectProduct:e,layers:v,activeLayerId:x,onSelectLayer:b,onUpdateLayer:F,onDeleteLayer:be,onDuplicateLayer:ze,onAddAIGeneratedImage:Se,onOpenAIPanel:()=>{P("ai"),H(!1)},theme:g}),h.jsx("div",{className:"flex-1 h-full flex relative overflow-hidden",children:l==="mockup"?h.jsx("div",{className:`w-full h-full p-3 transition-colors ${g==="light"?"bg-slate-200":"bg-[#121214]"}`,children:h.jsx(ph,{product:r,canvasElement:Je,canvasVersion:ut})}):h.jsxs("div",{className:"relative w-full h-full flex-1 flex",children:[h.jsx(DS,{product:r,layers:v,activeLayerId:x,onSelectLayer:b,onUpdateLayer:F,onDeleteLayer:be,onDuplicateLayer:ze,onChangeColor:L,activeTool:A,selectedShape:M,activeColor:k,brushSize:w,mirrorSublimation:U,showGrid:T,showRulers:G,onCanvasRendered:se=>nt(se),theme:g}),l==="canvas"&&f&&h.jsxs("div",{className:`absolute bottom-16 right-6 w-72 h-56 border rounded-2xl shadow-2xl overflow-hidden z-30 flex flex-col backdrop-blur-md transition-all hover:scale-105 group ${g==="light"?"bg-white/95 border-slate-300 text-slate-800":"bg-[#18181c]/95 border-[#38383c] text-gray-300"}`,children:[h.jsxs("div",{className:`flex items-center justify-between px-3 py-1.5 border-b text-[11px] ${g==="light"?"bg-slate-100 border-slate-300 text-slate-700":"bg-[#222225] border-[#38383c] text-gray-300"}`,children:[h.jsxs("span",{className:"font-semibold text-purple-600 flex items-center gap-1.5",children:[h.jsx(ks,{className:"w-3.5 h-3.5"}),"Preview 3D"]}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("button",{onClick:()=>c("split"),className:"px-2 py-0.5 text-[10px] bg-purple-600 hover:bg-purple-500 text-white rounded font-medium cursor-pointer",title:"Expandir para Visualização Dividida",children:"Expandir"}),h.jsx("button",{onClick:()=>p(!1),className:`p-1 rounded cursor-pointer ${g==="light"?"hover:bg-slate-200 text-slate-500 hover:text-slate-900":"hover:bg-white/10 text-gray-400 hover:text-white"}`,title:"Fechar / Remover Canvas 3D",children:h.jsx(tl,{className:"w-3.5 h-3.5"})})]})]}),h.jsx("div",{className:"flex-1 w-full h-full",children:h.jsx(ph,{product:r,canvasElement:Je,canvasVersion:ut})})]})]})}),l!=="canvas"&&h.jsxs("aside",{className:`flex border-l transition-all duration-300 z-30 ${g==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#1e1e20] border-[#2d2d30] text-gray-200"} ${O?"w-10":"w-80 md:w-96"}`,children:[h.jsxs("div",{className:`w-10 border-r flex flex-col items-center py-2 gap-2 shrink-0 ${g==="light"?"bg-slate-100 border-slate-200 text-slate-600":"bg-[#18181a] border-[#2d2d30] text-gray-400"}`,children:[h.jsx("button",{onClick:()=>H(!O),className:`p-2 rounded-lg mb-2 cursor-pointer ${g==="light"?"hover:bg-slate-200 hover:text-slate-900":"hover:text-white hover:bg-white/5"}`,title:O?"Expandir Painel":"Recolher Painel",children:O?h.jsx(Dv,{className:"w-4 h-4 text-purple-600"}):h.jsx(Jb,{className:"w-4 h-4 text-purple-600"})}),h.jsx("button",{onClick:()=>{P("3d"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${W==="3d"&&!O?"bg-purple-600 text-white shadow":g==="light"?"hover:text-slate-900 hover:bg-slate-200":"hover:text-white hover:bg-white/5"}`,title:"Miniatura 3D Interativa",children:h.jsx(ks,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>{P("properties"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${W==="properties"&&!O?"bg-purple-600 text-white shadow":g==="light"?"hover:text-slate-900 hover:bg-slate-200":"hover:text-white hover:bg-white/5"}`,title:"Propriedades do Elemento",children:h.jsx(mh,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>{P("layers"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${W==="layers"&&!O?"bg-purple-600 text-white shadow":g==="light"?"hover:text-slate-900 hover:bg-slate-200":"hover:text-white hover:bg-white/5"}`,title:"Gerenciador de Camadas",children:h.jsx(op,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>{P("history"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${W==="history"&&!O?"bg-purple-600 text-white shadow":g==="light"?"hover:text-slate-900 hover:bg-slate-200":"hover:text-white hover:bg-white/5"}`,title:"Histórico de Ações",children:h.jsx(Iv,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>{P("ai"),H(!1)},className:`p-2 rounded-lg transition-colors relative cursor-pointer ${W==="ai"&&!O?"bg-purple-600 text-white shadow":"text-purple-600 hover:text-purple-800 hover:bg-purple-100"}`,title:"Estúdio Generativo por IA",children:h.jsx(zi,{className:"w-4 h-4 animate-pulse"})})]}),!O&&h.jsxs("div",{className:"flex-1 h-full overflow-hidden flex flex-col",children:[W==="3d"&&h.jsx("div",{className:"w-full h-full p-2 flex flex-col",children:h.jsx(ph,{product:r,canvasElement:Je,canvasVersion:ut})}),W==="properties"&&h.jsx(gw,{activeLayer:Ge,onUpdateLayer:F,product:r,onApplyPresetTemplate:We,onDeleteLayer:be,onDuplicateLayer:ze,theme:g}),W==="layers"&&h.jsx(pw,{layers:v,activeLayerId:x,onSelectLayer:b,onAddLayer:E,onDeleteLayer:be,onDuplicateLayer:ze,onToggleVisibility:He,onToggleLock:ye,onUpdateLayer:F,onReorderLayers:se=>{_(se),pt(Te=>Te+1)},theme:g}),W==="history"&&h.jsx(mw,{historySteps:Ct,currentHistoryIndex:Pt,onJumpToHistoryStep:Rt,theme:g}),W==="ai"&&h.jsx(xw,{product:r,onAddAIGeneratedImageToCanvas:Se,onApplyAIToolToActiveLayer:Ie,activeLayer:Ge,theme:g})]})]})]}),h.jsx(vw,{isOpen:$,onClose:()=>re(!1),selectedProduct:r,onSelectProduct:se=>{e(se),zt("Alterou produto para "+se.name,"Produto",v),pt(Te=>Te+1)}}),h.jsx(_w,{isOpen:me,onClose:()=>D(!1),product:r,canvasElement:Je,mirrorSublimation:U}),Q&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn",children:h.jsxs("div",{className:`w-full max-w-lg rounded-2xl border p-6 shadow-2xl relative transition-all ${g==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#18181b] border-[#2e2e33] text-gray-100"}`,children:[h.jsx("button",{onClick:()=>Ee(!1),className:`absolute top-4 right-4 p-1.5 rounded-lg cursor-pointer ${g==="light"?"hover:bg-slate-100 text-slate-500":"hover:bg-white/10 text-gray-400"}`,children:h.jsx(tl,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx("div",{className:"p-3 bg-purple-600/20 text-purple-600 rounded-xl",children:h.jsx(zv,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold",children:"Criar Novo Projeto"}),h.jsx("p",{className:`text-xs ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Escolha como deseja iniciar sua nova estampa sublimática."})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 my-6",children:[h.jsxs("button",{onClick:()=>Y("blank"),className:`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer hover:border-purple-500 group ${g==="light"?"bg-slate-50 border-slate-200 hover:bg-purple-50":"bg-[#222226] border-[#303036] hover:bg-[#282338]"}`,children:[h.jsx("div",{className:"p-2 rounded-lg bg-purple-600 text-white w-fit group-hover:scale-110 transition-transform",children:h.jsx(_y,{className:"w-5 h-5"})}),h.jsx("span",{className:"font-semibold text-sm",children:"Projeto em Branco"}),h.jsx("span",{className:`text-xs ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Canvas completamente limpo para você criar do zero."})]}),h.jsxs("button",{onClick:()=>Y("sample"),className:`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer hover:border-purple-500 group ${g==="light"?"bg-slate-50 border-slate-200 hover:bg-purple-50":"bg-[#222226] border-[#303036] hover:bg-[#282338]"}`,children:[h.jsx("div",{className:"p-2 rounded-lg bg-indigo-600 text-white w-fit group-hover:scale-110 transition-transform",children:h.jsx(zi,{className:"w-5 h-5"})}),h.jsx("span",{className:"font-semibold text-sm",children:"Com Modelo Base"}),h.jsx("span",{className:`text-xs ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Inclui fundo guia e camada de texto inicial para personalizar."})]})]}),h.jsx("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-slate-200 dark:border-[#2e2e33]",children:h.jsx("button",{onClick:()=>Ee(!1),className:`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer ${g==="light"?"bg-slate-200 hover:bg-slate-300 text-slate-700":"bg-[#28282d] hover:bg-[#34343a] text-gray-300"}`,children:"Cancelar"})})]})}),ne&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn",children:h.jsxs("div",{className:`w-full max-w-md rounded-2xl border p-6 shadow-2xl relative transition-all ${g==="light"?"bg-white border-slate-200 text-slate-800":"bg-[#18181b] border-[#2e2e33] text-gray-100"}`,children:[h.jsx("button",{onClick:()=>J(!1),className:`absolute top-4 right-4 p-1.5 rounded-lg cursor-pointer ${g==="light"?"hover:bg-slate-100 text-slate-500":"hover:bg-white/10 text-gray-400"}`,children:h.jsx(tl,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[h.jsx("div",{className:"p-3 bg-purple-600/20 text-purple-600 rounded-xl",children:h.jsx(Gv,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold",children:"Configurações do Estúdio"}),h.jsx("p",{className:`text-xs ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Ajuste as preferências de trabalho e visualização."})]})]}),h.jsxs("div",{className:"space-y-4 my-4",children:[h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold text-xs",children:"Espelhamento Sublimático"}),h.jsx("div",{className:`text-[11px] ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Inverter horizontalmente para transferência em papel"})]}),h.jsx("input",{type:"checkbox",checked:U,onChange:se=>B(se.target.checked),className:"w-4 h-4 accent-purple-600 cursor-pointer"})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold text-xs",children:"Exibir Grade de Alinhamento"}),h.jsx("div",{className:`text-[11px] ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Linhas de auxílio no canvas 2D"})]}),h.jsx("input",{type:"checkbox",checked:T,onChange:se=>z(se.target.checked),className:"w-4 h-4 accent-purple-600 cursor-pointer"})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold text-xs",children:"Exibir Réguas em Milímetros"}),h.jsx("div",{className:`text-[11px] ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Réguas graduadas nas bordas do editor"})]}),h.jsx("input",{type:"checkbox",checked:G,onChange:se=>V(se.target.checked),className:"w-4 h-4 accent-purple-600 cursor-pointer"})]}),h.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold text-xs",children:"Tema da Interface"}),h.jsx("div",{className:`text-[11px] ${g==="light"?"text-slate-500":"text-gray-400"}`,children:"Alternar entre modo escuro e claro"})]}),h.jsx("button",{onClick:()=>m(se=>se==="dark"?"light":"dark"),className:"px-3 py-1 rounded-lg text-xs font-semibold bg-purple-600 text-white cursor-pointer hover:bg-purple-500",children:g==="dark"?"Modo Escuro":"Modo Claro"})]})]}),h.jsx("div",{className:"flex items-center justify-end pt-3 border-t border-slate-200 dark:border-[#2e2e33]",children:h.jsx("button",{onClick:()=>J(!1),className:"px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white cursor-pointer hover:bg-purple-500",children:"Concluído"})})]})})]})}window.addEventListener("error",r=>{r.message&&(r.message.includes("ResizeObserver")||r.message.includes("undelivered notifications"))&&(r.stopImmediatePropagation(),r.preventDefault())});Hb.createRoot(document.getElementById("root")).render(h.jsx(Be.StrictMode,{children:h.jsx(bw,{})}));
