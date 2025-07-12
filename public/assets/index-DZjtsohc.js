(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var bp={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE;function QR(){if(cE)return Su;cE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Su.Fragment=e,Su.jsx=t,Su.jsxs=t,Su}var hE;function $R(){return hE||(hE=1,bp.exports=QR()),bp.exports}var F=$R(),wp={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE;function WR(){if(fE)return Pe;fE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,Y={};function K(D,Z,ne){this.props=D,this.context=Z,this.refs=Y,this.updater=ne||O}K.prototype.isReactComponent={},K.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},K.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ce(){}ce.prototype=K.prototype;function re(D,Z,ne){this.props=D,this.context=Z,this.refs=Y,this.updater=ne||O}var oe=re.prototype=new ce;oe.constructor=re,V(oe,K.prototype),oe.isPureReactComponent=!0;var Ce=Array.isArray,pe={H:null,A:null,T:null,S:null,V:null},Ne=Object.prototype.hasOwnProperty;function k(D,Z,ne,te,_e,Le){return ne=Le.ref,{$$typeof:i,type:D,key:Z,ref:ne!==void 0?ne:null,props:Le}}function R(D,Z){return k(D.type,Z,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function M(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ne){return Z[ne]})}var P=/\/+/g;function N(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):Z.toString(36)}function A(){}function ke(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(A,A):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function De(D,Z,ne,te,_e){var Le=typeof D;(Le==="undefined"||Le==="boolean")&&(D=null);var Ae=!1;if(D===null)Ae=!0;else switch(Le){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(D.$$typeof){case i:case e:Ae=!0;break;case y:return Ae=D._init,De(Ae(D._payload),Z,ne,te,_e)}}if(Ae)return _e=_e(D),Ae=te===""?"."+N(D,0):te,Ce(_e)?(ne="",Ae!=null&&(ne=Ae.replace(P,"$&/")+"/"),De(_e,Z,ne,"",function(ft){return ft})):_e!=null&&(C(_e)&&(_e=R(_e,ne+(_e.key==null||D&&D.key===_e.key?"":(""+_e.key).replace(P,"$&/")+"/")+Ae)),Z.push(_e)),1;Ae=0;var Dt=te===""?".":te+":";if(Ce(D))for(var ht=0;ht<D.length;ht++)te=D[ht],Le=Dt+N(te,ht),Ae+=De(te,Z,ne,Le,_e);else if(ht=b(D),typeof ht=="function")for(D=ht.call(D),ht=0;!(te=D.next()).done;)te=te.value,Le=Dt+N(te,ht++),Ae+=De(te,Z,ne,Le,_e);else if(Le==="object"){if(typeof D.then=="function")return De(ke(D),Z,ne,te,_e);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function H(D,Z,ne){if(D==null)return D;var te=[],_e=0;return De(D,te,"","",function(Le){return Z.call(ne,Le,_e++)}),te}function ee(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(ne){(D._status===0||D._status===-1)&&(D._status=1,D._result=ne)},function(ne){(D._status===0||D._status===-1)&&(D._status=2,D._result=ne)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ue=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ge(){}return Pe.Children={map:H,forEach:function(D,Z,ne){H(D,function(){Z.apply(this,arguments)},ne)},count:function(D){var Z=0;return H(D,function(){Z++}),Z},toArray:function(D){return H(D,function(Z){return Z})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Pe.Component=K,Pe.Fragment=t,Pe.Profiler=a,Pe.PureComponent=re,Pe.StrictMode=s,Pe.Suspense=p,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pe,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return pe.H.useMemoCache(D)}},Pe.cache=function(D){return function(){return D.apply(null,arguments)}},Pe.cloneElement=function(D,Z,ne){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var te=V({},D.props),_e=D.key,Le=void 0;if(Z!=null)for(Ae in Z.ref!==void 0&&(Le=void 0),Z.key!==void 0&&(_e=""+Z.key),Z)!Ne.call(Z,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&Z.ref===void 0||(te[Ae]=Z[Ae]);var Ae=arguments.length-2;if(Ae===1)te.children=ne;else if(1<Ae){for(var Dt=Array(Ae),ht=0;ht<Ae;ht++)Dt[ht]=arguments[ht+2];te.children=Dt}return k(D.type,_e,void 0,void 0,Le,te)},Pe.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Pe.createElement=function(D,Z,ne){var te,_e={},Le=null;if(Z!=null)for(te in Z.key!==void 0&&(Le=""+Z.key),Z)Ne.call(Z,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(_e[te]=Z[te]);var Ae=arguments.length-2;if(Ae===1)_e.children=ne;else if(1<Ae){for(var Dt=Array(Ae),ht=0;ht<Ae;ht++)Dt[ht]=arguments[ht+2];_e.children=Dt}if(D&&D.defaultProps)for(te in Ae=D.defaultProps,Ae)_e[te]===void 0&&(_e[te]=Ae[te]);return k(D,Le,void 0,void 0,null,_e)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(D){return{$$typeof:d,render:D}},Pe.isValidElement=C,Pe.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ee}},Pe.memo=function(D,Z){return{$$typeof:g,type:D,compare:Z===void 0?null:Z}},Pe.startTransition=function(D){var Z=pe.T,ne={};pe.T=ne;try{var te=D(),_e=pe.S;_e!==null&&_e(ne,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Ge,ue)}catch(Le){ue(Le)}finally{pe.T=Z}},Pe.unstable_useCacheRefresh=function(){return pe.H.useCacheRefresh()},Pe.use=function(D){return pe.H.use(D)},Pe.useActionState=function(D,Z,ne){return pe.H.useActionState(D,Z,ne)},Pe.useCallback=function(D,Z){return pe.H.useCallback(D,Z)},Pe.useContext=function(D){return pe.H.useContext(D)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(D,Z){return pe.H.useDeferredValue(D,Z)},Pe.useEffect=function(D,Z,ne){var te=pe.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(D,Z)},Pe.useId=function(){return pe.H.useId()},Pe.useImperativeHandle=function(D,Z,ne){return pe.H.useImperativeHandle(D,Z,ne)},Pe.useInsertionEffect=function(D,Z){return pe.H.useInsertionEffect(D,Z)},Pe.useLayoutEffect=function(D,Z){return pe.H.useLayoutEffect(D,Z)},Pe.useMemo=function(D,Z){return pe.H.useMemo(D,Z)},Pe.useOptimistic=function(D,Z){return pe.H.useOptimistic(D,Z)},Pe.useReducer=function(D,Z,ne){return pe.H.useReducer(D,Z,ne)},Pe.useRef=function(D){return pe.H.useRef(D)},Pe.useState=function(D){return pe.H.useState(D)},Pe.useSyncExternalStore=function(D,Z,ne){return pe.H.useSyncExternalStore(D,Z,ne)},Pe.useTransition=function(){return pe.H.useTransition()},Pe.version="19.1.0",Pe}var dE;function kg(){return dE||(dE=1,wp.exports=WR()),wp.exports}var Ve=kg(),Ap={exports:{}},bu={},Rp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE;function XR(){return mE||(mE=1,function(i){function e(H,ee){var ue=H.length;H.push(ee);e:for(;0<ue;){var Ge=ue-1>>>1,D=H[Ge];if(0<a(D,ee))H[Ge]=ee,H[ue]=D,ue=Ge;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var ee=H[0],ue=H.pop();if(ue!==ee){H[0]=ue;e:for(var Ge=0,D=H.length,Z=D>>>1;Ge<Z;){var ne=2*(Ge+1)-1,te=H[ne],_e=ne+1,Le=H[_e];if(0>a(te,ue))_e<D&&0>a(Le,te)?(H[Ge]=Le,H[_e]=ue,Ge=_e):(H[Ge]=te,H[ne]=ue,Ge=ne);else if(_e<D&&0>a(Le,ue))H[Ge]=Le,H[_e]=ue,Ge=_e;else break e}}return ee}function a(H,ee){var ue=H.sortIndex-ee.sortIndex;return ue!==0?ue:H.id-ee.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,b=3,O=!1,V=!1,Y=!1,K=!1,ce=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;function Ce(H){for(var ee=t(g);ee!==null;){if(ee.callback===null)s(g);else if(ee.startTime<=H)s(g),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=t(g)}}function pe(H){if(Y=!1,Ce(H),!V)if(t(p)!==null)V=!0,Ne||(Ne=!0,N());else{var ee=t(g);ee!==null&&De(pe,ee.startTime-H)}}var Ne=!1,k=-1,R=5,C=-1;function M(){return K?!0:!(i.unstable_now()-C<R)}function P(){if(K=!1,Ne){var H=i.unstable_now();C=H;var ee=!0;try{e:{V=!1,Y&&(Y=!1,re(k),k=-1),O=!0;var ue=b;try{t:{for(Ce(H),T=t(p);T!==null&&!(T.expirationTime>H&&M());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,b=T.priorityLevel;var D=Ge(T.expirationTime<=H);if(H=i.unstable_now(),typeof D=="function"){T.callback=D,Ce(H),ee=!0;break t}T===t(p)&&s(p),Ce(H)}else s(p);T=t(p)}if(T!==null)ee=!0;else{var Z=t(g);Z!==null&&De(pe,Z.startTime-H),ee=!1}}break e}finally{T=null,b=ue,O=!1}ee=void 0}}finally{ee?N():Ne=!1}}}var N;if(typeof oe=="function")N=function(){oe(P)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,ke=A.port2;A.port1.onmessage=P,N=function(){ke.postMessage(null)}}else N=function(){ce(P,0)};function De(H,ee){k=ce(function(){H(i.unstable_now())},ee)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_next=function(H){switch(b){case 1:case 2:case 3:var ee=3;break;default:ee=b}var ue=b;b=ee;try{return H()}finally{b=ue}},i.unstable_requestPaint=function(){K=!0},i.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=b;b=H;try{return ee()}finally{b=ue}},i.unstable_scheduleCallback=function(H,ee,ue){var Ge=i.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ge+ue:Ge):ue=Ge,H){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ue+D,H={id:y++,callback:ee,priorityLevel:H,startTime:ue,expirationTime:D,sortIndex:-1},ue>Ge?(H.sortIndex=ue,e(g,H),t(p)===null&&H===t(g)&&(Y?(re(k),k=-1):Y=!0,De(pe,ue-Ge))):(H.sortIndex=D,e(p,H),V||O||(V=!0,Ne||(Ne=!0,N()))),H},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(H){var ee=b;return function(){var ue=b;b=ee;try{return H.apply(this,arguments)}finally{b=ue}}}}(Ip)),Ip}var pE;function JR(){return pE||(pE=1,Rp.exports=XR()),Rp.exports}var Cp={exports:{}},mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE;function ZR(){if(gE)return mn;gE=1;var i=kg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,mn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},mn.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},mn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},mn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},mn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:O}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:b,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},mn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},mn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},mn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},mn.requestFormReset=function(p){s.d.r(p)},mn.unstable_batchedUpdates=function(p,g){return p(g)},mn.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},mn.useFormStatus=function(){return c.H.useHostTransitionStatus()},mn.version="19.1.0",mn}var _E;function eI(){if(_E)return Cp.exports;_E=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Cp.exports=ZR(),Cp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE;function tI(){if(yE)return bu;yE=1;var i=JR(),e=kg(),t=eI();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(s(188))}function p(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),n;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),re=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function N(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var A=Symbol.for("react.client.reference");function ke(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===A?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case K:return"Profiler";case Y:return"StrictMode";case pe:return"Suspense";case Ne:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case O:return"Portal";case oe:return(n.displayName||"Context")+".Provider";case re:return(n._context.displayName||"Context")+".Consumer";case Ce:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case k:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case R:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}var De=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},Ge=[],D=-1;function Z(n){return{current:n}}function ne(n){0>D||(n.current=Ge[D],Ge[D]=null,D--)}function te(n,r){D++,Ge[D]=n.current,n.current=r}var _e=Z(null),Le=Z(null),Ae=Z(null),Dt=Z(null);function ht(n,r){switch(te(Ae,r),te(Le,n),te(_e,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Uv(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Uv(r),n=jv(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(_e),te(_e,n)}function ft(){ne(_e),ne(Le),ne(Ae)}function ui(n){n.memoizedState!==null&&te(Dt,n);var r=_e.current,o=jv(r,n.type);r!==o&&(te(Le,n),te(_e,o))}function Gn(n){Le.current===n&&(ne(_e),ne(Le)),Dt.current===n&&(ne(Dt),_u._currentValue=ue)}var Xi=Object.prototype.hasOwnProperty,Ji=i.unstable_scheduleCallback,Zi=i.unstable_cancelCallback,Fr=i.unstable_shouldYield,Ha=i.unstable_requestPaint,nn=i.unstable_now,gl=i.unstable_getCurrentPriorityLevel,qr=i.unstable_ImmediatePriority,Hr=i.unstable_UserBlockingPriority,Rt=i.unstable_NormalPriority,de=i.unstable_LowPriority,he=i.unstable_IdlePriority,Ee=i.log,ge=i.unstable_setDisableYieldValue,Ie=null,ve=null;function Me(n){if(typeof Ee=="function"&&ge(n),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(Ie,n)}catch{}}var Et=Math.clz32?Math.clz32:Bs,Rn=Math.log,es=Math.LN2;function Bs(n){return n>>>=0,n===0?32:31-(Rn(n)/es|0)|0}var Gr=256,Kr=4194304;function ci(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ga(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,m=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=ci(u):(E&=S,E!==0?f=ci(E):o||(o=S&~n,o!==0&&(f=ci(o))))):(S=u&~m,S!==0?f=ci(S):E!==0?f=ci(E):o||(o=u&~n,o!==0&&(f=ci(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Yr(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function _l(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yl(){var n=Gr;return Gr<<=1,(Gr&4194048)===0&&(Gr=256),n}function vl(){var n=Kr;return Kr<<=1,(Kr&62914560)===0&&(Kr=4194304),n}function ts(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function ns(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function El(n,r,o,u,f,m){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var S=n.entanglements,I=n.expirationTimes,z=n.hiddenUpdates;for(o=E&~o;0<o;){var Q=31-Et(o),X=1<<Q;S[Q]=0,I[Q]=-1;var B=z[Q];if(B!==null)for(z[Q]=null,Q=0;Q<B.length;Q++){var q=B[Q];q!==null&&(q.lane&=-536870913)}o&=~X}u!==0&&Si(n,u,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~r))}function Si(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-Et(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function Tl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Et(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function Fs(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ka(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function qs(){var n=ee.p;return n!==0?n:(n=window.event,n===void 0?32:sE(n.type))}function bc(n,r){var o=ee.p;try{return ee.p=n,r()}finally{ee.p=o}}var Tt=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Tt,Pt="__reactProps$"+Tt,Kn="__reactContainer$"+Tt,Sl="__reactEvents$"+Tt,Rd="__reactListeners$"+Tt,Hs="__reactHandles$"+Tt,wc="__reactResources$"+Tt,Qr="__reactMarker$"+Tt;function Gs(n){delete n[Ft],delete n[Pt],delete n[Sl],delete n[Rd],delete n[Hs]}function is(n){var r=n[Ft];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Kn]||o[Ft]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=qv(n);n!==null;){if(o=n[Ft])return o;n=qv(n)}return r}n=o,o=n.parentNode}return null}function bi(n){if(n=n[Ft]||n[Kn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function wi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Sn(n){var r=n[wc];return r||(r=n[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Ot(n){n[Qr]=!0}var bl=new Set,Ya={};function hi(n,r){ss(n,r),ss(n+"Capture",r)}function ss(n,r){for(Ya[n]=r,n=0;n<r.length;n++)bl.add(r[n])}var Ac=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rc={},$r={};function Ic(n){return Xi.call($r,n)?!0:Xi.call(Rc,n)?!1:Ac.test(n)?$r[n]=!0:(Rc[n]=!0,!1)}function Ks(n,r,o){if(Ic(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function Ai(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function sn(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var Wr,Cc;function rs(n){if(Wr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Wr=r&&r[1]||"",Cc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+n+Cc}var Qa=!1;function $a(n,r){if(!n||Qa)return"";Qa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(q){var B=q}Reflect.construct(n,[],X)}else{try{X.call()}catch(q){B=q}n.call(X.prototype)}}else{try{throw Error()}catch(q){B=q}(X=n())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(q){if(q&&B&&typeof q.stack=="string")return[q.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var I=E.split(`
`),z=S.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===z.length)for(u=I.length-1,f=z.length-1;1<=u&&0<=f&&I[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==z[f]){var Q=`
`+I[u].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=u&&0<=f);break}}}finally{Qa=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?rs(o):""}function wl(n){switch(n.tag){case 26:case 27:case 5:return rs(n.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 15:return $a(n.type,!1);case 11:return $a(n.type.render,!1);case 1:return $a(n.type,!0);case 31:return rs("Activity");default:return""}}function Wa(n){try{var r="";do r+=wl(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function bn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Al(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Id(n){var r=Al(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Xa(n){n._valueTracker||(n._valueTracker=Id(n))}function Rl(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Al(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Xr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Cd=/[\n"\\]/g;function Vt(n){return n.replace(Cd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function kn(n,r,o,u,f,m,E,S){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+bn(r)):n.value!==""+bn(r)&&(n.value=""+bn(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?Ys(n,E,bn(r)):o!=null?Ys(n,E,bn(o)):u!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+bn(S):n.removeAttribute("name")}function Jr(n,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+bn(o):"",r=r!=null?""+bn(r):o,S||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=S?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Ys(n,r,o){r==="number"&&Xr(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function as(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+bn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function at(n,r,o){if(r!=null&&(r=""+bn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+bn(o):""}function Zr(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(De(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=bn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Yn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nc(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||ea.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Il(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Nc(n,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Nc(n,m,r[m])}function Cl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ja(n){return Dd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var os=null;function Qn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ls=null,us=null;function Nl(n){var r=bi(n);if(r&&(n=r.stateNode)){var o=n[Pt]||null;e:switch(n=r.stateNode,r.type){case"input":if(kn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Vt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[Pt]||null;if(!f)throw Error(s(90));kn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&Rl(u)}break e;case"textarea":at(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&as(n,!!o.multiple,r,!1)}}}var Ri=!1;function Dc(n,r,o){if(Ri)return n(r,o);Ri=!0;try{var u=n(r);return u}finally{if(Ri=!1,(ls!==null||us!==null)&&(bh(),ls&&(r=ls,n=us,us=ls=null,Nl(r),n)))for(r=0;r<n.length;r++)Nl(n[r])}}function ta(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Pt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$n=!1;if(fi)try{var na={};Object.defineProperty(na,"passive",{get:function(){$n=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{$n=!1}var Ii=null,Qs=null,cs=null;function Dl(){if(cs)return cs;var n,r=Qs,o=r.length,u,f="value"in Ii?Ii.value:Ii.textContent,m=f.length;for(n=0;n<o&&r[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return cs=f.slice(n,1<u?1-u:void 0)}function Ci(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ni(){return!0}function Ol(){return!1}function Qt(n){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ni:Ol,this.isPropagationStopped=Ol,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),r}var tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=Qt(tt),ia=y({},tt,{view:0,detail:0}),Oc=Qt(ia),eo,to,Di,sa=y({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Di&&(Di&&n.type==="mousemove"?(eo=n.screenX-Di.screenX,to=n.screenY-Di.screenY):to=eo=0,Di=n),eo)},movementY:function(n){return"movementY"in n?n.movementY:to}}),Wn=Qt(sa),xc=y({},sa,{dataTransfer:0}),Od=Qt(xc),ra=y({},ia,{relatedTarget:0}),no=Qt(ra),xl=y({},tt,{animationName:0,elapsedTime:0,pseudoElement:0}),io=Qt(xl),Mc=y({},tt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),so=Qt(Mc),xd=y({},tt,{data:0}),Ml=Qt(xd),aa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Pc[n])?!!r[n]:!1}function oa(){return kl}var Vc=y({},ia,{key:function(n){if(n.key){var r=aa[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ci(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(n){return n.type==="keypress"?Ci(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ci(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ro=Qt(Vc),Lc=y({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=Qt(Lc),hs=y({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),Uc=Qt(hs),jc=y({},tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),zc=Qt(jc),Bc=y({},sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ao=Qt(Bc),wn=y({},tt,{newState:0,oldState:0}),Fc=Qt(wn),qc=[9,13,27,32],Oi=fi&&"CompositionEvent"in window,h=null;fi&&"documentMode"in document&&(h=document.documentMode);var _=fi&&"TextEvent"in window&&!h,v=fi&&(!Oi||h&&8<h&&11>=h),w=" ",U=!1;function G(n,r){switch(n){case"keyup":return qc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ye=!1;function qt(n,r){switch(n){case"compositionend":return ie(r);case"keypress":return r.which!==32?null:(U=!0,w);case"textInput":return n=r.data,n===w&&U?null:n;default:return null}}function Qe(n,r){if(Ye)return n==="compositionend"||!Oi&&G(n,r)?(n=Dl(),cs=Qs=Ii=null,Ye=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var $t={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ht(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!$t[n.type]:r==="textarea"}function fs(n,r,o,u){ls?us?us.push(u):us=[u]:ls=u,r=Nh(r,"onChange"),0<r.length&&(o=new Za("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var rn=null,xi=null;function Vl(n){Mv(n,0)}function Hc(n){var r=wi(n);if(Rl(r))return n}function ey(n,r){if(n==="change")return r}var ty=!1;if(fi){var Md;if(fi){var kd="oninput"in document;if(!kd){var ny=document.createElement("div");ny.setAttribute("oninput","return;"),kd=typeof ny.oninput=="function"}Md=kd}else Md=!1;ty=Md&&(!document.documentMode||9<document.documentMode)}function iy(){rn&&(rn.detachEvent("onpropertychange",sy),xi=rn=null)}function sy(n){if(n.propertyName==="value"&&Hc(xi)){var r=[];fs(r,xi,n,Qn(n)),Dc(Vl,r)}}function w1(n,r,o){n==="focusin"?(iy(),rn=r,xi=o,rn.attachEvent("onpropertychange",sy)):n==="focusout"&&iy()}function A1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hc(xi)}function R1(n,r){if(n==="click")return Hc(r)}function I1(n,r){if(n==="input"||n==="change")return Hc(r)}function C1(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:C1;function Ll(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Xi.call(r,f)||!Pn(n[f],r[f]))return!1}return!0}function ry(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ay(n,r){var o=ry(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ry(o)}}function oy(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?oy(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ly(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Xr(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Xr(n.document)}return r}function Pd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var N1=fi&&"documentMode"in document&&11>=document.documentMode,oo=null,Vd=null,Ul=null,Ld=!1;function uy(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ld||oo==null||oo!==Xr(u)||(u=oo,"selectionStart"in u&&Pd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ul&&Ll(Ul,u)||(Ul=u,u=Nh(Vd,"onSelect"),0<u.length&&(r=new Za("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=oo)))}function la(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var lo={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},Ud={},cy={};fi&&(cy=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function ua(n){if(Ud[n])return Ud[n];if(!lo[n])return n;var r=lo[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in cy)return Ud[n]=r[o];return n}var hy=ua("animationend"),fy=ua("animationiteration"),dy=ua("animationstart"),D1=ua("transitionrun"),O1=ua("transitionstart"),x1=ua("transitioncancel"),my=ua("transitionend"),py=new Map,jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jd.push("scrollEnd");function di(n,r){py.set(n,r),hi(r,[n])}var gy=new WeakMap;function Xn(n,r){if(typeof n=="object"&&n!==null){var o=gy.get(n);return o!==void 0?o:(r={value:n,source:r,stack:Wa(r)},gy.set(n,r),r)}return{value:n,source:r,stack:Wa(r)}}var Jn=[],uo=0,zd=0;function Gc(){for(var n=uo,r=zd=uo=0;r<n;){var o=Jn[r];Jn[r++]=null;var u=Jn[r];Jn[r++]=null;var f=Jn[r];Jn[r++]=null;var m=Jn[r];if(Jn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&_y(o,f,m)}}function Kc(n,r,o,u){Jn[uo++]=n,Jn[uo++]=r,Jn[uo++]=o,Jn[uo++]=u,zd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Bd(n,r,o,u){return Kc(n,r,o,u),Yc(n)}function co(n,r){return Kc(n,null,null,r),Yc(n)}function _y(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&r!==null&&(f=31-Et(o),n=m.hiddenUpdates,u=n[f],u===null?n[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function Yc(n){if(50<uu)throw uu=0,Ym=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ho={};function M1(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(n,r,o,u){return new M1(n,r,o,u)}function Fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ds(n,r){var o=n.alternate;return o===null?(o=Vn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function yy(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Qc(n,r,o,u,f,m){var E=0;if(u=n,typeof n=="function")Fd(n)&&(E=1);else if(typeof n=="string")E=PR(n,o,_e.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=Vn(31,o,r,f),n.elementType=C,n.lanes=m,n;case V:return ca(o.children,f,m,r);case Y:E=8,f|=24;break;case K:return n=Vn(12,o,r,f|2),n.elementType=K,n.lanes=m,n;case pe:return n=Vn(13,o,r,f),n.elementType=pe,n.lanes=m,n;case Ne:return n=Vn(19,o,r,f),n.elementType=Ne,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ce:case oe:E=10;break e;case re:E=9;break e;case Ce:E=11;break e;case k:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=Vn(E,o,r,f),r.elementType=n,r.type=u,r.lanes=m,r}function ca(n,r,o,u){return n=Vn(7,n,u,r),n.lanes=o,n}function qd(n,r,o){return n=Vn(6,n,null,r),n.lanes=o,n}function Hd(n,r,o){return r=Vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var fo=[],mo=0,$c=null,Wc=0,Zn=[],ei=0,ha=null,ms=1,ps="";function fa(n,r){fo[mo++]=Wc,fo[mo++]=$c,$c=n,Wc=r}function vy(n,r,o){Zn[ei++]=ms,Zn[ei++]=ps,Zn[ei++]=ha,ha=n;var u=ms;n=ps;var f=32-Et(u)-1;u&=~(1<<f),o+=1;var m=32-Et(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ms=1<<32-Et(r)+f|o<<f|u,ps=m+n}else ms=1<<m|o<<f|u,ps=n}function Gd(n){n.return!==null&&(fa(n,1),vy(n,1,0))}function Kd(n){for(;n===$c;)$c=fo[--mo],fo[mo]=null,Wc=fo[--mo],fo[mo]=null;for(;n===ha;)ha=Zn[--ei],Zn[ei]=null,ps=Zn[--ei],Zn[ei]=null,ms=Zn[--ei],Zn[ei]=null}var An=null,It=null,et=!1,da=null,Mi=!1,Yd=Error(s(519));function ma(n){var r=Error(s(418,""));throw Bl(Xn(r,n)),Yd}function Ey(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Ft]=n,r[Pt]=u,o){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(o=0;o<hu.length;o++)Fe(hu[o],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Fe("invalid",r),Jr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Xa(r);break;case"select":Fe("invalid",r);break;case"textarea":Fe("invalid",r),Zr(r,u.value,u.defaultValue,u.children),Xa(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||Lv(r.textContent,o)?(u.popover!=null&&(Fe("beforetoggle",r),Fe("toggle",r)),u.onScroll!=null&&Fe("scroll",r),u.onScrollEnd!=null&&Fe("scrollend",r),u.onClick!=null&&(r.onclick=Dh),r=!0):r=!1,r||ma(n)}function Ty(n){for(An=n.return;An;)switch(An.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:An=An.return}}function jl(n){if(n!==An)return!1;if(!et)return Ty(n),et=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||up(n.type,n.memoizedProps)),o=!o),o&&It&&ma(n),Ty(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){It=pi(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}It=null}}else r===27?(r=It,cr(n.type)?(n=dp,dp=null,It=n):It=r):It=An?pi(n.stateNode.nextSibling):null;return!0}function zl(){It=An=null,et=!1}function Sy(){var n=da;return n!==null&&(Nn===null?Nn=n:Nn.push.apply(Nn,n),da=null),n}function Bl(n){da===null?da=[n]:da.push(n)}var Qd=Z(null),pa=null,gs=null;function $s(n,r,o){te(Qd,r._currentValue),r._currentValue=o}function _s(n){n._currentValue=Qd.current,ne(Qd)}function $d(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Wd(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var I=0;I<r.length;I++)if(S.context===r[I]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),$d(m.return,o,n),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),$d(E,o,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Fl(n,r,o,u){n=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Pn(f.pendingProps.value,E.value)||(n!==null?n.push(S):n=[S])}}else if(f===Dt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(_u):n=[_u])}f=f.return}n!==null&&Wd(r,n,o,u),r.flags|=262144}function Xc(n){for(n=n.firstContext;n!==null;){if(!Pn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ga(n){pa=n,gs=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function dn(n){return by(pa,n)}function Jc(n,r){return pa===null&&ga(n),by(n,r)}function by(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},gs===null){if(n===null)throw Error(s(308));gs=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else gs=gs.next=r;return o}var k1=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},P1=i.unstable_scheduleCallback,V1=i.unstable_NormalPriority,Gt={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xd(){return{controller:new k1,data:new Map,refCount:0}}function ql(n){n.refCount--,n.refCount===0&&P1(V1,function(){n.controller.abort()})}var Hl=null,Jd=0,po=0,go=null;function L1(n,r){if(Hl===null){var o=Hl=[];Jd=0,po=ep(),go={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Jd++,r.then(wy,wy),r}function wy(){if(--Jd===0&&Hl!==null){go!==null&&(go.status="fulfilled");var n=Hl;Hl=null,po=0,go=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function U1(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Ay=H.S;H.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&L1(n,r),Ay!==null&&Ay(n,r)};var _a=Z(null);function Zd(){var n=_a.current;return n!==null?n:mt.pooledCache}function Zc(n,r){r===null?te(_a,_a.current):te(_a,r.pool)}function Ry(){var n=Zd();return n===null?null:{parent:Gt._currentValue,pool:n}}var Gl=Error(s(460)),Iy=Error(s(474)),eh=Error(s(542)),em={then:function(){}};function Cy(n){return n=n.status,n==="fulfilled"||n==="rejected"}function th(){}function Ny(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(th,th),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Oy(n),n;default:if(typeof r.status=="string")r.then(th,th);else{if(n=mt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Oy(n),n}throw Kl=r,Gl}}var Kl=null;function Dy(){if(Kl===null)throw Error(s(459));var n=Kl;return Kl=null,n}function Oy(n){if(n===Gl||n===eh)throw Error(s(483))}var Ws=!1;function tm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Xs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Js(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(st&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Yc(n),_y(n,null,o),r}return Kc(n,u,r,o),Yc(n)}function Yl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Tl(n,o)}}function im(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var sm=!1;function Ql(){if(sm){var n=go;if(n!==null)throw n}}function $l(n,r,o,u){sm=!1;var f=n.updateQueue;Ws=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var I=S,z=I.next;I.next=null,E===null?m=z:E.next=z,E=I;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==E&&(S===null?Q.firstBaseUpdate=z:S.next=z,Q.lastBaseUpdate=I))}if(m!==null){var X=f.baseState;E=0,Q=z=I=null,S=m;do{var B=S.lane&-536870913,q=B!==S.lane;if(q?($e&B)===B:(u&B)===B){B!==0&&B===po&&(sm=!0),Q!==null&&(Q=Q.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Re=n,Te=S;B=r;var ut=o;switch(Te.tag){case 1:if(Re=Te.payload,typeof Re=="function"){X=Re.call(ut,X,B);break e}X=Re;break e;case 3:Re.flags=Re.flags&-65537|128;case 0:if(Re=Te.payload,B=typeof Re=="function"?Re.call(ut,X,B):Re,B==null)break e;X=y({},X,B);break e;case 2:Ws=!0}}B=S.callback,B!==null&&(n.flags|=64,q&&(n.flags|=8192),q=f.callbacks,q===null?f.callbacks=[B]:q.push(B))}else q={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(z=Q=q,I=X):Q=Q.next=q,E|=B;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;q=S,S=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);Q===null&&(I=X),f.baseState=I,f.firstBaseUpdate=z,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),ar|=E,n.lanes=E,n.memoizedState=X}}function xy(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function My(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)xy(o[n],r)}var _o=Z(null),nh=Z(0);function ky(n,r){n=ws,te(nh,n),te(_o,r),ws=n|r.baseLanes}function rm(){te(nh,ws),te(_o,_o.current)}function am(){ws=nh.current,ne(_o),ne(nh)}var Zs=0,Ue=null,ot=null,Lt=null,ih=!1,yo=!1,ya=!1,sh=0,Wl=0,vo=null,j1=0;function xt(){throw Error(s(321))}function om(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Pn(n[o],r[o]))return!1;return!0}function lm(n,r,o,u,f,m){return Zs=m,Ue=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,H.H=n===null||n.memoizedState===null?_0:y0,ya=!1,m=o(u,f),ya=!1,yo&&(m=Vy(r,o,u,f)),Py(n),m}function Py(n){H.H=ch;var r=ot!==null&&ot.next!==null;if(Zs=0,Lt=ot=Ue=null,ih=!1,Wl=0,vo=null,r)throw Error(s(300));n===null||Wt||(n=n.dependencies,n!==null&&Xc(n)&&(Wt=!0))}function Vy(n,r,o,u){Ue=n;var f=0;do{if(yo&&(vo=null),Wl=0,yo=!1,25<=f)throw Error(s(301));if(f+=1,Lt=ot=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}H.H=K1,m=r(o,u)}while(yo);return m}function z1(){var n=H.H,r=n.useState()[0];return r=typeof r.then=="function"?Xl(r):r,n=n.useState()[0],(ot!==null?ot.memoizedState:null)!==n&&(Ue.flags|=1024),r}function um(){var n=sh!==0;return sh=0,n}function cm(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function hm(n){if(ih){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}ih=!1}Zs=0,Lt=ot=Ue=null,yo=!1,Wl=sh=0,vo=null}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?Ue.memoizedState=Lt=n:Lt=Lt.next=n,Lt}function Ut(){if(ot===null){var n=Ue.alternate;n=n!==null?n.memoizedState:null}else n=ot.next;var r=Lt===null?Ue.memoizedState:Lt.next;if(r!==null)Lt=r,ot=n;else{if(n===null)throw Ue.alternate===null?Error(s(467)):Error(s(310));ot=n,n={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Lt===null?Ue.memoizedState=Lt=n:Lt=Lt.next=n}return Lt}function fm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(n){var r=Wl;return Wl+=1,vo===null&&(vo=[]),n=Ny(vo,n,r),r=Ue,(Lt===null?r.memoizedState:Lt.next)===null&&(r=r.alternate,H.H=r===null||r.memoizedState===null?_0:y0),n}function rh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Xl(n);if(n.$$typeof===oe)return dn(n)}throw Error(s(438,String(n)))}function dm(n){var r=null,o=Ue.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ue.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=fm(),Ue.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=M;return r.index++,o}function ys(n,r){return typeof r=="function"?r(n):r}function ah(n){var r=Ut();return mm(r,ot,n)}function mm(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{r=f.next;var S=E=null,I=null,z=r,Q=!1;do{var X=z.lane&-536870913;if(X!==z.lane?($e&X)===X:(Zs&X)===X){var B=z.revertLane;if(B===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===po&&(Q=!0);else if((Zs&B)===B){z=z.next,B===po&&(Q=!0);continue}else X={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(S=I=X,E=m):I=I.next=X,Ue.lanes|=B,ar|=B;X=z.action,ya&&o(m,X),m=z.hasEagerState?z.eagerState:o(m,X)}else B={lane:X,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(S=I=B,E=m):I=I.next=B,Ue.lanes|=X,ar|=X;z=z.next}while(z!==null&&z!==r);if(I===null?E=m:I.next=S,!Pn(m,n.memoizedState)&&(Wt=!0,Q&&(o=go,o!==null)))throw o;n.memoizedState=m,n.baseState=E,n.baseQueue=I,u.lastRenderedState=m}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function pm(n){var r=Ut(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=n(m,E.action),E=E.next;while(E!==f);Pn(m,r.memoizedState)||(Wt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Ly(n,r,o){var u=Ue,f=Ut(),m=et;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Pn((ot||f).memoizedState,o);E&&(f.memoizedState=o,Wt=!0),f=f.queue;var S=zy.bind(null,u,f,n);if(Jl(2048,8,S,[n]),f.getSnapshot!==r||E||Lt!==null&&Lt.memoizedState.tag&1){if(u.flags|=2048,Eo(9,oh(),jy.bind(null,u,f,o,r),null),mt===null)throw Error(s(349));m||(Zs&124)!==0||Uy(u,r,o)}return o}function Uy(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ue.updateQueue,r===null?(r=fm(),Ue.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function jy(n,r,o,u){r.value=o,r.getSnapshot=u,By(r)&&Fy(n)}function zy(n,r,o){return o(function(){By(r)&&Fy(n)})}function By(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Pn(n,o)}catch{return!0}}function Fy(n){var r=co(n,2);r!==null&&Bn(r,n,2)}function gm(n){var r=In();if(typeof n=="function"){var o=n;if(n=o(),ya){Me(!0);try{o()}finally{Me(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:n},r}function qy(n,r,o,u){return n.baseState=o,mm(n,ot,typeof u=="function"?u:ys)}function B1(n,r,o,u,f){if(uh(n))throw Error(s(485));if(n=r.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};H.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Hy(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Hy(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var m=H.T,E={};H.T=E;try{var S=o(f,u),I=H.S;I!==null&&I(E,S),Gy(n,r,S)}catch(z){_m(n,r,z)}finally{H.T=m}}else try{m=o(f,u),Gy(n,r,m)}catch(z){_m(n,r,z)}}function Gy(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ky(n,r,u)},function(u){return _m(n,r,u)}):Ky(n,r,o)}function Ky(n,r,o){r.status="fulfilled",r.value=o,Yy(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Hy(n,o)))}function _m(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Yy(r),r=r.next;while(r!==u)}n.action=null}function Yy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Qy(n,r){return r}function $y(n,r){if(et){var o=mt.formState;if(o!==null){e:{var u=Ue;if(et){if(It){t:{for(var f=It,m=Mi;f.nodeType!==8;){if(!m){f=null;break t}if(f=pi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){It=pi(f.nextSibling),u=f.data==="F!";break e}}ma(u)}u=!1}u&&(r=o[0])}}return o=In(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qy,lastRenderedState:r},o.queue=u,o=m0.bind(null,Ue,u),u.dispatch=o,u=gm(!1),m=Sm.bind(null,Ue,!1,u.queue),u=In(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=B1.bind(null,Ue,f,m,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function Wy(n){var r=Ut();return Xy(r,ot,n)}function Xy(n,r,o){if(r=mm(n,r,Qy)[0],n=ah(ys)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Xl(r)}catch(E){throw E===Gl?eh:E}else u=r;r=Ut();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ue.flags|=2048,Eo(9,oh(),F1.bind(null,f,o),null)),[u,m,n]}function F1(n,r){n.action=r}function Jy(n){var r=Ut(),o=ot;if(o!==null)return Xy(r,o,n);Ut(),r=r.memoizedState,o=Ut();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function Eo(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Ue.updateQueue,r===null&&(r=fm(),Ue.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function oh(){return{destroy:void 0,resource:void 0}}function Zy(){return Ut().memoizedState}function lh(n,r,o,u){var f=In();u=u===void 0?null:u,Ue.flags|=n,f.memoizedState=Eo(1|r,oh(),o,u)}function Jl(n,r,o,u){var f=Ut();u=u===void 0?null:u;var m=f.memoizedState.inst;ot!==null&&u!==null&&om(u,ot.memoizedState.deps)?f.memoizedState=Eo(r,m,o,u):(Ue.flags|=n,f.memoizedState=Eo(1|r,m,o,u))}function e0(n,r){lh(8390656,8,n,r)}function t0(n,r){Jl(2048,8,n,r)}function n0(n,r){return Jl(4,2,n,r)}function i0(n,r){return Jl(4,4,n,r)}function s0(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function r0(n,r,o){o=o!=null?o.concat([n]):null,Jl(4,4,s0.bind(null,r,n),o)}function ym(){}function a0(n,r){var o=Ut();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&om(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function o0(n,r){var o=Ut();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&om(r,u[1]))return u[0];if(u=n(),ya){Me(!0);try{n()}finally{Me(!1)}}return o.memoizedState=[u,r],u}function vm(n,r,o){return o===void 0||(Zs&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=cv(),Ue.lanes|=n,ar|=n,o)}function l0(n,r,o,u){return Pn(o,r)?o:_o.current!==null?(n=vm(n,o,u),Pn(n,r)||(Wt=!0),n):(Zs&42)===0?(Wt=!0,n.memoizedState=o):(n=cv(),Ue.lanes|=n,ar|=n,r)}function u0(n,r,o,u,f){var m=ee.p;ee.p=m!==0&&8>m?m:8;var E=H.T,S={};H.T=S,Sm(n,!1,r,o);try{var I=f(),z=H.S;if(z!==null&&z(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Q=U1(I,u);Zl(n,r,Q,zn(n))}else Zl(n,r,u,zn(n))}catch(X){Zl(n,r,{then:function(){},status:"rejected",reason:X},zn())}finally{ee.p=m,H.T=E}}function q1(){}function Em(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=c0(n).queue;u0(n,f,r,ue,o===null?q1:function(){return h0(n),o(u)})}function c0(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:ue},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function h0(n){var r=c0(n).next.queue;Zl(n,r,{},zn())}function Tm(){return dn(_u)}function f0(){return Ut().memoizedState}function d0(){return Ut().memoizedState}function H1(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=zn();n=Xs(o);var u=Js(r,n,o);u!==null&&(Bn(u,r,o),Yl(u,r,o)),r={cache:Xd()},n.payload=r;return}r=r.return}}function G1(n,r,o){var u=zn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},uh(n)?p0(r,o):(o=Bd(n,r,o,u),o!==null&&(Bn(o,n,u),g0(o,r,u)))}function m0(n,r,o){var u=zn();Zl(n,r,o,u)}function Zl(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(uh(n))p0(r,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Pn(S,E))return Kc(n,r,f,0),mt===null&&Gc(),!1}catch{}finally{}if(o=Bd(n,r,f,u),o!==null)return Bn(o,n,u),g0(o,r,u),!0}return!1}function Sm(n,r,o,u){if(u={lane:2,revertLane:ep(),action:u,hasEagerState:!1,eagerState:null,next:null},uh(n)){if(r)throw Error(s(479))}else r=Bd(n,o,u,2),r!==null&&Bn(r,n,2)}function uh(n){var r=n.alternate;return n===Ue||r!==null&&r===Ue}function p0(n,r){yo=ih=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function g0(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Tl(n,o)}}var ch={readContext:dn,use:rh,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt},_0={readContext:dn,use:rh,useCallback:function(n,r){return In().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:e0,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,lh(4194308,4,s0.bind(null,r,n),o)},useLayoutEffect:function(n,r){return lh(4194308,4,n,r)},useInsertionEffect:function(n,r){lh(4,2,n,r)},useMemo:function(n,r){var o=In();r=r===void 0?null:r;var u=n();if(ya){Me(!0);try{n()}finally{Me(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=In();if(o!==void 0){var f=o(r);if(ya){Me(!0);try{o(r)}finally{Me(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=G1.bind(null,Ue,n),[u.memoizedState,n]},useRef:function(n){var r=In();return n={current:n},r.memoizedState=n},useState:function(n){n=gm(n);var r=n.queue,o=m0.bind(null,Ue,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:ym,useDeferredValue:function(n,r){var o=In();return vm(o,n,r)},useTransition:function(){var n=gm(!1);return n=u0.bind(null,Ue,n.queue,!0,!1),In().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Ue,f=In();if(et){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),mt===null)throw Error(s(349));($e&124)!==0||Uy(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,e0(zy.bind(null,u,m,n),[n]),u.flags|=2048,Eo(9,oh(),jy.bind(null,u,m,o,r),null),o},useId:function(){var n=In(),r=mt.identifierPrefix;if(et){var o=ps,u=ms;o=(u&~(1<<32-Et(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=sh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=j1++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Tm,useFormState:$y,useActionState:$y,useOptimistic:function(n){var r=In();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Sm.bind(null,Ue,!0,o),o.dispatch=r,[n,r]},useMemoCache:dm,useCacheRefresh:function(){return In().memoizedState=H1.bind(null,Ue)}},y0={readContext:dn,use:rh,useCallback:a0,useContext:dn,useEffect:t0,useImperativeHandle:r0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:o0,useReducer:ah,useRef:Zy,useState:function(){return ah(ys)},useDebugValue:ym,useDeferredValue:function(n,r){var o=Ut();return l0(o,ot.memoizedState,n,r)},useTransition:function(){var n=ah(ys)[0],r=Ut().memoizedState;return[typeof n=="boolean"?n:Xl(n),r]},useSyncExternalStore:Ly,useId:f0,useHostTransitionStatus:Tm,useFormState:Wy,useActionState:Wy,useOptimistic:function(n,r){var o=Ut();return qy(o,ot,n,r)},useMemoCache:dm,useCacheRefresh:d0},K1={readContext:dn,use:rh,useCallback:a0,useContext:dn,useEffect:t0,useImperativeHandle:r0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:o0,useReducer:pm,useRef:Zy,useState:function(){return pm(ys)},useDebugValue:ym,useDeferredValue:function(n,r){var o=Ut();return ot===null?vm(o,n,r):l0(o,ot.memoizedState,n,r)},useTransition:function(){var n=pm(ys)[0],r=Ut().memoizedState;return[typeof n=="boolean"?n:Xl(n),r]},useSyncExternalStore:Ly,useId:f0,useHostTransitionStatus:Tm,useFormState:Jy,useActionState:Jy,useOptimistic:function(n,r){var o=Ut();return ot!==null?qy(o,ot,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:dm,useCacheRefresh:d0},To=null,eu=0;function hh(n){var r=eu;return eu+=1,To===null&&(To=[]),Ny(To,n,r)}function tu(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function fh(n,r){throw r.$$typeof===T?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function v0(n){var r=n._init;return r(n._payload)}function E0(n){function r(L,x){if(n){var j=L.deletions;j===null?(L.deletions=[x],L.flags|=16):j.push(x)}}function o(L,x){if(!n)return null;for(;x!==null;)r(L,x),x=x.sibling;return null}function u(L){for(var x=new Map;L!==null;)L.key!==null?x.set(L.key,L):x.set(L.index,L),L=L.sibling;return x}function f(L,x){return L=ds(L,x),L.index=0,L.sibling=null,L}function m(L,x,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<x?(L.flags|=67108866,x):j):(L.flags|=67108866,x)):(L.flags|=1048576,x)}function E(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function S(L,x,j,$){return x===null||x.tag!==6?(x=qd(j,L.mode,$),x.return=L,x):(x=f(x,j),x.return=L,x)}function I(L,x,j,$){var fe=j.type;return fe===V?Q(L,x,j.props.children,$,j.key):x!==null&&(x.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&v0(fe)===x.type)?(x=f(x,j.props),tu(x,j),x.return=L,x):(x=Qc(j.type,j.key,j.props,null,L.mode,$),tu(x,j),x.return=L,x)}function z(L,x,j,$){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=Hd(j,L.mode,$),x.return=L,x):(x=f(x,j.children||[]),x.return=L,x)}function Q(L,x,j,$,fe){return x===null||x.tag!==7?(x=ca(j,L.mode,$,fe),x.return=L,x):(x=f(x,j),x.return=L,x)}function X(L,x,j){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=qd(""+x,L.mode,j),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case b:return j=Qc(x.type,x.key,x.props,null,L.mode,j),tu(j,x),j.return=L,j;case O:return x=Hd(x,L.mode,j),x.return=L,x;case R:var $=x._init;return x=$(x._payload),X(L,x,j)}if(De(x)||N(x))return x=ca(x,L.mode,j,null),x.return=L,x;if(typeof x.then=="function")return X(L,hh(x),j);if(x.$$typeof===oe)return X(L,Jc(L,x),j);fh(L,x)}return null}function B(L,x,j,$){var fe=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return fe!==null?null:S(L,x,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return j.key===fe?I(L,x,j,$):null;case O:return j.key===fe?z(L,x,j,$):null;case R:return fe=j._init,j=fe(j._payload),B(L,x,j,$)}if(De(j)||N(j))return fe!==null?null:Q(L,x,j,$,null);if(typeof j.then=="function")return B(L,x,hh(j),$);if(j.$$typeof===oe)return B(L,x,Jc(L,j),$);fh(L,j)}return null}function q(L,x,j,$,fe){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return L=L.get(j)||null,S(x,L,""+$,fe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return L=L.get($.key===null?j:$.key)||null,I(x,L,$,fe);case O:return L=L.get($.key===null?j:$.key)||null,z(x,L,$,fe);case R:var ze=$._init;return $=ze($._payload),q(L,x,j,$,fe)}if(De($)||N($))return L=L.get(j)||null,Q(x,L,$,fe,null);if(typeof $.then=="function")return q(L,x,j,hh($),fe);if($.$$typeof===oe)return q(L,x,j,Jc(x,$),fe);fh(x,$)}return null}function Re(L,x,j,$){for(var fe=null,ze=null,me=x,Se=x=0,Jt=null;me!==null&&Se<j.length;Se++){me.index>Se?(Jt=me,me=null):Jt=me.sibling;var Ze=B(L,me,j[Se],$);if(Ze===null){me===null&&(me=Jt);break}n&&me&&Ze.alternate===null&&r(L,me),x=m(Ze,x,Se),ze===null?fe=Ze:ze.sibling=Ze,ze=Ze,me=Jt}if(Se===j.length)return o(L,me),et&&fa(L,Se),fe;if(me===null){for(;Se<j.length;Se++)me=X(L,j[Se],$),me!==null&&(x=m(me,x,Se),ze===null?fe=me:ze.sibling=me,ze=me);return et&&fa(L,Se),fe}for(me=u(me);Se<j.length;Se++)Jt=q(me,L,Se,j[Se],$),Jt!==null&&(n&&Jt.alternate!==null&&me.delete(Jt.key===null?Se:Jt.key),x=m(Jt,x,Se),ze===null?fe=Jt:ze.sibling=Jt,ze=Jt);return n&&me.forEach(function(pr){return r(L,pr)}),et&&fa(L,Se),fe}function Te(L,x,j,$){if(j==null)throw Error(s(151));for(var fe=null,ze=null,me=x,Se=x=0,Jt=null,Ze=j.next();me!==null&&!Ze.done;Se++,Ze=j.next()){me.index>Se?(Jt=me,me=null):Jt=me.sibling;var pr=B(L,me,Ze.value,$);if(pr===null){me===null&&(me=Jt);break}n&&me&&pr.alternate===null&&r(L,me),x=m(pr,x,Se),ze===null?fe=pr:ze.sibling=pr,ze=pr,me=Jt}if(Ze.done)return o(L,me),et&&fa(L,Se),fe;if(me===null){for(;!Ze.done;Se++,Ze=j.next())Ze=X(L,Ze.value,$),Ze!==null&&(x=m(Ze,x,Se),ze===null?fe=Ze:ze.sibling=Ze,ze=Ze);return et&&fa(L,Se),fe}for(me=u(me);!Ze.done;Se++,Ze=j.next())Ze=q(me,L,Se,Ze.value,$),Ze!==null&&(n&&Ze.alternate!==null&&me.delete(Ze.key===null?Se:Ze.key),x=m(Ze,x,Se),ze===null?fe=Ze:ze.sibling=Ze,ze=Ze);return n&&me.forEach(function(YR){return r(L,YR)}),et&&fa(L,Se),fe}function ut(L,x,j,$){if(typeof j=="object"&&j!==null&&j.type===V&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case b:e:{for(var fe=j.key;x!==null;){if(x.key===fe){if(fe=j.type,fe===V){if(x.tag===7){o(L,x.sibling),$=f(x,j.props.children),$.return=L,L=$;break e}}else if(x.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&v0(fe)===x.type){o(L,x.sibling),$=f(x,j.props),tu($,j),$.return=L,L=$;break e}o(L,x);break}else r(L,x);x=x.sibling}j.type===V?($=ca(j.props.children,L.mode,$,j.key),$.return=L,L=$):($=Qc(j.type,j.key,j.props,null,L.mode,$),tu($,j),$.return=L,L=$)}return E(L);case O:e:{for(fe=j.key;x!==null;){if(x.key===fe)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){o(L,x.sibling),$=f(x,j.children||[]),$.return=L,L=$;break e}else{o(L,x);break}else r(L,x);x=x.sibling}$=Hd(j,L.mode,$),$.return=L,L=$}return E(L);case R:return fe=j._init,j=fe(j._payload),ut(L,x,j,$)}if(De(j))return Re(L,x,j,$);if(N(j)){if(fe=N(j),typeof fe!="function")throw Error(s(150));return j=fe.call(j),Te(L,x,j,$)}if(typeof j.then=="function")return ut(L,x,hh(j),$);if(j.$$typeof===oe)return ut(L,x,Jc(L,j),$);fh(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,x!==null&&x.tag===6?(o(L,x.sibling),$=f(x,j),$.return=L,L=$):(o(L,x),$=qd(j,L.mode,$),$.return=L,L=$),E(L)):o(L,x)}return function(L,x,j,$){try{eu=0;var fe=ut(L,x,j,$);return To=null,fe}catch(me){if(me===Gl||me===eh)throw me;var ze=Vn(29,me,null,L.mode);return ze.lanes=$,ze.return=L,ze}finally{}}}var So=E0(!0),T0=E0(!1),ti=Z(null),ki=null;function er(n){var r=n.alternate;te(Kt,Kt.current&1),te(ti,n),ki===null&&(r===null||_o.current!==null||r.memoizedState!==null)&&(ki=n)}function S0(n){if(n.tag===22){if(te(Kt,Kt.current),te(ti,n),ki===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(ki=n)}}else tr()}function tr(){te(Kt,Kt.current),te(ti,ti.current)}function vs(n){ne(ti),ki===n&&(ki=null),ne(Kt)}var Kt=Z(0);function dh(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||fp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function bm(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var wm={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=zn(),f=Xs(u);f.payload=r,o!=null&&(f.callback=o),r=Js(n,f,u),r!==null&&(Bn(r,n,u),Yl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=zn(),f=Xs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Js(n,f,u),r!==null&&(Bn(r,n,u),Yl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=zn(),u=Xs(o);u.tag=2,r!=null&&(u.callback=r),r=Js(n,u,o),r!==null&&(Bn(r,n,o),Yl(r,n,o))}};function b0(n,r,o,u,f,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Ll(o,u)||!Ll(f,m):!0}function w0(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&wm.enqueueReplaceState(r,r.state,null)}function va(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=y({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var mh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function A0(n){mh(n)}function R0(n){console.error(n)}function I0(n){mh(n)}function ph(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function C0(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Am(n,r,o){return o=Xs(o),o.tag=3,o.payload={element:null},o.callback=function(){ph(n,r)},o}function N0(n){return n=Xs(n),n.tag=3,n}function D0(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;n.payload=function(){return f(m)},n.callback=function(){C0(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){C0(r,o,u),typeof f!="function"&&(or===null?or=new Set([this]):or.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function Y1(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Fl(r,o,f,!0),o=ti.current,o!==null){switch(o.tag){case 13:return ki===null?$m():o.alternate===null&&Ct===0&&(Ct=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===em?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Xm(n,u,f)),!1;case 22:return o.flags|=65536,u===em?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Xm(n,u,f)),!1}throw Error(s(435,o.tag))}return Xm(n,u,f),$m(),!1}if(et)return r=ti.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Yd&&(n=Error(s(422),{cause:u}),Bl(Xn(n,o)))):(u!==Yd&&(r=Error(s(423),{cause:u}),Bl(Xn(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Xn(u,o),f=Am(n.stateNode,u,f),im(n,f),Ct!==4&&(Ct=2)),!1;var m=Error(s(520),{cause:u});if(m=Xn(m,o),lu===null?lu=[m]:lu.push(m),Ct!==4&&(Ct=2),r===null)return!0;u=Xn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=Am(o.stateNode,u,n),im(o,n),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(or===null||!or.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=N0(f),D0(f,n,o,u),im(o,f),!1}o=o.return}while(o!==null);return!1}var O0=Error(s(461)),Wt=!1;function an(n,r,o,u){r.child=n===null?T0(r,null,o,u):So(r,n.child,o,u)}function x0(n,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return ga(r),u=lm(n,r,o,E,m,f),S=um(),n!==null&&!Wt?(cm(n,r,f),Es(n,r,f)):(et&&S&&Gd(r),r.flags|=1,an(n,r,u,f),r.child)}function M0(n,r,o,u,f){if(n===null){var m=o.type;return typeof m=="function"&&!Fd(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,k0(n,r,m,u,f)):(n=Qc(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!Mm(n,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ll,o(E,u)&&n.ref===r.ref)return Es(n,r,f)}return r.flags|=1,n=ds(m,u),n.ref=r.ref,n.return=r,r.child=n}function k0(n,r,o,u,f){if(n!==null){var m=n.memoizedProps;if(Ll(m,u)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=u=m,Mm(n,f))(n.flags&131072)!==0&&(Wt=!0);else return r.lanes=n.lanes,Es(n,r,f)}return Rm(n,r,o,u,f)}function P0(n,r,o){var u=r.pendingProps,f=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,n!==null){for(f=r.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return V0(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Zc(r,m!==null?m.cachePool:null),m!==null?ky(r,m):rm(),S0(r);else return r.lanes=r.childLanes=536870912,V0(n,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(Zc(r,m.cachePool),ky(r,m),tr(),r.memoizedState=null):(n!==null&&Zc(r,null),rm(),tr());return an(n,r,f,o),r.child}function V0(n,r,o,u){var f=Zd();return f=f===null?null:{parent:Gt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&Zc(r,null),rm(),S0(r),n!==null&&Fl(n,r,u,!0),null}function gh(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function Rm(n,r,o,u,f){return ga(r),o=lm(n,r,o,u,void 0,f),u=um(),n!==null&&!Wt?(cm(n,r,f),Es(n,r,f)):(et&&u&&Gd(r),r.flags|=1,an(n,r,o,f),r.child)}function L0(n,r,o,u,f,m){return ga(r),r.updateQueue=null,o=Vy(r,u,o,f),Py(n),u=um(),n!==null&&!Wt?(cm(n,r,m),Es(n,r,m)):(et&&u&&Gd(r),r.flags|=1,an(n,r,o,m),r.child)}function U0(n,r,o,u,f){if(ga(r),r.stateNode===null){var m=ho,E=o.contextType;typeof E=="object"&&E!==null&&(m=dn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=wm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},tm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?dn(E):ho,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(bm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&wm.enqueueReplaceState(m,m.state,null),$l(r,u,m,f),Ql(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){m=r.stateNode;var S=r.memoizedProps,I=va(o,S);m.props=I;var z=m.context,Q=o.contextType;E=ho,typeof Q=="object"&&Q!==null&&(E=dn(Q));var X=o.getDerivedStateFromProps;Q=typeof X=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||z!==E)&&w0(r,m,u,E),Ws=!1;var B=r.memoizedState;m.state=B,$l(r,u,m,f),Ql(),z=r.memoizedState,S||B!==z||Ws?(typeof X=="function"&&(bm(r,o,X,u),z=r.memoizedState),(I=Ws||b0(r,o,I,u,B,z,E))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),m.props=u,m.state=z,m.context=E,u=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,nm(n,r),E=r.memoizedProps,Q=va(o,E),m.props=Q,X=r.pendingProps,B=m.context,z=o.contextType,I=ho,typeof z=="object"&&z!==null&&(I=dn(z)),S=o.getDerivedStateFromProps,(z=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==X||B!==I)&&w0(r,m,u,I),Ws=!1,B=r.memoizedState,m.state=B,$l(r,u,m,f),Ql();var q=r.memoizedState;E!==X||B!==q||Ws||n!==null&&n.dependencies!==null&&Xc(n.dependencies)?(typeof S=="function"&&(bm(r,o,S,u),q=r.memoizedState),(Q=Ws||b0(r,o,Q,u,B,q,I)||n!==null&&n.dependencies!==null&&Xc(n.dependencies))?(z||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,q,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,q,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=I,u=Q):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),u=!1)}return m=u,gh(n,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&u?(r.child=So(r,n.child,null,f),r.child=So(r,null,o,f)):an(n,r,o,f),r.memoizedState=m.state,n=r.child):n=Es(n,r,f),n}function j0(n,r,o,u){return zl(),r.flags|=256,an(n,r,o,u),r.child}var Im={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cm(n){return{baseLanes:n,cachePool:Ry()}}function Nm(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=ni),n}function z0(n,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(Kt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(et){if(f?er(r):tr(),et){var S=It,I;if(I=S){e:{for(I=S,S=Mi;I.nodeType!==8;){if(!S){S=null;break e}if(I=pi(I.nextSibling),I===null){S=null;break e}}S=I}S!==null?(r.memoizedState={dehydrated:S,treeContext:ha!==null?{id:ms,overflow:ps}:null,retryLane:536870912,hydrationErrors:null},I=Vn(18,null,null,0),I.stateNode=S,I.return=r,r.child=I,An=r,It=null,I=!0):I=!1}I||ma(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return fp(S)?r.lanes=32:r.lanes=536870912,null;vs(r)}return S=u.children,u=u.fallback,f?(tr(),f=r.mode,S=_h({mode:"hidden",children:S},f),u=ca(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=Cm(o),f.childLanes=Nm(n,E,o),r.memoizedState=Im,u):(er(r),Dm(r,S))}if(I=n.memoizedState,I!==null&&(S=I.dehydrated,S!==null)){if(m)r.flags&256?(er(r),r.flags&=-257,r=Om(n,r,o)):r.memoizedState!==null?(tr(),r.child=n.child,r.flags|=128,r=null):(tr(),f=u.fallback,S=r.mode,u=_h({mode:"visible",children:u.children},S),f=ca(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,So(r,n.child,null,o),u=r.child,u.memoizedState=Cm(o),u.childLanes=Nm(n,E,o),r.memoizedState=Im,r=f);else if(er(r),fp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(s(419)),u.stack="",u.digest=E,Bl({value:u,source:null,stack:null}),r=Om(n,r,o)}else if(Wt||Fl(n,r,o,!1),E=(o&n.childLanes)!==0,Wt||E){if(E=mt,E!==null&&(u=o&-o,u=(u&42)!==0?1:Fs(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,co(n,u),Bn(E,n,u),O0;S.data==="$?"||$m(),r=Om(n,r,o)}else S.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=I.treeContext,It=pi(S.nextSibling),An=r,et=!0,da=null,Mi=!1,n!==null&&(Zn[ei++]=ms,Zn[ei++]=ps,Zn[ei++]=ha,ms=n.id,ps=n.overflow,ha=r),r=Dm(r,u.children),r.flags|=4096);return r}return f?(tr(),f=u.fallback,S=r.mode,I=n.child,z=I.sibling,u=ds(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,z!==null?f=ds(z,f):(f=ca(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=n.child.memoizedState,S===null?S=Cm(o):(I=S.cachePool,I!==null?(z=Gt._currentValue,I=I.parent!==z?{parent:z,pool:z}:I):I=Ry(),S={baseLanes:S.baseLanes|o,cachePool:I}),f.memoizedState=S,f.childLanes=Nm(n,E,o),r.memoizedState=Im,u):(er(r),o=n.child,n=o.sibling,o=ds(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function Dm(n,r){return r=_h({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function _h(n,r){return n=Vn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Om(n,r,o){return So(r,n.child,null,o),n=Dm(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function B0(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),$d(n.return,r,o)}function xm(n,r,o,u,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function F0(n,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(an(n,r,u.children,o),u=Kt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&B0(n,o,r);else if(n.tag===19)B0(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(te(Kt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&dh(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),xm(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&dh(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}xm(r,!0,o,null,m);break;case"together":xm(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Es(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),ar|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Fl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=ds(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=ds(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Mm(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Xc(n)))}function Q1(n,r,o){switch(r.tag){case 3:ht(r,r.stateNode.containerInfo),$s(r,Gt,n.memoizedState.cache),zl();break;case 27:case 5:ui(r);break;case 4:ht(r,r.stateNode.containerInfo);break;case 10:$s(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(er(r),r.flags|=128,null):(o&r.child.childLanes)!==0?z0(n,r,o):(er(r),n=Es(n,r,o),n!==null?n.sibling:null);er(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Fl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return F0(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),te(Kt,Kt.current),u)break;return null;case 22:case 23:return r.lanes=0,P0(n,r,o);case 24:$s(r,Gt,n.memoizedState.cache)}return Es(n,r,o)}function q0(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Wt=!0;else{if(!Mm(n,o)&&(r.flags&128)===0)return Wt=!1,Q1(n,r,o);Wt=(n.flags&131072)!==0}else Wt=!1,et&&(r.flags&1048576)!==0&&vy(r,Wc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Fd(u)?(n=va(u,n),r.tag=1,r=U0(null,r,u,n,o)):(r.tag=0,r=Rm(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===Ce){r.tag=11,r=x0(null,r,u,n,o);break e}else if(f===k){r.tag=14,r=M0(null,r,u,n,o);break e}}throw r=ke(u)||u,Error(s(306,r,""))}}return r;case 0:return Rm(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=va(u,r.pendingProps),U0(n,r,u,f,o);case 3:e:{if(ht(r,r.stateNode.containerInfo),n===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,nm(n,r),$l(r,u,null,o);var E=r.memoizedState;if(u=E.cache,$s(r,Gt,u),u!==m.cache&&Wd(r,[Gt],o,!0),Ql(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=j0(n,r,u,o);break e}else if(u!==f){f=Xn(Error(s(424)),r),Bl(f),r=j0(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(It=pi(n.firstChild),An=r,et=!0,da=null,Mi=!0,o=T0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(zl(),u===f){r=Es(n,r,o);break e}an(n,r,u,o)}r=r.child}return r;case 26:return gh(n,r),n===null?(o=Yv(r.type,null,r.pendingProps,null))?r.memoizedState=o:et||(o=r.type,n=r.pendingProps,u=Oh(Ae.current).createElement(o),u[Ft]=r,u[Pt]=n,ln(u,o,n),Ot(u),r.stateNode=u):r.memoizedState=Yv(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return ui(r),n===null&&et&&(u=r.stateNode=Hv(r.type,r.pendingProps,Ae.current),An=r,Mi=!0,f=It,cr(r.type)?(dp=f,It=pi(u.firstChild)):It=f),an(n,r,r.pendingProps.children,o),gh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&et&&((f=u=It)&&(u=SR(u,r.type,r.pendingProps,Mi),u!==null?(r.stateNode=u,An=r,It=pi(u.firstChild),Mi=!1,f=!0):f=!1),f||ma(r)),ui(r),f=r.type,m=r.pendingProps,E=n!==null?n.memoizedProps:null,u=m.children,up(f,m)?u=null:E!==null&&up(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=lm(n,r,z1,null,null,o),_u._currentValue=f),gh(n,r),an(n,r,u,o),r.child;case 6:return n===null&&et&&((n=o=It)&&(o=bR(o,r.pendingProps,Mi),o!==null?(r.stateNode=o,An=r,It=null,n=!0):n=!1),n||ma(r)),null;case 13:return z0(n,r,o);case 4:return ht(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=So(r,null,u,o):an(n,r,u,o),r.child;case 11:return x0(n,r,r.type,r.pendingProps,o);case 7:return an(n,r,r.pendingProps,o),r.child;case 8:return an(n,r,r.pendingProps.children,o),r.child;case 12:return an(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,$s(r,r.type,u.value),an(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ga(r),f=dn(f),u=u(f),r.flags|=1,an(n,r,u,o),r.child;case 14:return M0(n,r,r.type,r.pendingProps,o);case 15:return k0(n,r,r.type,r.pendingProps,o);case 19:return F0(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=_h(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ds(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return P0(n,r,o);case 24:return ga(r),u=dn(Gt),n===null?(f=Zd(),f===null&&(f=mt,m=Xd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},tm(r),$s(r,Gt,f)):((n.lanes&o)!==0&&(nm(n,r),$l(r,null,null,o),Ql()),f=n.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),$s(r,Gt,u)):(u=m.cache,$s(r,Gt,u),u!==f.cache&&Wd(r,[Gt],o,!0))),an(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Ts(n){n.flags|=4}function H0(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Jv(r)){if(r=ti.current,r!==null&&(($e&4194048)===$e?ki!==null:($e&62914560)!==$e&&($e&536870912)===0||r!==ki))throw Kl=em,Iy;n.flags|=8192}}function yh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?vl():536870912,n.lanes|=r,Ro|=r)}function nu(n,r){if(!et)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function bt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function $1(n,r,o){var u=r.pendingProps;switch(Kd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(r),null;case 1:return bt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),_s(Gt),ft(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(jl(r)?Ts(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sy())),bt(r),null;case 26:return o=r.memoizedState,n===null?(Ts(r),o!==null?(bt(r),H0(r,o)):(bt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(Ts(r),bt(r),H0(r,o)):(bt(r),r.flags&=-16777217):(n.memoizedProps!==u&&Ts(r),bt(r),r.flags&=-16777217),null;case 27:Gn(r),o=Ae.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Ts(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return bt(r),null}n=_e.current,jl(r)?Ey(r):(n=Hv(f,u,o),r.stateNode=n,Ts(r))}return bt(r),null;case 5:if(Gn(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Ts(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return bt(r),null}if(n=_e.current,jl(r))Ey(r);else{switch(f=Oh(Ae.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Ft]=r,n[Pt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(ln(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ts(r)}}return bt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&Ts(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=Ae.current,jl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=An,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Ft]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Lv(n.nodeValue,o)),n||ma(r)}else n=Oh(n).createTextNode(u),n[Ft]=r,r.stateNode=n}return bt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=jl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ft]=r}else zl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bt(r),f=!1}else f=Sy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(vs(r),r):(vs(r),null)}if(vs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),yh(r,r.updateQueue),bt(r),null;case 4:return ft(),n===null&&sp(r.stateNode.containerInfo),bt(r),null;case 10:return _s(r.type),bt(r),null;case 19:if(ne(Kt),f=r.memoizedState,f===null)return bt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)nu(f,!1);else{if(Ct!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=dh(n),m!==null){for(r.flags|=128,nu(f,!1),n=m.updateQueue,r.updateQueue=n,yh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)yy(o,n),o=o.sibling;return te(Kt,Kt.current&1|2),r.child}n=n.sibling}f.tail!==null&&nn()>Th&&(r.flags|=128,u=!0,nu(f,!1),r.lanes=4194304)}else{if(!u)if(n=dh(m),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,yh(r,n),nu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!et)return bt(r),null}else 2*nn()-f.renderingStartTime>Th&&o!==536870912&&(r.flags|=128,u=!0,nu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(n=f.last,n!==null?n.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=nn(),r.sibling=null,n=Kt.current,te(Kt,u?n&1|2:n&1),r):(bt(r),null);case 22:case 23:return vs(r),am(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(bt(r),r.subtreeFlags&6&&(r.flags|=8192)):bt(r),o=r.updateQueue,o!==null&&yh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&ne(_a),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),_s(Gt),bt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function W1(n,r){switch(Kd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return _s(Gt),ft(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Gn(r),null;case 13:if(vs(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));zl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ne(Kt),null;case 4:return ft(),null;case 10:return _s(r.type),null;case 22:case 23:return vs(r),am(),n!==null&&ne(_a),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return _s(Gt),null;case 25:return null;default:return null}}function G0(n,r){switch(Kd(r),r.tag){case 3:_s(Gt),ft();break;case 26:case 27:case 5:Gn(r);break;case 4:ft();break;case 13:vs(r);break;case 19:ne(Kt);break;case 10:_s(r.type);break;case 22:case 23:vs(r),am(),n!==null&&ne(_a);break;case 24:_s(Gt)}}function iu(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){dt(r,r.return,S)}}function nr(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&n)===n){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var I=o,z=S;try{z()}catch(Q){dt(f,I,Q)}}}u=u.next}while(u!==m)}}catch(Q){dt(r,r.return,Q)}}function K0(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{My(r,o)}catch(u){dt(n,n.return,u)}}}function Y0(n,r,o){o.props=va(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){dt(n,r,u)}}function su(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){dt(n,r,f)}}function Pi(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){dt(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){dt(n,r,f)}else o.current=null}function Q0(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){dt(n,n.return,f)}}function km(n,r,o){try{var u=n.stateNode;_R(u,n.type,o,r),u[Pt]=r}catch(f){dt(n,n.return,f)}}function $0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&cr(n.type)||n.tag===4}function Pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&cr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vm(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Dh));else if(u!==4&&(u===27&&cr(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(Vm(n,r,o),n=n.sibling;n!==null;)Vm(n,r,o),n=n.sibling}function vh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&cr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(vh(n,r,o),n=n.sibling;n!==null;)vh(n,r,o),n=n.sibling}function W0(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);ln(r,u,o),r[Ft]=n,r[Pt]=o}catch(m){dt(n,n.return,m)}}var Ss=!1,Mt=!1,Lm=!1,X0=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function X1(n,r){if(n=n.containerInfo,op=Lh,n=ly(n),Pd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,I=-1,z=0,Q=0,X=n,B=null;t:for(;;){for(var q;X!==o||f!==0&&X.nodeType!==3||(S=E+f),X!==m||u!==0&&X.nodeType!==3||(I=E+u),X.nodeType===3&&(E+=X.nodeValue.length),(q=X.firstChild)!==null;)B=X,X=q;for(;;){if(X===n)break t;if(B===o&&++z===f&&(S=E),B===m&&++Q===u&&(I=E),(q=X.nextSibling)!==null)break;X=B,B=X.parentNode}X=q}o=S===-1||I===-1?null:{start:S,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(lp={focusedElem:n,selectionRange:o},Lh=!1,Xt=r;Xt!==null;)if(r=Xt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,Xt=n;else for(;Xt!==null;){switch(r=Xt,m=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Re=va(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Re,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(Te){dt(o,o.return,Te)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)hp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":hp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Xt=n;break}Xt=r.return}}function J0(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ir(n,o),u&4&&iu(5,o);break;case 1:if(ir(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){dt(o,o.return,E)}else{var f=va(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){dt(o,o.return,E)}}u&64&&K0(o),u&512&&su(o,o.return);break;case 3:if(ir(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{My(n,r)}catch(E){dt(o,o.return,E)}}break;case 27:r===null&&u&4&&W0(o);case 26:case 5:ir(n,o),r===null&&u&4&&Q0(o),u&512&&su(o,o.return);break;case 12:ir(n,o);break;case 13:ir(n,o),u&4&&tv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=aR.bind(null,o),wR(n,o))));break;case 22:if(u=o.memoizedState!==null||Ss,!u){r=r!==null&&r.memoizedState!==null||Mt,f=Ss;var m=Mt;Ss=u,(Mt=r)&&!m?sr(n,o,(o.subtreeFlags&8772)!==0):ir(n,o),Ss=f,Mt=m}break;case 30:break;default:ir(n,o)}}function Z0(n){var r=n.alternate;r!==null&&(n.alternate=null,Z0(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Gs(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var St=null,Cn=!1;function bs(n,r,o){for(o=o.child;o!==null;)ev(n,r,o),o=o.sibling}function ev(n,r,o){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(Ie,o)}catch{}switch(o.tag){case 26:Mt||Pi(o,r),bs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Mt||Pi(o,r);var u=St,f=Cn;cr(o.type)&&(St=o.stateNode,Cn=!1),bs(n,r,o),du(o.stateNode),St=u,Cn=f;break;case 5:Mt||Pi(o,r);case 6:if(u=St,f=Cn,St=null,bs(n,r,o),St=u,Cn=f,St!==null)if(Cn)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(o.stateNode)}catch(m){dt(o,r,m)}else try{St.removeChild(o.stateNode)}catch(m){dt(o,r,m)}break;case 18:St!==null&&(Cn?(n=St,Fv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Tu(n)):Fv(St,o.stateNode));break;case 4:u=St,f=Cn,St=o.stateNode.containerInfo,Cn=!0,bs(n,r,o),St=u,Cn=f;break;case 0:case 11:case 14:case 15:Mt||nr(2,o,r),Mt||nr(4,o,r),bs(n,r,o);break;case 1:Mt||(Pi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Y0(o,r,u)),bs(n,r,o);break;case 21:bs(n,r,o);break;case 22:Mt=(u=Mt)||o.memoizedState!==null,bs(n,r,o),Mt=u;break;default:bs(n,r,o)}}function tv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Tu(n)}catch(o){dt(r,r.return,o)}}function J1(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new X0),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new X0),r;default:throw Error(s(435,n.tag))}}function Um(n,r){var o=J1(n);r.forEach(function(u){var f=oR.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function Ln(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=n,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(cr(S.type)){St=S.stateNode,Cn=!1;break e}break;case 5:St=S.stateNode,Cn=!1;break e;case 3:case 4:St=S.stateNode.containerInfo,Cn=!0;break e}S=S.return}if(St===null)throw Error(s(160));ev(m,E,f),St=null,Cn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)nv(r,n),r=r.sibling}var mi=null;function nv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ln(r,n),Un(n),u&4&&(nr(3,n,n.return),iu(3,n),nr(5,n,n.return));break;case 1:Ln(r,n),Un(n),u&512&&(Mt||o===null||Pi(o,o.return)),u&64&&Ss&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=mi;if(Ln(r,n),Un(n),u&512&&(Mt||o===null||Pi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Qr]||m[Ft]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),ln(m,u,o),m[Ft]=n,Ot(m),u=m;break e;case"link":var E=Wv("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),ln(m,u,o),f.head.appendChild(m);break;case"meta":if(E=Wv("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),ln(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Ft]=n,Ot(m),u=m}n.stateNode=u}else Xv(f,n.type,n.stateNode);else n.stateNode=$v(f,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?Xv(f,n.type,n.stateNode):$v(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&km(n,n.memoizedProps,o.memoizedProps)}break;case 27:Ln(r,n),Un(n),u&512&&(Mt||o===null||Pi(o,o.return)),o!==null&&u&4&&km(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Ln(r,n),Un(n),u&512&&(Mt||o===null||Pi(o,o.return)),n.flags&32){f=n.stateNode;try{Yn(f,"")}catch(q){dt(n,n.return,q)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,km(n,f,o!==null?o.memoizedProps:f)),u&1024&&(Lm=!0);break;case 6:if(Ln(r,n),Un(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(q){dt(n,n.return,q)}}break;case 3:if(kh=null,f=mi,mi=xh(r.containerInfo),Ln(r,n),mi=f,Un(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Tu(r.containerInfo)}catch(q){dt(n,n.return,q)}Lm&&(Lm=!1,iv(n));break;case 4:u=mi,mi=xh(n.stateNode.containerInfo),Ln(r,n),Un(n),mi=u;break;case 12:Ln(r,n),Un(n);break;case 13:Ln(r,n),Un(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Hm=nn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Um(n,u)));break;case 22:f=n.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,z=Ss,Q=Mt;if(Ss=z||f,Mt=Q||I,Ln(r,n),Mt=Q,Ss=z,Un(n),u&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||I||Ss||Mt||Ea(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){I=o=r;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=I.stateNode;var X=I.memoizedProps.style,B=X!=null&&X.hasOwnProperty("display")?X.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(q){dt(I,I.return,q)}}}else if(r.tag===6){if(o===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(q){dt(I,I.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Um(n,o))));break;case 19:Ln(r,n),Un(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Um(n,u)));break;case 30:break;case 21:break;default:Ln(r,n),Un(n)}}function Un(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if($0(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=Pm(n);vh(n,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(Yn(E,""),o.flags&=-33);var S=Pm(n);vh(n,S,E);break;case 3:case 4:var I=o.stateNode.containerInfo,z=Pm(n);Vm(n,z,I);break;default:throw Error(s(161))}}catch(Q){dt(n,n.return,Q)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function iv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;iv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function ir(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)J0(n,r.alternate,r),r=r.sibling}function Ea(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:nr(4,r,r.return),Ea(r);break;case 1:Pi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Y0(r,r.return,o),Ea(r);break;case 27:du(r.stateNode);case 26:case 5:Pi(r,r.return),Ea(r);break;case 22:r.memoizedState===null&&Ea(r);break;case 30:Ea(r);break;default:Ea(r)}n=n.sibling}}function sr(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:sr(f,m,o),iu(4,m);break;case 1:if(sr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){dt(u,u.return,z)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)xy(I[f],S)}catch(z){dt(u,u.return,z)}}o&&E&64&&K0(m),su(m,m.return);break;case 27:W0(m);case 26:case 5:sr(f,m,o),o&&u===null&&E&4&&Q0(m),su(m,m.return);break;case 12:sr(f,m,o);break;case 13:sr(f,m,o),o&&E&4&&tv(f,m);break;case 22:m.memoizedState===null&&sr(f,m,o),su(m,m.return);break;case 30:break;default:sr(f,m,o)}r=r.sibling}}function jm(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&ql(o))}function zm(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ql(n))}function Vi(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)sv(n,r,o,u),r=r.sibling}function sv(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Vi(n,r,o,u),f&2048&&iu(9,r);break;case 1:Vi(n,r,o,u);break;case 3:Vi(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ql(n)));break;case 12:if(f&2048){Vi(n,r,o,u),n=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){dt(r,r.return,I)}}else Vi(n,r,o,u);break;case 13:Vi(n,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Vi(n,r,o,u):ru(n,r):m._visibility&2?Vi(n,r,o,u):(m._visibility|=2,bo(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&jm(E,r);break;case 24:Vi(n,r,o,u),f&2048&&zm(r.alternate,r);break;default:Vi(n,r,o,u)}}function bo(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=n,E=r,S=o,I=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:bo(m,E,S,I,f),iu(8,E);break;case 23:break;case 22:var Q=E.stateNode;E.memoizedState!==null?Q._visibility&2?bo(m,E,S,I,f):ru(m,E):(Q._visibility|=2,bo(m,E,S,I,f)),f&&z&2048&&jm(E.alternate,E);break;case 24:bo(m,E,S,I,f),f&&z&2048&&zm(E.alternate,E);break;default:bo(m,E,S,I,f)}r=r.sibling}}function ru(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:ru(o,u),f&2048&&jm(u.alternate,u);break;case 24:ru(o,u),f&2048&&zm(u.alternate,u);break;default:ru(o,u)}r=r.sibling}}var au=8192;function wo(n){if(n.subtreeFlags&au)for(n=n.child;n!==null;)rv(n),n=n.sibling}function rv(n){switch(n.tag){case 26:wo(n),n.flags&au&&n.memoizedState!==null&&LR(mi,n.memoizedState,n.memoizedProps);break;case 5:wo(n);break;case 3:case 4:var r=mi;mi=xh(n.stateNode.containerInfo),wo(n),mi=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=au,au=16777216,wo(n),au=r):wo(n));break;default:wo(n)}}function av(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function ou(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Xt=u,lv(u,n)}av(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ov(n),n=n.sibling}function ov(n){switch(n.tag){case 0:case 11:case 15:ou(n),n.flags&2048&&nr(9,n,n.return);break;case 3:ou(n);break;case 12:ou(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Eh(n)):ou(n);break;default:ou(n)}}function Eh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Xt=u,lv(u,n)}av(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:nr(8,r,r.return),Eh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Eh(r));break;default:Eh(r)}n=n.sibling}}function lv(n,r){for(;Xt!==null;){var o=Xt;switch(o.tag){case 0:case 11:case 15:nr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ql(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Xt=u;else e:for(o=n;Xt!==null;){u=Xt;var f=u.sibling,m=u.return;if(Z0(u),u===o){Xt=null;break e}if(f!==null){f.return=m,Xt=f;break e}Xt=m}}}var Z1={getCacheForType:function(n){var r=dn(Gt),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},eR=typeof WeakMap=="function"?WeakMap:Map,st=0,mt=null,Be=null,$e=0,rt=0,jn=null,rr=!1,Ao=!1,Bm=!1,ws=0,Ct=0,ar=0,Ta=0,Fm=0,ni=0,Ro=0,lu=null,Nn=null,qm=!1,Hm=0,Th=1/0,Sh=null,or=null,on=0,lr=null,Io=null,Co=0,Gm=0,Km=null,uv=null,uu=0,Ym=null;function zn(){if((st&2)!==0&&$e!==0)return $e&-$e;if(H.T!==null){var n=po;return n!==0?n:ep()}return qs()}function cv(){ni===0&&(ni=($e&536870912)===0||et?yl():536870912);var n=ti.current;return n!==null&&(n.flags|=32),ni}function Bn(n,r,o){(n===mt&&(rt===2||rt===9)||n.cancelPendingCommit!==null)&&(No(n,0),ur(n,$e,ni,!1)),ns(n,o),((st&2)===0||n!==mt)&&(n===mt&&((st&2)===0&&(Ta|=o),Ct===4&&ur(n,$e,ni,!1)),Li(n))}function hv(n,r,o){if((st&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||Yr(n,r),f=u?iR(n,r):Wm(n,r,!0),m=u;do{if(f===0){Ao&&!u&&ur(n,r,0,!1);break}else{if(o=n.current.alternate,m&&!tR(o)){f=Wm(n,r,!1),m=!1;continue}if(f===2){if(m=r,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=n;f=lu;var I=S.current.memoizedState.isDehydrated;if(I&&(No(S,E).flags|=256),E=Wm(S,E,!1),E!==2){if(Bm&&!I){S.errorRecoveryDisabledLanes|=m,Ta|=m,f=4;break e}m=Nn,Nn=f,m!==null&&(Nn===null?Nn=m:Nn.push.apply(Nn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){No(n,0),ur(n,r,0,!0);break}e:{switch(u=n,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:ur(u,r,ni,!rr);break e;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Hm+300-nn(),10<f)){if(ur(u,r,ni,!rr),Ga(u,0,!0)!==0)break e;u.timeoutHandle=zv(fv.bind(null,u,o,Nn,Sh,qm,r,ni,Ta,Ro,rr,m,2,-0,0),f);break e}fv(u,o,Nn,Sh,qm,r,ni,Ta,Ro,rr,m,0,-0,0)}}break}while(!0);Li(n)}function fv(n,r,o,u,f,m,E,S,I,z,Q,X,B,q){if(n.timeoutHandle=-1,X=r.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(gu={stylesheets:null,count:0,unsuspend:VR},rv(r),X=UR(),X!==null)){n.cancelPendingCommit=X(vv.bind(null,n,r,m,o,u,f,E,S,I,Q,1,B,q)),ur(n,m,E,!z);return}vv(n,r,m,o,u,f,E,S,I)}function tR(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Pn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ur(n,r,o,u){r&=~Fm,r&=~Ta,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var m=31-Et(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Si(n,o,r)}function bh(){return(st&6)===0?(cu(0),!1):!0}function Qm(){if(Be!==null){if(rt===0)var n=Be.return;else n=Be,gs=pa=null,hm(n),To=null,eu=0,n=Be;for(;n!==null;)G0(n.alternate,n),n=n.return;Be=null}}function No(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,vR(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Qm(),mt=n,Be=o=ds(n.current,null),$e=r,rt=0,jn=null,rr=!1,Ao=Yr(n,r),Bm=!1,Ro=ni=Fm=Ta=ar=Ct=0,Nn=lu=null,qm=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-Et(u),m=1<<f;r|=n[f],u&=~m}return ws=r,Gc(),o}function dv(n,r){Ue=null,H.H=ch,r===Gl||r===eh?(r=Dy(),rt=3):r===Iy?(r=Dy(),rt=4):rt=r===O0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,jn=r,Be===null&&(Ct=1,ph(n,Xn(r,n.current)))}function mv(){var n=H.H;return H.H=ch,n===null?ch:n}function pv(){var n=H.A;return H.A=Z1,n}function $m(){Ct=4,rr||($e&4194048)!==$e&&ti.current!==null||(Ao=!0),(ar&134217727)===0&&(Ta&134217727)===0||mt===null||ur(mt,$e,ni,!1)}function Wm(n,r,o){var u=st;st|=2;var f=mv(),m=pv();(mt!==n||$e!==r)&&(Sh=null,No(n,r)),r=!1;var E=Ct;e:do try{if(rt!==0&&Be!==null){var S=Be,I=jn;switch(rt){case 8:Qm(),E=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(r=!0);var z=rt;if(rt=0,jn=null,Do(n,S,I,z),o&&Ao){E=0;break e}break;default:z=rt,rt=0,jn=null,Do(n,S,I,z)}}nR(),E=Ct;break}catch(Q){dv(n,Q)}while(!0);return r&&n.shellSuspendCounter++,gs=pa=null,st=u,H.H=f,H.A=m,Be===null&&(mt=null,$e=0,Gc()),E}function nR(){for(;Be!==null;)gv(Be)}function iR(n,r){var o=st;st|=2;var u=mv(),f=pv();mt!==n||$e!==r?(Sh=null,Th=nn()+500,No(n,r)):Ao=Yr(n,r);e:do try{if(rt!==0&&Be!==null){r=Be;var m=jn;t:switch(rt){case 1:rt=0,jn=null,Do(n,r,m,1);break;case 2:case 9:if(Cy(m)){rt=0,jn=null,_v(r);break}r=function(){rt!==2&&rt!==9||mt!==n||(rt=7),Li(n)},m.then(r,r);break e;case 3:rt=7;break e;case 4:rt=5;break e;case 7:Cy(m)?(rt=0,jn=null,_v(r)):(rt=0,jn=null,Do(n,r,m,7));break;case 5:var E=null;switch(Be.tag){case 26:E=Be.memoizedState;case 5:case 27:var S=Be;if(!E||Jv(E)){rt=0,jn=null;var I=S.sibling;if(I!==null)Be=I;else{var z=S.return;z!==null?(Be=z,wh(z)):Be=null}break t}}rt=0,jn=null,Do(n,r,m,5);break;case 6:rt=0,jn=null,Do(n,r,m,6);break;case 8:Qm(),Ct=6;break e;default:throw Error(s(462))}}sR();break}catch(Q){dv(n,Q)}while(!0);return gs=pa=null,H.H=u,H.A=f,st=o,Be!==null?0:(mt=null,$e=0,Gc(),Ct)}function sR(){for(;Be!==null&&!Fr();)gv(Be)}function gv(n){var r=q0(n.alternate,n,ws);n.memoizedProps=n.pendingProps,r===null?wh(n):Be=r}function _v(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=L0(o,r,r.pendingProps,r.type,void 0,$e);break;case 11:r=L0(o,r,r.pendingProps,r.type.render,r.ref,$e);break;case 5:hm(r);default:G0(o,r),r=Be=yy(r,ws),r=q0(o,r,ws)}n.memoizedProps=n.pendingProps,r===null?wh(n):Be=r}function Do(n,r,o,u){gs=pa=null,hm(r),To=null,eu=0;var f=r.return;try{if(Y1(n,f,r,o,$e)){Ct=1,ph(n,Xn(o,n.current)),Be=null;return}}catch(m){if(f!==null)throw Be=f,m;Ct=1,ph(n,Xn(o,n.current)),Be=null;return}r.flags&32768?(et||u===1?n=!0:Ao||($e&536870912)!==0?n=!1:(rr=n=!0,(u===2||u===9||u===3||u===6)&&(u=ti.current,u!==null&&u.tag===13&&(u.flags|=16384))),yv(r,n)):wh(r)}function wh(n){var r=n;do{if((r.flags&32768)!==0){yv(r,rr);return}n=r.return;var o=$1(r.alternate,r,ws);if(o!==null){Be=o;return}if(r=r.sibling,r!==null){Be=r;return}Be=r=n}while(r!==null);Ct===0&&(Ct=5)}function yv(n,r){do{var o=W1(n.alternate,n);if(o!==null){o.flags&=32767,Be=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Be=n;return}Be=n=o}while(n!==null);Ct=6,Be=null}function vv(n,r,o,u,f,m,E,S,I){n.cancelPendingCommit=null;do Ah();while(on!==0);if((st&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=zd,El(n,o,m,E,S,I),n===mt&&(Be=mt=null,$e=0),Io=r,lr=n,Co=o,Gm=m,Km=f,uv=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,lR(Rt,function(){return wv(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=H.T,H.T=null,f=ee.p,ee.p=2,E=st,st|=4;try{X1(n,r,o)}finally{st=E,ee.p=f,H.T=u}}on=1,Ev(),Tv(),Sv()}}function Ev(){if(on===1){on=0;var n=lr,r=Io,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=H.T,H.T=null;var u=ee.p;ee.p=2;var f=st;st|=4;try{nv(r,n);var m=lp,E=ly(n.containerInfo),S=m.focusedElem,I=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&oy(S.ownerDocument.documentElement,S)){if(I!==null&&Pd(S)){var z=I.start,Q=I.end;if(Q===void 0&&(Q=z),"selectionStart"in S)S.selectionStart=z,S.selectionEnd=Math.min(Q,S.value.length);else{var X=S.ownerDocument||document,B=X&&X.defaultView||window;if(B.getSelection){var q=B.getSelection(),Re=S.textContent.length,Te=Math.min(I.start,Re),ut=I.end===void 0?Te:Math.min(I.end,Re);!q.extend&&Te>ut&&(E=ut,ut=Te,Te=E);var L=ay(S,Te),x=ay(S,ut);if(L&&x&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==x.node||q.focusOffset!==x.offset)){var j=X.createRange();j.setStart(L.node,L.offset),q.removeAllRanges(),Te>ut?(q.addRange(j),q.extend(x.node,x.offset)):(j.setEnd(x.node,x.offset),q.addRange(j))}}}}for(X=[],q=S;q=q.parentNode;)q.nodeType===1&&X.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<X.length;S++){var $=X[S];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Lh=!!op,lp=op=null}finally{st=f,ee.p=u,H.T=o}}n.current=r,on=2}}function Tv(){if(on===2){on=0;var n=lr,r=Io,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=H.T,H.T=null;var u=ee.p;ee.p=2;var f=st;st|=4;try{J0(n,r.alternate,r)}finally{st=f,ee.p=u,H.T=o}}on=3}}function Sv(){if(on===4||on===3){on=0,Ha();var n=lr,r=Io,o=Co,u=uv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?on=5:(on=0,Io=lr=null,bv(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(or=null),Ka(o),r=r.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(Ie,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=H.T,f=ee.p,ee.p=2,H.T=null;try{for(var m=n.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{H.T=r,ee.p=f}}(Co&3)!==0&&Ah(),Li(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Ym?uu++:(uu=0,Ym=n):uu=0,cu(0)}}function bv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,ql(r)))}function Ah(n){return Ev(),Tv(),Sv(),wv()}function wv(){if(on!==5)return!1;var n=lr,r=Gm;Gm=0;var o=Ka(Co),u=H.T,f=ee.p;try{ee.p=32>o?32:o,H.T=null,o=Km,Km=null;var m=lr,E=Co;if(on=0,Io=lr=null,Co=0,(st&6)!==0)throw Error(s(331));var S=st;if(st|=4,ov(m.current),sv(m,m.current,E,o),st=S,cu(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(Ie,m)}catch{}return!0}finally{ee.p=f,H.T=u,bv(n,r)}}function Av(n,r,o){r=Xn(o,r),r=Am(n.stateNode,r,2),n=Js(n,r,2),n!==null&&(ns(n,2),Li(n))}function dt(n,r,o){if(n.tag===3)Av(n,n,o);else for(;r!==null;){if(r.tag===3){Av(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=Xn(o,n),o=N0(2),u=Js(r,o,2),u!==null&&(D0(o,u,r,n),ns(u,2),Li(u));break}}r=r.return}}function Xm(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new eR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Bm=!0,f.add(o),n=rR.bind(null,n,r,o),r.then(n,n))}function rR(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,mt===n&&($e&o)===o&&(Ct===4||Ct===3&&($e&62914560)===$e&&300>nn()-Hm?(st&2)===0&&No(n,0):Fm|=o,Ro===$e&&(Ro=0)),Li(n)}function Rv(n,r){r===0&&(r=vl()),n=co(n,r),n!==null&&(ns(n,r),Li(n))}function aR(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Rv(n,o)}function oR(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),Rv(n,o)}function lR(n,r){return Ji(n,r)}var Rh=null,Oo=null,Jm=!1,Ih=!1,Zm=!1,Sa=0;function Li(n){n!==Oo&&n.next===null&&(Oo===null?Rh=Oo=n:Oo=Oo.next=n),Ih=!0,Jm||(Jm=!0,cR())}function cu(n,r){if(!Zm&&Ih){Zm=!0;do for(var o=!1,u=Rh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-Et(42|n)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Dv(u,m))}else m=$e,m=Ga(u,u===mt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Yr(u,m)||(o=!0,Dv(u,m));u=u.next}while(o);Zm=!1}}function uR(){Iv()}function Iv(){Ih=Jm=!1;var n=0;Sa!==0&&(yR()&&(n=Sa),Sa=0);for(var r=nn(),o=null,u=Rh;u!==null;){var f=u.next,m=Cv(u,r);m===0?(u.next=null,o===null?Rh=f:o.next=f,f===null&&(Oo=o)):(o=u,(n!==0||(m&3)!==0)&&(Ih=!0)),u=f}cu(n)}function Cv(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-Et(m),S=1<<E,I=f[E];I===-1?((S&o)===0||(S&u)!==0)&&(f[E]=_l(S,r)):I<=r&&(n.expiredLanes|=S),m&=~S}if(r=mt,o=$e,o=Ga(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(rt===2||rt===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Zi(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Yr(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&Zi(u),Ka(o)){case 2:case 8:o=Hr;break;case 32:o=Rt;break;case 268435456:o=he;break;default:o=Rt}return u=Nv.bind(null,n),o=Ji(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&Zi(u),n.callbackPriority=2,n.callbackNode=null,2}function Nv(n,r){if(on!==0&&on!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Ah()&&n.callbackNode!==o)return null;var u=$e;return u=Ga(n,n===mt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(hv(n,u,r),Cv(n,nn()),n.callbackNode!=null&&n.callbackNode===o?Nv.bind(null,n):null)}function Dv(n,r){if(Ah())return null;hv(n,r,!0)}function cR(){ER(function(){(st&6)!==0?Ji(qr,uR):Iv()})}function ep(){return Sa===0&&(Sa=yl()),Sa}function Ov(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ja(""+n)}function xv(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function hR(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=Ov((f[Pt]||null).action),E=u.submitter;E&&(r=(r=E[Pt]||null)?Ov(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new Za("action","action",null,u,f);n.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Sa!==0){var I=E?xv(f,E):new FormData(f);Em(o,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(S.preventDefault(),I=E?xv(f,E):new FormData(f),Em(o,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var tp=0;tp<jd.length;tp++){var np=jd[tp],fR=np.toLowerCase(),dR=np[0].toUpperCase()+np.slice(1);di(fR,"on"+dR)}di(hy,"onAnimationEnd"),di(fy,"onAnimationIteration"),di(dy,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(D1,"onTransitionRun"),di(O1,"onTransitionStart"),di(x1,"onTransitionCancel"),di(my,"onTransitionEnd"),ss("onMouseEnter",["mouseout","mouseover"]),ss("onMouseLeave",["mouseout","mouseover"]),ss("onPointerEnter",["pointerout","pointerover"]),ss("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));function Mv(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],I=S.instance,z=S.currentTarget;if(S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=z;try{m(f)}catch(Q){mh(Q)}f.currentTarget=null,m=I}else for(E=0;E<u.length;E++){if(S=u[E],I=S.instance,z=S.currentTarget,S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=z;try{m(f)}catch(Q){mh(Q)}f.currentTarget=null,m=I}}}}function Fe(n,r){var o=r[Sl];o===void 0&&(o=r[Sl]=new Set);var u=n+"__bubble";o.has(u)||(kv(r,n,2,!1),o.add(u))}function ip(n,r,o){var u=0;r&&(u|=4),kv(o,n,u,r)}var Ch="_reactListening"+Math.random().toString(36).slice(2);function sp(n){if(!n[Ch]){n[Ch]=!0,bl.forEach(function(o){o!=="selectionchange"&&(mR.has(o)||ip(o,!1,n),ip(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ch]||(r[Ch]=!0,ip("selectionchange",!1,r))}}function kv(n,r,o,u){switch(sE(r)){case 2:var f=BR;break;case 8:f=FR;break;default:f=yp}o=f.bind(null,r,o,n),f=void 0,!$n||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function rp(n,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=is(S),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Dc(function(){var z=m,Q=Qn(o),X=[];e:{var B=py.get(n);if(B!==void 0){var q=Za,Re=n;switch(n){case"keypress":if(Ci(o)===0)break e;case"keydown":case"keyup":q=ro;break;case"focusin":Re="focus",q=no;break;case"focusout":Re="blur",q=no;break;case"beforeblur":case"afterblur":q=no;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Uc;break;case hy:case fy:case dy:q=io;break;case my:q=zc;break;case"scroll":case"scrollend":q=Oc;break;case"wheel":q=ao;break;case"copy":case"cut":case"paste":q=so;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Pl;break;case"toggle":case"beforetoggle":q=Fc}var Te=(r&4)!==0,ut=!Te&&(n==="scroll"||n==="scrollend"),L=Te?B!==null?B+"Capture":null:B;Te=[];for(var x=z,j;x!==null;){var $=x;if(j=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||j===null||L===null||($=ta(x,L),$!=null&&Te.push(fu(x,$,j))),ut)break;x=x.return}0<Te.length&&(B=new q(B,Re,null,o,Q),X.push({event:B,listeners:Te}))}}if((r&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",B&&o!==os&&(Re=o.relatedTarget||o.fromElement)&&(is(Re)||Re[Kn]))break e;if((q||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,q?(Re=o.relatedTarget||o.toElement,q=z,Re=Re?is(Re):null,Re!==null&&(ut=l(Re),Te=Re.tag,Re!==ut||Te!==5&&Te!==27&&Te!==6)&&(Re=null)):(q=null,Re=z),q!==Re)){if(Te=Wn,$="onMouseLeave",L="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(Te=Pl,$="onPointerLeave",L="onPointerEnter",x="pointer"),ut=q==null?B:wi(q),j=Re==null?B:wi(Re),B=new Te($,x+"leave",q,o,Q),B.target=ut,B.relatedTarget=j,$=null,is(Q)===z&&(Te=new Te(L,x+"enter",Re,o,Q),Te.target=j,Te.relatedTarget=ut,$=Te),ut=$,q&&Re)t:{for(Te=q,L=Re,x=0,j=Te;j;j=xo(j))x++;for(j=0,$=L;$;$=xo($))j++;for(;0<x-j;)Te=xo(Te),x--;for(;0<j-x;)L=xo(L),j--;for(;x--;){if(Te===L||L!==null&&Te===L.alternate)break t;Te=xo(Te),L=xo(L)}Te=null}else Te=null;q!==null&&Pv(X,B,q,Te,!1),Re!==null&&ut!==null&&Pv(X,ut,Re,Te,!0)}}e:{if(B=z?wi(z):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var fe=ey;else if(Ht(B))if(ty)fe=I1;else{fe=A1;var ze=w1}else q=B.nodeName,!q||q.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&Cl(z.elementType)&&(fe=ey):fe=R1;if(fe&&(fe=fe(n,z))){fs(X,fe,o,Q);break e}ze&&ze(n,B,z),n==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Ys(B,"number",B.value)}switch(ze=z?wi(z):window,n){case"focusin":(Ht(ze)||ze.contentEditable==="true")&&(oo=ze,Vd=z,Ul=null);break;case"focusout":Ul=Vd=oo=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,uy(X,o,Q);break;case"selectionchange":if(N1)break;case"keydown":case"keyup":uy(X,o,Q)}var me;if(Oi)e:{switch(n){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ye?G(n,o)&&(Se="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(v&&o.locale!=="ko"&&(Ye||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ye&&(me=Dl()):(Ii=Q,Qs="value"in Ii?Ii.value:Ii.textContent,Ye=!0)),ze=Nh(z,Se),0<ze.length&&(Se=new Ml(Se,n,null,o,Q),X.push({event:Se,listeners:ze}),me?Se.data=me:(me=ie(o),me!==null&&(Se.data=me)))),(me=_?qt(n,o):Qe(n,o))&&(Se=Nh(z,"onBeforeInput"),0<Se.length&&(ze=new Ml("onBeforeInput","beforeinput",null,o,Q),X.push({event:ze,listeners:Se}),ze.data=me)),hR(X,n,z,o,Q)}Mv(X,r)})}function fu(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Nh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=ta(n,o),f!=null&&u.unshift(fu(n,f,m)),f=ta(n,r),f!=null&&u.push(fu(n,f,m))),n.tag===3)return u;n=n.return}return[]}function xo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Pv(n,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,I=S.alternate,z=S.stateNode;if(S=S.tag,I!==null&&I===u)break;S!==5&&S!==26&&S!==27||z===null||(I=z,f?(z=ta(o,m),z!=null&&E.unshift(fu(o,z,I))):f||(z=ta(o,m),z!=null&&E.push(fu(o,z,I)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var pR=/\r\n?/g,gR=/\u0000|\uFFFD/g;function Vv(n){return(typeof n=="string"?n:""+n).replace(pR,`
`).replace(gR,"")}function Lv(n,r){return r=Vv(r),Vv(n)===r}function Dh(){}function lt(n,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Yn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Yn(n,""+u);break;case"className":Ai(n,"class",u);break;case"tabIndex":Ai(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(n,o,u);break;case"style":Il(n,u,m);break;case"data":if(r!=="object"){Ai(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ja(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&lt(n,r,"name",f.name,f,null),lt(n,r,"formEncType",f.formEncType,f,null),lt(n,r,"formMethod",f.formMethod,f,null),lt(n,r,"formTarget",f.formTarget,f,null)):(lt(n,r,"encType",f.encType,f,null),lt(n,r,"method",f.method,f,null),lt(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ja(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Dh);break;case"onScroll":u!=null&&Fe("scroll",n);break;case"onScrollEnd":u!=null&&Fe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ja(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Fe("beforetoggle",n),Fe("toggle",n),Ks(n,"popover",u);break;case"xlinkActuate":sn(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":sn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":sn(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":sn(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":sn(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":sn(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":sn(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":sn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":sn(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ks(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Nd.get(o)||o,Ks(n,o,u))}}function ap(n,r,o,u,f,m){switch(o){case"style":Il(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Yn(n,u):(typeof u=="number"||typeof u=="bigint")&&Yn(n,""+u);break;case"onScroll":u!=null&&Fe("scroll",n);break;case"onScrollEnd":u!=null&&Fe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Dh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ya.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=n[Pt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Ks(n,o,u)}}}function ln(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",n),Fe("load",n);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:lt(n,r,m,E,o,null)}}f&&lt(n,r,"srcSet",o.srcSet,o,null),u&&lt(n,r,"src",o.src,o,null);return;case"input":Fe("invalid",n);var S=m=E=f=null,I=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":E=Q;break;case"checked":I=Q;break;case"defaultChecked":z=Q;break;case"value":m=Q;break;case"defaultValue":S=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:lt(n,r,u,Q,o,null)}}Jr(n,m,S,I,z,E,f,!1),Xa(n);return;case"select":Fe("invalid",n),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:lt(n,r,f,S,o,null)}r=m,o=E,n.multiple=!!u,r!=null?as(n,!!u,r,!1):o!=null&&as(n,!!u,o,!0);return;case"textarea":Fe("invalid",n),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:lt(n,r,E,S,o,null)}Zr(n,u,f,m),Xa(n);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:lt(n,r,I,u,o,null)}return;case"dialog":Fe("beforetoggle",n),Fe("toggle",n),Fe("cancel",n),Fe("close",n);break;case"iframe":case"object":Fe("load",n);break;case"video":case"audio":for(u=0;u<hu.length;u++)Fe(hu[u],n);break;case"image":Fe("error",n),Fe("load",n);break;case"details":Fe("toggle",n);break;case"embed":case"source":case"link":Fe("error",n),Fe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:lt(n,r,z,u,o,null)}return;default:if(Cl(r)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&ap(n,r,Q,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&lt(n,r,S,u,o,null))}function _R(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,I=null,z=null,Q=null;for(q in o){var X=o[q];if(o.hasOwnProperty(q)&&X!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":I=X;default:u.hasOwnProperty(q)||lt(n,r,q,null,u,X)}}for(var B in u){var q=u[B];if(X=o[B],u.hasOwnProperty(B)&&(q!=null||X!=null))switch(B){case"type":m=q;break;case"name":f=q;break;case"checked":z=q;break;case"defaultChecked":Q=q;break;case"value":E=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==X&&lt(n,r,B,q,u,X)}}kn(n,E,S,I,z,Q,m,f);return;case"select":q=E=S=B=null;for(m in o)if(I=o[m],o.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":q=I;default:u.hasOwnProperty(m)||lt(n,r,m,null,u,I)}for(f in u)if(m=u[f],I=o[f],u.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":B=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==I&&lt(n,r,f,m,u,I)}r=S,o=E,u=q,B!=null?as(n,!!o,B,!1):!!u!=!!o&&(r!=null?as(n,!!o,r,!0):as(n,!!o,o?[]:"",!1));return;case"textarea":q=B=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:lt(n,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":B=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&lt(n,r,E,f,u,m)}at(n,B,q);return;case"option":for(var Re in o)if(B=o[Re],o.hasOwnProperty(Re)&&B!=null&&!u.hasOwnProperty(Re))switch(Re){case"selected":n.selected=!1;break;default:lt(n,r,Re,null,u,B)}for(I in u)if(B=u[I],q=o[I],u.hasOwnProperty(I)&&B!==q&&(B!=null||q!=null))switch(I){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:lt(n,r,I,B,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in o)B=o[Te],o.hasOwnProperty(Te)&&B!=null&&!u.hasOwnProperty(Te)&&lt(n,r,Te,null,u,B);for(z in u)if(B=u[z],q=o[z],u.hasOwnProperty(z)&&B!==q&&(B!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:lt(n,r,z,B,u,q)}return;default:if(Cl(r)){for(var ut in o)B=o[ut],o.hasOwnProperty(ut)&&B!==void 0&&!u.hasOwnProperty(ut)&&ap(n,r,ut,void 0,u,B);for(Q in u)B=u[Q],q=o[Q],!u.hasOwnProperty(Q)||B===q||B===void 0&&q===void 0||ap(n,r,Q,B,u,q);return}}for(var L in o)B=o[L],o.hasOwnProperty(L)&&B!=null&&!u.hasOwnProperty(L)&&lt(n,r,L,null,u,B);for(X in u)B=u[X],q=o[X],!u.hasOwnProperty(X)||B===q||B==null&&q==null||lt(n,r,X,B,u,q)}var op=null,lp=null;function Oh(n){return n.nodeType===9?n:n.ownerDocument}function Uv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function up(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cp=null;function yR(){var n=window.event;return n&&n.type==="popstate"?n===cp?!1:(cp=n,!0):(cp=null,!1)}var zv=typeof setTimeout=="function"?setTimeout:void 0,vR=typeof clearTimeout=="function"?clearTimeout:void 0,Bv=typeof Promise=="function"?Promise:void 0,ER=typeof queueMicrotask=="function"?queueMicrotask:typeof Bv<"u"?function(n){return Bv.resolve(null).then(n).catch(TR)}:zv;function TR(n){setTimeout(function(){throw n})}function cr(n){return n==="head"}function Fv(n,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&du(E.documentElement),o&2&&du(E.body),o&4)for(o=E.head,du(o),E=o.firstChild;E;){var S=E.nextSibling,I=E.nodeName;E[Qr]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){n.removeChild(m),Tu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Tu(r)}function hp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":hp(o),Gs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function SR(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Qr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=pi(n.nextSibling),n===null)break}return null}function bR(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=pi(n.nextSibling),n===null))return null;return n}function fp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function wR(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function pi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var dp=null;function qv(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function Hv(n,r,o){switch(r=Oh(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function du(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Gs(n)}var ii=new Map,Gv=new Set;function xh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var As=ee.d;ee.d={f:AR,r:RR,D:IR,C:CR,L:NR,m:DR,X:xR,S:OR,M:MR};function AR(){var n=As.f(),r=bh();return n||r}function RR(n){var r=bi(n);r!==null&&r.tag===5&&r.type==="form"?h0(r):As.r(n)}var Mo=typeof document>"u"?null:document;function Kv(n,r,o){var u=Mo;if(u&&typeof r=="string"&&r){var f=Vt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),Gv.has(f)||(Gv.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),ln(r,"link",n),Ot(r),u.head.appendChild(r)))}}function IR(n){As.D(n),Kv("dns-prefetch",n,null)}function CR(n,r){As.C(n,r),Kv("preconnect",n,r)}function NR(n,r,o){As.L(n,r,o);var u=Mo;if(u&&n&&r){var f='link[rel="preload"][as="'+Vt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Vt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Vt(o.imageSizes)+'"]')):f+='[href="'+Vt(n)+'"]';var m=f;switch(r){case"style":m=ko(n);break;case"script":m=Po(n)}ii.has(m)||(n=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),ii.set(m,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(mu(m))||r==="script"&&u.querySelector(pu(m))||(r=u.createElement("link"),ln(r,"link",n),Ot(r),u.head.appendChild(r)))}}function DR(n,r){As.m(n,r);var o=Mo;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Vt(u)+'"][href="'+Vt(n)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Po(n)}if(!ii.has(m)&&(n=y({rel:"modulepreload",href:n},r),ii.set(m,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(pu(m)))return}u=o.createElement("link"),ln(u,"link",n),Ot(u),o.head.appendChild(u)}}}function OR(n,r,o){As.S(n,r,o);var u=Mo;if(u&&n){var f=Sn(u).hoistableStyles,m=ko(n);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(mu(m)))S.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":r},o),(o=ii.get(m))&&mp(n,o);var I=E=u.createElement("link");Ot(I),ln(I,"link",n),I._p=new Promise(function(z,Q){I.onload=z,I.onerror=Q}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Mh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function xR(n,r){As.X(n,r);var o=Mo;if(o&&n){var u=Sn(o).hoistableScripts,f=Po(n),m=u.get(f);m||(m=o.querySelector(pu(f)),m||(n=y({src:n,async:!0},r),(r=ii.get(f))&&pp(n,r),m=o.createElement("script"),Ot(m),ln(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function MR(n,r){As.M(n,r);var o=Mo;if(o&&n){var u=Sn(o).hoistableScripts,f=Po(n),m=u.get(f);m||(m=o.querySelector(pu(f)),m||(n=y({src:n,async:!0,type:"module"},r),(r=ii.get(f))&&pp(n,r),m=o.createElement("script"),Ot(m),ln(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function Yv(n,r,o,u){var f=(f=Ae.current)?xh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=ko(o.href),o=Sn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=ko(o.href);var m=Sn(f).hoistableStyles,E=m.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=f.querySelector(mu(n)))&&!m._p&&(E.instance=m,E.state.loading=5),ii.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ii.set(n,o),m||kR(f,n,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Po(o),o=Sn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function ko(n){return'href="'+Vt(n)+'"'}function mu(n){return'link[rel="stylesheet"]['+n+"]"}function Qv(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function kR(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),ln(r,"link",o),Ot(r),n.head.appendChild(r))}function Po(n){return'[src="'+Vt(n)+'"]'}function pu(n){return"script[async]"+n}function $v(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Vt(o.href)+'"]');if(u)return r.instance=u,Ot(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Ot(u),ln(u,"style",f),Mh(u,o.precedence,n),r.instance=u;case"stylesheet":f=ko(o.href);var m=n.querySelector(mu(f));if(m)return r.state.loading|=4,r.instance=m,Ot(m),m;u=Qv(o),(f=ii.get(f))&&mp(u,f),m=(n.ownerDocument||n).createElement("link"),Ot(m);var E=m;return E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),ln(m,"link",u),r.state.loading|=4,Mh(m,o.precedence,n),r.instance=m;case"script":return m=Po(o.src),(f=n.querySelector(pu(m)))?(r.instance=f,Ot(f),f):(u=o,(f=ii.get(m))&&(u=y({},o),pp(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),Ot(f),ln(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Mh(u,o.precedence,n));return r.instance}function Mh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function mp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function pp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var kh=null;function Wv(n,r,o){if(kh===null){var u=new Map,f=kh=new Map;f.set(o,u)}else f=kh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var m=o[f];if(!(m[Qr]||m[Ft]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=n+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function Xv(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function PR(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Jv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var gu=null;function VR(){}function LR(n,r,o){if(gu===null)throw Error(s(475));var u=gu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=ko(o.href),m=n.querySelector(mu(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Ph.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=m,Ot(m);return}m=n.ownerDocument||n,o=Qv(o),(f=ii.get(f))&&mp(o,f),m=m.createElement("link"),Ot(m);var E=m;E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),ln(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Ph.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function UR(){if(gu===null)throw Error(s(475));var n=gu;return n.stylesheets&&n.count===0&&gp(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&gp(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Ph(){if(this.count--,this.count===0){if(this.stylesheets)gp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Vh=null;function gp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Vh=new Map,r.forEach(jR,n),Vh=null,Ph.call(n))}function jR(n,r){if(!(r.state.loading&4)){var o=Vh.get(n);if(o)var u=o.get(null);else{o=new Map,Vh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Ph.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var _u={$$typeof:oe,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function zR(n,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ts(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.hiddenUpdates=ts(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Zv(n,r,o,u,f,m,E,S,I,z,Q,X){return n=new zR(n,r,o,E,S,I,z,X),r=1,m===!0&&(r|=24),m=Vn(3,null,null,r),n.current=m,m.stateNode=n,r=Xd(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},tm(m),n}function eE(n){return n?(n=ho,n):ho}function tE(n,r,o,u,f,m){f=eE(f),u.context===null?u.context=f:u.pendingContext=f,u=Xs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Js(n,u,r),o!==null&&(Bn(o,n,r),Yl(o,n,r))}function nE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function _p(n,r){nE(n,r),(n=n.alternate)&&nE(n,r)}function iE(n){if(n.tag===13){var r=co(n,67108864);r!==null&&Bn(r,n,67108864),_p(n,67108864)}}var Lh=!0;function BR(n,r,o,u){var f=H.T;H.T=null;var m=ee.p;try{ee.p=2,yp(n,r,o,u)}finally{ee.p=m,H.T=f}}function FR(n,r,o,u){var f=H.T;H.T=null;var m=ee.p;try{ee.p=8,yp(n,r,o,u)}finally{ee.p=m,H.T=f}}function yp(n,r,o,u){if(Lh){var f=vp(u);if(f===null)rp(n,r,u,Uh,o),rE(n,u);else if(HR(f,n,r,o,u))u.stopPropagation();else if(rE(n,u),r&4&&-1<qR.indexOf(n)){for(;f!==null;){var m=bi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ci(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var I=1<<31-Et(E);S.entanglements[1]|=I,E&=~I}Li(m),(st&6)===0&&(Th=nn()+500,cu(0))}}break;case 13:S=co(m,2),S!==null&&Bn(S,m,2),bh(),_p(m,2)}if(m=vp(u),m===null&&rp(n,r,u,Uh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else rp(n,r,u,null,o)}}function vp(n){return n=Qn(n),Ep(n)}var Uh=null;function Ep(n){if(Uh=null,n=is(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Uh=n,null}function sE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gl()){case qr:return 2;case Hr:return 8;case Rt:case de:return 32;case he:return 268435456;default:return 32}default:return 32}}var Tp=!1,hr=null,fr=null,dr=null,yu=new Map,vu=new Map,mr=[],qR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rE(n,r){switch(n){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":yu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(r.pointerId)}}function Eu(n,r,o,u,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=bi(r),r!==null&&iE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function HR(n,r,o,u,f){switch(r){case"focusin":return hr=Eu(hr,n,r,o,u,f),!0;case"dragenter":return fr=Eu(fr,n,r,o,u,f),!0;case"mouseover":return dr=Eu(dr,n,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return yu.set(m,Eu(yu.get(m)||null,n,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,vu.set(m,Eu(vu.get(m)||null,n,r,o,u,f)),!0}return!1}function aE(n){var r=is(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,bc(n.priority,function(){if(o.tag===13){var u=zn();u=Fs(u);var f=co(o,u);f!==null&&Bn(f,o,u),_p(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=vp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);os=u,o.target.dispatchEvent(u),os=null}else return r=bi(o),r!==null&&iE(r),n.blockedOn=o,!1;r.shift()}return!0}function oE(n,r,o){jh(n)&&o.delete(r)}function GR(){Tp=!1,hr!==null&&jh(hr)&&(hr=null),fr!==null&&jh(fr)&&(fr=null),dr!==null&&jh(dr)&&(dr=null),yu.forEach(oE),vu.forEach(oE)}function zh(n,r){n.blockedOn===r&&(n.blockedOn=null,Tp||(Tp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,GR)))}var Bh=null;function lE(n){Bh!==n&&(Bh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Bh===n&&(Bh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(Ep(u||o)===null)continue;break}var m=bi(o);m!==null&&(n.splice(r,3),r-=3,Em(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Tu(n){function r(I){return zh(I,n)}hr!==null&&zh(hr,n),fr!==null&&zh(fr,n),dr!==null&&zh(dr,n),yu.forEach(r),vu.forEach(r);for(var o=0;o<mr.length;o++){var u=mr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<mr.length&&(o=mr[0],o.blockedOn===null);)aE(o),o.blockedOn===null&&mr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Pt]||null;if(typeof m=="function")E||lE(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Pt]||null)S=E.formAction;else if(Ep(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),lE(o)}}}function Sp(n){this._internalRoot=n}Fh.prototype.render=Sp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=zn();tE(o,u,n,r,null,null)},Fh.prototype.unmount=Sp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;tE(n.current,2,null,n,null,null),bh(),r[Kn]=null}};function Fh(n){this._internalRoot=n}Fh.prototype.unstable_scheduleHydration=function(n){if(n){var r=qs();n={blockedOn:null,target:n,priority:r};for(var o=0;o<mr.length&&r!==0&&r<mr[o].priority;o++);mr.splice(o,0,n),o===0&&aE(n)}};var uE=e.version;if(uE!=="19.1.0")throw Error(s(527,uE,"19.1.0"));ee.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=p(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var KR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qh.isDisabled&&qh.supportsFiber)try{Ie=qh.inject(KR),ve=qh}catch{}}return bu.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=A0,m=R0,E=I0,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=Zv(n,1,!1,null,null,o,u,f,m,E,S,null),n[Kn]=r.current,sp(n),new Sp(r)},bu.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",m=A0,E=R0,S=I0,I=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),r=Zv(n,1,!0,r,o??null,u,f,m,E,S,I,z),r.context=eE(null),o=r.current,u=zn(),u=Fs(u),f=Xs(u),f.callback=null,Js(o,f,u),o=u,r.current.lanes=o,ns(r,o),Li(r),n[Kn]=r.current,sp(n),new Fh(r)},bu.version="19.1.0",bu}var vE;function nI(){if(vE)return Ap.exports;vE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ap.exports=tI(),Ap.exports}var iI=nI();const sI=()=>{};var EE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=function(i,e){if(!i)throw al(e)},al=function(i){return new Error("Firebase Database ("+LS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},rI=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let b=(d&15)<<2|g>>6,O=g&63;p||(O=64,c||(b=64)),s.push(t[y],t[T],t[b],t[O])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(US(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):rI(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new aI;const b=l<<2|d>>4;if(s.push(b),g!==64){const O=d<<4&240|g>>2;if(s.push(O),T!==64){const V=g<<6&192|T;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class aI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jS=function(i){const e=US(i);return Pg.encodeByteArray(e,!0)},ff=function(i){return jS(i).replace(/\./g,"")},df=function(i){try{return Pg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(i){return zS(void 0,i)}function zS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lI(t)||(i[t]=zS(i[t],e[t]));return i}function lI(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=()=>uI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof EE>"u")return;const i=EE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},fI=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&df(i[1]);return e&&JSON.parse(e)},Kf=()=>{try{return sI()||cI()||hI()||fI()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},BS=i=>{var e,t;return(t=(e=Kf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Vg=i=>{const e=BS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},FS=()=>{var i;return(i=Kf())===null||i===void 0?void 0:i.config},qS=i=>{var e;return(e=Kf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yf(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[ff(JSON.stringify(t)),ff(JSON.stringify(c)),""].join(".")}const Pu={};function dI(){const i={prod:[],emulator:[]};for(const e of Object.keys(Pu))Pu[e]?i.emulator.push(e):i.prod.push(e);return i}function mI(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let TE=!1;function Qf(i,e){if(typeof window>"u"||typeof document>"u"||!js(window.location.host)||Pu[i]===e||Pu[i]||TE)return;Pu[i]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",l=dI().prod.length>0;function c(){const b=document.getElementById(s);b&&b.remove()}function d(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function p(b,O){b.setAttribute("width","24"),b.setAttribute("id",O),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function g(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{TE=!0,c()},b}function y(b,O){b.setAttribute("id",O),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=mI(s),O=t("text"),V=document.getElementById(O)||document.createElement("span"),Y=t("learnmore"),K=document.getElementById(Y)||document.createElement("a"),ce=t("preprendIcon"),re=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const oe=b.element;d(oe),y(K,Y);const Ce=g();p(re,ce),oe.append(re,V,K,Ce),document.body.appendChild(oe)}l?(V.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tn())}function pI(){var i;const e=(i=Kf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _I(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function GS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const i=Tn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function vI(){return LS.NODE_ADMIN===!0}function EI(){return!pI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TI(){try{return typeof indexedDB=="object"}catch{return!1}}function SI(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="FirebaseError";class Wi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=bI,Object.setPrototypeOf(this,Wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sc.prototype.create)}}class sc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?wI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Wi(a,d,s)}}function wI(i,e){return i.replace(AI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const AI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(i){return JSON.parse(i)}function cn(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Gu(df(l[0])||""),t=Gu(df(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},RI=function(i){const e=KS(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},II=function(i){const e=KS(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Xo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Yp(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function mf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function Cr(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(SE(l)&&SE(c)){if(!Cr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function SE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cu(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Nu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const b=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(b<<1|b>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const b=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=b}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function NI(i,e){const t=new DI(i,e);return t.subscribe.bind(t)}class DI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");OI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Np),a.error===void 0&&(a.error=Np),a.complete===void 0&&(a.complete=Np);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Np(){}function xI(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,se(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},$f=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(i){return i&&i._delegate?i._delegate:i}class Ms{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Lg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:ba})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=ba){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ba){return this.instances.has(e)}getOptions(e=ba){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ba){return this.component?this.component.multipleInstances?e:ba:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PI(i){return i===ba?void 0:i}function VI(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(qe||(qe={}));const UI={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},jI=qe.INFO,zI={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},BI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=zI[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wf{constructor(e){this.name=e,this._logLevel=jI,this._logHandler=BI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const FI=(i,e)=>e.some(t=>i instanceof t);let bE,wE;function qI(){return bE||(bE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return wE||(wE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const YS=new WeakMap,Qp=new WeakMap,QS=new WeakMap,Dp=new WeakMap,jg=new WeakMap;function GI(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(br(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&YS.set(t,i)}).catch(()=>{}),jg.set(e,i),e}function KI(i){if(Qp.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Qp.set(i,e)}let $p={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Qp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||QS.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return br(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function YI(i){$p=i($p)}function QI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Op(this),e,...t);return QS.set(s,e.sort?e.sort():[e]),br(s)}:HI().includes(i)?function(...e){return i.apply(Op(this),e),br(YS.get(this))}:function(...e){return br(i.apply(Op(this),e))}}function $I(i){return typeof i=="function"?QI(i):(i instanceof IDBTransaction&&KI(i),FI(i,qI())?new Proxy(i,$p):i)}function br(i){if(i instanceof IDBRequest)return GI(i);if(Dp.has(i))return Dp.get(i);const e=$I(i);return e!==i&&(Dp.set(i,e),jg.set(e,i)),e}const Op=i=>jg.get(i);function WI(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=br(c);return s&&c.addEventListener("upgradeneeded",p=>{s(br(c.result),p.oldVersion,p.newVersion,br(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const XI=["get","getKey","getAll","getAllKeys","count"],JI=["put","add","delete","clear"],xp=new Map;function AE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(xp.get(e))return xp.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=JI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||XI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return xp.set(e,l),l}YI(i=>({...i,get:(e,t,s)=>AE(e,t)||i.get(e,t,s),has:(e,t)=>!!AE(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(eC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function eC(i){const e=i.getComponent();return e?.type==="VERSION"}const Wp="@firebase/app",RE="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Wf("@firebase/app"),tC="@firebase/app-compat",nC="@firebase/analytics-compat",iC="@firebase/analytics",sC="@firebase/app-check-compat",rC="@firebase/app-check",aC="@firebase/auth",oC="@firebase/auth-compat",lC="@firebase/database",uC="@firebase/data-connect",cC="@firebase/database-compat",hC="@firebase/functions",fC="@firebase/functions-compat",dC="@firebase/installations",mC="@firebase/installations-compat",pC="@firebase/messaging",gC="@firebase/messaging-compat",_C="@firebase/performance",yC="@firebase/performance-compat",vC="@firebase/remote-config",EC="@firebase/remote-config-compat",TC="@firebase/storage",SC="@firebase/storage-compat",bC="@firebase/firestore",wC="@firebase/ai",AC="@firebase/firestore-compat",RC="firebase",IC="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="[DEFAULT]",CC={[Wp]:"fire-core",[tC]:"fire-core-compat",[iC]:"fire-analytics",[nC]:"fire-analytics-compat",[rC]:"fire-app-check",[sC]:"fire-app-check-compat",[aC]:"fire-auth",[oC]:"fire-auth-compat",[lC]:"fire-rtdb",[uC]:"fire-data-connect",[cC]:"fire-rtdb-compat",[hC]:"fire-fn",[fC]:"fire-fn-compat",[dC]:"fire-iid",[mC]:"fire-iid-compat",[pC]:"fire-fcm",[gC]:"fire-fcm-compat",[_C]:"fire-perf",[yC]:"fire-perf-compat",[vC]:"fire-rc",[EC]:"fire-rc-compat",[TC]:"fire-gcs",[SC]:"fire-gcs-compat",[bC]:"fire-fst",[AC]:"fire-fst-compat",[wC]:"fire-vertex","fire-js":"fire-js",[RC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new Map,NC=new Map,Jp=new Map;function IE(i,e){try{i.container.addComponent(e)}catch(t){ks.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Nr(i){const e=i.name;if(Jp.has(e))return ks.debug(`There were multiple attempts to register component ${e}.`),!1;Jp.set(e,i);for(const t of pf.values())IE(t,i);for(const t of NC.values())IE(t,i);return!0}function rc(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function On(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new sc("app","Firebase",DC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ms("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=IC;function $S(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xp,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw wr.create("bad-app-name",{appName:String(a)});if(t||(t=FS()),!t)throw wr.create("no-options");const l=pf.get(a);if(l){if(Cr(t,l.options)&&Cr(s,l.config))return l;throw wr.create("duplicate-app",{appName:a})}const c=new LI(a);for(const p of Jp.values())c.addComponent(p);const d=new OC(t,s,c);return pf.set(a,d),d}function Xf(i=Xp){const e=pf.get(i);if(!e&&i===Xp&&FS())return $S();if(!e)throw wr.create("no-app",{appName:i});return e}function ai(i,e,t){var s;let a=(s=CC[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ks.warn(d.join(" "));return}Nr(new Ms(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="firebase-heartbeat-database",MC=1,Ku="firebase-heartbeat-store";let Mp=null;function WS(){return Mp||(Mp=WI(xC,MC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ku)}catch(t){console.warn(t)}}}}).catch(i=>{throw wr.create("idb-open",{originalErrorMessage:i.message})})),Mp}async function kC(i){try{const t=(await WS()).transaction(Ku),s=await t.objectStore(Ku).get(XS(i));return await t.done,s}catch(e){if(e instanceof Wi)ks.warn(e.message);else{const t=wr.create("idb-get",{originalErrorMessage:e?.message});ks.warn(t.message)}}}async function CE(i,e){try{const s=(await WS()).transaction(Ku,"readwrite");await s.objectStore(Ku).put(e,XS(i)),await s.done}catch(t){if(t instanceof Wi)ks.warn(t.message);else{const s=wr.create("idb-set",{originalErrorMessage:t?.message});ks.warn(s.message)}}}function XS(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=1024,VC=30;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=NE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>VC){const c=zC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ks.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=NE(),{heartbeatsToSend:s,unsentEntries:a}=UC(this._heartbeatsCache.heartbeats),l=ff(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return ks.warn(t),""}}}function NE(){return new Date().toISOString().substring(0,10)}function UC(i,e=PC){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),DE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),DE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class jC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TI()?SI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return CE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return CE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function DE(i){return ff(JSON.stringify({version:2,heartbeats:i})).length}function zC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(i){Nr(new Ms("platform-logger",e=>new ZI(e),"PRIVATE")),Nr(new Ms("heartbeat",e=>new LC(e),"PRIVATE")),ai(Wp,RE,i),ai(Wp,RE,"esm2017"),ai("fire-js","")}BC("");var FC="firebase",qC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai(FC,qC,"app");var OE={};const xE="@firebase/database",ME="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JS="";function HC(i){JS=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),cn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Gu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return zs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GC(e)}}catch{}return new KC},Aa=ZS("localStorage"),YC=ZS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Wf("@firebase/database"),QC=function(){let i=1;return function(){return i++}}(),eb=function(i){const e=MI(i),t=new CI;t.update(e);const s=t.digest();return Pg.encodeByteArray(s)},ac=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ac.apply(null,s):typeof s=="object"?e+=cn(s):e+=s,e+=" "}return e};let Vu=null,kE=!0;const $C=function(i,e){se(!0,"Can't turn on custom loggers persistently."),Go.logLevel=qe.VERBOSE,Vu=Go.log.bind(Go)},_n=function(...i){if(kE===!0&&(kE=!1,Vu===null&&YC.get("logging_enabled")===!0&&$C()),Vu){const e=ac.apply(null,i);Vu(e)}},oc=function(i){return function(...e){_n(i,...e)}},Zp=function(...i){const e="FIREBASE INTERNAL ERROR: "+ac(...i);Go.error(e)},Ps=function(...i){const e=`FIREBASE FATAL ERROR: ${ac(...i)}`;throw Go.error(e),new Error(e)},Hn=function(...i){const e="FIREBASE WARNING: "+ac(...i);Go.warn(e)},WC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tb=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},XC=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Jo="[MIN_NAME]",Na="[MAX_NAME]",ll=function(i,e){if(i===e)return 0;if(i===Jo||e===Na)return-1;if(e===Jo||i===Na)return 1;{const t=PE(i),s=PE(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},JC=function(i,e){return i===e?0:i<e?-1:1},wu=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+cn(e))},zg=function(i){if(typeof i!="object"||i===null)return cn(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=cn(e[s]),t+=":",t+=zg(i[e[s]]);return t+="}",t},nb=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function li(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const ib=function(i){se(!tb(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let b=parseInt(y.substr(p,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},ZC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tN=new RegExp("^-?(0*)\\d{1,10}$"),nN=-2147483648,iN=2147483647,PE=function(i){if(tN.test(i)){const e=Number(i);if(e>=nN&&e<=iN)return e}return null},lc=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Hn("Exception was thrown by user callback.",t),e},Math.floor(0))}},sN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,On(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Hn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(_n("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Hn(e)}}class Zh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="5",sb="v",rb="s",ab="r",ob="f",lb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ub="ls",cb="p",eg="ac",hb="websocket",fb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Aa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Aa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function oN(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function mb(i,e,t){se(typeof e=="string","typeof type must == string"),se(typeof t=="object","typeof params must == object");let s;if(e===hb)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===fb)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oN(i)&&(t.ns=i.namespace);const a=[];return li(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.counters_={}}incrementCounter(e,t=1){zs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return oI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp={},Pp={};function Fg(i){const e=i.toString();return kp[e]||(kp[e]=new lN),kp[e]}function uN(i,e){const t=i.toString();return Pp[t]||(Pp[t]=e()),Pp[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&lc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="start",hN="close",fN="pLPCommand",dN="pRTLPCB",pb="id",gb="pw",_b="ser",mN="cb",pN="seg",gN="ts",_N="d",yN="dframe",yb=1870,vb=30,vN=yb-vb,EN=25e3,TN=3e4;class Fo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oc(e),this.stats_=Fg(t),this.urlFn=p=>(this.appCheckToken&&(p[eg]=this.appCheckToken),mb(t,fb,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TN)),XC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qg((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===VE)this.id=d,this.password=p;else if(c===hN)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[VE]="t",s[_b]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sb]=Bg,this.transportSessionId&&(s[rb]=this.transportSessionId),this.lastSessionId&&(s[ub]=this.lastSessionId),this.applicationId&&(s[cb]=this.applicationId),this.appCheckToken&&(s[eg]=this.appCheckToken),typeof location<"u"&&location.hostname&&lb.test(location.hostname)&&(s[ab]=ob);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fo.forceAllow_=!0}static forceDisallow(){Fo.forceDisallow_=!0}static isAvailable(){return Fo.forceAllow_?!0:!Fo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZC()&&!eN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=cn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=jS(t),a=nb(s,vN);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[yN]="t",s[pb]=e,s[gb]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=cn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qg{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QC(),window[fN+this.uniqueCallbackIdentifier]=e,window[dN+this.uniqueCallbackIdentifier]=t,this.myIFrame=qg.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){_n("frame writing exception"),d.stack&&_n(d.stack),_n(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_n("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pb]=this.myID,e[gb]=this.myPW,e[_b]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vb+s.length<=yb;){const c=this.pendingSegs.shift();s=s+"&"+pN+a+"="+c.seg+"&"+gN+a+"="+c.ts+"&"+_N+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(EN)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{_n("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=16384,bN=45e3;let gf=null;typeof MozWebSocket<"u"?gf=MozWebSocket:typeof WebSocket<"u"&&(gf=WebSocket);class gi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oc(this.connId),this.stats_=Fg(t),this.connURL=gi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[sb]=Bg,typeof location<"u"&&location.hostname&&lb.test(location.hostname)&&(c[ab]=ob),t&&(c[rb]=t),s&&(c[ub]=s),a&&(c[eg]=a),l&&(c[cb]=l),mb(e,hb,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Aa.set("previous_websocket_failure",!0);try{let s;vI(),this.mySock=new gf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){gi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gf!==null&&!gi.forceDisallow_}static previouslyFailed(){return Aa.isInMemoryStorage||Aa.get("previous_websocket_failure")===!0}markConnectionHealthy(){Aa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Gu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(se(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=cn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=nb(t,SN);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gi.responsesRequiredToBeHealthy=2;gi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{static get ALL_TRANSPORTS(){return[Fo,gi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=gi&&gi.isAvailable();let s=t&&!gi.previouslyFailed();if(e.webSocketOnly&&(t||Hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[gi];else{const a=this.transports_=[];for(const l of Yu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Yu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=6e4,AN=5e3,RN=10*1024,IN=100*1024,Vp="t",LE="d",CN="s",UE="r",NN="e",jE="o",zE="a",BE="n",FE="p",DN="h";class ON{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oc("c:"+this.id+":"),this.transportManager_=new Yu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Lu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vp in e){const t=e[Vp];t===zE?this.upgradeIfSecondaryHealthy_():t===UE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===jE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wu("t",e),s=wu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:FE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:BE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wu("t",e),s=wu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wu(Vp,e);if(LE in e){const s=e[LE];if(t===DN){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===BE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CN?this.onConnectionShutdown_(s):t===UE?this.onReset_(s):t===NN?Zp("Server Error: "+s):t===jE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bg!==s&&Hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Lu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:FE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Aa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.allowedEvents_=e,this.listeners_={},se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){se(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends Tb{static getInstance(){return new _f}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ug()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return se(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=32,HE=768;class vt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ct(){return new vt("")}function Xe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Dr(i){return i.pieces_.length-i.pieceNum_}function _t(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new vt(i.pieces_,e)}function Sb(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function xN(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function bb(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function wb(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new vt(e,0)}function tn(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof vt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new vt(t,0)}function Ke(i){return i.pieceNum_>=i.pieces_.length}function ri(i,e){const t=Xe(i),s=Xe(e);if(t===null)return e;if(t===s)return ri(_t(i),_t(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Ab(i,e){if(Dr(i)!==Dr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function _i(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(Dr(i)>Dr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class MN{constructor(e,t){this.errorPrefix_=t,this.parts_=bb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$f(this.parts_[s]);Rb(this)}}function kN(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=$f(e),Rb(i)}function PN(i){const e=i.parts_.pop();i.byteLength_-=$f(e),i.parts_.length>0&&(i.byteLength_-=1)}function Rb(i){if(i.byteLength_>HE)throw new Error(i.errorPrefix_+"has a key path longer than "+HE+" bytes ("+i.byteLength_+").");if(i.parts_.length>qE)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qE+") or object contains a cycle "+wa(i))}function wa(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends Tb{static getInstance(){return new Hg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return se(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=1e3,VN=60*5*1e3,GE=30*1e3,LN=1.3,UN=3e4,jN="server_kill",KE=3;class Ds extends Eb{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Ds.nextPersistentConnectionId_++,this.log_=oc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Au,this.maxReconnectDelay_=VN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_f.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(cn(l)),se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Lg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),se(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Ds.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&zs(e,"w")){const s=Xo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||II(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=GE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=RI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+cn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Zp("Unrecognized action received from server: "+cn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Au,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Au,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UN&&(this.reconnectDelay_=Au),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ds.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){se(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?_n("getToken() completed but was canceled"):(_n("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,d=new ON(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,O=>{Hn(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(jN)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Hn(T),p())}}}interrupt(e){_n("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_n("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yp(this.interruptReasons_)&&(this.reconnectDelay_=Au,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>zg(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new vt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){_n("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=KE&&(this.reconnectDelay_=GE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_n("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=KE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+JS.replace(/\./g,"-")]=1,Ug()?e["framework.cordova"]=1:GS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_f.getInstance().currentlyOnline();return Yp(this.interruptReasons_)&&e}}Ds.nextPersistentConnectionId_=0;Ds.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Je(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Je(Jo,e),a=new Je(Jo,t);return this.compare(s,a)!==0}minPost(){return Je.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;class Ib extends Jf{static get __EMPTY_NODE(){return Hh}static set __EMPTY_NODE(e){Hh=e}compare(e,t){return ll(e.name,t.name)}isDefinedOn(e){throw al("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Je.MIN}maxPost(){return new Je(Na,Hh)}makePost(e,t){return se(typeof e=="string","KeyIndex indexValue must always be a string."),new Je(e,Hh)}toString(){return".key"}}const Ko=new Ib;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Fn=class Du{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Du.RED,this.left=a??zi.EMPTY_NODE,this.right=l??zi.EMPTY_NODE}copy(e,t,s,a,l){return new Du(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return zi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return zi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Du.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Du.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Fn.RED=!0;Fn.BLACK=!1;class zN{copy(e,t,s,a,l){return this}insert(e,t,s){return new Fn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let zi=class ef{constructor(e,t=ef.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ef(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Fn.BLACK,null,null))}remove(e){return new ef(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gh(this.root_,null,this.comparator_,!0,e)}};zi.EMPTY_NODE=new zN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(i,e){return ll(i.name,e.name)}function Gg(i,e){return ll(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg;function FN(i){tg=i}const Cb=function(i){return typeof i=="number"?"number:"+ib(i):"string:"+i},Nb=function(i){if(i.isLeafNode()){const e=i.val();se(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zs(e,".sv"),"Priority must be a string or number.")}else se(i===tg||i.isEmpty(),"priority of unexpected type.");se(i===tg||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YE;class Zt{static set __childrenNodeConstructor(e){YE=e}static get __childrenNodeConstructor(){return YE}constructor(e,t=Zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,se(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nb(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ke(e)?this:Xe(e)===".priority"?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Xe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(se(s!==".priority"||Dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(_t(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cb(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ib(this.value_):e+=this.value_,this.lazyHash_=eb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Zt.__childrenNodeConstructor?-1:(se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Zt.VALUE_TYPE_ORDER.indexOf(t),l=Zt.VALUE_TYPE_ORDER.indexOf(s);return se(a>=0,"Unknown leaf type: "+t),se(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Db,Ob;function qN(i){Db=i}function HN(i){Ob=i}class GN extends Jf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?ll(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Je.MIN}maxPost(){return new Je(Na,new Zt("[PRIORITY-POST]",Ob))}makePost(e,t){const s=Db(e);return new Je(t,new Zt("[PRIORITY-POST]",s))}toString(){return".priority"}}const En=new GN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=Math.log(2);class YN{constructor(e){const t=l=>parseInt(Math.log(l)/KN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yf=function(i,e,t,s){i.sort(e);const a=function(p,g){const y=g-p;let T,b;if(y===0)return null;if(y===1)return T=i[p],b=t?t(T):T,new Fn(b,T.node,Fn.BLACK,null,null);{const O=parseInt(y/2,10)+p,V=a(p,O),Y=a(O+1,g);return T=i[O],b=t?t(T):T,new Fn(b,T.node,Fn.BLACK,V,Y)}},l=function(p){let g=null,y=null,T=i.length;const b=function(V,Y){const K=T-V,ce=T;T-=V;const re=a(K+1,ce),oe=i[K],Ce=t?t(oe):oe;O(new Fn(Ce,oe.node,Y,null,re))},O=function(V){g?(g.left=V,g=V):(y=V,g=V)};for(let V=0;V<p.count;++V){const Y=p.nextBitIsOne(),K=Math.pow(2,p.count-(V+1));Y?b(K,Fn.BLACK):(b(K,Fn.BLACK),b(K,Fn.RED))}return y},c=new YN(i.length),d=l(c);return new zi(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lp;const Vo={};class Is{static get Default(){return se(Vo&&En,"ChildrenNode.ts has not been loaded"),Lp=Lp||new Is({".priority":Vo},{".priority":En}),Lp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Xo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zi?t:null}hasIndex(e){return zs(this.indexSet_,e.toString())}addIndex(e,t){se(e!==Ko,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Je.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=yf(s,e.getCompare()):d=Vo;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new Is(y,g)}addToIndexes(e,t){const s=mf(this.indexes_,(a,l)=>{const c=Xo(this.indexSet_,l);if(se(c,"Missing index implementation for "+l),a===Vo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Je.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),yf(d,c.getCompare())}else return Vo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Je(e.name,d))),p.insert(e,e.node)}});return new Is(s,this.indexSet_)}removeFromIndexes(e,t){const s=mf(this.indexes_,a=>{if(a===Vo)return a;{const l=t.get(e.name);return l?a.remove(new Je(e.name,l)):a}});return new Is(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru;class nt{static get EMPTY_NODE(){return Ru||(Ru=new nt(new zi(Gg),null,Is.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Nb(this.priorityNode_),this.children_.isEmpty()&&se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ru}updatePriority(e){return this.children_.isEmpty()?this:new nt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ru:t}}getChild(e){const t=Xe(e);return t===null?this:this.getImmediateChild(t).getChild(_t(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(se(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Je(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Ru:this.priorityNode_;return new nt(a,c,l)}}updateChild(e,t){const s=Xe(e);if(s===null)return t;{se(Xe(e)!==".priority"||Dr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(_t(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(En,(c,d)=>{t[c]=d.val(e),s++,l&&nt.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cb(this.getPriority().val())+":"),this.forEachChild(En,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":eb(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Je(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Je(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===uc?-1:0}withIndex(e){if(e===Ko||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new nt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ko||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(En),a=t.getIterator(En);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Ko?null:this.indexMap_.get(e.toString())}}nt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QN extends nt{constructor(){super(new zi(Gg),nt.EMPTY_NODE,Is.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return nt.EMPTY_NODE}isEmpty(){return!1}}const uc=new QN;Object.defineProperties(Je,{MIN:{value:new Je(Jo,nt.EMPTY_NODE)},MAX:{value:new Je(Na,uc)}});Ib.__EMPTY_NODE=nt.EMPTY_NODE;Zt.__childrenNodeConstructor=nt;FN(uc);HN(uc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=!0;function yn(i,e=null){if(i===null)return nt.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),se(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Zt(t,yn(e))}if(!(i instanceof Array)&&$N){const t=[];let s=!1;if(li(i,(c,d)=>{if(c.substring(0,1)!=="."){const p=yn(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Je(c,p)))}}),t.length===0)return nt.EMPTY_NODE;const l=yf(t,BN,c=>c.name,Gg);if(s){const c=yf(t,En.getCompare());return new nt(l,yn(e),new Is({".priority":c},{".priority":En}))}else return new nt(l,yn(e),Is.Default)}else{let t=nt.EMPTY_NODE;return li(i,(s,a)=>{if(zs(i,s)&&s.substring(0,1)!=="."){const l=yn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(yn(e))}}qN(yn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN extends Jf{constructor(e){super(),this.indexPath_=e,se(!Ke(e)&&Xe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?ll(e.name,t.name):l}makePost(e,t){const s=yn(e),a=nt.EMPTY_NODE.updateChild(this.indexPath_,s);return new Je(t,a)}maxPost(){const e=nt.EMPTY_NODE.updateChild(this.indexPath_,uc);return new Je(Na,e)}toString(){return bb(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN extends Jf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ll(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Je.MIN}maxPost(){return Je.MAX}makePost(e,t){const s=yn(e);return new Je(t,s)}toString(){return".value"}}const JN=new XN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(i){return{type:"value",snapshotNode:i}}function eD(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function tD(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function QE(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function nD(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=En}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jo}hasEnd(){return this.endSet_}getIndexEndValue(){return se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Na}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===En}copy(){const e=new Kg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $E(i){const e={};if(i.isDefault())return e;let t;if(i.index_===En?t="$priority":i.index_===JN?t="$value":i.index_===Ko?t="$key":(se(i.index_ instanceof WN,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=cn(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=cn(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+cn(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=cn(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+cn(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function WE(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==En&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends Eb{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=oc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=vf.getListenId_(e,s),d={};this.listens_[c]=d;const p=$E(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Xo(this.listens_,c)===d){let b;g?g===401?b="permission_denied":b="rest_error:"+g:b="ok",a(b,null)}})}unlisten(e,t){const s=vf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=$E(e._queryParams),s=e._path.toString(),a=new Lg;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ol(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Gu(d.responseText)}catch{Hn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Hn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.rootNode_=nt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){return{value:null,children:new Map}}function xb(i,e,t){if(Ke(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Xe(e);i.children.has(s)||i.children.set(s,Ef());const a=i.children.get(s);e=_t(e),xb(a,e,t)}}function ng(i,e,t){i.value!==null?t(e,i.value):sD(i,(s,a)=>{const l=new vt(e.toString()+"/"+s);ng(a,l,t)})}function sD(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&li(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=10*1e3,aD=30*1e3,oD=5*60*1e3;class lD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new rD(e);const s=XE+(aD-XE)*Math.random();Lu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;li(e,(a,l)=>{l>0&&zs(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Lu(this.reportStats_.bind(this),Math.floor(Math.random()*2*oD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bi||(Bi={}));function Mb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pb(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Bi.ACK_USER_WRITE,this.source=Mb()}operationForChild(e){if(Ke(this.path)){if(this.affectedTree.value!=null)return se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new vt(e));return new Tf(ct(),t,this.revert)}}else return se(Xe(this.path)===e,"operationForChild called for unrelated child."),new Tf(_t(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Bi.OVERWRITE}operationForChild(e){return Ke(this.path)?new Da(this.source,ct(),this.snap.getImmediateChild(e)):new Da(this.source,_t(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Bi.MERGE}operationForChild(e){if(Ke(this.path)){const t=this.children.subtree(new vt(e));return t.isEmpty()?null:t.value?new Da(this.source,ct(),t.value):new Qu(this.source,ct(),t)}else return se(Xe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qu(this.source,_t(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ke(e))return this.isFullyInitialized()&&!this.filtered_;const t=Xe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function uD(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(nD(c.childName,c.snapshotNode))}),Iu(i,a,"child_removed",e,s,t),Iu(i,a,"child_added",e,s,t),Iu(i,a,"child_moved",l,s,t),Iu(i,a,"child_changed",e,s,t),Iu(i,a,"value",e,s,t),a}function Iu(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>hD(i,d,p)),c.forEach(d=>{const p=cD(i,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,i.query_))})})}function cD(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function hD(i,e,t){if(e.childName==null||t.childName==null)throw al("Should only compare child_ events.");const s=new Je(e.childName,e.snapshotNode),a=new Je(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(i,e){return{eventCache:i,serverCache:e}}function Uu(i,e,t,s){return Vb(new Yg(e,t,s),i.serverCache)}function Lb(i,e,t,s){return Vb(i.eventCache,new Yg(e,t,s))}function ig(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Oa(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up;const fD=()=>(Up||(Up=new zi(JC)),Up);class gt{static fromObject(e){let t=new gt(null);return li(e,(s,a)=>{t=t.set(new vt(s),a)}),t}constructor(e,t=fD()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ct(),value:this.value};if(Ke(e))return null;{const s=Xe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(_t(e),t);return l!=null?{path:tn(new vt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ke(e))return this;{const t=Xe(e),s=this.children.get(t);return s!==null?s.subtree(_t(e)):new gt(null)}}set(e,t){if(Ke(e))return new gt(t,this.children);{const s=Xe(e),l=(this.children.get(s)||new gt(null)).set(_t(e),t),c=this.children.insert(s,l);return new gt(this.value,c)}}remove(e){if(Ke(e))return this.children.isEmpty()?new gt(null):new gt(null,this.children);{const t=Xe(e),s=this.children.get(t);if(s){const a=s.remove(_t(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new gt(null):new gt(this.value,l)}else return this}}get(e){if(Ke(e))return this.value;{const t=Xe(e),s=this.children.get(t);return s?s.get(_t(e)):null}}setTree(e,t){if(Ke(e))return t;{const s=Xe(e),l=(this.children.get(s)||new gt(null)).setTree(_t(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new gt(this.value,c)}}fold(e){return this.fold_(ct(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(tn(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ct(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ke(e))return null;{const l=Xe(e),c=this.children.get(l);return c?c.findOnPath_(_t(e),tn(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ct(),t)}foreachOnPath_(e,t,s){if(Ke(e))return this;{this.value&&s(t,this.value);const a=Xe(e),l=this.children.get(a);return l?l.foreachOnPath_(_t(e),tn(t,a),s):new gt(null)}}foreach(e){this.foreach_(ct(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(tn(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.writeTree_=e}static empty(){return new vi(new gt(null))}}function ju(i,e,t){if(Ke(e))return new vi(new gt(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=ri(a,e);return l=l.updateChild(c,t),new vi(i.writeTree_.set(a,l))}else{const a=new gt(t),l=i.writeTree_.setTree(e,a);return new vi(l)}}}function JE(i,e,t){let s=i;return li(t,(a,l)=>{s=ju(s,tn(e,a),l)}),s}function ZE(i,e){if(Ke(e))return vi.empty();{const t=i.writeTree_.setTree(e,new gt(null));return new vi(t)}}function sg(i,e){return Ua(i,e)!=null}function Ua(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(ri(t.path,e)):null}function eT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(En,(s,a)=>{e.push(new Je(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Je(s,a.value))}),e}function Ar(i,e){if(Ke(e))return i;{const t=Ua(i,e);return t!=null?new vi(new gt(t)):new vi(i.writeTree_.subtree(e))}}function rg(i){return i.writeTree_.isEmpty()}function Zo(i,e){return Ub(ct(),i.writeTree_,e)}function Ub(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(se(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=Ub(tn(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(tn(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(i,e){return Hb(e,i)}function dD(i,e,t,s,a){se(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=ju(i.visibleWrites,e,t)),i.lastWriteId=s}function mD(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function pD(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);se(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&gD(d,s.path)?a=!1:_i(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return _D(i),!0;if(s.snap)i.visibleWrites=ZE(i.visibleWrites,s.path);else{const d=s.children;li(d,p=>{i.visibleWrites=ZE(i.visibleWrites,tn(s.path,p))})}return!0}else return!1}function gD(i,e){if(i.snap)return _i(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&_i(tn(i.path,t),e))return!0;return!1}function _D(i){i.visibleWrites=zb(i.allWrites,yD,ct()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function yD(i){return i.visible}function zb(i,e,t){let s=vi.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)_i(t,c)?(d=ri(t,c),s=ju(s,d,l.snap)):_i(c,t)&&(d=ri(c,t),s=ju(s,ct(),l.snap.getChild(d)));else if(l.children){if(_i(t,c))d=ri(t,c),s=JE(s,d,l.children);else if(_i(c,t))if(d=ri(c,t),Ke(d))s=JE(s,ct(),l.children);else{const p=Xo(l.children,Xe(d));if(p){const g=p.getChild(_t(d));s=ju(s,ct(),g)}}}else throw al("WriteRecord should have .snap or .children")}}return s}function Bb(i,e,t,s,a){if(!s&&!a){const l=Ua(i.visibleWrites,e);if(l!=null)return l;{const c=Ar(i.visibleWrites,e);if(rg(c))return t;if(t==null&&!sg(c,ct()))return null;{const d=t||nt.EMPTY_NODE;return Zo(c,d)}}}else{const l=Ar(i.visibleWrites,e);if(!a&&rg(l))return t;if(!a&&t==null&&!sg(l,ct()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(_i(g.path,e)||_i(e,g.path))},d=zb(i.allWrites,c,e),p=t||nt.EMPTY_NODE;return Zo(d,p)}}}function vD(i,e,t){let s=nt.EMPTY_NODE;const a=Ua(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(En,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Ar(i.visibleWrites,e);return t.forEachChild(En,(c,d)=>{const p=Zo(Ar(l,new vt(c)),d);s=s.updateImmediateChild(c,p)}),eT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Ar(i.visibleWrites,e);return eT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function ED(i,e,t,s,a){se(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=tn(e,t);if(sg(i.visibleWrites,l))return null;{const c=Ar(i.visibleWrites,l);return rg(c)?a.getChild(t):Zo(c,a.getChild(t))}}function TD(i,e,t,s){const a=tn(e,t),l=Ua(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Ar(i.visibleWrites,a);return Zo(c,s.getNode().getImmediateChild(t))}else return null}function SD(i,e){return Ua(i.visibleWrites,e)}function bD(i,e,t,s,a,l,c){let d;const p=Ar(i.visibleWrites,e),g=Ua(p,ct());if(g!=null)d=g;else if(t!=null)d=Zo(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),b=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let O=b.getNext();for(;O&&y.length<a;)T(O,s)!==0&&y.push(O),O=b.getNext();return y}else return[]}function wD(){return{visibleWrites:vi.empty(),allWrites:[],lastWriteId:-1}}function ag(i,e,t,s){return Bb(i.writeTree,i.treePath,e,t,s)}function Fb(i,e){return vD(i.writeTree,i.treePath,e)}function tT(i,e,t,s){return ED(i.writeTree,i.treePath,e,t,s)}function Sf(i,e){return SD(i.writeTree,tn(i.treePath,e))}function AD(i,e,t,s,a,l){return bD(i.writeTree,i.treePath,e,t,s,a,l)}function Qg(i,e,t){return TD(i.writeTree,i.treePath,e,t)}function qb(i,e){return Hb(tn(i.treePath,e),i.writeTree)}function Hb(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;se(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),se(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,QE(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,tD(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,eD(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,QE(s,e.snapshotNode,a.oldSnap));else throw al("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Gb=new ID;class $g{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qg(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Oa(this.viewCache_),l=AD(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function CD(i,e){se(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),se(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function ND(i,e,t,s,a){const l=new RD;let c,d;if(t.type===Bi.OVERWRITE){const g=t;g.source.fromUser?c=og(i,e,g.path,g.snap,s,a,l):(se(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Ke(g.path),c=bf(i,e,g.path,g.snap,s,a,d,l))}else if(t.type===Bi.MERGE){const g=t;g.source.fromUser?c=OD(i,e,g.path,g.children,s,a,l):(se(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=lg(i,e,g.path,g.children,s,a,d,l))}else if(t.type===Bi.ACK_USER_WRITE){const g=t;g.revert?c=kD(i,e,g.path,s,a,l):c=xD(i,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Bi.LISTEN_COMPLETE)c=MD(i,e,t.path,s,l);else throw al("Unknown operation type: "+t.type);const p=l.getChanges();return DD(e,c,p),{viewCache:c,changes:p}}function DD(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=ig(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(ZN(ig(e)))}}function Kb(i,e,t,s,a,l){const c=e.eventCache;if(Sf(s,t)!=null)return e;{let d,p;if(Ke(t))if(se(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Oa(e),y=g instanceof nt?g:nt.EMPTY_NODE,T=Fb(s,y);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ag(s,Oa(e));d=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Xe(t);if(g===".priority"){se(Dr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=tT(s,t,y,p);T!=null?d=i.filter.updatePriority(y,T):d=c.getNode()}else{const y=_t(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const b=tT(s,t,c.getNode(),p);b!=null?T=c.getNode().getImmediateChild(g).updateChild(y,b):T=c.getNode().getImmediateChild(g)}else T=Qg(s,g,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return Uu(e,d,c.isFullyInitialized()||Ke(t),i.filter.filtersNodes())}}function bf(i,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?i.filter:i.filter.getIndexedFilter();if(Ke(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const O=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),O,null)}else{const O=Xe(t);if(!p.isCompleteForPath(t)&&Dr(t)>1)return e;const V=_t(t),K=p.getNode().getImmediateChild(O).updateChild(V,s);O===".priority"?g=y.updatePriority(p.getNode(),K):g=y.updateChild(p.getNode(),O,K,V,Gb,null)}const T=Lb(e,g,p.isFullyInitialized()||Ke(t),y.filtersNodes()),b=new $g(a,T,l);return Kb(i,T,t,a,b,d)}function og(i,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new $g(a,e,l);if(Ke(t))g=i.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Uu(e,g,!0,i.filter.filtersNodes());else{const T=Xe(t);if(T===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=Uu(e,g,d.isFullyInitialized(),d.isFiltered());else{const b=_t(t),O=d.getNode().getImmediateChild(T);let V;if(Ke(b))V=s;else{const Y=y.getCompleteChild(T);Y!=null?Sb(b)===".priority"&&Y.getChild(wb(b)).isEmpty()?V=Y:V=Y.updateChild(b,s):V=nt.EMPTY_NODE}if(O.equals(V))p=e;else{const Y=i.filter.updateChild(d.getNode(),T,V,b,y,c);p=Uu(e,Y,d.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function nT(i,e){return i.eventCache.isCompleteForChild(e)}function OD(i,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=tn(t,p);nT(e,Xe(y))&&(d=og(i,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=tn(t,p);nT(e,Xe(y))||(d=og(i,d,y,g,a,l,c))}),d}function iT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function lg(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ke(t)?g=s:g=new gt(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,b)=>{if(y.hasChild(T)){const O=e.serverCache.getNode().getImmediateChild(T),V=iT(i,O,b);p=bf(i,p,new vt(T),V,a,l,c,d)}}),g.children.inorderTraversal((T,b)=>{const O=!e.serverCache.isCompleteForChild(T)&&b.value===null;if(!y.hasChild(T)&&!O){const V=e.serverCache.getNode().getImmediateChild(T),Y=iT(i,V,b);p=bf(i,p,new vt(T),Y,a,l,c,d)}}),p}function xD(i,e,t,s,a,l,c){if(Sf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ke(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return bf(i,e,t,p.getNode().getChild(t),a,l,d,c);if(Ke(t)){let g=new gt(null);return p.getNode().forEachChild(Ko,(y,T)=>{g=g.set(new vt(y),T)}),lg(i,e,t,g,a,l,d,c)}else return e}else{let g=new gt(null);return s.foreach((y,T)=>{const b=tn(t,y);p.isCompleteForPath(b)&&(g=g.set(y,p.getNode().getChild(b)))}),lg(i,e,t,g,a,l,d,c)}}function MD(i,e,t,s,a){const l=e.serverCache,c=Lb(e,l.getNode(),l.isFullyInitialized()||Ke(t),l.isFiltered());return Kb(i,c,t,s,Gb,a)}function kD(i,e,t,s,a,l){let c;if(Sf(s,t)!=null)return e;{const d=new $g(s,e,a),p=e.eventCache.getNode();let g;if(Ke(t)||Xe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ag(s,Oa(e));else{const T=e.serverCache.getNode();se(T instanceof nt,"serverChildren would be complete if leaf node"),y=Fb(s,T)}y=y,g=i.filter.updateFullNode(p,y,l)}else{const y=Xe(t);let T=Qg(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=i.filter.updateChild(p,y,T,_t(t),d,l):e.eventCache.getNode().hasChild(y)?g=i.filter.updateChild(p,y,nt.EMPTY_NODE,_t(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ag(s,Oa(e)),c.isLeafNode()&&(g=i.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Sf(s,ct())!=null,Uu(e,g,c,i.filter.filtersNodes())}}function PD(i,e){const t=Oa(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Ke(e)&&!t.getImmediateChild(Xe(e)).isEmpty())?t.getChild(e):null}function sT(i,e,t,s){e.type===Bi.MERGE&&e.source.queryId!==null&&(se(Oa(i.viewCache_),"We should always have a full cache before handling merges"),se(ig(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=ND(i.processor_,a,e,t,s);return CD(i.processor_,l.viewCache),se(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,VD(i,l.changes,l.viewCache.eventCache.getNode())}function VD(i,e,t,s){const a=i.eventRegistrations_;return uD(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rT;function LD(i){se(!rT,"__referenceConstructor has already been defined"),rT=i}function Wg(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return se(l!=null,"SyncTree gave us an op for an invalid query."),sT(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(sT(c,e,t,s));return l}}function Xg(i,e){let t=null;for(const s of i.views.values())t=t||PD(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aT;function UD(i){se(!aT,"__referenceConstructor has already been defined"),aT=i}class oT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new gt(null),this.pendingWriteTree_=wD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jD(i,e,t,s,a){return dD(i.pendingWriteTree_,e,t,s,a),a?ed(i,new Da(Mb(),e,t)):[]}function qo(i,e,t=!1){const s=mD(i.pendingWriteTree_,e);if(pD(i.pendingWriteTree_,e)){let l=new gt(null);return s.snap!=null?l=l.set(ct(),!0):li(s.children,c=>{l=l.set(new vt(c),!0)}),ed(i,new Tf(s.path,l,t))}else return[]}function Zf(i,e,t){return ed(i,new Da(kb(),e,t))}function zD(i,e,t){const s=gt.fromObject(t);return ed(i,new Qu(kb(),e,s))}function BD(i,e,t,s){const a=Wb(i,s);if(a!=null){const l=Xb(a),c=l.path,d=l.queryId,p=ri(c,e),g=new Da(Pb(d),p,t);return Jb(i,c,g)}else return[]}function FD(i,e,t,s){const a=Wb(i,s);if(a){const l=Xb(a),c=l.path,d=l.queryId,p=ri(c,e),g=gt.fromObject(t),y=new Qu(Pb(d),p,g);return Jb(i,c,y)}else return[]}function Yb(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const p=ri(c,e),g=Xg(d,p);if(g)return g});return Bb(a,e,l,t,!0)}function ed(i,e){return Qb(e,i.syncPointTree_,null,jb(i.pendingWriteTree_,ct()))}function Qb(i,e,t,s){if(Ke(i.path))return $b(i,e,t,s);{const a=e.get(ct());t==null&&a!=null&&(t=Xg(a,ct()));let l=[];const c=Xe(i.path),d=i.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=qb(s,c);l=l.concat(Qb(d,p,g,y))}return a&&(l=l.concat(Wg(a,i,s,t))),l}}function $b(i,e,t,s){const a=e.get(ct());t==null&&a!=null&&(t=Xg(a,ct()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=qb(s,c),y=i.operationForChild(c);y&&(l=l.concat($b(y,d,p,g)))}),a&&(l=l.concat(Wg(a,i,s,t))),l}function Wb(i,e){return i.tagToQueryMap.get(e)}function Xb(i){const e=i.indexOf("$");return se(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new vt(i.substr(0,e))}}function Jb(i,e,t){const s=i.syncPointTree_.get(e);se(s,"Missing sync point for query tag that we're tracking");const a=jb(i.pendingWriteTree_,e);return Wg(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Jg(t)}node(){return this.node_}}class Zg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=tn(this.path_,e);return new Zg(this.syncTree_,t)}node(){return Yb(this.syncTree_,this.path_)}}const qD=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},lT=function(i,e,t){if(!i||typeof i!="object")return i;if(se(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return HD(i[".sv"],e,t);if(typeof i[".sv"]=="object")return GD(i[".sv"],e);se(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},HD=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:se(!1,"Unexpected server value: "+i)}},GD=function(i,e,t){i.hasOwnProperty("increment")||se(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&se(!1,"Unexpected increment value: "+s);const a=e.node();if(se(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},KD=function(i,e,t,s){return e_(e,new Zg(t,i),s)},YD=function(i,e,t){return e_(i,new Jg(e),t)};function e_(i,e,t){const s=i.getPriority().val(),a=lT(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=lT(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Zt(d,yn(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Zt(a))),c.forEachChild(En,(d,p)=>{const g=e_(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function n_(i,e){let t=e instanceof vt?e:new vt(e),s=i,a=Xe(t);for(;a!==null;){const l=Xo(s.node.children,a)||{children:{},childCount:0};s=new t_(a,s,l),t=_t(t),a=Xe(t)}return s}function ul(i){return i.node.value}function Zb(i,e){i.node.value=e,ug(i)}function ew(i){return i.node.childCount>0}function QD(i){return ul(i)===void 0&&!ew(i)}function td(i,e){li(i.node.children,(t,s)=>{e(new t_(t,i,s))})}function tw(i,e,t,s){t&&e(i),td(i,a=>{tw(a,e,!0)})}function $D(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function cc(i){return new vt(i.parent===null?i.name:cc(i.parent)+"/"+i.name)}function ug(i){i.parent!==null&&WD(i.parent,i.name,i)}function WD(i,e,t){const s=QD(t),a=zs(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,ug(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,ug(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=/[\[\].#$\/\u0000-\u001F\u007F]/,JD=/[\[\].#$\u0000-\u001F\u007F]/,jp=10*1024*1024,nw=function(i){return typeof i=="string"&&i.length!==0&&!XD.test(i)},ZD=function(i){return typeof i=="string"&&i.length!==0&&!JD.test(i)},e2=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),ZD(i)},iw=function(i,e,t){const s=t instanceof vt?new MN(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+wa(s));if(typeof e=="function")throw new Error(i+"contains a function "+wa(s)+" with contents = "+e.toString());if(tb(e))throw new Error(i+"contains "+e.toString()+" "+wa(s));if(typeof e=="string"&&e.length>jp/3&&$f(e)>jp)throw new Error(i+"contains a string greater than "+jp+" utf8 bytes "+wa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(li(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!nw(c)))throw new Error(i+" contains an invalid key ("+c+") "+wa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kN(s,c),iw(i,d,s),PN(s)}),a&&l)throw new Error(i+' contains ".value" child '+wa(s)+" in addition to actual children.")}},t2=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!e2(t))throw new Error(xI(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function i2(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Ab(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function ja(i,e,t){i2(i,t),s2(i,s=>_i(s,e)||_i(e,s))}function s2(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(r2(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function r2(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();Vu&&_n("event: "+t.toString()),lc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="repo_interrupt",o2=25;class l2{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new n2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ef(),this.transactionQueueTree_=new t_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function u2(i,e,t){if(i.stats_=Fg(i.repoInfo_),i.forceRestClient_||sN())i.server_=new vf(i.repoInfo_,(s,a,l,c)=>{uT(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>cT(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{cn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Ds(i.repoInfo_,e,(s,a,l,c)=>{uT(i,s,a,l,c)},s=>{cT(i,s)},s=>{h2(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=uN(i.repoInfo_,()=>new lD(i.stats_,i.server_)),i.infoData_=new iD,i.infoSyncTree_=new oT({startListening:(s,a,l,c)=>{let d=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(d=Zf(i.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),i_(i,"connected",!1),i.serverSyncTree_=new oT({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);ja(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function c2(i){const t=i.infoData_.getNode(new vt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function sw(i){return qD({timestamp:c2(i)})}function uT(i,e,t,s,a){i.dataUpdateCount++;const l=new vt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=mf(t,g=>yn(g));c=FD(i.serverSyncTree_,l,p,a)}else{const p=yn(t);c=BD(i.serverSyncTree_,l,p,a)}else if(s){const p=mf(t,g=>yn(g));c=zD(i.serverSyncTree_,l,p)}else{const p=yn(t);c=Zf(i.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=r_(i,l)),ja(i.eventQueue_,d,c)}function cT(i,e){i_(i,"connected",e),e===!1&&d2(i)}function h2(i,e){li(e,(t,s)=>{i_(i,t,s)})}function i_(i,e,t){const s=new vt("/.info/"+e),a=yn(t);i.infoData_.updateSnapshot(s,a);const l=Zf(i.infoSyncTree_,s,a);ja(i.eventQueue_,s,l)}function f2(i){return i.nextWriteId_++}function d2(i){rw(i,"onDisconnectEvents");const e=sw(i),t=Ef();ng(i.onDisconnect_,ct(),(a,l)=>{const c=KD(a,l,i.serverSyncTree_,e);xb(t,a,c)});let s=[];ng(t,ct(),(a,l)=>{s=s.concat(Zf(i.serverSyncTree_,a,l));const c=_2(i,a);r_(i,c)}),i.onDisconnect_=Ef(),ja(i.eventQueue_,ct(),s)}function m2(i){i.persistentConnection_&&i.persistentConnection_.interrupt(a2)}function rw(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),_n(t,...e)}function aw(i,e,t){return Yb(i.serverSyncTree_,e,t)||nt.EMPTY_NODE}function s_(i,e=i.transactionQueueTree_){if(e||nd(i,e),ul(e)){const t=lw(i,e);se(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&p2(i,cc(e),t)}else ew(e)&&td(e,t=>{s_(i,t)})}function p2(i,e,t){const s=t.map(g=>g.currentWriteId),a=aw(i,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];se(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=ri(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;i.server_.put(p.toString(),d,g=>{rw(i,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let b=0;b<t.length;b++)t[b].status=2,y=y.concat(qo(i.serverSyncTree_,t[b].currentWriteId)),t[b].onComplete&&T.push(()=>t[b].onComplete(null,!0,t[b].currentOutputSnapshotResolved)),t[b].unwatcher();nd(i,n_(i.transactionQueueTree_,e)),s_(i,i.transactionQueueTree_),ja(i.eventQueue_,e,y);for(let b=0;b<T.length;b++)lc(T[b])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Hn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}r_(i,e)}},c)}function r_(i,e){const t=ow(i,e),s=cc(t),a=lw(i,t);return g2(i,a,s),s}function g2(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=ri(t,p.path);let y=!1,T;if(se(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(qo(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=o2)y=!0,T="maxretry",a=a.concat(qo(i.serverSyncTree_,p.currentWriteId,!0));else{const b=aw(i,p.path,c);p.currentInputSnapshot=b;const O=e[d].update(b.val());if(O!==void 0){iw("transaction failed: Data returned ",O,p.path);let V=yn(O);typeof O=="object"&&O!=null&&zs(O,".priority")||(V=V.updatePriority(b.getPriority()));const K=p.currentWriteId,ce=sw(i),re=YD(V,b,ce);p.currentOutputSnapshotRaw=V,p.currentOutputSnapshotResolved=re,p.currentWriteId=f2(i),c.splice(c.indexOf(K),1),a=a.concat(jD(i.serverSyncTree_,p.path,re,p.currentWriteId,p.applyLocally)),a=a.concat(qo(i.serverSyncTree_,K,!0))}else y=!0,T="nodata",a=a.concat(qo(i.serverSyncTree_,p.currentWriteId,!0))}ja(i.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(b){setTimeout(b,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}nd(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)lc(s[d]);s_(i,i.transactionQueueTree_)}function ow(i,e){let t,s=i.transactionQueueTree_;for(t=Xe(e);t!==null&&ul(s)===void 0;)s=n_(s,t),e=_t(e),t=Xe(e);return s}function lw(i,e){const t=[];return uw(i,e,t),t.sort((s,a)=>s.order-a.order),t}function uw(i,e,t){const s=ul(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);td(e,a=>{uw(i,a,t)})}function nd(i,e){const t=ul(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,Zb(e,t.length>0?t:void 0)}td(e,s=>{nd(i,s)})}function _2(i,e){const t=cc(ow(i,e)),s=n_(i.transactionQueueTree_,e);return $D(s,a=>{zp(i,a)}),zp(i,s),tw(s,a=>{zp(i,a)}),t}function zp(i,e){const t=ul(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(se(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(se(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(qo(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Zb(e,void 0):t.length=l+1,ja(i.eventQueue_,cc(e),a);for(let c=0;c<s.length;c++)lc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function v2(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Hn(`Invalid query segment '${t}' in query '${i}'`)}return e}const hT=function(i,e){const t=E2(i),s=t.namespace;t.domain==="firebase.com"&&Ps(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ps("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||WC();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new db(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new vt(t.pathString)}},E2=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(d=i.substring(0,g-1),i=i.substring(g+2));let y=i.indexOf("/");y===-1&&(y=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(y,T)),y<T&&(a=y2(i.substring(y,T)));const b=v2(i.substring(Math.min(i.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const V=e.indexOf(".");s=e.substring(0,V).toLowerCase(),t=e.substring(V+1),l=s}"ns"in b&&(l=b.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ke(this._path)?null:Sb(this._path)}get ref(){return new cl(this._repo,this._path)}get _queryIdentifier(){const e=WE(this._queryParams),t=zg(e);return t==="{}"?"default":t}get _queryObject(){return WE(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof a_))return!1;const t=this._repo===e._repo,s=Ab(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+xN(this._path)}}class cl extends a_{constructor(e,t){super(e,t,new Kg,!1)}get parent(){const e=wb(this._path);return e===null?null:new cl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}LD(cl);UD(cl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="FIREBASE_DATABASE_EMULATOR_HOST",cg={};let S2=!1;function b2(i,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=js(l);i.repoInfo_=new db(e,c,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(i.authTokenProvider_=s)}function w2(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||Ps("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_n("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=hT(l,a),d=c.repoInfo,p;typeof process<"u"&&OE&&(p=OE[T2]),p?(l=`http://${p}?ns=${d.namespace}`,c=hT(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new aN(i.name,i.options,e);t2("Invalid Firebase Database URL",c),Ke(c.path)||Ps("Database URL must point to the root of a Firebase Database (not including a child path).");const y=R2(d,i,g,new rN(i,t));return new I2(y,i)}function A2(i,e){const t=cg[e];(!t||t[i.key]!==i)&&Ps(`Database ${e}(${i.repoInfo_}) has already been deleted.`),m2(i),delete t[i.key]}function R2(i,e,t,s){let a=cg[e.name];a||(a={},cg[e.name]=a);let l=a[i.toURLString()];return l&&Ps("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new l2(i,S2,t,s),a[i.toURLString()]=l,l}class I2{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(u2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cl(this._repo,ct())),this._rootInternal}_delete(){return this._rootInternal!==null&&(A2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ps("Cannot call "+e+" on a deleted database.")}}function C2(i=Xf(),e){const t=rc(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Vg("database");s&&N2(t,...s)}return t}function N2(i,e,t,s={}){i=wt(i),i._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&Cr(s,l.repoInfo_.emulatorOptions))return;Ps("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Ps('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Zh(Zh.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:HS(s.mockUserToken,i.app.options.projectId);c=new Zh(d)}js(e)&&(Yf(e),Qf("Database",!0)),b2(l,a,s,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(i){HC(La),Nr(new Ms("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return w2(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),ai(xE,ME,i),ai(xE,ME,"esm2017")}Ds.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Ds.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};D2();var fT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,cw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,R){function C(){}C.prototype=R.prototype,k.D=R.prototype,k.prototype=new C,k.prototype.constructor=k,k.C=function(M,P,N){for(var A=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)A[ke-2]=arguments[ke];return R.prototype[P].apply(M,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,R,C){C||(C=0);var M=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)M[P]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(P=0;16>P;++P)M[P]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=k.g[0],C=k.g[1],P=k.g[2];var N=k.g[3],A=R+(N^C&(P^N))+M[0]+3614090360&4294967295;R=C+(A<<7&4294967295|A>>>25),A=N+(P^R&(C^P))+M[1]+3905402710&4294967295,N=R+(A<<12&4294967295|A>>>20),A=P+(C^N&(R^C))+M[2]+606105819&4294967295,P=N+(A<<17&4294967295|A>>>15),A=C+(R^P&(N^R))+M[3]+3250441966&4294967295,C=P+(A<<22&4294967295|A>>>10),A=R+(N^C&(P^N))+M[4]+4118548399&4294967295,R=C+(A<<7&4294967295|A>>>25),A=N+(P^R&(C^P))+M[5]+1200080426&4294967295,N=R+(A<<12&4294967295|A>>>20),A=P+(C^N&(R^C))+M[6]+2821735955&4294967295,P=N+(A<<17&4294967295|A>>>15),A=C+(R^P&(N^R))+M[7]+4249261313&4294967295,C=P+(A<<22&4294967295|A>>>10),A=R+(N^C&(P^N))+M[8]+1770035416&4294967295,R=C+(A<<7&4294967295|A>>>25),A=N+(P^R&(C^P))+M[9]+2336552879&4294967295,N=R+(A<<12&4294967295|A>>>20),A=P+(C^N&(R^C))+M[10]+4294925233&4294967295,P=N+(A<<17&4294967295|A>>>15),A=C+(R^P&(N^R))+M[11]+2304563134&4294967295,C=P+(A<<22&4294967295|A>>>10),A=R+(N^C&(P^N))+M[12]+1804603682&4294967295,R=C+(A<<7&4294967295|A>>>25),A=N+(P^R&(C^P))+M[13]+4254626195&4294967295,N=R+(A<<12&4294967295|A>>>20),A=P+(C^N&(R^C))+M[14]+2792965006&4294967295,P=N+(A<<17&4294967295|A>>>15),A=C+(R^P&(N^R))+M[15]+1236535329&4294967295,C=P+(A<<22&4294967295|A>>>10),A=R+(P^N&(C^P))+M[1]+4129170786&4294967295,R=C+(A<<5&4294967295|A>>>27),A=N+(C^P&(R^C))+M[6]+3225465664&4294967295,N=R+(A<<9&4294967295|A>>>23),A=P+(R^C&(N^R))+M[11]+643717713&4294967295,P=N+(A<<14&4294967295|A>>>18),A=C+(N^R&(P^N))+M[0]+3921069994&4294967295,C=P+(A<<20&4294967295|A>>>12),A=R+(P^N&(C^P))+M[5]+3593408605&4294967295,R=C+(A<<5&4294967295|A>>>27),A=N+(C^P&(R^C))+M[10]+38016083&4294967295,N=R+(A<<9&4294967295|A>>>23),A=P+(R^C&(N^R))+M[15]+3634488961&4294967295,P=N+(A<<14&4294967295|A>>>18),A=C+(N^R&(P^N))+M[4]+3889429448&4294967295,C=P+(A<<20&4294967295|A>>>12),A=R+(P^N&(C^P))+M[9]+568446438&4294967295,R=C+(A<<5&4294967295|A>>>27),A=N+(C^P&(R^C))+M[14]+3275163606&4294967295,N=R+(A<<9&4294967295|A>>>23),A=P+(R^C&(N^R))+M[3]+4107603335&4294967295,P=N+(A<<14&4294967295|A>>>18),A=C+(N^R&(P^N))+M[8]+1163531501&4294967295,C=P+(A<<20&4294967295|A>>>12),A=R+(P^N&(C^P))+M[13]+2850285829&4294967295,R=C+(A<<5&4294967295|A>>>27),A=N+(C^P&(R^C))+M[2]+4243563512&4294967295,N=R+(A<<9&4294967295|A>>>23),A=P+(R^C&(N^R))+M[7]+1735328473&4294967295,P=N+(A<<14&4294967295|A>>>18),A=C+(N^R&(P^N))+M[12]+2368359562&4294967295,C=P+(A<<20&4294967295|A>>>12),A=R+(C^P^N)+M[5]+4294588738&4294967295,R=C+(A<<4&4294967295|A>>>28),A=N+(R^C^P)+M[8]+2272392833&4294967295,N=R+(A<<11&4294967295|A>>>21),A=P+(N^R^C)+M[11]+1839030562&4294967295,P=N+(A<<16&4294967295|A>>>16),A=C+(P^N^R)+M[14]+4259657740&4294967295,C=P+(A<<23&4294967295|A>>>9),A=R+(C^P^N)+M[1]+2763975236&4294967295,R=C+(A<<4&4294967295|A>>>28),A=N+(R^C^P)+M[4]+1272893353&4294967295,N=R+(A<<11&4294967295|A>>>21),A=P+(N^R^C)+M[7]+4139469664&4294967295,P=N+(A<<16&4294967295|A>>>16),A=C+(P^N^R)+M[10]+3200236656&4294967295,C=P+(A<<23&4294967295|A>>>9),A=R+(C^P^N)+M[13]+681279174&4294967295,R=C+(A<<4&4294967295|A>>>28),A=N+(R^C^P)+M[0]+3936430074&4294967295,N=R+(A<<11&4294967295|A>>>21),A=P+(N^R^C)+M[3]+3572445317&4294967295,P=N+(A<<16&4294967295|A>>>16),A=C+(P^N^R)+M[6]+76029189&4294967295,C=P+(A<<23&4294967295|A>>>9),A=R+(C^P^N)+M[9]+3654602809&4294967295,R=C+(A<<4&4294967295|A>>>28),A=N+(R^C^P)+M[12]+3873151461&4294967295,N=R+(A<<11&4294967295|A>>>21),A=P+(N^R^C)+M[15]+530742520&4294967295,P=N+(A<<16&4294967295|A>>>16),A=C+(P^N^R)+M[2]+3299628645&4294967295,C=P+(A<<23&4294967295|A>>>9),A=R+(P^(C|~N))+M[0]+4096336452&4294967295,R=C+(A<<6&4294967295|A>>>26),A=N+(C^(R|~P))+M[7]+1126891415&4294967295,N=R+(A<<10&4294967295|A>>>22),A=P+(R^(N|~C))+M[14]+2878612391&4294967295,P=N+(A<<15&4294967295|A>>>17),A=C+(N^(P|~R))+M[5]+4237533241&4294967295,C=P+(A<<21&4294967295|A>>>11),A=R+(P^(C|~N))+M[12]+1700485571&4294967295,R=C+(A<<6&4294967295|A>>>26),A=N+(C^(R|~P))+M[3]+2399980690&4294967295,N=R+(A<<10&4294967295|A>>>22),A=P+(R^(N|~C))+M[10]+4293915773&4294967295,P=N+(A<<15&4294967295|A>>>17),A=C+(N^(P|~R))+M[1]+2240044497&4294967295,C=P+(A<<21&4294967295|A>>>11),A=R+(P^(C|~N))+M[8]+1873313359&4294967295,R=C+(A<<6&4294967295|A>>>26),A=N+(C^(R|~P))+M[15]+4264355552&4294967295,N=R+(A<<10&4294967295|A>>>22),A=P+(R^(N|~C))+M[6]+2734768916&4294967295,P=N+(A<<15&4294967295|A>>>17),A=C+(N^(P|~R))+M[13]+1309151649&4294967295,C=P+(A<<21&4294967295|A>>>11),A=R+(P^(C|~N))+M[4]+4149444226&4294967295,R=C+(A<<6&4294967295|A>>>26),A=N+(C^(R|~P))+M[11]+3174756917&4294967295,N=R+(A<<10&4294967295|A>>>22),A=P+(R^(N|~C))+M[2]+718787259&4294967295,P=N+(A<<15&4294967295|A>>>17),A=C+(N^(P|~R))+M[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+N&4294967295}s.prototype.u=function(k,R){R===void 0&&(R=k.length);for(var C=R-this.blockSize,M=this.B,P=this.h,N=0;N<R;){if(P==0)for(;N<=C;)a(this,k,N),N+=this.blockSize;if(typeof k=="string"){for(;N<R;)if(M[P++]=k.charCodeAt(N++),P==this.blockSize){a(this,M),P=0;break}}else for(;N<R;)if(M[P++]=k[N++],P==this.blockSize){a(this,M),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;var C=8*this.o;for(R=k.length-8;R<k.length;++R)k[R]=C&255,C/=256;for(this.u(k),k=Array(16),R=C=0;4>R;++R)for(var M=0;32>M;M+=8)k[C++]=this.g[R]>>>M&255;return k};function l(k,R){var C=d;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=R(k)}function c(k,R){this.h=R;for(var C=[],M=!0,P=k.length-1;0<=P;P--){var N=k[P]|0;M&&N==R||(C[P]=N,M=!1)}this.g=C}var d={};function p(k){return-128<=k&&128>k?l(k,function(R){return new c([R|0],0>R?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return K(g(-k));for(var R=[],C=1,M=0;k>=C;M++)R[M]=k/C|0,C*=4294967296;return new c(R,0)}function y(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return K(y(k.substring(1),R));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(R,8)),M=T,P=0;P<k.length;P+=8){var N=Math.min(8,k.length-P),A=parseInt(k.substring(P,P+N),R);8>N?(N=g(Math.pow(R,N)),M=M.j(N).add(g(A))):(M=M.j(C),M=M.add(g(A)))}return M}var T=p(0),b=p(1),O=p(16777216);i=c.prototype,i.m=function(){if(Y(this))return-K(this).m();for(var k=0,R=1,C=0;C<this.g.length;C++){var M=this.i(C);k+=(0<=M?M:4294967296+M)*R,R*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(V(this))return"0";if(Y(this))return"-"+K(this).toString(k);for(var R=g(Math.pow(k,6)),C=this,M="";;){var P=Ce(C,R).g;C=ce(C,P.j(R));var N=((0<C.g.length?C.g[0]:C.h)>>>0).toString(k);if(C=P,V(C))return N+M;for(;6>N.length;)N="0"+N;M=N+M}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function V(k){if(k.h!=0)return!1;for(var R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function Y(k){return k.h==-1}i.l=function(k){return k=ce(this,k),Y(k)?-1:V(k)?0:1};function K(k){for(var R=k.g.length,C=[],M=0;M<R;M++)C[M]=~k.g[M];return new c(C,~k.h).add(b)}i.abs=function(){return Y(this)?K(this):this},i.add=function(k){for(var R=Math.max(this.g.length,k.g.length),C=[],M=0,P=0;P<=R;P++){var N=M+(this.i(P)&65535)+(k.i(P)&65535),A=(N>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);M=A>>>16,N&=65535,A&=65535,C[P]=A<<16|N}return new c(C,C[C.length-1]&-2147483648?-1:0)};function ce(k,R){return k.add(K(R))}i.j=function(k){if(V(this)||V(k))return T;if(Y(this))return Y(k)?K(this).j(K(k)):K(K(this).j(k));if(Y(k))return K(this.j(K(k)));if(0>this.l(O)&&0>k.l(O))return g(this.m()*k.m());for(var R=this.g.length+k.g.length,C=[],M=0;M<2*R;M++)C[M]=0;for(M=0;M<this.g.length;M++)for(var P=0;P<k.g.length;P++){var N=this.i(M)>>>16,A=this.i(M)&65535,ke=k.i(P)>>>16,De=k.i(P)&65535;C[2*M+2*P]+=A*De,re(C,2*M+2*P),C[2*M+2*P+1]+=N*De,re(C,2*M+2*P+1),C[2*M+2*P+1]+=A*ke,re(C,2*M+2*P+1),C[2*M+2*P+2]+=N*ke,re(C,2*M+2*P+2)}for(M=0;M<R;M++)C[M]=C[2*M+1]<<16|C[2*M];for(M=R;M<2*R;M++)C[M]=0;return new c(C,0)};function re(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function oe(k,R){this.g=k,this.h=R}function Ce(k,R){if(V(R))throw Error("division by zero");if(V(k))return new oe(T,T);if(Y(k))return R=Ce(K(k),R),new oe(K(R.g),K(R.h));if(Y(R))return R=Ce(k,K(R)),new oe(K(R.g),R.h);if(30<k.g.length){if(Y(k)||Y(R))throw Error("slowDivide_ only works with positive integers.");for(var C=b,M=R;0>=M.l(k);)C=pe(C),M=pe(M);var P=Ne(C,1),N=Ne(M,1);for(M=Ne(M,2),C=Ne(C,2);!V(M);){var A=N.add(M);0>=A.l(k)&&(P=P.add(C),N=A),M=Ne(M,1),C=Ne(C,1)}return R=ce(k,P.j(R)),new oe(P,R)}for(P=T;0<=k.l(R);){for(C=Math.max(1,Math.floor(k.m()/R.m())),M=Math.ceil(Math.log(C)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),N=g(C),A=N.j(R);Y(A)||0<A.l(k);)C-=M,N=g(C),A=N.j(R);V(N)&&(N=b),P=P.add(N),k=ce(k,A)}return new oe(P,k)}i.A=function(k){return Ce(this,k).h},i.and=function(k){for(var R=Math.max(this.g.length,k.g.length),C=[],M=0;M<R;M++)C[M]=this.i(M)&k.i(M);return new c(C,this.h&k.h)},i.or=function(k){for(var R=Math.max(this.g.length,k.g.length),C=[],M=0;M<R;M++)C[M]=this.i(M)|k.i(M);return new c(C,this.h|k.h)},i.xor=function(k){for(var R=Math.max(this.g.length,k.g.length),C=[],M=0;M<R;M++)C[M]=this.i(M)^k.i(M);return new c(C,this.h^k.h)};function pe(k){for(var R=k.g.length+1,C=[],M=0;M<R;M++)C[M]=k.i(M)<<1|k.i(M-1)>>>31;return new c(C,k.h)}function Ne(k,R){var C=R>>5;R%=32;for(var M=k.g.length-C,P=[],N=0;N<M;N++)P[N]=0<R?k.i(N+C)>>>R|k.i(N+C+1)<<32-R:k.i(N+C);return new c(P,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,cw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Rr=c}).apply(typeof fT<"u"?fT:typeof self<"u"?self:typeof window<"u"?window:{});var Kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hw,Ou,fw,tf,hg,dw,mw,pw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kh=="object"&&Kh];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var U=h[w];if(!(U in v))break e;v=v[U]}h=h[h.length-1],w=v[h],_=_(w),_!=w&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,w=!1,U={next:function(){if(!w&&v<h.length){var G=v++;return{value:_(G,h[G]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function b(h,_,v){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,b.apply(null,arguments)}function O(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function V(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(w,U,G){for(var ie=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)ie[Ye-2]=arguments[Ye];return _.prototype[U].apply(w,ie)}}function Y(h){const _=h.length;if(0<_){const v=Array(_);for(let w=0;w<_;w++)v[w]=h[w];return v}return[]}function K(h,_){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(p(w)){const U=h.length||0,G=w.length||0;h.length=U+G;for(let ie=0;ie<G;ie++)h[U+ie]=w[ie]}else h.push(w)}}class ce{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function re(h){return/^[\s\xa0]*$/.test(h)}function oe(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Ce(h){return Ce[" "](h),h}Ce[" "]=function(){};var pe=oe().indexOf("Gecko")!=-1&&!(oe().toLowerCase().indexOf("webkit")!=-1&&oe().indexOf("Edge")==-1)&&!(oe().indexOf("Trident")!=-1||oe().indexOf("MSIE")!=-1)&&oe().indexOf("Edge")==-1;function Ne(h,_,v){for(const w in h)_.call(v,h[w],w,h)}function k(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let v,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(v in w)h[v]=w[v];for(let G=0;G<C.length;G++)v=C[G],Object.prototype.hasOwnProperty.call(w,v)&&(h[v]=w[v])}}function P(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function N(h){d.setTimeout(()=>{throw h},0)}function A(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ke{constructor(){this.h=this.g=null}add(_,v){const w=De.get();w.set(_,v),this.h?this.h.next=w:this.g=w,this.h=w}}var De=new ce(()=>new H,h=>h.reset());class H{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ue=!1,Ge=new ke,D=()=>{const h=d.Promise.resolve(void 0);ee=()=>{h.then(Z)}};var Z=()=>{for(var h;h=A();){try{h.h.call(h.g)}catch(v){N(v)}var _=De;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ue=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var _e=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function Le(h,_){if(te.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(pe){e:{try{Ce(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Le.aa.h.call(this)}}V(Le,te);var Ae={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(h,_,v,w,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!w,this.ha=U,this.key=++ht,this.da=this.fa=!1}function ui(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Gn(h){this.src=h,this.g={},this.h=0}Gn.prototype.add=function(h,_,v,w,U){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var ie=Ji(h,_,w,U);return-1<ie?(_=h[ie],v||(_.fa=!1)):(_=new ft(_,this.src,G,!!w,U),_.fa=v,h.push(_)),_};function Xi(h,_){var v=_.type;if(v in h.g){var w=h.g[v],U=Array.prototype.indexOf.call(w,_,void 0),G;(G=0<=U)&&Array.prototype.splice.call(w,U,1),G&&(ui(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Ji(h,_,v,w){for(var U=0;U<h.length;++U){var G=h[U];if(!G.da&&G.listener==_&&G.capture==!!v&&G.ha==w)return U}return-1}var Zi="closure_lm_"+(1e6*Math.random()|0),Fr={};function Ha(h,_,v,w,U){if(Array.isArray(_)){for(var G=0;G<_.length;G++)Ha(h,_[G],v,w,U);return null}return v=ge(v),h&&h[Dt]?h.K(_,v,g(w)?!!w.capture:!1,U):nn(h,_,v,!1,w,U)}function nn(h,_,v,w,U,G){if(!_)throw Error("Invalid event type");var ie=g(U)?!!U.capture:!!U,Ye=he(h);if(Ye||(h[Zi]=Ye=new Gn(h)),v=Ye.add(_,v,w,ie,G),v.proxy)return v;if(w=gl(),v.proxy=w,w.src=h,w.listener=v,h.addEventListener)_e||(U=ie),U===void 0&&(U=!1),h.addEventListener(_.toString(),w,U);else if(h.attachEvent)h.attachEvent(Rt(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function gl(){function h(v){return _.call(h.src,h.listener,v)}const _=de;return h}function qr(h,_,v,w,U){if(Array.isArray(_))for(var G=0;G<_.length;G++)qr(h,_[G],v,w,U);else w=g(w)?!!w.capture:!!w,v=ge(v),h&&h[Dt]?(h=h.i,_=String(_).toString(),_ in h.g&&(G=h.g[_],v=Ji(G,v,w,U),-1<v&&(ui(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete h.g[_],h.h--)))):h&&(h=he(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Ji(_,v,w,U)),(v=-1<h?_[h]:null)&&Hr(v))}function Hr(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Dt])Xi(_.i,h);else{var v=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(v,w,h.capture):_.detachEvent?_.detachEvent(Rt(v),w):_.addListener&&_.removeListener&&_.removeListener(w),(v=he(_))?(Xi(v,h),v.h==0&&(v.src=null,_[Zi]=null)):ui(h)}}}function Rt(h){return h in Fr?Fr[h]:Fr[h]="on"+h}function de(h,_){if(h.da)h=!0;else{_=new Le(_,this);var v=h.listener,w=h.ha||h.src;h.fa&&Hr(h),h=v.call(w,_)}return h}function he(h){return h=h[Zi],h instanceof Gn?h:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(h){return typeof h=="function"?h:(h[Ee]||(h[Ee]=function(_){return h.handleEvent(_)}),h[Ee])}function Ie(){ne.call(this),this.i=new Gn(this),this.M=this,this.F=null}V(Ie,ne),Ie.prototype[Dt]=!0,Ie.prototype.removeEventListener=function(h,_,v,w){qr(this,h,_,v,w)};function ve(h,_){var v,w=h.F;if(w)for(v=[];w;w=w.F)v.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new te(_,h);else if(_ instanceof te)_.target=_.target||h;else{var U=_;_=new te(w,h),M(_,U)}if(U=!0,v)for(var G=v.length-1;0<=G;G--){var ie=_.g=v[G];U=Me(ie,w,!0,_)&&U}if(ie=_.g=h,U=Me(ie,w,!0,_)&&U,U=Me(ie,w,!1,_)&&U,v)for(G=0;G<v.length;G++)ie=_.g=v[G],U=Me(ie,w,!1,_)&&U}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],w=0;w<v.length;w++)ui(v[w]);delete h.g[_],h.h--}}this.F=null},Ie.prototype.K=function(h,_,v,w){return this.i.add(String(h),_,!1,v,w)},Ie.prototype.L=function(h,_,v,w){return this.i.add(String(h),_,!0,v,w)};function Me(h,_,v,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,G=0;G<_.length;++G){var ie=_[G];if(ie&&!ie.da&&ie.capture==v){var Ye=ie.listener,qt=ie.ha||ie.src;ie.fa&&Xi(h.i,ie),U=Ye.call(qt,w)!==!1&&U}}return U&&!w.defaultPrevented}function Et(h,_,v){if(typeof h=="function")v&&(h=b(h,v));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Rn(h){h.g=Et(()=>{h.g=null,h.i&&(h.i=!1,Rn(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class es extends ne{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Rn(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bs(h){ne.call(this),this.h=h,this.g={}}V(Bs,ne);var Gr=[];function Kr(h){Ne(h.g,function(_,v){this.g.hasOwnProperty(v)&&Hr(_)},h),h.g={}}Bs.prototype.N=function(){Bs.aa.N.call(this),Kr(this)},Bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ci=d.JSON.stringify,Ga=d.JSON.parse,Yr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function _l(){}_l.prototype.h=null;function yl(h){return h.h||(h.h=h.i())}function vl(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ns(){te.call(this,"d")}V(ns,te);function El(){te.call(this,"c")}V(El,te);var Si={},Tl=null;function Fs(){return Tl=Tl||new Ie}Si.La="serverreachability";function Ka(h){te.call(this,Si.La,h)}V(Ka,te);function qs(h){const _=Fs();ve(_,new Ka(_))}Si.STAT_EVENT="statevent";function bc(h,_){te.call(this,Si.STAT_EVENT,h),this.stat=_}V(bc,te);function Tt(h){const _=Fs();ve(_,new bc(_,h))}Si.Ma="timingevent";function Ft(h,_){te.call(this,Si.Ma,h),this.size=_}V(Ft,te);function Pt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Kn(){this.g=!0}Kn.prototype.xa=function(){this.g=!1};function Sl(h,_,v,w,U,G){h.info(function(){if(h.g)if(G)for(var ie="",Ye=G.split("&"),qt=0;qt<Ye.length;qt++){var Qe=Ye[qt].split("=");if(1<Qe.length){var $t=Qe[0];Qe=Qe[1];var Ht=$t.split("_");ie=2<=Ht.length&&Ht[1]=="type"?ie+($t+"="+Qe+"&"):ie+($t+"=redacted&")}}else ie=null;else ie=G;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+_+`
`+v+`
`+ie})}function Rd(h,_,v,w,U,G,ie){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+_+`
`+v+`
`+G+" "+ie})}function Hs(h,_,v,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Qr(h,v)+(w?" "+w:"")})}function wc(h,_){h.info(function(){return"TIMEOUT: "+_})}Kn.prototype.info=function(){};function Qr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var w=v[h];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var G=U[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ie=1;ie<U.length;ie++)U[ie]=""}}}}return ci(v)}catch{return _}}var Gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},is={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bi;function wi(){}V(wi,_l),wi.prototype.g=function(){return new XMLHttpRequest},wi.prototype.i=function(){return{}},bi=new wi;function Sn(h,_,v,w){this.j=h,this.i=_,this.l=v,this.R=w||1,this.U=new Bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ot}function Ot(){this.i=null,this.g="",this.h=!1}var bl={},Ya={};function hi(h,_,v){h.L=1,h.v=Zr(kn(_)),h.m=v,h.P=!0,ss(h,null)}function ss(h,_){h.F=Date.now(),$r(h),h.A=kn(h.v);var v=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Nl(v.i,"t",w),h.C=0,v=h.j.J,h.h=new Ot,h.g=zc(h.j,v?_:null,!h.m),0<h.O&&(h.M=new es(b(h.Y,h,h.g),h.O)),_=h.U,v=h.g,w=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Gr[0]=U.toString()),U=Gr);for(var G=0;G<U.length;G++){var ie=Ha(v,U[G],w||_.handleEvent,!1,_.h||_);if(!ie)break;_.g[ie.key]=ie}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),qs(),Sl(h.i,h.u,h.A,h.l,h.R,h.m)}Sn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Wn(h)==3?_.j():this.Y(h)},Sn.prototype.Y=function(h){try{if(h==this.g)e:{const Ht=Wn(this.g);var _=this.g.Ba();const fs=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||xc(this.g)))){this.J||Ht!=4||_==7||(_==8||0>=fs?qs(3):qs(2)),Ks(this);var v=this.g.Z();this.X=v;t:if(Ac(this)){var w=xc(this.g);h="";var U=w.length,G=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),Ai(this);var ie="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(G&&_==U-1)});w.length=0,this.h.g+=h,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=v==200,Rd(this.i,this.u,this.A,this.l,this.R,Ht,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,qt=this.g;if((Ye=qt.g?qt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(Ye)){var Qe=Ye;break t}}Qe=null}if(v=Qe)Hs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,v);else{this.o=!1,this.s=3,Tt(12),sn(this),Ai(this);break e}}if(this.P){v=!0;let rn;for(;!this.J&&this.C<ie.length;)if(rn=Rc(this,ie),rn==Ya){Ht==4&&(this.s=4,Tt(14),v=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==bl){this.s=4,Tt(15),Hs(this.i,this.l,ie,"[Invalid Chunk]"),v=!1;break}else Hs(this.i,this.l,rn,null),Wr(this,rn);if(Ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||ie.length!=0||this.h.h||(this.s=1,Tt(16),v=!1),this.o=this.o&&v,!v)Hs(this.i,this.l,ie,"[Invalid Chunked Response]"),sn(this),Ai(this);else if(0<ie.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),oa($t),$t.M=!0,Tt(11))}}else Hs(this.i,this.l,ie,null),Wr(this,ie);Ht==4&&sn(this),this.o&&!this.J&&(Ht==4?Lc(this.j,this):(this.o=!1,$r(this)))}else Od(this.g),v==400&&0<ie.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),sn(this),Ai(this)}}}catch{}finally{}};function Ac(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Rc(h,_){var v=h.C,w=_.indexOf(`
`,v);return w==-1?Ya:(v=Number(_.substring(v,w)),isNaN(v)?bl:(w+=1,w+v>_.length?Ya:(_=_.slice(w,w+v),h.C=w+v,_)))}Sn.prototype.cancel=function(){this.J=!0,sn(this)};function $r(h){h.S=Date.now()+h.I,Ic(h,h.I)}function Ic(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Pt(b(h.ba,h),_)}function Ks(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Sn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(wc(this.i,this.A),this.L!=2&&(qs(),Tt(17)),sn(this),this.s=2,Ai(this)):Ic(this,this.S-h)};function Ai(h){h.j.G==0||h.J||Lc(h.j,h)}function sn(h){Ks(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Kr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Wr(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||wl(v.h,h))){if(!h.K&&wl(v.h,h)&&v.G==3){try{var w=v.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)ro(v),io(v);else break e;kl(v),Tt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Pt(b(v.Za,v),6e3));if(1>=$a(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else hs(v,11)}else if((h.K||v.g==h)&&ro(v),!re(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let Qe=U[_];if(v.T=Qe[0],Qe=Qe[1],v.G==2)if(Qe[0]=="c"){v.K=Qe[1],v.ia=Qe[2];const $t=Qe[3];$t!=null&&(v.la=$t,v.j.info("VER="+v.la));const Ht=Qe[4];Ht!=null&&(v.Aa=Ht,v.j.info("SVER="+v.Aa));const fs=Qe[5];fs!=null&&typeof fs=="number"&&0<fs&&(w=1.5*fs,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const rn=h.g;if(rn){const xi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var G=w.h;G.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Wa(G,G.h),G.h=null))}if(w.D){const Vl=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vl&&(w.ya=Vl,at(w.I,w.D,Vl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var ie=h;if(w.qa=jc(w,w.J?w.ia:null,w.W),ie.K){bn(w.h,ie);var Ye=ie,qt=w.L;qt&&(Ye.I=qt),Ye.B&&(Ks(Ye),$r(Ye)),w.g=ie}else Pc(w);0<v.i.length&&so(v)}else Qe[0]!="stop"&&Qe[0]!="close"||hs(v,7);else v.G==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?hs(v,7):xl(v):Qe[0]!="noop"&&v.l&&v.l.ta(Qe),v.v=0)}}qs(4)}catch{}}var Cc=class{constructor(h,_){this.g=h,this.map=_}};function rs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function $a(h){return h.h?1:h.g?h.g.size:0}function wl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Wa(h,_){h.g?h.g.add(_):h.h=_}function bn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}rs.prototype.cancel=function(){if(this.i=Al(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Al(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return Y(h.i)}function Id(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,w=0;w<v;w++)_.push(h[w]);return _}_=[],v=0;for(w in h)_[v++]=h[w];return _}function Xa(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const w in h)_[v++]=w;return _}}}function Rl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=Xa(h),w=Id(h),U=w.length,G=0;G<U;G++)_.call(void 0,w[G],v&&v[G],h)}var Xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cd(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var w=h[v].indexOf("="),U=null;if(0<=w){var G=h[v].substring(0,w);U=h[v].substring(w+1)}else G=h[v];_(G,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Vt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Vt){this.h=h.h,Jr(this,h.j),this.o=h.o,this.g=h.g,Ys(this,h.s),this.l=h.l;var _=h.i,v=new os;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),as(this,v),this.m=h.m}else h&&(_=String(h).match(Xr))?(this.h=!1,Jr(this,_[1]||"",!0),this.o=Yn(_[2]||""),this.g=Yn(_[3]||"",!0),Ys(this,_[4]),this.l=Yn(_[5]||"",!0),as(this,_[6]||"",!0),this.m=Yn(_[7]||"")):(this.h=!1,this.i=new os(null,this.h))}Vt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ea(_,Il,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ea(_,Il,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(ea(v,v.charAt(0)=="/"?Nd:Cl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",ea(v,Ja)),h.join("")};function kn(h){return new Vt(h)}function Jr(h,_,v){h.j=v?Yn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ys(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function as(h,_,v){_ instanceof os?(h.i=_,Dc(h.i,h.h)):(v||(_=ea(_,Dd)),h.i=new os(_,h.h))}function at(h,_,v){h.i.set(_,v)}function Zr(h){return at(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Yn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ea(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Nc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Nc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Il=/[#\/\?@]/g,Cl=/[#\?:]/g,Nd=/[#\?]/g,Dd=/[#\?@]/g,Ja=/#/g;function os(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Qn(h){h.g||(h.g=new Map,h.h=0,h.i&&Cd(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}i=os.prototype,i.add=function(h,_){Qn(this),this.i=null,h=Ri(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ls(h,_){Qn(h),_=Ri(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function us(h,_){return Qn(h),_=Ri(h,_),h.g.has(_)}i.forEach=function(h,_){Qn(this),this.g.forEach(function(v,w){v.forEach(function(U){h.call(_,U,w,this)},this)},this)},i.na=function(){Qn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let w=0;w<_.length;w++){const U=h[w];for(let G=0;G<U.length;G++)v.push(_[w])}return v},i.V=function(h){Qn(this);let _=[];if(typeof h=="string")us(this,h)&&(_=_.concat(this.g.get(Ri(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},i.set=function(h,_){return Qn(this),this.i=null,h=Ri(this,h),us(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Nl(h,_,v){ls(h,_),0<v.length&&(h.i=null,h.g.set(Ri(h,_),Y(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var w=_[v];const G=encodeURIComponent(String(w)),ie=this.V(w);for(w=0;w<ie.length;w++){var U=G;ie[w]!==""&&(U+="="+encodeURIComponent(String(ie[w]))),h.push(U)}}return this.i=h.join("&")};function Ri(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Dc(h,_){_&&!h.j&&(Qn(h),h.i=null,h.g.forEach(function(v,w){var U=w.toLowerCase();w!=U&&(ls(this,w),Nl(this,U,v))},h)),h.j=_}function ta(h,_){const v=new Kn;if(d.Image){const w=new Image;w.onload=O($n,v,"TestLoadImage: loaded",!0,_,w),w.onerror=O($n,v,"TestLoadImage: error",!1,_,w),w.onabort=O($n,v,"TestLoadImage: abort",!1,_,w),w.ontimeout=O($n,v,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function fi(h,_){const v=new Kn,w=new AbortController,U=setTimeout(()=>{w.abort(),$n(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(G=>{clearTimeout(U),G.ok?$n(v,"TestPingServer: ok",!0,_):$n(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),$n(v,"TestPingServer: error",!1,_)})}function $n(h,_,v,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(v)}catch{}}function na(){this.g=new Yr}function Ii(h,_,v){const w=v||"";try{Rl(h,function(U,G){let ie=U;g(U)&&(ie=ci(U)),_.push(w+G+"="+encodeURIComponent(ie))})}catch(U){throw _.push(w+"type="+encodeURIComponent("_badmap")),U}}function Qs(h){this.l=h.Ub||null,this.j=h.eb||!1}V(Qs,_l),Qs.prototype.g=function(){return new cs(this.l,this.j)},Qs.prototype.i=function(h){return function(){return h}}({});function cs(h,_){Ie.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(cs,Ie),i=cs.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ni(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ci(this):Ni(this),this.readyState==3&&Dl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Ci(this))},i.Qa=function(h){this.g&&(this.response=h,Ci(this))},i.ga=function(){this.g&&Ci(this)};function Ci(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ni(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ni(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Ol(h){let _="";return Ne(h,function(v,w){_+=w,_+=":",_+=v,_+=`\r
`}),_}function Qt(h,_,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=Ol(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):at(h,_,v))}function tt(h){Ie.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(tt,Ie);var Za=/^https?$/i,ia=["POST","PUT"];i=tt.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bi.g(),this.v=this.o?yl(this.o):yl(bi),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(G){Oc(this,G);return}if(h=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)v.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const G of w.keys())v.set(G,w.get(G));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ia,_,void 0))||w||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ie]of v)this.g.setRequestHeader(G,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sa(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){Oc(this,G)}};function Oc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,eo(h),Di(h)}function eo(h){h.A||(h.A=!0,ve(h,"complete"),ve(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,ve(this,"complete"),ve(this,"abort"),Di(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Di(this,!0)),tt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?to(this):this.bb())},i.bb=function(){to(this)};function to(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Wn(h)!=4||h.Z()!=2)){if(h.u&&Wn(h)==4)Et(h.Ea,0,h);else if(ve(h,"readystatechange"),Wn(h)==4){h.h=!1;try{const ie=h.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var w;if(w=ie===0){var U=String(h.D).match(Xr)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),w=!Za.test(U?U.toLowerCase():"")}v=w}if(v)ve(h,"complete"),ve(h,"success");else{h.m=6;try{var G=2<Wn(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",eo(h)}}finally{Di(h)}}}}function Di(h,_){if(h.g){sa(h);const v=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||ve(h,"ready");try{v.onreadystatechange=w}catch{}}}function sa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Wn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ga(_)}};function xc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Od(h){const _={};h=(h.g&&2<=Wn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(re(h[w]))continue;var v=P(h[w]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=_[U]||[];_[U]=G,G.push(v)}k(_,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ra(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function no(h){this.Aa=0,this.i=[],this.j=new Kn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ra("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ra("baseRetryDelayMs",5e3,h),this.cb=ra("retryDelaySeedMs",1e4,h),this.Wa=ra("forwardChannelMaxRetries",2,h),this.wa=ra("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new rs(h&&h.concurrentRequestLimit),this.Da=new na,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=no.prototype,i.la=8,i.G=1,i.connect=function(h,_,v,w){Tt(0),this.W=h,this.H=_||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=jc(this,null,this.W),so(this)};function xl(h){if(Mc(h),h.G==3){var _=h.U++,v=kn(h.I);if(at(v,"SID",h.K),at(v,"RID",_),at(v,"TYPE","terminate"),aa(h,v),_=new Sn(h,h.j,_),_.L=2,_.v=Zr(kn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=zc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),$r(_)}Uc(h)}function io(h){h.g&&(oa(h),h.g.cancel(),h.g=null)}function Mc(h){io(h),h.u&&(d.clearTimeout(h.u),h.u=null),ro(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function so(h){if(!Qa(h.h)&&!h.s){h.s=!0;var _=h.Ga;ee||D(),ue||(ee(),ue=!0),Ge.add(_,h),h.B=0}}function xd(h,_){return $a(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Pt(b(h.Ga,h,_),Pl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new Sn(this,this.j,h);let G=this.o;if(this.S&&(G?(G=R(G),M(G,this.S)):G=this.S),this.m!==null||this.O||(U.H=G,G=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=kc(this,U,_),v=kn(this.I),at(v,"RID",h),at(v,"CVER",22),this.D&&at(v,"X-HTTP-Session-Id",this.D),aa(this,v),G&&(this.O?_="headers="+encodeURIComponent(String(Ol(G)))+"&"+_:this.m&&Qt(v,this.m,G)),Wa(this.h,U),this.Ua&&at(v,"TYPE","init"),this.P?(at(v,"$req",_),at(v,"SID","null"),U.T=!0,hi(U,v,null)):hi(U,v,_),this.G=2}}else this.G==3&&(h?Ml(this,h):this.i.length==0||Qa(this.h)||Ml(this))};function Ml(h,_){var v;_?v=_.l:v=h.U++;const w=kn(h.I);at(w,"SID",h.K),at(w,"RID",v),at(w,"AID",h.T),aa(h,w),h.m&&h.o&&Qt(w,h.m,h.o),v=new Sn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=kc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Wa(h.h,v),hi(v,w,_)}function aa(h,_){h.H&&Ne(h.H,function(v,w){at(_,w,v)}),h.l&&Rl({},function(v,w){at(_,w,v)})}function kc(h,_,v){v=Math.min(h.i.length,v);var w=h.l?b(h.l.Na,h.l,h):null;e:{var U=h.i;let G=-1;for(;;){const ie=["count="+v];G==-1?0<v?(G=U[0].g,ie.push("ofs="+G)):G=0:ie.push("ofs="+G);let Ye=!0;for(let qt=0;qt<v;qt++){let Qe=U[qt].g;const $t=U[qt].map;if(Qe-=G,0>Qe)G=Math.max(0,U[qt].g-100),Ye=!1;else try{Ii($t,ie,"req"+Qe+"_")}catch{w&&w($t)}}if(Ye){w=ie.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,w}function Pc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ee||D(),ue||(ee(),ue=!0),Ge.add(_,h),h.v=0}}function kl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Pt(b(h.Fa,h),Pl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,Vc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Pt(b(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),io(this),Vc(this))};function oa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Vc(h){h.g=new Sn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=kn(h.qa);at(_,"RID","rpc"),at(_,"SID",h.K),at(_,"AID",h.T),at(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&at(_,"TO",h.ja),at(_,"TYPE","xmlhttp"),aa(h,_),h.m&&h.o&&Qt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Zr(kn(_)),v.m=null,v.P=!0,ss(v,h)}i.Za=function(){this.C!=null&&(this.C=null,io(this),kl(this),Tt(19))};function ro(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Lc(h,_){var v=null;if(h.g==_){ro(h),oa(h),h.g=null;var w=2}else if(wl(h.h,_))v=_.D,bn(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;w=Fs(),ve(w,new Ft(w,v)),so(h)}else Pc(h);else if(U=_.s,U==3||U==0&&0<_.X||!(w==1&&xd(h,_)||w==2&&kl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:hs(h,5);break;case 4:hs(h,10);break;case 3:hs(h,6);break;default:hs(h,2)}}}function Pl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function hs(h,_){if(h.j.info("Error code "+_),_==2){var v=b(h.fb,h),w=h.Xa;const U=!w;w=new Vt(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Jr(w,"https"),Zr(w),U?ta(w.toString(),v):fi(w.toString(),v)}else Tt(2);h.G=0,h.l&&h.l.sa(_),Uc(h),Mc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Uc(h){if(h.G=0,h.ka=[],h.l){const _=Al(h.h);(_.length!=0||h.i.length!=0)&&(K(h.ka,_),K(h.ka,h.i),h.h.i.length=0,Y(h.i),h.i.length=0),h.l.ra()}}function jc(h,_,v){var w=v instanceof Vt?kn(v):new Vt(v);if(w.g!="")_&&(w.g=_+"."+w.g),Ys(w,w.s);else{var U=d.location;w=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var G=new Vt(null);w&&Jr(G,w),_&&(G.g=_),U&&Ys(G,U),v&&(G.l=v),w=G}return v=h.D,_=h.ya,v&&_&&at(w,v,_),at(w,"VER",h.la),aa(h,w),w}function zc(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new tt(new Qs({eb:v})):new tt(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bc(){}i=Bc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ao(){}ao.prototype.g=function(h,_){return new wn(h,_)};function wn(h,_){Ie.call(this),this.g=new no(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!re(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!re(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Oi(this)}V(wn,Ie),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){xl(this.g)},wn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=ci(h),h=v);_.i.push(new Cc(_.Ya++,h)),_.G==3&&so(_)},wn.prototype.N=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,wn.aa.N.call(this)};function Fc(h){ns.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}V(Fc,ns);function qc(){El.call(this),this.status=1}V(qc,El);function Oi(h){this.g=h}V(Oi,Bc),Oi.prototype.ua=function(){ve(this.g,"a")},Oi.prototype.ta=function(h){ve(this.g,new Fc(h))},Oi.prototype.sa=function(h){ve(this.g,new qc)},Oi.prototype.ra=function(){ve(this.g,"b")},ao.prototype.createWebChannel=ao.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,pw=function(){return new ao},mw=function(){return Fs()},dw=Si,hg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gs.NO_ERROR=0,Gs.TIMEOUT=8,Gs.HTTP_ERROR=6,tf=Gs,is.COMPLETE="complete",fw=is,vl.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,Ou=vl,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,hw=tt}).apply(typeof Kh<"u"?Kh:typeof self<"u"?self:typeof window<"u"?window:{});const dT="@firebase/firestore",mT="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gn.UNAUTHENTICATED=new gn(null),gn.GOOGLE_CREDENTIALS=new gn("google-credentials-uid"),gn.FIRST_PARTY=new gn("first-party-uid"),gn.MOCK_USER=new gn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Wf("@firebase/firestore");function Uo(){return xa.logLevel}function le(i,...e){if(xa.logLevel<=qe.DEBUG){const t=e.map(o_);xa.debug(`Firestore (${hl}): ${i}`,...t)}}function Vs(i,...e){if(xa.logLevel<=qe.ERROR){const t=e.map(o_);xa.error(`Firestore (${hl}): ${i}`,...t)}}function Or(i,...e){if(xa.logLevel<=qe.WARN){const t=e.map(o_);xa.warn(`Firestore (${hl}): ${i}`,...t)}}function o_(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,gw(i,s,t)}function gw(i,e,t){let s=`FIRESTORE (${hl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vs(s),new Error(s)}function it(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||gw(e,a,s)}function xe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Wi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(gn.UNAUTHENTICATED))}shutdown(){}}class x2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class M2{constructor(e){this.t=e,this.currentUser=gn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){it(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Os;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Os,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Os)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(it(typeof s.accessToken=="string",31837,{l:s}),new _w(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string",2055,{h:e}),new gn(e)}}class k2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=gn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class P2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new k2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(gn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,On(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){it(this.o===void 0,3512);const s=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(it(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=L2(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function je(i,e){return i<e?-1:i>e?1:0}function fg(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return je(s,a);{const l=yw(),c=U2(l.encode(gT(i,t)),l.encode(gT(e,t)));return c!==0?c:je(s,a)}}t+=s>65535?2:1}return je(i.length,e.length)}function gT(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function U2(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return je(i[t],e[t]);return je(i.length,e.length)}function el(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="__name__";class ji{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=ji.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return je(e.length,t.length)}static compareSegments(e,t){const s=ji.isNumericId(e),a=ji.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?ji.extractNumericId(e).compare(ji.extractNumericId(t)):fg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rr.fromString(e.substring(4,e.length-2))}}class pt extends ji{construct(e,t,s){return new pt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new pt(t)}static emptyPath(){return new pt([])}}const j2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class hn extends ji{construct(e,t,s){return new hn(e,t,s)}static isValidIdentifier(e){return j2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),hn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_T}static keyField(){return new hn([_T])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new hn(t)}static emptyPath(){return new hn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(pt.fromString(e))}static fromName(e){return new ye(pt.fromString(e).popFirst(5))}static empty(){return new ye(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new pt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(i,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function z2(i,e,t,s){if(e===!0&&s===!0)throw new ae(W.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function yT(i){if(!ye.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function vT(i){if(ye.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ew(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function id(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":we(12329,{type:typeof i})}function oi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=id(i);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(i,e){const t={typeString:i};return e&&(t.value=e),t}function hc(i,e){if(!Ew(i))throw new ae(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const c=i[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ae(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=-62135596800,TT=1e6;class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*TT);return new yt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ET)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/TT}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:yt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hc(e,yt._jsonSchema))return new yt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ET;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}yt._jsonSchemaVersion="firestore/timestamp/1.0",yt._jsonSchema={type:Bt("string",yt._jsonSchemaVersion),seconds:Bt("number"),nanoseconds:Bt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{static fromTimestamp(e){return new Oe(e)}static min(){return new Oe(new yt(0,0))}static max(){return new Oe(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=-1;function B2(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Oe.fromTimestamp(s===1e9?new yt(t+1,0):new yt(t,s));return new xr(a,ye.empty(),e)}function F2(i){return new xr(i.readTime,i.key,$u)}class xr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new xr(Oe.min(),ye.empty(),$u)}static max(){return new xr(Oe.max(),ye.empty(),$u)}}function q2(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(i.documentKey,e.documentKey),t!==0?t:je(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==H2)throw i;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,s)=>{t(e)})}static reject(e){return new J((t,s)=>{s(e)})}static waitFor(e){return new J((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>s(p))}),c=!0,l===a&&t()})}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next(a=>a?J.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new J((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{c[g]=y,++d,d===l&&s(c)},y=>a(y))}})}static doWhile(e,t){return new J((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function K2(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function dl(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}sd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=-1;function rd(i){return i==null}function wf(i){return i===0&&1/i==-1/0}function Y2(i){return typeof i=="number"&&Number.isInteger(i)&&!wf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="";function Q2(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=ST(e)),e=$2(i.get(t),e);return ST(e)}function $2(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case Tw:t+="";break;default:t+=l}}return t}function ST(i){return i+Tw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ur(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Sw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){this.comparator=e,this.root=t||un.EMPTY}insert(e,t){return new At(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,un.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,un.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yh(this.root,e,this.comparator,!0)}}class Yh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class un{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??un.RED,this.left=a??un.EMPTY,this.right=l??un.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new un(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return un.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return un.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,un.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,un.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}un.EMPTY=null,un.RED=!0,un.BLACK=!1;un.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new un(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wT(this.data.getIterator())}getIteratorFrom(e){return new wT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Yt(this.comparator);return t.data=e,t}}class wT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(hn.comparator)}static empty(){return new qn([])}unionWith(e){let t=new Yt(hn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return el(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new bw("Invalid base64 string: "+l):l}}(e);return new fn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new fn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fn.EMPTY_BYTE_STRING=new fn("");const W2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(i){if(it(!!i,39018),typeof i=="string"){let e=0;const t=W2.exec(i);if(it(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:kt(i.seconds),nanos:kt(i.nanos)}}function kt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function kr(i){return typeof i=="string"?fn.fromBase64String(i):fn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="server_timestamp",Aw="__type__",Rw="__previous_value__",Iw="__local_write_time__";function c_(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Aw])===null||t===void 0?void 0:t.stringValue)===ww}function ad(i){const e=i.mapValue.fields[Rw];return c_(e)?ad(e):e}function Wu(i){const e=Mr(i.mapValue.fields[Iw].timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Af="(default)";class Xu{constructor(e,t){this.projectId=e,this.database=t||Af}static empty(){return new Xu("","")}get isDefaultDatabase(){return this.database===Af}isEqual(e){return e instanceof Xu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="__type__",J2="__max__",Qh={mapValue:{}},Nw="__vector__",Rf="value";function Pr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?c_(i)?4:eO(i)?9007199254740991:Z2(i)?10:11:we(28295,{value:i})}function $i(i,e){if(i===e)return!0;const t=Pr(i);if(t!==Pr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Wu(i).isEqual(Wu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Mr(a.timestampValue),d=Mr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return kr(a.bytesValue).isEqual(kr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return kt(a.geoPointValue.latitude)===kt(l.geoPointValue.latitude)&&kt(a.geoPointValue.longitude)===kt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return kt(a.integerValue)===kt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=kt(a.doubleValue),d=kt(l.doubleValue);return c===d?wf(c)===wf(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return el(i.arrayValue.values||[],e.arrayValue.values||[],$i);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(bT(c)!==bT(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!$i(c[p],d[p])))return!1;return!0}(i,e);default:return we(52216,{left:i})}}function Ju(i,e){return(i.values||[]).find(t=>$i(t,e))!==void 0}function tl(i,e){if(i===e)return 0;const t=Pr(i),s=Pr(e);if(t!==s)return je(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return je(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=kt(l.integerValue||l.doubleValue),p=kt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(i,e);case 3:return AT(i.timestampValue,e.timestampValue);case 4:return AT(Wu(i),Wu(e));case 5:return fg(i.stringValue,e.stringValue);case 6:return function(l,c){const d=kr(l),p=kr(c);return d.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=je(d[g],p[g]);if(y!==0)return y}return je(d.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=je(kt(l.latitude),kt(c.latitude));return d!==0?d:je(kt(l.longitude),kt(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return RT(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,y;const T=l.fields||{},b=c.fields||{},O=(d=T[Rf])===null||d===void 0?void 0:d.arrayValue,V=(p=b[Rf])===null||p===void 0?void 0:p.arrayValue,Y=je(((g=O?.values)===null||g===void 0?void 0:g.length)||0,((y=V?.values)===null||y===void 0?void 0:y.length)||0);return Y!==0?Y:RT(O,V)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Qh.mapValue&&c===Qh.mapValue)return 0;if(l===Qh.mapValue)return 1;if(c===Qh.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const b=fg(p[T],y[T]);if(b!==0)return b;const O=tl(d[p[T]],g[y[T]]);if(O!==0)return O}return je(p.length,y.length)}(i.mapValue,e.mapValue);default:throw we(23264,{le:t})}}function AT(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return je(i,e);const t=Mr(i),s=Mr(e),a=je(t.seconds,s.seconds);return a!==0?a:je(t.nanos,s.nanos)}function RT(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=tl(t[a],s[a]);if(l)return l}return je(t.length,s.length)}function nl(i){return dg(i)}function dg(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Mr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return kr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ye.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=dg(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${dg(t.fields[c])}`;return a+"}"}(i.mapValue):we(61005,{value:i})}function nf(i){switch(Pr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ad(i);return e?16+nf(e):16;case 5:return 2*i.stringValue.length;case 6:return kr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+nf(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Ur(s.fields,(l,c)=>{a+=l.length+nf(c)}),a}(i.mapValue);default:throw we(13486,{value:i})}}function IT(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function mg(i){return!!i&&"integerValue"in i}function h_(i){return!!i&&"arrayValue"in i}function CT(i){return!!i&&"nullValue"in i}function NT(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function sf(i){return!!i&&"mapValue"in i}function Z2(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cw])===null||t===void 0?void 0:t.stringValue)===Nw}function zu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Ur(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=zu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function eO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===J2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!sf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zu(t)}setAll(e){let t=hn.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=zu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());sf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $i(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];sf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Ur(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new xn(zu(this.value))}}function Dw(i){const e=[];return Ur(i.fields,(t,s)=>{const a=new hn([t]);if(sf(s)){const l=Dw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new vn(e,0,Oe.min(),Oe.min(),Oe.min(),xn.empty(),0)}static newFoundDocument(e,t,s,a){return new vn(e,1,t,Oe.min(),s,a,0)}static newNoDocument(e,t){return new vn(e,2,t,Oe.min(),Oe.min(),xn.empty(),0)}static newUnknownDocument(e,t){return new vn(e,3,t,Oe.min(),Oe.min(),xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t){this.position=e,this.inclusive=t}}function DT(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(c.referenceValue),t.key):s=tl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function OT(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!$i(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t="asc"){this.field=e,this.dir=t}}function tO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{}class zt extends Ow{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new iO(e,t,s):t==="array-contains"?new aO(e,s):t==="in"?new oO(e,s):t==="not-in"?new lO(e,s):t==="array-contains-any"?new uO(e,s):new zt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new sO(e,s):new rO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(tl(t,this.value)):t!==null&&Pr(this.value)===Pr(t)&&this.matchesComparison(tl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ei extends Ow{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ei(e,t)}matches(e){return xw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function xw(i){return i.op==="and"}function Mw(i){return nO(i)&&xw(i)}function nO(i){for(const e of i.filters)if(e instanceof Ei)return!1;return!0}function pg(i){if(i instanceof zt)return i.field.canonicalString()+i.op.toString()+nl(i.value);if(Mw(i))return i.filters.map(e=>pg(e)).join(",");{const e=i.filters.map(t=>pg(t)).join(",");return`${i.op}(${e})`}}function kw(i,e){return i instanceof zt?function(s,a){return a instanceof zt&&s.op===a.op&&s.field.isEqual(a.field)&&$i(s.value,a.value)}(i,e):i instanceof Ei?function(s,a){return a instanceof Ei&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&kw(c,a.filters[d]),!0):!1}(i,e):void we(19439)}function Pw(i){return i instanceof zt?function(t){return`${t.field.canonicalString()} ${t.op} ${nl(t.value)}`}(i):i instanceof Ei?function(t){return t.op.toString()+" {"+t.getFilters().map(Pw).join(" ,")+"}"}(i):"Filter"}class iO extends zt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class sO extends zt{constructor(e,t){super(e,"in",t),this.keys=Vw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rO extends zt{constructor(e,t){super(e,"not-in",t),this.keys=Vw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class aO extends zt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return h_(t)&&Ju(t.arrayValue,this.value)}}class oO extends zt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ju(this.value.arrayValue,t)}}class lO extends zt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ju(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ju(this.value.arrayValue,t)}}class uO extends zt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!h_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ju(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Pe=null}}function xT(i,e=null,t=[],s=[],a=null,l=null,c=null){return new cO(i,e,t,s,a,l,c)}function f_(i){const e=xe(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>pg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),rd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>nl(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>nl(s)).join(",")),e.Pe=t}return e.Pe}function d_(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!tO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!kw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!OT(i.startAt,e.startAt)&&OT(i.endAt,e.endAt)}function gg(i){return ye.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function hO(i,e,t,s,a,l,c,d){return new fc(i,e,t,s,a,l,c,d)}function od(i){return new fc(i)}function MT(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Lw(i){return i.collectionGroup!==null}function Bu(i){const e=xe(i);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Yt(hn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Cf(l,s))}),t.has(hn.keyField().canonicalString())||e.Te.push(new Cf(hn.keyField(),s))}return e.Te}function Fi(i){const e=xe(i);return e.Ie||(e.Ie=fO(e,Bu(i))),e.Ie}function fO(i,e){if(i.limitType==="F")return xT(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Cf(a.field,l)});const t=i.endAt?new If(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new If(i.startAt.position,i.startAt.inclusive):null;return xT(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function _g(i,e){const t=i.filters.concat([e]);return new fc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function yg(i,e,t){return new fc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ld(i,e){return d_(Fi(i),Fi(e))&&i.limitType===e.limitType}function Uw(i){return`${f_(Fi(i))}|lt:${i.limitType}`}function jo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Pw(a)).join(", ")}]`),rd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>nl(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>nl(a)).join(",")),`Target(${s})`}(Fi(i))}; limitType=${i.limitType})`}function ud(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Bu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,p){const g=DT(c,d,p);return c.inclusive?g<=0:g<0}(s.startAt,Bu(s),a)||s.endAt&&!function(c,d,p){const g=DT(c,d,p);return c.inclusive?g>=0:g>0}(s.endAt,Bu(s),a))}(i,e)}function dO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function jw(i){return(e,t)=>{let s=!1;for(const a of Bu(i)){const l=mO(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function mO(i,e,t){const s=i.field.isKeyField()?ye.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?tl(p,g):we(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return Sw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=new At(ye.comparator);function Ls(){return pO}const zw=new At(ye.comparator);function xu(...i){let e=zw;for(const t of i)e=e.insert(t.key,t);return e}function Bw(i){let e=zw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ra(){return Fu()}function Fw(){return Fu()}function Fu(){return new za(i=>i.toString(),(i,e)=>i.isEqual(e))}const gO=new At(ye.comparator),_O=new Yt(ye.comparator);function He(...i){let e=_O;for(const t of i)e=e.add(t);return e}const yO=new Yt(je);function vO(){return yO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wf(e)?"-0":e}}function qw(i){return{integerValue:""+i}}function EO(i,e){return Y2(e)?qw(e):m_(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this._=void 0}}function TO(i,e,t){return i instanceof Nf?function(a,l){const c={fields:{[Aw]:{stringValue:ww},[Iw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&c_(l)&&(l=ad(l)),l&&(c.fields[Rw]=l),{mapValue:c}}(t,e):i instanceof Zu?Gw(i,e):i instanceof ec?Kw(i,e):function(a,l){const c=Hw(a,l),d=kT(c)+kT(a.Ee);return mg(c)&&mg(a.Ee)?qw(d):m_(a.serializer,d)}(i,e)}function SO(i,e,t){return i instanceof Zu?Gw(i,e):i instanceof ec?Kw(i,e):t}function Hw(i,e){return i instanceof Df?function(s){return mg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Nf extends cd{}class Zu extends cd{constructor(e){super(),this.elements=e}}function Gw(i,e){const t=Yw(e);for(const s of i.elements)t.some(a=>$i(a,s))||t.push(s);return{arrayValue:{values:t}}}class ec extends cd{constructor(e){super(),this.elements=e}}function Kw(i,e){let t=Yw(e);for(const s of i.elements)t=t.filter(a=>!$i(a,s));return{arrayValue:{values:t}}}class Df extends cd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function kT(i){return kt(i.integerValue||i.doubleValue)}function Yw(i){return h_(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function bO(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Zu&&a instanceof Zu||s instanceof ec&&a instanceof ec?el(s.elements,a.elements,$i):s instanceof Df&&a instanceof Df?$i(s.Ee,a.Ee):s instanceof Nf&&a instanceof Nf}(i.transform,e.transform)}class wO{constructor(e,t){this.version=e,this.transformResults=t}}class qi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qi}static exists(e){return new qi(void 0,e)}static updateTime(e){return new qi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rf(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class hd{}function Qw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Ww(i.key,qi.none()):new dc(i.key,i.data,qi.none());{const t=i.data,s=xn.empty();let a=new Yt(hn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new jr(i.key,s,new qn(a.toArray()),qi.none())}}function AO(i,e,t){i instanceof dc?function(a,l,c){const d=a.value.clone(),p=VT(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof jr?function(a,l,c){if(!rf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=VT(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll($w(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function qu(i,e,t,s){return i instanceof dc?function(l,c,d,p){if(!rf(l.precondition,c))return d;const g=l.value.clone(),y=LT(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof jr?function(l,c,d,p){if(!rf(l.precondition,c))return d;const g=LT(l.fieldTransforms,p,c),y=c.data;return y.setAll($w(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,d){return rf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function RO(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=Hw(s.transform,a||null);l!=null&&(t===null&&(t=xn.empty()),t.set(s.field,l))}return t||null}function PT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&el(s,a,(l,c)=>bO(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class dc extends hd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class jr extends hd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function $w(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function VT(i,e,t){const s=new Map;it(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,SO(c,d,t[a]))}return s}function LT(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,TO(l,c,e))}return s}class Ww extends hd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IO extends hd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&AO(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=qu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=qu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Fw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=Qw(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Oe.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),He())}isEqual(e){return this.batchId===e.batchId&&el(this.mutations,e.mutations,(t,s)=>PT(t,s))&&el(this.baseMutations,e.baseMutations,(t,s)=>PT(t,s))}}class p_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){it(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=function(){return gO}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new p_(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt,We;function OO(i){switch(i){case W.OK:return we(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return we(15467,{code:i})}}function Xw(i){if(i===void 0)return Vs("GRPC error has no .code"),W.UNKNOWN;switch(i){case jt.OK:return W.OK;case jt.CANCELLED:return W.CANCELLED;case jt.UNKNOWN:return W.UNKNOWN;case jt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case jt.INTERNAL:return W.INTERNAL;case jt.UNAVAILABLE:return W.UNAVAILABLE;case jt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case jt.NOT_FOUND:return W.NOT_FOUND;case jt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case jt.ABORTED:return W.ABORTED;case jt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case jt.DATA_LOSS:return W.DATA_LOSS;default:return we(39323,{code:i})}}(We=jt||(jt={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=new Rr([4294967295,4294967295],0);function UT(i){const e=yw().encode(i),t=new cw;return t.update(e),new Uint8Array(t.digest())}function jT(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Rr([t,s],0),new Rr([a,l],0)]}class g_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Mu(`Invalid padding: ${t}`);if(s<0)throw new Mu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Mu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Rr.fromNumber(this.fe)}pe(e,t,s){let a=e.add(t.multiply(Rr.fromNumber(s)));return a.compare(xO)===1&&(a=new Rr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=UT(e),[s,a]=jT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);if(!this.ye(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new g_(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.fe===0)return;const t=UT(e),[s,a]=jT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);this.we(c)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Mu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,mc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fd(Oe.min(),a,new At(je),Ls(),He())}}class mc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new mc(s,t,He(),He(),He())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=a}}class Jw{constructor(e,t){this.targetId=e,this.De=t}}class Zw{constructor(e,t,s=fn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class zT{constructor(){this.ve=0,this.Ce=BT(),this.Fe=fn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=He(),t=He(),s=He();return this.Ce.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:we(38017,{changeType:l})}}),new mc(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=BT()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,it(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class MO{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ls(),this.je=$h(),this.Je=$h(),this.He=new At(je)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:we(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,a)=>{this.nt(a)&&t(a)})}it(e){const t=e.targetId,s=e.De.count,a=this.st(t);if(a){const l=a.target;if(gg(l))if(s===0){const c=new ye(l.path);this.Xe(t,c,vn.newNoDocument(c,Oe.min()))}else it(s===1,20013,{expectedCount:s});else{const c=this.ot(t);if(c!==s){const d=this._t(e),p=d?this.ut(d,e,c):1;if(p!==0){this.rt(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=kr(s).toUint8Array()}catch(p){if(p instanceof bw)return Or("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new g_(c,a,l)}catch(p){return Or(p instanceof Mu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.fe===0?null:d}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.We.lt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,l,null),a++)}),a}Pt(e){const t=new Map;this.Ge.forEach((l,c)=>{const d=this.st(c);if(d){if(l.current&&gg(d.target)){const p=new ye(d.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,vn.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}});let s=He();this.Je.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.st(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.ze.forEach((l,c)=>c.setReadTime(e));const a=new fd(e,t,this.He,this.ze,s);return this.ze=Ls(),this.je=$h(),this.Je=$h(),this.He=new At(je),a}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,t)?a.qe(t,1):a.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new zT,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Yt(je),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Yt(je),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new zT),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function $h(){return new At(ye.comparator)}function BT(){return new At(ye.comparator)}const kO={asc:"ASCENDING",desc:"DESCENDING"},PO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VO={and:"AND",or:"OR"};class LO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vg(i,e){return i.useProto3Json||rd(e)?e:{value:e}}function Of(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eA(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function UO(i,e){return Of(i,e.toTimestamp())}function Hi(i){return it(!!i,49232),Oe.fromTimestamp(function(t){const s=Mr(t);return new yt(s.seconds,s.nanos)}(i))}function __(i,e){return Eg(i,e).canonicalString()}function Eg(i,e){const t=function(a){return new pt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function tA(i){const e=pt.fromString(i);return it(aA(e),10190,{key:e.toString()}),e}function Tg(i,e){return __(i.databaseId,e.path)}function Bp(i,e){const t=tA(e);if(t.get(1)!==i.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ye(iA(t))}function nA(i,e){return __(i.databaseId,e)}function jO(i){const e=tA(i);return e.length===4?pt.emptyPath():iA(e)}function Sg(i){return new pt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function iA(i){return it(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function FT(i,e,t){return{name:Tg(i,e),fields:t.value.mapValue.fields}}function zO(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(it(y===void 0||typeof y=="string",58123),fn.fromBase64String(y||"")):(it(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),fn.fromUint8Array(y||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?W.UNKNOWN:Xw(g.code);return new ae(y,g.message||"")}(c);t=new Zw(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Bp(i,s.document.name),l=Hi(s.document.updateTime),c=s.document.createTime?Hi(s.document.createTime):Oe.min(),d=new xn({mapValue:{fields:s.document.fields}}),p=vn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new af(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Bp(i,s.document),l=s.readTime?Hi(s.readTime):Oe.min(),c=vn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new af([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Bp(i,s.document),l=s.removedTargetIds||[];t=new af([],l,a,null)}else{if(!("filter"in e))return we(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new DO(a,l),d=s.targetId;t=new Jw(d,c)}}return t}function BO(i,e){let t;if(e instanceof dc)t={update:FT(i,e.key,e.value)};else if(e instanceof Ww)t={delete:Tg(i,e.key)};else if(e instanceof jr)t={update:FT(i,e.key,e.data),updateMask:WO(e.fieldMask)};else{if(!(e instanceof IO))return we(16599,{Rt:e.type});t={verify:Tg(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof Nf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Zu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ec)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Df)return{fieldPath:c.field.canonicalString(),increment:d.Ee};throw we(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:UO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we(27497)}(i,e.precondition)),t}function FO(i,e){return i&&i.length>0?(it(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?Hi(a.updateTime):Hi(l);return c.isEqual(Oe.min())&&(c=Hi(l)),new wO(c,a.transformResults||[])}(t,e))):[]}function qO(i,e){return{documents:[nA(i,e.path)]}}function HO(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=nA(i,a);const l=function(g){if(g.length!==0)return rA(Ei.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(b){return{field:zo(b.field),direction:YO(b.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=vg(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{Vt:t,parent:a}}function GO(i){let e=jO(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){it(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const b=sA(T);return b instanceof Ei&&Mw(b)?b.getFilters():[b]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(b=>function(V){return new Cf(Bo(V.field),function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(b))}(t.orderBy));let d=null;t.limit&&(d=function(T){let b;return b=typeof T=="object"?T.value:T,rd(b)?null:b}(t.limit));let p=null;t.startAt&&(p=function(T){const b=!!T.before,O=T.values||[];return new If(O,b)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const b=!T.before,O=T.values||[];return new If(O,b)}(t.endAt)),hO(e,a,c,l,d,"F",p,g)}function KO(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sA(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Bo(t.unaryFilter.field);return zt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Bo(t.unaryFilter.field);return zt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Bo(t.unaryFilter.field);return zt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Bo(t.unaryFilter.field);return zt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}}(i):i.fieldFilter!==void 0?function(t){return zt.create(Bo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ei.create(t.compositeFilter.filters.map(s=>sA(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return we(1026)}}(t.compositeFilter.op))}(i):we(30097,{filter:i})}function YO(i){return kO[i]}function QO(i){return PO[i]}function $O(i){return VO[i]}function zo(i){return{fieldPath:i.canonicalString()}}function Bo(i){return hn.fromServerFormat(i.fieldPath)}function rA(i){return i instanceof zt?function(t){if(t.op==="=="){if(NT(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NAN"}};if(CT(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(NT(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NOT_NAN"}};if(CT(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zo(t.field),op:QO(t.op),value:t.value}}}(i):i instanceof Ei?function(t){const s=t.getFilters().map(a=>rA(a));return s.length===1?s[0]:{compositeFilter:{op:$O(t.op),filters:s}}}(i):we(54877,{filter:i})}function WO(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function aA(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,s,a,l=Oe.min(),c=Oe.min(),d=fn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.gt=e}}function JO(i){const e=GO({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?yg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.Dn=new ex}addToCollectionParentIndex(e,t){return this.Dn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(xr.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class ex{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Yt(pt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Yt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oA=41943040;class Dn{static withCacheSize(e){return new Dn(e,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.DEFAULT_COLLECTION_PERCENTILE=10,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dn.DEFAULT=new Dn(oA,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dn.DISABLED=new Dn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new il(0)}static ur(){return new il(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="LruGarbageCollector",tx=1048576;function GT([i,e],[t,s]){const a=je(i,t);return a===0?je(e,s):a}class nx{constructor(e){this.Tr=e,this.buffer=new Yt(GT),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();GT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ix{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){le(HT,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){dl(t)?le(HT,"Ignoring IndexedDB error during garbage collection: ",t):await fl(t)}await this.Rr(3e5)})}}class sx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return J.resolve(sd.ue);const s=new nx(t);return this.Vr.forEachTarget(e,a=>s.Er(a.sequenceNumber)).next(()=>this.Vr.gr(e,a=>s.Er(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(qT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qT):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Uo()<=qe.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function rx(i,e){return new sx(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.changes=new za(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,vn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&qu(s.mutation,a,qn.empty(),yt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,He()).next(()=>s))}getLocalViewOfDocuments(e,t,s=He()){const a=Ra();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=xu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=Ra();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,He()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Ls();const c=Fu(),d=function(){return Fu()}();return t.forEach((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof jr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),qu(y.mutation,g,y.mutation.getFieldMask(),yt.now())):c.set(g.key,qn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new ox(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Fu();let a=new At((c,d)=>c-d),l=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||qn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||He()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=Fw();y.forEach(b=>{if(!l.has(b)){const O=Qw(t.get(b),s.get(b));O!==null&&T.set(b,O),l=l.add(b)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return J.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(Ra());let d=$u,p=l;return c.next(g=>J.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(b=>{p=p.insert(y,b)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,He())).next(y=>({batchId:d,changes:Bw(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let a=xu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=xu();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,p=>{const g=function(T,b){return new fc(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(y=>{y.forEach((T,b)=>{c=c.insert(T,b)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,vn.newInvalidDocument(y)))});let d=xu();return c.forEach((p,g)=>{const y=l.get(p);y!==void 0&&qu(y.mutation,g,qn.empty(),yt.now()),ud(t,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return J.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Hi(a.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(a){return{name:a.name,query:JO(a.bundledQuery),readTime:Hi(a.readTime)}}(t)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.overlays=new At(ye.comparator),this.kr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ra();return J.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.wt(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=Ra(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new At((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Ra(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Ra(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return J.resolve(d)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new NO(t,s));let l=this.kr.get(t);l===void 0&&(l=He(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.sessionToken=fn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.qr=new Yt(en.Qr),this.$r=new Yt(en.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new en(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new en(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new ye(new pt([])),s=new en(t,e),a=new en(t,e+1),l=[];return this.$r.forEachInRange([s,a],c=>{this.Wr(c),l.push(c.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ye(new pt([])),s=new en(t,e),a=new en(t,e+1);let l=He();return this.$r.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new en(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class en{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ye.comparator(e.key,t.key)||je(e.Hr,t.Hr)}static Ur(e,t){return je(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Yt(en.Qr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new CO(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Yr=this.Yr.add(new en(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?u_:this.er-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new en(t,0),a=new en(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,a],c=>{const d=this.Zr(c.Hr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Yt(je);return t.forEach(a=>{const l=new en(a,0),c=new en(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],d=>{s=s.add(d.Hr)})}),J.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const c=new en(new ye(l),0);let d=new Yt(je);return this.Yr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Hr)),!0)},c),J.resolve(this.ei(d))}ei(e){const t=[];return e.forEach(s=>{const a=this.Zr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){it(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return J.forEach(t.mutations,a=>{const l=new en(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new en(t,0),a=this.Yr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.ni=e,this.docs=function(){return new At(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():vn.newInvalidDocument(t))}getEntries(e,t){let s=Ls();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():vn.newInvalidDocument(a))}),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ls();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||q2(F2(y),s)<=0||(a.has(y.key)||ud(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){we(9500)}ri(e,t){return J.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new mx(this)}getSize(e){return J.resolve(this.size)}}class mx extends ax{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)}),J.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.persistence=e,this.ii=new za(t=>f_(t),d_),this.lastRemoteSnapshotVersion=Oe.min(),this.highestTargetId=0,this.si=0,this.oi=new y_,this.targetCount=0,this._i=il.ar()}forEachTarget(e,t){return this.ii.forEach((s,a)=>t(a)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),J.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new il(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.hr(t),J.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ii.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.ai={},this.overlays={},this.ui=new sd(0),this.ci=!1,this.ci=!0,this.li=new hx,this.referenceDelegate=e(this),this.hi=new px(this),this.indexManager=new ZO,this.remoteDocumentCache=function(a){return new dx(a)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new XO(t),this.Ti=new ux(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new fx(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){le("MemoryPersistence","Starting transaction:",e);const a=new gx(this.ui.next());return this.referenceDelegate.Ii(),s(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ei(e,t){return J.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class gx extends G2{constructor(e){super(),this.currentSequenceNumber=e}}class v_{constructor(e){this.persistence=e,this.Ai=new y_,this.Ri=null}static Vi(e){return new v_(e)}get mi(){if(this.Ri)return this.Ri;throw we(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(a=>this.mi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.mi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.mi,s=>{const a=ye.fromPath(s);return this.fi(e,a).next(l=>{l||t.removeEntry(a,Oe.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return J.or([()=>J.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class xf{constructor(e,t){this.persistence=e,this.gi=new za(s=>Q2(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=rx(this,t)}static Vi(e,t){return new xf(e,t)}Ii(){}di(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return J.forEach(this.gi,(s,a)=>this.Sr(e,s,a).next(l=>l?J.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ri(e,c=>this.Sr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,Oe.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),J.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nf(e.data.value)),t}Sr(e,t,s){return J.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=He(),a=He();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new E_(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return EI()?8:K2(Tn())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ps(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ys(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new _x;return this.ws(e,t,c).next(d=>{if(l.result=d,this.Rs)return this.Ss(e,t,c,d.size)})}).next(()=>l.result)}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(Uo()<=qe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",jo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),J.resolve()):(Uo()<=qe.DEBUG&&le("QueryEngine","Query:",jo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(Uo()<=qe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",jo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fi(t))):J.resolve())}ps(e,t){if(MT(t))return J.resolve(null);let s=Fi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=yg(t,null,"F"),s=Fi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=He(...l);return this.gs.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.bs(t,d);return this.Ds(t,g,c,p.readTime)?this.ps(e,yg(t,null,"F")):this.vs(e,g,t,p)}))})))}ys(e,t,s,a){return MT(t)||a.isEqual(Oe.min())?J.resolve(null):this.gs.getDocuments(e,s).next(l=>{const c=this.bs(t,l);return this.Ds(t,c,s,a)?J.resolve(null):(Uo()<=qe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),jo(t)),this.vs(e,c,t,B2(a,$u)).next(d=>d))})}bs(e,t){let s=new Yt(jw(e));return t.forEach((a,l)=>{ud(e,l)&&(s=s.add(l))}),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ws(e,t,s){return Uo()<=qe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",jo(t)),this.gs.getDocumentsMatchingQuery(e,t,xr.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="LocalStore",vx=3e8;class Ex{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new At(je),this.Ms=new za(l=>f_(l),d_),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Tx(i,e,t,s){return new Ex(i,e,t,s)}async function uA(i,e){const t=xe(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let p=He();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next(g=>({Bs:g,removedBatchIds:c,addedBatchIds:d}))})})}function Sx(i,e){const t=xe(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const T=g.batch,b=T.keys();let O=J.resolve();return b.forEach(V=>{O=O.next(()=>y.getEntry(p,V)).next(Y=>{const K=g.docVersions.get(V);it(K!==null,48541),Y.version.compareTo(K)<0&&(T.applyToRemoteDocument(Y,g),Y.isValidDocument()&&(Y.setReadTime(g.commitVersion),y.addEntry(Y)))})}),O.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let p=He();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function cA(i){const e=xe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function bx(i,e){const t=xe(i),s=e.snapshotVersion;let a=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});a=t.Fs;const d=[];e.targetChanges.forEach((y,T)=>{const b=a.get(T);if(!b)return;d.push(t.hi.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.hi.addMatchingKeys(l,y.addedDocuments,T)));let O=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(fn.EMPTY_BYTE_STRING,Oe.min()).withLastLimboFreeSnapshotVersion(Oe.min()):y.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(y.resumeToken,s)),a=a.insert(T,O),function(Y,K,ce){return Y.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=vx?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0}(b,O,y)&&d.push(t.hi.updateTargetData(l,O))});let p=Ls(),g=He();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(wx(l,c,e.documentUpdates).next(y=>{p=y.Ls,g=y.ks})),!s.isEqual(Oe.min())){const y=t.hi.getLastRemoteSnapshotVersion(l).next(T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(y)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.Fs=a,l))}function wx(i,e,t){let s=He(),a=He();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=Ls();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Oe.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):le(T_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{Ls:c,ks:a}})}function Ax(i,e){const t=xe(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=u_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Rx(i,e){const t=xe(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.hi.getTargetData(s,e).next(l=>l?(a=l,J.resolve(a)):t.hi.allocateTargetId(s).next(c=>(a=new Sr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function bg(i,e,t){const s=xe(i),a=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!dl(c))throw c;le(T_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function KT(i,e,t){const s=xe(i);let a=Oe.min(),l=He();return s.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,y){const T=xe(p),b=T.Ms.get(y);return b!==void 0?J.resolve(T.Fs.get(b)):T.hi.getTargetData(g,y)}(s,c,Fi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>s.Cs.getDocumentsMatchingQuery(c,e,t?a:Oe.min(),t?l:He())).next(d=>(Ix(s,dO(e),d),{documents:d,qs:l})))}function Ix(i,e,t){let s=i.xs.get(e)||Oe.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.xs.set(e,s)}class YT{constructor(){this.activeTargetIds=vO()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cx{constructor(){this.Fo=new YT,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new YT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="ConnectivityMonitor";class $T{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){le(QT,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){le(QT,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh=null;function wg(){return Wh===null?Wh=function(){return 268435456+Math.round(2147483648*Math.random())}():Wh++,"0x"+Wh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="RestConnection",Dx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ox{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===Af?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const c=wg(),d=this.Go(e,t.toUriEncodedString());le(Fp,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,a,l);const{host:g}=new URL(d),y=js(g);return this.jo(e,d,p,s,y).then(T=>(le(Fp,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Or(Fp,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Jo(e,t,s,a,l,c){return this.Wo(e,t,s,a,l)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}Go(e,t){const s=Dx[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="WebChannelConnection";class Mx extends Ox{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,l){const c=wg();return new Promise((d,p)=>{const g=new hw;g.setWithCredentials(!0),g.listenOnce(fw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case tf.NO_ERROR:const T=g.getResponseJson();le(pn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case tf.TIMEOUT:le(pn,`RPC '${e}' ${c} timed out`),p(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case tf.HTTP_ERROR:const b=g.getStatus();if(le(pn,`RPC '${e}' ${c} failed with status:`,b,"response text:",g.getResponseText()),b>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const V=O?.error;if(V&&V.status&&V.message){const Y=function(ce){const re=ce.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(re)>=0?re:W.UNKNOWN}(V.status);p(new ae(Y,V.message))}else p(new ae(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ae(W.UNAVAILABLE,"Connection failed."));break;default:we(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{le(pn,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);le(pn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)})}P_(e,t,s){const a=wg(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=pw(),d=mw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");le(pn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);this.T_(T);let b=!1,O=!1;const V=new xx({Ho:K=>{O?le(pn,`Not sending because RPC '${e}' stream ${a} is closed:`,K):(b||(le(pn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),b=!0),le(pn,`RPC '${e}' stream ${a} sending:`,K),T.send(K))},Yo:()=>T.close()}),Y=(K,ce,re)=>{K.listen(ce,oe=>{try{re(oe)}catch(Ce){setTimeout(()=>{throw Ce},0)}})};return Y(T,Ou.EventType.OPEN,()=>{O||(le(pn,`RPC '${e}' stream ${a} transport opened.`),V.s_())}),Y(T,Ou.EventType.CLOSE,()=>{O||(O=!0,le(pn,`RPC '${e}' stream ${a} transport closed`),V.__(),this.I_(T))}),Y(T,Ou.EventType.ERROR,K=>{O||(O=!0,Or(pn,`RPC '${e}' stream ${a} transport errored. Name:`,K.name,"Message:",K.message),V.__(new ae(W.UNAVAILABLE,"The operation could not be completed")))}),Y(T,Ou.EventType.MESSAGE,K=>{var ce;if(!O){const re=K.data[0];it(!!re,16349);const oe=re,Ce=oe?.error||((ce=oe[0])===null||ce===void 0?void 0:ce.error);if(Ce){le(pn,`RPC '${e}' stream ${a} received error:`,Ce);const pe=Ce.status;let Ne=function(C){const M=jt[C];if(M!==void 0)return Xw(M)}(pe),k=Ce.message;Ne===void 0&&(Ne=W.INTERNAL,k="Unknown error status: "+pe+" with message "+Ce.message),O=!0,V.__(new ae(Ne,k)),T.close()}else le(pn,`RPC '${e}' stream ${a} received:`,re),V.a_(re)}}),Y(d,dw.STAT_EVENT,K=>{K.stat===hg.PROXY?le(pn,`RPC '${e}' stream ${a} detected buffering proxy`):K.stat===hg.NOPROXY&&le(pn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{V.o_()},0),V}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function qp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(i){return new LO(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&le("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="PersistentStream";class fA{constructor(e,t,s,a,l,c,d,p){this.Fi=e,this.w_=s,this.S_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new hA(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Vs(t.toString()),Vs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.b_===t&&this.W_(s,a)},s=>{e(()=>{const a=new ae(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(a=>{s(()=>this.G_(a))}),this.stream.onMessage(a=>{s(()=>++this.C_==1?this.j_(a):this.onNext(a))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return le(WT,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(le(WT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kx extends fA{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=zO(this.serializer,e),s=function(l){if(!("targetChange"in l))return Oe.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Oe.min():c.readTime?Hi(c.readTime):Oe.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Sg(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=gg(p)?{documents:qO(l,p)}:{query:HO(l,p).Vt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=eA(l,c.resumeToken);const g=vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Oe.min())>0){d.readTime=Of(l,c.snapshotVersion.toTimestamp());const g=vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=KO(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Sg(this.serializer),t.removeTarget=e,this.k_(t)}}class Px extends fA{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return it(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,it(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){it(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=FO(e.writeResults,e.commitTime),s=Hi(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Sg(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>BO(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{}class Lx extends Vx{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Wo(e,Eg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(W.UNKNOWN,l.toString())})}Jo(e,t,s,a,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Jo(e,Eg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ae(W.UNKNOWN,c.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Ux{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Vs(t),this._a=!1):le("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="RemoteStore";class jx{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(c=>{s.enqueueAndForget(async()=>{Ba(this)&&(le(Ma,"Restarting streams for network reachability change."),await async function(p){const g=xe(p);g.Ia.add(4),await pc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await md(g)}(this))})}),this.Aa=new Ux(s,a)}}async function md(i){if(Ba(i))for(const e of i.da)await e(!0)}async function pc(i){for(const e of i.da)await e(!1)}function dA(i,e){const t=xe(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),A_(t)?w_(t):ml(t).x_()&&b_(t,e))}function S_(i,e){const t=xe(i),s=ml(t);t.Ta.delete(e),s.x_()&&mA(t,e),t.Ta.size===0&&(s.x_()?s.B_():Ba(t)&&t.Aa.set("Unknown"))}function b_(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Oe.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ml(i).H_(e)}function mA(i,e){i.Ra.$e(e),ml(i).Y_(e)}function w_(i){i.Ra=new MO({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),ml(i).start(),i.Aa.aa()}function A_(i){return Ba(i)&&!ml(i).M_()&&i.Ta.size>0}function Ba(i){return xe(i).Ia.size===0}function pA(i){i.Ra=void 0}async function zx(i){i.Aa.set("Online")}async function Bx(i){i.Ta.forEach((e,t)=>{b_(i,e)})}async function Fx(i,e){pA(i),A_(i)?(i.Aa.la(e),w_(i)):i.Aa.set("Unknown")}async function qx(i,e,t){if(i.Aa.set("Online"),e instanceof Zw&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ta.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ta.delete(d),a.Ra.removeTarget(d))}(i,e)}catch(s){le(Ma,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mf(i,s)}else if(e instanceof af?i.Ra.Ye(e):e instanceof Jw?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Oe.min()))try{const s=await cA(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Ra.Pt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ta.get(g);y&&l.Ta.set(g,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const y=l.Ta.get(p);if(!y)return;l.Ta.set(p,y.withResumeToken(fn.EMPTY_BYTE_STRING,y.snapshotVersion)),mA(l,p);const T=new Sr(y.target,p,g,y.sequenceNumber);b_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){le(Ma,"Failed to raise snapshot:",s),await Mf(i,s)}}async function Mf(i,e,t){if(!dl(e))throw e;i.Ia.add(1),await pc(i),i.Aa.set("Offline"),t||(t=()=>cA(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{le(Ma,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await md(i)})}function gA(i,e){return e().catch(t=>Mf(i,t,e))}async function pd(i){const e=xe(i),t=Vr(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:u_;for(;Hx(e);)try{const a=await Ax(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,Gx(e,a)}catch(a){await Mf(e,a)}_A(e)&&yA(e)}function Hx(i){return Ba(i)&&i.Pa.length<10}function Gx(i,e){i.Pa.push(e);const t=Vr(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function _A(i){return Ba(i)&&!Vr(i).M_()&&i.Pa.length>0}function yA(i){Vr(i).start()}async function Kx(i){Vr(i).na()}async function Yx(i){const e=Vr(i);for(const t of i.Pa)e.X_(t.mutations)}async function Qx(i,e,t){const s=i.Pa.shift(),a=p_.from(s,e,t);await gA(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await pd(i)}async function $x(i,e){e&&Vr(i).Z_&&await async function(s,a){if(function(c){return OO(c)&&c!==W.ABORTED}(a.code)){const l=s.Pa.shift();Vr(s).N_(),await gA(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await pd(s)}}(i,e),_A(i)&&yA(i)}async function XT(i,e){const t=xe(i);t.asyncQueue.verifyOperationInProgress(),le(Ma,"RemoteStore received new credentials");const s=Ba(t);t.Ia.add(3),await pc(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await md(t)}async function Wx(i,e){const t=xe(i);e?(t.Ia.delete(2),await md(t)):e||(t.Ia.add(2),await pc(t),t.Aa.set("Unknown"))}function ml(i){return i.Va||(i.Va=function(t,s,a){const l=xe(t);return l.ia(),new kx(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:zx.bind(null,i),e_:Bx.bind(null,i),n_:Fx.bind(null,i),J_:qx.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),A_(i)?w_(i):i.Aa.set("Unknown")):(await i.Va.stop(),pA(i))})),i.Va}function Vr(i){return i.ma||(i.ma=function(t,s,a){const l=xe(t);return l.ia(),new Px(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:Kx.bind(null,i),n_:$x.bind(null,i),ea:Yx.bind(null,i),ta:Qx.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await pd(i)):(await i.ma.stop(),i.Pa.length>0&&(le(Ma,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new R_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(i,e){if(Vs("AsyncQueue",`${e}: ${i}`),dl(i))return new ae(W.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=xu(),this.sortedSet=new At(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.fa=new At(ye.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):we(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class sl{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new sl(e,t,Yo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ld(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Jx{constructor(){this.queries=ZT(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=xe(t),l=a.queries;a.queries=ZT(),l.forEach((c,d)=>{for(const p of d.wa)p.onError(s)})})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function ZT(){return new za(i=>Uw(i),ld)}async function C_(i,e){const t=xe(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Sa()&&e.ba()&&(s=2):(l=new Xx,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(a,!0);break;case 1:l.ya=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=I_(c,`Initialization of query '${jo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&D_(t)}async function N_(i,e){const t=xe(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?a=e.ba()?0:1:!l.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Zx(i,e){const t=xe(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.wa)d.Ca(a)&&(s=!0);c.ya=a}}s&&D_(t)}function eM(i,e,t){const s=xe(i),a=s.queries.get(e);if(a)for(const l of a.wa)l.onError(t);s.queries.delete(e)}function D_(i){i.Da.forEach(e=>{e.next()})}var Ag,eS;(eS=Ag||(Ag={})).Fa="default",eS.Cache="cache";class O_{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new sl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=sl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ag.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.key=e}}class EA{constructor(e){this.key=e}}class tM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=He(),this.mutatedKeys=He(),this.Xa=jw(e),this.eu=new Yo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new JT,a=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const b=a.get(y),O=ud(this.query,T)?T:null,V=!!b&&this.mutatedKeys.has(b.key),Y=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let K=!1;b&&O?b.data.isEqual(O.data)?V!==Y&&(s.track({type:3,doc:O}),K=!0):this.iu(b,O)||(s.track({type:2,doc:O}),K=!0,(p&&this.Xa(O,p)>0||g&&this.Xa(O,g)<0)&&(d=!0)):!b&&O?(s.track({type:0,doc:O}),K=!0):b&&!O&&(s.track({type:1,doc:b}),K=!0,(p||g)&&(d=!0)),K&&(O?(c=c.add(O),l=Y?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{eu:c,ru:s,Ds:d,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort((y,T)=>function(O,V){const Y=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{At:K})}};return Y(O)-Y(V)}(y.type,T.type)||this.Xa(y.doc,T.doc)),this.su(s),a=a!=null&&a;const d=t&&!a?this.ou():[],p=this.Za.size===0&&this.current&&!a?1:0,g=p!==this.Ya;return this.Ya=p,c.length!==0||g?{snapshot:new sl(this.query,e.eu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new JT,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=He(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new EA(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new vA(s))}),t}uu(e){this.Ha=e.qs,this.Za=He();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return sl.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const x_="SyncEngine";class nM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class iM{constructor(e){this.key=e,this.lu=!1}}class sM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new za(d=>Uw(d),ld),this.Tu=new Map,this.Iu=new Set,this.du=new At(ye.comparator),this.Eu=new Map,this.Au=new y_,this.Ru={},this.Vu=new Map,this.mu=il.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rM(i,e,t=!0){const s=RA(i);let a;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.cu()):a=await TA(s,e,t,!0),a}async function aM(i,e){const t=RA(i);await TA(t,e,!0,!1)}async function TA(i,e,t,s){const a=await Rx(i.localStore,Fi(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await oM(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&dA(i.remoteStore,a),d}async function oM(i,e,t,s,a){i.gu=(T,b,O)=>async function(Y,K,ce,re){let oe=K.view.nu(ce);oe.Ds&&(oe=await KT(Y.localStore,K.query,!1).then(({documents:k})=>K.view.nu(k,oe)));const Ce=re&&re.targetChanges.get(K.targetId),pe=re&&re.targetMismatches.get(K.targetId)!=null,Ne=K.view.applyChanges(oe,Y.isPrimaryClient,Ce,pe);return nS(Y,K.targetId,Ne._u),Ne.snapshot}(i,T,b,O);const l=await KT(i.localStore,e,!0),c=new tM(e,l.qs),d=c.nu(l.documents),p=mc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),g=c.applyChanges(d,i.isPrimaryClient,p);nS(i,t,g._u);const y=new nM(e,t,c);return i.Pu.set(e,y),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),g.snapshot}async function lM(i,e,t){const s=xe(i),a=s.Pu.get(e),l=s.Tu.get(a.targetId);if(l.length>1)return s.Tu.set(a.targetId,l.filter(c=>!ld(c,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await bg(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&S_(s.remoteStore,a.targetId),Rg(s,a.targetId)}).catch(fl)):(Rg(s,a.targetId),await bg(s.localStore,a.targetId,!0))}async function uM(i,e){const t=xe(i),s=t.Pu.get(e),a=t.Tu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),S_(t.remoteStore,s.targetId))}async function cM(i,e,t){const s=_M(i);try{const a=await function(c,d){const p=xe(c),g=yt.now(),y=d.reduce((O,V)=>O.add(V.key),He());let T,b;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let V=Ls(),Y=He();return p.Os.getEntries(O,y).next(K=>{V=K,V.forEach((ce,re)=>{re.isValidDocument()||(Y=Y.add(ce))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,V)).next(K=>{T=K;const ce=[];for(const re of d){const oe=RO(re,T.get(re.key).overlayedDocument);oe!=null&&ce.push(new jr(re.key,oe,Dw(oe.value.mapValue),qi.exists(!0)))}return p.mutationQueue.addMutationBatch(O,g,ce,d)}).next(K=>{b=K;const ce=K.applyToLocalDocumentSet(T,Y);return p.documentOverlayCache.saveOverlays(O,K.batchId,ce)})}).then(()=>({batchId:b.batchId,changes:Bw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Ru[c.currentUser.toKey()];g||(g=new At(je)),g=g.insert(d,p),c.Ru[c.currentUser.toKey()]=g}(s,a.batchId,t),await gc(s,a.changes),await pd(s.remoteStore)}catch(a){const l=I_(a,"Failed to persist write");t.reject(l)}}async function SA(i,e){const t=xe(i);try{const s=await bx(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Eu.get(l);c&&(it(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.lu=!0:a.modifiedDocuments.size>0?it(c.lu,14607):a.removedDocuments.size>0&&(it(c.lu,42227),c.lu=!1))}),await gc(t,s,e)}catch(s){await fl(s)}}function tS(i,e,t){const s=xe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=xe(c);p.onlineState=d;let g=!1;p.queries.forEach((y,T)=>{for(const b of T.wa)b.va(d)&&(g=!0)}),g&&D_(p)}(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hM(i,e,t){const s=xe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let c=new At(ye.comparator);c=c.insert(l,vn.newNoDocument(l,Oe.min()));const d=He().add(l),p=new fd(Oe.min(),new Map,new At(je),c,d);await SA(s,p),s.du=s.du.remove(l),s.Eu.delete(e),M_(s)}else await bg(s.localStore,e,!1).then(()=>Rg(s,e,t)).catch(fl)}async function fM(i,e){const t=xe(i),s=e.batch.batchId;try{const a=await Sx(t.localStore,e);wA(t,s,null),bA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await gc(t,a)}catch(a){await fl(a)}}async function dM(i,e,t){const s=xe(i);try{const a=await function(c,d){const p=xe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(T=>(it(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(s.localStore,e);wA(s,e,t),bA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await gc(s,a)}catch(a){await fl(a)}}function bA(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function wA(i,e,t){const s=xe(i);let a=s.Ru[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function Rg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(s=>{i.Au.containsKey(s)||AA(i,s)})}function AA(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(S_(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),M_(i))}function nS(i,e,t){for(const s of t)s instanceof vA?(i.Au.addReference(s.key,e),mM(i,s)):s instanceof EA?(le(x_,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||AA(i,s.key)):we(19791,{yu:s})}function mM(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(le(x_,"New document in limbo: "+t),i.Iu.add(s),M_(i))}function M_(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new ye(pt.fromString(e)),s=i.mu.next();i.Eu.set(s,new iM(t)),i.du=i.du.insert(t,s),dA(i.remoteStore,new Sr(Fi(od(t.path)),s,"TargetPurposeLimboResolution",sd.ue))}}async function gc(i,e,t){const s=xe(i),a=[],l=[],c=[];s.Pu.isEmpty()||(s.Pu.forEach((d,p)=>{c.push(s.gu(p,e,t).then(g=>{var y;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(y=t?.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=E_.Es(p.targetId,g);l.push(T)}}))}),await Promise.all(c),s.hu.J_(a),await async function(p,g){const y=xe(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(g,b=>J.forEach(b.Is,O=>y.persistence.referenceDelegate.addReference(T,b.targetId,O)).next(()=>J.forEach(b.ds,O=>y.persistence.referenceDelegate.removeReference(T,b.targetId,O)))))}catch(T){if(!dl(T))throw T;le(T_,"Failed to update sequence numbers: "+T)}for(const T of g){const b=T.targetId;if(!T.fromCache){const O=y.Fs.get(b),V=O.snapshotVersion,Y=O.withLastLimboFreeSnapshotVersion(V);y.Fs=y.Fs.insert(b,Y)}}}(s.localStore,l))}async function pM(i,e){const t=xe(i);if(!t.currentUser.isEqual(e)){le(x_,"User change. New user:",e.toKey());const s=await uA(t.localStore,e);t.currentUser=e,function(l,c){l.Vu.forEach(d=>{d.forEach(p=>{p.reject(new ae(W.CANCELLED,c))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await gc(t,s.Bs)}}function gM(i,e){const t=xe(i),s=t.Eu.get(e);if(s&&s.lu)return He().add(s.key);{let a=He();const l=t.Tu.get(e);if(!l)return a;for(const c of l){const d=t.Pu.get(c);a=a.unionWith(d.view.tu)}return a}}function RA(i){const e=xe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=SA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hM.bind(null,e),e.hu.J_=Zx.bind(null,e.eventManager),e.hu.pu=eM.bind(null,e.eventManager),e}function _M(i){const e=xe(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dM.bind(null,e),e}class kf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Tx(this.persistence,new yx,e.initialUser,this.serializer)}Du(e){return new lA(v_.Vi,this.serializer)}bu(e){return new Cx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kf.provider={build:()=>new kf};class yM extends kf{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){it(this.persistence.referenceDelegate instanceof xf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ix(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Dn.withCacheSize(this.cacheSizeBytes):Dn.DEFAULT;return new lA(s=>xf.Vi(s,t),this.serializer)}}class Ig{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pM.bind(null,this.syncEngine),await Wx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Jx}()}createDatastore(e){const t=dd(e.databaseInfo.databaseId),s=function(l){return new Mx(l)}(e.databaseInfo);return function(l,c,d,p){return new Lx(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new jx(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>tS(this.syncEngine,t,0),function(){return $T.C()?new $T:new Nx}())}createSyncEngine(e,t){return function(a,l,c,d,p,g,y){const T=new sM(a,l,c,d,p,g);return y&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=xe(a);le(Ma,"RemoteStore shutting down."),l.Ia.add(5),await pc(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ig.provider={build:()=>new Ig};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Vs("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="FirestoreClient";class vM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=gn.UNAUTHENTICATED,this.clientId=l_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{le(Lr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(le(Lr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=I_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Hp(i,e){i.asyncQueue.verifyOperationInProgress(),le(Lr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await uA(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>{Or("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{le("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(a=>{Or("Terminating Firestore due to IndexedDb database deletion failed",a)})}),i._offlineComponents=e}async function iS(i,e){i.asyncQueue.verifyOperationInProgress();const t=await EM(i);le(Lr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>XT(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>XT(e.remoteStore,a)),i._onlineComponents=e}async function EM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){le(Lr,"Using user provided OfflineComponentProvider");try{await Hp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===W.FAILED_PRECONDITION||a.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Or("Error using user provided cache. Falling back to memory cache: "+t),await Hp(i,new kf)}}else le(Lr,"Using default OfflineComponentProvider"),await Hp(i,new yM(void 0));return i._offlineComponents}async function IA(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(le(Lr,"Using user provided OnlineComponentProvider"),await iS(i,i._uninitializedComponentsProvider._online)):(le(Lr,"Using default OnlineComponentProvider"),await iS(i,new Ig))),i._onlineComponents}function TM(i){return IA(i).then(e=>e.syncEngine)}async function Pf(i){const e=await IA(i),t=e.eventManager;return t.onListen=rM.bind(null,e.syncEngine),t.onUnlisten=lM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uM.bind(null,e.syncEngine),t}function SM(i,e,t={}){const s=new Os;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new k_({next:b=>{y.Ou(),c.enqueueAndForget(()=>N_(l,T));const O=b.docs.has(d);!O&&b.fromCache?g.reject(new ae(W.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&b.fromCache&&p&&p.source==="server"?g.reject(new ae(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new O_(od(d.path),y,{includeMetadataChanges:!0,ka:!0});return C_(l,T)}(await Pf(i),i.asyncQueue,e,t,s)),s.promise}function bM(i,e,t={}){const s=new Os;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new k_({next:b=>{y.Ou(),c.enqueueAndForget(()=>N_(l,T)),b.fromCache&&p.source==="server"?g.reject(new ae(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new O_(d,y,{includeMetadataChanges:!0,ka:!0});return C_(l,T)}(await Pf(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="firestore.googleapis.com",rS=!0;class aS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=NA,this.ssl=rS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:rS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=oA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tx)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CA((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new O2;switch(s.type){case"firstParty":return new P2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=sS.get(t);s&&(le("ComponentProvider","Removing Datastore"),sS.delete(t),s.terminate())}(this),Promise.resolve()}}function wM(i,e,t,s={}){var a;i=oi(i,gd);const l=js(e),c=i._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;l&&(Yf(`https://${p}`),Qf("Firestore",!0)),c.host!==NA&&c.host!==p&&Or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:s});if(!Cr(g,d)&&(i._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=gn.MOCK_USER;else{y=HS(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new gn(b)}i._authCredentials=new x2(new _w(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fa(this.firestore,e,this._query)}}class Nt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(hc(t,Nt._jsonSchema))return new Nt(e,s||null,new ye(pt.fromString(t.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:Bt("string",Nt._jsonSchemaVersion),referencePath:Bt("string")};class Ir extends Fa{constructor(e,t,s){super(e,t,od(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new ye(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function AM(i,e,...t){if(i=wt(i),vw("collection","path",e),i instanceof gd){const s=pt.fromString(e,...t);return vT(s),new Ir(i,null,s)}{if(!(i instanceof Nt||i instanceof Ir))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(pt.fromString(e,...t));return vT(s),new Ir(i.firestore,null,s)}}function _r(i,e,...t){if(i=wt(i),arguments.length===1&&(e=l_.newId()),vw("doc","path",e),i instanceof gd){const s=pt.fromString(e,...t);return yT(s),new Nt(i,null,new ye(s))}{if(!(i instanceof Nt||i instanceof Ir))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(pt.fromString(e,...t));return yT(s),new Nt(i.firestore,i instanceof Ir?i.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="AsyncQueue";class lS{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new hA(this,"async_queue_retry"),this.oc=()=>{const s=qp();s&&le(oS,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=qp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=qp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Os;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!dl(e))throw e;le(oS,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Vs("INTERNAL UNHANDLED ERROR: ",uS(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=R_.createAndSchedule(this,e,t,s,l=>this.lc(l));return this.ec.push(a),a}ac(){this.tc&&we(47125,{hc:uS(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function uS(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1}(i,["next","error","complete"])}class ka extends gd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new lS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lS(e),this._firestoreClient=void 0,await e}}}function RM(i,e){const t=typeof i=="object"?i:Xf(),s=typeof i=="string"?i:Af,a=rc(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Vg("firestore");l&&wM(a,...l)}return a}function _d(i){if(i._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||IM(i),i._firestoreClient}function IM(i){var e,t,s;const a=i._freezeSettings(),l=function(d,p,g,y){return new X2(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,CA(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new vM(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const p=d?._online.build();return{_offline:d?._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(fn.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new si(fn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:si._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hc(e,si._jsonSchema))return si.fromBase64String(e.bytes)}}si._jsonSchemaVersion="firestore/bytes/1.0",si._jsonSchema={type:Bt("string",si._jsonSchemaVersion),bytes:Bt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new hn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gi._jsonSchemaVersion}}static fromJSON(e){if(hc(e,Gi._jsonSchema))return new Gi(e.latitude,e.longitude)}}Gi._jsonSchemaVersion="firestore/geoPoint/1.0",Gi._jsonSchema={type:Bt("string",Gi._jsonSchemaVersion),latitude:Bt("number"),longitude:Bt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ki._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hc(e,Ki._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ki(e.vectorValues);throw new ae(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ki._jsonSchemaVersion="firestore/vectorValue/1.0",Ki._jsonSchema={type:Bt("string",Ki._jsonSchemaVersion),vectorValues:Bt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=/^__.*__$/;class NM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,t,this.fieldTransforms):new dc(e,this.data,t,this.fieldTransforms)}}class DA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new jr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function OA(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ec:i})}}class V_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new V_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Vf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(OA(this.Ec)&&CM.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class DM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||dd(e)}Dc(e,t,s,a=!1){return new V_({Ec:e,methodName:t,bc:s,path:hn.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(i){const e=i._freezeSettings(),t=dd(i._databaseId);return new DM(i._databaseId,!!e.ignoreUndefinedProperties,t)}function OM(i,e,t,s,a,l={}){const c=i.Dc(l.merge||l.mergeFields?2:0,e,t,a);U_("Data must be an object, but it was:",c,s);const d=xA(s,c);let p,g;if(l.merge)p=new qn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const b=Cg(e,T,t);if(!c.contains(b))throw new ae(W.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);kA(y,b)||y.push(b)}p=new qn(y),g=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=c.fieldTransforms;return new NM(new xn(d),p,g)}class vd extends P_{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vd}}function xM(i,e,t,s){const a=i.Dc(1,e,t);U_("Data must be an object, but it was:",a,s);const l=[],c=xn.empty();Ur(s,(p,g)=>{const y=j_(e,p,t);g=wt(g);const T=a.gc(y);if(g instanceof vd)l.push(y);else{const b=_c(g,T);b!=null&&(l.push(y),c.set(y,b))}});const d=new qn(l);return new DA(c,d,a.fieldTransforms)}function MM(i,e,t,s,a,l){const c=i.Dc(1,e,t),d=[Cg(e,s,t)],p=[a];if(l.length%2!=0)throw new ae(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(Cg(e,l[b])),p.push(l[b+1]);const g=[],y=xn.empty();for(let b=d.length-1;b>=0;--b)if(!kA(g,d[b])){const O=d[b];let V=p[b];V=wt(V);const Y=c.gc(O);if(V instanceof vd)g.push(O);else{const K=_c(V,Y);K!=null&&(g.push(O),y.set(O,K))}}const T=new qn(g);return new DA(y,T,c.fieldTransforms)}function kM(i,e,t,s=!1){return _c(t,i.Dc(s?4:3,e))}function _c(i,e){if(MA(i=wt(i)))return U_("Unsupported field value:",e,i),xA(i,e);if(i instanceof P_)return function(s,a){if(!OA(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let p=_c(d,a.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return EO(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=yt.fromDate(s);return{timestampValue:Of(a.serializer,l)}}if(s instanceof yt){const l=new yt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Of(a.serializer,l)}}if(s instanceof Gi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof si)return{bytesValue:eA(a.serializer,s._byteString)};if(s instanceof Nt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:__(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Ki)return function(c,d){return{mapValue:{fields:{[Cw]:{stringValue:Nw},[Rf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.wc("VectorValues must only contain numeric values.");return m_(d.serializer,g)})}}}}}}(s,a);throw a.wc(`Unsupported field value: ${id(s)}`)}(i,e)}function xA(i,e){const t={};return Sw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(i,(s,a)=>{const l=_c(a,e.Vc(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function MA(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof yt||i instanceof Gi||i instanceof si||i instanceof Nt||i instanceof P_||i instanceof Ki)}function U_(i,e,t){if(!MA(t)||!Ew(t)){const s=id(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function Cg(i,e,t){if((e=wt(e))instanceof yd)return e._internalPath;if(typeof e=="string")return j_(i,e);throw Vf("Field path arguments must be of type string or ",i,!1,void 0,t)}const PM=new RegExp("[~\\*/\\[\\]]");function j_(i,e,t){if(e.search(PM)>=0)throw Vf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new yd(...e.split("."))._internalPath}catch{throw Vf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Vf(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ae(W.INVALID_ARGUMENT,d+i+p)}function kA(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(z_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VM extends PA{data(){return super.data()}}function z_(i,e){return typeof e=="string"?j_(i,e):e instanceof yd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B_{}class LM extends B_{}function hS(i,e,...t){let s=[];e instanceof B_&&s.push(e),s=s.concat(t),function(l){const c=l.filter(p=>p instanceof F_).length,d=l.filter(p=>p instanceof Ed).length;if(c>1||c>0&&d>0)throw new ae(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const a of s)i=a._apply(i);return i}class Ed extends LM{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ed(e,t,s)}_apply(e){const t=this._parse(e);return LA(e._query,t),new Fa(e.firestore,e.converter,_g(e._query,t))}_parse(e){const t=L_(e.firestore);return function(l,c,d,p,g,y,T){let b;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ae(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){dS(T,y);const V=[];for(const Y of T)V.push(fS(p,l,Y));b={arrayValue:{values:V}}}else b=fS(p,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||dS(T,y),b=kM(d,c,T,y==="in"||y==="not-in");return zt.create(g,y,b)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Xh(i,e,t){const s=e,a=z_("where",i);return Ed._create(a,s,t)}class F_ extends B_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new F_(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Ei.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)LA(c,p),c=_g(c,p)}(e._query,t),new Fa(e.firestore,e.converter,_g(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fS(i,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new ae(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lw(e)&&t.indexOf("/")!==-1)throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(pt.fromString(t));if(!ye.isDocumentKey(s))throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return IT(i,new ye(s))}if(t instanceof Nt)return IT(i,t._key);throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${id(t)}.`)}function dS(i,e){if(!Array.isArray(i)||i.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function LA(i,e){const t=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(i.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ae(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class UM{convertValue(e,t="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return kt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ur(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Rf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>kt(c.doubleValue));return new Ki(l)}convertGeoPoint(e){return new Gi(kt(e.latitude),kt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ad(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wu(e));default:return null}}convertTimestamp(e){const t=Mr(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=pt.fromString(e);it(aA(s),9688,{name:e});const a=new Xu(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return a.isEqual(t)||Vs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class ku{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ia extends PA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new of(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(z_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ia._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ia._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ia._jsonSchema={type:Bt("string",Ia._jsonSchemaVersion),bundleSource:Bt("string","DocumentSnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class of extends Ia{data(e={}){return super.data(e)}}class Ca{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new ku(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new of(this._firestore,this._userDataWriter,s.key,s,new ku(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new of(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ku(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new of(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ku(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:zM(d.type),doc:p,oldIndex:g,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ca._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=l_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zM(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(i){i=oi(i,Nt);const e=oi(i.firestore,ka);return SM(_d(e),i._key).then(t=>jA(e,i,t))}Ca._jsonSchemaVersion="firestore/querySnapshot/1.0",Ca._jsonSchema={type:Bt("string",Ca._jsonSchemaVersion),bundleSource:Bt("string","QuerySnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class q_ extends UM{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,t)}}function mS(i){i=oi(i,Fa);const e=oi(i.firestore,ka),t=_d(e),s=new q_(e);return VA(i._query),bM(t,i._query).then(a=>new Ca(e,s,i,a))}function FM(i,e,t){i=oi(i,Nt);const s=oi(i.firestore,ka),a=jM(i.converter,e);return UA(s,[OM(L_(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,qi.none())])}function Lo(i,e,t,...s){i=oi(i,Nt);const a=oi(i.firestore,ka),l=L_(a);let c;return c=typeof(e=wt(e))=="string"||e instanceof yd?MM(l,"updateDoc",i._key,e,t,s):xM(l,"updateDoc",i._key,e),UA(a,[c.toMutation(i._key,qi.exists(!0))])}function qM(i,...e){var t,s,a;i=wt(i);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||cS(e[c])||(l=e[c++]);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(cS(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let p,g,y;if(i instanceof Nt)g=oi(i.firestore,ka),y=od(i._key.path),p={next:T=>{e[c]&&e[c](jA(g,i,T))},error:e[c+1],complete:e[c+2]};else{const T=oi(i,Fa);g=oi(T.firestore,ka),y=T._query;const b=new q_(g);p={next:O=>{e[c]&&e[c](new Ca(g,b,T,O))},error:e[c+1],complete:e[c+2]},VA(i._query)}return function(b,O,V,Y){const K=new k_(Y),ce=new O_(O,K,V);return b.asyncQueue.enqueueAndForget(async()=>C_(await Pf(b),ce)),()=>{K.Ou(),b.asyncQueue.enqueueAndForget(async()=>N_(await Pf(b),ce))}}(_d(g),y,d,p)}function UA(i,e){return function(s,a){const l=new Os;return s.asyncQueue.enqueueAndForget(async()=>cM(await TM(s),a,l)),l.promise}(_d(i),e)}function jA(i,e,t){const s=t.docs.get(e._key),a=new q_(i);return new Ia(i,a,e._key,s,new ku(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){hl=a})(La),Nr(new Ms("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ka(new M2(s.getProvider("auth-internal")),new V2(c,s.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xu(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),ai(dT,mT,e),ai(dT,mT,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM="type.googleapis.com/google.protobuf.Int64Value",GM="type.googleapis.com/google.protobuf.UInt64Value";function zA(i,e){const t={};for(const s in i)i.hasOwnProperty(s)&&(t[s]=e(i[s]));return t}function Lf(i){if(i==null)return null;if(i instanceof Number&&(i=i.valueOf()),typeof i=="number"&&isFinite(i)||i===!0||i===!1||Object.prototype.toString.call(i)==="[object String]")return i;if(i instanceof Date)return i.toISOString();if(Array.isArray(i))return i.map(e=>Lf(e));if(typeof i=="function"||typeof i=="object")return zA(i,e=>Lf(e));throw new Error("Data cannot be encoded in JSON: "+i)}function rl(i){if(i==null)return i;if(i["@type"])switch(i["@type"]){case HM:case GM:{const e=Number(i.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+i);return e}default:throw new Error("Data cannot be decoded from JSON: "+i)}return Array.isArray(i)?i.map(e=>rl(e)):typeof i=="function"||typeof i=="object"?zA(i,e=>rl(e)):i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Mn extends Wi{constructor(e,t,s){super(`${H_}/${e}`,t||""),this.details=s,Object.setPrototypeOf(this,Mn.prototype)}}function KM(i){if(i>=200&&i<300)return"ok";switch(i){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Uf(i,e){let t=KM(i),s=t,a;try{const l=e&&e.error;if(l){const c=l.status;if(typeof c=="string"){if(!pS[c])return new Mn("internal","internal");t=pS[c],s=c}const d=l.message;typeof d=="string"&&(s=d),a=l.details,a!==void 0&&(a=rl(a))}}catch{}return t==="ok"?null:new Mn(t,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,t,s,a){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,On(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||s.get().then(l=>this.messaging=l,()=>{}),this.appCheck||a?.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),a=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:a}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="us-central1",QM=/^data: (.*?)(?:\n|$)/;function $M(i){let e=null;return{promise:new Promise((t,s)=>{e=setTimeout(()=>{s(new Mn("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{e&&clearTimeout(e)}}}class WM{constructor(e,t,s,a,l=Ng,c=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new YM(e,t,s,a),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(l);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=Ng}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function XM(i,e,t){const s=js(e);i.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(Yf(i.emulatorOrigin),Qf("Functions",!0))}function JM(i,e,t){const s=a=>ek(i,e,a,{});return s.stream=(a,l)=>nk(i,e,a,l),s}async function ZM(i,e,t,s){t["Content-Type"]="application/json";let a;try{a=await s(i,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}async function BA(i,e){const t={},s=await i.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(t.Authorization="Bearer "+s.authToken),s.messagingToken&&(t["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=s.appCheckToken),t}function ek(i,e,t,s){const a=i._url(e);return tk(i,a,t,s)}async function tk(i,e,t,s){t=Lf(t);const a={data:t},l=await BA(i,s),c=s.timeout||7e4,d=$M(c),p=await Promise.race([ZM(e,a,l,i.fetchImpl),d.promise,i.cancelAllRequests]);if(d.cancel(),!p)throw new Mn("cancelled","Firebase Functions instance was deleted.");const g=Uf(p.status,p.json);if(g)throw g;if(!p.json)throw new Mn("internal","Response is not valid JSON object.");let y=p.json.data;if(typeof y>"u"&&(y=p.json.result),typeof y>"u")throw new Mn("internal","Response is missing data field.");return{data:rl(y)}}function nk(i,e,t,s){const a=i._url(e);return ik(i,a,t,s||{})}async function ik(i,e,t,s){var a;t=Lf(t);const l={data:t},c=await BA(i,s);c["Content-Type"]="application/json",c.Accept="text/event-stream";let d;try{d=await i.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:c,signal:s?.signal})}catch(O){if(O instanceof Error&&O.name==="AbortError"){const Y=new Mn("cancelled","Request was cancelled.");return{data:Promise.reject(Y),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(Y)}}}}}}const V=Uf(0,null);return{data:Promise.reject(V),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(V)}}}}}}let p,g;const y=new Promise((O,V)=>{p=O,g=V});(a=s?.signal)===null||a===void 0||a.addEventListener("abort",()=>{const O=new Mn("cancelled","Request was cancelled.");g(O)});const T=d.body.getReader(),b=sk(T,p,g,s?.signal);return{stream:{[Symbol.asyncIterator](){const O=b.getReader();return{async next(){const{value:V,done:Y}=await O.read();return{value:V,done:Y}},async return(){return await O.cancel(),{done:!0,value:void 0}}}}},data:y}}function sk(i,e,t,s){const a=(c,d)=>{const p=c.match(QM);if(!p)return;const g=p[1];try{const y=JSON.parse(g);if("result"in y){e(rl(y.result));return}if("message"in y){d.enqueue(rl(y.message));return}if("error"in y){const T=Uf(0,y);d.error(T),t(T);return}}catch(y){if(y instanceof Mn){d.error(y),t(y);return}}},l=new TextDecoder;return new ReadableStream({start(c){let d="";return p();async function p(){if(s?.aborted){const g=new Mn("cancelled","Request was cancelled");return c.error(g),t(g),Promise.resolve()}try{const{value:g,done:y}=await i.read();if(y){d.trim()&&a(d.trim(),c),c.close();return}if(s?.aborted){const b=new Mn("cancelled","Request was cancelled");c.error(b),t(b),await i.cancel();return}d+=l.decode(g,{stream:!0});const T=d.split(`
`);d=T.pop()||"";for(const b of T)b.trim()&&a(b.trim(),c);return p()}catch(g){const y=g instanceof Mn?g:Uf(0,null);c.error(y),t(y)}}},cancel(){return i.cancel()}})}const gS="@firebase/functions",_S="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="auth-internal",ak="app-check-internal",ok="messaging-internal";function lk(i){const e=(t,{instanceIdentifier:s})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider(rk),c=t.getProvider(ok),d=t.getProvider(ak);return new WM(a,l,c,d,s)};Nr(new Ms(H_,e,"PUBLIC").setMultipleInstances(!0)),ai(gS,_S,i),ai(gS,_S,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(i=Xf(),e=Ng){const s=rc(wt(i),H_).getImmediate({identifier:e}),a=Vg("functions");return a&&FA(s,...a),s}function FA(i,e,t){XM(wt(i),e,t)}function Td(i,e,t){return JM(wt(i),e)}lk();function G_(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function qA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ck=qA,HA=new sc("auth","Firebase",qA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Wf("@firebase/auth");function hk(i,...e){jf.logLevel<=qe.WARN&&jf.warn(`Auth (${La}): ${i}`,...e)}function lf(i,...e){jf.logLevel<=qe.ERROR&&jf.error(`Auth (${La}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(i,...e){throw K_(i,...e)}function Yi(i,...e){return K_(i,...e)}function GA(i,e,t){const s=Object.assign(Object.assign({},ck()),{[e]:t});return new sc("auth","Firebase",s).create(e,{appName:i.name})}function xs(i){return GA(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return HA.create(i,...e)}function be(i,e,...t){if(!i)throw K_(e,...t)}function Cs(i){const e="INTERNAL ASSERTION FAILED: "+i;throw lf(e),new Error(e)}function Us(i,e){i||Cs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function fk(){return yS()==="http:"||yS()==="https:"}function yS(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fk()||_I()||"connection"in navigator)?navigator.onLine:!0}function mk(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Us(t>e,"Short delay should be less than long delay!"),this.isMobile=Ug()||GS()}get(){return dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(i,e){Us(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_k=new yc(3e4,6e4);function zr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Br(i,e,t,s,a={}){return YA(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=ol(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return gI()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&js(i.emulatorConfig.host)&&(g.credentials="include"),KA.fetch()(await QA(i,i.config.apiHost,t,d),g)})}async function YA(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},pk),e);try{const a=new vk(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Jh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Jh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Jh(i,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw GA(i,y,g);Ti(i,y)}}catch(a){if(a instanceof Wi)throw a;Ti(i,"network-request-failed",{message:String(a)})}}async function vc(i,e,t,s,a={}){const l=await Br(i,e,t,s,a);return"mfaPendingCredential"in l&&Ti(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function QA(i,e,t,s){const a=`${e}${t}?${s}`,l=i,c=l.config.emulator?Y_(i.config,a):`${i.config.apiScheme}://${a}`;return gk.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function yk(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Yi(this.auth,"network-request-failed")),_k.get())})}}function Jh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Yi(i,e,s);return a.customData._tokenResponse=t,a}function vS(i){return i!==void 0&&i.enterprise!==void 0}class Ek{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tk(i,e){return Br(i,"GET","/v2/recaptchaConfig",zr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(i,e){return Br(i,"POST","/v1/accounts:delete",e)}async function zf(i,e){return Br(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bk(i,e=!1){const t=wt(i),s=await t.getIdToken(e),a=Q_(s);be(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Hu(Gp(a.auth_time)),issuedAtTime:Hu(Gp(a.iat)),expirationTime:Hu(Gp(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Gp(i){return Number(i)*1e3}function Q_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return lf("JWT malformed, contained fewer than 3 sections"),null;try{const a=df(t);return a?JSON.parse(a):(lf("Failed to decode base64 JWT payload"),null)}catch(a){return lf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function ES(i){const e=Q_(i);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Wi&&wk(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function wk({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hu(this.lastLoginAt),this.creationTime=Hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(i){var e;const t=i.auth,s=await i.getIdToken(),a=await tc(i,zf(t,{idToken:s}));be(a?.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?$A(l.providerUserInfo):[],d=Ik(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!d?.length,y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Og(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(i,T)}async function Rk(i){const e=wt(i);await Bf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ik(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function $A(i){return i.map(e=>{var{providerId:t}=e,s=G_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(i,e){const t=await YA(i,{},async()=>{const s=ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await QA(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return i.emulatorConfig&&js(i.emulatorConfig.host)&&(p.credentials="include"),KA.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nk(i,e){return Br(i,"POST","/v2/accounts:revokeToken",zr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ES(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=ES(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await Ck(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Qo;return s&&(be(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(be(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(be(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return Cs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(i,e){be(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class yi{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=G_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Og(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await tc(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bk(this,e)}reload(){return Rk(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(xs(this.auth));const e=await this.getIdToken();return await tc(this,Sk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,p,g,y;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,b=(a=t.email)!==null&&a!==void 0?a:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Y=(d=t.tenantId)!==null&&d!==void 0?d:void 0,K=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ce=(g=t.createdAt)!==null&&g!==void 0?g:void 0,re=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:oe,emailVerified:Ce,isAnonymous:pe,providerData:Ne,stsTokenManager:k}=t;be(oe&&k,e,"internal-error");const R=Qo.fromJSON(this.name,k);be(typeof oe=="string",e,"internal-error"),gr(T,e.name),gr(b,e.name),be(typeof Ce=="boolean",e,"internal-error"),be(typeof pe=="boolean",e,"internal-error"),gr(O,e.name),gr(V,e.name),gr(Y,e.name),gr(K,e.name),gr(ce,e.name),gr(re,e.name);const C=new yi({uid:oe,auth:e,email:b,emailVerified:Ce,displayName:T,isAnonymous:pe,photoURL:V,phoneNumber:O,tenantId:Y,stsTokenManager:R,createdAt:ce,lastLoginAt:re});return Ne&&Array.isArray(Ne)&&(C.providerData=Ne.map(M=>Object.assign({},M))),K&&(C._redirectEventId=K),C}static async _fromIdTokenResponse(e,t,s=!1){const a=new Qo;a.updateFromServerResponse(t);const l=new yi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Bf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];be(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?$A(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Qo;d.updateFromIdToken(s);const p=new yi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Og(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Map;function Ns(i){Us(i instanceof Function,"Expected a class definition");let e=TS.get(i);return e?(Us(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,TS.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}WA.type="NONE";const SS=WA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(i,e,t){return`firebase:${i}:${e}:${t}`}class $o{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=uf(this.userKey,a.apiKey,l),this.fullPersistenceKey=uf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zf(this.auth,{idToken:e}).catch(()=>{});return t?yi._fromGetAccountInfoResponse(this.auth,t,e):null}return yi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new $o(Ns(SS),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ns(SS);const c=uf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const b=await zf(e,{idToken:y}).catch(()=>{});if(!b)break;T=await yi._fromGetAccountInfoResponse(e,b,y)}else T=yi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new $o(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new $o(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n1(e))return"Blackberry";if(i1(e))return"Webos";if(JA(e))return"Safari";if((e.includes("chrome/")||ZA(e))&&!e.includes("edge/"))return"Chrome";if(t1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function XA(i=Tn()){return/firefox\//i.test(i)}function JA(i=Tn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZA(i=Tn()){return/crios\//i.test(i)}function e1(i=Tn()){return/iemobile/i.test(i)}function t1(i=Tn()){return/android/i.test(i)}function n1(i=Tn()){return/blackberry/i.test(i)}function i1(i=Tn()){return/webos/i.test(i)}function $_(i=Tn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Dk(i=Tn()){var e;return $_(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ok(){return yI()&&document.documentMode===10}function s1(i=Tn()){return $_(i)||t1(i)||i1(i)||n1(i)||/windows phone/i.test(i)||e1(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(i,e=[]){let t;switch(i){case"Browser":t=bS(Tn());break;case"Worker":t=`${bS(Tn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${La}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(i,e={}){return Br(i,"GET","/v2/passwordPolicy",zr(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=6;class Pk{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:kk,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wS(this),this.idTokenSubscription=new wS(this),this.beforeStateQueue=new xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ns(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await $o.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zf(this,{idToken:e}),s=await yi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(On(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&p?.user&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(On(this.app))return Promise.reject(xs(this));const t=e?wt(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return On(this.app)?Promise.reject(xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ns(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mk(this),t=new Pk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Nk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ns(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await $o.create(this,[Ns(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&hk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function qa(i){return wt(i)}class wS{constructor(e){this.auth=e,this.observer=null,this.addObserver=NI(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lk(i){Sd=i}function a1(i){return Sd.loadJS(i)}function Uk(){return Sd.recaptchaEnterpriseScript}function jk(){return Sd.gapiScript}function zk(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Bk{constructor(){this.enterprise=new Fk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Fk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qk="recaptcha-enterprise",o1="NO_RECAPTCHA";class Hk{constructor(e){this.type=qk,this.auth=qa(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{Tk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new Ek(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;vS(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(o1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bk().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&vS(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Uk();p.length!==0&&(p+=d),a1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function AS(i,e,t,s=!1,a=!1){const l=new Hk(i);let c;if(a)c=o1;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function xg(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await AS(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await AS(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(i,e){const t=rc(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Cr(l,e??{}))return a;Ti(a,"already-initialized")}return t.initialize({options:e})}function Kk(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ns);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function Yk(i,e,t){const s=qa(i);be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=l1(e),{host:c,port:d}=Qk(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){be(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),be(Cr(g,s.config.emulator)&&Cr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,js(c)?(Yf(`${l}//${c}${p}`),Qf("Auth",!0)):$k()}function l1(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Qk(i){const e=l1(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:RS(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:RS(c)}}}function RS(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function $k(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cs("not implemented")}_getIdTokenResponse(e){return Cs("not implemented")}_linkToIdToken(e,t){return Cs("not implemented")}_getReauthenticationResolver(e){return Cs("not implemented")}}async function Wk(i,e){return Br(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(i,e){return vc(i,"POST","/v1/accounts:signInWithPassword",zr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(i,e){return vc(i,"POST","/v1/accounts:signInWithEmailLink",zr(i,e))}async function Zk(i,e){return vc(i,"POST","/v1/accounts:signInWithEmailLink",zr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends W_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new nc(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new nc(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xg(e,t,"signInWithPassword",Xk);case"emailLink":return Jk(e,{email:this._email,oobCode:this._password});default:Ti(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xg(e,s,"signUpPassword",Wk);case"emailLink":return Zk(e,{idToken:t,email:this._email,oobCode:this._password});default:Ti(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(i,e){return vc(i,"POST","/v1/accounts:signInWithIdp",zr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="http://localhost";class Pa extends W_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ti("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=G_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Pa(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Wo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Wo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wo(e,t)}buildRequest(){const e={requestUri:eP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ol(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nP(i){const e=Cu(Nu(i)).link,t=e?Cu(Nu(e)).deep_link_id:null,s=Cu(Nu(i)).deep_link_id;return(s?Cu(Nu(s)).link:null)||s||t||e||i}class X_{constructor(e){var t,s,a,l,c,d;const p=Cu(Nu(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,T=tP((a=p.mode)!==null&&a!==void 0?a:null);be(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=nP(e);try{return new X_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.providerId=pl.PROVIDER_ID}static credential(e,t){return nc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=X_.parseLink(t);return be(s,"argument-error"),nc._fromEmailAndCode(e,s.code,s.tenantId)}}pl.PROVIDER_ID="password";pl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends u1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ec{constructor(){super("facebook.com")}static credential(e){return Pa._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pa._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return vr.credential(t,s)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ec{constructor(){super("github.com")}static credential(e){return Pa._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ec{constructor(){super("twitter.com")}static credential(e,t){return Pa._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Tr.credential(t,s)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(i,e){return vc(i,"POST","/v1/accounts:signUp",zr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await yi._fromIdTokenResponse(e,s,a),c=IS(s);return new Va({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=IS(s);return new Va({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function IS(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff extends Wi{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Ff.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Ff(e,t,s,a)}}function c1(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ff._fromErrorAndOperation(i,l,e,s):l})}async function sP(i,e,t=!1){const s=await tc(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Va._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(i,e,t=!1){const{auth:s}=i;if(On(s.app))return Promise.reject(xs(s));const a="reauthenticate";try{const l=await tc(i,c1(s,a,e,i),t);be(l.idToken,s,"internal-error");const c=Q_(l.idToken);be(c,s,"internal-error");const{sub:d}=c;return be(i.uid===d,s,"user-mismatch"),Va._forOperation(i,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ti(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(i,e,t=!1){if(On(i.app))return Promise.reject(xs(i));const s="signIn",a=await c1(i,s,e),l=await Va._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function aP(i,e){return h1(qa(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(i){const e=qa(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oP(i,e,t){if(On(i.app))return Promise.reject(xs(i));const s=qa(i),c=await xg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iP).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&f1(i),p}),d=await Va._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function lP(i,e,t){return On(i.app)?Promise.reject(xs(i)):aP(wt(i),pl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&f1(i),s})}function uP(i,e,t,s){return wt(i).onIdTokenChanged(e,t,s)}function cP(i,e,t){return wt(i).beforeAuthStateChanged(e,t)}function hP(i,e,t,s){return wt(i).onAuthStateChanged(e,t,s)}const qf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qf,"1"),this.storage.removeItem(qf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=1e3,dP=10;class m1 extends d1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Ok()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,dP):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},fP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}m1.type="LOCAL";const mP=m1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1 extends d1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}p1.type="SESSION";const g1=p1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new bd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await pP(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=J_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const b=T;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(b.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(){return window}function _P(i){Qi().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(){return typeof Qi().WorkerGlobalScope<"u"&&typeof Qi().importScripts=="function"}async function yP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vP(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function EP(){return _1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="firebaseLocalStorageDb",TP=1,Hf="firebaseLocalStorage",v1="fbase_key";class Tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wd(i,e){return i.transaction([Hf],e?"readwrite":"readonly").objectStore(Hf)}function SP(){const i=indexedDB.deleteDatabase(y1);return new Tc(i).toPromise()}function Mg(){const i=indexedDB.open(y1,TP);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Hf,{keyPath:v1})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Hf)?e(s):(s.close(),await SP(),e(await Mg()))})})}async function CS(i,e,t){const s=wd(i,!0).put({[v1]:e,value:t});return new Tc(s).toPromise()}async function bP(i,e){const t=wd(i,!1).get(e),s=await new Tc(t).toPromise();return s===void 0?null:s.value}function NS(i,e){const t=wd(i,!0).delete(e);return new Tc(t).toPromise()}const wP=800,AP=3;class E1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>AP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bd._getInstance(EP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yP(),!this.activeServiceWorker)return;this.sender=new gP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mg();return await CS(e,qf,"1"),await NS(e,qf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>CS(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>bP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>NS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=wd(a,!1).getAll();return new Tc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E1.type="LOCAL";const RP=E1;new yc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(i,e){return e?Ns(e):(be(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_ extends W_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CP(i){return h1(i.auth,new Z_(i),i.bypassAuthState)}function NP(i){const{auth:e,user:t}=i;return be(t,e,"internal-error"),rP(t,new Z_(i),i.bypassAuthState)}async function DP(i){const{auth:e,user:t}=i;return be(t,e,"internal-error"),sP(t,new Z_(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CP;case"linkViaPopup":case"linkViaRedirect":return DP;case"reauthViaPopup":case"reauthViaRedirect":return NP;default:Ti(this.auth,"internal-error")}}resolve(e){Us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=new yc(2e3,1e4);class Ho extends T1{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ho.currentPopupAction&&Ho.currentPopupAction.cancel(),Ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Us(this.filter.length===1,"Popup operations only handle one event");const e=J_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OP.get())};e()}}Ho.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP="pendingRedirect",cf=new Map;class MP extends T1{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=cf.get(this.auth._key());if(!e){try{const s=await kP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}cf.set(this.auth._key(),e)}return this.bypassAuthState||cf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kP(i,e){const t=LP(e),s=VP(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function PP(i,e){cf.set(i._key(),e)}function VP(i){return Ns(i._redirectPersistence)}function LP(i){return uf(xP,i.config.apiKey,i.name)}async function UP(i,e,t=!1){if(On(i.app))return Promise.reject(xs(i));const s=qa(i),a=IP(s,e),c=await new MP(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=10*60*1e3;class zP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!S1(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Yi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jP&&this.cachedEventUids.clear(),this.cachedEventUids.has(DS(e))}saveEventToCache(e){this.cachedEventUids.add(DS(e)),this.lastProcessedEventTime=Date.now()}}function DS(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function S1({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function BP(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return S1(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(i,e={}){return Br(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HP=/^https?/;async function GP(i){if(i.config.emulator)return;const{authorizedDomains:e}=await FP(i);for(const t of e)try{if(KP(t))return}catch{}Ti(i,"unauthorized-domain")}function KP(i){const e=Dg(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!HP.test(t))return!1;if(qP.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=new yc(3e4,6e4);function OS(){const i=Qi().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function QP(i){return new Promise((e,t)=>{var s,a,l;function c(){OS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{OS(),t(Yi(i,"network-request-failed"))},timeout:YP.get()})}if(!((a=(s=Qi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Qi().gapi)===null||l===void 0)&&l.load)c();else{const d=zk("iframefcb");return Qi()[d]=()=>{gapi.load?c():t(Yi(i,"network-request-failed"))},a1(`${jk()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw hf=null,e})}let hf=null;function $P(i){return hf=hf||QP(i),hf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=new yc(5e3,15e3),XP="__/auth/iframe",JP="emulator/auth/iframe",ZP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t4(i){const e=i.config;be(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Y_(e,JP):`https://${i.config.authDomain}/${XP}`,s={apiKey:e.apiKey,appName:i.name,v:La},a=e4.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ol(s).slice(1)}`}async function n4(i){const e=await $P(i),t=Qi().gapi;return be(t,i,"internal-error"),e.open({where:document.body,url:t4(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZP,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Yi(i,"network-request-failed"),d=Qi().setTimeout(()=>{l(c)},WP.get());function p(){Qi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s4=500,r4=600,a4="_blank",o4="http://localhost";class xS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l4(i,e,t,s=s4,a=r4){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p=Object.assign(Object.assign({},i4),{width:s.toString(),height:a.toString(),top:l,left:c}),g=Tn().toLowerCase();t&&(d=ZA(g)?a4:t),XA(g)&&(e=e||o4,p.scrollbars="yes");const y=Object.entries(p).reduce((b,[O,V])=>`${b}${O}=${V},`,"");if(Dk(g)&&d!=="_self")return u4(e||"",d),new xS(null);const T=window.open(e||"",d,y);be(T,i,"popup-blocked");try{T.focus()}catch{}return new xS(T)}function u4(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4="__/auth/handler",h4="emulator/auth/handler",f4=encodeURIComponent("fac");async function MS(i,e,t,s,a,l){be(i.config.authDomain,i,"auth-domain-config-required"),be(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:La,eventId:a};if(e instanceof u1){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",Yp(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof Ec){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await i._getAppCheckToken(),g=p?`#${f4}=${encodeURIComponent(p)}`:"";return`${d4(i)}?${ol(d).slice(1)}${g}`}function d4({config:i}){return i.emulator?Y_(i,h4):`https://${i.authDomain}/${c4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="webStorageSupport";class m4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g1,this._completeRedirectFn=UP,this._overrideRedirectResult=PP}async _openPopup(e,t,s,a){var l;Us((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await MS(e,t,s,Dg(),a);return l4(e,c,J_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await MS(e,t,s,Dg(),a);return _P(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Us(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await n4(e),s=new zP(e);return t.register("authEvent",a=>(be(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kp,{type:Kp},a=>{var l;const c=(l=a?.[0])===null||l===void 0?void 0:l[Kp];c!==void 0&&t(!!c),Ti(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return s1()||JA()||$_()}}const p4=m4;var kS="@firebase/auth",PS="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y4(i){Nr(new Ms("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;be(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r1(i)},g=new Vk(s,a,l,p);return Kk(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Nr(new Ms("auth-internal",e=>{const t=qa(e.getProvider("auth").getImmediate());return(s=>new g4(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ai(kS,PS,_4(i)),ai(kS,PS,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=5*60,E4=qS("authIdTokenMaxAge")||v4;let VS=null;const T4=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>E4)return;const a=t?.token;VS!==a&&(VS=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function S4(i=Xf()){const e=rc(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Gk(i,{popupRedirectResolver:p4,persistence:[RP,mP,g1]}),s=qS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=T4(l.toString());cP(t,c,()=>c(t.currentUser)),uP(t,d=>c(d))}}const a=BS("auth");return a&&Yk(t,`http://${a}`),t}function b4(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Lk({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=Yi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",b4().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y4("Browser");const w4={apiKey:"AIzaSyD-EnuWkZgnjb6hnaP4LhUIZvxSCf5tiIo",authDomain:"game-of-trust-675c9.firebaseapp.com",projectId:"game-of-trust-675c9",storageBucket:"game-of-trust-675c9.firebasestorage.app",messagingSenderId:"72708199445",appId:"1:72708199445:web:ce23ac49a6c15fe7f02a1c",measurementId:"G-K3GSYXR89X"},Ad=$S(w4);C2(Ad);const Rs=RM(Ad),ic=S4(Ad),Sc=uk(Ad,"us-central1");FA(Sc,"localhost",5001);const A4=({onAuthSuccess:i})=>{const[e,t]=Ve.useState(!0),[s,a]=Ve.useState(""),[l,c]=Ve.useState(""),[d,p]=Ve.useState(""),[g,y]=Ve.useState(!1),[T,b]=Ve.useState(""),O=async V=>{V.preventDefault(),y(!0),b("");try{if(e){const Y=await lP(ic,s,l);i(Y.user.uid)}else{if(!d.trim()){b("Username is required for registration");return}const Y=await oP(ic,s,l);await FM(_r(Rs,"usernames",Y.user.uid),{username:d.trim(),createdAt:new Date().toISOString()}),i(Y.user.uid)}}catch(Y){b(Y.message||"An error occurred")}finally{y(!1)}};return F.jsxs("div",{className:"max-w-md mx-auto mt-8 p-8 bg-gray-900 rounded-xl shadow-2xl border border-cyan-500/30 backdrop-blur-sm",children:[F.jsx("h2",{className:"text-3xl font-bold text-center mb-8 text-cyan-400 glow-text",children:e?"Login":"Sign Up"}),F.jsxs("form",{onSubmit:O,className:"space-y-6",children:[F.jsxs("div",{className:"space-y-2",children:[F.jsx("label",{className:"block text-sm font-medium text-cyan-300",children:"Email:"}),F.jsx("input",{type:"email",value:s,onChange:V=>a(V.target.value),required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"})]}),F.jsxs("div",{className:"space-y-2",children:[F.jsx("label",{className:"block text-sm font-medium text-cyan-300",children:"Password:"}),F.jsx("input",{type:"password",value:l,onChange:V=>c(V.target.value),required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"})]}),!e&&F.jsxs("div",{className:"space-y-2",children:[F.jsx("label",{className:"block text-sm font-medium text-cyan-300",children:"Username:"}),F.jsx("input",{type:"text",value:d,onChange:V=>p(V.target.value),required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"})]}),T&&F.jsx("div",{className:"text-red-300 text-sm text-center bg-red-900/30 p-3 rounded-lg border border-red-500/50",children:T}),F.jsx("button",{type:"submit",disabled:g,className:"w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",children:g?"Loading...":e?"Login":"Sign Up"})]}),F.jsxs("button",{onClick:()=>t(!e),className:"w-full mt-6 py-3 px-6 bg-gray-800 text-cyan-300 font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20",children:["Switch to ",e?"Sign Up":"Login"]})]})},Gf=async i=>{try{const e=await BM(_r(Rs,"usernames",i));return e.exists()?e.data().username:null}catch(e){return console.error("Error fetching username:",e),null}},Ui=18,b1=({game:i,currentUser:e,onCellClick:t,onAnimationComplete:s,gridSize:a=60,onShapeDrop:l,selectedShape:c,onShapePlace:d})=>{const[p,g]=Ve.useState(null),[y,T]=Ve.useState(0),[b,O]=Ve.useState(!1),V=Ve.useRef(!1),[Y,K]=Ve.useState([]),[ce,re]=Ve.useState(null),[oe,Ce]=Ve.useState(null),[pe,Ne]=Ve.useState(0),[k,R]=Ve.useState(!1),[C,M]=Ve.useState([]),[P,N]=Ve.useState(!1),[A,ke]=Ve.useState(null);Ve.useEffect(()=>{const de=()=>{V.current=!0},he=()=>{V.current=!1};return window.addEventListener("mousedown",de),window.addEventListener("mouseup",he),window.addEventListener("dragend",he),()=>{window.removeEventListener("mousedown",de),window.removeEventListener("mouseup",he),window.removeEventListener("dragend",he)}},[]);const De=de=>{const he={};for(let Ee=0;Ee<a;Ee++){he[`row${Ee}`]=[];for(let ge=0;ge<a;ge++){const Ie=ue(de,Ee,ge),ve=de[`row${Ee}`]?.[ge]||0;if(ve>0)he[`row${Ee}`][ge]=Ie===2||Ie===3?ve:0;else if(Ie===3){const Me=Ge(de,Ee,ge);Me.player1>Me.player2?he[`row${Ee}`][ge]=1:Me.player2>Me.player1?he[`row${Ee}`][ge]=2:he[`row${Ee}`][ge]=Math.random()>.5?1:2}else he[`row${Ee}`][ge]=0}}return he},H=(de,he)=>{for(let Ee=0;Ee<a;Ee++){const ge=`row${Ee}`,Ie=de[ge]||[],ve=he[ge]||[];if(Ie.length!==ve.length)return!1;for(let Me=0;Me<a;Me++)if((Ie[Me]||0)!==(ve[Me]||0))return!1}return!0},ee=de=>Y.length===0?!1:!!(H(de,Y[Y.length-1])||Y.length>=2&&H(de,Y[Y.length-2])),ue=(de,he,Ee)=>{let ge=0;for(let Ie=-1;Ie<=1;Ie++)for(let ve=-1;ve<=1;ve++){if(Ie===0&&ve===0)continue;const Me=(he+Ie+a)%a,Et=(Ee+ve+a)%a;(de[`row${Me}`]?.[Et]||0)>0&&ge++}return ge},Ge=(de,he,Ee)=>{let ge=0,Ie=0;for(let ve=-1;ve<=1;ve++)for(let Me=-1;Me<=1;Me++){if(ve===0&&Me===0)continue;const Et=(he+ve+a)%a,Rn=(Ee+Me+a)%a,es=de[`row${Et}`]?.[Rn]||0;es===1?ge++:es===2&&Ie++}return{player1:ge,player2:Ie}};Ve.useEffect(()=>{i.state==="fighting"&&!b&&y<10&&(O(!0),g(JSON.parse(JSON.stringify(i.grid))),T(0),K([]))},[i.state,b,i.grid]),Ve.useEffect(()=>{if(b&&p&&y<1e3){const de=setTimeout(()=>{if(ee(p)){O(!1),s&&s();return}if(gl(p)){O(!1),s&&s();return}const Ee=De(p);K(ge=>[...ge,JSON.parse(JSON.stringify(p))].slice(-2)),g(Ee),T(ge=>ge+1)},50);return()=>clearTimeout(de)}else b&&y>=1e3&&(O(!1),s&&s())},[b,p,y,s,Y]);const D=()=>{const de=JSON.parse(JSON.stringify(i.grid));R(!0),Ce(de),ke(de),Ne(0),M([de]),N(!0)},Z=()=>{R(!1),Ce(null),ke(null),Ne(0),M([]),N(!1)},ne=()=>{N(!1)},te=()=>{N(!0)},_e=()=>{A&&(Ce(JSON.parse(JSON.stringify(A))),Ne(0),M([JSON.parse(JSON.stringify(A))]),N(!1))},Le=()=>{oe&&Dt()},Ae=()=>{if(C.length>1){const de=[...C];de.pop();const he=de[de.length-1];Ce(JSON.parse(JSON.stringify(he))),M(de),Ne(Math.max(0,pe-1)),N(!1)}},Dt=()=>{if(!oe)return;if(pe>=200){N(!1);return}const de=De(oe);M(he=>[...he,JSON.parse(JSON.stringify(oe))].slice(-200)),Ce(de),Ne(he=>he+1)};Ve.useEffect(()=>{if(k&&oe&&P&&pe<200){const de=setTimeout(Dt,150);return()=>clearTimeout(de)}},[k,oe,P,pe]);const ft=e?i.user1?.uid===e.uid?1:i.user2?.uid===e.uid?2:0:0,ui=(de,he)=>{ft===0||!(ft===1&&de<Ui||ft===2&&de>=a-Ui)||(c&&d?d(c,de,he):t(de,he))},Gn=(de,he)=>{if(c&&nn){const Ee=ft===1&&de<Ui||ft===2&&de>=a-Ui;re(Ee?{row:de,col:he}:null)}else re(null)},Xi=(de,he)=>{if(!c||!ce)return!1;const Ee=de-ce.row,ge=he-ce.col;return Ee<0||Ee>=c.pattern.length||ge<0||ge>=c.pattern[Ee].length?!1:c.pattern[Ee][ge]===1},Ji=(de,he,Ee)=>{ft===0||!nn||!de.pattern.every((Ie,ve)=>Ie.every((Me,Et)=>{if(Me===0)return!0;const Rn=he+ve,es=Ee+Et;return Rn<0||Rn>=a||es<0||es>=a?!1:ft===1&&Rn<Ui||ft===2&&Rn>=a-Ui}))||l&&l(de,he,Ee)},Zi=de=>{de.preventDefault(),de.dataTransfer.dropEffect="copy"},Fr=(de,he,Ee)=>{de.preventDefault();try{const ge=de.dataTransfer.getData("shape");if(ge){const Ie=JSON.parse(ge);Ji(Ie,he,Ee)}}catch(ge){console.error("Error handling shape drop:",ge)}},Ha=(de,he)=>{let Ee;k&&oe?Ee=oe:b&&p?Ee=p:Ee=i.grid;const ge=Ee[`row${de}`];return ge&&ge[he]||0},nn=!k&&!b&&(i.state==="waiting"||i.state==="started"),gl=de=>{let he=0,Ee=0;for(let ge=0;ge<a;ge++){const Ie=de[`row${ge}`]||[];for(let ve=0;ve<a;ve++){const Me=Ie[ve]||0;Me===1?he++:Me===2&&Ee++}}return he===0&&Ee===0?"tie":he===0?"player2":Ee===0?"player1":null},qr=()=>{const de=[];for(let he=0;he<a;he++){const Ee=[];for(let ge=0;ge<a;ge++){const Ie=Ha(he,ge),ve=nn&&(ft===1&&he<Ui||ft===2&&he>=a-Ui);let Me="";const Et=Xi(he,ge);Ie===1?Me="bg-blue-500":Ie===2?Me="bg-red-500":Et?Me=ft===1?"bg-blue-300":"bg-red-300":ve?Me="bg-gray-300":Me="bg-gray-700",Ee.push(F.jsx("div",{className:`w-3 h-3 border border-gray-600 ${Me} ${ve||c?"cursor-pointer":"cursor-not-allowed"}`,onMouseEnter:()=>{V.current&&ui(he,ge),Gn(he,ge)},onMouseMove:()=>Gn(he,ge),onClick:()=>{ui(he,ge)},onDragOver:Zi,onDrop:Rn=>Fr(Rn,he,ge)},`${he}-${ge}`))}de.push(F.jsx("div",{className:"flex",children:Ee},he))}return de},Rt=ft===1?{bg:"bg-slate-900/95",border:"border-blue-500/30",text:"text-blue-300",textSecondary:"text-blue-400",button:"bg-blue-600 hover:bg-blue-700",accent:"bg-blue-500"}:ft===2?{bg:"bg-slate-900/95",border:"border-red-500/30",text:"text-red-300",textSecondary:"text-red-400",button:"bg-red-600 hover:bg-red-700",accent:"bg-red-500"}:{bg:"bg-slate-900/95",border:"border-gray-500/30",text:"text-gray-300",textSecondary:"text-gray-400",button:"bg-gray-600 hover:bg-gray-700",accent:"bg-gray-500"};return F.jsxs("div",{className:`${Rt.bg} ${Rt.border} border rounded-lg p-4 h-screen flex flex-col`,children:[F.jsxs("div",{className:"mb-4 flex-shrink-0",children:[F.jsxs("div",{className:"flex items-center justify-between mb-3",children:[F.jsxs("div",{className:`${Rt.button} text-white px-4 py-2 rounded font-medium`,children:["PLAYER ",ft]}),ft>0&&F.jsx("div",{className:"flex items-center gap-2",children:k?F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("button",{onClick:Z,className:"bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm",children:"EXIT"}),F.jsx("button",{onClick:_e,className:`${Rt.button} text-white px-3 py-1 rounded text-sm`,children:"RESET"}),F.jsxs("div",{className:`${Rt.text} px-3 py-1 bg-gray-800 rounded text-sm`,children:[pe,"/200"]}),P?F.jsx("button",{onClick:ne,className:"bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm",children:"PAUSE"}):F.jsx("button",{onClick:te,className:"bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm",children:"PLAY"}),F.jsx("button",{onClick:Le,disabled:pe>=200,className:`${Rt.button} text-white px-3 py-1 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed`,children:"+"}),F.jsx("button",{onClick:Ae,disabled:pe<=0,className:`${Rt.button} text-white px-3 py-1 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed`,children:"-"})]}):F.jsx("button",{onClick:D,className:`${Rt.button} text-white px-4 py-2 rounded font-medium`,children:"PREVIEW"})})]}),nn&&F.jsx("div",{className:"bg-gray-800 rounded p-2 mb-2",children:F.jsxs("p",{className:`${Rt.text} text-sm text-center`,children:["EDITABLE ROWS:"," ",ft===1?`0-${Ui-1}`:`${a-Ui}-${a-1}`]})}),b&&F.jsx("div",{className:"bg-gray-800 rounded p-2 mb-2",children:F.jsxs("div",{className:"flex items-center justify-between",children:[F.jsxs("p",{className:`${Rt.text} text-sm font-medium`,children:["SIMULATION: ",y," / 1000"]}),F.jsx("div",{className:"w-32 h-2 bg-gray-700 rounded overflow-hidden",children:F.jsx("div",{className:`h-full ${Rt.accent} transition-all duration-100`,style:{width:`${y/1e3*100}%`}})})]})}),i.state==="fighting"&&!b&&i.winner&&F.jsx("div",{className:"bg-green-800 rounded p-3 mb-2",children:F.jsxs("div",{className:"text-center",children:[F.jsx("h3",{className:"text-lg font-bold text-green-300 mb-1",children:"BATTLE COMPLETE"}),i.winner==="tie"?F.jsx("p",{className:"text-green-400",children:"DRAW"}):F.jsxs("p",{className:"text-green-400",children:["PLAYER"," ",i.winner==="player1"?"1":"2"," WINS"]})]})}),i.state==="fighting"&&!b&&!i.winner&&F.jsx("div",{className:"bg-gray-800 rounded p-2 mb-2",children:F.jsx("p",{className:`${Rt.text} text-sm text-center`,children:"PROCESSING BATTLE..."})}),k&&F.jsx("div",{className:"bg-gray-800 rounded p-2 mb-2",children:F.jsxs("div",{className:"flex items-center justify-between",children:[F.jsx("p",{className:`${Rt.text} text-sm`,children:"PREVIEW MODE"}),F.jsx("div",{className:"w-32 h-2 bg-gray-700 rounded overflow-hidden",children:F.jsx("div",{className:`h-full ${Rt.accent} transition-all duration-100`,style:{width:`${pe/200*100}%`}})})]})})]}),F.jsx("div",{className:"flex-1 flex items-center justify-center",children:F.jsx("div",{className:"bg-gray-900 rounded border border-gray-700 p-2",children:qr()})})]})},R4=Td(Sc,"createGame"),I4=Td(Sc,"joinGame");Td(Sc,"startFightingPhase");const C4=Td(Sc,"scheduleGameTransition"),N4=async(i,e)=>{try{return(await R4({userId:i,username:e})).data}catch(t){throw console.error("Error calling createGame function:",t),t}},D4=async(i,e,t)=>{try{return(await I4({gameId:i,userId:e,username:t})).data}catch(s){throw console.error("Error calling joinGame function:",s),s}},O4=async i=>{try{return(await C4({gameId:i})).data}catch(e){throw console.error("Error calling scheduleGameTransition function:",e),e}},x4=({playerNumber:i,onShapeSelect:e,selectedShape:t})=>{const[s,a]=Ve.useState(0),l=[{id:"block",name:"Block",pattern:[[1,1],[1,1]],color:"#1e40af",description:"Still life - never changes",category:"Still Life"},{id:"blinker",name:"Blinker",pattern:[[1,1,1]],color:"#1e40af",description:"Oscillates between horizontal and vertical",category:"Oscillator"},{id:"glider",name:"Glider",pattern:[[0,1,0],[0,0,1],[1,1,1]],color:"#1e40af",description:"Moves diagonally across the board",category:"Spaceship"},{id:"lwss",name:"Lightweight Spaceship",pattern:[[0,1,1,1,1],[1,0,0,0,1],[0,0,0,0,1],[1,0,0,1,0]],color:"#1e40af",description:"Fast horizontal spaceship",category:"Spaceship"},{id:"mwss",name:"Middleweight Spaceship",pattern:[[0,0,1,1,1,1,1],[1,0,0,0,0,0,1],[0,0,0,0,0,0,1],[1,0,0,0,0,1,0],[0,0,1,1,0,0,0]],color:"#1e40af",description:"Medium-sized spaceship",category:"Spaceship"},{id:"pulsar",name:"Pulsar",pattern:[[0,0,1,1,1,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[0,0,1,1,1,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,1,1,1,0,0],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,1,1,1,0,0]],color:"#1e40af",description:"Large period-3 oscillator",category:"Oscillator"},{id:"gosper_gun",name:"Gosper Glider Gun",pattern:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],color:"#1e40af",description:"Infinite glider generator",category:"Gun"},{id:"r_pentomino",name:"R-Pentomino",pattern:[[0,1,1],[1,1,0],[0,1,0]],color:"#1e40af",description:"Chaotic pattern that stabilizes after 1103 generations",category:"Methuselah"},{id:"acorn",name:"Acorn",pattern:[[0,1,0,0,0,0,0],[0,0,0,1,0,0,0],[1,1,0,0,1,1,1]],color:"#1e40af",description:"Long-lived pattern that creates many gliders",category:"Methuselah"},{id:"diehard",name:"Diehard",pattern:[[0,0,0,0,0,0,1,0],[1,1,0,0,0,0,0,0],[0,1,0,0,0,1,1,1]],color:"#1e40af",description:"Dies after exactly 130 generations",category:"Methuselah"},{id:"copperhead",name:"Copperhead",pattern:[[0,1,1,0,0,1,1,0],[1,0,0,1,1,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,0,0,1,0,0],[0,0,1,0,0,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,1,1,0,0,1],[0,1,1,0,0,1,1,0]],color:"#1e40af",description:"Period-12 spaceship",category:"Spaceship"}],c=(O,V)=>{let Y=O;for(let K=0;K<V;K++)Y=d(Y);return Y},d=O=>{const V=O.length,Y=O[0].length,K=[];for(let ce=0;ce<Y;ce++){K[ce]=[];for(let re=0;re<V;re++)K[ce][re]=O[V-1-re][ce]}return K},p=O=>{const V={...O,pattern:c(O.pattern,s)};e(V)},g=()=>{a(O=>(O+1)%4)},y=()=>{a(O=>(O-1+4)%4)},T=O=>{const V=c(O.pattern,s),Y=[];for(let K=0;K<V.length;K++){const ce=[];for(let re=0;re<V[K].length;re++){const oe=V[K][re];ce.push(F.jsx("div",{className:`w-2 h-2 border inline-block ${oe===1?i===1?"bg-cyan-400 border-cyan-300 shadow-sm shadow-cyan-400/30":"bg-blue-400 border-blue-300 shadow-sm shadow-blue-400/30":"bg-slate-700 border-slate-600"}`},`${K}-${re}`))}Y.push(F.jsx("div",{className:"flex",children:ce},K))}return Y},b=[...new Set(l.map(O=>O.category))];return F.jsxs("div",{className:"bg-slate-900 p-6 rounded-xl min-w-80 max-w-96 border border-blue-500/30 shadow-2xl shadow-blue-500/10",children:[F.jsxs("div",{className:"flex items-center justify-between mb-4",children:[F.jsx("h3",{className:"text-xl font-bold text-blue-400",children:"Pattern Library"}),F.jsxs("div",{className:"flex gap-2",children:[F.jsx("button",{onClick:y,className:"p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/25",title:"Rotate Counterclockwise",children:"↺"}),F.jsx("button",{onClick:g,className:"p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/25",title:"Rotate Clockwise",children:"↻"})]})]}),F.jsx("div",{className:"text-sm text-blue-300 mb-4",children:"Select a pattern to place on the board"}),F.jsx("div",{className:"space-y-6 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-blue-500 scrollbar-thumb-rounded-md hover:scrollbar-thumb-blue-400",children:b.map(O=>F.jsxs("div",{children:[F.jsx("h4",{className:"text-sm font-semibold text-blue-300 mb-2 px-2",children:O}),F.jsx("div",{className:"space-y-2",children:l.filter(V=>V.category===O).map(V=>F.jsx("div",{className:`bg-slate-800 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${t?.id===V.id?"border-blue-400 bg-blue-900/20 shadow-lg shadow-blue-500/20":"border-slate-600 hover:border-blue-500/50 hover:bg-slate-700"}`,onClick:()=>p(V),children:F.jsxs("div",{className:"flex items-start gap-3",children:[F.jsx("div",{className:"flex flex-col items-start",children:T(V)}),F.jsxs("div",{className:"flex-1 min-w-0",children:[F.jsx("div",{className:"text-sm font-semibold text-blue-300 mb-1",children:V.name}),F.jsx("div",{className:"text-xs text-blue-400/80",children:V.description})]})]})},V.id))})]},O))}),F.jsxs("div",{className:"text-xs text-blue-400/80 mt-4 p-3 bg-slate-800 rounded-lg border border-blue-500/20",children:[F.jsx("div",{className:"font-semibold mb-1",children:"Controls:"}),F.jsx("div",{children:"• Select a pattern to activate placement mode"}),F.jsx("div",{children:"• Use rotation buttons to orient patterns"}),F.jsx("div",{children:"• Click on the board to place selected pattern"})]})]})},M4=({game:i,currentUser:e,onCellClick:t,onShapeDrop:s,gridSize:a=60})=>{const[l,c]=Ve.useState(null),d=()=>e?i.user1?.uid===e.uid?1:i.user2?.uid===e.uid?2:0:0,p=y=>{c(y)},g=(y,T,b)=>{s&&s(y,T,b)};return F.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8",children:F.jsx("div",{className:"max-w-7xl mx-auto",children:F.jsxs("div",{className:"flex gap-8 items-start",children:[F.jsx("div",{className:"w-96 flex-shrink-0",children:F.jsx(x4,{playerNumber:d(),onShapeSelect:p,selectedShape:l})}),F.jsx("div",{className:"flex-1 flex justify-center",children:F.jsx(b1,{game:i,currentUser:e,onCellClick:t,onShapeDrop:s,selectedShape:l,onShapePlace:g,gridSize:a})})]})})})},k4=()=>{const[i,e]=Ve.useState(null),[t,s]=Ve.useState(""),[a,l]=Ve.useState(!1),[c,d]=Ve.useState(null),[p,g]=Ve.useState(!1),[y,T]=Ve.useState(!1),[b,O]=Ve.useState(!0),[V,Y]=Ve.useState(0),[K,ce]=Ve.useState(!1);Ve.useEffect(()=>ic.onAuthStateChanged(async A=>{d(A),A&&await re(A.uid),O(!1)}),[]);const re=async N=>{try{const A=AM(Rs,"games"),ke=hS(A,Xh("user1.uid","==",N),Xh("state","!=","ended")),De=hS(A,Xh("user2.uid","==",N),Xh("state","!=","ended")),[H,ee]=await Promise.all([mS(ke),mS(De)]);if(H.empty){if(!ee.empty){const ue=ee.docs[0];s(ue.id),e({id:ue.id,...ue.data()})}}else{const ue=H.docs[0];s(ue.id),e({id:ue.id,...ue.data()})}}catch(A){console.error("Error checking for existing game:",A)}},oe=async()=>{if(c){l(!0);try{const N=await Gf(c.uid);if(!N){alert("Username not found. Please set up your username first."),l(!1);return}const A=await N4(c.uid,N);A.success?(s(A.gameId),T(!0)):alert("Failed to create game. Please try again.")}catch(N){console.error("Error creating game:",N),alert("Failed to create game. Please try again.")}finally{l(!1)}}},Ce=async N=>{if(c)try{const A=await Gf(c.uid);if(!A){alert("Username not found. Please set up your username first.");return}(await D4(N,c.uid,A)).success&&s(N)}catch(A){console.error("Error joining game:",A),alert("Failed to join game. Please check the game ID and try again.")}},pe=async()=>{if(!t||!c||!i)return;const N=_r(Rs,"games",t),ke=i.user1?.uid===c.uid?"user1.ready":"user2.ready";try{await Lo(N,{[ke]:!p})}catch(De){console.error("Error updating ready state:",De)}},Ne=async()=>{if(!t||!c)return;const N=_r(Rs,"games",t);try{await Lo(N,{state:"ended"}),e(null),s(""),g(!1),T(!1)}catch(A){console.error("Error aborting game:",A)}},k=async()=>{if(!t||!c)return;const N=_r(Rs,"games",t);try{await Lo(N,{state:"waiting","user1.ready":!1,"user2.ready":!1,grid:R(60),startedAt:null,fightingStartedAt:null,finalGrid:null,winner:null,timerStarted:!1}),g(!1),ce(!1),Y(0)}catch(A){console.error("Error restarting game:",A)}},R=N=>{const A={};for(let ke=0;ke<N;ke++)A[`row${ke}`]=Array(N).fill(0);return A},C=async(N,A)=>{if(!t||!c||!i)return;const ke=i.user1?.uid===c.uid?1:i.user2?.uid===c.uid?2:0;if(ke===0)return;const De=_r(Rs,"games",t);try{const H={...i.grid};H[`row${N}`]||(H[`row${N}`]=Array(60).fill(0));const ee=H[`row${N}`][A]||0;H[`row${N}`][A]=ee===0?ke:0,await Lo(De,{grid:H})}catch(H){console.error("Error updating grid:",H)}},M=()=>{ce(!0)},P=async(N,A,ke)=>{if(!t||!c||!i)return;const De=i.user1?.uid===c.uid?1:i.user2?.uid===c.uid?2:0;if(De===0)return;const H=_r(Rs,"games",t);try{const ee={...i.grid};N.pattern.forEach((ue,Ge)=>{ue.forEach((D,Z)=>{if(D===1){const ne=A+Ge,te=ke+Z;ne>=0&&ne<60&&te>=0&&te<60&&(ee[`row${ne}`]||(ee[`row${ne}`]=Array(60).fill(0)),ee[`row${ne}`][te]===0&&(ee[`row${ne}`][te]=De))}})}),await Lo(H,{grid:ee})}catch(ee){console.error("Error dropping shape:",ee)}};if(Ve.useEffect(()=>{if(i?.state==="started"&&i.startedAt){const N=i.startedAt.toDate?i.startedAt.toDate():new Date(i.startedAt),A=new Date(N.getTime()+2*60*1e3),ke=setInterval(()=>{const De=new Date,H=Math.max(0,Math.ceil((A.getTime()-De.getTime())/1e3));Y(H),H===0&&(clearInterval(ke),console.log("Client-side timer reached zero - waiting for server to transition game"))},1e3);return()=>clearInterval(ke)}},[i?.state,i?.startedAt]),Ve.useEffect(()=>{if(!t)return;const N=_r(Rs,"games",t);return qM(N,ke=>{if(ke.exists()){const De={id:ke.id,...ke.data()};if(De.state==="ended"){e(null),s(""),g(!1),T(!1);return}if(e(De),c){const ee=De.user1?.uid===c.uid?De.user1?.ready:De.user2?.ready;g(ee||!1)}De.user1?.ready&&De.user2?.ready&&De.state==="waiting"&&(async()=>{await Lo(N,{state:"started",startedAt:new Date,timerStarted:!1});try{await O4(t),console.log("Server-side timer started successfully")}catch(ee){console.error("Error starting server-side timer:",ee)}})()}})},[t,c]),i?.state==="started"){const N=Math.floor(V/60),A=V%60;return F.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-2xl p-8 border border-cyan-500/30",children:[F.jsx("h2",{className:"text-3xl font-bold text-center mb-6 text-cyan-400 glow-text",children:"🎮 Game Started! 🎮"}),F.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg mb-6 border border-cyan-500/20",children:[F.jsxs("p",{className:"text-center text-cyan-300 mb-4 text-lg",children:["Players: ",i.user1?.username," vs"," ",i.user2?.username]}),F.jsxs("div",{className:"text-center mb-6",children:[F.jsxs("h3",{className:"text-2xl font-bold text-cyan-400 mb-3 glow-text",children:["⏰ Time Remaining: ",N,":",A.toString().padStart(2,"0")]}),F.jsx("p",{className:"text-gray-400",children:"Prepare your strategy! The battle begins automatically when the timer reaches zero."})]}),F.jsx("div",{className:"text-center",children:F.jsx("button",{onClick:Ne,className:"py-3 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Abort Game"})})]}),F.jsx(M4,{game:i,currentUser:c,onCellClick:C,onShapeDrop:P,gridSize:60})]})}return i?.state==="fighting"?F.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-2xl p-8 border border-cyan-500/30",children:[F.jsx("h2",{className:"text-3xl font-bold text-center mb-6 text-cyan-400 glow-text",children:"⚔️ Battle in Progress! ⚔️"}),F.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg mb-6 border border-cyan-500/20",children:[F.jsxs("p",{className:"text-center text-cyan-300 mb-6 text-lg",children:["Players: ",i.user1?.username," vs"," ",i.user2?.username]}),F.jsxs("div",{className:"flex justify-center space-x-4",children:[K&&F.jsx("button",{onClick:k,className:"py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",children:"🔄 Restart Game"}),F.jsx("button",{onClick:Ne,className:"py-3 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Abort Game"})]})]}),F.jsx(b1,{game:i,currentUser:c,onCellClick:C,onAnimationComplete:M,gridSize:60})]}):F.jsx("div",{className:"bg-gray-800 rounded-xl shadow-2xl p-8 border border-cyan-500/30",children:b?F.jsx("div",{className:"text-center py-8",children:F.jsx("h2",{className:"text-xl font-semibold text-cyan-400 animate-pulse",children:"Loading..."})}):F.jsxs(F.Fragment,{children:[F.jsx("h2",{className:"text-3xl font-bold text-center mb-8 text-cyan-400 glow-text",children:"Create or Join Game"}),t?F.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg border border-cyan-500/20",children:[F.jsx("h3",{className:"text-2xl font-semibold mb-4 text-cyan-400 glow-text",children:"Game Lobby"}),F.jsxs("p",{className:"mb-6 text-cyan-300",children:[F.jsx("strong",{children:"Game ID:"})," ",F.jsx("span",{className:"text-cyan-400 font-mono",children:t})]}),F.jsxs("div",{className:"mb-6",children:[F.jsx("h4",{className:"text-lg font-medium mb-4 text-cyan-300",children:"Players:"}),F.jsxs("div",{className:"space-y-3",children:[F.jsxs("div",{className:"flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-cyan-500/30",children:[F.jsx("span",{className:"font-medium text-cyan-300",children:i?.user1?.username||"Player 1"}),F.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${i?.user1?.ready?"bg-green-500/20 text-green-400 border border-green-500/50":"bg-gray-700 text-gray-400 border border-gray-600"}`,children:i?.user1?.ready?"✓ Ready":"○ Not Ready"})]}),F.jsxs("div",{className:"flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-cyan-500/30",children:[F.jsx("span",{className:"font-medium text-cyan-300",children:i?.user2?.username||"Waiting for Player 2..."}),i?.user2&&F.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${i?.user2?.ready?"bg-green-500/20 text-green-400 border border-green-500/50":"bg-gray-700 text-gray-400 border border-gray-600"}`,children:i?.user2?.ready?"✓ Ready":"○ Not Ready"})]})]})]}),i?.user2&&F.jsxs("div",{className:"mb-6",children:[F.jsx("button",{onClick:pe,className:`w-full py-3 px-6 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 ${p?"bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-500 hover:to-orange-500 focus:ring-yellow-400 shadow-lg shadow-yellow-500/25":"bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-500 hover:to-teal-500 focus:ring-green-400 shadow-lg shadow-green-500/25"}`,children:p?"Cancel Ready":"Ready to Start"}),i?.user1?.ready&&i?.user2?.ready&&F.jsx("p",{className:"text-center text-cyan-400 font-medium mt-4 animate-pulse glow-text",children:"Starting game..."})]}),y&&!i?.user2&&F.jsxs("div",{className:"mb-6 bg-cyan-900/20 p-4 rounded-lg border border-cyan-500/30",children:[F.jsx("p",{className:"text-cyan-300 mb-2",children:"Waiting for another player to join..."}),F.jsxs("p",{className:"text-cyan-400",children:["Share this Game ID with your friend:"," ",F.jsx("strong",{className:"font-mono text-cyan-300",children:t})]})]}),F.jsx("div",{className:"text-center",children:F.jsx("button",{onClick:Ne,className:"py-3 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Abort Game"})})]}):F.jsxs("div",{className:"space-y-6",children:[F.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg border border-cyan-500/20",children:[F.jsx("h3",{className:"text-xl font-semibold mb-4 text-cyan-300",children:"Create New Game"}),F.jsx("button",{onClick:oe,disabled:a||!c,className:"w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",children:a?"Creating...":"Create Game"})]}),F.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg border border-cyan-500/20",children:[F.jsx("h3",{className:"text-xl font-semibold mb-4 text-cyan-300",children:"Join Existing Game"}),F.jsx("input",{type:"text",placeholder:"Enter Game ID",className:"w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 mb-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20",onKeyDown:N=>{if(N.key==="Enter"){const A=N.target.value.trim();A&&Ce(A)}}}),F.jsx("button",{onClick:()=>{const A=document.querySelector('input[placeholder="Enter Game ID"]')?.value.trim();A&&Ce(A)},disabled:!c,className:"w-full py-3 px-6 bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium rounded-lg hover:from-green-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25",children:"Join Game"})]})]})]})})};function P4(){const[i,e]=Ve.useState(null),[t,s]=Ve.useState(null),[a,l]=Ve.useState(!0);Ve.useEffect(()=>{const d=hP(ic,async p=>{if(e(p),p){const g=await Gf(p.uid);s(g)}else s(null);l(!1)});return()=>d()},[]);const c=async d=>{const p=await Gf(d);s(p)};return a?F.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center",children:F.jsx("div",{className:"text-xl text-blue-400 animate-pulse",children:"Loading..."})}):F.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",children:i?F.jsxs("div",{className:"container mx-auto px-4 py-8",children:[F.jsx("div",{className:"bg-slate-800 rounded-xl shadow-2xl p-6 mb-6 border border-blue-500/30",children:F.jsxs("div",{className:"flex justify-between items-center mb-4",children:[F.jsxs("div",{className:"text-2xl font-bold text-blue-400 drop-shadow-lg",children:["Welcome, ",t||i.email,"!"]}),F.jsx("button",{onClick:()=>ic.signOut(),className:"px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Logout"})]})}),F.jsx(k4,{})]}):F.jsx("div",{className:"flex items-center justify-center min-h-screen",children:F.jsx(A4,{onAuthSuccess:c})})})}iI.createRoot(document.getElementById("root")).render(F.jsx(Ve.StrictMode,{children:F.jsx(P4,{})}));
