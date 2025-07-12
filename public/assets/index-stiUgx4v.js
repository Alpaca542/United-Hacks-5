(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Xp={exports:{}},ru={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DE;function n1(){if(DE)return ru;DE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var h=null;if(l!==void 0&&(h=""+l),a.key!==void 0&&(h=""+a.key),"key"in a){l={};for(var p in a)p!=="key"&&(l[p]=a[p])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:h,ref:a!==void 0?a:null,props:l}}return ru.Fragment=e,ru.jsx=t,ru.jsxs=t,ru}var OE;function i1(){return OE||(OE=1,Xp.exports=n1()),Xp.exports}var qe=i1(),$p={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME;function s1(){if(ME)return be;ME=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Z={};function W(D,X,ne){this.props=D,this.context=X,this.refs=Z,this.updater=ne||U}W.prototype.isReactComponent={},W.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Te(){}Te.prototype=W.prototype;function ue(D,X,ne){this.props=D,this.context=X,this.refs=Z,this.updater=ne||U}var se=ue.prototype=new Te;se.constructor=ue,q(se,W.prototype),se.isPureReactComponent=!0;var _e=Array.isArray,re={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function N(D,X,ne,J,de,Ie){return ne=Ie.ref,{$$typeof:i,type:D,key:X,ref:ne!==void 0?ne:null,props:Ie}}function b(D,X){return N(D.type,X,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function M(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ne){return X[ne]})}var k=/\/+/g;function V(D,X){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):X.toString(36)}function I(){}function Kt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function pt(D,X,ne,J,de){var Ie=typeof D;(Ie==="undefined"||Ie==="boolean")&&(D=null);var Se=!1;if(D===null)Se=!0;else switch(Ie){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(D.$$typeof){case i:case e:Se=!0;break;case E:return Se=D._init,pt(Se(D._payload),X,ne,J,de)}}if(Se)return de=de(D),Se=J===""?"."+V(D,0):J,_e(de)?(ne="",Se!=null&&(ne=Se.replace(k,"$&/")+"/"),pt(de,X,ne,"",function(ui){return ui})):de!=null&&(C(de)&&(de=b(de,ne+(de.key==null||D&&D.key===de.key?"":(""+de.key).replace(k,"$&/")+"/")+Se)),X.push(de)),1;Se=0;var xt=J===""?".":J+":";if(_e(D))for(var it=0;it<D.length;it++)J=D[it],Ie=xt+V(J,it),Se+=pt(J,X,ne,Ie,de);else if(it=w(D),typeof it=="function")for(D=it.call(D),it=0;!(J=D.next()).done;)J=J.value,Ie=xt+V(J,it++),Se+=pt(J,X,ne,Ie,de);else if(Ie==="object"){if(typeof D.then=="function")return pt(Kt(D),X,ne,J,de);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Se}function j(D,X,ne){if(D==null)return D;var J=[],de=0;return pt(D,J,"","",function(Ie){return X.call(ne,Ie,de++)}),J}function te(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(ne){(D._status===0||D._status===-1)&&(D._status=1,D._result=ne)},function(ne){(D._status===0||D._status===-1)&&(D._status=2,D._result=ne)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var fe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function He(){}return be.Children={map:j,forEach:function(D,X,ne){j(D,function(){X.apply(this,arguments)},ne)},count:function(D){var X=0;return j(D,function(){X++}),X},toArray:function(D){return j(D,function(X){return X})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},be.Component=W,be.Fragment=t,be.Profiler=a,be.PureComponent=ue,be.StrictMode=s,be.Suspense=m,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,be.__COMPILER_RUNTIME={__proto__:null,c:function(D){return re.H.useMemoCache(D)}},be.cache=function(D){return function(){return D.apply(null,arguments)}},be.cloneElement=function(D,X,ne){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=q({},D.props),de=D.key,Ie=void 0;if(X!=null)for(Se in X.ref!==void 0&&(Ie=void 0),X.key!==void 0&&(de=""+X.key),X)!le.call(X,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&X.ref===void 0||(J[Se]=X[Se]);var Se=arguments.length-2;if(Se===1)J.children=ne;else if(1<Se){for(var xt=Array(Se),it=0;it<Se;it++)xt[it]=arguments[it+2];J.children=xt}return N(D.type,de,void 0,void 0,Ie,J)},be.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},be.createElement=function(D,X,ne){var J,de={},Ie=null;if(X!=null)for(J in X.key!==void 0&&(Ie=""+X.key),X)le.call(X,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(de[J]=X[J]);var Se=arguments.length-2;if(Se===1)de.children=ne;else if(1<Se){for(var xt=Array(Se),it=0;it<Se;it++)xt[it]=arguments[it+2];de.children=xt}if(D&&D.defaultProps)for(J in Se=D.defaultProps,Se)de[J]===void 0&&(de[J]=Se[J]);return N(D,Ie,void 0,void 0,null,de)},be.createRef=function(){return{current:null}},be.forwardRef=function(D){return{$$typeof:p,render:D}},be.isValidElement=C,be.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:te}},be.memo=function(D,X){return{$$typeof:g,type:D,compare:X===void 0?null:X}},be.startTransition=function(D){var X=re.T,ne={};re.T=ne;try{var J=D(),de=re.S;de!==null&&de(ne,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(He,fe)}catch(Ie){fe(Ie)}finally{re.T=X}},be.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},be.use=function(D){return re.H.use(D)},be.useActionState=function(D,X,ne){return re.H.useActionState(D,X,ne)},be.useCallback=function(D,X){return re.H.useCallback(D,X)},be.useContext=function(D){return re.H.useContext(D)},be.useDebugValue=function(){},be.useDeferredValue=function(D,X){return re.H.useDeferredValue(D,X)},be.useEffect=function(D,X,ne){var J=re.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,X)},be.useId=function(){return re.H.useId()},be.useImperativeHandle=function(D,X,ne){return re.H.useImperativeHandle(D,X,ne)},be.useInsertionEffect=function(D,X){return re.H.useInsertionEffect(D,X)},be.useLayoutEffect=function(D,X){return re.H.useLayoutEffect(D,X)},be.useMemo=function(D,X){return re.H.useMemo(D,X)},be.useOptimistic=function(D,X){return re.H.useOptimistic(D,X)},be.useReducer=function(D,X,ne){return re.H.useReducer(D,X,ne)},be.useRef=function(D){return re.H.useRef(D)},be.useState=function(D){return re.H.useState(D)},be.useSyncExternalStore=function(D,X,ne){return re.H.useSyncExternalStore(D,X,ne)},be.useTransition=function(){return re.H.useTransition()},be.version="19.1.0",be}var kE;function sg(){return kE||(kE=1,$p.exports=s1()),$p.exports}var Tt=sg(),Zp={exports:{}},au={},Jp={exports:{}},em={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PE;function r1(){return PE||(PE=1,function(i){function e(j,te){var fe=j.length;j.push(te);e:for(;0<fe;){var He=fe-1>>>1,D=j[He];if(0<a(D,te))j[He]=te,j[fe]=D,fe=He;else break e}}function t(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var te=j[0],fe=j.pop();if(fe!==te){j[0]=fe;e:for(var He=0,D=j.length,X=D>>>1;He<X;){var ne=2*(He+1)-1,J=j[ne],de=ne+1,Ie=j[de];if(0>a(J,fe))de<D&&0>a(Ie,J)?(j[He]=Ie,j[de]=fe,He=de):(j[He]=J,j[ne]=fe,He=ne);else if(de<D&&0>a(Ie,fe))j[He]=Ie,j[de]=fe,He=de;else break e}}return te}function a(j,te){var fe=j.sortIndex-te.sortIndex;return fe!==0?fe:j.id-te.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var m=[],g=[],E=1,S=null,w=3,U=!1,q=!1,Z=!1,W=!1,Te=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;function _e(j){for(var te=t(g);te!==null;){if(te.callback===null)s(g);else if(te.startTime<=j)s(g),te.sortIndex=te.expirationTime,e(m,te);else break;te=t(g)}}function re(j){if(Z=!1,_e(j),!q)if(t(m)!==null)q=!0,le||(le=!0,V());else{var te=t(g);te!==null&&pt(re,te.startTime-j)}}var le=!1,N=-1,b=5,C=-1;function M(){return W?!0:!(i.unstable_now()-C<b)}function k(){if(W=!1,le){var j=i.unstable_now();C=j;var te=!0;try{e:{q=!1,Z&&(Z=!1,ue(N),N=-1),U=!0;var fe=w;try{t:{for(_e(j),S=t(m);S!==null&&!(S.expirationTime>j&&M());){var He=S.callback;if(typeof He=="function"){S.callback=null,w=S.priorityLevel;var D=He(S.expirationTime<=j);if(j=i.unstable_now(),typeof D=="function"){S.callback=D,_e(j),te=!0;break t}S===t(m)&&s(m),_e(j)}else s(m);S=t(m)}if(S!==null)te=!0;else{var X=t(g);X!==null&&pt(re,X.startTime-j),te=!1}}break e}finally{S=null,w=fe,U=!1}te=void 0}}finally{te?V():le=!1}}}var V;if(typeof se=="function")V=function(){se(k)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Kt=I.port2;I.port1.onmessage=k,V=function(){Kt.postMessage(null)}}else V=function(){Te(k,0)};function pt(j,te){N=Te(function(){j(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(j){switch(w){case 1:case 2:case 3:var te=3;break;default:te=w}var fe=w;w=te;try{return j()}finally{w=fe}},i.unstable_requestPaint=function(){W=!0},i.unstable_runWithPriority=function(j,te){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var fe=w;w=j;try{return te()}finally{w=fe}},i.unstable_scheduleCallback=function(j,te,fe){var He=i.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?He+fe:He):fe=He,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=fe+D,j={id:E++,callback:te,priorityLevel:j,startTime:fe,expirationTime:D,sortIndex:-1},fe>He?(j.sortIndex=fe,e(g,j),t(m)===null&&j===t(g)&&(Z?(ue(N),N=-1):Z=!0,pt(re,fe-He))):(j.sortIndex=D,e(m,j),q||U||(q=!0,le||(le=!0,V()))),j},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(j){var te=w;return function(){var fe=w;w=te;try{return j.apply(this,arguments)}finally{w=fe}}}}(em)),em}var VE;function a1(){return VE||(VE=1,Jp.exports=r1()),Jp.exports}var tm={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE;function o1(){if(xE)return rn;xE=1;var i=sg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:S==null?null:""+S,children:m,containerInfo:g,implementation:E}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,rn.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,E)},rn.flushSync=function(m){var g=h.T,E=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=E,s.d.f()}},rn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},rn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,S=p(E,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:U}):E==="script"&&s.d.X(m,{crossOrigin:S,integrity:w,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},rn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,S=p(E,g.crossOrigin);s.d.L(m,E,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rn.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},rn.requestFormReset=function(m){s.d.r(m)},rn.unstable_batchedUpdates=function(m,g){return m(g)},rn.useFormState=function(m,g,E){return h.H.useFormState(m,g,E)},rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},rn.version="19.1.0",rn}var LE;function l1(){if(LE)return tm.exports;LE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),tm.exports=o1(),tm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function u1(){if(UE)return au;UE=1;var i=a1(),e=sg(),t=l1();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function h(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(s(188))}function m(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var d=f.alternate;if(d===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===o)return p(f),n;if(d===u)return p(f),r;d=d.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=d;else{for(var v=!1,T=f.child;T;){if(T===o){v=!0,o=f,u=d;break}if(T===u){v=!0,u=f,o=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===o){v=!0,o=d,u=f;break}if(T===u){v=!0,u=d,o=f;break}T=T.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),se=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var I=Symbol.for("react.client.reference");function Kt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===I?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case q:return"Fragment";case W:return"Profiler";case Z:return"StrictMode";case re:return"Suspense";case le:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case U:return"Portal";case se:return(n.displayName||"Context")+".Provider";case ue:return(n._context.displayName||"Context")+".Consumer";case _e:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case N:return r=n.displayName||null,r!==null?r:Kt(n.type)||"Memo";case b:r=n._payload,n=n._init;try{return Kt(n(r))}catch{}}return null}var pt=Array.isArray,j=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},He=[],D=-1;function X(n){return{current:n}}function ne(n){0>D||(n.current=He[D],He[D]=null,D--)}function J(n,r){D++,He[D]=n.current,n.current=r}var de=X(null),Ie=X(null),Se=X(null),xt=X(null);function it(n,r){switch(J(Se,r),J(Ie,n),J(de,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?sE(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=sE(r),n=rE(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(de),J(de,n)}function ui(){ne(de),ne(Ie),ne(Se)}function As(n){n.memoizedState!==null&&J(xt,n);var r=de.current,o=rE(r,n.type);r!==o&&(J(Ie,n),J(de,o))}function Ui(n){Ie.current===n&&(ne(de),ne(Ie)),xt.current===n&&(ne(xt),eu._currentValue=fe)}var Sr=Object.prototype.hasOwnProperty,Ar=i.unstable_scheduleCallback,wr=i.unstable_cancelCallback,$o=i.unstable_shouldYield,sc=i.unstable_requestPaint,Pn=i.unstable_now,Xf=i.unstable_getCurrentPriorityLevel,Zo=i.unstable_ImmediatePriority,Ra=i.unstable_UserBlockingPriority,br=i.unstable_NormalPriority,$f=i.unstable_LowPriority,Ca=i.unstable_IdlePriority,Jo=i.log,rc=i.unstable_setDisableYieldValue,mt=null,Qe=null;function Sn(n){if(typeof Jo=="function"&&rc(n),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(mt,n)}catch{}}var nn=Math.clz32?Math.clz32:Rr,ac=Math.log,Zf=Math.LN2;function Rr(n){return n>>>=0,n===0?32:31-(ac(n)/Zf|0)|0}var Cr=256,Ir=4194304;function $n(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ia(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,d=n.suspendedLanes,v=n.pingedLanes;n=n.warmLanes;var T=u&134217727;return T!==0?(u=T&~d,u!==0?f=$n(u):(v&=T,v!==0?f=$n(v):o||(o=T&~n,o!==0&&(f=$n(o))))):(T=u&~d,T!==0?f=$n(T):v!==0?f=$n(v):o||(o=u&~n,o!==0&&(f=$n(o)))),f===0?0:r!==0&&r!==f&&(r&d)===0&&(d=f&-f,o=r&-r,d>=o||d===32&&(o&4194048)!==0)?r:f}function Nr(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function el(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tl(){var n=Cr;return Cr<<=1,(Cr&4194048)===0&&(Cr=256),n}function nl(){var n=Ir;return Ir<<=1,(Ir&62914560)===0&&(Ir=4194304),n}function zi(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Bi(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function il(n,r,o,u,f,d){var v=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var T=n.entanglements,R=n.expirationTimes,z=n.hiddenUpdates;for(o=v&~o;0<o;){var G=31-nn(o),Y=1<<G;T[G]=0,R[G]=-1;var B=z[G];if(B!==null)for(z[G]=null,G=0;G<B.length;G++){var F=B[G];F!==null&&(F.lane&=-536870913)}o&=~Y}u!==0&&ci(n,u,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(v&~r))}function ci(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-nn(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function sl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-nn(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function ws(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Na(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function bs(){var n=te.p;return n!==0?n:(n=window.event,n===void 0?32:wE(n.type))}function oc(n,r){var o=te.p;try{return te.p=n,r()}finally{te.p=o}}var ut=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ut,At="__reactProps$"+ut,Vn="__reactContainer$"+ut,rl="__reactEvents$"+ut,Jf="__reactListeners$"+ut,Rs="__reactHandles$"+ut,lc="__reactResources$"+ut,Dr="__reactMarker$"+ut;function Cs(n){delete n[Nt],delete n[At],delete n[rl],delete n[Jf],delete n[Rs]}function Fi(n){var r=n[Nt];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Vn]||o[Nt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=uE(n);n!==null;){if(o=n[Nt])return o;n=uE(n)}return r}n=o,o=n.parentNode}return null}function hi(n){if(n=n[Nt]||n[Vn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function fi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function dn(n){var r=n[lc];return r||(r=n[lc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function yt(n){n[Dr]=!0}var al=new Set,Da={};function Zn(n,r){qi(n,r),qi(n+"Capture",r)}function qi(n,r){for(Da[n]=r,n=0;n<r.length;n++)al.add(r[n])}var uc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cc={},Or={};function hc(n){return Sr.call(Or,n)?!0:Sr.call(cc,n)?!1:uc.test(n)?Or[n]=!0:(cc[n]=!0,!1)}function Is(n,r,o){if(hc(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function di(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Yt(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var Mr,fc;function Hi(n){if(Mr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Mr=r&&r[1]||"",fc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mr+n+fc}var Oa=!1;function Ma(n,r){if(!n||Oa)return"";Oa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(F){var B=F}Reflect.construct(n,[],Y)}else{try{Y.call()}catch(F){B=F}n.call(Y.prototype)}}else{try{throw Error()}catch(F){B=F}(Y=n())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=u.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var R=v.split(`
`),z=T.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===z.length)for(u=R.length-1,f=z.length-1;1<=u&&0<=f&&R[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==z[f]){var G=`
`+R[u].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=u&&0<=f);break}}}finally{Oa=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Hi(o):""}function ol(n){switch(n.tag){case 26:case 27:case 5:return Hi(n.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 15:return Ma(n.type,!1);case 11:return Ma(n.type.render,!1);case 1:return Ma(n.type,!0);case 31:return Hi("Activity");default:return""}}function ka(n){try{var r="";do r+=ol(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ll(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ed(n){var r=ll(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,d.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Pa(n){n._valueTracker||(n._valueTracker=ed(n))}function ul(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=ll(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var td=/[\n"\\]/g;function wt(n){return n.replace(td,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function An(n,r,o,u,f,d,v,T){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+pn(r)):n.value!==""+pn(r)&&(n.value=""+pn(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?Ns(n,v,pn(r)):o!=null?Ns(n,v,pn(o)):u!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+pn(T):n.removeAttribute("name")}function Pr(n,r,o,u,f,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),r!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;o=o!=null?""+pn(o):"",r=r!=null?""+pn(r):o,T||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=T?n.checked:!!u,n.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function Ns(n,r,o){r==="number"&&kr(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function ji(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+pn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function $e(n,r,o){if(r!=null&&(r=""+pn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+pn(o):""}function Vr(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(pt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=pn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function xn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var xr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dc(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||xr.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function cl(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&dc(n,f,u)}else for(var d in r)r.hasOwnProperty(d)&&dc(n,d,r[d])}function hl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),id=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Va(n){return id.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Gi=null;function Ln(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ki=null,Yi=null;function fl(n){var r=hi(n);if(r&&(n=r.stateNode)){var o=n[At]||null;e:switch(n=r.stateNode,r.type){case"input":if(An(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+wt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[At]||null;if(!f)throw Error(s(90));An(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&ul(u)}break e;case"textarea":$e(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ji(n,!!o.multiple,r,!1)}}}var pi=!1;function pc(n,r,o){if(pi)return n(r,o);pi=!0;try{var u=n(r);return u}finally{if(pi=!1,(Ki!==null||Yi!==null)&&(oh(),Ki&&(r=Ki,n=Yi,Yi=Ki=null,fl(r),n)))for(r=0;r<n.length;r++)fl(n[r])}}function Lr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[At]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Un=!1;if(Jn)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){Un=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{Un=!1}var mi=null,Ds=null,Qi=null;function dl(){if(Qi)return Qi;var n,r=Ds,o=r.length,u,f="value"in mi?mi.value:mi.textContent,d=f.length;for(n=0;n<o&&r[n]===f[n];n++);var v=o-n;for(u=1;u<=v&&r[o-u]===f[d-u];u++);return Qi=f.slice(n,1<u?1-u:void 0)}function gi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function _i(){return!0}function pl(){return!1}function Lt(n){function r(o,u,f,d,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_i:pl,this.isPropagationStopped=pl,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),r}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=Lt(Ge),zr=E({},Ge,{view:0,detail:0}),mc=Lt(zr),La,Ua,yi,Br=E({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yi&&(yi&&n.type==="mousemove"?(La=n.screenX-yi.screenX,Ua=n.screenY-yi.screenY):Ua=La=0,yi=n),La)},movementY:function(n){return"movementY"in n?n.movementY:Ua}}),zn=Lt(Br),gc=E({},Br,{dataTransfer:0}),sd=Lt(gc),Fr=E({},zr,{relatedTarget:0}),za=Lt(Fr),ml=E({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),Ba=Lt(ml),_c=E({},Ge,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fa=Lt(_c),rd=E({},Ge,{data:0}),gl=Lt(rd),qr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _l(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=vc[n])?!!r[n]:!1}function Hr(){return _l}var Ec=E({},zr,{key:function(n){if(n.key){var r=qr[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=gi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?yc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(n){return n.type==="keypress"?gi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),qa=Lt(Ec),Tc=E({},Br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yl=Lt(Tc),Wi=E({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),Sc=Lt(Wi),Ac=E({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),wc=Lt(Ac),bc=E({},Br,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ha=Lt(bc),mn=E({},Ge,{newState:0,oldState:0}),Rc=Lt(mn),Cc=[9,13,27,32],vi=Jn&&"CompositionEvent"in window,c=null;Jn&&"documentMode"in document&&(c=document.documentMode);var _=Jn&&"TextEvent"in window&&!c,y=Jn&&(!vi||c&&8<c&&11>=c),A=" ",x=!1;function H(n,r){switch(n){case"keyup":return Cc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ee(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ve=!1;function Dt(n,r){switch(n){case"compositionend":return ee(r);case"keypress":return r.which!==32?null:(x=!0,A);case"textInput":return n=r.data,n===A&&x?null:n;default:return null}}function xe(n,r){if(Ve)return n==="compositionend"||!vi&&H(n,r)?(n=dl(),Qi=Ds=mi=null,Ve=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Ut={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ot(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Ut[n.type]:r==="textarea"}function Xi(n,r,o,u){Ki?Yi?Yi.push(u):Yi=[u]:Ki=u,r=dh(r,"onChange"),0<r.length&&(o=new xa("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Qt=null,Ei=null;function vl(n){Jv(n,0)}function Ic(n){var r=fi(n);if(ul(r))return n}function E_(n,r){if(n==="change")return r}var T_=!1;if(Jn){var ad;if(Jn){var od="oninput"in document;if(!od){var S_=document.createElement("div");S_.setAttribute("oninput","return;"),od=typeof S_.oninput=="function"}ad=od}else ad=!1;T_=ad&&(!document.documentMode||9<document.documentMode)}function A_(){Qt&&(Qt.detachEvent("onpropertychange",w_),Ei=Qt=null)}function w_(n){if(n.propertyName==="value"&&Ic(Ei)){var r=[];Xi(r,Ei,n,Ln(n)),pc(vl,r)}}function Mb(n,r,o){n==="focusin"?(A_(),Qt=r,Ei=o,Qt.attachEvent("onpropertychange",w_)):n==="focusout"&&A_()}function kb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ic(Ei)}function Pb(n,r){if(n==="click")return Ic(r)}function Vb(n,r){if(n==="input"||n==="change")return Ic(r)}function xb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var wn=typeof Object.is=="function"?Object.is:xb;function El(n,r){if(wn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Sr.call(r,f)||!wn(n[f],r[f]))return!1}return!0}function b_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function R_(n,r){var o=b_(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=b_(o)}}function C_(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?C_(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function I_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=kr(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=kr(n.document)}return r}function ld(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Lb=Jn&&"documentMode"in document&&11>=document.documentMode,ja=null,ud=null,Tl=null,cd=!1;function N_(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cd||ja==null||ja!==kr(u)||(u=ja,"selectionStart"in u&&ld(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Tl&&El(Tl,u)||(Tl=u,u=dh(ud,"onSelect"),0<u.length&&(r=new xa("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=ja)))}function jr(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ga={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionrun:jr("Transition","TransitionRun"),transitionstart:jr("Transition","TransitionStart"),transitioncancel:jr("Transition","TransitionCancel"),transitionend:jr("Transition","TransitionEnd")},hd={},D_={};Jn&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function Gr(n){if(hd[n])return hd[n];if(!Ga[n])return n;var r=Ga[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in D_)return hd[n]=r[o];return n}var O_=Gr("animationend"),M_=Gr("animationiteration"),k_=Gr("animationstart"),Ub=Gr("transitionrun"),zb=Gr("transitionstart"),Bb=Gr("transitioncancel"),P_=Gr("transitionend"),V_=new Map,fd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fd.push("scrollEnd");function ei(n,r){V_.set(n,r),Zn(r,[n])}var x_=new WeakMap;function Bn(n,r){if(typeof n=="object"&&n!==null){var o=x_.get(n);return o!==void 0?o:(r={value:n,source:r,stack:ka(r)},x_.set(n,r),r)}return{value:n,source:r,stack:ka(r)}}var Fn=[],Ka=0,dd=0;function Nc(){for(var n=Ka,r=dd=Ka=0;r<n;){var o=Fn[r];Fn[r++]=null;var u=Fn[r];Fn[r++]=null;var f=Fn[r];Fn[r++]=null;var d=Fn[r];if(Fn[r++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}d!==0&&L_(o,f,d)}}function Dc(n,r,o,u){Fn[Ka++]=n,Fn[Ka++]=r,Fn[Ka++]=o,Fn[Ka++]=u,dd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function pd(n,r,o,u){return Dc(n,r,o,u),Oc(n)}function Ya(n,r){return Dc(n,null,null,r),Oc(n)}function L_(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,d=n.return;d!==null;)d.childLanes|=o,u=d.alternate,u!==null&&(u.childLanes|=o),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&r!==null&&(f=31-nn(o),n=d.hiddenUpdates,u=n[f],u===null?n[f]=[r]:u.push(r),r.lane=o|536870912),d):null}function Oc(n){if(50<Kl)throw Kl=0,Ep=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Qa={};function Fb(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(n,r,o,u){return new Fb(n,r,o,u)}function md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $i(n,r){var o=n.alternate;return o===null?(o=bn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function U_(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Mc(n,r,o,u,f,d){var v=0;if(u=n,typeof n=="function")md(n)&&(v=1);else if(typeof n=="string")v=HR(n,o,de.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=bn(31,o,r,f),n.elementType=C,n.lanes=d,n;case q:return Kr(o.children,f,d,r);case Z:v=8,f|=24;break;case W:return n=bn(12,o,r,f|2),n.elementType=W,n.lanes=d,n;case re:return n=bn(13,o,r,f),n.elementType=re,n.lanes=d,n;case le:return n=bn(19,o,r,f),n.elementType=le,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Te:case se:v=10;break e;case ue:v=9;break e;case _e:v=11;break e;case N:v=14;break e;case b:v=16,u=null;break e}v=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=bn(v,o,r,f),r.elementType=n,r.type=u,r.lanes=d,r}function Kr(n,r,o,u){return n=bn(7,n,u,r),n.lanes=o,n}function gd(n,r,o){return n=bn(6,n,null,r),n.lanes=o,n}function _d(n,r,o){return r=bn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Wa=[],Xa=0,kc=null,Pc=0,qn=[],Hn=0,Yr=null,Zi=1,Ji="";function Qr(n,r){Wa[Xa++]=Pc,Wa[Xa++]=kc,kc=n,Pc=r}function z_(n,r,o){qn[Hn++]=Zi,qn[Hn++]=Ji,qn[Hn++]=Yr,Yr=n;var u=Zi;n=Ji;var f=32-nn(u)-1;u&=~(1<<f),o+=1;var d=32-nn(r)+f;if(30<d){var v=f-f%5;d=(u&(1<<v)-1).toString(32),u>>=v,f-=v,Zi=1<<32-nn(r)+f|o<<f|u,Ji=d+n}else Zi=1<<d|o<<f|u,Ji=n}function yd(n){n.return!==null&&(Qr(n,1),z_(n,1,0))}function vd(n){for(;n===kc;)kc=Wa[--Xa],Wa[Xa]=null,Pc=Wa[--Xa],Wa[Xa]=null;for(;n===Yr;)Yr=qn[--Hn],qn[Hn]=null,Ji=qn[--Hn],qn[Hn]=null,Zi=qn[--Hn],qn[Hn]=null}var gn=null,gt=null,je=!1,Wr=null,Ti=!1,Ed=Error(s(519));function Xr(n){var r=Error(s(418,""));throw wl(Bn(r,n)),Ed}function B_(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Nt]=n,r[At]=u,o){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(o=0;o<Ql.length;o++)Oe(Ql[o],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Oe("invalid",r),Pr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Pa(r);break;case"select":Oe("invalid",r);break;case"textarea":Oe("invalid",r),Vr(r,u.value,u.defaultValue,u.children),Pa(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||iE(r.textContent,o)?(u.popover!=null&&(Oe("beforetoggle",r),Oe("toggle",r)),u.onScroll!=null&&Oe("scroll",r),u.onScrollEnd!=null&&Oe("scrollend",r),u.onClick!=null&&(r.onclick=ph),r=!0):r=!1,r||Xr(n)}function F_(n){for(gn=n.return;gn;)switch(gn.tag){case 5:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:gn=gn.return}}function Sl(n){if(n!==gn)return!1;if(!je)return F_(n),je=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||xp(n.type,n.memoizedProps)),o=!o),o&&gt&&Xr(n),F_(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){gt=ni(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}gt=null}}else r===27?(r=gt,Ks(n.type)?(n=Bp,Bp=null,gt=n):gt=r):gt=gn?ni(n.stateNode.nextSibling):null;return!0}function Al(){gt=gn=null,je=!1}function q_(){var n=Wr;return n!==null&&(vn===null?vn=n:vn.push.apply(vn,n),Wr=null),n}function wl(n){Wr===null?Wr=[n]:Wr.push(n)}var Td=X(null),$r=null,es=null;function Os(n,r,o){J(Td,r._currentValue),r._currentValue=o}function ts(n){n._currentValue=Td.current,ne(Td)}function Sd(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Ad(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var R=0;R<r.length;R++)if(T.context===r[R]){d.lanes|=o,T=d.alternate,T!==null&&(T.lanes|=o),Sd(d.return,o,n),u||(v=null);break e}d=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=o,d=v.alternate,d!==null&&(d.lanes|=o),Sd(v,o,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function bl(n,r,o,u){n=null;for(var f=r,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=f.type;wn(f.pendingProps.value,v.value)||(n!==null?n.push(T):n=[T])}}else if(f===xt.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(eu):n=[eu])}f=f.return}n!==null&&Ad(r,n,o,u),r.flags|=262144}function Vc(n){for(n=n.firstContext;n!==null;){if(!wn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Zr(n){$r=n,es=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function sn(n){return H_($r,n)}function xc(n,r){return $r===null&&Zr(n),H_(n,r)}function H_(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},es===null){if(n===null)throw Error(s(308));es=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else es=es.next=r;return o}var qb=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},Hb=i.unstable_scheduleCallback,jb=i.unstable_NormalPriority,Mt={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wd(){return{controller:new qb,data:new Map,refCount:0}}function Rl(n){n.refCount--,n.refCount===0&&Hb(jb,function(){n.controller.abort()})}var Cl=null,bd=0,$a=0,Za=null;function Gb(n,r){if(Cl===null){var o=Cl=[];bd=0,$a=Cp(),Za={status:"pending",value:void 0,then:function(u){o.push(u)}}}return bd++,r.then(j_,j_),r}function j_(){if(--bd===0&&Cl!==null){Za!==null&&(Za.status="fulfilled");var n=Cl;Cl=null,$a=0,Za=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Kb(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var G_=j.S;j.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Gb(n,r),G_!==null&&G_(n,r)};var Jr=X(null);function Rd(){var n=Jr.current;return n!==null?n:st.pooledCache}function Lc(n,r){r===null?J(Jr,Jr.current):J(Jr,r.pool)}function K_(){var n=Rd();return n===null?null:{parent:Mt._currentValue,pool:n}}var Il=Error(s(460)),Y_=Error(s(474)),Uc=Error(s(542)),Cd={then:function(){}};function Q_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function zc(){}function W_(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(zc,zc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,$_(n),n;default:if(typeof r.status=="string")r.then(zc,zc);else{if(n=st,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,$_(n),n}throw Nl=r,Il}}var Nl=null;function X_(){if(Nl===null)throw Error(s(459));var n=Nl;return Nl=null,n}function $_(n){if(n===Il||n===Uc)throw Error(s(483))}var Ms=!1;function Id(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ks(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ps(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(We&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Oc(n),L_(n,null,o),r}return Dc(n,u,r,o),Oc(n)}function Dl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,sl(n,o)}}function Dd(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,o=o.next}while(o!==null);d===null?f=d=r:d=d.next=r}else f=d=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var Od=!1;function Ol(){if(Od){var n=Za;if(n!==null)throw n}}function Ml(n,r,o,u){Od=!1;var f=n.updateQueue;Ms=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var R=T,z=R.next;R.next=null,v===null?d=z:v.next=z,v=R;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=z:T.next=z,G.lastBaseUpdate=R))}if(d!==null){var Y=f.baseState;v=0,G=z=R=null,T=d;do{var B=T.lane&-536870913,F=B!==T.lane;if(F?(Le&B)===B:(u&B)===B){B!==0&&B===$a&&(Od=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ee=n,me=T;B=r;var et=o;switch(me.tag){case 1:if(Ee=me.payload,typeof Ee=="function"){Y=Ee.call(et,Y,B);break e}Y=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=me.payload,B=typeof Ee=="function"?Ee.call(et,Y,B):Ee,B==null)break e;Y=E({},Y,B);break e;case 2:Ms=!0}}B=T.callback,B!==null&&(n.flags|=64,F&&(n.flags|=8192),F=f.callbacks,F===null?f.callbacks=[B]:F.push(B))}else F={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(z=G=F,R=Y):G=G.next=F,v|=B;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;F=T,T=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);G===null&&(R=Y),f.baseState=R,f.firstBaseUpdate=z,f.lastBaseUpdate=G,d===null&&(f.shared.lanes=0),qs|=v,n.lanes=v,n.memoizedState=Y}}function Z_(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function J_(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Z_(o[n],r)}var Ja=X(null),Bc=X(0);function ey(n,r){n=ls,J(Bc,n),J(Ja,r),ls=n|r.baseLanes}function Md(){J(Bc,ls),J(Ja,Ja.current)}function kd(){ls=Bc.current,ne(Ja),ne(Bc)}var Vs=0,Re=null,Ze=null,bt=null,Fc=!1,eo=!1,ea=!1,qc=0,kl=0,to=null,Yb=0;function vt(){throw Error(s(321))}function Pd(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!wn(n[o],r[o]))return!1;return!0}function Vd(n,r,o,u,f,d){return Vs=d,Re=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,j.H=n===null||n.memoizedState===null?Ly:Uy,ea=!1,d=o(u,f),ea=!1,eo&&(d=ny(r,o,u,f)),ty(n),d}function ty(n){j.H=Qc;var r=Ze!==null&&Ze.next!==null;if(Vs=0,bt=Ze=Re=null,Fc=!1,kl=0,to=null,r)throw Error(s(300));n===null||zt||(n=n.dependencies,n!==null&&Vc(n)&&(zt=!0))}function ny(n,r,o,u){Re=n;var f=0;do{if(eo&&(to=null),kl=0,eo=!1,25<=f)throw Error(s(301));if(f+=1,bt=Ze=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}j.H=eR,d=r(o,u)}while(eo);return d}function Qb(){var n=j.H,r=n.useState()[0];return r=typeof r.then=="function"?Pl(r):r,n=n.useState()[0],(Ze!==null?Ze.memoizedState:null)!==n&&(Re.flags|=1024),r}function xd(){var n=qc!==0;return qc=0,n}function Ld(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function Ud(n){if(Fc){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Fc=!1}Vs=0,bt=Ze=Re=null,eo=!1,kl=qc=0,to=null}function _n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Re.memoizedState=bt=n:bt=bt.next=n,bt}function Rt(){if(Ze===null){var n=Re.alternate;n=n!==null?n.memoizedState:null}else n=Ze.next;var r=bt===null?Re.memoizedState:bt.next;if(r!==null)bt=r,Ze=n;else{if(n===null)throw Re.alternate===null?Error(s(467)):Error(s(310));Ze=n,n={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},bt===null?Re.memoizedState=bt=n:bt=bt.next=n}return bt}function zd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(n){var r=kl;return kl+=1,to===null&&(to=[]),n=W_(to,n,r),r=Re,(bt===null?r.memoizedState:bt.next)===null&&(r=r.alternate,j.H=r===null||r.memoizedState===null?Ly:Uy),n}function Hc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Pl(n);if(n.$$typeof===se)return sn(n)}throw Error(s(438,String(n)))}function Bd(n){var r=null,o=Re.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Re.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=zd(),Re.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=M;return r.index++,o}function ns(n,r){return typeof r=="function"?r(n):r}function jc(n){var r=Rt();return Fd(r,Ze,n)}function Fd(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,d=u.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}r.baseQueue=f=d,u.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{r=f.next;var T=v=null,R=null,z=r,G=!1;do{var Y=z.lane&-536870913;if(Y!==z.lane?(Le&Y)===Y:(Vs&Y)===Y){var B=z.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Y===$a&&(G=!0);else if((Vs&B)===B){z=z.next,B===$a&&(G=!0);continue}else Y={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(T=R=Y,v=d):R=R.next=Y,Re.lanes|=B,qs|=B;Y=z.action,ea&&o(d,Y),d=z.hasEagerState?z.eagerState:o(d,Y)}else B={lane:Y,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(T=R=B,v=d):R=R.next=B,Re.lanes|=Y,qs|=Y;z=z.next}while(z!==null&&z!==r);if(R===null?v=d:R.next=T,!wn(d,n.memoizedState)&&(zt=!0,G&&(o=Za,o!==null)))throw o;n.memoizedState=d,n.baseState=v,n.baseQueue=R,u.lastRenderedState=d}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function qd(n){var r=Rt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,d=r.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do d=n(d,v.action),v=v.next;while(v!==f);wn(d,r.memoizedState)||(zt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),o.lastRenderedState=d}return[d,u]}function iy(n,r,o){var u=Re,f=Rt(),d=je;if(d){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!wn((Ze||f).memoizedState,o);v&&(f.memoizedState=o,zt=!0),f=f.queue;var T=ay.bind(null,u,f,n);if(Vl(2048,8,T,[n]),f.getSnapshot!==r||v||bt!==null&&bt.memoizedState.tag&1){if(u.flags|=2048,no(9,Gc(),ry.bind(null,u,f,o,r),null),st===null)throw Error(s(349));d||(Vs&124)!==0||sy(u,r,o)}return o}function sy(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Re.updateQueue,r===null?(r=zd(),Re.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function ry(n,r,o,u){r.value=o,r.getSnapshot=u,oy(r)&&ly(n)}function ay(n,r,o){return o(function(){oy(r)&&ly(n)})}function oy(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!wn(n,o)}catch{return!0}}function ly(n){var r=Ya(n,2);r!==null&&Dn(r,n,2)}function Hd(n){var r=_n();if(typeof n=="function"){var o=n;if(n=o(),ea){Sn(!0);try{o()}finally{Sn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:n},r}function uy(n,r,o,u){return n.baseState=o,Fd(n,Ze,typeof u=="function"?u:ns)}function Wb(n,r,o,u,f){if(Yc(n))throw Error(s(485));if(n=r.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};j.T!==null?o(!0):d.isTransition=!1,u(d),o=r.pending,o===null?(d.next=r.pending=d,cy(r,d)):(d.next=o.next,r.pending=o.next=d)}}function cy(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var d=j.T,v={};j.T=v;try{var T=o(f,u),R=j.S;R!==null&&R(v,T),hy(n,r,T)}catch(z){jd(n,r,z)}finally{j.T=d}}else try{d=o(f,u),hy(n,r,d)}catch(z){jd(n,r,z)}}function hy(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){fy(n,r,u)},function(u){return jd(n,r,u)}):fy(n,r,o)}function fy(n,r,o){r.status="fulfilled",r.value=o,dy(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,cy(n,o)))}function jd(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,dy(r),r=r.next;while(r!==u)}n.action=null}function dy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function py(n,r){return r}function my(n,r){if(je){var o=st.formState;if(o!==null){e:{var u=Re;if(je){if(gt){t:{for(var f=gt,d=Ti;f.nodeType!==8;){if(!d){f=null;break t}if(f=ni(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){gt=ni(f.nextSibling),u=f.data==="F!";break e}}Xr(u)}u=!1}u&&(r=o[0])}}return o=_n(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:py,lastRenderedState:r},o.queue=u,o=Py.bind(null,Re,u),u.dispatch=o,u=Hd(!1),d=Wd.bind(null,Re,!1,u.queue),u=_n(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=Wb.bind(null,Re,f,d,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function gy(n){var r=Rt();return _y(r,Ze,n)}function _y(n,r,o){if(r=Fd(n,r,py)[0],n=jc(ns)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Pl(r)}catch(v){throw v===Il?Uc:v}else u=r;r=Rt();var f=r.queue,d=f.dispatch;return o!==r.memoizedState&&(Re.flags|=2048,no(9,Gc(),Xb.bind(null,f,o),null)),[u,d,n]}function Xb(n,r){n.action=r}function yy(n){var r=Rt(),o=Ze;if(o!==null)return _y(r,o,n);Rt(),r=r.memoizedState,o=Rt();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function no(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Re.updateQueue,r===null&&(r=zd(),Re.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Gc(){return{destroy:void 0,resource:void 0}}function vy(){return Rt().memoizedState}function Kc(n,r,o,u){var f=_n();u=u===void 0?null:u,Re.flags|=n,f.memoizedState=no(1|r,Gc(),o,u)}function Vl(n,r,o,u){var f=Rt();u=u===void 0?null:u;var d=f.memoizedState.inst;Ze!==null&&u!==null&&Pd(u,Ze.memoizedState.deps)?f.memoizedState=no(r,d,o,u):(Re.flags|=n,f.memoizedState=no(1|r,d,o,u))}function Ey(n,r){Kc(8390656,8,n,r)}function Ty(n,r){Vl(2048,8,n,r)}function Sy(n,r){return Vl(4,2,n,r)}function Ay(n,r){return Vl(4,4,n,r)}function wy(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function by(n,r,o){o=o!=null?o.concat([n]):null,Vl(4,4,wy.bind(null,r,n),o)}function Gd(){}function Ry(n,r){var o=Rt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Pd(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Cy(n,r){var o=Rt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Pd(r,u[1]))return u[0];if(u=n(),ea){Sn(!0);try{n()}finally{Sn(!1)}}return o.memoizedState=[u,r],u}function Kd(n,r,o){return o===void 0||(Vs&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=Dv(),Re.lanes|=n,qs|=n,o)}function Iy(n,r,o,u){return wn(o,r)?o:Ja.current!==null?(n=Kd(n,o,u),wn(n,r)||(zt=!0),n):(Vs&42)===0?(zt=!0,n.memoizedState=o):(n=Dv(),Re.lanes|=n,qs|=n,r)}function Ny(n,r,o,u,f){var d=te.p;te.p=d!==0&&8>d?d:8;var v=j.T,T={};j.T=T,Wd(n,!1,r,o);try{var R=f(),z=j.S;if(z!==null&&z(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var G=Kb(R,u);xl(n,r,G,Nn(n))}else xl(n,r,u,Nn(n))}catch(Y){xl(n,r,{then:function(){},status:"rejected",reason:Y},Nn())}finally{te.p=d,j.T=v}}function $b(){}function Yd(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=Dy(n).queue;Ny(n,f,r,fe,o===null?$b:function(){return Oy(n),o(u)})}function Dy(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:fe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Oy(n){var r=Dy(n).next.queue;xl(n,r,{},Nn())}function Qd(){return sn(eu)}function My(){return Rt().memoizedState}function ky(){return Rt().memoizedState}function Zb(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Nn();n=ks(o);var u=Ps(r,n,o);u!==null&&(Dn(u,r,o),Dl(u,r,o)),r={cache:wd()},n.payload=r;return}r=r.return}}function Jb(n,r,o){var u=Nn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Yc(n)?Vy(r,o):(o=pd(n,r,o,u),o!==null&&(Dn(o,n,u),xy(o,r,u)))}function Py(n,r,o){var u=Nn();xl(n,r,o,u)}function xl(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Yc(n))Vy(r,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,T=d(v,o);if(f.hasEagerState=!0,f.eagerState=T,wn(T,v))return Dc(n,r,f,0),st===null&&Nc(),!1}catch{}finally{}if(o=pd(n,r,f,u),o!==null)return Dn(o,n,u),xy(o,r,u),!0}return!1}function Wd(n,r,o,u){if(u={lane:2,revertLane:Cp(),action:u,hasEagerState:!1,eagerState:null,next:null},Yc(n)){if(r)throw Error(s(479))}else r=pd(n,o,u,2),r!==null&&Dn(r,n,2)}function Yc(n){var r=n.alternate;return n===Re||r!==null&&r===Re}function Vy(n,r){eo=Fc=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function xy(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,sl(n,o)}}var Qc={readContext:sn,use:Hc,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useLayoutEffect:vt,useInsertionEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useSyncExternalStore:vt,useId:vt,useHostTransitionStatus:vt,useFormState:vt,useActionState:vt,useOptimistic:vt,useMemoCache:vt,useCacheRefresh:vt},Ly={readContext:sn,use:Hc,useCallback:function(n,r){return _n().memoizedState=[n,r===void 0?null:r],n},useContext:sn,useEffect:Ey,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,Kc(4194308,4,wy.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Kc(4194308,4,n,r)},useInsertionEffect:function(n,r){Kc(4,2,n,r)},useMemo:function(n,r){var o=_n();r=r===void 0?null:r;var u=n();if(ea){Sn(!0);try{n()}finally{Sn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=_n();if(o!==void 0){var f=o(r);if(ea){Sn(!0);try{o(r)}finally{Sn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=Jb.bind(null,Re,n),[u.memoizedState,n]},useRef:function(n){var r=_n();return n={current:n},r.memoizedState=n},useState:function(n){n=Hd(n);var r=n.queue,o=Py.bind(null,Re,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:Gd,useDeferredValue:function(n,r){var o=_n();return Kd(o,n,r)},useTransition:function(){var n=Hd(!1);return n=Ny.bind(null,Re,n.queue,!0,!1),_n().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Re,f=_n();if(je){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),st===null)throw Error(s(349));(Le&124)!==0||sy(u,r,o)}f.memoizedState=o;var d={value:o,getSnapshot:r};return f.queue=d,Ey(ay.bind(null,u,d,n),[n]),u.flags|=2048,no(9,Gc(),ry.bind(null,u,d,o,r),null),o},useId:function(){var n=_n(),r=st.identifierPrefix;if(je){var o=Ji,u=Zi;o=(u&~(1<<32-nn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=qc++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=Yb++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Qd,useFormState:my,useActionState:my,useOptimistic:function(n){var r=_n();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Wd.bind(null,Re,!0,o),o.dispatch=r,[n,r]},useMemoCache:Bd,useCacheRefresh:function(){return _n().memoizedState=Zb.bind(null,Re)}},Uy={readContext:sn,use:Hc,useCallback:Ry,useContext:sn,useEffect:Ty,useImperativeHandle:by,useInsertionEffect:Sy,useLayoutEffect:Ay,useMemo:Cy,useReducer:jc,useRef:vy,useState:function(){return jc(ns)},useDebugValue:Gd,useDeferredValue:function(n,r){var o=Rt();return Iy(o,Ze.memoizedState,n,r)},useTransition:function(){var n=jc(ns)[0],r=Rt().memoizedState;return[typeof n=="boolean"?n:Pl(n),r]},useSyncExternalStore:iy,useId:My,useHostTransitionStatus:Qd,useFormState:gy,useActionState:gy,useOptimistic:function(n,r){var o=Rt();return uy(o,Ze,n,r)},useMemoCache:Bd,useCacheRefresh:ky},eR={readContext:sn,use:Hc,useCallback:Ry,useContext:sn,useEffect:Ty,useImperativeHandle:by,useInsertionEffect:Sy,useLayoutEffect:Ay,useMemo:Cy,useReducer:qd,useRef:vy,useState:function(){return qd(ns)},useDebugValue:Gd,useDeferredValue:function(n,r){var o=Rt();return Ze===null?Kd(o,n,r):Iy(o,Ze.memoizedState,n,r)},useTransition:function(){var n=qd(ns)[0],r=Rt().memoizedState;return[typeof n=="boolean"?n:Pl(n),r]},useSyncExternalStore:iy,useId:My,useHostTransitionStatus:Qd,useFormState:yy,useActionState:yy,useOptimistic:function(n,r){var o=Rt();return Ze!==null?uy(o,Ze,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Bd,useCacheRefresh:ky},io=null,Ll=0;function Wc(n){var r=Ll;return Ll+=1,io===null&&(io=[]),W_(io,n,r)}function Ul(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Xc(n,r){throw r.$$typeof===S?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function zy(n){var r=n._init;return r(n._payload)}function By(n){function r(P,O){if(n){var L=P.deletions;L===null?(P.deletions=[O],P.flags|=16):L.push(O)}}function o(P,O){if(!n)return null;for(;O!==null;)r(P,O),O=O.sibling;return null}function u(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function f(P,O){return P=$i(P,O),P.index=0,P.sibling=null,P}function d(P,O,L){return P.index=L,n?(L=P.alternate,L!==null?(L=L.index,L<O?(P.flags|=67108866,O):L):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function T(P,O,L,K){return O===null||O.tag!==6?(O=gd(L,P.mode,K),O.return=P,O):(O=f(O,L),O.return=P,O)}function R(P,O,L,K){var oe=L.type;return oe===q?G(P,O,L.props.children,K,L.key):O!==null&&(O.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===b&&zy(oe)===O.type)?(O=f(O,L.props),Ul(O,L),O.return=P,O):(O=Mc(L.type,L.key,L.props,null,P.mode,K),Ul(O,L),O.return=P,O)}function z(P,O,L,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=_d(L,P.mode,K),O.return=P,O):(O=f(O,L.children||[]),O.return=P,O)}function G(P,O,L,K,oe){return O===null||O.tag!==7?(O=Kr(L,P.mode,K,oe),O.return=P,O):(O=f(O,L),O.return=P,O)}function Y(P,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=gd(""+O,P.mode,L),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return L=Mc(O.type,O.key,O.props,null,P.mode,L),Ul(L,O),L.return=P,L;case U:return O=_d(O,P.mode,L),O.return=P,O;case b:var K=O._init;return O=K(O._payload),Y(P,O,L)}if(pt(O)||V(O))return O=Kr(O,P.mode,L,null),O.return=P,O;if(typeof O.then=="function")return Y(P,Wc(O),L);if(O.$$typeof===se)return Y(P,xc(P,O),L);Xc(P,O)}return null}function B(P,O,L,K){var oe=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return oe!==null?null:T(P,O,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case w:return L.key===oe?R(P,O,L,K):null;case U:return L.key===oe?z(P,O,L,K):null;case b:return oe=L._init,L=oe(L._payload),B(P,O,L,K)}if(pt(L)||V(L))return oe!==null?null:G(P,O,L,K,null);if(typeof L.then=="function")return B(P,O,Wc(L),K);if(L.$$typeof===se)return B(P,O,xc(P,L),K);Xc(P,L)}return null}function F(P,O,L,K,oe){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(L)||null,T(O,P,""+K,oe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case w:return P=P.get(K.key===null?L:K.key)||null,R(O,P,K,oe);case U:return P=P.get(K.key===null?L:K.key)||null,z(O,P,K,oe);case b:var Ne=K._init;return K=Ne(K._payload),F(P,O,L,K,oe)}if(pt(K)||V(K))return P=P.get(L)||null,G(O,P,K,oe,null);if(typeof K.then=="function")return F(P,O,L,Wc(K),oe);if(K.$$typeof===se)return F(P,O,L,xc(O,K),oe);Xc(O,K)}return null}function Ee(P,O,L,K){for(var oe=null,Ne=null,ce=O,ge=O=0,Ft=null;ce!==null&&ge<L.length;ge++){ce.index>ge?(Ft=ce,ce=null):Ft=ce.sibling;var Fe=B(P,ce,L[ge],K);if(Fe===null){ce===null&&(ce=Ft);break}n&&ce&&Fe.alternate===null&&r(P,ce),O=d(Fe,O,ge),Ne===null?oe=Fe:Ne.sibling=Fe,Ne=Fe,ce=Ft}if(ge===L.length)return o(P,ce),je&&Qr(P,ge),oe;if(ce===null){for(;ge<L.length;ge++)ce=Y(P,L[ge],K),ce!==null&&(O=d(ce,O,ge),Ne===null?oe=ce:Ne.sibling=ce,Ne=ce);return je&&Qr(P,ge),oe}for(ce=u(ce);ge<L.length;ge++)Ft=F(ce,P,ge,L[ge],K),Ft!==null&&(n&&Ft.alternate!==null&&ce.delete(Ft.key===null?ge:Ft.key),O=d(Ft,O,ge),Ne===null?oe=Ft:Ne.sibling=Ft,Ne=Ft);return n&&ce.forEach(function($s){return r(P,$s)}),je&&Qr(P,ge),oe}function me(P,O,L,K){if(L==null)throw Error(s(151));for(var oe=null,Ne=null,ce=O,ge=O=0,Ft=null,Fe=L.next();ce!==null&&!Fe.done;ge++,Fe=L.next()){ce.index>ge?(Ft=ce,ce=null):Ft=ce.sibling;var $s=B(P,ce,Fe.value,K);if($s===null){ce===null&&(ce=Ft);break}n&&ce&&$s.alternate===null&&r(P,ce),O=d($s,O,ge),Ne===null?oe=$s:Ne.sibling=$s,Ne=$s,ce=Ft}if(Fe.done)return o(P,ce),je&&Qr(P,ge),oe;if(ce===null){for(;!Fe.done;ge++,Fe=L.next())Fe=Y(P,Fe.value,K),Fe!==null&&(O=d(Fe,O,ge),Ne===null?oe=Fe:Ne.sibling=Fe,Ne=Fe);return je&&Qr(P,ge),oe}for(ce=u(ce);!Fe.done;ge++,Fe=L.next())Fe=F(ce,P,ge,Fe.value,K),Fe!==null&&(n&&Fe.alternate!==null&&ce.delete(Fe.key===null?ge:Fe.key),O=d(Fe,O,ge),Ne===null?oe=Fe:Ne.sibling=Fe,Ne=Fe);return n&&ce.forEach(function(t1){return r(P,t1)}),je&&Qr(P,ge),oe}function et(P,O,L,K){if(typeof L=="object"&&L!==null&&L.type===q&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case w:e:{for(var oe=L.key;O!==null;){if(O.key===oe){if(oe=L.type,oe===q){if(O.tag===7){o(P,O.sibling),K=f(O,L.props.children),K.return=P,P=K;break e}}else if(O.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===b&&zy(oe)===O.type){o(P,O.sibling),K=f(O,L.props),Ul(K,L),K.return=P,P=K;break e}o(P,O);break}else r(P,O);O=O.sibling}L.type===q?(K=Kr(L.props.children,P.mode,K,L.key),K.return=P,P=K):(K=Mc(L.type,L.key,L.props,null,P.mode,K),Ul(K,L),K.return=P,P=K)}return v(P);case U:e:{for(oe=L.key;O!==null;){if(O.key===oe)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){o(P,O.sibling),K=f(O,L.children||[]),K.return=P,P=K;break e}else{o(P,O);break}else r(P,O);O=O.sibling}K=_d(L,P.mode,K),K.return=P,P=K}return v(P);case b:return oe=L._init,L=oe(L._payload),et(P,O,L,K)}if(pt(L))return Ee(P,O,L,K);if(V(L)){if(oe=V(L),typeof oe!="function")throw Error(s(150));return L=oe.call(L),me(P,O,L,K)}if(typeof L.then=="function")return et(P,O,Wc(L),K);if(L.$$typeof===se)return et(P,O,xc(P,L),K);Xc(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,O!==null&&O.tag===6?(o(P,O.sibling),K=f(O,L),K.return=P,P=K):(o(P,O),K=gd(L,P.mode,K),K.return=P,P=K),v(P)):o(P,O)}return function(P,O,L,K){try{Ll=0;var oe=et(P,O,L,K);return io=null,oe}catch(ce){if(ce===Il||ce===Uc)throw ce;var Ne=bn(29,ce,null,P.mode);return Ne.lanes=K,Ne.return=P,Ne}finally{}}}var so=By(!0),Fy=By(!1),jn=X(null),Si=null;function xs(n){var r=n.alternate;J(kt,kt.current&1),J(jn,n),Si===null&&(r===null||Ja.current!==null||r.memoizedState!==null)&&(Si=n)}function qy(n){if(n.tag===22){if(J(kt,kt.current),J(jn,n),Si===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Si=n)}}else Ls()}function Ls(){J(kt,kt.current),J(jn,jn.current)}function is(n){ne(jn),Si===n&&(Si=null),ne(kt)}var kt=X(0);function $c(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||zp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Xd(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:E({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var $d={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Nn(),f=ks(u);f.payload=r,o!=null&&(f.callback=o),r=Ps(n,f,u),r!==null&&(Dn(r,n,u),Dl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Nn(),f=ks(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Ps(n,f,u),r!==null&&(Dn(r,n,u),Dl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Nn(),u=ks(o);u.tag=2,r!=null&&(u.callback=r),r=Ps(n,u,o),r!==null&&(Dn(r,n,o),Dl(r,n,o))}};function Hy(n,r,o,u,f,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,d,v):r.prototype&&r.prototype.isPureReactComponent?!El(o,u)||!El(f,d):!0}function jy(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&$d.enqueueReplaceState(r,r.state,null)}function ta(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=E({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var Zc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Gy(n){Zc(n)}function Ky(n){console.error(n)}function Yy(n){Zc(n)}function Jc(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Qy(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Zd(n,r,o){return o=ks(o),o.tag=3,o.payload={element:null},o.callback=function(){Jc(n,r)},o}function Wy(n){return n=ks(n),n.tag=3,n}function Xy(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var d=u.value;n.payload=function(){return f(d)},n.callback=function(){Qy(r,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){Qy(r,o,u),typeof f!="function"&&(Hs===null?Hs=new Set([this]):Hs.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function tR(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&bl(r,o,f,!0),o=jn.current,o!==null){switch(o.tag){case 13:return Si===null?Sp():o.alternate===null&&_t===0&&(_t=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Cd?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),wp(n,u,f)),!1;case 22:return o.flags|=65536,u===Cd?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),wp(n,u,f)),!1}throw Error(s(435,o.tag))}return wp(n,u,f),Sp(),!1}if(je)return r=jn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Ed&&(n=Error(s(422),{cause:u}),wl(Bn(n,o)))):(u!==Ed&&(r=Error(s(423),{cause:u}),wl(Bn(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Bn(u,o),f=Zd(n.stateNode,u,f),Dd(n,f),_t!==4&&(_t=2)),!1;var d=Error(s(520),{cause:u});if(d=Bn(d,o),Gl===null?Gl=[d]:Gl.push(d),_t!==4&&(_t=2),r===null)return!0;u=Bn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=Zd(o.stateNode,u,n),Dd(o,n),!1;case 1:if(r=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Hs===null||!Hs.has(d))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Wy(f),Xy(f,n,o,u),Dd(o,f),!1}o=o.return}while(o!==null);return!1}var $y=Error(s(461)),zt=!1;function Wt(n,r,o,u){r.child=n===null?Fy(r,null,o,u):so(r,n.child,o,u)}function Zy(n,r,o,u,f){o=o.render;var d=r.ref;if("ref"in u){var v={};for(var T in u)T!=="ref"&&(v[T]=u[T])}else v=u;return Zr(r),u=Vd(n,r,o,v,d,f),T=xd(),n!==null&&!zt?(Ld(n,r,f),ss(n,r,f)):(je&&T&&yd(r),r.flags|=1,Wt(n,r,u,f),r.child)}function Jy(n,r,o,u,f){if(n===null){var d=o.type;return typeof d=="function"&&!md(d)&&d.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=d,ev(n,r,d,u,f)):(n=Mc(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,!ap(n,f)){var v=d.memoizedProps;if(o=o.compare,o=o!==null?o:El,o(v,u)&&n.ref===r.ref)return ss(n,r,f)}return r.flags|=1,n=$i(d,u),n.ref=r.ref,n.return=r,r.child=n}function ev(n,r,o,u,f){if(n!==null){var d=n.memoizedProps;if(El(d,u)&&n.ref===r.ref)if(zt=!1,r.pendingProps=u=d,ap(n,f))(n.flags&131072)!==0&&(zt=!0);else return r.lanes=n.lanes,ss(n,r,f)}return Jd(n,r,o,u,f)}function tv(n,r,o){var u=r.pendingProps,f=u.children,d=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=d!==null?d.baseLanes|o:o,n!==null){for(f=r.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;r.childLanes=d&~u}else r.childLanes=0,r.child=null;return nv(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Lc(r,d!==null?d.cachePool:null),d!==null?ey(r,d):Md(),qy(r);else return r.lanes=r.childLanes=536870912,nv(n,r,d!==null?d.baseLanes|o:o,o)}else d!==null?(Lc(r,d.cachePool),ey(r,d),Ls(),r.memoizedState=null):(n!==null&&Lc(r,null),Md(),Ls());return Wt(n,r,f,o),r.child}function nv(n,r,o,u){var f=Rd();return f=f===null?null:{parent:Mt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&Lc(r,null),Md(),qy(r),n!==null&&bl(n,r,u,!0),null}function eh(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function Jd(n,r,o,u,f){return Zr(r),o=Vd(n,r,o,u,void 0,f),u=xd(),n!==null&&!zt?(Ld(n,r,f),ss(n,r,f)):(je&&u&&yd(r),r.flags|=1,Wt(n,r,o,f),r.child)}function iv(n,r,o,u,f,d){return Zr(r),r.updateQueue=null,o=ny(r,u,o,f),ty(n),u=xd(),n!==null&&!zt?(Ld(n,r,d),ss(n,r,d)):(je&&u&&yd(r),r.flags|=1,Wt(n,r,o,d),r.child)}function sv(n,r,o,u,f){if(Zr(r),r.stateNode===null){var d=Qa,v=o.contextType;typeof v=="object"&&v!==null&&(d=sn(v)),d=new o(u,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=$d,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=u,d.state=r.memoizedState,d.refs={},Id(r),v=o.contextType,d.context=typeof v=="object"&&v!==null?sn(v):Qa,d.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Xd(r,o,v,u),d.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&$d.enqueueReplaceState(d,d.state,null),Ml(r,u,d,f),Ol(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){d=r.stateNode;var T=r.memoizedProps,R=ta(o,T);d.props=R;var z=d.context,G=o.contextType;v=Qa,typeof G=="object"&&G!==null&&(v=sn(G));var Y=o.getDerivedStateFromProps;G=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==v)&&jy(r,d,u,v),Ms=!1;var B=r.memoizedState;d.state=B,Ml(r,u,d,f),Ol(),z=r.memoizedState,T||B!==z||Ms?(typeof Y=="function"&&(Xd(r,o,Y,u),z=r.memoizedState),(R=Ms||Hy(r,o,R,u,B,z,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),d.props=u,d.state=z,d.context=v,u=R):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{d=r.stateNode,Nd(n,r),v=r.memoizedProps,G=ta(o,v),d.props=G,Y=r.pendingProps,B=d.context,z=o.contextType,R=Qa,typeof z=="object"&&z!==null&&(R=sn(z)),T=o.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||B!==R)&&jy(r,d,u,R),Ms=!1,B=r.memoizedState,d.state=B,Ml(r,u,d,f),Ol();var F=r.memoizedState;v!==Y||B!==F||Ms||n!==null&&n.dependencies!==null&&Vc(n.dependencies)?(typeof T=="function"&&(Xd(r,o,T,u),F=r.memoizedState),(G=Ms||Hy(r,o,G,u,B,F,R)||n!==null&&n.dependencies!==null&&Vc(n.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(u,F,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(u,F,R)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=F),d.props=u,d.state=F,d.context=R,u=G):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),u=!1)}return d=u,eh(n,r),u=(r.flags&128)!==0,d||u?(d=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,n!==null&&u?(r.child=so(r,n.child,null,f),r.child=so(r,null,o,f)):Wt(n,r,o,f),r.memoizedState=d.state,n=r.child):n=ss(n,r,f),n}function rv(n,r,o,u){return Al(),r.flags|=256,Wt(n,r,o,u),r.child}var ep={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tp(n){return{baseLanes:n,cachePool:K_()}}function np(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=Gn),n}function av(n,r,o){var u=r.pendingProps,f=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=n!==null&&n.memoizedState===null?!1:(kt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(je){if(f?xs(r):Ls(),je){var T=gt,R;if(R=T){e:{for(R=T,T=Ti;R.nodeType!==8;){if(!T){T=null;break e}if(R=ni(R.nextSibling),R===null){T=null;break e}}T=R}T!==null?(r.memoizedState={dehydrated:T,treeContext:Yr!==null?{id:Zi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},R=bn(18,null,null,0),R.stateNode=T,R.return=r,r.child=R,gn=r,gt=null,R=!0):R=!1}R||Xr(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return zp(T)?r.lanes=32:r.lanes=536870912,null;is(r)}return T=u.children,u=u.fallback,f?(Ls(),f=r.mode,T=th({mode:"hidden",children:T},f),u=Kr(u,f,o,null),T.return=r,u.return=r,T.sibling=u,r.child=T,f=r.child,f.memoizedState=tp(o),f.childLanes=np(n,v,o),r.memoizedState=ep,u):(xs(r),ip(r,T))}if(R=n.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)r.flags&256?(xs(r),r.flags&=-257,r=sp(n,r,o)):r.memoizedState!==null?(Ls(),r.child=n.child,r.flags|=128,r=null):(Ls(),f=u.fallback,T=r.mode,u=th({mode:"visible",children:u.children},T),f=Kr(f,T,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,so(r,n.child,null,o),u=r.child,u.memoizedState=tp(o),u.childLanes=np(n,v,o),r.memoizedState=ep,r=f);else if(xs(r),zp(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var z=v.dgst;v=z,u=Error(s(419)),u.stack="",u.digest=v,wl({value:u,source:null,stack:null}),r=sp(n,r,o)}else if(zt||bl(n,r,o,!1),v=(o&n.childLanes)!==0,zt||v){if(v=st,v!==null&&(u=o&-o,u=(u&42)!==0?1:ws(u),u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,Ya(n,u),Dn(v,n,u),$y;T.data==="$?"||Sp(),r=sp(n,r,o)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=R.treeContext,gt=ni(T.nextSibling),gn=r,je=!0,Wr=null,Ti=!1,n!==null&&(qn[Hn++]=Zi,qn[Hn++]=Ji,qn[Hn++]=Yr,Zi=n.id,Ji=n.overflow,Yr=r),r=ip(r,u.children),r.flags|=4096);return r}return f?(Ls(),f=u.fallback,T=r.mode,R=n.child,z=R.sibling,u=$i(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,z!==null?f=$i(z,f):(f=Kr(f,T,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,T=n.child.memoizedState,T===null?T=tp(o):(R=T.cachePool,R!==null?(z=Mt._currentValue,R=R.parent!==z?{parent:z,pool:z}:R):R=K_(),T={baseLanes:T.baseLanes|o,cachePool:R}),f.memoizedState=T,f.childLanes=np(n,v,o),r.memoizedState=ep,u):(xs(r),o=n.child,n=o.sibling,o=$i(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=o,r.memoizedState=null,o)}function ip(n,r){return r=th({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function th(n,r){return n=bn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function sp(n,r,o){return so(r,n.child,null,o),n=ip(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ov(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Sd(n.return,r,o)}function rp(n,r,o,u,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=u,d.tail=o,d.tailMode=f)}function lv(n,r,o){var u=r.pendingProps,f=u.revealOrder,d=u.tail;if(Wt(n,r,u.children,o),u=kt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ov(n,o,r);else if(n.tag===19)ov(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(J(kt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&$c(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),rp(r,!1,f,o,d);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&$c(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}rp(r,!0,o,null,d);break;case"together":rp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ss(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),qs|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(bl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=$i(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=$i(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function ap(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Vc(n)))}function nR(n,r,o){switch(r.tag){case 3:it(r,r.stateNode.containerInfo),Os(r,Mt,n.memoizedState.cache),Al();break;case 27:case 5:As(r);break;case 4:it(r,r.stateNode.containerInfo);break;case 10:Os(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(xs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?av(n,r,o):(xs(r),n=ss(n,r,o),n!==null?n.sibling:null);xs(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(bl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return lv(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),J(kt,kt.current),u)break;return null;case 22:case 23:return r.lanes=0,tv(n,r,o);case 24:Os(r,Mt,n.memoizedState.cache)}return ss(n,r,o)}function uv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)zt=!0;else{if(!ap(n,o)&&(r.flags&128)===0)return zt=!1,nR(n,r,o);zt=(n.flags&131072)!==0}else zt=!1,je&&(r.flags&1048576)!==0&&z_(r,Pc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")md(u)?(n=ta(u,n),r.tag=1,r=sv(null,r,u,n,o)):(r.tag=0,r=Jd(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===_e){r.tag=11,r=Zy(null,r,u,n,o);break e}else if(f===N){r.tag=14,r=Jy(null,r,u,n,o);break e}}throw r=Kt(u)||u,Error(s(306,r,""))}}return r;case 0:return Jd(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=ta(u,r.pendingProps),sv(n,r,u,f,o);case 3:e:{if(it(r,r.stateNode.containerInfo),n===null)throw Error(s(387));u=r.pendingProps;var d=r.memoizedState;f=d.element,Nd(n,r),Ml(r,u,null,o);var v=r.memoizedState;if(u=v.cache,Os(r,Mt,u),u!==d.cache&&Ad(r,[Mt],o,!0),Ol(),u=v.element,d.isDehydrated)if(d={element:u,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=rv(n,r,u,o);break e}else if(u!==f){f=Bn(Error(s(424)),r),wl(f),r=rv(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(gt=ni(n.firstChild),gn=r,je=!0,Wr=null,Ti=!0,o=Fy(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Al(),u===f){r=ss(n,r,o);break e}Wt(n,r,u,o)}r=r.child}return r;case 26:return eh(n,r),n===null?(o=dE(r.type,null,r.pendingProps,null))?r.memoizedState=o:je||(o=r.type,n=r.pendingProps,u=mh(Se.current).createElement(o),u[Nt]=r,u[At]=n,$t(u,o,n),yt(u),r.stateNode=u):r.memoizedState=dE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return As(r),n===null&&je&&(u=r.stateNode=cE(r.type,r.pendingProps,Se.current),gn=r,Ti=!0,f=gt,Ks(r.type)?(Bp=f,gt=ni(u.firstChild)):gt=f),Wt(n,r,r.pendingProps.children,o),eh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&je&&((f=u=gt)&&(u=DR(u,r.type,r.pendingProps,Ti),u!==null?(r.stateNode=u,gn=r,gt=ni(u.firstChild),Ti=!1,f=!0):f=!1),f||Xr(r)),As(r),f=r.type,d=r.pendingProps,v=n!==null?n.memoizedProps:null,u=d.children,xp(f,d)?u=null:v!==null&&xp(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Vd(n,r,Qb,null,null,o),eu._currentValue=f),eh(n,r),Wt(n,r,u,o),r.child;case 6:return n===null&&je&&((n=o=gt)&&(o=OR(o,r.pendingProps,Ti),o!==null?(r.stateNode=o,gn=r,gt=null,n=!0):n=!1),n||Xr(r)),null;case 13:return av(n,r,o);case 4:return it(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=so(r,null,u,o):Wt(n,r,u,o),r.child;case 11:return Zy(n,r,r.type,r.pendingProps,o);case 7:return Wt(n,r,r.pendingProps,o),r.child;case 8:return Wt(n,r,r.pendingProps.children,o),r.child;case 12:return Wt(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Os(r,r.type,u.value),Wt(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,Zr(r),f=sn(f),u=u(f),r.flags|=1,Wt(n,r,u,o),r.child;case 14:return Jy(n,r,r.type,r.pendingProps,o);case 15:return ev(n,r,r.type,r.pendingProps,o);case 19:return lv(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=th(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=$i(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return tv(n,r,o);case 24:return Zr(r),u=sn(Mt),n===null?(f=Rd(),f===null&&(f=st,d=wd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=o),f=d),r.memoizedState={parent:u,cache:f},Id(r),Os(r,Mt,f)):((n.lanes&o)!==0&&(Nd(n,r),Ml(r,null,null,o),Ol()),f=n.memoizedState,d=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Os(r,Mt,u)):(u=d.cache,Os(r,Mt,u),u!==f.cache&&Ad(r,[Mt],o,!0))),Wt(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function rs(n){n.flags|=4}function cv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!yE(r)){if(r=jn.current,r!==null&&((Le&4194048)===Le?Si!==null:(Le&62914560)!==Le&&(Le&536870912)===0||r!==Si))throw Nl=Cd,Y_;n.flags|=8192}}function nh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?nl():536870912,n.lanes|=r,lo|=r)}function zl(n,r){if(!je)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ht(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function iR(n,r,o){var u=r.pendingProps;switch(vd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(r),null;case 1:return ht(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ts(Mt),ui(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Sl(r)?rs(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,q_())),ht(r),null;case 26:return o=r.memoizedState,n===null?(rs(r),o!==null?(ht(r),cv(r,o)):(ht(r),r.flags&=-16777217)):o?o!==n.memoizedState?(rs(r),ht(r),cv(r,o)):(ht(r),r.flags&=-16777217):(n.memoizedProps!==u&&rs(r),ht(r),r.flags&=-16777217),null;case 27:Ui(r),o=Se.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&rs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return ht(r),null}n=de.current,Sl(r)?B_(r):(n=cE(f,u,o),r.stateNode=n,rs(r))}return ht(r),null;case 5:if(Ui(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&rs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return ht(r),null}if(n=de.current,Sl(r))B_(r);else{switch(f=mh(Se.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Nt]=r,n[At]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch($t(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&rs(r)}}return ht(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&rs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=Se.current,Sl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=gn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Nt]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||iE(n.nodeValue,o)),n||Xr(r)}else n=mh(n).createTextNode(u),n[Nt]=r,r.stateNode=n}return ht(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Sl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Nt]=r}else Al(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ht(r),f=!1}else f=q_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(is(r),r):(is(r),null)}if(is(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var d=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(d=u.memoizedState.cachePool.pool),d!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),nh(r,r.updateQueue),ht(r),null;case 4:return ui(),n===null&&Op(r.stateNode.containerInfo),ht(r),null;case 10:return ts(r.type),ht(r),null;case 19:if(ne(kt),f=r.memoizedState,f===null)return ht(r),null;if(u=(r.flags&128)!==0,d=f.rendering,d===null)if(u)zl(f,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(d=$c(n),d!==null){for(r.flags|=128,zl(f,!1),n=d.updateQueue,r.updateQueue=n,nh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)U_(o,n),o=o.sibling;return J(kt,kt.current&1|2),r.child}n=n.sibling}f.tail!==null&&Pn()>rh&&(r.flags|=128,u=!0,zl(f,!1),r.lanes=4194304)}else{if(!u)if(n=$c(d),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,nh(r,n),zl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!je)return ht(r),null}else 2*Pn()-f.renderingStartTime>rh&&o!==536870912&&(r.flags|=128,u=!0,zl(f,!1),r.lanes=4194304);f.isBackwards?(d.sibling=r.child,r.child=d):(n=f.last,n!==null?n.sibling=d:r.child=d,f.last=d)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Pn(),r.sibling=null,n=kt.current,J(kt,u?n&1|2:n&1),r):(ht(r),null);case 22:case 23:return is(r),kd(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(ht(r),r.subtreeFlags&6&&(r.flags|=8192)):ht(r),o=r.updateQueue,o!==null&&nh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&ne(Jr),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ts(Mt),ht(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function sR(n,r){switch(vd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ts(Mt),ui(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Ui(r),null;case 13:if(is(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Al()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ne(kt),null;case 4:return ui(),null;case 10:return ts(r.type),null;case 22:case 23:return is(r),kd(),n!==null&&ne(Jr),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ts(Mt),null;case 25:return null;default:return null}}function hv(n,r){switch(vd(r),r.tag){case 3:ts(Mt),ui();break;case 26:case 27:case 5:Ui(r);break;case 4:ui();break;case 13:is(r);break;case 19:ne(kt);break;case 10:ts(r.type);break;case 22:case 23:is(r),kd(),n!==null&&ne(Jr);break;case 24:ts(Mt)}}function Bl(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var d=o.create,v=o.inst;u=d(),v.destroy=u}o=o.next}while(o!==f)}}catch(T){nt(r,r.return,T)}}function Us(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var d=f.next;u=d;do{if((u.tag&n)===n){var v=u.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=r;var R=o,z=T;try{z()}catch(G){nt(f,R,G)}}}u=u.next}while(u!==d)}}catch(G){nt(r,r.return,G)}}function fv(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{J_(r,o)}catch(u){nt(n,n.return,u)}}}function dv(n,r,o){o.props=ta(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){nt(n,r,u)}}function Fl(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){nt(n,r,f)}}function Ai(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){nt(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){nt(n,r,f)}else o.current=null}function pv(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){nt(n,n.return,f)}}function op(n,r,o){try{var u=n.stateNode;bR(u,n.type,o,r),u[At]=r}catch(f){nt(n,n.return,f)}}function mv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ks(n.type)||n.tag===4}function lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ks(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function up(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ph));else if(u!==4&&(u===27&&Ks(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(up(n,r,o),n=n.sibling;n!==null;)up(n,r,o),n=n.sibling}function ih(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&Ks(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(ih(n,r,o),n=n.sibling;n!==null;)ih(n,r,o),n=n.sibling}function gv(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);$t(r,u,o),r[Nt]=n,r[At]=o}catch(d){nt(n,n.return,d)}}var as=!1,Et=!1,cp=!1,_v=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function rR(n,r){if(n=n.containerInfo,Pp=Th,n=I_(n),ld(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,d=u.focusNode;u=u.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var v=0,T=-1,R=-1,z=0,G=0,Y=n,B=null;t:for(;;){for(var F;Y!==o||f!==0&&Y.nodeType!==3||(T=v+f),Y!==d||u!==0&&Y.nodeType!==3||(R=v+u),Y.nodeType===3&&(v+=Y.nodeValue.length),(F=Y.firstChild)!==null;)B=Y,Y=F;for(;;){if(Y===n)break t;if(B===o&&++z===f&&(T=v),B===d&&++G===u&&(R=v),(F=Y.nextSibling)!==null)break;Y=B,B=Y.parentNode}Y=F}o=T===-1||R===-1?null:{start:T,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vp={focusedElem:n,selectionRange:o},Th=!1,Bt=r;Bt!==null;)if(r=Bt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,Bt=n;else for(;Bt!==null;){switch(r=Bt,d=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,o=r,f=d.memoizedProps,d=d.memoizedState,u=o.stateNode;try{var Ee=ta(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Ee,d),u.__reactInternalSnapshotBeforeUpdate=n}catch(me){nt(o,o.return,me)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Up(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Up(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Bt=n;break}Bt=r.return}}function yv(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:zs(n,o),u&4&&Bl(5,o);break;case 1:if(zs(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(v){nt(o,o.return,v)}else{var f=ta(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(v){nt(o,o.return,v)}}u&64&&fv(o),u&512&&Fl(o,o.return);break;case 3:if(zs(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{J_(n,r)}catch(v){nt(o,o.return,v)}}break;case 27:r===null&&u&4&&gv(o);case 26:case 5:zs(n,o),r===null&&u&4&&pv(o),u&512&&Fl(o,o.return);break;case 12:zs(n,o);break;case 13:zs(n,o),u&4&&Tv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=pR.bind(null,o),MR(n,o))));break;case 22:if(u=o.memoizedState!==null||as,!u){r=r!==null&&r.memoizedState!==null||Et,f=as;var d=Et;as=u,(Et=r)&&!d?Bs(n,o,(o.subtreeFlags&8772)!==0):zs(n,o),as=f,Et=d}break;case 30:break;default:zs(n,o)}}function vv(n){var r=n.alternate;r!==null&&(n.alternate=null,vv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Cs(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ct=null,yn=!1;function os(n,r,o){for(o=o.child;o!==null;)Ev(n,r,o),o=o.sibling}function Ev(n,r,o){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(mt,o)}catch{}switch(o.tag){case 26:Et||Ai(o,r),os(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Et||Ai(o,r);var u=ct,f=yn;Ks(o.type)&&(ct=o.stateNode,yn=!1),os(n,r,o),Xl(o.stateNode),ct=u,yn=f;break;case 5:Et||Ai(o,r);case 6:if(u=ct,f=yn,ct=null,os(n,r,o),ct=u,yn=f,ct!==null)if(yn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(o.stateNode)}catch(d){nt(o,r,d)}else try{ct.removeChild(o.stateNode)}catch(d){nt(o,r,d)}break;case 18:ct!==null&&(yn?(n=ct,lE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),su(n)):lE(ct,o.stateNode));break;case 4:u=ct,f=yn,ct=o.stateNode.containerInfo,yn=!0,os(n,r,o),ct=u,yn=f;break;case 0:case 11:case 14:case 15:Et||Us(2,o,r),Et||Us(4,o,r),os(n,r,o);break;case 1:Et||(Ai(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&dv(o,r,u)),os(n,r,o);break;case 21:os(n,r,o);break;case 22:Et=(u=Et)||o.memoizedState!==null,os(n,r,o),Et=u;break;default:os(n,r,o)}}function Tv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{su(n)}catch(o){nt(r,r.return,o)}}function aR(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new _v),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new _v),r;default:throw Error(s(435,n.tag))}}function hp(n,r){var o=aR(n);r.forEach(function(u){var f=mR.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function Rn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],d=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ks(T.type)){ct=T.stateNode,yn=!1;break e}break;case 5:ct=T.stateNode,yn=!1;break e;case 3:case 4:ct=T.stateNode.containerInfo,yn=!0;break e}T=T.return}if(ct===null)throw Error(s(160));Ev(d,v,f),ct=null,yn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Sv(r,n),r=r.sibling}var ti=null;function Sv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Rn(r,n),Cn(n),u&4&&(Us(3,n,n.return),Bl(3,n),Us(5,n,n.return));break;case 1:Rn(r,n),Cn(n),u&512&&(Et||o===null||Ai(o,o.return)),u&64&&as&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ti;if(Rn(r,n),Cn(n),u&512&&(Et||o===null||Ai(o,o.return)),u&4){var d=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Dr]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(u),f.head.insertBefore(d,f.querySelector("head > title"))),$t(d,u,o),d[Nt]=n,yt(d),u=d;break e;case"link":var v=gE("link","href",f).get(u+(o.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(T,1);break t}}d=f.createElement(u),$t(d,u,o),f.head.appendChild(d);break;case"meta":if(v=gE("meta","content",f).get(u+(o.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(T,1);break t}}d=f.createElement(u),$t(d,u,o),f.head.appendChild(d);break;default:throw Error(s(468,u))}d[Nt]=n,yt(d),u=d}n.stateNode=u}else _E(f,n.type,n.stateNode);else n.stateNode=mE(f,u,n.memoizedProps);else d!==u?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,u===null?_E(f,n.type,n.stateNode):mE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&op(n,n.memoizedProps,o.memoizedProps)}break;case 27:Rn(r,n),Cn(n),u&512&&(Et||o===null||Ai(o,o.return)),o!==null&&u&4&&op(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Rn(r,n),Cn(n),u&512&&(Et||o===null||Ai(o,o.return)),n.flags&32){f=n.stateNode;try{xn(f,"")}catch(F){nt(n,n.return,F)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,op(n,f,o!==null?o.memoizedProps:f)),u&1024&&(cp=!0);break;case 6:if(Rn(r,n),Cn(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(F){nt(n,n.return,F)}}break;case 3:if(yh=null,f=ti,ti=gh(r.containerInfo),Rn(r,n),ti=f,Cn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{su(r.containerInfo)}catch(F){nt(n,n.return,F)}cp&&(cp=!1,Av(n));break;case 4:u=ti,ti=gh(n.stateNode.containerInfo),Rn(r,n),Cn(n),ti=u;break;case 12:Rn(r,n),Cn(n);break;case 13:Rn(r,n),Cn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(_p=Pn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,hp(n,u)));break;case 22:f=n.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,z=as,G=Et;if(as=z||f,Et=G||R,Rn(r,n),Et=G,as=z,Cn(n),u&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||R||as||Et||na(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){R=o=r;try{if(d=R.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=R.stateNode;var Y=R.memoizedProps.style,B=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(F){nt(R,R.return,F)}}}else if(r.tag===6){if(o===null){R=r;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(F){nt(R,R.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,hp(n,o))));break;case 19:Rn(r,n),Cn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,hp(n,u)));break;case 30:break;case 21:break;default:Rn(r,n),Cn(n)}}function Cn(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(mv(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,d=lp(n);ih(n,d,f);break;case 5:var v=o.stateNode;o.flags&32&&(xn(v,""),o.flags&=-33);var T=lp(n);ih(n,T,v);break;case 3:case 4:var R=o.stateNode.containerInfo,z=lp(n);up(n,z,R);break;default:throw Error(s(161))}}catch(G){nt(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Av(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Av(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function zs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)yv(n,r.alternate,r),r=r.sibling}function na(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Us(4,r,r.return),na(r);break;case 1:Ai(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&dv(r,r.return,o),na(r);break;case 27:Xl(r.stateNode);case 26:case 5:Ai(r,r.return),na(r);break;case 22:r.memoizedState===null&&na(r);break;case 30:na(r);break;default:na(r)}n=n.sibling}}function Bs(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:Bs(f,d,o),Bl(4,d);break;case 1:if(Bs(f,d,o),u=d,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){nt(u,u.return,z)}if(u=d,f=u.updateQueue,f!==null){var T=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)Z_(R[f],T)}catch(z){nt(u,u.return,z)}}o&&v&64&&fv(d),Fl(d,d.return);break;case 27:gv(d);case 26:case 5:Bs(f,d,o),o&&u===null&&v&4&&pv(d),Fl(d,d.return);break;case 12:Bs(f,d,o);break;case 13:Bs(f,d,o),o&&v&4&&Tv(f,d);break;case 22:d.memoizedState===null&&Bs(f,d,o),Fl(d,d.return);break;case 30:break;default:Bs(f,d,o)}r=r.sibling}}function fp(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Rl(o))}function dp(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Rl(n))}function wi(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)wv(n,r,o,u),r=r.sibling}function wv(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:wi(n,r,o,u),f&2048&&Bl(9,r);break;case 1:wi(n,r,o,u);break;case 3:wi(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Rl(n)));break;case 12:if(f&2048){wi(n,r,o,u),n=r.stateNode;try{var d=r.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(R){nt(r,r.return,R)}}else wi(n,r,o,u);break;case 13:wi(n,r,o,u);break;case 23:break;case 22:d=r.stateNode,v=r.alternate,r.memoizedState!==null?d._visibility&2?wi(n,r,o,u):ql(n,r):d._visibility&2?wi(n,r,o,u):(d._visibility|=2,ro(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&fp(v,r);break;case 24:wi(n,r,o,u),f&2048&&dp(r.alternate,r);break;default:wi(n,r,o,u)}}function ro(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=n,v=r,T=o,R=u,z=v.flags;switch(v.tag){case 0:case 11:case 15:ro(d,v,T,R,f),Bl(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?ro(d,v,T,R,f):ql(d,v):(G._visibility|=2,ro(d,v,T,R,f)),f&&z&2048&&fp(v.alternate,v);break;case 24:ro(d,v,T,R,f),f&&z&2048&&dp(v.alternate,v);break;default:ro(d,v,T,R,f)}r=r.sibling}}function ql(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:ql(o,u),f&2048&&fp(u.alternate,u);break;case 24:ql(o,u),f&2048&&dp(u.alternate,u);break;default:ql(o,u)}r=r.sibling}}var Hl=8192;function ao(n){if(n.subtreeFlags&Hl)for(n=n.child;n!==null;)bv(n),n=n.sibling}function bv(n){switch(n.tag){case 26:ao(n),n.flags&Hl&&n.memoizedState!==null&&GR(ti,n.memoizedState,n.memoizedProps);break;case 5:ao(n);break;case 3:case 4:var r=ti;ti=gh(n.stateNode.containerInfo),ao(n),ti=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Hl,Hl=16777216,ao(n),Hl=r):ao(n));break;default:ao(n)}}function Rv(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function jl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Bt=u,Iv(u,n)}Rv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Cv(n),n=n.sibling}function Cv(n){switch(n.tag){case 0:case 11:case 15:jl(n),n.flags&2048&&Us(9,n,n.return);break;case 3:jl(n);break;case 12:jl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,sh(n)):jl(n);break;default:jl(n)}}function sh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Bt=u,Iv(u,n)}Rv(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Us(8,r,r.return),sh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,sh(r));break;default:sh(r)}n=n.sibling}}function Iv(n,r){for(;Bt!==null;){var o=Bt;switch(o.tag){case 0:case 11:case 15:Us(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Rl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Bt=u;else e:for(o=n;Bt!==null;){u=Bt;var f=u.sibling,d=u.return;if(vv(u),u===o){Bt=null;break e}if(f!==null){f.return=d,Bt=f;break e}Bt=d}}}var oR={getCacheForType:function(n){var r=sn(Mt),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},lR=typeof WeakMap=="function"?WeakMap:Map,We=0,st=null,De=null,Le=0,Xe=0,In=null,Fs=!1,oo=!1,pp=!1,ls=0,_t=0,qs=0,ia=0,mp=0,Gn=0,lo=0,Gl=null,vn=null,gp=!1,_p=0,rh=1/0,ah=null,Hs=null,Xt=0,js=null,uo=null,co=0,yp=0,vp=null,Nv=null,Kl=0,Ep=null;function Nn(){if((We&2)!==0&&Le!==0)return Le&-Le;if(j.T!==null){var n=$a;return n!==0?n:Cp()}return bs()}function Dv(){Gn===0&&(Gn=(Le&536870912)===0||je?tl():536870912);var n=jn.current;return n!==null&&(n.flags|=32),Gn}function Dn(n,r,o){(n===st&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(ho(n,0),Gs(n,Le,Gn,!1)),Bi(n,o),((We&2)===0||n!==st)&&(n===st&&((We&2)===0&&(ia|=o),_t===4&&Gs(n,Le,Gn,!1)),bi(n))}function Ov(n,r,o){if((We&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||Nr(n,r),f=u?hR(n,r):Ap(n,r,!0),d=u;do{if(f===0){oo&&!u&&Gs(n,r,0,!1);break}else{if(o=n.current.alternate,d&&!uR(o)){f=Ap(n,r,!1),d=!1;continue}if(f===2){if(d=r,n.errorRecoveryDisabledLanes&d)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var T=n;f=Gl;var R=T.current.memoizedState.isDehydrated;if(R&&(ho(T,v).flags|=256),v=Ap(T,v,!1),v!==2){if(pp&&!R){T.errorRecoveryDisabledLanes|=d,ia|=d,f=4;break e}d=vn,vn=f,d!==null&&(vn===null?vn=d:vn.push.apply(vn,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){ho(n,0),Gs(n,r,0,!0);break}e:{switch(u=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Gs(u,r,Gn,!Fs);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=_p+300-Pn(),10<f)){if(Gs(u,r,Gn,!Fs),Ia(u,0,!0)!==0)break e;u.timeoutHandle=aE(Mv.bind(null,u,o,vn,ah,gp,r,Gn,ia,lo,Fs,d,2,-0,0),f);break e}Mv(u,o,vn,ah,gp,r,Gn,ia,lo,Fs,d,0,-0,0)}}break}while(!0);bi(n)}function Mv(n,r,o,u,f,d,v,T,R,z,G,Y,B,F){if(n.timeoutHandle=-1,Y=r.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Jl={stylesheets:null,count:0,unsuspend:jR},bv(r),Y=KR(),Y!==null)){n.cancelPendingCommit=Y(zv.bind(null,n,r,d,o,u,f,v,T,R,G,1,B,F)),Gs(n,d,v,!z);return}zv(n,r,d,o,u,f,v,T,R)}function uR(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],d=f.getSnapshot;f=f.value;try{if(!wn(d(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gs(n,r,o,u){r&=~mp,r&=~ia,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var d=31-nn(f),v=1<<d;u[d]=-1,f&=~v}o!==0&&ci(n,o,r)}function oh(){return(We&6)===0?(Yl(0),!1):!0}function Tp(){if(De!==null){if(Xe===0)var n=De.return;else n=De,es=$r=null,Ud(n),io=null,Ll=0,n=De;for(;n!==null;)hv(n.alternate,n),n=n.return;De=null}}function ho(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,CR(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Tp(),st=n,De=o=$i(n.current,null),Le=r,Xe=0,In=null,Fs=!1,oo=Nr(n,r),pp=!1,lo=Gn=mp=ia=qs=_t=0,vn=Gl=null,gp=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-nn(u),d=1<<f;r|=n[f],u&=~d}return ls=r,Nc(),o}function kv(n,r){Re=null,j.H=Qc,r===Il||r===Uc?(r=X_(),Xe=3):r===Y_?(r=X_(),Xe=4):Xe=r===$y?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,In=r,De===null&&(_t=1,Jc(n,Bn(r,n.current)))}function Pv(){var n=j.H;return j.H=Qc,n===null?Qc:n}function Vv(){var n=j.A;return j.A=oR,n}function Sp(){_t=4,Fs||(Le&4194048)!==Le&&jn.current!==null||(oo=!0),(qs&134217727)===0&&(ia&134217727)===0||st===null||Gs(st,Le,Gn,!1)}function Ap(n,r,o){var u=We;We|=2;var f=Pv(),d=Vv();(st!==n||Le!==r)&&(ah=null,ho(n,r)),r=!1;var v=_t;e:do try{if(Xe!==0&&De!==null){var T=De,R=In;switch(Xe){case 8:Tp(),v=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(r=!0);var z=Xe;if(Xe=0,In=null,fo(n,T,R,z),o&&oo){v=0;break e}break;default:z=Xe,Xe=0,In=null,fo(n,T,R,z)}}cR(),v=_t;break}catch(G){kv(n,G)}while(!0);return r&&n.shellSuspendCounter++,es=$r=null,We=u,j.H=f,j.A=d,De===null&&(st=null,Le=0,Nc()),v}function cR(){for(;De!==null;)xv(De)}function hR(n,r){var o=We;We|=2;var u=Pv(),f=Vv();st!==n||Le!==r?(ah=null,rh=Pn()+500,ho(n,r)):oo=Nr(n,r);e:do try{if(Xe!==0&&De!==null){r=De;var d=In;t:switch(Xe){case 1:Xe=0,In=null,fo(n,r,d,1);break;case 2:case 9:if(Q_(d)){Xe=0,In=null,Lv(r);break}r=function(){Xe!==2&&Xe!==9||st!==n||(Xe=7),bi(n)},d.then(r,r);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:Q_(d)?(Xe=0,In=null,Lv(r)):(Xe=0,In=null,fo(n,r,d,7));break;case 5:var v=null;switch(De.tag){case 26:v=De.memoizedState;case 5:case 27:var T=De;if(!v||yE(v)){Xe=0,In=null;var R=T.sibling;if(R!==null)De=R;else{var z=T.return;z!==null?(De=z,lh(z)):De=null}break t}}Xe=0,In=null,fo(n,r,d,5);break;case 6:Xe=0,In=null,fo(n,r,d,6);break;case 8:Tp(),_t=6;break e;default:throw Error(s(462))}}fR();break}catch(G){kv(n,G)}while(!0);return es=$r=null,j.H=u,j.A=f,We=o,De!==null?0:(st=null,Le=0,Nc(),_t)}function fR(){for(;De!==null&&!$o();)xv(De)}function xv(n){var r=uv(n.alternate,n,ls);n.memoizedProps=n.pendingProps,r===null?lh(n):De=r}function Lv(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=iv(o,r,r.pendingProps,r.type,void 0,Le);break;case 11:r=iv(o,r,r.pendingProps,r.type.render,r.ref,Le);break;case 5:Ud(r);default:hv(o,r),r=De=U_(r,ls),r=uv(o,r,ls)}n.memoizedProps=n.pendingProps,r===null?lh(n):De=r}function fo(n,r,o,u){es=$r=null,Ud(r),io=null,Ll=0;var f=r.return;try{if(tR(n,f,r,o,Le)){_t=1,Jc(n,Bn(o,n.current)),De=null;return}}catch(d){if(f!==null)throw De=f,d;_t=1,Jc(n,Bn(o,n.current)),De=null;return}r.flags&32768?(je||u===1?n=!0:oo||(Le&536870912)!==0?n=!1:(Fs=n=!0,(u===2||u===9||u===3||u===6)&&(u=jn.current,u!==null&&u.tag===13&&(u.flags|=16384))),Uv(r,n)):lh(r)}function lh(n){var r=n;do{if((r.flags&32768)!==0){Uv(r,Fs);return}n=r.return;var o=iR(r.alternate,r,ls);if(o!==null){De=o;return}if(r=r.sibling,r!==null){De=r;return}De=r=n}while(r!==null);_t===0&&(_t=5)}function Uv(n,r){do{var o=sR(n.alternate,n);if(o!==null){o.flags&=32767,De=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){De=n;return}De=n=o}while(n!==null);_t=6,De=null}function zv(n,r,o,u,f,d,v,T,R){n.cancelPendingCommit=null;do uh();while(Xt!==0);if((We&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=dd,il(n,o,d,v,T,R),n===st&&(De=st=null,Le=0),uo=r,js=n,co=o,yp=d,vp=f,Nv=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,gR(br,function(){return jv(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=j.T,j.T=null,f=te.p,te.p=2,v=We,We|=4;try{rR(n,r,o)}finally{We=v,te.p=f,j.T=u}}Xt=1,Bv(),Fv(),qv()}}function Bv(){if(Xt===1){Xt=0;var n=js,r=uo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=j.T,j.T=null;var u=te.p;te.p=2;var f=We;We|=4;try{Sv(r,n);var d=Vp,v=I_(n.containerInfo),T=d.focusedElem,R=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&C_(T.ownerDocument.documentElement,T)){if(R!==null&&ld(T)){var z=R.start,G=R.end;if(G===void 0&&(G=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(G,T.value.length);else{var Y=T.ownerDocument||document,B=Y&&Y.defaultView||window;if(B.getSelection){var F=B.getSelection(),Ee=T.textContent.length,me=Math.min(R.start,Ee),et=R.end===void 0?me:Math.min(R.end,Ee);!F.extend&&me>et&&(v=et,et=me,me=v);var P=R_(T,me),O=R_(T,et);if(P&&O&&(F.rangeCount!==1||F.anchorNode!==P.node||F.anchorOffset!==P.offset||F.focusNode!==O.node||F.focusOffset!==O.offset)){var L=Y.createRange();L.setStart(P.node,P.offset),F.removeAllRanges(),me>et?(F.addRange(L),F.extend(O.node,O.offset)):(L.setEnd(O.node,O.offset),F.addRange(L))}}}}for(Y=[],F=T;F=F.parentNode;)F.nodeType===1&&Y.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Y.length;T++){var K=Y[T];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Th=!!Pp,Vp=Pp=null}finally{We=f,te.p=u,j.T=o}}n.current=r,Xt=2}}function Fv(){if(Xt===2){Xt=0;var n=js,r=uo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=j.T,j.T=null;var u=te.p;te.p=2;var f=We;We|=4;try{yv(n,r.alternate,r)}finally{We=f,te.p=u,j.T=o}}Xt=3}}function qv(){if(Xt===4||Xt===3){Xt=0,sc();var n=js,r=uo,o=co,u=Nv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Xt=5:(Xt=0,uo=js=null,Hv(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Hs=null),Na(o),r=r.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(mt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=j.T,f=te.p,te.p=2,j.T=null;try{for(var d=n.onRecoverableError,v=0;v<u.length;v++){var T=u[v];d(T.value,{componentStack:T.stack})}}finally{j.T=r,te.p=f}}(co&3)!==0&&uh(),bi(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Ep?Kl++:(Kl=0,Ep=n):Kl=0,Yl(0)}}function Hv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Rl(r)))}function uh(n){return Bv(),Fv(),qv(),jv()}function jv(){if(Xt!==5)return!1;var n=js,r=yp;yp=0;var o=Na(co),u=j.T,f=te.p;try{te.p=32>o?32:o,j.T=null,o=vp,vp=null;var d=js,v=co;if(Xt=0,uo=js=null,co=0,(We&6)!==0)throw Error(s(331));var T=We;if(We|=4,Cv(d.current),wv(d,d.current,v,o),We=T,Yl(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(mt,d)}catch{}return!0}finally{te.p=f,j.T=u,Hv(n,r)}}function Gv(n,r,o){r=Bn(o,r),r=Zd(n.stateNode,r,2),n=Ps(n,r,2),n!==null&&(Bi(n,2),bi(n))}function nt(n,r,o){if(n.tag===3)Gv(n,n,o);else for(;r!==null;){if(r.tag===3){Gv(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Hs===null||!Hs.has(u))){n=Bn(o,n),o=Wy(2),u=Ps(r,o,2),u!==null&&(Xy(o,u,r,n),Bi(u,2),bi(u));break}}r=r.return}}function wp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new lR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(pp=!0,f.add(o),n=dR.bind(null,n,r,o),r.then(n,n))}function dR(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,st===n&&(Le&o)===o&&(_t===4||_t===3&&(Le&62914560)===Le&&300>Pn()-_p?(We&2)===0&&ho(n,0):mp|=o,lo===Le&&(lo=0)),bi(n)}function Kv(n,r){r===0&&(r=nl()),n=Ya(n,r),n!==null&&(Bi(n,r),bi(n))}function pR(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Kv(n,o)}function mR(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),Kv(n,o)}function gR(n,r){return Ar(n,r)}var ch=null,po=null,bp=!1,hh=!1,Rp=!1,sa=0;function bi(n){n!==po&&n.next===null&&(po===null?ch=po=n:po=po.next=n),hh=!0,bp||(bp=!0,yR())}function Yl(n,r){if(!Rp&&hh){Rp=!0;do for(var o=!1,u=ch;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var d=0;else{var v=u.suspendedLanes,T=u.pingedLanes;d=(1<<31-nn(42|n)+1)-1,d&=f&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,Xv(u,d))}else d=Le,d=Ia(u,u===st?d:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(d&3)===0||Nr(u,d)||(o=!0,Xv(u,d));u=u.next}while(o);Rp=!1}}function _R(){Yv()}function Yv(){hh=bp=!1;var n=0;sa!==0&&(RR()&&(n=sa),sa=0);for(var r=Pn(),o=null,u=ch;u!==null;){var f=u.next,d=Qv(u,r);d===0?(u.next=null,o===null?ch=f:o.next=f,f===null&&(po=o)):(o=u,(n!==0||(d&3)!==0)&&(hh=!0)),u=f}Yl(n)}function Qv(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var v=31-nn(d),T=1<<v,R=f[v];R===-1?((T&o)===0||(T&u)!==0)&&(f[v]=el(T,r)):R<=r&&(n.expiredLanes|=T),d&=~T}if(r=st,o=Le,o=Ia(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&wr(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Nr(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&wr(u),Na(o)){case 2:case 8:o=Ra;break;case 32:o=br;break;case 268435456:o=Ca;break;default:o=br}return u=Wv.bind(null,n),o=Ar(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&wr(u),n.callbackPriority=2,n.callbackNode=null,2}function Wv(n,r){if(Xt!==0&&Xt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(uh()&&n.callbackNode!==o)return null;var u=Le;return u=Ia(n,n===st?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(Ov(n,u,r),Qv(n,Pn()),n.callbackNode!=null&&n.callbackNode===o?Wv.bind(null,n):null)}function Xv(n,r){if(uh())return null;Ov(n,r,!0)}function yR(){IR(function(){(We&6)!==0?Ar(Zo,_R):Yv()})}function Cp(){return sa===0&&(sa=tl()),sa}function $v(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Va(""+n)}function Zv(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function vR(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var d=$v((f[At]||null).action),v=u.submitter;v&&(r=(r=v[At]||null)?$v(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var T=new xa("action","action",null,u,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(sa!==0){var R=v?Zv(f,v):new FormData(f);Yd(o,{pending:!0,data:R,method:f.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=v?Zv(f,v):new FormData(f),Yd(o,{pending:!0,data:R,method:f.method,action:d},d,R))},currentTarget:f}]})}}for(var Ip=0;Ip<fd.length;Ip++){var Np=fd[Ip],ER=Np.toLowerCase(),TR=Np[0].toUpperCase()+Np.slice(1);ei(ER,"on"+TR)}ei(O_,"onAnimationEnd"),ei(M_,"onAnimationIteration"),ei(k_,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Ub,"onTransitionRun"),ei(zb,"onTransitionStart"),ei(Bb,"onTransitionCancel"),ei(P_,"onTransitionEnd"),qi("onMouseEnter",["mouseout","mouseover"]),qi("onMouseLeave",["mouseout","mouseover"]),qi("onPointerEnter",["pointerout","pointerover"]),qi("onPointerLeave",["pointerout","pointerover"]),Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function Jv(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var d=void 0;if(r)for(var v=u.length-1;0<=v;v--){var T=u[v],R=T.instance,z=T.currentTarget;if(T=T.listener,R!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=z;try{d(f)}catch(G){Zc(G)}f.currentTarget=null,d=R}else for(v=0;v<u.length;v++){if(T=u[v],R=T.instance,z=T.currentTarget,T=T.listener,R!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=z;try{d(f)}catch(G){Zc(G)}f.currentTarget=null,d=R}}}}function Oe(n,r){var o=r[rl];o===void 0&&(o=r[rl]=new Set);var u=n+"__bubble";o.has(u)||(eE(r,n,2,!1),o.add(u))}function Dp(n,r,o){var u=0;r&&(u|=4),eE(o,n,u,r)}var fh="_reactListening"+Math.random().toString(36).slice(2);function Op(n){if(!n[fh]){n[fh]=!0,al.forEach(function(o){o!=="selectionchange"&&(SR.has(o)||Dp(o,!1,n),Dp(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[fh]||(r[fh]=!0,Dp("selectionchange",!1,r))}}function eE(n,r,o,u){switch(wE(r)){case 2:var f=WR;break;case 8:f=XR;break;default:f=Gp}o=f.bind(null,r,o,n),f=void 0,!Un||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Mp(n,r,o,u,f){var d=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var T=u.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=u.return;v!==null;){var R=v.tag;if((R===3||R===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=Fi(T),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){u=d=v;continue e}T=T.parentNode}}u=u.return}pc(function(){var z=d,G=Ln(o),Y=[];e:{var B=V_.get(n);if(B!==void 0){var F=xa,Ee=n;switch(n){case"keypress":if(gi(o)===0)break e;case"keydown":case"keyup":F=qa;break;case"focusin":Ee="focus",F=za;break;case"focusout":Ee="blur",F=za;break;case"beforeblur":case"afterblur":F=za;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Sc;break;case O_:case M_:case k_:F=Ba;break;case P_:F=wc;break;case"scroll":case"scrollend":F=mc;break;case"wheel":F=Ha;break;case"copy":case"cut":case"paste":F=Fa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=yl;break;case"toggle":case"beforetoggle":F=Rc}var me=(r&4)!==0,et=!me&&(n==="scroll"||n==="scrollend"),P=me?B!==null?B+"Capture":null:B;me=[];for(var O=z,L;O!==null;){var K=O;if(L=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||L===null||P===null||(K=Lr(O,P),K!=null&&me.push(Wl(O,K,L))),et)break;O=O.return}0<me.length&&(B=new F(B,Ee,null,o,G),Y.push({event:B,listeners:me}))}}if((r&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",B&&o!==Gi&&(Ee=o.relatedTarget||o.fromElement)&&(Fi(Ee)||Ee[Vn]))break e;if((F||B)&&(B=G.window===G?G:(B=G.ownerDocument)?B.defaultView||B.parentWindow:window,F?(Ee=o.relatedTarget||o.toElement,F=z,Ee=Ee?Fi(Ee):null,Ee!==null&&(et=l(Ee),me=Ee.tag,Ee!==et||me!==5&&me!==27&&me!==6)&&(Ee=null)):(F=null,Ee=z),F!==Ee)){if(me=zn,K="onMouseLeave",P="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(me=yl,K="onPointerLeave",P="onPointerEnter",O="pointer"),et=F==null?B:fi(F),L=Ee==null?B:fi(Ee),B=new me(K,O+"leave",F,o,G),B.target=et,B.relatedTarget=L,K=null,Fi(G)===z&&(me=new me(P,O+"enter",Ee,o,G),me.target=L,me.relatedTarget=et,K=me),et=K,F&&Ee)t:{for(me=F,P=Ee,O=0,L=me;L;L=mo(L))O++;for(L=0,K=P;K;K=mo(K))L++;for(;0<O-L;)me=mo(me),O--;for(;0<L-O;)P=mo(P),L--;for(;O--;){if(me===P||P!==null&&me===P.alternate)break t;me=mo(me),P=mo(P)}me=null}else me=null;F!==null&&tE(Y,B,F,me,!1),Ee!==null&&et!==null&&tE(Y,et,Ee,me,!0)}}e:{if(B=z?fi(z):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var oe=E_;else if(Ot(B))if(T_)oe=Vb;else{oe=kb;var Ne=Mb}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&hl(z.elementType)&&(oe=E_):oe=Pb;if(oe&&(oe=oe(n,z))){Xi(Y,oe,o,G);break e}Ne&&Ne(n,B,z),n==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Ns(B,"number",B.value)}switch(Ne=z?fi(z):window,n){case"focusin":(Ot(Ne)||Ne.contentEditable==="true")&&(ja=Ne,ud=z,Tl=null);break;case"focusout":Tl=ud=ja=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,N_(Y,o,G);break;case"selectionchange":if(Lb)break;case"keydown":case"keyup":N_(Y,o,G)}var ce;if(vi)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ve?H(n,o)&&(ge="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(y&&o.locale!=="ko"&&(Ve||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ve&&(ce=dl()):(mi=G,Ds="value"in mi?mi.value:mi.textContent,Ve=!0)),Ne=dh(z,ge),0<Ne.length&&(ge=new gl(ge,n,null,o,G),Y.push({event:ge,listeners:Ne}),ce?ge.data=ce:(ce=ee(o),ce!==null&&(ge.data=ce)))),(ce=_?Dt(n,o):xe(n,o))&&(ge=dh(z,"onBeforeInput"),0<ge.length&&(Ne=new gl("onBeforeInput","beforeinput",null,o,G),Y.push({event:Ne,listeners:ge}),Ne.data=ce)),vR(Y,n,z,o,G)}Jv(Y,r)})}function Wl(n,r,o){return{instance:n,listener:r,currentTarget:o}}function dh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Lr(n,o),f!=null&&u.unshift(Wl(n,f,d)),f=Lr(n,r),f!=null&&u.push(Wl(n,f,d))),n.tag===3)return u;n=n.return}return[]}function mo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function tE(n,r,o,u,f){for(var d=r._reactName,v=[];o!==null&&o!==u;){var T=o,R=T.alternate,z=T.stateNode;if(T=T.tag,R!==null&&R===u)break;T!==5&&T!==26&&T!==27||z===null||(R=z,f?(z=Lr(o,d),z!=null&&v.unshift(Wl(o,z,R))):f||(z=Lr(o,d),z!=null&&v.push(Wl(o,z,R)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var AR=/\r\n?/g,wR=/\u0000|\uFFFD/g;function nE(n){return(typeof n=="string"?n:""+n).replace(AR,`
`).replace(wR,"")}function iE(n,r){return r=nE(r),nE(n)===r}function ph(){}function Je(n,r,o,u,f,d){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||xn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&xn(n,""+u);break;case"className":di(n,"class",u);break;case"tabIndex":di(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":di(n,o,u);break;case"style":cl(n,u,d);break;case"data":if(r!=="object"){di(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Va(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(r!=="input"&&Je(n,r,"name",f.name,f,null),Je(n,r,"formEncType",f.formEncType,f,null),Je(n,r,"formMethod",f.formMethod,f,null),Je(n,r,"formTarget",f.formTarget,f,null)):(Je(n,r,"encType",f.encType,f,null),Je(n,r,"method",f.method,f,null),Je(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Va(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=ph);break;case"onScroll":u!=null&&Oe("scroll",n);break;case"onScrollEnd":u!=null&&Oe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Va(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Oe("beforetoggle",n),Oe("toggle",n),Is(n,"popover",u);break;case"xlinkActuate":Yt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Yt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Yt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Yt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Yt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Yt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Yt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Yt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Yt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Is(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=nd.get(o)||o,Is(n,o,u))}}function kp(n,r,o,u,f,d){switch(o){case"style":cl(n,u,d);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?xn(n,u):(typeof u=="number"||typeof u=="bigint")&&xn(n,""+u);break;case"onScroll":u!=null&&Oe("scroll",n);break;case"onScrollEnd":u!=null&&Oe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=ph);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Da.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),d=n[At]||null,d=d!=null?d[o]:null,typeof d=="function"&&n.removeEventListener(r,d,f),typeof u=="function")){typeof d!="function"&&d!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Is(n,o,u)}}}function $t(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",n),Oe("load",n);var u=!1,f=!1,d;for(d in o)if(o.hasOwnProperty(d)){var v=o[d];if(v!=null)switch(d){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Je(n,r,d,v,o,null)}}f&&Je(n,r,"srcSet",o.srcSet,o,null),u&&Je(n,r,"src",o.src,o,null);return;case"input":Oe("invalid",n);var T=d=v=f=null,R=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var G=o[u];if(G!=null)switch(u){case"name":f=G;break;case"type":v=G;break;case"checked":R=G;break;case"defaultChecked":z=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:Je(n,r,u,G,o,null)}}Pr(n,d,T,R,z,v,f,!1),Pa(n);return;case"select":Oe("invalid",n),u=v=d=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":u=T;default:Je(n,r,f,T,o,null)}r=d,o=v,n.multiple=!!u,r!=null?ji(n,!!u,r,!1):o!=null&&ji(n,!!u,o,!0);return;case"textarea":Oe("invalid",n),d=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(T=o[v],T!=null))switch(v){case"value":u=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Je(n,r,v,T,o,null)}Vr(n,u,f,d),Pa(n);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Je(n,r,R,u,o,null)}return;case"dialog":Oe("beforetoggle",n),Oe("toggle",n),Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":Oe("load",n);break;case"video":case"audio":for(u=0;u<Ql.length;u++)Oe(Ql[u],n);break;case"image":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"embed":case"source":case"link":Oe("error",n),Oe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Je(n,r,z,u,o,null)}return;default:if(hl(r)){for(G in o)o.hasOwnProperty(G)&&(u=o[G],u!==void 0&&kp(n,r,G,u,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null&&Je(n,r,T,u,o,null))}function bR(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,T=null,R=null,z=null,G=null;for(F in o){var Y=o[F];if(o.hasOwnProperty(F)&&Y!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":R=Y;default:u.hasOwnProperty(F)||Je(n,r,F,null,u,Y)}}for(var B in u){var F=u[B];if(Y=o[B],u.hasOwnProperty(B)&&(F!=null||Y!=null))switch(B){case"type":d=F;break;case"name":f=F;break;case"checked":z=F;break;case"defaultChecked":G=F;break;case"value":v=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==Y&&Je(n,r,B,F,u,Y)}}An(n,v,T,R,z,G,d,f);return;case"select":F=v=T=B=null;for(d in o)if(R=o[d],o.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":F=R;default:u.hasOwnProperty(d)||Je(n,r,d,null,u,R)}for(f in u)if(d=u[f],R=o[f],u.hasOwnProperty(f)&&(d!=null||R!=null))switch(f){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==R&&Je(n,r,f,d,u,R)}r=T,o=v,u=F,B!=null?ji(n,!!o,B,!1):!!u!=!!o&&(r!=null?ji(n,!!o,r,!0):ji(n,!!o,o?[]:"",!1));return;case"textarea":F=B=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Je(n,r,T,null,u,f)}for(v in u)if(f=u[v],d=o[v],u.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":B=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Je(n,r,v,f,u,d)}$e(n,B,F);return;case"option":for(var Ee in o)if(B=o[Ee],o.hasOwnProperty(Ee)&&B!=null&&!u.hasOwnProperty(Ee))switch(Ee){case"selected":n.selected=!1;break;default:Je(n,r,Ee,null,u,B)}for(R in u)if(B=u[R],F=o[R],u.hasOwnProperty(R)&&B!==F&&(B!=null||F!=null))switch(R){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Je(n,r,R,B,u,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in o)B=o[me],o.hasOwnProperty(me)&&B!=null&&!u.hasOwnProperty(me)&&Je(n,r,me,null,u,B);for(z in u)if(B=u[z],F=o[z],u.hasOwnProperty(z)&&B!==F&&(B!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:Je(n,r,z,B,u,F)}return;default:if(hl(r)){for(var et in o)B=o[et],o.hasOwnProperty(et)&&B!==void 0&&!u.hasOwnProperty(et)&&kp(n,r,et,void 0,u,B);for(G in u)B=u[G],F=o[G],!u.hasOwnProperty(G)||B===F||B===void 0&&F===void 0||kp(n,r,G,B,u,F);return}}for(var P in o)B=o[P],o.hasOwnProperty(P)&&B!=null&&!u.hasOwnProperty(P)&&Je(n,r,P,null,u,B);for(Y in u)B=u[Y],F=o[Y],!u.hasOwnProperty(Y)||B===F||B==null&&F==null||Je(n,r,Y,B,u,F)}var Pp=null,Vp=null;function mh(n){return n.nodeType===9?n:n.ownerDocument}function sE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function xp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lp=null;function RR(){var n=window.event;return n&&n.type==="popstate"?n===Lp?!1:(Lp=n,!0):(Lp=null,!1)}var aE=typeof setTimeout=="function"?setTimeout:void 0,CR=typeof clearTimeout=="function"?clearTimeout:void 0,oE=typeof Promise=="function"?Promise:void 0,IR=typeof queueMicrotask=="function"?queueMicrotask:typeof oE<"u"?function(n){return oE.resolve(null).then(n).catch(NR)}:aE;function NR(n){setTimeout(function(){throw n})}function Ks(n){return n==="head"}function lE(n,r){var o=r,u=0,f=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(0<u&&8>u){o=u;var v=n.ownerDocument;if(o&1&&Xl(v.documentElement),o&2&&Xl(v.body),o&4)for(o=v.head,Xl(o),v=o.firstChild;v;){var T=v.nextSibling,R=v.nodeName;v[Dr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&v.rel.toLowerCase()==="stylesheet"||o.removeChild(v),v=T}}if(f===0){n.removeChild(d),su(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=d}while(o);su(r)}function Up(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Up(o),Cs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function DR(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Dr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=ni(n.nextSibling),n===null)break}return null}function OR(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=ni(n.nextSibling),n===null))return null;return n}function zp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function MR(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function ni(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var Bp=null;function uE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function cE(n,r,o){switch(r=mh(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function Xl(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Cs(n)}var Kn=new Map,hE=new Set;function gh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var us=te.d;te.d={f:kR,r:PR,D:VR,C:xR,L:LR,m:UR,X:BR,S:zR,M:FR};function kR(){var n=us.f(),r=oh();return n||r}function PR(n){var r=hi(n);r!==null&&r.tag===5&&r.type==="form"?Oy(r):us.r(n)}var go=typeof document>"u"?null:document;function fE(n,r,o){var u=go;if(u&&typeof r=="string"&&r){var f=wt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),hE.has(f)||(hE.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),$t(r,"link",n),yt(r),u.head.appendChild(r)))}}function VR(n){us.D(n),fE("dns-prefetch",n,null)}function xR(n,r){us.C(n,r),fE("preconnect",n,r)}function LR(n,r,o){us.L(n,r,o);var u=go;if(u&&n&&r){var f='link[rel="preload"][as="'+wt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+wt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+wt(o.imageSizes)+'"]')):f+='[href="'+wt(n)+'"]';var d=f;switch(r){case"style":d=_o(n);break;case"script":d=yo(n)}Kn.has(d)||(n=E({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Kn.set(d,n),u.querySelector(f)!==null||r==="style"&&u.querySelector($l(d))||r==="script"&&u.querySelector(Zl(d))||(r=u.createElement("link"),$t(r,"link",n),yt(r),u.head.appendChild(r)))}}function UR(n,r){us.m(n,r);var o=go;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+wt(u)+'"][href="'+wt(n)+'"]',d=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=yo(n)}if(!Kn.has(d)&&(n=E({rel:"modulepreload",href:n},r),Kn.set(d,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zl(d)))return}u=o.createElement("link"),$t(u,"link",n),yt(u),o.head.appendChild(u)}}}function zR(n,r,o){us.S(n,r,o);var u=go;if(u&&n){var f=dn(u).hoistableStyles,d=_o(n);r=r||"default";var v=f.get(d);if(!v){var T={loading:0,preload:null};if(v=u.querySelector($l(d)))T.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Kn.get(d))&&Fp(n,o);var R=v=u.createElement("link");yt(R),$t(R,"link",n),R._p=new Promise(function(z,G){R.onload=z,R.onerror=G}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,_h(v,r,u)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(d,v)}}}function BR(n,r){us.X(n,r);var o=go;if(o&&n){var u=dn(o).hoistableScripts,f=yo(n),d=u.get(f);d||(d=o.querySelector(Zl(f)),d||(n=E({src:n,async:!0},r),(r=Kn.get(f))&&qp(n,r),d=o.createElement("script"),yt(d),$t(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function FR(n,r){us.M(n,r);var o=go;if(o&&n){var u=dn(o).hoistableScripts,f=yo(n),d=u.get(f);d||(d=o.querySelector(Zl(f)),d||(n=E({src:n,async:!0,type:"module"},r),(r=Kn.get(f))&&qp(n,r),d=o.createElement("script"),yt(d),$t(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function dE(n,r,o,u){var f=(f=Se.current)?gh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=_o(o.href),o=dn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=_o(o.href);var d=dn(f).hoistableStyles,v=d.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,v),(d=f.querySelector($l(n)))&&!d._p&&(v.instance=d,v.state.loading=5),Kn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Kn.set(n,o),d||qR(f,n,o,v.state))),r&&u===null)throw Error(s(528,""));return v}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=yo(o),o=dn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function _o(n){return'href="'+wt(n)+'"'}function $l(n){return'link[rel="stylesheet"]['+n+"]"}function pE(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function qR(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),$t(r,"link",o),yt(r),n.head.appendChild(r))}function yo(n){return'[src="'+wt(n)+'"]'}function Zl(n){return"script[async]"+n}function mE(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+wt(o.href)+'"]');if(u)return r.instance=u,yt(u),u;var f=E({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),yt(u),$t(u,"style",f),_h(u,o.precedence,n),r.instance=u;case"stylesheet":f=_o(o.href);var d=n.querySelector($l(f));if(d)return r.state.loading|=4,r.instance=d,yt(d),d;u=pE(o),(f=Kn.get(f))&&Fp(u,f),d=(n.ownerDocument||n).createElement("link"),yt(d);var v=d;return v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),$t(d,"link",u),r.state.loading|=4,_h(d,o.precedence,n),r.instance=d;case"script":return d=yo(o.src),(f=n.querySelector(Zl(d)))?(r.instance=f,yt(f),f):(u=o,(f=Kn.get(d))&&(u=E({},o),qp(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),yt(f),$t(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,_h(u,o.precedence,n));return r.instance}function _h(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,d=f,v=0;v<u.length;v++){var T=u[v];if(T.dataset.precedence===r)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function Fp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function qp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var yh=null;function gE(n,r,o){if(yh===null){var u=new Map,f=yh=new Map;f.set(o,u)}else f=yh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var d=o[f];if(!(d[Dr]||d[Nt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=n+v;var T=u.get(v);T?T.push(d):u.set(v,[d])}}return u}function _E(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function HR(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function yE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Jl=null;function jR(){}function GR(n,r,o){if(Jl===null)throw Error(s(475));var u=Jl;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=_o(o.href),d=n.querySelector($l(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=vh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=d,yt(d);return}d=n.ownerDocument||n,o=pE(o),(f=Kn.get(f))&&Fp(o,f),d=d.createElement("link"),yt(d);var v=d;v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),$t(d,"link",o),r.instance=d}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=vh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function KR(){if(Jl===null)throw Error(s(475));var n=Jl;return n.stylesheets&&n.count===0&&Hp(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&Hp(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function vh(){if(this.count--,this.count===0){if(this.stylesheets)Hp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Eh=null;function Hp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Eh=new Map,r.forEach(YR,n),Eh=null,vh.call(n))}function YR(n,r){if(!(r.state.loading&4)){var o=Eh.get(n);if(o)var u=o.get(null);else{o=new Map,Eh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=r.instance,v=f.getAttribute("data-precedence"),d=o.get(v)||u,d===u&&o.set(null,f),o.set(v,f),this.count++,u=vh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var eu={$$typeof:se,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function QR(n,r,o,u,f,d,v,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.hiddenUpdates=zi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function vE(n,r,o,u,f,d,v,T,R,z,G,Y){return n=new QR(n,r,o,v,T,R,z,Y),r=1,d===!0&&(r|=24),d=bn(3,null,null,r),n.current=d,d.stateNode=n,r=wd(),r.refCount++,n.pooledCache=r,r.refCount++,d.memoizedState={element:u,isDehydrated:o,cache:r},Id(d),n}function EE(n){return n?(n=Qa,n):Qa}function TE(n,r,o,u,f,d){f=EE(f),u.context===null?u.context=f:u.pendingContext=f,u=ks(r),u.payload={element:o},d=d===void 0?null:d,d!==null&&(u.callback=d),o=Ps(n,u,r),o!==null&&(Dn(o,n,r),Dl(o,n,r))}function SE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function jp(n,r){SE(n,r),(n=n.alternate)&&SE(n,r)}function AE(n){if(n.tag===13){var r=Ya(n,67108864);r!==null&&Dn(r,n,67108864),jp(n,67108864)}}var Th=!0;function WR(n,r,o,u){var f=j.T;j.T=null;var d=te.p;try{te.p=2,Gp(n,r,o,u)}finally{te.p=d,j.T=f}}function XR(n,r,o,u){var f=j.T;j.T=null;var d=te.p;try{te.p=8,Gp(n,r,o,u)}finally{te.p=d,j.T=f}}function Gp(n,r,o,u){if(Th){var f=Kp(u);if(f===null)Mp(n,r,u,Sh,o),bE(n,u);else if(ZR(f,n,r,o,u))u.stopPropagation();else if(bE(n,u),r&4&&-1<$R.indexOf(n)){for(;f!==null;){var d=hi(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=$n(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var R=1<<31-nn(v);T.entanglements[1]|=R,v&=~R}bi(d),(We&6)===0&&(rh=Pn()+500,Yl(0))}}break;case 13:T=Ya(d,2),T!==null&&Dn(T,d,2),oh(),jp(d,2)}if(d=Kp(u),d===null&&Mp(n,r,u,Sh,o),d===f)break;f=d}f!==null&&u.stopPropagation()}else Mp(n,r,u,null,o)}}function Kp(n){return n=Ln(n),Yp(n)}var Sh=null;function Yp(n){if(Sh=null,n=Fi(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=h(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Sh=n,null}function wE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xf()){case Zo:return 2;case Ra:return 8;case br:case $f:return 32;case Ca:return 268435456;default:return 32}default:return 32}}var Qp=!1,Ys=null,Qs=null,Ws=null,tu=new Map,nu=new Map,Xs=[],$R="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bE(n,r){switch(n){case"focusin":case"focusout":Ys=null;break;case"dragenter":case"dragleave":Qs=null;break;case"mouseover":case"mouseout":Ws=null;break;case"pointerover":case"pointerout":tu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":nu.delete(r.pointerId)}}function iu(n,r,o,u,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:d,targetContainers:[f]},r!==null&&(r=hi(r),r!==null&&AE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function ZR(n,r,o,u,f){switch(r){case"focusin":return Ys=iu(Ys,n,r,o,u,f),!0;case"dragenter":return Qs=iu(Qs,n,r,o,u,f),!0;case"mouseover":return Ws=iu(Ws,n,r,o,u,f),!0;case"pointerover":var d=f.pointerId;return tu.set(d,iu(tu.get(d)||null,n,r,o,u,f)),!0;case"gotpointercapture":return d=f.pointerId,nu.set(d,iu(nu.get(d)||null,n,r,o,u,f)),!0}return!1}function RE(n){var r=Fi(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=h(o),r!==null){n.blockedOn=r,oc(n.priority,function(){if(o.tag===13){var u=Nn();u=ws(u);var f=Ya(o,u);f!==null&&Dn(f,o,u),jp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ah(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Kp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Gi=u,o.target.dispatchEvent(u),Gi=null}else return r=hi(o),r!==null&&AE(r),n.blockedOn=o,!1;r.shift()}return!0}function CE(n,r,o){Ah(n)&&o.delete(r)}function JR(){Qp=!1,Ys!==null&&Ah(Ys)&&(Ys=null),Qs!==null&&Ah(Qs)&&(Qs=null),Ws!==null&&Ah(Ws)&&(Ws=null),tu.forEach(CE),nu.forEach(CE)}function wh(n,r){n.blockedOn===r&&(n.blockedOn=null,Qp||(Qp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,JR)))}var bh=null;function IE(n){bh!==n&&(bh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){bh===n&&(bh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(Yp(u||o)===null)continue;break}var d=hi(o);d!==null&&(n.splice(r,3),r-=3,Yd(d,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function su(n){function r(R){return wh(R,n)}Ys!==null&&wh(Ys,n),Qs!==null&&wh(Qs,n),Ws!==null&&wh(Ws,n),tu.forEach(r),nu.forEach(r);for(var o=0;o<Xs.length;o++){var u=Xs[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Xs.length&&(o=Xs[0],o.blockedOn===null);)RE(o),o.blockedOn===null&&Xs.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],d=o[u+1],v=f[At]||null;if(typeof d=="function")v||IE(o);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[At]||null)T=v.formAction;else if(Yp(f)!==null)continue}else T=v.action;typeof T=="function"?o[u+1]=T:(o.splice(u,3),u-=3),IE(o)}}}function Wp(n){this._internalRoot=n}Rh.prototype.render=Wp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Nn();TE(o,u,n,r,null,null)},Rh.prototype.unmount=Wp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;TE(n.current,2,null,n,null,null),oh(),r[Vn]=null}};function Rh(n){this._internalRoot=n}Rh.prototype.unstable_scheduleHydration=function(n){if(n){var r=bs();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Xs.length&&r!==0&&r<Xs[o].priority;o++);Xs.splice(o,0,n),o===0&&RE(n)}};var NE=e.version;if(NE!=="19.1.0")throw Error(s(527,NE,"19.1.0"));te.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var e1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ch=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ch.isDisabled&&Ch.supportsFiber)try{mt=Ch.inject(e1),Qe=Ch}catch{}}return au.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=Gy,d=Ky,v=Yy,T=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=vE(n,1,!1,null,null,o,u,f,d,v,T,null),n[Vn]=r.current,Op(n),new Wp(r)},au.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",d=Gy,v=Ky,T=Yy,R=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),r=vE(n,1,!0,r,o??null,u,f,d,v,T,R,z),r.context=EE(null),o=r.current,u=Nn(),u=ws(u),f=ks(u),f.callback=null,Ps(o,f,u),o=u,r.current.lanes=o,Bi(r,o),bi(r),n[Vn]=r.current,Op(n),new Rh(r)},au.version="19.1.0",au}var zE;function c1(){if(zE)return Zp.exports;zE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Zp.exports=u1(),Zp.exports}var h1=c1();const f1=({width:i=800,height:e=600,cellSize:t=10})=>{const s=Tt.useRef(null),[a,l]=Tt.useState(!1),[h,p]=Tt.useState(0),m=Math.floor(i/t),g=Math.floor(e/t),E=Tt.useCallback(()=>{const se=Array(g).fill(null).map(()=>Array(m).fill(!1));return[[1,0],[2,1],[0,2],[1,2],[2,2]].forEach(([N,b])=>{N<g&&b<m&&(se[N+5][b+5]=!0)}),[[0,1],[1,1],[2,1]].forEach(([N,b])=>{N+10<g&&b+20<m&&(se[N+10][b+20]=!0)}),[[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2],[0,4],[0,5],[0,6],[1,4],[1,6],[2,4],[2,5],[2,6]].forEach(([N,b])=>{N+15<g&&b+35<m&&(se[N+15][b+35]=!0)}),se},[g,m]),[S,w]=Tt.useState(E),U=(se,_e,re)=>{let le=0;for(let N=-1;N<=1;N++)for(let b=-1;b<=1;b++){if(N===0&&b===0)continue;const C=_e+N,M=re+b;C>=0&&C<g&&M>=0&&M<m&&se[C][M]&&le++}return le},q=Tt.useCallback(se=>{const _e=Array(g).fill(null).map(()=>Array(m).fill(!1));for(let re=0;re<g;re++)for(let le=0;le<m;le++){const N=U(se,re,le);se[re][le]?_e[re][le]=N===2||N===3:_e[re][le]=N===3}return _e},[g,m]),Z=Tt.useCallback(se=>{const _e=s.current;if(!_e)return;const re=_e.getContext("2d");if(re){re.fillStyle="#f0f0f0",re.fillRect(0,0,i,e),re.fillStyle="#333";for(let le=0;le<g;le++)for(let N=0;N<m;N++)se[le][N]&&re.fillRect(N*t,le*t,t-1,t-1);re.strokeStyle="#ddd",re.lineWidth=1;for(let le=0;le<=m;le++)re.beginPath(),re.moveTo(le*t,0),re.lineTo(le*t,e),re.stroke();for(let le=0;le<=g;le++)re.beginPath(),re.moveTo(0,le*t),re.lineTo(i,le*t),re.stroke()}},[i,e,t,g,m]),W=Tt.useCallback(()=>{w(se=>{const _e=q(se);return p(re=>re+1),_e})},[q]),Te=()=>{l(!a)},ue=()=>{l(!1),p(0),w(E())};return Tt.useEffect(()=>{if(a){const se=setInterval(W,20);return()=>clearInterval(se)}},[a,W]),Tt.useEffect(()=>{Z(S)},[S,Z]),qe.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[qe.jsx("h2",{children:"Conway's Game of Life"}),qe.jsxs("div",{style:{marginBottom:"20px"},children:[qe.jsx("button",{onClick:Te,style:{padding:"10px 20px",fontSize:"16px",marginRight:"10px",backgroundColor:a?"#ff4444":"#44ff44",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:a?"Stop":"Start"}),qe.jsx("button",{onClick:ue,style:{padding:"10px 20px",fontSize:"16px",backgroundColor:"#4444ff",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Reset"})]}),qe.jsx("div",{style:{marginBottom:"10px"},children:qe.jsxs("strong",{children:["Generation: ",h]})}),qe.jsx("canvas",{ref:s,width:i,height:e,style:{border:"2px solid #333",backgroundColor:"#f0f0f0"}})]})},d1=()=>{};var BE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=function(i,e){if(!i)throw Fo(e)},Fo=function(i){return new Error("Firebase Database ("+Q0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},p1=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],h=i[t++],p=i[t++],m=((a&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|h&63)}}return e.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],h=a+1<i.length,p=h?i[a+1]:0,m=a+2<i.length,g=m?i[a+2]:0,E=l>>2,S=(l&3)<<4|p>>4;let w=(p&15)<<2|g>>6,U=g&63;m||(U=64,h||(w=64)),s.push(t[E],t[S],t[w],t[U])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(W0(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):p1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],p=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const S=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||p==null||g==null||S==null)throw new m1;const w=l<<2|p>>4;if(s.push(w),g!==64){const U=p<<4&240|g>>2;if(s.push(U),S!==64){const q=g<<6&192|S;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class m1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X0=function(i){const e=W0(i);return rg.encodeByteArray(e,!0)},Qh=function(i){return X0(i).replace(/\./g,"")},Wh=function(i){try{return rg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(i){return $0(void 0,i)}function $0(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!_1(t)||(i[t]=$0(i[t],e[t]));return i}function _1(i){return i!=="__proto__"}/**
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
 */function y1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const v1=()=>y1().__FIREBASE_DEFAULTS__,E1=()=>{if(typeof process>"u"||typeof BE>"u")return;const i=BE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},T1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Wh(i[1]);return e&&JSON.parse(e)},Rf=()=>{try{return d1()||v1()||E1()||T1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Z0=i=>{var e,t;return(t=(e=Rf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},J0=i=>{const e=Z0(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},eS=()=>{var i;return(i=Rf())===null||i===void 0?void 0:i.config},tS=i=>{var e;return(e=Rf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function vr(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function og(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function nS(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Qh(JSON.stringify(t)),Qh(JSON.stringify(h)),""].join(".")}const yu={};function S1(){const i={prod:[],emulator:[]};for(const e of Object.keys(yu))yu[e]?i.emulator.push(e):i.prod.push(e);return i}function A1(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let FE=!1;function lg(i,e){if(typeof window>"u"||typeof document>"u"||!vr(window.location.host)||yu[i]===e||yu[i]||FE)return;yu[i]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=S1().prod.length>0;function h(){const w=document.getElementById(s);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,U){w.setAttribute("width","24"),w.setAttribute("id",U),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{FE=!0,h()},w}function E(w,U){w.setAttribute("id",U),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function S(){const w=A1(s),U=t("text"),q=document.getElementById(U)||document.createElement("span"),Z=t("learnmore"),W=document.getElementById(Z)||document.createElement("a"),Te=t("preprendIcon"),ue=document.getElementById(Te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const se=w.element;p(se),E(W,Z);const _e=g();m(ue,Te),se.append(ue,q,W,_e),document.body.appendChild(se)}l?(q.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function w1(){var i;const e=(i=Rf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function R1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function iS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C1(){const i=fn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function I1(){return Q0.NODE_ADMIN===!0}function N1(){return!w1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D1(){try{return typeof indexedDB=="object"}catch{return!1}}function O1(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="FirebaseError";class Ts extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=M1,Object.setPrototypeOf(this,Ts.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hu.prototype.create)}}class Hu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],h=l?k1(l,s):"Error",p=`${this.serviceName}: ${h} (${a}).`;return new Ts(a,p,s)}}function k1(i,e){return i.replace(P1,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const P1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(i){return JSON.parse(i)}function Jt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Nu(Wh(l[0])||""),t=Nu(Wh(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},V1=function(i){const e=sS(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},x1=function(i){const e=sS(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ko(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Em(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Xh(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function ur(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],h=e[a];if(qE(l)&&qE(h)){if(!ur(l,h))return!1}else if(l!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function qE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hu(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function fu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)s[S]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let S=0;S<16;S++)s[S]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let S=16;S<80;S++){const w=s[S-3]^s[S-8]^s[S-14]^s[S-16];s[S]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],h=this.chain_[2],p=this.chain_[3],m=this.chain_[4],g,E;for(let S=0;S<80;S++){S<40?S<20?(g=p^l&(h^p),E=1518500249):(g=l^h^p,E=1859775393):S<60?(g=l&h|p&(l|h),E=2400959708):(g=l^h^p,E=3395469782);const w=(a<<5|a>>>27)+g+m+E+s[S]&4294967295;m=p,p=h,h=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let h=this.inbuf_;for(;a<t;){if(h===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[h]=e.charCodeAt(a),++h,++a,h===this.blockSize){this.compress_(l),h=0;break}}else for(;a<t;)if(l[h]=e[a],++h,++a,h===this.blockSize){this.compress_(l),h=0;break}}this.inbuf_=h,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function U1(i,e){const t=new z1(i,e);return t.subscribe.bind(t)}class z1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");B1(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=nm),a.error===void 0&&(a.error=nm),a.complete===void 0&&(a.complete=nm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B1(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function nm(){}function F1(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ie(s<i.length,"Surrogate pair missing trail surrogate.");const h=i.charCodeAt(s)-56320;a=65536+(l<<10)+h}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Cf=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Tn(i){return i&&i._delegate?i._delegate:i}class cr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ra="[DEFAULT]";/**
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
 */class H1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ag;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(G1(e))try{this.getOrInitializeService({instanceIdentifier:ra})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ra){return this.instances.has(e)}getOptions(e=ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&h.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const h=this.instances.get(a);return h&&e(h,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:j1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ra){return this.component?this.component.multipleInstances?e:ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j1(i){return i===ra?void 0:i}function G1(i){return i.instantiationMode==="EAGER"}/**
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
 */class K1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new H1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Me||(Me={}));const Y1={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},Q1=Me.INFO,W1={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},X1=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=W1[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class If{constructor(e){this.name=e,this._logLevel=Q1,this._logHandler=X1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const $1=(i,e)=>e.some(t=>i instanceof t);let HE,jE;function Z1(){return HE||(HE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J1(){return jE||(jE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rS=new WeakMap,Tm=new WeakMap,aS=new WeakMap,im=new WeakMap,cg=new WeakMap;function eC(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",h)},l=()=>{t(sr(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&rS.set(t,i)}).catch(()=>{}),cg.set(e,i),e}function tC(i){if(Tm.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",h),i.removeEventListener("abort",h)},l=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",h),i.addEventListener("abort",h)});Tm.set(i,e)}let Sm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Tm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||aS.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function nC(i){Sm=i(Sm)}function iC(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(sm(this),e,...t);return aS.set(s,e.sort?e.sort():[e]),sr(s)}:J1().includes(i)?function(...e){return i.apply(sm(this),e),sr(rS.get(this))}:function(...e){return sr(i.apply(sm(this),e))}}function sC(i){return typeof i=="function"?iC(i):(i instanceof IDBTransaction&&tC(i),$1(i,Z1())?new Proxy(i,Sm):i)}function sr(i){if(i instanceof IDBRequest)return eC(i);if(im.has(i))return im.get(i);const e=sC(i);return e!==i&&(im.set(i,e),cg.set(e,i)),e}const sm=i=>cg.get(i);function rC(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const h=indexedDB.open(i,e),p=sr(h);return s&&h.addEventListener("upgradeneeded",m=>{s(sr(h.result),m.oldVersion,m.newVersion,sr(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const aC=["get","getKey","getAll","getAllKeys","count"],oC=["put","add","delete","clear"],rm=new Map;function GE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(rm.get(e))return rm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=oC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||aC.includes(t)))return;const l=async function(h,...p){const m=this.transaction(h,a?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),a&&m.done]))[0]};return rm.set(e,l),l}nC(i=>({...i,get:(e,t,s)=>GE(e,t)||i.get(e,t,s),has:(e,t)=>!!GE(e,t)||i.has(e,t)}));/**
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
 */class lC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uC(i){const e=i.getComponent();return e?.type==="VERSION"}const Am="@firebase/app",KE="0.13.2";/**
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
 */const gs=new If("@firebase/app"),cC="@firebase/app-compat",hC="@firebase/analytics-compat",fC="@firebase/analytics",dC="@firebase/app-check-compat",pC="@firebase/app-check",mC="@firebase/auth",gC="@firebase/auth-compat",_C="@firebase/database",yC="@firebase/data-connect",vC="@firebase/database-compat",EC="@firebase/functions",TC="@firebase/functions-compat",SC="@firebase/installations",AC="@firebase/installations-compat",wC="@firebase/messaging",bC="@firebase/messaging-compat",RC="@firebase/performance",CC="@firebase/performance-compat",IC="@firebase/remote-config",NC="@firebase/remote-config-compat",DC="@firebase/storage",OC="@firebase/storage-compat",MC="@firebase/firestore",kC="@firebase/ai",PC="@firebase/firestore-compat",VC="firebase",xC="11.10.0";/**
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
 */const wm="[DEFAULT]",LC={[Am]:"fire-core",[cC]:"fire-core-compat",[fC]:"fire-analytics",[hC]:"fire-analytics-compat",[pC]:"fire-app-check",[dC]:"fire-app-check-compat",[mC]:"fire-auth",[gC]:"fire-auth-compat",[_C]:"fire-rtdb",[yC]:"fire-data-connect",[vC]:"fire-rtdb-compat",[EC]:"fire-fn",[TC]:"fire-fn-compat",[SC]:"fire-iid",[AC]:"fire-iid-compat",[wC]:"fire-fcm",[bC]:"fire-fcm-compat",[RC]:"fire-perf",[CC]:"fire-perf-compat",[IC]:"fire-rc",[NC]:"fire-rc-compat",[DC]:"fire-gcs",[OC]:"fire-gcs-compat",[MC]:"fire-fst",[PC]:"fire-fst-compat",[kC]:"fire-vertex","fire-js":"fire-js",[VC]:"fire-js-all"};/**
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
 */const $h=new Map,UC=new Map,bm=new Map;function YE(i,e){try{i.container.addComponent(e)}catch(t){gs.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ca(i){const e=i.name;if(bm.has(e))return gs.debug(`There were multiple attempts to register component ${e}.`),!1;bm.set(e,i);for(const t of $h.values())YE(t,i);for(const t of UC.values())YE(t,i);return!0}function Nf(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Mn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const zC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Hu("app","Firebase",zC);/**
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
 */class BC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const ya=xC;function oS(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wm,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw rr.create("bad-app-name",{appName:String(a)});if(t||(t=eS()),!t)throw rr.create("no-options");const l=$h.get(a);if(l){if(ur(t,l.options)&&ur(s,l.config))return l;throw rr.create("duplicate-app",{appName:a})}const h=new K1(a);for(const m of bm.values())h.addComponent(m);const p=new BC(t,s,h);return $h.set(a,p),p}function hg(i=wm){const e=$h.get(i);if(!e&&i===wm&&eS())return oS();if(!e)throw rr.create("no-app",{appName:i});return e}function Ni(i,e,t){var s;let a=(s=LC[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const p=[`Unable to register library "${a}" with version "${e}":`];l&&p.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gs.warn(p.join(" "));return}ca(new cr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const FC="firebase-heartbeat-database",qC=1,Du="firebase-heartbeat-store";let am=null;function lS(){return am||(am=rC(FC,qC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Du)}catch(t){console.warn(t)}}}}).catch(i=>{throw rr.create("idb-open",{originalErrorMessage:i.message})})),am}async function HC(i){try{const t=(await lS()).transaction(Du),s=await t.objectStore(Du).get(uS(i));return await t.done,s}catch(e){if(e instanceof Ts)gs.warn(e.message);else{const t=rr.create("idb-get",{originalErrorMessage:e?.message});gs.warn(t.message)}}}async function QE(i,e){try{const s=(await lS()).transaction(Du,"readwrite");await s.objectStore(Du).put(e,uS(i)),await s.done}catch(t){if(t instanceof Ts)gs.warn(t.message);else{const s=rr.create("idb-set",{originalErrorMessage:t?.message});gs.warn(s.message)}}}function uS(i){return`${i.name}!${i.options.appId}`}/**
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
 */const jC=1024,GC=30;class KC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new QC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=WE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>GC){const h=WC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gs.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=WE(),{heartbeatsToSend:s,unsentEntries:a}=YC(this._heartbeatsCache.heartbeats),l=Qh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return gs.warn(t),""}}}function WE(){return new Date().toISOString().substring(0,10)}function YC(i,e=jC){const t=[];let s=i.slice();for(const a of i){const l=t.find(h=>h.agent===a.agent);if(l){if(l.dates.push(a.date),XE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),XE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class QC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D1()?O1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return QE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return QE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function XE(i){return Qh(JSON.stringify({version:2,heartbeats:i})).length}function WC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function XC(i){ca(new cr("platform-logger",e=>new lC(e),"PRIVATE")),ca(new cr("heartbeat",e=>new KC(e),"PRIVATE")),Ni(Am,KE,i),Ni(Am,KE,"esm2017"),Ni("fire-js","")}XC("");var $C="firebase",ZC="11.10.0";/**
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
 */Ni($C,ZC,"app");var $E={};const ZE="@firebase/database",JE="1.0.20";/**
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
 */let cS="";function JC(i){cS=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Nu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ss(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eI(e)}}catch{}return new tI},oa=hS("localStorage"),nI=hS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new If("@firebase/database"),iI=function(){let i=1;return function(){return i++}}(),fS=function(i){const e=q1(i),t=new L1;t.update(e);const s=t.digest();return rg.encodeByteArray(s)},ju=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ju.apply(null,s):typeof s=="object"?e+=Jt(s):e+=s,e+=" "}return e};let vu=null,eT=!0;const sI=function(i,e){ie(!0,"Can't turn on custom loggers persistently."),Co.logLevel=Me.VERBOSE,vu=Co.log.bind(Co)},ln=function(...i){if(eT===!0&&(eT=!1,vu===null&&nI.get("logging_enabled")===!0&&sI()),vu){const e=ju.apply(null,i);vu(e)}},Gu=function(i){return function(...e){ln(i,...e)}},Rm=function(...i){const e="FIREBASE INTERNAL ERROR: "+ju(...i);Co.error(e)},_s=function(...i){const e=`FIREBASE FATAL ERROR: ${ju(...i)}`;throw Co.error(e),new Error(e)},kn=function(...i){const e="FIREBASE WARNING: "+ju(...i);Co.warn(e)},rI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dS=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},aI=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Po="[MIN_NAME]",ha="[MAX_NAME]",Ho=function(i,e){if(i===e)return 0;if(i===Po||e===ha)return-1;if(e===Po||i===ha)return 1;{const t=tT(i),s=tT(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},oI=function(i,e){return i===e?0:i<e?-1:1},ou=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Jt(e))},fg=function(i){if(typeof i!="object"||i===null)return Jt(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Jt(e[s]),t+=":",t+=fg(i[e[s]]);return t+="}",t},pS=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function Xn(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const mS=function(i){ie(!dS(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,h,p,m;i===0?(l=0,h=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(p=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=p+s,h=Math.round(i*Math.pow(2,t-p)-Math.pow(2,t))):(l=0,h=Math.round(i/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const E=g.join("");let S="";for(m=0;m<64;m+=8){let w=parseInt(E.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),S=S+w}return S.toLowerCase()},lI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},cI=new RegExp("^-?(0*)\\d{1,10}$"),hI=-2147483648,fI=2147483647,tT=function(i){if(cI.test(i)){const e=Number(i);if(e>=hI&&e<=fI)return e}return null},Ku=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw kn("Exception was thrown by user callback.",t),e},Math.floor(0))}},dI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Eu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class pI{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Mn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){kn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kn(e)}}class xh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="5",gS="v",_S="s",yS="r",vS="f",ES=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,TS="ls",SS="p",Cm="ac",AS="websocket",wS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t,s,a,l=!1,h="",p=!1,m=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=h,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function gI(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function RS(i,e,t){ie(typeof e=="string","typeof type must == string"),ie(typeof t=="object","typeof params must == object");let s;if(e===AS)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===wS)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gI(i)&&(t.ns=i.namespace);const a=[];return Xn(t,(l,h)=>{a.push(l+"="+h)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.counters_={}}incrementCounter(e,t=1){Ss(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return g1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om={},lm={};function pg(i){const e=i.toString();return om[e]||(om[e]=new _I),om[e]}function yI(i,e){const t=i.toString();return lm[t]||(lm[t]=e()),lm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ku(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="start",EI="close",TI="pLPCommand",SI="pRTLPCB",CS="id",IS="pw",NS="ser",AI="cb",wI="seg",bI="ts",RI="d",CI="dframe",DS=1870,OS=30,II=DS-OS,NI=25e3,DI=3e4;class wo{constructor(e,t,s,a,l,h,p){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=h,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gu(e),this.stats_=pg(t),this.urlFn=m=>(this.appCheckToken&&(m[Cm]=this.appCheckToken),RS(t,wS,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new vI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DI)),aI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mg((...l)=>{const[h,p,m,g,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===nT)this.id=p,this.password=m;else if(h===EI)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...l)=>{const[h,p]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(h,p)},()=>{this.onClosed_()},this.urlFn);const s={};s[nT]="t",s[NS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[AI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gS]=dg,this.transportSessionId&&(s[_S]=this.transportSessionId),this.lastSessionId&&(s[TS]=this.lastSessionId),this.applicationId&&(s[SS]=this.applicationId),this.appCheckToken&&(s[Cm]=this.appCheckToken),typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(s[yS]=vS);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wo.forceAllow_=!0}static forceDisallow(){wo.forceDisallow_=!0}static isAvailable(){return wo.forceAllow_?!0:!wo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lI()&&!uI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=X0(t),a=pS(s,II);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[CI]="t",s[CS]=e,s[IS]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class mg{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iI(),window[TI+this.uniqueCallbackIdentifier]=e,window[SI+this.uniqueCallbackIdentifier]=t,this.myIFrame=mg.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(p){ln("frame writing exception"),p.stack&&ln(p.stack),ln(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ln("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[CS]=this.myID,e[IS]=this.myPW,e[NS]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+OS+s.length<=DS;){const h=this.pendingSegs.shift();s=s+"&"+wI+a+"="+h.seg+"&"+bI+a+"="+h.ts+"&"+RI+a+"="+h.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(NI)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ln("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=16384,MI=45e3;let Zh=null;typeof MozWebSocket<"u"?Zh=MozWebSocket:typeof WebSocket<"u"&&(Zh=WebSocket);class ii{constructor(e,t,s,a,l,h,p){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gu(this.connId),this.stats_=pg(t),this.connURL=ii.connectionURL_(t,h,p,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const h={};return h[gS]=dg,typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(h[yS]=vS),t&&(h[_S]=t),s&&(h[TS]=s),a&&(h[Cm]=a),l&&(h[SS]=l),RS(e,AS,h)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oa.set("previous_websocket_failure",!0);try{let s;I1(),this.mySock=new Zh(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zh!==null&&!ii.forceDisallow_}static previouslyFailed(){return oa.isInMemoryStorage||oa.get("previous_websocket_failure")===!0}markConnectionHealthy(){oa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Nu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ie(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=pS(t,OI);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(MI))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ii.responsesRequiredToBeHealthy=2;ii.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static get ALL_TRANSPORTS(){return[wo,ii]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ii&&ii.isAvailable();let s=t&&!ii.previouslyFailed();if(e.webSocketOnly&&(t||kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ii];else{const a=this.transports_=[];for(const l of Ou.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Ou.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ou.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=6e4,PI=5e3,VI=10*1024,xI=100*1024,um="t",iT="d",LI="s",sT="r",UI="e",rT="o",aT="a",oT="n",lT="p",zI="h";class BI{constructor(e,t,s,a,l,h,p,m,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=h,this.onReady_=p,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gu("c:"+this.id+":"),this.transportManager_=new Ou(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Eu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(um in e){const t=e[um];t===aT?this.upgradeIfSecondaryHealthy_():t===sT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===rT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ou("t",e),s=ou("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:aT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ou("t",e),s=ou("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ou(um,e);if(iT in e){const s=e[iT];if(t===zI){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===oT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===LI?this.onConnectionShutdown_(s):t===sT?this.onReset_(s):t===UI?Rm("Server Error: "+s):t===rT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),dg!==s&&kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Eu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Eu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.allowedEvents_=e,this.listeners_={},ie(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ie(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh extends kS{static getInstance(){return new Jh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ug()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ie(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=32,cT=768;class lt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function tt(){return new lt("")}function ze(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function hr(i){return i.pieces_.length-i.pieceNum_}function at(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new lt(i.pieces_,e)}function PS(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function FI(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function VS(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function xS(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new lt(e,0)}function jt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof lt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new lt(t,0)}function Pe(i){return i.pieceNum_>=i.pieces_.length}function Wn(i,e){const t=ze(i),s=ze(e);if(t===null)return e;if(t===s)return Wn(at(i),at(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function LS(i,e){if(hr(i)!==hr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function si(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(hr(i)>hr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class qI{constructor(e,t){this.errorPrefix_=t,this.parts_=VS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Cf(this.parts_[s]);US(this)}}function HI(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Cf(e),US(i)}function jI(i){const e=i.parts_.pop();i.byteLength_-=Cf(e),i.parts_.length>0&&(i.byteLength_-=1)}function US(i){if(i.byteLength_>cT)throw new Error(i.errorPrefix_+"has a key path longer than "+cT+" bytes ("+i.byteLength_+").");if(i.parts_.length>uT)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+uT+") or object contains a cycle "+aa(i))}function aa(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg extends kS{static getInstance(){return new gg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ie(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=1e3,GI=60*5*1e3,hT=30*1e3,KI=1.3,YI=3e4,QI="server_kill",fT=3;class ds extends MS{constructor(e,t,s,a,l,h,p,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=h,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=ds.nextPersistentConnectionId_++,this.log_=Gu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lu,this.maxReconnectDelay_=GI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Jt(l)),ie(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ag,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const p=h.d;h.s==="ok"?t.resolve(p):t.reject(p)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+l),this.listens.has(h)||this.listens.set(h,new Map),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ie(!this.listens.get(h).has(l),"listen() called twice for same path/queryId.");const p={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(h).set(l,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},h="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(h,l,p=>{const m=p.d,g=p.s;ds.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",p),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ss(e,"w")){const s=ko(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||x1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=V1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,h=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},h="n";a&&(l.q=s,l.t=a),this.sendRequest(h,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,h=>{a&&setTimeout(()=>{a(h.s,h.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const h={p:t,d:s};l!==void 0&&(h.h=l),this.outstandingPuts_.push({action:e,request:h,onComplete:a}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Jt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Rm("Unrecognized action received from server: "+Jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ie(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=lu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YI&&(this.reconnectDelay_=lu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+ds.nextConnectionId_++,l=this.lastSessionId;let h=!1,p=null;const m=function(){p?p.close():(h=!0,s())},g=function(S){ie(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(S)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,w]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);h?ln("getToken() completed but was canceled"):(ln("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=w&&w.token,p=new BI(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,U=>{kn(U+" ("+this.repoInfo_.toString()+")"),this.interrupt(QI)},l))}catch(S){this.log_("Failed to get token: "+S),h||(this.repoInfo_.nodeAdmin&&kn(S),m())}}}interrupt(e){ln("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ln("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Em(this.interruptReasons_)&&(this.reconnectDelay_=lu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>fg(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new lt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){ln("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fT&&(this.reconnectDelay_=hT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ln("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+cS.replace(/\./g,"-")]=1,ug()?e["framework.cordova"]=1:iS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jh.getInstance().currentlyOnline();return Em(this.interruptReasons_)&&e}}ds.nextPersistentConnectionId_=0;ds.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Be(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Be(Po,e),a=new Be(Po,t);return this.compare(s,a)!==0}minPost(){return Be.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih;class zS extends Df{static get __EMPTY_NODE(){return Ih}static set __EMPTY_NODE(e){Ih=e}compare(e,t){return Ho(e.name,t.name)}isDefinedOn(e){throw Fo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Be.MIN}maxPost(){return new Be(ha,Ih)}makePost(e,t){return ie(typeof e=="string","KeyIndex indexValue must always be a string."),new Be(e,Ih)}toString(){return".key"}}const Io=new zS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=t?s(e.key,t):1,a&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},On=class du{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??du.RED,this.left=a??Ci.EMPTY_NODE,this.right=l??Ci.EMPTY_NODE}copy(e,t,s,a,l){return new du(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ci.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ci.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,du.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,du.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};On.RED=!0;On.BLACK=!1;class WI{copy(e,t,s,a,l){return this}insert(e,t,s){return new On(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Ci=class Lh{constructor(e,t=Lh.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Lh(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,On.BLACK,null,null))}remove(e){return new Lh(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,On.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nh(this.root_,null,this.comparator_,!0,e)}};Ci.EMPTY_NODE=new WI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(i,e){return Ho(i.name,e.name)}function _g(i,e){return Ho(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Im;function $I(i){Im=i}const BS=function(i){return typeof i=="number"?"number:"+mS(i):"string:"+i},FS=function(i){if(i.isLeafNode()){const e=i.val();ie(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ss(e,".sv"),"Priority must be a string or number.")}else ie(i===Im||i.isEmpty(),"priority of unexpected type.");ie(i===Im||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dT;class qt{static set __childrenNodeConstructor(e){dT=e}static get __childrenNodeConstructor(){return dT}constructor(e,t=qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ie(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),FS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:ze(e)===".priority"?this.priorityNode_:qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ze(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ie(s!==".priority"||hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(at(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+BS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=mS(this.value_):e+=this.value_,this.lazyHash_=fS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qt.__childrenNodeConstructor?-1:(ie(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=qt.VALUE_TYPE_ORDER.indexOf(t),l=qt.VALUE_TYPE_ORDER.indexOf(s);return ie(a>=0,"Unknown leaf type: "+t),ie(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qS,HS;function ZI(i){qS=i}function JI(i){HS=i}class eN extends Df{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ho(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Be.MIN}maxPost(){return new Be(ha,new qt("[PRIORITY-POST]",HS))}makePost(e,t){const s=qS(e);return new Be(t,new qt("[PRIORITY-POST]",s))}toString(){return".priority"}}const hn=new eN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=Math.log(2);class nN{constructor(e){const t=l=>parseInt(Math.log(l)/tN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ef=function(i,e,t,s){i.sort(e);const a=function(m,g){const E=g-m;let S,w;if(E===0)return null;if(E===1)return S=i[m],w=t?t(S):S,new On(w,S.node,On.BLACK,null,null);{const U=parseInt(E/2,10)+m,q=a(m,U),Z=a(U+1,g);return S=i[U],w=t?t(S):S,new On(w,S.node,On.BLACK,q,Z)}},l=function(m){let g=null,E=null,S=i.length;const w=function(q,Z){const W=S-q,Te=S;S-=q;const ue=a(W+1,Te),se=i[W],_e=t?t(se):se;U(new On(_e,se.node,Z,null,ue))},U=function(q){g?(g.left=q,g=q):(E=q,g=q)};for(let q=0;q<m.count;++q){const Z=m.nextBitIsOne(),W=Math.pow(2,m.count-(q+1));Z?w(W,On.BLACK):(w(W,On.BLACK),w(W,On.RED))}return E},h=new nN(i.length),p=l(h);return new Ci(s||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm;const vo={};class cs{static get Default(){return ie(vo&&hn,"ChildrenNode.ts has not been loaded"),cm=cm||new cs({".priority":vo},{".priority":hn}),cm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ko(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ci?t:null}hasIndex(e){return Ss(this.indexSet_,e.toString())}addIndex(e,t){ie(e!==Io,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Be.Wrap);let h=l.getNext();for(;h;)a=a||e.isDefinedOn(h.node),s.push(h),h=l.getNext();let p;a?p=ef(s,e.getCompare()):p=vo;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const E=Object.assign({},this.indexes_);return E[m]=p,new cs(E,g)}addToIndexes(e,t){const s=Xh(this.indexes_,(a,l)=>{const h=ko(this.indexSet_,l);if(ie(h,"Missing index implementation for "+l),a===vo)if(h.isDefinedOn(e.node)){const p=[],m=t.getIterator(Be.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&p.push(g),g=m.getNext();return p.push(e),ef(p,h.getCompare())}else return vo;else{const p=t.get(e.name);let m=a;return p&&(m=m.remove(new Be(e.name,p))),m.insert(e,e.node)}});return new cs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Xh(this.indexes_,a=>{if(a===vo)return a;{const l=t.get(e.name);return l?a.remove(new Be(e.name,l)):a}});return new cs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;class Ke{static get EMPTY_NODE(){return uu||(uu=new Ke(new Ci(_g),null,cs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&FS(this.priorityNode_),this.children_.isEmpty()&&ie(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||uu}updatePriority(e){return this.children_.isEmpty()?this:new Ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?uu:t}}getChild(e){const t=ze(e);return t===null?this:this.getImmediateChild(t).getChild(at(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ie(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Be(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const h=a.isEmpty()?uu:this.priorityNode_;return new Ke(a,h,l)}}updateChild(e,t){const s=ze(e);if(s===null)return t;{ie(ze(e)!==".priority"||hr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(at(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(hn,(h,p)=>{t[h]=p.val(e),s++,l&&Ke.INTEGER_REGEXP_.test(h)?a=Math.max(a,Number(h)):l=!1}),!e&&l&&a<2*s){const h=[];for(const p in t)h[p]=t[p];return h}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+BS(this.getPriority().val())+":"),this.forEachChild(hn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":fS(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Be(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Be(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Be(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Be.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Be.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yu?-1:0}withIndex(e){if(e===Io||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Io||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(hn),a=t.getIterator(hn);let l=s.getNext(),h=a.getNext();for(;l&&h;){if(l.name!==h.name||!l.node.equals(h.node))return!1;l=s.getNext(),h=a.getNext()}return l===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===Io?null:this.indexMap_.get(e.toString())}}Ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iN extends Ke{constructor(){super(new Ci(_g),Ke.EMPTY_NODE,cs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ke.EMPTY_NODE}isEmpty(){return!1}}const Yu=new iN;Object.defineProperties(Be,{MIN:{value:new Be(Po,Ke.EMPTY_NODE)},MAX:{value:new Be(ha,Yu)}});zS.__EMPTY_NODE=Ke.EMPTY_NODE;qt.__childrenNodeConstructor=Ke;$I(Yu);JI(Yu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=!0;function un(i,e=null){if(i===null)return Ke.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),ie(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new qt(t,un(e))}if(!(i instanceof Array)&&sN){const t=[];let s=!1;if(Xn(i,(h,p)=>{if(h.substring(0,1)!=="."){const m=un(p);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new Be(h,m)))}}),t.length===0)return Ke.EMPTY_NODE;const l=ef(t,XI,h=>h.name,_g);if(s){const h=ef(t,hn.getCompare());return new Ke(l,un(e),new cs({".priority":h},{".priority":hn}))}else return new Ke(l,un(e),cs.Default)}else{let t=Ke.EMPTY_NODE;return Xn(i,(s,a)=>{if(Ss(i,s)&&s.substring(0,1)!=="."){const l=un(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(un(e))}}ZI(un);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN extends Df{constructor(e){super(),this.indexPath_=e,ie(!Pe(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ho(e.name,t.name):l}makePost(e,t){const s=un(e),a=Ke.EMPTY_NODE.updateChild(this.indexPath_,s);return new Be(t,a)}maxPost(){const e=Ke.EMPTY_NODE.updateChild(this.indexPath_,Yu);return new Be(ha,e)}toString(){return VS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN extends Df{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ho(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Be.MIN}maxPost(){return Be.MAX}makePost(e,t){const s=un(e);return new Be(t,s)}toString(){return".value"}}const oN=new aN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(i){return{type:"value",snapshotNode:i}}function uN(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function cN(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function pT(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function hN(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=hn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ie(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ie(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Po}hasEnd(){return this.endSet_}getIndexEndValue(){return ie(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ie(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ha}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ie(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===hn}copy(){const e=new yg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mT(i){const e={};if(i.isDefault())return e;let t;if(i.index_===hn?t="$priority":i.index_===oN?t="$value":i.index_===Io?t="$key":(ie(i.index_ instanceof rN,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=Jt(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Jt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Jt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Jt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Jt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function gT(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==hn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends MS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ie(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Gu("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const h=tf.getListenId_(e,s),p={};this.listens_[h]=p;const m=mT(e._queryParams);this.restRequest_(l+".json",m,(g,E)=>{let S=E;if(g===404&&(S=null,g=null),g===null&&this.onDataUpdate_(l,S,!1,s),ko(this.listens_,h)===p){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=tf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=mT(e._queryParams),s=e._path.toString(),a=new ag;return this.restRequest_(s+".json",t,(l,h)=>{let p=h;l===404&&(p=null,l=null),l===null?(this.onDataUpdate_(s,p,!1,null),a.resolve(p)):a.reject(new Error(p))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qo(t);this.log_("Sending REST request for "+h);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(s&&p.readyState===4){this.log_("REST Response for "+h+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=Nu(p.responseText)}catch{kn("Failed to parse JSON response for "+h+": "+p.responseText)}s(null,m)}else p.status!==401&&p.status!==404&&kn("Got unsuccessful REST response for "+h+" Status: "+p.status),s(p.status);s=null}},p.open("GET",h,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.rootNode_=Ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){return{value:null,children:new Map}}function jS(i,e,t){if(Pe(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=ze(e);i.children.has(s)||i.children.set(s,nf());const a=i.children.get(s);e=at(e),jS(a,e,t)}}function Nm(i,e,t){i.value!==null?t(e,i.value):dN(i,(s,a)=>{const l=new lt(e.toString()+"/"+s);Nm(a,l,t)})}function dN(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Xn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=10*1e3,mN=30*1e3,gN=5*60*1e3;class _N{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pN(e);const s=_T+(mN-_T)*Math.random();Eu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Xn(e,(a,l)=>{l>0&&Ss(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Eu(this.reportStats_.bind(this),Math.floor(Math.random()*2*gN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ii||(Ii={}));function GS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function KS(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function YS(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ii.ACK_USER_WRITE,this.source=GS()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return ie(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new sf(tt(),t,this.revert)}}else return ie(ze(this.path)===e,"operationForChild called for unrelated child."),new sf(at(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ii.OVERWRITE}operationForChild(e){return Pe(this.path)?new fa(this.source,tt(),this.snap.getImmediateChild(e)):new fa(this.source,at(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ii.MERGE}operationForChild(e){if(Pe(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new fa(this.source,tt(),t.value):new Mu(this.source,tt(),t)}else return ie(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mu(this.source,at(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ze(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function yN(i,e,t,s){const a=[],l=[];return e.forEach(h=>{h.type==="child_changed"&&i.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&l.push(hN(h.childName,h.snapshotNode))}),cu(i,a,"child_removed",e,s,t),cu(i,a,"child_added",e,s,t),cu(i,a,"child_moved",l,s,t),cu(i,a,"child_changed",e,s,t),cu(i,a,"value",e,s,t),a}function cu(i,e,t,s,a,l){const h=s.filter(p=>p.type===t);h.sort((p,m)=>EN(i,p,m)),h.forEach(p=>{const m=vN(i,p,l);a.forEach(g=>{g.respondsTo(p.type)&&e.push(g.createEvent(m,i.query_))})})}function vN(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function EN(i,e,t){if(e.childName==null||t.childName==null)throw Fo("Should only compare child_ events.");const s=new Be(e.childName,e.snapshotNode),a=new Be(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(i,e){return{eventCache:i,serverCache:e}}function Tu(i,e,t,s){return QS(new vg(e,t,s),i.serverCache)}function WS(i,e,t,s){return QS(i.eventCache,new vg(e,t,s))}function Dm(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function da(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;const TN=()=>(hm||(hm=new Ci(oI)),hm);class rt{static fromObject(e){let t=new rt(null);return Xn(e,(s,a)=>{t=t.set(new lt(s),a)}),t}constructor(e,t=TN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:tt(),value:this.value};if(Pe(e))return null;{const s=ze(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(at(e),t);return l!=null?{path:jt(new lt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const t=ze(e),s=this.children.get(t);return s!==null?s.subtree(at(e)):new rt(null)}}set(e,t){if(Pe(e))return new rt(t,this.children);{const s=ze(e),l=(this.children.get(s)||new rt(null)).set(at(e),t),h=this.children.insert(s,l);return new rt(this.value,h)}}remove(e){if(Pe(e))return this.children.isEmpty()?new rt(null):new rt(null,this.children);{const t=ze(e),s=this.children.get(t);if(s){const a=s.remove(at(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new rt(null):new rt(this.value,l)}else return this}}get(e){if(Pe(e))return this.value;{const t=ze(e),s=this.children.get(t);return s?s.get(at(e)):null}}setTree(e,t){if(Pe(e))return t;{const s=ze(e),l=(this.children.get(s)||new rt(null)).setTree(at(e),t);let h;return l.isEmpty()?h=this.children.remove(s):h=this.children.insert(s,l),new rt(this.value,h)}}fold(e){return this.fold_(tt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(jt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,tt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Pe(e))return null;{const l=ze(e),h=this.children.get(l);return h?h.findOnPath_(at(e),jt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,tt(),t)}foreachOnPath_(e,t,s){if(Pe(e))return this;{this.value&&s(t,this.value);const a=ze(e),l=this.children.get(a);return l?l.foreachOnPath_(at(e),jt(t,a),s):new rt(null)}}foreach(e){this.foreach_(tt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(jt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.writeTree_=e}static empty(){return new oi(new rt(null))}}function Su(i,e,t){if(Pe(e))return new oi(new rt(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const h=Wn(a,e);return l=l.updateChild(h,t),new oi(i.writeTree_.set(a,l))}else{const a=new rt(t),l=i.writeTree_.setTree(e,a);return new oi(l)}}}function yT(i,e,t){let s=i;return Xn(t,(a,l)=>{s=Su(s,jt(e,a),l)}),s}function vT(i,e){if(Pe(e))return oi.empty();{const t=i.writeTree_.setTree(e,new rt(null));return new oi(t)}}function Om(i,e){return va(i,e)!=null}function va(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(Wn(t.path,e)):null}function ET(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(hn,(s,a)=>{e.push(new Be(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Be(s,a.value))}),e}function ar(i,e){if(Pe(e))return i;{const t=va(i,e);return t!=null?new oi(new rt(t)):new oi(i.writeTree_.subtree(e))}}function Mm(i){return i.writeTree_.isEmpty()}function Vo(i,e){return XS(tt(),i.writeTree_,e)}function XS(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ie(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=XS(jt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(jt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(i,e){return nA(e,i)}function SN(i,e,t,s,a){ie(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=Su(i.visibleWrites,e,t)),i.lastWriteId=s}function AN(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function wN(i,e){const t=i.allWrites.findIndex(p=>p.writeId===e);ie(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,h=i.allWrites.length-1;for(;a&&h>=0;){const p=i.allWrites[h];p.visible&&(h>=t&&bN(p,s.path)?a=!1:si(s.path,p.path)&&(l=!0)),h--}if(a){if(l)return RN(i),!0;if(s.snap)i.visibleWrites=vT(i.visibleWrites,s.path);else{const p=s.children;Xn(p,m=>{i.visibleWrites=vT(i.visibleWrites,jt(s.path,m))})}return!0}else return!1}function bN(i,e){if(i.snap)return si(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&si(jt(i.path,t),e))return!0;return!1}function RN(i){i.visibleWrites=ZS(i.allWrites,CN,tt()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function CN(i){return i.visible}function ZS(i,e,t){let s=oi.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const h=l.path;let p;if(l.snap)si(t,h)?(p=Wn(t,h),s=Su(s,p,l.snap)):si(h,t)&&(p=Wn(h,t),s=Su(s,tt(),l.snap.getChild(p)));else if(l.children){if(si(t,h))p=Wn(t,h),s=yT(s,p,l.children);else if(si(h,t))if(p=Wn(h,t),Pe(p))s=yT(s,tt(),l.children);else{const m=ko(l.children,ze(p));if(m){const g=m.getChild(at(p));s=Su(s,tt(),g)}}}else throw Fo("WriteRecord should have .snap or .children")}}return s}function JS(i,e,t,s,a){if(!s&&!a){const l=va(i.visibleWrites,e);if(l!=null)return l;{const h=ar(i.visibleWrites,e);if(Mm(h))return t;if(t==null&&!Om(h,tt()))return null;{const p=t||Ke.EMPTY_NODE;return Vo(h,p)}}}else{const l=ar(i.visibleWrites,e);if(!a&&Mm(l))return t;if(!a&&t==null&&!Om(l,tt()))return null;{const h=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(si(g.path,e)||si(e,g.path))},p=ZS(i.allWrites,h,e),m=t||Ke.EMPTY_NODE;return Vo(p,m)}}}function IN(i,e,t){let s=Ke.EMPTY_NODE;const a=va(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(hn,(l,h)=>{s=s.updateImmediateChild(l,h)}),s;if(t){const l=ar(i.visibleWrites,e);return t.forEachChild(hn,(h,p)=>{const m=Vo(ar(l,new lt(h)),p);s=s.updateImmediateChild(h,m)}),ET(l).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}else{const l=ar(i.visibleWrites,e);return ET(l).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}}function NN(i,e,t,s,a){ie(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=jt(e,t);if(Om(i.visibleWrites,l))return null;{const h=ar(i.visibleWrites,l);return Mm(h)?a.getChild(t):Vo(h,a.getChild(t))}}function DN(i,e,t,s){const a=jt(e,t),l=va(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const h=ar(i.visibleWrites,a);return Vo(h,s.getNode().getImmediateChild(t))}else return null}function ON(i,e){return va(i.visibleWrites,e)}function MN(i,e,t,s,a,l,h){let p;const m=ar(i.visibleWrites,e),g=va(m,tt());if(g!=null)p=g;else if(t!=null)p=Vo(m,t);else return[];if(p=p.withIndex(h),!p.isEmpty()&&!p.isLeafNode()){const E=[],S=h.getCompare(),w=l?p.getReverseIteratorFrom(s,h):p.getIteratorFrom(s,h);let U=w.getNext();for(;U&&E.length<a;)S(U,s)!==0&&E.push(U),U=w.getNext();return E}else return[]}function kN(){return{visibleWrites:oi.empty(),allWrites:[],lastWriteId:-1}}function km(i,e,t,s){return JS(i.writeTree,i.treePath,e,t,s)}function eA(i,e){return IN(i.writeTree,i.treePath,e)}function TT(i,e,t,s){return NN(i.writeTree,i.treePath,e,t,s)}function rf(i,e){return ON(i.writeTree,jt(i.treePath,e))}function PN(i,e,t,s,a,l){return MN(i.writeTree,i.treePath,e,t,s,a,l)}function Eg(i,e,t){return DN(i.writeTree,i.treePath,e,t)}function tA(i,e){return nA(jt(i.treePath,e),i.writeTree)}function nA(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ie(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ie(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,pT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,cN(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,uN(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,pT(s,e.snapshotNode,a.oldSnap));else throw Fo("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const iA=new xN;class Tg{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new vg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Eg(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:da(this.viewCache_),l=PN(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function LN(i,e){ie(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),ie(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function UN(i,e,t,s,a){const l=new VN;let h,p;if(t.type===Ii.OVERWRITE){const g=t;g.source.fromUser?h=Pm(i,e,g.path,g.snap,s,a,l):(ie(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered()&&!Pe(g.path),h=af(i,e,g.path,g.snap,s,a,p,l))}else if(t.type===Ii.MERGE){const g=t;g.source.fromUser?h=BN(i,e,g.path,g.children,s,a,l):(ie(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered(),h=Vm(i,e,g.path,g.children,s,a,p,l))}else if(t.type===Ii.ACK_USER_WRITE){const g=t;g.revert?h=HN(i,e,g.path,s,a,l):h=FN(i,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Ii.LISTEN_COMPLETE)h=qN(i,e,t.path,s,l);else throw Fo("Unknown operation type: "+t.type);const m=l.getChanges();return zN(e,h,m),{viewCache:h,changes:m}}function zN(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Dm(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(lN(Dm(e)))}}function sA(i,e,t,s,a,l){const h=e.eventCache;if(rf(s,t)!=null)return e;{let p,m;if(Pe(t))if(ie(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=da(e),E=g instanceof Ke?g:Ke.EMPTY_NODE,S=eA(s,E);p=i.filter.updateFullNode(e.eventCache.getNode(),S,l)}else{const g=km(s,da(e));p=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=ze(t);if(g===".priority"){ie(hr(t)===1,"Can't have a priority with additional path components");const E=h.getNode();m=e.serverCache.getNode();const S=TT(s,t,E,m);S!=null?p=i.filter.updatePriority(E,S):p=h.getNode()}else{const E=at(t);let S;if(h.isCompleteForChild(g)){m=e.serverCache.getNode();const w=TT(s,t,h.getNode(),m);w!=null?S=h.getNode().getImmediateChild(g).updateChild(E,w):S=h.getNode().getImmediateChild(g)}else S=Eg(s,g,e.serverCache);S!=null?p=i.filter.updateChild(h.getNode(),g,S,E,a,l):p=h.getNode()}}return Tu(e,p,h.isFullyInitialized()||Pe(t),i.filter.filtersNodes())}}function af(i,e,t,s,a,l,h,p){const m=e.serverCache;let g;const E=h?i.filter:i.filter.getIndexedFilter();if(Pe(t))g=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const U=m.getNode().updateChild(t,s);g=E.updateFullNode(m.getNode(),U,null)}else{const U=ze(t);if(!m.isCompleteForPath(t)&&hr(t)>1)return e;const q=at(t),W=m.getNode().getImmediateChild(U).updateChild(q,s);U===".priority"?g=E.updatePriority(m.getNode(),W):g=E.updateChild(m.getNode(),U,W,q,iA,null)}const S=WS(e,g,m.isFullyInitialized()||Pe(t),E.filtersNodes()),w=new Tg(a,S,l);return sA(i,S,t,a,w,p)}function Pm(i,e,t,s,a,l,h){const p=e.eventCache;let m,g;const E=new Tg(a,e,l);if(Pe(t))g=i.filter.updateFullNode(e.eventCache.getNode(),s,h),m=Tu(e,g,!0,i.filter.filtersNodes());else{const S=ze(t);if(S===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=Tu(e,g,p.isFullyInitialized(),p.isFiltered());else{const w=at(t),U=p.getNode().getImmediateChild(S);let q;if(Pe(w))q=s;else{const Z=E.getCompleteChild(S);Z!=null?PS(w)===".priority"&&Z.getChild(xS(w)).isEmpty()?q=Z:q=Z.updateChild(w,s):q=Ke.EMPTY_NODE}if(U.equals(q))m=e;else{const Z=i.filter.updateChild(p.getNode(),S,q,w,E,h);m=Tu(e,Z,p.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function ST(i,e){return i.eventCache.isCompleteForChild(e)}function BN(i,e,t,s,a,l,h){let p=e;return s.foreach((m,g)=>{const E=jt(t,m);ST(e,ze(E))&&(p=Pm(i,p,E,g,a,l,h))}),s.foreach((m,g)=>{const E=jt(t,m);ST(e,ze(E))||(p=Pm(i,p,E,g,a,l,h))}),p}function AT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Vm(i,e,t,s,a,l,h,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;Pe(t)?g=s:g=new rt(null).setTree(t,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((S,w)=>{if(E.hasChild(S)){const U=e.serverCache.getNode().getImmediateChild(S),q=AT(i,U,w);m=af(i,m,new lt(S),q,a,l,h,p)}}),g.children.inorderTraversal((S,w)=>{const U=!e.serverCache.isCompleteForChild(S)&&w.value===null;if(!E.hasChild(S)&&!U){const q=e.serverCache.getNode().getImmediateChild(S),Z=AT(i,q,w);m=af(i,m,new lt(S),Z,a,l,h,p)}}),m}function FN(i,e,t,s,a,l,h){if(rf(a,t)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(Pe(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return af(i,e,t,m.getNode().getChild(t),a,l,p,h);if(Pe(t)){let g=new rt(null);return m.getNode().forEachChild(Io,(E,S)=>{g=g.set(new lt(E),S)}),Vm(i,e,t,g,a,l,p,h)}else return e}else{let g=new rt(null);return s.foreach((E,S)=>{const w=jt(t,E);m.isCompleteForPath(w)&&(g=g.set(E,m.getNode().getChild(w)))}),Vm(i,e,t,g,a,l,p,h)}}function qN(i,e,t,s,a){const l=e.serverCache,h=WS(e,l.getNode(),l.isFullyInitialized()||Pe(t),l.isFiltered());return sA(i,h,t,s,iA,a)}function HN(i,e,t,s,a,l){let h;if(rf(s,t)!=null)return e;{const p=new Tg(s,e,a),m=e.eventCache.getNode();let g;if(Pe(t)||ze(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=km(s,da(e));else{const S=e.serverCache.getNode();ie(S instanceof Ke,"serverChildren would be complete if leaf node"),E=eA(s,S)}E=E,g=i.filter.updateFullNode(m,E,l)}else{const E=ze(t);let S=Eg(s,E,e.serverCache);S==null&&e.serverCache.isCompleteForChild(E)&&(S=m.getImmediateChild(E)),S!=null?g=i.filter.updateChild(m,E,S,at(t),p,l):e.eventCache.getNode().hasChild(E)?g=i.filter.updateChild(m,E,Ke.EMPTY_NODE,at(t),p,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=km(s,da(e)),h.isLeafNode()&&(g=i.filter.updateFullNode(g,h,l)))}return h=e.serverCache.isFullyInitialized()||rf(s,tt())!=null,Tu(e,g,h,i.filter.filtersNodes())}}function jN(i,e){const t=da(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Pe(e)&&!t.getImmediateChild(ze(e)).isEmpty())?t.getChild(e):null}function wT(i,e,t,s){e.type===Ii.MERGE&&e.source.queryId!==null&&(ie(da(i.viewCache_),"We should always have a full cache before handling merges"),ie(Dm(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=UN(i.processor_,a,e,t,s);return LN(i.processor_,l.viewCache),ie(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,GN(i,l.changes,l.viewCache.eventCache.getNode())}function GN(i,e,t,s){const a=i.eventRegistrations_;return yN(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bT;function KN(i){ie(!bT,"__referenceConstructor has already been defined"),bT=i}function Sg(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return ie(l!=null,"SyncTree gave us an op for an invalid query."),wT(l,e,t,s)}else{let l=[];for(const h of i.views.values())l=l.concat(wT(h,e,t,s));return l}}function Ag(i,e){let t=null;for(const s of i.views.values())t=t||jN(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RT;function YN(i){ie(!RT,"__referenceConstructor has already been defined"),RT=i}class CT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new rt(null),this.pendingWriteTree_=kN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function QN(i,e,t,s,a){return SN(i.pendingWriteTree_,e,t,s,a),a?Mf(i,new fa(GS(),e,t)):[]}function bo(i,e,t=!1){const s=AN(i.pendingWriteTree_,e);if(wN(i.pendingWriteTree_,e)){let l=new rt(null);return s.snap!=null?l=l.set(tt(),!0):Xn(s.children,h=>{l=l.set(new lt(h),!0)}),Mf(i,new sf(s.path,l,t))}else return[]}function Of(i,e,t){return Mf(i,new fa(KS(),e,t))}function WN(i,e,t){const s=rt.fromObject(t);return Mf(i,new Mu(KS(),e,s))}function XN(i,e,t,s){const a=lA(i,s);if(a!=null){const l=uA(a),h=l.path,p=l.queryId,m=Wn(h,e),g=new fa(YS(p),m,t);return cA(i,h,g)}else return[]}function $N(i,e,t,s){const a=lA(i,s);if(a){const l=uA(a),h=l.path,p=l.queryId,m=Wn(h,e),g=rt.fromObject(t),E=new Mu(YS(p),m,g);return cA(i,h,E)}else return[]}function rA(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(h,p)=>{const m=Wn(h,e),g=Ag(p,m);if(g)return g});return JS(a,e,l,t,!0)}function Mf(i,e){return aA(e,i.syncPointTree_,null,$S(i.pendingWriteTree_,tt()))}function aA(i,e,t,s){if(Pe(i.path))return oA(i,e,t,s);{const a=e.get(tt());t==null&&a!=null&&(t=Ag(a,tt()));let l=[];const h=ze(i.path),p=i.operationForChild(h),m=e.children.get(h);if(m&&p){const g=t?t.getImmediateChild(h):null,E=tA(s,h);l=l.concat(aA(p,m,g,E))}return a&&(l=l.concat(Sg(a,i,s,t))),l}}function oA(i,e,t,s){const a=e.get(tt());t==null&&a!=null&&(t=Ag(a,tt()));let l=[];return e.children.inorderTraversal((h,p)=>{const m=t?t.getImmediateChild(h):null,g=tA(s,h),E=i.operationForChild(h);E&&(l=l.concat(oA(E,p,m,g)))}),a&&(l=l.concat(Sg(a,i,s,t))),l}function lA(i,e){return i.tagToQueryMap.get(e)}function uA(i){const e=i.indexOf("$");return ie(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new lt(i.substr(0,e))}}function cA(i,e,t){const s=i.syncPointTree_.get(e);ie(s,"Missing sync point for query tag that we're tracking");const a=$S(i.pendingWriteTree_,e);return Sg(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wg(t)}node(){return this.node_}}class bg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=jt(this.path_,e);return new bg(this.syncTree_,t)}node(){return rA(this.syncTree_,this.path_)}}const ZN=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},IT=function(i,e,t){if(!i||typeof i!="object")return i;if(ie(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return JN(i[".sv"],e,t);if(typeof i[".sv"]=="object")return eD(i[".sv"],e);ie(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},JN=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:ie(!1,"Unexpected server value: "+i)}},eD=function(i,e,t){i.hasOwnProperty("increment")||ie(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&ie(!1,"Unexpected increment value: "+s);const a=e.node();if(ie(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const h=a.getValue();return typeof h!="number"?s:h+s},tD=function(i,e,t,s){return Rg(e,new bg(t,i),s)},nD=function(i,e,t){return Rg(i,new wg(e),t)};function Rg(i,e,t){const s=i.getPriority().val(),a=IT(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const h=i,p=IT(h.getValue(),e,t);return p!==h.getValue()||a!==h.getPriority().val()?new qt(p,un(a)):i}else{const h=i;return l=h,a!==h.getPriority().val()&&(l=l.updatePriority(new qt(a))),h.forEachChild(hn,(p,m)=>{const g=Rg(m,e.getImmediateChild(p),t);g!==m&&(l=l.updateImmediateChild(p,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ig(i,e){let t=e instanceof lt?e:new lt(e),s=i,a=ze(t);for(;a!==null;){const l=ko(s.node.children,a)||{children:{},childCount:0};s=new Cg(a,s,l),t=at(t),a=ze(t)}return s}function jo(i){return i.node.value}function hA(i,e){i.node.value=e,xm(i)}function fA(i){return i.node.childCount>0}function iD(i){return jo(i)===void 0&&!fA(i)}function kf(i,e){Xn(i.node.children,(t,s)=>{e(new Cg(t,i,s))})}function dA(i,e,t,s){t&&e(i),kf(i,a=>{dA(a,e,!0)})}function sD(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Qu(i){return new lt(i.parent===null?i.name:Qu(i.parent)+"/"+i.name)}function xm(i){i.parent!==null&&rD(i.parent,i.name,i)}function rD(i,e,t){const s=iD(t),a=Ss(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,xm(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,xm(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=/[\[\].#$\/\u0000-\u001F\u007F]/,oD=/[\[\].#$\u0000-\u001F\u007F]/,fm=10*1024*1024,pA=function(i){return typeof i=="string"&&i.length!==0&&!aD.test(i)},lD=function(i){return typeof i=="string"&&i.length!==0&&!oD.test(i)},uD=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),lD(i)},mA=function(i,e,t){const s=t instanceof lt?new qI(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+aa(s));if(typeof e=="function")throw new Error(i+"contains a function "+aa(s)+" with contents = "+e.toString());if(dS(e))throw new Error(i+"contains "+e.toString()+" "+aa(s));if(typeof e=="string"&&e.length>fm/3&&Cf(e)>fm)throw new Error(i+"contains a string greater than "+fm+" utf8 bytes "+aa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Xn(e,(h,p)=>{if(h===".value")a=!0;else if(h!==".priority"&&h!==".sv"&&(l=!0,!pA(h)))throw new Error(i+" contains an invalid key ("+h+") "+aa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HI(s,h),mA(i,p,s),jI(s)}),a&&l)throw new Error(i+' contains ".value" child '+aa(s)+" in addition to actual children.")}},cD=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!uD(t))throw new Error(F1(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fD(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!LS(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function Ea(i,e,t){fD(i,t),dD(i,s=>si(s,e)||si(e,s))}function dD(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(pD(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function pD(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();vu&&ln("event: "+t.toString()),Ku(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="repo_interrupt",gD=25;class _D{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nf(),this.transactionQueueTree_=new Cg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yD(i,e,t){if(i.stats_=pg(i.repoInfo_),i.forceRestClient_||dI())i.server_=new tf(i.repoInfo_,(s,a,l,h)=>{NT(i,s,a,l,h)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>DT(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Jt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new ds(i.repoInfo_,e,(s,a,l,h)=>{NT(i,s,a,l,h)},s=>{DT(i,s)},s=>{ED(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=yI(i.repoInfo_,()=>new _N(i.stats_,i.server_)),i.infoData_=new fN,i.infoSyncTree_=new CT({startListening:(s,a,l,h)=>{let p=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(p=Of(i.infoSyncTree_,s._path,m),setTimeout(()=>{h("ok")},0)),p},stopListening:()=>{}}),Ng(i,"connected",!1),i.serverSyncTree_=new CT({startListening:(s,a,l,h)=>(i.server_.listen(s,l,a,(p,m)=>{const g=h(p,m);Ea(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function vD(i){const t=i.infoData_.getNode(new lt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function gA(i){return ZN({timestamp:vD(i)})}function NT(i,e,t,s,a){i.dataUpdateCount++;const l=new lt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let h=[];if(a)if(s){const m=Xh(t,g=>un(g));h=$N(i.serverSyncTree_,l,m,a)}else{const m=un(t);h=XN(i.serverSyncTree_,l,m,a)}else if(s){const m=Xh(t,g=>un(g));h=WN(i.serverSyncTree_,l,m)}else{const m=un(t);h=Of(i.serverSyncTree_,l,m)}let p=l;h.length>0&&(p=Og(i,l)),Ea(i.eventQueue_,p,h)}function DT(i,e){Ng(i,"connected",e),e===!1&&SD(i)}function ED(i,e){Xn(e,(t,s)=>{Ng(i,t,s)})}function Ng(i,e,t){const s=new lt("/.info/"+e),a=un(t);i.infoData_.updateSnapshot(s,a);const l=Of(i.infoSyncTree_,s,a);Ea(i.eventQueue_,s,l)}function TD(i){return i.nextWriteId_++}function SD(i){_A(i,"onDisconnectEvents");const e=gA(i),t=nf();Nm(i.onDisconnect_,tt(),(a,l)=>{const h=tD(a,l,i.serverSyncTree_,e);jS(t,a,h)});let s=[];Nm(t,tt(),(a,l)=>{s=s.concat(Of(i.serverSyncTree_,a,l));const h=RD(i,a);Og(i,h)}),i.onDisconnect_=nf(),Ea(i.eventQueue_,tt(),s)}function AD(i){i.persistentConnection_&&i.persistentConnection_.interrupt(mD)}function _A(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),ln(t,...e)}function yA(i,e,t){return rA(i.serverSyncTree_,e,t)||Ke.EMPTY_NODE}function Dg(i,e=i.transactionQueueTree_){if(e||Pf(i,e),jo(e)){const t=EA(i,e);ie(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&wD(i,Qu(e),t)}else fA(e)&&kf(e,t=>{Dg(i,t)})}function wD(i,e,t){const s=t.map(g=>g.currentWriteId),a=yA(i,e,s);let l=a;const h=a.hash();for(let g=0;g<t.length;g++){const E=t[g];ie(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const S=Wn(e,E.path);l=l.updateChild(S,E.currentOutputSnapshotRaw)}const p=l.val(!0),m=e;i.server_.put(m.toString(),p,g=>{_A(i,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const S=[];for(let w=0;w<t.length;w++)t[w].status=2,E=E.concat(bo(i.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&S.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Pf(i,Ig(i.transactionQueueTree_,e)),Dg(i,i.transactionQueueTree_),Ea(i.eventQueue_,e,E);for(let w=0;w<S.length;w++)Ku(S[w])}else{if(g==="datastale")for(let S=0;S<t.length;S++)t[S].status===3?t[S].status=4:t[S].status=0;else{kn("transaction at "+m.toString()+" failed: "+g);for(let S=0;S<t.length;S++)t[S].status=4,t[S].abortReason=g}Og(i,e)}},h)}function Og(i,e){const t=vA(i,e),s=Qu(t),a=EA(i,t);return bD(i,a,s),s}function bD(i,e,t){if(e.length===0)return;const s=[];let a=[];const h=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],g=Wn(t,m.path);let E=!1,S;if(ie(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,S=m.abortReason,a=a.concat(bo(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=gD)E=!0,S="maxretry",a=a.concat(bo(i.serverSyncTree_,m.currentWriteId,!0));else{const w=yA(i,m.path,h);m.currentInputSnapshot=w;const U=e[p].update(w.val());if(U!==void 0){mA("transaction failed: Data returned ",U,m.path);let q=un(U);typeof U=="object"&&U!=null&&Ss(U,".priority")||(q=q.updatePriority(w.getPriority()));const W=m.currentWriteId,Te=gA(i),ue=nD(q,w,Te);m.currentOutputSnapshotRaw=q,m.currentOutputSnapshotResolved=ue,m.currentWriteId=TD(i),h.splice(h.indexOf(W),1),a=a.concat(QN(i.serverSyncTree_,m.path,ue,m.currentWriteId,m.applyLocally)),a=a.concat(bo(i.serverSyncTree_,W,!0))}else E=!0,S="nodata",a=a.concat(bo(i.serverSyncTree_,m.currentWriteId,!0))}Ea(i.eventQueue_,t,a),a=[],E&&(e[p].status=2,function(w){setTimeout(w,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(S==="nodata"?s.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):s.push(()=>e[p].onComplete(new Error(S),!1,null))))}Pf(i,i.transactionQueueTree_);for(let p=0;p<s.length;p++)Ku(s[p]);Dg(i,i.transactionQueueTree_)}function vA(i,e){let t,s=i.transactionQueueTree_;for(t=ze(e);t!==null&&jo(s)===void 0;)s=Ig(s,t),e=at(e),t=ze(e);return s}function EA(i,e){const t=[];return TA(i,e,t),t.sort((s,a)=>s.order-a.order),t}function TA(i,e,t){const s=jo(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);kf(e,a=>{TA(i,a,t)})}function Pf(i,e){const t=jo(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,hA(e,t.length>0?t:void 0)}kf(e,s=>{Pf(i,s)})}function RD(i,e){const t=Qu(vA(i,e)),s=Ig(i.transactionQueueTree_,e);return sD(s,a=>{dm(i,a)}),dm(i,s),dA(s,a=>{dm(i,a)}),t}function dm(i,e){const t=jo(e);if(t){const s=[];let a=[],l=-1;for(let h=0;h<t.length;h++)t[h].status===3||(t[h].status===1?(ie(l===h-1,"All SENT items should be at beginning of queue."),l=h,t[h].status=3,t[h].abortReason="set"):(ie(t[h].status===0,"Unexpected transaction status in abort"),t[h].unwatcher(),a=a.concat(bo(i.serverSyncTree_,t[h].currentWriteId,!0)),t[h].onComplete&&s.push(t[h].onComplete.bind(null,new Error("set"),!1,null))));l===-1?hA(e,void 0):t.length=l+1,Ea(i.eventQueue_,Qu(e),a);for(let h=0;h<s.length;h++)Ku(s[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function ID(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):kn(`Invalid query segment '${t}' in query '${i}'`)}return e}const OT=function(i,e){const t=ND(i),s=t.namespace;t.domain==="firebase.com"&&_s(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&_s("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||rI();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new bS(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new lt(t.pathString)}},ND=function(i){let e="",t="",s="",a="",l="",h=!0,p="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(p=i.substring(0,g-1),i=i.substring(g+2));let E=i.indexOf("/");E===-1&&(E=i.length);let S=i.indexOf("?");S===-1&&(S=i.length),e=i.substring(0,Math.min(E,S)),E<S&&(a=CD(i.substring(E,S)));const w=ID(i.substring(Math.min(i.length,S)));g=e.indexOf(":"),g>=0?(h=p==="https"||p==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const U=e.slice(0,g);if(U.toLowerCase()==="localhost")t="localhost";else if(U.split(".").length<=2)t=U;else{const q=e.indexOf(".");s=e.substring(0,q).toLowerCase(),t=e.substring(q+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:h,scheme:p,pathString:a,namespace:l}};/**
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
 */class Mg{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Pe(this._path)?null:PS(this._path)}get ref(){return new Go(this._repo,this._path)}get _queryIdentifier(){const e=gT(this._queryParams),t=fg(e);return t==="{}"?"default":t}get _queryObject(){return gT(this._queryParams)}isEqual(e){if(e=Tn(e),!(e instanceof Mg))return!1;const t=this._repo===e._repo,s=LS(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+FI(this._path)}}class Go extends Mg{constructor(e,t){super(e,t,new yg,!1)}get parent(){const e=xS(this._path);return e===null?null:new Go(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}KN(Go);YN(Go);/**
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
 */const DD="FIREBASE_DATABASE_EMULATOR_HOST",Lm={};let OD=!1;function MD(i,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),h=vr(l);i.repoInfo_=new bS(e,h,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(i.authTokenProvider_=s)}function kD(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||_s("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ln("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let h=OT(l,a),p=h.repoInfo,m;typeof process<"u"&&$E&&(m=$E[DD]),m?(l=`http://${m}?ns=${p.namespace}`,h=OT(l,a),p=h.repoInfo):h.repoInfo.secure;const g=new mI(i.name,i.options,e);cD("Invalid Firebase Database URL",h),Pe(h.path)||_s("Database URL must point to the root of a Firebase Database (not including a child path).");const E=VD(p,i,g,new pI(i,t));return new xD(E,i)}function PD(i,e){const t=Lm[e];(!t||t[i.key]!==i)&&_s(`Database ${e}(${i.repoInfo_}) has already been deleted.`),AD(i),delete t[i.key]}function VD(i,e,t,s){let a=Lm[e.name];a||(a={},Lm[e.name]=a);let l=a[i.toURLString()];return l&&_s("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new _D(i,OD,t,s),a[i.toURLString()]=l,l}class xD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Go(this._repo,tt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_s("Cannot call "+e+" on a deleted database.")}}function LD(i=hg(),e){const t=Nf(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=J0("database");s&&UD(t,...s)}return t}function UD(i,e,t,s={}){i=Tn(i),i._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&ur(s,l.repoInfo_.emulatorOptions))return;_s("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&_s('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new xh(xh.OWNER);else if(s.mockUserToken){const p=typeof s.mockUserToken=="string"?s.mockUserToken:nS(s.mockUserToken,i.app.options.projectId);h=new xh(p)}vr(e)&&(og(e),lg("Database",!0)),MD(l,a,s,h)}/**
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
 */function zD(i){JC(ya),ca(new cr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return kD(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Ni(ZE,JE,i),Ni(ZE,JE,"esm2017")}ds.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};ds.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};zD();var MT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,SA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,b){function C(){}C.prototype=b.prototype,N.D=b.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(M,k,V){for(var I=Array(arguments.length-2),Kt=2;Kt<arguments.length;Kt++)I[Kt-2]=arguments[Kt];return b.prototype[k].apply(M,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,b,C){C||(C=0);var M=Array(16);if(typeof b=="string")for(var k=0;16>k;++k)M[k]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(k=0;16>k;++k)M[k]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=N.g[0],C=N.g[1],k=N.g[2];var V=N.g[3],I=b+(V^C&(k^V))+M[0]+3614090360&4294967295;b=C+(I<<7&4294967295|I>>>25),I=V+(k^b&(C^k))+M[1]+3905402710&4294967295,V=b+(I<<12&4294967295|I>>>20),I=k+(C^V&(b^C))+M[2]+606105819&4294967295,k=V+(I<<17&4294967295|I>>>15),I=C+(b^k&(V^b))+M[3]+3250441966&4294967295,C=k+(I<<22&4294967295|I>>>10),I=b+(V^C&(k^V))+M[4]+4118548399&4294967295,b=C+(I<<7&4294967295|I>>>25),I=V+(k^b&(C^k))+M[5]+1200080426&4294967295,V=b+(I<<12&4294967295|I>>>20),I=k+(C^V&(b^C))+M[6]+2821735955&4294967295,k=V+(I<<17&4294967295|I>>>15),I=C+(b^k&(V^b))+M[7]+4249261313&4294967295,C=k+(I<<22&4294967295|I>>>10),I=b+(V^C&(k^V))+M[8]+1770035416&4294967295,b=C+(I<<7&4294967295|I>>>25),I=V+(k^b&(C^k))+M[9]+2336552879&4294967295,V=b+(I<<12&4294967295|I>>>20),I=k+(C^V&(b^C))+M[10]+4294925233&4294967295,k=V+(I<<17&4294967295|I>>>15),I=C+(b^k&(V^b))+M[11]+2304563134&4294967295,C=k+(I<<22&4294967295|I>>>10),I=b+(V^C&(k^V))+M[12]+1804603682&4294967295,b=C+(I<<7&4294967295|I>>>25),I=V+(k^b&(C^k))+M[13]+4254626195&4294967295,V=b+(I<<12&4294967295|I>>>20),I=k+(C^V&(b^C))+M[14]+2792965006&4294967295,k=V+(I<<17&4294967295|I>>>15),I=C+(b^k&(V^b))+M[15]+1236535329&4294967295,C=k+(I<<22&4294967295|I>>>10),I=b+(k^V&(C^k))+M[1]+4129170786&4294967295,b=C+(I<<5&4294967295|I>>>27),I=V+(C^k&(b^C))+M[6]+3225465664&4294967295,V=b+(I<<9&4294967295|I>>>23),I=k+(b^C&(V^b))+M[11]+643717713&4294967295,k=V+(I<<14&4294967295|I>>>18),I=C+(V^b&(k^V))+M[0]+3921069994&4294967295,C=k+(I<<20&4294967295|I>>>12),I=b+(k^V&(C^k))+M[5]+3593408605&4294967295,b=C+(I<<5&4294967295|I>>>27),I=V+(C^k&(b^C))+M[10]+38016083&4294967295,V=b+(I<<9&4294967295|I>>>23),I=k+(b^C&(V^b))+M[15]+3634488961&4294967295,k=V+(I<<14&4294967295|I>>>18),I=C+(V^b&(k^V))+M[4]+3889429448&4294967295,C=k+(I<<20&4294967295|I>>>12),I=b+(k^V&(C^k))+M[9]+568446438&4294967295,b=C+(I<<5&4294967295|I>>>27),I=V+(C^k&(b^C))+M[14]+3275163606&4294967295,V=b+(I<<9&4294967295|I>>>23),I=k+(b^C&(V^b))+M[3]+4107603335&4294967295,k=V+(I<<14&4294967295|I>>>18),I=C+(V^b&(k^V))+M[8]+1163531501&4294967295,C=k+(I<<20&4294967295|I>>>12),I=b+(k^V&(C^k))+M[13]+2850285829&4294967295,b=C+(I<<5&4294967295|I>>>27),I=V+(C^k&(b^C))+M[2]+4243563512&4294967295,V=b+(I<<9&4294967295|I>>>23),I=k+(b^C&(V^b))+M[7]+1735328473&4294967295,k=V+(I<<14&4294967295|I>>>18),I=C+(V^b&(k^V))+M[12]+2368359562&4294967295,C=k+(I<<20&4294967295|I>>>12),I=b+(C^k^V)+M[5]+4294588738&4294967295,b=C+(I<<4&4294967295|I>>>28),I=V+(b^C^k)+M[8]+2272392833&4294967295,V=b+(I<<11&4294967295|I>>>21),I=k+(V^b^C)+M[11]+1839030562&4294967295,k=V+(I<<16&4294967295|I>>>16),I=C+(k^V^b)+M[14]+4259657740&4294967295,C=k+(I<<23&4294967295|I>>>9),I=b+(C^k^V)+M[1]+2763975236&4294967295,b=C+(I<<4&4294967295|I>>>28),I=V+(b^C^k)+M[4]+1272893353&4294967295,V=b+(I<<11&4294967295|I>>>21),I=k+(V^b^C)+M[7]+4139469664&4294967295,k=V+(I<<16&4294967295|I>>>16),I=C+(k^V^b)+M[10]+3200236656&4294967295,C=k+(I<<23&4294967295|I>>>9),I=b+(C^k^V)+M[13]+681279174&4294967295,b=C+(I<<4&4294967295|I>>>28),I=V+(b^C^k)+M[0]+3936430074&4294967295,V=b+(I<<11&4294967295|I>>>21),I=k+(V^b^C)+M[3]+3572445317&4294967295,k=V+(I<<16&4294967295|I>>>16),I=C+(k^V^b)+M[6]+76029189&4294967295,C=k+(I<<23&4294967295|I>>>9),I=b+(C^k^V)+M[9]+3654602809&4294967295,b=C+(I<<4&4294967295|I>>>28),I=V+(b^C^k)+M[12]+3873151461&4294967295,V=b+(I<<11&4294967295|I>>>21),I=k+(V^b^C)+M[15]+530742520&4294967295,k=V+(I<<16&4294967295|I>>>16),I=C+(k^V^b)+M[2]+3299628645&4294967295,C=k+(I<<23&4294967295|I>>>9),I=b+(k^(C|~V))+M[0]+4096336452&4294967295,b=C+(I<<6&4294967295|I>>>26),I=V+(C^(b|~k))+M[7]+1126891415&4294967295,V=b+(I<<10&4294967295|I>>>22),I=k+(b^(V|~C))+M[14]+2878612391&4294967295,k=V+(I<<15&4294967295|I>>>17),I=C+(V^(k|~b))+M[5]+4237533241&4294967295,C=k+(I<<21&4294967295|I>>>11),I=b+(k^(C|~V))+M[12]+1700485571&4294967295,b=C+(I<<6&4294967295|I>>>26),I=V+(C^(b|~k))+M[3]+2399980690&4294967295,V=b+(I<<10&4294967295|I>>>22),I=k+(b^(V|~C))+M[10]+4293915773&4294967295,k=V+(I<<15&4294967295|I>>>17),I=C+(V^(k|~b))+M[1]+2240044497&4294967295,C=k+(I<<21&4294967295|I>>>11),I=b+(k^(C|~V))+M[8]+1873313359&4294967295,b=C+(I<<6&4294967295|I>>>26),I=V+(C^(b|~k))+M[15]+4264355552&4294967295,V=b+(I<<10&4294967295|I>>>22),I=k+(b^(V|~C))+M[6]+2734768916&4294967295,k=V+(I<<15&4294967295|I>>>17),I=C+(V^(k|~b))+M[13]+1309151649&4294967295,C=k+(I<<21&4294967295|I>>>11),I=b+(k^(C|~V))+M[4]+4149444226&4294967295,b=C+(I<<6&4294967295|I>>>26),I=V+(C^(b|~k))+M[11]+3174756917&4294967295,V=b+(I<<10&4294967295|I>>>22),I=k+(b^(V|~C))+M[2]+718787259&4294967295,k=V+(I<<15&4294967295|I>>>17),I=C+(V^(k|~b))+M[9]+3951481745&4294967295,N.g[0]=N.g[0]+b&4294967295,N.g[1]=N.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+k&4294967295,N.g[3]=N.g[3]+V&4294967295}s.prototype.u=function(N,b){b===void 0&&(b=N.length);for(var C=b-this.blockSize,M=this.B,k=this.h,V=0;V<b;){if(k==0)for(;V<=C;)a(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<b;)if(M[k++]=N.charCodeAt(V++),k==this.blockSize){a(this,M),k=0;break}}else for(;V<b;)if(M[k++]=N[V++],k==this.blockSize){a(this,M),k=0;break}}this.h=k,this.o+=b},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var b=1;b<N.length-8;++b)N[b]=0;var C=8*this.o;for(b=N.length-8;b<N.length;++b)N[b]=C&255,C/=256;for(this.u(N),N=Array(16),b=C=0;4>b;++b)for(var M=0;32>M;M+=8)N[C++]=this.g[b]>>>M&255;return N};function l(N,b){var C=p;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=b(N)}function h(N,b){this.h=b;for(var C=[],M=!0,k=N.length-1;0<=k;k--){var V=N[k]|0;M&&V==b||(C[k]=V,M=!1)}this.g=C}var p={};function m(N){return-128<=N&&128>N?l(N,function(b){return new h([b|0],0>b?-1:0)}):new h([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return S;if(0>N)return W(g(-N));for(var b=[],C=1,M=0;N>=C;M++)b[M]=N/C|0,C*=4294967296;return new h(b,0)}function E(N,b){if(N.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(N.charAt(0)=="-")return W(E(N.substring(1),b));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(b,8)),M=S,k=0;k<N.length;k+=8){var V=Math.min(8,N.length-k),I=parseInt(N.substring(k,k+V),b);8>V?(V=g(Math.pow(b,V)),M=M.j(V).add(g(I))):(M=M.j(C),M=M.add(g(I)))}return M}var S=m(0),w=m(1),U=m(16777216);i=h.prototype,i.m=function(){if(Z(this))return-W(this).m();for(var N=0,b=1,C=0;C<this.g.length;C++){var M=this.i(C);N+=(0<=M?M:4294967296+M)*b,b*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(q(this))return"0";if(Z(this))return"-"+W(this).toString(N);for(var b=g(Math.pow(N,6)),C=this,M="";;){var k=_e(C,b).g;C=Te(C,k.j(b));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=k,q(C))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function q(N){if(N.h!=0)return!1;for(var b=0;b<N.g.length;b++)if(N.g[b]!=0)return!1;return!0}function Z(N){return N.h==-1}i.l=function(N){return N=Te(this,N),Z(N)?-1:q(N)?0:1};function W(N){for(var b=N.g.length,C=[],M=0;M<b;M++)C[M]=~N.g[M];return new h(C,~N.h).add(w)}i.abs=function(){return Z(this)?W(this):this},i.add=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],M=0,k=0;k<=b;k++){var V=M+(this.i(k)&65535)+(N.i(k)&65535),I=(V>>>16)+(this.i(k)>>>16)+(N.i(k)>>>16);M=I>>>16,V&=65535,I&=65535,C[k]=I<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function Te(N,b){return N.add(W(b))}i.j=function(N){if(q(this)||q(N))return S;if(Z(this))return Z(N)?W(this).j(W(N)):W(W(this).j(N));if(Z(N))return W(this.j(W(N)));if(0>this.l(U)&&0>N.l(U))return g(this.m()*N.m());for(var b=this.g.length+N.g.length,C=[],M=0;M<2*b;M++)C[M]=0;for(M=0;M<this.g.length;M++)for(var k=0;k<N.g.length;k++){var V=this.i(M)>>>16,I=this.i(M)&65535,Kt=N.i(k)>>>16,pt=N.i(k)&65535;C[2*M+2*k]+=I*pt,ue(C,2*M+2*k),C[2*M+2*k+1]+=V*pt,ue(C,2*M+2*k+1),C[2*M+2*k+1]+=I*Kt,ue(C,2*M+2*k+1),C[2*M+2*k+2]+=V*Kt,ue(C,2*M+2*k+2)}for(M=0;M<b;M++)C[M]=C[2*M+1]<<16|C[2*M];for(M=b;M<2*b;M++)C[M]=0;return new h(C,0)};function ue(N,b){for(;(N[b]&65535)!=N[b];)N[b+1]+=N[b]>>>16,N[b]&=65535,b++}function se(N,b){this.g=N,this.h=b}function _e(N,b){if(q(b))throw Error("division by zero");if(q(N))return new se(S,S);if(Z(N))return b=_e(W(N),b),new se(W(b.g),W(b.h));if(Z(b))return b=_e(N,W(b)),new se(W(b.g),b.h);if(30<N.g.length){if(Z(N)||Z(b))throw Error("slowDivide_ only works with positive integers.");for(var C=w,M=b;0>=M.l(N);)C=re(C),M=re(M);var k=le(C,1),V=le(M,1);for(M=le(M,2),C=le(C,2);!q(M);){var I=V.add(M);0>=I.l(N)&&(k=k.add(C),V=I),M=le(M,1),C=le(C,1)}return b=Te(N,k.j(b)),new se(k,b)}for(k=S;0<=N.l(b);){for(C=Math.max(1,Math.floor(N.m()/b.m())),M=Math.ceil(Math.log(C)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=g(C),I=V.j(b);Z(I)||0<I.l(N);)C-=M,V=g(C),I=V.j(b);q(V)&&(V=w),k=k.add(V),N=Te(N,I)}return new se(k,N)}i.A=function(N){return _e(this,N).h},i.and=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],M=0;M<b;M++)C[M]=this.i(M)&N.i(M);return new h(C,this.h&N.h)},i.or=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],M=0;M<b;M++)C[M]=this.i(M)|N.i(M);return new h(C,this.h|N.h)},i.xor=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],M=0;M<b;M++)C[M]=this.i(M)^N.i(M);return new h(C,this.h^N.h)};function re(N){for(var b=N.g.length+1,C=[],M=0;M<b;M++)C[M]=N.i(M)<<1|N.i(M-1)>>>31;return new h(C,N.h)}function le(N,b){var C=b>>5;b%=32;for(var M=N.g.length-C,k=[],V=0;V<M;V++)k[V]=0<b?N.i(V+C)>>>b|N.i(V+C+1)<<32-b:N.i(V+C);return new h(k,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,SA=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,or=h}).apply(typeof MT<"u"?MT:typeof self<"u"?self:typeof window<"u"?window:{});var Dh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AA,pu,wA,Uh,Um,bA,RA,CA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,_,y){return c==Array.prototype||c==Object.prototype||(c[_]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dh=="object"&&Dh];for(var _=0;_<c.length;++_){var y=c[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(c,_){if(_)e:{var y=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var x=c[A];if(!(x in y))break e;y=y[x]}c=c[c.length-1],A=y[c],_=_(A),_!=A&&_!=null&&e(y,c,{configurable:!0,writable:!0,value:_})}}function l(c,_){c instanceof String&&(c+="");var y=0,A=!1,x={next:function(){if(!A&&y<c.length){var H=y++;return{value:_(H,c[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}a("Array.prototype.values",function(c){return c||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var _=typeof c;return _=_!="object"?_:c?Array.isArray(c)?"array":_:"null",_=="array"||_=="object"&&typeof c.length=="number"}function g(c){var _=typeof c;return _=="object"&&c!=null||_=="function"}function E(c,_,y){return c.call.apply(c.bind,arguments)}function S(c,_,y){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,A),c.apply(_,x)}}return function(){return c.apply(_,arguments)}}function w(c,_,y){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,w.apply(null,arguments)}function U(c,_){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function q(c,_){function y(){}y.prototype=_.prototype,c.aa=_.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(A,x,H){for(var ee=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)ee[Ve-2]=arguments[Ve];return _.prototype[x].apply(A,ee)}}function Z(c){const _=c.length;if(0<_){const y=Array(_);for(let A=0;A<_;A++)y[A]=c[A];return y}return[]}function W(c,_){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(m(A)){const x=c.length||0,H=A.length||0;c.length=x+H;for(let ee=0;ee<H;ee++)c[x+ee]=A[ee]}else c.push(A)}}class Te{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ue(c){return/^[\s\xa0]*$/.test(c)}function se(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function _e(c){return _e[" "](c),c}_e[" "]=function(){};var re=se().indexOf("Gecko")!=-1&&!(se().toLowerCase().indexOf("webkit")!=-1&&se().indexOf("Edge")==-1)&&!(se().indexOf("Trident")!=-1||se().indexOf("MSIE")!=-1)&&se().indexOf("Edge")==-1;function le(c,_,y){for(const A in c)_.call(y,c[A],A,c)}function N(c,_){for(const y in c)_.call(void 0,c[y],y,c)}function b(c){const _={};for(const y in c)_[y]=c[y];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(c,_){let y,A;for(let x=1;x<arguments.length;x++){A=arguments[x];for(y in A)c[y]=A[y];for(let H=0;H<C.length;H++)y=C[H],Object.prototype.hasOwnProperty.call(A,y)&&(c[y]=A[y])}}function k(c){var _=1;c=c.split(":");const y=[];for(;0<_&&c.length;)y.push(c.shift()),_--;return c.length&&y.push(c.join(":")),y}function V(c){p.setTimeout(()=>{throw c},0)}function I(){var c=He;let _=null;return c.g&&(_=c.g,c.g=c.g.next,c.g||(c.h=null),_.next=null),_}class Kt{constructor(){this.h=this.g=null}add(_,y){const A=pt.get();A.set(_,y),this.h?this.h.next=A:this.g=A,this.h=A}}var pt=new Te(()=>new j,c=>c.reset());class j{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let te,fe=!1,He=new Kt,D=()=>{const c=p.Promise.resolve(void 0);te=()=>{c.then(X)}};var X=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(y){V(y)}var _=pt;_.j(c),100>_.h&&(_.h++,c.next=_.g,_.g=c)}fe=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,_){this.type=c,this.g=this.target=_,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,_=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};p.addEventListener("test",y,_),p.removeEventListener("test",y,_)}catch{}return c}();function Ie(c,_){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=_,_=c.relatedTarget){if(re){e:{try{_e(_.nodeName);var x=!0;break e}catch{}x=!1}x||(_=null)}}else y=="mouseover"?_=c.fromElement:y=="mouseout"&&(_=c.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Se[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}q(Ie,J);var Se={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var xt="closure_listenable_"+(1e6*Math.random()|0),it=0;function ui(c,_,y,A,x){this.listener=c,this.proxy=null,this.src=_,this.type=y,this.capture=!!A,this.ha=x,this.key=++it,this.da=this.fa=!1}function As(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ui(c){this.src=c,this.g={},this.h=0}Ui.prototype.add=function(c,_,y,A,x){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var ee=Ar(c,_,A,x);return-1<ee?(_=c[ee],y||(_.fa=!1)):(_=new ui(_,this.src,H,!!A,x),_.fa=y,c.push(_)),_};function Sr(c,_){var y=_.type;if(y in c.g){var A=c.g[y],x=Array.prototype.indexOf.call(A,_,void 0),H;(H=0<=x)&&Array.prototype.splice.call(A,x,1),H&&(As(_),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Ar(c,_,y,A){for(var x=0;x<c.length;++x){var H=c[x];if(!H.da&&H.listener==_&&H.capture==!!y&&H.ha==A)return x}return-1}var wr="closure_lm_"+(1e6*Math.random()|0),$o={};function sc(c,_,y,A,x){if(Array.isArray(_)){for(var H=0;H<_.length;H++)sc(c,_[H],y,A,x);return null}return y=rc(y),c&&c[xt]?c.K(_,y,g(A)?!!A.capture:!1,x):Pn(c,_,y,!1,A,x)}function Pn(c,_,y,A,x,H){if(!_)throw Error("Invalid event type");var ee=g(x)?!!x.capture:!!x,Ve=Ca(c);if(Ve||(c[wr]=Ve=new Ui(c)),y=Ve.add(_,y,A,ee,H),y.proxy)return y;if(A=Xf(),y.proxy=A,A.src=c,A.listener=y,c.addEventListener)de||(x=ee),x===void 0&&(x=!1),c.addEventListener(_.toString(),A,x);else if(c.attachEvent)c.attachEvent(br(_.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Xf(){function c(y){return _.call(c.src,c.listener,y)}const _=$f;return c}function Zo(c,_,y,A,x){if(Array.isArray(_))for(var H=0;H<_.length;H++)Zo(c,_[H],y,A,x);else A=g(A)?!!A.capture:!!A,y=rc(y),c&&c[xt]?(c=c.i,_=String(_).toString(),_ in c.g&&(H=c.g[_],y=Ar(H,y,A,x),-1<y&&(As(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete c.g[_],c.h--)))):c&&(c=Ca(c))&&(_=c.g[_.toString()],c=-1,_&&(c=Ar(_,y,A,x)),(y=-1<c?_[c]:null)&&Ra(y))}function Ra(c){if(typeof c!="number"&&c&&!c.da){var _=c.src;if(_&&_[xt])Sr(_.i,c);else{var y=c.type,A=c.proxy;_.removeEventListener?_.removeEventListener(y,A,c.capture):_.detachEvent?_.detachEvent(br(y),A):_.addListener&&_.removeListener&&_.removeListener(A),(y=Ca(_))?(Sr(y,c),y.h==0&&(y.src=null,_[wr]=null)):As(c)}}}function br(c){return c in $o?$o[c]:$o[c]="on"+c}function $f(c,_){if(c.da)c=!0;else{_=new Ie(_,this);var y=c.listener,A=c.ha||c.src;c.fa&&Ra(c),c=y.call(A,_)}return c}function Ca(c){return c=c[wr],c instanceof Ui?c:null}var Jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function rc(c){return typeof c=="function"?c:(c[Jo]||(c[Jo]=function(_){return c.handleEvent(_)}),c[Jo])}function mt(){ne.call(this),this.i=new Ui(this),this.M=this,this.F=null}q(mt,ne),mt.prototype[xt]=!0,mt.prototype.removeEventListener=function(c,_,y,A){Zo(this,c,_,y,A)};function Qe(c,_){var y,A=c.F;if(A)for(y=[];A;A=A.F)y.push(A);if(c=c.M,A=_.type||_,typeof _=="string")_=new J(_,c);else if(_ instanceof J)_.target=_.target||c;else{var x=_;_=new J(A,c),M(_,x)}if(x=!0,y)for(var H=y.length-1;0<=H;H--){var ee=_.g=y[H];x=Sn(ee,A,!0,_)&&x}if(ee=_.g=c,x=Sn(ee,A,!0,_)&&x,x=Sn(ee,A,!1,_)&&x,y)for(H=0;H<y.length;H++)ee=_.g=y[H],x=Sn(ee,A,!1,_)&&x}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var c=this.i,_;for(_ in c.g){for(var y=c.g[_],A=0;A<y.length;A++)As(y[A]);delete c.g[_],c.h--}}this.F=null},mt.prototype.K=function(c,_,y,A){return this.i.add(String(c),_,!1,y,A)},mt.prototype.L=function(c,_,y,A){return this.i.add(String(c),_,!0,y,A)};function Sn(c,_,y,A){if(_=c.i.g[String(_)],!_)return!0;_=_.concat();for(var x=!0,H=0;H<_.length;++H){var ee=_[H];if(ee&&!ee.da&&ee.capture==y){var Ve=ee.listener,Dt=ee.ha||ee.src;ee.fa&&Sr(c.i,ee),x=Ve.call(Dt,A)!==!1&&x}}return x&&!A.defaultPrevented}function nn(c,_,y){if(typeof c=="function")y&&(c=w(c,y));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:p.setTimeout(c,_||0)}function ac(c){c.g=nn(()=>{c.g=null,c.i&&(c.i=!1,ac(c))},c.l);const _=c.h;c.h=null,c.m.apply(null,_)}class Zf extends ne{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:ac(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(c){ne.call(this),this.h=c,this.g={}}q(Rr,ne);var Cr=[];function Ir(c){le(c.g,function(_,y){this.g.hasOwnProperty(y)&&Ra(_)},c),c.g={}}Rr.prototype.N=function(){Rr.aa.N.call(this),Ir(this)},Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $n=p.JSON.stringify,Ia=p.JSON.parse,Nr=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function el(){}el.prototype.h=null;function tl(c){return c.h||(c.h=c.i())}function nl(){}var zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bi(){J.call(this,"d")}q(Bi,J);function il(){J.call(this,"c")}q(il,J);var ci={},sl=null;function ws(){return sl=sl||new mt}ci.La="serverreachability";function Na(c){J.call(this,ci.La,c)}q(Na,J);function bs(c){const _=ws();Qe(_,new Na(_))}ci.STAT_EVENT="statevent";function oc(c,_){J.call(this,ci.STAT_EVENT,c),this.stat=_}q(oc,J);function ut(c){const _=ws();Qe(_,new oc(_,c))}ci.Ma="timingevent";function Nt(c,_){J.call(this,ci.Ma,c),this.size=_}q(Nt,J);function At(c,_){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},_)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function rl(c,_,y,A,x,H){c.info(function(){if(c.g)if(H)for(var ee="",Ve=H.split("&"),Dt=0;Dt<Ve.length;Dt++){var xe=Ve[Dt].split("=");if(1<xe.length){var Ut=xe[0];xe=xe[1];var Ot=Ut.split("_");ee=2<=Ot.length&&Ot[1]=="type"?ee+(Ut+"="+xe+"&"):ee+(Ut+"=redacted&")}}else ee=null;else ee=H;return"XMLHTTP REQ ("+A+") [attempt "+x+"]: "+_+`
`+y+`
`+ee})}function Jf(c,_,y,A,x,H,ee){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+x+"]: "+_+`
`+y+`
`+H+" "+ee})}function Rs(c,_,y,A){c.info(function(){return"XMLHTTP TEXT ("+_+"): "+Dr(c,y)+(A?" "+A:"")})}function lc(c,_){c.info(function(){return"TIMEOUT: "+_})}Vn.prototype.info=function(){};function Dr(c,_){if(!c.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var A=y[c];if(!(2>A.length)){var x=A[1];if(Array.isArray(x)&&!(1>x.length)){var H=x[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ee=1;ee<x.length;ee++)x[ee]=""}}}}return $n(y)}catch{return _}}var Cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hi;function fi(){}q(fi,el),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},hi=new fi;function dn(c,_,y,A){this.j=c,this.i=_,this.l=y,this.R=A||1,this.U=new Rr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var al={},Da={};function Zn(c,_,y){c.L=1,c.v=Vr(An(_)),c.m=y,c.P=!0,qi(c,null)}function qi(c,_){c.F=Date.now(),Or(c),c.A=An(c.v);var y=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),fl(y.i,"t",A),c.C=0,y=c.j.J,c.h=new yt,c.g=wc(c.j,y?_:null,!c.m),0<c.O&&(c.M=new Zf(w(c.Y,c,c.g),c.O)),_=c.U,y=c.g,A=c.ca;var x="readystatechange";Array.isArray(x)||(x&&(Cr[0]=x.toString()),x=Cr);for(var H=0;H<x.length;H++){var ee=sc(y,x[H],A||_.handleEvent,!1,_.h||_);if(!ee)break;_.g[ee.key]=ee}_=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,_)):(c.u="GET",c.g.ea(c.A,c.u,null,_)),bs(),rl(c.i,c.u,c.A,c.l,c.R,c.m)}dn.prototype.ca=function(c){c=c.target;const _=this.M;_&&zn(c)==3?_.j():this.Y(c)},dn.prototype.Y=function(c){try{if(c==this.g)e:{const Ot=zn(this.g);var _=this.g.Ba();const Xi=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||gc(this.g)))){this.J||Ot!=4||_==7||(_==8||0>=Xi?bs(3):bs(2)),Is(this);var y=this.g.Z();this.X=y;t:if(uc(this)){var A=gc(this.g);c="";var x=A.length,H=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),di(this);var ee="";break t}this.h.i=new p.TextDecoder}for(_=0;_<x;_++)this.h.h=!0,c+=this.h.i.decode(A[_],{stream:!(H&&_==x-1)});A.length=0,this.h.g+=c,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,Jf(this.i,this.u,this.A,this.l,this.R,Ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,Dt=this.g;if((Ve=Dt.g?Dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(Ve)){var xe=Ve;break t}}xe=null}if(y=xe)Rs(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mr(this,y);else{this.o=!1,this.s=3,ut(12),Yt(this),di(this);break e}}if(this.P){y=!0;let Qt;for(;!this.J&&this.C<ee.length;)if(Qt=cc(this,ee),Qt==Da){Ot==4&&(this.s=4,ut(14),y=!1),Rs(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==al){this.s=4,ut(15),Rs(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else Rs(this.i,this.l,Qt,null),Mr(this,Qt);if(uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||ee.length!=0||this.h.h||(this.s=1,ut(16),y=!1),this.o=this.o&&y,!y)Rs(this.i,this.l,ee,"[Invalid Chunked Response]"),Yt(this),di(this);else if(0<ee.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Hr(Ut),Ut.M=!0,ut(11))}}else Rs(this.i,this.l,ee,null),Mr(this,ee);Ot==4&&Yt(this),this.o&&!this.J&&(Ot==4?Tc(this.j,this):(this.o=!1,Or(this)))}else sd(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Yt(this),di(this)}}}catch{}finally{}};function uc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function cc(c,_){var y=c.C,A=_.indexOf(`
`,y);return A==-1?Da:(y=Number(_.substring(y,A)),isNaN(y)?al:(A+=1,A+y>_.length?Da:(_=_.slice(A,A+y),c.C=A+y,_)))}dn.prototype.cancel=function(){this.J=!0,Yt(this)};function Or(c){c.S=Date.now()+c.I,hc(c,c.I)}function hc(c,_){if(c.B!=null)throw Error("WatchDog timer not null");c.B=At(w(c.ba,c),_)}function Is(c){c.B&&(p.clearTimeout(c.B),c.B=null)}dn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(lc(this.i,this.A),this.L!=2&&(bs(),ut(17)),Yt(this),this.s=2,di(this)):hc(this,this.S-c)};function di(c){c.j.G==0||c.J||Tc(c.j,c)}function Yt(c){Is(c);var _=c.M;_&&typeof _.ma=="function"&&_.ma(),c.M=null,Ir(c.U),c.g&&(_=c.g,c.g=null,_.abort(),_.ma())}function Mr(c,_){try{var y=c.j;if(y.G!=0&&(y.g==c||ol(y.h,c))){if(!c.K&&ol(y.h,c)&&y.G==3){try{var A=y.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var x=A;if(x[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)qa(y),Ba(y);else break e;_l(y),ut(18)}}else y.za=x[1],0<y.za-y.T&&37500>x[2]&&y.F&&y.v==0&&!y.C&&(y.C=At(w(y.Za,y),6e3));if(1>=Ma(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Wi(y,11)}else if((c.K||y.g==c)&&qa(y),!ue(_))for(x=y.Da.g.parse(_),_=0;_<x.length;_++){let xe=x[_];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const Ut=xe[3];Ut!=null&&(y.la=Ut,y.j.info("VER="+y.la));const Ot=xe[4];Ot!=null&&(y.Aa=Ot,y.j.info("SVER="+y.Aa));const Xi=xe[5];Xi!=null&&typeof Xi=="number"&&0<Xi&&(A=1.5*Xi,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const Qt=c.g;if(Qt){const Ei=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ei){var H=A.h;H.g||Ei.indexOf("spdy")==-1&&Ei.indexOf("quic")==-1&&Ei.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ka(H,H.h),H.h=null))}if(A.D){const vl=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;vl&&(A.ya=vl,$e(A.I,A.D,vl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var ee=c;if(A.qa=Ac(A,A.J?A.ia:null,A.W),ee.K){pn(A.h,ee);var Ve=ee,Dt=A.L;Dt&&(Ve.I=Dt),Ve.B&&(Is(Ve),Or(Ve)),A.g=ee}else vc(A);0<y.i.length&&Fa(y)}else xe[0]!="stop"&&xe[0]!="close"||Wi(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Wi(y,7):ml(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}bs(4)}catch{}}var fc=class{constructor(c,_){this.g=c,this.map=_}};function Hi(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ma(c){return c.h?1:c.g?c.g.size:0}function ol(c,_){return c.h?c.h==_:c.g?c.g.has(_):!1}function ka(c,_){c.g?c.g.add(_):c.h=_}function pn(c,_){c.h&&c.h==_?c.h=null:c.g&&c.g.has(_)&&c.g.delete(_)}Hi.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ll(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let _=c.i;for(const y of c.g.values())_=_.concat(y.D);return _}return Z(c.i)}function ed(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var _=[],y=c.length,A=0;A<y;A++)_.push(c[A]);return _}_=[],y=0;for(A in c)_[y++]=c[A];return _}function Pa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var _=[];c=c.length;for(var y=0;y<c;y++)_.push(y);return _}_=[],y=0;for(const A in c)_[y++]=A;return _}}}function ul(c,_){if(c.forEach&&typeof c.forEach=="function")c.forEach(_,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,_,void 0);else for(var y=Pa(c),A=ed(c),x=A.length,H=0;H<x;H++)_.call(void 0,A[H],y&&y[H],c)}var kr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function td(c,_){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var A=c[y].indexOf("="),x=null;if(0<=A){var H=c[y].substring(0,A);x=c[y].substring(A+1)}else H=c[y];_(H,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function wt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof wt){this.h=c.h,Pr(this,c.j),this.o=c.o,this.g=c.g,Ns(this,c.s),this.l=c.l;var _=c.i,y=new Gi;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),ji(this,y),this.m=c.m}else c&&(_=String(c).match(kr))?(this.h=!1,Pr(this,_[1]||"",!0),this.o=xn(_[2]||""),this.g=xn(_[3]||"",!0),Ns(this,_[4]),this.l=xn(_[5]||"",!0),ji(this,_[6]||"",!0),this.m=xn(_[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}wt.prototype.toString=function(){var c=[],_=this.j;_&&c.push(xr(_,cl,!0),":");var y=this.g;return(y||_=="file")&&(c.push("//"),(_=this.o)&&c.push(xr(_,cl,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(xr(y,y.charAt(0)=="/"?nd:hl,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",xr(y,Va)),c.join("")};function An(c){return new wt(c)}function Pr(c,_,y){c.j=y?xn(_,!0):_,c.j&&(c.j=c.j.replace(/:$/,""))}function Ns(c,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);c.s=_}else c.s=null}function ji(c,_,y){_ instanceof Gi?(c.i=_,pc(c.i,c.h)):(y||(_=xr(_,id)),c.i=new Gi(_,c.h))}function $e(c,_,y){c.i.set(_,y)}function Vr(c){return $e(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function xn(c,_){return c?_?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function xr(c,_,y){return typeof c=="string"?(c=encodeURI(c).replace(_,dc),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function dc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var cl=/[#\/\?@]/g,hl=/[#\?:]/g,nd=/[#\?]/g,id=/[#\?@]/g,Va=/#/g;function Gi(c,_){this.h=this.g=null,this.i=c||null,this.j=!!_}function Ln(c){c.g||(c.g=new Map,c.h=0,c.i&&td(c.i,function(_,y){c.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}i=Gi.prototype,i.add=function(c,_){Ln(this),this.i=null,c=pi(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(_),this.h+=1,this};function Ki(c,_){Ln(c),_=pi(c,_),c.g.has(_)&&(c.i=null,c.h-=c.g.get(_).length,c.g.delete(_))}function Yi(c,_){return Ln(c),_=pi(c,_),c.g.has(_)}i.forEach=function(c,_){Ln(this),this.g.forEach(function(y,A){y.forEach(function(x){c.call(_,x,A,this)},this)},this)},i.na=function(){Ln(this);const c=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let A=0;A<_.length;A++){const x=c[A];for(let H=0;H<x.length;H++)y.push(_[A])}return y},i.V=function(c){Ln(this);let _=[];if(typeof c=="string")Yi(this,c)&&(_=_.concat(this.g.get(pi(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)_=_.concat(c[y])}return _},i.set=function(c,_){return Ln(this),this.i=null,c=pi(this,c),Yi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[_]),this.h+=1,this},i.get=function(c,_){return c?(c=this.V(c),0<c.length?String(c[0]):_):_};function fl(c,_,y){Ki(c,_),0<y.length&&(c.i=null,c.g.set(pi(c,_),Z(y)),c.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var A=_[y];const H=encodeURIComponent(String(A)),ee=this.V(A);for(A=0;A<ee.length;A++){var x=H;ee[A]!==""&&(x+="="+encodeURIComponent(String(ee[A]))),c.push(x)}}return this.i=c.join("&")};function pi(c,_){return _=String(_),c.j&&(_=_.toLowerCase()),_}function pc(c,_){_&&!c.j&&(Ln(c),c.i=null,c.g.forEach(function(y,A){var x=A.toLowerCase();A!=x&&(Ki(this,A),fl(this,x,y))},c)),c.j=_}function Lr(c,_){const y=new Vn;if(p.Image){const A=new Image;A.onload=U(Un,y,"TestLoadImage: loaded",!0,_,A),A.onerror=U(Un,y,"TestLoadImage: error",!1,_,A),A.onabort=U(Un,y,"TestLoadImage: abort",!1,_,A),A.ontimeout=U(Un,y,"TestLoadImage: timeout",!1,_,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else _(!1)}function Jn(c,_){const y=new Vn,A=new AbortController,x=setTimeout(()=>{A.abort(),Un(y,"TestPingServer: timeout",!1,_)},1e4);fetch(c,{signal:A.signal}).then(H=>{clearTimeout(x),H.ok?Un(y,"TestPingServer: ok",!0,_):Un(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(x),Un(y,"TestPingServer: error",!1,_)})}function Un(c,_,y,A,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),A(y)}catch{}}function Ur(){this.g=new Nr}function mi(c,_,y){const A=y||"";try{ul(c,function(x,H){let ee=x;g(x)&&(ee=$n(x)),_.push(A+H+"="+encodeURIComponent(ee))})}catch(x){throw _.push(A+"type="+encodeURIComponent("_badmap")),x}}function Ds(c){this.l=c.Ub||null,this.j=c.eb||!1}q(Ds,el),Ds.prototype.g=function(){return new Qi(this.l,this.j)},Ds.prototype.i=function(c){return function(){return c}}({});function Qi(c,_){mt.call(this),this.D=c,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Qi,mt),i=Qi.prototype,i.open=function(c,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=_,this.readyState=1,_i(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(_.body=c),(this.D||p).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var _=c.value?c.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!c.done}))&&(this.response=this.responseText+=_)}c.done?gi(this):_i(this),this.readyState==3&&dl(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,gi(this))},i.Qa=function(c){this.g&&(this.response=c,gi(this))},i.ga=function(){this.g&&gi(this)};function gi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,_i(c)}i.setRequestHeader=function(c,_){this.u.append(c,_)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=_.next();return c.join(`\r
`)};function _i(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function pl(c){let _="";return le(c,function(y,A){_+=A,_+=":",_+=y,_+=`\r
`}),_}function Lt(c,_,y){e:{for(A in y){var A=!1;break e}A=!0}A||(y=pl(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):$e(c,_,y))}function Ge(c){mt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ge,mt);var xa=/^https?$/i,zr=["POST","PUT"];i=Ge.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,_,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);_=_?_.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hi.g(),this.v=this.o?tl(this.o):tl(hi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(c),!0),this.B=!1}catch(H){mc(this,H);return}if(c=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var x in A)y.set(x,A[x]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())y.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),x=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(zr,_,void 0))||A||x||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ee]of y)this.g.setRequestHeader(H,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Br(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){mc(this,H)}};function mc(c,_){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=_,c.m=5,La(c),yi(c)}function La(c){c.A||(c.A=!0,Qe(c,"complete"),Qe(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Qe(this,"complete"),Qe(this,"abort"),yi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ua(this):this.bb())},i.bb=function(){Ua(this)};function Ua(c){if(c.h&&typeof h<"u"&&(!c.v[1]||zn(c)!=4||c.Z()!=2)){if(c.u&&zn(c)==4)nn(c.Ea,0,c);else if(Qe(c,"readystatechange"),zn(c)==4){c.h=!1;try{const ee=c.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var A;if(A=ee===0){var x=String(c.D).match(kr)[1]||null;!x&&p.self&&p.self.location&&(x=p.self.location.protocol.slice(0,-1)),A=!xa.test(x?x.toLowerCase():"")}y=A}if(y)Qe(c,"complete"),Qe(c,"success");else{c.m=6;try{var H=2<zn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",La(c)}}finally{yi(c)}}}}function yi(c,_){if(c.g){Br(c);const y=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,_||Qe(c,"ready");try{y.onreadystatechange=A}catch{}}}function Br(c){c.I&&(p.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function zn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var _=this.g.responseText;return c&&_.indexOf(c)==0&&(_=_.substring(c.length)),Ia(_)}};function gc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function sd(c){const _={};c=(c.g&&2<=zn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ue(c[A]))continue;var y=k(c[A]);const x=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=_[x]||[];_[x]=H,H.push(y)}N(_,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fr(c,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||_}function za(c){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fr("baseRetryDelayMs",5e3,c),this.cb=Fr("retryDelaySeedMs",1e4,c),this.Wa=Fr("forwardChannelMaxRetries",2,c),this.wa=Fr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(c&&c.concurrentRequestLimit),this.Da=new Ur,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=za.prototype,i.la=8,i.G=1,i.connect=function(c,_,y,A){ut(0),this.W=c,this.H=_||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=Ac(this,null,this.W),Fa(this)};function ml(c){if(_c(c),c.G==3){var _=c.U++,y=An(c.I);if($e(y,"SID",c.K),$e(y,"RID",_),$e(y,"TYPE","terminate"),qr(c,y),_=new dn(c,c.j,_),_.L=2,_.v=Vr(An(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=_.v,y=!0),y||(_.g=wc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Or(_)}Sc(c)}function Ba(c){c.g&&(Hr(c),c.g.cancel(),c.g=null)}function _c(c){Ba(c),c.u&&(p.clearTimeout(c.u),c.u=null),qa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Fa(c){if(!Oa(c.h)&&!c.s){c.s=!0;var _=c.Ga;te||D(),fe||(te(),fe=!0),He.add(_,c),c.B=0}}function rd(c,_){return Ma(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=_.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=At(w(c.Ga,c,_),yl(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const x=new dn(this,this.j,c);let H=this.o;if(this.S&&(H?(H=b(H),M(H,this.S)):H=this.S),this.m!==null||this.O||(x.H=H,H=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=yc(this,x,_),y=An(this.I),$e(y,"RID",c),$e(y,"CVER",22),this.D&&$e(y,"X-HTTP-Session-Id",this.D),qr(this,y),H&&(this.O?_="headers="+encodeURIComponent(String(pl(H)))+"&"+_:this.m&&Lt(y,this.m,H)),ka(this.h,x),this.Ua&&$e(y,"TYPE","init"),this.P?($e(y,"$req",_),$e(y,"SID","null"),x.T=!0,Zn(x,y,null)):Zn(x,y,_),this.G=2}}else this.G==3&&(c?gl(this,c):this.i.length==0||Oa(this.h)||gl(this))};function gl(c,_){var y;_?y=_.l:y=c.U++;const A=An(c.I);$e(A,"SID",c.K),$e(A,"RID",y),$e(A,"AID",c.T),qr(c,A),c.m&&c.o&&Lt(A,c.m,c.o),y=new dn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),_&&(c.i=_.D.concat(c.i)),_=yc(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ka(c.h,y),Zn(y,A,_)}function qr(c,_){c.H&&le(c.H,function(y,A){$e(_,A,y)}),c.l&&ul({},function(y,A){$e(_,A,y)})}function yc(c,_,y){y=Math.min(c.i.length,y);var A=c.l?w(c.l.Na,c.l,c):null;e:{var x=c.i;let H=-1;for(;;){const ee=["count="+y];H==-1?0<y?(H=x[0].g,ee.push("ofs="+H)):H=0:ee.push("ofs="+H);let Ve=!0;for(let Dt=0;Dt<y;Dt++){let xe=x[Dt].g;const Ut=x[Dt].map;if(xe-=H,0>xe)H=Math.max(0,x[Dt].g-100),Ve=!1;else try{mi(Ut,ee,"req"+xe+"_")}catch{A&&A(Ut)}}if(Ve){A=ee.join("&");break e}}}return c=c.i.splice(0,y),_.D=c,A}function vc(c){if(!c.g&&!c.u){c.Y=1;var _=c.Fa;te||D(),fe||(te(),fe=!0),He.add(_,c),c.v=0}}function _l(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=At(w(c.Fa,c),yl(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,Ec(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=At(w(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Ba(this),Ec(this))};function Hr(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function Ec(c){c.g=new dn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var _=An(c.qa);$e(_,"RID","rpc"),$e(_,"SID",c.K),$e(_,"AID",c.T),$e(_,"CI",c.F?"0":"1"),!c.F&&c.ja&&$e(_,"TO",c.ja),$e(_,"TYPE","xmlhttp"),qr(c,_),c.m&&c.o&&Lt(_,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Vr(An(_)),y.m=null,y.P=!0,qi(y,c)}i.Za=function(){this.C!=null&&(this.C=null,Ba(this),_l(this),ut(19))};function qa(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function Tc(c,_){var y=null;if(c.g==_){qa(c),Hr(c),c.g=null;var A=2}else if(ol(c.h,_))y=_.D,pn(c.h,_),A=1;else return;if(c.G!=0){if(_.o)if(A==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var x=c.B;A=ws(),Qe(A,new Nt(A,y)),Fa(c)}else vc(c);else if(x=_.s,x==3||x==0&&0<_.X||!(A==1&&rd(c,_)||A==2&&_l(c)))switch(y&&0<y.length&&(_=c.h,_.i=_.i.concat(y)),x){case 1:Wi(c,5);break;case 4:Wi(c,10);break;case 3:Wi(c,6);break;default:Wi(c,2)}}}function yl(c,_){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*_}function Wi(c,_){if(c.j.info("Error code "+_),_==2){var y=w(c.fb,c),A=c.Xa;const x=!A;A=new wt(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Pr(A,"https"),Vr(A),x?Lr(A.toString(),y):Jn(A.toString(),y)}else ut(2);c.G=0,c.l&&c.l.sa(_),Sc(c),_c(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Sc(c){if(c.G=0,c.ka=[],c.l){const _=ll(c.h);(_.length!=0||c.i.length!=0)&&(W(c.ka,_),W(c.ka,c.i),c.h.i.length=0,Z(c.i),c.i.length=0),c.l.ra()}}function Ac(c,_,y){var A=y instanceof wt?An(y):new wt(y);if(A.g!="")_&&(A.g=_+"."+A.g),Ns(A,A.s);else{var x=p.location;A=x.protocol,_=_?_+"."+x.hostname:x.hostname,x=+x.port;var H=new wt(null);A&&Pr(H,A),_&&(H.g=_),x&&Ns(H,x),y&&(H.l=y),A=H}return y=c.D,_=c.ya,y&&_&&$e(A,y,_),$e(A,"VER",c.la),qr(c,A),A}function wc(c,_,y){if(_&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=c.Ca&&!c.pa?new Ge(new Ds({eb:y})):new Ge(c.pa),_.Ha(c.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function bc(){}i=bc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ha(){}Ha.prototype.g=function(c,_){return new mn(c,_)};function mn(c,_){mt.call(this),this.g=new za(_),this.l=c,this.h=_&&_.messageUrlParams||null,c=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(c?c["X-WebChannel-Content-Type"]=_.messageContentType:c={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(c?c["X-WebChannel-Client-Profile"]=_.va:c={"X-WebChannel-Client-Profile":_.va}),this.g.S=c,(c=_&&_.Sb)&&!ue(c)&&(this.g.m=c),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ue(_)&&(this.g.D=_,c=this.h,c!==null&&_ in c&&(c=this.h,_ in c&&delete c[_])),this.j=new vi(this)}q(mn,mt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){ml(this.g)},mn.prototype.o=function(c){var _=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=$n(c),c=y);_.i.push(new fc(_.Ya++,c)),_.G==3&&Fa(_)},mn.prototype.N=function(){this.g.l=null,delete this.j,ml(this.g),delete this.g,mn.aa.N.call(this)};function Rc(c){Bi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var _=c.__sm__;if(_){e:{for(const y in _){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,_=_!==null&&c in _?_[c]:void 0),this.data=_}else this.data=c}q(Rc,Bi);function Cc(){il.call(this),this.status=1}q(Cc,il);function vi(c){this.g=c}q(vi,bc),vi.prototype.ua=function(){Qe(this.g,"a")},vi.prototype.ta=function(c){Qe(this.g,new Rc(c))},vi.prototype.sa=function(c){Qe(this.g,new Cc)},vi.prototype.ra=function(){Qe(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,CA=function(){return new Ha},RA=function(){return ws()},bA=ci,Um={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cs.NO_ERROR=0,Cs.TIMEOUT=8,Cs.HTTP_ERROR=6,Uh=Cs,Fi.COMPLETE="complete",wA=Fi,nl.EventType=zi,zi.OPEN="a",zi.CLOSE="b",zi.ERROR="c",zi.MESSAGE="d",mt.prototype.listen=mt.prototype.K,pu=nl,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,AA=Ge}).apply(typeof Dh<"u"?Dh:typeof self<"u"?self:typeof window<"u"?window:{});const kT="@firebase/firestore",PT="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}on.UNAUTHENTICATED=new on(null),on.GOOGLE_CREDENTIALS=new on("google-credentials-uid"),on.FIRST_PARTY=new on("first-party-uid"),on.MOCK_USER=new on("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new If("@firebase/firestore");function Eo(){return pa.logLevel}function ae(i,...e){if(pa.logLevel<=Me.DEBUG){const t=e.map(kg);pa.debug(`Firestore (${Ko}): ${i}`,...t)}}function ys(i,...e){if(pa.logLevel<=Me.ERROR){const t=e.map(kg);pa.error(`Firestore (${Ko}): ${i}`,...t)}}function fr(i,...e){if(pa.logLevel<=Me.WARN){const t=e.map(kg);pa.warn(`Firestore (${Ko}): ${i}`,...t)}}function kg(i){if(typeof i=="string")return i;try{/**
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
 */function ve(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,IA(i,s,t)}function IA(i,e,t){let s=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ys(s),new Error(s)}function Ye(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||IA(e,a,s)}function we(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ts{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(on.UNAUTHENTICATED))}shutdown(){}}class FD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qD{constructor(e){this.t=e,this.currentUser=on.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new lr,e.enqueueRetryable(()=>a(this.currentUser))};const h=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},p=m=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new lr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string",31837,{l:s}),new NA(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new on(e)}}class HD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=on.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new HD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(on.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new VT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new VT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KD(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function DA(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=KD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ce(i,e){return i<e?-1:i>e?1:0}function zm(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ce(s,a);{const l=DA(),h=YD(l.encode(xT(i,t)),l.encode(xT(e,t)));return h!==0?h:Ce(s,a)}}t+=s>65535?2:1}return Ce(i.length,e.length)}function xT(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function YD(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ce(i[t],e[t]);return Ce(i.length,e.length)}function xo(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="__name__";class Ri{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ri.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ri?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Ri.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Ri.isNumericId(e),a=Ri.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Ri.extractNumericId(e).compare(Ri.extractNumericId(t)):zm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class ft extends Ri{construct(e,t,s){return new ft(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new ft(t)}static emptyPath(){return new ft([])}}const QD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends Ri{construct(e,t,s){return new en(e,t,s)}static isValidIdentifier(e){return QD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===LT}static keyField(){return new en([LT])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new he($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const p=e[a];if(p==="\\"){if(a+1===e.length)throw new he($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new he($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else p==="`"?(h=!h,a++):p!=="."||h?(s+=p,a++):(l(),a++)}if(l(),h)throw new he($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(t)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(ft.fromString(e))}static fromName(e){return new pe(ft.fromString(e).popFirst(5))}static empty(){return new pe(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ft.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new ft(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(i,e,t){if(!t)throw new he($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function XD(i,e,t,s){if(e===!0&&s===!0)throw new he($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function UT(i){if(!pe.isDocumentKey(i))throw new he($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function OA(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Vg(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve(12329,{type:typeof i})}function ku(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vg(i);throw new he($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function It(i,e){const t={typeString:i};return e&&(t.value=e),t}function Wu(i,e){if(!OA(i))throw new he($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(a&&typeof h!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new he($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=-62135596800,BT=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*BT);return new ot(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zT)throw new he($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/BT}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wu(e,ot._jsonSchema))return new ot(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:It("string",ot._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new ot(0,0))}static max(){return new Ae(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pu=-1;function $D(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(s===1e9?new ot(t+1,0):new ot(t,s));return new dr(a,pe.empty(),e)}function ZD(i){return new dr(i.readTime,i.key,Pu)}class dr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new dr(Ae.min(),pe.empty(),Pu)}static max(){return new dr(Ae.max(),pe.empty(),Pu)}}function JD(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(i.documentKey,e.documentKey),t!==0?t:Ce(i.largestBatchId,e.largestBatchId))}/**
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
 */const eO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==eO)throw i;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,s)=>{t(e)})}static reject(e){return new Q((t,s)=>{s(e)})}static waitFor(e){return new Q((t,s)=>{let a=0,l=0,h=!1;e.forEach(p=>{++a,p.next(()=>{++l,h&&l===a&&t()},m=>s(m))}),h=!0,l===a&&t()})}static or(e){let t=Q.resolve(!1);for(const s of e)t=t.next(a=>a?Q.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new Q((s,a)=>{const l=e.length,h=new Array(l);let p=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(E=>{h[g]=E,++p,p===l&&s(h)},E=>a(E))}})}static doWhile(e,t){return new Q((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function nO(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Vf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Vf.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=-1;function xf(i){return i==null}function of(i){return i===0&&1/i==-1/0}function iO(i){return typeof i=="number"&&Number.isInteger(i)&&!of(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="";function sO(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=FT(e)),e=rO(i.get(t),e);return FT(e)}function rO(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case MA:t+="";break;default:t+=l}}return t}function FT(i){return i+MA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ta(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function kA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.comparator=e,this.root=t||Zt.EMPTY}insert(e,t){return new dt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oh(this.root,e,this.comparator,!0)}}class Oh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Zt.RED,this.left=a??Zt.EMPTY,this.right=l??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Zt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Zt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new HT(this.data.getIterator())}getIteratorFrom(e){return new HT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class HT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ri{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new ri([])}unionWith(e){let t=new Vt(en.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ri(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class PA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new PA("Invalid base64 string: "+l):l}}(e);return new tn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let h=0;h<a.length;++h)l+=String.fromCharCode(a[h]);return l}(e);return new tn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const aO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(i){if(Ye(!!i,39018),typeof i=="string"){let e=0;const t=aO.exec(i);if(Ye(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:St(i.seconds),nanos:St(i.nanos)}}function St(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function mr(i){return typeof i=="string"?tn.fromBase64String(i):tn.fromUint8Array(i)}/**
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
 */const VA="server_timestamp",xA="__type__",LA="__previous_value__",UA="__local_write_time__";function Lg(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[xA])===null||t===void 0?void 0:t.stringValue)===VA}function Lf(i){const e=i.mapValue.fields[LA];return Lg(e)?Lf(e):e}function Vu(i){const e=pr(i.mapValue.fields[UA].timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t,s,a,l,h,p,m,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=E}}const lf="(default)";class xu{constructor(e,t){this.projectId=e,this.database=t||lf}static empty(){return new xu("","")}get isDefaultDatabase(){return this.database===lf}isEqual(e){return e instanceof xu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zA="__type__",lO="__max__",Mh={mapValue:{}},BA="__vector__",uf="value";function gr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Lg(i)?4:cO(i)?9007199254740991:uO(i)?10:11:ve(28295,{value:i})}function xi(i,e){if(i===e)return!0;const t=gr(i);if(t!==gr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Vu(i).isEqual(Vu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const h=pr(a.timestampValue),p=pr(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return mr(a.bytesValue).isEqual(mr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return St(a.geoPointValue.latitude)===St(l.geoPointValue.latitude)&&St(a.geoPointValue.longitude)===St(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return St(a.integerValue)===St(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const h=St(a.doubleValue),p=St(l.doubleValue);return h===p?of(h)===of(p):isNaN(h)&&isNaN(p)}return!1}(i,e);case 9:return xo(i.arrayValue.values||[],e.arrayValue.values||[],xi);case 10:case 11:return function(a,l){const h=a.mapValue.fields||{},p=l.mapValue.fields||{};if(qT(h)!==qT(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!xi(h[m],p[m])))return!1;return!0}(i,e);default:return ve(52216,{left:i})}}function Lu(i,e){return(i.values||[]).find(t=>xi(t,e))!==void 0}function Lo(i,e){if(i===e)return 0;const t=gr(i),s=gr(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(i.booleanValue,e.booleanValue);case 2:return function(l,h){const p=St(l.integerValue||l.doubleValue),m=St(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(i,e);case 3:return jT(i.timestampValue,e.timestampValue);case 4:return jT(Vu(i),Vu(e));case 5:return zm(i.stringValue,e.stringValue);case 6:return function(l,h){const p=mr(l),m=mr(h);return p.compareTo(m)}(i.bytesValue,e.bytesValue);case 7:return function(l,h){const p=l.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const E=Ce(p[g],m[g]);if(E!==0)return E}return Ce(p.length,m.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,h){const p=Ce(St(l.latitude),St(h.latitude));return p!==0?p:Ce(St(l.longitude),St(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return GT(i.arrayValue,e.arrayValue);case 10:return function(l,h){var p,m,g,E;const S=l.fields||{},w=h.fields||{},U=(p=S[uf])===null||p===void 0?void 0:p.arrayValue,q=(m=w[uf])===null||m===void 0?void 0:m.arrayValue,Z=Ce(((g=U?.values)===null||g===void 0?void 0:g.length)||0,((E=q?.values)===null||E===void 0?void 0:E.length)||0);return Z!==0?Z:GT(U,q)}(i.mapValue,e.mapValue);case 11:return function(l,h){if(l===Mh.mapValue&&h===Mh.mapValue)return 0;if(l===Mh.mapValue)return 1;if(h===Mh.mapValue)return-1;const p=l.fields||{},m=Object.keys(p),g=h.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let S=0;S<m.length&&S<E.length;++S){const w=zm(m[S],E[S]);if(w!==0)return w;const U=Lo(p[m[S]],g[E[S]]);if(U!==0)return U}return Ce(m.length,E.length)}(i.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function jT(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ce(i,e);const t=pr(i),s=pr(e),a=Ce(t.seconds,s.seconds);return a!==0?a:Ce(t.nanos,s.nanos)}function GT(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Lo(t[a],s[a]);if(l)return l}return Ce(t.length,s.length)}function Uo(i){return Bm(i)}function Bm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=pr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return mr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return pe.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Bm(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const h of s)l?l=!1:a+=",",a+=`${h}:${Bm(t.fields[h])}`;return a+"}"}(i.mapValue):ve(61005,{value:i})}function zh(i){switch(gr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lf(i);return e?16+zh(e):16;case 5:return 2*i.stringValue.length;case 6:return mr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+zh(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Ta(s.fields,(l,h)=>{a+=l.length+zh(h)}),a}(i.mapValue);default:throw ve(13486,{value:i})}}function Fm(i){return!!i&&"integerValue"in i}function Ug(i){return!!i&&"arrayValue"in i}function KT(i){return!!i&&"nullValue"in i}function YT(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Bh(i){return!!i&&"mapValue"in i}function uO(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[zA])===null||t===void 0?void 0:t.stringValue)===BA}function Au(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Ta(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Au(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Au(i.arrayValue.values[t]);return e}return Object.assign({},i)}function cO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===lO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.value=e}static empty(){return new Yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Bh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Au(t)}setAll(e){let t=en.emptyPath(),s={},a=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=p.popLast()}h?s[p.lastSegment()]=Au(h):a.push(p.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Bh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Bh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Ta(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new Yn(Au(this.value))}}function FA(i){const e=[];return Ta(i.fields,(t,s)=>{const a=new en([t]);if(Bh(s)){const l=FA(s.mapValue).fields;if(l.length===0)e.push(a);else for(const h of l)e.push(a.child(h))}else e.push(a)}),new ri(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,s,a,l,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new cn(e,0,Ae.min(),Ae.min(),Ae.min(),Yn.empty(),0)}static newFoundDocument(e,t,s,a){return new cn(e,1,t,Ae.min(),s,a,0)}static newNoDocument(e,t){return new cn(e,2,t,Ae.min(),Ae.min(),Yn.empty(),0)}static newUnknownDocument(e,t){return new cn(e,3,t,Ae.min(),Ae.min(),Yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cf{constructor(e,t){this.position=e,this.inclusive=t}}function QT(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],h=i.position[a];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=Lo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function WT(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!xi(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class hf{constructor(e,t="asc"){this.field=e,this.dir=t}}function hO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class qA{}class Pt extends qA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new dO(e,t,s):t==="array-contains"?new gO(e,s):t==="in"?new _O(e,s):t==="not-in"?new yO(e,s):t==="array-contains-any"?new vO(e,s):new Pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new pO(e,s):new mO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Lo(t,this.value)):t!==null&&gr(this.value)===gr(t)&&this.matchesComparison(Lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Li extends qA{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Li(e,t)}matches(e){return HA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function HA(i){return i.op==="and"}function jA(i){return fO(i)&&HA(i)}function fO(i){for(const e of i.filters)if(e instanceof Li)return!1;return!0}function qm(i){if(i instanceof Pt)return i.field.canonicalString()+i.op.toString()+Uo(i.value);if(jA(i))return i.filters.map(e=>qm(e)).join(",");{const e=i.filters.map(t=>qm(t)).join(",");return`${i.op}(${e})`}}function GA(i,e){return i instanceof Pt?function(s,a){return a instanceof Pt&&s.op===a.op&&s.field.isEqual(a.field)&&xi(s.value,a.value)}(i,e):i instanceof Li?function(s,a){return a instanceof Li&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,h,p)=>l&&GA(h,a.filters[p]),!0):!1}(i,e):void ve(19439)}function KA(i){return i instanceof Pt?function(t){return`${t.field.canonicalString()} ${t.op} ${Uo(t.value)}`}(i):i instanceof Li?function(t){return t.op.toString()+" {"+t.getFilters().map(KA).join(" ,")+"}"}(i):"Filter"}class dO extends Pt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class pO extends Pt{constructor(e,t){super(e,"in",t),this.keys=YA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class mO extends Pt{constructor(e,t){super(e,"not-in",t),this.keys=YA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function YA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>pe.fromName(s.referenceValue))}class gO extends Pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ug(t)&&Lu(t.arrayValue,this.value)}}class _O extends Pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Lu(this.value.arrayValue,t)}}class yO extends Pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Lu(this.value.arrayValue,t)}}class vO extends Pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ug(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Lu(this.value.arrayValue,s))}}/**
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
 */class EO{constructor(e,t=null,s=[],a=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=h,this.endAt=p,this.Pe=null}}function XT(i,e=null,t=[],s=[],a=null,l=null,h=null){return new EO(i,e,t,s,a,l,h)}function zg(i){const e=we(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>qm(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),xf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Uo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Uo(s)).join(",")),e.Pe=t}return e.Pe}function Bg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!hO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!GA(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!WT(i.startAt,e.startAt)&&WT(i.endAt,e.endAt)}function Hm(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t=null,s=[],a=[],l=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function TO(i,e,t,s,a,l,h,p){return new Uf(i,e,t,s,a,l,h,p)}function Fg(i){return new Uf(i)}function $T(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function SO(i){return i.collectionGroup!==null}function wu(i){const e=we(i);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Vt(en.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new hf(l,s))}),t.has(en.keyField().canonicalString())||e.Te.push(new hf(en.keyField(),s))}return e.Te}function Di(i){const e=we(i);return e.Ie||(e.Ie=AO(e,wu(i))),e.Ie}function AO(i,e){if(i.limitType==="F")return XT(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new hf(a.field,l)});const t=i.endAt?new cf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new cf(i.startAt.position,i.startAt.inclusive):null;return XT(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function jm(i,e,t){return new Uf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function zf(i,e){return Bg(Di(i),Di(e))&&i.limitType===e.limitType}function QA(i){return`${zg(Di(i))}|lt:${i.limitType}`}function To(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>KA(a)).join(", ")}]`),xf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Uo(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Uo(a)).join(",")),`Target(${s})`}(Di(i))}; limitType=${i.limitType})`}function Bf(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of wu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(h,p,m){const g=QT(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,wu(s),a)||s.endAt&&!function(h,p,m){const g=QT(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,wu(s),a))}(i,e)}function wO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function WA(i){return(e,t)=>{let s=!1;for(const a of wu(i)){const l=bO(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function bO(i,e,t){const s=i.field.isKeyField()?pe.comparator(e.key,t.key):function(l,h,p){const m=h.data.field(l),g=p.data.field(l);return m!==null&&g!==null?Lo(m,g):ve(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ta(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return kA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=new dt(pe.comparator);function vs(){return RO}const XA=new dt(pe.comparator);function mu(...i){let e=XA;for(const t of i)e=e.insert(t.key,t);return e}function $A(i){let e=XA;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function la(){return bu()}function ZA(){return bu()}function bu(){return new Sa(i=>i.toString(),(i,e)=>i.isEqual(e))}const CO=new dt(pe.comparator),IO=new Vt(pe.comparator);function ke(...i){let e=IO;for(const t of i)e=e.add(t);return e}const NO=new Vt(Ce);function DO(){return NO}/**
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
 */function qg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:of(e)?"-0":e}}function JA(i){return{integerValue:""+i}}function OO(i,e){return iO(e)?JA(e):qg(i,e)}/**
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
 */class Ff{constructor(){this._=void 0}}function MO(i,e,t){return i instanceof ff?function(a,l){const h={fields:{[xA]:{stringValue:VA},[UA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Lg(l)&&(l=Lf(l)),l&&(h.fields[LA]=l),{mapValue:h}}(t,e):i instanceof Uu?tw(i,e):i instanceof zu?nw(i,e):function(a,l){const h=ew(a,l),p=ZT(h)+ZT(a.Ee);return Fm(h)&&Fm(a.Ee)?JA(p):qg(a.serializer,p)}(i,e)}function kO(i,e,t){return i instanceof Uu?tw(i,e):i instanceof zu?nw(i,e):t}function ew(i,e){return i instanceof df?function(s){return Fm(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class ff extends Ff{}class Uu extends Ff{constructor(e){super(),this.elements=e}}function tw(i,e){const t=iw(e);for(const s of i.elements)t.some(a=>xi(a,s))||t.push(s);return{arrayValue:{values:t}}}class zu extends Ff{constructor(e){super(),this.elements=e}}function nw(i,e){let t=iw(e);for(const s of i.elements)t=t.filter(a=>!xi(a,s));return{arrayValue:{values:t}}}class df extends Ff{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ZT(i){return St(i.integerValue||i.doubleValue)}function iw(i){return Ug(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function PO(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Uu&&a instanceof Uu||s instanceof zu&&a instanceof zu?xo(s.elements,a.elements,xi):s instanceof df&&a instanceof df?xi(s.Ee,a.Ee):s instanceof ff&&a instanceof ff}(i.transform,e.transform)}class VO{constructor(e,t){this.version=e,this.transformResults=t}}class ps{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ps}static exists(e){return new ps(void 0,e)}static updateTime(e){return new ps(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class qf{}function sw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new aw(i.key,ps.none()):new Xu(i.key,i.data,ps.none());{const t=i.data,s=Yn.empty();let a=new Vt(en.comparator);for(let l of e.fields)if(!a.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),a=a.add(l)}return new Aa(i.key,s,new ri(a.toArray()),ps.none())}}function xO(i,e,t){i instanceof Xu?function(a,l,h){const p=a.value.clone(),m=e0(a.fieldTransforms,l,h.transformResults);p.setAll(m),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):i instanceof Aa?function(a,l,h){if(!Fh(a.precondition,l))return void l.convertToUnknownDocument(h.version);const p=e0(a.fieldTransforms,l,h.transformResults),m=l.data;m.setAll(rw(a)),m.setAll(p),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):function(a,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ru(i,e,t,s){return i instanceof Xu?function(l,h,p,m){if(!Fh(l.precondition,h))return p;const g=l.value.clone(),E=t0(l.fieldTransforms,m,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof Aa?function(l,h,p,m){if(!Fh(l.precondition,h))return p;const g=t0(l.fieldTransforms,m,h),E=h.data;return E.setAll(rw(l)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(S=>S.field))}(i,e,t,s):function(l,h,p){return Fh(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(i,e,t)}function LO(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=ew(s.transform,a||null);l!=null&&(t===null&&(t=Yn.empty()),t.set(s.field,l))}return t||null}function JT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&xo(s,a,(l,h)=>PO(l,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Xu extends qf{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Aa extends qf{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function rw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function e0(i,e,t){const s=new Map;Ye(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let a=0;a<t.length;a++){const l=i[a],h=l.transform,p=e.data.field(l.field);s.set(l.field,kO(h,p,t[a]))}return s}function t0(i,e,t){const s=new Map;for(const a of i){const l=a.transform,h=t.data.field(a.field);s.set(a.field,MO(l,h,e))}return s}class aw extends qf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UO extends qf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&xO(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ru(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ru(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ZA();return this.mutations.forEach(a=>{const l=e.get(a.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(a.key)?null:p;const m=sw(h,p);m!==null&&s.set(a.key,m),h.isValidDocument()||h.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,(t,s)=>JT(t,s))&&xo(this.baseMutations,e.baseMutations,(t,s)=>JT(t,s))}}class Hg{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Ye(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=function(){return CO}();const l=e.mutations;for(let h=0;h<l.length;h++)a=a.insert(l[h].key,s[h].version);return new Hg(e,t,s,a)}}/**
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
 */class BO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct,Ue;function qO(i){switch(i){case $.OK:return ve(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ve(15467,{code:i})}}function ow(i){if(i===void 0)return ys("GRPC error has no .code"),$.UNKNOWN;switch(i){case Ct.OK:return $.OK;case Ct.CANCELLED:return $.CANCELLED;case Ct.UNKNOWN:return $.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return $.INTERNAL;case Ct.UNAVAILABLE:return $.UNAVAILABLE;case Ct.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ct.NOT_FOUND:return $.NOT_FOUND;case Ct.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ct.ABORTED:return $.ABORTED;case Ct.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ct.DATA_LOSS:return $.DATA_LOSS;default:return ve(39323,{code:i})}}(Ue=Ct||(Ct={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const HO=new or([4294967295,4294967295],0);function n0(i){const e=DA().encode(i),t=new SA;return t.update(e),new Uint8Array(t.digest())}function i0(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new or([t,s],0),new or([a,l],0)]}class jg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new gu(`Invalid padding: ${t}`);if(s<0)throw new gu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new gu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=or.fromNumber(this.fe)}pe(e,t,s){let a=e.add(t.multiply(or.fromNumber(s)));return a.compare(HO)===1&&(a=new or([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=n0(e),[s,a]=i0(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,a,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new jg(l,a,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.fe===0)return;const t=n0(e),[s,a]=i0(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,a,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class gu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,$u.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Hf(Ae.min(),a,new dt(Ce),vs(),ke())}}class $u{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new $u(s,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=a}}class lw{constructor(e,t){this.targetId=e,this.De=t}}class uw{constructor(e,t,s=tn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class s0{constructor(){this.ve=0,this.Ce=r0(),this.Fe=tn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),t=ke(),s=ke();return this.Ce.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:ve(38017,{changeType:l})}}),new $u(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=r0()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class jO{constructor(e){this.We=e,this.Ge=new Map,this.ze=vs(),this.je=kh(),this.Je=kh(),this.He=new dt(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,a)=>{this.nt(a)&&t(a)})}it(e){const t=e.targetId,s=e.De.count,a=this.st(t);if(a){const l=a.target;if(Hm(l))if(s===0){const h=new pe(l.path);this.Xe(t,h,cn.newNoDocument(h,Ae.min()))}else Ye(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const p=this._t(e),m=p?this.ut(p,e,h):1;if(m!==0){this.rt(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let h,p;try{h=mr(s).toUint8Array()}catch(m){if(m instanceof PA)return fr("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new jg(h,a,l)}catch(m){return fr(m instanceof gu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.fe===0?null:p}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const h=this.We.lt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.Xe(t,l,null),a++)}),a}Pt(e){const t=new Map;this.Ge.forEach((l,h)=>{const p=this.st(h);if(p){if(l.current&&Hm(p.target)){const m=new pe(p.target.path);this.Tt(m).has(h)||this.It(h,m)||this.Xe(h,m,cn.newNoDocument(m,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}});let s=ke();this.Je.forEach((l,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.st(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(l))}),this.ze.forEach((l,h)=>h.setReadTime(e));const a=new Hf(e,t,this.He,this.ze,s);return this.ze=vs(),this.je=kh(),this.Je=kh(),this.He=new dt(Ce),a}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,t)?a.qe(t,1):a.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new s0,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Vt(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Vt(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new s0),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function kh(){return new dt(pe.comparator)}function r0(){return new dt(pe.comparator)}const GO={asc:"ASCENDING",desc:"DESCENDING"},KO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YO={and:"AND",or:"OR"};class QO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gm(i,e){return i.useProto3Json||xf(e)?e:{value:e}}function pf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function WO(i,e){return pf(i,e.toTimestamp())}function Oi(i){return Ye(!!i,49232),Ae.fromTimestamp(function(t){const s=pr(t);return new ot(s.seconds,s.nanos)}(i))}function Gg(i,e){return Km(i,e).canonicalString()}function Km(i,e){const t=function(a){return new ft(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function hw(i){const e=ft.fromString(i);return Ye(gw(e),10190,{key:e.toString()}),e}function Ym(i,e){return Gg(i.databaseId,e.path)}function pm(i,e){const t=hw(e);if(t.get(1)!==i.databaseId.projectId)throw new he($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new he($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new pe(dw(t))}function fw(i,e){return Gg(i.databaseId,e)}function XO(i){const e=hw(i);return e.length===4?ft.emptyPath():dw(e)}function Qm(i){return new ft(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function dw(i){return Ye(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function a0(i,e,t){return{name:Ym(i,e),fields:t.value.mapValue.fields}}function $O(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ve(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,E){return g.useProto3Json?(Ye(E===void 0||typeof E=="string",58123),tn.fromBase64String(E||"")):(Ye(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),tn.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const E=g.code===void 0?$.UNKNOWN:ow(g.code);return new he(E,g.message||"")}(h);t=new uw(s,a,l,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=pm(i,s.document.name),l=Oi(s.document.updateTime),h=s.document.createTime?Oi(s.document.createTime):Ae.min(),p=new Yn({mapValue:{fields:s.document.fields}}),m=cn.newFoundDocument(a,l,h,p),g=s.targetIds||[],E=s.removedTargetIds||[];t=new qh(g,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=pm(i,s.document),l=s.readTime?Oi(s.readTime):Ae.min(),h=cn.newNoDocument(a,l),p=s.removedTargetIds||[];t=new qh([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=pm(i,s.document),l=s.removedTargetIds||[];t=new qh([],l,a,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,h=new FO(a,l),p=s.targetId;t=new lw(p,h)}}return t}function ZO(i,e){let t;if(e instanceof Xu)t={update:a0(i,e.key,e.value)};else if(e instanceof aw)t={delete:Ym(i,e.key)};else if(e instanceof Aa)t={update:a0(i,e.key,e.data),updateMask:o2(e.fieldMask)};else{if(!(e instanceof UO))return ve(16599,{Rt:e.type});t={verify:Ym(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const p=h.transform;if(p instanceof ff)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Uu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof zu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof df)return{fieldPath:h.field.canonicalString(),increment:p.Ee};throw ve(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:WO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)}(i,e.precondition)),t}function JO(i,e){return i&&i.length>0?(Ye(e!==void 0,14353),i.map(t=>function(a,l){let h=a.updateTime?Oi(a.updateTime):Oi(l);return h.isEqual(Ae.min())&&(h=Oi(l)),new VO(h,a.transformResults||[])}(t,e))):[]}function e2(i,e){return{documents:[fw(i,e.path)]}}function t2(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=fw(i,a);const l=function(g){if(g.length!==0)return mw(Li.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(g){if(g.length!==0)return g.map(E=>function(w){return{field:So(w.field),direction:s2(w.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Gm(i,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{Vt:t,parent:a}}function n2(i){let e=XO(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Ye(s===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(S){const w=pw(S);return w instanceof Li&&jA(w)?w.getFilters():[w]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(w=>function(q){return new hf(Ao(q.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(w))}(t.orderBy));let p=null;t.limit&&(p=function(S){let w;return w=typeof S=="object"?S.value:S,xf(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(S){const w=!!S.before,U=S.values||[];return new cf(U,w)}(t.startAt));let g=null;return t.endAt&&(g=function(S){const w=!S.before,U=S.values||[];return new cf(U,w)}(t.endAt)),TO(e,a,h,l,p,"F",m,g)}function i2(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pw(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ao(t.unaryFilter.field);return Pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Ao(t.unaryFilter.field);return Pt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ao(t.unaryFilter.field);return Pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ao(t.unaryFilter.field);return Pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}}(i):i.fieldFilter!==void 0?function(t){return Pt.create(Ao(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Li.create(t.compositeFilter.filters.map(s=>pw(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ve(1026)}}(t.compositeFilter.op))}(i):ve(30097,{filter:i})}function s2(i){return GO[i]}function r2(i){return KO[i]}function a2(i){return YO[i]}function So(i){return{fieldPath:i.canonicalString()}}function Ao(i){return en.fromServerFormat(i.fieldPath)}function mw(i){return i instanceof Pt?function(t){if(t.op==="=="){if(YT(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NAN"}};if(KT(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(YT(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NAN"}};if(KT(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:So(t.field),op:r2(t.op),value:t.value}}}(i):i instanceof Li?function(t){const s=t.getFilters().map(a=>mw(a));return s.length===1?s[0]:{compositeFilter:{op:a2(t.op),filters:s}}}(i):ve(54877,{filter:i})}function o2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,s,a,l=Ae.min(),h=Ae.min(),p=tn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.gt=e}}function u2(i){const e=n2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?jm(e,e.limit,"L"):e}/**
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
 */class c2{constructor(){this.Dn=new h2}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(dr.min())}updateCollectionGroup(e,t,s){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class h2{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Vt(ft.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Vt(ft.comparator)).toArray()}}/**
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
 */const o0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_w=41943040;class En{static withCacheSize(e){return new En(e,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En.DEFAULT_COLLECTION_PERCENTILE=10,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,En.DEFAULT=new En(_w,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),En.DISABLED=new En(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new zo(0)}static ur(){return new zo(-1)}}/**
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
 */const l0="LruGarbageCollector",f2=1048576;function u0([i,e],[t,s]){const a=Ce(i,t);return a===0?Ce(e,s):a}class d2{constructor(e){this.Tr=e,this.buffer=new Vt(u0),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();u0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class p2{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ae(l0,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qo(t)?ae(l0,"Ignoring IndexedDB error during garbage collection: ",t):await Yo(t)}await this.Rr(3e5)})}}class m2{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Vf.ue);const s=new d2(t);return this.Vr.forEachTarget(e,a=>s.Er(a.sequenceNumber)).next(()=>this.Vr.gr(e,a=>s.Er(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(o0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),o0):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,l,h,p,m,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),a=this.params.maximumSequenceNumbersToCollect):a=S,h=Date.now(),this.nthSequenceNumber(e,a))).next(S=>(s=S,p=Date.now(),this.removeTargets(e,s,t))).next(S=>(l=S,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(g=Date.now(),Eo()<=Me.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${a} in `+(p-h)+`ms
	Removed ${l} targets in `+(m-p)+`ms
	Removed ${S} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:S})))}}function g2(i,e){return new m2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this.changes=new Sa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class y2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Ru(s.mutation,a,ri.empty(),ot.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ke()){const a=la();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let h=mu();return l.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=la();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ke()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,a){let l=vs();const h=bu(),p=function(){return bu()}();return t.forEach((m,g)=>{const E=s.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof Aa)?l=l.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),Ru(E.mutation,g,E.mutation.getFieldMask(),ot.now())):h.set(g.key,ri.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,E)=>h.set(g,E)),t.forEach((g,E)=>{var S;return p.set(g,new y2(E,(S=h.get(g))!==null&&S!==void 0?S:null))}),p))}recalculateAndSaveOverlays(e,t){const s=bu();let a=new dt((h,p)=>h-p),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let E=s.get(m)||ri.empty();E=p.applyToLocalView(g,E),s.set(m,E);const S=(a.get(p.batchId)||ke()).add(m);a=a.insert(p.batchId,S)})}).next(()=>{const h=[],p=a.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,E=m.value,S=ZA();E.forEach(w=>{if(!l.has(w)){const U=sw(t.get(w),s.get(w));U!==null&&S.set(w,U),l=l.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,S))}return Q.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):SO(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const h=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Q.resolve(la());let p=Pu,m=l;return h.next(g=>Q.forEach(g,(E,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),l.get(E)?Q.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{m=m.insert(E,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,ke())).next(E=>({batchId:p,changes:$A(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(s=>{let a=mu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let h=mu();return this.indexManager.getCollectionParents(e,l).next(p=>Q.forEach(p,m=>{const g=function(S,w){return new Uf(w,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(E=>{E.forEach((S,w)=>{h=h.insert(S,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(h=>{l.forEach((m,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,cn.newInvalidDocument(E)))});let p=mu();return h.forEach((m,g)=>{const E=l.get(m);E!==void 0&&Ru(E.mutation,g,ri.empty(),ot.now()),Bf(t,g)&&(p=p.insert(m,g))}),p})}}/**
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
 */class E2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Oi(a.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(a){return{name:a.name,query:u2(a.bundledQuery),readTime:Oi(a.readTime)}}(t)),Q.resolve()}}/**
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
 */class T2{constructor(){this.overlays=new dt(pe.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=la();return Q.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.wt(e,t,l)}),Q.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(s)),Q.resolve()}getOverlaysForCollection(e,t,s){const a=la(),l=t.length+1,h=new pe(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return Q.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new dt((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=l.get(g.largestBatchId);E===null&&(E=la(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const p=la(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,E)=>p.set(g,E)),!(p.size()>=a)););return Q.resolve(p)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new BO(t,s));let l=this.kr.get(t);l===void 0&&(l=ke(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class S2{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.qr=new Vt(Ht.Qr),this.$r=new Vt(Ht.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Ht(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Ht(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new pe(new ft([])),s=new Ht(t,e),a=new Ht(t,e+1),l=[];return this.$r.forEachInRange([s,a],h=>{this.Wr(h),l.push(h.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new ft([])),s=new Ht(t,e),a=new Ht(t,e+1);let l=ke();return this.$r.forEachInRange([s,a],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Ht(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ht{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Vt(Ht.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new zO(l,t,s,a);this.mutationQueue.push(h);for(const p of a)this.Yr=this.Yr.add(new Ht(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return Q.resolve(h)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?xg:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ht(t,0),a=new Ht(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,a],h=>{const p=this.Zr(h.Hr);l.push(p)}),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Vt(Ce);return t.forEach(a=>{const l=new Ht(a,0),h=new Ht(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],p=>{s=s.add(p.Hr)})}),Q.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const h=new Ht(new pe(l),0);let p=new Vt(Ce);return this.Yr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(p=p.add(m.Hr)),!0)},h),Q.resolve(this.ei(p))}ei(e){const t=[];return e.forEach(s=>{const a=this.Zr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ye(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return Q.forEach(t.mutations,a=>{const l=new Ht(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new Ht(t,0),a=this.Yr.firstAfterOrEqual(s);return Q.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.ni=e,this.docs=function(){return new dt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Q.resolve(s?s.document.mutableCopy():cn.newInvalidDocument(t))}getEntries(e,t){let s=vs();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():cn.newInvalidDocument(a))}),Q.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=vs();const h=t.path,p=new pe(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||JD(ZD(E),s)<=0||(a.has(E.key)||Bf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,s,a){ve(9500)}ri(e,t){return Q.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new b2(this)}getSize(e){return Q.resolve(this.size)}}class b2 extends _2{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)}),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.persistence=e,this.ii=new Sa(t=>zg(t),Bg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.si=0,this.oi=new Kg,this.targetCount=0,this._i=zo.ar()}forEachTarget(e,t){return this.ii.forEach((s,a)=>t(a)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new zo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ii.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),a++)}),Q.waitFor(l).next(()=>a)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return Q.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),Q.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(h=>{l.push(a.markPotentiallyOrphaned(e,h))}),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return Q.resolve(s)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.ai={},this.overlays={},this.ui=new Vf(0),this.ci=!1,this.ci=!0,this.li=new S2,this.referenceDelegate=e(this),this.hi=new R2(this),this.indexManager=new c2,this.remoteDocumentCache=function(a){return new w2(a)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new l2(t),this.Ti=new E2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new T2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new A2(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const a=new C2(this.ui.next());return this.referenceDelegate.Ii(),s(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ei(e,t){return Q.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class C2 extends tO{constructor(e){super(),this.currentSequenceNumber=e}}class Yg{constructor(e){this.persistence=e,this.Ai=new Kg,this.Ri=null}static Vi(e){return new Yg(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),Q.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(a=>this.mi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.mi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,s=>{const a=pe.fromPath(s);return this.fi(e,a).next(l=>{l||t.removeEntry(a,Ae.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class mf{constructor(e,t){this.persistence=e,this.gi=new Sa(s=>sO(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=g2(this,t)}static Vi(e,t){return new mf(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return Q.forEach(this.gi,(s,a)=>this.Sr(e,s,a).next(l=>l?Q.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ri(e,h=>this.Sr(e,h,t).next(p=>{p||(s++,l.removeEntry(h,Ae.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zh(e.data.value)),t}Sr(e,t,s){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return Q.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=ke(),a=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Qg(e,t.fromCache,s,a)}}/**
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
 */class I2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class N2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return N1()?8:nO(fn())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ps(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.ys(e,t,a,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new I2;return this.ws(e,t,h).next(p=>{if(l.result=p,this.Rs)return this.Ss(e,t,h,p.size)})}).next(()=>l.result)}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(Eo()<=Me.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",To(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(Eo()<=Me.DEBUG&&ae("QueryEngine","Query:",To(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(Eo()<=Me.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",To(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Di(t))):Q.resolve())}ps(e,t){if($T(t))return Q.resolve(null);let s=Di(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=jm(t,null,"F"),s=Di(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=ke(...l);return this.gs.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.bs(t,p);return this.Ds(t,g,h,m.readTime)?this.ps(e,jm(t,null,"F")):this.vs(e,g,t,m)}))})))}ys(e,t,s,a){return $T(t)||a.isEqual(Ae.min())?Q.resolve(null):this.gs.getDocuments(e,s).next(l=>{const h=this.bs(t,l);return this.Ds(t,h,s,a)?Q.resolve(null):(Eo()<=Me.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),To(t)),this.vs(e,h,t,$D(a,Pu)).next(p=>p))})}bs(e,t){let s=new Vt(WA(e));return t.forEach((a,l)=>{Bf(e,l)&&(s=s.add(l))}),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ws(e,t,s){return Eo()<=Me.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",To(t)),this.gs.getDocumentsMatchingQuery(e,t,dr.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */const Wg="LocalStore",D2=3e8;class O2{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new dt(Ce),this.Ms=new Sa(l=>zg(l),Bg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new v2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function M2(i,e,t,s){return new O2(i,e,t,s)}async function vw(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],p=[];let m=ke();for(const g of a){h.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of l){p.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Bs:g,removedBatchIds:h,addedBatchIds:p}))})})}function k2(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return function(p,m,g,E){const S=g.batch,w=S.keys();let U=Q.resolve();return w.forEach(q=>{U=U.next(()=>E.getEntry(m,q)).next(Z=>{const W=g.docVersions.get(q);Ye(W!==null,48541),Z.version.compareTo(W)<0&&(S.applyToRemoteDocument(Z,g),Z.isValidDocument()&&(Z.setReadTime(g.commitVersion),E.addEntry(Z)))})}),U.next(()=>p.mutationQueue.removeMutationBatch(m,S))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=ke();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function Ew(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function P2(i,e){const t=we(i),s=e.snapshotVersion;let a=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});a=t.Fs;const p=[];e.targetChanges.forEach((E,S)=>{const w=a.get(S);if(!w)return;p.push(t.hi.removeMatchingKeys(l,E.removedDocuments,S).next(()=>t.hi.addMatchingKeys(l,E.addedDocuments,S)));let U=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?U=U.withResumeToken(tn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(E.resumeToken,s)),a=a.insert(S,U),function(Z,W,Te){return Z.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=D2?!0:Te.addedDocuments.size+Te.modifiedDocuments.size+Te.removedDocuments.size>0}(w,U,E)&&p.push(t.hi.updateTargetData(l,U))});let m=vs(),g=ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),p.push(V2(l,h,e.documentUpdates).next(E=>{m=E.Ls,g=E.ks})),!s.isEqual(Ae.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next(S=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s));p.push(E)}return Q.waitFor(p).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,g)).next(()=>m)}).then(l=>(t.Fs=a,l))}function V2(i,e,t){let s=ke(),a=ke();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let h=vs();return t.forEach((p,m)=>{const g=l.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(p)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):ae(Wg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{Ls:h,ks:a}})}function x2(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=xg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function L2(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.hi.getTargetData(s,e).next(l=>l?(a=l,Q.resolve(a)):t.hi.allocateTargetId(s).next(h=>(a=new ir(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Wm(i,e,t){const s=we(i),a=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,a))}catch(h){if(!Qo(h))throw h;ae(Wg,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function c0(i,e,t){const s=we(i);let a=Ae.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,E){const S=we(m),w=S.Ms.get(E);return w!==void 0?Q.resolve(S.Fs.get(w)):S.hi.getTargetData(g,E)}(s,h,Di(e)).next(p=>{if(p)return a=p.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,p.targetId).next(m=>{l=m})}).next(()=>s.Cs.getDocumentsMatchingQuery(h,e,t?a:Ae.min(),t?l:ke())).next(p=>(U2(s,wO(e),p),{documents:p,qs:l})))}function U2(i,e,t){let s=i.xs.get(e)||Ae.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.xs.set(e,s)}class h0{constructor(){this.activeTargetIds=DO()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class z2{constructor(){this.Fo=new h0,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new h0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class B2{xo(e){}shutdown(){}}/**
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
 */const f0="ConnectivityMonitor";class d0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ae(f0,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ae(f0,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ph=null;function Xm(){return Ph===null?Ph=function(){return 268435456+Math.round(2147483648*Math.random())}():Ph++,"0x"+Ph.toString(16)}/**
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
 */const mm="RestConnection",F2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class q2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===lf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const h=Xm(),p=this.Go(e,t.toUriEncodedString());ae(mm,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,a,l);const{host:g}=new URL(p),E=vr(g);return this.jo(e,p,m,s,E).then(S=>(ae(mm,`Received RPC '${e}' ${h}: `,S),S),S=>{throw fr(mm,`RPC '${e}' ${h} failed with error: `,S,"url: ",p,"request:",s),S})}Jo(e,t,s,a,l,h){return this.Wo(e,t,s,a,l)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ko}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}Go(e,t){const s=F2[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection";class j2 extends q2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,l){const h=Xm();return new Promise((p,m)=>{const g=new AA;g.setWithCredentials(!0),g.listenOnce(wA.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Uh.NO_ERROR:const S=g.getResponseJson();ae(an,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),p(S);break;case Uh.TIMEOUT:ae(an,`RPC '${e}' ${h} timed out`),m(new he($.DEADLINE_EXCEEDED,"Request time out"));break;case Uh.HTTP_ERROR:const w=g.getStatus();if(ae(an,`RPC '${e}' ${h} failed with status:`,w,"response text:",g.getResponseText()),w>0){let U=g.getResponseJson();Array.isArray(U)&&(U=U[0]);const q=U?.error;if(q&&q.status&&q.message){const Z=function(Te){const ue=Te.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ue)>=0?ue:$.UNKNOWN}(q.status);m(new he(Z,q.message))}else m(new he($.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new he($.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{ae(an,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(a);ae(an,`RPC '${e}' ${h} sending request:`,a),g.send(t,"POST",E,s,15)})}P_(e,t,s){const a=Xm(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=CA(),p=RA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=l.join("");ae(an,`Creating RPC '${e}' stream ${a}: ${E}`,m);const S=h.createWebChannel(E,m);this.T_(S);let w=!1,U=!1;const q=new H2({Ho:W=>{U?ae(an,`Not sending because RPC '${e}' stream ${a} is closed:`,W):(w||(ae(an,`Opening RPC '${e}' stream ${a} transport.`),S.open(),w=!0),ae(an,`RPC '${e}' stream ${a} sending:`,W),S.send(W))},Yo:()=>S.close()}),Z=(W,Te,ue)=>{W.listen(Te,se=>{try{ue(se)}catch(_e){setTimeout(()=>{throw _e},0)}})};return Z(S,pu.EventType.OPEN,()=>{U||(ae(an,`RPC '${e}' stream ${a} transport opened.`),q.s_())}),Z(S,pu.EventType.CLOSE,()=>{U||(U=!0,ae(an,`RPC '${e}' stream ${a} transport closed`),q.__(),this.I_(S))}),Z(S,pu.EventType.ERROR,W=>{U||(U=!0,fr(an,`RPC '${e}' stream ${a} transport errored. Name:`,W.name,"Message:",W.message),q.__(new he($.UNAVAILABLE,"The operation could not be completed")))}),Z(S,pu.EventType.MESSAGE,W=>{var Te;if(!U){const ue=W.data[0];Ye(!!ue,16349);const se=ue,_e=se?.error||((Te=se[0])===null||Te===void 0?void 0:Te.error);if(_e){ae(an,`RPC '${e}' stream ${a} received error:`,_e);const re=_e.status;let le=function(C){const M=Ct[C];if(M!==void 0)return ow(M)}(re),N=_e.message;le===void 0&&(le=$.INTERNAL,N="Unknown error status: "+re+" with message "+_e.message),U=!0,q.__(new he(le,N)),S.close()}else ae(an,`RPC '${e}' stream ${a} received:`,ue),q.a_(ue)}}),Z(p,bA.STAT_EVENT,W=>{W.stat===Um.PROXY?ae(an,`RPC '${e}' stream ${a} detected buffering proxy`):W.stat===Um.NOPROXY&&ae(an,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{q.o_()},0),q}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function gm(){return typeof document<"u"?document:null}/**
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
 */function jf(i){return new QO(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&ae("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="PersistentStream";class Sw{constructor(e,t,s,a,l,h,p,m){this.Fi=e,this.w_=s,this.S_=a,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Tw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(ys(t.toString()),ys("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.b_===t&&this.W_(s,a)},s=>{e(()=>{const a=new he($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(a=>{s(()=>this.G_(a))}),this.stream.onMessage(a=>{s(()=>++this.C_==1?this.j_(a):this.onNext(a))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ae(p0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(ae(p0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G2 extends Sw{constructor(e,t,s,a,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=$O(this.serializer,e),s=function(l){if(!("targetChange"in l))return Ae.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ae.min():h.readTime?Oi(h.readTime):Ae.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Qm(this.serializer),t.addTarget=function(l,h){let p;const m=h.target;if(p=Hm(m)?{documents:e2(l,m)}:{query:t2(l,m).Vt},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=cw(l,h.resumeToken);const g=Gm(l,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(Ae.min())>0){p.readTime=pf(l,h.snapshotVersion.toTimestamp());const g=Gm(l,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=i2(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Qm(this.serializer),t.removeTarget=e,this.k_(t)}}class K2 extends Sw{constructor(e,t,s,a,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=JO(e.writeResults,e.commitTime),s=Oi(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Qm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>ZO(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{}class Q2 extends Y2{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new he($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Wo(e,Km(t,s),a,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he($.UNKNOWN,l.toString())})}Jo(e,t,s,a,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Jo(e,Km(t,s),a,h,p,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he($.UNKNOWN,h.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class W2{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ys(t),this._a=!1):ae("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="RemoteStore";class X2{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(h=>{s.enqueueAndForget(async()=>{wa(this)&&(ae(ma,"Restarting streams for network reachability change."),await async function(m){const g=we(m);g.Ia.add(4),await Zu(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Gf(g)}(this))})}),this.Aa=new W2(s,a)}}async function Gf(i){if(wa(i))for(const e of i.da)await e(!0)}async function Zu(i){for(const e of i.da)await e(!1)}function Aw(i,e){const t=we(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Jg(t)?Zg(t):Wo(t).x_()&&$g(t,e))}function Xg(i,e){const t=we(i),s=Wo(t);t.Ta.delete(e),s.x_()&&ww(t,e),t.Ta.size===0&&(s.x_()?s.B_():wa(t)&&t.Aa.set("Unknown"))}function $g(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wo(i).H_(e)}function ww(i,e){i.Ra.$e(e),Wo(i).Y_(e)}function Zg(i){i.Ra=new jO({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Wo(i).start(),i.Aa.aa()}function Jg(i){return wa(i)&&!Wo(i).M_()&&i.Ta.size>0}function wa(i){return we(i).Ia.size===0}function bw(i){i.Ra=void 0}async function $2(i){i.Aa.set("Online")}async function Z2(i){i.Ta.forEach((e,t)=>{$g(i,e)})}async function J2(i,e){bw(i),Jg(i)?(i.Aa.la(e),Zg(i)):i.Aa.set("Unknown")}async function eM(i,e,t){if(i.Aa.set("Online"),e instanceof uw&&e.state===2&&e.cause)try{await async function(a,l){const h=l.cause;for(const p of l.targetIds)a.Ta.has(p)&&(await a.remoteSyncer.rejectListen(p,h),a.Ta.delete(p),a.Ra.removeTarget(p))}(i,e)}catch(s){ae(ma,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await gf(i,s)}else if(e instanceof qh?i.Ra.Ye(e):e instanceof lw?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Ae.min()))try{const s=await Ew(i.localStore);t.compareTo(s)>=0&&await function(l,h){const p=l.Ra.Pt(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const E=l.Ta.get(g);E&&l.Ta.set(g,E.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const E=l.Ta.get(m);if(!E)return;l.Ta.set(m,E.withResumeToken(tn.EMPTY_BYTE_STRING,E.snapshotVersion)),ww(l,m);const S=new ir(E.target,m,g,E.sequenceNumber);$g(l,S)}),l.remoteSyncer.applyRemoteEvent(p)}(i,t)}catch(s){ae(ma,"Failed to raise snapshot:",s),await gf(i,s)}}async function gf(i,e,t){if(!Qo(e))throw e;i.Ia.add(1),await Zu(i),i.Aa.set("Offline"),t||(t=()=>Ew(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ae(ma,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Gf(i)})}function Rw(i,e){return e().catch(t=>gf(i,t,e))}async function Kf(i){const e=we(i),t=_r(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:xg;for(;tM(e);)try{const a=await x2(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,nM(e,a)}catch(a){await gf(e,a)}Cw(e)&&Iw(e)}function tM(i){return wa(i)&&i.Pa.length<10}function nM(i,e){i.Pa.push(e);const t=_r(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function Cw(i){return wa(i)&&!_r(i).M_()&&i.Pa.length>0}function Iw(i){_r(i).start()}async function iM(i){_r(i).na()}async function sM(i){const e=_r(i);for(const t of i.Pa)e.X_(t.mutations)}async function rM(i,e,t){const s=i.Pa.shift(),a=Hg.from(s,e,t);await Rw(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Kf(i)}async function aM(i,e){e&&_r(i).Z_&&await async function(s,a){if(function(h){return qO(h)&&h!==$.ABORTED}(a.code)){const l=s.Pa.shift();_r(s).N_(),await Rw(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Kf(s)}}(i,e),Cw(i)&&Iw(i)}async function m0(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),ae(ma,"RemoteStore received new credentials");const s=wa(t);t.Ia.add(3),await Zu(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Gf(t)}async function oM(i,e){const t=we(i);e?(t.Ia.delete(2),await Gf(t)):e||(t.Ia.add(2),await Zu(t),t.Aa.set("Unknown"))}function Wo(i){return i.Va||(i.Va=function(t,s,a){const l=we(t);return l.ia(),new G2(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:$2.bind(null,i),e_:Z2.bind(null,i),n_:J2.bind(null,i),J_:eM.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),Jg(i)?Zg(i):i.Aa.set("Unknown")):(await i.Va.stop(),bw(i))})),i.Va}function _r(i){return i.ma||(i.ma=function(t,s,a){const l=we(t);return l.ia(),new K2(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:iM.bind(null,i),n_:aM.bind(null,i),ea:sM.bind(null,i),ta:rM.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await Kf(i)):(await i.ma.stop(),i.Pa.length>0&&(ae(ma,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const h=Date.now()+s,p=new e_(e,t,h,a,l);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function t_(i,e){if(ys("AsyncQueue",`${e}: ${i}`),Qo(i))return new he($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{static emptySet(e){return new No(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=mu(),this.sortedSet=new dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof No)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new No;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.fa=new dt(pe.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Bo{constructor(e,t,s,a,l,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new Bo(e,t,No.emptySet(t),h,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class uM{constructor(){this.queries=_0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=we(t),l=a.queries;a.queries=_0(),l.forEach((h,p)=>{for(const m of p.wa)m.onError(s)})})(this,new he($.ABORTED,"Firestore shutting down"))}}function _0(){return new Sa(i=>QA(i),zf)}async function cM(i,e){const t=we(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Sa()&&e.ba()&&(s=2):(l=new lM,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(a,!0);break;case 1:l.ya=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const p=t_(h,`Initialization of query '${To(e.query)}' failed`);return void e.onError(p)}t.queries.set(a,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&n_(t)}async function hM(i,e){const t=we(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?a=e.ba()?0:1:!l.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function fM(i,e){const t=we(i);let s=!1;for(const a of e){const l=a.query,h=t.queries.get(l);if(h){for(const p of h.wa)p.Ca(a)&&(s=!0);h.ya=a}}s&&n_(t)}function dM(i,e,t){const s=we(i),a=s.queries.get(e);if(a)for(const l of a.wa)l.onError(t);s.queries.delete(e)}function n_(i){i.Da.forEach(e=>{e.next()})}var $m,y0;(y0=$m||($m={})).Fa="default",y0.Cache="cache";class pM{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Bo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==$m.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.key=e}}class Dw{constructor(e){this.key=e}}class mM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=WA(e),this.eu=new No(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new g0,a=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=a,p=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((E,S)=>{const w=a.get(E),U=Bf(this.query,S)?S:null,q=!!w&&this.mutatedKeys.has(w.key),Z=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let W=!1;w&&U?w.data.isEqual(U.data)?q!==Z&&(s.track({type:3,doc:U}),W=!0):this.iu(w,U)||(s.track({type:2,doc:U}),W=!0,(m&&this.Xa(U,m)>0||g&&this.Xa(U,g)<0)&&(p=!0)):!w&&U?(s.track({type:0,doc:U}),W=!0):w&&!U&&(s.track({type:1,doc:w}),W=!0,(m||g)&&(p=!0)),W&&(U?(h=h.add(U),l=Z?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:p,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort((E,S)=>function(U,q){const Z=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:W})}};return Z(U)-Z(q)}(E.type,S.type)||this.Xa(E.doc,S.doc)),this.su(s),a=a!=null&&a;const p=t&&!a?this.ou():[],m=this.Za.size===0&&this.current&&!a?1:0,g=m!==this.Ya;return this.Ya=m,h.length!==0||g?{snapshot:new Bo(this.query,e.eu,l,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:p}:{_u:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new g0,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Dw(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Nw(s))}),t}uu(e){this.Ha=e.qs,this.Za=ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Bo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const i_="SyncEngine";class gM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class _M{constructor(e){this.key=e,this.lu=!1}}class yM{constructor(e,t,s,a,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Sa(p=>QA(p),zf),this.Tu=new Map,this.Iu=new Set,this.du=new dt(pe.comparator),this.Eu=new Map,this.Au=new Kg,this.Ru={},this.Vu=new Map,this.mu=zo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function vM(i,e,t=!0){const s=xw(i);let a;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.cu()):a=await Ow(s,e,t,!0),a}async function EM(i,e){const t=xw(i);await Ow(t,e,!0,!1)}async function Ow(i,e,t,s){const a=await L2(i.localStore,Di(e)),l=a.targetId,h=i.sharedClientState.addLocalQueryTarget(l,t);let p;return s&&(p=await TM(i,e,l,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&Aw(i.remoteStore,a),p}async function TM(i,e,t,s,a){i.gu=(S,w,U)=>async function(Z,W,Te,ue){let se=W.view.nu(Te);se.Ds&&(se=await c0(Z.localStore,W.query,!1).then(({documents:N})=>W.view.nu(N,se)));const _e=ue&&ue.targetChanges.get(W.targetId),re=ue&&ue.targetMismatches.get(W.targetId)!=null,le=W.view.applyChanges(se,Z.isPrimaryClient,_e,re);return E0(Z,W.targetId,le._u),le.snapshot}(i,S,w,U);const l=await c0(i.localStore,e,!0),h=new mM(e,l.qs),p=h.nu(l.documents),m=$u.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),g=h.applyChanges(p,i.isPrimaryClient,m);E0(i,t,g._u);const E=new gM(e,t,h);return i.Pu.set(e,E),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),g.snapshot}async function SM(i,e,t){const s=we(i),a=s.Pu.get(e),l=s.Tu.get(a.targetId);if(l.length>1)return s.Tu.set(a.targetId,l.filter(h=>!zf(h,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Wm(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Xg(s.remoteStore,a.targetId),Zm(s,a.targetId)}).catch(Yo)):(Zm(s,a.targetId),await Wm(s.localStore,a.targetId,!0))}async function AM(i,e){const t=we(i),s=t.Pu.get(e),a=t.Tu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Xg(t.remoteStore,s.targetId))}async function wM(i,e,t){const s=OM(i);try{const a=await function(h,p){const m=we(h),g=ot.now(),E=p.reduce((U,q)=>U.add(q.key),ke());let S,w;return m.persistence.runTransaction("Locally write mutations","readwrite",U=>{let q=vs(),Z=ke();return m.Os.getEntries(U,E).next(W=>{q=W,q.forEach((Te,ue)=>{ue.isValidDocument()||(Z=Z.add(Te))})}).next(()=>m.localDocuments.getOverlayedDocuments(U,q)).next(W=>{S=W;const Te=[];for(const ue of p){const se=LO(ue,S.get(ue.key).overlayedDocument);se!=null&&Te.push(new Aa(ue.key,se,FA(se.value.mapValue),ps.exists(!0)))}return m.mutationQueue.addMutationBatch(U,g,Te,p)}).next(W=>{w=W;const Te=W.applyToLocalDocumentSet(S,Z);return m.documentOverlayCache.saveOverlays(U,W.batchId,Te)})}).then(()=>({batchId:w.batchId,changes:$A(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(h,p,m){let g=h.Ru[h.currentUser.toKey()];g||(g=new dt(Ce)),g=g.insert(p,m),h.Ru[h.currentUser.toKey()]=g}(s,a.batchId,t),await Ju(s,a.changes),await Kf(s.remoteStore)}catch(a){const l=t_(a,"Failed to persist write");t.reject(l)}}async function Mw(i,e){const t=we(i);try{const s=await P2(t.localStore,e);e.targetChanges.forEach((a,l)=>{const h=t.Eu.get(l);h&&(Ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?h.lu=!0:a.modifiedDocuments.size>0?Ye(h.lu,14607):a.removedDocuments.size>0&&(Ye(h.lu,42227),h.lu=!1))}),await Ju(t,s,e)}catch(s){await Yo(s)}}function v0(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach((l,h)=>{const p=h.view.va(e);p.snapshot&&a.push(p.snapshot)}),function(h,p){const m=we(h);m.onlineState=p;let g=!1;m.queries.forEach((E,S)=>{for(const w of S.wa)w.va(p)&&(g=!0)}),g&&n_(m)}(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bM(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let h=new dt(pe.comparator);h=h.insert(l,cn.newNoDocument(l,Ae.min()));const p=ke().add(l),m=new Hf(Ae.min(),new Map,new dt(Ce),h,p);await Mw(s,m),s.du=s.du.remove(l),s.Eu.delete(e),s_(s)}else await Wm(s.localStore,e,!1).then(()=>Zm(s,e,t)).catch(Yo)}async function RM(i,e){const t=we(i),s=e.batch.batchId;try{const a=await k2(t.localStore,e);Pw(t,s,null),kw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ju(t,a)}catch(a){await Yo(a)}}async function CM(i,e,t){const s=we(i);try{const a=await function(h,p){const m=we(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return m.mutationQueue.lookupMutationBatch(g,p).next(S=>(Ye(S!==null,37113),E=S.keys(),m.mutationQueue.removeMutationBatch(g,S))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>m.localDocuments.getDocuments(g,E))})}(s.localStore,e);Pw(s,e,t),kw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ju(s,a)}catch(a){await Yo(a)}}function kw(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function Pw(i,e,t){const s=we(i);let a=s.Ru[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function Zm(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(s=>{i.Au.containsKey(s)||Vw(i,s)})}function Vw(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Xg(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),s_(i))}function E0(i,e,t){for(const s of t)s instanceof Nw?(i.Au.addReference(s.key,e),IM(i,s)):s instanceof Dw?(ae(i_,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||Vw(i,s.key)):ve(19791,{yu:s})}function IM(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(ae(i_,"New document in limbo: "+t),i.Iu.add(s),s_(i))}function s_(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new pe(ft.fromString(e)),s=i.mu.next();i.Eu.set(s,new _M(t)),i.du=i.du.insert(t,s),Aw(i.remoteStore,new ir(Di(Fg(t.path)),s,"TargetPurposeLimboResolution",Vf.ue))}}async function Ju(i,e,t){const s=we(i),a=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach((p,m)=>{h.push(s.gu(m,e,t).then(g=>{var E;if((g||t)&&s.isPrimaryClient){const S=g?!g.fromCache:(E=t?.targetChanges.get(m.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,S?"current":"not-current")}if(g){a.push(g);const S=Qg.Es(m.targetId,g);l.push(S)}}))}),await Promise.all(h),s.hu.J_(a),await async function(m,g){const E=we(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>Q.forEach(g,w=>Q.forEach(w.Is,U=>E.persistence.referenceDelegate.addReference(S,w.targetId,U)).next(()=>Q.forEach(w.ds,U=>E.persistence.referenceDelegate.removeReference(S,w.targetId,U)))))}catch(S){if(!Qo(S))throw S;ae(Wg,"Failed to update sequence numbers: "+S)}for(const S of g){const w=S.targetId;if(!S.fromCache){const U=E.Fs.get(w),q=U.snapshotVersion,Z=U.withLastLimboFreeSnapshotVersion(q);E.Fs=E.Fs.insert(w,Z)}}}(s.localStore,l))}async function NM(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){ae(i_,"User change. New user:",e.toKey());const s=await vw(t.localStore,e);t.currentUser=e,function(l,h){l.Vu.forEach(p=>{p.forEach(m=>{m.reject(new he($.CANCELLED,h))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ju(t,s.Bs)}}function DM(i,e){const t=we(i),s=t.Eu.get(e);if(s&&s.lu)return ke().add(s.key);{let a=ke();const l=t.Tu.get(e);if(!l)return a;for(const h of l){const p=t.Pu.get(h);a=a.unionWith(p.view.tu)}return a}}function xw(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bM.bind(null,e),e.hu.J_=fM.bind(null,e.eventManager),e.hu.pu=dM.bind(null,e.eventManager),e}function OM(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CM.bind(null,e),e}class _f{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return M2(this.persistence,new N2,e.initialUser,this.serializer)}Du(e){return new yw(Yg.Vi,this.serializer)}bu(e){return new z2}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_f.provider={build:()=>new _f};class MM extends _f{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ye(this.persistence.referenceDelegate instanceof mf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new p2(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?En.withCacheSize(this.cacheSizeBytes):En.DEFAULT;return new yw(s=>mf.Vi(s,t),this.serializer)}}class Jm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>v0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=NM.bind(null,this.syncEngine),await oM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uM}()}createDatastore(e){const t=jf(e.databaseInfo.databaseId),s=function(l){return new j2(l)}(e.databaseInfo);return function(l,h,p,m){return new Q2(l,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,h,p){return new X2(s,a,l,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>v0(this.syncEngine,t,0),function(){return d0.C()?new d0:new B2}())}createSyncEngine(e,t){return function(a,l,h,p,m,g,E){const S=new yM(a,l,h,p,m,g);return E&&(S.fu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=we(a);ae(ma,"RemoteStore shutting down."),l.Ia.add(5),await Zu(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Jm.provider={build:()=>new Jm};/**
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
 */class kM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ys("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="FirestoreClient";class PM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=on.UNAUTHENTICATED,this.clientId=Pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{ae(yr,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ae(yr,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=t_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function _m(i,e){i.asyncQueue.verifyOperationInProgress(),ae(yr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await vw(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>{fr("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{ae("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(a=>{fr("Terminating Firestore due to IndexedDb database deletion failed",a)})}),i._offlineComponents=e}async function T0(i,e){i.asyncQueue.verifyOperationInProgress();const t=await VM(i);ae(yr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>m0(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>m0(e.remoteStore,a)),i._onlineComponents=e}async function VM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ae(yr,"Using user provided OfflineComponentProvider");try{await _m(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;fr("Error using user provided cache. Falling back to memory cache: "+t),await _m(i,new _f)}}else ae(yr,"Using default OfflineComponentProvider"),await _m(i,new MM(void 0));return i._offlineComponents}async function Lw(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ae(yr,"Using user provided OnlineComponentProvider"),await T0(i,i._uninitializedComponentsProvider._online)):(ae(yr,"Using default OnlineComponentProvider"),await T0(i,new Jm))),i._onlineComponents}function xM(i){return Lw(i).then(e=>e.syncEngine)}async function LM(i){const e=await Lw(i),t=e.eventManager;return t.onListen=vM.bind(null,e.syncEngine),t.onUnlisten=SM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=AM.bind(null,e.syncEngine),t}function UM(i,e,t={}){const s=new lr;return i.asyncQueue.enqueueAndForget(async()=>function(l,h,p,m,g){const E=new kM({next:w=>{E.Ou(),h.enqueueAndForget(()=>hM(l,S));const U=w.docs.has(p);!U&&w.fromCache?g.reject(new he($.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&w.fromCache&&m&&m.source==="server"?g.reject(new he($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),S=new pM(Fg(p.path),E,{includeMetadataChanges:!0,ka:!0});return cM(l,S)}(await LM(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function Uw(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const S0=new Map;/**
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
 */const zw="firestore.googleapis.com",A0=!0;class w0{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zw,this.ssl=A0}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:A0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_w;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<f2)throw new he($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class r_{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new w0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new w0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new BD;switch(s.type){case"firstParty":return new jD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=S0.get(t);s&&(ae("ComponentProvider","Removing Datastore"),S0.delete(t),s.terminate())}(this),Promise.resolve()}}function zM(i,e,t,s={}){var a;i=ku(i,r_);const l=vr(e),h=i._getSettings(),p=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;l&&(og(`https://${m}`),lg("Firestore",!0)),h.host!==zw&&h.host!==m&&fr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},h),{host:m,ssl:l,emulatorOptions:s});if(!ur(g,p)&&(i._setSettings(g),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=on.MOCK_USER;else{E=nS(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new he($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new on(w)}i._authCredentials=new FD(new NA(E,S))}}/**
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
 */class a_{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new a_(this.firestore,e,this._query)}}class Gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}toJSON(){return{type:Gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Wu(t,Gt._jsonSchema))return new Gt(e,s||null,new pe(ft.fromString(t.referencePath)))}}Gt._jsonSchemaVersion="firestore/documentReference/1.0",Gt._jsonSchema={type:It("string",Gt._jsonSchemaVersion),referencePath:It("string")};class Bu extends a_{constructor(e,t,s){super(e,t,Fg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new pe(e))}withConverter(e){return new Bu(this.firestore,e,this._path)}}function Bw(i,e,...t){if(i=Tn(i),arguments.length===1&&(e=Pg.newId()),WD("doc","path",e),i instanceof r_){const s=ft.fromString(e,...t);return UT(s),new Gt(i,null,new pe(s))}{if(!(i instanceof Gt||i instanceof Bu))throw new he($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ft.fromString(e,...t));return UT(s),new Gt(i.firestore,i instanceof Bu?i.converter:null,new pe(s))}}/**
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
 */const b0="AsyncQueue";class R0{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Tw(this,"async_queue_retry"),this.oc=()=>{const s=gm();s&&ae(b0,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=gm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=gm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new lr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Qo(e))throw e;ae(b0,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,ys("INTERNAL UNHANDLED ERROR: ",C0(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=e_.createAndSchedule(this,e,t,s,l=>this.lc(l));return this.ec.push(a),a}ac(){this.tc&&ve(47125,{hc:C0(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function C0(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class o_ extends r_{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new R0,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new R0(e),this._firestoreClient=void 0,await e}}}function BM(i,e){const t=typeof i=="object"?i:hg(),s=typeof i=="string"?i:lf,a=Nf(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=J0("firestore");l&&zM(a,...l)}return a}function Fw(i){if(i._terminated)throw new he($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||FM(i),i._firestoreClient}function FM(i){var e,t,s;const a=i._freezeSettings(),l=function(p,m,g,E){return new oO(p,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Uw(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new PM(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(p){const m=p?._online.build();return{_offline:p?._offline.build(m),_online:m}}(i._componentsProvider))}/**
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
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(tn.fromBase64String(e))}catch(t){throw new he($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qn(tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wu(e,Qn._jsonSchema))return Qn.fromBase64String(e.bytes)}}Qn._jsonSchemaVersion="firestore/bytes/1.0",Qn._jsonSchema={type:It("string",Qn._jsonSchemaVersion),bytes:It("string")};/**
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
 */class l_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mi._jsonSchemaVersion}}static fromJSON(e){if(Wu(e,Mi._jsonSchema))return new Mi(e.latitude,e.longitude)}}Mi._jsonSchemaVersion="firestore/geoPoint/1.0",Mi._jsonSchema={type:It("string",Mi._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
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
 */class ki{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ki._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wu(e,ki._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ki(e.vectorValues);throw new he($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ki._jsonSchemaVersion="firestore/vectorValue/1.0",ki._jsonSchema={type:It("string",ki._jsonSchemaVersion),vectorValues:It("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=/^__.*__$/;class HM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Aa(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xu(e,this.data,t,this.fieldTransforms)}}function Hw(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:i})}}class u_{constructor(e,t,s,a,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new u_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return yf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Hw(this.Ec)&&qM.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class jM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||jf(e)}Dc(e,t,s,a=!1){return new u_({Ec:e,methodName:t,bc:s,path:en.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function GM(i){const e=i._freezeSettings(),t=jf(i._databaseId);return new jM(i._databaseId,!!e.ignoreUndefinedProperties,t)}function KM(i,e,t,s,a,l={}){const h=i.Dc(l.merge||l.mergeFields?2:0,e,t,a);Yw("Data must be an object, but it was:",h,s);const p=Gw(s,h);let m,g;if(l.merge)m=new ri(h.fieldMask),g=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const S of l.mergeFields){const w=YM(e,S,t);if(!h.contains(w))throw new he($.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);WM(E,w)||E.push(w)}m=new ri(E),g=h.fieldTransforms.filter(S=>m.covers(S.field))}else m=null,g=h.fieldTransforms;return new HM(new Yn(p),m,g)}function jw(i,e){if(Kw(i=Tn(i)))return Yw("Unsupported field value:",e,i),Gw(i,e);if(i instanceof qw)return function(s,a){if(!Hw(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,a){const l=[];let h=0;for(const p of s){let m=jw(p,a.yc(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=Tn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return OO(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ot.fromDate(s);return{timestampValue:pf(a.serializer,l)}}if(s instanceof ot){const l=new ot(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:pf(a.serializer,l)}}if(s instanceof Mi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qn)return{bytesValue:cw(a.serializer,s._byteString)};if(s instanceof Gt){const l=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw a.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Gg(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ki)return function(h,p){return{mapValue:{fields:{[zA]:{stringValue:BA},[uf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.wc("VectorValues must only contain numeric values.");return qg(p.serializer,g)})}}}}}}(s,a);throw a.wc(`Unsupported field value: ${Vg(s)}`)}(i,e)}function Gw(i,e){const t={};return kA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ta(i,(s,a)=>{const l=jw(a,e.Vc(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function Kw(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ot||i instanceof Mi||i instanceof Qn||i instanceof Gt||i instanceof qw||i instanceof ki)}function Yw(i,e,t){if(!Kw(t)||!OA(t)){const s=Vg(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function YM(i,e,t){if((e=Tn(e))instanceof l_)return e._internalPath;if(typeof e=="string")return Qw(i,e);throw yf("Field path arguments must be of type string or ",i,!1,void 0,t)}const QM=new RegExp("[~\\*/\\[\\]]");function Qw(i,e,t){if(e.search(QM)>=0)throw yf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new l_(...e.split("."))._internalPath}catch{throw yf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function yf(i,e,t,s,a){const l=s&&!s.isEmpty(),h=a!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${s}`),h&&(m+=` in document ${a}`),m+=")"),new he($.INVALID_ARGUMENT,p+i+m)}function WM(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class Ww{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XM extends Ww{data(){return super.data()}}function Xw(i,e){return typeof e=="string"?Qw(i,e):e instanceof l_?e._internalPath:e._delegate._internalPath}class $M{convertValue(e,t="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ta(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[uf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(h=>St(h.doubleValue));return new ki(l)}convertGeoPoint(e){return new Mi(St(e.latitude),St(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Lf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Vu(e));default:return null}}convertTimestamp(e){const t=pr(e);return new ot(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ft.fromString(e);Ye(gw(s),9688,{name:e});const a=new xu(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return a.isEqual(t)||ys(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function ZM(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class _u{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ua extends Ww{constructor(e,t,s,a,l,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Xw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ua._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ua._jsonSchemaVersion="firestore/documentSnapshot/1.0",ua._jsonSchema={type:It("string",ua._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class Hh extends ua{data(e={}){return super.data(e)}}class Cu{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new _u(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Hh(this._firestore,this._userDataWriter,s.key,s,new _u(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let h=0;return a._snapshot.docChanges.map(p=>{const m=new Hh(a._firestore,a._userDataWriter,p.doc.key,p.doc,new _u(a._snapshot.mutatedKeys.has(p.doc.key),a._snapshot.fromCache),a.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(p=>l||p.type!==3).map(p=>{const m=new Hh(a._firestore,a._userDataWriter,p.doc.key,p.doc,new _u(a._snapshot.mutatedKeys.has(p.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,E=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:JM(p.type),doc:m,oldIndex:g,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Cu._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JM(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:i})}}/**
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
 */function ek(i){i=ku(i,Gt);const e=ku(i.firestore,o_);return UM(Fw(e),i._key).then(t=>sk(e,i,t))}Cu._jsonSchemaVersion="firestore/querySnapshot/1.0",Cu._jsonSchema={type:It("string",Cu._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};class tk extends $M{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,t)}}function nk(i,e,t){i=ku(i,Gt);const s=ku(i.firestore,o_),a=ZM(i.converter,e);return ik(s,[KM(GM(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,ps.none())])}function ik(i,e){return function(s,a){const l=new lr;return s.asyncQueue.enqueueAndForget(async()=>wM(await xM(s),a,l)),l.promise}(Fw(i),e)}function sk(i,e,t){const s=t.docs.get(e._key),a=new tk(i);return new ua(i,a,e._key,s,new _u(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){Ko=a})(ya),ca(new cr("firestore",(s,{instanceIdentifier:a,options:l})=>{const h=s.getProvider("app").getImmediate(),p=new o_(new qD(s.getProvider("auth-internal")),new GD(h,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xu(g.options.projectId,E)}(h,a),h);return l=Object.assign({useFetchStreams:t},l),p._setSettings(l),p},"PUBLIC").setMultipleInstances(!0)),Ni(kT,PT,e),Ni(kT,PT,"esm2017")})();function c_(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function $w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rk=$w,Zw=new Hu("auth","Firebase",$w());/**
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
 */const vf=new If("@firebase/auth");function ak(i,...e){vf.logLevel<=Me.WARN&&vf.warn(`Auth (${ya}): ${i}`,...e)}function jh(i,...e){vf.logLevel<=Me.ERROR&&vf.error(`Auth (${ya}): ${i}`,...e)}/**
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
 */function li(i,...e){throw h_(i,...e)}function Pi(i,...e){return h_(i,...e)}function Jw(i,e,t){const s=Object.assign(Object.assign({},rk()),{[e]:t});return new Hu("auth","Firebase",s).create(e,{appName:i.name})}function ms(i){return Jw(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function h_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Zw.create(i,...e)}function ye(i,e,...t){if(!i)throw h_(e,...t)}function hs(i){const e="INTERNAL ASSERTION FAILED: "+i;throw jh(e),new Error(e)}function Es(i,e){i||hs(e)}/**
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
 */function eg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function ok(){return I0()==="http:"||I0()==="https:"}function I0(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function lk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ok()||R1()||"connection"in navigator)?navigator.onLine:!0}function uk(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class ec{constructor(e,t){this.shortDelay=e,this.longDelay=t,Es(t>e,"Short delay should be less than long delay!"),this.isMobile=ug()||iS()}get(){return lk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function f_(i,e){Es(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class eb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ck={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fk=new ec(3e4,6e4);function Er(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Tr(i,e,t,s,a={}){return tb(i,a,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const p=qo(Object.assign({key:i.config.apiKey},h)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},l);return b1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&vr(i.emulatorConfig.host)&&(g.credentials="include"),eb.fetch()(await nb(i,i.config.apiHost,t,p),g)})}async function tb(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},ck),e);try{const a=new pk(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Vh(i,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vh(i,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Vh(i,"email-already-in-use",h);if(m==="USER_DISABLED")throw Vh(i,"user-disabled",h);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Jw(i,E,g);li(i,E)}}catch(a){if(a instanceof Ts)throw a;li(i,"network-request-failed",{message:String(a)})}}async function tc(i,e,t,s,a={}){const l=await Tr(i,e,t,s,a);return"mfaPendingCredential"in l&&li(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function nb(i,e,t,s){const a=`${e}${t}?${s}`,l=i,h=l.config.emulator?f_(i.config,a):`${i.config.apiScheme}://${a}`;return hk.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function dk(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Pi(this.auth,"network-request-failed")),fk.get())})}}function Vh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Pi(i,e,s);return a.customData._tokenResponse=t,a}function N0(i){return i!==void 0&&i.enterprise!==void 0}class mk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return dk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gk(i,e){return Tr(i,"GET","/v2/recaptchaConfig",Er(i,e))}/**
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
 */async function _k(i,e){return Tr(i,"POST","/v1/accounts:delete",e)}async function Ef(i,e){return Tr(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Iu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yk(i,e=!1){const t=Tn(i),s=await t.getIdToken(e),a=d_(s);ye(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,h=l?.sign_in_provider;return{claims:a,token:s,authTime:Iu(ym(a.auth_time)),issuedAtTime:Iu(ym(a.iat)),expirationTime:Iu(ym(a.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ym(i){return Number(i)*1e3}function d_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return jh("JWT malformed, contained fewer than 3 sections"),null;try{const a=Wh(t);return a?JSON.parse(a):(jh("Failed to decode base64 JWT payload"),null)}catch(a){return jh("Caught error parsing JWT payload as JSON",a?.toString()),null}}function D0(i){const e=d_(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fu(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ts&&vk(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function vk({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Ek{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Iu(this.lastLoginAt),this.creationTime=Iu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tf(i){var e;const t=i.auth,s=await i.getIdToken(),a=await Fu(i,Ef(t,{idToken:s}));ye(a?.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?ib(l.providerUserInfo):[],p=Sk(i.providerData,h),m=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!p?.length,E=m?g:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:p,metadata:new tg(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,S)}async function Tk(i){const e=Tn(i);await Tf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sk(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function ib(i){return i.map(e=>{var{providerId:t}=e,s=c_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ak(i,e){const t=await tb(i,{},async()=>{const s=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,h=await nb(i,a,"/v1/token",`key=${l}`),p=await i._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return i.emulatorConfig&&vr(i.emulatorConfig.host)&&(m.credentials="include"),eb.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wk(i,e){return Tr(i,"POST","/v2/accounts:revokeToken",Er(i,e))}/**
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
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=D0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await Ak(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,h=new Do;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(ye(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return hs("not implemented")}}/**
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
 */function Zs(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=c_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ek(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new tg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Fu(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yk(this,e)}reload(){return Tk(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Tf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(ms(this.auth));const e=await this.getIdToken();return await Fu(this,_k(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,h,p,m,g,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Z=(p=t.tenantId)!==null&&p!==void 0?p:void 0,W=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,Te=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ue=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:se,emailVerified:_e,isAnonymous:re,providerData:le,stsTokenManager:N}=t;ye(se&&N,e,"internal-error");const b=Do.fromJSON(this.name,N);ye(typeof se=="string",e,"internal-error"),Zs(S,e.name),Zs(w,e.name),ye(typeof _e=="boolean",e,"internal-error"),ye(typeof re=="boolean",e,"internal-error"),Zs(U,e.name),Zs(q,e.name),Zs(Z,e.name),Zs(W,e.name),Zs(Te,e.name),Zs(ue,e.name);const C=new ai({uid:se,auth:e,email:w,emailVerified:_e,displayName:S,isAnonymous:re,photoURL:q,phoneNumber:U,tenantId:Z,stsTokenManager:b,createdAt:Te,lastLoginAt:ue});return le&&Array.isArray(le)&&(C.providerData=le.map(M=>Object.assign({},M))),W&&(C._redirectEventId=W),C}static async _fromIdTokenResponse(e,t,s=!1){const a=new Do;a.updateFromServerResponse(t);const l=new ai({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Tf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];ye(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?ib(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!l?.length,p=new Do;p.updateFromIdToken(s);const m=new ai({uid:a.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new tg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(m,g),m}}/**
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
 */const O0=new Map;function fs(i){Es(i instanceof Function,"Expected a class definition");let e=O0.get(i);return e?(Es(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,O0.set(i,e),e)}/**
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
 */class sb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sb.type="NONE";const M0=sb;/**
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
 */function Gh(i,e,t){return`firebase:${i}:${e}:${t}`}class Oo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Gh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Gh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ef(this.auth,{idToken:e}).catch(()=>{});return t?ai._fromGetAccountInfoResponse(this.auth,t,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Oo(fs(M0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||fs(M0);const h=Gh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const E=await g._get(h);if(E){let S;if(typeof E=="string"){const w=await Ef(e,{idToken:E}).catch(()=>{});if(!w)break;S=await ai._fromGetAccountInfoResponse(e,w,E)}else S=ai._fromJSON(e,E);g!==l&&(p=S),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Oo(l,e,s):(l=m[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(h)}catch{}})),new Oo(l,e,s))}}/**
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
 */function k0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cb(e))return"Blackberry";if(hb(e))return"Webos";if(ab(e))return"Safari";if((e.includes("chrome/")||ob(e))&&!e.includes("edge/"))return"Chrome";if(ub(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function rb(i=fn()){return/firefox\//i.test(i)}function ab(i=fn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ob(i=fn()){return/crios\//i.test(i)}function lb(i=fn()){return/iemobile/i.test(i)}function ub(i=fn()){return/android/i.test(i)}function cb(i=fn()){return/blackberry/i.test(i)}function hb(i=fn()){return/webos/i.test(i)}function p_(i=fn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function bk(i=fn()){var e;return p_(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rk(){return C1()&&document.documentMode===10}function fb(i=fn()){return p_(i)||ub(i)||hb(i)||cb(i)||/windows phone/i.test(i)||lb(i)}/**
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
 */function db(i,e=[]){let t;switch(i){case"Browser":t=k0(fn());break;case"Worker":t=`${k0(fn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ya}/${s}`}/**
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
 */class Ck{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,p)=>{try{const m=e(l);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Ik(i,e={}){return Tr(i,"GET","/v2/passwordPolicy",Er(i,e))}/**
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
 */const Nk=6;class Dk{constructor(e){var t,s,a,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:Nk,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,h,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Ok{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new P0(this),this.idTokenSubscription=new P0(this),this.beforeStateQueue=new Ck(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fs(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ef(this,{idToken:e}),s=await ai._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=a?._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&m?.user&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Tf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(ms(this));const t=e?Tn(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ik(this),t=new Dk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await wk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fs(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[fs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=db(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&ak(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ba(i){return Tn(i)}class P0{constructor(e){this.auth=e,this.observer=null,this.addObserver=U1(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mk(i){Yf=i}function pb(i){return Yf.loadJS(i)}function kk(){return Yf.recaptchaEnterpriseScript}function Pk(){return Yf.gapiScript}function Vk(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class xk{constructor(){this.enterprise=new Lk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Lk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Uk="recaptcha-enterprise",mb="NO_RECAPTCHA";class zk{constructor(e){this.type=Uk,this.auth=ba(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,p)=>{gk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new mk(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function a(l,h,p){const m=window.grecaptcha;N0(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{h(g)}).catch(()=>{h(mb)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xk().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(p=>{if(!t&&N0(window.grecaptcha))a(p,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=kk();m.length!==0&&(m+=p),pb(m).then(()=>{a(p,l,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function V0(i,e,t,s=!1,a=!1){const l=new zk(i);let h;if(a)h=mb;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function ng(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await V0(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await V0(i,e,t,t==="getOobCode");return s(i,p)}else return Promise.reject(h)})}/**
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
 */function Bk(i,e){const t=Nf(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ur(l,e??{}))return a;li(a,"already-initialized")}return t.initialize({options:e})}function Fk(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(fs);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function qk(i,e,t){const s=ba(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=gb(e),{host:h,port:p}=Hk(e),m=p===null?"":`:${p}`,g={url:`${l}//${h}${m}/`},E=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(ur(g,s.config.emulator)&&ur(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,vr(h)?(og(`${l}//${h}${m}`),lg("Auth",!0)):jk()}function gb(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Hk(i){const e=gb(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:x0(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:x0(h)}}}function x0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function jk(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class m_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return hs("not implemented")}_getIdTokenResponse(e){return hs("not implemented")}_linkToIdToken(e,t){return hs("not implemented")}_getReauthenticationResolver(e){return hs("not implemented")}}async function Gk(i,e){return Tr(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Kk(i,e){return tc(i,"POST","/v1/accounts:signInWithPassword",Er(i,e))}/**
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
 */async function Yk(i,e){return tc(i,"POST","/v1/accounts:signInWithEmailLink",Er(i,e))}async function Qk(i,e){return tc(i,"POST","/v1/accounts:signInWithEmailLink",Er(i,e))}/**
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
 */class qu extends m_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new qu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ng(e,t,"signInWithPassword",Kk);case"emailLink":return Yk(e,{email:this._email,oobCode:this._password});default:li(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ng(e,s,"signUpPassword",Gk);case"emailLink":return Qk(e,{idToken:t,email:this._email,oobCode:this._password});default:li(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Mo(i,e){return tc(i,"POST","/v1/accounts:signInWithIdp",Er(i,e))}/**
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
 */const Wk="http://localhost";class ga extends m_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ga(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):li("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=c_(t,["providerId","signInMethod"]);if(!s||!a)return null;const h=new ga(s,a);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Mo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Mo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mo(e,t)}buildRequest(){const e={requestUri:Wk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qo(t)}return e}}/**
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
 */function Xk(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $k(i){const e=hu(fu(i)).link,t=e?hu(fu(e)).deep_link_id:null,s=hu(fu(i)).deep_link_id;return(s?hu(fu(s)).link:null)||s||t||e||i}class g_{constructor(e){var t,s,a,l,h,p;const m=hu(fu(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(s=m.oobCode)!==null&&s!==void 0?s:null,S=Xk((a=m.mode)!==null&&a!==void 0?a:null);ye(g&&E&&S,"argument-error"),this.apiKey=g,this.operation=S,this.code=E,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=m.lang)!==null&&h!==void 0?h:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=$k(e);try{return new g_(t)}catch{return null}}}/**
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
 */class Xo{constructor(){this.providerId=Xo.PROVIDER_ID}static credential(e,t){return qu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=g_.parseLink(t);return ye(s,"argument-error"),qu._fromEmailAndCode(e,s.code,s.tenantId)}}Xo.PROVIDER_ID="password";Xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _b{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nc extends _b{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Js extends nc{constructor(){super("facebook.com")}static credential(e){return ga._fromParams({providerId:Js.PROVIDER_ID,signInMethod:Js.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Js.credentialFromTaggedObject(e)}static credentialFromError(e){return Js.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Js.credential(e.oauthAccessToken)}catch{return null}}}Js.FACEBOOK_SIGN_IN_METHOD="facebook.com";Js.PROVIDER_ID="facebook.com";/**
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
 */class er extends nc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ga._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return er.credential(t,s)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class tr extends nc{constructor(){super("github.com")}static credential(e){return ga._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends nc{constructor(){super("twitter.com")}static credential(e,t){return ga._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return nr.credential(t,s)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function Zk(i,e){return tc(i,"POST","/v1/accounts:signUp",Er(i,e))}/**
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
 */class _a{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await ai._fromIdTokenResponse(e,s,a),h=L0(s);return new _a({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=L0(s);return new _a({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function L0(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Sf extends Ts{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Sf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Sf(e,t,s,a)}}function yb(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Sf._fromErrorAndOperation(i,l,e,s):l})}async function Jk(i,e,t=!1){const s=await Fu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return _a._forOperation(i,"link",s)}/**
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
 */async function eP(i,e,t=!1){const{auth:s}=i;if(Mn(s.app))return Promise.reject(ms(s));const a="reauthenticate";try{const l=await Fu(i,yb(s,a,e,i),t);ye(l.idToken,s,"internal-error");const h=d_(l.idToken);ye(h,s,"internal-error");const{sub:p}=h;return ye(i.uid===p,s,"user-mismatch"),_a._forOperation(i,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&li(s,"user-mismatch"),l}}/**
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
 */async function vb(i,e,t=!1){if(Mn(i.app))return Promise.reject(ms(i));const s="signIn",a=await yb(i,s,e),l=await _a._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function tP(i,e){return vb(ba(i),e)}/**
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
 */async function Eb(i){const e=ba(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nP(i,e,t){if(Mn(i.app))return Promise.reject(ms(i));const s=ba(i),h=await ng(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zk).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Eb(i),m}),p=await _a._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function iP(i,e,t){return Mn(i.app)?Promise.reject(ms(i)):tP(Tn(i),Xo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Eb(i),s})}function sP(i,e,t,s){return Tn(i).onIdTokenChanged(e,t,s)}function rP(i,e,t){return Tn(i).beforeAuthStateChanged(e,t)}function aP(i,e,t,s){return Tn(i).onAuthStateChanged(e,t,s)}const Af="__sak";/**
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
 */class Tb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Af,"1"),this.storage.removeItem(Af),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oP=1e3,lP=10;class Sb extends Tb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);Rk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,lP):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},oP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sb.type="LOCAL";const uP=Sb;/**
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
 */class Ab extends Tb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ab.type="SESSION";const wb=Ab;/**
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
 */function cP(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Qf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,h=this.handlersMap[a];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const p=Array.from(h).map(async g=>g(t.origin,l)),m=await cP(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qf.receivers=[];/**
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
 */function __(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class hP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,h;return new Promise((p,m)=>{const g=__("",20);a.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(S){const w=S;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(w.data.response);break;default:clearTimeout(E),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Vi(){return window}function fP(i){Vi().location.href=i}/**
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
 */function bb(){return typeof Vi().WorkerGlobalScope<"u"&&typeof Vi().importScripts=="function"}async function dP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pP(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function mP(){return bb()?self:null}/**
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
 */const Rb="firebaseLocalStorageDb",gP=1,wf="firebaseLocalStorage",Cb="fbase_key";class ic{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wf(i,e){return i.transaction([wf],e?"readwrite":"readonly").objectStore(wf)}function _P(){const i=indexedDB.deleteDatabase(Rb);return new ic(i).toPromise()}function ig(){const i=indexedDB.open(Rb,gP);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(wf,{keyPath:Cb})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(wf)?e(s):(s.close(),await _P(),e(await ig()))})})}async function U0(i,e,t){const s=Wf(i,!0).put({[Cb]:e,value:t});return new ic(s).toPromise()}async function yP(i,e){const t=Wf(i,!1).get(e),s=await new ic(t).toPromise();return s===void 0?null:s.value}function z0(i,e){const t=Wf(i,!0).delete(e);return new ic(t).toPromise()}const vP=800,EP=3;class Ib{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ig(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>EP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qf._getInstance(mP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dP(),!this.activeServiceWorker)return;this.sender=new hP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ig();return await U0(e,Af,"1"),await z0(e,Af),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>U0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>z0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Wf(a,!1).getAll();return new ic(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ib.type="LOCAL";const TP=Ib;new ec(3e4,6e4);/**
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
 */function SP(i,e){return e?fs(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class y_ extends m_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AP(i){return vb(i.auth,new y_(i),i.bypassAuthState)}function wP(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),eP(t,new y_(i),i.bypassAuthState)}async function bP(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),Jk(t,new y_(i),i.bypassAuthState)}/**
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
 */class Nb{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AP;case"linkViaPopup":case"linkViaRedirect":return bP;case"reauthViaPopup":case"reauthViaRedirect":return wP;default:li(this.auth,"internal-error")}}resolve(e){Es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RP=new ec(2e3,1e4);class Ro extends Nb{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ro.currentPopupAction&&Ro.currentPopupAction.cancel(),Ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Es(this.filter.length===1,"Popup operations only handle one event");const e=__();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RP.get())};e()}}Ro.currentPopupAction=null;/**
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
 */const CP="pendingRedirect",Kh=new Map;class IP extends Nb{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Kh.get(this.auth._key());if(!e){try{const s=await NP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Kh.set(this.auth._key(),e)}return this.bypassAuthState||Kh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NP(i,e){const t=MP(e),s=OP(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function DP(i,e){Kh.set(i._key(),e)}function OP(i){return fs(i._redirectPersistence)}function MP(i){return Gh(CP,i.config.apiKey,i.name)}async function kP(i,e,t=!1){if(Mn(i.app))return Promise.reject(ms(i));const s=ba(i),a=SP(s,e),h=await new IP(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const PP=10*60*1e3;class VP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Db(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Pi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PP&&this.cachedEventUids.clear(),this.cachedEventUids.has(B0(e))}saveEventToCache(e){this.cachedEventUids.add(B0(e)),this.lastProcessedEventTime=Date.now()}}function B0(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Db({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function xP(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Db(i);default:return!1}}/**
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
 */async function LP(i,e={}){return Tr(i,"GET","/v1/projects",e)}/**
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
 */const UP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zP=/^https?/;async function BP(i){if(i.config.emulator)return;const{authorizedDomains:e}=await LP(i);for(const t of e)try{if(FP(t))return}catch{}li(i,"unauthorized-domain")}function FP(i){const e=eg(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!zP.test(t))return!1;if(UP.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const qP=new ec(3e4,6e4);function F0(){const i=Vi().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function HP(i){return new Promise((e,t)=>{var s,a,l;function h(){F0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{F0(),t(Pi(i,"network-request-failed"))},timeout:qP.get()})}if(!((a=(s=Vi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Vi().gapi)===null||l===void 0)&&l.load)h();else{const p=Vk("iframefcb");return Vi()[p]=()=>{gapi.load?h():t(Pi(i,"network-request-failed"))},pb(`${Pk()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Yh=null,e})}let Yh=null;function jP(i){return Yh=Yh||HP(i),Yh}/**
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
 */const GP=new ec(5e3,15e3),KP="__/auth/iframe",YP="emulator/auth/iframe",QP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XP(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?f_(e,YP):`https://${i.config.authDomain}/${KP}`,s={apiKey:e.apiKey,appName:i.name,v:ya},a=WP.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${qo(s).slice(1)}`}async function $P(i){const e=await jP(i),t=Vi().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:XP(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QP,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const h=Pi(i,"network-request-failed"),p=Vi().setTimeout(()=>{l(h)},GP.get());function m(){Vi().clearTimeout(p),a(s)}s.ping(m).then(m,()=>{l(h)})}))}/**
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
 */const ZP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JP=500,eV=600,tV="_blank",nV="http://localhost";class q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iV(i,e,t,s=JP,a=eV){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m=Object.assign(Object.assign({},ZP),{width:s.toString(),height:a.toString(),top:l,left:h}),g=fn().toLowerCase();t&&(p=ob(g)?tV:t),rb(g)&&(e=e||nV,m.scrollbars="yes");const E=Object.entries(m).reduce((w,[U,q])=>`${w}${U}=${q},`,"");if(bk(g)&&p!=="_self")return sV(e||"",p),new q0(null);const S=window.open(e||"",p,E);ye(S,i,"popup-blocked");try{S.focus()}catch{}return new q0(S)}function sV(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const rV="__/auth/handler",aV="emulator/auth/handler",oV=encodeURIComponent("fac");async function H0(i,e,t,s,a,l){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ya,eventId:a};if(e instanceof _b){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Em(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof nc){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const m=await i._getAppCheckToken(),g=m?`#${oV}=${encodeURIComponent(m)}`:"";return`${lV(i)}?${qo(p).slice(1)}${g}`}function lV({config:i}){return i.emulator?f_(i,aV):`https://${i.authDomain}/${rV}`}/**
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
 */const vm="webStorageSupport";class uV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wb,this._completeRedirectFn=kP,this._overrideRedirectResult=DP}async _openPopup(e,t,s,a){var l;Es((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await H0(e,t,s,eg(),a);return iV(e,h,__())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await H0(e,t,s,eg(),a);return fP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Es(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await $P(e),s=new VP(e);return t.register("authEvent",a=>(ye(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vm,{type:vm},a=>{var l;const h=(l=a?.[0])===null||l===void 0?void 0:l[vm];h!==void 0&&t(!!h),li(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fb()||ab()||p_()}}const cV=uV;var j0="@firebase/auth",G0="1.10.8";/**
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
 */class hV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fV(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dV(i){ca(new cr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:db(i)},g=new Ok(s,a,l,m);return Fk(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ca(new cr("auth-internal",e=>{const t=ba(e.getProvider("auth").getImmediate());return(s=>new hV(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ni(j0,G0,fV(i)),Ni(j0,G0,"esm2017")}/**
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
 */const pV=5*60,mV=tS("authIdTokenMaxAge")||pV;let K0=null;const gV=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mV)return;const a=t?.token;K0!==a&&(K0=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function _V(i=hg()){const e=Nf(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Bk(i,{popupRedirectResolver:cV,persistence:[TP,uP,wb]}),s=tS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=gV(l.toString());rP(t,h,()=>h(t.currentUser)),sP(t,p=>h(p))}}const a=Z0("auth");return a&&qk(t,`http://${a}`),t}function yV(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Mk({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=Pi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",yV().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dV("Browser");const vV={apiKey:"AIzaSyD-EnuWkZgnjb6hnaP4LhUIZvxSCf5tiIo",authDomain:"game-of-trust-675c9.firebaseapp.com",projectId:"game-of-trust-675c9",storageBucket:"game-of-trust-675c9.firebasestorage.app",messagingSenderId:"72708199445",appId:"1:72708199445:web:ce23ac49a6c15fe7f02a1c",measurementId:"G-K3GSYXR89X"},v_=oS(vV);LD(v_);const Ob=BM(v_),bf=_V(v_),EV=({onAuthSuccess:i})=>{const[e,t]=Tt.useState(!0),[s,a]=Tt.useState(""),[l,h]=Tt.useState(""),[p,m]=Tt.useState(""),[g,E]=Tt.useState(!1),[S,w]=Tt.useState(""),U=async q=>{q.preventDefault(),E(!0),w("");try{if(e){const Z=await iP(bf,s,l);i(Z.user.uid)}else{if(!p.trim()){w("Username is required for registration");return}const Z=await nP(bf,s,l);await nk(Bw(Ob,"usernames",Z.user.uid),{username:p.trim(),createdAt:new Date().toISOString()}),i(Z.user.uid)}}catch(Z){w(Z.message||"An error occurred")}finally{E(!1)}};return qe.jsxs("div",{children:[qe.jsx("h2",{children:e?"Login":"Sign Up"}),qe.jsxs("form",{onSubmit:U,children:[qe.jsxs("div",{children:[qe.jsx("label",{children:"Email:"}),qe.jsx("input",{type:"email",value:s,onChange:q=>a(q.target.value),required:!0})]}),qe.jsxs("div",{children:[qe.jsx("label",{children:"Password:"}),qe.jsx("input",{type:"password",value:l,onChange:q=>h(q.target.value),required:!0})]}),!e&&qe.jsxs("div",{children:[qe.jsx("label",{children:"Username:"}),qe.jsx("input",{type:"text",value:p,onChange:q=>m(q.target.value),required:!0})]}),S&&qe.jsx("div",{style:{color:"red"},children:S}),qe.jsx("button",{type:"submit",disabled:g,children:g?"Loading...":e?"Login":"Sign Up"})]}),qe.jsxs("button",{onClick:()=>t(!e),children:["Switch to ",e?"Sign Up":"Login"]})]})},Y0=async i=>{try{const e=await ek(Bw(Ob,"usernames",i));return e.exists()?e.data().username:null}catch(e){return console.error("Error fetching username:",e),null}};function TV(){const[i,e]=Tt.useState(null),[t,s]=Tt.useState(null),[a,l]=Tt.useState(!0);Tt.useEffect(()=>{const p=aP(bf,async m=>{if(e(m),m){const g=await Y0(m.uid);s(g)}else s(null);l(!1)});return()=>p()},[]);const h=async p=>{const m=await Y0(p);s(m)};return a?qe.jsx("div",{children:"Loading..."}):qe.jsx("div",{children:i?qe.jsxs("div",{children:[qe.jsxs("div",{children:["Welcome, ",t||i.email,"!"]}),qe.jsx("button",{onClick:()=>bf.signOut(),children:"Logout"}),qe.jsx(f1,{})]}):qe.jsx(EV,{onAuthSuccess:h})})}h1.createRoot(document.getElementById("root")).render(qe.jsx(Tt.StrictMode,{children:qe.jsx(TV,{})}));
