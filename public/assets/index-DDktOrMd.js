(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Sp={exports:{}},bu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE;function QR(){if(cE)return bu;cE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return bu.Fragment=e,bu.jsx=t,bu.jsxs=t,bu}var hE;function $R(){return hE||(hE=1,Sp.exports=QR()),Sp.exports}var I=$R(),wp={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dE;function WR(){if(dE)return Pe;dE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function w(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,G={};function Y(x,X,se){this.props=x,this.context=X,this.refs=G,this.updater=se||k}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,X){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,X,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function fe(){}fe.prototype=Y.prototype;function re(x,X,se){this.props=x,this.context=X,this.refs=G,this.updater=se||k}var le=re.prototype=new fe;le.constructor=re,V(le,Y.prototype),le.isPureReactComponent=!0;var Se=Array.isArray,Te={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function M(x,X,se,te,pe,De){return se=De.ref,{$$typeof:i,type:x,key:X,ref:se!==void 0?se:null,props:De}}function A(x,X){return M(x.type,X,void 0,void 0,void 0,x.props)}function C(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function D(x){var X={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(se){return X[se]})}var P=/\/+/g;function L(x,X){return typeof x=="object"&&x!==null&&x.key!=null?D(""+x.key):X.toString(36)}function N(){}function ue(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(N,N):(x.status="pending",x.then(function(X){x.status==="pending"&&(x.status="fulfilled",x.value=X)},function(X){x.status==="pending"&&(x.status="rejected",x.reason=X)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function ae(x,X,se,te,pe){var De=typeof x;(De==="undefined"||De==="boolean")&&(x=null);var Ne=!1;if(x===null)Ne=!0;else switch(De){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(x.$$typeof){case i:case e:Ne=!0;break;case v:return Ne=x._init,ae(Ne(x._payload),X,se,te,pe)}}if(Ne)return pe=pe(x),Ne=te===""?"."+L(x,0):te,Se(pe)?(se="",Ne!=null&&(se=Ne.replace(P,"$&/")+"/"),ae(pe,X,se,"",function(Xn){return Xn})):pe!=null&&(C(pe)&&(pe=A(pe,se+(pe.key==null||x&&x.key===pe.key?"":(""+pe.key).replace(P,"$&/")+"/")+Ne)),X.push(pe)),1;Ne=0;var Lt=te===""?".":te+":";if(Se(x))for(var ut=0;ut<x.length;ut++)te=x[ut],De=Lt+L(te,ut),Ne+=ae(te,X,se,De,pe);else if(ut=w(x),typeof ut=="function")for(x=ut.call(x),ut=0;!(te=x.next()).done;)te=te.value,De=Lt+L(te,ut++),Ne+=ae(te,X,se,De,pe);else if(De==="object"){if(typeof x.then=="function")return ae(ue(x),X,se,te,pe);throw X=String(x),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function z(x,X,se){if(x==null)return x;var te=[],pe=0;return ae(x,te,"","",function(De){return X.call(se,De,pe++)}),te}function ee(x){if(x._status===-1){var X=x._result;X=X(),X.then(function(se){(x._status===0||x._status===-1)&&(x._status=1,x._result=se)},function(se){(x._status===0||x._status===-1)&&(x._status=2,x._result=se)}),x._status===-1&&(x._status=0,x._result=X)}if(x._status===1)return x._result.default;throw x._result}var ie=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ye(){}return Pe.Children={map:z,forEach:function(x,X,se){z(x,function(){X.apply(this,arguments)},se)},count:function(x){var X=0;return z(x,function(){X++}),X},toArray:function(x){return z(x,function(X){return X})||[]},only:function(x){if(!C(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Pe.Component=Y,Pe.Fragment=t,Pe.Profiler=a,Pe.PureComponent=re,Pe.StrictMode=s,Pe.Suspense=p,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Te.H.useMemoCache(x)}},Pe.cache=function(x){return function(){return x.apply(null,arguments)}},Pe.cloneElement=function(x,X,se){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var te=V({},x.props),pe=x.key,De=void 0;if(X!=null)for(Ne in X.ref!==void 0&&(De=void 0),X.key!==void 0&&(pe=""+X.key),X)!Ce.call(X,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&X.ref===void 0||(te[Ne]=X[Ne]);var Ne=arguments.length-2;if(Ne===1)te.children=se;else if(1<Ne){for(var Lt=Array(Ne),ut=0;ut<Ne;ut++)Lt[ut]=arguments[ut+2];te.children=Lt}return M(x.type,pe,void 0,void 0,De,te)},Pe.createContext=function(x){return x={$$typeof:c,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:l,_context:x},x},Pe.createElement=function(x,X,se){var te,pe={},De=null;if(X!=null)for(te in X.key!==void 0&&(De=""+X.key),X)Ce.call(X,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(pe[te]=X[te]);var Ne=arguments.length-2;if(Ne===1)pe.children=se;else if(1<Ne){for(var Lt=Array(Ne),ut=0;ut<Ne;ut++)Lt[ut]=arguments[ut+2];pe.children=Lt}if(x&&x.defaultProps)for(te in Ne=x.defaultProps,Ne)pe[te]===void 0&&(pe[te]=Ne[te]);return M(x,De,void 0,void 0,null,pe)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(x){return{$$typeof:f,render:x}},Pe.isValidElement=C,Pe.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:ee}},Pe.memo=function(x,X){return{$$typeof:g,type:x,compare:X===void 0?null:X}},Pe.startTransition=function(x){var X=Te.T,se={};Te.T=se;try{var te=x(),pe=Te.S;pe!==null&&pe(se,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(ye,ie)}catch(De){ie(De)}finally{Te.T=X}},Pe.unstable_useCacheRefresh=function(){return Te.H.useCacheRefresh()},Pe.use=function(x){return Te.H.use(x)},Pe.useActionState=function(x,X,se){return Te.H.useActionState(x,X,se)},Pe.useCallback=function(x,X){return Te.H.useCallback(x,X)},Pe.useContext=function(x){return Te.H.useContext(x)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(x,X){return Te.H.useDeferredValue(x,X)},Pe.useEffect=function(x,X,se){var te=Te.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(x,X)},Pe.useId=function(){return Te.H.useId()},Pe.useImperativeHandle=function(x,X,se){return Te.H.useImperativeHandle(x,X,se)},Pe.useInsertionEffect=function(x,X){return Te.H.useInsertionEffect(x,X)},Pe.useLayoutEffect=function(x,X){return Te.H.useLayoutEffect(x,X)},Pe.useMemo=function(x,X){return Te.H.useMemo(x,X)},Pe.useOptimistic=function(x,X){return Te.H.useOptimistic(x,X)},Pe.useReducer=function(x,X,se){return Te.H.useReducer(x,X,se)},Pe.useRef=function(x){return Te.H.useRef(x)},Pe.useState=function(x){return Te.H.useState(x)},Pe.useSyncExternalStore=function(x,X,se){return Te.H.useSyncExternalStore(x,X,se)},Pe.useTransition=function(){return Te.H.useTransition()},Pe.version="19.1.0",Pe}var fE;function kg(){return fE||(fE=1,wp.exports=WR()),wp.exports}var ke=kg(),Ap={exports:{}},Su={},Rp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE;function XR(){return mE||(mE=1,function(i){function e(z,ee){var ie=z.length;z.push(ee);e:for(;0<ie;){var ye=ie-1>>>1,x=z[ye];if(0<a(x,ee))z[ye]=ee,z[ie]=x,ie=ye;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var ee=z[0],ie=z.pop();if(ie!==ee){z[0]=ie;e:for(var ye=0,x=z.length,X=x>>>1;ye<X;){var se=2*(ye+1)-1,te=z[se],pe=se+1,De=z[pe];if(0>a(te,ie))pe<x&&0>a(De,te)?(z[ye]=De,z[pe]=ie,ye=pe):(z[ye]=te,z[se]=ie,ye=se);else if(pe<x&&0>a(De,ie))z[ye]=De,z[pe]=ie,ye=pe;else break e}}return ee}function a(z,ee){var ie=z.sortIndex-ee.sortIndex;return ie!==0?ie:z.id-ee.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,T=null,w=3,k=!1,V=!1,G=!1,Y=!1,fe=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function Se(z){for(var ee=t(g);ee!==null;){if(ee.callback===null)s(g);else if(ee.startTime<=z)s(g),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=t(g)}}function Te(z){if(G=!1,Se(z),!V)if(t(p)!==null)V=!0,Ce||(Ce=!0,L());else{var ee=t(g);ee!==null&&ae(Te,ee.startTime-z)}}var Ce=!1,M=-1,A=5,C=-1;function D(){return Y?!0:!(i.unstable_now()-C<A)}function P(){if(Y=!1,Ce){var z=i.unstable_now();C=z;var ee=!0;try{e:{V=!1,G&&(G=!1,re(M),M=-1),k=!0;var ie=w;try{t:{for(Se(z),T=t(p);T!==null&&!(T.expirationTime>z&&D());){var ye=T.callback;if(typeof ye=="function"){T.callback=null,w=T.priorityLevel;var x=ye(T.expirationTime<=z);if(z=i.unstable_now(),typeof x=="function"){T.callback=x,Se(z),ee=!0;break t}T===t(p)&&s(p),Se(z)}else s(p);T=t(p)}if(T!==null)ee=!0;else{var X=t(g);X!==null&&ae(Te,X.startTime-z),ee=!1}}break e}finally{T=null,w=ie,k=!1}ee=void 0}}finally{ee?L():Ce=!1}}}var L;if(typeof le=="function")L=function(){le(P)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ue=N.port2;N.port1.onmessage=P,L=function(){ue.postMessage(null)}}else L=function(){fe(P,0)};function ae(z,ee){M=fe(function(){z(i.unstable_now())},ee)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(z){switch(w){case 1:case 2:case 3:var ee=3;break;default:ee=w}var ie=w;w=ee;try{return z()}finally{w=ie}},i.unstable_requestPaint=function(){Y=!0},i.unstable_runWithPriority=function(z,ee){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=w;w=z;try{return ee()}finally{w=ie}},i.unstable_scheduleCallback=function(z,ee,ie){var ye=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ye+ie:ye):ie=ye,z){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ie+x,z={id:v++,callback:ee,priorityLevel:z,startTime:ie,expirationTime:x,sortIndex:-1},ie>ye?(z.sortIndex=ie,e(g,z),t(p)===null&&z===t(g)&&(G?(re(M),M=-1):G=!0,ae(Te,ie-ye))):(z.sortIndex=x,e(p,z),V||k||(V=!0,Ce||(Ce=!0,L()))),z},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(z){var ee=w;return function(){var ie=w;w=ee;try{return z.apply(this,arguments)}finally{w=ie}}}}(Ip)),Ip}var pE;function JR(){return pE||(pE=1,Rp.exports=XR()),Rp.exports}var Cp={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE;function ZR(){if(gE)return _n;gE=1;var i=kg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return _n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,_n.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},_n.flushSync=function(p){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=v,s.d.f()}},_n.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},_n.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},_n.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:k}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},_n.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=f(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},_n.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},_n.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=f(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},_n.requestFormReset=function(p){s.d.r(p)},_n.unstable_batchedUpdates=function(p,g){return p(g)},_n.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},_n.useFormStatus=function(){return c.H.useHostTransitionStatus()},_n.version="19.1.0",_n}var _E;function eI(){if(_E)return Cp.exports;_E=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Cp.exports=ZR(),Cp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE;function tI(){if(yE)return Su;yE=1;var i=JR(),e=kg(),t=eI();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(s(188))}function p(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return f(d),n;if(m===u)return f(d),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=d,u=m;else{for(var E=!1,b=d.child;b;){if(b===o){E=!0,o=d,u=m;break}if(b===u){E=!0,u=d,o=m;break}b=b.sibling}if(!E){for(b=m.child;b;){if(b===o){E=!0,o=m,u=d;break}if(b===u){E=!0,u=m,o=d;break}b=b.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),re=Symbol.for("react.consumer"),le=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function ue(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case Y:return"Profiler";case G:return"StrictMode";case Te:return"Suspense";case Ce:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case k:return"Portal";case le:return(n.displayName||"Context")+".Provider";case re:return(n._context.displayName||"Context")+".Consumer";case Se:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case M:return r=n.displayName||null,r!==null?r:ue(n.type)||"Memo";case A:r=n._payload,n=n._init;try{return ue(n(r))}catch{}}return null}var ae=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ye=[],x=-1;function X(n){return{current:n}}function se(n){0>x||(n.current=ye[x],ye[x]=null,x--)}function te(n,r){x++,ye[x]=n.current,n.current=r}var pe=X(null),De=X(null),Ne=X(null),Lt=X(null);function ut(n,r){switch(te(Ne,r),te(De,n),te(pe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Uv(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Uv(r),n=jv(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}se(pe),te(pe,n)}function Xn(){se(pe),se(De),se(Ne)}function pi(n){n.memoizedState!==null&&te(Lt,n);var r=pe.current,o=jv(r,n.type);r!==o&&(te(De,n),te(pe,o))}function Ci(n){De.current===n&&(se(pe),se(De)),Lt.current===n&&(se(Lt),_u._currentValue=ie)}var Ze=Object.prototype.hasOwnProperty,Ni=i.unstable_scheduleCallback,xi=i.unstable_cancelCallback,$r=i.unstable_shouldYield,Ya=i.unstable_requestPaint,An=i.unstable_now,Qa=i.unstable_getCurrentPriorityLevel,Wr=i.unstable_ImmediatePriority,Ys=i.unstable_UserBlockingPriority,as=i.unstable_NormalPriority,vl=i.unstable_LowPriority,Qs=i.unstable_IdlePriority,jn=i.log,$a=i.unstable_setDisableYieldValue,bt=null,it=null;function et(n){if(typeof jn=="function"&&$a(n),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(bt,n)}catch{}}var Xt=Math.clz32?Math.clz32:ve,de=Math.log,ge=Math.LN2;function ve(n){return n>>>=0,n===0?32:31-(de(n)/ge|0)|0}var _e=256,Ge=4194304;function Ve(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Be(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,m=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var b=u&134217727;return b!==0?(u=b&~m,u!==0?d=Ve(u):(E&=b,E!==0?d=Ve(E):o||(o=b&~n,o!==0&&(d=Ve(o))))):(b=u&~m,b!==0?d=Ve(b):E!==0?d=Ve(E):o||(o=u&~n,o!==0&&(d=Ve(o)))),d===0?0:r!==0&&r!==d&&(r&m)===0&&(m=d&-d,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:d}function At(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Ot(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xn(){var n=_e;return _e<<=1,(_e&4194048)===0&&(_e=256),n}function $s(){var n=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),n}function os(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function ls(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function El(n,r,o,u,d,m){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var b=n.entanglements,R=n.expirationTimes,F=n.hiddenUpdates;for(o=E&~o;0<o;){var Q=31-Xt(o),J=1<<Q;b[Q]=0,R[Q]=-1;var q=F[Q];if(q!==null)for(F[Q]=null,Q=0;Q<q.length;Q++){var H=q[Q];H!==null&&(H.lane&=-536870913)}o&=~J}u!==0&&Di(n,u,0),m!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~r))}function Di(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-Xt(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function Tl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Xt(o),d=1<<u;d&r|n[u]&r&&(n[u]|=r),o&=~d}}function Ws(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Wa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Xs(){var n=ee.p;return n!==0?n:(n=window.event,n===void 0?32:sE(n.type))}function Sc(n,r){var o=ee.p;try{return ee.p=n,r()}finally{ee.p=o}}var St=Math.random().toString(36).slice(2),Gt="__reactFiber$"+St,Ut="__reactProps$"+St,Jn="__reactContainer$"+St,bl="__reactEvents$"+St,Rf="__reactListeners$"+St,Js="__reactHandles$"+St,wc="__reactResources$"+St,Xr="__reactMarker$"+St;function Zs(n){delete n[Gt],delete n[Ut],delete n[bl],delete n[Rf],delete n[Js]}function us(n){var r=n[Gt];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Jn]||o[Gt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=qv(n);n!==null;){if(o=n[Gt])return o;n=qv(n)}return r}n=o,o=n.parentNode}return null}function Oi(n){if(n=n[Gt]||n[Jn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Mi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Rn(n){var r=n[wc];return r||(r=n[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Mt(n){n[Xr]=!0}var Sl=new Set,Xa={};function gi(n,r){cs(n,r),cs(n+"Capture",r)}function cs(n,r){for(Xa[n]=r,n=0;n<r.length;n++)Sl.add(r[n])}var Ac=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rc={},Jr={};function Ic(n){return Ze.call(Jr,n)?!0:Ze.call(Rc,n)?!1:Ac.test(n)?Jr[n]=!0:(Rc[n]=!0,!1)}function er(n,r,o){if(Ic(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function ki(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function on(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var Zr,Cc;function hs(n){if(Zr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Zr=r&&r[1]||"",Cc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zr+n+Cc}var Ja=!1;function Za(n,r){if(!n||Ja)return"";Ja=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(H){var q=H}Reflect.construct(n,[],J)}else{try{J.call()}catch(H){q=H}n.call(J.prototype)}}else{try{throw Error()}catch(H){q=H}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],b=m[1];if(E&&b){var R=E.split(`
`),F=b.split(`
`);for(d=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;d<F.length&&!F[d].includes("DetermineComponentFrameRoot");)d++;if(u===R.length||d===F.length)for(u=R.length-1,d=F.length-1;1<=u&&0<=d&&R[u]!==F[d];)d--;for(;1<=u&&0<=d;u--,d--)if(R[u]!==F[d]){if(u!==1||d!==1)do if(u--,d--,0>d||R[u]!==F[d]){var Q=`
`+R[u].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=u&&0<=d);break}}}finally{Ja=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?hs(o):""}function wl(n){switch(n.tag){case 26:case 27:case 5:return hs(n.type);case 16:return hs("Lazy");case 13:return hs("Suspense");case 19:return hs("SuspenseList");case 0:case 15:return Za(n.type,!1);case 11:return Za(n.type.render,!1);case 1:return Za(n.type,!0);case 31:return hs("Activity");default:return""}}function eo(n){try{var r="";do r+=wl(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function In(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Al(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function If(n){var r=Al(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function to(n){n._valueTracker||(n._valueTracker=If(n))}function Rl(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Al(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function ea(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Cf=/[\n"\\]/g;function jt(n){return n.replace(Cf,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Bn(n,r,o,u,d,m,E,b){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+In(r)):n.value!==""+In(r)&&(n.value=""+In(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?tr(n,E,In(r)):o!=null?tr(n,E,In(o)):u!=null&&n.removeAttribute("value"),d==null&&m!=null&&(n.defaultChecked=!!m),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+In(b):n.removeAttribute("name")}function ta(n,r,o,u,d,m,E,b){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+In(o):"",r=r!=null?""+In(r):o,b||r===n.value||(n.value=r),n.defaultValue=r}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=b?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function tr(n,r,o){r==="number"&&ea(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function ds(n,r,o,u){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+In(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function ct(n,r,o){if(r!=null&&(r=""+In(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+In(o):""}function na(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ae(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=In(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Zn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var ia=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nc(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||ia.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Il(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in r)u=r[d],r.hasOwnProperty(d)&&o[d]!==u&&Nc(n,d,u)}else for(var m in r)r.hasOwnProperty(m)&&Nc(n,m,r[m])}function Cl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function no(n){return xf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var fs=null;function ei(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ms=null,ps=null;function Nl(n){var r=Oi(n);if(r&&(n=r.stateNode)){var o=n[Ut]||null;e:switch(n=r.stateNode,r.type){case"input":if(Bn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+jt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var d=u[Ut]||null;if(!d)throw Error(s(90));Bn(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&Rl(u)}break e;case"textarea":ct(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ds(n,!!o.multiple,r,!1)}}}var Pi=!1;function xc(n,r,o){if(Pi)return n(r,o);Pi=!0;try{var u=n(r);return u}finally{if(Pi=!1,(ms!==null||ps!==null)&&(Sh(),ms&&(r=ms,n=ps,ps=ms=null,Nl(r),n)))for(r=0;r<n.length;r++)Nl(n[r])}}function sa(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Ut]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=!1;if(_i)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){ti=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{ti=!1}var Vi=null,nr=null,gs=null;function xl(){if(gs)return gs;var n,r=nr,o=r.length,u,d="value"in Vi?Vi.value:Vi.textContent,m=d.length;for(n=0;n<o&&r[n]===d[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===d[m-u];u++);return gs=d.slice(n,1<u?1-u:void 0)}function Li(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ui(){return!0}function Dl(){return!1}function Jt(n){function r(o,u,d,m,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(o=n[b],this[b]=o?o(m):m[b]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ui:Dl,this.isPropagationStopped=Dl,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),r}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Jt(st),aa=v({},st,{view:0,detail:0}),Dc=Jt(aa),so,ro,ji,oa=v({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ji&&(ji&&n.type==="mousemove"?(so=n.screenX-ji.screenX,ro=n.screenY-ji.screenY):ro=so=0,ji=n),so)},movementY:function(n){return"movementY"in n?n.movementY:ro}}),ni=Jt(oa),Oc=v({},oa,{dataTransfer:0}),Df=Jt(Oc),la=v({},aa,{relatedTarget:0}),ao=Jt(la),Ol=v({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),oo=Jt(Ol),Mc=v({},st,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lo=Jt(Mc),Of=v({},st,{data:0}),Ml=Jt(Of),ua={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Pc[n])?!!r[n]:!1}function ca(){return kl}var Vc=v({},aa,{key:function(n){if(n.key){var r=ua[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Li(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(n){return n.type==="keypress"?Li(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Li(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),uo=Jt(Vc),Lc=v({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=Jt(Lc),_s=v({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),Uc=Jt(_s),jc=v({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bc=Jt(jc),Fc=v({},oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),co=Jt(Fc),Cn=v({},st,{newState:0,oldState:0}),zc=Jt(Cn),qc=[9,13,27,32],Bi=_i&&"CompositionEvent"in window,h=null;_i&&"documentMode"in document&&(h=document.documentMode);var _=_i&&"TextEvent"in window&&!h,y=_i&&(!Bi||h&&8<h&&11>=h),S=" ",j=!1;function K(n,r){switch(n){case"keyup":return qc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ne(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ye=!1;function Kt(n,r){switch(n){case"compositionend":return ne(r);case"keypress":return r.which!==32?null:(j=!0,S);case"textInput":return n=r.data,n===S&&j?null:n;default:return null}}function Qe(n,r){if(Ye)return n==="compositionend"||!Bi&&K(n,r)?(n=xl(),gs=nr=Vi=null,Ye=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Zt[n.type]:r==="textarea"}function ys(n,r,o,u){ms?ps?ps.push(u):ps=[u]:ms=u,r=Nh(r,"onChange"),0<r.length&&(o=new io("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var ln=null,Fi=null;function Vl(n){Mv(n,0)}function Hc(n){var r=Mi(n);if(Rl(r))return n}function ey(n,r){if(n==="change")return r}var ty=!1;if(_i){var Mf;if(_i){var kf="oninput"in document;if(!kf){var ny=document.createElement("div");ny.setAttribute("oninput","return;"),kf=typeof ny.oninput=="function"}Mf=kf}else Mf=!1;ty=Mf&&(!document.documentMode||9<document.documentMode)}function iy(){ln&&(ln.detachEvent("onpropertychange",sy),Fi=ln=null)}function sy(n){if(n.propertyName==="value"&&Hc(Fi)){var r=[];ys(r,Fi,n,ei(n)),xc(Vl,r)}}function w1(n,r,o){n==="focusin"?(iy(),ln=r,Fi=o,ln.attachEvent("onpropertychange",sy)):n==="focusout"&&iy()}function A1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hc(Fi)}function R1(n,r){if(n==="click")return Hc(r)}function I1(n,r){if(n==="input"||n==="change")return Hc(r)}function C1(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Fn=typeof Object.is=="function"?Object.is:C1;function Ll(n,r){if(Fn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!Ze.call(r,d)||!Fn(n[d],r[d]))return!1}return!0}function ry(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ay(n,r){var o=ry(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ry(o)}}function oy(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?oy(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ly(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ea(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=ea(n.document)}return r}function Pf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var N1=_i&&"documentMode"in document&&11>=document.documentMode,ho=null,Vf=null,Ul=null,Lf=!1;function uy(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Lf||ho==null||ho!==ea(u)||(u=ho,"selectionStart"in u&&Pf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ul&&Ll(Ul,u)||(Ul=u,u=Nh(Vf,"onSelect"),0<u.length&&(r=new io("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=ho)))}function ha(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var fo={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionrun:ha("Transition","TransitionRun"),transitionstart:ha("Transition","TransitionStart"),transitioncancel:ha("Transition","TransitionCancel"),transitionend:ha("Transition","TransitionEnd")},Uf={},cy={};_i&&(cy=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function da(n){if(Uf[n])return Uf[n];if(!fo[n])return n;var r=fo[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in cy)return Uf[n]=r[o];return n}var hy=da("animationend"),dy=da("animationiteration"),fy=da("animationstart"),x1=da("transitionrun"),D1=da("transitionstart"),O1=da("transitioncancel"),my=da("transitionend"),py=new Map,jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jf.push("scrollEnd");function yi(n,r){py.set(n,r),gi(r,[n])}var gy=new WeakMap;function ii(n,r){if(typeof n=="object"&&n!==null){var o=gy.get(n);return o!==void 0?o:(r={value:n,source:r,stack:eo(r)},gy.set(n,r),r)}return{value:n,source:r,stack:eo(r)}}var si=[],mo=0,Bf=0;function Gc(){for(var n=mo,r=Bf=mo=0;r<n;){var o=si[r];si[r++]=null;var u=si[r];si[r++]=null;var d=si[r];si[r++]=null;var m=si[r];if(si[r++]=null,u!==null&&d!==null){var E=u.pending;E===null?d.next=d:(d.next=E.next,E.next=d),u.pending=d}m!==0&&_y(o,d,m)}}function Kc(n,r,o,u){si[mo++]=n,si[mo++]=r,si[mo++]=o,si[mo++]=u,Bf|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Ff(n,r,o,u){return Kc(n,r,o,u),Yc(n)}function po(n,r){return Kc(n,null,null,r),Yc(n)}function _y(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(d=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,d&&r!==null&&(d=31-Xt(o),n=m.hiddenUpdates,u=n[d],u===null?n[d]=[r]:u.push(r),r.lane=o|536870912),m):null}function Yc(n){if(50<uu)throw uu=0,Ym=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var go={};function M1(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(n,r,o,u){return new M1(n,r,o,u)}function zf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vs(n,r){var o=n.alternate;return o===null?(o=zn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function yy(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Qc(n,r,o,u,d,m){var E=0;if(u=n,typeof n=="function")zf(n)&&(E=1);else if(typeof n=="string")E=PR(n,o,pe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=zn(31,o,r,d),n.elementType=C,n.lanes=m,n;case V:return fa(o.children,d,m,r);case G:E=8,d|=24;break;case Y:return n=zn(12,o,r,d|2),n.elementType=Y,n.lanes=m,n;case Te:return n=zn(13,o,r,d),n.elementType=Te,n.lanes=m,n;case Ce:return n=zn(19,o,r,d),n.elementType=Ce,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fe:case le:E=10;break e;case re:E=9;break e;case Se:E=11;break e;case M:E=14;break e;case A:E=16,u=null;break e}E=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=zn(E,o,r,d),r.elementType=n,r.type=u,r.lanes=m,r}function fa(n,r,o,u){return n=zn(7,n,u,r),n.lanes=o,n}function qf(n,r,o){return n=zn(6,n,null,r),n.lanes=o,n}function Hf(n,r,o){return r=zn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var _o=[],yo=0,$c=null,Wc=0,ri=[],ai=0,ma=null,Es=1,Ts="";function pa(n,r){_o[yo++]=Wc,_o[yo++]=$c,$c=n,Wc=r}function vy(n,r,o){ri[ai++]=Es,ri[ai++]=Ts,ri[ai++]=ma,ma=n;var u=Es;n=Ts;var d=32-Xt(u)-1;u&=~(1<<d),o+=1;var m=32-Xt(r)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Es=1<<32-Xt(r)+d|o<<d|u,Ts=m+n}else Es=1<<m|o<<d|u,Ts=n}function Gf(n){n.return!==null&&(pa(n,1),vy(n,1,0))}function Kf(n){for(;n===$c;)$c=_o[--yo],_o[yo]=null,Wc=_o[--yo],_o[yo]=null;for(;n===ma;)ma=ri[--ai],ri[ai]=null,Ts=ri[--ai],ri[ai]=null,Es=ri[--ai],ri[ai]=null}var Nn=null,Nt=null,nt=!1,ga=null,zi=!1,Yf=Error(s(519));function _a(n){var r=Error(s(418,""));throw Fl(ii(r,n)),Yf}function Ey(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Gt]=n,r[Ut]=u,o){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<hu.length;o++)ze(hu[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":ze("invalid",r),ta(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),to(r);break;case"select":ze("invalid",r);break;case"textarea":ze("invalid",r),na(r,u.value,u.defaultValue,u.children),to(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||Lv(r.textContent,o)?(u.popover!=null&&(ze("beforetoggle",r),ze("toggle",r)),u.onScroll!=null&&ze("scroll",r),u.onScrollEnd!=null&&ze("scrollend",r),u.onClick!=null&&(r.onclick=xh),r=!0):r=!1,r||_a(n)}function Ty(n){for(Nn=n.return;Nn;)switch(Nn.tag){case 5:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Nn=Nn.return}}function jl(n){if(n!==Nn)return!1;if(!nt)return Ty(n),nt=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||up(n.type,n.memoizedProps)),o=!o),o&&Nt&&_a(n),Ty(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){Nt=Ei(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}Nt=null}}else r===27?(r=Nt,yr(n.type)?(n=fp,fp=null,Nt=n):Nt=r):Nt=Nn?Ei(n.stateNode.nextSibling):null;return!0}function Bl(){Nt=Nn=null,nt=!1}function by(){var n=ga;return n!==null&&(Mn===null?Mn=n:Mn.push.apply(Mn,n),ga=null),n}function Fl(n){ga===null?ga=[n]:ga.push(n)}var Qf=X(null),ya=null,bs=null;function ir(n,r,o){te(Qf,r._currentValue),r._currentValue=o}function Ss(n){n._currentValue=Qf.current,se(Qf)}function $f(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Wf(n,r,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var m=d.dependencies;if(m!==null){var E=d.child;m=m.firstContext;e:for(;m!==null;){var b=m;m=d;for(var R=0;R<r.length;R++)if(b.context===r[R]){m.lanes|=o,b=m.alternate,b!==null&&(b.lanes|=o),$f(m.return,o,n),u||(E=null);break e}m=b.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),$f(E,o,n),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===n){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function zl(n,r,o,u){n=null;for(var d=r,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var b=d.type;Fn(d.pendingProps.value,E.value)||(n!==null?n.push(b):n=[b])}}else if(d===Lt.current){if(E=d.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(_u):n=[_u])}d=d.return}n!==null&&Wf(r,n,o,u),r.flags|=262144}function Xc(n){for(n=n.firstContext;n!==null;){if(!Fn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function va(n){ya=n,bs=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function gn(n){return Sy(ya,n)}function Jc(n,r){return ya===null&&va(n),Sy(n,r)}function Sy(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},bs===null){if(n===null)throw Error(s(308));bs=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else bs=bs.next=r;return o}var k1=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},P1=i.unstable_scheduleCallback,V1=i.unstable_NormalPriority,Qt={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new k1,data:new Map,refCount:0}}function ql(n){n.refCount--,n.refCount===0&&P1(V1,function(){n.controller.abort()})}var Hl=null,Jf=0,vo=0,Eo=null;function L1(n,r){if(Hl===null){var o=Hl=[];Jf=0,vo=ep(),Eo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Jf++,r.then(wy,wy),r}function wy(){if(--Jf===0&&Hl!==null){Eo!==null&&(Eo.status="fulfilled");var n=Hl;Hl=null,vo=0,Eo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function U1(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var Ay=z.S;z.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&L1(n,r),Ay!==null&&Ay(n,r)};var Ea=X(null);function Zf(){var n=Ea.current;return n!==null?n:gt.pooledCache}function Zc(n,r){r===null?te(Ea,Ea.current):te(Ea,r.pool)}function Ry(){var n=Zf();return n===null?null:{parent:Qt._currentValue,pool:n}}var Gl=Error(s(460)),Iy=Error(s(474)),eh=Error(s(542)),em={then:function(){}};function Cy(n){return n=n.status,n==="fulfilled"||n==="rejected"}function th(){}function Ny(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(th,th),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Dy(n),n;default:if(typeof r.status=="string")r.then(th,th);else{if(n=gt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=u}},function(u){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Dy(n),n}throw Kl=r,Gl}}var Kl=null;function xy(){if(Kl===null)throw Error(s(459));var n=Kl;return Kl=null,n}function Dy(n){if(n===Gl||n===eh)throw Error(s(483))}var sr=!1;function tm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ar(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(ot&2)!==0){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,r=Yc(n),_y(n,null,o),r}return Kc(n,u,r,o),Yc(n)}function Yl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Tl(n,o)}}function im(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=r:m=m.next=r}else d=m=r;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var sm=!1;function Ql(){if(sm){var n=Eo;if(n!==null)throw n}}function $l(n,r,o,u){sm=!1;var d=n.updateQueue;sr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var R=b,F=R.next;R.next=null,E===null?m=F:E.next=F,E=R;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,b=Q.lastBaseUpdate,b!==E&&(b===null?Q.firstBaseUpdate=F:b.next=F,Q.lastBaseUpdate=R))}if(m!==null){var J=d.baseState;E=0,Q=F=R=null,b=m;do{var q=b.lane&-536870913,H=q!==b.lane;if(H?($e&q)===q:(u&q)===q){q!==0&&q===vo&&(sm=!0),Q!==null&&(Q=Q.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var xe=n,we=b;q=r;var ft=o;switch(we.tag){case 1:if(xe=we.payload,typeof xe=="function"){J=xe.call(ft,J,q);break e}J=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=we.payload,q=typeof xe=="function"?xe.call(ft,J,q):xe,q==null)break e;J=v({},J,q);break e;case 2:sr=!0}}q=b.callback,q!==null&&(n.flags|=64,H&&(n.flags|=8192),H=d.callbacks,H===null?d.callbacks=[q]:H.push(q))}else H={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Q===null?(F=Q=H,R=J):Q=Q.next=H,E|=q;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;H=b,b=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);Q===null&&(R=J),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=Q,m===null&&(d.shared.lanes=0),mr|=E,n.lanes=E,n.memoizedState=J}}function Oy(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function My(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Oy(o[n],r)}var To=X(null),nh=X(0);function ky(n,r){n=xs,te(nh,n),te(To,r),xs=n|r.baseLanes}function rm(){te(nh,xs),te(To,To.current)}function am(){xs=nh.current,se(To),se(nh)}var or=0,Le=null,ht=null,Bt=null,ih=!1,bo=!1,Ta=!1,sh=0,Wl=0,So=null,j1=0;function kt(){throw Error(s(321))}function om(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Fn(n[o],r[o]))return!1;return!0}function lm(n,r,o,u,d,m){return or=m,Le=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,z.H=n===null||n.memoizedState===null?_0:y0,Ta=!1,m=o(u,d),Ta=!1,bo&&(m=Vy(r,o,u,d)),Py(n),m}function Py(n){z.H=ch;var r=ht!==null&&ht.next!==null;if(or=0,Bt=ht=Le=null,ih=!1,Wl=0,So=null,r)throw Error(s(300));n===null||en||(n=n.dependencies,n!==null&&Xc(n)&&(en=!0))}function Vy(n,r,o,u){Le=n;var d=0;do{if(bo&&(So=null),Wl=0,bo=!1,25<=d)throw Error(s(301));if(d+=1,Bt=ht=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=K1,m=r(o,u)}while(bo);return m}function B1(){var n=z.H,r=n.useState()[0];return r=typeof r.then=="function"?Xl(r):r,n=n.useState()[0],(ht!==null?ht.memoizedState:null)!==n&&(Le.flags|=1024),r}function um(){var n=sh!==0;return sh=0,n}function cm(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function hm(n){if(ih){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}ih=!1}or=0,Bt=ht=Le=null,bo=!1,Wl=sh=0,So=null}function Dn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Le.memoizedState=Bt=n:Bt=Bt.next=n,Bt}function Ft(){if(ht===null){var n=Le.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=Bt===null?Le.memoizedState:Bt.next;if(r!==null)Bt=r,ht=n;else{if(n===null)throw Le.alternate===null?Error(s(467)):Error(s(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Bt===null?Le.memoizedState=Bt=n:Bt=Bt.next=n}return Bt}function dm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(n){var r=Wl;return Wl+=1,So===null&&(So=[]),n=Ny(So,n,r),r=Le,(Bt===null?r.memoizedState:Bt.next)===null&&(r=r.alternate,z.H=r===null||r.memoizedState===null?_0:y0),n}function rh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Xl(n);if(n.$$typeof===le)return gn(n)}throw Error(s(438,String(n)))}function fm(n){var r=null,o=Le.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Le.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=dm(),Le.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=D;return r.index++,o}function ws(n,r){return typeof r=="function"?r(n):r}function ah(n){var r=Ft();return mm(r,ht,n)}function mm(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var d=n.baseQueue,m=u.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}r.baseQueue=d=m,u.pending=null}if(m=n.baseState,d===null)n.memoizedState=m;else{r=d.next;var b=E=null,R=null,F=r,Q=!1;do{var J=F.lane&-536870913;if(J!==F.lane?($e&J)===J:(or&J)===J){var q=F.revertLane;if(q===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),J===vo&&(Q=!0);else if((or&q)===q){F=F.next,q===vo&&(Q=!0);continue}else J={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},R===null?(b=R=J,E=m):R=R.next=J,Le.lanes|=q,mr|=q;J=F.action,Ta&&o(m,J),m=F.hasEagerState?F.eagerState:o(m,J)}else q={lane:J,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},R===null?(b=R=q,E=m):R=R.next=q,Le.lanes|=J,mr|=J;F=F.next}while(F!==null&&F!==r);if(R===null?E=m:R.next=b,!Fn(m,n.memoizedState)&&(en=!0,Q&&(o=Eo,o!==null)))throw o;n.memoizedState=m,n.baseState=E,n.baseQueue=R,u.lastRenderedState=m}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function pm(n){var r=Ft(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=r.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);Fn(m,r.memoizedState)||(en=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Ly(n,r,o){var u=Le,d=Ft(),m=nt;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Fn((ht||d).memoizedState,o);E&&(d.memoizedState=o,en=!0),d=d.queue;var b=By.bind(null,u,d,n);if(Jl(2048,8,b,[n]),d.getSnapshot!==r||E||Bt!==null&&Bt.memoizedState.tag&1){if(u.flags|=2048,wo(9,oh(),jy.bind(null,u,d,o,r),null),gt===null)throw Error(s(349));m||(or&124)!==0||Uy(u,r,o)}return o}function Uy(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Le.updateQueue,r===null?(r=dm(),Le.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function jy(n,r,o,u){r.value=o,r.getSnapshot=u,Fy(r)&&zy(n)}function By(n,r,o){return o(function(){Fy(r)&&zy(n)})}function Fy(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Fn(n,o)}catch{return!0}}function zy(n){var r=po(n,2);r!==null&&Yn(r,n,2)}function gm(n){var r=Dn();if(typeof n=="function"){var o=n;if(n=o(),Ta){et(!0);try{o()}finally{et(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:n},r}function qy(n,r,o,u){return n.baseState=o,mm(n,ht,typeof u=="function"?u:ws)}function F1(n,r,o,u,d){if(uh(n))throw Error(s(485));if(n=r.action,n!==null){var m={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Hy(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Hy(n,r){var o=r.action,u=r.payload,d=n.state;if(r.isTransition){var m=z.T,E={};z.T=E;try{var b=o(d,u),R=z.S;R!==null&&R(E,b),Gy(n,r,b)}catch(F){_m(n,r,F)}finally{z.T=m}}else try{m=o(d,u),Gy(n,r,m)}catch(F){_m(n,r,F)}}function Gy(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ky(n,r,u)},function(u){return _m(n,r,u)}):Ky(n,r,o)}function Ky(n,r,o){r.status="fulfilled",r.value=o,Yy(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Hy(n,o)))}function _m(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Yy(r),r=r.next;while(r!==u)}n.action=null}function Yy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Qy(n,r){return r}function $y(n,r){if(nt){var o=gt.formState;if(o!==null){e:{var u=Le;if(nt){if(Nt){t:{for(var d=Nt,m=zi;d.nodeType!==8;){if(!m){d=null;break t}if(d=Ei(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Nt=Ei(d.nextSibling),u=d.data==="F!";break e}}_a(u)}u=!1}u&&(r=o[0])}}return o=Dn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qy,lastRenderedState:r},o.queue=u,o=m0.bind(null,Le,u),u.dispatch=o,u=gm(!1),m=bm.bind(null,Le,!1,u.queue),u=Dn(),d={state:r,dispatch:null,action:n,pending:null},u.queue=d,o=F1.bind(null,Le,d,m,o),d.dispatch=o,u.memoizedState=n,[r,o,!1]}function Wy(n){var r=Ft();return Xy(r,ht,n)}function Xy(n,r,o){if(r=mm(n,r,Qy)[0],n=ah(ws)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Xl(r)}catch(E){throw E===Gl?eh:E}else u=r;r=Ft();var d=r.queue,m=d.dispatch;return o!==r.memoizedState&&(Le.flags|=2048,wo(9,oh(),z1.bind(null,d,o),null)),[u,m,n]}function z1(n,r){n.action=r}function Jy(n){var r=Ft(),o=ht;if(o!==null)return Xy(r,o,n);Ft(),r=r.memoizedState,o=Ft();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function wo(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Le.updateQueue,r===null&&(r=dm(),Le.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function oh(){return{destroy:void 0,resource:void 0}}function Zy(){return Ft().memoizedState}function lh(n,r,o,u){var d=Dn();u=u===void 0?null:u,Le.flags|=n,d.memoizedState=wo(1|r,oh(),o,u)}function Jl(n,r,o,u){var d=Ft();u=u===void 0?null:u;var m=d.memoizedState.inst;ht!==null&&u!==null&&om(u,ht.memoizedState.deps)?d.memoizedState=wo(r,m,o,u):(Le.flags|=n,d.memoizedState=wo(1|r,m,o,u))}function e0(n,r){lh(8390656,8,n,r)}function t0(n,r){Jl(2048,8,n,r)}function n0(n,r){return Jl(4,2,n,r)}function i0(n,r){return Jl(4,4,n,r)}function s0(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function r0(n,r,o){o=o!=null?o.concat([n]):null,Jl(4,4,s0.bind(null,r,n),o)}function ym(){}function a0(n,r){var o=Ft();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&om(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function o0(n,r){var o=Ft();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&om(r,u[1]))return u[0];if(u=n(),Ta){et(!0);try{n()}finally{et(!1)}}return o.memoizedState=[u,r],u}function vm(n,r,o){return o===void 0||(or&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=cv(),Le.lanes|=n,mr|=n,o)}function l0(n,r,o,u){return Fn(o,r)?o:To.current!==null?(n=vm(n,o,u),Fn(n,r)||(en=!0),n):(or&42)===0?(en=!0,n.memoizedState=o):(n=cv(),Le.lanes|=n,mr|=n,r)}function u0(n,r,o,u,d){var m=ee.p;ee.p=m!==0&&8>m?m:8;var E=z.T,b={};z.T=b,bm(n,!1,r,o);try{var R=d(),F=z.S;if(F!==null&&F(b,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var Q=U1(R,u);Zl(n,r,Q,Kn(n))}else Zl(n,r,u,Kn(n))}catch(J){Zl(n,r,{then:function(){},status:"rejected",reason:J},Kn())}finally{ee.p=m,z.T=E}}function q1(){}function Em(n,r,o,u){if(n.tag!==5)throw Error(s(476));var d=c0(n).queue;u0(n,d,r,ie,o===null?q1:function(){return h0(n),o(u)})}function c0(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:ie},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function h0(n){var r=c0(n).next.queue;Zl(n,r,{},Kn())}function Tm(){return gn(_u)}function d0(){return Ft().memoizedState}function f0(){return Ft().memoizedState}function H1(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Kn();n=rr(o);var u=ar(r,n,o);u!==null&&(Yn(u,r,o),Yl(u,r,o)),r={cache:Xf()},n.payload=r;return}r=r.return}}function G1(n,r,o){var u=Kn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},uh(n)?p0(r,o):(o=Ff(n,r,o,u),o!==null&&(Yn(o,n,u),g0(o,r,u)))}function m0(n,r,o){var u=Kn();Zl(n,r,o,u)}function Zl(n,r,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(uh(n))p0(r,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,b=m(E,o);if(d.hasEagerState=!0,d.eagerState=b,Fn(b,E))return Kc(n,r,d,0),gt===null&&Gc(),!1}catch{}finally{}if(o=Ff(n,r,d,u),o!==null)return Yn(o,n,u),g0(o,r,u),!0}return!1}function bm(n,r,o,u){if(u={lane:2,revertLane:ep(),action:u,hasEagerState:!1,eagerState:null,next:null},uh(n)){if(r)throw Error(s(479))}else r=Ff(n,o,u,2),r!==null&&Yn(r,n,2)}function uh(n){var r=n.alternate;return n===Le||r!==null&&r===Le}function p0(n,r){bo=ih=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function g0(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Tl(n,o)}}var ch={readContext:gn,use:rh,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},_0={readContext:gn,use:rh,useCallback:function(n,r){return Dn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:e0,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,lh(4194308,4,s0.bind(null,r,n),o)},useLayoutEffect:function(n,r){return lh(4194308,4,n,r)},useInsertionEffect:function(n,r){lh(4,2,n,r)},useMemo:function(n,r){var o=Dn();r=r===void 0?null:r;var u=n();if(Ta){et(!0);try{n()}finally{et(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Dn();if(o!==void 0){var d=o(r);if(Ta){et(!0);try{o(r)}finally{et(!1)}}}else d=r;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=G1.bind(null,Le,n),[u.memoizedState,n]},useRef:function(n){var r=Dn();return n={current:n},r.memoizedState=n},useState:function(n){n=gm(n);var r=n.queue,o=m0.bind(null,Le,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:ym,useDeferredValue:function(n,r){var o=Dn();return vm(o,n,r)},useTransition:function(){var n=gm(!1);return n=u0.bind(null,Le,n.queue,!0,!1),Dn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Le,d=Dn();if(nt){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),gt===null)throw Error(s(349));($e&124)!==0||Uy(u,r,o)}d.memoizedState=o;var m={value:o,getSnapshot:r};return d.queue=m,e0(By.bind(null,u,m,n),[n]),u.flags|=2048,wo(9,oh(),jy.bind(null,u,m,o,r),null),o},useId:function(){var n=Dn(),r=gt.identifierPrefix;if(nt){var o=Ts,u=Es;o=(u&~(1<<32-Xt(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=sh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=j1++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Tm,useFormState:$y,useActionState:$y,useOptimistic:function(n){var r=Dn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=bm.bind(null,Le,!0,o),o.dispatch=r,[n,r]},useMemoCache:fm,useCacheRefresh:function(){return Dn().memoizedState=H1.bind(null,Le)}},y0={readContext:gn,use:rh,useCallback:a0,useContext:gn,useEffect:t0,useImperativeHandle:r0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:o0,useReducer:ah,useRef:Zy,useState:function(){return ah(ws)},useDebugValue:ym,useDeferredValue:function(n,r){var o=Ft();return l0(o,ht.memoizedState,n,r)},useTransition:function(){var n=ah(ws)[0],r=Ft().memoizedState;return[typeof n=="boolean"?n:Xl(n),r]},useSyncExternalStore:Ly,useId:d0,useHostTransitionStatus:Tm,useFormState:Wy,useActionState:Wy,useOptimistic:function(n,r){var o=Ft();return qy(o,ht,n,r)},useMemoCache:fm,useCacheRefresh:f0},K1={readContext:gn,use:rh,useCallback:a0,useContext:gn,useEffect:t0,useImperativeHandle:r0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:o0,useReducer:pm,useRef:Zy,useState:function(){return pm(ws)},useDebugValue:ym,useDeferredValue:function(n,r){var o=Ft();return ht===null?vm(o,n,r):l0(o,ht.memoizedState,n,r)},useTransition:function(){var n=pm(ws)[0],r=Ft().memoizedState;return[typeof n=="boolean"?n:Xl(n),r]},useSyncExternalStore:Ly,useId:d0,useHostTransitionStatus:Tm,useFormState:Jy,useActionState:Jy,useOptimistic:function(n,r){var o=Ft();return ht!==null?qy(o,ht,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:fm,useCacheRefresh:f0},Ao=null,eu=0;function hh(n){var r=eu;return eu+=1,Ao===null&&(Ao=[]),Ny(Ao,n,r)}function tu(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function dh(n,r){throw r.$$typeof===T?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function v0(n){var r=n._init;return r(n._payload)}function E0(n){function r(U,O){if(n){var B=U.deletions;B===null?(U.deletions=[O],U.flags|=16):B.push(O)}}function o(U,O){if(!n)return null;for(;O!==null;)r(U,O),O=O.sibling;return null}function u(U){for(var O=new Map;U!==null;)U.key!==null?O.set(U.key,U):O.set(U.index,U),U=U.sibling;return O}function d(U,O){return U=vs(U,O),U.index=0,U.sibling=null,U}function m(U,O,B){return U.index=B,n?(B=U.alternate,B!==null?(B=B.index,B<O?(U.flags|=67108866,O):B):(U.flags|=67108866,O)):(U.flags|=1048576,O)}function E(U){return n&&U.alternate===null&&(U.flags|=67108866),U}function b(U,O,B,$){return O===null||O.tag!==6?(O=qf(B,U.mode,$),O.return=U,O):(O=d(O,B),O.return=U,O)}function R(U,O,B,$){var me=B.type;return me===V?Q(U,O,B.props.children,$,B.key):O!==null&&(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===A&&v0(me)===O.type)?(O=d(O,B.props),tu(O,B),O.return=U,O):(O=Qc(B.type,B.key,B.props,null,U.mode,$),tu(O,B),O.return=U,O)}function F(U,O,B,$){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=Hf(B,U.mode,$),O.return=U,O):(O=d(O,B.children||[]),O.return=U,O)}function Q(U,O,B,$,me){return O===null||O.tag!==7?(O=fa(B,U.mode,$,me),O.return=U,O):(O=d(O,B),O.return=U,O)}function J(U,O,B){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=qf(""+O,U.mode,B),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return B=Qc(O.type,O.key,O.props,null,U.mode,B),tu(B,O),B.return=U,B;case k:return O=Hf(O,U.mode,B),O.return=U,O;case A:var $=O._init;return O=$(O._payload),J(U,O,B)}if(ae(O)||L(O))return O=fa(O,U.mode,B,null),O.return=U,O;if(typeof O.then=="function")return J(U,hh(O),B);if(O.$$typeof===le)return J(U,Jc(U,O),B);dh(U,O)}return null}function q(U,O,B,$){var me=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return me!==null?null:b(U,O,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===me?R(U,O,B,$):null;case k:return B.key===me?F(U,O,B,$):null;case A:return me=B._init,B=me(B._payload),q(U,O,B,$)}if(ae(B)||L(B))return me!==null?null:Q(U,O,B,$,null);if(typeof B.then=="function")return q(U,O,hh(B),$);if(B.$$typeof===le)return q(U,O,Jc(U,B),$);dh(U,B)}return null}function H(U,O,B,$,me){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return U=U.get(B)||null,b(O,U,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case w:return U=U.get($.key===null?B:$.key)||null,R(O,U,$,me);case k:return U=U.get($.key===null?B:$.key)||null,F(O,U,$,me);case A:var je=$._init;return $=je($._payload),H(U,O,B,$,me)}if(ae($)||L($))return U=U.get(B)||null,Q(O,U,$,me,null);if(typeof $.then=="function")return H(U,O,B,hh($),me);if($.$$typeof===le)return H(U,O,B,Jc(O,$),me);dh(O,$)}return null}function xe(U,O,B,$){for(var me=null,je=null,Ee=O,Ae=O=0,nn=null;Ee!==null&&Ae<B.length;Ae++){Ee.index>Ae?(nn=Ee,Ee=null):nn=Ee.sibling;var tt=q(U,Ee,B[Ae],$);if(tt===null){Ee===null&&(Ee=nn);break}n&&Ee&&tt.alternate===null&&r(U,Ee),O=m(tt,O,Ae),je===null?me=tt:je.sibling=tt,je=tt,Ee=nn}if(Ae===B.length)return o(U,Ee),nt&&pa(U,Ae),me;if(Ee===null){for(;Ae<B.length;Ae++)Ee=J(U,B[Ae],$),Ee!==null&&(O=m(Ee,O,Ae),je===null?me=Ee:je.sibling=Ee,je=Ee);return nt&&pa(U,Ae),me}for(Ee=u(Ee);Ae<B.length;Ae++)nn=H(Ee,U,Ae,B[Ae],$),nn!==null&&(n&&nn.alternate!==null&&Ee.delete(nn.key===null?Ae:nn.key),O=m(nn,O,Ae),je===null?me=nn:je.sibling=nn,je=nn);return n&&Ee.forEach(function(Sr){return r(U,Sr)}),nt&&pa(U,Ae),me}function we(U,O,B,$){if(B==null)throw Error(s(151));for(var me=null,je=null,Ee=O,Ae=O=0,nn=null,tt=B.next();Ee!==null&&!tt.done;Ae++,tt=B.next()){Ee.index>Ae?(nn=Ee,Ee=null):nn=Ee.sibling;var Sr=q(U,Ee,tt.value,$);if(Sr===null){Ee===null&&(Ee=nn);break}n&&Ee&&Sr.alternate===null&&r(U,Ee),O=m(Sr,O,Ae),je===null?me=Sr:je.sibling=Sr,je=Sr,Ee=nn}if(tt.done)return o(U,Ee),nt&&pa(U,Ae),me;if(Ee===null){for(;!tt.done;Ae++,tt=B.next())tt=J(U,tt.value,$),tt!==null&&(O=m(tt,O,Ae),je===null?me=tt:je.sibling=tt,je=tt);return nt&&pa(U,Ae),me}for(Ee=u(Ee);!tt.done;Ae++,tt=B.next())tt=H(Ee,U,Ae,tt.value,$),tt!==null&&(n&&tt.alternate!==null&&Ee.delete(tt.key===null?Ae:tt.key),O=m(tt,O,Ae),je===null?me=tt:je.sibling=tt,je=tt);return n&&Ee.forEach(function(YR){return r(U,YR)}),nt&&pa(U,Ae),me}function ft(U,O,B,$){if(typeof B=="object"&&B!==null&&B.type===V&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var me=B.key;O!==null;){if(O.key===me){if(me=B.type,me===V){if(O.tag===7){o(U,O.sibling),$=d(O,B.props.children),$.return=U,U=$;break e}}else if(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===A&&v0(me)===O.type){o(U,O.sibling),$=d(O,B.props),tu($,B),$.return=U,U=$;break e}o(U,O);break}else r(U,O);O=O.sibling}B.type===V?($=fa(B.props.children,U.mode,$,B.key),$.return=U,U=$):($=Qc(B.type,B.key,B.props,null,U.mode,$),tu($,B),$.return=U,U=$)}return E(U);case k:e:{for(me=B.key;O!==null;){if(O.key===me)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){o(U,O.sibling),$=d(O,B.children||[]),$.return=U,U=$;break e}else{o(U,O);break}else r(U,O);O=O.sibling}$=Hf(B,U.mode,$),$.return=U,U=$}return E(U);case A:return me=B._init,B=me(B._payload),ft(U,O,B,$)}if(ae(B))return xe(U,O,B,$);if(L(B)){if(me=L(B),typeof me!="function")throw Error(s(150));return B=me.call(B),we(U,O,B,$)}if(typeof B.then=="function")return ft(U,O,hh(B),$);if(B.$$typeof===le)return ft(U,O,Jc(U,B),$);dh(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,O!==null&&O.tag===6?(o(U,O.sibling),$=d(O,B),$.return=U,U=$):(o(U,O),$=qf(B,U.mode,$),$.return=U,U=$),E(U)):o(U,O)}return function(U,O,B,$){try{eu=0;var me=ft(U,O,B,$);return Ao=null,me}catch(Ee){if(Ee===Gl||Ee===eh)throw Ee;var je=zn(29,Ee,null,U.mode);return je.lanes=$,je.return=U,je}finally{}}}var Ro=E0(!0),T0=E0(!1),oi=X(null),qi=null;function lr(n){var r=n.alternate;te($t,$t.current&1),te(oi,n),qi===null&&(r===null||To.current!==null||r.memoizedState!==null)&&(qi=n)}function b0(n){if(n.tag===22){if(te($t,$t.current),te(oi,n),qi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(qi=n)}}else ur()}function ur(){te($t,$t.current),te(oi,oi.current)}function As(n){se(oi),qi===n&&(qi=null),se($t)}var $t=X(0);function fh(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||dp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Sm(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var wm={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Kn(),d=rr(u);d.payload=r,o!=null&&(d.callback=o),r=ar(n,d,u),r!==null&&(Yn(r,n,u),Yl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Kn(),d=rr(u);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=ar(n,d,u),r!==null&&(Yn(r,n,u),Yl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Kn(),u=rr(o);u.tag=2,r!=null&&(u.callback=r),r=ar(n,u,o),r!==null&&(Yn(r,n,o),Yl(r,n,o))}};function S0(n,r,o,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Ll(o,u)||!Ll(d,m):!0}function w0(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&wm.enqueueReplaceState(r,r.state,null)}function ba(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=v({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}var mh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function A0(n){mh(n)}function R0(n){console.error(n)}function I0(n){mh(n)}function ph(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function C0(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Am(n,r,o){return o=rr(o),o.tag=3,o.payload={element:null},o.callback=function(){ph(n,r)},o}function N0(n){return n=rr(n),n.tag=3,n}function x0(n,r,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;n.payload=function(){return d(m)},n.callback=function(){C0(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){C0(r,o,u),typeof d!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var b=u.stack;this.componentDidCatch(u.value,{componentStack:b!==null?b:""})})}function Y1(n,r,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&zl(r,o,d,!0),o=oi.current,o!==null){switch(o.tag){case 13:return qi===null?$m():o.alternate===null&&xt===0&&(xt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===em?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Xm(n,u,d)),!1;case 22:return o.flags|=65536,u===em?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Xm(n,u,d)),!1}throw Error(s(435,o.tag))}return Xm(n,u,d),$m(),!1}if(nt)return r=oi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,u!==Yf&&(n=Error(s(422),{cause:u}),Fl(ii(n,o)))):(u!==Yf&&(r=Error(s(423),{cause:u}),Fl(ii(r,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=ii(u,o),d=Am(n.stateNode,u,d),im(n,d),xt!==4&&(xt=2)),!1;var m=Error(s(520),{cause:u});if(m=ii(m,o),lu===null?lu=[m]:lu.push(m),xt!==4&&(xt=2),r===null)return!0;u=ii(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=Am(o.stateNode,u,n),im(o,n),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pr===null||!pr.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=N0(d),x0(d,n,o,u),im(o,d),!1}o=o.return}while(o!==null);return!1}var D0=Error(s(461)),en=!1;function un(n,r,o,u){r.child=n===null?T0(r,null,o,u):Ro(r,n.child,o,u)}function O0(n,r,o,u,d){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var b in u)b!=="ref"&&(E[b]=u[b])}else E=u;return va(r),u=lm(n,r,o,E,m,d),b=um(),n!==null&&!en?(cm(n,r,d),Rs(n,r,d)):(nt&&b&&Gf(r),r.flags|=1,un(n,r,u,d),r.child)}function M0(n,r,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!zf(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,k0(n,r,m,u,d)):(n=Qc(o.type,null,u,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!Mm(n,d)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ll,o(E,u)&&n.ref===r.ref)return Rs(n,r,d)}return r.flags|=1,n=vs(m,u),n.ref=r.ref,n.return=r,r.child=n}function k0(n,r,o,u,d){if(n!==null){var m=n.memoizedProps;if(Ll(m,u)&&n.ref===r.ref)if(en=!1,r.pendingProps=u=m,Mm(n,d))(n.flags&131072)!==0&&(en=!0);else return r.lanes=n.lanes,Rs(n,r,d)}return Rm(n,r,o,u,d)}function P0(n,r,o){var u=r.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,n!==null){for(d=r.child=n.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return V0(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Zc(r,m!==null?m.cachePool:null),m!==null?ky(r,m):rm(),b0(r);else return r.lanes=r.childLanes=536870912,V0(n,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(Zc(r,m.cachePool),ky(r,m),ur(),r.memoizedState=null):(n!==null&&Zc(r,null),rm(),ur());return un(n,r,d,o),r.child}function V0(n,r,o,u){var d=Zf();return d=d===null?null:{parent:Qt._currentValue,pool:d},r.memoizedState={baseLanes:o,cachePool:d},n!==null&&Zc(r,null),rm(),b0(r),n!==null&&zl(n,r,u,!0),null}function gh(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function Rm(n,r,o,u,d){return va(r),o=lm(n,r,o,u,void 0,d),u=um(),n!==null&&!en?(cm(n,r,d),Rs(n,r,d)):(nt&&u&&Gf(r),r.flags|=1,un(n,r,o,d),r.child)}function L0(n,r,o,u,d,m){return va(r),r.updateQueue=null,o=Vy(r,u,o,d),Py(n),u=um(),n!==null&&!en?(cm(n,r,m),Rs(n,r,m)):(nt&&u&&Gf(r),r.flags|=1,un(n,r,o,m),r.child)}function U0(n,r,o,u,d){if(va(r),r.stateNode===null){var m=go,E=o.contextType;typeof E=="object"&&E!==null&&(m=gn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=wm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},tm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?gn(E):go,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Sm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&wm.enqueueReplaceState(m,m.state,null),$l(r,u,m,d),Ql(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){m=r.stateNode;var b=r.memoizedProps,R=ba(o,b);m.props=R;var F=m.context,Q=o.contextType;E=go,typeof Q=="object"&&Q!==null&&(E=gn(Q));var J=o.getDerivedStateFromProps;Q=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b||F!==E)&&w0(r,m,u,E),sr=!1;var q=r.memoizedState;m.state=q,$l(r,u,m,d),Ql(),F=r.memoizedState,b||q!==F||sr?(typeof J=="function"&&(Sm(r,o,J,u),F=r.memoizedState),(R=sr||S0(r,o,R,u,q,F,E))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=F),m.props=u,m.state=F,m.context=E,u=R):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,nm(n,r),E=r.memoizedProps,Q=ba(o,E),m.props=Q,J=r.pendingProps,q=m.context,F=o.contextType,R=go,typeof F=="object"&&F!==null&&(R=gn(F)),b=o.getDerivedStateFromProps,(F=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==J||q!==R)&&w0(r,m,u,R),sr=!1,q=r.memoizedState,m.state=q,$l(r,u,m,d),Ql();var H=r.memoizedState;E!==J||q!==H||sr||n!==null&&n.dependencies!==null&&Xc(n.dependencies)?(typeof b=="function"&&(Sm(r,o,b,u),H=r.memoizedState),(Q=sr||S0(r,o,Q,u,q,H,R)||n!==null&&n.dependencies!==null&&Xc(n.dependencies))?(F||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,H,R),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,H,R)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=H),m.props=u,m.state=H,m.context=R,u=Q):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),u=!1)}return m=u,gh(n,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&u?(r.child=Ro(r,n.child,null,d),r.child=Ro(r,null,o,d)):un(n,r,o,d),r.memoizedState=m.state,n=r.child):n=Rs(n,r,d),n}function j0(n,r,o,u){return Bl(),r.flags|=256,un(n,r,o,u),r.child}var Im={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cm(n){return{baseLanes:n,cachePool:Ry()}}function Nm(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=li),n}function B0(n,r,o){var u=r.pendingProps,d=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:($t.current&2)!==0),E&&(d=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(nt){if(d?lr(r):ur(),nt){var b=Nt,R;if(R=b){e:{for(R=b,b=zi;R.nodeType!==8;){if(!b){b=null;break e}if(R=Ei(R.nextSibling),R===null){b=null;break e}}b=R}b!==null?(r.memoizedState={dehydrated:b,treeContext:ma!==null?{id:Es,overflow:Ts}:null,retryLane:536870912,hydrationErrors:null},R=zn(18,null,null,0),R.stateNode=b,R.return=r,r.child=R,Nn=r,Nt=null,R=!0):R=!1}R||_a(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return dp(b)?r.lanes=32:r.lanes=536870912,null;As(r)}return b=u.children,u=u.fallback,d?(ur(),d=r.mode,b=_h({mode:"hidden",children:b},d),u=fa(u,d,o,null),b.return=r,u.return=r,b.sibling=u,r.child=b,d=r.child,d.memoizedState=Cm(o),d.childLanes=Nm(n,E,o),r.memoizedState=Im,u):(lr(r),xm(r,b))}if(R=n.memoizedState,R!==null&&(b=R.dehydrated,b!==null)){if(m)r.flags&256?(lr(r),r.flags&=-257,r=Dm(n,r,o)):r.memoizedState!==null?(ur(),r.child=n.child,r.flags|=128,r=null):(ur(),d=u.fallback,b=r.mode,u=_h({mode:"visible",children:u.children},b),d=fa(d,b,o,null),d.flags|=2,u.return=r,d.return=r,u.sibling=d,r.child=u,Ro(r,n.child,null,o),u=r.child,u.memoizedState=Cm(o),u.childLanes=Nm(n,E,o),r.memoizedState=Im,r=d);else if(lr(r),dp(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var F=E.dgst;E=F,u=Error(s(419)),u.stack="",u.digest=E,Fl({value:u,source:null,stack:null}),r=Dm(n,r,o)}else if(en||zl(n,r,o,!1),E=(o&n.childLanes)!==0,en||E){if(E=gt,E!==null&&(u=o&-o,u=(u&42)!==0?1:Ws(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,po(n,u),Yn(E,n,u),D0;b.data==="$?"||$m(),r=Dm(n,r,o)}else b.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=R.treeContext,Nt=Ei(b.nextSibling),Nn=r,nt=!0,ga=null,zi=!1,n!==null&&(ri[ai++]=Es,ri[ai++]=Ts,ri[ai++]=ma,Es=n.id,Ts=n.overflow,ma=r),r=xm(r,u.children),r.flags|=4096);return r}return d?(ur(),d=u.fallback,b=r.mode,R=n.child,F=R.sibling,u=vs(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,F!==null?d=vs(F,d):(d=fa(d,b,o,null),d.flags|=2),d.return=r,u.return=r,u.sibling=d,r.child=u,u=d,d=r.child,b=n.child.memoizedState,b===null?b=Cm(o):(R=b.cachePool,R!==null?(F=Qt._currentValue,R=R.parent!==F?{parent:F,pool:F}:R):R=Ry(),b={baseLanes:b.baseLanes|o,cachePool:R}),d.memoizedState=b,d.childLanes=Nm(n,E,o),r.memoizedState=Im,u):(lr(r),o=n.child,n=o.sibling,o=vs(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function xm(n,r){return r=_h({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function _h(n,r){return n=zn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Dm(n,r,o){return Ro(r,n.child,null,o),n=xm(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function F0(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),$f(n.return,r,o)}function Om(n,r,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function z0(n,r,o){var u=r.pendingProps,d=u.revealOrder,m=u.tail;if(un(n,r,u.children,o),u=$t.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&F0(n,o,r);else if(n.tag===19)F0(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(te($t,u),d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&fh(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Om(r,!1,d,o,m);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&fh(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Om(r,!0,o,null,m);break;case"together":Om(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Rs(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),mr|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(zl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=vs(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=vs(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Mm(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Xc(n)))}function Q1(n,r,o){switch(r.tag){case 3:ut(r,r.stateNode.containerInfo),ir(r,Qt,n.memoizedState.cache),Bl();break;case 27:case 5:pi(r);break;case 4:ut(r,r.stateNode.containerInfo);break;case 10:ir(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(lr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?B0(n,r,o):(lr(r),n=Rs(n,r,o),n!==null?n.sibling:null);lr(r);break;case 19:var d=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(zl(n,r,o,!1),u=(o&r.childLanes)!==0),d){if(u)return z0(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),te($t,$t.current),u)break;return null;case 22:case 23:return r.lanes=0,P0(n,r,o);case 24:ir(r,Qt,n.memoizedState.cache)}return Rs(n,r,o)}function q0(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)en=!0;else{if(!Mm(n,o)&&(r.flags&128)===0)return en=!1,Q1(n,r,o);en=(n.flags&131072)!==0}else en=!1,nt&&(r.flags&1048576)!==0&&vy(r,Wc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,d=u._init;if(u=d(u._payload),r.type=u,typeof u=="function")zf(u)?(n=ba(u,n),r.tag=1,r=U0(null,r,u,n,o)):(r.tag=0,r=Rm(null,r,u,n,o));else{if(u!=null){if(d=u.$$typeof,d===Se){r.tag=11,r=O0(null,r,u,n,o);break e}else if(d===M){r.tag=14,r=M0(null,r,u,n,o);break e}}throw r=ue(u)||u,Error(s(306,r,""))}}return r;case 0:return Rm(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,d=ba(u,r.pendingProps),U0(n,r,u,d,o);case 3:e:{if(ut(r,r.stateNode.containerInfo),n===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;d=m.element,nm(n,r),$l(r,u,null,o);var E=r.memoizedState;if(u=E.cache,ir(r,Qt,u),u!==m.cache&&Wf(r,[Qt],o,!0),Ql(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=j0(n,r,u,o);break e}else if(u!==d){d=ii(Error(s(424)),r),Fl(d),r=j0(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Nt=Ei(n.firstChild),Nn=r,nt=!0,ga=null,zi=!0,o=T0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Bl(),u===d){r=Rs(n,r,o);break e}un(n,r,u,o)}r=r.child}return r;case 26:return gh(n,r),n===null?(o=Yv(r.type,null,r.pendingProps,null))?r.memoizedState=o:nt||(o=r.type,n=r.pendingProps,u=Dh(Ne.current).createElement(o),u[Gt]=r,u[Ut]=n,hn(u,o,n),Mt(u),r.stateNode=u):r.memoizedState=Yv(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return pi(r),n===null&&nt&&(u=r.stateNode=Hv(r.type,r.pendingProps,Ne.current),Nn=r,zi=!0,d=Nt,yr(r.type)?(fp=d,Nt=Ei(u.firstChild)):Nt=d),un(n,r,r.pendingProps.children,o),gh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&nt&&((d=u=Nt)&&(u=bR(u,r.type,r.pendingProps,zi),u!==null?(r.stateNode=u,Nn=r,Nt=Ei(u.firstChild),zi=!1,d=!0):d=!1),d||_a(r)),pi(r),d=r.type,m=r.pendingProps,E=n!==null?n.memoizedProps:null,u=m.children,up(d,m)?u=null:E!==null&&up(d,E)&&(r.flags|=32),r.memoizedState!==null&&(d=lm(n,r,B1,null,null,o),_u._currentValue=d),gh(n,r),un(n,r,u,o),r.child;case 6:return n===null&&nt&&((n=o=Nt)&&(o=SR(o,r.pendingProps,zi),o!==null?(r.stateNode=o,Nn=r,Nt=null,n=!0):n=!1),n||_a(r)),null;case 13:return B0(n,r,o);case 4:return ut(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ro(r,null,u,o):un(n,r,u,o),r.child;case 11:return O0(n,r,r.type,r.pendingProps,o);case 7:return un(n,r,r.pendingProps,o),r.child;case 8:return un(n,r,r.pendingProps.children,o),r.child;case 12:return un(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,ir(r,r.type,u.value),un(n,r,u.children,o),r.child;case 9:return d=r.type._context,u=r.pendingProps.children,va(r),d=gn(d),u=u(d),r.flags|=1,un(n,r,u,o),r.child;case 14:return M0(n,r,r.type,r.pendingProps,o);case 15:return k0(n,r,r.type,r.pendingProps,o);case 19:return z0(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=_h(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=vs(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return P0(n,r,o);case 24:return va(r),u=gn(Qt),n===null?(d=Zf(),d===null&&(d=gt,m=Xf(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),r.memoizedState={parent:u,cache:d},tm(r),ir(r,Qt,d)):((n.lanes&o)!==0&&(nm(n,r),$l(r,null,null,o),Ql()),d=n.memoizedState,m=r.memoizedState,d.parent!==u?(d={parent:u,cache:u},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),ir(r,Qt,u)):(u=m.cache,ir(r,Qt,u),u!==d.cache&&Wf(r,[Qt],o,!0))),un(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Is(n){n.flags|=4}function H0(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Jv(r)){if(r=oi.current,r!==null&&(($e&4194048)===$e?qi!==null:($e&62914560)!==$e&&($e&536870912)===0||r!==qi))throw Kl=em,Iy;n.flags|=8192}}function yh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?$s():536870912,n.lanes|=r,xo|=r)}function nu(n,r){if(!nt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Rt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function $1(n,r,o){var u=r.pendingProps;switch(Kf(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(r),null;case 1:return Rt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ss(Qt),Xn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(jl(r)?Is(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,by())),Rt(r),null;case 26:return o=r.memoizedState,n===null?(Is(r),o!==null?(Rt(r),H0(r,o)):(Rt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(Is(r),Rt(r),H0(r,o)):(Rt(r),r.flags&=-16777217):(n.memoizedProps!==u&&Is(r),Rt(r),r.flags&=-16777217),null;case 27:Ci(r),o=Ne.current;var d=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Is(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return Rt(r),null}n=pe.current,jl(r)?Ey(r):(n=Hv(d,u,o),r.stateNode=n,Is(r))}return Rt(r),null;case 5:if(Ci(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Is(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return Rt(r),null}if(n=pe.current,jl(r))Ey(r);else{switch(d=Dh(Ne.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}n[Gt]=r,n[Ut]=u;e:for(d=r.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===r)break e;for(;d.sibling===null;){if(d.return===null||d.return===r)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}r.stateNode=n;e:switch(hn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Is(r)}}return Rt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&Is(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=Ne.current,jl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,d=Nn,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[Gt]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Lv(n.nodeValue,o)),n||_a(r)}else n=Dh(n).createTextNode(u),n[Gt]=r,r.stateNode=n}return Rt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=jl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(s(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[Gt]=r}else Bl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rt(r),d=!1}else d=by(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(As(r),r):(As(r),null)}if(As(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),yh(r,r.updateQueue),Rt(r),null;case 4:return Xn(),n===null&&sp(r.stateNode.containerInfo),Rt(r),null;case 10:return Ss(r.type),Rt(r),null;case 19:if(se($t),d=r.memoizedState,d===null)return Rt(r),null;if(u=(r.flags&128)!==0,m=d.rendering,m===null)if(u)nu(d,!1);else{if(xt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=fh(n),m!==null){for(r.flags|=128,nu(d,!1),n=m.updateQueue,r.updateQueue=n,yh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)yy(o,n),o=o.sibling;return te($t,$t.current&1|2),r.child}n=n.sibling}d.tail!==null&&An()>Th&&(r.flags|=128,u=!0,nu(d,!1),r.lanes=4194304)}else{if(!u)if(n=fh(m),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,yh(r,n),nu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!nt)return Rt(r),null}else 2*An()-d.renderingStartTime>Th&&o!==536870912&&(r.flags|=128,u=!0,nu(d,!1),r.lanes=4194304);d.isBackwards?(m.sibling=r.child,r.child=m):(n=d.last,n!==null?n.sibling=m:r.child=m,d.last=m)}return d.tail!==null?(r=d.tail,d.rendering=r,d.tail=r.sibling,d.renderingStartTime=An(),r.sibling=null,n=$t.current,te($t,u?n&1|2:n&1),r):(Rt(r),null);case 22:case 23:return As(r),am(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(Rt(r),r.subtreeFlags&6&&(r.flags|=8192)):Rt(r),o=r.updateQueue,o!==null&&yh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&se(Ea),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ss(Qt),Rt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function W1(n,r){switch(Kf(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ss(Qt),Xn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Ci(r),null;case 13:if(As(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Bl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return se($t),null;case 4:return Xn(),null;case 10:return Ss(r.type),null;case 22:case 23:return As(r),am(),n!==null&&se(Ea),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Ss(Qt),null;case 25:return null;default:return null}}function G0(n,r){switch(Kf(r),r.tag){case 3:Ss(Qt),Xn();break;case 26:case 27:case 5:Ci(r);break;case 4:Xn();break;case 13:As(r);break;case 19:se($t);break;case 10:Ss(r.type);break;case 22:case 23:As(r),am(),n!==null&&se(Ea);break;case 24:Ss(Qt)}}function iu(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==d)}}catch(b){pt(r,r.return,b)}}function cr(n,r,o){try{var u=r.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&n)===n){var E=u.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,d=r;var R=o,F=b;try{F()}catch(Q){pt(d,R,Q)}}}u=u.next}while(u!==m)}}catch(Q){pt(r,r.return,Q)}}function K0(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{My(r,o)}catch(u){pt(n,n.return,u)}}}function Y0(n,r,o){o.props=ba(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){pt(n,r,u)}}function su(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){pt(n,r,d)}}function Hi(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){pt(n,r,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){pt(n,r,d)}else o.current=null}function Q0(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){pt(n,n.return,d)}}function km(n,r,o){try{var u=n.stateNode;_R(u,n.type,o,r),u[Ut]=r}catch(d){pt(n,n.return,d)}}function $0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&yr(n.type)||n.tag===4}function Pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&yr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vm(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=xh));else if(u!==4&&(u===27&&yr(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(Vm(n,r,o),n=n.sibling;n!==null;)Vm(n,r,o),n=n.sibling}function vh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&yr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(vh(n,r,o),n=n.sibling;n!==null;)vh(n,r,o),n=n.sibling}function W0(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);hn(r,u,o),r[Gt]=n,r[Ut]=o}catch(m){pt(n,n.return,m)}}var Cs=!1,Pt=!1,Lm=!1,X0=typeof WeakSet=="function"?WeakSet:Set,tn=null;function X1(n,r){if(n=n.containerInfo,op=Lh,n=ly(n),Pf(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,b=-1,R=-1,F=0,Q=0,J=n,q=null;t:for(;;){for(var H;J!==o||d!==0&&J.nodeType!==3||(b=E+d),J!==m||u!==0&&J.nodeType!==3||(R=E+u),J.nodeType===3&&(E+=J.nodeValue.length),(H=J.firstChild)!==null;)q=J,J=H;for(;;){if(J===n)break t;if(q===o&&++F===d&&(b=E),q===m&&++Q===u&&(R=E),(H=J.nextSibling)!==null)break;J=q,q=J.parentNode}J=H}o=b===-1||R===-1?null:{start:b,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(lp={focusedElem:n,selectionRange:o},Lh=!1,tn=r;tn!==null;)if(r=tn,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,tn=n;else for(;tn!==null;){switch(r=tn,m=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=r,d=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var xe=ba(o.type,d,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(xe,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(we){pt(o,o.return,we)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)hp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":hp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,tn=n;break}tn=r.return}}function J0(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:hr(n,o),u&4&&iu(5,o);break;case 1:if(hr(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){pt(o,o.return,E)}else{var d=ba(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(d,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){pt(o,o.return,E)}}u&64&&K0(o),u&512&&su(o,o.return);break;case 3:if(hr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{My(n,r)}catch(E){pt(o,o.return,E)}}break;case 27:r===null&&u&4&&W0(o);case 26:case 5:hr(n,o),r===null&&u&4&&Q0(o),u&512&&su(o,o.return);break;case 12:hr(n,o);break;case 13:hr(n,o),u&4&&tv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=aR.bind(null,o),wR(n,o))));break;case 22:if(u=o.memoizedState!==null||Cs,!u){r=r!==null&&r.memoizedState!==null||Pt,d=Cs;var m=Pt;Cs=u,(Pt=r)&&!m?dr(n,o,(o.subtreeFlags&8772)!==0):hr(n,o),Cs=d,Pt=m}break;case 30:break;default:hr(n,o)}}function Z0(n){var r=n.alternate;r!==null&&(n.alternate=null,Z0(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Zs(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var wt=null,On=!1;function Ns(n,r,o){for(o=o.child;o!==null;)ev(n,r,o),o=o.sibling}function ev(n,r,o){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 26:Pt||Hi(o,r),Ns(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Pt||Hi(o,r);var u=wt,d=On;yr(o.type)&&(wt=o.stateNode,On=!1),Ns(n,r,o),fu(o.stateNode),wt=u,On=d;break;case 5:Pt||Hi(o,r);case 6:if(u=wt,d=On,wt=null,Ns(n,r,o),wt=u,On=d,wt!==null)if(On)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(o.stateNode)}catch(m){pt(o,r,m)}else try{wt.removeChild(o.stateNode)}catch(m){pt(o,r,m)}break;case 18:wt!==null&&(On?(n=wt,zv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Tu(n)):zv(wt,o.stateNode));break;case 4:u=wt,d=On,wt=o.stateNode.containerInfo,On=!0,Ns(n,r,o),wt=u,On=d;break;case 0:case 11:case 14:case 15:Pt||cr(2,o,r),Pt||cr(4,o,r),Ns(n,r,o);break;case 1:Pt||(Hi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Y0(o,r,u)),Ns(n,r,o);break;case 21:Ns(n,r,o);break;case 22:Pt=(u=Pt)||o.memoizedState!==null,Ns(n,r,o),Pt=u;break;default:Ns(n,r,o)}}function tv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Tu(n)}catch(o){pt(r,r.return,o)}}function J1(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new X0),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new X0),r;default:throw Error(s(435,n.tag))}}function Um(n,r){var o=J1(n);r.forEach(function(u){var d=oR.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}function qn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],m=n,E=r,b=E;e:for(;b!==null;){switch(b.tag){case 27:if(yr(b.type)){wt=b.stateNode,On=!1;break e}break;case 5:wt=b.stateNode,On=!1;break e;case 3:case 4:wt=b.stateNode.containerInfo,On=!0;break e}b=b.return}if(wt===null)throw Error(s(160));ev(m,E,d),wt=null,On=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)nv(r,n),r=r.sibling}var vi=null;function nv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:qn(r,n),Hn(n),u&4&&(cr(3,n,n.return),iu(3,n),cr(5,n,n.return));break;case 1:qn(r,n),Hn(n),u&512&&(Pt||o===null||Hi(o,o.return)),u&64&&Cs&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=vi;if(qn(r,n),Hn(n),u&512&&(Pt||o===null||Hi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Xr]||m[Gt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),hn(m,u,o),m[Gt]=n,Mt(m),u=m;break e;case"link":var E=Wv("link","href",d).get(u+(o.href||""));if(E){for(var b=0;b<E.length;b++)if(m=E[b],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(b,1);break t}}m=d.createElement(u),hn(m,u,o),d.head.appendChild(m);break;case"meta":if(E=Wv("meta","content",d).get(u+(o.content||""))){for(b=0;b<E.length;b++)if(m=E[b],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(b,1);break t}}m=d.createElement(u),hn(m,u,o),d.head.appendChild(m);break;default:throw Error(s(468,u))}m[Gt]=n,Mt(m),u=m}n.stateNode=u}else Xv(d,n.type,n.stateNode);else n.stateNode=$v(d,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?Xv(d,n.type,n.stateNode):$v(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&km(n,n.memoizedProps,o.memoizedProps)}break;case 27:qn(r,n),Hn(n),u&512&&(Pt||o===null||Hi(o,o.return)),o!==null&&u&4&&km(n,n.memoizedProps,o.memoizedProps);break;case 5:if(qn(r,n),Hn(n),u&512&&(Pt||o===null||Hi(o,o.return)),n.flags&32){d=n.stateNode;try{Zn(d,"")}catch(H){pt(n,n.return,H)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,km(n,d,o!==null?o.memoizedProps:d)),u&1024&&(Lm=!0);break;case 6:if(qn(r,n),Hn(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(H){pt(n,n.return,H)}}break;case 3:if(kh=null,d=vi,vi=Oh(r.containerInfo),qn(r,n),vi=d,Hn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Tu(r.containerInfo)}catch(H){pt(n,n.return,H)}Lm&&(Lm=!1,iv(n));break;case 4:u=vi,vi=Oh(n.stateNode.containerInfo),qn(r,n),Hn(n),vi=u;break;case 12:qn(r,n),Hn(n);break;case 13:qn(r,n),Hn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Hm=An()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Um(n,u)));break;case 22:d=n.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,F=Cs,Q=Pt;if(Cs=F||d,Pt=Q||R,qn(r,n),Pt=Q,Cs=F,Hn(n),u&8192)e:for(r=n.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||R||Cs||Pt||Sa(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){R=o=r;try{if(m=R.stateNode,d)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=R.stateNode;var J=R.memoizedProps.style,q=J!=null&&J.hasOwnProperty("display")?J.display:null;b.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){pt(R,R.return,H)}}}else if(r.tag===6){if(o===null){R=r;try{R.stateNode.nodeValue=d?"":R.memoizedProps}catch(H){pt(R,R.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Um(n,o))));break;case 19:qn(r,n),Hn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Um(n,u)));break;case 30:break;case 21:break;default:qn(r,n),Hn(n)}}function Hn(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if($0(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var d=o.stateNode,m=Pm(n);vh(n,m,d);break;case 5:var E=o.stateNode;o.flags&32&&(Zn(E,""),o.flags&=-33);var b=Pm(n);vh(n,b,E);break;case 3:case 4:var R=o.stateNode.containerInfo,F=Pm(n);Vm(n,F,R);break;default:throw Error(s(161))}}catch(Q){pt(n,n.return,Q)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function iv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;iv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function hr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)J0(n,r.alternate,r),r=r.sibling}function Sa(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:cr(4,r,r.return),Sa(r);break;case 1:Hi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Y0(r,r.return,o),Sa(r);break;case 27:fu(r.stateNode);case 26:case 5:Hi(r,r.return),Sa(r);break;case 22:r.memoizedState===null&&Sa(r);break;case 30:Sa(r);break;default:Sa(r)}n=n.sibling}}function dr(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,d=n,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:dr(d,m,o),iu(4,m);break;case 1:if(dr(d,m,o),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(F){pt(u,u.return,F)}if(u=m,d=u.updateQueue,d!==null){var b=u.stateNode;try{var R=d.shared.hiddenCallbacks;if(R!==null)for(d.shared.hiddenCallbacks=null,d=0;d<R.length;d++)Oy(R[d],b)}catch(F){pt(u,u.return,F)}}o&&E&64&&K0(m),su(m,m.return);break;case 27:W0(m);case 26:case 5:dr(d,m,o),o&&u===null&&E&4&&Q0(m),su(m,m.return);break;case 12:dr(d,m,o);break;case 13:dr(d,m,o),o&&E&4&&tv(d,m);break;case 22:m.memoizedState===null&&dr(d,m,o),su(m,m.return);break;case 30:break;default:dr(d,m,o)}r=r.sibling}}function jm(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&ql(o))}function Bm(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ql(n))}function Gi(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)sv(n,r,o,u),r=r.sibling}function sv(n,r,o,u){var d=r.flags;switch(r.tag){case 0:case 11:case 15:Gi(n,r,o,u),d&2048&&iu(9,r);break;case 1:Gi(n,r,o,u);break;case 3:Gi(n,r,o,u),d&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ql(n)));break;case 12:if(d&2048){Gi(n,r,o,u),n=r.stateNode;try{var m=r.memoizedProps,E=m.id,b=m.onPostCommit;typeof b=="function"&&b(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(R){pt(r,r.return,R)}}else Gi(n,r,o,u);break;case 13:Gi(n,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Gi(n,r,o,u):ru(n,r):m._visibility&2?Gi(n,r,o,u):(m._visibility|=2,Io(n,r,o,u,(r.subtreeFlags&10256)!==0)),d&2048&&jm(E,r);break;case 24:Gi(n,r,o,u),d&2048&&Bm(r.alternate,r);break;default:Gi(n,r,o,u)}}function Io(n,r,o,u,d){for(d=d&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=n,E=r,b=o,R=u,F=E.flags;switch(E.tag){case 0:case 11:case 15:Io(m,E,b,R,d),iu(8,E);break;case 23:break;case 22:var Q=E.stateNode;E.memoizedState!==null?Q._visibility&2?Io(m,E,b,R,d):ru(m,E):(Q._visibility|=2,Io(m,E,b,R,d)),d&&F&2048&&jm(E.alternate,E);break;case 24:Io(m,E,b,R,d),d&&F&2048&&Bm(E.alternate,E);break;default:Io(m,E,b,R,d)}r=r.sibling}}function ru(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,d=u.flags;switch(u.tag){case 22:ru(o,u),d&2048&&jm(u.alternate,u);break;case 24:ru(o,u),d&2048&&Bm(u.alternate,u);break;default:ru(o,u)}r=r.sibling}}var au=8192;function Co(n){if(n.subtreeFlags&au)for(n=n.child;n!==null;)rv(n),n=n.sibling}function rv(n){switch(n.tag){case 26:Co(n),n.flags&au&&n.memoizedState!==null&&LR(vi,n.memoizedState,n.memoizedProps);break;case 5:Co(n);break;case 3:case 4:var r=vi;vi=Oh(n.stateNode.containerInfo),Co(n),vi=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=au,au=16777216,Co(n),au=r):Co(n));break;default:Co(n)}}function av(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function ou(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];tn=u,lv(u,n)}av(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ov(n),n=n.sibling}function ov(n){switch(n.tag){case 0:case 11:case 15:ou(n),n.flags&2048&&cr(9,n,n.return);break;case 3:ou(n);break;case 12:ou(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Eh(n)):ou(n);break;default:ou(n)}}function Eh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];tn=u,lv(u,n)}av(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:cr(8,r,r.return),Eh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Eh(r));break;default:Eh(r)}n=n.sibling}}function lv(n,r){for(;tn!==null;){var o=tn;switch(o.tag){case 0:case 11:case 15:cr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ql(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,tn=u;else e:for(o=n;tn!==null;){u=tn;var d=u.sibling,m=u.return;if(Z0(u),u===o){tn=null;break e}if(d!==null){d.return=m,tn=d;break e}tn=m}}}var Z1={getCacheForType:function(n){var r=gn(Qt),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},eR=typeof WeakMap=="function"?WeakMap:Map,ot=0,gt=null,Fe=null,$e=0,lt=0,Gn=null,fr=!1,No=!1,Fm=!1,xs=0,xt=0,mr=0,wa=0,zm=0,li=0,xo=0,lu=null,Mn=null,qm=!1,Hm=0,Th=1/0,bh=null,pr=null,cn=0,gr=null,Do=null,Oo=0,Gm=0,Km=null,uv=null,uu=0,Ym=null;function Kn(){if((ot&2)!==0&&$e!==0)return $e&-$e;if(z.T!==null){var n=vo;return n!==0?n:ep()}return Xs()}function cv(){li===0&&(li=($e&536870912)===0||nt?xn():536870912);var n=oi.current;return n!==null&&(n.flags|=32),li}function Yn(n,r,o){(n===gt&&(lt===2||lt===9)||n.cancelPendingCommit!==null)&&(Mo(n,0),_r(n,$e,li,!1)),ls(n,o),((ot&2)===0||n!==gt)&&(n===gt&&((ot&2)===0&&(wa|=o),xt===4&&_r(n,$e,li,!1)),Ki(n))}function hv(n,r,o){if((ot&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||At(n,r),d=u?iR(n,r):Wm(n,r,!0),m=u;do{if(d===0){No&&!u&&_r(n,r,0,!1);break}else{if(o=n.current.alternate,m&&!tR(o)){d=Wm(n,r,!1),m=!1;continue}if(d===2){if(m=r,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var b=n;d=lu;var R=b.current.memoizedState.isDehydrated;if(R&&(Mo(b,E).flags|=256),E=Wm(b,E,!1),E!==2){if(Fm&&!R){b.errorRecoveryDisabledLanes|=m,wa|=m,d=4;break e}m=Mn,Mn=d,m!==null&&(Mn===null?Mn=m:Mn.push.apply(Mn,m))}d=E}if(m=!1,d!==2)continue}}if(d===1){Mo(n,0),_r(n,r,0,!0);break}e:{switch(u=n,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:_r(u,r,li,!fr);break e;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(d=Hm+300-An(),10<d)){if(_r(u,r,li,!fr),Be(u,0,!0)!==0)break e;u.timeoutHandle=Bv(dv.bind(null,u,o,Mn,bh,qm,r,li,wa,xo,fr,m,2,-0,0),d);break e}dv(u,o,Mn,bh,qm,r,li,wa,xo,fr,m,0,-0,0)}}break}while(!0);Ki(n)}function dv(n,r,o,u,d,m,E,b,R,F,Q,J,q,H){if(n.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(gu={stylesheets:null,count:0,unsuspend:VR},rv(r),J=UR(),J!==null)){n.cancelPendingCommit=J(vv.bind(null,n,r,m,o,u,d,E,b,R,Q,1,q,H)),_r(n,m,E,!F);return}vv(n,r,m,o,u,d,E,b,R)}function tR(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Fn(m(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _r(n,r,o,u){r&=~zm,r&=~wa,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var d=r;0<d;){var m=31-Xt(d),E=1<<m;u[m]=-1,d&=~E}o!==0&&Di(n,o,r)}function Sh(){return(ot&6)===0?(cu(0),!1):!0}function Qm(){if(Fe!==null){if(lt===0)var n=Fe.return;else n=Fe,bs=ya=null,hm(n),Ao=null,eu=0,n=Fe;for(;n!==null;)G0(n.alternate,n),n=n.return;Fe=null}}function Mo(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,vR(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Qm(),gt=n,Fe=o=vs(n.current,null),$e=r,lt=0,Gn=null,fr=!1,No=At(n,r),Fm=!1,xo=li=zm=wa=mr=xt=0,Mn=lu=null,qm=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var d=31-Xt(u),m=1<<d;r|=n[d],u&=~m}return xs=r,Gc(),o}function fv(n,r){Le=null,z.H=ch,r===Gl||r===eh?(r=xy(),lt=3):r===Iy?(r=xy(),lt=4):lt=r===D0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Gn=r,Fe===null&&(xt=1,ph(n,ii(r,n.current)))}function mv(){var n=z.H;return z.H=ch,n===null?ch:n}function pv(){var n=z.A;return z.A=Z1,n}function $m(){xt=4,fr||($e&4194048)!==$e&&oi.current!==null||(No=!0),(mr&134217727)===0&&(wa&134217727)===0||gt===null||_r(gt,$e,li,!1)}function Wm(n,r,o){var u=ot;ot|=2;var d=mv(),m=pv();(gt!==n||$e!==r)&&(bh=null,Mo(n,r)),r=!1;var E=xt;e:do try{if(lt!==0&&Fe!==null){var b=Fe,R=Gn;switch(lt){case 8:Qm(),E=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(r=!0);var F=lt;if(lt=0,Gn=null,ko(n,b,R,F),o&&No){E=0;break e}break;default:F=lt,lt=0,Gn=null,ko(n,b,R,F)}}nR(),E=xt;break}catch(Q){fv(n,Q)}while(!0);return r&&n.shellSuspendCounter++,bs=ya=null,ot=u,z.H=d,z.A=m,Fe===null&&(gt=null,$e=0,Gc()),E}function nR(){for(;Fe!==null;)gv(Fe)}function iR(n,r){var o=ot;ot|=2;var u=mv(),d=pv();gt!==n||$e!==r?(bh=null,Th=An()+500,Mo(n,r)):No=At(n,r);e:do try{if(lt!==0&&Fe!==null){r=Fe;var m=Gn;t:switch(lt){case 1:lt=0,Gn=null,ko(n,r,m,1);break;case 2:case 9:if(Cy(m)){lt=0,Gn=null,_v(r);break}r=function(){lt!==2&&lt!==9||gt!==n||(lt=7),Ki(n)},m.then(r,r);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Cy(m)?(lt=0,Gn=null,_v(r)):(lt=0,Gn=null,ko(n,r,m,7));break;case 5:var E=null;switch(Fe.tag){case 26:E=Fe.memoizedState;case 5:case 27:var b=Fe;if(!E||Jv(E)){lt=0,Gn=null;var R=b.sibling;if(R!==null)Fe=R;else{var F=b.return;F!==null?(Fe=F,wh(F)):Fe=null}break t}}lt=0,Gn=null,ko(n,r,m,5);break;case 6:lt=0,Gn=null,ko(n,r,m,6);break;case 8:Qm(),xt=6;break e;default:throw Error(s(462))}}sR();break}catch(Q){fv(n,Q)}while(!0);return bs=ya=null,z.H=u,z.A=d,ot=o,Fe!==null?0:(gt=null,$e=0,Gc(),xt)}function sR(){for(;Fe!==null&&!$r();)gv(Fe)}function gv(n){var r=q0(n.alternate,n,xs);n.memoizedProps=n.pendingProps,r===null?wh(n):Fe=r}function _v(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=L0(o,r,r.pendingProps,r.type,void 0,$e);break;case 11:r=L0(o,r,r.pendingProps,r.type.render,r.ref,$e);break;case 5:hm(r);default:G0(o,r),r=Fe=yy(r,xs),r=q0(o,r,xs)}n.memoizedProps=n.pendingProps,r===null?wh(n):Fe=r}function ko(n,r,o,u){bs=ya=null,hm(r),Ao=null,eu=0;var d=r.return;try{if(Y1(n,d,r,o,$e)){xt=1,ph(n,ii(o,n.current)),Fe=null;return}}catch(m){if(d!==null)throw Fe=d,m;xt=1,ph(n,ii(o,n.current)),Fe=null;return}r.flags&32768?(nt||u===1?n=!0:No||($e&536870912)!==0?n=!1:(fr=n=!0,(u===2||u===9||u===3||u===6)&&(u=oi.current,u!==null&&u.tag===13&&(u.flags|=16384))),yv(r,n)):wh(r)}function wh(n){var r=n;do{if((r.flags&32768)!==0){yv(r,fr);return}n=r.return;var o=$1(r.alternate,r,xs);if(o!==null){Fe=o;return}if(r=r.sibling,r!==null){Fe=r;return}Fe=r=n}while(r!==null);xt===0&&(xt=5)}function yv(n,r){do{var o=W1(n.alternate,n);if(o!==null){o.flags&=32767,Fe=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Fe=n;return}Fe=n=o}while(n!==null);xt=6,Fe=null}function vv(n,r,o,u,d,m,E,b,R){n.cancelPendingCommit=null;do Ah();while(cn!==0);if((ot&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=Bf,El(n,o,m,E,b,R),n===gt&&(Fe=gt=null,$e=0),Do=r,gr=n,Oo=o,Gm=m,Km=d,uv=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,lR(as,function(){return wv(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,d=ee.p,ee.p=2,E=ot,ot|=4;try{X1(n,r,o)}finally{ot=E,ee.p=d,z.T=u}}cn=1,Ev(),Tv(),bv()}}function Ev(){if(cn===1){cn=0;var n=gr,r=Do,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var u=ee.p;ee.p=2;var d=ot;ot|=4;try{nv(r,n);var m=lp,E=ly(n.containerInfo),b=m.focusedElem,R=m.selectionRange;if(E!==b&&b&&b.ownerDocument&&oy(b.ownerDocument.documentElement,b)){if(R!==null&&Pf(b)){var F=R.start,Q=R.end;if(Q===void 0&&(Q=F),"selectionStart"in b)b.selectionStart=F,b.selectionEnd=Math.min(Q,b.value.length);else{var J=b.ownerDocument||document,q=J&&J.defaultView||window;if(q.getSelection){var H=q.getSelection(),xe=b.textContent.length,we=Math.min(R.start,xe),ft=R.end===void 0?we:Math.min(R.end,xe);!H.extend&&we>ft&&(E=ft,ft=we,we=E);var U=ay(b,we),O=ay(b,ft);if(U&&O&&(H.rangeCount!==1||H.anchorNode!==U.node||H.anchorOffset!==U.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var B=J.createRange();B.setStart(U.node,U.offset),H.removeAllRanges(),we>ft?(H.addRange(B),H.extend(O.node,O.offset)):(B.setEnd(O.node,O.offset),H.addRange(B))}}}}for(J=[],H=b;H=H.parentNode;)H.nodeType===1&&J.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<J.length;b++){var $=J[b];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Lh=!!op,lp=op=null}finally{ot=d,ee.p=u,z.T=o}}n.current=r,cn=2}}function Tv(){if(cn===2){cn=0;var n=gr,r=Do,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var u=ee.p;ee.p=2;var d=ot;ot|=4;try{J0(n,r.alternate,r)}finally{ot=d,ee.p=u,z.T=o}}cn=3}}function bv(){if(cn===4||cn===3){cn=0,Ya();var n=gr,r=Do,o=Oo,u=uv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?cn=5:(cn=0,Do=gr=null,Sv(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(pr=null),Wa(o),r=r.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(bt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=z.T,d=ee.p,ee.p=2,z.T=null;try{for(var m=n.onRecoverableError,E=0;E<u.length;E++){var b=u[E];m(b.value,{componentStack:b.stack})}}finally{z.T=r,ee.p=d}}(Oo&3)!==0&&Ah(),Ki(n),d=n.pendingLanes,(o&4194090)!==0&&(d&42)!==0?n===Ym?uu++:(uu=0,Ym=n):uu=0,cu(0)}}function Sv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,ql(r)))}function Ah(n){return Ev(),Tv(),bv(),wv()}function wv(){if(cn!==5)return!1;var n=gr,r=Gm;Gm=0;var o=Wa(Oo),u=z.T,d=ee.p;try{ee.p=32>o?32:o,z.T=null,o=Km,Km=null;var m=gr,E=Oo;if(cn=0,Do=gr=null,Oo=0,(ot&6)!==0)throw Error(s(331));var b=ot;if(ot|=4,ov(m.current),sv(m,m.current,E,o),ot=b,cu(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(bt,m)}catch{}return!0}finally{ee.p=d,z.T=u,Sv(n,r)}}function Av(n,r,o){r=ii(o,r),r=Am(n.stateNode,r,2),n=ar(n,r,2),n!==null&&(ls(n,2),Ki(n))}function pt(n,r,o){if(n.tag===3)Av(n,n,o);else for(;r!==null;){if(r.tag===3){Av(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pr===null||!pr.has(u))){n=ii(o,n),o=N0(2),u=ar(r,o,2),u!==null&&(x0(o,u,r,n),ls(u,2),Ki(u));break}}r=r.return}}function Xm(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new eR;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(o)||(Fm=!0,d.add(o),n=rR.bind(null,n,r,o),r.then(n,n))}function rR(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,gt===n&&($e&o)===o&&(xt===4||xt===3&&($e&62914560)===$e&&300>An()-Hm?(ot&2)===0&&Mo(n,0):zm|=o,xo===$e&&(xo=0)),Ki(n)}function Rv(n,r){r===0&&(r=$s()),n=po(n,r),n!==null&&(ls(n,r),Ki(n))}function aR(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Rv(n,o)}function oR(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),Rv(n,o)}function lR(n,r){return Ni(n,r)}var Rh=null,Po=null,Jm=!1,Ih=!1,Zm=!1,Aa=0;function Ki(n){n!==Po&&n.next===null&&(Po===null?Rh=Po=n:Po=Po.next=n),Ih=!0,Jm||(Jm=!0,cR())}function cu(n,r){if(!Zm&&Ih){Zm=!0;do for(var o=!1,u=Rh;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var E=u.suspendedLanes,b=u.pingedLanes;m=(1<<31-Xt(42|n)+1)-1,m&=d&~(E&~b),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,xv(u,m))}else m=$e,m=Be(u,u===gt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||At(u,m)||(o=!0,xv(u,m));u=u.next}while(o);Zm=!1}}function uR(){Iv()}function Iv(){Ih=Jm=!1;var n=0;Aa!==0&&(yR()&&(n=Aa),Aa=0);for(var r=An(),o=null,u=Rh;u!==null;){var d=u.next,m=Cv(u,r);m===0?(u.next=null,o===null?Rh=d:o.next=d,d===null&&(Po=o)):(o=u,(n!==0||(m&3)!==0)&&(Ih=!0)),u=d}cu(n)}function Cv(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-Xt(m),b=1<<E,R=d[E];R===-1?((b&o)===0||(b&u)!==0)&&(d[E]=Ot(b,r)):R<=r&&(n.expiredLanes|=b),m&=~b}if(r=gt,o=$e,o=Be(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(lt===2||lt===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&xi(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||At(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&xi(u),Wa(o)){case 2:case 8:o=Ys;break;case 32:o=as;break;case 268435456:o=Qs;break;default:o=as}return u=Nv.bind(null,n),o=Ni(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&xi(u),n.callbackPriority=2,n.callbackNode=null,2}function Nv(n,r){if(cn!==0&&cn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Ah()&&n.callbackNode!==o)return null;var u=$e;return u=Be(n,n===gt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(hv(n,u,r),Cv(n,An()),n.callbackNode!=null&&n.callbackNode===o?Nv.bind(null,n):null)}function xv(n,r){if(Ah())return null;hv(n,r,!0)}function cR(){ER(function(){(ot&6)!==0?Ni(Wr,uR):Iv()})}function ep(){return Aa===0&&(Aa=xn()),Aa}function Dv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:no(""+n)}function Ov(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function hR(n,r,o,u,d){if(r==="submit"&&o&&o.stateNode===d){var m=Dv((d[Ut]||null).action),E=u.submitter;E&&(r=(r=E[Ut]||null)?Dv(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var b=new io("action","action",null,u,d);n.push({event:b,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Aa!==0){var R=E?Ov(d,E):new FormData(d);Em(o,{pending:!0,data:R,method:d.method,action:m},null,R)}}else typeof m=="function"&&(b.preventDefault(),R=E?Ov(d,E):new FormData(d),Em(o,{pending:!0,data:R,method:d.method,action:m},m,R))},currentTarget:d}]})}}for(var tp=0;tp<jf.length;tp++){var np=jf[tp],dR=np.toLowerCase(),fR=np[0].toUpperCase()+np.slice(1);yi(dR,"on"+fR)}yi(hy,"onAnimationEnd"),yi(dy,"onAnimationIteration"),yi(fy,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(x1,"onTransitionRun"),yi(D1,"onTransitionStart"),yi(O1,"onTransitionCancel"),yi(my,"onTransitionEnd"),cs("onMouseEnter",["mouseout","mouseover"]),cs("onMouseLeave",["mouseout","mouseover"]),cs("onPointerEnter",["pointerout","pointerover"]),cs("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));function Mv(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var b=u[E],R=b.instance,F=b.currentTarget;if(b=b.listener,R!==m&&d.isPropagationStopped())break e;m=b,d.currentTarget=F;try{m(d)}catch(Q){mh(Q)}d.currentTarget=null,m=R}else for(E=0;E<u.length;E++){if(b=u[E],R=b.instance,F=b.currentTarget,b=b.listener,R!==m&&d.isPropagationStopped())break e;m=b,d.currentTarget=F;try{m(d)}catch(Q){mh(Q)}d.currentTarget=null,m=R}}}}function ze(n,r){var o=r[bl];o===void 0&&(o=r[bl]=new Set);var u=n+"__bubble";o.has(u)||(kv(r,n,2,!1),o.add(u))}function ip(n,r,o){var u=0;r&&(u|=4),kv(o,n,u,r)}var Ch="_reactListening"+Math.random().toString(36).slice(2);function sp(n){if(!n[Ch]){n[Ch]=!0,Sl.forEach(function(o){o!=="selectionchange"&&(mR.has(o)||ip(o,!1,n),ip(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ch]||(r[Ch]=!0,ip("selectionchange",!1,r))}}function kv(n,r,o,u){switch(sE(r)){case 2:var d=FR;break;case 8:d=zR;break;default:d=yp}o=d.bind(null,r,o,n),d=void 0,!ti||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function rp(n,r,o,u,d){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var b=u.stateNode.containerInfo;if(b===d)break;if(E===4)for(E=u.return;E!==null;){var R=E.tag;if((R===3||R===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;b!==null;){if(E=us(b),E===null)return;if(R=E.tag,R===5||R===6||R===26||R===27){u=m=E;continue e}b=b.parentNode}}u=u.return}xc(function(){var F=m,Q=ei(o),J=[];e:{var q=py.get(n);if(q!==void 0){var H=io,xe=n;switch(n){case"keypress":if(Li(o)===0)break e;case"keydown":case"keyup":H=uo;break;case"focusin":xe="focus",H=ao;break;case"focusout":xe="blur",H=ao;break;case"beforeblur":case"afterblur":H=ao;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Uc;break;case hy:case dy:case fy:H=oo;break;case my:H=Bc;break;case"scroll":case"scrollend":H=Dc;break;case"wheel":H=co;break;case"copy":case"cut":case"paste":H=lo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Pl;break;case"toggle":case"beforetoggle":H=zc}var we=(r&4)!==0,ft=!we&&(n==="scroll"||n==="scrollend"),U=we?q!==null?q+"Capture":null:q;we=[];for(var O=F,B;O!==null;){var $=O;if(B=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||B===null||U===null||($=sa(O,U),$!=null&&we.push(du(O,$,B))),ft)break;O=O.return}0<we.length&&(q=new H(q,xe,null,o,Q),J.push({event:q,listeners:we}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",H=n==="mouseout"||n==="pointerout",q&&o!==fs&&(xe=o.relatedTarget||o.fromElement)&&(us(xe)||xe[Jn]))break e;if((H||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,H?(xe=o.relatedTarget||o.toElement,H=F,xe=xe?us(xe):null,xe!==null&&(ft=l(xe),we=xe.tag,xe!==ft||we!==5&&we!==27&&we!==6)&&(xe=null)):(H=null,xe=F),H!==xe)){if(we=ni,$="onMouseLeave",U="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(we=Pl,$="onPointerLeave",U="onPointerEnter",O="pointer"),ft=H==null?q:Mi(H),B=xe==null?q:Mi(xe),q=new we($,O+"leave",H,o,Q),q.target=ft,q.relatedTarget=B,$=null,us(Q)===F&&(we=new we(U,O+"enter",xe,o,Q),we.target=B,we.relatedTarget=ft,$=we),ft=$,H&&xe)t:{for(we=H,U=xe,O=0,B=we;B;B=Vo(B))O++;for(B=0,$=U;$;$=Vo($))B++;for(;0<O-B;)we=Vo(we),O--;for(;0<B-O;)U=Vo(U),B--;for(;O--;){if(we===U||U!==null&&we===U.alternate)break t;we=Vo(we),U=Vo(U)}we=null}else we=null;H!==null&&Pv(J,q,H,we,!1),xe!==null&&ft!==null&&Pv(J,ft,xe,we,!0)}}e:{if(q=F?Mi(F):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var me=ey;else if(Yt(q))if(ty)me=I1;else{me=A1;var je=w1}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?F&&Cl(F.elementType)&&(me=ey):me=R1;if(me&&(me=me(n,F))){ys(J,me,o,Q);break e}je&&je(n,q,F),n==="focusout"&&F&&q.type==="number"&&F.memoizedProps.value!=null&&tr(q,"number",q.value)}switch(je=F?Mi(F):window,n){case"focusin":(Yt(je)||je.contentEditable==="true")&&(ho=je,Vf=F,Ul=null);break;case"focusout":Ul=Vf=ho=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,uy(J,o,Q);break;case"selectionchange":if(N1)break;case"keydown":case"keyup":uy(J,o,Q)}var Ee;if(Bi)e:{switch(n){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Ye?K(n,o)&&(Ae="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ae="onCompositionStart");Ae&&(y&&o.locale!=="ko"&&(Ye||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ye&&(Ee=xl()):(Vi=Q,nr="value"in Vi?Vi.value:Vi.textContent,Ye=!0)),je=Nh(F,Ae),0<je.length&&(Ae=new Ml(Ae,n,null,o,Q),J.push({event:Ae,listeners:je}),Ee?Ae.data=Ee:(Ee=ne(o),Ee!==null&&(Ae.data=Ee)))),(Ee=_?Kt(n,o):Qe(n,o))&&(Ae=Nh(F,"onBeforeInput"),0<Ae.length&&(je=new Ml("onBeforeInput","beforeinput",null,o,Q),J.push({event:je,listeners:Ae}),je.data=Ee)),hR(J,n,F,o,Q)}Mv(J,r)})}function du(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Nh(n,r){for(var o=r+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=sa(n,o),d!=null&&u.unshift(du(n,d,m)),d=sa(n,r),d!=null&&u.push(du(n,d,m))),n.tag===3)return u;n=n.return}return[]}function Vo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Pv(n,r,o,u,d){for(var m=r._reactName,E=[];o!==null&&o!==u;){var b=o,R=b.alternate,F=b.stateNode;if(b=b.tag,R!==null&&R===u)break;b!==5&&b!==26&&b!==27||F===null||(R=F,d?(F=sa(o,m),F!=null&&E.unshift(du(o,F,R))):d||(F=sa(o,m),F!=null&&E.push(du(o,F,R)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var pR=/\r\n?/g,gR=/\u0000|\uFFFD/g;function Vv(n){return(typeof n=="string"?n:""+n).replace(pR,`
`).replace(gR,"")}function Lv(n,r){return r=Vv(r),Vv(n)===r}function xh(){}function dt(n,r,o,u,d,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Zn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Zn(n,""+u);break;case"className":ki(n,"class",u);break;case"tabIndex":ki(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ki(n,o,u);break;case"style":Il(n,u,m);break;case"data":if(r!=="object"){ki(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=no(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&dt(n,r,"name",d.name,d,null),dt(n,r,"formEncType",d.formEncType,d,null),dt(n,r,"formMethod",d.formMethod,d,null),dt(n,r,"formTarget",d.formTarget,d,null)):(dt(n,r,"encType",d.encType,d,null),dt(n,r,"method",d.method,d,null),dt(n,r,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=no(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=xh);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=no(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":ze("beforetoggle",n),ze("toggle",n),er(n,"popover",u);break;case"xlinkActuate":on(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":on(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":on(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":on(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":on(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":on(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":on(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":on(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":on(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":er(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Nf.get(o)||o,er(n,o,u))}}function ap(n,r,o,u,d,m){switch(o){case"style":Il(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Zn(n,u):(typeof u=="number"||typeof u=="bigint")&&Zn(n,""+u);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"onClick":u!=null&&(n.onclick=xh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),m=n[Ut]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(r,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,d);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):er(n,o,u)}}}function hn(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",n),ze("load",n);var u=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:dt(n,r,m,E,o,null)}}d&&dt(n,r,"srcSet",o.srcSet,o,null),u&&dt(n,r,"src",o.src,o,null);return;case"input":ze("invalid",n);var b=m=E=d=null,R=null,F=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":d=Q;break;case"type":E=Q;break;case"checked":R=Q;break;case"defaultChecked":F=Q;break;case"value":m=Q;break;case"defaultValue":b=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:dt(n,r,u,Q,o,null)}}ta(n,m,b,R,F,E,d,!1),to(n);return;case"select":ze("invalid",n),u=E=m=null;for(d in o)if(o.hasOwnProperty(d)&&(b=o[d],b!=null))switch(d){case"value":m=b;break;case"defaultValue":E=b;break;case"multiple":u=b;default:dt(n,r,d,b,o,null)}r=m,o=E,n.multiple=!!u,r!=null?ds(n,!!u,r,!1):o!=null&&ds(n,!!u,o,!0);return;case"textarea":ze("invalid",n),m=d=u=null;for(E in o)if(o.hasOwnProperty(E)&&(b=o[E],b!=null))switch(E){case"value":u=b;break;case"defaultValue":d=b;break;case"children":m=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:dt(n,r,E,b,o,null)}na(n,u,d,m),to(n);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:dt(n,r,R,u,o,null)}return;case"dialog":ze("beforetoggle",n),ze("toggle",n),ze("cancel",n),ze("close",n);break;case"iframe":case"object":ze("load",n);break;case"video":case"audio":for(u=0;u<hu.length;u++)ze(hu[u],n);break;case"image":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"embed":case"source":case"link":ze("error",n),ze("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in o)if(o.hasOwnProperty(F)&&(u=o[F],u!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:dt(n,r,F,u,o,null)}return;default:if(Cl(r)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&ap(n,r,Q,u,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(u=o[b],u!=null&&dt(n,r,b,u,o,null))}function _R(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,E=null,b=null,R=null,F=null,Q=null;for(H in o){var J=o[H];if(o.hasOwnProperty(H)&&J!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":R=J;default:u.hasOwnProperty(H)||dt(n,r,H,null,u,J)}}for(var q in u){var H=u[q];if(J=o[q],u.hasOwnProperty(q)&&(H!=null||J!=null))switch(q){case"type":m=H;break;case"name":d=H;break;case"checked":F=H;break;case"defaultChecked":Q=H;break;case"value":E=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==J&&dt(n,r,q,H,u,J)}}Bn(n,E,b,R,F,Q,m,d);return;case"select":H=E=b=q=null;for(m in o)if(R=o[m],o.hasOwnProperty(m)&&R!=null)switch(m){case"value":break;case"multiple":H=R;default:u.hasOwnProperty(m)||dt(n,r,m,null,u,R)}for(d in u)if(m=u[d],R=o[d],u.hasOwnProperty(d)&&(m!=null||R!=null))switch(d){case"value":q=m;break;case"defaultValue":b=m;break;case"multiple":E=m;default:m!==R&&dt(n,r,d,m,u,R)}r=b,o=E,u=H,q!=null?ds(n,!!o,q,!1):!!u!=!!o&&(r!=null?ds(n,!!o,r,!0):ds(n,!!o,o?[]:"",!1));return;case"textarea":H=q=null;for(b in o)if(d=o[b],o.hasOwnProperty(b)&&d!=null&&!u.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:dt(n,r,b,null,u,d)}for(E in u)if(d=u[E],m=o[E],u.hasOwnProperty(E)&&(d!=null||m!=null))switch(E){case"value":q=d;break;case"defaultValue":H=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&dt(n,r,E,d,u,m)}ct(n,q,H);return;case"option":for(var xe in o)if(q=o[xe],o.hasOwnProperty(xe)&&q!=null&&!u.hasOwnProperty(xe))switch(xe){case"selected":n.selected=!1;break;default:dt(n,r,xe,null,u,q)}for(R in u)if(q=u[R],H=o[R],u.hasOwnProperty(R)&&q!==H&&(q!=null||H!=null))switch(R){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:dt(n,r,R,q,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)q=o[we],o.hasOwnProperty(we)&&q!=null&&!u.hasOwnProperty(we)&&dt(n,r,we,null,u,q);for(F in u)if(q=u[F],H=o[F],u.hasOwnProperty(F)&&q!==H&&(q!=null||H!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:dt(n,r,F,q,u,H)}return;default:if(Cl(r)){for(var ft in o)q=o[ft],o.hasOwnProperty(ft)&&q!==void 0&&!u.hasOwnProperty(ft)&&ap(n,r,ft,void 0,u,q);for(Q in u)q=u[Q],H=o[Q],!u.hasOwnProperty(Q)||q===H||q===void 0&&H===void 0||ap(n,r,Q,q,u,H);return}}for(var U in o)q=o[U],o.hasOwnProperty(U)&&q!=null&&!u.hasOwnProperty(U)&&dt(n,r,U,null,u,q);for(J in u)q=u[J],H=o[J],!u.hasOwnProperty(J)||q===H||q==null&&H==null||dt(n,r,J,q,u,H)}var op=null,lp=null;function Dh(n){return n.nodeType===9?n:n.ownerDocument}function Uv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function up(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cp=null;function yR(){var n=window.event;return n&&n.type==="popstate"?n===cp?!1:(cp=n,!0):(cp=null,!1)}var Bv=typeof setTimeout=="function"?setTimeout:void 0,vR=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,ER=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(n){return Fv.resolve(null).then(n).catch(TR)}:Bv;function TR(n){setTimeout(function(){throw n})}function yr(n){return n==="head"}function zv(n,r){var o=r,u=0,d=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&fu(E.documentElement),o&2&&fu(E.body),o&4)for(o=E.head,fu(o),E=o.firstChild;E;){var b=E.nextSibling,R=E.nodeName;E[Xr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=b}}if(d===0){n.removeChild(m),Tu(r);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Tu(r)}function hp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":hp(o),Zs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function bR(n,r,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Xr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Ei(n.nextSibling),n===null)break}return null}function SR(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Ei(n.nextSibling),n===null))return null;return n}function dp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function wR(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Ei(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var fp=null;function qv(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function Hv(n,r,o){switch(r=Dh(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function fu(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Zs(n)}var ui=new Map,Gv=new Set;function Oh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ds=ee.d;ee.d={f:AR,r:RR,D:IR,C:CR,L:NR,m:xR,X:OR,S:DR,M:MR};function AR(){var n=Ds.f(),r=Sh();return n||r}function RR(n){var r=Oi(n);r!==null&&r.tag===5&&r.type==="form"?h0(r):Ds.r(n)}var Lo=typeof document>"u"?null:document;function Kv(n,r,o){var u=Lo;if(u&&typeof r=="string"&&r){var d=jt(r);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Gv.has(d)||(Gv.add(d),n={rel:n,crossOrigin:o,href:r},u.querySelector(d)===null&&(r=u.createElement("link"),hn(r,"link",n),Mt(r),u.head.appendChild(r)))}}function IR(n){Ds.D(n),Kv("dns-prefetch",n,null)}function CR(n,r){Ds.C(n,r),Kv("preconnect",n,r)}function NR(n,r,o){Ds.L(n,r,o);var u=Lo;if(u&&n&&r){var d='link[rel="preload"][as="'+jt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+jt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+jt(o.imageSizes)+'"]')):d+='[href="'+jt(n)+'"]';var m=d;switch(r){case"style":m=Uo(n);break;case"script":m=jo(n)}ui.has(m)||(n=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),ui.set(m,n),u.querySelector(d)!==null||r==="style"&&u.querySelector(mu(m))||r==="script"&&u.querySelector(pu(m))||(r=u.createElement("link"),hn(r,"link",n),Mt(r),u.head.appendChild(r)))}}function xR(n,r){Ds.m(n,r);var o=Lo;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+jt(u)+'"][href="'+jt(n)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=jo(n)}if(!ui.has(m)&&(n=v({rel:"modulepreload",href:n},r),ui.set(m,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(pu(m)))return}u=o.createElement("link"),hn(u,"link",n),Mt(u),o.head.appendChild(u)}}}function DR(n,r,o){Ds.S(n,r,o);var u=Lo;if(u&&n){var d=Rn(u).hoistableStyles,m=Uo(n);r=r||"default";var E=d.get(m);if(!E){var b={loading:0,preload:null};if(E=u.querySelector(mu(m)))b.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":r},o),(o=ui.get(m))&&mp(n,o);var R=E=u.createElement("link");Mt(R),hn(R,"link",n),R._p=new Promise(function(F,Q){R.onload=F,R.onerror=Q}),R.addEventListener("load",function(){b.loading|=1}),R.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Mh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:b},d.set(m,E)}}}function OR(n,r){Ds.X(n,r);var o=Lo;if(o&&n){var u=Rn(o).hoistableScripts,d=jo(n),m=u.get(d);m||(m=o.querySelector(pu(d)),m||(n=v({src:n,async:!0},r),(r=ui.get(d))&&pp(n,r),m=o.createElement("script"),Mt(m),hn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function MR(n,r){Ds.M(n,r);var o=Lo;if(o&&n){var u=Rn(o).hoistableScripts,d=jo(n),m=u.get(d);m||(m=o.querySelector(pu(d)),m||(n=v({src:n,async:!0,type:"module"},r),(r=ui.get(d))&&pp(n,r),m=o.createElement("script"),Mt(m),hn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function Yv(n,r,o,u){var d=(d=Ne.current)?Oh(d):null;if(!d)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Uo(o.href),o=Rn(d).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Uo(o.href);var m=Rn(d).hoistableStyles,E=m.get(n);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=d.querySelector(mu(n)))&&!m._p&&(E.instance=m,E.state.loading=5),ui.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ui.set(n,o),m||kR(d,n,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=jo(o),o=Rn(d).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Uo(n){return'href="'+jt(n)+'"'}function mu(n){return'link[rel="stylesheet"]['+n+"]"}function Qv(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function kR(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),hn(r,"link",o),Mt(r),n.head.appendChild(r))}function jo(n){return'[src="'+jt(n)+'"]'}function pu(n){return"script[async]"+n}function $v(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+jt(o.href)+'"]');if(u)return r.instance=u,Mt(u),u;var d=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Mt(u),hn(u,"style",d),Mh(u,o.precedence,n),r.instance=u;case"stylesheet":d=Uo(o.href);var m=n.querySelector(mu(d));if(m)return r.state.loading|=4,r.instance=m,Mt(m),m;u=Qv(o),(d=ui.get(d))&&mp(u,d),m=(n.ownerDocument||n).createElement("link"),Mt(m);var E=m;return E._p=new Promise(function(b,R){E.onload=b,E.onerror=R}),hn(m,"link",u),r.state.loading|=4,Mh(m,o.precedence,n),r.instance=m;case"script":return m=jo(o.src),(d=n.querySelector(pu(m)))?(r.instance=d,Mt(d),d):(u=o,(d=ui.get(m))&&(u=v({},o),pp(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),Mt(d),hn(d,"link",u),n.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Mh(u,o.precedence,n));return r.instance}function Mh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,E=0;E<u.length;E++){var b=u[E];if(b.dataset.precedence===r)m=b;else if(m!==d)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function mp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function pp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var kh=null;function Wv(n,r,o){if(kh===null){var u=new Map,d=kh=new Map;d.set(o,u)}else d=kh,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var m=o[d];if(!(m[Xr]||m[Gt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=n+E;var b=u.get(E);b?b.push(m):u.set(E,[m])}}return u}function Xv(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function PR(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Jv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var gu=null;function VR(){}function LR(n,r,o){if(gu===null)throw Error(s(475));var u=gu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=Uo(o.href),m=n.querySelector(mu(d));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Ph.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=m,Mt(m);return}m=n.ownerDocument||n,o=Qv(o),(d=ui.get(d))&&mp(o,d),m=m.createElement("link"),Mt(m);var E=m;E._p=new Promise(function(b,R){E.onload=b,E.onerror=R}),hn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Ph.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function UR(){if(gu===null)throw Error(s(475));var n=gu;return n.stylesheets&&n.count===0&&gp(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&gp(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Ph(){if(this.count--,this.count===0){if(this.stylesheets)gp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Vh=null;function gp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Vh=new Map,r.forEach(jR,n),Vh=null,Ph.call(n))}function jR(n,r){if(!(r.state.loading&4)){var o=Vh.get(n);if(o)var u=o.get(null);else{o=new Map,Vh.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var E=d[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}d=r.instance,E=d.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,d),o.set(E,d),this.count++,u=Ph.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),r.state.loading|=4}}var _u={$$typeof:le,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function BR(n,r,o,u,d,m,E,b){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.hiddenUpdates=os(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Zv(n,r,o,u,d,m,E,b,R,F,Q,J){return n=new BR(n,r,o,E,b,R,F,J),r=1,m===!0&&(r|=24),m=zn(3,null,null,r),n.current=m,m.stateNode=n,r=Xf(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},tm(m),n}function eE(n){return n?(n=go,n):go}function tE(n,r,o,u,d,m){d=eE(d),u.context===null?u.context=d:u.pendingContext=d,u=rr(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ar(n,u,r),o!==null&&(Yn(o,n,r),Yl(o,n,r))}function nE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function _p(n,r){nE(n,r),(n=n.alternate)&&nE(n,r)}function iE(n){if(n.tag===13){var r=po(n,67108864);r!==null&&Yn(r,n,67108864),_p(n,67108864)}}var Lh=!0;function FR(n,r,o,u){var d=z.T;z.T=null;var m=ee.p;try{ee.p=2,yp(n,r,o,u)}finally{ee.p=m,z.T=d}}function zR(n,r,o,u){var d=z.T;z.T=null;var m=ee.p;try{ee.p=8,yp(n,r,o,u)}finally{ee.p=m,z.T=d}}function yp(n,r,o,u){if(Lh){var d=vp(u);if(d===null)rp(n,r,u,Uh,o),rE(n,u);else if(HR(d,n,r,o,u))u.stopPropagation();else if(rE(n,u),r&4&&-1<qR.indexOf(n)){for(;d!==null;){var m=Oi(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ve(m.pendingLanes);if(E!==0){var b=m;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var R=1<<31-Xt(E);b.entanglements[1]|=R,E&=~R}Ki(m),(ot&6)===0&&(Th=An()+500,cu(0))}}break;case 13:b=po(m,2),b!==null&&Yn(b,m,2),Sh(),_p(m,2)}if(m=vp(u),m===null&&rp(n,r,u,Uh,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else rp(n,r,u,null,o)}}function vp(n){return n=ei(n),Ep(n)}var Uh=null;function Ep(n){if(Uh=null,n=us(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Uh=n,null}function sE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qa()){case Wr:return 2;case Ys:return 8;case as:case vl:return 32;case Qs:return 268435456;default:return 32}default:return 32}}var Tp=!1,vr=null,Er=null,Tr=null,yu=new Map,vu=new Map,br=[],qR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rE(n,r){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":yu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(r.pointerId)}}function Eu(n,r,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},r!==null&&(r=Oi(r),r!==null&&iE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function HR(n,r,o,u,d){switch(r){case"focusin":return vr=Eu(vr,n,r,o,u,d),!0;case"dragenter":return Er=Eu(Er,n,r,o,u,d),!0;case"mouseover":return Tr=Eu(Tr,n,r,o,u,d),!0;case"pointerover":var m=d.pointerId;return yu.set(m,Eu(yu.get(m)||null,n,r,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,vu.set(m,Eu(vu.get(m)||null,n,r,o,u,d)),!0}return!1}function aE(n){var r=us(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,Sc(n.priority,function(){if(o.tag===13){var u=Kn();u=Ws(u);var d=po(o,u);d!==null&&Yn(d,o,u),_p(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=vp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);fs=u,o.target.dispatchEvent(u),fs=null}else return r=Oi(o),r!==null&&iE(r),n.blockedOn=o,!1;r.shift()}return!0}function oE(n,r,o){jh(n)&&o.delete(r)}function GR(){Tp=!1,vr!==null&&jh(vr)&&(vr=null),Er!==null&&jh(Er)&&(Er=null),Tr!==null&&jh(Tr)&&(Tr=null),yu.forEach(oE),vu.forEach(oE)}function Bh(n,r){n.blockedOn===r&&(n.blockedOn=null,Tp||(Tp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,GR)))}var Fh=null;function lE(n){Fh!==n&&(Fh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Fh===n&&(Fh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],d=n[r+2];if(typeof u!="function"){if(Ep(u||o)===null)continue;break}var m=Oi(o);m!==null&&(n.splice(r,3),r-=3,Em(m,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function Tu(n){function r(R){return Bh(R,n)}vr!==null&&Bh(vr,n),Er!==null&&Bh(Er,n),Tr!==null&&Bh(Tr,n),yu.forEach(r),vu.forEach(r);for(var o=0;o<br.length;o++){var u=br[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<br.length&&(o=br[0],o.blockedOn===null);)aE(o),o.blockedOn===null&&br.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],m=o[u+1],E=d[Ut]||null;if(typeof m=="function")E||lE(o);else if(E){var b=null;if(m&&m.hasAttribute("formAction")){if(d=m,E=m[Ut]||null)b=E.formAction;else if(Ep(d)!==null)continue}else b=E.action;typeof b=="function"?o[u+1]=b:(o.splice(u,3),u-=3),lE(o)}}}function bp(n){this._internalRoot=n}zh.prototype.render=bp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Kn();tE(o,u,n,r,null,null)},zh.prototype.unmount=bp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;tE(n.current,2,null,n,null,null),Sh(),r[Jn]=null}};function zh(n){this._internalRoot=n}zh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Xs();n={blockedOn:null,target:n,priority:r};for(var o=0;o<br.length&&r!==0&&r<br[o].priority;o++);br.splice(o,0,n),o===0&&aE(n)}};var uE=e.version;if(uE!=="19.1.0")throw Error(s(527,uE,"19.1.0"));ee.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=p(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var KR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qh.isDisabled&&qh.supportsFiber)try{bt=qh.inject(KR),it=qh}catch{}}return Su.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",d=A0,m=R0,E=I0,b=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=Zv(n,1,!1,null,null,o,u,d,m,E,b,null),n[Jn]=r.current,sp(n),new bp(r)},Su.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,d="",m=A0,E=R0,b=I0,R=null,F=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(F=o.formState)),r=Zv(n,1,!0,r,o??null,u,d,m,E,b,R,F),r.context=eE(null),o=r.current,u=Kn(),u=Ws(u),d=rr(u),d.callback=null,ar(o,d,u),o=u,r.current.lanes=o,ls(r,o),Ki(r),n[Jn]=r.current,sp(n),new zh(r)},Su.version="19.1.0",Su}var vE;function nI(){if(vE)return Ap.exports;vE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ap.exports=tI(),Ap.exports}var iI=nI();const sI=()=>{};var EE={};/**
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
 */const Lb={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const oe=function(i,e){if(!i)throw ul(e)},ul=function(i){return new Error("Firebase Database ("+Lb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const Ub=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},rI=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],f=i[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,f=c?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let w=(f&15)<<2|g>>6,k=g&63;p||(k=64,c||(w=64)),s.push(t[v],t[T],t[w],t[k])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ub(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):rI(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],f=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new aI;const w=l<<2|f>>4;if(s.push(w),g!==64){const k=f<<4&240|g>>2;if(s.push(k),T!==64){const V=g<<6&192|T;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class aI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jb=function(i){const e=Ub(i);return Pg.encodeByteArray(e,!0)},hd=function(i){return jb(i).replace(/\./g,"")},dd=function(i){try{return Pg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oI(i){return Bb(void 0,i)}function Bb(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lI(t)||(i[t]=Bb(i[t],e[t]));return i}function lI(i){return i!=="__proto__"}/**
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
 */const cI=()=>uI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof EE>"u")return;const i=EE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},dI=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&dd(i[1]);return e&&JSON.parse(e)},Gd=()=>{try{return sI()||cI()||hI()||dI()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Fb=i=>{var e,t;return(t=(e=Gd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Vg=i=>{const e=Fb(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},zb=()=>{var i;return(i=Gd())===null||i===void 0?void 0:i.config},qb=i=>{var e;return(e=Gd())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */function Gs(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kd(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Hb(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[hd(JSON.stringify(t)),hd(JSON.stringify(c)),""].join(".")}const Pu={};function fI(){const i={prod:[],emulator:[]};for(const e of Object.keys(Pu))Pu[e]?i.emulator.push(e):i.prod.push(e);return i}function mI(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let TE=!1;function Yd(i,e){if(typeof window>"u"||typeof document>"u"||!Gs(window.location.host)||Pu[i]===e||Pu[i]||TE)return;Pu[i]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=fI().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{TE=!0,c()},w}function v(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=mI(s),k=t("text"),V=document.getElementById(k)||document.createElement("span"),G=t("learnmore"),Y=document.getElementById(G)||document.createElement("a"),fe=t("preprendIcon"),re=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const le=w.element;f(le),v(Y,G);const Se=g();p(re,fe),le.append(re,V,Y,Se),document.body.appendChild(le)}l?(V.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function wn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wn())}function pI(){var i;const e=(i=Gd())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _I(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Gb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const i=wn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function vI(){return Lb.NODE_ADMIN===!0}function EI(){return!pI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TI(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const SI="FirebaseError";class rs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=SI,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sc.prototype.create)}}class sc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?wI(l,s):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new rs(a,f,s)}}function wI(i,e){return i.replace(AI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const AI=/\{\$([^}]+)}/g;/**
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
 */function Gu(i){return JSON.parse(i)}function fn(i){return JSON.stringify(i)}/**
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
 */const Kb=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Gu(dd(l[0])||""),t=Gu(dd(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},RI=function(i){const e=Kb(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},II=function(i){const e=Kb(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ks(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function el(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Yp(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function fd(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function Pr(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(bE(l)&&bE(c)){if(!Pr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function bE(i){return i!==null&&typeof i=="object"}/**
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
 */function cl(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cu(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Nu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
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
 */class CI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=f^l&(c^f),v=1518500249):(g=l^c^f,v=1859775393):T<60?(g=l&c|f&(l|c),v=2400959708):(g=l^c^f,v=3395469782);const w=(a<<5|a>>>27)+g+p+v+s[T]&4294967295;p=f,f=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function NI(i,e){const t=new xI(i,e);return t.subscribe.bind(t)}class xI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");DI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Np),a.error===void 0&&(a.error=Np),a.complete===void 0&&(a.complete=Np);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Np(){}function OI(i,e){return`${i} failed: ${e} argument `}/**
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
 */const MI=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,oe(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Qd=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function It(i){return i&&i._delegate?i._delegate:i}class js{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ra="[DEFAULT]";/**
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
 */class kI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Lg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:Ra})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ra){return this.instances.has(e)}getOptions(e=Ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ra){return this.component?this.component.multipleInstances?e:Ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PI(i){return i===Ra?void 0:i}function VI(i){return i.instantiationMode==="EAGER"}/**
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
 */var qe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(qe||(qe={}));const UI={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},jI=qe.INFO,BI={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},FI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=BI[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $d{constructor(e){this.name=e,this._logLevel=jI,this._logHandler=FI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const zI=(i,e)=>e.some(t=>i instanceof t);let SE,wE;function qI(){return SE||(SE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return wE||(wE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yb=new WeakMap,Qp=new WeakMap,Qb=new WeakMap,xp=new WeakMap,jg=new WeakMap;function GI(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(xr(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Yb.set(t,i)}).catch(()=>{}),jg.set(e,i),e}function KI(i){if(Qp.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Qp.set(i,e)}let $p={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Qp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Qb.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function YI(i){$p=i($p)}function QI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Dp(this),e,...t);return Qb.set(s,e.sort?e.sort():[e]),xr(s)}:HI().includes(i)?function(...e){return i.apply(Dp(this),e),xr(Yb.get(this))}:function(...e){return xr(i.apply(Dp(this),e))}}function $I(i){return typeof i=="function"?QI(i):(i instanceof IDBTransaction&&KI(i),zI(i,qI())?new Proxy(i,$p):i)}function xr(i){if(i instanceof IDBRequest)return GI(i);if(xp.has(i))return xp.get(i);const e=$I(i);return e!==i&&(xp.set(i,e),jg.set(e,i)),e}const Dp=i=>jg.get(i);function WI(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),f=xr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(xr(c.result),p.oldVersion,p.newVersion,xr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const XI=["get","getKey","getAll","getAllKeys","count"],JI=["put","add","delete","clear"],Op=new Map;function AE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Op.get(e))return Op.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=JI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||XI.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return Op.set(e,l),l}YI(i=>({...i,get:(e,t,s)=>AE(e,t)||i.get(e,t,s),has:(e,t)=>!!AE(e,t)||i.has(e,t)}));/**
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
 */const Bs=new $d("@firebase/app"),tC="@firebase/app-compat",nC="@firebase/analytics-compat",iC="@firebase/analytics",sC="@firebase/app-check-compat",rC="@firebase/app-check",aC="@firebase/auth",oC="@firebase/auth-compat",lC="@firebase/database",uC="@firebase/data-connect",cC="@firebase/database-compat",hC="@firebase/functions",dC="@firebase/functions-compat",fC="@firebase/installations",mC="@firebase/installations-compat",pC="@firebase/messaging",gC="@firebase/messaging-compat",_C="@firebase/performance",yC="@firebase/performance-compat",vC="@firebase/remote-config",EC="@firebase/remote-config-compat",TC="@firebase/storage",bC="@firebase/storage-compat",SC="@firebase/firestore",wC="@firebase/ai",AC="@firebase/firestore-compat",RC="firebase",IC="11.10.0";/**
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
 */const Xp="[DEFAULT]",CC={[Wp]:"fire-core",[tC]:"fire-core-compat",[iC]:"fire-analytics",[nC]:"fire-analytics-compat",[rC]:"fire-app-check",[sC]:"fire-app-check-compat",[aC]:"fire-auth",[oC]:"fire-auth-compat",[lC]:"fire-rtdb",[uC]:"fire-data-connect",[cC]:"fire-rtdb-compat",[hC]:"fire-fn",[dC]:"fire-fn-compat",[fC]:"fire-iid",[mC]:"fire-iid-compat",[pC]:"fire-fcm",[gC]:"fire-fcm-compat",[_C]:"fire-perf",[yC]:"fire-perf-compat",[vC]:"fire-rc",[EC]:"fire-rc-compat",[TC]:"fire-gcs",[bC]:"fire-gcs-compat",[SC]:"fire-fst",[AC]:"fire-fst-compat",[wC]:"fire-vertex","fire-js":"fire-js",[RC]:"fire-js-all"};/**
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
 */const md=new Map,NC=new Map,Jp=new Map;function IE(i,e){try{i.container.addComponent(e)}catch(t){Bs.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Vr(i){const e=i.name;if(Jp.has(e))return Bs.debug(`There were multiple attempts to register component ${e}.`),!1;Jp.set(e,i);for(const t of md.values())IE(t,i);for(const t of NC.values())IE(t,i);return!0}function rc(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Vn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const xC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new sc("app","Firebase",xC);/**
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
 */class DC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ba=IC;function $b(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xp,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw Dr.create("bad-app-name",{appName:String(a)});if(t||(t=zb()),!t)throw Dr.create("no-options");const l=md.get(a);if(l){if(Pr(t,l.options)&&Pr(s,l.config))return l;throw Dr.create("duplicate-app",{appName:a})}const c=new LI(a);for(const p of Jp.values())c.addComponent(p);const f=new DC(t,s,c);return md.set(a,f),f}function Wd(i=Xp){const e=md.get(i);if(!e&&i===Xp&&zb())return $b();if(!e)throw Dr.create("no-app",{appName:i});return e}function di(i,e,t){var s;let a=(s=CC[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${e}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bs.warn(f.join(" "));return}Vr(new js(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const OC="firebase-heartbeat-database",MC=1,Ku="firebase-heartbeat-store";let Mp=null;function Wb(){return Mp||(Mp=WI(OC,MC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ku)}catch(t){console.warn(t)}}}}).catch(i=>{throw Dr.create("idb-open",{originalErrorMessage:i.message})})),Mp}async function kC(i){try{const t=(await Wb()).transaction(Ku),s=await t.objectStore(Ku).get(Xb(i));return await t.done,s}catch(e){if(e instanceof rs)Bs.warn(e.message);else{const t=Dr.create("idb-get",{originalErrorMessage:e?.message});Bs.warn(t.message)}}}async function CE(i,e){try{const s=(await Wb()).transaction(Ku,"readwrite");await s.objectStore(Ku).put(e,Xb(i)),await s.done}catch(t){if(t instanceof rs)Bs.warn(t.message);else{const s=Dr.create("idb-set",{originalErrorMessage:t?.message});Bs.warn(s.message)}}}function Xb(i){return`${i.name}!${i.options.appId}`}/**
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
 */const PC=1024,VC=30;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=NE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>VC){const c=BC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Bs.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=NE(),{heartbeatsToSend:s,unsentEntries:a}=UC(this._heartbeatsCache.heartbeats),l=hd(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Bs.warn(t),""}}}function NE(){return new Date().toISOString().substring(0,10)}function UC(i,e=PC){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),xE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),xE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class jC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TI()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return CE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return CE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function xE(i){return hd(JSON.stringify({version:2,heartbeats:i})).length}function BC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function FC(i){Vr(new js("platform-logger",e=>new ZI(e),"PRIVATE")),Vr(new js("heartbeat",e=>new LC(e),"PRIVATE")),di(Wp,RE,i),di(Wp,RE,"esm2017"),di("fire-js","")}FC("");var zC="firebase",qC="11.10.0";/**
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
 */di(zC,qC,"app");var DE={};const OE="@firebase/database",ME="1.0.20";/**
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
 */let Jb="";function HC(i){Jb=i}/**
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
 */class GC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Gu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class KC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ks(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Zb=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GC(e)}}catch{}return new KC},Ca=Zb("localStorage"),YC=Zb("sessionStorage");/**
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
 */const Qo=new $d("@firebase/database"),QC=function(){let i=1;return function(){return i++}}(),eS=function(i){const e=MI(i),t=new CI;t.update(e);const s=t.digest();return Pg.encodeByteArray(s)},ac=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ac.apply(null,s):typeof s=="object"?e+=fn(s):e+=s,e+=" "}return e};let Vu=null,kE=!0;const $C=function(i,e){oe(!0,"Can't turn on custom loggers persistently."),Qo.logLevel=qe.VERBOSE,Vu=Qo.log.bind(Qo)},En=function(...i){if(kE===!0&&(kE=!1,Vu===null&&YC.get("logging_enabled")===!0&&$C()),Vu){const e=ac.apply(null,i);Vu(e)}},oc=function(i){return function(...e){En(i,...e)}},Zp=function(...i){const e="FIREBASE INTERNAL ERROR: "+ac(...i);Qo.error(e)},Fs=function(...i){const e=`FIREBASE FATAL ERROR: ${ac(...i)}`;throw Qo.error(e),new Error(e)},Wn=function(...i){const e="FIREBASE WARNING: "+ac(...i);Qo.warn(e)},WC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Wn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tS=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},XC=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},tl="[MIN_NAME]",Oa="[MAX_NAME]",hl=function(i,e){if(i===e)return 0;if(i===tl||e===Oa)return-1;if(e===tl||i===Oa)return 1;{const t=PE(i),s=PE(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},JC=function(i,e){return i===e?0:i<e?-1:1},wu=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+fn(e))},Bg=function(i){if(typeof i!="object"||i===null)return fn(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=fn(e[s]),t+=":",t+=Bg(i[e[s]]);return t+="}",t},nS=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function mi(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const iS=function(i){oe(!tS(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,f,p;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=f+s,c=Math.round(i*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(p=0;p<64;p+=8){let w=parseInt(v.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},ZC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tN=new RegExp("^-?(0*)\\d{1,10}$"),nN=-2147483648,iN=2147483647,PE=function(i){if(tN.test(i)){const e=Number(i);if(e>=nN&&e<=iN)return e}return null},lc=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Wn("Exception was thrown by user callback.",t),e},Math.floor(0))}},sN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class rN{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Vn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Wn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class aN{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(En("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Wn(e)}}class Zh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zh.OWNER="owner";/**
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
 */const Fg="5",sS="v",rS="s",aS="r",oS="f",lS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uS="ls",cS="p",eg="ac",hS="websocket",dS="long_polling";/**
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
 */class fS{constructor(e,t,s,a,l=!1,c="",f=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ca.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ca.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function oN(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function mS(i,e,t){oe(typeof e=="string","typeof type must == string"),oe(typeof t=="object","typeof params must == object");let s;if(e===hS)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===dS)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oN(i)&&(t.ns=i.namespace);const a=[];return mi(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
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
 */class lN{constructor(){this.counters_={}}incrementCounter(e,t=1){Ks(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return oI(this.counters_)}}/**
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
 */const kp={},Pp={};function zg(i){const e=i.toString();return kp[e]||(kp[e]=new lN),kp[e]}function uN(i,e){const t=i.toString();return Pp[t]||(Pp[t]=e()),Pp[t]}/**
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
 */const VE="start",hN="close",dN="pLPCommand",fN="pRTLPCB",pS="id",gS="pw",_S="ser",mN="cb",pN="seg",gN="ts",_N="d",yN="dframe",yS=1870,vS=30,vN=yS-vS,EN=25e3,TN=3e4;class Go{constructor(e,t,s,a,l,c,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oc(e),this.stats_=zg(t),this.urlFn=p=>(this.appCheckToken&&(p[eg]=this.appCheckToken),mS(t,dS,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TN)),XC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qg((...l)=>{const[c,f,p,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===VE)this.id=f,this.password=p;else if(c===hN)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[VE]="t",s[_S]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sS]=Fg,this.transportSessionId&&(s[rS]=this.transportSessionId),this.lastSessionId&&(s[uS]=this.lastSessionId),this.applicationId&&(s[cS]=this.applicationId),this.appCheckToken&&(s[eg]=this.appCheckToken),typeof location<"u"&&location.hostname&&lS.test(location.hostname)&&(s[aS]=oS);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Go.forceAllow_=!0}static forceDisallow(){Go.forceDisallow_=!0}static isAvailable(){return Go.forceAllow_?!0:!Go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZC()&&!eN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=fn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=jb(t),a=nS(s,vN);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[yN]="t",s[pS]=e,s[gS]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=fn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qg{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QC(),window[dN+this.uniqueCallbackIdentifier]=e,window[fN+this.uniqueCallbackIdentifier]=t,this.myIFrame=qg.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){En("frame writing exception"),f.stack&&En(f.stack),En(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||En("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pS]=this.myID,e[gS]=this.myPW,e[_S]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vS+s.length<=yS;){const c=this.pendingSegs.shift();s=s+"&"+pN+a+"="+c.seg+"&"+gN+a+"="+c.ts+"&"+_N+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(EN)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{En("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const bN=16384,SN=45e3;let pd=null;typeof MozWebSocket<"u"?pd=MozWebSocket:typeof WebSocket<"u"&&(pd=WebSocket);class bi{constructor(e,t,s,a,l,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oc(this.connId),this.stats_=zg(t),this.connURL=bi.connectionURL_(t,c,f,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[sS]=Fg,typeof location<"u"&&location.hostname&&lS.test(location.hostname)&&(c[aS]=oS),t&&(c[rS]=t),s&&(c[uS]=s),a&&(c[eg]=a),l&&(c[cS]=l),mS(e,hS,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ca.set("previous_websocket_failure",!0);try{let s;vI(),this.mySock=new pd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){bi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pd!==null&&!bi.forceDisallow_}static previouslyFailed(){return Ca.isInMemoryStorage||Ca.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ca.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Gu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=fn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=nS(t,bN);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bi.responsesRequiredToBeHealthy=2;bi.healthyTimeout=3e4;/**
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
 */class Yu{static get ALL_TRANSPORTS(){return[Go,bi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=bi&&bi.isAvailable();let s=t&&!bi.previouslyFailed();if(e.webSocketOnly&&(t||Wn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[bi];else{const a=this.transports_=[];for(const l of Yu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Yu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yu.globalTransportInitialized_=!1;/**
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
 */const wN=6e4,AN=5e3,RN=10*1024,IN=100*1024,Vp="t",LE="d",CN="s",UE="r",NN="e",jE="o",BE="a",FE="n",zE="p",xN="h";class DN{constructor(e,t,s,a,l,c,f,p,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oc("c:"+this.id+":"),this.transportManager_=new Yu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Lu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vp in e){const t=e[Vp];t===BE?this.upgradeIfSecondaryHealthy_():t===UE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===jE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wu("t",e),s=wu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:BE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:FE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wu("t",e),s=wu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wu(Vp,e);if(LE in e){const s=e[LE];if(t===xN){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===FE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CN?this.onConnectionShutdown_(s):t===UE?this.onReset_(s):t===NN?Zp("Server Error: "+s):t===jE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Fg!==s&&Wn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Lu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ca.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ES{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class TS{constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){oe(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class gd extends TS{static getInstance(){return new gd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ug()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return oe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const qE=32,HE=768;class Tt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function mt(){return new Tt("")}function Xe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Lr(i){return i.pieces_.length-i.pieceNum_}function vt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Tt(i.pieces_,e)}function bS(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function ON(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function SS(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function wS(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new Tt(e,0)}function an(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof Tt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Tt(t,0)}function Ke(i){return i.pieceNum_>=i.pieces_.length}function hi(i,e){const t=Xe(i),s=Xe(e);if(t===null)return e;if(t===s)return hi(vt(i),vt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function AS(i,e){if(Lr(i)!==Lr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function Si(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(Lr(i)>Lr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class MN{constructor(e,t){this.errorPrefix_=t,this.parts_=SS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Qd(this.parts_[s]);RS(this)}}function kN(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Qd(e),RS(i)}function PN(i){const e=i.parts_.pop();i.byteLength_-=Qd(e),i.parts_.length>0&&(i.byteLength_-=1)}function RS(i){if(i.byteLength_>HE)throw new Error(i.errorPrefix_+"has a key path longer than "+HE+" bytes ("+i.byteLength_+").");if(i.parts_.length>qE)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qE+") or object contains a cycle "+Ia(i))}function Ia(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class Hg extends TS{static getInstance(){return new Hg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return oe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Au=1e3,VN=60*5*1e3,GE=30*1e3,LN=1.3,UN=3e4,jN="server_kill",KE=3;class Vs extends ES{constructor(e,t,s,a,l,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Vs.nextPersistentConnectionId_++,this.log_=oc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Au,this.maxReconnectDelay_=VN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(fn(l)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Lg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,f=>{const p=f.d,g=f.s;Vs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ks(e,"w")){const s=el(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Wn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||II(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=GE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=RI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Zp("Unrecognized action received from server: "+fn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Au,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Au,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UN&&(this.reconnectDelay_=Au),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Vs.nextConnectionId_++,l=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,s())},g=function(T){oe(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?En("getToken() completed but was canceled"):(En("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,f=new DN(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,k=>{Wn(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(jN)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Wn(T),p())}}}interrupt(e){En("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){En("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yp(this.interruptReasons_)&&(this.reconnectDelay_=Au,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Bg(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Tt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){En("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=KE&&(this.reconnectDelay_=GE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){En("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=KE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Jb.replace(/\./g,"-")]=1,Ug()?e["framework.cordova"]=1:Gb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gd.getInstance().currentlyOnline();return Yp(this.interruptReasons_)&&e}}Vs.nextPersistentConnectionId_=0;Vs.nextConnectionId_=0;/**
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
 */class Xd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Je(tl,e),a=new Je(tl,t);return this.compare(s,a)!==0}minPost(){return Je.MIN}}/**
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
 */let Hh;class IS extends Xd{static get __EMPTY_NODE(){return Hh}static set __EMPTY_NODE(e){Hh=e}compare(e,t){return hl(e.name,t.name)}isDefinedOn(e){throw ul("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Je.MIN}maxPost(){return new Je(Oa,Hh)}makePost(e,t){return oe(typeof e=="string","KeyIndex indexValue must always be a string."),new Je(e,Hh)}toString(){return".key"}}const $o=new IS;/**
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
 */let Gh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Qn=class xu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??xu.RED,this.left=a??$i.EMPTY_NODE,this.right=l??$i.EMPTY_NODE}copy(e,t,s,a,l){return new xu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return $i.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return $i.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Qn.RED=!0;Qn.BLACK=!1;class BN{copy(e,t,s,a,l){return this}insert(e,t,s){return new Qn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let $i=class ed{constructor(e,t=ed.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ed(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qn.BLACK,null,null))}remove(e){return new ed(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gh(this.root_,null,this.comparator_,!0,e)}};$i.EMPTY_NODE=new BN;/**
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
 */function FN(i,e){return hl(i.name,e.name)}function Gg(i,e){return hl(i,e)}/**
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
 */let tg;function zN(i){tg=i}const CS=function(i){return typeof i=="number"?"number:"+iS(i):"string:"+i},NS=function(i){if(i.isLeafNode()){const e=i.val();oe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ks(e,".sv"),"Priority must be a string or number.")}else oe(i===tg||i.isEmpty(),"priority of unexpected type.");oe(i===tg||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let YE;class sn{static set __childrenNodeConstructor(e){YE=e}static get __childrenNodeConstructor(){return YE}constructor(e,t=sn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,oe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),NS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new sn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:sn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ke(e)?this:Xe(e)===".priority"?this.priorityNode_:sn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:sn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Xe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(oe(s!==".priority"||Lr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,sn.__childrenNodeConstructor.EMPTY_NODE.updateChild(vt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=iS(this.value_):e+=this.value_,this.lazyHash_=eS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===sn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof sn.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=sn.VALUE_TYPE_ORDER.indexOf(t),l=sn.VALUE_TYPE_ORDER.indexOf(s);return oe(a>=0,"Unknown leaf type: "+t),oe(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}sn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let xS,DS;function qN(i){xS=i}function HN(i){DS=i}class GN extends Xd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?hl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Je.MIN}maxPost(){return new Je(Oa,new sn("[PRIORITY-POST]",DS))}makePost(e,t){const s=xS(e);return new Je(t,new sn("[PRIORITY-POST]",s))}toString(){return".priority"}}const Sn=new GN;/**
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
 */const KN=Math.log(2);class YN{constructor(e){const t=l=>parseInt(Math.log(l)/KN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _d=function(i,e,t,s){i.sort(e);const a=function(p,g){const v=g-p;let T,w;if(v===0)return null;if(v===1)return T=i[p],w=t?t(T):T,new Qn(w,T.node,Qn.BLACK,null,null);{const k=parseInt(v/2,10)+p,V=a(p,k),G=a(k+1,g);return T=i[k],w=t?t(T):T,new Qn(w,T.node,Qn.BLACK,V,G)}},l=function(p){let g=null,v=null,T=i.length;const w=function(V,G){const Y=T-V,fe=T;T-=V;const re=a(Y+1,fe),le=i[Y],Se=t?t(le):le;k(new Qn(Se,le.node,G,null,re))},k=function(V){g?(g.left=V,g=V):(v=V,g=V)};for(let V=0;V<p.count;++V){const G=p.nextBitIsOne(),Y=Math.pow(2,p.count-(V+1));G?w(Y,Qn.BLACK):(w(Y,Qn.BLACK),w(Y,Qn.RED))}return v},c=new YN(i.length),f=l(c);return new $i(s||e,f)};/**
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
 */let Lp;const Bo={};class Ms{static get Default(){return oe(Bo&&Sn,"ChildrenNode.ts has not been loaded"),Lp=Lp||new Ms({".priority":Bo},{".priority":Sn}),Lp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=el(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $i?t:null}hasIndex(e){return Ks(this.indexSet_,e.toString())}addIndex(e,t){oe(e!==$o,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Je.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let f;a?f=_d(s,e.getCompare()):f=Bo;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new Ms(v,g)}addToIndexes(e,t){const s=fd(this.indexes_,(a,l)=>{const c=el(this.indexSet_,l);if(oe(c,"Missing index implementation for "+l),a===Bo)if(c.isDefinedOn(e.node)){const f=[],p=t.getIterator(Je.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),_d(f,c.getCompare())}else return Bo;else{const f=t.get(e.name);let p=a;return f&&(p=p.remove(new Je(e.name,f))),p.insert(e,e.node)}});return new Ms(s,this.indexSet_)}removeFromIndexes(e,t){const s=fd(this.indexes_,a=>{if(a===Bo)return a;{const l=t.get(e.name);return l?a.remove(new Je(e.name,l)):a}});return new Ms(s,this.indexSet_)}}/**
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
 */let Ru;class rt{static get EMPTY_NODE(){return Ru||(Ru=new rt(new $i(Gg),null,Ms.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&NS(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ru}updatePriority(e){return this.children_.isEmpty()?this:new rt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ru:t}}getChild(e){const t=Xe(e);return t===null?this:this.getImmediateChild(t).getChild(vt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(oe(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Je(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Ru:this.priorityNode_;return new rt(a,c,l)}}updateChild(e,t){const s=Xe(e);if(s===null)return t;{oe(Xe(e)!==".priority"||Lr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(vt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(Sn,(c,f)=>{t[c]=f.val(e),s++,l&&rt.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const f in t)c[f]=t[f];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CS(this.getPriority().val())+":"),this.forEachChild(Sn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":eS(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Je(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Je(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===uc?-1:0}withIndex(e){if(e===$o||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new rt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$o||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Sn),a=t.getIterator(Sn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===$o?null:this.indexMap_.get(e.toString())}}rt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QN extends rt{constructor(){super(new $i(Gg),rt.EMPTY_NODE,Ms.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return rt.EMPTY_NODE}isEmpty(){return!1}}const uc=new QN;Object.defineProperties(Je,{MIN:{value:new Je(tl,rt.EMPTY_NODE)},MAX:{value:new Je(Oa,uc)}});IS.__EMPTY_NODE=rt.EMPTY_NODE;sn.__childrenNodeConstructor=rt;zN(uc);HN(uc);/**
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
 */const $N=!0;function Tn(i,e=null){if(i===null)return rt.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),oe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new sn(t,Tn(e))}if(!(i instanceof Array)&&$N){const t=[];let s=!1;if(mi(i,(c,f)=>{if(c.substring(0,1)!=="."){const p=Tn(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Je(c,p)))}}),t.length===0)return rt.EMPTY_NODE;const l=_d(t,FN,c=>c.name,Gg);if(s){const c=_d(t,Sn.getCompare());return new rt(l,Tn(e),new Ms({".priority":c},{".priority":Sn}))}else return new rt(l,Tn(e),Ms.Default)}else{let t=rt.EMPTY_NODE;return mi(i,(s,a)=>{if(Ks(i,s)&&s.substring(0,1)!=="."){const l=Tn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Tn(e))}}qN(Tn);/**
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
 */class WN extends Xd{constructor(e){super(),this.indexPath_=e,oe(!Ke(e)&&Xe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?hl(e.name,t.name):l}makePost(e,t){const s=Tn(e),a=rt.EMPTY_NODE.updateChild(this.indexPath_,s);return new Je(t,a)}maxPost(){const e=rt.EMPTY_NODE.updateChild(this.indexPath_,uc);return new Je(Oa,e)}toString(){return SS(this.indexPath_,0).join("/")}}/**
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
 */class XN extends Xd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?hl(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Je.MIN}maxPost(){return Je.MAX}makePost(e,t){const s=Tn(e);return new Je(t,s)}toString(){return".value"}}const JN=new XN;/**
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
 */function ZN(i){return{type:"value",snapshotNode:i}}function e2(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function t2(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function QE(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function n2(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class Kg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Sn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tl}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Sn}copy(){const e=new Kg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $E(i){const e={};if(i.isDefault())return e;let t;if(i.index_===Sn?t="$priority":i.index_===JN?t="$value":i.index_===$o?t="$key":(oe(i.index_ instanceof WN,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=fn(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=fn(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+fn(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=fn(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+fn(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function WE(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==Sn&&(e.i=i.index_.toString()),e}/**
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
 */class yd extends ES{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=oc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=yd.getListenId_(e,s),f={};this.listens_[c]=f;const p=$E(e._queryParams);this.restRequest_(l+".json",p,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),el(this.listens_,c)===f){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=yd.getListenId_(e,t);delete this.listens_[s]}get(e){const t=$E(e._queryParams),s=e._path.toString(),a=new Lg;return this.restRequest_(s+".json",t,(l,c)=>{let f=c;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cl(t);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Gu(f.responseText)}catch{Wn("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&Wn("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
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
 */class i2{constructor(){this.rootNode_=rt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function vd(){return{value:null,children:new Map}}function OS(i,e,t){if(Ke(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Xe(e);i.children.has(s)||i.children.set(s,vd());const a=i.children.get(s);e=vt(e),OS(a,e,t)}}function ng(i,e,t){i.value!==null?t(e,i.value):s2(i,(s,a)=>{const l=new Tt(e.toString()+"/"+s);ng(a,l,t)})}function s2(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class r2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&mi(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
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
 */const XE=10*1e3,a2=30*1e3,o2=5*60*1e3;class l2{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new r2(e);const s=XE+(a2-XE)*Math.random();Lu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;mi(e,(a,l)=>{l>0&&Ks(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Lu(this.reportStats_.bind(this),Math.floor(Math.random()*2*o2))}}/**
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
 */var Wi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wi||(Wi={}));function MS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kS(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function PS(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class Ed{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Wi.ACK_USER_WRITE,this.source=MS()}operationForChild(e){if(Ke(this.path)){if(this.affectedTree.value!=null)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Tt(e));return new Ed(mt(),t,this.revert)}}else return oe(Xe(this.path)===e,"operationForChild called for unrelated child."),new Ed(vt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ma{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Wi.OVERWRITE}operationForChild(e){return Ke(this.path)?new Ma(this.source,mt(),this.snap.getImmediateChild(e)):new Ma(this.source,vt(this.path),this.snap)}}/**
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
 */class Qu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Wi.MERGE}operationForChild(e){if(Ke(this.path)){const t=this.children.subtree(new Tt(e));return t.isEmpty()?null:t.value?new Ma(this.source,mt(),t.value):new Qu(this.source,mt(),t)}else return oe(Xe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qu(this.source,vt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yg{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ke(e))return this.isFullyInitialized()&&!this.filtered_;const t=Xe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function u2(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(n2(c.childName,c.snapshotNode))}),Iu(i,a,"child_removed",e,s,t),Iu(i,a,"child_added",e,s,t),Iu(i,a,"child_moved",l,s,t),Iu(i,a,"child_changed",e,s,t),Iu(i,a,"value",e,s,t),a}function Iu(i,e,t,s,a,l){const c=s.filter(f=>f.type===t);c.sort((f,p)=>h2(i,f,p)),c.forEach(f=>{const p=c2(i,f,l);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function c2(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function h2(i,e,t){if(e.childName==null||t.childName==null)throw ul("Should only compare child_ events.");const s=new Je(e.childName,e.snapshotNode),a=new Je(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
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
 */function VS(i,e){return{eventCache:i,serverCache:e}}function Uu(i,e,t,s){return VS(new Yg(e,t,s),i.serverCache)}function LS(i,e,t,s){return VS(i.eventCache,new Yg(e,t,s))}function ig(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function ka(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let Up;const d2=()=>(Up||(Up=new $i(JC)),Up);class yt{static fromObject(e){let t=new yt(null);return mi(e,(s,a)=>{t=t.set(new Tt(s),a)}),t}constructor(e,t=d2()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:mt(),value:this.value};if(Ke(e))return null;{const s=Xe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(vt(e),t);return l!=null?{path:an(new Tt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ke(e))return this;{const t=Xe(e),s=this.children.get(t);return s!==null?s.subtree(vt(e)):new yt(null)}}set(e,t){if(Ke(e))return new yt(t,this.children);{const s=Xe(e),l=(this.children.get(s)||new yt(null)).set(vt(e),t),c=this.children.insert(s,l);return new yt(this.value,c)}}remove(e){if(Ke(e))return this.children.isEmpty()?new yt(null):new yt(null,this.children);{const t=Xe(e),s=this.children.get(t);if(s){const a=s.remove(vt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new yt(null):new yt(this.value,l)}else return this}}get(e){if(Ke(e))return this.value;{const t=Xe(e),s=this.children.get(t);return s?s.get(vt(e)):null}}setTree(e,t){if(Ke(e))return t;{const s=Xe(e),l=(this.children.get(s)||new yt(null)).setTree(vt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new yt(this.value,c)}}fold(e){return this.fold_(mt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(an(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,mt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ke(e))return null;{const l=Xe(e),c=this.children.get(l);return c?c.findOnPath_(vt(e),an(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,mt(),t)}foreachOnPath_(e,t,s){if(Ke(e))return this;{this.value&&s(t,this.value);const a=Xe(e),l=this.children.get(a);return l?l.foreachOnPath_(vt(e),an(t,a),s):new yt(null)}}foreach(e){this.foreach_(mt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(an(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Ai{constructor(e){this.writeTree_=e}static empty(){return new Ai(new yt(null))}}function ju(i,e,t){if(Ke(e))return new Ai(new yt(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=hi(a,e);return l=l.updateChild(c,t),new Ai(i.writeTree_.set(a,l))}else{const a=new yt(t),l=i.writeTree_.setTree(e,a);return new Ai(l)}}}function JE(i,e,t){let s=i;return mi(t,(a,l)=>{s=ju(s,an(e,a),l)}),s}function ZE(i,e){if(Ke(e))return Ai.empty();{const t=i.writeTree_.setTree(e,new yt(null));return new Ai(t)}}function sg(i,e){return Fa(i,e)!=null}function Fa(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(hi(t.path,e)):null}function eT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Sn,(s,a)=>{e.push(new Je(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Je(s,a.value))}),e}function Or(i,e){if(Ke(e))return i;{const t=Fa(i,e);return t!=null?new Ai(new yt(t)):new Ai(i.writeTree_.subtree(e))}}function rg(i){return i.writeTree_.isEmpty()}function nl(i,e){return US(mt(),i.writeTree_,e)}function US(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(oe(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=US(an(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(an(i,".priority"),s)),t}}/**
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
 */function jS(i,e){return HS(e,i)}function f2(i,e,t,s,a){oe(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=ju(i.visibleWrites,e,t)),i.lastWriteId=s}function m2(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function p2(i,e){const t=i.allWrites.findIndex(f=>f.writeId===e);oe(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const f=i.allWrites[c];f.visible&&(c>=t&&g2(f,s.path)?a=!1:Si(s.path,f.path)&&(l=!0)),c--}if(a){if(l)return _2(i),!0;if(s.snap)i.visibleWrites=ZE(i.visibleWrites,s.path);else{const f=s.children;mi(f,p=>{i.visibleWrites=ZE(i.visibleWrites,an(s.path,p))})}return!0}else return!1}function g2(i,e){if(i.snap)return Si(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&Si(an(i.path,t),e))return!0;return!1}function _2(i){i.visibleWrites=BS(i.allWrites,y2,mt()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function y2(i){return i.visible}function BS(i,e,t){let s=Ai.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let f;if(l.snap)Si(t,c)?(f=hi(t,c),s=ju(s,f,l.snap)):Si(c,t)&&(f=hi(c,t),s=ju(s,mt(),l.snap.getChild(f)));else if(l.children){if(Si(t,c))f=hi(t,c),s=JE(s,f,l.children);else if(Si(c,t))if(f=hi(c,t),Ke(f))s=JE(s,mt(),l.children);else{const p=el(l.children,Xe(f));if(p){const g=p.getChild(vt(f));s=ju(s,mt(),g)}}}else throw ul("WriteRecord should have .snap or .children")}}return s}function FS(i,e,t,s,a){if(!s&&!a){const l=Fa(i.visibleWrites,e);if(l!=null)return l;{const c=Or(i.visibleWrites,e);if(rg(c))return t;if(t==null&&!sg(c,mt()))return null;{const f=t||rt.EMPTY_NODE;return nl(c,f)}}}else{const l=Or(i.visibleWrites,e);if(!a&&rg(l))return t;if(!a&&t==null&&!sg(l,mt()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(Si(g.path,e)||Si(e,g.path))},f=BS(i.allWrites,c,e),p=t||rt.EMPTY_NODE;return nl(f,p)}}}function v2(i,e,t){let s=rt.EMPTY_NODE;const a=Fa(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Sn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Or(i.visibleWrites,e);return t.forEachChild(Sn,(c,f)=>{const p=nl(Or(l,new Tt(c)),f);s=s.updateImmediateChild(c,p)}),eT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Or(i.visibleWrites,e);return eT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function E2(i,e,t,s,a){oe(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=an(e,t);if(sg(i.visibleWrites,l))return null;{const c=Or(i.visibleWrites,l);return rg(c)?a.getChild(t):nl(c,a.getChild(t))}}function T2(i,e,t,s){const a=an(e,t),l=Fa(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Or(i.visibleWrites,a);return nl(c,s.getNode().getImmediateChild(t))}else return null}function b2(i,e){return Fa(i.visibleWrites,e)}function S2(i,e,t,s,a,l,c){let f;const p=Or(i.visibleWrites,e),g=Fa(p,mt());if(g!=null)f=g;else if(t!=null)f=nl(p,t);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const v=[],T=c.getCompare(),w=l?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let k=w.getNext();for(;k&&v.length<a;)T(k,s)!==0&&v.push(k),k=w.getNext();return v}else return[]}function w2(){return{visibleWrites:Ai.empty(),allWrites:[],lastWriteId:-1}}function ag(i,e,t,s){return FS(i.writeTree,i.treePath,e,t,s)}function zS(i,e){return v2(i.writeTree,i.treePath,e)}function tT(i,e,t,s){return E2(i.writeTree,i.treePath,e,t,s)}function Td(i,e){return b2(i.writeTree,an(i.treePath,e))}function A2(i,e,t,s,a,l){return S2(i.writeTree,i.treePath,e,t,s,a,l)}function Qg(i,e,t){return T2(i.writeTree,i.treePath,e,t)}function qS(i,e){return HS(an(i.treePath,e),i.writeTree)}function HS(i,e){return{treePath:i,writeTree:e}}/**
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
 */class R2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;oe(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),oe(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,QE(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,t2(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,e2(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,QE(s,e.snapshotNode,a.oldSnap));else throw ul("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class I2{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const GS=new I2;class $g{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qg(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ka(this.viewCache_),l=A2(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function C2(i,e){oe(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),oe(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function N2(i,e,t,s,a){const l=new R2;let c,f;if(t.type===Wi.OVERWRITE){const g=t;g.source.fromUser?c=og(i,e,g.path,g.snap,s,a,l):(oe(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Ke(g.path),c=bd(i,e,g.path,g.snap,s,a,f,l))}else if(t.type===Wi.MERGE){const g=t;g.source.fromUser?c=D2(i,e,g.path,g.children,s,a,l):(oe(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=lg(i,e,g.path,g.children,s,a,f,l))}else if(t.type===Wi.ACK_USER_WRITE){const g=t;g.revert?c=k2(i,e,g.path,s,a,l):c=O2(i,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Wi.LISTEN_COMPLETE)c=M2(i,e,t.path,s,l);else throw ul("Unknown operation type: "+t.type);const p=l.getChanges();return x2(e,c,p),{viewCache:c,changes:p}}function x2(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=ig(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(ZN(ig(e)))}}function KS(i,e,t,s,a,l){const c=e.eventCache;if(Td(s,t)!=null)return e;{let f,p;if(Ke(t))if(oe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ka(e),v=g instanceof rt?g:rt.EMPTY_NODE,T=zS(s,v);f=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ag(s,ka(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Xe(t);if(g===".priority"){oe(Lr(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const T=tT(s,t,v,p);T!=null?f=i.filter.updatePriority(v,T):f=c.getNode()}else{const v=vt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=tT(s,t,c.getNode(),p);w!=null?T=c.getNode().getImmediateChild(g).updateChild(v,w):T=c.getNode().getImmediateChild(g)}else T=Qg(s,g,e.serverCache);T!=null?f=i.filter.updateChild(c.getNode(),g,T,v,a,l):f=c.getNode()}}return Uu(e,f,c.isFullyInitialized()||Ke(t),i.filter.filtersNodes())}}function bd(i,e,t,s,a,l,c,f){const p=e.serverCache;let g;const v=c?i.filter:i.filter.getIndexedFilter();if(Ke(t))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const k=p.getNode().updateChild(t,s);g=v.updateFullNode(p.getNode(),k,null)}else{const k=Xe(t);if(!p.isCompleteForPath(t)&&Lr(t)>1)return e;const V=vt(t),Y=p.getNode().getImmediateChild(k).updateChild(V,s);k===".priority"?g=v.updatePriority(p.getNode(),Y):g=v.updateChild(p.getNode(),k,Y,V,GS,null)}const T=LS(e,g,p.isFullyInitialized()||Ke(t),v.filtersNodes()),w=new $g(a,T,l);return KS(i,T,t,a,w,f)}function og(i,e,t,s,a,l,c){const f=e.eventCache;let p,g;const v=new $g(a,e,l);if(Ke(t))g=i.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Uu(e,g,!0,i.filter.filtersNodes());else{const T=Xe(t);if(T===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=Uu(e,g,f.isFullyInitialized(),f.isFiltered());else{const w=vt(t),k=f.getNode().getImmediateChild(T);let V;if(Ke(w))V=s;else{const G=v.getCompleteChild(T);G!=null?bS(w)===".priority"&&G.getChild(wS(w)).isEmpty()?V=G:V=G.updateChild(w,s):V=rt.EMPTY_NODE}if(k.equals(V))p=e;else{const G=i.filter.updateChild(f.getNode(),T,V,w,v,c);p=Uu(e,G,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function nT(i,e){return i.eventCache.isCompleteForChild(e)}function D2(i,e,t,s,a,l,c){let f=e;return s.foreach((p,g)=>{const v=an(t,p);nT(e,Xe(v))&&(f=og(i,f,v,g,a,l,c))}),s.foreach((p,g)=>{const v=an(t,p);nT(e,Xe(v))||(f=og(i,f,v,g,a,l,c))}),f}function iT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function lg(i,e,t,s,a,l,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ke(t)?g=s:g=new yt(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(v.hasChild(T)){const k=e.serverCache.getNode().getImmediateChild(T),V=iT(i,k,w);p=bd(i,p,new Tt(T),V,a,l,c,f)}}),g.children.inorderTraversal((T,w)=>{const k=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!v.hasChild(T)&&!k){const V=e.serverCache.getNode().getImmediateChild(T),G=iT(i,V,w);p=bd(i,p,new Tt(T),G,a,l,c,f)}}),p}function O2(i,e,t,s,a,l,c){if(Td(a,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ke(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return bd(i,e,t,p.getNode().getChild(t),a,l,f,c);if(Ke(t)){let g=new yt(null);return p.getNode().forEachChild($o,(v,T)=>{g=g.set(new Tt(v),T)}),lg(i,e,t,g,a,l,f,c)}else return e}else{let g=new yt(null);return s.foreach((v,T)=>{const w=an(t,v);p.isCompleteForPath(w)&&(g=g.set(v,p.getNode().getChild(w)))}),lg(i,e,t,g,a,l,f,c)}}function M2(i,e,t,s,a){const l=e.serverCache,c=LS(e,l.getNode(),l.isFullyInitialized()||Ke(t),l.isFiltered());return KS(i,c,t,s,GS,a)}function k2(i,e,t,s,a,l){let c;if(Td(s,t)!=null)return e;{const f=new $g(s,e,a),p=e.eventCache.getNode();let g;if(Ke(t)||Xe(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=ag(s,ka(e));else{const T=e.serverCache.getNode();oe(T instanceof rt,"serverChildren would be complete if leaf node"),v=zS(s,T)}v=v,g=i.filter.updateFullNode(p,v,l)}else{const v=Xe(t);let T=Qg(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=p.getImmediateChild(v)),T!=null?g=i.filter.updateChild(p,v,T,vt(t),f,l):e.eventCache.getNode().hasChild(v)?g=i.filter.updateChild(p,v,rt.EMPTY_NODE,vt(t),f,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ag(s,ka(e)),c.isLeafNode()&&(g=i.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Td(s,mt())!=null,Uu(e,g,c,i.filter.filtersNodes())}}function P2(i,e){const t=ka(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Ke(e)&&!t.getImmediateChild(Xe(e)).isEmpty())?t.getChild(e):null}function sT(i,e,t,s){e.type===Wi.MERGE&&e.source.queryId!==null&&(oe(ka(i.viewCache_),"We should always have a full cache before handling merges"),oe(ig(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=N2(i.processor_,a,e,t,s);return C2(i.processor_,l.viewCache),oe(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,V2(i,l.changes,l.viewCache.eventCache.getNode())}function V2(i,e,t,s){const a=i.eventRegistrations_;return u2(i.eventGenerator_,e,t,a)}/**
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
 */let rT;function L2(i){oe(!rT,"__referenceConstructor has already been defined"),rT=i}function Wg(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return oe(l!=null,"SyncTree gave us an op for an invalid query."),sT(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(sT(c,e,t,s));return l}}function Xg(i,e){let t=null;for(const s of i.views.values())t=t||P2(s,e);return t}/**
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
 */let aT;function U2(i){oe(!aT,"__referenceConstructor has already been defined"),aT=i}class oT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new yt(null),this.pendingWriteTree_=w2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function j2(i,e,t,s,a){return f2(i.pendingWriteTree_,e,t,s,a),a?Zd(i,new Ma(MS(),e,t)):[]}function Ko(i,e,t=!1){const s=m2(i.pendingWriteTree_,e);if(p2(i.pendingWriteTree_,e)){let l=new yt(null);return s.snap!=null?l=l.set(mt(),!0):mi(s.children,c=>{l=l.set(new Tt(c),!0)}),Zd(i,new Ed(s.path,l,t))}else return[]}function Jd(i,e,t){return Zd(i,new Ma(kS(),e,t))}function B2(i,e,t){const s=yt.fromObject(t);return Zd(i,new Qu(kS(),e,s))}function F2(i,e,t,s){const a=WS(i,s);if(a!=null){const l=XS(a),c=l.path,f=l.queryId,p=hi(c,e),g=new Ma(PS(f),p,t);return JS(i,c,g)}else return[]}function z2(i,e,t,s){const a=WS(i,s);if(a){const l=XS(a),c=l.path,f=l.queryId,p=hi(c,e),g=yt.fromObject(t),v=new Qu(PS(f),p,g);return JS(i,c,v)}else return[]}function YS(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,f)=>{const p=hi(c,e),g=Xg(f,p);if(g)return g});return FS(a,e,l,t,!0)}function Zd(i,e){return QS(e,i.syncPointTree_,null,jS(i.pendingWriteTree_,mt()))}function QS(i,e,t,s){if(Ke(i.path))return $S(i,e,t,s);{const a=e.get(mt());t==null&&a!=null&&(t=Xg(a,mt()));let l=[];const c=Xe(i.path),f=i.operationForChild(c),p=e.children.get(c);if(p&&f){const g=t?t.getImmediateChild(c):null,v=qS(s,c);l=l.concat(QS(f,p,g,v))}return a&&(l=l.concat(Wg(a,i,s,t))),l}}function $S(i,e,t,s){const a=e.get(mt());t==null&&a!=null&&(t=Xg(a,mt()));let l=[];return e.children.inorderTraversal((c,f)=>{const p=t?t.getImmediateChild(c):null,g=qS(s,c),v=i.operationForChild(c);v&&(l=l.concat($S(v,f,p,g)))}),a&&(l=l.concat(Wg(a,i,s,t))),l}function WS(i,e){return i.tagToQueryMap.get(e)}function XS(i){const e=i.indexOf("$");return oe(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Tt(i.substr(0,e))}}function JS(i,e,t){const s=i.syncPointTree_.get(e);oe(s,"Missing sync point for query tag that we're tracking");const a=jS(i.pendingWriteTree_,e);return Wg(s,t,a,null)}/**
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
 */class Jg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Jg(t)}node(){return this.node_}}class Zg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=an(this.path_,e);return new Zg(this.syncTree_,t)}node(){return YS(this.syncTree_,this.path_)}}const q2=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},lT=function(i,e,t){if(!i||typeof i!="object")return i;if(oe(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return H2(i[".sv"],e,t);if(typeof i[".sv"]=="object")return G2(i[".sv"],e);oe(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},H2=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:oe(!1,"Unexpected server value: "+i)}},G2=function(i,e,t){i.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&oe(!1,"Unexpected increment value: "+s);const a=e.node();if(oe(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},K2=function(i,e,t,s){return e_(e,new Zg(t,i),s)},Y2=function(i,e,t){return e_(i,new Jg(e),t)};function e_(i,e,t){const s=i.getPriority().val(),a=lT(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,f=lT(c.getValue(),e,t);return f!==c.getValue()||a!==c.getPriority().val()?new sn(f,Tn(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new sn(a))),c.forEachChild(Sn,(f,p)=>{const g=e_(p,e.getImmediateChild(f),t);g!==p&&(l=l.updateImmediateChild(f,g))}),l}}/**
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
 */class t_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function n_(i,e){let t=e instanceof Tt?e:new Tt(e),s=i,a=Xe(t);for(;a!==null;){const l=el(s.node.children,a)||{children:{},childCount:0};s=new t_(a,s,l),t=vt(t),a=Xe(t)}return s}function dl(i){return i.node.value}function ZS(i,e){i.node.value=e,ug(i)}function ew(i){return i.node.childCount>0}function Q2(i){return dl(i)===void 0&&!ew(i)}function ef(i,e){mi(i.node.children,(t,s)=>{e(new t_(t,i,s))})}function tw(i,e,t,s){t&&e(i),ef(i,a=>{tw(a,e,!0)})}function $2(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function cc(i){return new Tt(i.parent===null?i.name:cc(i.parent)+"/"+i.name)}function ug(i){i.parent!==null&&W2(i.parent,i.name,i)}function W2(i,e,t){const s=Q2(t),a=Ks(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,ug(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,ug(i))}/**
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
 */const X2=/[\[\].#$\/\u0000-\u001F\u007F]/,J2=/[\[\].#$\u0000-\u001F\u007F]/,jp=10*1024*1024,nw=function(i){return typeof i=="string"&&i.length!==0&&!X2.test(i)},Z2=function(i){return typeof i=="string"&&i.length!==0&&!J2.test(i)},ex=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Z2(i)},iw=function(i,e,t){const s=t instanceof Tt?new MN(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+Ia(s));if(typeof e=="function")throw new Error(i+"contains a function "+Ia(s)+" with contents = "+e.toString());if(tS(e))throw new Error(i+"contains "+e.toString()+" "+Ia(s));if(typeof e=="string"&&e.length>jp/3&&Qd(e)>jp)throw new Error(i+"contains a string greater than "+jp+" utf8 bytes "+Ia(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(mi(e,(c,f)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!nw(c)))throw new Error(i+" contains an invalid key ("+c+") "+Ia(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kN(s,c),iw(i,f,s),PN(s)}),a&&l)throw new Error(i+' contains ".value" child '+Ia(s)+" in addition to actual children.")}},tx=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ex(t))throw new Error(OI(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ix(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!AS(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function za(i,e,t){ix(i,t),sx(i,s=>Si(s,e)||Si(e,s))}function sx(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(rx(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function rx(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();Vu&&En("event: "+t.toString()),lc(s)}}}/**
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
 */const ax="repo_interrupt",ox=25;class lx{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vd(),this.transactionQueueTree_=new t_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ux(i,e,t){if(i.stats_=zg(i.repoInfo_),i.forceRestClient_||sN())i.server_=new yd(i.repoInfo_,(s,a,l,c)=>{uT(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>cT(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Vs(i.repoInfo_,e,(s,a,l,c)=>{uT(i,s,a,l,c)},s=>{cT(i,s)},s=>{hx(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=uN(i.repoInfo_,()=>new l2(i.stats_,i.server_)),i.infoData_=new i2,i.infoSyncTree_=new oT({startListening:(s,a,l,c)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=Jd(i.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),i_(i,"connected",!1),i.serverSyncTree_=new oT({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(f,p)=>{const g=c(f,p);za(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function cx(i){const t=i.infoData_.getNode(new Tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function sw(i){return q2({timestamp:cx(i)})}function uT(i,e,t,s,a){i.dataUpdateCount++;const l=new Tt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=fd(t,g=>Tn(g));c=z2(i.serverSyncTree_,l,p,a)}else{const p=Tn(t);c=F2(i.serverSyncTree_,l,p,a)}else if(s){const p=fd(t,g=>Tn(g));c=B2(i.serverSyncTree_,l,p)}else{const p=Tn(t);c=Jd(i.serverSyncTree_,l,p)}let f=l;c.length>0&&(f=r_(i,l)),za(i.eventQueue_,f,c)}function cT(i,e){i_(i,"connected",e),e===!1&&fx(i)}function hx(i,e){mi(e,(t,s)=>{i_(i,t,s)})}function i_(i,e,t){const s=new Tt("/.info/"+e),a=Tn(t);i.infoData_.updateSnapshot(s,a);const l=Jd(i.infoSyncTree_,s,a);za(i.eventQueue_,s,l)}function dx(i){return i.nextWriteId_++}function fx(i){rw(i,"onDisconnectEvents");const e=sw(i),t=vd();ng(i.onDisconnect_,mt(),(a,l)=>{const c=K2(a,l,i.serverSyncTree_,e);OS(t,a,c)});let s=[];ng(t,mt(),(a,l)=>{s=s.concat(Jd(i.serverSyncTree_,a,l));const c=_x(i,a);r_(i,c)}),i.onDisconnect_=vd(),za(i.eventQueue_,mt(),s)}function mx(i){i.persistentConnection_&&i.persistentConnection_.interrupt(ax)}function rw(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),En(t,...e)}function aw(i,e,t){return YS(i.serverSyncTree_,e,t)||rt.EMPTY_NODE}function s_(i,e=i.transactionQueueTree_){if(e||tf(i,e),dl(e)){const t=lw(i,e);oe(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&px(i,cc(e),t)}else ew(e)&&ef(e,t=>{s_(i,t)})}function px(i,e,t){const s=t.map(g=>g.currentWriteId),a=aw(i,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];oe(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=hi(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const f=l.val(!0),p=e;i.server_.put(p.toString(),f,g=>{rw(i,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,v=v.concat(Ko(i.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();tf(i,n_(i.transactionQueueTree_,e)),s_(i,i.transactionQueueTree_),za(i.eventQueue_,e,v);for(let w=0;w<T.length;w++)lc(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Wn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}r_(i,e)}},c)}function r_(i,e){const t=ow(i,e),s=cc(t),a=lw(i,t);return gx(i,a,s),s}function gx(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=hi(t,p.path);let v=!1,T;if(oe(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,T=p.abortReason,a=a.concat(Ko(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=ox)v=!0,T="maxretry",a=a.concat(Ko(i.serverSyncTree_,p.currentWriteId,!0));else{const w=aw(i,p.path,c);p.currentInputSnapshot=w;const k=e[f].update(w.val());if(k!==void 0){iw("transaction failed: Data returned ",k,p.path);let V=Tn(k);typeof k=="object"&&k!=null&&Ks(k,".priority")||(V=V.updatePriority(w.getPriority()));const Y=p.currentWriteId,fe=sw(i),re=Y2(V,w,fe);p.currentOutputSnapshotRaw=V,p.currentOutputSnapshotResolved=re,p.currentWriteId=dx(i),c.splice(c.indexOf(Y),1),a=a.concat(j2(i.serverSyncTree_,p.path,re,p.currentWriteId,p.applyLocally)),a=a.concat(Ko(i.serverSyncTree_,Y,!0))}else v=!0,T="nodata",a=a.concat(Ko(i.serverSyncTree_,p.currentWriteId,!0))}za(i.eventQueue_,t,a),a=[],v&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(T==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(T),!1,null))))}tf(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)lc(s[f]);s_(i,i.transactionQueueTree_)}function ow(i,e){let t,s=i.transactionQueueTree_;for(t=Xe(e);t!==null&&dl(s)===void 0;)s=n_(s,t),e=vt(e),t=Xe(e);return s}function lw(i,e){const t=[];return uw(i,e,t),t.sort((s,a)=>s.order-a.order),t}function uw(i,e,t){const s=dl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);ef(e,a=>{uw(i,a,t)})}function tf(i,e){const t=dl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,ZS(e,t.length>0?t:void 0)}ef(e,s=>{tf(i,s)})}function _x(i,e){const t=cc(ow(i,e)),s=n_(i.transactionQueueTree_,e);return $2(s,a=>{Bp(i,a)}),Bp(i,s),tw(s,a=>{Bp(i,a)}),t}function Bp(i,e){const t=dl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(oe(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(oe(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Ko(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?ZS(e,void 0):t.length=l+1,za(i.eventQueue_,cc(e),a);for(let c=0;c<s.length;c++)lc(s[c])}}/**
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
 */function yx(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function vx(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Wn(`Invalid query segment '${t}' in query '${i}'`)}return e}const hT=function(i,e){const t=Ex(i),s=t.namespace;t.domain==="firebase.com"&&Fs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||WC();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new fS(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Tt(t.pathString)}},Ex=function(i){let e="",t="",s="",a="",l="",c=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let v=i.indexOf("/");v===-1&&(v=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(v,T)),v<T&&(a=yx(i.substring(v,T)));const w=vx(i.substring(Math.min(i.length,T)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const k=e.slice(0,g);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const V=e.indexOf(".");s=e.substring(0,V).toLowerCase(),t=e.substring(V+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:f,pathString:a,namespace:l}};/**
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
 */class a_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ke(this._path)?null:bS(this._path)}get ref(){return new fl(this._repo,this._path)}get _queryIdentifier(){const e=WE(this._queryParams),t=Bg(e);return t==="{}"?"default":t}get _queryObject(){return WE(this._queryParams)}isEqual(e){if(e=It(e),!(e instanceof a_))return!1;const t=this._repo===e._repo,s=AS(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+ON(this._path)}}class fl extends a_{constructor(e,t){super(e,t,new Kg,!1)}get parent(){const e=wS(this._path);return e===null?null:new fl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}L2(fl);U2(fl);/**
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
 */const Tx="FIREBASE_DATABASE_EMULATOR_HOST",cg={};let bx=!1;function Sx(i,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Gs(l);i.repoInfo_=new fS(e,c,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(i.authTokenProvider_=s)}function wx(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||Fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),En("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=hT(l,a),f=c.repoInfo,p;typeof process<"u"&&DE&&(p=DE[Tx]),p?(l=`http://${p}?ns=${f.namespace}`,c=hT(l,a),f=c.repoInfo):c.repoInfo.secure;const g=new aN(i.name,i.options,e);tx("Invalid Firebase Database URL",c),Ke(c.path)||Fs("Database URL must point to the root of a Firebase Database (not including a child path).");const v=Rx(f,i,g,new rN(i,t));return new Ix(v,i)}function Ax(i,e){const t=cg[e];(!t||t[i.key]!==i)&&Fs(`Database ${e}(${i.repoInfo_}) has already been deleted.`),mx(i),delete t[i.key]}function Rx(i,e,t,s){let a=cg[e.name];a||(a={},cg[e.name]=a);let l=a[i.toURLString()];return l&&Fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new lx(i,bx,t,s),a[i.toURLString()]=l,l}class Ix{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ux(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fl(this._repo,mt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ax(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fs("Cannot call "+e+" on a deleted database.")}}function Cx(i=Wd(),e){const t=rc(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Vg("database");s&&Nx(t,...s)}return t}function Nx(i,e,t,s={}){i=It(i),i._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&Pr(s,l.repoInfo_.emulatorOptions))return;Fs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Fs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Zh(Zh.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:Hb(s.mockUserToken,i.app.options.projectId);c=new Zh(f)}Gs(e)&&(Kd(e),Yd("Database",!0)),Sx(l,a,s,c)}/**
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
 */function xx(i){HC(Ba),Vr(new js("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return wx(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),di(OE,ME,i),di(OE,ME,"esm2017")}Vs.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Vs.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};xx();var dT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,cw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,A){function C(){}C.prototype=A.prototype,M.D=A.prototype,M.prototype=new C,M.prototype.constructor=M,M.C=function(D,P,L){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return A.prototype[P].apply(D,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,A,C){C||(C=0);var D=Array(16);if(typeof A=="string")for(var P=0;16>P;++P)D[P]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(P=0;16>P;++P)D[P]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=M.g[0],C=M.g[1],P=M.g[2];var L=M.g[3],N=A+(L^C&(P^L))+D[0]+3614090360&4294967295;A=C+(N<<7&4294967295|N>>>25),N=L+(P^A&(C^P))+D[1]+3905402710&4294967295,L=A+(N<<12&4294967295|N>>>20),N=P+(C^L&(A^C))+D[2]+606105819&4294967295,P=L+(N<<17&4294967295|N>>>15),N=C+(A^P&(L^A))+D[3]+3250441966&4294967295,C=P+(N<<22&4294967295|N>>>10),N=A+(L^C&(P^L))+D[4]+4118548399&4294967295,A=C+(N<<7&4294967295|N>>>25),N=L+(P^A&(C^P))+D[5]+1200080426&4294967295,L=A+(N<<12&4294967295|N>>>20),N=P+(C^L&(A^C))+D[6]+2821735955&4294967295,P=L+(N<<17&4294967295|N>>>15),N=C+(A^P&(L^A))+D[7]+4249261313&4294967295,C=P+(N<<22&4294967295|N>>>10),N=A+(L^C&(P^L))+D[8]+1770035416&4294967295,A=C+(N<<7&4294967295|N>>>25),N=L+(P^A&(C^P))+D[9]+2336552879&4294967295,L=A+(N<<12&4294967295|N>>>20),N=P+(C^L&(A^C))+D[10]+4294925233&4294967295,P=L+(N<<17&4294967295|N>>>15),N=C+(A^P&(L^A))+D[11]+2304563134&4294967295,C=P+(N<<22&4294967295|N>>>10),N=A+(L^C&(P^L))+D[12]+1804603682&4294967295,A=C+(N<<7&4294967295|N>>>25),N=L+(P^A&(C^P))+D[13]+4254626195&4294967295,L=A+(N<<12&4294967295|N>>>20),N=P+(C^L&(A^C))+D[14]+2792965006&4294967295,P=L+(N<<17&4294967295|N>>>15),N=C+(A^P&(L^A))+D[15]+1236535329&4294967295,C=P+(N<<22&4294967295|N>>>10),N=A+(P^L&(C^P))+D[1]+4129170786&4294967295,A=C+(N<<5&4294967295|N>>>27),N=L+(C^P&(A^C))+D[6]+3225465664&4294967295,L=A+(N<<9&4294967295|N>>>23),N=P+(A^C&(L^A))+D[11]+643717713&4294967295,P=L+(N<<14&4294967295|N>>>18),N=C+(L^A&(P^L))+D[0]+3921069994&4294967295,C=P+(N<<20&4294967295|N>>>12),N=A+(P^L&(C^P))+D[5]+3593408605&4294967295,A=C+(N<<5&4294967295|N>>>27),N=L+(C^P&(A^C))+D[10]+38016083&4294967295,L=A+(N<<9&4294967295|N>>>23),N=P+(A^C&(L^A))+D[15]+3634488961&4294967295,P=L+(N<<14&4294967295|N>>>18),N=C+(L^A&(P^L))+D[4]+3889429448&4294967295,C=P+(N<<20&4294967295|N>>>12),N=A+(P^L&(C^P))+D[9]+568446438&4294967295,A=C+(N<<5&4294967295|N>>>27),N=L+(C^P&(A^C))+D[14]+3275163606&4294967295,L=A+(N<<9&4294967295|N>>>23),N=P+(A^C&(L^A))+D[3]+4107603335&4294967295,P=L+(N<<14&4294967295|N>>>18),N=C+(L^A&(P^L))+D[8]+1163531501&4294967295,C=P+(N<<20&4294967295|N>>>12),N=A+(P^L&(C^P))+D[13]+2850285829&4294967295,A=C+(N<<5&4294967295|N>>>27),N=L+(C^P&(A^C))+D[2]+4243563512&4294967295,L=A+(N<<9&4294967295|N>>>23),N=P+(A^C&(L^A))+D[7]+1735328473&4294967295,P=L+(N<<14&4294967295|N>>>18),N=C+(L^A&(P^L))+D[12]+2368359562&4294967295,C=P+(N<<20&4294967295|N>>>12),N=A+(C^P^L)+D[5]+4294588738&4294967295,A=C+(N<<4&4294967295|N>>>28),N=L+(A^C^P)+D[8]+2272392833&4294967295,L=A+(N<<11&4294967295|N>>>21),N=P+(L^A^C)+D[11]+1839030562&4294967295,P=L+(N<<16&4294967295|N>>>16),N=C+(P^L^A)+D[14]+4259657740&4294967295,C=P+(N<<23&4294967295|N>>>9),N=A+(C^P^L)+D[1]+2763975236&4294967295,A=C+(N<<4&4294967295|N>>>28),N=L+(A^C^P)+D[4]+1272893353&4294967295,L=A+(N<<11&4294967295|N>>>21),N=P+(L^A^C)+D[7]+4139469664&4294967295,P=L+(N<<16&4294967295|N>>>16),N=C+(P^L^A)+D[10]+3200236656&4294967295,C=P+(N<<23&4294967295|N>>>9),N=A+(C^P^L)+D[13]+681279174&4294967295,A=C+(N<<4&4294967295|N>>>28),N=L+(A^C^P)+D[0]+3936430074&4294967295,L=A+(N<<11&4294967295|N>>>21),N=P+(L^A^C)+D[3]+3572445317&4294967295,P=L+(N<<16&4294967295|N>>>16),N=C+(P^L^A)+D[6]+76029189&4294967295,C=P+(N<<23&4294967295|N>>>9),N=A+(C^P^L)+D[9]+3654602809&4294967295,A=C+(N<<4&4294967295|N>>>28),N=L+(A^C^P)+D[12]+3873151461&4294967295,L=A+(N<<11&4294967295|N>>>21),N=P+(L^A^C)+D[15]+530742520&4294967295,P=L+(N<<16&4294967295|N>>>16),N=C+(P^L^A)+D[2]+3299628645&4294967295,C=P+(N<<23&4294967295|N>>>9),N=A+(P^(C|~L))+D[0]+4096336452&4294967295,A=C+(N<<6&4294967295|N>>>26),N=L+(C^(A|~P))+D[7]+1126891415&4294967295,L=A+(N<<10&4294967295|N>>>22),N=P+(A^(L|~C))+D[14]+2878612391&4294967295,P=L+(N<<15&4294967295|N>>>17),N=C+(L^(P|~A))+D[5]+4237533241&4294967295,C=P+(N<<21&4294967295|N>>>11),N=A+(P^(C|~L))+D[12]+1700485571&4294967295,A=C+(N<<6&4294967295|N>>>26),N=L+(C^(A|~P))+D[3]+2399980690&4294967295,L=A+(N<<10&4294967295|N>>>22),N=P+(A^(L|~C))+D[10]+4293915773&4294967295,P=L+(N<<15&4294967295|N>>>17),N=C+(L^(P|~A))+D[1]+2240044497&4294967295,C=P+(N<<21&4294967295|N>>>11),N=A+(P^(C|~L))+D[8]+1873313359&4294967295,A=C+(N<<6&4294967295|N>>>26),N=L+(C^(A|~P))+D[15]+4264355552&4294967295,L=A+(N<<10&4294967295|N>>>22),N=P+(A^(L|~C))+D[6]+2734768916&4294967295,P=L+(N<<15&4294967295|N>>>17),N=C+(L^(P|~A))+D[13]+1309151649&4294967295,C=P+(N<<21&4294967295|N>>>11),N=A+(P^(C|~L))+D[4]+4149444226&4294967295,A=C+(N<<6&4294967295|N>>>26),N=L+(C^(A|~P))+D[11]+3174756917&4294967295,L=A+(N<<10&4294967295|N>>>22),N=P+(A^(L|~C))+D[2]+718787259&4294967295,P=L+(N<<15&4294967295|N>>>17),N=C+(L^(P|~A))+D[9]+3951481745&4294967295,M.g[0]=M.g[0]+A&4294967295,M.g[1]=M.g[1]+(P+(N<<21&4294967295|N>>>11))&4294967295,M.g[2]=M.g[2]+P&4294967295,M.g[3]=M.g[3]+L&4294967295}s.prototype.u=function(M,A){A===void 0&&(A=M.length);for(var C=A-this.blockSize,D=this.B,P=this.h,L=0;L<A;){if(P==0)for(;L<=C;)a(this,M,L),L+=this.blockSize;if(typeof M=="string"){for(;L<A;)if(D[P++]=M.charCodeAt(L++),P==this.blockSize){a(this,D),P=0;break}}else for(;L<A;)if(D[P++]=M[L++],P==this.blockSize){a(this,D),P=0;break}}this.h=P,this.o+=A},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var A=1;A<M.length-8;++A)M[A]=0;var C=8*this.o;for(A=M.length-8;A<M.length;++A)M[A]=C&255,C/=256;for(this.u(M),M=Array(16),A=C=0;4>A;++A)for(var D=0;32>D;D+=8)M[C++]=this.g[A]>>>D&255;return M};function l(M,A){var C=f;return Object.prototype.hasOwnProperty.call(C,M)?C[M]:C[M]=A(M)}function c(M,A){this.h=A;for(var C=[],D=!0,P=M.length-1;0<=P;P--){var L=M[P]|0;D&&L==A||(C[P]=L,D=!1)}this.g=C}var f={};function p(M){return-128<=M&&128>M?l(M,function(A){return new c([A|0],0>A?-1:0)}):new c([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return T;if(0>M)return Y(g(-M));for(var A=[],C=1,D=0;M>=C;D++)A[D]=M/C|0,C*=4294967296;return new c(A,0)}function v(M,A){if(M.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(M.charAt(0)=="-")return Y(v(M.substring(1),A));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(A,8)),D=T,P=0;P<M.length;P+=8){var L=Math.min(8,M.length-P),N=parseInt(M.substring(P,P+L),A);8>L?(L=g(Math.pow(A,L)),D=D.j(L).add(g(N))):(D=D.j(C),D=D.add(g(N)))}return D}var T=p(0),w=p(1),k=p(16777216);i=c.prototype,i.m=function(){if(G(this))return-Y(this).m();for(var M=0,A=1,C=0;C<this.g.length;C++){var D=this.i(C);M+=(0<=D?D:4294967296+D)*A,A*=4294967296}return M},i.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(V(this))return"0";if(G(this))return"-"+Y(this).toString(M);for(var A=g(Math.pow(M,6)),C=this,D="";;){var P=Se(C,A).g;C=fe(C,P.j(A));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(M);if(C=P,V(C))return L+D;for(;6>L.length;)L="0"+L;D=L+D}},i.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function V(M){if(M.h!=0)return!1;for(var A=0;A<M.g.length;A++)if(M.g[A]!=0)return!1;return!0}function G(M){return M.h==-1}i.l=function(M){return M=fe(this,M),G(M)?-1:V(M)?0:1};function Y(M){for(var A=M.g.length,C=[],D=0;D<A;D++)C[D]=~M.g[D];return new c(C,~M.h).add(w)}i.abs=function(){return G(this)?Y(this):this},i.add=function(M){for(var A=Math.max(this.g.length,M.g.length),C=[],D=0,P=0;P<=A;P++){var L=D+(this.i(P)&65535)+(M.i(P)&65535),N=(L>>>16)+(this.i(P)>>>16)+(M.i(P)>>>16);D=N>>>16,L&=65535,N&=65535,C[P]=N<<16|L}return new c(C,C[C.length-1]&-2147483648?-1:0)};function fe(M,A){return M.add(Y(A))}i.j=function(M){if(V(this)||V(M))return T;if(G(this))return G(M)?Y(this).j(Y(M)):Y(Y(this).j(M));if(G(M))return Y(this.j(Y(M)));if(0>this.l(k)&&0>M.l(k))return g(this.m()*M.m());for(var A=this.g.length+M.g.length,C=[],D=0;D<2*A;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(var P=0;P<M.g.length;P++){var L=this.i(D)>>>16,N=this.i(D)&65535,ue=M.i(P)>>>16,ae=M.i(P)&65535;C[2*D+2*P]+=N*ae,re(C,2*D+2*P),C[2*D+2*P+1]+=L*ae,re(C,2*D+2*P+1),C[2*D+2*P+1]+=N*ue,re(C,2*D+2*P+1),C[2*D+2*P+2]+=L*ue,re(C,2*D+2*P+2)}for(D=0;D<A;D++)C[D]=C[2*D+1]<<16|C[2*D];for(D=A;D<2*A;D++)C[D]=0;return new c(C,0)};function re(M,A){for(;(M[A]&65535)!=M[A];)M[A+1]+=M[A]>>>16,M[A]&=65535,A++}function le(M,A){this.g=M,this.h=A}function Se(M,A){if(V(A))throw Error("division by zero");if(V(M))return new le(T,T);if(G(M))return A=Se(Y(M),A),new le(Y(A.g),Y(A.h));if(G(A))return A=Se(M,Y(A)),new le(Y(A.g),A.h);if(30<M.g.length){if(G(M)||G(A))throw Error("slowDivide_ only works with positive integers.");for(var C=w,D=A;0>=D.l(M);)C=Te(C),D=Te(D);var P=Ce(C,1),L=Ce(D,1);for(D=Ce(D,2),C=Ce(C,2);!V(D);){var N=L.add(D);0>=N.l(M)&&(P=P.add(C),L=N),D=Ce(D,1),C=Ce(C,1)}return A=fe(M,P.j(A)),new le(P,A)}for(P=T;0<=M.l(A);){for(C=Math.max(1,Math.floor(M.m()/A.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),L=g(C),N=L.j(A);G(N)||0<N.l(M);)C-=D,L=g(C),N=L.j(A);V(L)&&(L=w),P=P.add(L),M=fe(M,N)}return new le(P,M)}i.A=function(M){return Se(this,M).h},i.and=function(M){for(var A=Math.max(this.g.length,M.g.length),C=[],D=0;D<A;D++)C[D]=this.i(D)&M.i(D);return new c(C,this.h&M.h)},i.or=function(M){for(var A=Math.max(this.g.length,M.g.length),C=[],D=0;D<A;D++)C[D]=this.i(D)|M.i(D);return new c(C,this.h|M.h)},i.xor=function(M){for(var A=Math.max(this.g.length,M.g.length),C=[],D=0;D<A;D++)C[D]=this.i(D)^M.i(D);return new c(C,this.h^M.h)};function Te(M){for(var A=M.g.length+1,C=[],D=0;D<A;D++)C[D]=M.i(D)<<1|M.i(D-1)>>>31;return new c(C,M.h)}function Ce(M,A){var C=A>>5;A%=32;for(var D=M.g.length-C,P=[],L=0;L<D;L++)P[L]=0<A?M.i(L+C)>>>A|M.i(L+C+1)<<32-A:M.i(L+C);return new c(P,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,cw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Mr=c}).apply(typeof dT<"u"?dT:typeof self<"u"?self:typeof window<"u"?window:{});var Kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hw,Du,dw,td,hg,fw,mw,pw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kh=="object"&&Kh];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var S=0;S<h.length-1;S++){var j=h[S];if(!(j in y))break e;y=y[j]}h=h[h.length-1],S=y[h],_=_(S),_!=S&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,S=!1,j={next:function(){if(!S&&y<h.length){var K=y++;return{value:_(K,h[K]),done:!1}}return S=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,S),h.apply(_,j)}}return function(){return h.apply(_,arguments)}}function w(h,_,y){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,w.apply(null,arguments)}function k(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var S=y.slice();return S.push.apply(S,arguments),h.apply(this,S)}}function V(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(S,j,K){for(var ne=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)ne[Ye-2]=arguments[Ye];return _.prototype[j].apply(S,ne)}}function G(h){const _=h.length;if(0<_){const y=Array(_);for(let S=0;S<_;S++)y[S]=h[S];return y}return[]}function Y(h,_){for(let y=1;y<arguments.length;y++){const S=arguments[y];if(p(S)){const j=h.length||0,K=S.length||0;h.length=j+K;for(let ne=0;ne<K;ne++)h[j+ne]=S[ne]}else h.push(S)}}class fe{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function re(h){return/^[\s\xa0]*$/.test(h)}function le(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function Se(h){return Se[" "](h),h}Se[" "]=function(){};var Te=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function Ce(h,_,y){for(const S in h)_.call(y,h[S],S,h)}function M(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function A(h){const _={};for(const y in h)_[y]=h[y];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(h,_){let y,S;for(let j=1;j<arguments.length;j++){S=arguments[j];for(y in S)h[y]=S[y];for(let K=0;K<C.length;K++)y=C[K],Object.prototype.hasOwnProperty.call(S,y)&&(h[y]=S[y])}}function P(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function L(h){f.setTimeout(()=>{throw h},0)}function N(){var h=ye;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ue{constructor(){this.h=this.g=null}add(_,y){const S=ae.get();S.set(_,y),this.h?this.h.next=S:this.g=S,this.h=S}}var ae=new fe(()=>new z,h=>h.reset());class z{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ie=!1,ye=new ue,x=()=>{const h=f.Promise.resolve(void 0);ee=()=>{h.then(X)}};var X=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(y){L(y)}var _=ae;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ie=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};f.addEventListener("test",y,_),f.removeEventListener("test",y,_)}catch{}return h}();function De(h,_){if(te.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,S=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(Te){e:{try{Se(_.nodeName);var j=!0;break e}catch{}j=!1}j||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ne[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}V(De,te);var Ne={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),ut=0;function Xn(h,_,y,S,j){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!S,this.ha=j,this.key=++ut,this.da=this.fa=!1}function pi(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ci(h){this.src=h,this.g={},this.h=0}Ci.prototype.add=function(h,_,y,S,j){var K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);var ne=Ni(h,_,S,j);return-1<ne?(_=h[ne],y||(_.fa=!1)):(_=new Xn(_,this.src,K,!!S,j),_.fa=y,h.push(_)),_};function Ze(h,_){var y=_.type;if(y in h.g){var S=h.g[y],j=Array.prototype.indexOf.call(S,_,void 0),K;(K=0<=j)&&Array.prototype.splice.call(S,j,1),K&&(pi(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Ni(h,_,y,S){for(var j=0;j<h.length;++j){var K=h[j];if(!K.da&&K.listener==_&&K.capture==!!y&&K.ha==S)return j}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),$r={};function Ya(h,_,y,S,j){if(Array.isArray(_)){for(var K=0;K<_.length;K++)Ya(h,_[K],y,S,j);return null}return y=$a(y),h&&h[Lt]?h.K(_,y,g(S)?!!S.capture:!1,j):An(h,_,y,!1,S,j)}function An(h,_,y,S,j,K){if(!_)throw Error("Invalid event type");var ne=g(j)?!!j.capture:!!j,Ye=Qs(h);if(Ye||(h[xi]=Ye=new Ci(h)),y=Ye.add(_,y,S,ne,K),y.proxy)return y;if(S=Qa(),y.proxy=S,S.src=h,S.listener=y,h.addEventListener)pe||(j=ne),j===void 0&&(j=!1),h.addEventListener(_.toString(),S,j);else if(h.attachEvent)h.attachEvent(as(_.toString()),S);else if(h.addListener&&h.removeListener)h.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Qa(){function h(y){return _.call(h.src,h.listener,y)}const _=vl;return h}function Wr(h,_,y,S,j){if(Array.isArray(_))for(var K=0;K<_.length;K++)Wr(h,_[K],y,S,j);else S=g(S)?!!S.capture:!!S,y=$a(y),h&&h[Lt]?(h=h.i,_=String(_).toString(),_ in h.g&&(K=h.g[_],y=Ni(K,y,S,j),-1<y&&(pi(K[y]),Array.prototype.splice.call(K,y,1),K.length==0&&(delete h.g[_],h.h--)))):h&&(h=Qs(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Ni(_,y,S,j)),(y=-1<h?_[h]:null)&&Ys(y))}function Ys(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Lt])Ze(_.i,h);else{var y=h.type,S=h.proxy;_.removeEventListener?_.removeEventListener(y,S,h.capture):_.detachEvent?_.detachEvent(as(y),S):_.addListener&&_.removeListener&&_.removeListener(S),(y=Qs(_))?(Ze(y,h),y.h==0&&(y.src=null,_[xi]=null)):pi(h)}}}function as(h){return h in $r?$r[h]:$r[h]="on"+h}function vl(h,_){if(h.da)h=!0;else{_=new De(_,this);var y=h.listener,S=h.ha||h.src;h.fa&&Ys(h),h=y.call(S,_)}return h}function Qs(h){return h=h[xi],h instanceof Ci?h:null}var jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function $a(h){return typeof h=="function"?h:(h[jn]||(h[jn]=function(_){return h.handleEvent(_)}),h[jn])}function bt(){se.call(this),this.i=new Ci(this),this.M=this,this.F=null}V(bt,se),bt.prototype[Lt]=!0,bt.prototype.removeEventListener=function(h,_,y,S){Wr(this,h,_,y,S)};function it(h,_){var y,S=h.F;if(S)for(y=[];S;S=S.F)y.push(S);if(h=h.M,S=_.type||_,typeof _=="string")_=new te(_,h);else if(_ instanceof te)_.target=_.target||h;else{var j=_;_=new te(S,h),D(_,j)}if(j=!0,y)for(var K=y.length-1;0<=K;K--){var ne=_.g=y[K];j=et(ne,S,!0,_)&&j}if(ne=_.g=h,j=et(ne,S,!0,_)&&j,j=et(ne,S,!1,_)&&j,y)for(K=0;K<y.length;K++)ne=_.g=y[K],j=et(ne,S,!1,_)&&j}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],S=0;S<y.length;S++)pi(y[S]);delete h.g[_],h.h--}}this.F=null},bt.prototype.K=function(h,_,y,S){return this.i.add(String(h),_,!1,y,S)},bt.prototype.L=function(h,_,y,S){return this.i.add(String(h),_,!0,y,S)};function et(h,_,y,S){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var j=!0,K=0;K<_.length;++K){var ne=_[K];if(ne&&!ne.da&&ne.capture==y){var Ye=ne.listener,Kt=ne.ha||ne.src;ne.fa&&Ze(h.i,ne),j=Ye.call(Kt,S)!==!1&&j}}return j&&!S.defaultPrevented}function Xt(h,_,y){if(typeof h=="function")y&&(h=w(h,y));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function de(h){h.g=Xt(()=>{h.g=null,h.i&&(h.i=!1,de(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class ge extends se{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:de(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ve(h){se.call(this),this.h=h,this.g={}}V(ve,se);var _e=[];function Ge(h){Ce(h.g,function(_,y){this.g.hasOwnProperty(y)&&Ys(_)},h),h.g={}}ve.prototype.N=function(){ve.aa.N.call(this),Ge(this)},ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ve=f.JSON.stringify,Be=f.JSON.parse,At=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function Ot(){}Ot.prototype.h=null;function xn(h){return h.h||(h.h=h.i())}function $s(){}var os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ls(){te.call(this,"d")}V(ls,te);function El(){te.call(this,"c")}V(El,te);var Di={},Tl=null;function Ws(){return Tl=Tl||new bt}Di.La="serverreachability";function Wa(h){te.call(this,Di.La,h)}V(Wa,te);function Xs(h){const _=Ws();it(_,new Wa(_))}Di.STAT_EVENT="statevent";function Sc(h,_){te.call(this,Di.STAT_EVENT,h),this.stat=_}V(Sc,te);function St(h){const _=Ws();it(_,new Sc(_,h))}Di.Ma="timingevent";function Gt(h,_){te.call(this,Di.Ma,h),this.size=_}V(Gt,te);function Ut(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function bl(h,_,y,S,j,K){h.info(function(){if(h.g)if(K)for(var ne="",Ye=K.split("&"),Kt=0;Kt<Ye.length;Kt++){var Qe=Ye[Kt].split("=");if(1<Qe.length){var Zt=Qe[0];Qe=Qe[1];var Yt=Zt.split("_");ne=2<=Yt.length&&Yt[1]=="type"?ne+(Zt+"="+Qe+"&"):ne+(Zt+"=redacted&")}}else ne=null;else ne=K;return"XMLHTTP REQ ("+S+") [attempt "+j+"]: "+_+`
`+y+`
`+ne})}function Rf(h,_,y,S,j,K,ne){h.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+j+"]: "+_+`
`+y+`
`+K+" "+ne})}function Js(h,_,y,S){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Xr(h,y)+(S?" "+S:"")})}function wc(h,_){h.info(function(){return"TIMEOUT: "+_})}Jn.prototype.info=function(){};function Xr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var S=y[h];if(!(2>S.length)){var j=S[1];if(Array.isArray(j)&&!(1>j.length)){var K=j[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ne=1;ne<j.length;ne++)j[ne]=""}}}}return Ve(y)}catch{return _}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},us={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oi;function Mi(){}V(Mi,Ot),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Oi=new Mi;function Rn(h,_,y,S){this.j=h,this.i=_,this.l=y,this.R=S||1,this.U=new ve(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mt}function Mt(){this.i=null,this.g="",this.h=!1}var Sl={},Xa={};function gi(h,_,y){h.L=1,h.v=na(Bn(_)),h.m=y,h.P=!0,cs(h,null)}function cs(h,_){h.F=Date.now(),Jr(h),h.A=Bn(h.v);var y=h.A,S=h.R;Array.isArray(S)||(S=[String(S)]),Nl(y.i,"t",S),h.C=0,y=h.j.J,h.h=new Mt,h.g=Bc(h.j,y?_:null,!h.m),0<h.O&&(h.M=new ge(w(h.Y,h,h.g),h.O)),_=h.U,y=h.g,S=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(_e[0]=j.toString()),j=_e);for(var K=0;K<j.length;K++){var ne=Ya(y,j[K],S||_.handleEvent,!1,_.h||_);if(!ne)break;_.g[ne.key]=ne}_=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Xs(),bl(h.i,h.u,h.A,h.l,h.R,h.m)}Rn.prototype.ca=function(h){h=h.target;const _=this.M;_&&ni(h)==3?_.j():this.Y(h)},Rn.prototype.Y=function(h){try{if(h==this.g)e:{const Yt=ni(this.g);var _=this.g.Ba();const ys=this.g.Z();if(!(3>Yt)&&(Yt!=3||this.g&&(this.h.h||this.g.oa()||Oc(this.g)))){this.J||Yt!=4||_==7||(_==8||0>=ys?Xs(3):Xs(2)),er(this);var y=this.g.Z();this.X=y;t:if(Ac(this)){var S=Oc(this.g);h="";var j=S.length,K=ni(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),ki(this);var ne="";break t}this.h.i=new f.TextDecoder}for(_=0;_<j;_++)this.h.h=!0,h+=this.h.i.decode(S[_],{stream:!(K&&_==j-1)});S.length=0,this.h.g+=h,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=y==200,Rf(this.i,this.u,this.A,this.l,this.R,Yt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,Kt=this.g;if((Ye=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(Ye)){var Qe=Ye;break t}}Qe=null}if(y=Qe)Js(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zr(this,y);else{this.o=!1,this.s=3,St(12),on(this),ki(this);break e}}if(this.P){y=!0;let ln;for(;!this.J&&this.C<ne.length;)if(ln=Rc(this,ne),ln==Xa){Yt==4&&(this.s=4,St(14),y=!1),Js(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Sl){this.s=4,St(15),Js(this.i,this.l,ne,"[Invalid Chunk]"),y=!1;break}else Js(this.i,this.l,ln,null),Zr(this,ln);if(Ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Yt!=4||ne.length!=0||this.h.h||(this.s=1,St(16),y=!1),this.o=this.o&&y,!y)Js(this.i,this.l,ne,"[Invalid Chunked Response]"),on(this),ki(this);else if(0<ne.length&&!this.W){this.W=!0;var Zt=this.j;Zt.g==this&&Zt.ba&&!Zt.M&&(Zt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ca(Zt),Zt.M=!0,St(11))}}else Js(this.i,this.l,ne,null),Zr(this,ne);Yt==4&&on(this),this.o&&!this.J&&(Yt==4?Lc(this.j,this):(this.o=!1,Jr(this)))}else Df(this.g),y==400&&0<ne.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),on(this),ki(this)}}}catch{}finally{}};function Ac(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Rc(h,_){var y=h.C,S=_.indexOf(`
`,y);return S==-1?Xa:(y=Number(_.substring(y,S)),isNaN(y)?Sl:(S+=1,S+y>_.length?Xa:(_=_.slice(S,S+y),h.C=S+y,_)))}Rn.prototype.cancel=function(){this.J=!0,on(this)};function Jr(h){h.S=Date.now()+h.I,Ic(h,h.I)}function Ic(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ut(w(h.ba,h),_)}function er(h){h.B&&(f.clearTimeout(h.B),h.B=null)}Rn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(wc(this.i,this.A),this.L!=2&&(Xs(),St(17)),on(this),this.s=2,ki(this)):Ic(this,this.S-h)};function ki(h){h.j.G==0||h.J||Lc(h.j,h)}function on(h){er(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Ge(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Zr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||wl(y.h,h))){if(!h.K&&wl(y.h,h)&&y.G==3){try{var S=y.Da.g.parse(_)}catch{S=null}if(Array.isArray(S)&&S.length==3){var j=S;if(j[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)uo(y),oo(y);else break e;kl(y),St(18)}}else y.za=j[1],0<y.za-y.T&&37500>j[2]&&y.F&&y.v==0&&!y.C&&(y.C=Ut(w(y.Za,y),6e3));if(1>=Za(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else _s(y,11)}else if((h.K||y.g==h)&&uo(y),!re(_))for(j=y.Da.g.parse(_),_=0;_<j.length;_++){let Qe=j[_];if(y.T=Qe[0],Qe=Qe[1],y.G==2)if(Qe[0]=="c"){y.K=Qe[1],y.ia=Qe[2];const Zt=Qe[3];Zt!=null&&(y.la=Zt,y.j.info("VER="+y.la));const Yt=Qe[4];Yt!=null&&(y.Aa=Yt,y.j.info("SVER="+y.Aa));const ys=Qe[5];ys!=null&&typeof ys=="number"&&0<ys&&(S=1.5*ys,y.L=S,y.j.info("backChannelRequestTimeoutMs_="+S)),S=y;const ln=h.g;if(ln){const Fi=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var K=S.h;K.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(eo(K,K.h),K.h=null))}if(S.D){const Vl=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Vl&&(S.ya=Vl,ct(S.I,S.D,Vl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),S=y;var ne=h;if(S.qa=jc(S,S.J?S.ia:null,S.W),ne.K){In(S.h,ne);var Ye=ne,Kt=S.L;Kt&&(Ye.I=Kt),Ye.B&&(er(Ye),Jr(Ye)),S.g=ne}else Pc(S);0<y.i.length&&lo(y)}else Qe[0]!="stop"&&Qe[0]!="close"||_s(y,7);else y.G==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?_s(y,7):Ol(y):Qe[0]!="noop"&&y.l&&y.l.ta(Qe),y.v=0)}}Xs(4)}catch{}}var Cc=class{constructor(h,_){this.g=h,this.map=_}};function hs(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ja(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Za(h){return h.h?1:h.g?h.g.size:0}function wl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function eo(h,_){h.g?h.g.add(_):h.h=_}function In(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}hs.prototype.cancel=function(){if(this.i=Al(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Al(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return G(h.i)}function If(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],y=h.length,S=0;S<y;S++)_.push(h[S]);return _}_=[],y=0;for(S in h)_[y++]=h[S];return _}function to(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const S in h)_[y++]=S;return _}}}function Rl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=to(h),S=If(h),j=S.length,K=0;K<j;K++)_.call(void 0,S[K],y&&y[K],h)}var ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cf(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var S=h[y].indexOf("="),j=null;if(0<=S){var K=h[y].substring(0,S);j=h[y].substring(S+1)}else K=h[y];_(K,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function jt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof jt){this.h=h.h,ta(this,h.j),this.o=h.o,this.g=h.g,tr(this,h.s),this.l=h.l;var _=h.i,y=new fs;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),ds(this,y),this.m=h.m}else h&&(_=String(h).match(ea))?(this.h=!1,ta(this,_[1]||"",!0),this.o=Zn(_[2]||""),this.g=Zn(_[3]||"",!0),tr(this,_[4]),this.l=Zn(_[5]||"",!0),ds(this,_[6]||"",!0),this.m=Zn(_[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}jt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ia(_,Il,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ia(_,Il,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(ia(y,y.charAt(0)=="/"?Nf:Cl,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",ia(y,no)),h.join("")};function Bn(h){return new jt(h)}function ta(h,_,y){h.j=y?Zn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function tr(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ds(h,_,y){_ instanceof fs?(h.i=_,xc(h.i,h.h)):(y||(_=ia(_,xf)),h.i=new fs(_,h.h))}function ct(h,_,y){h.i.set(_,y)}function na(h){return ct(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Zn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ia(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Nc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Nc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Il=/[#\/\?@]/g,Cl=/[#\?:]/g,Nf=/[#\?]/g,xf=/[#\?@]/g,no=/#/g;function fs(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ei(h){h.g||(h.g=new Map,h.h=0,h.i&&Cf(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}i=fs.prototype,i.add=function(h,_){ei(this),this.i=null,h=Pi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function ms(h,_){ei(h),_=Pi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ps(h,_){return ei(h),_=Pi(h,_),h.g.has(_)}i.forEach=function(h,_){ei(this),this.g.forEach(function(y,S){y.forEach(function(j){h.call(_,j,S,this)},this)},this)},i.na=function(){ei(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let S=0;S<_.length;S++){const j=h[S];for(let K=0;K<j.length;K++)y.push(_[S])}return y},i.V=function(h){ei(this);let _=[];if(typeof h=="string")ps(this,h)&&(_=_.concat(this.g.get(Pi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},i.set=function(h,_){return ei(this),this.i=null,h=Pi(this,h),ps(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Nl(h,_,y){ms(h,_),0<y.length&&(h.i=null,h.g.set(Pi(h,_),G(y)),h.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var S=_[y];const K=encodeURIComponent(String(S)),ne=this.V(S);for(S=0;S<ne.length;S++){var j=K;ne[S]!==""&&(j+="="+encodeURIComponent(String(ne[S]))),h.push(j)}}return this.i=h.join("&")};function Pi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function xc(h,_){_&&!h.j&&(ei(h),h.i=null,h.g.forEach(function(y,S){var j=S.toLowerCase();S!=j&&(ms(this,S),Nl(this,j,y))},h)),h.j=_}function sa(h,_){const y=new Jn;if(f.Image){const S=new Image;S.onload=k(ti,y,"TestLoadImage: loaded",!0,_,S),S.onerror=k(ti,y,"TestLoadImage: error",!1,_,S),S.onabort=k(ti,y,"TestLoadImage: abort",!1,_,S),S.ontimeout=k(ti,y,"TestLoadImage: timeout",!1,_,S),f.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=h}else _(!1)}function _i(h,_){const y=new Jn,S=new AbortController,j=setTimeout(()=>{S.abort(),ti(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:S.signal}).then(K=>{clearTimeout(j),K.ok?ti(y,"TestPingServer: ok",!0,_):ti(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(j),ti(y,"TestPingServer: error",!1,_)})}function ti(h,_,y,S,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),S(y)}catch{}}function ra(){this.g=new At}function Vi(h,_,y){const S=y||"";try{Rl(h,function(j,K){let ne=j;g(j)&&(ne=Ve(j)),_.push(S+K+"="+encodeURIComponent(ne))})}catch(j){throw _.push(S+"type="+encodeURIComponent("_badmap")),j}}function nr(h){this.l=h.Ub||null,this.j=h.eb||!1}V(nr,Ot),nr.prototype.g=function(){return new gs(this.l,this.j)},nr.prototype.i=function(h){return function(){return h}}({});function gs(h,_){bt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(gs,bt),i=gs.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ui(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function xl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Li(this):Ui(this),this.readyState==3&&xl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Li(this))},i.Qa=function(h){this.g&&(this.response=h,Li(this))},i.ga=function(){this.g&&Li(this)};function Li(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ui(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Ui(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Dl(h){let _="";return Ce(h,function(y,S){_+=S,_+=":",_+=y,_+=`\r
`}),_}function Jt(h,_,y){e:{for(S in y){var S=!1;break e}S=!0}S||(y=Dl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):ct(h,_,y))}function st(h){bt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(st,bt);var io=/^https?$/i,aa=["POST","PUT"];i=st.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,y,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oi.g(),this.v=this.o?xn(this.o):xn(Oi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(K){Dc(this,K);return}if(h=y||"",y=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var j in S)y.set(j,S[j]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const K of S.keys())y.set(K,S.get(K));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(y.keys()).find(K=>K.toLowerCase()=="content-type"),j=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(aa,_,void 0))||S||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ne]of y)this.g.setRequestHeader(K,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oa(this),this.u=!0,this.g.send(h),this.u=!1}catch(K){Dc(this,K)}};function Dc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,so(h),ji(h)}function so(h){h.A||(h.A=!0,it(h,"complete"),it(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,it(this,"complete"),it(this,"abort"),ji(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),st.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ro(this):this.bb())},i.bb=function(){ro(this)};function ro(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ni(h)!=4||h.Z()!=2)){if(h.u&&ni(h)==4)Xt(h.Ea,0,h);else if(it(h,"readystatechange"),ni(h)==4){h.h=!1;try{const ne=h.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var S;if(S=ne===0){var j=String(h.D).match(ea)[1]||null;!j&&f.self&&f.self.location&&(j=f.self.location.protocol.slice(0,-1)),S=!io.test(j?j.toLowerCase():"")}y=S}if(y)it(h,"complete"),it(h,"success");else{h.m=6;try{var K=2<ni(h)?h.g.statusText:""}catch{K=""}h.l=K+" ["+h.Z()+"]",so(h)}}finally{ji(h)}}}}function ji(h,_){if(h.g){oa(h);const y=h.g,S=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||it(h,"ready");try{y.onreadystatechange=S}catch{}}}function oa(h){h.I&&(f.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function ni(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<ni(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Be(_)}};function Oc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Df(h){const _={};h=(h.g&&2<=ni(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<h.length;S++){if(re(h[S]))continue;var y=P(h[S]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const K=_[j]||[];_[j]=K,K.push(y)}M(_,function(S){return S.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function la(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function ao(h){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=la("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=la("baseRetryDelayMs",5e3,h),this.cb=la("retryDelaySeedMs",1e4,h),this.Wa=la("forwardChannelMaxRetries",2,h),this.wa=la("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new hs(h&&h.concurrentRequestLimit),this.Da=new ra,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ao.prototype,i.la=8,i.G=1,i.connect=function(h,_,y,S){St(0),this.W=h,this.H=_||{},y&&S!==void 0&&(this.H.OSID=y,this.H.OAID=S),this.F=this.X,this.I=jc(this,null,this.W),lo(this)};function Ol(h){if(Mc(h),h.G==3){var _=h.U++,y=Bn(h.I);if(ct(y,"SID",h.K),ct(y,"RID",_),ct(y,"TYPE","terminate"),ua(h,y),_=new Rn(h,h.j,_),_.L=2,_.v=na(Bn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=_.v,y=!0),y||(_.g=Bc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Jr(_)}Uc(h)}function oo(h){h.g&&(ca(h),h.g.cancel(),h.g=null)}function Mc(h){oo(h),h.u&&(f.clearTimeout(h.u),h.u=null),uo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function lo(h){if(!Ja(h.h)&&!h.s){h.s=!0;var _=h.Ga;ee||x(),ie||(ee(),ie=!0),ye.add(_,h),h.B=0}}function Of(h,_){return Za(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ut(w(h.Ga,h,_),Pl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new Rn(this,this.j,h);let K=this.o;if(this.S&&(K?(K=A(K),D(K,this.S)):K=this.S),this.m!==null||this.O||(j.H=K,K=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var S=this.i[y];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(_+=S,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=kc(this,j,_),y=Bn(this.I),ct(y,"RID",h),ct(y,"CVER",22),this.D&&ct(y,"X-HTTP-Session-Id",this.D),ua(this,y),K&&(this.O?_="headers="+encodeURIComponent(String(Dl(K)))+"&"+_:this.m&&Jt(y,this.m,K)),eo(this.h,j),this.Ua&&ct(y,"TYPE","init"),this.P?(ct(y,"$req",_),ct(y,"SID","null"),j.T=!0,gi(j,y,null)):gi(j,y,_),this.G=2}}else this.G==3&&(h?Ml(this,h):this.i.length==0||Ja(this.h)||Ml(this))};function Ml(h,_){var y;_?y=_.l:y=h.U++;const S=Bn(h.I);ct(S,"SID",h.K),ct(S,"RID",y),ct(S,"AID",h.T),ua(h,S),h.m&&h.o&&Jt(S,h.m,h.o),y=new Rn(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=kc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),eo(h.h,y),gi(y,S,_)}function ua(h,_){h.H&&Ce(h.H,function(y,S){ct(_,S,y)}),h.l&&Rl({},function(y,S){ct(_,S,y)})}function kc(h,_,y){y=Math.min(h.i.length,y);var S=h.l?w(h.l.Na,h.l,h):null;e:{var j=h.i;let K=-1;for(;;){const ne=["count="+y];K==-1?0<y?(K=j[0].g,ne.push("ofs="+K)):K=0:ne.push("ofs="+K);let Ye=!0;for(let Kt=0;Kt<y;Kt++){let Qe=j[Kt].g;const Zt=j[Kt].map;if(Qe-=K,0>Qe)K=Math.max(0,j[Kt].g-100),Ye=!1;else try{Vi(Zt,ne,"req"+Qe+"_")}catch{S&&S(Zt)}}if(Ye){S=ne.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,S}function Pc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ee||x(),ie||(ee(),ie=!0),ye.add(_,h),h.v=0}}function kl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ut(w(h.Fa,h),Pl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,Vc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ut(w(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),oo(this),Vc(this))};function ca(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function Vc(h){h.g=new Rn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Bn(h.qa);ct(_,"RID","rpc"),ct(_,"SID",h.K),ct(_,"AID",h.T),ct(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&ct(_,"TO",h.ja),ct(_,"TYPE","xmlhttp"),ua(h,_),h.m&&h.o&&Jt(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=na(Bn(_)),y.m=null,y.P=!0,cs(y,h)}i.Za=function(){this.C!=null&&(this.C=null,oo(this),kl(this),St(19))};function uo(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function Lc(h,_){var y=null;if(h.g==_){uo(h),ca(h),h.g=null;var S=2}else if(wl(h.h,_))y=_.D,In(h.h,_),S=1;else return;if(h.G!=0){if(_.o)if(S==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var j=h.B;S=Ws(),it(S,new Gt(S,y)),lo(h)}else Pc(h);else if(j=_.s,j==3||j==0&&0<_.X||!(S==1&&Of(h,_)||S==2&&kl(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),j){case 1:_s(h,5);break;case 4:_s(h,10);break;case 3:_s(h,6);break;default:_s(h,2)}}}function Pl(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function _s(h,_){if(h.j.info("Error code "+_),_==2){var y=w(h.fb,h),S=h.Xa;const j=!S;S=new jt(S||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ta(S,"https"),na(S),j?sa(S.toString(),y):_i(S.toString(),y)}else St(2);h.G=0,h.l&&h.l.sa(_),Uc(h),Mc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Uc(h){if(h.G=0,h.ka=[],h.l){const _=Al(h.h);(_.length!=0||h.i.length!=0)&&(Y(h.ka,_),Y(h.ka,h.i),h.h.i.length=0,G(h.i),h.i.length=0),h.l.ra()}}function jc(h,_,y){var S=y instanceof jt?Bn(y):new jt(y);if(S.g!="")_&&(S.g=_+"."+S.g),tr(S,S.s);else{var j=f.location;S=j.protocol,_=_?_+"."+j.hostname:j.hostname,j=+j.port;var K=new jt(null);S&&ta(K,S),_&&(K.g=_),j&&tr(K,j),y&&(K.l=y),S=K}return y=h.D,_=h.ya,y&&_&&ct(S,y,_),ct(S,"VER",h.la),ua(h,S),S}function Bc(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new st(new nr({eb:y})):new st(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fc(){}i=Fc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function co(){}co.prototype.g=function(h,_){return new Cn(h,_)};function Cn(h,_){bt.call(this),this.g=new ao(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!re(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!re(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Bi(this)}V(Cn,bt),Cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Cn.prototype.close=function(){Ol(this.g)},Cn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=Ve(h),h=y);_.i.push(new Cc(_.Ya++,h)),_.G==3&&lo(_)},Cn.prototype.N=function(){this.g.l=null,delete this.j,Ol(this.g),delete this.g,Cn.aa.N.call(this)};function zc(h){ls.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}V(zc,ls);function qc(){El.call(this),this.status=1}V(qc,El);function Bi(h){this.g=h}V(Bi,Fc),Bi.prototype.ua=function(){it(this.g,"a")},Bi.prototype.ta=function(h){it(this.g,new zc(h))},Bi.prototype.sa=function(h){it(this.g,new qc)},Bi.prototype.ra=function(){it(this.g,"b")},co.prototype.createWebChannel=co.prototype.g,Cn.prototype.send=Cn.prototype.o,Cn.prototype.open=Cn.prototype.m,Cn.prototype.close=Cn.prototype.close,pw=function(){return new co},mw=function(){return Ws()},fw=Di,hg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,td=Zs,us.COMPLETE="complete",dw=us,$s.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",bt.prototype.listen=bt.prototype.K,Du=$s,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,hw=st}).apply(typeof Kh<"u"?Kh:typeof self<"u"?self:typeof window<"u"?window:{});const fT="@firebase/firestore",mT="4.8.0";/**
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
 */class vn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vn.UNAUTHENTICATED=new vn(null),vn.GOOGLE_CREDENTIALS=new vn("google-credentials-uid"),vn.FIRST_PARTY=new vn("first-party-uid"),vn.MOCK_USER=new vn("mock-user");/**
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
 */let ml="11.10.0";/**
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
 */const Pa=new $d("@firebase/firestore");function Fo(){return Pa.logLevel}function he(i,...e){if(Pa.logLevel<=qe.DEBUG){const t=e.map(o_);Pa.debug(`Firestore (${ml}): ${i}`,...t)}}function zs(i,...e){if(Pa.logLevel<=qe.ERROR){const t=e.map(o_);Pa.error(`Firestore (${ml}): ${i}`,...t)}}function Ur(i,...e){if(Pa.logLevel<=qe.WARN){const t=e.map(o_);Pa.warn(`Firestore (${ml}): ${i}`,...t)}}function o_(i){if(typeof i=="string")return i;try{/**
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
 */function Ie(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,gw(i,s,t)}function gw(i,e,t){let s=`FIRESTORE (${ml}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw zs(s),new Error(s)}function at(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||gw(e,a,s)}function Me(i,e){return i}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends rs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ls{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class _w{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(vn.UNAUTHENTICATED))}shutdown(){}}class Ox{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Mx{constructor(e){this.t=e,this.currentUser=vn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){at(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ls,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},f=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ls)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(at(typeof s.accessToken=="string",31837,{l:s}),new _w(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return at(e===null||typeof e=="string",2055,{h:e}),new vn(e)}}class kx{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=vn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Px{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new kx(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(vn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vx{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){at(this.o===void 0,3512);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(at(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Lx(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class l_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Lx(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ue(i,e){return i<e?-1:i>e?1:0}function dg(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ue(s,a);{const l=yw(),c=Ux(l.encode(gT(i,t)),l.encode(gT(e,t)));return c!==0?c:Ue(s,a)}}t+=s>65535?2:1}return Ue(i.length,e.length)}function gT(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function Ux(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ue(i[t],e[t]);return Ue(i.length,e.length)}function il(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
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
 */const _T="__name__";class Qi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ie(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Qi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ue(e.length,t.length)}static compareSegments(e,t){const s=Qi.isNumericId(e),a=Qi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Qi.extractNumericId(e).compare(Qi.extractNumericId(t)):dg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mr.fromString(e.substring(4,e.length-2))}}class _t extends Qi{construct(e,t,s){return new _t(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new _t(t)}static emptyPath(){return new _t([])}}const jx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mn extends Qi{construct(e,t,s){return new mn(e,t,s)}static isValidIdentifier(e){return jx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_T}static keyField(){return new mn([_T])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ce(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new ce(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ce(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(s+=f,a++):(l(),a++)}if(l(),c)throw new ce(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mn(t)}static emptyPath(){return new mn([])}}/**
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
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(_t.fromString(e))}static fromName(e){return new be(_t.fromString(e).popFirst(5))}static empty(){return new be(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_t.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _t.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new _t(e.slice()))}}/**
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
 */function vw(i,e,t){if(!t)throw new ce(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function Bx(i,e,t,s){if(e===!0&&s===!0)throw new ce(W.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function yT(i){if(!be.isDocumentKey(i))throw new ce(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function vT(i){if(be.isDocumentKey(i))throw new ce(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ew(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function nf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ie(12329,{type:typeof i})}function fi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ce(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nf(i);throw new ce(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function Ht(i,e){const t={typeString:i};return e&&(t.value=e),t}function hc(i,e){if(!Ew(i))throw new ce(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const c=i[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ce(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const ET=-62135596800,TT=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*TT);return new Et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ET)throw new ce(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/TT}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hc(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ET;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:Ht("string",Et._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
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
 */class Oe{static fromTimestamp(e){return new Oe(e)}static min(){return new Oe(new Et(0,0))}static max(){return new Oe(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const $u=-1;function Fx(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Oe.fromTimestamp(s===1e9?new Et(t+1,0):new Et(t,s));return new jr(a,be.empty(),e)}function zx(i){return new jr(i.readTime,i.key,$u)}class jr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new jr(Oe.min(),be.empty(),$u)}static max(){return new jr(Oe.max(),be.empty(),$u)}}function qx(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(i.documentKey,e.documentKey),t!==0?t:Ue(i.largestBatchId,e.largestBatchId))}/**
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
 */const Hx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pl(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==Hx)throw i;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,s)=>{t(e)})}static reject(e){return new Z((t,s)=>{s(e)})}static waitFor(e){return new Z((t,s)=>{let a=0,l=0,c=!1;e.forEach(f=>{++a,f.next(()=>{++l,c&&l===a&&t()},p=>s(p))}),c=!0,l===a&&t()})}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next(a=>a?Z.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new Z((s,a)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(v=>{c[g]=v,++f,f===l&&s(c)},v=>a(v))}})}static doWhile(e,t){return new Z((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function Kx(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class sf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}sf.ue=-1;/**
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
 */const u_=-1;function rf(i){return i==null}function Sd(i){return i===0&&1/i==-1/0}function Yx(i){return typeof i=="number"&&Number.isInteger(i)&&!Sd(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tw="";function Qx(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=bT(e)),e=$x(i.get(t),e);return bT(e)}function $x(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case Tw:t+="";break;default:t+=l}}return t}function bT(i){return i+Tw+""}/**
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
 */function ST(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Gr(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function bw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Ct{constructor(e,t){this.comparator=e,this.root=t||dn.EMPTY}insert(e,t){return new Ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dn.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yh(this.root,e,this.comparator,!0)}}class Yh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??dn.RED,this.left=a??dn.EMPTY,this.right=l??dn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new dn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return dn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return dn.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}dn.EMPTY=null,dn.RED=!0,dn.BLACK=!1;dn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new dn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Wt{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wT(this.data.getIterator())}getIteratorFrom(e){return new wT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Wt(this.comparator);return t.data=e,t}}class wT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $n{constructor(e){this.fields=e,e.sort(mn.comparator)}static empty(){return new $n([])}unionWith(e){let t=new Wt(mn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return il(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Sw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Sw("Invalid base64 string: "+l):l}}(e);return new pn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new pn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pn.EMPTY_BYTE_STRING=new pn("");const Wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(i){if(at(!!i,39018),typeof i=="string"){let e=0;const t=Wx.exec(i);if(at(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Vt(i.seconds),nanos:Vt(i.nanos)}}function Vt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Fr(i){return typeof i=="string"?pn.fromBase64String(i):pn.fromUint8Array(i)}/**
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
 */const ww="server_timestamp",Aw="__type__",Rw="__previous_value__",Iw="__local_write_time__";function c_(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Aw])===null||t===void 0?void 0:t.stringValue)===ww}function af(i){const e=i.mapValue.fields[Rw];return c_(e)?af(e):e}function Wu(i){const e=Br(i.mapValue.fields[Iw].timestampValue);return new Et(e.seconds,e.nanos)}/**
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
 */class Xx{constructor(e,t,s,a,l,c,f,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const wd="(default)";class Xu{constructor(e,t){this.projectId=e,this.database=t||wd}static empty(){return new Xu("","")}get isDefaultDatabase(){return this.database===wd}isEqual(e){return e instanceof Xu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cw="__type__",Jx="__max__",Qh={mapValue:{}},Nw="__vector__",Ad="value";function zr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?c_(i)?4:eD(i)?9007199254740991:Zx(i)?10:11:Ie(28295,{value:i})}function ss(i,e){if(i===e)return!0;const t=zr(i);if(t!==zr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Wu(i).isEqual(Wu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Br(a.timestampValue),f=Br(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Fr(a.bytesValue).isEqual(Fr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return Vt(a.geoPointValue.latitude)===Vt(l.geoPointValue.latitude)&&Vt(a.geoPointValue.longitude)===Vt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Vt(a.integerValue)===Vt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Vt(a.doubleValue),f=Vt(l.doubleValue);return c===f?Sd(c)===Sd(f):isNaN(c)&&isNaN(f)}return!1}(i,e);case 9:return il(i.arrayValue.values||[],e.arrayValue.values||[],ss);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(ST(c)!==ST(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!ss(c[p],f[p])))return!1;return!0}(i,e);default:return Ie(52216,{left:i})}}function Ju(i,e){return(i.values||[]).find(t=>ss(t,e))!==void 0}function sl(i,e){if(i===e)return 0;const t=zr(i),s=zr(e);if(t!==s)return Ue(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ue(i.booleanValue,e.booleanValue);case 2:return function(l,c){const f=Vt(l.integerValue||l.doubleValue),p=Vt(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(i,e);case 3:return AT(i.timestampValue,e.timestampValue);case 4:return AT(Wu(i),Wu(e));case 5:return dg(i.stringValue,e.stringValue);case 6:return function(l,c){const f=Fr(l),p=Fr(c);return f.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const f=l.split("/"),p=c.split("/");for(let g=0;g<f.length&&g<p.length;g++){const v=Ue(f[g],p[g]);if(v!==0)return v}return Ue(f.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const f=Ue(Vt(l.latitude),Vt(c.latitude));return f!==0?f:Ue(Vt(l.longitude),Vt(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return RT(i.arrayValue,e.arrayValue);case 10:return function(l,c){var f,p,g,v;const T=l.fields||{},w=c.fields||{},k=(f=T[Ad])===null||f===void 0?void 0:f.arrayValue,V=(p=w[Ad])===null||p===void 0?void 0:p.arrayValue,G=Ue(((g=k?.values)===null||g===void 0?void 0:g.length)||0,((v=V?.values)===null||v===void 0?void 0:v.length)||0);return G!==0?G:RT(k,V)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Qh.mapValue&&c===Qh.mapValue)return 0;if(l===Qh.mapValue)return 1;if(c===Qh.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const w=dg(p[T],v[T]);if(w!==0)return w;const k=sl(f[p[T]],g[v[T]]);if(k!==0)return k}return Ue(p.length,v.length)}(i.mapValue,e.mapValue);default:throw Ie(23264,{le:t})}}function AT(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ue(i,e);const t=Br(i),s=Br(e),a=Ue(t.seconds,s.seconds);return a!==0?a:Ue(t.nanos,s.nanos)}function RT(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=sl(t[a],s[a]);if(l)return l}return Ue(t.length,s.length)}function rl(i){return fg(i)}function fg(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Br(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Fr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return be.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=fg(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${fg(t.fields[c])}`;return a+"}"}(i.mapValue):Ie(61005,{value:i})}function nd(i){switch(zr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=af(i);return e?16+nd(e):16;case 5:return 2*i.stringValue.length;case 6:return Fr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+nd(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Gr(s.fields,(l,c)=>{a+=l.length+nd(c)}),a}(i.mapValue);default:throw Ie(13486,{value:i})}}function IT(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function mg(i){return!!i&&"integerValue"in i}function h_(i){return!!i&&"arrayValue"in i}function CT(i){return!!i&&"nullValue"in i}function NT(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function id(i){return!!i&&"mapValue"in i}function Zx(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cw])===null||t===void 0?void 0:t.stringValue)===Nw}function Bu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Gr(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Bu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function eD(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Jx}/**
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
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!id(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bu(t)}setAll(e){let t=mn.emptyPath(),s={},a=[];e.forEach((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=f.popLast()}c?s[f.lastSegment()]=Bu(c):a.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());id(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ss(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];id(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Gr(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new Ln(Bu(this.value))}}function xw(i){const e=[];return Gr(i.fields,(t,s)=>{const a=new mn([t]);if(id(s)){const l=xw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new $n(e)}/**
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
 */class bn{constructor(e,t,s,a,l,c,f){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new bn(e,0,Oe.min(),Oe.min(),Oe.min(),Ln.empty(),0)}static newFoundDocument(e,t,s,a){return new bn(e,1,t,Oe.min(),s,a,0)}static newNoDocument(e,t){return new bn(e,2,t,Oe.min(),Oe.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new bn(e,3,t,Oe.min(),Oe.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rd{constructor(e,t){this.position=e,this.inclusive=t}}function xT(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=be.comparator(be.fromName(c.referenceValue),t.key):s=sl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function DT(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ss(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Id{constructor(e,t="asc"){this.field=e,this.dir=t}}function tD(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Dw{}class qt extends Dw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new iD(e,t,s):t==="array-contains"?new aD(e,s):t==="in"?new oD(e,s):t==="not-in"?new lD(e,s):t==="array-contains-any"?new uD(e,s):new qt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new sD(e,s):new rD(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(sl(t,this.value)):t!==null&&zr(this.value)===zr(t)&&this.matchesComparison(sl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ri extends Dw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ri(e,t)}matches(e){return Ow(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ow(i){return i.op==="and"}function Mw(i){return nD(i)&&Ow(i)}function nD(i){for(const e of i.filters)if(e instanceof Ri)return!1;return!0}function pg(i){if(i instanceof qt)return i.field.canonicalString()+i.op.toString()+rl(i.value);if(Mw(i))return i.filters.map(e=>pg(e)).join(",");{const e=i.filters.map(t=>pg(t)).join(",");return`${i.op}(${e})`}}function kw(i,e){return i instanceof qt?function(s,a){return a instanceof qt&&s.op===a.op&&s.field.isEqual(a.field)&&ss(s.value,a.value)}(i,e):i instanceof Ri?function(s,a){return a instanceof Ri&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,f)=>l&&kw(c,a.filters[f]),!0):!1}(i,e):void Ie(19439)}function Pw(i){return i instanceof qt?function(t){return`${t.field.canonicalString()} ${t.op} ${rl(t.value)}`}(i):i instanceof Ri?function(t){return t.op.toString()+" {"+t.getFilters().map(Pw).join(" ,")+"}"}(i):"Filter"}class iD extends qt{constructor(e,t,s){super(e,t,s),this.key=be.fromName(s.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class sD extends qt{constructor(e,t){super(e,"in",t),this.keys=Vw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rD extends qt{constructor(e,t){super(e,"not-in",t),this.keys=Vw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>be.fromName(s.referenceValue))}class aD extends qt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return h_(t)&&Ju(t.arrayValue,this.value)}}class oD extends qt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ju(this.value.arrayValue,t)}}class lD extends qt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ju(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ju(this.value.arrayValue,t)}}class uD extends qt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!h_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ju(this.value.arrayValue,s))}}/**
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
 */class cD{constructor(e,t=null,s=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Pe=null}}function OT(i,e=null,t=[],s=[],a=null,l=null,c=null){return new cD(i,e,t,s,a,l,c)}function d_(i){const e=Me(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>pg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),rf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>rl(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>rl(s)).join(",")),e.Pe=t}return e.Pe}function f_(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!tD(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!kw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!DT(i.startAt,e.startAt)&&DT(i.endAt,e.endAt)}function gg(i){return be.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class dc{constructor(e,t=null,s=[],a=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function hD(i,e,t,s,a,l,c,f){return new dc(i,e,t,s,a,l,c,f)}function of(i){return new dc(i)}function MT(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Lw(i){return i.collectionGroup!==null}function Fu(i){const e=Me(i);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Wt(mn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(f=f.add(g.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Id(l,s))}),t.has(mn.keyField().canonicalString())||e.Te.push(new Id(mn.keyField(),s))}return e.Te}function Xi(i){const e=Me(i);return e.Ie||(e.Ie=dD(e,Fu(i))),e.Ie}function dD(i,e){if(i.limitType==="F")return OT(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Id(a.field,l)});const t=i.endAt?new Rd(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Rd(i.startAt.position,i.startAt.inclusive):null;return OT(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function _g(i,e){const t=i.filters.concat([e]);return new dc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function yg(i,e,t){return new dc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function lf(i,e){return f_(Xi(i),Xi(e))&&i.limitType===e.limitType}function Uw(i){return`${d_(Xi(i))}|lt:${i.limitType}`}function zo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Pw(a)).join(", ")}]`),rf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>rl(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>rl(a)).join(",")),`Target(${s})`}(Xi(i))}; limitType=${i.limitType})`}function uf(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):be.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Fu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,f,p){const g=xT(c,f,p);return c.inclusive?g<=0:g<0}(s.startAt,Fu(s),a)||s.endAt&&!function(c,f,p){const g=xT(c,f,p);return c.inclusive?g>=0:g>0}(s.endAt,Fu(s),a))}(i,e)}function fD(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function jw(i){return(e,t)=>{let s=!1;for(const a of Fu(i)){const l=mD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function mD(i,e,t){const s=i.field.isKeyField()?be.comparator(e.key,t.key):function(l,c,f){const p=c.data.field(l),g=f.data.field(l);return p!==null&&g!==null?sl(p,g):Ie(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ie(19790,{direction:i.dir})}}/**
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
 */class qa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return bw(this.inner)}size(){return this.innerSize}}/**
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
 */const pD=new Ct(be.comparator);function qs(){return pD}const Bw=new Ct(be.comparator);function Ou(...i){let e=Bw;for(const t of i)e=e.insert(t.key,t);return e}function Fw(i){let e=Bw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Na(){return zu()}function zw(){return zu()}function zu(){return new qa(i=>i.toString(),(i,e)=>i.isEqual(e))}const gD=new Ct(be.comparator),_D=new Wt(be.comparator);function He(...i){let e=_D;for(const t of i)e=e.add(t);return e}const yD=new Wt(Ue);function vD(){return yD}/**
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
 */function m_(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sd(e)?"-0":e}}function qw(i){return{integerValue:""+i}}function ED(i,e){return Yx(e)?qw(e):m_(i,e)}/**
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
 */class cf{constructor(){this._=void 0}}function TD(i,e,t){return i instanceof Cd?function(a,l){const c={fields:{[Aw]:{stringValue:ww},[Iw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&c_(l)&&(l=af(l)),l&&(c.fields[Rw]=l),{mapValue:c}}(t,e):i instanceof Zu?Gw(i,e):i instanceof ec?Kw(i,e):function(a,l){const c=Hw(a,l),f=kT(c)+kT(a.Ee);return mg(c)&&mg(a.Ee)?qw(f):m_(a.serializer,f)}(i,e)}function bD(i,e,t){return i instanceof Zu?Gw(i,e):i instanceof ec?Kw(i,e):t}function Hw(i,e){return i instanceof Nd?function(s){return mg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Cd extends cf{}class Zu extends cf{constructor(e){super(),this.elements=e}}function Gw(i,e){const t=Yw(e);for(const s of i.elements)t.some(a=>ss(a,s))||t.push(s);return{arrayValue:{values:t}}}class ec extends cf{constructor(e){super(),this.elements=e}}function Kw(i,e){let t=Yw(e);for(const s of i.elements)t=t.filter(a=>!ss(a,s));return{arrayValue:{values:t}}}class Nd extends cf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function kT(i){return Vt(i.integerValue||i.doubleValue)}function Yw(i){return h_(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function SD(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Zu&&a instanceof Zu||s instanceof ec&&a instanceof ec?il(s.elements,a.elements,ss):s instanceof Nd&&a instanceof Nd?ss(s.Ee,a.Ee):s instanceof Cd&&a instanceof Cd}(i.transform,e.transform)}class wD{constructor(e,t){this.version=e,this.transformResults=t}}class Ji{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ji}static exists(e){return new Ji(void 0,e)}static updateTime(e){return new Ji(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sd(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class hf{}function Qw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Ww(i.key,Ji.none()):new fc(i.key,i.data,Ji.none());{const t=i.data,s=Ln.empty();let a=new Wt(mn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Kr(i.key,s,new $n(a.toArray()),Ji.none())}}function AD(i,e,t){i instanceof fc?function(a,l,c){const f=a.value.clone(),p=VT(a.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(i,e,t):i instanceof Kr?function(a,l,c){if(!sd(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=VT(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll($w(a)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function qu(i,e,t,s){return i instanceof fc?function(l,c,f,p){if(!sd(l.precondition,c))return f;const g=l.value.clone(),v=LT(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof Kr?function(l,c,f,p){if(!sd(l.precondition,c))return f;const g=LT(l.fieldTransforms,p,c),v=c.data;return v.setAll($w(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,f){return sd(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f}(i,e,t)}function RD(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=Hw(s.transform,a||null);l!=null&&(t===null&&(t=Ln.empty()),t.set(s.field,l))}return t||null}function PT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&il(s,a,(l,c)=>SD(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class fc extends hf{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Kr extends hf{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function $w(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function VT(i,e,t){const s=new Map;at(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,f=e.data.field(l.field);s.set(l.field,bD(c,f,t[a]))}return s}function LT(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,TD(l,c,e))}return s}class Ww extends hf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ID extends hf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&AD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=qu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=qu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=zw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const p=Qw(c,f);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Oe.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),He())}isEqual(e){return this.batchId===e.batchId&&il(this.mutations,e.mutations,(t,s)=>PT(t,s))&&il(this.baseMutations,e.baseMutations,(t,s)=>PT(t,s))}}class p_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){at(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=function(){return gD}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new p_(e,t,s,a)}}/**
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
 */class ND{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var zt,We;function DD(i){switch(i){case W.OK:return Ie(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ie(15467,{code:i})}}function Xw(i){if(i===void 0)return zs("GRPC error has no .code"),W.UNKNOWN;switch(i){case zt.OK:return W.OK;case zt.CANCELLED:return W.CANCELLED;case zt.UNKNOWN:return W.UNKNOWN;case zt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case zt.INTERNAL:return W.INTERNAL;case zt.UNAVAILABLE:return W.UNAVAILABLE;case zt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case zt.NOT_FOUND:return W.NOT_FOUND;case zt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case zt.ABORTED:return W.ABORTED;case zt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case zt.DATA_LOSS:return W.DATA_LOSS;default:return Ie(39323,{code:i})}}(We=zt||(zt={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const OD=new Mr([4294967295,4294967295],0);function UT(i){const e=yw().encode(i),t=new cw;return t.update(e),new Uint8Array(t.digest())}function jT(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Mr([t,s],0),new Mr([a,l],0)]}class g_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Mu(`Invalid padding: ${t}`);if(s<0)throw new Mu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Mu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Mr.fromNumber(this.fe)}pe(e,t,s){let a=e.add(t.multiply(Mr.fromNumber(s)));return a.compare(OD)===1&&(a=new Mr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=UT(e),[s,a]=jT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);if(!this.ye(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new g_(l,a,t);return s.forEach(f=>c.insert(f)),c}insert(e){if(this.fe===0)return;const t=UT(e),[s,a]=jT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);this.we(c)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Mu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class df{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,mc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new df(Oe.min(),a,new Ct(Ue),qs(),He())}}class mc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new mc(s,t,He(),He(),He())}}/**
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
 */class rd{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=a}}class Jw{constructor(e,t){this.targetId=e,this.De=t}}class Zw{constructor(e,t,s=pn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class BT{constructor(){this.ve=0,this.Ce=FT(),this.Fe=pn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=He(),t=He(),s=He();return this.Ce.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ie(38017,{changeType:l})}}),new mc(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=FT()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,at(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class MD{constructor(e){this.We=e,this.Ge=new Map,this.ze=qs(),this.je=$h(),this.Je=$h(),this.He=new Ct(Ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ie(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,a)=>{this.nt(a)&&t(a)})}it(e){const t=e.targetId,s=e.De.count,a=this.st(t);if(a){const l=a.target;if(gg(l))if(s===0){const c=new be(l.path);this.Xe(t,c,bn.newNoDocument(c,Oe.min()))}else at(s===1,20013,{expectedCount:s});else{const c=this.ot(t);if(c!==s){const f=this._t(e),p=f?this.ut(f,e,c):1;if(p!==0){this.rt(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Fr(s).toUint8Array()}catch(p){if(p instanceof Sw)return Ur("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new g_(c,a,l)}catch(p){return Ur(p instanceof Mu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.We.lt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),a++)}),a}Pt(e){const t=new Map;this.Ge.forEach((l,c)=>{const f=this.st(c);if(f){if(l.current&&gg(f.target)){const p=new be(f.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,bn.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}});let s=He();this.Je.forEach((l,c)=>{let f=!0;c.forEachWhile(p=>{const g=this.st(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ze.forEach((l,c)=>c.setReadTime(e));const a=new df(e,t,this.He,this.ze,s);return this.ze=qs(),this.je=$h(),this.Je=$h(),this.He=new Ct(Ue),a}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,t)?a.qe(t,1):a.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new BT,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Wt(Ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Wt(Ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new BT),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function $h(){return new Ct(be.comparator)}function FT(){return new Ct(be.comparator)}const kD={asc:"ASCENDING",desc:"DESCENDING"},PD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VD={and:"AND",or:"OR"};class LD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vg(i,e){return i.useProto3Json||rf(e)?e:{value:e}}function xd(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eA(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function UD(i,e){return xd(i,e.toTimestamp())}function Zi(i){return at(!!i,49232),Oe.fromTimestamp(function(t){const s=Br(t);return new Et(s.seconds,s.nanos)}(i))}function __(i,e){return Eg(i,e).canonicalString()}function Eg(i,e){const t=function(a){return new _t(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function tA(i){const e=_t.fromString(i);return at(aA(e),10190,{key:e.toString()}),e}function Tg(i,e){return __(i.databaseId,e.path)}function Fp(i,e){const t=tA(e);if(t.get(1)!==i.databaseId.projectId)throw new ce(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ce(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new be(iA(t))}function nA(i,e){return __(i.databaseId,e)}function jD(i){const e=tA(i);return e.length===4?_t.emptyPath():iA(e)}function bg(i){return new _t(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function iA(i){return at(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function zT(i,e,t){return{name:Tg(i,e),fields:t.value.mapValue.fields}}function BD(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ie(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(at(v===void 0||typeof v=="string",58123),pn.fromBase64String(v||"")):(at(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),pn.fromUint8Array(v||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&function(g){const v=g.code===void 0?W.UNKNOWN:Xw(g.code);return new ce(v,g.message||"")}(c);t=new Zw(s,a,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Fp(i,s.document.name),l=Zi(s.document.updateTime),c=s.document.createTime?Zi(s.document.createTime):Oe.min(),f=new Ln({mapValue:{fields:s.document.fields}}),p=bn.newFoundDocument(a,l,c,f),g=s.targetIds||[],v=s.removedTargetIds||[];t=new rd(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Fp(i,s.document),l=s.readTime?Zi(s.readTime):Oe.min(),c=bn.newNoDocument(a,l),f=s.removedTargetIds||[];t=new rd([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Fp(i,s.document),l=s.removedTargetIds||[];t=new rd([],l,a,null)}else{if(!("filter"in e))return Ie(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new xD(a,l),f=s.targetId;t=new Jw(f,c)}}return t}function FD(i,e){let t;if(e instanceof fc)t={update:zT(i,e.key,e.value)};else if(e instanceof Ww)t={delete:Tg(i,e.key)};else if(e instanceof Kr)t={update:zT(i,e.key,e.data),updateMask:WD(e.fieldMask)};else{if(!(e instanceof ID))return Ie(16599,{Rt:e.type});t={verify:Tg(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const f=c.transform;if(f instanceof Cd)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Zu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ec)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Nd)return{fieldPath:c.field.canonicalString(),increment:f.Ee};throw Ie(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:UD(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie(27497)}(i,e.precondition)),t}function zD(i,e){return i&&i.length>0?(at(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?Zi(a.updateTime):Zi(l);return c.isEqual(Oe.min())&&(c=Zi(l)),new wD(c,a.transformResults||[])}(t,e))):[]}function qD(i,e){return{documents:[nA(i,e.path)]}}function HD(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=nA(i,a);const l=function(g){if(g.length!==0)return rA(Ri.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(w){return{field:qo(w.field),direction:YD(w.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=vg(i,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{Vt:t,parent:a}}function GD(i){let e=jD(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){at(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(T){const w=sA(T);return w instanceof Ri&&Mw(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(w=>function(V){return new Id(Ho(V.field),function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(w))}(t.orderBy));let f=null;t.limit&&(f=function(T){let w;return w=typeof T=="object"?T.value:T,rf(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(T){const w=!!T.before,k=T.values||[];return new Rd(k,w)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const w=!T.before,k=T.values||[];return new Rd(k,w)}(t.endAt)),hD(e,a,c,l,f,"F",p,g)}function KD(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sA(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ho(t.unaryFilter.field);return qt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Ho(t.unaryFilter.field);return qt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ho(t.unaryFilter.field);return qt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ho(t.unaryFilter.field);return qt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}}(i):i.fieldFilter!==void 0?function(t){return qt.create(Ho(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ri.create(t.compositeFilter.filters.map(s=>sA(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}}(t.compositeFilter.op))}(i):Ie(30097,{filter:i})}function YD(i){return kD[i]}function QD(i){return PD[i]}function $D(i){return VD[i]}function qo(i){return{fieldPath:i.canonicalString()}}function Ho(i){return mn.fromServerFormat(i.fieldPath)}function rA(i){return i instanceof qt?function(t){if(t.op==="=="){if(NT(t.value))return{unaryFilter:{field:qo(t.field),op:"IS_NAN"}};if(CT(t.value))return{unaryFilter:{field:qo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(NT(t.value))return{unaryFilter:{field:qo(t.field),op:"IS_NOT_NAN"}};if(CT(t.value))return{unaryFilter:{field:qo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qo(t.field),op:QD(t.op),value:t.value}}}(i):i instanceof Ri?function(t){const s=t.getFilters().map(a=>rA(a));return s.length===1?s[0]:{compositeFilter:{op:$D(t.op),filters:s}}}(i):Ie(54877,{filter:i})}function WD(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function aA(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Nr{constructor(e,t,s,a,l=Oe.min(),c=Oe.min(),f=pn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class XD{constructor(e){this.gt=e}}function JD(i){const e=GD({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?yg(e,e.limit,"L"):e}/**
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
 */class ZD{constructor(){this.Dn=new eO}addToCollectionParentIndex(e,t){return this.Dn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(jr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class eO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Wt(_t.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Wt(_t.comparator)).toArray()}}/**
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
 */const qT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oA=41943040;class Pn{static withCacheSize(e){return new Pn(e,Pn.DEFAULT_COLLECTION_PERCENTILE,Pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Pn.DEFAULT_COLLECTION_PERCENTILE=10,Pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pn.DEFAULT=new Pn(oA,Pn.DEFAULT_COLLECTION_PERCENTILE,Pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pn.DISABLED=new Pn(-1,0,0);/**
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
 */class al{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new al(0)}static ur(){return new al(-1)}}/**
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
 */const HT="LruGarbageCollector",tO=1048576;function GT([i,e],[t,s]){const a=Ue(i,t);return a===0?Ue(e,s):a}class nO{constructor(e){this.Tr=e,this.buffer=new Wt(GT),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();GT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){he(HT,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gl(t)?he(HT,"Ignoring IndexedDB error during garbage collection: ",t):await pl(t)}await this.Rr(3e5)})}}class sO{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(sf.ue);const s=new nO(t);return this.Vr.forEachTarget(e,a=>s.Er(a.sequenceNumber)).next(()=>this.Vr.gr(e,a=>s.Er(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(qT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qT):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,l,c,f,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,f=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Fo()<=qe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function rO(i,e){return new sO(i,e)}/**
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
 */class aO{constructor(){this.changes=new qa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&qu(s.mutation,a,$n.empty(),Et.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,He()).next(()=>s))}getLocalViewOfDocuments(e,t,s=He()){const a=Na();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Ou();return l.forEach((f,p)=>{c=c.insert(f,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=Na();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,He()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,f)=>{t.set(c,f)})})}computeViews(e,t,s,a){let l=qs();const c=zu(),f=function(){return zu()}();return t.forEach((p,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Kr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),qu(v.mutation,g,v.mutation.getFieldMask(),Et.now())):c.set(g.key,$n.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),t.forEach((g,v)=>{var T;return f.set(g,new oO(v,(T=c.get(g))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const s=zu();let a=new Ct((c,f)=>c-f),l=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const f of c)f.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let v=s.get(p)||$n.empty();v=f.applyToLocalView(g,v),s.set(p,v);const T=(a.get(f.batchId)||He()).add(p);a=a.insert(f.batchId,T)})}).next(()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,v=p.value,T=zw();v.forEach(w=>{if(!l.has(w)){const k=Qw(t.get(w),s.get(w));k!==null&&T.set(w,k),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Z.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return be.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(Na());let f=$u,p=l;return c.next(g=>Z.forEach(g,(v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next(w=>{p=p.insert(v,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,He())).next(v=>({batchId:f,changes:Fw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next(s=>{let a=Ou();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Ou();return this.indexManager.getCollectionParents(e,l).next(f=>Z.forEach(f,p=>{const g=function(T,w){return new dc(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(v=>{v.forEach((T,w)=>{c=c.insert(T,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,bn.newInvalidDocument(v)))});let f=Ou();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&qu(v.mutation,g,$n.empty(),Et.now()),uf(t,g)&&(f=f.insert(p,g))}),f})}}/**
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
 */class uO{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Zi(a.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(a){return{name:a.name,query:JD(a.bundledQuery),readTime:Zi(a.readTime)}}(t)),Z.resolve()}}/**
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
 */class cO{constructor(){this.overlays=new Ct(be.comparator),this.kr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Na();return Z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.wt(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=Na(),l=t.length+1,c=new be(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Ct((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=Na(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const f=Na(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>f.set(g,v)),!(f.size()>=a)););return Z.resolve(f)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new ND(t,s));let l=this.kr.get(t);l===void 0&&(l=He(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class hO{constructor(){this.sessionToken=pn.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
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
 */class y_{constructor(){this.qr=new Wt(rn.Qr),this.$r=new Wt(rn.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new rn(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new rn(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new be(new _t([])),s=new rn(t,e),a=new rn(t,e+1),l=[];return this.$r.forEachInRange([s,a],c=>{this.Wr(c),l.push(c.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new be(new _t([])),s=new rn(t,e),a=new rn(t,e+1);let l=He();return this.$r.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new rn(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class rn{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return be.comparator(e.key,t.key)||Ue(e.Hr,t.Hr)}static Ur(e,t){return Ue(e.Hr,t.Hr)||be.comparator(e.key,t.key)}}/**
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
 */class dO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Wt(rn.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new CD(l,t,s,a);this.mutationQueue.push(c);for(const f of a)this.Yr=this.Yr.add(new rn(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?u_:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new rn(t,0),a=new rn(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,a],c=>{const f=this.Zr(c.Hr);l.push(f)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Wt(Ue);return t.forEach(a=>{const l=new rn(a,0),c=new rn(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],f=>{s=s.add(f.Hr)})}),Z.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;be.isDocumentKey(l)||(l=l.child(""));const c=new rn(new be(l),0);let f=new Wt(Ue);return this.Yr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.Hr)),!0)},c),Z.resolve(this.ei(f))}ei(e){const t=[];return e.forEach(s=>{const a=this.Zr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){at(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return Z.forEach(t.mutations,a=>{const l=new rn(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new rn(t,0),a=this.Yr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fO{constructor(e){this.ni=e,this.docs=function(){return new Ct(be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():bn.newInvalidDocument(t))}getEntries(e,t){let s=qs();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():bn.newInvalidDocument(a))}),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=qs();const c=t.path,f=new be(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||qx(zx(v),s)<=0||(a.has(v.key)||uf(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ie(9500)}ri(e,t){return Z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new mO(this)}getSize(e){return Z.resolve(this.size)}}class mO extends aO{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)}),Z.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class pO{constructor(e){this.persistence=e,this.ii=new qa(t=>d_(t),f_),this.lastRemoteSnapshotVersion=Oe.min(),this.highestTargetId=0,this.si=0,this.oi=new y_,this.targetCount=0,this._i=al.ar()}forEachTarget(e,t){return this.ii.forEach((s,a)=>t(a)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),Z.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new al(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.hr(t),Z.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ii.forEach((c,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)}),Z.waitFor(l).next(()=>a)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this.oi.containsKey(t))}}/**
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
 */class lA{constructor(e,t){this.ai={},this.overlays={},this.ui=new sf(0),this.ci=!1,this.ci=!0,this.li=new hO,this.referenceDelegate=e(this),this.hi=new pO(this),this.indexManager=new ZD,this.remoteDocumentCache=function(a){return new fO(a)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new XD(t),this.Ti=new uO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new dO(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new gO(this.ui.next());return this.referenceDelegate.Ii(),s(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ei(e,t){return Z.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class gO extends Gx{constructor(e){super(),this.currentSequenceNumber=e}}class v_{constructor(e){this.persistence=e,this.Ai=new y_,this.Ri=null}static Vi(e){return new v_(e)}get mi(){if(this.Ri)return this.Ri;throw Ie(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(a=>this.mi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.mi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,s=>{const a=be.fromPath(s);return this.fi(e,a).next(l=>{l||t.removeEntry(a,Oe.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return Z.or([()=>Z.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Dd{constructor(e,t){this.persistence=e,this.gi=new qa(s=>Qx(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=rO(this,t)}static Vi(e,t){return new Dd(e,t)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return Z.forEach(this.gi,(s,a)=>this.Sr(e,s,a).next(l=>l?Z.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ri(e,c=>this.Sr(e,c,t).next(f=>{f||(s++,l.removeEntry(c,Oe.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nd(e.data.value)),t}Sr(e,t,s){return Z.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _O{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yO{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return EI()?8:Kx(wn())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ps(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ys(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new _O;return this.ws(e,t,c).next(f=>{if(l.result=f,this.Rs)return this.Ss(e,t,c,f.size)})}).next(()=>l.result)}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(Fo()<=qe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",zo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(Fo()<=qe.DEBUG&&he("QueryEngine","Query:",zo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(Fo()<=qe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",zo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xi(t))):Z.resolve())}ps(e,t){if(MT(t))return Z.resolve(null);let s=Xi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=yg(t,null,"F"),s=Xi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=He(...l);return this.gs.getDocuments(e,c).next(f=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.bs(t,f);return this.Ds(t,g,c,p.readTime)?this.ps(e,yg(t,null,"F")):this.vs(e,g,t,p)}))})))}ys(e,t,s,a){return MT(t)||a.isEqual(Oe.min())?Z.resolve(null):this.gs.getDocuments(e,s).next(l=>{const c=this.bs(t,l);return this.Ds(t,c,s,a)?Z.resolve(null):(Fo()<=qe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),zo(t)),this.vs(e,c,t,Fx(a,$u)).next(f=>f))})}bs(e,t){let s=new Wt(jw(e));return t.forEach((a,l)=>{uf(e,l)&&(s=s.add(l))}),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ws(e,t,s){return Fo()<=qe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",zo(t)),this.gs.getDocumentsMatchingQuery(e,t,jr.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const T_="LocalStore",vO=3e8;class EO{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new Ct(Ue),this.Ms=new qa(l=>d_(l),f_),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lO(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function TO(i,e,t,s){return new EO(i,e,t,s)}async function uA(i,e){const t=Me(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],f=[];let p=He();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){f.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next(g=>({Bs:g,removedBatchIds:c,addedBatchIds:f}))})})}function bO(i,e){const t=Me(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return function(f,p,g,v){const T=g.batch,w=T.keys();let k=Z.resolve();return w.forEach(V=>{k=k.next(()=>v.getEntry(p,V)).next(G=>{const Y=g.docVersions.get(V);at(Y!==null,48541),G.version.compareTo(Y)<0&&(T.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),v.addEntry(G)))})}),k.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let p=He();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function cA(i){const e=Me(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function SO(i,e){const t=Me(i),s=e.snapshotVersion;let a=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});a=t.Fs;const f=[];e.targetChanges.forEach((v,T)=>{const w=a.get(T);if(!w)return;f.push(t.hi.removeMatchingKeys(l,v.removedDocuments,T).next(()=>t.hi.addMatchingKeys(l,v.addedDocuments,T)));let k=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?k=k.withResumeToken(pn.EMPTY_BYTE_STRING,Oe.min()).withLastLimboFreeSnapshotVersion(Oe.min()):v.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(v.resumeToken,s)),a=a.insert(T,k),function(G,Y,fe){return G.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=vO?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0}(w,k,v)&&f.push(t.hi.updateTargetData(l,k))});let p=qs(),g=He();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),f.push(wO(l,c,e.documentUpdates).next(v=>{p=v.Ls,g=v.ks})),!s.isEqual(Oe.min())){const v=t.hi.getLastRemoteSnapshotVersion(l).next(T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(v)}return Z.waitFor(f).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.Fs=a,l))}function wO(i,e,t){let s=He(),a=He();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=qs();return t.forEach((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(Oe.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):he(T_,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)}),{Ls:c,ks:a}})}function AO(i,e){const t=Me(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=u_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function RO(i,e){const t=Me(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.hi.getTargetData(s,e).next(l=>l?(a=l,Z.resolve(a)):t.hi.allocateTargetId(s).next(c=>(a=new Nr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Sg(i,e,t){const s=Me(i),a=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!gl(c))throw c;he(T_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function KT(i,e,t){const s=Me(i);let a=Oe.min(),l=He();return s.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const T=Me(p),w=T.Ms.get(v);return w!==void 0?Z.resolve(T.Fs.get(w)):T.hi.getTargetData(g,v)}(s,c,Xi(e)).next(f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(c,f.targetId).next(p=>{l=p})}).next(()=>s.Cs.getDocumentsMatchingQuery(c,e,t?a:Oe.min(),t?l:He())).next(f=>(IO(s,fD(e),f),{documents:f,qs:l})))}function IO(i,e,t){let s=i.xs.get(e)||Oe.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.xs.set(e,s)}class YT{constructor(){this.activeTargetIds=vD()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CO{constructor(){this.Fo=new YT,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new YT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NO{xo(e){}shutdown(){}}/**
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
 */const QT="ConnectivityMonitor";class $T{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){he(QT,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){he(QT,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const zp="RestConnection",xO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DO{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===wd?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const c=wg(),f=this.Go(e,t.toUriEncodedString());he(zp,`Sending RPC '${e}' ${c}:`,f,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,a,l);const{host:g}=new URL(f),v=Gs(g);return this.jo(e,f,p,s,v).then(T=>(he(zp,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Ur(zp,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",s),T})}Jo(e,t,s,a,l,c){return this.Wo(e,t,s,a,l)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ml}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}Go(e,t){const s=xO[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class OO{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const yn="WebChannelConnection";class MO extends DO{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,l){const c=wg();return new Promise((f,p)=>{const g=new hw;g.setWithCredentials(!0),g.listenOnce(dw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case td.NO_ERROR:const T=g.getResponseJson();he(yn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case td.TIMEOUT:he(yn,`RPC '${e}' ${c} timed out`),p(new ce(W.DEADLINE_EXCEEDED,"Request time out"));break;case td.HTTP_ERROR:const w=g.getStatus();if(he(yn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const V=k?.error;if(V&&V.status&&V.message){const G=function(fe){const re=fe.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(re)>=0?re:W.UNKNOWN}(V.status);p(new ce(G,V.message))}else p(new ce(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ce(W.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{he(yn,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);he(yn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)})}P_(e,t,s){const a=wg(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=pw(),f=mw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");he(yn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.T_(T);let w=!1,k=!1;const V=new OO({Ho:Y=>{k?he(yn,`Not sending because RPC '${e}' stream ${a} is closed:`,Y):(w||(he(yn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),he(yn,`RPC '${e}' stream ${a} sending:`,Y),T.send(Y))},Yo:()=>T.close()}),G=(Y,fe,re)=>{Y.listen(fe,le=>{try{re(le)}catch(Se){setTimeout(()=>{throw Se},0)}})};return G(T,Du.EventType.OPEN,()=>{k||(he(yn,`RPC '${e}' stream ${a} transport opened.`),V.s_())}),G(T,Du.EventType.CLOSE,()=>{k||(k=!0,he(yn,`RPC '${e}' stream ${a} transport closed`),V.__(),this.I_(T))}),G(T,Du.EventType.ERROR,Y=>{k||(k=!0,Ur(yn,`RPC '${e}' stream ${a} transport errored. Name:`,Y.name,"Message:",Y.message),V.__(new ce(W.UNAVAILABLE,"The operation could not be completed")))}),G(T,Du.EventType.MESSAGE,Y=>{var fe;if(!k){const re=Y.data[0];at(!!re,16349);const le=re,Se=le?.error||((fe=le[0])===null||fe===void 0?void 0:fe.error);if(Se){he(yn,`RPC '${e}' stream ${a} received error:`,Se);const Te=Se.status;let Ce=function(C){const D=zt[C];if(D!==void 0)return Xw(D)}(Te),M=Se.message;Ce===void 0&&(Ce=W.INTERNAL,M="Unknown error status: "+Te+" with message "+Se.message),k=!0,V.__(new ce(Ce,M)),T.close()}else he(yn,`RPC '${e}' stream ${a} received:`,re),V.a_(re)}}),G(f,fw.STAT_EVENT,Y=>{Y.stat===hg.PROXY?he(yn,`RPC '${e}' stream ${a} detected buffering proxy`):Y.stat===hg.NOPROXY&&he(yn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{V.o_()},0),V}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function qp(){return typeof document<"u"?document:null}/**
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
 */function ff(i){return new LD(i,!0)}/**
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
 */class hA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const WT="PersistentStream";class dA{constructor(e,t,s,a,l,c,f,p){this.Fi=e,this.w_=s,this.S_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new hA(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(zs(t.toString()),zs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.b_===t&&this.W_(s,a)},s=>{e(()=>{const a=new ce(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(a=>{s(()=>this.G_(a))}),this.stream.onMessage(a=>{s(()=>++this.C_==1?this.j_(a):this.onNext(a))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return he(WT,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(he(WT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kO extends dA{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=BD(this.serializer,e),s=function(l){if(!("targetChange"in l))return Oe.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Oe.min():c.readTime?Zi(c.readTime):Oe.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=bg(this.serializer),t.addTarget=function(l,c){let f;const p=c.target;if(f=gg(p)?{documents:qD(l,p)}:{query:HD(l,p).Vt},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=eA(l,c.resumeToken);const g=vg(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(Oe.min())>0){f.readTime=xd(l,c.snapshotVersion.toTimestamp());const g=vg(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f}(this.serializer,e);const s=KD(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=bg(this.serializer),t.removeTarget=e,this.k_(t)}}class PO extends dA{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return at(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,at(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){at(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=zD(e.writeResults,e.commitTime),s=Zi(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=bg(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>FD(this.serializer,s))};this.k_(t)}}/**
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
 */class VO{}class LO extends VO{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new ce(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Wo(e,Eg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(W.UNKNOWN,l.toString())})}Jo(e,t,s,a,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.Jo(e,Eg(t,s),a,c,f,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ce(W.UNKNOWN,c.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class UO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(zs(t),this._a=!1):he("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Va="RemoteStore";class jO{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(c=>{s.enqueueAndForget(async()=>{Ha(this)&&(he(Va,"Restarting streams for network reachability change."),await async function(p){const g=Me(p);g.Ia.add(4),await pc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await mf(g)}(this))})}),this.Aa=new UO(s,a)}}async function mf(i){if(Ha(i))for(const e of i.da)await e(!0)}async function pc(i){for(const e of i.da)await e(!1)}function fA(i,e){const t=Me(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),A_(t)?w_(t):_l(t).x_()&&S_(t,e))}function b_(i,e){const t=Me(i),s=_l(t);t.Ta.delete(e),s.x_()&&mA(t,e),t.Ta.size===0&&(s.x_()?s.B_():Ha(t)&&t.Aa.set("Unknown"))}function S_(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Oe.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_l(i).H_(e)}function mA(i,e){i.Ra.$e(e),_l(i).Y_(e)}function w_(i){i.Ra=new MD({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),_l(i).start(),i.Aa.aa()}function A_(i){return Ha(i)&&!_l(i).M_()&&i.Ta.size>0}function Ha(i){return Me(i).Ia.size===0}function pA(i){i.Ra=void 0}async function BO(i){i.Aa.set("Online")}async function FO(i){i.Ta.forEach((e,t)=>{S_(i,e)})}async function zO(i,e){pA(i),A_(i)?(i.Aa.la(e),w_(i)):i.Aa.set("Unknown")}async function qO(i,e,t){if(i.Aa.set("Online"),e instanceof Zw&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ta.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ta.delete(f),a.Ra.removeTarget(f))}(i,e)}catch(s){he(Va,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Od(i,s)}else if(e instanceof rd?i.Ra.Ye(e):e instanceof Jw?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Oe.min()))try{const s=await cA(i.localStore);t.compareTo(s)>=0&&await function(l,c){const f=l.Ra.Pt(c);return f.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ta.get(g);v&&l.Ta.set(g,v.withResumeToken(p.resumeToken,c))}}),f.targetMismatches.forEach((p,g)=>{const v=l.Ta.get(p);if(!v)return;l.Ta.set(p,v.withResumeToken(pn.EMPTY_BYTE_STRING,v.snapshotVersion)),mA(l,p);const T=new Nr(v.target,p,g,v.sequenceNumber);S_(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(i,t)}catch(s){he(Va,"Failed to raise snapshot:",s),await Od(i,s)}}async function Od(i,e,t){if(!gl(e))throw e;i.Ia.add(1),await pc(i),i.Aa.set("Offline"),t||(t=()=>cA(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{he(Va,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await mf(i)})}function gA(i,e){return e().catch(t=>Od(i,t,e))}async function pf(i){const e=Me(i),t=qr(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:u_;for(;HO(e);)try{const a=await AO(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,GO(e,a)}catch(a){await Od(e,a)}_A(e)&&yA(e)}function HO(i){return Ha(i)&&i.Pa.length<10}function GO(i,e){i.Pa.push(e);const t=qr(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function _A(i){return Ha(i)&&!qr(i).M_()&&i.Pa.length>0}function yA(i){qr(i).start()}async function KO(i){qr(i).na()}async function YO(i){const e=qr(i);for(const t of i.Pa)e.X_(t.mutations)}async function QO(i,e,t){const s=i.Pa.shift(),a=p_.from(s,e,t);await gA(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await pf(i)}async function $O(i,e){e&&qr(i).Z_&&await async function(s,a){if(function(c){return DD(c)&&c!==W.ABORTED}(a.code)){const l=s.Pa.shift();qr(s).N_(),await gA(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await pf(s)}}(i,e),_A(i)&&yA(i)}async function XT(i,e){const t=Me(i);t.asyncQueue.verifyOperationInProgress(),he(Va,"RemoteStore received new credentials");const s=Ha(t);t.Ia.add(3),await pc(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await mf(t)}async function WO(i,e){const t=Me(i);e?(t.Ia.delete(2),await mf(t)):e||(t.Ia.add(2),await pc(t),t.Aa.set("Unknown"))}function _l(i){return i.Va||(i.Va=function(t,s,a){const l=Me(t);return l.ia(),new kO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:BO.bind(null,i),e_:FO.bind(null,i),n_:zO.bind(null,i),J_:qO.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),A_(i)?w_(i):i.Aa.set("Unknown")):(await i.Va.stop(),pA(i))})),i.Va}function qr(i){return i.ma||(i.ma=function(t,s,a){const l=Me(t);return l.ia(),new PO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:KO.bind(null,i),n_:$O.bind(null,i),ea:YO.bind(null,i),ta:QO.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await pf(i)):(await i.ma.stop(),i.Pa.length>0&&(he(Va,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
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
 */class R_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,f=new R_(e,t,c,a,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(i,e){if(zs("AsyncQueue",`${e}: ${i}`),gl(i))return new ce(W.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Wo{static emptySet(e){return new Wo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||be.comparator(t.key,s.key):(t,s)=>be.comparator(t.key,s.key),this.keyedMap=Ou(),this.sortedSet=new Ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Wo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class JT{constructor(){this.fa=new Ct(be.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ie(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class ol{constructor(e,t,s,a,l,c,f,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(f=>{c.push({type:0,doc:f})}),new ol(e,t,Wo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class XO{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class JO{constructor(){this.queries=ZT(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=Me(t),l=a.queries;a.queries=ZT(),l.forEach((c,f)=>{for(const p of f.wa)p.onError(s)})})(this,new ce(W.ABORTED,"Firestore shutting down"))}}function ZT(){return new qa(i=>Uw(i),lf)}async function C_(i,e){const t=Me(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Sa()&&e.ba()&&(s=2):(l=new XO,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(a,!0);break;case 1:l.ya=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=I_(c,`Initialization of query '${zo(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&x_(t)}async function N_(i,e){const t=Me(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?a=e.ba()?0:1:!l.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ZO(i,e){const t=Me(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.wa)f.Ca(a)&&(s=!0);c.ya=a}}s&&x_(t)}function eM(i,e,t){const s=Me(i),a=s.queries.get(e);if(a)for(const l of a.wa)l.onError(t);s.queries.delete(e)}function x_(i){i.Da.forEach(e=>{e.next()})}var Ag,eb;(eb=Ag||(Ag={})).Fa="default",eb.Cache="cache";class D_{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new ol(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ol.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ag.Cache}}/**
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
 */class vA{constructor(e){this.key=e}}class EA{constructor(e){this.key=e}}class tM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=He(),this.mutatedKeys=He(),this.Xa=jw(e),this.eu=new Wo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new JT,a=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,T)=>{const w=a.get(v),k=uf(this.query,T)?T:null,V=!!w&&this.mutatedKeys.has(w.key),G=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let Y=!1;w&&k?w.data.isEqual(k.data)?V!==G&&(s.track({type:3,doc:k}),Y=!0):this.iu(w,k)||(s.track({type:2,doc:k}),Y=!0,(p&&this.Xa(k,p)>0||g&&this.Xa(k,g)<0)&&(f=!0)):!w&&k?(s.track({type:0,doc:k}),Y=!0):w&&!k&&(s.track({type:1,doc:w}),Y=!0,(p||g)&&(f=!0)),Y&&(k?(c=c.add(k),l=G?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{eu:c,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort((v,T)=>function(k,V){const G=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{At:Y})}};return G(k)-G(V)}(v.type,T.type)||this.Xa(v.doc,T.doc)),this.su(s),a=a!=null&&a;const f=t&&!a?this.ou():[],p=this.Za.size===0&&this.current&&!a?1:0,g=p!==this.Ya;return this.Ya=p,c.length!==0||g?{snapshot:new ol(this.query,e.eu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new JT,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=He(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new EA(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new vA(s))}),t}uu(e){this.Ha=e.qs,this.Za=He();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ol.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const O_="SyncEngine";class nM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class iM{constructor(e){this.key=e,this.lu=!1}}class sM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new qa(f=>Uw(f),lf),this.Tu=new Map,this.Iu=new Set,this.du=new Ct(be.comparator),this.Eu=new Map,this.Au=new y_,this.Ru={},this.Vu=new Map,this.mu=al.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rM(i,e,t=!0){const s=RA(i);let a;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.cu()):a=await TA(s,e,t,!0),a}async function aM(i,e){const t=RA(i);await TA(t,e,!0,!1)}async function TA(i,e,t,s){const a=await RO(i.localStore,Xi(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await oM(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&fA(i.remoteStore,a),f}async function oM(i,e,t,s,a){i.gu=(T,w,k)=>async function(G,Y,fe,re){let le=Y.view.nu(fe);le.Ds&&(le=await KT(G.localStore,Y.query,!1).then(({documents:M})=>Y.view.nu(M,le)));const Se=re&&re.targetChanges.get(Y.targetId),Te=re&&re.targetMismatches.get(Y.targetId)!=null,Ce=Y.view.applyChanges(le,G.isPrimaryClient,Se,Te);return nb(G,Y.targetId,Ce._u),Ce.snapshot}(i,T,w,k);const l=await KT(i.localStore,e,!0),c=new tM(e,l.qs),f=c.nu(l.documents),p=mc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),g=c.applyChanges(f,i.isPrimaryClient,p);nb(i,t,g._u);const v=new nM(e,t,c);return i.Pu.set(e,v),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),g.snapshot}async function lM(i,e,t){const s=Me(i),a=s.Pu.get(e),l=s.Tu.get(a.targetId);if(l.length>1)return s.Tu.set(a.targetId,l.filter(c=>!lf(c,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Sg(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&b_(s.remoteStore,a.targetId),Rg(s,a.targetId)}).catch(pl)):(Rg(s,a.targetId),await Sg(s.localStore,a.targetId,!0))}async function uM(i,e){const t=Me(i),s=t.Pu.get(e),a=t.Tu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),b_(t.remoteStore,s.targetId))}async function cM(i,e,t){const s=_M(i);try{const a=await function(c,f){const p=Me(c),g=Et.now(),v=f.reduce((k,V)=>k.add(V.key),He());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",k=>{let V=qs(),G=He();return p.Os.getEntries(k,v).next(Y=>{V=Y,V.forEach((fe,re)=>{re.isValidDocument()||(G=G.add(fe))})}).next(()=>p.localDocuments.getOverlayedDocuments(k,V)).next(Y=>{T=Y;const fe=[];for(const re of f){const le=RD(re,T.get(re.key).overlayedDocument);le!=null&&fe.push(new Kr(re.key,le,xw(le.value.mapValue),Ji.exists(!0)))}return p.mutationQueue.addMutationBatch(k,g,fe,f)}).next(Y=>{w=Y;const fe=Y.applyToLocalDocumentSet(T,G);return p.documentOverlayCache.saveOverlays(k,Y.batchId,fe)})}).then(()=>({batchId:w.batchId,changes:Fw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,f,p){let g=c.Ru[c.currentUser.toKey()];g||(g=new Ct(Ue)),g=g.insert(f,p),c.Ru[c.currentUser.toKey()]=g}(s,a.batchId,t),await gc(s,a.changes),await pf(s.remoteStore)}catch(a){const l=I_(a,"Failed to persist write");t.reject(l)}}async function bA(i,e){const t=Me(i);try{const s=await SO(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Eu.get(l);c&&(at(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.lu=!0:a.modifiedDocuments.size>0?at(c.lu,14607):a.removedDocuments.size>0&&(at(c.lu,42227),c.lu=!1))}),await gc(t,s,e)}catch(s){await pl(s)}}function tb(i,e,t){const s=Me(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach((l,c)=>{const f=c.view.va(e);f.snapshot&&a.push(f.snapshot)}),function(c,f){const p=Me(c);p.onlineState=f;let g=!1;p.queries.forEach((v,T)=>{for(const w of T.wa)w.va(f)&&(g=!0)}),g&&x_(p)}(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hM(i,e,t){const s=Me(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let c=new Ct(be.comparator);c=c.insert(l,bn.newNoDocument(l,Oe.min()));const f=He().add(l),p=new df(Oe.min(),new Map,new Ct(Ue),c,f);await bA(s,p),s.du=s.du.remove(l),s.Eu.delete(e),M_(s)}else await Sg(s.localStore,e,!1).then(()=>Rg(s,e,t)).catch(pl)}async function dM(i,e){const t=Me(i),s=e.batch.batchId;try{const a=await bO(t.localStore,e);wA(t,s,null),SA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await gc(t,a)}catch(a){await pl(a)}}async function fM(i,e,t){const s=Me(i);try{const a=await function(c,f){const p=Me(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,f).next(T=>(at(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(s.localStore,e);wA(s,e,t),SA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await gc(s,a)}catch(a){await pl(a)}}function SA(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function wA(i,e,t){const s=Me(i);let a=s.Ru[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function Rg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(s=>{i.Au.containsKey(s)||AA(i,s)})}function AA(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(b_(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),M_(i))}function nb(i,e,t){for(const s of t)s instanceof vA?(i.Au.addReference(s.key,e),mM(i,s)):s instanceof EA?(he(O_,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||AA(i,s.key)):Ie(19791,{yu:s})}function mM(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(he(O_,"New document in limbo: "+t),i.Iu.add(s),M_(i))}function M_(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new be(_t.fromString(e)),s=i.mu.next();i.Eu.set(s,new iM(t)),i.du=i.du.insert(t,s),fA(i.remoteStore,new Nr(Xi(of(t.path)),s,"TargetPurposeLimboResolution",sf.ue))}}async function gc(i,e,t){const s=Me(i),a=[],l=[],c=[];s.Pu.isEmpty()||(s.Pu.forEach((f,p)=>{c.push(s.gu(p,e,t).then(g=>{var v;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(v=t?.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=E_.Es(p.targetId,g);l.push(T)}}))}),await Promise.all(c),s.hu.J_(a),await async function(p,g){const v=Me(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Z.forEach(g,w=>Z.forEach(w.Is,k=>v.persistence.referenceDelegate.addReference(T,w.targetId,k)).next(()=>Z.forEach(w.ds,k=>v.persistence.referenceDelegate.removeReference(T,w.targetId,k)))))}catch(T){if(!gl(T))throw T;he(T_,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const k=v.Fs.get(w),V=k.snapshotVersion,G=k.withLastLimboFreeSnapshotVersion(V);v.Fs=v.Fs.insert(w,G)}}}(s.localStore,l))}async function pM(i,e){const t=Me(i);if(!t.currentUser.isEqual(e)){he(O_,"User change. New user:",e.toKey());const s=await uA(t.localStore,e);t.currentUser=e,function(l,c){l.Vu.forEach(f=>{f.forEach(p=>{p.reject(new ce(W.CANCELLED,c))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await gc(t,s.Bs)}}function gM(i,e){const t=Me(i),s=t.Eu.get(e);if(s&&s.lu)return He().add(s.key);{let a=He();const l=t.Tu.get(e);if(!l)return a;for(const c of l){const f=t.Pu.get(c);a=a.unionWith(f.view.tu)}return a}}function RA(i){const e=Me(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=bA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hM.bind(null,e),e.hu.J_=ZO.bind(null,e.eventManager),e.hu.pu=eM.bind(null,e.eventManager),e}function _M(i){const e=Me(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fM.bind(null,e),e}class Md{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ff(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return TO(this.persistence,new yO,e.initialUser,this.serializer)}Du(e){return new lA(v_.Vi,this.serializer)}bu(e){return new CO}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Md.provider={build:()=>new Md};class yM extends Md{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){at(this.persistence.referenceDelegate instanceof Dd,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new iO(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Pn.withCacheSize(this.cacheSizeBytes):Pn.DEFAULT;return new lA(s=>Dd.Vi(s,t),this.serializer)}}class Ig{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pM.bind(null,this.syncEngine),await WO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JO}()}createDatastore(e){const t=ff(e.databaseInfo.databaseId),s=function(l){return new MO(l)}(e.databaseInfo);return function(l,c,f,p){return new LO(l,c,f,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,f){return new jO(s,a,l,c,f)}(this.localStore,this.datastore,e.asyncQueue,t=>tb(this.syncEngine,t,0),function(){return $T.C()?new $T:new NO}())}createSyncEngine(e,t){return function(a,l,c,f,p,g,v){const T=new sM(a,l,c,f,p,g);return v&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Me(a);he(Va,"RemoteStore shutting down."),l.Ia.add(5),await pc(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ig.provider={build:()=>new Ig};/**
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
 */class k_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):zs("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Hr="FirestoreClient";class vM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=vn.UNAUTHENTICATED,this.clientId=l_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{he(Hr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(he(Hr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=I_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Hp(i,e){i.asyncQueue.verifyOperationInProgress(),he(Hr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await uA(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>{Ur("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{he("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(a=>{Ur("Terminating Firestore due to IndexedDb database deletion failed",a)})}),i._offlineComponents=e}async function ib(i,e){i.asyncQueue.verifyOperationInProgress();const t=await EM(i);he(Hr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>XT(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>XT(e.remoteStore,a)),i._onlineComponents=e}async function EM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){he(Hr,"Using user provided OfflineComponentProvider");try{await Hp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===W.FAILED_PRECONDITION||a.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Ur("Error using user provided cache. Falling back to memory cache: "+t),await Hp(i,new Md)}}else he(Hr,"Using default OfflineComponentProvider"),await Hp(i,new yM(void 0));return i._offlineComponents}async function IA(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(he(Hr,"Using user provided OnlineComponentProvider"),await ib(i,i._uninitializedComponentsProvider._online)):(he(Hr,"Using default OnlineComponentProvider"),await ib(i,new Ig))),i._onlineComponents}function TM(i){return IA(i).then(e=>e.syncEngine)}async function kd(i){const e=await IA(i),t=e.eventManager;return t.onListen=rM.bind(null,e.syncEngine),t.onUnlisten=lM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uM.bind(null,e.syncEngine),t}function bM(i,e,t={}){const s=new Ls;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,f,p,g){const v=new k_({next:w=>{v.Ou(),c.enqueueAndForget(()=>N_(l,T));const k=w.docs.has(f);!k&&w.fromCache?g.reject(new ce(W.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&p&&p.source==="server"?g.reject(new ce(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new D_(of(f.path),v,{includeMetadataChanges:!0,ka:!0});return C_(l,T)}(await kd(i),i.asyncQueue,e,t,s)),s.promise}function SM(i,e,t={}){const s=new Ls;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,f,p,g){const v=new k_({next:w=>{v.Ou(),c.enqueueAndForget(()=>N_(l,T)),w.fromCache&&p.source==="server"?g.reject(new ce(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new D_(f,v,{includeMetadataChanges:!0,ka:!0});return C_(l,T)}(await kd(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */const sb=new Map;/**
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
 */const NA="firestore.googleapis.com",rb=!0;class ab{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=NA,this.ssl=rb}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:rb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=oA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tO)throw new ce(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CA((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gf{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ab({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ab(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Dx;switch(s.type){case"firstParty":return new Px(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=sb.get(t);s&&(he("ComponentProvider","Removing Datastore"),sb.delete(t),s.terminate())}(this),Promise.resolve()}}function wM(i,e,t,s={}){var a;i=fi(i,gf);const l=Gs(e),c=i._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;l&&(Kd(`https://${p}`),Yd("Firestore",!0)),c.host!==NA&&c.host!==p&&Ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:s});if(!Pr(g,f)&&(i._setSettings(g),s.mockUserToken)){let v,T;if(typeof s.mockUserToken=="string")v=s.mockUserToken,T=vn.MOCK_USER;else{v=Hb(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new ce(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new vn(w)}i._authCredentials=new Ox(new _w(v,T))}}/**
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
 */class Ga{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ga(this.firestore,e,this._query)}}class Dt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}toJSON(){return{type:Dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(hc(t,Dt._jsonSchema))return new Dt(e,s||null,new be(_t.fromString(t.referencePath)))}}Dt._jsonSchemaVersion="firestore/documentReference/1.0",Dt._jsonSchema={type:Ht("string",Dt._jsonSchemaVersion),referencePath:Ht("string")};class kr extends Ga{constructor(e,t,s){super(e,t,of(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new be(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function AM(i,e,...t){if(i=It(i),vw("collection","path",e),i instanceof gf){const s=_t.fromString(e,...t);return vT(s),new kr(i,null,s)}{if(!(i instanceof Dt||i instanceof kr))throw new ce(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(_t.fromString(e,...t));return vT(s),new kr(i.firestore,null,s)}}function Yi(i,e,...t){if(i=It(i),arguments.length===1&&(e=l_.newId()),vw("doc","path",e),i instanceof gf){const s=_t.fromString(e,...t);return yT(s),new Dt(i,null,new be(s))}{if(!(i instanceof Dt||i instanceof kr))throw new ce(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(_t.fromString(e,...t));return yT(s),new Dt(i.firestore,i instanceof kr?i.converter:null,new be(s))}}/**
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
 */const ob="AsyncQueue";class lb{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new hA(this,"async_queue_retry"),this.oc=()=>{const s=qp();s&&he(ob,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=qp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=qp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Ls;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!gl(e))throw e;he(ob,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,zs("INTERNAL UNHANDLED ERROR: ",ub(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=R_.createAndSchedule(this,e,t,s,l=>this.lc(l));return this.ec.push(a),a}ac(){this.tc&&Ie(47125,{hc:ub(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ub(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function cb(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1}(i,["next","error","complete"])}class La extends gf{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new lb,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lb(e),this._firestoreClient=void 0,await e}}}function RM(i,e){const t=typeof i=="object"?i:Wd(),s=typeof i=="string"?i:wd,a=rc(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Vg("firestore");l&&wM(a,...l)}return a}function _f(i){if(i._terminated)throw new ce(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||IM(i),i._firestoreClient}function IM(i){var e,t,s;const a=i._freezeSettings(),l=function(f,p,g,v){return new Xx(f,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,CA(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new vM(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(f){const p=f?._online.build();return{_offline:f?._offline.build(p),_online:p}}(i._componentsProvider))}/**
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
 */class ci{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ci(pn.fromBase64String(e))}catch(t){throw new ce(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ci(pn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ci._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hc(e,ci._jsonSchema))return ci.fromBase64String(e.bytes)}}ci._jsonSchemaVersion="firestore/bytes/1.0",ci._jsonSchema={type:Ht("string",ci._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class yf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class es{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:es._jsonSchemaVersion}}static fromJSON(e){if(hc(e,es._jsonSchema))return new es(e.latitude,e.longitude)}}es._jsonSchemaVersion="firestore/geoPoint/1.0",es._jsonSchema={type:Ht("string",es._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class ts{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ts._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hc(e,ts._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ts(e.vectorValues);throw new ce(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ts._jsonSchemaVersion="firestore/vectorValue/1.0",ts._jsonSchema={type:Ht("string",ts._jsonSchemaVersion),vectorValues:Ht("object")};/**
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
 */const CM=/^__.*__$/;class NM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,t,this.fieldTransforms):new fc(e,this.data,t,this.fieldTransforms)}}class xA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Kr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function DA(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ec:i})}}class V_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new V_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Pd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(DA(this.Ec)&&CM.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class xM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ff(e)}Dc(e,t,s,a=!1){return new V_({Ec:e,methodName:t,bc:s,path:mn.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(i){const e=i._freezeSettings(),t=ff(i._databaseId);return new xM(i._databaseId,!!e.ignoreUndefinedProperties,t)}function DM(i,e,t,s,a,l={}){const c=i.Dc(l.merge||l.mergeFields?2:0,e,t,a);U_("Data must be an object, but it was:",c,s);const f=OA(s,c);let p,g;if(l.merge)p=new $n(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const w=Cg(e,T,t);if(!c.contains(w))throw new ce(W.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);kA(v,w)||v.push(w)}p=new $n(v),g=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=c.fieldTransforms;return new NM(new Ln(f),p,g)}class vf extends P_{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vf}}function OM(i,e,t,s){const a=i.Dc(1,e,t);U_("Data must be an object, but it was:",a,s);const l=[],c=Ln.empty();Gr(s,(p,g)=>{const v=j_(e,p,t);g=It(g);const T=a.gc(v);if(g instanceof vf)l.push(v);else{const w=_c(g,T);w!=null&&(l.push(v),c.set(v,w))}});const f=new $n(l);return new xA(c,f,a.fieldTransforms)}function MM(i,e,t,s,a,l){const c=i.Dc(1,e,t),f=[Cg(e,s,t)],p=[a];if(l.length%2!=0)throw new ce(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)f.push(Cg(e,l[w])),p.push(l[w+1]);const g=[],v=Ln.empty();for(let w=f.length-1;w>=0;--w)if(!kA(g,f[w])){const k=f[w];let V=p[w];V=It(V);const G=c.gc(k);if(V instanceof vf)g.push(k);else{const Y=_c(V,G);Y!=null&&(g.push(k),v.set(k,Y))}}const T=new $n(g);return new xA(v,T,c.fieldTransforms)}function kM(i,e,t,s=!1){return _c(t,i.Dc(s?4:3,e))}function _c(i,e){if(MA(i=It(i)))return U_("Unsupported field value:",e,i),OA(i,e);if(i instanceof P_)return function(s,a){if(!DA(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const f of s){let p=_c(f,a.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=It(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ED(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Et.fromDate(s);return{timestampValue:xd(a.serializer,l)}}if(s instanceof Et){const l=new Et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xd(a.serializer,l)}}if(s instanceof es)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ci)return{bytesValue:eA(a.serializer,s._byteString)};if(s instanceof Dt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:__(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ts)return function(c,f){return{mapValue:{fields:{[Cw]:{stringValue:Nw},[Ad]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw f.wc("VectorValues must only contain numeric values.");return m_(f.serializer,g)})}}}}}}(s,a);throw a.wc(`Unsupported field value: ${nf(s)}`)}(i,e)}function OA(i,e){const t={};return bw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(i,(s,a)=>{const l=_c(a,e.Vc(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function MA(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Et||i instanceof es||i instanceof ci||i instanceof Dt||i instanceof P_||i instanceof ts)}function U_(i,e,t){if(!MA(t)||!Ew(t)){const s=nf(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function Cg(i,e,t){if((e=It(e))instanceof yf)return e._internalPath;if(typeof e=="string")return j_(i,e);throw Pd("Field path arguments must be of type string or ",i,!1,void 0,t)}const PM=new RegExp("[~\\*/\\[\\]]");function j_(i,e,t){if(e.search(PM)>=0)throw Pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new yf(...e.split("."))._internalPath}catch{throw Pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Pd(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ce(W.INVALID_ARGUMENT,f+i+p)}function kA(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class PA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(B_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VM extends PA{data(){return super.data()}}function B_(i,e){return typeof e=="string"?j_(i,e):e instanceof yf?e._internalPath:e._delegate._internalPath}/**
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
 */function VA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ce(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class F_{}class LM extends F_{}function hb(i,e,...t){let s=[];e instanceof F_&&s.push(e),s=s.concat(t),function(l){const c=l.filter(p=>p instanceof z_).length,f=l.filter(p=>p instanceof Ef).length;if(c>1||c>0&&f>0)throw new ce(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const a of s)i=a._apply(i);return i}class Ef extends LM{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ef(e,t,s)}_apply(e){const t=this._parse(e);return LA(e._query,t),new Ga(e.firestore,e.converter,_g(e._query,t))}_parse(e){const t=L_(e.firestore);return function(l,c,f,p,g,v,T){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ce(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){fb(T,v);const V=[];for(const G of T)V.push(db(p,l,G));w={arrayValue:{values:V}}}else w=db(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||fb(T,v),w=kM(f,c,T,v==="in"||v==="not-in");return qt.create(g,v,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Xh(i,e,t){const s=e,a=B_("where",i);return Ef._create(a,s,t)}class z_ extends F_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new z_(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Ri.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let c=a;const f=l.getFlattenedFilters();for(const p of f)LA(c,p),c=_g(c,p)}(e._query,t),new Ga(e.firestore,e.converter,_g(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function db(i,e,t){if(typeof(t=It(t))=="string"){if(t==="")throw new ce(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lw(e)&&t.indexOf("/")!==-1)throw new ce(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(_t.fromString(t));if(!be.isDocumentKey(s))throw new ce(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return IT(i,new be(s))}if(t instanceof Dt)return IT(i,t._key);throw new ce(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nf(t)}.`)}function fb(i,e){if(!Array.isArray(i)||i.length===0)throw new ce(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function LA(i,e){const t=function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null}(i.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class UM{convertValue(e,t="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Gr(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Ad].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>Vt(c.doubleValue));return new ts(l)}convertGeoPoint(e){return new es(Vt(e.latitude),Vt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=af(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wu(e));default:return null}}convertTimestamp(e){const t=Br(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=_t.fromString(e);at(aA(s),9688,{name:e});const a=new Xu(s.get(1),s.get(3)),l=new be(s.popFirst(5));return a.isEqual(t)||zs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function jM(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class ku{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xa extends PA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ad(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(B_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=xa._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}xa._jsonSchemaVersion="firestore/documentSnapshot/1.0",xa._jsonSchema={type:Ht("string",xa._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class ad extends xa{data(e={}){return super.data(e)}}class Da{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new ku(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new ad(this._firestore,this._userDataWriter,s.key,s,new ku(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(f=>{const p=new ad(a._firestore,a._userDataWriter,f.doc.key,f.doc,new ku(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new ad(a._firestore,a._userDataWriter,f.doc.key,f.doc,new ku(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:BM(f.type),doc:p,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Da._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=l_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BM(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:i})}}/**
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
 */function FM(i){i=fi(i,Dt);const e=fi(i.firestore,La);return bM(_f(e),i._key).then(t=>jA(e,i,t))}Da._jsonSchemaVersion="firestore/querySnapshot/1.0",Da._jsonSchema={type:Ht("string",Da._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class q_ extends UM{constructor(e){super(),this.firestore=e}convertBytes(e){return new ci(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}function mb(i){i=fi(i,Ga);const e=fi(i.firestore,La),t=_f(e),s=new q_(e);return VA(i._query),SM(t,i._query).then(a=>new Da(e,s,i,a))}function zM(i,e,t){i=fi(i,Dt);const s=fi(i.firestore,La),a=jM(i.converter,e);return UA(s,[DM(L_(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Ji.none())])}function Os(i,e,t,...s){i=fi(i,Dt);const a=fi(i.firestore,La),l=L_(a);let c;return c=typeof(e=It(e))=="string"||e instanceof yf?MM(l,"updateDoc",i._key,e,t,s):OM(l,"updateDoc",i._key,e),UA(a,[c.toMutation(i._key,Ji.exists(!0))])}function qM(i,...e){var t,s,a;i=It(i);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||cb(e[c])||(l=e[c++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(cb(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let p,g,v;if(i instanceof Dt)g=fi(i.firestore,La),v=of(i._key.path),p={next:T=>{e[c]&&e[c](jA(g,i,T))},error:e[c+1],complete:e[c+2]};else{const T=fi(i,Ga);g=fi(T.firestore,La),v=T._query;const w=new q_(g);p={next:k=>{e[c]&&e[c](new Da(g,w,T,k))},error:e[c+1],complete:e[c+2]},VA(i._query)}return function(w,k,V,G){const Y=new k_(G),fe=new D_(k,Y,V);return w.asyncQueue.enqueueAndForget(async()=>C_(await kd(w),fe)),()=>{Y.Ou(),w.asyncQueue.enqueueAndForget(async()=>N_(await kd(w),fe))}}(_f(g),v,f,p)}function UA(i,e){return function(s,a){const l=new Ls;return s.asyncQueue.enqueueAndForget(async()=>cM(await TM(s),a,l)),l.promise}(_f(i),e)}function jA(i,e,t){const s=t.docs.get(e._key),a=new q_(i);return new xa(i,a,e._key,s,new ku(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){ml=a})(Ba),Vr(new js("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),f=new La(new Mx(s.getProvider("auth-internal")),new Vx(c,s.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ce(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xu(g.options.projectId,v)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),di(fT,mT,e),di(fT,mT,"esm2017")})();/**
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
 */const HM="type.googleapis.com/google.protobuf.Int64Value",GM="type.googleapis.com/google.protobuf.UInt64Value";function BA(i,e){const t={};for(const s in i)i.hasOwnProperty(s)&&(t[s]=e(i[s]));return t}function Vd(i){if(i==null)return null;if(i instanceof Number&&(i=i.valueOf()),typeof i=="number"&&isFinite(i)||i===!0||i===!1||Object.prototype.toString.call(i)==="[object String]")return i;if(i instanceof Date)return i.toISOString();if(Array.isArray(i))return i.map(e=>Vd(e));if(typeof i=="function"||typeof i=="object")return BA(i,e=>Vd(e));throw new Error("Data cannot be encoded in JSON: "+i)}function ll(i){if(i==null)return i;if(i["@type"])switch(i["@type"]){case HM:case GM:{const e=Number(i.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+i);return e}default:throw new Error("Data cannot be decoded from JSON: "+i)}return Array.isArray(i)?i.map(e=>ll(e)):typeof i=="function"||typeof i=="object"?BA(i,e=>ll(e)):i}/**
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
 */const pb={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Un extends rs{constructor(e,t,s){super(`${H_}/${e}`,t||""),this.details=s,Object.setPrototypeOf(this,Un.prototype)}}function KM(i){if(i>=200&&i<300)return"ok";switch(i){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ld(i,e){let t=KM(i),s=t,a;try{const l=e&&e.error;if(l){const c=l.status;if(typeof c=="string"){if(!pb[c])return new Un("internal","internal");t=pb[c],s=c}const f=l.message;typeof f=="string"&&(s=f),a=l.details,a!==void 0&&(a=ll(a))}}catch{}return t==="ok"?null:new Un(t,s,a)}/**
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
 */class YM{constructor(e,t,s,a){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Vn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||s.get().then(l=>this.messaging=l,()=>{}),this.appCheck||a?.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),a=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:a}}}/**
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
 */const Ng="us-central1",QM=/^data: (.*?)(?:\n|$)/;function $M(i){let e=null;return{promise:new Promise((t,s)=>{e=setTimeout(()=>{s(new Un("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{e&&clearTimeout(e)}}}class WM{constructor(e,t,s,a,l=Ng,c=(...f)=>fetch(...f)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new YM(e,t,s,a),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin+(f.pathname==="/"?"":f.pathname),this.region=Ng}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function XM(i,e,t){const s=Gs(e);i.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(Kd(i.emulatorOrigin),Yd("Functions",!0))}function JM(i,e,t){const s=a=>ek(i,e,a,{});return s.stream=(a,l)=>nk(i,e,a,l),s}async function ZM(i,e,t,s){t["Content-Type"]="application/json";let a;try{a=await s(i,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}async function FA(i,e){const t={},s=await i.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(t.Authorization="Bearer "+s.authToken),s.messagingToken&&(t["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=s.appCheckToken),t}function ek(i,e,t,s){const a=i._url(e);return tk(i,a,t,s)}async function tk(i,e,t,s){t=Vd(t);const a={data:t},l=await FA(i,s),c=s.timeout||7e4,f=$M(c),p=await Promise.race([ZM(e,a,l,i.fetchImpl),f.promise,i.cancelAllRequests]);if(f.cancel(),!p)throw new Un("cancelled","Firebase Functions instance was deleted.");const g=Ld(p.status,p.json);if(g)throw g;if(!p.json)throw new Un("internal","Response is not valid JSON object.");let v=p.json.data;if(typeof v>"u"&&(v=p.json.result),typeof v>"u")throw new Un("internal","Response is missing data field.");return{data:ll(v)}}function nk(i,e,t,s){const a=i._url(e);return ik(i,a,t,s||{})}async function ik(i,e,t,s){var a;t=Vd(t);const l={data:t},c=await FA(i,s);c["Content-Type"]="application/json",c.Accept="text/event-stream";let f;try{f=await i.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:c,signal:s?.signal})}catch(k){if(k instanceof Error&&k.name==="AbortError"){const G=new Un("cancelled","Request was cancelled.");return{data:Promise.reject(G),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(G)}}}}}}const V=Ld(0,null);return{data:Promise.reject(V),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(V)}}}}}}let p,g;const v=new Promise((k,V)=>{p=k,g=V});(a=s?.signal)===null||a===void 0||a.addEventListener("abort",()=>{const k=new Un("cancelled","Request was cancelled.");g(k)});const T=f.body.getReader(),w=sk(T,p,g,s?.signal);return{stream:{[Symbol.asyncIterator](){const k=w.getReader();return{async next(){const{value:V,done:G}=await k.read();return{value:V,done:G}},async return(){return await k.cancel(),{done:!0,value:void 0}}}}},data:v}}function sk(i,e,t,s){const a=(c,f)=>{const p=c.match(QM);if(!p)return;const g=p[1];try{const v=JSON.parse(g);if("result"in v){e(ll(v.result));return}if("message"in v){f.enqueue(ll(v.message));return}if("error"in v){const T=Ld(0,v);f.error(T),t(T);return}}catch(v){if(v instanceof Un){f.error(v),t(v);return}}},l=new TextDecoder;return new ReadableStream({start(c){let f="";return p();async function p(){if(s?.aborted){const g=new Un("cancelled","Request was cancelled");return c.error(g),t(g),Promise.resolve()}try{const{value:g,done:v}=await i.read();if(v){f.trim()&&a(f.trim(),c),c.close();return}if(s?.aborted){const w=new Un("cancelled","Request was cancelled");c.error(w),t(w),await i.cancel();return}f+=l.decode(g,{stream:!0});const T=f.split(`
`);f=T.pop()||"";for(const w of T)w.trim()&&a(w.trim(),c);return p()}catch(g){const v=g instanceof Un?g:Ld(0,null);c.error(v),t(v)}}},cancel(){return i.cancel()}})}const gb="@firebase/functions",_b="0.12.9";/**
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
 */const rk="auth-internal",ak="app-check-internal",ok="messaging-internal";function lk(i){const e=(t,{instanceIdentifier:s})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider(rk),c=t.getProvider(ok),f=t.getProvider(ak);return new WM(a,l,c,f,s)};Vr(new js(H_,e,"PUBLIC").setMultipleInstances(!0)),di(gb,_b,i),di(gb,_b,"esm2017")}/**
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
 */function uk(i=Wd(),e=Ng){const s=rc(It(i),H_).getImmediate({identifier:e}),a=Vg("functions");return a&&zA(s,...a),s}function zA(i,e,t){XM(It(i),e,t)}function Tf(i,e,t){return JM(It(i),e)}lk();function G_(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function qA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ck=qA,HA=new sc("auth","Firebase",qA());/**
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
 */const Ud=new $d("@firebase/auth");function hk(i,...e){Ud.logLevel<=qe.WARN&&Ud.warn(`Auth (${Ba}): ${i}`,...e)}function od(i,...e){Ud.logLevel<=qe.ERROR&&Ud.error(`Auth (${Ba}): ${i}`,...e)}/**
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
 */function Ii(i,...e){throw K_(i,...e)}function ns(i,...e){return K_(i,...e)}function GA(i,e,t){const s=Object.assign(Object.assign({},ck()),{[e]:t});return new sc("auth","Firebase",s).create(e,{appName:i.name})}function Us(i){return GA(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return HA.create(i,...e)}function Re(i,e,...t){if(!i)throw K_(e,...t)}function ks(i){const e="INTERNAL ASSERTION FAILED: "+i;throw od(e),new Error(e)}function Hs(i,e){i||ks(e)}/**
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
 */function xg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function dk(){return yb()==="http:"||yb()==="https:"}function yb(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dk()||_I()||"connection"in navigator)?navigator.onLine:!0}function mk(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class yc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hs(t>e,"Short delay should be less than long delay!"),this.isMobile=Ug()||Gb()}get(){return fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Y_(i,e){Hs(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class KA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ks("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ks("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ks("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_k=new yc(3e4,6e4);function Yr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Qr(i,e,t,s,a={}){return YA(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const f=cl(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return gI()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Gs(i.emulatorConfig.host)&&(g.credentials="include"),KA.fetch()(await QA(i,i.config.apiHost,t,f),g)})}async function YA(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},pk),e);try{const a=new vk(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Jh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Jh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Jh(i,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw GA(i,v,g);Ii(i,v)}}catch(a){if(a instanceof rs)throw a;Ii(i,"network-request-failed",{message:String(a)})}}async function vc(i,e,t,s,a={}){const l=await Qr(i,e,t,s,a);return"mfaPendingCredential"in l&&Ii(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function QA(i,e,t,s){const a=`${e}${t}?${s}`,l=i,c=l.config.emulator?Y_(i.config,a):`${i.config.apiScheme}://${a}`;return gk.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function yk(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ns(this.auth,"network-request-failed")),_k.get())})}}function Jh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=ns(i,e,s);return a.customData._tokenResponse=t,a}function vb(i){return i!==void 0&&i.enterprise!==void 0}class Ek{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tk(i,e){return Qr(i,"GET","/v2/recaptchaConfig",Yr(i,e))}/**
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
 */async function bk(i,e){return Qr(i,"POST","/v1/accounts:delete",e)}async function jd(i,e){return Qr(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sk(i,e=!1){const t=It(i),s=await t.getIdToken(e),a=Q_(s);Re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Hu(Gp(a.auth_time)),issuedAtTime:Hu(Gp(a.iat)),expirationTime:Hu(Gp(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Gp(i){return Number(i)*1e3}function Q_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return od("JWT malformed, contained fewer than 3 sections"),null;try{const a=dd(t);return a?JSON.parse(a):(od("Failed to decode base64 JWT payload"),null)}catch(a){return od("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Eb(i){const e=Q_(i);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tc(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof rs&&wk(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function wk({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Dg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hu(this.lastLoginAt),this.creationTime=Hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bd(i){var e;const t=i.auth,s=await i.getIdToken(),a=await tc(i,jd(t,{idToken:s}));Re(a?.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?$A(l.providerUserInfo):[],f=Ik(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!f?.length,v=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Dg(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(i,T)}async function Rk(i){const e=It(i);await Bd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ik(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function $A(i){return i.map(e=>{var{providerId:t}=e,s=G_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ck(i,e){const t=await YA(i,{},async()=>{const s=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await QA(i,a,"/v1/token",`key=${l}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return i.emulatorConfig&&Gs(i.emulatorConfig.host)&&(p.credentials="include"),KA.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nk(i,e){return Qr(i,"POST","/v2/accounts:revokeToken",Yr(i,e))}/**
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
 */class Xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=Eb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await Ck(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Xo;return s&&(Re(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Re(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xo,this.toJSON())}_performRefresh(){return ks("not implemented")}}/**
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
 */function wr(i,e){Re(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class wi{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=G_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Dg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await tc(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sk(this,e)}reload(){return Rk(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bd(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(Us(this.auth));const e=await this.getIdToken();return await tc(this,bk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,f,p,g,v;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,k=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(c=t.photoURL)!==null&&c!==void 0?c:void 0,G=(f=t.tenantId)!==null&&f!==void 0?f:void 0,Y=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,fe=(g=t.createdAt)!==null&&g!==void 0?g:void 0,re=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:le,emailVerified:Se,isAnonymous:Te,providerData:Ce,stsTokenManager:M}=t;Re(le&&M,e,"internal-error");const A=Xo.fromJSON(this.name,M);Re(typeof le=="string",e,"internal-error"),wr(T,e.name),wr(w,e.name),Re(typeof Se=="boolean",e,"internal-error"),Re(typeof Te=="boolean",e,"internal-error"),wr(k,e.name),wr(V,e.name),wr(G,e.name),wr(Y,e.name),wr(fe,e.name),wr(re,e.name);const C=new wi({uid:le,auth:e,email:w,emailVerified:Se,displayName:T,isAnonymous:Te,photoURL:V,phoneNumber:k,tenantId:G,stsTokenManager:A,createdAt:fe,lastLoginAt:re});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(D=>Object.assign({},D))),Y&&(C._redirectEventId=Y),C}static async _fromIdTokenResponse(e,t,s=!1){const a=new Xo;a.updateFromServerResponse(t);const l=new wi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Bd(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?$A(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,f=new Xo;f.updateFromIdToken(s);const p=new wi({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Dg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
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
 */const Tb=new Map;function Ps(i){Hs(i instanceof Function,"Expected a class definition");let e=Tb.get(i);return e?(Hs(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Tb.set(i,e),e)}/**
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
 */class WA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}WA.type="NONE";const bb=WA;/**
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
 */function ld(i,e,t){return`firebase:${i}:${e}:${t}`}class Jo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=ld(this.userKey,a.apiKey,l),this.fullPersistenceKey=ld("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await jd(this.auth,{idToken:e}).catch(()=>{});return t?wi._fromGetAccountInfoResponse(this.auth,t,e):null}return wi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Jo(Ps(bb),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ps(bb);const c=ld(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const w=await jd(e,{idToken:v}).catch(()=>{});if(!w)break;T=await wi._fromGetAccountInfoResponse(e,w,v)}else T=wi._fromJSON(e,v);g!==l&&(f=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Jo(l,e,s):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Jo(l,e,s))}}/**
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
 */function Sb(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n1(e))return"Blackberry";if(i1(e))return"Webos";if(JA(e))return"Safari";if((e.includes("chrome/")||ZA(e))&&!e.includes("edge/"))return"Chrome";if(t1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function XA(i=wn()){return/firefox\//i.test(i)}function JA(i=wn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZA(i=wn()){return/crios\//i.test(i)}function e1(i=wn()){return/iemobile/i.test(i)}function t1(i=wn()){return/android/i.test(i)}function n1(i=wn()){return/blackberry/i.test(i)}function i1(i=wn()){return/webos/i.test(i)}function $_(i=wn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function xk(i=wn()){var e;return $_(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dk(){return yI()&&document.documentMode===10}function s1(i=wn()){return $_(i)||t1(i)||i1(i)||n1(i)||/windows phone/i.test(i)||e1(i)}/**
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
 */function r1(i,e=[]){let t;switch(i){case"Browser":t=Sb(wn());break;case"Worker":t=`${Sb(wn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ba}/${s}`}/**
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
 */class Ok{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Mk(i,e={}){return Qr(i,"GET","/v2/passwordPolicy",Yr(i,e))}/**
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
 */const kk=6;class Pk{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:kk,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Vk{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wb(this),this.idTokenSubscription=new wb(this),this.beforeStateQueue=new Ok(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ps(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Jo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await jd(this,{idToken:e}),s=await wi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&p?.user&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bd(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vn(this.app))return Promise.reject(Us(this));const t=e?It(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(Us(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vn(this.app)?Promise.reject(Us(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ps(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mk(this),t=new Pk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Nk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ps(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await Jo.create(this,[Ps(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&hk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ka(i){return It(i)}class wb{constructor(e){this.auth=e,this.observer=null,this.addObserver=NI(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lk(i){bf=i}function a1(i){return bf.loadJS(i)}function Uk(){return bf.recaptchaEnterpriseScript}function jk(){return bf.gapiScript}function Bk(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Fk{constructor(){this.enterprise=new zk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qk="recaptcha-enterprise",o1="NO_RECAPTCHA";class Hk{constructor(e){this.type=qk,this.auth=Ka(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{Tk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new Ek(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,c,f){const p=window.grecaptcha;vb(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(o1)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Fk().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(f=>{if(!t&&vb(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Uk();p.length!==0&&(p+=f),a1(p).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function Ab(i,e,t,s=!1,a=!1){const l=new Hk(i);let c;if(a)c=o1;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Og(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ab(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Ab(i,e,t,t==="getOobCode");return s(i,f)}else return Promise.reject(c)})}/**
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
 */function Gk(i,e){const t=rc(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Pr(l,e??{}))return a;Ii(a,"already-initialized")}return t.initialize({options:e})}function Kk(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ps);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function Yk(i,e,t){const s=Ka(i);Re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=l1(e),{host:c,port:f}=Qk(e),p=f===null?"":`:${f}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Re(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Re(Pr(g,s.config.emulator)&&Pr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Gs(c)?(Kd(`${l}//${c}${p}`),Yd("Auth",!0)):$k()}function l1(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Qk(i){const e=l1(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:Rb(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:Rb(c)}}}function Rb(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function $k(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class W_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ks("not implemented")}_getIdTokenResponse(e){return ks("not implemented")}_linkToIdToken(e,t){return ks("not implemented")}_getReauthenticationResolver(e){return ks("not implemented")}}async function Wk(i,e){return Qr(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xk(i,e){return vc(i,"POST","/v1/accounts:signInWithPassword",Yr(i,e))}/**
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
 */async function Jk(i,e){return vc(i,"POST","/v1/accounts:signInWithEmailLink",Yr(i,e))}async function Zk(i,e){return vc(i,"POST","/v1/accounts:signInWithEmailLink",Yr(i,e))}/**
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
 */class nc extends W_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new nc(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new nc(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Og(e,t,"signInWithPassword",Xk);case"emailLink":return Jk(e,{email:this._email,oobCode:this._password});default:Ii(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Og(e,s,"signUpPassword",Wk);case"emailLink":return Zk(e,{idToken:t,email:this._email,oobCode:this._password});default:Ii(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zo(i,e){return vc(i,"POST","/v1/accounts:signInWithIdp",Yr(i,e))}/**
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
 */const eP="http://localhost";class Ua extends W_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ua(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ii("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=G_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ua(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Zo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Zo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zo(e,t)}buildRequest(){const e={requestUri:eP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cl(t)}return e}}/**
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
 */function tP(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nP(i){const e=Cu(Nu(i)).link,t=e?Cu(Nu(e)).deep_link_id:null,s=Cu(Nu(i)).deep_link_id;return(s?Cu(Nu(s)).link:null)||s||t||e||i}class X_{constructor(e){var t,s,a,l,c,f;const p=Cu(Nu(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(s=p.oobCode)!==null&&s!==void 0?s:null,T=tP((a=p.mode)!==null&&a!==void 0?a:null);Re(g&&v&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=nP(e);try{return new X_(t)}catch{return null}}}/**
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
 */class yl{constructor(){this.providerId=yl.PROVIDER_ID}static credential(e,t){return nc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=X_.parseLink(t);return Re(s,"argument-error"),nc._fromEmailAndCode(e,s.code,s.tenantId)}}yl.PROVIDER_ID="password";yl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ar extends Ec{constructor(){super("facebook.com")}static credential(e){return Ua._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class Rr extends Ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ua._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Rr.credential(t,s)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
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
 */class Ir extends Ec{constructor(){super("github.com")}static credential(e){return Ua._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
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
 */class Cr extends Ec{constructor(){super("twitter.com")}static credential(e,t){return Ua._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Cr.credential(t,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */async function iP(i,e){return vc(i,"POST","/v1/accounts:signUp",Yr(i,e))}/**
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
 */class ja{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await wi._fromIdTokenResponse(e,s,a),c=Ib(s);return new ja({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=Ib(s);return new ja({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function Ib(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Fd extends rs{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Fd.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Fd(e,t,s,a)}}function c1(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Fd._fromErrorAndOperation(i,l,e,s):l})}async function sP(i,e,t=!1){const s=await tc(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ja._forOperation(i,"link",s)}/**
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
 */async function rP(i,e,t=!1){const{auth:s}=i;if(Vn(s.app))return Promise.reject(Us(s));const a="reauthenticate";try{const l=await tc(i,c1(s,a,e,i),t);Re(l.idToken,s,"internal-error");const c=Q_(l.idToken);Re(c,s,"internal-error");const{sub:f}=c;return Re(i.uid===f,s,"user-mismatch"),ja._forOperation(i,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ii(s,"user-mismatch"),l}}/**
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
 */async function h1(i,e,t=!1){if(Vn(i.app))return Promise.reject(Us(i));const s="signIn",a=await c1(i,s,e),l=await ja._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function aP(i,e){return h1(Ka(i),e)}/**
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
 */async function d1(i){const e=Ka(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oP(i,e,t){if(Vn(i.app))return Promise.reject(Us(i));const s=Ka(i),c=await Og(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iP).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&d1(i),p}),f=await ja._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(f.user),f}function lP(i,e,t){return Vn(i.app)?Promise.reject(Us(i)):aP(It(i),yl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&d1(i),s})}function uP(i,e,t,s){return It(i).onIdTokenChanged(e,t,s)}function cP(i,e,t){return It(i).beforeAuthStateChanged(e,t)}function hP(i,e,t,s){return It(i).onAuthStateChanged(e,t,s)}const zd="__sak";/**
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
 */class f1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zd,"1"),this.storage.removeItem(zd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dP=1e3,fP=10;class m1 extends f1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Dk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,fP):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},dP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}m1.type="LOCAL";const mP=m1;/**
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
 */class p1 extends f1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}p1.type="SESSION";const g1=p1;/**
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
 */class Sf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Sf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),p=await pP(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sf.receivers=[];/**
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
 */class gP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const g=J_("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(w.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function is(){return window}function _P(i){is().location.href=i}/**
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
 */function _1(){return typeof is().WorkerGlobalScope<"u"&&typeof is().importScripts=="function"}async function yP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vP(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function EP(){return _1()?self:null}/**
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
 */const y1="firebaseLocalStorageDb",TP=1,qd="firebaseLocalStorage",v1="fbase_key";class Tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wf(i,e){return i.transaction([qd],e?"readwrite":"readonly").objectStore(qd)}function bP(){const i=indexedDB.deleteDatabase(y1);return new Tc(i).toPromise()}function Mg(){const i=indexedDB.open(y1,TP);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qd,{keyPath:v1})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qd)?e(s):(s.close(),await bP(),e(await Mg()))})})}async function Cb(i,e,t){const s=wf(i,!0).put({[v1]:e,value:t});return new Tc(s).toPromise()}async function SP(i,e){const t=wf(i,!1).get(e),s=await new Tc(t).toPromise();return s===void 0?null:s.value}function Nb(i,e){const t=wf(i,!0).delete(e);return new Tc(t).toPromise()}const wP=800,AP=3;class E1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>AP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sf._getInstance(EP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yP(),!this.activeServiceWorker)return;this.sender=new gP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mg();return await Cb(e,zd,"1"),await Nb(e,zd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cb(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>SP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=wf(a,!1).getAll();return new Tc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E1.type="LOCAL";const RP=E1;new yc(3e4,6e4);/**
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
 */function IP(i,e){return e?Ps(e):(Re(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Z_ extends W_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CP(i){return h1(i.auth,new Z_(i),i.bypassAuthState)}function NP(i){const{auth:e,user:t}=i;return Re(t,e,"internal-error"),rP(t,new Z_(i),i.bypassAuthState)}async function xP(i){const{auth:e,user:t}=i;return Re(t,e,"internal-error"),sP(t,new Z_(i),i.bypassAuthState)}/**
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
 */class T1{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CP;case"linkViaPopup":case"linkViaRedirect":return xP;case"reauthViaPopup":case"reauthViaRedirect":return NP;default:Ii(this.auth,"internal-error")}}resolve(e){Hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DP=new yc(2e3,1e4);class Yo extends T1{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Yo.currentPopupAction&&Yo.currentPopupAction.cancel(),Yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Hs(this.filter.length===1,"Popup operations only handle one event");const e=J_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ns(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ns(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ns(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DP.get())};e()}}Yo.currentPopupAction=null;/**
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
 */const OP="pendingRedirect",ud=new Map;class MP extends T1{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ud.get(this.auth._key());if(!e){try{const s=await kP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ud.set(this.auth._key(),e)}return this.bypassAuthState||ud.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kP(i,e){const t=LP(e),s=VP(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function PP(i,e){ud.set(i._key(),e)}function VP(i){return Ps(i._redirectPersistence)}function LP(i){return ld(OP,i.config.apiKey,i.name)}async function UP(i,e,t=!1){if(Vn(i.app))return Promise.reject(Us(i));const s=Ka(i),a=IP(s,e),c=await new MP(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const jP=10*60*1e3;class BP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!b1(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ns(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jP&&this.cachedEventUids.clear(),this.cachedEventUids.has(xb(e))}saveEventToCache(e){this.cachedEventUids.add(xb(e)),this.lastProcessedEventTime=Date.now()}}function xb(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function b1({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function FP(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b1(i);default:return!1}}/**
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
 */async function zP(i,e={}){return Qr(i,"GET","/v1/projects",e)}/**
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
 */const qP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HP=/^https?/;async function GP(i){if(i.config.emulator)return;const{authorizedDomains:e}=await zP(i);for(const t of e)try{if(KP(t))return}catch{}Ii(i,"unauthorized-domain")}function KP(i){const e=xg(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!HP.test(t))return!1;if(qP.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const YP=new yc(3e4,6e4);function Db(){const i=is().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function QP(i){return new Promise((e,t)=>{var s,a,l;function c(){Db(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Db(),t(ns(i,"network-request-failed"))},timeout:YP.get()})}if(!((a=(s=is().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=is().gapi)===null||l===void 0)&&l.load)c();else{const f=Bk("iframefcb");return is()[f]=()=>{gapi.load?c():t(ns(i,"network-request-failed"))},a1(`${jk()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw cd=null,e})}let cd=null;function $P(i){return cd=cd||QP(i),cd}/**
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
 */const WP=new yc(5e3,15e3),XP="__/auth/iframe",JP="emulator/auth/iframe",ZP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t4(i){const e=i.config;Re(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Y_(e,JP):`https://${i.config.authDomain}/${XP}`,s={apiKey:e.apiKey,appName:i.name,v:Ba},a=e4.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${cl(s).slice(1)}`}async function n4(i){const e=await $P(i),t=is().gapi;return Re(t,i,"internal-error"),e.open({where:document.body,url:t4(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZP,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=ns(i,"network-request-failed"),f=is().setTimeout(()=>{l(c)},WP.get());function p(){is().clearTimeout(f),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const i4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s4=500,r4=600,a4="_blank",o4="http://localhost";class Ob{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l4(i,e,t,s=s4,a=r4){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},i4),{width:s.toString(),height:a.toString(),top:l,left:c}),g=wn().toLowerCase();t&&(f=ZA(g)?a4:t),XA(g)&&(e=e||o4,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[k,V])=>`${w}${k}=${V},`,"");if(xk(g)&&f!=="_self")return u4(e||"",f),new Ob(null);const T=window.open(e||"",f,v);Re(T,i,"popup-blocked");try{T.focus()}catch{}return new Ob(T)}function u4(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const c4="__/auth/handler",h4="emulator/auth/handler",d4=encodeURIComponent("fac");async function Mb(i,e,t,s,a,l){Re(i.config.authDomain,i,"auth-domain-config-required"),Re(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ba,eventId:a};if(e instanceof u1){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",Yp(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Ec){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}i.tenantId&&(c.tid=i.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await i._getAppCheckToken(),g=p?`#${d4}=${encodeURIComponent(p)}`:"";return`${f4(i)}?${cl(f).slice(1)}${g}`}function f4({config:i}){return i.emulator?Y_(i,h4):`https://${i.authDomain}/${c4}`}/**
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
 */const Kp="webStorageSupport";class m4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g1,this._completeRedirectFn=UP,this._overrideRedirectResult=PP}async _openPopup(e,t,s,a){var l;Hs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Mb(e,t,s,xg(),a);return l4(e,c,J_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await Mb(e,t,s,xg(),a);return _P(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Hs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await n4(e),s=new BP(e);return t.register("authEvent",a=>(Re(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kp,{type:Kp},a=>{var l;const c=(l=a?.[0])===null||l===void 0?void 0:l[Kp];c!==void 0&&t(!!c),Ii(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return s1()||JA()||$_()}}const p4=m4;var kb="@firebase/auth",Pb="1.10.8";/**
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
 */class g4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _4(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y4(i){Vr(new js("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;Re(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r1(i)},g=new Vk(s,a,l,p);return Kk(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Vr(new js("auth-internal",e=>{const t=Ka(e.getProvider("auth").getImmediate());return(s=>new g4(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),di(kb,Pb,_4(i)),di(kb,Pb,"esm2017")}/**
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
 */const v4=5*60,E4=qb("authIdTokenMaxAge")||v4;let Vb=null;const T4=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>E4)return;const a=t?.token;Vb!==a&&(Vb=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function b4(i=Wd()){const e=rc(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Gk(i,{popupRedirectResolver:p4,persistence:[RP,mP,g1]}),s=qb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=T4(l.toString());cP(t,c,()=>c(t.currentUser)),uP(t,f=>c(f))}}const a=Fb("auth");return a&&Yk(t,`http://${a}`),t}function S4(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Lk({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=ns("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",S4().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y4("Browser");const w4={apiKey:"AIzaSyD-EnuWkZgnjb6hnaP4LhUIZvxSCf5tiIo",authDomain:"game-of-trust-675c9.firebaseapp.com",projectId:"game-of-trust-675c9",storageBucket:"game-of-trust-675c9.firebasestorage.app",messagingSenderId:"72708199445",appId:"1:72708199445:web:ce23ac49a6c15fe7f02a1c",measurementId:"G-K3GSYXR89X"},Af=$b(w4);Cx(Af);const Ti=RM(Af),ic=b4(Af),bc=uk(Af,"us-central1");zA(bc,"localhost",5001);const A4=({onAuthSuccess:i})=>{const[e,t]=ke.useState(!0),[s,a]=ke.useState(""),[l,c]=ke.useState(""),[f,p]=ke.useState(""),[g,v]=ke.useState(!1),[T,w]=ke.useState(""),k=async V=>{V.preventDefault(),v(!0),w("");try{if(e){const G=await lP(ic,s,l);i(G.user.uid)}else{if(!f.trim()){w("Username is required for registration");return}const G=await oP(ic,s,l);await zM(Yi(Ti,"usernames",G.user.uid),{username:f.trim(),createdAt:new Date().toISOString()}),i(G.user.uid)}}catch(G){w(G.message||"An error occurred")}finally{v(!1)}};return I.jsxs("div",{className:"max-w-md mx-auto mt-8 p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-slate-700/50 backdrop-blur-sm",children:[I.jsxs("div",{className:"text-center mb-8",children:[I.jsx("h2",{className:"text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2",children:e?"Welcome Back":"Join the Battle"}),I.jsx("p",{className:"text-slate-400 text-sm",children:e?"Sign in to your account":"Create your account to start playing"})]}),I.jsxs("form",{onSubmit:k,className:"space-y-6",children:[I.jsxs("div",{className:"space-y-2",children:[I.jsx("label",{className:"block text-sm font-semibold text-slate-300",children:"Email Address"}),I.jsx("input",{type:"email",value:s,onChange:V=>a(V.target.value),required:!0,className:"w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm",placeholder:"Enter your email"})]}),I.jsxs("div",{className:"space-y-2",children:[I.jsx("label",{className:"block text-sm font-semibold text-slate-300",children:"Password"}),I.jsx("input",{type:"password",value:l,onChange:V=>c(V.target.value),required:!0,className:"w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm",placeholder:"Enter your password"})]}),!e&&I.jsxs("div",{className:"space-y-2",children:[I.jsx("label",{className:"block text-sm font-semibold text-slate-300",children:"Username"}),I.jsx("input",{type:"text",value:f,onChange:V=>p(V.target.value),required:!0,className:"w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm",placeholder:"Choose a username"})]}),T&&I.jsx("div",{className:"bg-red-500/20 border border-red-500/50 rounded-lg p-4 backdrop-blur-sm",children:I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("div",{className:"text-red-400",children:"⚠️"}),I.jsx("div",{className:"text-red-300 text-sm",children:T})]})}),I.jsx("button",{type:"submit",disabled:g,className:"w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",children:g?I.jsxs("div",{className:"flex items-center justify-center gap-2",children:[I.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"}),e?"Signing in...":"Creating account..."]}):e?"Sign In":"Create Account"})]}),I.jsxs("div",{className:"mt-8 text-center",children:[I.jsx("div",{className:"text-slate-400 text-sm mb-4",children:e?"Don't have an account?":"Already have an account?"}),I.jsx("button",{onClick:()=>t(!e),className:"w-full py-3 px-6 bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 font-semibold rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-slate-500/70 backdrop-blur-sm",children:e?"Create New Account":"Sign In Instead"})]})]})},Hd=async i=>{try{const e=await FM(Yi(Ti,"usernames",i));return e.exists()?e.data().username:null}catch(e){return console.error("Error fetching username:",e),null}},kn=18,S1=({game:i,currentUser:e,onCellClick:t,onAnimationComplete:s,gridSize:a=60,onShapeDrop:l,selectedShape:c,onShapePlace:f,onClearSelectedShape:p,onClearPlayerCells:g,onToggleReadyForFight:v})=>{const[T,w]=ke.useState(null),[k,V]=ke.useState(0),[G,Y]=ke.useState(!1),fe=ke.useRef(!1),[re,le]=ke.useState([]),[Se,Te]=ke.useState(null),[Ce,M]=ke.useState(null),[A,C]=ke.useState(0),[D,P]=ke.useState(!1),[L,N]=ke.useState([]),[ue,ae]=ke.useState(!1),[z,ee]=ke.useState(null);ke.useEffect(()=>{const de=()=>{fe.current=!0},ge=()=>{fe.current=!1},ve=_e=>{_e.key==="Escape"&&c&&(_e.preventDefault(),Te(null),p&&p())};return window.addEventListener("mousedown",de),window.addEventListener("mouseup",ge),window.addEventListener("dragend",ge),window.addEventListener("keydown",ve),()=>{window.removeEventListener("mousedown",de),window.removeEventListener("mouseup",ge),window.removeEventListener("dragend",ge),window.removeEventListener("keydown",ve)}},[c,p]);const ie=de=>{const ge={};for(let ve=0;ve<a;ve++){ge[`row${ve}`]=[];for(let _e=0;_e<a;_e++){const Ge=X(de,ve,_e),Ve=de[`row${ve}`]?.[_e]||0;if(Ve>0)ge[`row${ve}`][_e]=Ge===2||Ge===3?Ve:0;else if(Ge===3){const Be=se(de,ve,_e);Be.player1>Be.player2?ge[`row${ve}`][_e]=1:Be.player2>Be.player1?ge[`row${ve}`][_e]=2:ge[`row${ve}`][_e]=Math.random()>.5?1:2}else ge[`row${ve}`][_e]=0}}return ge},ye=(de,ge)=>{for(let ve=0;ve<a;ve++){const _e=`row${ve}`,Ge=de[_e]||[],Ve=ge[_e]||[];if(Ge.length!==Ve.length)return!1;for(let Be=0;Be<a;Be++)if((Ge[Be]||0)!==(Ve[Be]||0))return!1}return!0},x=de=>re.length===0?!1:!!(ye(de,re[re.length-1])||re.length>=2&&ye(de,re[re.length-2])),X=(de,ge,ve)=>{let _e=0;for(let Ge=-1;Ge<=1;Ge++)for(let Ve=-1;Ve<=1;Ve++){if(Ge===0&&Ve===0)continue;const Be=(ge+Ge+a)%a,At=(ve+Ve+a)%a;(de[`row${Be}`]?.[At]||0)>0&&_e++}return _e},se=(de,ge,ve)=>{let _e=0,Ge=0;for(let Ve=-1;Ve<=1;Ve++)for(let Be=-1;Be<=1;Be++){if(Ve===0&&Be===0)continue;const At=(ge+Ve+a)%a,Ot=(ve+Be+a)%a,xn=de[`row${At}`]?.[Ot]||0;xn===1?_e++:xn===2&&Ge++}return{player1:_e,player2:Ge}};ke.useEffect(()=>{i.state==="fighting"&&!G&&k<10&&(Y(!0),w(JSON.parse(JSON.stringify(i.grid))),V(0),le([]))},[i.state,G,i.grid]),ke.useEffect(()=>{if(G&&T&&k<1e3){const de=setTimeout(()=>{if(x(T)){Y(!1),s&&s();return}if($a(T)){Y(!1),s&&s();return}const ve=ie(T);le(_e=>[..._e,JSON.parse(JSON.stringify(T))].slice(-2)),w(ve),V(_e=>_e+1)},50);return()=>clearTimeout(de)}else G&&k>=1e3&&(Y(!1),s&&s())},[G,T,k,s,re]);const te=()=>{const de=JSON.parse(JSON.stringify(i.grid));P(!0),M(de),ee(de),C(0),N([de]),ae(!0)},pe=()=>{P(!1),M(null),ee(null),C(0),N([]),ae(!1)},De=()=>{ae(!1)},Ne=()=>{ae(!0)},Lt=()=>{z&&(M(JSON.parse(JSON.stringify(z))),C(0),N([JSON.parse(JSON.stringify(z))]),ae(!1))},ut=()=>{Ce&&pi()},Xn=()=>{if(L.length>1){const de=[...L];de.pop();const ge=de[de.length-1];M(JSON.parse(JSON.stringify(ge))),N(de),C(Math.max(0,A-1)),ae(!1)}},pi=()=>{if(!Ce)return;if(A>=200){ae(!1);return}const de=ie(Ce);N(ge=>[...ge,JSON.parse(JSON.stringify(Ce))].slice(-200)),M(de),C(ge=>ge+1)};ke.useEffect(()=>{if(D&&Ce&&ue&&A<200){const de=setTimeout(pi,150);return()=>clearTimeout(de)}},[D,Ce,ue,A]);const Ze=e?i.user1?.uid===e.uid?1:i.user2?.uid===e.uid?2:0:0,Ni=()=>Ze===1?i.user1?.readyForFight||!1:Ze===2&&i.user2?.readyForFight||!1,xi=()=>(i.user1?.readyForFight||!1)&&(i.user2?.readyForFight||!1),$r=()=>{i.state!=="started"||!v||v()},Ya=()=>{!jn||!g||(c&&Te(null),g())},An=(de,ge)=>{Ze===0||!(Ze===1&&de<kn||Ze===2&&de>=a-kn)||(c&&f?f(c,de,ge):t(de,ge))},Qa=(de,ge)=>{if(c&&jn){const ve=Ze===1&&de<kn||Ze===2&&de>=a-kn;Te(ve?{row:de,col:ge}:null)}else Te(null)},Wr=(de,ge)=>{if(!c||!Se)return!1;const ve=de-Se.row,_e=ge-Se.col;return ve<0||ve>=c.pattern.length||_e<0||_e>=c.pattern[ve].length||!(c.pattern[ve][_e]===1)?!1:Ze===1&&de<kn||Ze===2&&de>=a-kn},Ys=(de,ge,ve)=>{if(!(Ze===0||!jn||!de.pattern.every((Ge,Ve)=>Ge.every((Be,At)=>{if(Be===0)return!0;const Ot=ge+Ve,xn=ve+At;return Ot<0||Ot>=a||xn<0||xn>=a?!1:Ze===1&&Ot<kn||Ze===2&&Ot>=a-kn})))&&l){const Ge={...de,pattern:de.pattern.map((Ve,Be)=>Ve.map(At=>{if(At===0)return 0;const Ot=ge+Be;return Ze===1&&Ot<kn||Ze===2&&Ot>=a-kn?At:0}))};l(Ge,ge,ve)}},as=de=>{de.preventDefault(),de.dataTransfer.dropEffect="copy"},vl=(de,ge,ve)=>{de.preventDefault();try{const _e=de.dataTransfer.getData("shape");if(_e){const Ge=JSON.parse(_e);Ys(Ge,ge,ve)}}catch(_e){console.error("Error handling shape drop:",_e)}},Qs=(de,ge)=>{let ve;D&&Ce?ve=Ce:G&&T?ve=T:ve=i.grid;const _e=ve[`row${de}`];return _e&&_e[ge]||0},jn=!D&&!G&&(i.state==="waiting"||i.state==="started"),$a=de=>{let ge=0,ve=0;for(let _e=0;_e<a;_e++){const Ge=de[`row${_e}`]||[];for(let Ve=0;Ve<a;Ve++){const Be=Ge[Ve]||0;Be===1?ge++:Be===2&&ve++}}return ge===0&&ve===0?"tie":ge===0?"player2":ve===0?"player1":null},bt=()=>{const de=[];for(let ge=0;ge<a;ge++){const ve=[];for(let _e=0;_e<a;_e++){const Ge=Qs(ge,_e),Ve=jn&&(Ze===1&&ge<kn||Ze===2&&ge>=a-kn);let Be="",At="border-slate-600/50",Ot="";const xn=Wr(ge,_e);Ge===1?(Be="bg-gradient-to-br from-blue-500 to-blue-600",At="border-blue-400/60",Ot="shadow-sm shadow-blue-500/30"):Ge===2?(Be="bg-gradient-to-br from-red-500 to-red-600",At="border-red-400/60",Ot="shadow-sm shadow-red-500/30"):xn?(Be=Ze===1?"bg-gradient-to-br from-blue-400/50 to-blue-500/50 animate-pulse":"bg-gradient-to-br from-red-400/50 to-red-500/50 animate-pulse",At=Ze===1?"border-blue-400/70":"border-red-400/70",Ot="shadow-sm shadow-blue-400/20"):Ve?(Be="bg-slate-700/80 hover:bg-slate-600/80",At=Ze===1?"border-blue-500/30 hover:border-blue-400/50":"border-red-500/30 hover:border-red-400/50"):(Be="bg-slate-800/60",At="border-slate-600/30"),ve.push(I.jsx("div",{className:`w-3 h-3 border ${At} ${Be} ${Ot} 
                            transition-all duration-150 ease-in-out
                            ${Ve||c?"cursor-pointer hover:scale-105 active:scale-95":"cursor-not-allowed"}`,onMouseEnter:()=>{fe.current&&An(ge,_e),Qa(ge,_e)},onMouseMove:()=>Qa(ge,_e),onClick:()=>{An(ge,_e)},onDragOver:as,onDrop:$s=>vl($s,ge,_e)},`${ge}-${_e}`))}de.push(I.jsx("div",{className:"flex",children:ve},ge))}return de},et=Ze===1?{bg:"bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20",border:"border-blue-500/40",text:"text-blue-200",textSecondary:"text-blue-300",button:"bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-500/25",accent:"bg-gradient-to-r from-blue-500 to-blue-600",glow:"shadow-lg shadow-blue-500/20"}:Ze===2?{bg:"bg-gradient-to-br from-slate-900 via-slate-800 to-red-900/20",border:"border-red-500/40",text:"text-red-200",textSecondary:"text-red-300",button:"bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-500/25",accent:"bg-gradient-to-r from-red-500 to-red-600",glow:"shadow-lg shadow-red-500/20"}:{bg:"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",border:"border-slate-500/40",text:"text-slate-200",textSecondary:"text-slate-300",button:"bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 shadow-lg shadow-slate-500/25",accent:"bg-gradient-to-r from-slate-500 to-slate-600",glow:"shadow-lg shadow-slate-500/20"},Xt=ke.useMemo(()=>(i.state==="fighting"||i.state==="finished")&&!G&&i.winner,[i.state,i.winner,G]);return I.jsxs("div",{className:`${et.bg} ${et.border} ${et.glow} border-2 rounded-xl p-6 h-screen flex flex-col backdrop-blur-sm`,children:[I.jsxs("div",{className:"mb-6 flex-shrink-0",children:[I.jsxs("div",{className:"flex items-center justify-between mb-4",children:[I.jsxs("div",{className:`${et.button} text-white px-6 py-3 rounded-lg font-bold tracking-wide text-sm transition-all duration-300 transform hover:scale-105`,children:["PLAYER ",Ze]}),Ze>0&&I.jsx("div",{className:"flex items-center gap-3",children:D?I.jsxs("div",{className:"flex items-center gap-2 bg-slate-800/60 rounded-lg p-2 border border-slate-600/40",children:[I.jsx("button",{onClick:pe,className:"bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",children:"EXIT"}),I.jsx("button",{onClick:Lt,className:`${et.button} text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200`,children:"RESET"}),I.jsxs("div",{className:`${et.text} px-3 py-1.5 bg-slate-800/80 rounded-md text-sm font-mono border border-slate-600/40`,children:[A,"/200"]}),ue?I.jsx("button",{onClick:De,className:"bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",children:"PAUSE"}):I.jsx("button",{onClick:Ne,className:"bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",children:"PLAY"}),I.jsx("button",{onClick:ut,disabled:A>=200,className:`${et.button} text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`,children:"→"}),I.jsx("button",{onClick:Xn,disabled:A<=0,className:`${et.button} text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`,children:"←"})]}):I.jsxs(I.Fragment,{children:[I.jsx("button",{onClick:te,className:`${et.button} text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105`,children:"PREVIEW"}),jn&&g&&I.jsx("button",{onClick:Ya,className:"bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"CLEAR ALL"}),i.state==="started"&&v&&I.jsx("button",{onClick:$r,className:`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${Ni()?"bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-lg shadow-green-500/25":"bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white shadow-lg shadow-amber-500/25"}`,children:Ni()?"READY TO FIGHT":"NOT READY"})]})})]}),i.state==="started"&&xi()&&I.jsx("div",{className:"bg-gradient-to-r from-amber-800/80 to-amber-900/80 backdrop-blur-sm rounded-lg p-3 mb-3 border border-amber-500/40 shadow-lg shadow-amber-500/20",children:I.jsxs("div",{className:"flex items-center justify-center gap-2",children:[I.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-2 border-amber-300 border-t-transparent"}),I.jsx("p",{className:"text-amber-200 text-sm font-semibold tracking-wide",children:"BOTH PLAYERS READY - BATTLE STARTING..."})]})}),i.state==="started"&&!xi()&&I.jsxs("div",{className:"bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-4 mb-3 border border-slate-600/40",children:[I.jsx("p",{className:"text-slate-300 text-sm text-center font-medium mb-3",children:"WAITING FOR PLAYERS TO BE READY FOR FIGHT"}),I.jsxs("div",{className:"flex justify-center gap-6",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("div",{className:`w-3 h-3 rounded-full transition-all duration-300 ${i.user1?.readyForFight?"bg-green-500 shadow-lg shadow-green-500/50 animate-pulse":"bg-slate-600"}`}),I.jsx("span",{className:"text-xs font-medium text-slate-400",children:i.user1?.username||"Player 1"})]}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("div",{className:`w-3 h-3 rounded-full transition-all duration-300 ${i.user2?.readyForFight?"bg-green-500 shadow-lg shadow-green-500/50 animate-pulse":"bg-slate-600"}`}),I.jsx("span",{className:"text-xs font-medium text-slate-400",children:i.user2?.username||"Player 2"})]})]})]}),jn&&c&&I.jsx("div",{className:"bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-3 mb-3 border border-slate-600/40",children:I.jsxs("div",{className:"flex items-center justify-center gap-2",children:[I.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-pulse"}),I.jsx("p",{className:`${et.text} text-sm font-medium`,children:"SHAPE PLACEMENT MODE - Press ESC to exit"})]})}),jn&&!c&&I.jsx("div",{className:"bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-3 mb-3 border border-slate-600/40",children:I.jsxs("p",{className:`${et.text} text-sm text-center font-medium`,children:["EDITABLE ROWS:"," ",I.jsx("span",{className:"font-mono text-slate-300",children:Ze===1?`0-${kn-1}`:`${a-kn}-${a-1}`})]})}),G&&I.jsxs("div",{className:"bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-4 mb-3 border border-slate-600/40",children:[I.jsxs("div",{className:"flex items-center justify-between mb-2",children:[I.jsx("p",{className:`${et.text} text-sm font-semibold`,children:"SIMULATION RUNNING"}),I.jsxs("p",{className:`${et.text} text-sm font-mono`,children:[k," / 1000"]})]}),I.jsx("div",{className:"w-full h-2 bg-slate-700 rounded-full overflow-hidden",children:I.jsx("div",{className:`h-full ${et.accent} transition-all duration-100 ease-out`,style:{width:`${k/1e3*100}%`}})})]}),Xt&&I.jsx("div",{className:"bg-gradient-to-r from-green-800/80 to-green-900/80 backdrop-blur-sm rounded-lg p-4 mb-3 border border-green-500/40 shadow-lg shadow-green-500/20",children:I.jsxs("div",{className:"text-center",children:[I.jsx("h3",{className:"text-lg font-bold text-green-300 mb-2 tracking-wide",children:"🏆 BATTLE COMPLETE 🏆"}),i.winner==="tie"?I.jsx("p",{className:"text-green-200 font-semibold",children:"DRAW"}):I.jsxs("p",{className:"text-green-200 font-semibold",children:["PLAYER"," ",i.winner==="player1"?"1":"2"," WINS"]})]})}),i.state==="fighting"&&!G&&!i.winner&&I.jsx("div",{className:"bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-3 mb-3 border border-slate-600/40",children:I.jsxs("div",{className:"flex items-center justify-center gap-2",children:[I.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-2 border-slate-300 border-t-transparent"}),I.jsx("p",{className:`${et.text} text-sm font-medium`,children:"PROCESSING BATTLE..."})]})}),D&&I.jsxs("div",{className:"bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-4 mb-3 border border-slate-600/40",children:[I.jsxs("div",{className:"flex items-center justify-between mb-2",children:[I.jsx("p",{className:`${et.text} text-sm font-semibold`,children:"PREVIEW MODE"}),I.jsxs("p",{className:`${et.text} text-sm font-mono`,children:[A,"/200"]})]}),I.jsx("div",{className:"w-full h-2 bg-slate-700 rounded-full overflow-hidden",children:I.jsx("div",{className:`h-full ${et.accent} transition-all duration-100 ease-out`,style:{width:`${A/200*100}%`}})})]})]}),I.jsx("div",{className:"flex-1 flex items-center justify-center",children:I.jsx("div",{className:"bg-slate-900/80 backdrop-blur-sm rounded-xl border-2 border-slate-700/50 p-4 shadow-2xl shadow-slate-900/50",children:I.jsx("div",{className:"bg-slate-800/60 rounded-lg p-2 border border-slate-600/40",children:bt()})})})]})},R4=Tf(bc,"createGame"),I4=Tf(bc,"joinGame");Tf(bc,"startFightingPhase");const C4=Tf(bc,"scheduleGameTransition"),N4=async(i,e)=>{try{return(await R4({userId:i,username:e})).data}catch(t){throw console.error("Error calling createGame function:",t),t}},x4=async(i,e,t)=>{try{return(await I4({gameId:i,userId:e,username:t})).data}catch(s){throw console.error("Error calling joinGame function:",s),s}},D4=async i=>{try{return(await C4({gameId:i})).data}catch(e){throw console.error("Error calling scheduleGameTransition function:",e),e}},O4=({playerNumber:i,onShapeSelect:e,selectedShape:t})=>{const[s,a]=ke.useState(0),l=[{id:"block",name:"Block",pattern:[[1,1],[1,1]],color:"#1e40af",description:"Still life - never changes",category:"Still Life"},{id:"blinker",name:"Blinker",pattern:[[1,1,1]],color:"#1e40af",description:"Oscillates between horizontal and vertical",category:"Oscillator"},{id:"glider",name:"Glider",pattern:[[0,1,0],[0,0,1],[1,1,1]],color:"#1e40af",description:"Moves diagonally across the board",category:"Spaceship"},{id:"lwss",name:"Lightweight Spaceship",pattern:[[0,1,1,1,1],[1,0,0,0,1],[0,0,0,0,1],[1,0,0,1,0]],color:"#1e40af",description:"Fast horizontal spaceship",category:"Spaceship"},{id:"mwss",name:"Middleweight Spaceship",pattern:[[0,0,1,1,1,1,1],[1,0,0,0,0,0,1],[0,0,0,0,0,0,1],[1,0,0,0,0,1,0],[0,0,1,1,0,0,0]],color:"#1e40af",description:"Medium-sized spaceship",category:"Spaceship"},{id:"pulsar",name:"Pulsar",pattern:[[0,0,1,1,1,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[0,0,1,1,1,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,1,1,1,0,0],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,1,1,1,0,0]],color:"#1e40af",description:"Large period-3 oscillator",category:"Oscillator"},{id:"gosper_gun",name:"Gosper Glider Gun",pattern:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],color:"#1e40af",description:"Infinite glider generator",category:"Gun"},{id:"r_pentomino",name:"R-Pentomino",pattern:[[0,1,1],[1,1,0],[0,1,0]],color:"#1e40af",description:"Chaotic pattern that stabilizes after 1103 generations",category:"Methuselah"},{id:"acorn",name:"Acorn",pattern:[[0,1,0,0,0,0,0],[0,0,0,1,0,0,0],[1,1,0,0,1,1,1]],color:"#1e40af",description:"Long-lived pattern that creates many gliders",category:"Methuselah"},{id:"diehard",name:"Diehard",pattern:[[0,0,0,0,0,0,1,0],[1,1,0,0,0,0,0,0],[0,1,0,0,0,1,1,1]],color:"#1e40af",description:"Dies after exactly 130 generations",category:"Methuselah"},{id:"copperhead",name:"Copperhead",pattern:[[0,1,1,0,0,1,1,0],[1,0,0,1,1,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,0,0,1,0,0],[0,0,1,0,0,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,1,1,0,0,1],[0,1,1,0,0,1,1,0]],color:"#1e40af",description:"Period-12 spaceship",category:"Spaceship"}],c=(G,Y)=>{let fe=G;for(let re=0;re<Y;re++)fe=f(fe);return fe},f=G=>{const Y=G.length,fe=G[0].length,re=[];for(let le=0;le<fe;le++){re[le]=[];for(let Se=0;Se<Y;Se++)re[le][Se]=G[Y-1-Se][le]}return re},p=G=>{const Y={...G,pattern:c(G.pattern,s)};e(Y)},g=()=>{a(G=>(G+1)%4)},v=()=>{a(G=>(G-1+4)%4)},T=G=>{const Y=c(G.pattern,s),fe=[];for(let re=0;re<Y.length;re++){const le=[];for(let Se=0;Se<Y[re].length;Se++){const Te=Y[re][Se];le.push(I.jsx("div",{className:`w-2 h-2 border inline-block rounded-sm transition-all duration-200 ${Te===1?i===1?"bg-gradient-to-br from-blue-400 to-blue-500 border-blue-300 shadow-sm shadow-blue-400/40":"bg-gradient-to-br from-red-400 to-red-500 border-red-300 shadow-sm shadow-red-400/40":"bg-slate-700/60 border-slate-600/40"}`},`${re}-${Se}`))}fe.push(I.jsx("div",{className:"flex",children:le},re))}return fe},w=[...new Set(l.map(G=>G.category))],V=i===1?{bg:"bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20",border:"border-blue-500/40",text:"text-blue-200",textSecondary:"text-blue-300",accent:"text-blue-400",button:"bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",cardBg:"bg-slate-800/60",cardBorder:"border-slate-600/40",cardHover:"hover:border-blue-500/50 hover:bg-slate-700/80",selectedBg:"bg-blue-900/30",selectedBorder:"border-blue-400/80",selectedShadow:"shadow-lg shadow-blue-500/25"}:i===2?{bg:"bg-gradient-to-br from-slate-900 via-slate-800 to-red-900/20",border:"border-red-500/40",text:"text-red-200",textSecondary:"text-red-300",accent:"text-red-400",button:"bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",cardBg:"bg-slate-800/60",cardBorder:"border-slate-600/40",cardHover:"hover:border-red-500/50 hover:bg-slate-700/80",selectedBg:"bg-red-900/30",selectedBorder:"border-red-400/80",selectedShadow:"shadow-lg shadow-red-500/25"}:{bg:"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",border:"border-slate-500/40",text:"text-slate-200",textSecondary:"text-slate-300",accent:"text-slate-400",button:"bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600",cardBg:"bg-slate-800/60",cardBorder:"border-slate-600/40",cardHover:"hover:border-slate-500/50 hover:bg-slate-700/80",selectedBg:"bg-slate-900/30",selectedBorder:"border-slate-400/80",selectedShadow:"shadow-lg shadow-slate-500/25"};return I.jsxs("div",{className:`${V.bg} ${V.border} border-2 p-6 rounded-xl min-w-80 max-w-96 shadow-2xl backdrop-blur-sm`,children:[I.jsxs("div",{className:"flex items-center justify-between mb-6",children:[I.jsx("h3",{className:`text-xl font-bold ${V.text} tracking-wide`,children:"Pattern Library"}),I.jsxs("div",{className:"flex gap-2",children:[I.jsx("button",{onClick:v,className:`p-2.5 ${V.button} text-white rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105 active:scale-95`,title:"Rotate Counterclockwise",children:I.jsx("span",{className:"text-lg",children:"↺"})}),I.jsx("button",{onClick:g,className:`p-2.5 ${V.button} text-white rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105 active:scale-95`,title:"Rotate Clockwise",children:I.jsx("span",{className:"text-lg",children:"↻"})})]})]}),I.jsx("div",{className:`text-sm ${V.textSecondary} mb-4 p-3 ${V.cardBg} rounded-lg border ${V.cardBorder}`,children:"Select a pattern to place on the board"}),I.jsx("div",{className:"space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-blue-500 scrollbar-thumb-rounded-md hover:scrollbar-thumb-blue-400",children:w.map(G=>I.jsxs("div",{children:[I.jsx("h4",{className:`text-sm font-semibold ${V.accent} mb-3 px-2 tracking-wider uppercase`,children:G}),I.jsx("div",{className:"space-y-2",children:l.filter(Y=>Y.category===G).map(Y=>I.jsx("div",{className:`${V.cardBg} p-4 rounded-lg border cursor-pointer transition-all duration-200 ${t?.id===Y.id?`${V.selectedBorder} ${V.selectedBg} ${V.selectedShadow}`:`${V.cardBorder} ${V.cardHover}`} transform hover:scale-[1.02] active:scale-[0.98]`,onClick:()=>p(Y),children:I.jsxs("div",{className:"flex items-start gap-4",children:[I.jsx("div",{className:"flex flex-col items-start p-2 bg-slate-900/40 rounded-lg border border-slate-600/30",children:T(Y)}),I.jsxs("div",{className:"flex-1 min-w-0",children:[I.jsx("div",{className:`text-sm font-semibold ${V.text} mb-1`,children:Y.name}),I.jsx("div",{className:`text-xs ${V.textSecondary}/80 leading-relaxed`,children:Y.description})]})]})},Y.id))})]},G))}),I.jsxs("div",{className:`text-xs ${V.textSecondary}/80 mt-4 p-4 ${V.cardBg} rounded-lg border ${V.cardBorder}`,children:[I.jsx("div",{className:`font-semibold mb-2 ${V.text}`,children:"Controls:"}),I.jsxs("div",{className:"space-y-1",children:[I.jsx("div",{children:"• Select a pattern to activate placement mode"}),I.jsx("div",{children:"• Use rotation buttons to orient patterns"}),I.jsx("div",{children:"• Click on the board to place selected pattern"}),I.jsx("div",{children:"• Press ESC to cancel placement mode"})]})]})]})},M4=({game:i,currentUser:e,onCellClick:t,onShapeDrop:s,onClearPlayerCells:a,onToggleReadyForFight:l,gridSize:c=60})=>{const[f,p]=ke.useState(null),g=()=>e?i.user1?.uid===e.uid?1:i.user2?.uid===e.uid?2:0:0,v=k=>{p(k)},T=(k,V,G)=>{s&&s(k,V,G)},w=()=>{p(null)};return I.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4",children:I.jsx("div",{className:"max-w-[1920px] mx-auto h-full",children:I.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-4 gap-6 h-full",children:[I.jsx("div",{className:"xl:col-span-1 flex justify-center xl:justify-start",children:I.jsx("div",{className:"w-full max-w-sm xl:max-w-none",children:I.jsx(O4,{playerNumber:g(),onShapeSelect:v,selectedShape:f})})}),I.jsx("div",{className:"xl:col-span-3 flex justify-center items-center",children:I.jsx("div",{className:"w-full max-w-4xl",children:I.jsx(S1,{game:i,currentUser:e,onCellClick:t,onShapeDrop:s,selectedShape:f,onShapePlace:T,onClearSelectedShape:w,onClearPlayerCells:a,onToggleReadyForFight:l,gridSize:c})})})]})})})},k4=()=>{const[i,e]=ke.useState(null),[t,s]=ke.useState(""),[a,l]=ke.useState(!1),[c,f]=ke.useState(null),[p,g]=ke.useState(!1),[v,T]=ke.useState(!1),[w,k]=ke.useState(!0),[V,G]=ke.useState(0),[Y,fe]=ke.useState(!1);ke.useEffect(()=>ic.onAuthStateChanged(async ae=>{f(ae),ae&&await re(ae.uid),k(!1)}),[]);const re=async ue=>{try{const ae=AM(Ti,"games"),z=hb(ae,Xh("user1.uid","==",ue),Xh("state","!=","ended")),ee=hb(ae,Xh("user2.uid","==",ue),Xh("state","!=","ended")),[ie,ye]=await Promise.all([mb(z),mb(ee)]);if(ie.empty){if(!ye.empty){const x=ye.docs[0];s(x.id),e({id:x.id,...x.data()})}}else{const x=ie.docs[0];s(x.id),e({id:x.id,...x.data()})}}catch(ae){console.error("Error checking for existing game:",ae)}},le=async()=>{if(c){l(!0);try{const ue=await Hd(c.uid);if(!ue){alert("Username not found. Please set up your username first."),l(!1);return}const ae=await N4(c.uid,ue);ae.success?(s(ae.gameId),T(!0)):alert("Failed to create game. Please try again.")}catch(ue){console.error("Error creating game:",ue),alert("Failed to create game. Please try again.")}finally{l(!1)}}},Se=async ue=>{if(c)try{const ae=await Hd(c.uid);if(!ae){alert("Username not found. Please set up your username first.");return}(await x4(ue,c.uid,ae)).success&&s(ue)}catch(ae){console.error("Error joining game:",ae),alert("Failed to join game. Please check the game ID and try again.")}},Te=async()=>{if(!t||!c||!i)return;const ue=Yi(Ti,"games",t),z=i.user1?.uid===c.uid?"user1.ready":"user2.ready";try{await Os(ue,{[z]:!p})}catch(ee){console.error("Error updating ready state:",ee)}},Ce=async()=>{if(!t||!c)return;const ue=Yi(Ti,"games",t);try{await Os(ue,{state:"ended"}),e(null),s(""),g(!1),T(!1)}catch(ae){console.error("Error aborting game:",ae)}},M=async()=>{if(!t||!c)return;const ue=Yi(Ti,"games",t);try{await Os(ue,{state:"waiting","user1.ready":!1,"user2.ready":!1,"user1.readyForFight":!1,"user2.readyForFight":!1,grid:A(60),startedAt:null,fightingStartedAt:null,finalGrid:null,winner:null,timerStarted:!1}),g(!1),fe(!1),G(0)}catch(ae){console.error("Error restarting game:",ae)}},A=ue=>{const ae={};for(let z=0;z<ue;z++)ae[`row${z}`]=Array(ue).fill(0);return ae},C=async(ue,ae)=>{if(!t||!c||!i)return;const z=i.user1?.uid===c.uid?1:i.user2?.uid===c.uid?2:0;if(z===0)return;const ee=Yi(Ti,"games",t);try{const ie={...i.grid};ie[`row${ue}`]||(ie[`row${ue}`]=Array(60).fill(0));const ye=ie[`row${ue}`][ae]||0;ie[`row${ue}`][ae]=ye===0?z:0,await Os(ee,{grid:ie})}catch(ie){console.error("Error updating grid:",ie)}},D=async()=>{if(!t||!c||!i)return;const ue=i.user1?.uid===c.uid?1:i.user2?.uid===c.uid?2:0;if(ue===0)return;const ae=Yi(Ti,"games",t);try{const z={...i.grid},ee=18,ie=60;for(let ye=0;ye<ie;ye++)if((ue===1&&ye<ee||ue===2&&ye>=ie-ee)&&z[`row${ye}`])for(let X=0;X<ie;X++)z[`row${ye}`][X]===ue&&(z[`row${ye}`][X]=0);await Os(ae,{grid:z})}catch(z){console.error("Error clearing player cells:",z)}},P=async()=>{if(!t||!c||!i||i.state!=="started")return;const ue=Yi(Ti,"games",t),ae=i.user1?.uid===c.uid,z=ae?"user1.readyForFight":"user2.readyForFight",ee=ae?i.user1?.readyForFight:i.user2?.readyForFight;try{await Os(ue,{[z]:!ee}),(ae?i.user2?.readyForFight:i.user1?.readyForFight)&&!ee&&await Os(ue,{state:"fighting",fightingStartedAt:new Date})}catch(ie){console.error("Error toggling ready for fight:",ie)}},L=()=>{fe(!0)},N=async(ue,ae,z)=>{if(!t||!c||!i)return;const ee=i.user1?.uid===c.uid?1:i.user2?.uid===c.uid?2:0;if(ee===0)return;const ie=Yi(Ti,"games",t);try{const ye={...i.grid};ue.pattern.forEach((x,X)=>{x.forEach((se,te)=>{if(se===1){const pe=ae+X,De=z+te;pe>=0&&pe<60&&De>=0&&De<60&&(ye[`row${pe}`]||(ye[`row${pe}`]=Array(60).fill(0)),ye[`row${pe}`][De]===0&&(ye[`row${pe}`][De]=ee))}})}),await Os(ie,{grid:ye})}catch(ye){console.error("Error dropping shape:",ye)}};if(ke.useEffect(()=>{let ue;if(i?.state==="started"&&i.startedAt){const ae=i.startedAt.toDate?i.startedAt.toDate():new Date(i.startedAt),z=new Date(ae.getTime()+2*60*1e3);ue=setInterval(()=>{const ee=new Date,ie=Math.max(0,Math.ceil((z.getTime()-ee.getTime())/1e3));G(ie),ie===0&&(clearInterval(ue),console.log("Client-side timer reached zero - waiting for server to transition game"))},1e3)}return()=>{ue&&clearInterval(ue)}},[i?.state,i?.startedAt]),ke.useEffect(()=>{i?.state==="started"&&i.user1?.readyForFight&&i.user2?.readyForFight&&console.log("Both players ready for fight - battle should start soon")},[i?.state,i?.user1?.readyForFight,i?.user2?.readyForFight]),ke.useEffect(()=>{if(!t)return;const ue=Yi(Ti,"games",t);return qM(ue,z=>{if(z.exists()){const ee={id:z.id,...z.data()};if(ee.state==="ended"){e(null),s(""),g(!1),T(!1);return}if(e(ee),c){const ye=ee.user1?.uid===c.uid?ee.user1?.ready:ee.user2?.ready;g(ye||!1)}ee.user1?.ready&&ee.user2?.ready&&ee.state==="waiting"&&(async()=>{await Os(ue,{state:"started",startedAt:new Date,timerStarted:!1});try{await D4(t),console.log("Server-side timer started successfully")}catch(ye){console.error("Error starting server-side timer:",ye)}})()}})},[t,c]),i?.state==="started"){const ue=Math.floor(V/60),ae=V%60;return I.jsxs("div",{className:"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-slate-700/50 backdrop-blur-sm",children:[I.jsxs("div",{className:"text-center mb-8",children:[I.jsx("h2",{className:"text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-4",children:"🎮 Battle Arena Active 🎮"}),I.jsxs("div",{className:"bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/40",children:[I.jsxs("div",{className:"flex justify-center items-center gap-4 mb-4",children:[I.jsx("div",{className:"text-cyan-300 font-semibold",children:i.user1?.username}),I.jsx("div",{className:"text-2xl text-slate-400",children:"VS"}),I.jsx("div",{className:"text-cyan-300 font-semibold",children:i.user2?.username})]}),I.jsxs("div",{className:"text-center mb-4",children:[I.jsxs("div",{className:"text-3xl font-bold text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text mb-2",children:["⏰ ",ue,":",ae.toString().padStart(2,"0")]}),I.jsx("p",{className:"text-slate-400 text-sm",children:"Prepare your strategy! Battle begins automatically when timer reaches zero."})]}),I.jsx("div",{className:"flex justify-center",children:I.jsx("button",{onClick:Ce,className:"px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Abort Game"})})]})]}),I.jsx(M4,{game:i,currentUser:c,onCellClick:C,onShapeDrop:N,onClearPlayerCells:D,onToggleReadyForFight:P,gridSize:60})]})}return i?.state==="fighting"?I.jsxs("div",{className:"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-slate-700/50 backdrop-blur-sm",children:[I.jsxs("div",{className:"text-center mb-8",children:[I.jsx("h2",{className:"text-4xl font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-4",children:"⚔️ Battle in Progress ⚔️"}),I.jsxs("div",{className:"bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/40",children:[I.jsxs("div",{className:"flex justify-center items-center gap-4 mb-6",children:[I.jsx("div",{className:"text-cyan-300 font-semibold",children:i.user1?.username}),I.jsx("div",{className:"text-2xl text-slate-400",children:"VS"}),I.jsx("div",{className:"text-cyan-300 font-semibold",children:i.user2?.username})]}),I.jsxs("div",{className:"flex justify-center gap-4",children:[Y&&I.jsx("button",{onClick:M,className:"px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",children:"🔄 Restart Game"}),I.jsx("button",{onClick:Ce,className:"px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Abort Game"})]})]})]}),I.jsx(S1,{game:i,currentUser:c,onCellClick:C,onAnimationComplete:L,onClearPlayerCells:D,onToggleReadyForFight:P,gridSize:60})]}):I.jsx("div",{className:"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-slate-700/50 backdrop-blur-sm",children:w?I.jsxs("div",{className:"text-center py-12",children:[I.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-cyan-400 border-t-transparent mx-auto mb-4"}),I.jsx("h2",{className:"text-xl font-semibold text-cyan-400",children:"Loading..."})]}):I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"text-center mb-8",children:[I.jsx("h2",{className:"text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2",children:"Game Arena"}),I.jsx("p",{className:"text-slate-400",children:"Create or join a Conway's Game of Life battle"})]}),t?I.jsxs("div",{className:"bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-slate-600/40",children:[I.jsxs("div",{className:"text-center mb-8",children:[I.jsx("h3",{className:"text-3xl font-bold text-cyan-300 mb-4",children:"Game Lobby"}),I.jsxs("div",{className:"bg-slate-700/60 rounded-lg p-4 border border-slate-600/40",children:[I.jsx("p",{className:"text-slate-300 mb-2",children:"Game ID:"}),I.jsx("div",{className:"text-2xl font-mono text-cyan-400 tracking-wider",children:t})]})]}),I.jsxs("div",{className:"mb-8",children:[I.jsx("h4",{className:"text-xl font-semibold text-slate-300 mb-6 text-center",children:"Players"}),I.jsxs("div",{className:"grid gap-4",children:[I.jsx("div",{className:"bg-slate-700/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/40",children:I.jsxs("div",{className:"flex justify-between items-center",children:[I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold",children:"1"}),I.jsx("span",{className:"font-semibold text-slate-200",children:i?.user1?.username||"Player 1"})]}),I.jsx("div",{className:`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${i?.user1?.ready?"bg-green-500/20 text-green-400 border-2 border-green-500/50 shadow-lg shadow-green-500/20":"bg-slate-600/60 text-slate-400 border-2 border-slate-500/50"}`,children:i?.user1?.ready?"✓ Ready":"○ Not Ready"})]})}),I.jsx("div",{className:"bg-slate-700/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/40",children:I.jsxs("div",{className:"flex justify-between items-center",children:[I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold",children:"2"}),I.jsx("span",{className:"font-semibold text-slate-200",children:i?.user2?.username||"Waiting for Player 2..."})]}),i?.user2&&I.jsx("div",{className:`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${i?.user2?.ready?"bg-green-500/20 text-green-400 border-2 border-green-500/50 shadow-lg shadow-green-500/20":"bg-slate-600/60 text-slate-400 border-2 border-slate-500/50"}`,children:i?.user2?.ready?"✓ Ready":"○ Not Ready"})]})})]})]}),i?.user2&&I.jsxs("div",{className:"mb-8",children:[I.jsx("button",{onClick:Te,className:`w-full py-4 px-6 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${p?"bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-amber-500/25":"bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-500/25"}`,children:p?"Cancel Ready":"Ready to Start"}),i?.user1?.ready&&i?.user2?.ready&&I.jsx("div",{className:"mt-6 text-center",children:I.jsx("div",{className:"bg-green-500/20 rounded-lg p-4 border border-green-500/50",children:I.jsxs("div",{className:"flex items-center justify-center gap-2",children:[I.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-2 border-green-400 border-t-transparent"}),I.jsx("p",{className:"text-green-400 font-semibold",children:"Starting game..."})]})})})]}),v&&!i?.user2&&I.jsx("div",{className:"mb-8",children:I.jsx("div",{className:"bg-cyan-500/20 rounded-lg p-6 border border-cyan-500/50",children:I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-4xl mb-3",children:"⏳"}),I.jsx("p",{className:"text-cyan-300 font-semibold mb-2",children:"Waiting for another player to join..."}),I.jsx("p",{className:"text-cyan-400 text-sm",children:"Share this Game ID with your friend:"}),I.jsx("div",{className:"mt-3 p-3 bg-cyan-900/30 rounded-lg",children:I.jsx("div",{className:"text-xl font-mono text-cyan-300 tracking-wider",children:t})})]})})}),I.jsx("div",{className:"text-center",children:I.jsx("button",{onClick:Ce,className:"px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Abort Game"})})]}):I.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[I.jsxs("div",{className:"bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/40",children:[I.jsx("h3",{className:"text-2xl font-bold text-cyan-300 mb-6 text-center",children:"Create New Game"}),I.jsxs("div",{className:"text-center mb-6",children:[I.jsx("div",{className:"text-6xl mb-4",children:"🎮"}),I.jsx("p",{className:"text-slate-400 text-sm",children:"Start a new battle arena and invite a friend"})]}),I.jsx("button",{onClick:le,disabled:a||!c,className:"w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",children:a?I.jsxs("div",{className:"flex items-center justify-center gap-2",children:[I.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"}),"Creating..."]}):"Create Game"})]}),I.jsxs("div",{className:"bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/40",children:[I.jsx("h3",{className:"text-2xl font-bold text-green-300 mb-6 text-center",children:"Join Existing Game"}),I.jsxs("div",{className:"text-center mb-6",children:[I.jsx("div",{className:"text-6xl mb-4",children:"🤝"}),I.jsx("p",{className:"text-slate-400 text-sm",children:"Enter a Game ID to join an existing battle"})]}),I.jsx("input",{type:"text",placeholder:"Enter Game ID",className:"w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-slate-400 mb-4 transition-all duration-300 backdrop-blur-sm",onKeyDown:ue=>{if(ue.key==="Enter"){const ae=ue.target.value.trim();ae&&Se(ae)}}}),I.jsx("button",{onClick:()=>{const ae=document.querySelector('input[placeholder="Enter Game ID"]')?.value.trim();ae&&Se(ae)},disabled:!c,className:"w-full py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",children:"Join Game"})]})]})]})})};function P4(){const[i,e]=ke.useState(null),[t,s]=ke.useState(null),[a,l]=ke.useState(!0);ke.useEffect(()=>{const f=hP(ic,async p=>{if(e(p),p){const g=await Hd(p.uid);s(g)}else s(null);l(!1)});return()=>f()},[]);const c=async f=>{const p=await Hd(f);s(p)};return a?I.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-cyan-400 border-t-transparent mx-auto mb-4"}),I.jsx("div",{className:"text-xl text-cyan-400 font-semibold",children:"Loading..."})]})}):I.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:i?I.jsxs("div",{className:"container mx-auto px-4 py-8",children:[I.jsx("div",{className:"bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mb-6 border-2 border-slate-700/50",children:I.jsxs("div",{className:"flex justify-between items-center mb-4",children:[I.jsxs("div",{className:"flex items-center gap-4",children:[I.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center",children:I.jsx("span",{className:"text-white font-bold text-lg",children:(t||i.email||"U").charAt(0).toUpperCase()})}),I.jsxs("div",{children:[I.jsxs("div",{className:"text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text",children:["Welcome, ",t||i.email,"!"]}),I.jsx("div",{className:"text-slate-400 text-sm",children:"Ready to battle in Conway's Game of Life?"})]})]}),I.jsx("button",{onClick:()=>ic.signOut(),className:"px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Sign Out"})]})}),I.jsx(k4,{})]}):I.jsx("div",{className:"flex items-center justify-center min-h-screen",children:I.jsx(A4,{onAuthSuccess:c})})})}iI.createRoot(document.getElementById("root")).render(I.jsx(ke.StrictMode,{children:I.jsx(P4,{})}));
