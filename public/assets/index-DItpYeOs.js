(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Am={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT;function QI(){if(cT)return mu;cT=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return mu.Fragment=e,mu.jsx=t,mu.jsxs=t,mu}var hT;function WI(){return hT||(hT=1,Am.exports=QI()),Am.exports}var $=WI(),wm={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fT;function XI(){if(fT)return Re;fT=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=T&&k[T]||k["@@iterator"],typeof k=="function"?k:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,K={};function W(k,J,ie){this.props=k,this.context=J,this.refs=K,this.updater=ie||P}W.prototype.isReactComponent={},W.prototype.setState=function(k,J){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,J,"setState")},W.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ge(){}ge.prototype=W.prototype;function he(k,J,ie){this.props=k,this.context=J,this.refs=K,this.updater=ie||P}var ce=he.prototype=new ge;ce.constructor=he,B(ce,W.prototype),ce.isPureReactComponent=!0;var fe=Array.isArray,re={H:null,A:null,T:null,S:null,V:null},ue=Object.prototype.hasOwnProperty;function O(k,J,ie,ee,_e,De){return ie=De.ref,{$$typeof:i,type:k,key:J,ref:ie!==void 0?ie:null,props:De}}function b(k,J){return O(k.type,J,void 0,void 0,void 0,k.props)}function I(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function M(k){var J={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ie){return J[ie]})}var N=/\/+/g;function D(k,J){return typeof k=="object"&&k!==null&&k.key!=null?M(""+k.key):J.toString(36)}function R(){}function Le(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(R,R):(k.status="pending",k.then(function(J){k.status==="pending"&&(k.status="fulfilled",k.value=J)},function(J){k.status==="pending"&&(k.status="rejected",k.reason=J)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function Ne(k,J,ie,ee,_e){var De=typeof k;(De==="undefined"||De==="boolean")&&(k=null);var Ae=!1;if(k===null)Ae=!0;else switch(De){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(k.$$typeof){case i:case e:Ae=!0;break;case v:return Ae=k._init,Ne(Ae(k._payload),J,ie,ee,_e)}}if(Ae)return _e=_e(k),Ae=ee===""?"."+D(k,0):ee,fe(_e)?(ie="",Ae!=null&&(ie=Ae.replace(N,"$&/")+"/"),Ne(_e,J,ie,"",function(di){return di})):_e!=null&&(I(_e)&&(_e=b(_e,ie+(_e.key==null||k&&k.key===_e.key?"":(""+_e.key).replace(N,"$&/")+"/")+Ae)),J.push(_e)),1;Ae=0;var zt=ee===""?".":ee+":";if(fe(k))for(var at=0;at<k.length;at++)ee=k[at],De=zt+D(ee,at),Ae+=Ne(ee,J,ie,De,_e);else if(at=w(k),typeof at=="function")for(k=at.call(k),at=0;!(ee=k.next()).done;)ee=ee.value,De=zt+D(ee,at++),Ae+=Ne(ee,J,ie,De,_e);else if(De==="object"){if(typeof k.then=="function")return Ne(Le(k),J,ie,ee,_e);throw J=String(k),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function H(k,J,ie){if(k==null)return k;var ee=[],_e=0;return Ne(k,ee,"","",function(De){return J.call(ie,De,_e++)}),ee}function te(k){if(k._status===-1){var J=k._result;J=J(),J.then(function(ie){(k._status===0||k._status===-1)&&(k._status=1,k._result=ie)},function(ie){(k._status===0||k._status===-1)&&(k._status=2,k._result=ie)}),k._status===-1&&(k._status=0,k._result=J)}if(k._status===1)return k._result.default;throw k._result}var pe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function Ge(){}return Re.Children={map:H,forEach:function(k,J,ie){H(k,function(){J.apply(this,arguments)},ie)},count:function(k){var J=0;return H(k,function(){J++}),J},toArray:function(k){return H(k,function(J){return J})||[]},only:function(k){if(!I(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Re.Component=W,Re.Fragment=t,Re.Profiler=a,Re.PureComponent=he,Re.StrictMode=s,Re.Suspense=m,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,Re.__COMPILER_RUNTIME={__proto__:null,c:function(k){return re.H.useMemoCache(k)}},Re.cache=function(k){return function(){return k.apply(null,arguments)}},Re.cloneElement=function(k,J,ie){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ee=B({},k.props),_e=k.key,De=void 0;if(J!=null)for(Ae in J.ref!==void 0&&(De=void 0),J.key!==void 0&&(_e=""+J.key),J)!ue.call(J,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&J.ref===void 0||(ee[Ae]=J[Ae]);var Ae=arguments.length-2;if(Ae===1)ee.children=ie;else if(1<Ae){for(var zt=Array(Ae),at=0;at<Ae;at++)zt[at]=arguments[at+2];ee.children=zt}return O(k.type,_e,void 0,void 0,De,ee)},Re.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},Re.createElement=function(k,J,ie){var ee,_e={},De=null;if(J!=null)for(ee in J.key!==void 0&&(De=""+J.key),J)ue.call(J,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(_e[ee]=J[ee]);var Ae=arguments.length-2;if(Ae===1)_e.children=ie;else if(1<Ae){for(var zt=Array(Ae),at=0;at<Ae;at++)zt[at]=arguments[at+2];_e.children=zt}if(k&&k.defaultProps)for(ee in Ae=k.defaultProps,Ae)_e[ee]===void 0&&(_e[ee]=Ae[ee]);return O(k,De,void 0,void 0,null,_e)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(k){return{$$typeof:d,render:k}},Re.isValidElement=I,Re.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:te}},Re.memo=function(k,J){return{$$typeof:g,type:k,compare:J===void 0?null:J}},Re.startTransition=function(k){var J=re.T,ie={};re.T=ie;try{var ee=k(),_e=re.S;_e!==null&&_e(ie,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Ge,pe)}catch(De){pe(De)}finally{re.T=J}},Re.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},Re.use=function(k){return re.H.use(k)},Re.useActionState=function(k,J,ie){return re.H.useActionState(k,J,ie)},Re.useCallback=function(k,J){return re.H.useCallback(k,J)},Re.useContext=function(k){return re.H.useContext(k)},Re.useDebugValue=function(){},Re.useDeferredValue=function(k,J){return re.H.useDeferredValue(k,J)},Re.useEffect=function(k,J,ie){var ee=re.H;if(typeof ie=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(k,J)},Re.useId=function(){return re.H.useId()},Re.useImperativeHandle=function(k,J,ie){return re.H.useImperativeHandle(k,J,ie)},Re.useInsertionEffect=function(k,J){return re.H.useInsertionEffect(k,J)},Re.useLayoutEffect=function(k,J){return re.H.useLayoutEffect(k,J)},Re.useMemo=function(k,J){return re.H.useMemo(k,J)},Re.useOptimistic=function(k,J){return re.H.useOptimistic(k,J)},Re.useReducer=function(k,J,ie){return re.H.useReducer(k,J,ie)},Re.useRef=function(k){return re.H.useRef(k)},Re.useState=function(k){return re.H.useState(k)},Re.useSyncExternalStore=function(k,J,ie){return re.H.useSyncExternalStore(k,J,ie)},Re.useTransition=function(){return re.H.useTransition()},Re.version="19.1.0",Re}var dT;function xg(){return dT||(dT=1,wm.exports=XI()),wm.exports}var it=xg(),bm={exports:{}},gu={},Rm={exports:{}},Im={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT;function $I(){return pT||(pT=1,function(i){function e(H,te){var pe=H.length;H.push(te);e:for(;0<pe;){var Ge=pe-1>>>1,k=H[Ge];if(0<a(k,te))H[Ge]=te,H[pe]=k,pe=Ge;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var te=H[0],pe=H.pop();if(pe!==te){H[0]=pe;e:for(var Ge=0,k=H.length,J=k>>>1;Ge<J;){var ie=2*(Ge+1)-1,ee=H[ie],_e=ie+1,De=H[_e];if(0>a(ee,pe))_e<k&&0>a(De,ee)?(H[Ge]=De,H[_e]=pe,Ge=_e):(H[Ge]=ee,H[ie]=pe,Ge=ie);else if(_e<k&&0>a(De,pe))H[Ge]=De,H[_e]=pe,Ge=_e;else break e}}return te}function a(H,te){var pe=H.sortIndex-te.sortIndex;return pe!==0?pe:H.id-te.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var m=[],g=[],v=1,T=null,w=3,P=!1,B=!1,K=!1,W=!1,ge=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function fe(H){for(var te=t(g);te!==null;){if(te.callback===null)s(g);else if(te.startTime<=H)s(g),te.sortIndex=te.expirationTime,e(m,te);else break;te=t(g)}}function re(H){if(K=!1,fe(H),!B)if(t(m)!==null)B=!0,ue||(ue=!0,D());else{var te=t(g);te!==null&&Ne(re,te.startTime-H)}}var ue=!1,O=-1,b=5,I=-1;function M(){return W?!0:!(i.unstable_now()-I<b)}function N(){if(W=!1,ue){var H=i.unstable_now();I=H;var te=!0;try{e:{B=!1,K&&(K=!1,he(O),O=-1),P=!0;var pe=w;try{t:{for(fe(H),T=t(m);T!==null&&!(T.expirationTime>H&&M());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,w=T.priorityLevel;var k=Ge(T.expirationTime<=H);if(H=i.unstable_now(),typeof k=="function"){T.callback=k,fe(H),te=!0;break t}T===t(m)&&s(m),fe(H)}else s(m);T=t(m)}if(T!==null)te=!0;else{var J=t(g);J!==null&&Ne(re,J.startTime-H),te=!1}}break e}finally{T=null,w=pe,P=!1}te=void 0}}finally{te?D():ue=!1}}}var D;if(typeof ce=="function")D=function(){ce(N)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Le=R.port2;R.port1.onmessage=N,D=function(){Le.postMessage(null)}}else D=function(){ge(N,0)};function Ne(H,te){O=ge(function(){H(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(H){switch(w){case 1:case 2:case 3:var te=3;break;default:te=w}var pe=w;w=te;try{return H()}finally{w=pe}},i.unstable_requestPaint=function(){W=!0},i.unstable_runWithPriority=function(H,te){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var pe=w;w=H;try{return te()}finally{w=pe}},i.unstable_scheduleCallback=function(H,te,pe){var Ge=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?Ge+pe:Ge):pe=Ge,H){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=pe+k,H={id:v++,callback:te,priorityLevel:H,startTime:pe,expirationTime:k,sortIndex:-1},pe>Ge?(H.sortIndex=pe,e(g,H),t(m)===null&&H===t(g)&&(K?(he(O),O=-1):K=!0,Ne(re,pe-Ge))):(H.sortIndex=k,e(m,H),B||P||(B=!0,ue||(ue=!0,D()))),H},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(H){var te=w;return function(){var pe=w;w=te;try{return H.apply(this,arguments)}finally{w=pe}}}}(Im)),Im}var mT;function ZI(){return mT||(mT=1,Rm.exports=$I()),Rm.exports}var Cm={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gT;function JI(){if(gT)return an;gT=1;var i=xg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:v}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,v)},an.flushSync=function(m){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=g,s.p=v,s.d.f()}},an.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},an.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},an.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,P=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:P}):v==="script"&&s.d.X(m,{crossOrigin:T,integrity:w,fetchPriority:P,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},an.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},an.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin);s.d.L(m,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},an.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=d(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},an.requestFormReset=function(m){s.d.r(m)},an.unstable_batchedUpdates=function(m,g){return m(g)},an.useFormState=function(m,g,v){return c.H.useFormState(m,g,v)},an.useFormStatus=function(){return c.H.useHostTransitionStatus()},an.version="19.1.0",an}var _T;function e1(){if(_T)return Cm.exports;_T=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Cm.exports=JI(),Cm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yT;function t1(){if(yT)return gu;yT=1;var i=ZI(),e=xg(),t=e1();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(s(188))}function m(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return d(f),n;if(p===u)return d(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=p;break}if(S===u){E=!0,u=f,o=p;break}S=S.sibling}if(!E){for(S=p.child;S;){if(S===o){E=!0,o=p,u=f;break}if(S===u){E=!0,u=p,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),he=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function D(n){return n===null||typeof n!="object"?null:(n=N&&n[N]||n["@@iterator"],typeof n=="function"?n:null)}var R=Symbol.for("react.client.reference");function Le(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===R?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case W:return"Profiler";case K:return"StrictMode";case re:return"Suspense";case ue:return"SuspenseList";case I:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case P:return"Portal";case ce:return(n.displayName||"Context")+".Provider";case he:return(n._context.displayName||"Context")+".Consumer";case fe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return r=n.displayName||null,r!==null?r:Le(n.type)||"Memo";case b:r=n._payload,n=n._init;try{return Le(n(r))}catch{}}return null}var Ne=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},Ge=[],k=-1;function J(n){return{current:n}}function ie(n){0>k||(n.current=Ge[k],Ge[k]=null,k--)}function ee(n,r){k++,Ge[k]=n.current,n.current=r}var _e=J(null),De=J(null),Ae=J(null),zt=J(null);function at(n,r){switch(ee(Ae,r),ee(De,n),ee(_e,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?UE(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=UE(r),n=zE(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ie(_e),ee(_e,n)}function di(){ie(_e),ie(De),ie(Ae)}function Cs(n){n.memoizedState!==null&&ee(zt,n);var r=_e.current,o=zE(r,n.type);r!==o&&(ee(De,n),ee(_e,o))}function Fi(n){De.current===n&&(ie(_e),ie(De)),zt.current===n&&(ie(zt),cu._currentValue=pe)}var Nr=Object.prototype.hasOwnProperty,Dr=i.unstable_scheduleCallback,Or=i.unstable_cancelCallback,ol=i.unstable_shouldYield,_c=i.unstable_requestPaint,Ln=i.unstable_now,Ad=i.unstable_getCurrentPriorityLevel,ll=i.unstable_ImmediatePriority,xa=i.unstable_UserBlockingPriority,Mr=i.unstable_NormalPriority,wd=i.unstable_LowPriority,Pa=i.unstable_IdlePriority,ul=i.log,yc=i.unstable_setDisableYieldValue,yt=null,Xe=null;function bn(n){if(typeof ul=="function"&&yc(n),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(yt,n)}catch{}}var sn=Math.clz32?Math.clz32:kr,vc=Math.log,bd=Math.LN2;function kr(n){return n>>>=0,n===0?32:31-(vc(n)/bd|0)|0}var xr=256,Pr=4194304;function ti(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Va(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,p=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var S=u&134217727;return S!==0?(u=S&~p,u!==0?f=ti(u):(E&=S,E!==0?f=ti(E):o||(o=S&~n,o!==0&&(f=ti(o))))):(S=u&~p,S!==0?f=ti(S):E!==0?f=ti(E):o||(o=u&~n,o!==0&&(f=ti(o)))),f===0?0:r!==0&&r!==f&&(r&p)===0&&(p=f&-f,o=r&-r,p>=o||p===32&&(o&4194048)!==0)?r:f}function Vr(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function cl(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hl(){var n=xr;return xr<<=1,(xr&4194048)===0&&(xr=256),n}function fl(){var n=Pr;return Pr<<=1,(Pr&62914560)===0&&(Pr=4194304),n}function qi(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Hi(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function dl(n,r,o,u,f,p){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var S=n.entanglements,C=n.expirationTimes,z=n.hiddenUpdates;for(o=E&~o;0<o;){var G=31-sn(o),X=1<<G;S[G]=0,C[G]=-1;var j=z[G];if(j!==null)for(z[G]=null,G=0;G<j.length;G++){var F=j[G];F!==null&&(F.lane&=-536870913)}o&=~X}u!==0&&pi(n,u,0),p!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=p&~(E&~r))}function pi(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-sn(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function pl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-sn(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function Ns(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function La(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ds(){var n=te.p;return n!==0?n:(n=window.event,n===void 0?32:sT(n.type))}function Ec(n,r){var o=te.p;try{return te.p=n,r()}finally{te.p=o}}var dt=Math.random().toString(36).slice(2),kt="__reactFiber$"+dt,Rt="__reactProps$"+dt,Un="__reactContainer$"+dt,ml="__reactEvents$"+dt,Rd="__reactListeners$"+dt,Os="__reactHandles$"+dt,Tc="__reactResources$"+dt,Lr="__reactMarker$"+dt;function Ms(n){delete n[kt],delete n[Rt],delete n[ml],delete n[Rd],delete n[Os]}function Gi(n){var r=n[kt];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Un]||o[kt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=qE(n);n!==null;){if(o=n[kt])return o;n=qE(n)}return r}n=o,o=n.parentNode}return null}function mi(n){if(n=n[kt]||n[Un]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function gi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function pn(n){var r=n[Tc];return r||(r=n[Tc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function St(n){n[Lr]=!0}var gl=new Set,Ua={};function ni(n,r){Ki(n,r),Ki(n+"Capture",r)}function Ki(n,r){for(Ua[n]=r,n=0;n<r.length;n++)gl.add(r[n])}var Sc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ac={},Ur={};function wc(n){return Nr.call(Ur,n)?!0:Nr.call(Ac,n)?!1:Sc.test(n)?Ur[n]=!0:(Ac[n]=!0,!1)}function ks(n,r,o){if(wc(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function _i(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Qt(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var zr,bc;function Yi(n){if(zr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);zr=r&&r[1]||"",bc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zr+n+bc}var za=!1;function Ba(n,r){if(!n||za)return"";za=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(F){var j=F}Reflect.construct(n,[],X)}else{try{X.call()}catch(F){j=F}n.call(X.prototype)}}else{try{throw Error()}catch(F){j=F}(X=n())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(F){if(F&&j&&typeof F.stack=="string")return[F.stack,j.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],S=p[1];if(E&&S){var C=E.split(`
`),z=S.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===z.length)for(u=C.length-1,f=z.length-1;1<=u&&0<=f&&C[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==z[f]){var G=`
`+C[u].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=u&&0<=f);break}}}finally{za=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Yi(o):""}function _l(n){switch(n.tag){case 26:case 27:case 5:return Yi(n.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 15:return Ba(n.type,!1);case 11:return Ba(n.type.render,!1);case 1:return Ba(n.type,!0);case 31:return Yi("Activity");default:return""}}function ja(n){try{var r="";do r+=_l(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function mn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yl(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Id(n){var r=yl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Fa(n){n._valueTracker||(n._valueTracker=Id(n))}function vl(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=yl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Br(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Cd=/[\n"\\]/g;function It(n){return n.replace(Cd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Rn(n,r,o,u,f,p,E,S){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+mn(r)):n.value!==""+mn(r)&&(n.value=""+mn(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?xs(n,E,mn(r)):o!=null?xs(n,E,mn(o)):u!=null&&n.removeAttribute("value"),f==null&&p!=null&&(n.defaultChecked=!!p),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+mn(S):n.removeAttribute("name")}function jr(n,r,o,u,f,p,E,S){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+mn(o):"",r=r!=null?""+mn(r):o,S||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=S?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function xs(n,r,o){r==="number"&&Br(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Qi(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+mn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Je(n,r,o){if(r!=null&&(r=""+mn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+mn(o):""}function Fr(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(Ne(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=mn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function zn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var qr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rc(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||qr.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function El(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Rc(n,f,u)}else for(var p in r)r.hasOwnProperty(p)&&Rc(n,p,r[p])}function Tl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qa(n){return Dd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Wi=null;function Bn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Xi=null,$i=null;function Sl(n){var r=mi(n);if(r&&(n=r.stateNode)){var o=n[Rt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Rn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+It(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[Rt]||null;if(!f)throw Error(s(90));Rn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&vl(u)}break e;case"textarea":Je(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Qi(n,!!o.multiple,r,!1)}}}var yi=!1;function Ic(n,r,o){if(yi)return n(r,o);yi=!0;try{var u=n(r);return u}finally{if(yi=!1,(Xi!==null||$i!==null)&&(Eh(),Xi&&(r=Xi,n=$i,$i=Xi=null,Sl(r),n)))for(r=0;r<n.length;r++)Sl(n[r])}}function Hr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Rt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jn=!1;if(ii)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){jn=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{jn=!1}var vi=null,Ps=null,Zi=null;function Al(){if(Zi)return Zi;var n,r=Ps,o=r.length,u,f="value"in vi?vi.value:vi.textContent,p=f.length;for(n=0;n<o&&r[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===f[p-u];u++);return Zi=f.slice(n,1<u?1-u:void 0)}function Ei(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ti(){return!0}function wl(){return!1}function Bt(n){function r(o,u,f,p,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ti:wl,this.isPropagationStopped=wl,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),r}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Bt(Ye),Kr=v({},Ye,{view:0,detail:0}),Cc=Bt(Kr),Ga,Ka,Si,Yr=v({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Si&&(Si&&n.type==="mousemove"?(Ga=n.screenX-Si.screenX,Ka=n.screenY-Si.screenY):Ka=Ga=0,Si=n),Ga)},movementY:function(n){return"movementY"in n?n.movementY:Ka}}),Fn=Bt(Yr),Nc=v({},Yr,{dataTransfer:0}),Od=Bt(Nc),Qr=v({},Kr,{relatedTarget:0}),Ya=Bt(Qr),bl=v({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),Qa=Bt(bl),Dc=v({},Ye,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wa=Bt(Dc),Md=v({},Ye,{data:0}),Rl=Bt(Md),Wr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Il(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Mc[n])?!!r[n]:!1}function Xr(){return Il}var kc=v({},Kr,{key:function(n){if(n.key){var r=Wr[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ei(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Oc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xr,charCode:function(n){return n.type==="keypress"?Ei(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ei(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xa=Bt(kc),xc=v({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=Bt(xc),Ji=v({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xr}),Pc=Bt(Ji),Vc=v({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lc=Bt(Vc),Uc=v({},Yr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$a=Bt(Uc),gn=v({},Ye,{newState:0,oldState:0}),zc=Bt(gn),Bc=[9,13,27,32],Ai=ii&&"CompositionEvent"in window,h=null;ii&&"documentMode"in document&&(h=document.documentMode);var _=ii&&"TextEvent"in window&&!h,y=ii&&(!Ai||h&&8<h&&11>=h),A=" ",L=!1;function q(n,r){switch(n){case"keyup":return Bc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ne(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ue=!1;function xt(n,r){switch(n){case"compositionend":return ne(r);case"keypress":return r.which!==32?null:(L=!0,A);case"textInput":return n=r.data,n===A&&L?null:n;default:return null}}function ze(n,r){if(Ue)return n==="compositionend"||!Ai&&q(n,r)?(n=Al(),Zi=Ps=vi=null,Ue=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var jt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!jt[n.type]:r==="textarea"}function es(n,r,o,u){Xi?$i?$i.push(u):$i=[u]:Xi=u,r=Rh(r,"onChange"),0<r.length&&(o=new Ha("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Wt=null,wi=null;function Nl(n){kE(n,0)}function jc(n){var r=gi(n);if(vl(r))return n}function ey(n,r){if(n==="change")return r}var ty=!1;if(ii){var kd;if(ii){var xd="oninput"in document;if(!xd){var ny=document.createElement("div");ny.setAttribute("oninput","return;"),xd=typeof ny.oninput=="function"}kd=xd}else kd=!1;ty=kd&&(!document.documentMode||9<document.documentMode)}function iy(){Wt&&(Wt.detachEvent("onpropertychange",sy),wi=Wt=null)}function sy(n){if(n.propertyName==="value"&&jc(wi)){var r=[];es(r,wi,n,Bn(n)),Ic(Nl,r)}}function wR(n,r,o){n==="focusin"?(iy(),Wt=r,wi=o,Wt.attachEvent("onpropertychange",sy)):n==="focusout"&&iy()}function bR(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jc(wi)}function RR(n,r){if(n==="click")return jc(r)}function IR(n,r){if(n==="input"||n==="change")return jc(r)}function CR(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var In=typeof Object.is=="function"?Object.is:CR;function Dl(n,r){if(In(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Nr.call(r,f)||!In(n[f],r[f]))return!1}return!0}function ry(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ay(n,r){var o=ry(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ry(o)}}function oy(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?oy(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ly(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Br(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Br(n.document)}return r}function Pd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var NR=ii&&"documentMode"in document&&11>=document.documentMode,Za=null,Vd=null,Ol=null,Ld=!1;function uy(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ld||Za==null||Za!==Br(u)||(u=Za,"selectionStart"in u&&Pd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ol&&Dl(Ol,u)||(Ol=u,u=Rh(Vd,"onSelect"),0<u.length&&(r=new Ha("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Za)))}function $r(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ja={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionrun:$r("Transition","TransitionRun"),transitionstart:$r("Transition","TransitionStart"),transitioncancel:$r("Transition","TransitionCancel"),transitionend:$r("Transition","TransitionEnd")},Ud={},cy={};ii&&(cy=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Zr(n){if(Ud[n])return Ud[n];if(!Ja[n])return n;var r=Ja[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in cy)return Ud[n]=r[o];return n}var hy=Zr("animationend"),fy=Zr("animationiteration"),dy=Zr("animationstart"),DR=Zr("transitionrun"),OR=Zr("transitionstart"),MR=Zr("transitioncancel"),py=Zr("transitionend"),my=new Map,zd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zd.push("scrollEnd");function si(n,r){my.set(n,r),ni(r,[n])}var gy=new WeakMap;function qn(n,r){if(typeof n=="object"&&n!==null){var o=gy.get(n);return o!==void 0?o:(r={value:n,source:r,stack:ja(r)},gy.set(n,r),r)}return{value:n,source:r,stack:ja(r)}}var Hn=[],eo=0,Bd=0;function Fc(){for(var n=eo,r=Bd=eo=0;r<n;){var o=Hn[r];Hn[r++]=null;var u=Hn[r];Hn[r++]=null;var f=Hn[r];Hn[r++]=null;var p=Hn[r];if(Hn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}p!==0&&_y(o,f,p)}}function qc(n,r,o,u){Hn[eo++]=n,Hn[eo++]=r,Hn[eo++]=o,Hn[eo++]=u,Bd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function jd(n,r,o,u){return qc(n,r,o,u),Hc(n)}function to(n,r){return qc(n,null,null,r),Hc(n)}function _y(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=n.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(f=!0)),n=p,p=p.return;return n.tag===3?(p=n.stateNode,f&&r!==null&&(f=31-sn(o),n=p.hiddenUpdates,u=n[f],u===null?n[f]=[r]:u.push(r),r.lane=o|536870912),p):null}function Hc(n){if(50<nu)throw nu=0,Yp=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var no={};function kR(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,r,o,u){return new kR(n,r,o,u)}function Fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ts(n,r){var o=n.alternate;return o===null?(o=Cn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function yy(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Gc(n,r,o,u,f,p){var E=0;if(u=n,typeof n=="function")Fd(n)&&(E=1);else if(typeof n=="string")E=PI(n,o,_e.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case I:return n=Cn(31,o,r,f),n.elementType=I,n.lanes=p,n;case B:return Jr(o.children,f,p,r);case K:E=8,f|=24;break;case W:return n=Cn(12,o,r,f|2),n.elementType=W,n.lanes=p,n;case re:return n=Cn(13,o,r,f),n.elementType=re,n.lanes=p,n;case ue:return n=Cn(19,o,r,f),n.elementType=ue,n.lanes=p,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ge:case ce:E=10;break e;case he:E=9;break e;case fe:E=11;break e;case O:E=14;break e;case b:E=16,u=null;break e}E=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=Cn(E,o,r,f),r.elementType=n,r.type=u,r.lanes=p,r}function Jr(n,r,o,u){return n=Cn(7,n,u,r),n.lanes=o,n}function qd(n,r,o){return n=Cn(6,n,null,r),n.lanes=o,n}function Hd(n,r,o){return r=Cn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var io=[],so=0,Kc=null,Yc=0,Gn=[],Kn=0,ea=null,ns=1,is="";function ta(n,r){io[so++]=Yc,io[so++]=Kc,Kc=n,Yc=r}function vy(n,r,o){Gn[Kn++]=ns,Gn[Kn++]=is,Gn[Kn++]=ea,ea=n;var u=ns;n=is;var f=32-sn(u)-1;u&=~(1<<f),o+=1;var p=32-sn(r)+f;if(30<p){var E=f-f%5;p=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ns=1<<32-sn(r)+f|o<<f|u,is=p+n}else ns=1<<p|o<<f|u,is=n}function Gd(n){n.return!==null&&(ta(n,1),vy(n,1,0))}function Kd(n){for(;n===Kc;)Kc=io[--so],io[so]=null,Yc=io[--so],io[so]=null;for(;n===ea;)ea=Gn[--Kn],Gn[Kn]=null,is=Gn[--Kn],Gn[Kn]=null,ns=Gn[--Kn],Gn[Kn]=null}var _n=null,vt=null,Ke=!1,na=null,bi=!1,Yd=Error(s(519));function ia(n){var r=Error(s(418,""));throw xl(qn(r,n)),Yd}function Ey(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[kt]=n,r[Rt]=u,o){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(o=0;o<su.length;o++)ke(su[o],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),jr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Fa(r);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),Fr(r,u.value,u.defaultValue,u.children),Fa(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||LE(r.textContent,o)?(u.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),u.onScroll!=null&&ke("scroll",r),u.onScrollEnd!=null&&ke("scrollend",r),u.onClick!=null&&(r.onclick=Ih),r=!0):r=!1,r||ia(n)}function Ty(n){for(_n=n.return;_n;)switch(_n.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:_n=_n.return}}function Ml(n){if(n!==_n)return!1;if(!Ke)return Ty(n),Ke=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||um(n.type,n.memoizedProps)),o=!o),o&&vt&&ia(n),Ty(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){vt=ai(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}vt=null}}else r===27?(r=vt,$s(n.type)?(n=dm,dm=null,vt=n):vt=r):vt=_n?ai(n.stateNode.nextSibling):null;return!0}function kl(){vt=_n=null,Ke=!1}function Sy(){var n=na;return n!==null&&(En===null?En=n:En.push.apply(En,n),na=null),n}function xl(n){na===null?na=[n]:na.push(n)}var Qd=J(null),sa=null,ss=null;function Vs(n,r,o){ee(Qd,r._currentValue),r._currentValue=o}function rs(n){n._currentValue=Qd.current,ie(Qd)}function Wd(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Xd(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var p=f.dependencies;if(p!==null){var E=f.child;p=p.firstContext;e:for(;p!==null;){var S=p;p=f;for(var C=0;C<r.length;C++)if(S.context===r[C]){p.lanes|=o,S=p.alternate,S!==null&&(S.lanes|=o),Wd(p.return,o,n),u||(E=null);break e}p=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Wd(E,o,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Pl(n,r,o,u){n=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;In(f.pendingProps.value,E.value)||(n!==null?n.push(S):n=[S])}}else if(f===zt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(cu):n=[cu])}f=f.return}n!==null&&Xd(r,n,o,u),r.flags|=262144}function Qc(n){for(n=n.firstContext;n!==null;){if(!In(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ra(n){sa=n,ss=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function rn(n){return Ay(sa,n)}function Wc(n,r){return sa===null&&ra(n),Ay(n,r)}function Ay(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ss===null){if(n===null)throw Error(s(308));ss=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ss=ss.next=r;return o}var xR=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},PR=i.unstable_scheduleCallback,VR=i.unstable_NormalPriority,Vt={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $d(){return{controller:new xR,data:new Map,refCount:0}}function Vl(n){n.refCount--,n.refCount===0&&PR(VR,function(){n.controller.abort()})}var Ll=null,Zd=0,ro=0,ao=null;function LR(n,r){if(Ll===null){var o=Ll=[];Zd=0,ro=em(),ao={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Zd++,r.then(wy,wy),r}function wy(){if(--Zd===0&&Ll!==null){ao!==null&&(ao.status="fulfilled");var n=Ll;Ll=null,ro=0,ao=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function UR(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var by=H.S;H.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&LR(n,r),by!==null&&by(n,r)};var aa=J(null);function Jd(){var n=aa.current;return n!==null?n:ot.pooledCache}function Xc(n,r){r===null?ee(aa,aa.current):ee(aa,r.pool)}function Ry(){var n=Jd();return n===null?null:{parent:Vt._currentValue,pool:n}}var Ul=Error(s(460)),Iy=Error(s(474)),$c=Error(s(542)),ep={then:function(){}};function Cy(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Zc(){}function Ny(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Zc,Zc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Oy(n),n;default:if(typeof r.status=="string")r.then(Zc,Zc);else{if(n=ot,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Oy(n),n}throw zl=r,Ul}}var zl=null;function Dy(){if(zl===null)throw Error(s(459));var n=zl;return zl=null,n}function Oy(n){if(n===Ul||n===$c)throw Error(s(483))}var Ls=!1;function tp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function np(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Us(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function zs(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Hc(n),_y(n,null,o),r}return qc(n,u,r,o),Hc(n)}function Bl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,pl(n,o)}}function ip(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var sp=!1;function jl(){if(sp){var n=ao;if(n!==null)throw n}}function Fl(n,r,o,u){sp=!1;var f=n.updateQueue;Ls=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,z=C.next;C.next=null,E===null?p=z:E.next=z,E=C;var G=n.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==E&&(S===null?G.firstBaseUpdate=z:S.next=z,G.lastBaseUpdate=C))}if(p!==null){var X=f.baseState;E=0,G=z=C=null,S=p;do{var j=S.lane&-536870913,F=j!==S.lane;if(F?(Be&j)===j:(u&j)===j){j!==0&&j===ro&&(sp=!0),G!==null&&(G=G.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Se=n,ye=S;j=r;var nt=o;switch(ye.tag){case 1:if(Se=ye.payload,typeof Se=="function"){X=Se.call(nt,X,j);break e}X=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ye.payload,j=typeof Se=="function"?Se.call(nt,X,j):Se,j==null)break e;X=v({},X,j);break e;case 2:Ls=!0}}j=S.callback,j!==null&&(n.flags|=64,F&&(n.flags|=8192),F=f.callbacks,F===null?f.callbacks=[j]:F.push(j))}else F={lane:j,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(z=G=F,C=X):G=G.next=F,E|=j;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;F=S,S=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);G===null&&(C=X),f.baseState=C,f.firstBaseUpdate=z,f.lastBaseUpdate=G,p===null&&(f.shared.lanes=0),Ys|=E,n.lanes=E,n.memoizedState=X}}function My(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function ky(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)My(o[n],r)}var oo=J(null),Jc=J(0);function xy(n,r){n=fs,ee(Jc,n),ee(oo,r),fs=n|r.baseLanes}function rp(){ee(Jc,fs),ee(oo,oo.current)}function ap(){fs=Jc.current,ie(oo),ie(Jc)}var Bs=0,Ie=null,et=null,Ct=null,eh=!1,lo=!1,oa=!1,th=0,ql=0,uo=null,zR=0;function At(){throw Error(s(321))}function op(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!In(n[o],r[o]))return!1;return!0}function lp(n,r,o,u,f,p){return Bs=p,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,H.H=n===null||n.memoizedState===null?_v:yv,oa=!1,p=o(u,f),oa=!1,lo&&(p=Vy(r,o,u,f)),Py(n),p}function Py(n){H.H=oh;var r=et!==null&&et.next!==null;if(Bs=0,Ct=et=Ie=null,eh=!1,ql=0,uo=null,r)throw Error(s(300));n===null||Ft||(n=n.dependencies,n!==null&&Qc(n)&&(Ft=!0))}function Vy(n,r,o,u){Ie=n;var f=0;do{if(lo&&(uo=null),ql=0,lo=!1,25<=f)throw Error(s(301));if(f+=1,Ct=et=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}H.H=KR,p=r(o,u)}while(lo);return p}function BR(){var n=H.H,r=n.useState()[0];return r=typeof r.then=="function"?Hl(r):r,n=n.useState()[0],(et!==null?et.memoizedState:null)!==n&&(Ie.flags|=1024),r}function up(){var n=th!==0;return th=0,n}function cp(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function hp(n){if(eh){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}eh=!1}Bs=0,Ct=et=Ie=null,lo=!1,ql=th=0,uo=null}function yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Ie.memoizedState=Ct=n:Ct=Ct.next=n,Ct}function Nt(){if(et===null){var n=Ie.alternate;n=n!==null?n.memoizedState:null}else n=et.next;var r=Ct===null?Ie.memoizedState:Ct.next;if(r!==null)Ct=r,et=n;else{if(n===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));et=n,n={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Ct===null?Ie.memoizedState=Ct=n:Ct=Ct.next=n}return Ct}function fp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(n){var r=ql;return ql+=1,uo===null&&(uo=[]),n=Ny(uo,n,r),r=Ie,(Ct===null?r.memoizedState:Ct.next)===null&&(r=r.alternate,H.H=r===null||r.memoizedState===null?_v:yv),n}function nh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Hl(n);if(n.$$typeof===ce)return rn(n)}throw Error(s(438,String(n)))}function dp(n){var r=null,o=Ie.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=fp(),Ie.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=M;return r.index++,o}function as(n,r){return typeof r=="function"?r(n):r}function ih(n){var r=Nt();return pp(r,et,n)}function pp(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,p=u.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}r.baseQueue=f=p,u.pending=null}if(p=n.baseState,f===null)n.memoizedState=p;else{r=f.next;var S=E=null,C=null,z=r,G=!1;do{var X=z.lane&-536870913;if(X!==z.lane?(Be&X)===X:(Bs&X)===X){var j=z.revertLane;if(j===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===ro&&(G=!0);else if((Bs&j)===j){z=z.next,j===ro&&(G=!0);continue}else X={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(S=C=X,E=p):C=C.next=X,Ie.lanes|=j,Ys|=j;X=z.action,oa&&o(p,X),p=z.hasEagerState?z.eagerState:o(p,X)}else j={lane:X,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(S=C=j,E=p):C=C.next=j,Ie.lanes|=X,Ys|=X;z=z.next}while(z!==null&&z!==r);if(C===null?E=p:C.next=S,!In(p,n.memoizedState)&&(Ft=!0,G&&(o=ao,o!==null)))throw o;n.memoizedState=p,n.baseState=E,n.baseQueue=C,u.lastRenderedState=p}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function mp(n){var r=Nt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=n(p,E.action),E=E.next;while(E!==f);In(p,r.memoizedState)||(Ft=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function Ly(n,r,o){var u=Ie,f=Nt(),p=Ke;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!In((et||f).memoizedState,o);E&&(f.memoizedState=o,Ft=!0),f=f.queue;var S=By.bind(null,u,f,n);if(Gl(2048,8,S,[n]),f.getSnapshot!==r||E||Ct!==null&&Ct.memoizedState.tag&1){if(u.flags|=2048,co(9,sh(),zy.bind(null,u,f,o,r),null),ot===null)throw Error(s(349));p||(Bs&124)!==0||Uy(u,r,o)}return o}function Uy(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ie.updateQueue,r===null?(r=fp(),Ie.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function zy(n,r,o,u){r.value=o,r.getSnapshot=u,jy(r)&&Fy(n)}function By(n,r,o){return o(function(){jy(r)&&Fy(n)})}function jy(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!In(n,o)}catch{return!0}}function Fy(n){var r=to(n,2);r!==null&&kn(r,n,2)}function gp(n){var r=yn();if(typeof n=="function"){var o=n;if(n=o(),oa){bn(!0);try{o()}finally{bn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:n},r}function qy(n,r,o,u){return n.baseState=o,pp(n,et,typeof u=="function"?u:as)}function jR(n,r,o,u,f){if(ah(n))throw Error(s(485));if(n=r.action,n!==null){var p={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};H.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,Hy(r,p)):(p.next=o.next,r.pending=o.next=p)}}function Hy(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var p=H.T,E={};H.T=E;try{var S=o(f,u),C=H.S;C!==null&&C(E,S),Gy(n,r,S)}catch(z){_p(n,r,z)}finally{H.T=p}}else try{p=o(f,u),Gy(n,r,p)}catch(z){_p(n,r,z)}}function Gy(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ky(n,r,u)},function(u){return _p(n,r,u)}):Ky(n,r,o)}function Ky(n,r,o){r.status="fulfilled",r.value=o,Yy(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Hy(n,o)))}function _p(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Yy(r),r=r.next;while(r!==u)}n.action=null}function Yy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Qy(n,r){return r}function Wy(n,r){if(Ke){var o=ot.formState;if(o!==null){e:{var u=Ie;if(Ke){if(vt){t:{for(var f=vt,p=bi;f.nodeType!==8;){if(!p){f=null;break t}if(f=ai(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){vt=ai(f.nextSibling),u=f.data==="F!";break e}}ia(u)}u=!1}u&&(r=o[0])}}return o=yn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qy,lastRenderedState:r},o.queue=u,o=pv.bind(null,Ie,u),u.dispatch=o,u=gp(!1),p=Sp.bind(null,Ie,!1,u.queue),u=yn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=jR.bind(null,Ie,f,p,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function Xy(n){var r=Nt();return $y(r,et,n)}function $y(n,r,o){if(r=pp(n,r,Qy)[0],n=ih(as)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Hl(r)}catch(E){throw E===Ul?$c:E}else u=r;r=Nt();var f=r.queue,p=f.dispatch;return o!==r.memoizedState&&(Ie.flags|=2048,co(9,sh(),FR.bind(null,f,o),null)),[u,p,n]}function FR(n,r){n.action=r}function Zy(n){var r=Nt(),o=et;if(o!==null)return $y(r,o,n);Nt(),r=r.memoizedState,o=Nt();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function co(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=fp(),Ie.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function sh(){return{destroy:void 0,resource:void 0}}function Jy(){return Nt().memoizedState}function rh(n,r,o,u){var f=yn();u=u===void 0?null:u,Ie.flags|=n,f.memoizedState=co(1|r,sh(),o,u)}function Gl(n,r,o,u){var f=Nt();u=u===void 0?null:u;var p=f.memoizedState.inst;et!==null&&u!==null&&op(u,et.memoizedState.deps)?f.memoizedState=co(r,p,o,u):(Ie.flags|=n,f.memoizedState=co(1|r,p,o,u))}function ev(n,r){rh(8390656,8,n,r)}function tv(n,r){Gl(2048,8,n,r)}function nv(n,r){return Gl(4,2,n,r)}function iv(n,r){return Gl(4,4,n,r)}function sv(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function rv(n,r,o){o=o!=null?o.concat([n]):null,Gl(4,4,sv.bind(null,r,n),o)}function yp(){}function av(n,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&op(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function ov(n,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&op(r,u[1]))return u[0];if(u=n(),oa){bn(!0);try{n()}finally{bn(!1)}}return o.memoizedState=[u,r],u}function vp(n,r,o){return o===void 0||(Bs&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=cE(),Ie.lanes|=n,Ys|=n,o)}function lv(n,r,o,u){return In(o,r)?o:oo.current!==null?(n=vp(n,o,u),In(n,r)||(Ft=!0),n):(Bs&42)===0?(Ft=!0,n.memoizedState=o):(n=cE(),Ie.lanes|=n,Ys|=n,r)}function uv(n,r,o,u,f){var p=te.p;te.p=p!==0&&8>p?p:8;var E=H.T,S={};H.T=S,Sp(n,!1,r,o);try{var C=f(),z=H.S;if(z!==null&&z(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var G=UR(C,u);Kl(n,r,G,Mn(n))}else Kl(n,r,u,Mn(n))}catch(X){Kl(n,r,{then:function(){},status:"rejected",reason:X},Mn())}finally{te.p=p,H.T=E}}function qR(){}function Ep(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=cv(n).queue;uv(n,f,r,pe,o===null?qR:function(){return hv(n),o(u)})}function cv(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:pe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function hv(n){var r=cv(n).next.queue;Kl(n,r,{},Mn())}function Tp(){return rn(cu)}function fv(){return Nt().memoizedState}function dv(){return Nt().memoizedState}function HR(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Mn();n=Us(o);var u=zs(r,n,o);u!==null&&(kn(u,r,o),Bl(u,r,o)),r={cache:$d()},n.payload=r;return}r=r.return}}function GR(n,r,o){var u=Mn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},ah(n)?mv(r,o):(o=jd(n,r,o,u),o!==null&&(kn(o,n,u),gv(o,r,u)))}function pv(n,r,o){var u=Mn();Kl(n,r,o,u)}function Kl(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(ah(n))mv(r,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var E=r.lastRenderedState,S=p(E,o);if(f.hasEagerState=!0,f.eagerState=S,In(S,E))return qc(n,r,f,0),ot===null&&Fc(),!1}catch{}finally{}if(o=jd(n,r,f,u),o!==null)return kn(o,n,u),gv(o,r,u),!0}return!1}function Sp(n,r,o,u){if(u={lane:2,revertLane:em(),action:u,hasEagerState:!1,eagerState:null,next:null},ah(n)){if(r)throw Error(s(479))}else r=jd(n,o,u,2),r!==null&&kn(r,n,2)}function ah(n){var r=n.alternate;return n===Ie||r!==null&&r===Ie}function mv(n,r){lo=eh=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function gv(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,pl(n,o)}}var oh={readContext:rn,use:nh,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At},_v={readContext:rn,use:nh,useCallback:function(n,r){return yn().memoizedState=[n,r===void 0?null:r],n},useContext:rn,useEffect:ev,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,rh(4194308,4,sv.bind(null,r,n),o)},useLayoutEffect:function(n,r){return rh(4194308,4,n,r)},useInsertionEffect:function(n,r){rh(4,2,n,r)},useMemo:function(n,r){var o=yn();r=r===void 0?null:r;var u=n();if(oa){bn(!0);try{n()}finally{bn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=yn();if(o!==void 0){var f=o(r);if(oa){bn(!0);try{o(r)}finally{bn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=GR.bind(null,Ie,n),[u.memoizedState,n]},useRef:function(n){var r=yn();return n={current:n},r.memoizedState=n},useState:function(n){n=gp(n);var r=n.queue,o=pv.bind(null,Ie,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:yp,useDeferredValue:function(n,r){var o=yn();return vp(o,n,r)},useTransition:function(){var n=gp(!1);return n=uv.bind(null,Ie,n.queue,!0,!1),yn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Ie,f=yn();if(Ke){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ot===null)throw Error(s(349));(Be&124)!==0||Uy(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,ev(By.bind(null,u,p,n),[n]),u.flags|=2048,co(9,sh(),zy.bind(null,u,p,o,r),null),o},useId:function(){var n=yn(),r=ot.identifierPrefix;if(Ke){var o=is,u=ns;o=(u&~(1<<32-sn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=th++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=zR++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Tp,useFormState:Wy,useActionState:Wy,useOptimistic:function(n){var r=yn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Sp.bind(null,Ie,!0,o),o.dispatch=r,[n,r]},useMemoCache:dp,useCacheRefresh:function(){return yn().memoizedState=HR.bind(null,Ie)}},yv={readContext:rn,use:nh,useCallback:av,useContext:rn,useEffect:tv,useImperativeHandle:rv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:ov,useReducer:ih,useRef:Jy,useState:function(){return ih(as)},useDebugValue:yp,useDeferredValue:function(n,r){var o=Nt();return lv(o,et.memoizedState,n,r)},useTransition:function(){var n=ih(as)[0],r=Nt().memoizedState;return[typeof n=="boolean"?n:Hl(n),r]},useSyncExternalStore:Ly,useId:fv,useHostTransitionStatus:Tp,useFormState:Xy,useActionState:Xy,useOptimistic:function(n,r){var o=Nt();return qy(o,et,n,r)},useMemoCache:dp,useCacheRefresh:dv},KR={readContext:rn,use:nh,useCallback:av,useContext:rn,useEffect:tv,useImperativeHandle:rv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:ov,useReducer:mp,useRef:Jy,useState:function(){return mp(as)},useDebugValue:yp,useDeferredValue:function(n,r){var o=Nt();return et===null?vp(o,n,r):lv(o,et.memoizedState,n,r)},useTransition:function(){var n=mp(as)[0],r=Nt().memoizedState;return[typeof n=="boolean"?n:Hl(n),r]},useSyncExternalStore:Ly,useId:fv,useHostTransitionStatus:Tp,useFormState:Zy,useActionState:Zy,useOptimistic:function(n,r){var o=Nt();return et!==null?qy(o,et,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:dp,useCacheRefresh:dv},ho=null,Yl=0;function lh(n){var r=Yl;return Yl+=1,ho===null&&(ho=[]),Ny(ho,n,r)}function Ql(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function uh(n,r){throw r.$$typeof===T?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function vv(n){var r=n._init;return r(n._payload)}function Ev(n){function r(V,x){if(n){var U=V.deletions;U===null?(V.deletions=[x],V.flags|=16):U.push(x)}}function o(V,x){if(!n)return null;for(;x!==null;)r(V,x),x=x.sibling;return null}function u(V){for(var x=new Map;V!==null;)V.key!==null?x.set(V.key,V):x.set(V.index,V),V=V.sibling;return x}function f(V,x){return V=ts(V,x),V.index=0,V.sibling=null,V}function p(V,x,U){return V.index=U,n?(U=V.alternate,U!==null?(U=U.index,U<x?(V.flags|=67108866,x):U):(V.flags|=67108866,x)):(V.flags|=1048576,x)}function E(V){return n&&V.alternate===null&&(V.flags|=67108866),V}function S(V,x,U,Y){return x===null||x.tag!==6?(x=qd(U,V.mode,Y),x.return=V,x):(x=f(x,U),x.return=V,x)}function C(V,x,U,Y){var le=U.type;return le===B?G(V,x,U.props.children,Y,U.key):x!==null&&(x.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===b&&vv(le)===x.type)?(x=f(x,U.props),Ql(x,U),x.return=V,x):(x=Gc(U.type,U.key,U.props,null,V.mode,Y),Ql(x,U),x.return=V,x)}function z(V,x,U,Y){return x===null||x.tag!==4||x.stateNode.containerInfo!==U.containerInfo||x.stateNode.implementation!==U.implementation?(x=Hd(U,V.mode,Y),x.return=V,x):(x=f(x,U.children||[]),x.return=V,x)}function G(V,x,U,Y,le){return x===null||x.tag!==7?(x=Jr(U,V.mode,Y,le),x.return=V,x):(x=f(x,U),x.return=V,x)}function X(V,x,U){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=qd(""+x,V.mode,U),x.return=V,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case w:return U=Gc(x.type,x.key,x.props,null,V.mode,U),Ql(U,x),U.return=V,U;case P:return x=Hd(x,V.mode,U),x.return=V,x;case b:var Y=x._init;return x=Y(x._payload),X(V,x,U)}if(Ne(x)||D(x))return x=Jr(x,V.mode,U,null),x.return=V,x;if(typeof x.then=="function")return X(V,lh(x),U);if(x.$$typeof===ce)return X(V,Wc(V,x),U);uh(V,x)}return null}function j(V,x,U,Y){var le=x!==null?x.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return le!==null?null:S(V,x,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return U.key===le?C(V,x,U,Y):null;case P:return U.key===le?z(V,x,U,Y):null;case b:return le=U._init,U=le(U._payload),j(V,x,U,Y)}if(Ne(U)||D(U))return le!==null?null:G(V,x,U,Y,null);if(typeof U.then=="function")return j(V,x,lh(U),Y);if(U.$$typeof===ce)return j(V,x,Wc(V,U),Y);uh(V,U)}return null}function F(V,x,U,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return V=V.get(U)||null,S(x,V,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case w:return V=V.get(Y.key===null?U:Y.key)||null,C(x,V,Y,le);case P:return V=V.get(Y.key===null?U:Y.key)||null,z(x,V,Y,le);case b:var Oe=Y._init;return Y=Oe(Y._payload),F(V,x,U,Y,le)}if(Ne(Y)||D(Y))return V=V.get(U)||null,G(x,V,Y,le,null);if(typeof Y.then=="function")return F(V,x,U,lh(Y),le);if(Y.$$typeof===ce)return F(V,x,U,Wc(x,Y),le);uh(x,Y)}return null}function Se(V,x,U,Y){for(var le=null,Oe=null,de=x,ve=x=0,Ht=null;de!==null&&ve<U.length;ve++){de.index>ve?(Ht=de,de=null):Ht=de.sibling;var He=j(V,de,U[ve],Y);if(He===null){de===null&&(de=Ht);break}n&&de&&He.alternate===null&&r(V,de),x=p(He,x,ve),Oe===null?le=He:Oe.sibling=He,Oe=He,de=Ht}if(ve===U.length)return o(V,de),Ke&&ta(V,ve),le;if(de===null){for(;ve<U.length;ve++)de=X(V,U[ve],Y),de!==null&&(x=p(de,x,ve),Oe===null?le=de:Oe.sibling=de,Oe=de);return Ke&&ta(V,ve),le}for(de=u(de);ve<U.length;ve++)Ht=F(de,V,ve,U[ve],Y),Ht!==null&&(n&&Ht.alternate!==null&&de.delete(Ht.key===null?ve:Ht.key),x=p(Ht,x,ve),Oe===null?le=Ht:Oe.sibling=Ht,Oe=Ht);return n&&de.forEach(function(nr){return r(V,nr)}),Ke&&ta(V,ve),le}function ye(V,x,U,Y){if(U==null)throw Error(s(151));for(var le=null,Oe=null,de=x,ve=x=0,Ht=null,He=U.next();de!==null&&!He.done;ve++,He=U.next()){de.index>ve?(Ht=de,de=null):Ht=de.sibling;var nr=j(V,de,He.value,Y);if(nr===null){de===null&&(de=Ht);break}n&&de&&nr.alternate===null&&r(V,de),x=p(nr,x,ve),Oe===null?le=nr:Oe.sibling=nr,Oe=nr,de=Ht}if(He.done)return o(V,de),Ke&&ta(V,ve),le;if(de===null){for(;!He.done;ve++,He=U.next())He=X(V,He.value,Y),He!==null&&(x=p(He,x,ve),Oe===null?le=He:Oe.sibling=He,Oe=He);return Ke&&ta(V,ve),le}for(de=u(de);!He.done;ve++,He=U.next())He=F(de,V,ve,He.value,Y),He!==null&&(n&&He.alternate!==null&&de.delete(He.key===null?ve:He.key),x=p(He,x,ve),Oe===null?le=He:Oe.sibling=He,Oe=He);return n&&de.forEach(function(YI){return r(V,YI)}),Ke&&ta(V,ve),le}function nt(V,x,U,Y){if(typeof U=="object"&&U!==null&&U.type===B&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case w:e:{for(var le=U.key;x!==null;){if(x.key===le){if(le=U.type,le===B){if(x.tag===7){o(V,x.sibling),Y=f(x,U.props.children),Y.return=V,V=Y;break e}}else if(x.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===b&&vv(le)===x.type){o(V,x.sibling),Y=f(x,U.props),Ql(Y,U),Y.return=V,V=Y;break e}o(V,x);break}else r(V,x);x=x.sibling}U.type===B?(Y=Jr(U.props.children,V.mode,Y,U.key),Y.return=V,V=Y):(Y=Gc(U.type,U.key,U.props,null,V.mode,Y),Ql(Y,U),Y.return=V,V=Y)}return E(V);case P:e:{for(le=U.key;x!==null;){if(x.key===le)if(x.tag===4&&x.stateNode.containerInfo===U.containerInfo&&x.stateNode.implementation===U.implementation){o(V,x.sibling),Y=f(x,U.children||[]),Y.return=V,V=Y;break e}else{o(V,x);break}else r(V,x);x=x.sibling}Y=Hd(U,V.mode,Y),Y.return=V,V=Y}return E(V);case b:return le=U._init,U=le(U._payload),nt(V,x,U,Y)}if(Ne(U))return Se(V,x,U,Y);if(D(U)){if(le=D(U),typeof le!="function")throw Error(s(150));return U=le.call(U),ye(V,x,U,Y)}if(typeof U.then=="function")return nt(V,x,lh(U),Y);if(U.$$typeof===ce)return nt(V,x,Wc(V,U),Y);uh(V,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,x!==null&&x.tag===6?(o(V,x.sibling),Y=f(x,U),Y.return=V,V=Y):(o(V,x),Y=qd(U,V.mode,Y),Y.return=V,V=Y),E(V)):o(V,x)}return function(V,x,U,Y){try{Yl=0;var le=nt(V,x,U,Y);return ho=null,le}catch(de){if(de===Ul||de===$c)throw de;var Oe=Cn(29,de,null,V.mode);return Oe.lanes=Y,Oe.return=V,Oe}finally{}}}var fo=Ev(!0),Tv=Ev(!1),Yn=J(null),Ri=null;function js(n){var r=n.alternate;ee(Lt,Lt.current&1),ee(Yn,n),Ri===null&&(r===null||oo.current!==null||r.memoizedState!==null)&&(Ri=n)}function Sv(n){if(n.tag===22){if(ee(Lt,Lt.current),ee(Yn,n),Ri===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Ri=n)}}else Fs()}function Fs(){ee(Lt,Lt.current),ee(Yn,Yn.current)}function os(n){ie(Yn),Ri===n&&(Ri=null),ie(Lt)}var Lt=J(0);function ch(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||fm(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Ap(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var wp={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Mn(),f=Us(u);f.payload=r,o!=null&&(f.callback=o),r=zs(n,f,u),r!==null&&(kn(r,n,u),Bl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Mn(),f=Us(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=zs(n,f,u),r!==null&&(kn(r,n,u),Bl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Mn(),u=Us(o);u.tag=2,r!=null&&(u.callback=r),r=zs(n,u,o),r!==null&&(kn(r,n,o),Bl(r,n,o))}};function Av(n,r,o,u,f,p,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,E):r.prototype&&r.prototype.isPureReactComponent?!Dl(o,u)||!Dl(f,p):!0}function wv(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&wp.enqueueReplaceState(r,r.state,null)}function la(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=v({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var hh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function bv(n){hh(n)}function Rv(n){console.error(n)}function Iv(n){hh(n)}function fh(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Cv(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function bp(n,r,o){return o=Us(o),o.tag=3,o.payload={element:null},o.callback=function(){fh(n,r)},o}function Nv(n){return n=Us(n),n.tag=3,n}function Dv(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;n.payload=function(){return f(p)},n.callback=function(){Cv(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){Cv(r,o,u),typeof f!="function"&&(Qs===null?Qs=new Set([this]):Qs.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function YR(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Pl(r,o,f,!0),o=Yn.current,o!==null){switch(o.tag){case 13:return Ri===null?Wp():o.alternate===null&&Et===0&&(Et=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===ep?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),$p(n,u,f)),!1;case 22:return o.flags|=65536,u===ep?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),$p(n,u,f)),!1}throw Error(s(435,o.tag))}return $p(n,u,f),Wp(),!1}if(Ke)return r=Yn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Yd&&(n=Error(s(422),{cause:u}),xl(qn(n,o)))):(u!==Yd&&(r=Error(s(423),{cause:u}),xl(qn(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=qn(u,o),f=bp(n.stateNode,u,f),ip(n,f),Et!==4&&(Et=2)),!1;var p=Error(s(520),{cause:u});if(p=qn(p,o),tu===null?tu=[p]:tu.push(p),Et!==4&&(Et=2),r===null)return!0;u=qn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=bp(o.stateNode,u,n),ip(o,n),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Qs===null||!Qs.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Nv(f),Dv(f,n,o,u),ip(o,f),!1}o=o.return}while(o!==null);return!1}var Ov=Error(s(461)),Ft=!1;function Xt(n,r,o,u){r.child=n===null?Tv(r,null,o,u):fo(r,n.child,o,u)}function Mv(n,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return ra(r),u=lp(n,r,o,E,p,f),S=up(),n!==null&&!Ft?(cp(n,r,f),ls(n,r,f)):(Ke&&S&&Gd(r),r.flags|=1,Xt(n,r,u,f),r.child)}function kv(n,r,o,u,f){if(n===null){var p=o.type;return typeof p=="function"&&!Fd(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,xv(n,r,p,u,f)):(n=Gc(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!kp(n,f)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Dl,o(E,u)&&n.ref===r.ref)return ls(n,r,f)}return r.flags|=1,n=ts(p,u),n.ref=r.ref,n.return=r,r.child=n}function xv(n,r,o,u,f){if(n!==null){var p=n.memoizedProps;if(Dl(p,u)&&n.ref===r.ref)if(Ft=!1,r.pendingProps=u=p,kp(n,f))(n.flags&131072)!==0&&(Ft=!0);else return r.lanes=n.lanes,ls(n,r,f)}return Rp(n,r,o,u,f)}function Pv(n,r,o){var u=r.pendingProps,f=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,n!==null){for(f=r.child=n.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return Vv(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xc(r,p!==null?p.cachePool:null),p!==null?xy(r,p):rp(),Sv(r);else return r.lanes=r.childLanes=536870912,Vv(n,r,p!==null?p.baseLanes|o:o,o)}else p!==null?(Xc(r,p.cachePool),xy(r,p),Fs(),r.memoizedState=null):(n!==null&&Xc(r,null),rp(),Fs());return Xt(n,r,f,o),r.child}function Vv(n,r,o,u){var f=Jd();return f=f===null?null:{parent:Vt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&Xc(r,null),rp(),Sv(r),n!==null&&Pl(n,r,u,!0),null}function dh(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function Rp(n,r,o,u,f){return ra(r),o=lp(n,r,o,u,void 0,f),u=up(),n!==null&&!Ft?(cp(n,r,f),ls(n,r,f)):(Ke&&u&&Gd(r),r.flags|=1,Xt(n,r,o,f),r.child)}function Lv(n,r,o,u,f,p){return ra(r),r.updateQueue=null,o=Vy(r,u,o,f),Py(n),u=up(),n!==null&&!Ft?(cp(n,r,p),ls(n,r,p)):(Ke&&u&&Gd(r),r.flags|=1,Xt(n,r,o,p),r.child)}function Uv(n,r,o,u,f){if(ra(r),r.stateNode===null){var p=no,E=o.contextType;typeof E=="object"&&E!==null&&(p=rn(E)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=wp,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},tp(r),E=o.contextType,p.context=typeof E=="object"&&E!==null?rn(E):no,p.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Ap(r,o,E,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&wp.enqueueReplaceState(p,p.state,null),Fl(r,u,p,f),jl(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){p=r.stateNode;var S=r.memoizedProps,C=la(o,S);p.props=C;var z=p.context,G=o.contextType;E=no,typeof G=="object"&&G!==null&&(E=rn(G));var X=o.getDerivedStateFromProps;G=typeof X=="function"||typeof p.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,G||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S||z!==E)&&wv(r,p,u,E),Ls=!1;var j=r.memoizedState;p.state=j,Fl(r,u,p,f),jl(),z=r.memoizedState,S||j!==z||Ls?(typeof X=="function"&&(Ap(r,o,X,u),z=r.memoizedState),(C=Ls||Av(r,o,C,u,j,z,E))?(G||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),p.props=u,p.state=z,p.context=E,u=C):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,np(n,r),E=r.memoizedProps,G=la(o,E),p.props=G,X=r.pendingProps,j=p.context,z=o.contextType,C=no,typeof z=="object"&&z!==null&&(C=rn(z)),S=o.getDerivedStateFromProps,(z=typeof S=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==X||j!==C)&&wv(r,p,u,C),Ls=!1,j=r.memoizedState,p.state=j,Fl(r,u,p,f),jl();var F=r.memoizedState;E!==X||j!==F||Ls||n!==null&&n.dependencies!==null&&Qc(n.dependencies)?(typeof S=="function"&&(Ap(r,o,S,u),F=r.memoizedState),(G=Ls||Av(r,o,G,u,j,F,C)||n!==null&&n.dependencies!==null&&Qc(n.dependencies))?(z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,F,C),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,F,C)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===n.memoizedProps&&j===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&j===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=F),p.props=u,p.state=F,p.context=C,u=G):(typeof p.componentDidUpdate!="function"||E===n.memoizedProps&&j===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&j===n.memoizedState||(r.flags|=1024),u=!1)}return p=u,dh(n,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,n!==null&&u?(r.child=fo(r,n.child,null,f),r.child=fo(r,null,o,f)):Xt(n,r,o,f),r.memoizedState=p.state,n=r.child):n=ls(n,r,f),n}function zv(n,r,o,u){return kl(),r.flags|=256,Xt(n,r,o,u),r.child}var Ip={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cp(n){return{baseLanes:n,cachePool:Ry()}}function Np(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=Qn),n}function Bv(n,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,E;if((E=p)||(E=n!==null&&n.memoizedState===null?!1:(Lt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ke){if(f?js(r):Fs(),Ke){var S=vt,C;if(C=S){e:{for(C=S,S=bi;C.nodeType!==8;){if(!S){S=null;break e}if(C=ai(C.nextSibling),C===null){S=null;break e}}S=C}S!==null?(r.memoizedState={dehydrated:S,treeContext:ea!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},C=Cn(18,null,null,0),C.stateNode=S,C.return=r,r.child=C,_n=r,vt=null,C=!0):C=!1}C||ia(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return fm(S)?r.lanes=32:r.lanes=536870912,null;os(r)}return S=u.children,u=u.fallback,f?(Fs(),f=r.mode,S=ph({mode:"hidden",children:S},f),u=Jr(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=Cp(o),f.childLanes=Np(n,E,o),r.memoizedState=Ip,u):(js(r),Dp(r,S))}if(C=n.memoizedState,C!==null&&(S=C.dehydrated,S!==null)){if(p)r.flags&256?(js(r),r.flags&=-257,r=Op(n,r,o)):r.memoizedState!==null?(Fs(),r.child=n.child,r.flags|=128,r=null):(Fs(),f=u.fallback,S=r.mode,u=ph({mode:"visible",children:u.children},S),f=Jr(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,fo(r,n.child,null,o),u=r.child,u.memoizedState=Cp(o),u.childLanes=Np(n,E,o),r.memoizedState=Ip,r=f);else if(js(r),fm(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(s(419)),u.stack="",u.digest=E,xl({value:u,source:null,stack:null}),r=Op(n,r,o)}else if(Ft||Pl(n,r,o,!1),E=(o&n.childLanes)!==0,Ft||E){if(E=ot,E!==null&&(u=o&-o,u=(u&42)!==0?1:Ns(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,to(n,u),kn(E,n,u),Ov;S.data==="$?"||Wp(),r=Op(n,r,o)}else S.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=C.treeContext,vt=ai(S.nextSibling),_n=r,Ke=!0,na=null,bi=!1,n!==null&&(Gn[Kn++]=ns,Gn[Kn++]=is,Gn[Kn++]=ea,ns=n.id,is=n.overflow,ea=r),r=Dp(r,u.children),r.flags|=4096);return r}return f?(Fs(),f=u.fallback,S=r.mode,C=n.child,z=C.sibling,u=ts(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,z!==null?f=ts(z,f):(f=Jr(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=n.child.memoizedState,S===null?S=Cp(o):(C=S.cachePool,C!==null?(z=Vt._currentValue,C=C.parent!==z?{parent:z,pool:z}:C):C=Ry(),S={baseLanes:S.baseLanes|o,cachePool:C}),f.memoizedState=S,f.childLanes=Np(n,E,o),r.memoizedState=Ip,u):(js(r),o=n.child,n=o.sibling,o=ts(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function Dp(n,r){return r=ph({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function ph(n,r){return n=Cn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Op(n,r,o){return fo(r,n.child,null,o),n=Dp(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function jv(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Wd(n.return,r,o)}function Mp(n,r,o,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function Fv(n,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(Xt(n,r,u.children,o),u=Lt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jv(n,o,r);else if(n.tag===19)jv(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(ee(Lt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&ch(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Mp(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&ch(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Mp(r,!0,o,null,p);break;case"together":Mp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ls(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Ys|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Pl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=ts(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=ts(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function kp(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Qc(n)))}function QR(n,r,o){switch(r.tag){case 3:at(r,r.stateNode.containerInfo),Vs(r,Vt,n.memoizedState.cache),kl();break;case 27:case 5:Cs(r);break;case 4:at(r,r.stateNode.containerInfo);break;case 10:Vs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(js(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Bv(n,r,o):(js(r),n=ls(n,r,o),n!==null?n.sibling:null);js(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Pl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return Fv(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(Lt,Lt.current),u)break;return null;case 22:case 23:return r.lanes=0,Pv(n,r,o);case 24:Vs(r,Vt,n.memoizedState.cache)}return ls(n,r,o)}function qv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Ft=!0;else{if(!kp(n,o)&&(r.flags&128)===0)return Ft=!1,QR(n,r,o);Ft=(n.flags&131072)!==0}else Ft=!1,Ke&&(r.flags&1048576)!==0&&vy(r,Yc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Fd(u)?(n=la(u,n),r.tag=1,r=Uv(null,r,u,n,o)):(r.tag=0,r=Rp(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===fe){r.tag=11,r=Mv(null,r,u,n,o);break e}else if(f===O){r.tag=14,r=kv(null,r,u,n,o);break e}}throw r=Le(u)||u,Error(s(306,r,""))}}return r;case 0:return Rp(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=la(u,r.pendingProps),Uv(n,r,u,f,o);case 3:e:{if(at(r,r.stateNode.containerInfo),n===null)throw Error(s(387));u=r.pendingProps;var p=r.memoizedState;f=p.element,np(n,r),Fl(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Vs(r,Vt,u),u!==p.cache&&Xd(r,[Vt],o,!0),jl(),u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=zv(n,r,u,o);break e}else if(u!==f){f=qn(Error(s(424)),r),xl(f),r=zv(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(vt=ai(n.firstChild),_n=r,Ke=!0,na=null,bi=!0,o=Tv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(kl(),u===f){r=ls(n,r,o);break e}Xt(n,r,u,o)}r=r.child}return r;case 26:return dh(n,r),n===null?(o=YE(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ke||(o=r.type,n=r.pendingProps,u=Ch(Ae.current).createElement(o),u[kt]=r,u[Rt]=n,Zt(u,o,n),St(u),r.stateNode=u):r.memoizedState=YE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Cs(r),n===null&&Ke&&(u=r.stateNode=HE(r.type,r.pendingProps,Ae.current),_n=r,bi=!0,f=vt,$s(r.type)?(dm=f,vt=ai(u.firstChild)):vt=f),Xt(n,r,r.pendingProps.children,o),dh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Ke&&((f=u=vt)&&(u=SI(u,r.type,r.pendingProps,bi),u!==null?(r.stateNode=u,_n=r,vt=ai(u.firstChild),bi=!1,f=!0):f=!1),f||ia(r)),Cs(r),f=r.type,p=r.pendingProps,E=n!==null?n.memoizedProps:null,u=p.children,um(f,p)?u=null:E!==null&&um(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=lp(n,r,BR,null,null,o),cu._currentValue=f),dh(n,r),Xt(n,r,u,o),r.child;case 6:return n===null&&Ke&&((n=o=vt)&&(o=AI(o,r.pendingProps,bi),o!==null?(r.stateNode=o,_n=r,vt=null,n=!0):n=!1),n||ia(r)),null;case 13:return Bv(n,r,o);case 4:return at(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=fo(r,null,u,o):Xt(n,r,u,o),r.child;case 11:return Mv(n,r,r.type,r.pendingProps,o);case 7:return Xt(n,r,r.pendingProps,o),r.child;case 8:return Xt(n,r,r.pendingProps.children,o),r.child;case 12:return Xt(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Vs(r,r.type,u.value),Xt(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ra(r),f=rn(f),u=u(f),r.flags|=1,Xt(n,r,u,o),r.child;case 14:return kv(n,r,r.type,r.pendingProps,o);case 15:return xv(n,r,r.type,r.pendingProps,o);case 19:return Fv(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=ph(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ts(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return Pv(n,r,o);case 24:return ra(r),u=rn(Vt),n===null?(f=Jd(),f===null&&(f=ot,p=$d(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},tp(r),Vs(r,Vt,f)):((n.lanes&o)!==0&&(np(n,r),Fl(r,null,null,o),jl()),f=n.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Vs(r,Vt,u)):(u=p.cache,Vs(r,Vt,u),u!==f.cache&&Xd(r,[Vt],o,!0))),Xt(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function us(n){n.flags|=4}function Hv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ZE(r)){if(r=Yn.current,r!==null&&((Be&4194048)===Be?Ri!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==Ri))throw zl=ep,Iy;n.flags|=8192}}function mh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?fl():536870912,n.lanes|=r,_o|=r)}function Wl(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function WR(n,r,o){var u=r.pendingProps;switch(Kd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(r),null;case 1:return mt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),rs(Vt),di(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Ml(r)?us(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sy())),mt(r),null;case 26:return o=r.memoizedState,n===null?(us(r),o!==null?(mt(r),Hv(r,o)):(mt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(us(r),mt(r),Hv(r,o)):(mt(r),r.flags&=-16777217):(n.memoizedProps!==u&&us(r),mt(r),r.flags&=-16777217),null;case 27:Fi(r),o=Ae.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&us(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}n=_e.current,Ml(r)?Ey(r):(n=HE(f,u,o),r.stateNode=n,us(r))}return mt(r),null;case 5:if(Fi(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&us(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}if(n=_e.current,Ml(r))Ey(r);else{switch(f=Ch(Ae.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[kt]=r,n[Rt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(Zt(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&us(r)}}return mt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&us(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=Ae.current,Ml(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=_n,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[kt]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||LE(n.nodeValue,o)),n||ia(r)}else n=Ch(n).createTextNode(u),n[kt]=r,r.stateNode=n}return mt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Ml(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[kt]=r}else kl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mt(r),f=!1}else f=Sy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(os(r),r):(os(r),null)}if(os(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),mh(r,r.updateQueue),mt(r),null;case 4:return di(),n===null&&sm(r.stateNode.containerInfo),mt(r),null;case 10:return rs(r.type),mt(r),null;case 19:if(ie(Lt),f=r.memoizedState,f===null)return mt(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)Wl(f,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(p=ch(n),p!==null){for(r.flags|=128,Wl(f,!1),n=p.updateQueue,r.updateQueue=n,mh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)yy(o,n),o=o.sibling;return ee(Lt,Lt.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ln()>yh&&(r.flags|=128,u=!0,Wl(f,!1),r.lanes=4194304)}else{if(!u)if(n=ch(p),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,mh(r,n),Wl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Ke)return mt(r),null}else 2*Ln()-f.renderingStartTime>yh&&o!==536870912&&(r.flags|=128,u=!0,Wl(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(n=f.last,n!==null?n.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ln(),r.sibling=null,n=Lt.current,ee(Lt,u?n&1|2:n&1),r):(mt(r),null);case 22:case 23:return os(r),ap(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(mt(r),r.subtreeFlags&6&&(r.flags|=8192)):mt(r),o=r.updateQueue,o!==null&&mh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&ie(aa),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),rs(Vt),mt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function XR(n,r){switch(Kd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return rs(Vt),di(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Fi(r),null;case 13:if(os(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));kl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ie(Lt),null;case 4:return di(),null;case 10:return rs(r.type),null;case 22:case 23:return os(r),ap(),n!==null&&ie(aa),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return rs(Vt),null;case 25:return null;default:return null}}function Gv(n,r){switch(Kd(r),r.tag){case 3:rs(Vt),di();break;case 26:case 27:case 5:Fi(r);break;case 4:di();break;case 13:os(r);break;case 19:ie(Lt);break;case 10:rs(r.type);break;case 22:case 23:os(r),ap(),n!==null&&ie(aa);break;case 24:rs(Vt)}}function Xl(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){rt(r,r.return,S)}}function qs(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&n)===n){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var C=o,z=S;try{z()}catch(G){rt(f,C,G)}}}u=u.next}while(u!==p)}}catch(G){rt(r,r.return,G)}}function Kv(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{ky(r,o)}catch(u){rt(n,n.return,u)}}}function Yv(n,r,o){o.props=la(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){rt(n,r,u)}}function $l(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){rt(n,r,f)}}function Ii(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){rt(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){rt(n,r,f)}else o.current=null}function Qv(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){rt(n,n.return,f)}}function xp(n,r,o){try{var u=n.stateNode;_I(u,n.type,o,r),u[Rt]=r}catch(f){rt(n,n.return,f)}}function Wv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&$s(n.type)||n.tag===4}function Pp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&$s(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vp(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ih));else if(u!==4&&(u===27&&$s(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(Vp(n,r,o),n=n.sibling;n!==null;)Vp(n,r,o),n=n.sibling}function gh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&$s(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(gh(n,r,o),n=n.sibling;n!==null;)gh(n,r,o),n=n.sibling}function Xv(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Zt(r,u,o),r[kt]=n,r[Rt]=o}catch(p){rt(n,n.return,p)}}var cs=!1,wt=!1,Lp=!1,$v=typeof WeakSet=="function"?WeakSet:Set,qt=null;function $R(n,r){if(n=n.containerInfo,om=xh,n=ly(n),Pd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,S=-1,C=-1,z=0,G=0,X=n,j=null;t:for(;;){for(var F;X!==o||f!==0&&X.nodeType!==3||(S=E+f),X!==p||u!==0&&X.nodeType!==3||(C=E+u),X.nodeType===3&&(E+=X.nodeValue.length),(F=X.firstChild)!==null;)j=X,X=F;for(;;){if(X===n)break t;if(j===o&&++z===f&&(S=E),j===p&&++G===u&&(C=E),(F=X.nextSibling)!==null)break;X=j,j=X.parentNode}X=F}o=S===-1||C===-1?null:{start:S,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(lm={focusedElem:n,selectionRange:o},xh=!1,qt=r;qt!==null;)if(r=qt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,qt=n;else for(;qt!==null;){switch(r=qt,p=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Se=la(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Se,p),u.__reactInternalSnapshotBeforeUpdate=n}catch(ye){rt(o,o.return,ye)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)hm(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":hm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,qt=n;break}qt=r.return}}function Zv(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Hs(n,o),u&4&&Xl(5,o);break;case 1:if(Hs(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){rt(o,o.return,E)}else{var f=la(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){rt(o,o.return,E)}}u&64&&Kv(o),u&512&&$l(o,o.return);break;case 3:if(Hs(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{ky(n,r)}catch(E){rt(o,o.return,E)}}break;case 27:r===null&&u&4&&Xv(o);case 26:case 5:Hs(n,o),r===null&&u&4&&Qv(o),u&512&&$l(o,o.return);break;case 12:Hs(n,o);break;case 13:Hs(n,o),u&4&&tE(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=aI.bind(null,o),wI(n,o))));break;case 22:if(u=o.memoizedState!==null||cs,!u){r=r!==null&&r.memoizedState!==null||wt,f=cs;var p=wt;cs=u,(wt=r)&&!p?Gs(n,o,(o.subtreeFlags&8772)!==0):Hs(n,o),cs=f,wt=p}break;case 30:break;default:Hs(n,o)}}function Jv(n){var r=n.alternate;r!==null&&(n.alternate=null,Jv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Ms(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var pt=null,vn=!1;function hs(n,r,o){for(o=o.child;o!==null;)eE(n,r,o),o=o.sibling}function eE(n,r,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(yt,o)}catch{}switch(o.tag){case 26:wt||Ii(o,r),hs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:wt||Ii(o,r);var u=pt,f=vn;$s(o.type)&&(pt=o.stateNode,vn=!1),hs(n,r,o),au(o.stateNode),pt=u,vn=f;break;case 5:wt||Ii(o,r);case 6:if(u=pt,f=vn,pt=null,hs(n,r,o),pt=u,vn=f,pt!==null)if(vn)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(o.stateNode)}catch(p){rt(o,r,p)}else try{pt.removeChild(o.stateNode)}catch(p){rt(o,r,p)}break;case 18:pt!==null&&(vn?(n=pt,FE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),pu(n)):FE(pt,o.stateNode));break;case 4:u=pt,f=vn,pt=o.stateNode.containerInfo,vn=!0,hs(n,r,o),pt=u,vn=f;break;case 0:case 11:case 14:case 15:wt||qs(2,o,r),wt||qs(4,o,r),hs(n,r,o);break;case 1:wt||(Ii(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Yv(o,r,u)),hs(n,r,o);break;case 21:hs(n,r,o);break;case 22:wt=(u=wt)||o.memoizedState!==null,hs(n,r,o),wt=u;break;default:hs(n,r,o)}}function tE(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{pu(n)}catch(o){rt(r,r.return,o)}}function ZR(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new $v),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new $v),r;default:throw Error(s(435,n.tag))}}function Up(n,r){var o=ZR(n);r.forEach(function(u){var f=oI.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function Nn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=n,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if($s(S.type)){pt=S.stateNode,vn=!1;break e}break;case 5:pt=S.stateNode,vn=!1;break e;case 3:case 4:pt=S.stateNode.containerInfo,vn=!0;break e}S=S.return}if(pt===null)throw Error(s(160));eE(p,E,f),pt=null,vn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)nE(r,n),r=r.sibling}var ri=null;function nE(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Nn(r,n),Dn(n),u&4&&(qs(3,n,n.return),Xl(3,n),qs(5,n,n.return));break;case 1:Nn(r,n),Dn(n),u&512&&(wt||o===null||Ii(o,o.return)),u&64&&cs&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ri;if(Nn(r,n),Dn(n),u&512&&(wt||o===null||Ii(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Lr]||p[kt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),Zt(p,u,o),p[kt]=n,St(p),u=p;break e;case"link":var E=XE("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(p=E[S],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}p=f.createElement(u),Zt(p,u,o),f.head.appendChild(p);break;case"meta":if(E=XE("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(p=E[S],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}p=f.createElement(u),Zt(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[kt]=n,St(p),u=p}n.stateNode=u}else $E(f,n.type,n.stateNode);else n.stateNode=WE(f,u,n.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?$E(f,n.type,n.stateNode):WE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&xp(n,n.memoizedProps,o.memoizedProps)}break;case 27:Nn(r,n),Dn(n),u&512&&(wt||o===null||Ii(o,o.return)),o!==null&&u&4&&xp(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Nn(r,n),Dn(n),u&512&&(wt||o===null||Ii(o,o.return)),n.flags&32){f=n.stateNode;try{zn(f,"")}catch(F){rt(n,n.return,F)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,xp(n,f,o!==null?o.memoizedProps:f)),u&1024&&(Lp=!0);break;case 6:if(Nn(r,n),Dn(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(F){rt(n,n.return,F)}}break;case 3:if(Oh=null,f=ri,ri=Nh(r.containerInfo),Nn(r,n),ri=f,Dn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{pu(r.containerInfo)}catch(F){rt(n,n.return,F)}Lp&&(Lp=!1,iE(n));break;case 4:u=ri,ri=Nh(n.stateNode.containerInfo),Nn(r,n),Dn(n),ri=u;break;case 12:Nn(r,n),Dn(n);break;case 13:Nn(r,n),Dn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Hp=Ln()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Up(n,u)));break;case 22:f=n.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,z=cs,G=wt;if(cs=z||f,wt=G||C,Nn(r,n),wt=G,cs=z,Dn(n),u&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||cs||wt||ua(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(p=C.stateNode,f)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=C.stateNode;var X=C.memoizedProps.style,j=X!=null&&X.hasOwnProperty("display")?X.display:null;S.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(F){rt(C,C.return,F)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(F){rt(C,C.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Up(n,o))));break;case 19:Nn(r,n),Dn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Up(n,u)));break;case 30:break;case 21:break;default:Nn(r,n),Dn(n)}}function Dn(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(Wv(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,p=Pp(n);gh(n,p,f);break;case 5:var E=o.stateNode;o.flags&32&&(zn(E,""),o.flags&=-33);var S=Pp(n);gh(n,S,E);break;case 3:case 4:var C=o.stateNode.containerInfo,z=Pp(n);Vp(n,z,C);break;default:throw Error(s(161))}}catch(G){rt(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function iE(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;iE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Hs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Zv(n,r.alternate,r),r=r.sibling}function ua(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:qs(4,r,r.return),ua(r);break;case 1:Ii(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Yv(r,r.return,o),ua(r);break;case 27:au(r.stateNode);case 26:case 5:Ii(r,r.return),ua(r);break;case 22:r.memoizedState===null&&ua(r);break;case 30:ua(r);break;default:ua(r)}n=n.sibling}}function Gs(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,p=r,E=p.flags;switch(p.tag){case 0:case 11:case 15:Gs(f,p,o),Xl(4,p);break;case 1:if(Gs(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){rt(u,u.return,z)}if(u=p,f=u.updateQueue,f!==null){var S=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)My(C[f],S)}catch(z){rt(u,u.return,z)}}o&&E&64&&Kv(p),$l(p,p.return);break;case 27:Xv(p);case 26:case 5:Gs(f,p,o),o&&u===null&&E&4&&Qv(p),$l(p,p.return);break;case 12:Gs(f,p,o);break;case 13:Gs(f,p,o),o&&E&4&&tE(f,p);break;case 22:p.memoizedState===null&&Gs(f,p,o),$l(p,p.return);break;case 30:break;default:Gs(f,p,o)}r=r.sibling}}function zp(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Vl(o))}function Bp(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Vl(n))}function Ci(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)sE(n,r,o,u),r=r.sibling}function sE(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ci(n,r,o,u),f&2048&&Xl(9,r);break;case 1:Ci(n,r,o,u);break;case 3:Ci(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Vl(n)));break;case 12:if(f&2048){Ci(n,r,o,u),n=r.stateNode;try{var p=r.memoizedProps,E=p.id,S=p.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){rt(r,r.return,C)}}else Ci(n,r,o,u);break;case 13:Ci(n,r,o,u);break;case 23:break;case 22:p=r.stateNode,E=r.alternate,r.memoizedState!==null?p._visibility&2?Ci(n,r,o,u):Zl(n,r):p._visibility&2?Ci(n,r,o,u):(p._visibility|=2,po(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&zp(E,r);break;case 24:Ci(n,r,o,u),f&2048&&Bp(r.alternate,r);break;default:Ci(n,r,o,u)}}function po(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=n,E=r,S=o,C=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:po(p,E,S,C,f),Xl(8,E);break;case 23:break;case 22:var G=E.stateNode;E.memoizedState!==null?G._visibility&2?po(p,E,S,C,f):Zl(p,E):(G._visibility|=2,po(p,E,S,C,f)),f&&z&2048&&zp(E.alternate,E);break;case 24:po(p,E,S,C,f),f&&z&2048&&Bp(E.alternate,E);break;default:po(p,E,S,C,f)}r=r.sibling}}function Zl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:Zl(o,u),f&2048&&zp(u.alternate,u);break;case 24:Zl(o,u),f&2048&&Bp(u.alternate,u);break;default:Zl(o,u)}r=r.sibling}}var Jl=8192;function mo(n){if(n.subtreeFlags&Jl)for(n=n.child;n!==null;)rE(n),n=n.sibling}function rE(n){switch(n.tag){case 26:mo(n),n.flags&Jl&&n.memoizedState!==null&&LI(ri,n.memoizedState,n.memoizedProps);break;case 5:mo(n);break;case 3:case 4:var r=ri;ri=Nh(n.stateNode.containerInfo),mo(n),ri=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Jl,Jl=16777216,mo(n),Jl=r):mo(n));break;default:mo(n)}}function aE(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function eu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];qt=u,lE(u,n)}aE(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)oE(n),n=n.sibling}function oE(n){switch(n.tag){case 0:case 11:case 15:eu(n),n.flags&2048&&qs(9,n,n.return);break;case 3:eu(n);break;case 12:eu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,_h(n)):eu(n);break;default:eu(n)}}function _h(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];qt=u,lE(u,n)}aE(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:qs(8,r,r.return),_h(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,_h(r));break;default:_h(r)}n=n.sibling}}function lE(n,r){for(;qt!==null;){var o=qt;switch(o.tag){case 0:case 11:case 15:qs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Vl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,qt=u;else e:for(o=n;qt!==null;){u=qt;var f=u.sibling,p=u.return;if(Jv(u),u===o){qt=null;break e}if(f!==null){f.return=p,qt=f;break e}qt=p}}}var JR={getCacheForType:function(n){var r=rn(Vt),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},eI=typeof WeakMap=="function"?WeakMap:Map,$e=0,ot=null,Me=null,Be=0,Ze=0,On=null,Ks=!1,go=!1,jp=!1,fs=0,Et=0,Ys=0,ca=0,Fp=0,Qn=0,_o=0,tu=null,En=null,qp=!1,Hp=0,yh=1/0,vh=null,Qs=null,$t=0,Ws=null,yo=null,vo=0,Gp=0,Kp=null,uE=null,nu=0,Yp=null;function Mn(){if(($e&2)!==0&&Be!==0)return Be&-Be;if(H.T!==null){var n=ro;return n!==0?n:em()}return Ds()}function cE(){Qn===0&&(Qn=(Be&536870912)===0||Ke?hl():536870912);var n=Yn.current;return n!==null&&(n.flags|=32),Qn}function kn(n,r,o){(n===ot&&(Ze===2||Ze===9)||n.cancelPendingCommit!==null)&&(Eo(n,0),Xs(n,Be,Qn,!1)),Hi(n,o),(($e&2)===0||n!==ot)&&(n===ot&&(($e&2)===0&&(ca|=o),Et===4&&Xs(n,Be,Qn,!1)),Ni(n))}function hE(n,r,o){if(($e&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||Vr(n,r),f=u?iI(n,r):Xp(n,r,!0),p=u;do{if(f===0){go&&!u&&Xs(n,r,0,!1);break}else{if(o=n.current.alternate,p&&!tI(o)){f=Xp(n,r,!1),p=!1;continue}if(f===2){if(p=r,n.errorRecoveryDisabledLanes&p)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=n;f=tu;var C=S.current.memoizedState.isDehydrated;if(C&&(Eo(S,E).flags|=256),E=Xp(S,E,!1),E!==2){if(jp&&!C){S.errorRecoveryDisabledLanes|=p,ca|=p,f=4;break e}p=En,En=f,p!==null&&(En===null?En=p:En.push.apply(En,p))}f=E}if(p=!1,f!==2)continue}}if(f===1){Eo(n,0),Xs(n,r,0,!0);break}e:{switch(u=n,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Xs(u,r,Qn,!Ks);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Hp+300-Ln(),10<f)){if(Xs(u,r,Qn,!Ks),Va(u,0,!0)!==0)break e;u.timeoutHandle=BE(fE.bind(null,u,o,En,vh,qp,r,Qn,ca,_o,Ks,p,2,-0,0),f);break e}fE(u,o,En,vh,qp,r,Qn,ca,_o,Ks,p,0,-0,0)}}break}while(!0);Ni(n)}function fE(n,r,o,u,f,p,E,S,C,z,G,X,j,F){if(n.timeoutHandle=-1,X=r.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(uu={stylesheets:null,count:0,unsuspend:VI},rE(r),X=UI(),X!==null)){n.cancelPendingCommit=X(vE.bind(null,n,r,p,o,u,f,E,S,C,G,1,j,F)),Xs(n,p,E,!z);return}vE(n,r,p,o,u,f,E,S,C)}function tI(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!In(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xs(n,r,o,u){r&=~Fp,r&=~ca,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var p=31-sn(f),E=1<<p;u[p]=-1,f&=~E}o!==0&&pi(n,o,r)}function Eh(){return($e&6)===0?(iu(0),!1):!0}function Qp(){if(Me!==null){if(Ze===0)var n=Me.return;else n=Me,ss=sa=null,hp(n),ho=null,Yl=0,n=Me;for(;n!==null;)Gv(n.alternate,n),n=n.return;Me=null}}function Eo(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,vI(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Qp(),ot=n,Me=o=ts(n.current,null),Be=r,Ze=0,On=null,Ks=!1,go=Vr(n,r),jp=!1,_o=Qn=Fp=ca=Ys=Et=0,En=tu=null,qp=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-sn(u),p=1<<f;r|=n[f],u&=~p}return fs=r,Fc(),o}function dE(n,r){Ie=null,H.H=oh,r===Ul||r===$c?(r=Dy(),Ze=3):r===Iy?(r=Dy(),Ze=4):Ze=r===Ov?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,On=r,Me===null&&(Et=1,fh(n,qn(r,n.current)))}function pE(){var n=H.H;return H.H=oh,n===null?oh:n}function mE(){var n=H.A;return H.A=JR,n}function Wp(){Et=4,Ks||(Be&4194048)!==Be&&Yn.current!==null||(go=!0),(Ys&134217727)===0&&(ca&134217727)===0||ot===null||Xs(ot,Be,Qn,!1)}function Xp(n,r,o){var u=$e;$e|=2;var f=pE(),p=mE();(ot!==n||Be!==r)&&(vh=null,Eo(n,r)),r=!1;var E=Et;e:do try{if(Ze!==0&&Me!==null){var S=Me,C=On;switch(Ze){case 8:Qp(),E=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(r=!0);var z=Ze;if(Ze=0,On=null,To(n,S,C,z),o&&go){E=0;break e}break;default:z=Ze,Ze=0,On=null,To(n,S,C,z)}}nI(),E=Et;break}catch(G){dE(n,G)}while(!0);return r&&n.shellSuspendCounter++,ss=sa=null,$e=u,H.H=f,H.A=p,Me===null&&(ot=null,Be=0,Fc()),E}function nI(){for(;Me!==null;)gE(Me)}function iI(n,r){var o=$e;$e|=2;var u=pE(),f=mE();ot!==n||Be!==r?(vh=null,yh=Ln()+500,Eo(n,r)):go=Vr(n,r);e:do try{if(Ze!==0&&Me!==null){r=Me;var p=On;t:switch(Ze){case 1:Ze=0,On=null,To(n,r,p,1);break;case 2:case 9:if(Cy(p)){Ze=0,On=null,_E(r);break}r=function(){Ze!==2&&Ze!==9||ot!==n||(Ze=7),Ni(n)},p.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:Cy(p)?(Ze=0,On=null,_E(r)):(Ze=0,On=null,To(n,r,p,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var S=Me;if(!E||ZE(E)){Ze=0,On=null;var C=S.sibling;if(C!==null)Me=C;else{var z=S.return;z!==null?(Me=z,Th(z)):Me=null}break t}}Ze=0,On=null,To(n,r,p,5);break;case 6:Ze=0,On=null,To(n,r,p,6);break;case 8:Qp(),Et=6;break e;default:throw Error(s(462))}}sI();break}catch(G){dE(n,G)}while(!0);return ss=sa=null,H.H=u,H.A=f,$e=o,Me!==null?0:(ot=null,Be=0,Fc(),Et)}function sI(){for(;Me!==null&&!ol();)gE(Me)}function gE(n){var r=qv(n.alternate,n,fs);n.memoizedProps=n.pendingProps,r===null?Th(n):Me=r}function _E(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=Lv(o,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=Lv(o,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:hp(r);default:Gv(o,r),r=Me=yy(r,fs),r=qv(o,r,fs)}n.memoizedProps=n.pendingProps,r===null?Th(n):Me=r}function To(n,r,o,u){ss=sa=null,hp(r),ho=null,Yl=0;var f=r.return;try{if(YR(n,f,r,o,Be)){Et=1,fh(n,qn(o,n.current)),Me=null;return}}catch(p){if(f!==null)throw Me=f,p;Et=1,fh(n,qn(o,n.current)),Me=null;return}r.flags&32768?(Ke||u===1?n=!0:go||(Be&536870912)!==0?n=!1:(Ks=n=!0,(u===2||u===9||u===3||u===6)&&(u=Yn.current,u!==null&&u.tag===13&&(u.flags|=16384))),yE(r,n)):Th(r)}function Th(n){var r=n;do{if((r.flags&32768)!==0){yE(r,Ks);return}n=r.return;var o=WR(r.alternate,r,fs);if(o!==null){Me=o;return}if(r=r.sibling,r!==null){Me=r;return}Me=r=n}while(r!==null);Et===0&&(Et=5)}function yE(n,r){do{var o=XR(n.alternate,n);if(o!==null){o.flags&=32767,Me=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Me=n;return}Me=n=o}while(n!==null);Et=6,Me=null}function vE(n,r,o,u,f,p,E,S,C){n.cancelPendingCommit=null;do Sh();while($t!==0);if(($e&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(p=r.lanes|r.childLanes,p|=Bd,dl(n,o,p,E,S,C),n===ot&&(Me=ot=null,Be=0),yo=r,Ws=n,vo=o,Gp=p,Kp=f,uE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,lI(Mr,function(){return wE(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=H.T,H.T=null,f=te.p,te.p=2,E=$e,$e|=4;try{$R(n,r,o)}finally{$e=E,te.p=f,H.T=u}}$t=1,EE(),TE(),SE()}}function EE(){if($t===1){$t=0;var n=Ws,r=yo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=H.T,H.T=null;var u=te.p;te.p=2;var f=$e;$e|=4;try{nE(r,n);var p=lm,E=ly(n.containerInfo),S=p.focusedElem,C=p.selectionRange;if(E!==S&&S&&S.ownerDocument&&oy(S.ownerDocument.documentElement,S)){if(C!==null&&Pd(S)){var z=C.start,G=C.end;if(G===void 0&&(G=z),"selectionStart"in S)S.selectionStart=z,S.selectionEnd=Math.min(G,S.value.length);else{var X=S.ownerDocument||document,j=X&&X.defaultView||window;if(j.getSelection){var F=j.getSelection(),Se=S.textContent.length,ye=Math.min(C.start,Se),nt=C.end===void 0?ye:Math.min(C.end,Se);!F.extend&&ye>nt&&(E=nt,nt=ye,ye=E);var V=ay(S,ye),x=ay(S,nt);if(V&&x&&(F.rangeCount!==1||F.anchorNode!==V.node||F.anchorOffset!==V.offset||F.focusNode!==x.node||F.focusOffset!==x.offset)){var U=X.createRange();U.setStart(V.node,V.offset),F.removeAllRanges(),ye>nt?(F.addRange(U),F.extend(x.node,x.offset)):(U.setEnd(x.node,x.offset),F.addRange(U))}}}}for(X=[],F=S;F=F.parentNode;)F.nodeType===1&&X.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<X.length;S++){var Y=X[S];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}xh=!!om,lm=om=null}finally{$e=f,te.p=u,H.T=o}}n.current=r,$t=2}}function TE(){if($t===2){$t=0;var n=Ws,r=yo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=H.T,H.T=null;var u=te.p;te.p=2;var f=$e;$e|=4;try{Zv(n,r.alternate,r)}finally{$e=f,te.p=u,H.T=o}}$t=3}}function SE(){if($t===4||$t===3){$t=0,_c();var n=Ws,r=yo,o=vo,u=uE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?$t=5:($t=0,yo=Ws=null,AE(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Qs=null),La(o),r=r.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(yt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=H.T,f=te.p,te.p=2,H.T=null;try{for(var p=n.onRecoverableError,E=0;E<u.length;E++){var S=u[E];p(S.value,{componentStack:S.stack})}}finally{H.T=r,te.p=f}}(vo&3)!==0&&Sh(),Ni(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Yp?nu++:(nu=0,Yp=n):nu=0,iu(0)}}function AE(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Vl(r)))}function Sh(n){return EE(),TE(),SE(),wE()}function wE(){if($t!==5)return!1;var n=Ws,r=Gp;Gp=0;var o=La(vo),u=H.T,f=te.p;try{te.p=32>o?32:o,H.T=null,o=Kp,Kp=null;var p=Ws,E=vo;if($t=0,yo=Ws=null,vo=0,($e&6)!==0)throw Error(s(331));var S=$e;if($e|=4,oE(p.current),sE(p,p.current,E,o),$e=S,iu(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(yt,p)}catch{}return!0}finally{te.p=f,H.T=u,AE(n,r)}}function bE(n,r,o){r=qn(o,r),r=bp(n.stateNode,r,2),n=zs(n,r,2),n!==null&&(Hi(n,2),Ni(n))}function rt(n,r,o){if(n.tag===3)bE(n,n,o);else for(;r!==null;){if(r.tag===3){bE(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Qs===null||!Qs.has(u))){n=qn(o,n),o=Nv(2),u=zs(r,o,2),u!==null&&(Dv(o,u,r,n),Hi(u,2),Ni(u));break}}r=r.return}}function $p(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new eI;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(jp=!0,f.add(o),n=rI.bind(null,n,r,o),r.then(n,n))}function rI(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ot===n&&(Be&o)===o&&(Et===4||Et===3&&(Be&62914560)===Be&&300>Ln()-Hp?($e&2)===0&&Eo(n,0):Fp|=o,_o===Be&&(_o=0)),Ni(n)}function RE(n,r){r===0&&(r=fl()),n=to(n,r),n!==null&&(Hi(n,r),Ni(n))}function aI(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),RE(n,o)}function oI(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),RE(n,o)}function lI(n,r){return Dr(n,r)}var Ah=null,So=null,Zp=!1,wh=!1,Jp=!1,ha=0;function Ni(n){n!==So&&n.next===null&&(So===null?Ah=So=n:So=So.next=n),wh=!0,Zp||(Zp=!0,cI())}function iu(n,r){if(!Jp&&wh){Jp=!0;do for(var o=!1,u=Ah;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var E=u.suspendedLanes,S=u.pingedLanes;p=(1<<31-sn(42|n)+1)-1,p&=f&~(E&~S),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,DE(u,p))}else p=Be,p=Va(u,u===ot?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||Vr(u,p)||(o=!0,DE(u,p));u=u.next}while(o);Jp=!1}}function uI(){IE()}function IE(){wh=Zp=!1;var n=0;ha!==0&&(yI()&&(n=ha),ha=0);for(var r=Ln(),o=null,u=Ah;u!==null;){var f=u.next,p=CE(u,r);p===0?(u.next=null,o===null?Ah=f:o.next=f,f===null&&(So=o)):(o=u,(n!==0||(p&3)!==0)&&(wh=!0)),u=f}iu(n)}function CE(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var E=31-sn(p),S=1<<E,C=f[E];C===-1?((S&o)===0||(S&u)!==0)&&(f[E]=cl(S,r)):C<=r&&(n.expiredLanes|=S),p&=~S}if(r=ot,o=Be,o=Va(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(Ze===2||Ze===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Or(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Vr(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&Or(u),La(o)){case 2:case 8:o=xa;break;case 32:o=Mr;break;case 268435456:o=Pa;break;default:o=Mr}return u=NE.bind(null,n),o=Dr(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&Or(u),n.callbackPriority=2,n.callbackNode=null,2}function NE(n,r){if($t!==0&&$t!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Sh()&&n.callbackNode!==o)return null;var u=Be;return u=Va(n,n===ot?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(hE(n,u,r),CE(n,Ln()),n.callbackNode!=null&&n.callbackNode===o?NE.bind(null,n):null)}function DE(n,r){if(Sh())return null;hE(n,r,!0)}function cI(){EI(function(){($e&6)!==0?Dr(ll,uI):IE()})}function em(){return ha===0&&(ha=hl()),ha}function OE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:qa(""+n)}function ME(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function hI(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=OE((f[Rt]||null).action),E=u.submitter;E&&(r=(r=E[Rt]||null)?OE(r.formAction):E.getAttribute("formAction"),r!==null&&(p=r,E=null));var S=new Ha("action","action",null,u,f);n.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ha!==0){var C=E?ME(f,E):new FormData(f);Ep(o,{pending:!0,data:C,method:f.method,action:p},null,C)}}else typeof p=="function"&&(S.preventDefault(),C=E?ME(f,E):new FormData(f),Ep(o,{pending:!0,data:C,method:f.method,action:p},p,C))},currentTarget:f}]})}}for(var tm=0;tm<zd.length;tm++){var nm=zd[tm],fI=nm.toLowerCase(),dI=nm[0].toUpperCase()+nm.slice(1);si(fI,"on"+dI)}si(hy,"onAnimationEnd"),si(fy,"onAnimationIteration"),si(dy,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(DR,"onTransitionRun"),si(OR,"onTransitionStart"),si(MR,"onTransitionCancel"),si(py,"onTransitionEnd"),Ki("onMouseEnter",["mouseout","mouseover"]),Ki("onMouseLeave",["mouseout","mouseover"]),Ki("onPointerEnter",["pointerout","pointerover"]),Ki("onPointerLeave",["pointerout","pointerover"]),ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function kE(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],C=S.instance,z=S.currentTarget;if(S=S.listener,C!==p&&f.isPropagationStopped())break e;p=S,f.currentTarget=z;try{p(f)}catch(G){hh(G)}f.currentTarget=null,p=C}else for(E=0;E<u.length;E++){if(S=u[E],C=S.instance,z=S.currentTarget,S=S.listener,C!==p&&f.isPropagationStopped())break e;p=S,f.currentTarget=z;try{p(f)}catch(G){hh(G)}f.currentTarget=null,p=C}}}}function ke(n,r){var o=r[ml];o===void 0&&(o=r[ml]=new Set);var u=n+"__bubble";o.has(u)||(xE(r,n,2,!1),o.add(u))}function im(n,r,o){var u=0;r&&(u|=4),xE(o,n,u,r)}var bh="_reactListening"+Math.random().toString(36).slice(2);function sm(n){if(!n[bh]){n[bh]=!0,gl.forEach(function(o){o!=="selectionchange"&&(pI.has(o)||im(o,!1,n),im(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[bh]||(r[bh]=!0,im("selectionchange",!1,r))}}function xE(n,r,o,u){switch(sT(r)){case 2:var f=jI;break;case 8:f=FI;break;default:f=ym}o=f.bind(null,r,o,n),f=void 0,!jn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function rm(n,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=Gi(S),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=p=E;continue e}S=S.parentNode}}u=u.return}Ic(function(){var z=p,G=Bn(o),X=[];e:{var j=my.get(n);if(j!==void 0){var F=Ha,Se=n;switch(n){case"keypress":if(Ei(o)===0)break e;case"keydown":case"keyup":F=Xa;break;case"focusin":Se="focus",F=Ya;break;case"focusout":Se="blur",F=Ya;break;case"beforeblur":case"afterblur":F=Ya;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Pc;break;case hy:case fy:case dy:F=Qa;break;case py:F=Lc;break;case"scroll":case"scrollend":F=Cc;break;case"wheel":F=$a;break;case"copy":case"cut":case"paste":F=Wa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Cl;break;case"toggle":case"beforetoggle":F=zc}var ye=(r&4)!==0,nt=!ye&&(n==="scroll"||n==="scrollend"),V=ye?j!==null?j+"Capture":null:j;ye=[];for(var x=z,U;x!==null;){var Y=x;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||V===null||(Y=Hr(x,V),Y!=null&&ye.push(ru(x,Y,U))),nt)break;x=x.return}0<ye.length&&(j=new F(j,Se,null,o,G),X.push({event:j,listeners:ye}))}}if((r&7)===0){e:{if(j=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",j&&o!==Wi&&(Se=o.relatedTarget||o.fromElement)&&(Gi(Se)||Se[Un]))break e;if((F||j)&&(j=G.window===G?G:(j=G.ownerDocument)?j.defaultView||j.parentWindow:window,F?(Se=o.relatedTarget||o.toElement,F=z,Se=Se?Gi(Se):null,Se!==null&&(nt=l(Se),ye=Se.tag,Se!==nt||ye!==5&&ye!==27&&ye!==6)&&(Se=null)):(F=null,Se=z),F!==Se)){if(ye=Fn,Y="onMouseLeave",V="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ye=Cl,Y="onPointerLeave",V="onPointerEnter",x="pointer"),nt=F==null?j:gi(F),U=Se==null?j:gi(Se),j=new ye(Y,x+"leave",F,o,G),j.target=nt,j.relatedTarget=U,Y=null,Gi(G)===z&&(ye=new ye(V,x+"enter",Se,o,G),ye.target=U,ye.relatedTarget=nt,Y=ye),nt=Y,F&&Se)t:{for(ye=F,V=Se,x=0,U=ye;U;U=Ao(U))x++;for(U=0,Y=V;Y;Y=Ao(Y))U++;for(;0<x-U;)ye=Ao(ye),x--;for(;0<U-x;)V=Ao(V),U--;for(;x--;){if(ye===V||V!==null&&ye===V.alternate)break t;ye=Ao(ye),V=Ao(V)}ye=null}else ye=null;F!==null&&PE(X,j,F,ye,!1),Se!==null&&nt!==null&&PE(X,nt,Se,ye,!0)}}e:{if(j=z?gi(z):window,F=j.nodeName&&j.nodeName.toLowerCase(),F==="select"||F==="input"&&j.type==="file")var le=ey;else if(Pt(j))if(ty)le=IR;else{le=bR;var Oe=wR}else F=j.nodeName,!F||F.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?z&&Tl(z.elementType)&&(le=ey):le=RR;if(le&&(le=le(n,z))){es(X,le,o,G);break e}Oe&&Oe(n,j,z),n==="focusout"&&z&&j.type==="number"&&z.memoizedProps.value!=null&&xs(j,"number",j.value)}switch(Oe=z?gi(z):window,n){case"focusin":(Pt(Oe)||Oe.contentEditable==="true")&&(Za=Oe,Vd=z,Ol=null);break;case"focusout":Ol=Vd=Za=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,uy(X,o,G);break;case"selectionchange":if(NR)break;case"keydown":case"keyup":uy(X,o,G)}var de;if(Ai)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ue?q(n,o)&&(ve="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(y&&o.locale!=="ko"&&(Ue||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ue&&(de=Al()):(vi=G,Ps="value"in vi?vi.value:vi.textContent,Ue=!0)),Oe=Rh(z,ve),0<Oe.length&&(ve=new Rl(ve,n,null,o,G),X.push({event:ve,listeners:Oe}),de?ve.data=de:(de=ne(o),de!==null&&(ve.data=de)))),(de=_?xt(n,o):ze(n,o))&&(ve=Rh(z,"onBeforeInput"),0<ve.length&&(Oe=new Rl("onBeforeInput","beforeinput",null,o,G),X.push({event:Oe,listeners:ve}),Oe.data=de)),hI(X,n,z,o,G)}kE(X,r)})}function ru(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Rh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Hr(n,o),f!=null&&u.unshift(ru(n,f,p)),f=Hr(n,r),f!=null&&u.push(ru(n,f,p))),n.tag===3)return u;n=n.return}return[]}function Ao(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function PE(n,r,o,u,f){for(var p=r._reactName,E=[];o!==null&&o!==u;){var S=o,C=S.alternate,z=S.stateNode;if(S=S.tag,C!==null&&C===u)break;S!==5&&S!==26&&S!==27||z===null||(C=z,f?(z=Hr(o,p),z!=null&&E.unshift(ru(o,z,C))):f||(z=Hr(o,p),z!=null&&E.push(ru(o,z,C)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var mI=/\r\n?/g,gI=/\u0000|\uFFFD/g;function VE(n){return(typeof n=="string"?n:""+n).replace(mI,`
`).replace(gI,"")}function LE(n,r){return r=VE(r),VE(n)===r}function Ih(){}function tt(n,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||zn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&zn(n,""+u);break;case"className":_i(n,"class",u);break;case"tabIndex":_i(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":_i(n,o,u);break;case"style":El(n,u,p);break;case"data":if(r!=="object"){_i(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=qa(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&tt(n,r,"name",f.name,f,null),tt(n,r,"formEncType",f.formEncType,f,null),tt(n,r,"formMethod",f.formMethod,f,null),tt(n,r,"formTarget",f.formTarget,f,null)):(tt(n,r,"encType",f.encType,f,null),tt(n,r,"method",f.method,f,null),tt(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=qa(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ih);break;case"onScroll":u!=null&&ke("scroll",n);break;case"onScrollEnd":u!=null&&ke("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=qa(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":ke("beforetoggle",n),ke("toggle",n),ks(n,"popover",u);break;case"xlinkActuate":Qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Qt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Qt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Qt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Qt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ks(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Nd.get(o)||o,ks(n,o,u))}}function am(n,r,o,u,f,p){switch(o){case"style":El(n,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?zn(n,u):(typeof u=="number"||typeof u=="bigint")&&zn(n,""+u);break;case"onScroll":u!=null&&ke("scroll",n);break;case"onScrollEnd":u!=null&&ke("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ih);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ua.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=n[Rt]||null,p=p!=null?p[o]:null,typeof p=="function"&&n.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):ks(n,o,u)}}}function Zt(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",n),ke("load",n);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(n,r,p,E,o,null)}}f&&tt(n,r,"srcSet",o.srcSet,o,null),u&&tt(n,r,"src",o.src,o,null);return;case"input":ke("invalid",n);var S=p=E=f=null,C=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var G=o[u];if(G!=null)switch(u){case"name":f=G;break;case"type":E=G;break;case"checked":C=G;break;case"defaultChecked":z=G;break;case"value":p=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:tt(n,r,u,G,o,null)}}jr(n,p,S,C,z,E,f,!1),Fa(n);return;case"select":ke("invalid",n),u=E=p=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":p=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:tt(n,r,f,S,o,null)}r=p,o=E,n.multiple=!!u,r!=null?Qi(n,!!u,r,!1):o!=null&&Qi(n,!!u,o,!0);return;case"textarea":ke("invalid",n),p=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":p=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:tt(n,r,E,S,o,null)}Fr(n,u,f,p),Fa(n);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(n,r,C,u,o,null)}return;case"dialog":ke("beforetoggle",n),ke("toggle",n),ke("cancel",n),ke("close",n);break;case"iframe":case"object":ke("load",n);break;case"video":case"audio":for(u=0;u<su.length;u++)ke(su[u],n);break;case"image":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"embed":case"source":case"link":ke("error",n),ke("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(n,r,z,u,o,null)}return;default:if(Tl(r)){for(G in o)o.hasOwnProperty(G)&&(u=o[G],u!==void 0&&am(n,r,G,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&tt(n,r,S,u,o,null))}function _I(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,E=null,S=null,C=null,z=null,G=null;for(F in o){var X=o[F];if(o.hasOwnProperty(F)&&X!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=X;default:u.hasOwnProperty(F)||tt(n,r,F,null,u,X)}}for(var j in u){var F=u[j];if(X=o[j],u.hasOwnProperty(j)&&(F!=null||X!=null))switch(j){case"type":p=F;break;case"name":f=F;break;case"checked":z=F;break;case"defaultChecked":G=F;break;case"value":E=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==X&&tt(n,r,j,F,u,X)}}Rn(n,E,S,C,z,G,p,f);return;case"select":F=E=S=j=null;for(p in o)if(C=o[p],o.hasOwnProperty(p)&&C!=null)switch(p){case"value":break;case"multiple":F=C;default:u.hasOwnProperty(p)||tt(n,r,p,null,u,C)}for(f in u)if(p=u[f],C=o[f],u.hasOwnProperty(f)&&(p!=null||C!=null))switch(f){case"value":j=p;break;case"defaultValue":S=p;break;case"multiple":E=p;default:p!==C&&tt(n,r,f,p,u,C)}r=S,o=E,u=F,j!=null?Qi(n,!!o,j,!1):!!u!=!!o&&(r!=null?Qi(n,!!o,r,!0):Qi(n,!!o,o?[]:"",!1));return;case"textarea":F=j=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:tt(n,r,S,null,u,f)}for(E in u)if(f=u[E],p=o[E],u.hasOwnProperty(E)&&(f!=null||p!=null))switch(E){case"value":j=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&tt(n,r,E,f,u,p)}Je(n,j,F);return;case"option":for(var Se in o)if(j=o[Se],o.hasOwnProperty(Se)&&j!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":n.selected=!1;break;default:tt(n,r,Se,null,u,j)}for(C in u)if(j=u[C],F=o[C],u.hasOwnProperty(C)&&j!==F&&(j!=null||F!=null))switch(C){case"selected":n.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:tt(n,r,C,j,u,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in o)j=o[ye],o.hasOwnProperty(ye)&&j!=null&&!u.hasOwnProperty(ye)&&tt(n,r,ye,null,u,j);for(z in u)if(j=u[z],F=o[z],u.hasOwnProperty(z)&&j!==F&&(j!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,r));break;default:tt(n,r,z,j,u,F)}return;default:if(Tl(r)){for(var nt in o)j=o[nt],o.hasOwnProperty(nt)&&j!==void 0&&!u.hasOwnProperty(nt)&&am(n,r,nt,void 0,u,j);for(G in u)j=u[G],F=o[G],!u.hasOwnProperty(G)||j===F||j===void 0&&F===void 0||am(n,r,G,j,u,F);return}}for(var V in o)j=o[V],o.hasOwnProperty(V)&&j!=null&&!u.hasOwnProperty(V)&&tt(n,r,V,null,u,j);for(X in u)j=u[X],F=o[X],!u.hasOwnProperty(X)||j===F||j==null&&F==null||tt(n,r,X,j,u,F)}var om=null,lm=null;function Ch(n){return n.nodeType===9?n:n.ownerDocument}function UE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function um(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cm=null;function yI(){var n=window.event;return n&&n.type==="popstate"?n===cm?!1:(cm=n,!0):(cm=null,!1)}var BE=typeof setTimeout=="function"?setTimeout:void 0,vI=typeof clearTimeout=="function"?clearTimeout:void 0,jE=typeof Promise=="function"?Promise:void 0,EI=typeof queueMicrotask=="function"?queueMicrotask:typeof jE<"u"?function(n){return jE.resolve(null).then(n).catch(TI)}:BE;function TI(n){setTimeout(function(){throw n})}function $s(n){return n==="head"}function FE(n,r){var o=r,u=0,f=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&au(E.documentElement),o&2&&au(E.body),o&4)for(o=E.head,au(o),E=o.firstChild;E;){var S=E.nextSibling,C=E.nodeName;E[Lr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){n.removeChild(p),pu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);pu(r)}function hm(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":hm(o),Ms(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function SI(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Lr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=ai(n.nextSibling),n===null)break}return null}function AI(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=ai(n.nextSibling),n===null))return null;return n}function fm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function wI(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function ai(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var dm=null;function qE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function HE(n,r,o){switch(r=Ch(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function au(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ms(n)}var Wn=new Map,GE=new Set;function Nh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ds=te.d;te.d={f:bI,r:RI,D:II,C:CI,L:NI,m:DI,X:MI,S:OI,M:kI};function bI(){var n=ds.f(),r=Eh();return n||r}function RI(n){var r=mi(n);r!==null&&r.tag===5&&r.type==="form"?hv(r):ds.r(n)}var wo=typeof document>"u"?null:document;function KE(n,r,o){var u=wo;if(u&&typeof r=="string"&&r){var f=It(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),GE.has(f)||(GE.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),Zt(r,"link",n),St(r),u.head.appendChild(r)))}}function II(n){ds.D(n),KE("dns-prefetch",n,null)}function CI(n,r){ds.C(n,r),KE("preconnect",n,r)}function NI(n,r,o){ds.L(n,r,o);var u=wo;if(u&&n&&r){var f='link[rel="preload"][as="'+It(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+It(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+It(o.imageSizes)+'"]')):f+='[href="'+It(n)+'"]';var p=f;switch(r){case"style":p=bo(n);break;case"script":p=Ro(n)}Wn.has(p)||(n=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Wn.set(p,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(ou(p))||r==="script"&&u.querySelector(lu(p))||(r=u.createElement("link"),Zt(r,"link",n),St(r),u.head.appendChild(r)))}}function DI(n,r){ds.m(n,r);var o=wo;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+It(u)+'"][href="'+It(n)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ro(n)}if(!Wn.has(p)&&(n=v({rel:"modulepreload",href:n},r),Wn.set(p,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(lu(p)))return}u=o.createElement("link"),Zt(u,"link",n),St(u),o.head.appendChild(u)}}}function OI(n,r,o){ds.S(n,r,o);var u=wo;if(u&&n){var f=pn(u).hoistableStyles,p=bo(n);r=r||"default";var E=f.get(p);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(ou(p)))S.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Wn.get(p))&&pm(n,o);var C=E=u.createElement("link");St(C),Zt(C,"link",n),C._p=new Promise(function(z,G){C.onload=z,C.onerror=G}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Dh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(p,E)}}}function MI(n,r){ds.X(n,r);var o=wo;if(o&&n){var u=pn(o).hoistableScripts,f=Ro(n),p=u.get(f);p||(p=o.querySelector(lu(f)),p||(n=v({src:n,async:!0},r),(r=Wn.get(f))&&mm(n,r),p=o.createElement("script"),St(p),Zt(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function kI(n,r){ds.M(n,r);var o=wo;if(o&&n){var u=pn(o).hoistableScripts,f=Ro(n),p=u.get(f);p||(p=o.querySelector(lu(f)),p||(n=v({src:n,async:!0,type:"module"},r),(r=Wn.get(f))&&mm(n,r),p=o.createElement("script"),St(p),Zt(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function YE(n,r,o,u){var f=(f=Ae.current)?Nh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=bo(o.href),o=pn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=bo(o.href);var p=pn(f).hoistableStyles,E=p.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,E),(p=f.querySelector(ou(n)))&&!p._p&&(E.instance=p,E.state.loading=5),Wn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Wn.set(n,o),p||xI(f,n,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ro(o),o=pn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function bo(n){return'href="'+It(n)+'"'}function ou(n){return'link[rel="stylesheet"]['+n+"]"}function QE(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function xI(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Zt(r,"link",o),St(r),n.head.appendChild(r))}function Ro(n){return'[src="'+It(n)+'"]'}function lu(n){return"script[async]"+n}function WE(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+It(o.href)+'"]');if(u)return r.instance=u,St(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),St(u),Zt(u,"style",f),Dh(u,o.precedence,n),r.instance=u;case"stylesheet":f=bo(o.href);var p=n.querySelector(ou(f));if(p)return r.state.loading|=4,r.instance=p,St(p),p;u=QE(o),(f=Wn.get(f))&&pm(u,f),p=(n.ownerDocument||n).createElement("link"),St(p);var E=p;return E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),Zt(p,"link",u),r.state.loading|=4,Dh(p,o.precedence,n),r.instance=p;case"script":return p=Ro(o.src),(f=n.querySelector(lu(p)))?(r.instance=f,St(f),f):(u=o,(f=Wn.get(p))&&(u=v({},o),mm(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),St(f),Zt(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Dh(u,o.precedence,n));return r.instance}function Dh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)p=S;else if(p!==f)break}p?p.parentNode.insertBefore(n,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function pm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function mm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Oh=null;function XE(n,r,o){if(Oh===null){var u=new Map,f=Oh=new Map;f.set(o,u)}else f=Oh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var p=o[f];if(!(p[Lr]||p[kt]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(r)||"";E=n+E;var S=u.get(E);S?S.push(p):u.set(E,[p])}}return u}function $E(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function PI(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function ZE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var uu=null;function VI(){}function LI(n,r,o){if(uu===null)throw Error(s(475));var u=uu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=bo(o.href),p=n.querySelector(ou(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Mh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=p,St(p);return}p=n.ownerDocument||n,o=QE(o),(f=Wn.get(f))&&pm(o,f),p=p.createElement("link"),St(p);var E=p;E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),Zt(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Mh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function UI(){if(uu===null)throw Error(s(475));var n=uu;return n.stylesheets&&n.count===0&&gm(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&gm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Mh(){if(this.count--,this.count===0){if(this.stylesheets)gm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var kh=null;function gm(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,kh=new Map,r.forEach(zI,n),kh=null,Mh.call(n))}function zI(n,r){if(!(r.state.loading&4)){var o=kh.get(n);if(o)var u=o.get(null);else{o=new Map,kh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var E=f[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,f),o.set(E,f),this.count++,u=Mh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var cu={$$typeof:ce,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function BI(n,r,o,u,f,p,E,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.hiddenUpdates=qi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function JE(n,r,o,u,f,p,E,S,C,z,G,X){return n=new BI(n,r,o,E,S,C,z,X),r=1,p===!0&&(r|=24),p=Cn(3,null,null,r),n.current=p,p.stateNode=n,r=$d(),r.refCount++,n.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},tp(p),n}function eT(n){return n?(n=no,n):no}function tT(n,r,o,u,f,p){f=eT(f),u.context===null?u.context=f:u.pendingContext=f,u=Us(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=zs(n,u,r),o!==null&&(kn(o,n,r),Bl(o,n,r))}function nT(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function _m(n,r){nT(n,r),(n=n.alternate)&&nT(n,r)}function iT(n){if(n.tag===13){var r=to(n,67108864);r!==null&&kn(r,n,67108864),_m(n,67108864)}}var xh=!0;function jI(n,r,o,u){var f=H.T;H.T=null;var p=te.p;try{te.p=2,ym(n,r,o,u)}finally{te.p=p,H.T=f}}function FI(n,r,o,u){var f=H.T;H.T=null;var p=te.p;try{te.p=8,ym(n,r,o,u)}finally{te.p=p,H.T=f}}function ym(n,r,o,u){if(xh){var f=vm(u);if(f===null)rm(n,r,u,Ph,o),rT(n,u);else if(HI(f,n,r,o,u))u.stopPropagation();else if(rT(n,u),r&4&&-1<qI.indexOf(n)){for(;f!==null;){var p=mi(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=ti(p.pendingLanes);if(E!==0){var S=p;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var C=1<<31-sn(E);S.entanglements[1]|=C,E&=~C}Ni(p),($e&6)===0&&(yh=Ln()+500,iu(0))}}break;case 13:S=to(p,2),S!==null&&kn(S,p,2),Eh(),_m(p,2)}if(p=vm(u),p===null&&rm(n,r,u,Ph,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else rm(n,r,u,null,o)}}function vm(n){return n=Bn(n),Em(n)}var Ph=null;function Em(n){if(Ph=null,n=Gi(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ph=n,null}function sT(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ad()){case ll:return 2;case xa:return 8;case Mr:case wd:return 32;case Pa:return 268435456;default:return 32}default:return 32}}var Tm=!1,Zs=null,Js=null,er=null,hu=new Map,fu=new Map,tr=[],qI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rT(n,r){switch(n){case"focusin":case"focusout":Zs=null;break;case"dragenter":case"dragleave":Js=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":hu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(r.pointerId)}}function du(n,r,o,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=mi(r),r!==null&&iT(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function HI(n,r,o,u,f){switch(r){case"focusin":return Zs=du(Zs,n,r,o,u,f),!0;case"dragenter":return Js=du(Js,n,r,o,u,f),!0;case"mouseover":return er=du(er,n,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return hu.set(p,du(hu.get(p)||null,n,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,fu.set(p,du(fu.get(p)||null,n,r,o,u,f)),!0}return!1}function aT(n){var r=Gi(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,Ec(n.priority,function(){if(o.tag===13){var u=Mn();u=Ns(u);var f=to(o,u);f!==null&&kn(f,o,u),_m(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=vm(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Wi=u,o.target.dispatchEvent(u),Wi=null}else return r=mi(o),r!==null&&iT(r),n.blockedOn=o,!1;r.shift()}return!0}function oT(n,r,o){Vh(n)&&o.delete(r)}function GI(){Tm=!1,Zs!==null&&Vh(Zs)&&(Zs=null),Js!==null&&Vh(Js)&&(Js=null),er!==null&&Vh(er)&&(er=null),hu.forEach(oT),fu.forEach(oT)}function Lh(n,r){n.blockedOn===r&&(n.blockedOn=null,Tm||(Tm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,GI)))}var Uh=null;function lT(n){Uh!==n&&(Uh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Uh===n&&(Uh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(Em(u||o)===null)continue;break}var p=mi(o);p!==null&&(n.splice(r,3),r-=3,Ep(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function pu(n){function r(C){return Lh(C,n)}Zs!==null&&Lh(Zs,n),Js!==null&&Lh(Js,n),er!==null&&Lh(er,n),hu.forEach(r),fu.forEach(r);for(var o=0;o<tr.length;o++){var u=tr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)aT(o),o.blockedOn===null&&tr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],E=f[Rt]||null;if(typeof p=="function")E||lT(o);else if(E){var S=null;if(p&&p.hasAttribute("formAction")){if(f=p,E=p[Rt]||null)S=E.formAction;else if(Em(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),lT(o)}}}function Sm(n){this._internalRoot=n}zh.prototype.render=Sm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Mn();tT(o,u,n,r,null,null)},zh.prototype.unmount=Sm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;tT(n.current,2,null,n,null,null),Eh(),r[Un]=null}};function zh(n){this._internalRoot=n}zh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ds();n={blockedOn:null,target:n,priority:r};for(var o=0;o<tr.length&&r!==0&&r<tr[o].priority;o++);tr.splice(o,0,n),o===0&&aT(n)}};var uT=e.version;if(uT!=="19.1.0")throw Error(s(527,uT,"19.1.0"));te.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var KI={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bh.isDisabled&&Bh.supportsFiber)try{yt=Bh.inject(KI),Xe=Bh}catch{}}return gu.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=bv,p=Rv,E=Iv,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=JE(n,1,!1,null,null,o,u,f,p,E,S,null),n[Un]=r.current,sm(n),new Sm(r)},gu.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",p=bv,E=Rv,S=Iv,C=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),r=JE(n,1,!0,r,o??null,u,f,p,E,S,C,z),r.context=eT(null),o=r.current,u=Mn(),u=Ns(u),f=Us(u),f.callback=null,zs(o,f,u),o=u,r.current.lanes=o,Hi(r,o),Ni(r),n[Un]=r.current,sm(n),new zh(r)},gu.version="19.1.0",gu}var vT;function n1(){if(vT)return bm.exports;vT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),bm.exports=t1(),bm.exports}var i1=n1();const s1=()=>{};var ET={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=function(i,e){if(!i)throw $o(e)},$o=function(i){return new Error("Firebase Database ("+US.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},r1=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,m=a+2<i.length,g=m?i[a+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,P=g&63;m||(P=64,c||(w=64)),s.push(t[v],t[T],t[w],t[P])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(zS(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):r1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new a1;const w=l<<2|d>>4;if(s.push(w),g!==64){const P=d<<4&240|g>>2;if(s.push(P),T!==64){const B=g<<6&192|T;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class a1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BS=function(i){const e=zS(i);return Pg.encodeByteArray(e,!0)},uf=function(i){return BS(i).replace(/\./g,"")},cf=function(i){try{return Pg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(i){return jS(void 0,i)}function jS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!l1(t)||(i[t]=jS(i[t],e[t]));return i}function l1(i){return i!=="__proto__"}/**
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
 */function u1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const c1=()=>u1().__FIREBASE_DEFAULTS__,h1=()=>{if(typeof process>"u"||typeof ET>"u")return;const i=ET.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},f1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cf(i[1]);return e&&JSON.parse(e)},qf=()=>{try{return s1()||c1()||h1()||f1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},FS=i=>{var e,t;return(t=(e=qf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Vg=i=>{const e=FS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},qS=()=>{var i;return(i=qf())===null||i===void 0?void 0:i.config},HS=i=>{var e;return(e=qf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Rs(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hf(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function GS(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[uf(JSON.stringify(t)),uf(JSON.stringify(c)),""].join(".")}const Nu={};function d1(){const i={prod:[],emulator:[]};for(const e of Object.keys(Nu))Nu[e]?i.emulator.push(e):i.prod.push(e);return i}function p1(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let TT=!1;function Gf(i,e){if(typeof window>"u"||typeof document>"u"||!Rs(window.location.host)||Nu[i]===e||Nu[i]||TT)return;Nu[i]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=d1().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{TT=!0,c()},w}function v(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=p1(s),P=t("text"),B=document.getElementById(P)||document.createElement("span"),K=t("learnmore"),W=document.getElementById(K)||document.createElement("a"),ge=t("preprendIcon"),he=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ce=w.element;d(ce),v(W,K);const fe=g();m(he,ge),ce.append(he,B,W,fe),document.body.appendChild(ce)}l?(B.innerText="Preview backend disconnected.",he.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(he.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function m1(){var i;const e=(i=qf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function g1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function KS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y1(){const i=dn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function v1(){return US.NODE_ADMIN===!0}function E1(){return!m1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T1(){try{return typeof indexedDB=="object"}catch{return!1}}function S1(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="FirebaseError";class ji extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=A1,Object.setPrototypeOf(this,ji.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zu.prototype.create)}}class Zu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?w1(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new ji(a,d,s)}}function w1(i,e){return i.replace(b1,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const b1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(i){return JSON.parse(i)}function en(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=zu(cf(l[0])||""),t=zu(cf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},R1=function(i){const e=YS(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},I1=function(i){const e=YS(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Fo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Ym(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function hf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function mr(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(ST(l)&&ST(c)){if(!mr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function ST(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Su(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Au(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],m=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),v=1518500249):(g=l^c^d,v=1859775393):T<60?(g=l&c|d&(l|c),v=2400959708):(g=l^c^d,v=3395469782);const w=(a<<5|a>>>27)+g+m+v+s[T]&4294967295;m=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function N1(i,e){const t=new D1(i,e);return t.subscribe.bind(t)}class D1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");O1(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Nm),a.error===void 0&&(a.error=Nm),a.complete===void 0&&(a.complete=Nm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O1(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Nm(){}function M1(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,se(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Kf=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function gt(i){return i&&i._delegate?i._delegate:i}class Es{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fa="[DEFAULT]";/**
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
 */class x1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Lg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V1(e))try{this.getOrInitializeService({instanceIdentifier:fa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=fa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fa){return this.instances.has(e)}getOptions(e=fa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:P1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fa){return this.component?this.component.multipleInstances?e:fa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P1(i){return i===fa?void 0:i}function V1(i){return i.instantiationMode==="EAGER"}/**
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
 */class L1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new x1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(xe||(xe={}));const U1={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},z1=xe.INFO,B1={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},j1=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=B1[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yf{constructor(e){this.name=e,this._logLevel=z1,this._logHandler=j1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const F1=(i,e)=>e.some(t=>i instanceof t);let AT,wT;function q1(){return AT||(AT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H1(){return wT||(wT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QS=new WeakMap,Qm=new WeakMap,WS=new WeakMap,Dm=new WeakMap,zg=new WeakMap;function G1(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(cr(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&QS.set(t,i)}).catch(()=>{}),zg.set(e,i),e}function K1(i){if(Qm.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Qm.set(i,e)}let Wm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Qm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||WS.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return cr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Y1(i){Wm=i(Wm)}function Q1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Om(this),e,...t);return WS.set(s,e.sort?e.sort():[e]),cr(s)}:H1().includes(i)?function(...e){return i.apply(Om(this),e),cr(QS.get(this))}:function(...e){return cr(i.apply(Om(this),e))}}function W1(i){return typeof i=="function"?Q1(i):(i instanceof IDBTransaction&&K1(i),F1(i,q1())?new Proxy(i,Wm):i)}function cr(i){if(i instanceof IDBRequest)return G1(i);if(Dm.has(i))return Dm.get(i);const e=W1(i);return e!==i&&(Dm.set(i,e),zg.set(e,i)),e}const Om=i=>zg.get(i);function X1(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=cr(c);return s&&c.addEventListener("upgradeneeded",m=>{s(cr(c.result),m.oldVersion,m.newVersion,cr(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const $1=["get","getKey","getAll","getAllKeys","count"],Z1=["put","add","delete","clear"],Mm=new Map;function bT(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Mm.get(e))return Mm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=Z1.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||$1.includes(t)))return;const l=async function(c,...d){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&m.done]))[0]};return Mm.set(e,l),l}Y1(i=>({...i,get:(e,t,s)=>bT(e,t)||i.get(e,t,s),has:(e,t)=>!!bT(e,t)||i.has(e,t)}));/**
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
 */class J1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(eC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function eC(i){const e=i.getComponent();return e?.type==="VERSION"}const Xm="@firebase/app",RT="0.13.2";/**
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
 */const Ts=new Yf("@firebase/app"),tC="@firebase/app-compat",nC="@firebase/analytics-compat",iC="@firebase/analytics",sC="@firebase/app-check-compat",rC="@firebase/app-check",aC="@firebase/auth",oC="@firebase/auth-compat",lC="@firebase/database",uC="@firebase/data-connect",cC="@firebase/database-compat",hC="@firebase/functions",fC="@firebase/functions-compat",dC="@firebase/installations",pC="@firebase/installations-compat",mC="@firebase/messaging",gC="@firebase/messaging-compat",_C="@firebase/performance",yC="@firebase/performance-compat",vC="@firebase/remote-config",EC="@firebase/remote-config-compat",TC="@firebase/storage",SC="@firebase/storage-compat",AC="@firebase/firestore",wC="@firebase/ai",bC="@firebase/firestore-compat",RC="firebase",IC="11.10.0";/**
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
 */const $m="[DEFAULT]",CC={[Xm]:"fire-core",[tC]:"fire-core-compat",[iC]:"fire-analytics",[nC]:"fire-analytics-compat",[rC]:"fire-app-check",[sC]:"fire-app-check-compat",[aC]:"fire-auth",[oC]:"fire-auth-compat",[lC]:"fire-rtdb",[uC]:"fire-data-connect",[cC]:"fire-rtdb-compat",[hC]:"fire-fn",[fC]:"fire-fn-compat",[dC]:"fire-iid",[pC]:"fire-iid-compat",[mC]:"fire-fcm",[gC]:"fire-fcm-compat",[_C]:"fire-perf",[yC]:"fire-perf-compat",[vC]:"fire-rc",[EC]:"fire-rc-compat",[TC]:"fire-gcs",[SC]:"fire-gcs-compat",[AC]:"fire-fst",[bC]:"fire-fst-compat",[wC]:"fire-vertex","fire-js":"fire-js",[RC]:"fire-js-all"};/**
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
 */const ff=new Map,NC=new Map,Zm=new Map;function IT(i,e){try{i.container.addComponent(e)}catch(t){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function gr(i){const e=i.name;if(Zm.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;Zm.set(e,i);for(const t of ff.values())IT(t,i);for(const t of NC.values())IT(t,i);return!0}function Ju(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Sn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const DC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Zu("app","Firebase",DC);/**
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
 */class OC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ia=IC;function XS(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$m,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw hr.create("bad-app-name",{appName:String(a)});if(t||(t=qS()),!t)throw hr.create("no-options");const l=ff.get(a);if(l){if(mr(t,l.options)&&mr(s,l.config))return l;throw hr.create("duplicate-app",{appName:a})}const c=new L1(a);for(const m of Zm.values())c.addComponent(m);const d=new OC(t,s,c);return ff.set(a,d),d}function Qf(i=$m){const e=ff.get(i);if(!e&&i===$m&&qS())return XS();if(!e)throw hr.create("no-app",{appName:i});return e}function Zn(i,e,t){var s;let a=(s=CC[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(d.join(" "));return}gr(new Es(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const MC="firebase-heartbeat-database",kC=1,Bu="firebase-heartbeat-store";let km=null;function $S(){return km||(km=X1(MC,kC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Bu)}catch(t){console.warn(t)}}}}).catch(i=>{throw hr.create("idb-open",{originalErrorMessage:i.message})})),km}async function xC(i){try{const t=(await $S()).transaction(Bu),s=await t.objectStore(Bu).get(ZS(i));return await t.done,s}catch(e){if(e instanceof ji)Ts.warn(e.message);else{const t=hr.create("idb-get",{originalErrorMessage:e?.message});Ts.warn(t.message)}}}async function CT(i,e){try{const s=(await $S()).transaction(Bu,"readwrite");await s.objectStore(Bu).put(e,ZS(i)),await s.done}catch(t){if(t instanceof ji)Ts.warn(t.message);else{const s=hr.create("idb-set",{originalErrorMessage:t?.message});Ts.warn(s.message)}}}function ZS(i){return`${i.name}!${i.options.appId}`}/**
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
 */const PC=1024,VC=30;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=NT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>VC){const c=BC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ts.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=NT(),{heartbeatsToSend:s,unsentEntries:a}=UC(this._heartbeatsCache.heartbeats),l=uf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ts.warn(t),""}}}function NT(){return new Date().toISOString().substring(0,10)}function UC(i,e=PC){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),DT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),DT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class zC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T1()?S1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return CT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return CT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function DT(i){return uf(JSON.stringify({version:2,heartbeats:i})).length}function BC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function jC(i){gr(new Es("platform-logger",e=>new J1(e),"PRIVATE")),gr(new Es("heartbeat",e=>new LC(e),"PRIVATE")),Zn(Xm,RT,i),Zn(Xm,RT,"esm2017"),Zn("fire-js","")}jC("");var FC="firebase",qC="11.10.0";/**
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
 */Zn(FC,qC,"app");var OT={};const MT="@firebase/database",kT="1.0.20";/**
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
 */class GC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),en(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:zu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Is(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GC(e)}}catch{}return new KC},ma=eA("localStorage"),YC=eA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Yf("@firebase/database"),QC=function(){let i=1;return function(){return i++}}(),tA=function(i){const e=k1(i),t=new C1;t.update(e);const s=t.digest();return Pg.encodeByteArray(s)},ec=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ec.apply(null,s):typeof s=="object"?e+=en(s):e+=s,e+=" "}return e};let Du=null,xT=!0;const WC=function(i,e){se(!0,"Can't turn on custom loggers persistently."),Vo.logLevel=xe.VERBOSE,Du=Vo.log.bind(Vo)},un=function(...i){if(xT===!0&&(xT=!1,Du===null&&YC.get("logging_enabled")===!0&&WC()),Du){const e=ec.apply(null,i);Du(e)}},tc=function(i){return function(...e){un(i,...e)}},Jm=function(...i){const e="FIREBASE INTERNAL ERROR: "+ec(...i);Vo.error(e)},Ss=function(...i){const e=`FIREBASE FATAL ERROR: ${ec(...i)}`;throw Vo.error(e),new Error(e)},Vn=function(...i){const e="FIREBASE WARNING: "+ec(...i);Vo.warn(e)},XC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nA=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},$C=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},qo="[MIN_NAME]",va="[MAX_NAME]",Jo=function(i,e){if(i===e)return 0;if(i===qo||e===va)return-1;if(e===qo||i===va)return 1;{const t=PT(i),s=PT(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},ZC=function(i,e){return i===e?0:i<e?-1:1},_u=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+en(e))},Bg=function(i){if(typeof i!="object"||i===null)return en(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=en(e[s]),t+=":",t+=Bg(i[e[s]]);return t+="}",t},iA=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function ei(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const sA=function(i){se(!nA(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,m;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(m=0;m<64;m+=8){let w=parseInt(v.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},JC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tN=new RegExp("^-?(0*)\\d{1,10}$"),nN=-2147483648,iN=2147483647,PT=function(i){if(tN.test(i)){const e=Number(i);if(e>=nN&&e<=iN)return e}return null},nc=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Vn("Exception was thrown by user callback.",t),e},Math.floor(0))}},sN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ou=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class rN{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Vn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(un("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vn(e)}}class Xh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="5",rA="v",aA="s",oA="r",lA="f",uA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cA="ls",hA="p",eg="ac",fA="websocket",dA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t,s,a,l=!1,c="",d=!1,m=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function oN(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function mA(i,e,t){se(typeof e=="string","typeof type must == string"),se(typeof t=="object","typeof params must == object");let s;if(e===fA)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===dA)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oN(i)&&(t.ns=i.namespace);const a=[];return ei(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.counters_={}}incrementCounter(e,t=1){Is(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return o1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={},Pm={};function Fg(i){const e=i.toString();return xm[e]||(xm[e]=new lN),xm[e]}function uN(i,e){const t=i.toString();return Pm[t]||(Pm[t]=e()),Pm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&nc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="start",hN="close",fN="pLPCommand",dN="pRTLPCB",gA="id",_A="pw",yA="ser",pN="cb",mN="seg",gN="ts",_N="d",yN="dframe",vA=1870,EA=30,vN=vA-EA,EN=25e3,TN=3e4;class ko{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tc(e),this.stats_=Fg(t),this.urlFn=m=>(this.appCheckToken&&(m[eg]=this.appCheckToken),mA(t,dA,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TN)),$C(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qg((...l)=>{const[c,d,m,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===VT)this.id=d,this.password=m;else if(c===hN)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[VT]="t",s[yA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[pN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[rA]=jg,this.transportSessionId&&(s[aA]=this.transportSessionId),this.lastSessionId&&(s[cA]=this.lastSessionId),this.applicationId&&(s[hA]=this.applicationId),this.appCheckToken&&(s[eg]=this.appCheckToken),typeof location<"u"&&location.hostname&&uA.test(location.hostname)&&(s[oA]=lA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ko.forceAllow_=!0}static forceDisallow(){ko.forceDisallow_=!0}static isAvailable(){return ko.forceAllow_?!0:!ko.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JC()&&!eN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=en(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=BS(t),a=iA(s,vN);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[yN]="t",s[gA]=e,s[_A]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=en(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qg{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QC(),window[fN+this.uniqueCallbackIdentifier]=e,window[dN+this.uniqueCallbackIdentifier]=t,this.myIFrame=qg.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){un("frame writing exception"),d.stack&&un(d.stack),un(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||un("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gA]=this.myID,e[_A]=this.myPW,e[yA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EA+s.length<=vA;){const c=this.pendingSegs.shift();s=s+"&"+mN+a+"="+c.seg+"&"+gN+a+"="+c.ts+"&"+_N+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(EN)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{un("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=16384,AN=45e3;let df=null;typeof MozWebSocket<"u"?df=MozWebSocket:typeof WebSocket<"u"&&(df=WebSocket);class oi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tc(this.connId),this.stats_=Fg(t),this.connURL=oi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[rA]=jg,typeof location<"u"&&location.hostname&&uA.test(location.hostname)&&(c[oA]=lA),t&&(c[aA]=t),s&&(c[cA]=s),a&&(c[eg]=a),l&&(c[hA]=l),mA(e,fA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ma.set("previous_websocket_failure",!0);try{let s;v1(),this.mySock=new df(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&df!==null&&!oi.forceDisallow_}static previouslyFailed(){return ma.isInMemoryStorage||ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=zu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(se(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=en(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=iA(t,SN);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}oi.responsesRequiredToBeHealthy=2;oi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static get ALL_TRANSPORTS(){return[ko,oi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=oi&&oi.isAvailable();let s=t&&!oi.previouslyFailed();if(e.webSocketOnly&&(t||Vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[oi];else{const a=this.transports_=[];for(const l of ju.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);ju.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ju.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=6e4,bN=5e3,RN=10*1024,IN=100*1024,Vm="t",LT="d",CN="s",UT="r",NN="e",zT="o",BT="a",jT="n",FT="p",DN="h";class ON{constructor(e,t,s,a,l,c,d,m,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tc("c:"+this.id+":"),this.transportManager_=new ju(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ou(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vm in e){const t=e[Vm];t===BT?this.upgradeIfSecondaryHealthy_():t===UT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_u("t",e),s=_u("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:FT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:BT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_u("t",e),s=_u("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_u(Vm,e);if(LT in e){const s=e[LT];if(t===DN){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===jT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CN?this.onConnectionShutdown_(s):t===UT?this.onReset_(s):t===NN?Jm("Server Error: "+s):t===zT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),jg!==s&&Vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ou(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ou(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:FT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.allowedEvents_=e,this.listeners_={},se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){se(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends SA{static getInstance(){return new pf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ug()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return se(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=32,HT=768;class ft{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function st(){return new ft("")}function Fe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function _r(i){return i.pieces_.length-i.pieceNum_}function ct(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ft(i.pieces_,e)}function AA(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function MN(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function wA(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function bA(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new ft(e,0)}function Yt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof ft)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ft(t,0)}function Ve(i){return i.pieceNum_>=i.pieces_.length}function $n(i,e){const t=Fe(i),s=Fe(e);if(t===null)return e;if(t===s)return $n(ct(i),ct(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function RA(i,e){if(_r(i)!==_r(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function li(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(_r(i)>_r(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class kN{constructor(e,t){this.errorPrefix_=t,this.parts_=wA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Kf(this.parts_[s]);IA(this)}}function xN(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Kf(e),IA(i)}function PN(i){const e=i.parts_.pop();i.byteLength_-=Kf(e),i.parts_.length>0&&(i.byteLength_-=1)}function IA(i){if(i.byteLength_>HT)throw new Error(i.errorPrefix_+"has a key path longer than "+HT+" bytes ("+i.byteLength_+").");if(i.parts_.length>qT)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qT+") or object contains a cycle "+da(i))}function da(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends SA{static getInstance(){return new Hg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return se(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=1e3,VN=60*5*1e3,GT=30*1e3,LN=1.3,UN=3e4,zN="server_kill",KT=3;class _s extends TA{constructor(e,t,s,a,l,c,d,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=_s.nextPersistentConnectionId_++,this.log_=tc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yu,this.maxReconnectDelay_=VN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(en(l)),se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Lg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),se(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const m=d.d,g=d.s;_s.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Is(e,"w")){const s=Fo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||I1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=GT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=R1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+en(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Jm("Unrecognized action received from server: "+en(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UN&&(this.reconnectDelay_=yu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+_s.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const m=function(){d?d.close():(c=!0,s())},g=function(T){se(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:m,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?un("getToken() completed but was canceled"):(un("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,d=new ON(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,P=>{Vn(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(zN)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Vn(T),m())}}}interrupt(e){un("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){un("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ym(this.interruptReasons_)&&(this.reconnectDelay_=yu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Bg(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ft(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){un("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=KT&&(this.reconnectDelay_=GT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){un("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=KT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+JS.replace(/\./g,"-")]=1,Ug()?e["framework.cordova"]=1:KS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pf.getInstance().currentlyOnline();return Ym(this.interruptReasons_)&&e}}_s.nextPersistentConnectionId_=0;_s.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new qe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new qe(qo,e),a=new qe(qo,t);return this.compare(s,a)!==0}minPost(){return qe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh;class CA extends Wf{static get __EMPTY_NODE(){return jh}static set __EMPTY_NODE(e){jh=e}compare(e,t){return Jo(e.name,t.name)}isDefinedOn(e){throw $o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return qe.MIN}maxPost(){return new qe(va,jh)}makePost(e,t){return se(typeof e=="string","KeyIndex indexValue must always be a string."),new qe(e,jh)}toString(){return".key"}}const Lo=new CA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},xn=class wu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??wu.RED,this.left=a??Oi.EMPTY_NODE,this.right=l??Oi.EMPTY_NODE}copy(e,t,s,a,l){return new wu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Oi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,wu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,wu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};xn.RED=!0;xn.BLACK=!1;class BN{copy(e,t,s,a,l){return this}insert(e,t,s){return new xn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Oi=class $h{constructor(e,t=$h.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $h(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,xn.BLACK,null,null))}remove(e){return new $h(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fh(this.root_,null,this.comparator_,!0,e)}};Oi.EMPTY_NODE=new BN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(i,e){return Jo(i.name,e.name)}function Gg(i,e){return Jo(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg;function FN(i){tg=i}const NA=function(i){return typeof i=="number"?"number:"+sA(i):"string:"+i},DA=function(i){if(i.isLeafNode()){const e=i.val();se(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Is(e,".sv"),"Priority must be a string or number.")}else se(i===tg||i.isEmpty(),"priority of unexpected type.");se(i===tg||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YT;class Gt{static set __childrenNodeConstructor(e){YT=e}static get __childrenNodeConstructor(){return YT}constructor(e,t=Gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,se(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),DA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ve(e)?this:Fe(e)===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Fe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(se(s!==".priority"||_r(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+NA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sA(this.value_):e+=this.value_,this.lazyHash_=tA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gt.__childrenNodeConstructor?-1:(se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Gt.VALUE_TYPE_ORDER.indexOf(t),l=Gt.VALUE_TYPE_ORDER.indexOf(s);return se(a>=0,"Unknown leaf type: "+t),se(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OA,MA;function qN(i){OA=i}function HN(i){MA=i}class GN extends Wf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Jo(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return qe.MIN}maxPost(){return new qe(va,new Gt("[PRIORITY-POST]",MA))}makePost(e,t){const s=OA(e);return new qe(t,new Gt("[PRIORITY-POST]",s))}toString(){return".priority"}}const fn=new GN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=Math.log(2);class YN{constructor(e){const t=l=>parseInt(Math.log(l)/KN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mf=function(i,e,t,s){i.sort(e);const a=function(m,g){const v=g-m;let T,w;if(v===0)return null;if(v===1)return T=i[m],w=t?t(T):T,new xn(w,T.node,xn.BLACK,null,null);{const P=parseInt(v/2,10)+m,B=a(m,P),K=a(P+1,g);return T=i[P],w=t?t(T):T,new xn(w,T.node,xn.BLACK,B,K)}},l=function(m){let g=null,v=null,T=i.length;const w=function(B,K){const W=T-B,ge=T;T-=B;const he=a(W+1,ge),ce=i[W],fe=t?t(ce):ce;P(new xn(fe,ce.node,K,null,he))},P=function(B){g?(g.left=B,g=B):(v=B,g=B)};for(let B=0;B<m.count;++B){const K=m.nextBitIsOne(),W=Math.pow(2,m.count-(B+1));K?w(W,xn.BLACK):(w(W,xn.BLACK),w(W,xn.RED))}return v},c=new YN(i.length),d=l(c);return new Oi(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lm;const Io={};class ps{static get Default(){return se(Io&&fn,"ChildrenNode.ts has not been loaded"),Lm=Lm||new ps({".priority":Io},{".priority":fn}),Lm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Fo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Oi?t:null}hasIndex(e){return Is(this.indexSet_,e.toString())}addIndex(e,t){se(e!==Lo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(qe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=mf(s,e.getCompare()):d=Io;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const v=Object.assign({},this.indexes_);return v[m]=d,new ps(v,g)}addToIndexes(e,t){const s=hf(this.indexes_,(a,l)=>{const c=Fo(this.indexSet_,l);if(se(c,"Missing index implementation for "+l),a===Io)if(c.isDefinedOn(e.node)){const d=[],m=t.getIterator(qe.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&d.push(g),g=m.getNext();return d.push(e),mf(d,c.getCompare())}else return Io;else{const d=t.get(e.name);let m=a;return d&&(m=m.remove(new qe(e.name,d))),m.insert(e,e.node)}});return new ps(s,this.indexSet_)}removeFromIndexes(e,t){const s=hf(this.indexes_,a=>{if(a===Io)return a;{const l=t.get(e.name);return l?a.remove(new qe(e.name,l)):a}});return new ps(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;class Qe{static get EMPTY_NODE(){return vu||(vu=new Qe(new Oi(Gg),null,ps.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&DA(this.priorityNode_),this.children_.isEmpty()&&se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vu}updatePriority(e){return this.children_.isEmpty()?this:new Qe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?vu:t}}getChild(e){const t=Fe(e);return t===null?this:this.getImmediateChild(t).getChild(ct(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(se(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new qe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?vu:this.priorityNode_;return new Qe(a,c,l)}}updateChild(e,t){const s=Fe(e);if(s===null)return t;{se(Fe(e)!==".priority"||_r(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ct(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(fn,(c,d)=>{t[c]=d.val(e),s++,l&&Qe.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+NA(this.getPriority().val())+":"),this.forEachChild(fn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":tA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new qe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new qe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new qe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,qe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,qe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ic?-1:0}withIndex(e){if(e===Lo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Qe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Lo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(fn),a=t.getIterator(fn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Lo?null:this.indexMap_.get(e.toString())}}Qe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QN extends Qe{constructor(){super(new Oi(Gg),Qe.EMPTY_NODE,ps.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Qe.EMPTY_NODE}isEmpty(){return!1}}const ic=new QN;Object.defineProperties(qe,{MIN:{value:new qe(qo,Qe.EMPTY_NODE)},MAX:{value:new qe(va,ic)}});CA.__EMPTY_NODE=Qe.EMPTY_NODE;Gt.__childrenNodeConstructor=Qe;FN(ic);HN(ic);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=!0;function cn(i,e=null){if(i===null)return Qe.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),se(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Gt(t,cn(e))}if(!(i instanceof Array)&&WN){const t=[];let s=!1;if(ei(i,(c,d)=>{if(c.substring(0,1)!=="."){const m=cn(d);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new qe(c,m)))}}),t.length===0)return Qe.EMPTY_NODE;const l=mf(t,jN,c=>c.name,Gg);if(s){const c=mf(t,fn.getCompare());return new Qe(l,cn(e),new ps({".priority":c},{".priority":fn}))}else return new Qe(l,cn(e),ps.Default)}else{let t=Qe.EMPTY_NODE;return ei(i,(s,a)=>{if(Is(i,s)&&s.substring(0,1)!=="."){const l=cn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(cn(e))}}qN(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN extends Wf{constructor(e){super(),this.indexPath_=e,se(!Ve(e)&&Fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Jo(e.name,t.name):l}makePost(e,t){const s=cn(e),a=Qe.EMPTY_NODE.updateChild(this.indexPath_,s);return new qe(t,a)}maxPost(){const e=Qe.EMPTY_NODE.updateChild(this.indexPath_,ic);return new qe(va,e)}toString(){return wA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N extends Wf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Jo(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return qe.MIN}maxPost(){return qe.MAX}makePost(e,t){const s=cn(e);return new qe(t,s)}toString(){return".value"}}const ZN=new $N;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(i){return{type:"value",snapshotNode:i}}function eD(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function tD(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function QT(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function nD(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qo}hasEnd(){return this.endSet_}getIndexEndValue(){return se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:va}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fn}copy(){const e=new Kg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WT(i){const e={};if(i.isDefault())return e;let t;if(i.index_===fn?t="$priority":i.index_===ZN?t="$value":i.index_===Lo?t="$key":(se(i.index_ instanceof XN,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=en(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=en(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+en(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=en(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+en(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function XT(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==fn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends TA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=tc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=gf.getListenId_(e,s),d={};this.listens_[c]=d;const m=WT(e._queryParams);this.restRequest_(l+".json",m,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Fo(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=gf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=WT(e._queryParams),s=e._path.toString(),a=new Lg;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zo(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=zu(d.responseText)}catch{Vn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,m)}else d.status!==401&&d.status!==404&&Vn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.rootNode_=Qe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){return{value:null,children:new Map}}function kA(i,e,t){if(Ve(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Fe(e);i.children.has(s)||i.children.set(s,_f());const a=i.children.get(s);e=ct(e),kA(a,e,t)}}function ng(i,e,t){i.value!==null?t(e,i.value):sD(i,(s,a)=>{const l=new ft(e.toString()+"/"+s);ng(a,l,t)})}function sD(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ei(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=10*1e3,aD=30*1e3,oD=5*60*1e3;class lD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new rD(e);const s=$T+(aD-$T)*Math.random();Ou(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ei(e,(a,l)=>{l>0&&Is(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Ou(this.reportStats_.bind(this),Math.floor(Math.random()*2*oD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mi||(Mi={}));function xA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function PA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function VA(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Mi.ACK_USER_WRITE,this.source=xA()}operationForChild(e){if(Ve(this.path)){if(this.affectedTree.value!=null)return se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ft(e));return new yf(st(),t,this.revert)}}else return se(Fe(this.path)===e,"operationForChild called for unrelated child."),new yf(ct(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Mi.OVERWRITE}operationForChild(e){return Ve(this.path)?new Ea(this.source,st(),this.snap.getImmediateChild(e)):new Ea(this.source,ct(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Mi.MERGE}operationForChild(e){if(Ve(this.path)){const t=this.children.subtree(new ft(e));return t.isEmpty()?null:t.value?new Ea(this.source,st(),t.value):new Fu(this.source,st(),t)}else return se(Fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fu(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=Fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function uD(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(nD(c.childName,c.snapshotNode))}),Eu(i,a,"child_removed",e,s,t),Eu(i,a,"child_added",e,s,t),Eu(i,a,"child_moved",l,s,t),Eu(i,a,"child_changed",e,s,t),Eu(i,a,"value",e,s,t),a}function Eu(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,m)=>hD(i,d,m)),c.forEach(d=>{const m=cD(i,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(m,i.query_))})})}function cD(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function hD(i,e,t){if(e.childName==null||t.childName==null)throw $o("Should only compare child_ events.");const s=new qe(e.childName,e.snapshotNode),a=new qe(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(i,e){return{eventCache:i,serverCache:e}}function Mu(i,e,t,s){return LA(new Yg(e,t,s),i.serverCache)}function UA(i,e,t,s){return LA(i.eventCache,new Yg(e,t,s))}function ig(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Ta(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Um;const fD=()=>(Um||(Um=new Oi(ZC)),Um);class ut{static fromObject(e){let t=new ut(null);return ei(e,(s,a)=>{t=t.set(new ft(s),a)}),t}constructor(e,t=fD()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:st(),value:this.value};if(Ve(e))return null;{const s=Fe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ct(e),t);return l!=null?{path:Yt(new ft(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ve(e))return this;{const t=Fe(e),s=this.children.get(t);return s!==null?s.subtree(ct(e)):new ut(null)}}set(e,t){if(Ve(e))return new ut(t,this.children);{const s=Fe(e),l=(this.children.get(s)||new ut(null)).set(ct(e),t),c=this.children.insert(s,l);return new ut(this.value,c)}}remove(e){if(Ve(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=Fe(e),s=this.children.get(t);if(s){const a=s.remove(ct(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ut(null):new ut(this.value,l)}else return this}}get(e){if(Ve(e))return this.value;{const t=Fe(e),s=this.children.get(t);return s?s.get(ct(e)):null}}setTree(e,t){if(Ve(e))return t;{const s=Fe(e),l=(this.children.get(s)||new ut(null)).setTree(ct(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ut(this.value,c)}}fold(e){return this.fold_(st(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Yt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,st(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ve(e))return null;{const l=Fe(e),c=this.children.get(l);return c?c.findOnPath_(ct(e),Yt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,st(),t)}foreachOnPath_(e,t,s){if(Ve(e))return this;{this.value&&s(t,this.value);const a=Fe(e),l=this.children.get(a);return l?l.foreachOnPath_(ct(e),Yt(t,a),s):new ut(null)}}foreach(e){this.foreach_(st(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Yt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.writeTree_=e}static empty(){return new ci(new ut(null))}}function ku(i,e,t){if(Ve(e))return new ci(new ut(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=$n(a,e);return l=l.updateChild(c,t),new ci(i.writeTree_.set(a,l))}else{const a=new ut(t),l=i.writeTree_.setTree(e,a);return new ci(l)}}}function ZT(i,e,t){let s=i;return ei(t,(a,l)=>{s=ku(s,Yt(e,a),l)}),s}function JT(i,e){if(Ve(e))return ci.empty();{const t=i.writeTree_.setTree(e,new ut(null));return new ci(t)}}function sg(i,e){return Ca(i,e)!=null}function Ca(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild($n(t.path,e)):null}function e0(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fn,(s,a)=>{e.push(new qe(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new qe(s,a.value))}),e}function fr(i,e){if(Ve(e))return i;{const t=Ca(i,e);return t!=null?new ci(new ut(t)):new ci(i.writeTree_.subtree(e))}}function rg(i){return i.writeTree_.isEmpty()}function Ho(i,e){return zA(st(),i.writeTree_,e)}function zA(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(se(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=zA(Yt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(Yt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(i,e){return GA(e,i)}function dD(i,e,t,s,a){se(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=ku(i.visibleWrites,e,t)),i.lastWriteId=s}function pD(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function mD(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);se(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&gD(d,s.path)?a=!1:li(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return _D(i),!0;if(s.snap)i.visibleWrites=JT(i.visibleWrites,s.path);else{const d=s.children;ei(d,m=>{i.visibleWrites=JT(i.visibleWrites,Yt(s.path,m))})}return!0}else return!1}function gD(i,e){if(i.snap)return li(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&li(Yt(i.path,t),e))return!0;return!1}function _D(i){i.visibleWrites=jA(i.allWrites,yD,st()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function yD(i){return i.visible}function jA(i,e,t){let s=ci.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)li(t,c)?(d=$n(t,c),s=ku(s,d,l.snap)):li(c,t)&&(d=$n(c,t),s=ku(s,st(),l.snap.getChild(d)));else if(l.children){if(li(t,c))d=$n(t,c),s=ZT(s,d,l.children);else if(li(c,t))if(d=$n(c,t),Ve(d))s=ZT(s,st(),l.children);else{const m=Fo(l.children,Fe(d));if(m){const g=m.getChild(ct(d));s=ku(s,st(),g)}}}else throw $o("WriteRecord should have .snap or .children")}}return s}function FA(i,e,t,s,a){if(!s&&!a){const l=Ca(i.visibleWrites,e);if(l!=null)return l;{const c=fr(i.visibleWrites,e);if(rg(c))return t;if(t==null&&!sg(c,st()))return null;{const d=t||Qe.EMPTY_NODE;return Ho(c,d)}}}else{const l=fr(i.visibleWrites,e);if(!a&&rg(l))return t;if(!a&&t==null&&!sg(l,st()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(li(g.path,e)||li(e,g.path))},d=jA(i.allWrites,c,e),m=t||Qe.EMPTY_NODE;return Ho(d,m)}}}function vD(i,e,t){let s=Qe.EMPTY_NODE;const a=Ca(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(fn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=fr(i.visibleWrites,e);return t.forEachChild(fn,(c,d)=>{const m=Ho(fr(l,new ft(c)),d);s=s.updateImmediateChild(c,m)}),e0(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=fr(i.visibleWrites,e);return e0(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function ED(i,e,t,s,a){se(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Yt(e,t);if(sg(i.visibleWrites,l))return null;{const c=fr(i.visibleWrites,l);return rg(c)?a.getChild(t):Ho(c,a.getChild(t))}}function TD(i,e,t,s){const a=Yt(e,t),l=Ca(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=fr(i.visibleWrites,a);return Ho(c,s.getNode().getImmediateChild(t))}else return null}function SD(i,e){return Ca(i.visibleWrites,e)}function AD(i,e,t,s,a,l,c){let d;const m=fr(i.visibleWrites,e),g=Ca(m,st());if(g!=null)d=g;else if(t!=null)d=Ho(m,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const v=[],T=c.getCompare(),w=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let P=w.getNext();for(;P&&v.length<a;)T(P,s)!==0&&v.push(P),P=w.getNext();return v}else return[]}function wD(){return{visibleWrites:ci.empty(),allWrites:[],lastWriteId:-1}}function ag(i,e,t,s){return FA(i.writeTree,i.treePath,e,t,s)}function qA(i,e){return vD(i.writeTree,i.treePath,e)}function t0(i,e,t,s){return ED(i.writeTree,i.treePath,e,t,s)}function vf(i,e){return SD(i.writeTree,Yt(i.treePath,e))}function bD(i,e,t,s,a,l){return AD(i.writeTree,i.treePath,e,t,s,a,l)}function Qg(i,e,t){return TD(i.writeTree,i.treePath,e,t)}function HA(i,e){return GA(Yt(i.treePath,e),i.writeTree)}function GA(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;se(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),se(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,QT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,tD(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,eD(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,QT(s,e.snapshotNode,a.oldSnap));else throw $o("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const KA=new ID;class Wg{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qg(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ta(this.viewCache_),l=bD(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function CD(i,e){se(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),se(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function ND(i,e,t,s,a){const l=new RD;let c,d;if(t.type===Mi.OVERWRITE){const g=t;g.source.fromUser?c=og(i,e,g.path,g.snap,s,a,l):(se(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Ve(g.path),c=Ef(i,e,g.path,g.snap,s,a,d,l))}else if(t.type===Mi.MERGE){const g=t;g.source.fromUser?c=OD(i,e,g.path,g.children,s,a,l):(se(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=lg(i,e,g.path,g.children,s,a,d,l))}else if(t.type===Mi.ACK_USER_WRITE){const g=t;g.revert?c=xD(i,e,g.path,s,a,l):c=MD(i,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Mi.LISTEN_COMPLETE)c=kD(i,e,t.path,s,l);else throw $o("Unknown operation type: "+t.type);const m=l.getChanges();return DD(e,c,m),{viewCache:c,changes:m}}function DD(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=ig(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(JN(ig(e)))}}function YA(i,e,t,s,a,l){const c=e.eventCache;if(vf(s,t)!=null)return e;{let d,m;if(Ve(t))if(se(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ta(e),v=g instanceof Qe?g:Qe.EMPTY_NODE,T=qA(s,v);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ag(s,Ta(e));d=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Fe(t);if(g===".priority"){se(_r(t)===1,"Can't have a priority with additional path components");const v=c.getNode();m=e.serverCache.getNode();const T=t0(s,t,v,m);T!=null?d=i.filter.updatePriority(v,T):d=c.getNode()}else{const v=ct(t);let T;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const w=t0(s,t,c.getNode(),m);w!=null?T=c.getNode().getImmediateChild(g).updateChild(v,w):T=c.getNode().getImmediateChild(g)}else T=Qg(s,g,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),g,T,v,a,l):d=c.getNode()}}return Mu(e,d,c.isFullyInitialized()||Ve(t),i.filter.filtersNodes())}}function Ef(i,e,t,s,a,l,c,d){const m=e.serverCache;let g;const v=c?i.filter:i.filter.getIndexedFilter();if(Ve(t))g=v.updateFullNode(m.getNode(),s,null);else if(v.filtersNodes()&&!m.isFiltered()){const P=m.getNode().updateChild(t,s);g=v.updateFullNode(m.getNode(),P,null)}else{const P=Fe(t);if(!m.isCompleteForPath(t)&&_r(t)>1)return e;const B=ct(t),W=m.getNode().getImmediateChild(P).updateChild(B,s);P===".priority"?g=v.updatePriority(m.getNode(),W):g=v.updateChild(m.getNode(),P,W,B,KA,null)}const T=UA(e,g,m.isFullyInitialized()||Ve(t),v.filtersNodes()),w=new Wg(a,T,l);return YA(i,T,t,a,w,d)}function og(i,e,t,s,a,l,c){const d=e.eventCache;let m,g;const v=new Wg(a,e,l);if(Ve(t))g=i.filter.updateFullNode(e.eventCache.getNode(),s,c),m=Mu(e,g,!0,i.filter.filtersNodes());else{const T=Fe(t);if(T===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=Mu(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=ct(t),P=d.getNode().getImmediateChild(T);let B;if(Ve(w))B=s;else{const K=v.getCompleteChild(T);K!=null?AA(w)===".priority"&&K.getChild(bA(w)).isEmpty()?B=K:B=K.updateChild(w,s):B=Qe.EMPTY_NODE}if(P.equals(B))m=e;else{const K=i.filter.updateChild(d.getNode(),T,B,w,v,c);m=Mu(e,K,d.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function n0(i,e){return i.eventCache.isCompleteForChild(e)}function OD(i,e,t,s,a,l,c){let d=e;return s.foreach((m,g)=>{const v=Yt(t,m);n0(e,Fe(v))&&(d=og(i,d,v,g,a,l,c))}),s.foreach((m,g)=>{const v=Yt(t,m);n0(e,Fe(v))||(d=og(i,d,v,g,a,l,c))}),d}function i0(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function lg(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;Ve(t)?g=s:g=new ut(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(v.hasChild(T)){const P=e.serverCache.getNode().getImmediateChild(T),B=i0(i,P,w);m=Ef(i,m,new ft(T),B,a,l,c,d)}}),g.children.inorderTraversal((T,w)=>{const P=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!v.hasChild(T)&&!P){const B=e.serverCache.getNode().getImmediateChild(T),K=i0(i,B,w);m=Ef(i,m,new ft(T),K,a,l,c,d)}}),m}function MD(i,e,t,s,a,l,c){if(vf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(Ve(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return Ef(i,e,t,m.getNode().getChild(t),a,l,d,c);if(Ve(t)){let g=new ut(null);return m.getNode().forEachChild(Lo,(v,T)=>{g=g.set(new ft(v),T)}),lg(i,e,t,g,a,l,d,c)}else return e}else{let g=new ut(null);return s.foreach((v,T)=>{const w=Yt(t,v);m.isCompleteForPath(w)&&(g=g.set(v,m.getNode().getChild(w)))}),lg(i,e,t,g,a,l,d,c)}}function kD(i,e,t,s,a){const l=e.serverCache,c=UA(e,l.getNode(),l.isFullyInitialized()||Ve(t),l.isFiltered());return YA(i,c,t,s,KA,a)}function xD(i,e,t,s,a,l){let c;if(vf(s,t)!=null)return e;{const d=new Wg(s,e,a),m=e.eventCache.getNode();let g;if(Ve(t)||Fe(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=ag(s,Ta(e));else{const T=e.serverCache.getNode();se(T instanceof Qe,"serverChildren would be complete if leaf node"),v=qA(s,T)}v=v,g=i.filter.updateFullNode(m,v,l)}else{const v=Fe(t);let T=Qg(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=m.getImmediateChild(v)),T!=null?g=i.filter.updateChild(m,v,T,ct(t),d,l):e.eventCache.getNode().hasChild(v)?g=i.filter.updateChild(m,v,Qe.EMPTY_NODE,ct(t),d,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ag(s,Ta(e)),c.isLeafNode()&&(g=i.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||vf(s,st())!=null,Mu(e,g,c,i.filter.filtersNodes())}}function PD(i,e){const t=Ta(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Ve(e)&&!t.getImmediateChild(Fe(e)).isEmpty())?t.getChild(e):null}function s0(i,e,t,s){e.type===Mi.MERGE&&e.source.queryId!==null&&(se(Ta(i.viewCache_),"We should always have a full cache before handling merges"),se(ig(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=ND(i.processor_,a,e,t,s);return CD(i.processor_,l.viewCache),se(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,VD(i,l.changes,l.viewCache.eventCache.getNode())}function VD(i,e,t,s){const a=i.eventRegistrations_;return uD(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r0;function LD(i){se(!r0,"__referenceConstructor has already been defined"),r0=i}function Xg(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return se(l!=null,"SyncTree gave us an op for an invalid query."),s0(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(s0(c,e,t,s));return l}}function $g(i,e){let t=null;for(const s of i.views.values())t=t||PD(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a0;function UD(i){se(!a0,"__referenceConstructor has already been defined"),a0=i}class o0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=wD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zD(i,e,t,s,a){return dD(i.pendingWriteTree_,e,t,s,a),a?$f(i,new Ea(xA(),e,t)):[]}function xo(i,e,t=!1){const s=pD(i.pendingWriteTree_,e);if(mD(i.pendingWriteTree_,e)){let l=new ut(null);return s.snap!=null?l=l.set(st(),!0):ei(s.children,c=>{l=l.set(new ft(c),!0)}),$f(i,new yf(s.path,l,t))}else return[]}function Xf(i,e,t){return $f(i,new Ea(PA(),e,t))}function BD(i,e,t){const s=ut.fromObject(t);return $f(i,new Fu(PA(),e,s))}function jD(i,e,t,s){const a=$A(i,s);if(a!=null){const l=ZA(a),c=l.path,d=l.queryId,m=$n(c,e),g=new Ea(VA(d),m,t);return JA(i,c,g)}else return[]}function FD(i,e,t,s){const a=$A(i,s);if(a){const l=ZA(a),c=l.path,d=l.queryId,m=$n(c,e),g=ut.fromObject(t),v=new Fu(VA(d),m,g);return JA(i,c,v)}else return[]}function QA(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const m=$n(c,e),g=$g(d,m);if(g)return g});return FA(a,e,l,t,!0)}function $f(i,e){return WA(e,i.syncPointTree_,null,BA(i.pendingWriteTree_,st()))}function WA(i,e,t,s){if(Ve(i.path))return XA(i,e,t,s);{const a=e.get(st());t==null&&a!=null&&(t=$g(a,st()));let l=[];const c=Fe(i.path),d=i.operationForChild(c),m=e.children.get(c);if(m&&d){const g=t?t.getImmediateChild(c):null,v=HA(s,c);l=l.concat(WA(d,m,g,v))}return a&&(l=l.concat(Xg(a,i,s,t))),l}}function XA(i,e,t,s){const a=e.get(st());t==null&&a!=null&&(t=$g(a,st()));let l=[];return e.children.inorderTraversal((c,d)=>{const m=t?t.getImmediateChild(c):null,g=HA(s,c),v=i.operationForChild(c);v&&(l=l.concat(XA(v,d,m,g)))}),a&&(l=l.concat(Xg(a,i,s,t))),l}function $A(i,e){return i.tagToQueryMap.get(e)}function ZA(i){const e=i.indexOf("$");return se(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ft(i.substr(0,e))}}function JA(i,e,t){const s=i.syncPointTree_.get(e);se(s,"Missing sync point for query tag that we're tracking");const a=BA(i.pendingWriteTree_,e);return Xg(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zg(t)}node(){return this.node_}}class Jg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Yt(this.path_,e);return new Jg(this.syncTree_,t)}node(){return QA(this.syncTree_,this.path_)}}const qD=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},l0=function(i,e,t){if(!i||typeof i!="object")return i;if(se(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return HD(i[".sv"],e,t);if(typeof i[".sv"]=="object")return GD(i[".sv"],e);se(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},HD=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:se(!1,"Unexpected server value: "+i)}},GD=function(i,e,t){i.hasOwnProperty("increment")||se(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&se(!1,"Unexpected increment value: "+s);const a=e.node();if(se(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},KD=function(i,e,t,s){return e_(e,new Jg(t,i),s)},YD=function(i,e,t){return e_(i,new Zg(e),t)};function e_(i,e,t){const s=i.getPriority().val(),a=l0(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=l0(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Gt(d,cn(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Gt(a))),c.forEachChild(fn,(d,m)=>{const g=e_(m,e.getImmediateChild(d),t);g!==m&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function n_(i,e){let t=e instanceof ft?e:new ft(e),s=i,a=Fe(t);for(;a!==null;){const l=Fo(s.node.children,a)||{children:{},childCount:0};s=new t_(a,s,l),t=ct(t),a=Fe(t)}return s}function el(i){return i.node.value}function ew(i,e){i.node.value=e,ug(i)}function tw(i){return i.node.childCount>0}function QD(i){return el(i)===void 0&&!tw(i)}function Zf(i,e){ei(i.node.children,(t,s)=>{e(new t_(t,i,s))})}function nw(i,e,t,s){t&&e(i),Zf(i,a=>{nw(a,e,!0)})}function WD(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function sc(i){return new ft(i.parent===null?i.name:sc(i.parent)+"/"+i.name)}function ug(i){i.parent!==null&&XD(i.parent,i.name,i)}function XD(i,e,t){const s=QD(t),a=Is(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,ug(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,ug(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=/[\[\].#$\/\u0000-\u001F\u007F]/,ZD=/[\[\].#$\u0000-\u001F\u007F]/,zm=10*1024*1024,iw=function(i){return typeof i=="string"&&i.length!==0&&!$D.test(i)},JD=function(i){return typeof i=="string"&&i.length!==0&&!ZD.test(i)},eO=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),JD(i)},sw=function(i,e,t){const s=t instanceof ft?new kN(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+da(s));if(typeof e=="function")throw new Error(i+"contains a function "+da(s)+" with contents = "+e.toString());if(nA(e))throw new Error(i+"contains "+e.toString()+" "+da(s));if(typeof e=="string"&&e.length>zm/3&&Kf(e)>zm)throw new Error(i+"contains a string greater than "+zm+" utf8 bytes "+da(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ei(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!iw(c)))throw new Error(i+" contains an invalid key ("+c+") "+da(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xN(s,c),sw(i,d,s),PN(s)}),a&&l)throw new Error(i+' contains ".value" child '+da(s)+" in addition to actual children.")}},tO=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!iw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!eO(t))throw new Error(M1(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iO(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!RA(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function Na(i,e,t){iO(i,t),sO(i,s=>li(s,e)||li(e,s))}function sO(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(rO(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function rO(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();Du&&un("event: "+t.toString()),nc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO="repo_interrupt",oO=25;class lO{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_f(),this.transactionQueueTree_=new t_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uO(i,e,t){if(i.stats_=Fg(i.repoInfo_),i.forceRestClient_||sN())i.server_=new gf(i.repoInfo_,(s,a,l,c)=>{u0(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>c0(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{en(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new _s(i.repoInfo_,e,(s,a,l,c)=>{u0(i,s,a,l,c)},s=>{c0(i,s)},s=>{hO(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=uN(i.repoInfo_,()=>new lD(i.stats_,i.server_)),i.infoData_=new iD,i.infoSyncTree_=new o0({startListening:(s,a,l,c)=>{let d=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(d=Xf(i.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),i_(i,"connected",!1),i.serverSyncTree_=new o0({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,m)=>{const g=c(d,m);Na(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function cO(i){const t=i.infoData_.getNode(new ft(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function rw(i){return qD({timestamp:cO(i)})}function u0(i,e,t,s,a){i.dataUpdateCount++;const l=new ft(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const m=hf(t,g=>cn(g));c=FD(i.serverSyncTree_,l,m,a)}else{const m=cn(t);c=jD(i.serverSyncTree_,l,m,a)}else if(s){const m=hf(t,g=>cn(g));c=BD(i.serverSyncTree_,l,m)}else{const m=cn(t);c=Xf(i.serverSyncTree_,l,m)}let d=l;c.length>0&&(d=r_(i,l)),Na(i.eventQueue_,d,c)}function c0(i,e){i_(i,"connected",e),e===!1&&dO(i)}function hO(i,e){ei(e,(t,s)=>{i_(i,t,s)})}function i_(i,e,t){const s=new ft("/.info/"+e),a=cn(t);i.infoData_.updateSnapshot(s,a);const l=Xf(i.infoSyncTree_,s,a);Na(i.eventQueue_,s,l)}function fO(i){return i.nextWriteId_++}function dO(i){aw(i,"onDisconnectEvents");const e=rw(i),t=_f();ng(i.onDisconnect_,st(),(a,l)=>{const c=KD(a,l,i.serverSyncTree_,e);kA(t,a,c)});let s=[];ng(t,st(),(a,l)=>{s=s.concat(Xf(i.serverSyncTree_,a,l));const c=_O(i,a);r_(i,c)}),i.onDisconnect_=_f(),Na(i.eventQueue_,st(),s)}function pO(i){i.persistentConnection_&&i.persistentConnection_.interrupt(aO)}function aw(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),un(t,...e)}function ow(i,e,t){return QA(i.serverSyncTree_,e,t)||Qe.EMPTY_NODE}function s_(i,e=i.transactionQueueTree_){if(e||Jf(i,e),el(e)){const t=uw(i,e);se(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&mO(i,sc(e),t)}else tw(e)&&Zf(e,t=>{s_(i,t)})}function mO(i,e,t){const s=t.map(g=>g.currentWriteId),a=ow(i,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];se(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=$n(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const d=l.val(!0),m=e;i.server_.put(m.toString(),d,g=>{aw(i,"transaction put response",{path:m.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,v=v.concat(xo(i.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Jf(i,n_(i.transactionQueueTree_,e)),s_(i,i.transactionQueueTree_),Na(i.eventQueue_,e,v);for(let w=0;w<T.length;w++)nc(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Vn("transaction at "+m.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}r_(i,e)}},c)}function r_(i,e){const t=lw(i,e),s=sc(t),a=uw(i,t);return gO(i,a,s),s}function gO(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const m=e[d],g=$n(t,m.path);let v=!1,T;if(se(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)v=!0,T=m.abortReason,a=a.concat(xo(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=oO)v=!0,T="maxretry",a=a.concat(xo(i.serverSyncTree_,m.currentWriteId,!0));else{const w=ow(i,m.path,c);m.currentInputSnapshot=w;const P=e[d].update(w.val());if(P!==void 0){sw("transaction failed: Data returned ",P,m.path);let B=cn(P);typeof P=="object"&&P!=null&&Is(P,".priority")||(B=B.updatePriority(w.getPriority()));const W=m.currentWriteId,ge=rw(i),he=YD(B,w,ge);m.currentOutputSnapshotRaw=B,m.currentOutputSnapshotResolved=he,m.currentWriteId=fO(i),c.splice(c.indexOf(W),1),a=a.concat(zD(i.serverSyncTree_,m.path,he,m.currentWriteId,m.applyLocally)),a=a.concat(xo(i.serverSyncTree_,W,!0))}else v=!0,T="nodata",a=a.concat(xo(i.serverSyncTree_,m.currentWriteId,!0))}Na(i.eventQueue_,t,a),a=[],v&&(e[d].status=2,function(w){setTimeout(w,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Jf(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)nc(s[d]);s_(i,i.transactionQueueTree_)}function lw(i,e){let t,s=i.transactionQueueTree_;for(t=Fe(e);t!==null&&el(s)===void 0;)s=n_(s,t),e=ct(e),t=Fe(e);return s}function uw(i,e){const t=[];return cw(i,e,t),t.sort((s,a)=>s.order-a.order),t}function cw(i,e,t){const s=el(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Zf(e,a=>{cw(i,a,t)})}function Jf(i,e){const t=el(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,ew(e,t.length>0?t:void 0)}Zf(e,s=>{Jf(i,s)})}function _O(i,e){const t=sc(lw(i,e)),s=n_(i.transactionQueueTree_,e);return WD(s,a=>{Bm(i,a)}),Bm(i,s),nw(s,a=>{Bm(i,a)}),t}function Bm(i,e){const t=el(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(se(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(se(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(xo(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?ew(e,void 0):t.length=l+1,Na(i.eventQueue_,sc(e),a);for(let c=0;c<s.length;c++)nc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function vO(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Vn(`Invalid query segment '${t}' in query '${i}'`)}return e}const h0=function(i,e){const t=EO(i),s=t.namespace;t.domain==="firebase.com"&&Ss(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||XC();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new pA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ft(t.pathString)}},EO=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(d=i.substring(0,g-1),i=i.substring(g+2));let v=i.indexOf("/");v===-1&&(v=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(v,T)),v<T&&(a=yO(i.substring(v,T)));const w=vO(i.substring(Math.min(i.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const P=e.slice(0,g);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const B=e.indexOf(".");s=e.substring(0,B).toLowerCase(),t=e.substring(B+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
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
 */class a_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ve(this._path)?null:AA(this._path)}get ref(){return new tl(this._repo,this._path)}get _queryIdentifier(){const e=XT(this._queryParams),t=Bg(e);return t==="{}"?"default":t}get _queryObject(){return XT(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof a_))return!1;const t=this._repo===e._repo,s=RA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+MN(this._path)}}class tl extends a_{constructor(e,t){super(e,t,new Kg,!1)}get parent(){const e=bA(this._path);return e===null?null:new tl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}LD(tl);UD(tl);/**
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
 */const TO="FIREBASE_DATABASE_EMULATOR_HOST",cg={};let SO=!1;function AO(i,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Rs(l);i.repoInfo_=new pA(e,c,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(i.authTokenProvider_=s)}function wO(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||Ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),un("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=h0(l,a),d=c.repoInfo,m;typeof process<"u"&&OT&&(m=OT[TO]),m?(l=`http://${m}?ns=${d.namespace}`,c=h0(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new aN(i.name,i.options,e);tO("Invalid Firebase Database URL",c),Ve(c.path)||Ss("Database URL must point to the root of a Firebase Database (not including a child path).");const v=RO(d,i,g,new rN(i,t));return new IO(v,i)}function bO(i,e){const t=cg[e];(!t||t[i.key]!==i)&&Ss(`Database ${e}(${i.repoInfo_}) has already been deleted.`),pO(i),delete t[i.key]}function RO(i,e,t,s){let a=cg[e.name];a||(a={},cg[e.name]=a);let l=a[i.toURLString()];return l&&Ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new lO(i,SO,t,s),a[i.toURLString()]=l,l}class IO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tl(this._repo,st())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ss("Cannot call "+e+" on a deleted database.")}}function CO(i=Qf(),e){const t=Ju(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Vg("database");s&&NO(t,...s)}return t}function NO(i,e,t,s={}){i=gt(i),i._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&mr(s,l.repoInfo_.emulatorOptions))return;Ss("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Ss('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Xh(Xh.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:GS(s.mockUserToken,i.app.options.projectId);c=new Xh(d)}Rs(e)&&(Hf(e),Gf("Database",!0)),AO(l,a,s,c)}/**
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
 */function DO(i){HC(Ia),gr(new Es("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return wO(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Zn(MT,kT,i),Zn(MT,kT,"esm2017")}_s.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};_s.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};DO();var f0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,hw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,b){function I(){}I.prototype=b.prototype,O.D=b.prototype,O.prototype=new I,O.prototype.constructor=O,O.C=function(M,N,D){for(var R=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)R[Le-2]=arguments[Le];return b.prototype[N].apply(M,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(O,b,I){I||(I=0);var M=Array(16);if(typeof b=="string")for(var N=0;16>N;++N)M[N]=b.charCodeAt(I++)|b.charCodeAt(I++)<<8|b.charCodeAt(I++)<<16|b.charCodeAt(I++)<<24;else for(N=0;16>N;++N)M[N]=b[I++]|b[I++]<<8|b[I++]<<16|b[I++]<<24;b=O.g[0],I=O.g[1],N=O.g[2];var D=O.g[3],R=b+(D^I&(N^D))+M[0]+3614090360&4294967295;b=I+(R<<7&4294967295|R>>>25),R=D+(N^b&(I^N))+M[1]+3905402710&4294967295,D=b+(R<<12&4294967295|R>>>20),R=N+(I^D&(b^I))+M[2]+606105819&4294967295,N=D+(R<<17&4294967295|R>>>15),R=I+(b^N&(D^b))+M[3]+3250441966&4294967295,I=N+(R<<22&4294967295|R>>>10),R=b+(D^I&(N^D))+M[4]+4118548399&4294967295,b=I+(R<<7&4294967295|R>>>25),R=D+(N^b&(I^N))+M[5]+1200080426&4294967295,D=b+(R<<12&4294967295|R>>>20),R=N+(I^D&(b^I))+M[6]+2821735955&4294967295,N=D+(R<<17&4294967295|R>>>15),R=I+(b^N&(D^b))+M[7]+4249261313&4294967295,I=N+(R<<22&4294967295|R>>>10),R=b+(D^I&(N^D))+M[8]+1770035416&4294967295,b=I+(R<<7&4294967295|R>>>25),R=D+(N^b&(I^N))+M[9]+2336552879&4294967295,D=b+(R<<12&4294967295|R>>>20),R=N+(I^D&(b^I))+M[10]+4294925233&4294967295,N=D+(R<<17&4294967295|R>>>15),R=I+(b^N&(D^b))+M[11]+2304563134&4294967295,I=N+(R<<22&4294967295|R>>>10),R=b+(D^I&(N^D))+M[12]+1804603682&4294967295,b=I+(R<<7&4294967295|R>>>25),R=D+(N^b&(I^N))+M[13]+4254626195&4294967295,D=b+(R<<12&4294967295|R>>>20),R=N+(I^D&(b^I))+M[14]+2792965006&4294967295,N=D+(R<<17&4294967295|R>>>15),R=I+(b^N&(D^b))+M[15]+1236535329&4294967295,I=N+(R<<22&4294967295|R>>>10),R=b+(N^D&(I^N))+M[1]+4129170786&4294967295,b=I+(R<<5&4294967295|R>>>27),R=D+(I^N&(b^I))+M[6]+3225465664&4294967295,D=b+(R<<9&4294967295|R>>>23),R=N+(b^I&(D^b))+M[11]+643717713&4294967295,N=D+(R<<14&4294967295|R>>>18),R=I+(D^b&(N^D))+M[0]+3921069994&4294967295,I=N+(R<<20&4294967295|R>>>12),R=b+(N^D&(I^N))+M[5]+3593408605&4294967295,b=I+(R<<5&4294967295|R>>>27),R=D+(I^N&(b^I))+M[10]+38016083&4294967295,D=b+(R<<9&4294967295|R>>>23),R=N+(b^I&(D^b))+M[15]+3634488961&4294967295,N=D+(R<<14&4294967295|R>>>18),R=I+(D^b&(N^D))+M[4]+3889429448&4294967295,I=N+(R<<20&4294967295|R>>>12),R=b+(N^D&(I^N))+M[9]+568446438&4294967295,b=I+(R<<5&4294967295|R>>>27),R=D+(I^N&(b^I))+M[14]+3275163606&4294967295,D=b+(R<<9&4294967295|R>>>23),R=N+(b^I&(D^b))+M[3]+4107603335&4294967295,N=D+(R<<14&4294967295|R>>>18),R=I+(D^b&(N^D))+M[8]+1163531501&4294967295,I=N+(R<<20&4294967295|R>>>12),R=b+(N^D&(I^N))+M[13]+2850285829&4294967295,b=I+(R<<5&4294967295|R>>>27),R=D+(I^N&(b^I))+M[2]+4243563512&4294967295,D=b+(R<<9&4294967295|R>>>23),R=N+(b^I&(D^b))+M[7]+1735328473&4294967295,N=D+(R<<14&4294967295|R>>>18),R=I+(D^b&(N^D))+M[12]+2368359562&4294967295,I=N+(R<<20&4294967295|R>>>12),R=b+(I^N^D)+M[5]+4294588738&4294967295,b=I+(R<<4&4294967295|R>>>28),R=D+(b^I^N)+M[8]+2272392833&4294967295,D=b+(R<<11&4294967295|R>>>21),R=N+(D^b^I)+M[11]+1839030562&4294967295,N=D+(R<<16&4294967295|R>>>16),R=I+(N^D^b)+M[14]+4259657740&4294967295,I=N+(R<<23&4294967295|R>>>9),R=b+(I^N^D)+M[1]+2763975236&4294967295,b=I+(R<<4&4294967295|R>>>28),R=D+(b^I^N)+M[4]+1272893353&4294967295,D=b+(R<<11&4294967295|R>>>21),R=N+(D^b^I)+M[7]+4139469664&4294967295,N=D+(R<<16&4294967295|R>>>16),R=I+(N^D^b)+M[10]+3200236656&4294967295,I=N+(R<<23&4294967295|R>>>9),R=b+(I^N^D)+M[13]+681279174&4294967295,b=I+(R<<4&4294967295|R>>>28),R=D+(b^I^N)+M[0]+3936430074&4294967295,D=b+(R<<11&4294967295|R>>>21),R=N+(D^b^I)+M[3]+3572445317&4294967295,N=D+(R<<16&4294967295|R>>>16),R=I+(N^D^b)+M[6]+76029189&4294967295,I=N+(R<<23&4294967295|R>>>9),R=b+(I^N^D)+M[9]+3654602809&4294967295,b=I+(R<<4&4294967295|R>>>28),R=D+(b^I^N)+M[12]+3873151461&4294967295,D=b+(R<<11&4294967295|R>>>21),R=N+(D^b^I)+M[15]+530742520&4294967295,N=D+(R<<16&4294967295|R>>>16),R=I+(N^D^b)+M[2]+3299628645&4294967295,I=N+(R<<23&4294967295|R>>>9),R=b+(N^(I|~D))+M[0]+4096336452&4294967295,b=I+(R<<6&4294967295|R>>>26),R=D+(I^(b|~N))+M[7]+1126891415&4294967295,D=b+(R<<10&4294967295|R>>>22),R=N+(b^(D|~I))+M[14]+2878612391&4294967295,N=D+(R<<15&4294967295|R>>>17),R=I+(D^(N|~b))+M[5]+4237533241&4294967295,I=N+(R<<21&4294967295|R>>>11),R=b+(N^(I|~D))+M[12]+1700485571&4294967295,b=I+(R<<6&4294967295|R>>>26),R=D+(I^(b|~N))+M[3]+2399980690&4294967295,D=b+(R<<10&4294967295|R>>>22),R=N+(b^(D|~I))+M[10]+4293915773&4294967295,N=D+(R<<15&4294967295|R>>>17),R=I+(D^(N|~b))+M[1]+2240044497&4294967295,I=N+(R<<21&4294967295|R>>>11),R=b+(N^(I|~D))+M[8]+1873313359&4294967295,b=I+(R<<6&4294967295|R>>>26),R=D+(I^(b|~N))+M[15]+4264355552&4294967295,D=b+(R<<10&4294967295|R>>>22),R=N+(b^(D|~I))+M[6]+2734768916&4294967295,N=D+(R<<15&4294967295|R>>>17),R=I+(D^(N|~b))+M[13]+1309151649&4294967295,I=N+(R<<21&4294967295|R>>>11),R=b+(N^(I|~D))+M[4]+4149444226&4294967295,b=I+(R<<6&4294967295|R>>>26),R=D+(I^(b|~N))+M[11]+3174756917&4294967295,D=b+(R<<10&4294967295|R>>>22),R=N+(b^(D|~I))+M[2]+718787259&4294967295,N=D+(R<<15&4294967295|R>>>17),R=I+(D^(N|~b))+M[9]+3951481745&4294967295,O.g[0]=O.g[0]+b&4294967295,O.g[1]=O.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,O.g[2]=O.g[2]+N&4294967295,O.g[3]=O.g[3]+D&4294967295}s.prototype.u=function(O,b){b===void 0&&(b=O.length);for(var I=b-this.blockSize,M=this.B,N=this.h,D=0;D<b;){if(N==0)for(;D<=I;)a(this,O,D),D+=this.blockSize;if(typeof O=="string"){for(;D<b;)if(M[N++]=O.charCodeAt(D++),N==this.blockSize){a(this,M),N=0;break}}else for(;D<b;)if(M[N++]=O[D++],N==this.blockSize){a(this,M),N=0;break}}this.h=N,this.o+=b},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var b=1;b<O.length-8;++b)O[b]=0;var I=8*this.o;for(b=O.length-8;b<O.length;++b)O[b]=I&255,I/=256;for(this.u(O),O=Array(16),b=I=0;4>b;++b)for(var M=0;32>M;M+=8)O[I++]=this.g[b]>>>M&255;return O};function l(O,b){var I=d;return Object.prototype.hasOwnProperty.call(I,O)?I[O]:I[O]=b(O)}function c(O,b){this.h=b;for(var I=[],M=!0,N=O.length-1;0<=N;N--){var D=O[N]|0;M&&D==b||(I[N]=D,M=!1)}this.g=I}var d={};function m(O){return-128<=O&&128>O?l(O,function(b){return new c([b|0],0>b?-1:0)}):new c([O|0],0>O?-1:0)}function g(O){if(isNaN(O)||!isFinite(O))return T;if(0>O)return W(g(-O));for(var b=[],I=1,M=0;O>=I;M++)b[M]=O/I|0,I*=4294967296;return new c(b,0)}function v(O,b){if(O.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(O.charAt(0)=="-")return W(v(O.substring(1),b));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(b,8)),M=T,N=0;N<O.length;N+=8){var D=Math.min(8,O.length-N),R=parseInt(O.substring(N,N+D),b);8>D?(D=g(Math.pow(b,D)),M=M.j(D).add(g(R))):(M=M.j(I),M=M.add(g(R)))}return M}var T=m(0),w=m(1),P=m(16777216);i=c.prototype,i.m=function(){if(K(this))return-W(this).m();for(var O=0,b=1,I=0;I<this.g.length;I++){var M=this.i(I);O+=(0<=M?M:4294967296+M)*b,b*=4294967296}return O},i.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(B(this))return"0";if(K(this))return"-"+W(this).toString(O);for(var b=g(Math.pow(O,6)),I=this,M="";;){var N=fe(I,b).g;I=ge(I,N.j(b));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(O);if(I=N,B(I))return D+M;for(;6>D.length;)D="0"+D;M=D+M}},i.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function B(O){if(O.h!=0)return!1;for(var b=0;b<O.g.length;b++)if(O.g[b]!=0)return!1;return!0}function K(O){return O.h==-1}i.l=function(O){return O=ge(this,O),K(O)?-1:B(O)?0:1};function W(O){for(var b=O.g.length,I=[],M=0;M<b;M++)I[M]=~O.g[M];return new c(I,~O.h).add(w)}i.abs=function(){return K(this)?W(this):this},i.add=function(O){for(var b=Math.max(this.g.length,O.g.length),I=[],M=0,N=0;N<=b;N++){var D=M+(this.i(N)&65535)+(O.i(N)&65535),R=(D>>>16)+(this.i(N)>>>16)+(O.i(N)>>>16);M=R>>>16,D&=65535,R&=65535,I[N]=R<<16|D}return new c(I,I[I.length-1]&-2147483648?-1:0)};function ge(O,b){return O.add(W(b))}i.j=function(O){if(B(this)||B(O))return T;if(K(this))return K(O)?W(this).j(W(O)):W(W(this).j(O));if(K(O))return W(this.j(W(O)));if(0>this.l(P)&&0>O.l(P))return g(this.m()*O.m());for(var b=this.g.length+O.g.length,I=[],M=0;M<2*b;M++)I[M]=0;for(M=0;M<this.g.length;M++)for(var N=0;N<O.g.length;N++){var D=this.i(M)>>>16,R=this.i(M)&65535,Le=O.i(N)>>>16,Ne=O.i(N)&65535;I[2*M+2*N]+=R*Ne,he(I,2*M+2*N),I[2*M+2*N+1]+=D*Ne,he(I,2*M+2*N+1),I[2*M+2*N+1]+=R*Le,he(I,2*M+2*N+1),I[2*M+2*N+2]+=D*Le,he(I,2*M+2*N+2)}for(M=0;M<b;M++)I[M]=I[2*M+1]<<16|I[2*M];for(M=b;M<2*b;M++)I[M]=0;return new c(I,0)};function he(O,b){for(;(O[b]&65535)!=O[b];)O[b+1]+=O[b]>>>16,O[b]&=65535,b++}function ce(O,b){this.g=O,this.h=b}function fe(O,b){if(B(b))throw Error("division by zero");if(B(O))return new ce(T,T);if(K(O))return b=fe(W(O),b),new ce(W(b.g),W(b.h));if(K(b))return b=fe(O,W(b)),new ce(W(b.g),b.h);if(30<O.g.length){if(K(O)||K(b))throw Error("slowDivide_ only works with positive integers.");for(var I=w,M=b;0>=M.l(O);)I=re(I),M=re(M);var N=ue(I,1),D=ue(M,1);for(M=ue(M,2),I=ue(I,2);!B(M);){var R=D.add(M);0>=R.l(O)&&(N=N.add(I),D=R),M=ue(M,1),I=ue(I,1)}return b=ge(O,N.j(b)),new ce(N,b)}for(N=T;0<=O.l(b);){for(I=Math.max(1,Math.floor(O.m()/b.m())),M=Math.ceil(Math.log(I)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),D=g(I),R=D.j(b);K(R)||0<R.l(O);)I-=M,D=g(I),R=D.j(b);B(D)&&(D=w),N=N.add(D),O=ge(O,R)}return new ce(N,O)}i.A=function(O){return fe(this,O).h},i.and=function(O){for(var b=Math.max(this.g.length,O.g.length),I=[],M=0;M<b;M++)I[M]=this.i(M)&O.i(M);return new c(I,this.h&O.h)},i.or=function(O){for(var b=Math.max(this.g.length,O.g.length),I=[],M=0;M<b;M++)I[M]=this.i(M)|O.i(M);return new c(I,this.h|O.h)},i.xor=function(O){for(var b=Math.max(this.g.length,O.g.length),I=[],M=0;M<b;M++)I[M]=this.i(M)^O.i(M);return new c(I,this.h^O.h)};function re(O){for(var b=O.g.length+1,I=[],M=0;M<b;M++)I[M]=O.i(M)<<1|O.i(M-1)>>>31;return new c(I,O.h)}function ue(O,b){var I=b>>5;b%=32;for(var M=O.g.length-I,N=[],D=0;D<M;D++)N[D]=0<b?O.i(D+I)>>>b|O.i(D+I+1)<<32-b:O.i(D+I);return new c(N,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,hw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,dr=c}).apply(typeof f0<"u"?f0:typeof self<"u"?self:typeof window<"u"?window:{});var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fw,bu,dw,Zh,hg,pw,mw,gw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof qh=="object"&&qh];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var L=h[A];if(!(L in y))break e;y=y[L]}h=h[h.length-1],A=y[h],_=_(A),_!=A&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,A=!1,L={next:function(){if(!A&&y<h.length){var q=y++;return{value:_(q,h[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),h.apply(_,L)}}return function(){return h.apply(_,arguments)}}function w(h,_,y){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,w.apply(null,arguments)}function P(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function B(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(A,L,q){for(var ne=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ne[Ue-2]=arguments[Ue];return _.prototype[L].apply(A,ne)}}function K(h){const _=h.length;if(0<_){const y=Array(_);for(let A=0;A<_;A++)y[A]=h[A];return y}return[]}function W(h,_){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(m(A)){const L=h.length||0,q=A.length||0;h.length=L+q;for(let ne=0;ne<q;ne++)h[L+ne]=A[ne]}else h.push(A)}}class ge{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function he(h){return/^[\s\xa0]*$/.test(h)}function ce(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function fe(h){return fe[" "](h),h}fe[" "]=function(){};var re=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function ue(h,_,y){for(const A in h)_.call(y,h[A],A,h)}function O(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function b(h){const _={};for(const y in h)_[y]=h[y];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let y,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(y in A)h[y]=A[y];for(let q=0;q<I.length;q++)y=I[q],Object.prototype.hasOwnProperty.call(A,y)&&(h[y]=A[y])}}function N(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function D(h){d.setTimeout(()=>{throw h},0)}function R(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Le{constructor(){this.h=this.g=null}add(_,y){const A=Ne.get();A.set(_,y),this.h?this.h.next=A:this.g=A,this.h=A}}var Ne=new ge(()=>new H,h=>h.reset());class H{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let te,pe=!1,Ge=new Le,k=()=>{const h=d.Promise.resolve(void 0);te=()=>{h.then(J)}};var J=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(y){D(y)}var _=Ne;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}pe=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var _e=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h}();function De(h,_){if(ee.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(re){e:{try{fe(_.nodeName);var L=!0;break e}catch{}L=!1}L||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}B(De,ee);var Ae={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),at=0;function di(h,_,y,A,L){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!A,this.ha=L,this.key=++at,this.da=this.fa=!1}function Cs(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Fi(h){this.src=h,this.g={},this.h=0}Fi.prototype.add=function(h,_,y,A,L){var q=h.toString();h=this.g[q],h||(h=this.g[q]=[],this.h++);var ne=Dr(h,_,A,L);return-1<ne?(_=h[ne],y||(_.fa=!1)):(_=new di(_,this.src,q,!!A,L),_.fa=y,h.push(_)),_};function Nr(h,_){var y=_.type;if(y in h.g){var A=h.g[y],L=Array.prototype.indexOf.call(A,_,void 0),q;(q=0<=L)&&Array.prototype.splice.call(A,L,1),q&&(Cs(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Dr(h,_,y,A){for(var L=0;L<h.length;++L){var q=h[L];if(!q.da&&q.listener==_&&q.capture==!!y&&q.ha==A)return L}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),ol={};function _c(h,_,y,A,L){if(Array.isArray(_)){for(var q=0;q<_.length;q++)_c(h,_[q],y,A,L);return null}return y=yc(y),h&&h[zt]?h.K(_,y,g(A)?!!A.capture:!1,L):Ln(h,_,y,!1,A,L)}function Ln(h,_,y,A,L,q){if(!_)throw Error("Invalid event type");var ne=g(L)?!!L.capture:!!L,Ue=Pa(h);if(Ue||(h[Or]=Ue=new Fi(h)),y=Ue.add(_,y,A,ne,q),y.proxy)return y;if(A=Ad(),y.proxy=A,A.src=h,A.listener=y,h.addEventListener)_e||(L=ne),L===void 0&&(L=!1),h.addEventListener(_.toString(),A,L);else if(h.attachEvent)h.attachEvent(Mr(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ad(){function h(y){return _.call(h.src,h.listener,y)}const _=wd;return h}function ll(h,_,y,A,L){if(Array.isArray(_))for(var q=0;q<_.length;q++)ll(h,_[q],y,A,L);else A=g(A)?!!A.capture:!!A,y=yc(y),h&&h[zt]?(h=h.i,_=String(_).toString(),_ in h.g&&(q=h.g[_],y=Dr(q,y,A,L),-1<y&&(Cs(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Pa(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Dr(_,y,A,L)),(y=-1<h?_[h]:null)&&xa(y))}function xa(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[zt])Nr(_.i,h);else{var y=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(y,A,h.capture):_.detachEvent?_.detachEvent(Mr(y),A):_.addListener&&_.removeListener&&_.removeListener(A),(y=Pa(_))?(Nr(y,h),y.h==0&&(y.src=null,_[Or]=null)):Cs(h)}}}function Mr(h){return h in ol?ol[h]:ol[h]="on"+h}function wd(h,_){if(h.da)h=!0;else{_=new De(_,this);var y=h.listener,A=h.ha||h.src;h.fa&&xa(h),h=y.call(A,_)}return h}function Pa(h){return h=h[Or],h instanceof Fi?h:null}var ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function yc(h){return typeof h=="function"?h:(h[ul]||(h[ul]=function(_){return h.handleEvent(_)}),h[ul])}function yt(){ie.call(this),this.i=new Fi(this),this.M=this,this.F=null}B(yt,ie),yt.prototype[zt]=!0,yt.prototype.removeEventListener=function(h,_,y,A){ll(this,h,_,y,A)};function Xe(h,_){var y,A=h.F;if(A)for(y=[];A;A=A.F)y.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new ee(_,h);else if(_ instanceof ee)_.target=_.target||h;else{var L=_;_=new ee(A,h),M(_,L)}if(L=!0,y)for(var q=y.length-1;0<=q;q--){var ne=_.g=y[q];L=bn(ne,A,!0,_)&&L}if(ne=_.g=h,L=bn(ne,A,!0,_)&&L,L=bn(ne,A,!1,_)&&L,y)for(q=0;q<y.length;q++)ne=_.g=y[q],L=bn(ne,A,!1,_)&&L}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],A=0;A<y.length;A++)Cs(y[A]);delete h.g[_],h.h--}}this.F=null},yt.prototype.K=function(h,_,y,A){return this.i.add(String(h),_,!1,y,A)},yt.prototype.L=function(h,_,y,A){return this.i.add(String(h),_,!0,y,A)};function bn(h,_,y,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var L=!0,q=0;q<_.length;++q){var ne=_[q];if(ne&&!ne.da&&ne.capture==y){var Ue=ne.listener,xt=ne.ha||ne.src;ne.fa&&Nr(h.i,ne),L=Ue.call(xt,A)!==!1&&L}}return L&&!A.defaultPrevented}function sn(h,_,y){if(typeof h=="function")y&&(h=w(h,y));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function vc(h){h.g=sn(()=>{h.g=null,h.i&&(h.i=!1,vc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class bd extends ie{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:vc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kr(h){ie.call(this),this.h=h,this.g={}}B(kr,ie);var xr=[];function Pr(h){ue(h.g,function(_,y){this.g.hasOwnProperty(y)&&xa(_)},h),h.g={}}kr.prototype.N=function(){kr.aa.N.call(this),Pr(this)},kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=d.JSON.stringify,Va=d.JSON.parse,Vr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function cl(){}cl.prototype.h=null;function hl(h){return h.h||(h.h=h.i())}function fl(){}var qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hi(){ee.call(this,"d")}B(Hi,ee);function dl(){ee.call(this,"c")}B(dl,ee);var pi={},pl=null;function Ns(){return pl=pl||new yt}pi.La="serverreachability";function La(h){ee.call(this,pi.La,h)}B(La,ee);function Ds(h){const _=Ns();Xe(_,new La(_))}pi.STAT_EVENT="statevent";function Ec(h,_){ee.call(this,pi.STAT_EVENT,h),this.stat=_}B(Ec,ee);function dt(h){const _=Ns();Xe(_,new Ec(_,h))}pi.Ma="timingevent";function kt(h,_){ee.call(this,pi.Ma,h),this.size=_}B(kt,ee);function Rt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function ml(h,_,y,A,L,q){h.info(function(){if(h.g)if(q)for(var ne="",Ue=q.split("&"),xt=0;xt<Ue.length;xt++){var ze=Ue[xt].split("=");if(1<ze.length){var jt=ze[0];ze=ze[1];var Pt=jt.split("_");ne=2<=Pt.length&&Pt[1]=="type"?ne+(jt+"="+ze+"&"):ne+(jt+"=redacted&")}}else ne=null;else ne=q;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+_+`
`+y+`
`+ne})}function Rd(h,_,y,A,L,q,ne){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+_+`
`+y+`
`+q+" "+ne})}function Os(h,_,y,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Lr(h,y)+(A?" "+A:"")})}function Tc(h,_){h.info(function(){return"TIMEOUT: "+_})}Un.prototype.info=function(){};function Lr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var A=y[h];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var q=L[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ne=1;ne<L.length;ne++)L[ne]=""}}}}return ti(y)}catch{return _}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mi;function gi(){}B(gi,cl),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},mi=new gi;function pn(h,_,y,A){this.j=h,this.i=_,this.l=y,this.R=A||1,this.U=new kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}var gl={},Ua={};function ni(h,_,y){h.L=1,h.v=Fr(Rn(_)),h.m=y,h.P=!0,Ki(h,null)}function Ki(h,_){h.F=Date.now(),Ur(h),h.A=Rn(h.v);var y=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Sl(y.i,"t",A),h.C=0,y=h.j.J,h.h=new St,h.g=Lc(h.j,y?_:null,!h.m),0<h.O&&(h.M=new bd(w(h.Y,h,h.g),h.O)),_=h.U,y=h.g,A=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(xr[0]=L.toString()),L=xr);for(var q=0;q<L.length;q++){var ne=_c(y,L[q],A||_.handleEvent,!1,_.h||_);if(!ne)break;_.g[ne.key]=ne}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ds(),ml(h.i,h.u,h.A,h.l,h.R,h.m)}pn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Fn(h)==3?_.j():this.Y(h)},pn.prototype.Y=function(h){try{if(h==this.g)e:{const Pt=Fn(this.g);var _=this.g.Ba();const es=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||Pt!=4||_==7||(_==8||0>=es?Ds(3):Ds(2)),ks(this);var y=this.g.Z();this.X=y;t:if(Sc(this)){var A=Nc(this.g);h="";var L=A.length,q=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),_i(this);var ne="";break t}this.h.i=new d.TextDecoder}for(_=0;_<L;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(q&&_==L-1)});A.length=0,this.h.g+=h,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=y==200,Rd(this.i,this.u,this.A,this.l,this.R,Pt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,xt=this.g;if((Ue=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(Ue)){var ze=Ue;break t}}ze=null}if(y=ze)Os(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,y);else{this.o=!1,this.s=3,dt(12),Qt(this),_i(this);break e}}if(this.P){y=!0;let Wt;for(;!this.J&&this.C<ne.length;)if(Wt=Ac(this,ne),Wt==Ua){Pt==4&&(this.s=4,dt(14),y=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==gl){this.s=4,dt(15),Os(this.i,this.l,ne,"[Invalid Chunk]"),y=!1;break}else Os(this.i,this.l,Wt,null),zr(this,Wt);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||ne.length!=0||this.h.h||(this.s=1,dt(16),y=!1),this.o=this.o&&y,!y)Os(this.i,this.l,ne,"[Invalid Chunked Response]"),Qt(this),_i(this);else if(0<ne.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Xr(jt),jt.M=!0,dt(11))}}else Os(this.i,this.l,ne,null),zr(this,ne);Pt==4&&Qt(this),this.o&&!this.J&&(Pt==4?xc(this.j,this):(this.o=!1,Ur(this)))}else Od(this.g),y==400&&0<ne.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Qt(this),_i(this)}}}catch{}finally{}};function Sc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ac(h,_){var y=h.C,A=_.indexOf(`
`,y);return A==-1?Ua:(y=Number(_.substring(y,A)),isNaN(y)?gl:(A+=1,A+y>_.length?Ua:(_=_.slice(A,A+y),h.C=A+y,_)))}pn.prototype.cancel=function(){this.J=!0,Qt(this)};function Ur(h){h.S=Date.now()+h.I,wc(h,h.I)}function wc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Rt(w(h.ba,h),_)}function ks(h){h.B&&(d.clearTimeout(h.B),h.B=null)}pn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Tc(this.i,this.A),this.L!=2&&(Ds(),dt(17)),Qt(this),this.s=2,_i(this)):wc(this,this.S-h)};function _i(h){h.j.G==0||h.J||xc(h.j,h)}function Qt(h){ks(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Pr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function zr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||_l(y.h,h))){if(!h.K&&_l(y.h,h)&&y.G==3){try{var A=y.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)Xa(y),Qa(y);else break e;Il(y),dt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Rt(w(y.Za,y),6e3));if(1>=Ba(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ji(y,11)}else if((h.K||y.g==h)&&Xa(y),!he(_))for(L=y.Da.g.parse(_),_=0;_<L.length;_++){let ze=L[_];if(y.T=ze[0],ze=ze[1],y.G==2)if(ze[0]=="c"){y.K=ze[1],y.ia=ze[2];const jt=ze[3];jt!=null&&(y.la=jt,y.j.info("VER="+y.la));const Pt=ze[4];Pt!=null&&(y.Aa=Pt,y.j.info("SVER="+y.Aa));const es=ze[5];es!=null&&typeof es=="number"&&0<es&&(A=1.5*es,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const Wt=h.g;if(Wt){const wi=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wi){var q=A.h;q.g||wi.indexOf("spdy")==-1&&wi.indexOf("quic")==-1&&wi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ja(q,q.h),q.h=null))}if(A.D){const Nl=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Nl&&(A.ya=Nl,Je(A.I,A.D,Nl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var ne=h;if(A.qa=Vc(A,A.J?A.ia:null,A.W),ne.K){mn(A.h,ne);var Ue=ne,xt=A.L;xt&&(Ue.I=xt),Ue.B&&(ks(Ue),Ur(Ue)),A.g=ne}else Mc(A);0<y.i.length&&Wa(y)}else ze[0]!="stop"&&ze[0]!="close"||Ji(y,7);else y.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Ji(y,7):bl(y):ze[0]!="noop"&&y.l&&y.l.ta(ze),y.v=0)}}Ds(4)}catch{}}var bc=class{constructor(h,_){this.g=h,this.map=_}};function Yi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function za(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ba(h){return h.h?1:h.g?h.g.size:0}function _l(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function ja(h,_){h.g?h.g.add(_):h.h=_}function mn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Yi.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function yl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return K(h.i)}function Id(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],y=h.length,A=0;A<y;A++)_.push(h[A]);return _}_=[],y=0;for(A in h)_[y++]=h[A];return _}function Fa(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const A in h)_[y++]=A;return _}}}function vl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=Fa(h),A=Id(h),L=A.length,q=0;q<L;q++)_.call(void 0,A[q],y&&y[q],h)}var Br=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cd(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var A=h[y].indexOf("="),L=null;if(0<=A){var q=h[y].substring(0,A);L=h[y].substring(A+1)}else q=h[y];_(q,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function It(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof It){this.h=h.h,jr(this,h.j),this.o=h.o,this.g=h.g,xs(this,h.s),this.l=h.l;var _=h.i,y=new Wi;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Qi(this,y),this.m=h.m}else h&&(_=String(h).match(Br))?(this.h=!1,jr(this,_[1]||"",!0),this.o=zn(_[2]||""),this.g=zn(_[3]||"",!0),xs(this,_[4]),this.l=zn(_[5]||"",!0),Qi(this,_[6]||"",!0),this.m=zn(_[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}It.prototype.toString=function(){var h=[],_=this.j;_&&h.push(qr(_,El,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(qr(_,El,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(qr(y,y.charAt(0)=="/"?Nd:Tl,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",qr(y,qa)),h.join("")};function Rn(h){return new It(h)}function jr(h,_,y){h.j=y?zn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function xs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Qi(h,_,y){_ instanceof Wi?(h.i=_,Ic(h.i,h.h)):(y||(_=qr(_,Dd)),h.i=new Wi(_,h.h))}function Je(h,_,y){h.i.set(_,y)}function Fr(h){return Je(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function zn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function qr(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Rc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Rc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var El=/[#\/\?@]/g,Tl=/[#\?:]/g,Nd=/[#\?]/g,Dd=/[#\?@]/g,qa=/#/g;function Wi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Bn(h){h.g||(h.g=new Map,h.h=0,h.i&&Cd(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}i=Wi.prototype,i.add=function(h,_){Bn(this),this.i=null,h=yi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function Xi(h,_){Bn(h),_=yi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function $i(h,_){return Bn(h),_=yi(h,_),h.g.has(_)}i.forEach=function(h,_){Bn(this),this.g.forEach(function(y,A){y.forEach(function(L){h.call(_,L,A,this)},this)},this)},i.na=function(){Bn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let A=0;A<_.length;A++){const L=h[A];for(let q=0;q<L.length;q++)y.push(_[A])}return y},i.V=function(h){Bn(this);let _=[];if(typeof h=="string")$i(this,h)&&(_=_.concat(this.g.get(yi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},i.set=function(h,_){return Bn(this),this.i=null,h=yi(this,h),$i(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Sl(h,_,y){Xi(h,_),0<y.length&&(h.i=null,h.g.set(yi(h,_),K(y)),h.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var A=_[y];const q=encodeURIComponent(String(A)),ne=this.V(A);for(A=0;A<ne.length;A++){var L=q;ne[A]!==""&&(L+="="+encodeURIComponent(String(ne[A]))),h.push(L)}}return this.i=h.join("&")};function yi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Ic(h,_){_&&!h.j&&(Bn(h),h.i=null,h.g.forEach(function(y,A){var L=A.toLowerCase();A!=L&&(Xi(this,A),Sl(this,L,y))},h)),h.j=_}function Hr(h,_){const y=new Un;if(d.Image){const A=new Image;A.onload=P(jn,y,"TestLoadImage: loaded",!0,_,A),A.onerror=P(jn,y,"TestLoadImage: error",!1,_,A),A.onabort=P(jn,y,"TestLoadImage: abort",!1,_,A),A.ontimeout=P(jn,y,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function ii(h,_){const y=new Un,A=new AbortController,L=setTimeout(()=>{A.abort(),jn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(q=>{clearTimeout(L),q.ok?jn(y,"TestPingServer: ok",!0,_):jn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(L),jn(y,"TestPingServer: error",!1,_)})}function jn(h,_,y,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(y)}catch{}}function Gr(){this.g=new Vr}function vi(h,_,y){const A=y||"";try{vl(h,function(L,q){let ne=L;g(L)&&(ne=ti(L)),_.push(A+q+"="+encodeURIComponent(ne))})}catch(L){throw _.push(A+"type="+encodeURIComponent("_badmap")),L}}function Ps(h){this.l=h.Ub||null,this.j=h.eb||!1}B(Ps,cl),Ps.prototype.g=function(){return new Zi(this.l,this.j)},Ps.prototype.i=function(h){return function(){return h}}({});function Zi(h,_){yt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Zi,yt),i=Zi.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ti(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Al(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Al(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ei(this):Ti(this),this.readyState==3&&Al(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Ei(this))},i.Qa=function(h){this.g&&(this.response=h,Ei(this))},i.ga=function(){this.g&&Ei(this)};function Ei(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ti(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Ti(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function wl(h){let _="";return ue(h,function(y,A){_+=A,_+=":",_+=y,_+=`\r
`}),_}function Bt(h,_,y){e:{for(A in y){var A=!1;break e}A=!0}A||(y=wl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):Je(h,_,y))}function Ye(h){yt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ye,yt);var Ha=/^https?$/i,Kr=["POST","PUT"];i=Ye.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mi.g(),this.v=this.o?hl(this.o):hl(mi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(q){Cc(this,q);return}if(h=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)y.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())y.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),L=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Kr,_,void 0))||A||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ne]of y)this.g.setRequestHeader(q,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yr(this),this.u=!0,this.g.send(h),this.u=!1}catch(q){Cc(this,q)}};function Cc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Ga(h),Si(h)}function Ga(h){h.A||(h.A=!0,Xe(h,"complete"),Xe(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Xe(this,"complete"),Xe(this,"abort"),Si(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),Ye.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ka(this):this.bb())},i.bb=function(){Ka(this)};function Ka(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Fn(h)!=4||h.Z()!=2)){if(h.u&&Fn(h)==4)sn(h.Ea,0,h);else if(Xe(h,"readystatechange"),Fn(h)==4){h.h=!1;try{const ne=h.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var A;if(A=ne===0){var L=String(h.D).match(Br)[1]||null;!L&&d.self&&d.self.location&&(L=d.self.location.protocol.slice(0,-1)),A=!Ha.test(L?L.toLowerCase():"")}y=A}if(y)Xe(h,"complete"),Xe(h,"success");else{h.m=6;try{var q=2<Fn(h)?h.g.statusText:""}catch{q=""}h.l=q+" ["+h.Z()+"]",Ga(h)}}finally{Si(h)}}}}function Si(h,_){if(h.g){Yr(h);const y=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Xe(h,"ready");try{y.onreadystatechange=A}catch{}}}function Yr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Fn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Va(_)}};function Nc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Od(h){const _={};h=(h.g&&2<=Fn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(he(h[A]))continue;var y=N(h[A]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=_[L]||[];_[L]=q,q.push(y)}O(_,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qr(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function Ya(h){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qr("baseRetryDelayMs",5e3,h),this.cb=Qr("retryDelaySeedMs",1e4,h),this.Wa=Qr("forwardChannelMaxRetries",2,h),this.wa=Qr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(h&&h.concurrentRequestLimit),this.Da=new Gr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ya.prototype,i.la=8,i.G=1,i.connect=function(h,_,y,A){dt(0),this.W=h,this.H=_||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=Vc(this,null,this.W),Wa(this)};function bl(h){if(Dc(h),h.G==3){var _=h.U++,y=Rn(h.I);if(Je(y,"SID",h.K),Je(y,"RID",_),Je(y,"TYPE","terminate"),Wr(h,y),_=new pn(h,h.j,_),_.L=2,_.v=Fr(Rn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=Lc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Ur(_)}Pc(h)}function Qa(h){h.g&&(Xr(h),h.g.cancel(),h.g=null)}function Dc(h){Qa(h),h.u&&(d.clearTimeout(h.u),h.u=null),Xa(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Wa(h){if(!za(h.h)&&!h.s){h.s=!0;var _=h.Ga;te||k(),pe||(te(),pe=!0),Ge.add(_,h),h.B=0}}function Md(h,_){return Ba(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Rt(w(h.Ga,h,_),Cl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new pn(this,this.j,h);let q=this.o;if(this.S&&(q?(q=b(q),M(q,this.S)):q=this.S),this.m!==null||this.O||(L.H=q,q=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Oc(this,L,_),y=Rn(this.I),Je(y,"RID",h),Je(y,"CVER",22),this.D&&Je(y,"X-HTTP-Session-Id",this.D),Wr(this,y),q&&(this.O?_="headers="+encodeURIComponent(String(wl(q)))+"&"+_:this.m&&Bt(y,this.m,q)),ja(this.h,L),this.Ua&&Je(y,"TYPE","init"),this.P?(Je(y,"$req",_),Je(y,"SID","null"),L.T=!0,ni(L,y,null)):ni(L,y,_),this.G=2}}else this.G==3&&(h?Rl(this,h):this.i.length==0||za(this.h)||Rl(this))};function Rl(h,_){var y;_?y=_.l:y=h.U++;const A=Rn(h.I);Je(A,"SID",h.K),Je(A,"RID",y),Je(A,"AID",h.T),Wr(h,A),h.m&&h.o&&Bt(A,h.m,h.o),y=new pn(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Oc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),ja(h.h,y),ni(y,A,_)}function Wr(h,_){h.H&&ue(h.H,function(y,A){Je(_,A,y)}),h.l&&vl({},function(y,A){Je(_,A,y)})}function Oc(h,_,y){y=Math.min(h.i.length,y);var A=h.l?w(h.l.Na,h.l,h):null;e:{var L=h.i;let q=-1;for(;;){const ne=["count="+y];q==-1?0<y?(q=L[0].g,ne.push("ofs="+q)):q=0:ne.push("ofs="+q);let Ue=!0;for(let xt=0;xt<y;xt++){let ze=L[xt].g;const jt=L[xt].map;if(ze-=q,0>ze)q=Math.max(0,L[xt].g-100),Ue=!1;else try{vi(jt,ne,"req"+ze+"_")}catch{A&&A(jt)}}if(Ue){A=ne.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,A}function Mc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;te||k(),pe||(te(),pe=!0),Ge.add(_,h),h.v=0}}function Il(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Rt(w(h.Fa,h),Cl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,kc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Rt(w(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Qa(this),kc(this))};function Xr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function kc(h){h.g=new pn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Rn(h.qa);Je(_,"RID","rpc"),Je(_,"SID",h.K),Je(_,"AID",h.T),Je(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Je(_,"TO",h.ja),Je(_,"TYPE","xmlhttp"),Wr(h,_),h.m&&h.o&&Bt(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Fr(Rn(_)),y.m=null,y.P=!0,Ki(y,h)}i.Za=function(){this.C!=null&&(this.C=null,Qa(this),Il(this),dt(19))};function Xa(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function xc(h,_){var y=null;if(h.g==_){Xa(h),Xr(h),h.g=null;var A=2}else if(_l(h.h,_))y=_.D,mn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var L=h.B;A=Ns(),Xe(A,new kt(A,y)),Wa(h)}else Mc(h);else if(L=_.s,L==3||L==0&&0<_.X||!(A==1&&Md(h,_)||A==2&&Il(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),L){case 1:Ji(h,5);break;case 4:Ji(h,10);break;case 3:Ji(h,6);break;default:Ji(h,2)}}}function Cl(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function Ji(h,_){if(h.j.info("Error code "+_),_==2){var y=w(h.fb,h),A=h.Xa;const L=!A;A=new It(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||jr(A,"https"),Fr(A),L?Hr(A.toString(),y):ii(A.toString(),y)}else dt(2);h.G=0,h.l&&h.l.sa(_),Pc(h),Dc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Pc(h){if(h.G=0,h.ka=[],h.l){const _=yl(h.h);(_.length!=0||h.i.length!=0)&&(W(h.ka,_),W(h.ka,h.i),h.h.i.length=0,K(h.i),h.i.length=0),h.l.ra()}}function Vc(h,_,y){var A=y instanceof It?Rn(y):new It(y);if(A.g!="")_&&(A.g=_+"."+A.g),xs(A,A.s);else{var L=d.location;A=L.protocol,_=_?_+"."+L.hostname:L.hostname,L=+L.port;var q=new It(null);A&&jr(q,A),_&&(q.g=_),L&&xs(q,L),y&&(q.l=y),A=q}return y=h.D,_=h.ya,y&&_&&Je(A,y,_),Je(A,"VER",h.la),Wr(h,A),A}function Lc(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ye(new Ps({eb:y})):new Ye(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}i=Uc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function $a(){}$a.prototype.g=function(h,_){return new gn(h,_)};function gn(h,_){yt.call(this),this.g=new Ya(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!he(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!he(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ai(this)}B(gn,yt),gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){bl(this.g)},gn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=ti(h),h=y);_.i.push(new bc(_.Ya++,h)),_.G==3&&Wa(_)},gn.prototype.N=function(){this.g.l=null,delete this.j,bl(this.g),delete this.g,gn.aa.N.call(this)};function zc(h){Hi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}B(zc,Hi);function Bc(){dl.call(this),this.status=1}B(Bc,dl);function Ai(h){this.g=h}B(Ai,Uc),Ai.prototype.ua=function(){Xe(this.g,"a")},Ai.prototype.ta=function(h){Xe(this.g,new zc(h))},Ai.prototype.sa=function(h){Xe(this.g,new Bc)},Ai.prototype.ra=function(){Xe(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,gw=function(){return new $a},mw=function(){return Ns()},pw=pi,hg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,Zh=Ms,Gi.COMPLETE="complete",dw=Gi,fl.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",yt.prototype.listen=yt.prototype.K,bu=fl,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,fw=Ye}).apply(typeof qh<"u"?qh:typeof self<"u"?self:typeof window<"u"?window:{});const d0="@firebase/firestore",p0="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Yf("@firebase/firestore");function No(){return Sa.logLevel}function oe(i,...e){if(Sa.logLevel<=xe.DEBUG){const t=e.map(o_);Sa.debug(`Firestore (${nl}): ${i}`,...t)}}function As(i,...e){if(Sa.logLevel<=xe.ERROR){const t=e.map(o_);Sa.error(`Firestore (${nl}): ${i}`,...t)}}function yr(i,...e){if(Sa.logLevel<=xe.WARN){const t=e.map(o_);Sa.warn(`Firestore (${nl}): ${i}`,...t)}}function o_(i){if(typeof i=="string")return i;try{/**
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
 */function Te(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,_w(i,s,t)}function _w(i,e,t){let s=`FIRESTORE (${nl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw As(s),new Error(s)}function We(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||_w(e,a,s)}function be(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends ji{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ln.UNAUTHENTICATED))}shutdown(){}}class MO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kO{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0,42304);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ys,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ys)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(We(typeof s.accessToken=="string",31837,{l:s}),new yw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string",2055,{h:e}),new ln(e)}}class xO{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PO{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new xO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class m0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){We(this.o===void 0,3512);const s=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new m0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(We(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new m0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function LO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function vw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=LO(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ce(i,e){return i<e?-1:i>e?1:0}function fg(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ce(s,a);{const l=vw(),c=UO(l.encode(g0(i,t)),l.encode(g0(e,t)));return c!==0?c:Ce(s,a)}}t+=s>65535?2:1}return Ce(i.length,e.length)}function g0(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function UO(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ce(i[t],e[t]);return Ce(i.length,e.length)}function Go(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="__name__";class Di{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Di.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Di.isNumericId(e),a=Di.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Di.extractNumericId(e).compare(Di.extractNumericId(t)):fg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class lt extends Di{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const zO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends Di{construct(e,t,s){return new tn(e,t,s)}static isValidIdentifier(e){return zO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_0}static keyField(){return new tn([_0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ae(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ae(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ae(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ae(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(t)}static emptyPath(){return new tn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(lt.fromString(e))}static fromName(e){return new me(lt.fromString(e).popFirst(5))}static empty(){return new me(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(i,e,t){if(!t)throw new ae(Q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function BO(i,e,t,s){if(e===!0&&s===!0)throw new ae(Q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function y0(i){if(!me.isDocumentKey(i))throw new ae(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function v0(i){if(me.isDocumentKey(i))throw new ae(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Tw(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ed(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te(12329,{type:typeof i})}function Jn(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ed(i);throw new ae(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function Mt(i,e){const t={typeString:i};return e&&(t.value=e),t}function rc(i,e){if(!Tw(i))throw new ae(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const c=i[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ae(Q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=-62135596800,T0=1e6;class ht{static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*T0);return new ht(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<E0)throw new ae(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/T0}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ht._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rc(e,ht._jsonSchema))return new ht(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-E0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ht._jsonSchemaVersion="firestore/timestamp/1.0",ht._jsonSchema={type:Mt("string",ht._jsonSchemaVersion),seconds:Mt("number"),nanoseconds:Mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new ht(0,0))}static max(){return new we(new ht(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qu=-1;function jO(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=we.fromTimestamp(s===1e9?new ht(t+1,0):new ht(t,s));return new vr(a,me.empty(),e)}function FO(i){return new vr(i.readTime,i.key,qu)}class vr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vr(we.min(),me.empty(),qu)}static max(){return new vr(we.max(),me.empty(),qu)}}function qO(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(i.documentKey,e.documentKey),t!==0?t:Ce(i.largestBatchId,e.largestBatchId))}/**
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
 */const HO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(i){if(i.code!==Q.FAILED_PRECONDITION||i.message!==HO)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,s)=>{t(e)})}static reject(e){return new Z((t,s)=>{s(e)})}static waitFor(e){return new Z((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},m=>s(m))}),c=!0,l===a&&t()})}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next(a=>a?Z.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new Z((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(v=>{c[g]=v,++d,d===l&&s(c)},v=>a(v))}})}static doWhile(e,t){return new Z((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function KO(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class td{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}td.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=-1;function nd(i){return i==null}function Tf(i){return i===0&&1/i==-1/0}function YO(i){return typeof i=="number"&&Number.isInteger(i)&&!Tf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="";function QO(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=S0(e)),e=WO(i.get(t),e);return S0(e)}function WO(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case Sw:t+="";break;default:t+=l}}return t}function S0(i){return i+Sw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function br(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Aw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hh(this.root,e,this.comparator,!0)}}class Hh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Jt.RED,this.left=a??Jt.EMPTY,this.right=l??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Jt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Jt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new w0(this.data.getIterator())}getIteratorFrom(e){return new w0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ut(this.comparator);return t.data=e,t}}class w0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(tn.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new Ut(tn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Go(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class ww extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ww("Invalid base64 string: "+l):l}}(e);return new nn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const XO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(i){if(We(!!i,39018),typeof i=="string"){let e=0;const t=XO.exec(i);if(We(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:bt(i.seconds),nanos:bt(i.nanos)}}function bt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Tr(i){return typeof i=="string"?nn.fromBase64String(i):nn.fromUint8Array(i)}/**
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
 */const bw="server_timestamp",Rw="__type__",Iw="__previous_value__",Cw="__local_write_time__";function c_(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rw])===null||t===void 0?void 0:t.stringValue)===bw}function id(i){const e=i.mapValue.fields[Iw];return c_(e)?id(e):e}function Hu(i){const e=Er(i.mapValue.fields[Cw].timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,t,s,a,l,c,d,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const Sf="(default)";class Gu{constructor(e,t){this.projectId=e,this.database=t||Sf}static empty(){return new Gu("","")}get isDefaultDatabase(){return this.database===Sf}isEqual(e){return e instanceof Gu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Nw="__type__",ZO="__max__",Gh={mapValue:{}},Dw="__vector__",Af="value";function Sr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?c_(i)?4:e2(i)?9007199254740991:JO(i)?10:11:Te(28295,{value:i})}function Bi(i,e){if(i===e)return!0;const t=Sr(i);if(t!==Sr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Hu(i).isEqual(Hu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Er(a.timestampValue),d=Er(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Tr(a.bytesValue).isEqual(Tr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return bt(a.geoPointValue.latitude)===bt(l.geoPointValue.latitude)&&bt(a.geoPointValue.longitude)===bt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return bt(a.integerValue)===bt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=bt(a.doubleValue),d=bt(l.doubleValue);return c===d?Tf(c)===Tf(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return Go(i.arrayValue.values||[],e.arrayValue.values||[],Bi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(A0(c)!==A0(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!Bi(c[m],d[m])))return!1;return!0}(i,e);default:return Te(52216,{left:i})}}function Ku(i,e){return(i.values||[]).find(t=>Bi(t,e))!==void 0}function Ko(i,e){if(i===e)return 0;const t=Sr(i),s=Sr(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=bt(l.integerValue||l.doubleValue),m=bt(c.integerValue||c.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(i,e);case 3:return b0(i.timestampValue,e.timestampValue);case 4:return b0(Hu(i),Hu(e));case 5:return fg(i.stringValue,e.stringValue);case 6:return function(l,c){const d=Tr(l),m=Tr(c);return d.compareTo(m)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),m=c.split("/");for(let g=0;g<d.length&&g<m.length;g++){const v=Ce(d[g],m[g]);if(v!==0)return v}return Ce(d.length,m.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ce(bt(l.latitude),bt(c.latitude));return d!==0?d:Ce(bt(l.longitude),bt(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return R0(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,m,g,v;const T=l.fields||{},w=c.fields||{},P=(d=T[Af])===null||d===void 0?void 0:d.arrayValue,B=(m=w[Af])===null||m===void 0?void 0:m.arrayValue,K=Ce(((g=P?.values)===null||g===void 0?void 0:g.length)||0,((v=B?.values)===null||v===void 0?void 0:v.length)||0);return K!==0?K:R0(P,B)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Gh.mapValue&&c===Gh.mapValue)return 0;if(l===Gh.mapValue)return 1;if(c===Gh.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),g=c.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let T=0;T<m.length&&T<v.length;++T){const w=fg(m[T],v[T]);if(w!==0)return w;const P=Ko(d[m[T]],g[v[T]]);if(P!==0)return P}return Ce(m.length,v.length)}(i.mapValue,e.mapValue);default:throw Te(23264,{le:t})}}function b0(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ce(i,e);const t=Er(i),s=Er(e),a=Ce(t.seconds,s.seconds);return a!==0?a:Ce(t.nanos,s.nanos)}function R0(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Ko(t[a],s[a]);if(l)return l}return Ce(t.length,s.length)}function Yo(i){return dg(i)}function dg(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Er(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Tr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return me.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=dg(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${dg(t.fields[c])}`;return a+"}"}(i.mapValue):Te(61005,{value:i})}function Jh(i){switch(Sr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=id(i);return e?16+Jh(e):16;case 5:return 2*i.stringValue.length;case 6:return Tr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+Jh(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return br(s.fields,(l,c)=>{a+=l.length+Jh(c)}),a}(i.mapValue);default:throw Te(13486,{value:i})}}function I0(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function pg(i){return!!i&&"integerValue"in i}function h_(i){return!!i&&"arrayValue"in i}function C0(i){return!!i&&"nullValue"in i}function N0(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ef(i){return!!i&&"mapValue"in i}function JO(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Nw])===null||t===void 0?void 0:t.stringValue)===Dw}function xu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return br(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=xu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function e2(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===ZO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ef(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xu(t)}setAll(e){let t=tn.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=xu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());ef(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];ef(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){br(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new An(xu(this.value))}}function Ow(i){const e=[];return br(i.fields,(t,s)=>{const a=new tn([t]);if(ef(s)){const l=Ow(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new hn(e,0,we.min(),we.min(),we.min(),An.empty(),0)}static newFoundDocument(e,t,s,a){return new hn(e,1,t,we.min(),s,a,0)}static newNoDocument(e,t){return new hn(e,2,t,we.min(),we.min(),An.empty(),0)}static newUnknownDocument(e,t){return new hn(e,3,t,we.min(),we.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wf{constructor(e,t){this.position=e,this.inclusive=t}}function D0(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=me.comparator(me.fromName(c.referenceValue),t.key):s=Ko(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function O0(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Bi(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class bf{constructor(e,t="asc"){this.field=e,this.dir=t}}function t2(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Mw{}class Ot extends Mw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new i2(e,t,s):t==="array-contains"?new a2(e,s):t==="in"?new o2(e,s):t==="not-in"?new l2(e,s):t==="array-contains-any"?new u2(e,s):new Ot(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new s2(e,s):new r2(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ko(t,this.value)):t!==null&&Sr(this.value)===Sr(t)&&this.matchesComparison(Ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hi extends Mw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new hi(e,t)}matches(e){return kw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function kw(i){return i.op==="and"}function xw(i){return n2(i)&&kw(i)}function n2(i){for(const e of i.filters)if(e instanceof hi)return!1;return!0}function mg(i){if(i instanceof Ot)return i.field.canonicalString()+i.op.toString()+Yo(i.value);if(xw(i))return i.filters.map(e=>mg(e)).join(",");{const e=i.filters.map(t=>mg(t)).join(",");return`${i.op}(${e})`}}function Pw(i,e){return i instanceof Ot?function(s,a){return a instanceof Ot&&s.op===a.op&&s.field.isEqual(a.field)&&Bi(s.value,a.value)}(i,e):i instanceof hi?function(s,a){return a instanceof hi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&Pw(c,a.filters[d]),!0):!1}(i,e):void Te(19439)}function Vw(i){return i instanceof Ot?function(t){return`${t.field.canonicalString()} ${t.op} ${Yo(t.value)}`}(i):i instanceof hi?function(t){return t.op.toString()+" {"+t.getFilters().map(Vw).join(" ,")+"}"}(i):"Filter"}class i2 extends Ot{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class s2 extends Ot{constructor(e,t){super(e,"in",t),this.keys=Lw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r2 extends Ot{constructor(e,t){super(e,"not-in",t),this.keys=Lw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>me.fromName(s.referenceValue))}class a2 extends Ot{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return h_(t)&&Ku(t.arrayValue,this.value)}}class o2 extends Ot{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ku(this.value.arrayValue,t)}}class l2 extends Ot{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ku(this.value.arrayValue,t)}}class u2 extends Ot{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!h_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ku(this.value.arrayValue,s))}}/**
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
 */class c2{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Pe=null}}function M0(i,e=null,t=[],s=[],a=null,l=null,c=null){return new c2(i,e,t,s,a,l,c)}function f_(i){const e=be(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>mg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),nd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Yo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Yo(s)).join(",")),e.Pe=t}return e.Pe}function d_(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!t2(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Pw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!O0(i.startAt,e.startAt)&&O0(i.endAt,e.endAt)}function gg(i){return me.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function h2(i,e,t,s,a,l,c,d){return new ac(i,e,t,s,a,l,c,d)}function sd(i){return new ac(i)}function k0(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Uw(i){return i.collectionGroup!==null}function Pu(i){const e=be(i);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ut(tn.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new bf(l,s))}),t.has(tn.keyField().canonicalString())||e.Te.push(new bf(tn.keyField(),s))}return e.Te}function ki(i){const e=be(i);return e.Ie||(e.Ie=f2(e,Pu(i))),e.Ie}function f2(i,e){if(i.limitType==="F")return M0(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new bf(a.field,l)});const t=i.endAt?new wf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new wf(i.startAt.position,i.startAt.inclusive):null;return M0(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function _g(i,e){const t=i.filters.concat([e]);return new ac(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function yg(i,e,t){return new ac(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function rd(i,e){return d_(ki(i),ki(e))&&i.limitType===e.limitType}function zw(i){return`${f_(ki(i))}|lt:${i.limitType}`}function Do(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Vw(a)).join(", ")}]`),nd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Yo(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Yo(a)).join(",")),`Target(${s})`}(ki(i))}; limitType=${i.limitType})`}function ad(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):me.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Pu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,m){const g=D0(c,d,m);return c.inclusive?g<=0:g<0}(s.startAt,Pu(s),a)||s.endAt&&!function(c,d,m){const g=D0(c,d,m);return c.inclusive?g>=0:g>0}(s.endAt,Pu(s),a))}(i,e)}function d2(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Bw(i){return(e,t)=>{let s=!1;for(const a of Pu(i)){const l=p2(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function p2(i,e,t){const s=i.field.isKeyField()?me.comparator(e.key,t.key):function(l,c,d){const m=c.data.field(l),g=d.data.field(l);return m!==null&&g!==null?Ko(m,g):Te(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return Aw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=new _t(me.comparator);function ws(){return m2}const jw=new _t(me.comparator);function Ru(...i){let e=jw;for(const t of i)e=e.insert(t.key,t);return e}function Fw(i){let e=jw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ga(){return Vu()}function qw(){return Vu()}function Vu(){return new Da(i=>i.toString(),(i,e)=>i.isEqual(e))}const g2=new _t(me.comparator),_2=new Ut(me.comparator);function Pe(...i){let e=_2;for(const t of i)e=e.add(t);return e}const y2=new Ut(Ce);function v2(){return y2}/**
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
 */function p_(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tf(e)?"-0":e}}function Hw(i){return{integerValue:""+i}}function E2(i,e){return YO(e)?Hw(e):p_(i,e)}/**
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
 */class od{constructor(){this._=void 0}}function T2(i,e,t){return i instanceof Rf?function(a,l){const c={fields:{[Rw]:{stringValue:bw},[Cw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&c_(l)&&(l=id(l)),l&&(c.fields[Iw]=l),{mapValue:c}}(t,e):i instanceof Yu?Kw(i,e):i instanceof Qu?Yw(i,e):function(a,l){const c=Gw(a,l),d=x0(c)+x0(a.Ee);return pg(c)&&pg(a.Ee)?Hw(d):p_(a.serializer,d)}(i,e)}function S2(i,e,t){return i instanceof Yu?Kw(i,e):i instanceof Qu?Yw(i,e):t}function Gw(i,e){return i instanceof If?function(s){return pg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Rf extends od{}class Yu extends od{constructor(e){super(),this.elements=e}}function Kw(i,e){const t=Qw(e);for(const s of i.elements)t.some(a=>Bi(a,s))||t.push(s);return{arrayValue:{values:t}}}class Qu extends od{constructor(e){super(),this.elements=e}}function Yw(i,e){let t=Qw(e);for(const s of i.elements)t=t.filter(a=>!Bi(a,s));return{arrayValue:{values:t}}}class If extends od{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function x0(i){return bt(i.integerValue||i.doubleValue)}function Qw(i){return h_(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function A2(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Yu&&a instanceof Yu||s instanceof Qu&&a instanceof Qu?Go(s.elements,a.elements,Bi):s instanceof If&&a instanceof If?Bi(s.Ee,a.Ee):s instanceof Rf&&a instanceof Rf}(i.transform,e.transform)}class w2{constructor(e,t){this.version=e,this.transformResults=t}}class xi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xi}static exists(e){return new xi(void 0,e)}static updateTime(e){return new xi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tf(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ld{}function Ww(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new $w(i.key,xi.none()):new oc(i.key,i.data,xi.none());{const t=i.data,s=An.empty();let a=new Ut(tn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Rr(i.key,s,new Pn(a.toArray()),xi.none())}}function b2(i,e,t){i instanceof oc?function(a,l,c){const d=a.value.clone(),m=V0(a.fieldTransforms,l,c.transformResults);d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof Rr?function(a,l,c){if(!tf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=V0(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(Xw(a)),m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Lu(i,e,t,s){return i instanceof oc?function(l,c,d,m){if(!tf(l.precondition,c))return d;const g=l.value.clone(),v=L0(l.fieldTransforms,m,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof Rr?function(l,c,d,m){if(!tf(l.precondition,c))return d;const g=L0(l.fieldTransforms,m,c),v=c.data;return v.setAll(Xw(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,d){return tf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function R2(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=Gw(s.transform,a||null);l!=null&&(t===null&&(t=An.empty()),t.set(s.field,l))}return t||null}function P0(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Go(s,a,(l,c)=>A2(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class oc extends ld{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Rr extends ld{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Xw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function V0(i,e,t){const s=new Map;We(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,S2(c,d,t[a]))}return s}function L0(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,T2(l,c,e))}return s}class $w extends ld{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I2 extends ld{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&b2(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Lu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Lu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=qw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const m=Ww(c,d);m!==null&&s.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Go(this.mutations,e.mutations,(t,s)=>P0(t,s))&&Go(this.baseMutations,e.baseMutations,(t,s)=>P0(t,s))}}class m_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){We(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=function(){return g2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new m_(e,t,s,a)}}/**
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
 */class N2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class D2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,je;function O2(i){switch(i){case Q.OK:return Te(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return Te(15467,{code:i})}}function Zw(i){if(i===void 0)return As("GRPC error has no .code"),Q.UNKNOWN;switch(i){case Dt.OK:return Q.OK;case Dt.CANCELLED:return Q.CANCELLED;case Dt.UNKNOWN:return Q.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return Q.INTERNAL;case Dt.UNAVAILABLE:return Q.UNAVAILABLE;case Dt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case Dt.NOT_FOUND:return Q.NOT_FOUND;case Dt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case Dt.ABORTED:return Q.ABORTED;case Dt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case Dt.DATA_LOSS:return Q.DATA_LOSS;default:return Te(39323,{code:i})}}(je=Dt||(Dt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const M2=new dr([4294967295,4294967295],0);function U0(i){const e=vw().encode(i),t=new hw;return t.update(e),new Uint8Array(t.digest())}function z0(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new dr([t,s],0),new dr([a,l],0)]}class g_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Iu(`Invalid padding: ${t}`);if(s<0)throw new Iu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Iu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Iu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=dr.fromNumber(this.fe)}pe(e,t,s){let a=e.add(t.multiply(dr.fromNumber(s)));return a.compare(M2)===1&&(a=new dr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=U0(e),[s,a]=z0(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);if(!this.ye(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new g_(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.fe===0)return;const t=U0(e),[s,a]=z0(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);this.we(c)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,lc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ud(we.min(),a,new _t(Ce),ws(),Pe())}}class lc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new lc(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=a}}class Jw{constructor(e,t){this.targetId=e,this.De=t}}class eb{constructor(e,t,s=nn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class B0{constructor(){this.ve=0,this.Ce=j0(),this.Fe=nn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),s=Pe();return this.Ce.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te(38017,{changeType:l})}}),new lc(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=j0()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,We(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class k2{constructor(e){this.We=e,this.Ge=new Map,this.ze=ws(),this.je=Kh(),this.Je=Kh(),this.He=new _t(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,a)=>{this.nt(a)&&t(a)})}it(e){const t=e.targetId,s=e.De.count,a=this.st(t);if(a){const l=a.target;if(gg(l))if(s===0){const c=new me(l.path);this.Xe(t,c,hn.newNoDocument(c,we.min()))}else We(s===1,20013,{expectedCount:s});else{const c=this.ot(t);if(c!==s){const d=this._t(e),m=d?this.ut(d,e,c):1;if(m!==0){this.rt(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Tr(s).toUint8Array()}catch(m){if(m instanceof ww)return yr("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new g_(c,a,l)}catch(m){return yr(m instanceof Iu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.fe===0?null:d}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.We.lt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,l,null),a++)}),a}Pt(e){const t=new Map;this.Ge.forEach((l,c)=>{const d=this.st(c);if(d){if(l.current&&gg(d.target)){const m=new me(d.target.path);this.Tt(m).has(c)||this.It(c,m)||this.Xe(c,m,hn.newNoDocument(m,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}});let s=Pe();this.Je.forEach((l,c)=>{let d=!0;c.forEachWhile(m=>{const g=this.st(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.ze.forEach((l,c)=>c.setReadTime(e));const a=new ud(e,t,this.He,this.ze,s);return this.ze=ws(),this.je=Kh(),this.Je=Kh(),this.He=new _t(Ce),a}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,t)?a.qe(t,1):a.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new B0,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ut(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ut(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new B0),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Kh(){return new _t(me.comparator)}function j0(){return new _t(me.comparator)}const x2={asc:"ASCENDING",desc:"DESCENDING"},P2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V2={and:"AND",or:"OR"};class L2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vg(i,e){return i.useProto3Json||nd(e)?e:{value:e}}function Cf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tb(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function U2(i,e){return Cf(i,e.toTimestamp())}function Pi(i){return We(!!i,49232),we.fromTimestamp(function(t){const s=Er(t);return new ht(s.seconds,s.nanos)}(i))}function __(i,e){return Eg(i,e).canonicalString()}function Eg(i,e){const t=function(a){return new lt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function nb(i){const e=lt.fromString(i);return We(ob(e),10190,{key:e.toString()}),e}function Tg(i,e){return __(i.databaseId,e.path)}function jm(i,e){const t=nb(e);if(t.get(1)!==i.databaseId.projectId)throw new ae(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new me(sb(t))}function ib(i,e){return __(i.databaseId,e)}function z2(i){const e=nb(i);return e.length===4?lt.emptyPath():sb(e)}function Sg(i){return new lt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function sb(i){return We(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function F0(i,e,t){return{name:Tg(i,e),fields:t.value.mapValue.fields}}function B2(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(We(v===void 0||typeof v=="string",58123),nn.fromBase64String(v||"")):(We(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),nn.fromUint8Array(v||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?Q.UNKNOWN:Zw(g.code);return new ae(v,g.message||"")}(c);t=new eb(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=jm(i,s.document.name),l=Pi(s.document.updateTime),c=s.document.createTime?Pi(s.document.createTime):we.min(),d=new An({mapValue:{fields:s.document.fields}}),m=hn.newFoundDocument(a,l,c,d),g=s.targetIds||[],v=s.removedTargetIds||[];t=new nf(g,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=jm(i,s.document),l=s.readTime?Pi(s.readTime):we.min(),c=hn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new nf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=jm(i,s.document),l=s.removedTargetIds||[];t=new nf([],l,a,null)}else{if(!("filter"in e))return Te(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new D2(a,l),d=s.targetId;t=new Jw(d,c)}}return t}function j2(i,e){let t;if(e instanceof oc)t={update:F0(i,e.key,e.value)};else if(e instanceof $w)t={delete:Tg(i,e.key)};else if(e instanceof Rr)t={update:F0(i,e.key,e.data),updateMask:X2(e.fieldMask)};else{if(!(e instanceof I2))return Te(16599,{Rt:e.type});t={verify:Tg(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof Rf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Yu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Qu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof If)return{fieldPath:c.field.canonicalString(),increment:d.Ee};throw Te(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:U2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)}(i,e.precondition)),t}function F2(i,e){return i&&i.length>0?(We(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?Pi(a.updateTime):Pi(l);return c.isEqual(we.min())&&(c=Pi(l)),new w2(c,a.transformResults||[])}(t,e))):[]}function q2(i,e){return{documents:[ib(i,e.path)]}}function H2(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=ib(i,a);const l=function(g){if(g.length!==0)return ab(hi.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(w){return{field:Oo(w.field),direction:Y2(w.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=vg(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{Vt:t,parent:a}}function G2(i){let e=z2(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){We(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(T){const w=rb(T);return w instanceof hi&&xw(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(w=>function(B){return new bf(Mo(B.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(T){let w;return w=typeof T=="object"?T.value:T,nd(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(T){const w=!!T.before,P=T.values||[];return new wf(P,w)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const w=!T.before,P=T.values||[];return new wf(P,w)}(t.endAt)),h2(e,a,c,l,d,"F",m,g)}function K2(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rb(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Mo(t.unaryFilter.field);return Ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Mo(t.unaryFilter.field);return Ot.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Mo(t.unaryFilter.field);return Ot.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Mo(t.unaryFilter.field);return Ot.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}}(i):i.fieldFilter!==void 0?function(t){return Ot.create(Mo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return hi.create(t.compositeFilter.filters.map(s=>rb(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}}(t.compositeFilter.op))}(i):Te(30097,{filter:i})}function Y2(i){return x2[i]}function Q2(i){return P2[i]}function W2(i){return V2[i]}function Oo(i){return{fieldPath:i.canonicalString()}}function Mo(i){return tn.fromServerFormat(i.fieldPath)}function ab(i){return i instanceof Ot?function(t){if(t.op==="=="){if(N0(t.value))return{unaryFilter:{field:Oo(t.field),op:"IS_NAN"}};if(C0(t.value))return{unaryFilter:{field:Oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(N0(t.value))return{unaryFilter:{field:Oo(t.field),op:"IS_NOT_NAN"}};if(C0(t.value))return{unaryFilter:{field:Oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oo(t.field),op:Q2(t.op),value:t.value}}}(i):i instanceof hi?function(t){const s=t.getFilters().map(a=>ab(a));return s.length===1?s[0]:{compositeFilter:{op:W2(t.op),filters:s}}}(i):Te(54877,{filter:i})}function X2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ob(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,s,a,l=we.min(),c=we.min(),d=nn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.gt=e}}function Z2(i){const e=G2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?yg(e,e.limit,"L"):e}/**
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
 */class J2{constructor(){this.Dn=new eM}addToCollectionParentIndex(e,t){return this.Dn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(vr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class eM{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Ut(lt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Ut(lt.comparator)).toArray()}}/**
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
 */const q0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lb=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(lb,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Qo(0)}static ur(){return new Qo(-1)}}/**
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
 */const H0="LruGarbageCollector",tM=1048576;function G0([i,e],[t,s]){const a=Ce(i,t);return a===0?Ce(e,s):a}class nM{constructor(e){this.Tr=e,this.buffer=new Ut(G0),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();G0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iM{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){oe(H0,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sl(t)?oe(H0,"Ignoring IndexedDB error during garbage collection: ",t):await il(t)}await this.Rr(3e5)})}}class sM{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(td.ue);const s=new nM(t);return this.Vr.forEachTarget(e,a=>s.Er(a.sequenceNumber)).next(()=>this.Vr.gr(e,a=>s.Er(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(q0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),q0):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,l,c,d,m,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),No()<=xe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function rM(i,e){return new sM(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(){this.changes=new Da(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Lu(s.mutation,a,Pn.empty(),ht.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const a=ga();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Ru();return l.forEach((d,m)=>{c=c.insert(d,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=ga();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=ws();const c=Vu(),d=function(){return Vu()}();return t.forEach((m,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Rr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Lu(v.mutation,g,v.mutation.getFieldMask(),ht.now())):c.set(g.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,v)=>c.set(g,v)),t.forEach((g,v)=>{var T;return d.set(g,new oM(v,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Vu();let a=new _t((c,d)=>c-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let v=s.get(m)||Pn.empty();v=d.applyToLocalView(g,v),s.set(m,v);const T=(a.get(d.batchId)||Pe()).add(m);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),g=m.key,v=m.value,T=qw();v.forEach(w=>{if(!l.has(w)){const P=Ww(t.get(w),s.get(w));P!==null&&T.set(w,P),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Z.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return me.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Uw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(ga());let d=qu,m=l;return c.next(g=>Z.forEach(g,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next(w=>{m=m.insert(v,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,Pe())).next(v=>({batchId:d,changes:Fw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(s=>{let a=Ru();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Ru();return this.indexManager.getCollectionParents(e,l).next(d=>Z.forEach(d,m=>{const g=function(T,w){return new ac(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(v=>{v.forEach((T,w)=>{c=c.insert(T,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((m,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,hn.newInvalidDocument(v)))});let d=Ru();return c.forEach((m,g)=>{const v=l.get(m);v!==void 0&&Lu(v.mutation,g,Pn.empty(),ht.now()),ad(t,g)&&(d=d.insert(m,g))}),d})}}/**
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
 */class uM{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Pi(a.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(a){return{name:a.name,query:Z2(a.bundledQuery),readTime:Pi(a.readTime)}}(t)),Z.resolve()}}/**
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
 */class cM{constructor(){this.overlays=new _t(me.comparator),this.kr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ga();return Z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.wt(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=ga(),l=t.length+1,c=new me(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const m=d.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new _t((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=ga(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=ga(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return Z.resolve(d)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new N2(t,s));let l=this.kr.get(t);l===void 0&&(l=Pe(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class hM{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.qr=new Ut(Kt.Qr),this.$r=new Ut(Kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Kt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Kt(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new me(new lt([])),s=new Kt(t,e),a=new Kt(t,e+1),l=[];return this.$r.forEachInRange([s,a],c=>{this.Wr(c),l.push(c.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new me(new lt([])),s=new Kt(t,e),a=new Kt(t,e+1);let l=Pe();return this.$r.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Kt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Kt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return me.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ut(Kt.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new C2(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Yr=this.Yr.add(new Kt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?u_:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Kt(t,0),a=new Kt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,a],c=>{const d=this.Zr(c.Hr);l.push(d)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ut(Ce);return t.forEach(a=>{const l=new Kt(a,0),c=new Kt(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],d=>{s=s.add(d.Hr)})}),Z.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;me.isDocumentKey(l)||(l=l.child(""));const c=new Kt(new me(l),0);let d=new Ut(Ce);return this.Yr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(m.Hr)),!0)},c),Z.resolve(this.ei(d))}ei(e){const t=[];return e.forEach(s=>{const a=this.Zr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){We(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return Z.forEach(t.mutations,a=>{const l=new Kt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new Kt(t,0),a=this.Yr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.ni=e,this.docs=function(){return new _t(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():hn.newInvalidDocument(t))}getEntries(e,t){let s=ws();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():hn.newInvalidDocument(a))}),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=ws();const c=t.path,d=new me(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||qO(FO(v),s)<=0||(a.has(v.key)||ad(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Te(9500)}ri(e,t){return Z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new pM(this)}getSize(e){return Z.resolve(this.size)}}class pM extends aM{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)}),Z.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.persistence=e,this.ii=new Da(t=>f_(t),d_),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new y_,this.targetCount=0,this._i=Qo.ar()}forEachTarget(e,t){return this.ii.forEach((s,a)=>t(a)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),Z.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Qo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.hr(t),Z.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ii.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),Z.waitFor(l).next(()=>a)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t){this.ai={},this.overlays={},this.ui=new td(0),this.ci=!1,this.ci=!0,this.li=new hM,this.referenceDelegate=e(this),this.hi=new mM(this),this.indexManager=new J2,this.remoteDocumentCache=function(a){return new dM(a)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new $2(t),this.Ti=new uM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new fM(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const a=new gM(this.ui.next());return this.referenceDelegate.Ii(),s(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ei(e,t){return Z.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class gM extends GO{constructor(e){super(),this.currentSequenceNumber=e}}class v_{constructor(e){this.persistence=e,this.Ai=new y_,this.Ri=null}static Vi(e){return new v_(e)}get mi(){if(this.Ri)return this.Ri;throw Te(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(a=>this.mi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.mi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,s=>{const a=me.fromPath(s);return this.fi(e,a).next(l=>{l||t.removeEntry(a,we.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return Z.or([()=>Z.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Nf{constructor(e,t){this.persistence=e,this.gi=new Da(s=>QO(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=rM(this,t)}static Vi(e,t){return new Nf(e,t)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return Z.forEach(this.gi,(s,a)=>this.Sr(e,s,a).next(l=>l?Z.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ri(e,c=>this.Sr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,we.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jh(e.data.value)),t}Sr(e,t,s){return Z.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=Pe(),a=Pe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new E_(e,t.fromCache,s,a)}}/**
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
 */class _M{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yM{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return E1()?8:KO(dn())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ps(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ys(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new _M;return this.ws(e,t,c).next(d=>{if(l.result=d,this.Rs)return this.Ss(e,t,c,d.size)})}).next(()=>l.result)}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(No()<=xe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Do(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(No()<=xe.DEBUG&&oe("QueryEngine","Query:",Do(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(No()<=xe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Do(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ki(t))):Z.resolve())}ps(e,t){if(k0(t))return Z.resolve(null);let s=ki(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=yg(t,null,"F"),s=ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Pe(...l);return this.gs.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.bs(t,d);return this.Ds(t,g,c,m.readTime)?this.ps(e,yg(t,null,"F")):this.vs(e,g,t,m)}))})))}ys(e,t,s,a){return k0(t)||a.isEqual(we.min())?Z.resolve(null):this.gs.getDocuments(e,s).next(l=>{const c=this.bs(t,l);return this.Ds(t,c,s,a)?Z.resolve(null):(No()<=xe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Do(t)),this.vs(e,c,t,jO(a,qu)).next(d=>d))})}bs(e,t){let s=new Ut(Bw(e));return t.forEach((a,l)=>{ad(e,l)&&(s=s.add(l))}),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ws(e,t,s){return No()<=xe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Do(t)),this.gs.getDocumentsMatchingQuery(e,t,vr.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const T_="LocalStore",vM=3e8;class EM{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new _t(Ce),this.Ms=new Da(l=>f_(l),d_),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lM(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function TM(i,e,t,s){return new EM(i,e,t,s)}async function cb(i,e){const t=be(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let m=Pe();for(const g of a){c.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Bs:g,removedBatchIds:c,addedBatchIds:d}))})})}function SM(i,e){const t=be(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return function(d,m,g,v){const T=g.batch,w=T.keys();let P=Z.resolve();return w.forEach(B=>{P=P.next(()=>v.getEntry(m,B)).next(K=>{const W=g.docVersions.get(B);We(W!==null,48541),K.version.compareTo(W)<0&&(T.applyToRemoteDocument(K,g),K.isValidDocument()&&(K.setReadTime(g.commitVersion),v.addEntry(K)))})}),P.next(()=>d.mutationQueue.removeMutationBatch(m,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let m=Pe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(m=m.add(d.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function hb(i){const e=be(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function AM(i,e){const t=be(i),s=e.snapshotVersion;let a=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});a=t.Fs;const d=[];e.targetChanges.forEach((v,T)=>{const w=a.get(T);if(!w)return;d.push(t.hi.removeMatchingKeys(l,v.removedDocuments,T).next(()=>t.hi.addMatchingKeys(l,v.addedDocuments,T)));let P=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(nn.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):v.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(v.resumeToken,s)),a=a.insert(T,P),function(K,W,ge){return K.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=vM?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0}(w,P,v)&&d.push(t.hi.updateTargetData(l,P))});let m=ws(),g=Pe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(wM(l,c,e.documentUpdates).next(v=>{m=v.Ls,g=v.ks})),!s.isEqual(we.min())){const v=t.hi.getLastRemoteSnapshotVersion(l).next(T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(v)}return Z.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,g)).next(()=>m)}).then(l=>(t.Fs=a,l))}function wM(i,e,t){let s=Pe(),a=Pe();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=ws();return t.forEach((d,m)=>{const g=l.get(d);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),m.isNoDocument()&&m.version.isEqual(we.min())?(e.removeEntry(d,m.readTime),c=c.insert(d,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(d,m)):oe(T_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",m.version)}),{Ls:c,ks:a}})}function bM(i,e){const t=be(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=u_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function RM(i,e){const t=be(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.hi.getTargetData(s,e).next(l=>l?(a=l,Z.resolve(a)):t.hi.allocateTargetId(s).next(c=>(a=new ur(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Ag(i,e,t){const s=be(i),a=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!sl(c))throw c;oe(T_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function K0(i,e,t){const s=be(i);let a=we.min(),l=Pe();return s.persistence.runTransaction("Execute query","readwrite",c=>function(m,g,v){const T=be(m),w=T.Ms.get(v);return w!==void 0?Z.resolve(T.Fs.get(w)):T.hi.getTargetData(g,v)}(s,c,ki(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(c,d.targetId).next(m=>{l=m})}).next(()=>s.Cs.getDocumentsMatchingQuery(c,e,t?a:we.min(),t?l:Pe())).next(d=>(IM(s,d2(e),d),{documents:d,qs:l})))}function IM(i,e,t){let s=i.xs.get(e)||we.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.xs.set(e,s)}class Y0{constructor(){this.activeTargetIds=v2()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CM{constructor(){this.Fo=new Y0,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Y0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NM{xo(e){}shutdown(){}}/**
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
 */const Q0="ConnectivityMonitor";class W0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){oe(Q0,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){oe(Q0,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yh=null;function wg(){return Yh===null?Yh=function(){return 268435456+Math.round(2147483648*Math.random())}():Yh++,"0x"+Yh.toString(16)}/**
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
 */const Fm="RestConnection",DM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OM{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===Sf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const c=wg(),d=this.Go(e,t.toUriEncodedString());oe(Fm,`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,a,l);const{host:g}=new URL(d),v=Rs(g);return this.jo(e,d,m,s,v).then(T=>(oe(Fm,`Received RPC '${e}' ${c}: `,T),T),T=>{throw yr(Fm,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Jo(e,t,s,a,l,c){return this.Wo(e,t,s,a,l)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}Go(e,t){const s=DM[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="WebChannelConnection";class kM extends OM{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,l){const c=wg();return new Promise((d,m)=>{const g=new fw;g.setWithCredentials(!0),g.listenOnce(dw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Zh.NO_ERROR:const T=g.getResponseJson();oe(on,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Zh.TIMEOUT:oe(on,`RPC '${e}' ${c} timed out`),m(new ae(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Zh.HTTP_ERROR:const w=g.getStatus();if(oe(on,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let P=g.getResponseJson();Array.isArray(P)&&(P=P[0]);const B=P?.error;if(B&&B.status&&B.message){const K=function(ge){const he=ge.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(he)>=0?he:Q.UNKNOWN}(B.status);m(new ae(K,B.message))}else m(new ae(Q.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ae(Q.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{oe(on,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);oe(on,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)})}P_(e,t,s){const a=wg(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=gw(),d=mw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const v=l.join("");oe(on,`Creating RPC '${e}' stream ${a}: ${v}`,m);const T=c.createWebChannel(v,m);this.T_(T);let w=!1,P=!1;const B=new MM({Ho:W=>{P?oe(on,`Not sending because RPC '${e}' stream ${a} is closed:`,W):(w||(oe(on,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),oe(on,`RPC '${e}' stream ${a} sending:`,W),T.send(W))},Yo:()=>T.close()}),K=(W,ge,he)=>{W.listen(ge,ce=>{try{he(ce)}catch(fe){setTimeout(()=>{throw fe},0)}})};return K(T,bu.EventType.OPEN,()=>{P||(oe(on,`RPC '${e}' stream ${a} transport opened.`),B.s_())}),K(T,bu.EventType.CLOSE,()=>{P||(P=!0,oe(on,`RPC '${e}' stream ${a} transport closed`),B.__(),this.I_(T))}),K(T,bu.EventType.ERROR,W=>{P||(P=!0,yr(on,`RPC '${e}' stream ${a} transport errored. Name:`,W.name,"Message:",W.message),B.__(new ae(Q.UNAVAILABLE,"The operation could not be completed")))}),K(T,bu.EventType.MESSAGE,W=>{var ge;if(!P){const he=W.data[0];We(!!he,16349);const ce=he,fe=ce?.error||((ge=ce[0])===null||ge===void 0?void 0:ge.error);if(fe){oe(on,`RPC '${e}' stream ${a} received error:`,fe);const re=fe.status;let ue=function(I){const M=Dt[I];if(M!==void 0)return Zw(M)}(re),O=fe.message;ue===void 0&&(ue=Q.INTERNAL,O="Unknown error status: "+re+" with message "+fe.message),P=!0,B.__(new ae(ue,O)),T.close()}else oe(on,`RPC '${e}' stream ${a} received:`,he),B.a_(he)}}),K(d,pw.STAT_EVENT,W=>{W.stat===hg.PROXY?oe(on,`RPC '${e}' stream ${a} detected buffering proxy`):W.stat===hg.NOPROXY&&oe(on,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{B.o_()},0),B}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function qm(){return typeof document<"u"?document:null}/**
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
 */function cd(i){return new L2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&oe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="PersistentStream";class db{constructor(e,t,s,a,l,c,d,m){this.Fi=e,this.w_=s,this.S_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new fb(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(As(t.toString()),As("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.b_===t&&this.W_(s,a)},s=>{e(()=>{const a=new ae(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(a=>{s(()=>this.G_(a))}),this.stream.onMessage(a=>{s(()=>++this.C_==1?this.j_(a):this.onNext(a))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return oe(X0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(oe(X0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xM extends db{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=B2(this.serializer,e),s=function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?Pi(c.readTime):we.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Sg(this.serializer),t.addTarget=function(l,c){let d;const m=c.target;if(d=gg(m)?{documents:q2(l,m)}:{query:H2(l,m).Vt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=tb(l,c.resumeToken);const g=vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(we.min())>0){d.readTime=Cf(l,c.snapshotVersion.toTimestamp());const g=vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=K2(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Sg(this.serializer),t.removeTarget=e,this.k_(t)}}class PM extends db{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return We(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){We(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=F2(e.writeResults,e.commitTime),s=Pi(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Sg(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>j2(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{}class LM extends VM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new ae(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Wo(e,Eg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(Q.UNKNOWN,l.toString())})}Jo(e,t,s,a,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Jo(e,Eg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ae(Q.UNKNOWN,c.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class UM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(As(t),this._a=!1):oe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="RemoteStore";class zM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(c=>{s.enqueueAndForget(async()=>{Oa(this)&&(oe(Aa,"Restarting streams for network reachability change."),await async function(m){const g=be(m);g.Ia.add(4),await uc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await hd(g)}(this))})}),this.Aa=new UM(s,a)}}async function hd(i){if(Oa(i))for(const e of i.da)await e(!0)}async function uc(i){for(const e of i.da)await e(!1)}function pb(i,e){const t=be(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),b_(t)?w_(t):rl(t).x_()&&A_(t,e))}function S_(i,e){const t=be(i),s=rl(t);t.Ta.delete(e),s.x_()&&mb(t,e),t.Ta.size===0&&(s.x_()?s.B_():Oa(t)&&t.Aa.set("Unknown"))}function A_(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rl(i).H_(e)}function mb(i,e){i.Ra.$e(e),rl(i).Y_(e)}function w_(i){i.Ra=new k2({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),rl(i).start(),i.Aa.aa()}function b_(i){return Oa(i)&&!rl(i).M_()&&i.Ta.size>0}function Oa(i){return be(i).Ia.size===0}function gb(i){i.Ra=void 0}async function BM(i){i.Aa.set("Online")}async function jM(i){i.Ta.forEach((e,t)=>{A_(i,e)})}async function FM(i,e){gb(i),b_(i)?(i.Aa.la(e),w_(i)):i.Aa.set("Unknown")}async function qM(i,e,t){if(i.Aa.set("Online"),e instanceof eb&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ta.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ta.delete(d),a.Ra.removeTarget(d))}(i,e)}catch(s){oe(Aa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Df(i,s)}else if(e instanceof nf?i.Ra.Ye(e):e instanceof Jw?i.Ra.it(e):i.Ra.et(e),!t.isEqual(we.min()))try{const s=await hb(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Ra.Pt(c);return d.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=l.Ta.get(g);v&&l.Ta.set(g,v.withResumeToken(m.resumeToken,c))}}),d.targetMismatches.forEach((m,g)=>{const v=l.Ta.get(m);if(!v)return;l.Ta.set(m,v.withResumeToken(nn.EMPTY_BYTE_STRING,v.snapshotVersion)),mb(l,m);const T=new ur(v.target,m,g,v.sequenceNumber);A_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){oe(Aa,"Failed to raise snapshot:",s),await Df(i,s)}}async function Df(i,e,t){if(!sl(e))throw e;i.Ia.add(1),await uc(i),i.Aa.set("Offline"),t||(t=()=>hb(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{oe(Aa,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await hd(i)})}function _b(i,e){return e().catch(t=>Df(i,t,e))}async function fd(i){const e=be(i),t=Ar(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:u_;for(;HM(e);)try{const a=await bM(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,GM(e,a)}catch(a){await Df(e,a)}yb(e)&&vb(e)}function HM(i){return Oa(i)&&i.Pa.length<10}function GM(i,e){i.Pa.push(e);const t=Ar(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function yb(i){return Oa(i)&&!Ar(i).M_()&&i.Pa.length>0}function vb(i){Ar(i).start()}async function KM(i){Ar(i).na()}async function YM(i){const e=Ar(i);for(const t of i.Pa)e.X_(t.mutations)}async function QM(i,e,t){const s=i.Pa.shift(),a=m_.from(s,e,t);await _b(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await fd(i)}async function WM(i,e){e&&Ar(i).Z_&&await async function(s,a){if(function(c){return O2(c)&&c!==Q.ABORTED}(a.code)){const l=s.Pa.shift();Ar(s).N_(),await _b(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await fd(s)}}(i,e),yb(i)&&vb(i)}async function $0(i,e){const t=be(i);t.asyncQueue.verifyOperationInProgress(),oe(Aa,"RemoteStore received new credentials");const s=Oa(t);t.Ia.add(3),await uc(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await hd(t)}async function XM(i,e){const t=be(i);e?(t.Ia.delete(2),await hd(t)):e||(t.Ia.add(2),await uc(t),t.Aa.set("Unknown"))}function rl(i){return i.Va||(i.Va=function(t,s,a){const l=be(t);return l.ia(),new xM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:BM.bind(null,i),e_:jM.bind(null,i),n_:FM.bind(null,i),J_:qM.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),b_(i)?w_(i):i.Aa.set("Unknown")):(await i.Va.stop(),gb(i))})),i.Va}function Ar(i){return i.ma||(i.ma=function(t,s,a){const l=be(t);return l.ia(),new PM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:KM.bind(null,i),n_:WM.bind(null,i),ea:YM.bind(null,i),ta:QM.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await fd(i)):(await i.ma.stop(),i.Pa.length>0&&(oe(Aa,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new R_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(i,e){if(As("AsyncQueue",`${e}: ${i}`),sl(i))return new ae(Q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static emptySet(e){return new Uo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=Ru(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Uo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Uo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.fa=new _t(me.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Te(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Wo{constructor(e,t,s,a,l,c,d,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Wo(e,t,Uo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class ZM{constructor(){this.queries=J0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=be(t),l=a.queries;a.queries=J0(),l.forEach((c,d)=>{for(const m of d.wa)m.onError(s)})})(this,new ae(Q.ABORTED,"Firestore shutting down"))}}function J0(){return new Da(i=>zw(i),rd)}async function C_(i,e){const t=be(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Sa()&&e.ba()&&(s=2):(l=new $M,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(a,!0);break;case 1:l.ya=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=I_(c,`Initialization of query '${Do(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&D_(t)}async function N_(i,e){const t=be(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?a=e.ba()?0:1:!l.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function JM(i,e){const t=be(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.wa)d.Ca(a)&&(s=!0);c.ya=a}}s&&D_(t)}function ek(i,e,t){const s=be(i),a=s.queries.get(e);if(a)for(const l of a.wa)l.onError(t);s.queries.delete(e)}function D_(i){i.Da.forEach(e=>{e.next()})}var bg,eS;(eS=bg||(bg={})).Fa="default",eS.Cache="cache";class O_{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==bg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.key=e}}class Tb{constructor(e){this.key=e}}class tk{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=Bw(e),this.eu=new Uo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Z0,a=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,T)=>{const w=a.get(v),P=ad(this.query,T)?T:null,B=!!w&&this.mutatedKeys.has(w.key),K=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let W=!1;w&&P?w.data.isEqual(P.data)?B!==K&&(s.track({type:3,doc:P}),W=!0):this.iu(w,P)||(s.track({type:2,doc:P}),W=!0,(m&&this.Xa(P,m)>0||g&&this.Xa(P,g)<0)&&(d=!0)):!w&&P?(s.track({type:0,doc:P}),W=!0):w&&!P&&(s.track({type:1,doc:w}),W=!0,(m||g)&&(d=!0)),W&&(P?(c=c.add(P),l=K?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{eu:c,ru:s,Ds:d,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort((v,T)=>function(P,B){const K=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{At:W})}};return K(P)-K(B)}(v.type,T.type)||this.Xa(v.doc,T.doc)),this.su(s),a=a!=null&&a;const d=t&&!a?this.ou():[],m=this.Za.size===0&&this.current&&!a?1:0,g=m!==this.Ya;return this.Ya=m,c.length!==0||g?{snapshot:new Wo(this.query,e.eu,l,c,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Z0,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Tb(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Eb(s))}),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Wo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const M_="SyncEngine";class nk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ik{constructor(e){this.key=e,this.lu=!1}}class sk{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Da(d=>zw(d),rd),this.Tu=new Map,this.Iu=new Set,this.du=new _t(me.comparator),this.Eu=new Map,this.Au=new y_,this.Ru={},this.Vu=new Map,this.mu=Qo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rk(i,e,t=!0){const s=Ib(i);let a;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.cu()):a=await Sb(s,e,t,!0),a}async function ak(i,e){const t=Ib(i);await Sb(t,e,!0,!1)}async function Sb(i,e,t,s){const a=await RM(i.localStore,ki(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await ok(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&pb(i.remoteStore,a),d}async function ok(i,e,t,s,a){i.gu=(T,w,P)=>async function(K,W,ge,he){let ce=W.view.nu(ge);ce.Ds&&(ce=await K0(K.localStore,W.query,!1).then(({documents:O})=>W.view.nu(O,ce)));const fe=he&&he.targetChanges.get(W.targetId),re=he&&he.targetMismatches.get(W.targetId)!=null,ue=W.view.applyChanges(ce,K.isPrimaryClient,fe,re);return nS(K,W.targetId,ue._u),ue.snapshot}(i,T,w,P);const l=await K0(i.localStore,e,!0),c=new tk(e,l.qs),d=c.nu(l.documents),m=lc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),g=c.applyChanges(d,i.isPrimaryClient,m);nS(i,t,g._u);const v=new nk(e,t,c);return i.Pu.set(e,v),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),g.snapshot}async function lk(i,e,t){const s=be(i),a=s.Pu.get(e),l=s.Tu.get(a.targetId);if(l.length>1)return s.Tu.set(a.targetId,l.filter(c=>!rd(c,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Ag(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&S_(s.remoteStore,a.targetId),Rg(s,a.targetId)}).catch(il)):(Rg(s,a.targetId),await Ag(s.localStore,a.targetId,!0))}async function uk(i,e){const t=be(i),s=t.Pu.get(e),a=t.Tu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),S_(t.remoteStore,s.targetId))}async function ck(i,e,t){const s=_k(i);try{const a=await function(c,d){const m=be(c),g=ht.now(),v=d.reduce((P,B)=>P.add(B.key),Pe());let T,w;return m.persistence.runTransaction("Locally write mutations","readwrite",P=>{let B=ws(),K=Pe();return m.Os.getEntries(P,v).next(W=>{B=W,B.forEach((ge,he)=>{he.isValidDocument()||(K=K.add(ge))})}).next(()=>m.localDocuments.getOverlayedDocuments(P,B)).next(W=>{T=W;const ge=[];for(const he of d){const ce=R2(he,T.get(he.key).overlayedDocument);ce!=null&&ge.push(new Rr(he.key,ce,Ow(ce.value.mapValue),xi.exists(!0)))}return m.mutationQueue.addMutationBatch(P,g,ge,d)}).next(W=>{w=W;const ge=W.applyToLocalDocumentSet(T,K);return m.documentOverlayCache.saveOverlays(P,W.batchId,ge)})}).then(()=>({batchId:w.batchId,changes:Fw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,m){let g=c.Ru[c.currentUser.toKey()];g||(g=new _t(Ce)),g=g.insert(d,m),c.Ru[c.currentUser.toKey()]=g}(s,a.batchId,t),await cc(s,a.changes),await fd(s.remoteStore)}catch(a){const l=I_(a,"Failed to persist write");t.reject(l)}}async function Ab(i,e){const t=be(i);try{const s=await AM(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Eu.get(l);c&&(We(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.lu=!0:a.modifiedDocuments.size>0?We(c.lu,14607):a.removedDocuments.size>0&&(We(c.lu,42227),c.lu=!1))}),await cc(t,s,e)}catch(s){await il(s)}}function tS(i,e,t){const s=be(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const m=be(c);m.onlineState=d;let g=!1;m.queries.forEach((v,T)=>{for(const w of T.wa)w.va(d)&&(g=!0)}),g&&D_(m)}(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hk(i,e,t){const s=be(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let c=new _t(me.comparator);c=c.insert(l,hn.newNoDocument(l,we.min()));const d=Pe().add(l),m=new ud(we.min(),new Map,new _t(Ce),c,d);await Ab(s,m),s.du=s.du.remove(l),s.Eu.delete(e),k_(s)}else await Ag(s.localStore,e,!1).then(()=>Rg(s,e,t)).catch(il)}async function fk(i,e){const t=be(i),s=e.batch.batchId;try{const a=await SM(t.localStore,e);bb(t,s,null),wb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await cc(t,a)}catch(a){await il(a)}}async function dk(i,e,t){const s=be(i);try{const a=await function(c,d){const m=be(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return m.mutationQueue.lookupMutationBatch(g,d).next(T=>(We(T!==null,37113),v=T.keys(),m.mutationQueue.removeMutationBatch(g,T))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>m.localDocuments.getDocuments(g,v))})}(s.localStore,e);bb(s,e,t),wb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await cc(s,a)}catch(a){await il(a)}}function wb(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function bb(i,e,t){const s=be(i);let a=s.Ru[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function Rg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(s=>{i.Au.containsKey(s)||Rb(i,s)})}function Rb(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(S_(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),k_(i))}function nS(i,e,t){for(const s of t)s instanceof Eb?(i.Au.addReference(s.key,e),pk(i,s)):s instanceof Tb?(oe(M_,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||Rb(i,s.key)):Te(19791,{yu:s})}function pk(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(oe(M_,"New document in limbo: "+t),i.Iu.add(s),k_(i))}function k_(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new me(lt.fromString(e)),s=i.mu.next();i.Eu.set(s,new ik(t)),i.du=i.du.insert(t,s),pb(i.remoteStore,new ur(ki(sd(t.path)),s,"TargetPurposeLimboResolution",td.ue))}}async function cc(i,e,t){const s=be(i),a=[],l=[],c=[];s.Pu.isEmpty()||(s.Pu.forEach((d,m)=>{c.push(s.gu(m,e,t).then(g=>{var v;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(v=t?.targetChanges.get(m.targetId))===null||v===void 0?void 0:v.current;s.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=E_.Es(m.targetId,g);l.push(T)}}))}),await Promise.all(c),s.hu.J_(a),await async function(m,g){const v=be(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Z.forEach(g,w=>Z.forEach(w.Is,P=>v.persistence.referenceDelegate.addReference(T,w.targetId,P)).next(()=>Z.forEach(w.ds,P=>v.persistence.referenceDelegate.removeReference(T,w.targetId,P)))))}catch(T){if(!sl(T))throw T;oe(T_,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const P=v.Fs.get(w),B=P.snapshotVersion,K=P.withLastLimboFreeSnapshotVersion(B);v.Fs=v.Fs.insert(w,K)}}}(s.localStore,l))}async function mk(i,e){const t=be(i);if(!t.currentUser.isEqual(e)){oe(M_,"User change. New user:",e.toKey());const s=await cb(t.localStore,e);t.currentUser=e,function(l,c){l.Vu.forEach(d=>{d.forEach(m=>{m.reject(new ae(Q.CANCELLED,c))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cc(t,s.Bs)}}function gk(i,e){const t=be(i),s=t.Eu.get(e);if(s&&s.lu)return Pe().add(s.key);{let a=Pe();const l=t.Tu.get(e);if(!l)return a;for(const c of l){const d=t.Pu.get(c);a=a.unionWith(d.view.tu)}return a}}function Ib(i){const e=be(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hk.bind(null,e),e.hu.J_=JM.bind(null,e.eventManager),e.hu.pu=ek.bind(null,e.eventManager),e}function _k(i){const e=be(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dk.bind(null,e),e}class Of{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return TM(this.persistence,new yM,e.initialUser,this.serializer)}Du(e){return new ub(v_.Vi,this.serializer)}bu(e){return new CM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Of.provider={build:()=>new Of};class yk extends Of{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){We(this.persistence.referenceDelegate instanceof Nf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new iM(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new ub(s=>Nf.Vi(s,t),this.serializer)}}class Ig{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mk.bind(null,this.syncEngine),await XM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZM}()}createDatastore(e){const t=cd(e.databaseInfo.databaseId),s=function(l){return new kM(l)}(e.databaseInfo);return function(l,c,d,m){return new LM(l,c,d,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new zM(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>tS(this.syncEngine,t,0),function(){return W0.C()?new W0:new NM}())}createSyncEngine(e,t){return function(a,l,c,d,m,g,v){const T=new sk(a,l,c,d,m,g);return v&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=be(a);oe(Aa,"RemoteStore shutting down."),l.Ia.add(5),await uc(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ig.provider={build:()=>new Ig};/**
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
 */class x_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):As("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="FirestoreClient";class vk{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=ln.UNAUTHENTICATED,this.clientId=l_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{oe(wr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(oe(wr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=I_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Hm(i,e){i.asyncQueue.verifyOperationInProgress(),oe(wr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await cb(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>{yr("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{oe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(a=>{yr("Terminating Firestore due to IndexedDb database deletion failed",a)})}),i._offlineComponents=e}async function iS(i,e){i.asyncQueue.verifyOperationInProgress();const t=await Ek(i);oe(wr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>$0(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>$0(e.remoteStore,a)),i._onlineComponents=e}async function Ek(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe(wr,"Using user provided OfflineComponentProvider");try{await Hm(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Q.FAILED_PRECONDITION||a.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;yr("Error using user provided cache. Falling back to memory cache: "+t),await Hm(i,new Of)}}else oe(wr,"Using default OfflineComponentProvider"),await Hm(i,new yk(void 0));return i._offlineComponents}async function Cb(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe(wr,"Using user provided OnlineComponentProvider"),await iS(i,i._uninitializedComponentsProvider._online)):(oe(wr,"Using default OnlineComponentProvider"),await iS(i,new Ig))),i._onlineComponents}function Tk(i){return Cb(i).then(e=>e.syncEngine)}async function Mf(i){const e=await Cb(i),t=e.eventManager;return t.onListen=rk.bind(null,e.syncEngine),t.onUnlisten=lk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ak.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uk.bind(null,e.syncEngine),t}function Sk(i,e,t={}){const s=new ys;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,m,g){const v=new x_({next:w=>{v.Ou(),c.enqueueAndForget(()=>N_(l,T));const P=w.docs.has(d);!P&&w.fromCache?g.reject(new ae(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&m&&m.source==="server"?g.reject(new ae(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new O_(sd(d.path),v,{includeMetadataChanges:!0,ka:!0});return C_(l,T)}(await Mf(i),i.asyncQueue,e,t,s)),s.promise}function Ak(i,e,t={}){const s=new ys;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,m,g){const v=new x_({next:w=>{v.Ou(),c.enqueueAndForget(()=>N_(l,T)),w.fromCache&&m.source==="server"?g.reject(new ae(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new O_(d,v,{includeMetadataChanges:!0,ka:!0});return C_(l,T)}(await Mf(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function Nb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Db="firestore.googleapis.com",rS=!0;class aS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Db,this.ssl=rS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:rS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tM)throw new ae(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ae(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ae(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ae(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new OO;switch(s.type){case"firstParty":return new PO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=sS.get(t);s&&(oe("ComponentProvider","Removing Datastore"),sS.delete(t),s.terminate())}(this),Promise.resolve()}}function wk(i,e,t,s={}){var a;i=Jn(i,dd);const l=Rs(e),c=i._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;l&&(Hf(`https://${m}`),Gf("Firestore",!0)),c.host!==Db&&c.host!==m&&yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:m,ssl:l,emulatorOptions:s});if(!mr(g,d)&&(i._setSettings(g),s.mockUserToken)){let v,T;if(typeof s.mockUserToken=="string")v=s.mockUserToken,T=ln.MOCK_USER;else{v=GS(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new ae(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ln(w)}i._authCredentials=new MO(new yw(v,T))}}/**
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
 */class Ma{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ma(this.firestore,e,this._query)}}class Tt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(rc(t,Tt._jsonSchema))return new Tt(e,s||null,new me(lt.fromString(t.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:Mt("string",Tt._jsonSchemaVersion),referencePath:Mt("string")};class pr extends Ma{constructor(e,t,s){super(e,t,sd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new me(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function bk(i,e,...t){if(i=gt(i),Ew("collection","path",e),i instanceof dd){const s=lt.fromString(e,...t);return v0(s),new pr(i,null,s)}{if(!(i instanceof Tt||i instanceof pr))throw new ae(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(lt.fromString(e,...t));return v0(s),new pr(i.firestore,null,s)}}function pa(i,e,...t){if(i=gt(i),arguments.length===1&&(e=l_.newId()),Ew("doc","path",e),i instanceof dd){const s=lt.fromString(e,...t);return y0(s),new Tt(i,null,new me(s))}{if(!(i instanceof Tt||i instanceof pr))throw new ae(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(lt.fromString(e,...t));return y0(s),new Tt(i.firestore,i instanceof pr?i.converter:null,new me(s))}}/**
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
 */const oS="AsyncQueue";class lS{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new fb(this,"async_queue_retry"),this.oc=()=>{const s=qm();s&&oe(oS,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=qm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=qm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ys;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!sl(e))throw e;oe(oS,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,As("INTERNAL UNHANDLED ERROR: ",uS(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=R_.createAndSchedule(this,e,t,s,l=>this.lc(l));return this.ec.push(a),a}ac(){this.tc&&Te(47125,{hc:uS(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function uS(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function cS(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1}(i,["next","error","complete"])}class wa extends dd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new lS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lS(e),this._firestoreClient=void 0,await e}}}function Rk(i,e){const t=typeof i=="object"?i:Qf(),s=typeof i=="string"?i:Sf,a=Ju(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Vg("firestore");l&&wk(a,...l)}return a}function pd(i){if(i._terminated)throw new ae(Q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Ik(i),i._firestoreClient}function Ik(i){var e,t,s;const a=i._freezeSettings(),l=function(d,m,g,v){return new $O(d,m,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Nb(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new vk(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const m=d?._online.build();return{_offline:d?._offline.build(m),_online:m}}(i._componentsProvider))}/**
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
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(nn.fromBase64String(e))}catch(t){throw new ae(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rc(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:Mt("string",Xn._jsonSchemaVersion),bytes:Mt("string")};/**
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
 */class md{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vi._jsonSchemaVersion}}static fromJSON(e){if(rc(e,Vi._jsonSchema))return new Vi(e.latitude,e.longitude)}}Vi._jsonSchemaVersion="firestore/geoPoint/1.0",Vi._jsonSchema={type:Mt("string",Vi._jsonSchemaVersion),latitude:Mt("number"),longitude:Mt("number")};/**
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
 */class Li{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Li._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rc(e,Li._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Li(e.vectorValues);throw new ae(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Li._jsonSchemaVersion="firestore/vectorValue/1.0",Li._jsonSchema={type:Mt("string",Li._jsonSchemaVersion),vectorValues:Mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=/^__.*__$/;class Nk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,t,this.fieldTransforms):new oc(e,this.data,t,this.fieldTransforms)}}class Ob{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Rr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Mb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ec:i})}}class V_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new V_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return kf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Mb(this.Ec)&&Ck.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Dk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||cd(e)}Dc(e,t,s,a=!1){return new V_({Ec:e,methodName:t,bc:s,path:tn.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(i){const e=i._freezeSettings(),t=cd(i._databaseId);return new Dk(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Ok(i,e,t,s,a,l={}){const c=i.Dc(l.merge||l.mergeFields?2:0,e,t,a);U_("Data must be an object, but it was:",c,s);const d=kb(s,c);let m,g;if(l.merge)m=new Pn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const w=Cg(e,T,t);if(!c.contains(w))throw new ae(Q.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Pb(v,w)||v.push(w)}m=new Pn(v),g=c.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,g=c.fieldTransforms;return new Nk(new An(d),m,g)}class gd extends P_{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gd}}function Mk(i,e,t,s){const a=i.Dc(1,e,t);U_("Data must be an object, but it was:",a,s);const l=[],c=An.empty();br(s,(m,g)=>{const v=z_(e,m,t);g=gt(g);const T=a.gc(v);if(g instanceof gd)l.push(v);else{const w=hc(g,T);w!=null&&(l.push(v),c.set(v,w))}});const d=new Pn(l);return new Ob(c,d,a.fieldTransforms)}function kk(i,e,t,s,a,l){const c=i.Dc(1,e,t),d=[Cg(e,s,t)],m=[a];if(l.length%2!=0)throw new ae(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(Cg(e,l[w])),m.push(l[w+1]);const g=[],v=An.empty();for(let w=d.length-1;w>=0;--w)if(!Pb(g,d[w])){const P=d[w];let B=m[w];B=gt(B);const K=c.gc(P);if(B instanceof gd)g.push(P);else{const W=hc(B,K);W!=null&&(g.push(P),v.set(P,W))}}const T=new Pn(g);return new Ob(v,T,c.fieldTransforms)}function xk(i,e,t,s=!1){return hc(t,i.Dc(s?4:3,e))}function hc(i,e){if(xb(i=gt(i)))return U_("Unsupported field value:",e,i),kb(i,e);if(i instanceof P_)return function(s,a){if(!Mb(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let m=hc(d,a.yc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return E2(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ht.fromDate(s);return{timestampValue:Cf(a.serializer,l)}}if(s instanceof ht){const l=new ht(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Cf(a.serializer,l)}}if(s instanceof Vi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xn)return{bytesValue:tb(a.serializer,s._byteString)};if(s instanceof Tt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:__(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Li)return function(c,d){return{mapValue:{fields:{[Nw]:{stringValue:Dw},[Af]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.wc("VectorValues must only contain numeric values.");return p_(d.serializer,g)})}}}}}}(s,a);throw a.wc(`Unsupported field value: ${ed(s)}`)}(i,e)}function kb(i,e){const t={};return Aw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(i,(s,a)=>{const l=hc(a,e.Vc(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function xb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ht||i instanceof Vi||i instanceof Xn||i instanceof Tt||i instanceof P_||i instanceof Li)}function U_(i,e,t){if(!xb(t)||!Tw(t)){const s=ed(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function Cg(i,e,t){if((e=gt(e))instanceof md)return e._internalPath;if(typeof e=="string")return z_(i,e);throw kf("Field path arguments must be of type string or ",i,!1,void 0,t)}const Pk=new RegExp("[~\\*/\\[\\]]");function z_(i,e,t){if(e.search(Pk)>=0)throw kf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new md(...e.split("."))._internalPath}catch{throw kf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function kf(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${s}`),c&&(m+=` in document ${a}`),m+=")"),new ae(Q.INVALID_ARGUMENT,d+i+m)}function Pb(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class Vb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(B_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Vk extends Vb{data(){return super.data()}}function B_(i,e){return typeof e=="string"?z_(i,e):e instanceof md?e._internalPath:e._delegate._internalPath}/**
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
 */function Lb(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class j_{}class Lk extends j_{}function hS(i,e,...t){let s=[];e instanceof j_&&s.push(e),s=s.concat(t),function(l){const c=l.filter(m=>m instanceof F_).length,d=l.filter(m=>m instanceof _d).length;if(c>1||c>0&&d>0)throw new ae(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const a of s)i=a._apply(i);return i}class _d extends Lk{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new _d(e,t,s)}_apply(e){const t=this._parse(e);return Ub(e._query,t),new Ma(e.firestore,e.converter,_g(e._query,t))}_parse(e){const t=L_(e.firestore);return function(l,c,d,m,g,v,T){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ae(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){dS(T,v);const B=[];for(const K of T)B.push(fS(m,l,K));w={arrayValue:{values:B}}}else w=fS(m,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||dS(T,v),w=xk(d,c,T,v==="in"||v==="not-in");return Ot.create(g,v,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Qh(i,e,t){const s=e,a=B_("where",i);return _d._create(a,s,t)}class F_ extends j_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new F_(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:hi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const m of d)Ub(c,m),c=_g(c,m)}(e._query,t),new Ma(e.firestore,e.converter,_g(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fS(i,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new ae(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uw(e)&&t.indexOf("/")!==-1)throw new ae(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(lt.fromString(t));if(!me.isDocumentKey(s))throw new ae(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return I0(i,new me(s))}if(t instanceof Tt)return I0(i,t._key);throw new ae(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ed(t)}.`)}function dS(i,e){if(!Array.isArray(i)||i.length===0)throw new ae(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ub(i,e){const t=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(i.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ae(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Uk{convertValue(e,t="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return br(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Af].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>bt(c.doubleValue));return new Li(l)}convertGeoPoint(e){return new Vi(bt(e.latitude),bt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=id(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Hu(e));default:return null}}convertTimestamp(e){const t=Er(e);return new ht(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);We(ob(s),9688,{name:e});const a=new Gu(s.get(1),s.get(3)),l=new me(s.popFirst(5));return a.isEqual(t)||As(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function zk(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Cu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _a extends Vb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(B_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_a._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_a._jsonSchemaVersion="firestore/documentSnapshot/1.0",_a._jsonSchema={type:Mt("string",_a._jsonSchemaVersion),bundleSource:Mt("string","DocumentSnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class sf extends _a{data(e={}){return super.data(e)}}class ya{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Cu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new sf(this._firestore,this._userDataWriter,s.key,s,new Cu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const m=new sf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Cu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const m=new sf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Cu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:Bk(d.type),doc:m,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ya._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=l_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Bk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:i})}}/**
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
 */function jk(i){i=Jn(i,Tt);const e=Jn(i.firestore,wa);return Sk(pd(e),i._key).then(t=>Bb(e,i,t))}ya._jsonSchemaVersion="firestore/querySnapshot/1.0",ya._jsonSchema={type:Mt("string",ya._jsonSchemaVersion),bundleSource:Mt("string","QuerySnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class q_ extends Uk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function pS(i){i=Jn(i,Ma);const e=Jn(i.firestore,wa),t=pd(e),s=new q_(e);return Lb(i._query),Ak(t,i._query).then(a=>new ya(e,s,i,a))}function Fk(i,e,t){i=Jn(i,Tt);const s=Jn(i.firestore,wa),a=zk(i.converter,e);return zb(s,[Ok(L_(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,xi.none())])}function Tu(i,e,t,...s){i=Jn(i,Tt);const a=Jn(i.firestore,wa),l=L_(a);let c;return c=typeof(e=gt(e))=="string"||e instanceof md?kk(l,"updateDoc",i._key,e,t,s):Mk(l,"updateDoc",i._key,e),zb(a,[c.toMutation(i._key,xi.exists(!0))])}function qk(i,...e){var t,s,a;i=gt(i);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||cS(e[c])||(l=e[c++]);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(cS(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let m,g,v;if(i instanceof Tt)g=Jn(i.firestore,wa),v=sd(i._key.path),m={next:T=>{e[c]&&e[c](Bb(g,i,T))},error:e[c+1],complete:e[c+2]};else{const T=Jn(i,Ma);g=Jn(T.firestore,wa),v=T._query;const w=new q_(g);m={next:P=>{e[c]&&e[c](new ya(g,w,T,P))},error:e[c+1],complete:e[c+2]},Lb(i._query)}return function(w,P,B,K){const W=new x_(K),ge=new O_(P,W,B);return w.asyncQueue.enqueueAndForget(async()=>C_(await Mf(w),ge)),()=>{W.Ou(),w.asyncQueue.enqueueAndForget(async()=>N_(await Mf(w),ge))}}(pd(g),v,d,m)}function zb(i,e){return function(s,a){const l=new ys;return s.asyncQueue.enqueueAndForget(async()=>ck(await Tk(s),a,l)),l.promise}(pd(i),e)}function Bb(i,e,t){const s=t.docs.get(e._key),a=new q_(i);return new _a(i,a,e._key,s,new Cu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){nl=a})(Ia),gr(new Es("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new wa(new kO(s.getProvider("auth-internal")),new VO(c,s.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ae(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gu(g.options.projectId,v)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Zn(d0,p0,e),Zn(d0,p0,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="type.googleapis.com/google.protobuf.Int64Value",Gk="type.googleapis.com/google.protobuf.UInt64Value";function jb(i,e){const t={};for(const s in i)i.hasOwnProperty(s)&&(t[s]=e(i[s]));return t}function xf(i){if(i==null)return null;if(i instanceof Number&&(i=i.valueOf()),typeof i=="number"&&isFinite(i)||i===!0||i===!1||Object.prototype.toString.call(i)==="[object String]")return i;if(i instanceof Date)return i.toISOString();if(Array.isArray(i))return i.map(e=>xf(e));if(typeof i=="function"||typeof i=="object")return jb(i,e=>xf(e));throw new Error("Data cannot be encoded in JSON: "+i)}function Xo(i){if(i==null)return i;if(i["@type"])switch(i["@type"]){case Hk:case Gk:{const e=Number(i.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+i);return e}default:throw new Error("Data cannot be decoded from JSON: "+i)}return Array.isArray(i)?i.map(e=>Xo(e)):typeof i=="function"||typeof i=="object"?jb(i,e=>Xo(e)):i}/**
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
 */const mS={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class wn extends ji{constructor(e,t,s){super(`${H_}/${e}`,t||""),this.details=s,Object.setPrototypeOf(this,wn.prototype)}}function Kk(i){if(i>=200&&i<300)return"ok";switch(i){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Pf(i,e){let t=Kk(i),s=t,a;try{const l=e&&e.error;if(l){const c=l.status;if(typeof c=="string"){if(!mS[c])return new wn("internal","internal");t=mS[c],s=c}const d=l.message;typeof d=="string"&&(s=d),a=l.details,a!==void 0&&(a=Xo(a))}}catch{}return t==="ok"?null:new wn(t,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,t,s,a){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||s.get().then(l=>this.messaging=l,()=>{}),this.appCheck||a?.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),a=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:a}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="us-central1",Qk=/^data: (.*?)(?:\n|$)/;function Wk(i){let e=null;return{promise:new Promise((t,s)=>{e=setTimeout(()=>{s(new wn("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{e&&clearTimeout(e)}}}class Xk{constructor(e,t,s,a,l=Ng,c=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new Yk(e,t,s,a),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(l);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=Ng}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function $k(i,e,t){const s=Rs(e);i.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(Hf(i.emulatorOrigin),Gf("Functions",!0))}function Zk(i,e,t){const s=a=>ex(i,e,a,{});return s.stream=(a,l)=>nx(i,e,a,l),s}async function Jk(i,e,t,s){t["Content-Type"]="application/json";let a;try{a=await s(i,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}async function Fb(i,e){const t={},s=await i.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(t.Authorization="Bearer "+s.authToken),s.messagingToken&&(t["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=s.appCheckToken),t}function ex(i,e,t,s){const a=i._url(e);return tx(i,a,t,s)}async function tx(i,e,t,s){t=xf(t);const a={data:t},l=await Fb(i,s),c=s.timeout||7e4,d=Wk(c),m=await Promise.race([Jk(e,a,l,i.fetchImpl),d.promise,i.cancelAllRequests]);if(d.cancel(),!m)throw new wn("cancelled","Firebase Functions instance was deleted.");const g=Pf(m.status,m.json);if(g)throw g;if(!m.json)throw new wn("internal","Response is not valid JSON object.");let v=m.json.data;if(typeof v>"u"&&(v=m.json.result),typeof v>"u")throw new wn("internal","Response is missing data field.");return{data:Xo(v)}}function nx(i,e,t,s){const a=i._url(e);return ix(i,a,t,s||{})}async function ix(i,e,t,s){var a;t=xf(t);const l={data:t},c=await Fb(i,s);c["Content-Type"]="application/json",c.Accept="text/event-stream";let d;try{d=await i.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:c,signal:s?.signal})}catch(P){if(P instanceof Error&&P.name==="AbortError"){const K=new wn("cancelled","Request was cancelled.");return{data:Promise.reject(K),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(K)}}}}}}const B=Pf(0,null);return{data:Promise.reject(B),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(B)}}}}}}let m,g;const v=new Promise((P,B)=>{m=P,g=B});(a=s?.signal)===null||a===void 0||a.addEventListener("abort",()=>{const P=new wn("cancelled","Request was cancelled.");g(P)});const T=d.body.getReader(),w=sx(T,m,g,s?.signal);return{stream:{[Symbol.asyncIterator](){const P=w.getReader();return{async next(){const{value:B,done:K}=await P.read();return{value:B,done:K}},async return(){return await P.cancel(),{done:!0,value:void 0}}}}},data:v}}function sx(i,e,t,s){const a=(c,d)=>{const m=c.match(Qk);if(!m)return;const g=m[1];try{const v=JSON.parse(g);if("result"in v){e(Xo(v.result));return}if("message"in v){d.enqueue(Xo(v.message));return}if("error"in v){const T=Pf(0,v);d.error(T),t(T);return}}catch(v){if(v instanceof wn){d.error(v),t(v);return}}},l=new TextDecoder;return new ReadableStream({start(c){let d="";return m();async function m(){if(s?.aborted){const g=new wn("cancelled","Request was cancelled");return c.error(g),t(g),Promise.resolve()}try{const{value:g,done:v}=await i.read();if(v){d.trim()&&a(d.trim(),c),c.close();return}if(s?.aborted){const w=new wn("cancelled","Request was cancelled");c.error(w),t(w),await i.cancel();return}d+=l.decode(g,{stream:!0});const T=d.split(`
`);d=T.pop()||"";for(const w of T)w.trim()&&a(w.trim(),c);return m()}catch(g){const v=g instanceof wn?g:Pf(0,null);c.error(v),t(v)}}},cancel(){return i.cancel()}})}const gS="@firebase/functions",_S="0.12.9";/**
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
 */const rx="auth-internal",ax="app-check-internal",ox="messaging-internal";function lx(i){const e=(t,{instanceIdentifier:s})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider(rx),c=t.getProvider(ox),d=t.getProvider(ax);return new Xk(a,l,c,d,s)};gr(new Es(H_,e,"PUBLIC").setMultipleInstances(!0)),Zn(gS,_S,i),Zn(gS,_S,"esm2017")}/**
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
 */function ux(i=Qf(),e=Ng){const s=Ju(gt(i),H_).getImmediate({identifier:e}),a=Vg("functions");return a&&qb(s,...a),s}function qb(i,e,t){$k(gt(i),e,t)}function yd(i,e,t){return Zk(gt(i),e)}lx();function G_(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function Hb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cx=Hb,Gb=new Zu("auth","Firebase",Hb());/**
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
 */const Vf=new Yf("@firebase/auth");function hx(i,...e){Vf.logLevel<=xe.WARN&&Vf.warn(`Auth (${Ia}): ${i}`,...e)}function rf(i,...e){Vf.logLevel<=xe.ERROR&&Vf.error(`Auth (${Ia}): ${i}`,...e)}/**
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
 */function fi(i,...e){throw K_(i,...e)}function Ui(i,...e){return K_(i,...e)}function Kb(i,e,t){const s=Object.assign(Object.assign({},cx()),{[e]:t});return new Zu("auth","Firebase",s).create(e,{appName:i.name})}function vs(i){return Kb(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Gb.create(i,...e)}function Ee(i,e,...t){if(!i)throw K_(e,...t)}function ms(i){const e="INTERNAL ASSERTION FAILED: "+i;throw rf(e),new Error(e)}function bs(i,e){i||ms(e)}/**
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
 */function Dg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function fx(){return yS()==="http:"||yS()==="https:"}function yS(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function dx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fx()||_1()||"connection"in navigator)?navigator.onLine:!0}function px(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class fc{constructor(e,t){this.shortDelay=e,this.longDelay=t,bs(t>e,"Short delay should be less than long delay!"),this.isMobile=Ug()||KS()}get(){return dx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Y_(i,e){bs(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Yb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_x=new fc(3e4,6e4);function Ir(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Cr(i,e,t,s,a={}){return Qb(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=Zo(Object.assign({key:i.config.apiKey},c)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},l);return g1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Rs(i.emulatorConfig.host)&&(g.credentials="include"),Yb.fetch()(await Wb(i,i.config.apiHost,t,d),g)})}async function Qb(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},mx),e);try{const a=new vx(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Wh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,g]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wh(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Wh(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw Wh(i,"user-disabled",c);const v=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Kb(i,v,g);fi(i,v)}}catch(a){if(a instanceof ji)throw a;fi(i,"network-request-failed",{message:String(a)})}}async function dc(i,e,t,s,a={}){const l=await Cr(i,e,t,s,a);return"mfaPendingCredential"in l&&fi(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function Wb(i,e,t,s){const a=`${e}${t}?${s}`,l=i,c=l.config.emulator?Y_(i.config,a):`${i.config.apiScheme}://${a}`;return gx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function yx(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ui(this.auth,"network-request-failed")),_x.get())})}}function Wh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Ui(i,e,s);return a.customData._tokenResponse=t,a}function vS(i){return i!==void 0&&i.enterprise!==void 0}class Ex{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tx(i,e){return Cr(i,"GET","/v2/recaptchaConfig",Ir(i,e))}/**
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
 */async function Sx(i,e){return Cr(i,"POST","/v1/accounts:delete",e)}async function Lf(i,e){return Cr(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Uu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ax(i,e=!1){const t=gt(i),s=await t.getIdToken(e),a=Q_(s);Ee(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Uu(Gm(a.auth_time)),issuedAtTime:Uu(Gm(a.iat)),expirationTime:Uu(Gm(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Gm(i){return Number(i)*1e3}function Q_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return rf("JWT malformed, contained fewer than 3 sections"),null;try{const a=cf(t);return a?JSON.parse(a):(rf("Failed to decode base64 JWT payload"),null)}catch(a){return rf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function ES(i){const e=Q_(i);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wu(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ji&&wx(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function wx({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class bx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Og{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uu(this.lastLoginAt),this.creationTime=Uu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uf(i){var e;const t=i.auth,s=await i.getIdToken(),a=await Wu(i,Lf(t,{idToken:s}));Ee(a?.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Xb(l.providerUserInfo):[],d=Ix(i.providerData,c),m=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!d?.length,v=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Og(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(i,T)}async function Rx(i){const e=gt(i);await Uf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ix(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Xb(i){return i.map(e=>{var{providerId:t}=e,s=G_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Cx(i,e){const t=await Qb(i,{},async()=>{const s=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await Wb(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:d,body:s};return i.emulatorConfig&&Rs(i.emulatorConfig.host)&&(m.credentials="include"),Yb.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nx(i,e){return Cr(i,"POST","/v2/accounts:revokeToken",Ir(i,e))}/**
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
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ES(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=ES(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await Cx(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new zo;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ee(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ee(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return ms("not implemented")}}/**
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
 */function ir(i,e){Ee(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ui{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=G_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Og(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Wu(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ax(this,e)}reload(){return Rx(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(vs(this.auth));const e=await this.getIdToken();return await Wu(this,Sx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,m,g,v;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,B=(c=t.photoURL)!==null&&c!==void 0?c:void 0,K=(d=t.tenantId)!==null&&d!==void 0?d:void 0,W=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,ge=(g=t.createdAt)!==null&&g!==void 0?g:void 0,he=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ce,emailVerified:fe,isAnonymous:re,providerData:ue,stsTokenManager:O}=t;Ee(ce&&O,e,"internal-error");const b=zo.fromJSON(this.name,O);Ee(typeof ce=="string",e,"internal-error"),ir(T,e.name),ir(w,e.name),Ee(typeof fe=="boolean",e,"internal-error"),Ee(typeof re=="boolean",e,"internal-error"),ir(P,e.name),ir(B,e.name),ir(K,e.name),ir(W,e.name),ir(ge,e.name),ir(he,e.name);const I=new ui({uid:ce,auth:e,email:w,emailVerified:fe,displayName:T,isAnonymous:re,photoURL:B,phoneNumber:P,tenantId:K,stsTokenManager:b,createdAt:ge,lastLoginAt:he});return ue&&Array.isArray(ue)&&(I.providerData=ue.map(M=>Object.assign({},M))),W&&(I._redirectEventId=W),I}static async _fromIdTokenResponse(e,t,s=!1){const a=new zo;a.updateFromServerResponse(t);const l=new ui({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Uf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ee(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Xb(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new zo;d.updateFromIdToken(s);const m=new ui({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Og(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(m,g),m}}/**
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
 */const TS=new Map;function gs(i){bs(i instanceof Function,"Expected a class definition");let e=TS.get(i);return e?(bs(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,TS.set(i,e),e)}/**
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
 */class $b{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$b.type="NONE";const SS=$b;/**
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
 */function af(i,e,t){return`firebase:${i}:${e}:${t}`}class Bo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=af(this.userKey,a.apiKey,l),this.fullPersistenceKey=af("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lf(this.auth,{idToken:e}).catch(()=>{});return t?ui._fromGetAccountInfoResponse(this.auth,t,e):null}return ui._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Bo(gs(SS),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||gs(SS);const c=af(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const w=await Lf(e,{idToken:v}).catch(()=>{});if(!w)break;T=await ui._fromGetAccountInfoResponse(e,w,v)}else T=ui._fromJSON(e,v);g!==l&&(d=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Bo(l,e,s):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Bo(l,e,s))}}/**
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
 */function AS(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iR(e))return"Blackberry";if(sR(e))return"Webos";if(Jb(e))return"Safari";if((e.includes("chrome/")||eR(e))&&!e.includes("edge/"))return"Chrome";if(nR(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function Zb(i=dn()){return/firefox\//i.test(i)}function Jb(i=dn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eR(i=dn()){return/crios\//i.test(i)}function tR(i=dn()){return/iemobile/i.test(i)}function nR(i=dn()){return/android/i.test(i)}function iR(i=dn()){return/blackberry/i.test(i)}function sR(i=dn()){return/webos/i.test(i)}function W_(i=dn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Dx(i=dn()){var e;return W_(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ox(){return y1()&&document.documentMode===10}function rR(i=dn()){return W_(i)||nR(i)||sR(i)||iR(i)||/windows phone/i.test(i)||tR(i)}/**
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
 */function aR(i,e=[]){let t;switch(i){case"Browser":t=AS(dn());break;case"Worker":t=`${AS(dn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ia}/${s}`}/**
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
 */class Mx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function kx(i,e={}){return Cr(i,"GET","/v2/passwordPolicy",Ir(i,e))}/**
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
 */const xx=6;class Px{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:xx,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Vx{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wS(this),this.idTokenSubscription=new wS(this),this.beforeStateQueue=new Mx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gs(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lf(this,{idToken:e}),s=await ui._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Sn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&m?.user&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=px()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(vs(this));const t=e?gt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kx(this),t=new Px(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Nx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gs(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[gs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&hx(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ka(i){return gt(i)}class wS{constructor(e){this.auth=e,this.observer=null,this.addObserver=N1(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lx(i){vd=i}function oR(i){return vd.loadJS(i)}function Ux(){return vd.recaptchaEnterpriseScript}function zx(){return vd.gapiScript}function Bx(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class jx{constructor(){this.enterprise=new Fx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Fx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qx="recaptcha-enterprise",lR="NO_RECAPTCHA";class Hx{constructor(e){this.type=qx,this.auth=ka(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{Tx(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new Ex(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{d(m)})})}function a(l,c,d){const m=window.grecaptcha;vS(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(lR)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jx().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&vS(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=Ux();m.length!==0&&(m+=d),oR(m).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function bS(i,e,t,s=!1,a=!1){const l=new Hx(i);let c;if(a)c=lR;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Mg(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await bS(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await bS(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
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
 */function Gx(i,e){const t=Ju(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(mr(l,e??{}))return a;fi(a,"already-initialized")}return t.initialize({options:e})}function Kx(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(gs);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function Yx(i,e,t){const s=ka(i);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=uR(e),{host:c,port:d}=Qx(e),m=d===null?"":`:${d}`,g={url:`${l}//${c}${m}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(mr(g,s.config.emulator)&&mr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Rs(c)?(Hf(`${l}//${c}${m}`),Gf("Auth",!0)):Wx()}function uR(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Qx(i){const e=uR(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:RS(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:RS(c)}}}function RS(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Wx(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class X_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ms("not implemented")}_getIdTokenResponse(e){return ms("not implemented")}_linkToIdToken(e,t){return ms("not implemented")}_getReauthenticationResolver(e){return ms("not implemented")}}async function Xx(i,e){return Cr(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $x(i,e){return dc(i,"POST","/v1/accounts:signInWithPassword",Ir(i,e))}/**
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
 */async function Zx(i,e){return dc(i,"POST","/v1/accounts:signInWithEmailLink",Ir(i,e))}async function Jx(i,e){return dc(i,"POST","/v1/accounts:signInWithEmailLink",Ir(i,e))}/**
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
 */class Xu extends X_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Xu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Xu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mg(e,t,"signInWithPassword",$x);case"emailLink":return Zx(e,{email:this._email,oobCode:this._password});default:fi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mg(e,s,"signUpPassword",Xx);case"emailLink":return Jx(e,{idToken:t,email:this._email,oobCode:this._password});default:fi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jo(i,e){return dc(i,"POST","/v1/accounts:signInWithIdp",Ir(i,e))}/**
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
 */const eP="http://localhost";class ba extends X_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ba(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=G_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new ba(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return jo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,jo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jo(e,t)}buildRequest(){const e={requestUri:eP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zo(t)}return e}}/**
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
 */function tP(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nP(i){const e=Su(Au(i)).link,t=e?Su(Au(e)).deep_link_id:null,s=Su(Au(i)).deep_link_id;return(s?Su(Au(s)).link:null)||s||t||e||i}class $_{constructor(e){var t,s,a,l,c,d;const m=Su(Au(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,v=(s=m.oobCode)!==null&&s!==void 0?s:null,T=tP((a=m.mode)!==null&&a!==void 0?a:null);Ee(g&&v&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=v,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=m.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=nP(e);try{return new $_(t)}catch{return null}}}/**
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
 */class al{constructor(){this.providerId=al.PROVIDER_ID}static credential(e,t){return Xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=$_.parseLink(t);return Ee(s,"argument-error"),Xu._fromEmailAndCode(e,s.code,s.tenantId)}}al.PROVIDER_ID="password";al.EMAIL_PASSWORD_SIGN_IN_METHOD="password";al.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pc extends cR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends pc{constructor(){super("facebook.com")}static credential(e){return ba._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class ar extends pc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ba._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ar.credential(t,s)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
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
 */class or extends pc{constructor(){super("github.com")}static credential(e){return ba._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class lr extends pc{constructor(){super("twitter.com")}static credential(e,t){return ba._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return lr.credential(t,s)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function iP(i,e){return dc(i,"POST","/v1/accounts:signUp",Ir(i,e))}/**
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
 */class Ra{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await ui._fromIdTokenResponse(e,s,a),c=IS(s);return new Ra({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=IS(s);return new Ra({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function IS(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class zf extends ji{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,zf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new zf(e,t,s,a)}}function hR(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?zf._fromErrorAndOperation(i,l,e,s):l})}async function sP(i,e,t=!1){const s=await Wu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ra._forOperation(i,"link",s)}/**
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
 */async function rP(i,e,t=!1){const{auth:s}=i;if(Sn(s.app))return Promise.reject(vs(s));const a="reauthenticate";try{const l=await Wu(i,hR(s,a,e,i),t);Ee(l.idToken,s,"internal-error");const c=Q_(l.idToken);Ee(c,s,"internal-error");const{sub:d}=c;return Ee(i.uid===d,s,"user-mismatch"),Ra._forOperation(i,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&fi(s,"user-mismatch"),l}}/**
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
 */async function fR(i,e,t=!1){if(Sn(i.app))return Promise.reject(vs(i));const s="signIn",a=await hR(i,s,e),l=await Ra._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function aP(i,e){return fR(ka(i),e)}/**
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
 */async function dR(i){const e=ka(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oP(i,e,t){if(Sn(i.app))return Promise.reject(vs(i));const s=ka(i),c=await Mg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iP).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&dR(i),m}),d=await Ra._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function lP(i,e,t){return Sn(i.app)?Promise.reject(vs(i)):aP(gt(i),al.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&dR(i),s})}function uP(i,e,t,s){return gt(i).onIdTokenChanged(e,t,s)}function cP(i,e,t){return gt(i).beforeAuthStateChanged(e,t)}function hP(i,e,t,s){return gt(i).onAuthStateChanged(e,t,s)}const Bf="__sak";/**
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
 */class pR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bf,"1"),this.storage.removeItem(Bf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fP=1e3,dP=10;class mR extends pR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,m)=>{this.notifyListeners(c,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Ox()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,dP):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},fP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mR.type="LOCAL";const pP=mR;/**
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
 */class gR extends pR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gR.type="SESSION";const _R=gR;/**
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
 */function mP(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Ed(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),m=await mP(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ed.receivers=[];/**
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
 */function Z_(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class gP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,m)=>{const g=Z_("",20);a.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(v),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function zi(){return window}function _P(i){zi().location.href=i}/**
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
 */function yR(){return typeof zi().WorkerGlobalScope<"u"&&typeof zi().importScripts=="function"}async function yP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vP(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function EP(){return yR()?self:null}/**
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
 */const vR="firebaseLocalStorageDb",TP=1,jf="firebaseLocalStorage",ER="fbase_key";class mc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Td(i,e){return i.transaction([jf],e?"readwrite":"readonly").objectStore(jf)}function SP(){const i=indexedDB.deleteDatabase(vR);return new mc(i).toPromise()}function kg(){const i=indexedDB.open(vR,TP);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(jf,{keyPath:ER})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(jf)?e(s):(s.close(),await SP(),e(await kg()))})})}async function CS(i,e,t){const s=Td(i,!0).put({[ER]:e,value:t});return new mc(s).toPromise()}async function AP(i,e){const t=Td(i,!1).get(e),s=await new mc(t).toPromise();return s===void 0?null:s.value}function NS(i,e){const t=Td(i,!0).delete(e);return new mc(t).toPromise()}const wP=800,bP=3;class TR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>bP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ed._getInstance(EP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yP(),!this.activeServiceWorker)return;this.sender=new gP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kg();return await CS(e,Bf,"1"),await NS(e,Bf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>CS(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>AP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>NS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Td(a,!1).getAll();return new mc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TR.type="LOCAL";const RP=TR;new fc(3e4,6e4);/**
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
 */function IP(i,e){return e?gs(e):(Ee(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class J_ extends X_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CP(i){return fR(i.auth,new J_(i),i.bypassAuthState)}function NP(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),rP(t,new J_(i),i.bypassAuthState)}async function DP(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),sP(t,new J_(i),i.bypassAuthState)}/**
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
 */class SR{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CP;case"linkViaPopup":case"linkViaRedirect":return DP;case"reauthViaPopup":case"reauthViaRedirect":return NP;default:fi(this.auth,"internal-error")}}resolve(e){bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OP=new fc(2e3,1e4);class Po extends SR{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Po.currentPopupAction&&Po.currentPopupAction.cancel(),Po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){bs(this.filter.length===1,"Popup operations only handle one event");const e=Z_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OP.get())};e()}}Po.currentPopupAction=null;/**
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
 */const MP="pendingRedirect",of=new Map;class kP extends SR{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=of.get(this.auth._key());if(!e){try{const s=await xP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}of.set(this.auth._key(),e)}return this.bypassAuthState||of.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xP(i,e){const t=LP(e),s=VP(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function PP(i,e){of.set(i._key(),e)}function VP(i){return gs(i._redirectPersistence)}function LP(i){return af(MP,i.config.apiKey,i.name)}async function UP(i,e,t=!1){if(Sn(i.app))return Promise.reject(vs(i));const s=ka(i),a=IP(s,e),c=await new kP(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const zP=10*60*1e3;class BP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!AR(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ui(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zP&&this.cachedEventUids.clear(),this.cachedEventUids.has(DS(e))}saveEventToCache(e){this.cachedEventUids.add(DS(e)),this.lastProcessedEventTime=Date.now()}}function DS(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function AR({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function jP(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AR(i);default:return!1}}/**
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
 */async function FP(i,e={}){return Cr(i,"GET","/v1/projects",e)}/**
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
 */const qP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HP=/^https?/;async function GP(i){if(i.config.emulator)return;const{authorizedDomains:e}=await FP(i);for(const t of e)try{if(KP(t))return}catch{}fi(i,"unauthorized-domain")}function KP(i){const e=Dg(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!HP.test(t))return!1;if(qP.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const YP=new fc(3e4,6e4);function OS(){const i=zi().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function QP(i){return new Promise((e,t)=>{var s,a,l;function c(){OS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{OS(),t(Ui(i,"network-request-failed"))},timeout:YP.get()})}if(!((a=(s=zi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=zi().gapi)===null||l===void 0)&&l.load)c();else{const d=Bx("iframefcb");return zi()[d]=()=>{gapi.load?c():t(Ui(i,"network-request-failed"))},oR(`${zx()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw lf=null,e})}let lf=null;function WP(i){return lf=lf||QP(i),lf}/**
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
 */const XP=new fc(5e3,15e3),$P="__/auth/iframe",ZP="emulator/auth/iframe",JP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tV(i){const e=i.config;Ee(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Y_(e,ZP):`https://${i.config.authDomain}/${$P}`,s={apiKey:e.apiKey,appName:i.name,v:Ia},a=eV.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Zo(s).slice(1)}`}async function nV(i){const e=await WP(i),t=zi().gapi;return Ee(t,i,"internal-error"),e.open({where:document.body,url:tV(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JP,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Ui(i,"network-request-failed"),d=zi().setTimeout(()=>{l(c)},XP.get());function m(){zi().clearTimeout(d),a(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const iV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sV=500,rV=600,aV="_blank",oV="http://localhost";class MS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lV(i,e,t,s=sV,a=rV){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const m=Object.assign(Object.assign({},iV),{width:s.toString(),height:a.toString(),top:l,left:c}),g=dn().toLowerCase();t&&(d=eR(g)?aV:t),Zb(g)&&(e=e||oV,m.scrollbars="yes");const v=Object.entries(m).reduce((w,[P,B])=>`${w}${P}=${B},`,"");if(Dx(g)&&d!=="_self")return uV(e||"",d),new MS(null);const T=window.open(e||"",d,v);Ee(T,i,"popup-blocked");try{T.focus()}catch{}return new MS(T)}function uV(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const cV="__/auth/handler",hV="emulator/auth/handler",fV=encodeURIComponent("fac");async function kS(i,e,t,s,a,l){Ee(i.config.authDomain,i,"auth-domain-config-required"),Ee(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ia,eventId:a};if(e instanceof cR){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",Ym(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof pc){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const m=await i._getAppCheckToken(),g=m?`#${fV}=${encodeURIComponent(m)}`:"";return`${dV(i)}?${Zo(d).slice(1)}${g}`}function dV({config:i}){return i.emulator?Y_(i,hV):`https://${i.authDomain}/${cV}`}/**
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
 */const Km="webStorageSupport";class pV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_R,this._completeRedirectFn=UP,this._overrideRedirectResult=PP}async _openPopup(e,t,s,a){var l;bs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await kS(e,t,s,Dg(),a);return lV(e,c,Z_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await kS(e,t,s,Dg(),a);return _P(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(bs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nV(e),s=new BP(e);return t.register("authEvent",a=>(Ee(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Km,{type:Km},a=>{var l;const c=(l=a?.[0])===null||l===void 0?void 0:l[Km];c!==void 0&&t(!!c),fi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rR()||Jb()||W_()}}const mV=pV;var xS="@firebase/auth",PS="1.10.8";/**
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
 */class gV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _V(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yV(i){gr(new Es("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ee(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aR(i)},g=new Vx(s,a,l,m);return Kx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),gr(new Es("auth-internal",e=>{const t=ka(e.getProvider("auth").getImmediate());return(s=>new gV(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(xS,PS,_V(i)),Zn(xS,PS,"esm2017")}/**
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
 */const vV=5*60,EV=HS("authIdTokenMaxAge")||vV;let VS=null;const TV=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>EV)return;const a=t?.token;VS!==a&&(VS=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function SV(i=Qf()){const e=Ju(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Gx(i,{popupRedirectResolver:mV,persistence:[RP,pP,_R]}),s=HS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=TV(l.toString());cP(t,c,()=>c(t.currentUser)),uP(t,d=>c(d))}}const a=FS("auth");return a&&Yx(t,`http://${a}`),t}function AV(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Lx({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=Ui("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",AV().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yV("Browser");const wV={apiKey:"AIzaSyD-EnuWkZgnjb6hnaP4LhUIZvxSCf5tiIo",authDomain:"game-of-trust-675c9.firebaseapp.com",projectId:"game-of-trust-675c9",storageBucket:"game-of-trust-675c9.firebasestorage.app",messagingSenderId:"72708199445",appId:"1:72708199445:web:ce23ac49a6c15fe7f02a1c",measurementId:"G-K3GSYXR89X"},Sd=XS(wV);CO(Sd);const sr=Rk(Sd),$u=SV(Sd),gc=ux(Sd,"us-central1");qb(gc,"localhost",5001);const bV=({onAuthSuccess:i})=>{const[e,t]=it.useState(!0),[s,a]=it.useState(""),[l,c]=it.useState(""),[d,m]=it.useState(""),[g,v]=it.useState(!1),[T,w]=it.useState(""),P=async B=>{B.preventDefault(),v(!0),w("");try{if(e){const K=await lP($u,s,l);i(K.user.uid)}else{if(!d.trim()){w("Username is required for registration");return}const K=await oP($u,s,l);await Fk(pa(sr,"usernames",K.user.uid),{username:d.trim(),createdAt:new Date().toISOString()}),i(K.user.uid)}}catch(K){w(K.message||"An error occurred")}finally{v(!1)}};return $.jsxs("div",{children:[$.jsx("h2",{children:e?"Login":"Sign Up"}),$.jsxs("form",{onSubmit:P,children:[$.jsxs("div",{children:[$.jsx("label",{children:"Email:"}),$.jsx("input",{type:"email",value:s,onChange:B=>a(B.target.value),required:!0})]}),$.jsxs("div",{children:[$.jsx("label",{children:"Password:"}),$.jsx("input",{type:"password",value:l,onChange:B=>c(B.target.value),required:!0})]}),!e&&$.jsxs("div",{children:[$.jsx("label",{children:"Username:"}),$.jsx("input",{type:"text",value:d,onChange:B=>m(B.target.value),required:!0})]}),T&&$.jsx("div",{style:{color:"red"},children:T}),$.jsx("button",{type:"submit",disabled:g,children:g?"Loading...":e?"Login":"Sign Up"})]}),$.jsxs("button",{onClick:()=>t(!e),children:["Switch to ",e?"Sign Up":"Login"]})]})},Ff=async i=>{try{const e=await jk(pa(sr,"usernames",i));return e.exists()?e.data().username:null}catch(e){return console.error("Error fetching username:",e),null}},Co=6,LS=({game:i,currentUser:e,onCellClick:t,onAnimationComplete:s,gridSize:a=50})=>{const[l,c]=it.useState(null),[d,m]=it.useState(0),[g,v]=it.useState(!1),T=fe=>{const re={};for(let ue=0;ue<a;ue++){re[`row${ue}`]=[];for(let O=0;O<a;O++){const b=w(fe,ue,O),I=fe[`row${ue}`]?.[O]||0;if(I>0)re[`row${ue}`][O]=b===2||b===3?I:0;else if(b===3){const M=P(fe,ue,O);M.player1>M.player2?re[`row${ue}`][O]=1:M.player2>M.player1?re[`row${ue}`][O]=2:re[`row${ue}`][O]=Math.random()>.5?1:2}else re[`row${ue}`][O]=0}}return re},w=(fe,re,ue)=>{let O=0;for(let b=-1;b<=1;b++)for(let I=-1;I<=1;I++){if(b===0&&I===0)continue;const M=re+b,N=ue+I;M>=0&&M<a&&N>=0&&N<a&&(fe[`row${M}`]?.[N]||0)>0&&O++}return O},P=(fe,re,ue)=>{let O=0,b=0;for(let I=-1;I<=1;I++)for(let M=-1;M<=1;M++){if(I===0&&M===0)continue;const N=re+I,D=ue+M;if(N>=0&&N<a&&D>=0&&D<a){const R=fe[`row${N}`]?.[D]||0;R===1?O++:R===2&&b++}}return{player1:O,player2:b}};it.useEffect(()=>{i.state==="fighting"&&!g&&!i.winner&&(v(!0),c(JSON.parse(JSON.stringify(i.grid))),m(0))},[i.state,g,i.grid]),it.useEffect(()=>{if(g&&l&&d<1e3){const fe=setTimeout(()=>{const re=T(l);c(re),m(ue=>ue+1)},50);return()=>clearTimeout(fe)}else g&&d>=1e3&&(v(!1),s&&s())},[g,l,d,s]);const K=e?i.user1?.uid===e.uid?1:i.user2?.uid===e.uid?2:0:0,W=(fe,re)=>{K===0||!(K===1&&fe<Co||K===2&&fe>=a-Co)||t(fe,re)},ge=(fe,re)=>{const O=(g&&l?l:i.grid)[`row${fe}`];return O&&O[re]||0},he=i.state==="waiting"||i.state==="started",ce=()=>{const fe=[];for(let re=0;re<a;re++){const ue=[];for(let O=0;O<a;O++){const b=ge(re,O),I=he&&(K===1&&re<Co||K===2&&re>=a-Co);let M="#fff";b===1?M="#ffcccc":b===2?M="#ccccff":I?M=K===1?"#fff5f5":"#f5f5ff":M="#f9f9f9",ue.push($.jsx("div",{className:"grid-cell",onClick:()=>W(re,O),style:{width:"20px",height:"20px",border:"1px solid #ccc",display:"flex",alignItems:"center",justifyContent:"center",cursor:I?"pointer":"not-allowed",fontSize:"12px",backgroundColor:M},children:b!==0?b:""},`${re}-${O}`))}fe.push($.jsx("div",{className:"grid-row",style:{display:"flex"},children:ue},re))}return fe};return $.jsxs("div",{className:"game-canvas",children:[$.jsxs("div",{className:"player-info",style:{marginBottom:"10px"},children:[$.jsxs("p",{children:["You are Player ",K]}),he&&$.jsxs($.Fragment,{children:[$.jsxs("p",{children:["You can edit rows"," ",K===1?`0-${Co-1}`:`${a-Co}-${a-1}`]}),$.jsx("p",{children:"Click cells in your area to place your number"})]}),g&&$.jsxs("div",{className:"animation-status",children:[$.jsx("p",{children:$.jsx("strong",{children:"Conway's Game of Life Simulation"})}),$.jsxs("p",{children:["Generation: ",d," / 1000"]}),$.jsx("div",{className:"progress-bar",style:{width:"200px",height:"10px",backgroundColor:"#ddd",borderRadius:"5px",overflow:"hidden"},children:$.jsx("div",{className:"progress-fill",style:{width:`${d/1e3*100}%`,height:"100%",backgroundColor:"#4CAF50",transition:"width 0.1s ease"}})})]}),i.state==="fighting"&&!g&&i.winner&&$.jsxs("div",{className:"winner-announcement",children:[$.jsx("h3",{children:"🏆 Battle Complete! 🏆"}),i.winner==="tie"?$.jsxs("div",{children:[$.jsx("p",{children:$.jsx("strong",{children:"It's a tie!"})}),$.jsx("p",{children:"Both players have equal cell counts."}),$.jsxs("p",{children:["🤝 Great game, ",i.user1?.username," and"," ",i.user2?.username,"! 🤝"]})]}):$.jsxs("div",{children:[$.jsx("p",{children:$.jsxs("strong",{children:["Player"," ",i.winner==="player1"?"1":"2"," ","wins!"]})}),i.winner==="player1"&&i.user1&&$.jsxs("p",{children:["🎉 Congratulations ",i.user1.username,"! 🎉"]}),i.winner==="player2"&&i.user2&&$.jsxs("p",{children:["🎉 Congratulations ",i.user2.username,"! 🎉"]}),$.jsx("p",{children:"🏆 Victory achieved through superior strategy! 🏆"})]})]}),i.state==="fighting"&&!g&&!i.winner&&$.jsxs("div",{className:"winner-announcement",children:[$.jsx("h3",{children:"⚔️ Battle Processing... ⚔️"}),$.jsx("p",{children:"Server is calculating the final results..."})]})]}),$.jsx("div",{className:"grid-container",style:{display:"inline-block",border:"2px solid #333"},children:ce()})]})},RV=yd(gc,"createGame"),IV=yd(gc,"joinGame");yd(gc,"startFightingPhase");const CV=yd(gc,"scheduleGameTransition"),NV=async(i,e)=>{try{return(await RV({userId:i,username:e})).data}catch(t){throw console.error("Error calling createGame function:",t),t}},DV=async(i,e,t)=>{try{return(await IV({gameId:i,userId:e,username:t})).data}catch(s){throw console.error("Error calling joinGame function:",s),s}},OV=async i=>{try{return(await CV({gameId:i})).data}catch(e){throw console.error("Error calling scheduleGameTransition function:",e),e}},MV=()=>{const[i,e]=it.useState(null),[t,s]=it.useState(""),[a,l]=it.useState(!1),[c,d]=it.useState(null),[m,g]=it.useState(!1),[v,T]=it.useState(!1),[w,P]=it.useState(!0),[B,K]=it.useState(0),[W,ge]=it.useState(!1);it.useEffect(()=>$u.onAuthStateChanged(async D=>{d(D),D&&await he(D.uid),P(!1)}),[]);const he=async N=>{try{const D=bk(sr,"games"),R=hS(D,Qh("user1.uid","==",N),Qh("state","!=","ended")),Le=hS(D,Qh("user2.uid","==",N),Qh("state","!=","ended")),[Ne,H]=await Promise.all([pS(R),pS(Le)]);if(Ne.empty){if(!H.empty){const te=H.docs[0];s(te.id),e({id:te.id,...te.data()})}}else{const te=Ne.docs[0];s(te.id),e({id:te.id,...te.data()})}}catch(D){console.error("Error checking for existing game:",D)}},ce=async()=>{if(c){l(!0);try{const N=await Ff(c.uid);if(!N){alert("Username not found. Please set up your username first."),l(!1);return}const D=await NV(c.uid,N);D.success?(s(D.gameId),T(!0)):alert("Failed to create game. Please try again.")}catch(N){console.error("Error creating game:",N),alert("Failed to create game. Please try again.")}finally{l(!1)}}},fe=async N=>{if(c)try{const D=await Ff(c.uid);if(!D){alert("Username not found. Please set up your username first.");return}(await DV(N,c.uid,D)).success&&s(N)}catch(D){console.error("Error joining game:",D),alert("Failed to join game. Please check the game ID and try again.")}},re=async()=>{if(!t||!c||!i)return;const N=pa(sr,"games",t),R=i.user1?.uid===c.uid?"user1.ready":"user2.ready";try{await Tu(N,{[R]:!m})}catch(Le){console.error("Error updating ready state:",Le)}},ue=async()=>{if(!t||!c)return;const N=pa(sr,"games",t);try{await Tu(N,{state:"ended"}),e(null),s(""),g(!1),T(!1)}catch(D){console.error("Error aborting game:",D)}},O=async()=>{if(!t||!c)return;const N=pa(sr,"games",t);try{await Tu(N,{state:"waiting","user1.ready":!1,"user2.ready":!1,grid:b(50),startedAt:null,fightingStartedAt:null,finalGrid:null,winner:null,timerStarted:!1}),g(!1),ge(!1),K(0)}catch(D){console.error("Error restarting game:",D)}},b=N=>{const D={};for(let R=0;R<N;R++)D[`row${R}`]=Array(N).fill(0);return D},I=async(N,D)=>{if(!t||!c||!i)return;const R=i.user1?.uid===c.uid?1:i.user2?.uid===c.uid?2:0;if(R===0)return;const Le=pa(sr,"games",t);try{const Ne={...i.grid};Ne[`row${N}`]||(Ne[`row${N}`]=Array(50).fill(0));const H=Ne[`row${N}`][D]||0;Ne[`row${N}`][D]=H===0?R:0,await Tu(Le,{grid:Ne})}catch(Ne){console.error("Error updating grid:",Ne)}},M=()=>{ge(!0)};if(it.useEffect(()=>{if(i?.state==="started"&&i.startedAt){const N=i.startedAt.toDate?i.startedAt.toDate():new Date(i.startedAt),D=new Date(N.getTime()+2*60*1e3),R=setInterval(()=>{const Le=new Date,Ne=Math.max(0,Math.ceil((D.getTime()-Le.getTime())/1e3));K(Ne),Ne===0&&(clearInterval(R),console.log("Client-side timer reached zero - waiting for server to transition game"))},1e3);return()=>clearInterval(R)}},[i?.state,i?.startedAt]),it.useEffect(()=>{if(!t)return;const N=pa(sr,"games",t);return qk(N,R=>{if(R.exists()){const Le={id:R.id,...R.data()};if(Le.state==="ended"){e(null),s(""),g(!1),T(!1);return}if(e(Le),c){const H=Le.user1?.uid===c.uid?Le.user1?.ready:Le.user2?.ready;g(H||!1)}Le.user1?.ready&&Le.user2?.ready&&Le.state==="waiting"&&(async()=>{await Tu(N,{state:"started",startedAt:new Date,timerStarted:!1});try{await OV(t),console.log("Server-side timer started successfully")}catch(H){console.error("Error starting server-side timer:",H)}})()}})},[t,c]),i?.state==="started"){const N=Math.floor(B/60),D=B%60;return $.jsxs("div",{className:"game-started",children:[$.jsx("h2",{children:"Game Started!"}),$.jsxs("div",{className:"game-info",children:[$.jsxs("p",{children:["Players: ",i.user1?.username," vs"," ",i.user2?.username]}),$.jsxs("div",{className:"countdown-timer",children:[$.jsxs("h3",{children:["⏰ Time Remaining: ",N,":",D.toString().padStart(2,"0")]}),$.jsx("p",{children:"Prepare your strategy! The battle begins automatically when the timer reaches zero."})]}),$.jsx("div",{className:"game-controls",children:$.jsx("button",{onClick:ue,className:"abort-button",children:"Abort Game"})})]}),$.jsx(LS,{game:i,currentUser:c,onCellClick:I,gridSize:50})]})}return i?.state==="fighting"?$.jsxs("div",{className:"game-fighting",children:[$.jsx("h2",{children:"⚔️ Battle in Progress! ⚔️"}),$.jsxs("div",{className:"game-info",children:[$.jsxs("p",{children:["Players: ",i.user1?.username," vs"," ",i.user2?.username]}),$.jsxs("div",{className:"game-controls",children:[W&&$.jsx("button",{onClick:O,className:"restart-button",children:"🔄 Restart Game"}),$.jsx("button",{onClick:ue,className:"abort-button",children:"Abort Game"})]})]}),$.jsx(LS,{game:i,currentUser:c,onCellClick:I,onAnimationComplete:M,gridSize:50})]}):$.jsxs("div",{className:"creating-game",children:[w?$.jsx("div",{className:"loading",children:$.jsx("h2",{children:"Loading..."})}):$.jsxs($.Fragment,{children:[$.jsx("h2",{children:"Create or Join Game"}),t?$.jsxs("div",{className:"game-lobby",children:[$.jsx("h3",{children:"Game Lobby"}),$.jsxs("p",{children:[$.jsx("strong",{children:"Game ID:"})," ",t]}),$.jsxs("div",{className:"players-section",children:[$.jsx("h4",{children:"Players:"}),$.jsxs("div",{className:"player-list",children:[$.jsxs("div",{className:"player",children:[$.jsx("span",{children:i?.user1?.username||"Player 1"}),$.jsx("span",{className:`ready-status ${i?.user1?.ready?"ready":"not-ready"}`,children:i?.user1?.ready?"✓ Ready":"○ Not Ready"})]}),$.jsxs("div",{className:"player",children:[$.jsx("span",{children:i?.user2?.username||"Waiting for Player 2..."}),i?.user2&&$.jsx("span",{className:`ready-status ${i?.user2?.ready?"ready":"not-ready"}`,children:i?.user2?.ready?"✓ Ready":"○ Not Ready"})]})]})]}),i?.user2&&$.jsxs("div",{className:"ready-section",children:[$.jsx("button",{onClick:re,className:`ready-button ${m?"ready":"not-ready"}`,children:m?"Cancel Ready":"Ready to Start"}),i?.user1?.ready&&i?.user2?.ready&&$.jsx("p",{className:"starting-message",children:"Starting game..."})]}),v&&!i?.user2&&$.jsxs("div",{className:"waiting-section",children:[$.jsx("p",{children:"Waiting for another player to join..."}),$.jsxs("p",{children:["Share this Game ID with your friend:"," ",$.jsx("strong",{children:t})]})]}),$.jsx("div",{className:"game-controls",children:$.jsx("button",{onClick:ue,className:"abort-button",children:"Abort Game"})})]}):$.jsxs("div",{className:"game-setup",children:[$.jsxs("div",{className:"create-game-section",children:[$.jsx("h3",{children:"Create New Game"}),$.jsx("button",{onClick:ce,disabled:a||!c,className:"create-button",children:a?"Creating...":"Create Game"})]}),$.jsxs("div",{className:"join-game-section",children:[$.jsx("h3",{children:"Join Existing Game"}),$.jsx("input",{type:"text",placeholder:"Enter Game ID",className:"game-id-input",onKeyDown:N=>{if(N.key==="Enter"){const D=N.target.value.trim();D&&fe(D)}}}),$.jsx("button",{onClick:()=>{const D=document.querySelector(".game-id-input")?.value.trim();D&&fe(D)},disabled:!c,className:"join-button",children:"Join Game"})]})]})]}),$.jsx("style",{children:`
                .creating-game {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                
                .loading {
                    text-align: center;
                    padding: 40px;
                }
                
                .game-setup {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 30px;
                }
                
                .create-game-section,
                .join-game-section {
                    flex: 1;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                }
                
                .create-button,
                .join-button,
                .ready-button,
                .abort-button,
                .fight-button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                    margin-right: 10px;
                }
                
                .create-button {
                    background-color: #4CAF50;
                    color: white;
                }
                
                .join-button {
                    background-color: #2196F3;
                    color: white;
                }
                
                .ready-button.ready {
                    background-color: #f44336;
                    color: white;
                }
                
                .ready-button.not-ready {
                    background-color: #4CAF50;
                    color: white;
                }
                
                .fight-button {
                    background-color: #FF9800;
                    color: white;
                }
                
                .abort-button {
                    background-color: #f44336;
                    color: white;
                    margin-top: 20px;
                }
                
                .game-id-input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                }
                
                .game-lobby {
                    text-align: center;
                }
                
                .players-section {
                    margin: 20px 0;
                }
                
                .player-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin: 10px 0;
                }
                
                .player {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
                
                .ready-status.ready {
                    color: #4CAF50;
                    font-weight: bold;
                }
                
                .ready-status.not-ready {
                    color: #f44336;
                }
                
                .starting-message {
                    color: #4CAF50;
                    font-weight: bold;
                    font-size: 18px;
                    margin-top: 20px;
                }
                
                .waiting-section {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 8px;
                }
                
                .game-controls {
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                }
                
                .game-started {
                    text-align: center;
                }
                
                .game-fighting {
                    text-align: center;
                }
                
                .game-info {
                    margin-bottom: 20px;
                    font-size: 18px;
                }
                
                .countdown-timer {
                    background-color: #fff3cd;
                    border: 2px solid #ffeaa7;
                    border-radius: 10px;
                    padding: 15px;
                    margin: 20px 0;
                }
                
                .countdown-timer h3 {
                    color: #d35400;
                    margin: 0 0 10px 0;
                    font-size: 24px;
                }
                
                .restart-button {
                    background-color: #27ae60;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-right: 10px;
                    transition: background-color 0.3s;
                }
                
                .restart-button:hover {
                    background-color: #219a52;
                }
                
                .fight-button {
                    background-color: #e74c3c;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-right: 10px;
                    transition: background-color 0.3s;
                }
                
                .fight-button:hover {
                    background-color: #c0392b;
                }
                
                .animation-status {
                    background-color: #e8f5e8;
                    border: 2px solid #4CAF50;
                    border-radius: 10px;
                    padding: 15px;
                    margin: 15px 0;
                }
                
                .winner-announcement {
                    background-color: #fff9c4;
                    border: 3px solid #f39c12;
                    border-radius: 15px;
                    padding: 20px;
                    margin: 20px 0;
                    text-align: center;
                }
                
                .winner-announcement h3 {
                    color: #d35400;
                    margin: 0 0 10px 0;
                    font-size: 24px;
                }
                
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                
                button:hover:not(:disabled) {
                    opacity: 0.8;
                }
            `})]})};function kV(){const[i,e]=it.useState(null),[t,s]=it.useState(null),[a,l]=it.useState(!0);it.useEffect(()=>{const d=hP($u,async m=>{if(e(m),m){const g=await Ff(m.uid);s(g)}else s(null);l(!1)});return()=>d()},[]);const c=async d=>{const m=await Ff(d);s(m)};return a?$.jsx("div",{children:"Loading..."}):$.jsx("div",{children:i?$.jsxs("div",{children:[$.jsxs("div",{children:["Welcome, ",t||i.email,"!"]}),$.jsx("button",{onClick:()=>$u.signOut(),children:"Logout"}),$.jsx(MV,{})]}):$.jsx(bV,{onAuthSuccess:c})})}i1.createRoot(document.getElementById("root")).render($.jsx(it.StrictMode,{children:$.jsx(kV,{})}));
